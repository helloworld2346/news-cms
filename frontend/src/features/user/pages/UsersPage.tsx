import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUsers, useUserMutations } from "@/features/user/hooks/useUsers";
import { Button } from "@/components/ui/button";

const schema = z.object({
  username: z.string().min(3, "Tối thiểu 3 ký tự"),
  password: z.string().min(6, "Tối thiểu 6 ký tự"),
  full_name: z.string().min(1, "Bắt buộc"),
  is_active: z.boolean(),
});
type FormValues = z.infer<typeof schema>;

export default function UsersPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useUsers(page);
  const { create, remove } = useUserMutations();

  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      is_active: true,
      username: "",
      password: "",
      full_name: "",
    },
  });

  const onSubmit = (values: FormValues) =>
    create.mutate(values, { onSuccess: () => reset() });

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Quản lý người dùng</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-3 rounded-md border p-4 md:grid-cols-5"
      >
        <input
          className="rounded border px-3 py-2"
          placeholder="Username"
          {...register("username")}
        />
        <input
          className="rounded border px-3 py-2"
          placeholder="Mật khẩu"
          type="password"
          {...register("password")}
        />
        <input
          className="rounded border px-3 py-2"
          placeholder="Họ tên"
          {...register("full_name")}
        />
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" {...register("is_active")} /> Kích hoạt
        </label>
        <Button type="submit" disabled={create.isPending}>
          Thêm
        </Button>
        {formState.errors.username && (
          <p className="col-span-full text-sm text-red-600">
            {formState.errors.username.message}
          </p>
        )}
      </form>

      {isLoading ? (
        <p>Đang tải...</p>
      ) : (
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="py-2">ID</th>
              <th>Username</th>
              <th>Họ tên</th>
              <th>Vai trò</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.items.map((u) => (
              <tr key={u.id} className="border-b">
                <td className="py-2">{u.id}</td>
                <td>{u.username}</td>
                <td>{u.full_name}</td>
                <td>{u.roles.join(", ")}</td>
                <td>{u.is_active ? "Active" : "Inactive"}</td>
                <td>
                  <Button variant="ghost" onClick={() => remove.mutate(u.id)}>
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="flex gap-2">
        <Button
          variant="outline"
          disabled={page <= 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Trước
        </Button>
        <Button variant="outline" onClick={() => setPage((p) => p + 1)}>
          Sau
        </Button>
      </div>
    </div>
  );
}
