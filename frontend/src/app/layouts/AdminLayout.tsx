import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-primary p-4 text-primary-foreground">
        Sidebar (Admin — placeholder)
      </aside>
      <div className="flex-1">
        <header className="border-b bg-white px-6 py-3">Admin Topbar</header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
