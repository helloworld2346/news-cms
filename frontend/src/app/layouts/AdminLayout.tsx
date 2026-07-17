import { Outlet } from "react-router-dom";
import { Menu, LogOut } from "lucide-react";
import Sidebar from "@/components/common/Sidebar";
import { useUiStore } from "@/store/uiStore";
import { useAuthStore } from "@/store/authStore";

export default function AdminLayout() {
  const toggleSidebar = useUiStore((s) => s.toggleSidebar);
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4">
          <button
            onClick={toggleSidebar}
            className="rounded-md p-2 text-slate-600 hover:bg-slate-100"
            aria-label="Thu gọn menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-700">
              {user?.full_name ?? "Quản trị viên"}
            </span>
            <button
              onClick={logout}
              className="flex items-center gap-1 rounded-md px-2 py-1 text-sm text-slate-600 hover:bg-slate-100"
            >
              <LogOut className="h-4 w-4" /> Đăng xuất
            </button>
          </div>
        </header>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
