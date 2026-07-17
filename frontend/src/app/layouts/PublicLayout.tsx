import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b bg-white px-6 py-4 font-semibold text-primary">
        NEWS-CMS (Public — placeholder)
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mt-12 bg-primary px-6 py-6 text-sm text-primary-foreground">
        © 2026 NEWS-CMS
      </footer>
    </div>
  );
}
