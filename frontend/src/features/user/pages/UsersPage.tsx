import { useState } from "react";
import { useUsers, useUserMutations } from "@/features/user/hooks/useUsers";
import { useRoles } from "@/features/role/hooks/useRoles";
import { Button } from "@/components/ui/button";
import type { User } from "@/features/user/types";
import type { Role } from "@/features/role/types";

export default function UsersPage() {
  const { data, isLoading } = useUsers();
  const { remove, assignRoles } = useUserMutations();
  const { data: roles } = useRoles();

  const [assignFor, setAssignFor] = useState<number | null>(null);
  const [selected, setSelected] = useState<number[]>([]);

  const users: User[] = data?.items ?? [];
  const roleList: Role[] = roles ?? [];

  const openAssign = (userId: number, currentRoleIds: number[]) => {
    setAssignFor(userId);
    setSelected(currentRoleIds);
  };

  const toggle = (id: number) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  const saveAssign = () => {
    if (assignFor == null) return;
    assignRoles.mutate(
      { id: assignFor, roleIds: selected },
      { onSuccess: () => setAssignFor(null) },
    );
  };

  if (isLoading) return <div className="p-6">Đang tải...</div>;

  return (
    <div className="p-6">
      <h1 className="mb-4 text-xl font-semibold">Người dùng</h1>

      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b">
            <th className="py-2">ID</th>
            <th>Username</th>
            <th>Họ tên</th>
            <th>Vai trò</th>
            <th className="text-right">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-b">
              <td className="py-2">{u.id}</td>
              <td>{u.username}</td>
              <td>{u.full_name}</td>
              <td>{(u.roles ?? []).join(", ")}</td>
              <td className="space-x-2 text-right">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    openAssign(
                      u.id,
                      roleList
                        .filter((r) => (u.roles ?? []).includes(r.name))
                        .map((r) => r.id),
                    )
                  }
                >
                  Gán vai trò
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => remove.mutate(u.id)}
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
          <div className="w-80 rounded-lg bg-white p-4 shadow-lg">
            <h2 className="mb-3 font-semibold">Gán vai trò</h2>
            <div className="max-h-60 space-y-2 overflow-y-auto">
              {roleList.map((r) => (
                <label key={r.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(r.id)}
                    onChange={() => toggle(r.id)}
                  />
                  {r.name}
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
                disabled={assignRoles.isPending}
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
