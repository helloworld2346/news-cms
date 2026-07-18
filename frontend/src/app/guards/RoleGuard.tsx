import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

export default function RoleGuard({
  allowedRoles,
}: {
  allowedRoles: string[];
}) {
  const user = useAuthStore((s) => s.user);
  const ok = user?.roles.some((r) => allowedRoles.includes(r));
  return ok ? <Outlet /> : <Navigate to="/" replace />;
}
