import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRoles, useRoleMutations } from "@/features/role/hooks/useRoles";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Tối thiểu 2 ký tự"),
  description: z.string().optional(),
});
type FormValues = z.infer<typeof schema>;

export default function RolesPage() {
  const { data, isLoading } = useRoles();
  const { create, remove } = useRoleMutations();
  const { register, handleSubmit, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", description: "" },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Quản lý vai trò</h1>

      <form
        onSubmit={handleSubmit((v) =>
          create.mutate(
            { ...v, description: v.description ?? "" },
            { onSuccess: () => reset() },
          ),
        )}
        className="grid grid-cols-1 gap-3 rounded-md border p-4 md:grid-cols-3"
      >
        <input
          className="rounded border px-3 py-2"
          placeholder="Tên vai trò"
          {...register("name")}
        />
        <input
          className="rounded border px-3 py-2"
          placeholder="Mô tả"
          {...register("description")}
        />
        <Button type="submit" disabled={create.isPending}>
          Thêm
        </Button>
      </form>

      {isLoading ? (
        <p>Đang tải...</p>
      ) : (
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="py-2">ID</th>
              <th>Tên</th>
              <th>Mô tả</th>
              <th>Quyền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((r) => (
              <tr key={r.id} className="border-b">
                <td className="py-2">{r.id}</td>
                <td>{r.name}</td>
                <td>{r.description}</td>
                <td>{r.permissions?.join(", ")}</td>
                <td>
                  <Button variant="ghost" onClick={() => remove.mutate(r.id)}>
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
