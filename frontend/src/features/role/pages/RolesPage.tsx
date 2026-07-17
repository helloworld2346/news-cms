import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRoles, useRoleMutations } from "@/features/role/hooks/useRoles";
import { usePermissions } from "@/features/permission/hooks/usePermissions";
import { Button } from "@/components/ui/button";
import type { Role } from "@/features/role/types";
import type { Permission } from "@/features/permission/types";

const schema = z.object({
  name: z.string().min(2, "Tối thiểu 2 ký tự"),
  description: z.string().optional(),
});
type FormValues = z.infer<typeof schema>;

export default function RolesPage() {
  const { data, isLoading } = useRoles();
  const { create, remove, assignPermissions } = useRoleMutations();
  const { data: perms } = usePermissions();

  const { register, handleSubmit, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", description: "" },
  });

  const [assignFor, setAssignFor] = useState<number | null>(null);
  const [selected, setSelected] = useState<number[]>([]);

  const roleList: Role[] = data ?? [];
  const permList: Permission[] = perms ?? [];

  const openAssign = (roleId: number, currentPermIds: number[]) => {
    setAssignFor(roleId);
    setSelected(currentPermIds);
  };

  const toggle = (id: number) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  const saveAssign = () => {
    if (assignFor == null) return;
    assignPermissions.mutate(
      { id: assignFor, permissionIds: selected },
      { onSuccess: () => setAssignFor(null) },
    );
  };

  if (isLoading) return <div className="p-6">Đang tải...</div>;

  return (
    <div className="p-6">
      <h1 className="mb-4 text-xl font-semibold">Vai trò</h1>

      <form
        className="mb-6 flex gap-2"
        onSubmit={handleSubmit((v) =>
          create.mutate(
            { ...v, description: v.description ?? "" },
            { onSuccess: () => reset() },
          ),
        )}
      >
        <input
          className="rounded border px-2 py-1"
          placeholder="Tên vai trò"
          {...register("name")}
        />
        <input
          className="rounded border px-2 py-1"
          placeholder="Mô tả"
          {...register("description")}
        />
        <Button type="submit" size="sm">
          Thêm
        </Button>
      </form>

      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b">
            <th className="py-2">ID</th>
            <th>Tên</th>
            <th>Mô tả</th>
            <th className="text-right">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {roleList.map((r) => (
            <tr key={r.id} className="border-b">
              <td className="py-2">{r.id}</td>
              <td>{r.name}</td>
              <td>{r.description}</td>
              <td className="space-x-2 text-right">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    openAssign(
                      r.id,
                      (r.permissions ?? []).map((p) => p.id),
                    )
                  }
                >
                  Gán quyền
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600"
                  onClick={() => remove.mutate(r.id)}
                >
                  Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {assignFor != null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-96 rounded-lg bg-white p-4 shadow-lg">
            <h2 className="mb-3 font-semibold">Gán quyền</h2>
            <div className="max-h-72 space-y-2 overflow-y-auto">
              {permList.map((p) => (
                <label key={p.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(p.id)}
                    onChange={() => toggle(p.id)}
                  />
                  <span className="font-mono text-xs">{p.code}</span>
                  {p.name ? ` — ${p.name}` : ""}
                </label>
              ))}
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setAssignFor(null)}
              >
                Hủy
              </Button>
              <Button
                size="sm"
                onClick={saveAssign}
                disabled={assignPermissions.isPending}
              >
                Lưu
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
