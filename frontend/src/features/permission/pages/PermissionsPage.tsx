import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  usePermissions,
  usePermissionMutations,
} from "@/features/permission/hooks/usePermissions";
import { Button } from "@/components/ui/button";

const schema = z.object({
  code: z.string().min(3, "vd: user.create"),
  name: z.string().min(2, "Tên quyền"),
});
type FormValues = z.infer<typeof schema>;

export default function PermissionsPage() {
  const { data, isLoading } = usePermissions();
  const { create, remove } = usePermissionMutations();
  const { register, handleSubmit, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { code: "", name: "" },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Quản lý quyền</h1>

      <form
        onSubmit={handleSubmit((v) =>
          create.mutate(v, { onSuccess: () => reset() }),
        )}
        className="grid grid-cols-1 gap-3 rounded-md border p-4 md:grid-cols-3"
      >
        <input
          className="rounded border px-3 py-2"
          placeholder="Code (user.create)"
          {...register("code")}
        />
        <input
          className="rounded border px-3 py-2"
          placeholder="Tên quyền"
          {...register("name")}
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
              <th>Code</th>
              <th>Tên</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="py-2">{p.id}</td>
                <td>{p.code}</td>
                <td>{p.name}</td>
                <td>
                  <Button variant="ghost" onClick={() => remove.mutate(p.id)}>
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
