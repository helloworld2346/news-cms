import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/features/auth/hooks/useLogin";

const schema = z.object({
  username: z.string().min(1, "Vui lòng nhập tên đăng nhập"),
  password: z.string().min(1, "Vui lòng nhập mật khẩu"),
});

type FormValues = z.infer<typeof schema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const loginMutation = useLogin();

  const onSubmit = (values: FormValues) => loginMutation.mutate(values);

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm space-y-4 rounded-lg border bg-white p-8 shadow-sm"
      >
        <div className="mb-2 text-center text-xl font-bold text-primary">
          Đăng nhập hệ thống
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Tên đăng nhập</label>
          <Input placeholder="admin" {...register("username")} />
          {errors.username && (
            <p className="text-xs text-accent">{errors.username.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Mật khẩu</label>
          <Input
            type="password"
            placeholder="••••••"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs text-accent">{errors.password.message}</p>
          )}
        </div>

        {loginMutation.isError && (
          <p className="text-sm text-accent">
            {(loginMutation.error as Error).message}
          </p>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending ? "Đang đăng nhập..." : "Đăng nhập"}
        </Button>
      </form>
    </div>
  );
}
