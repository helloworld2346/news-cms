import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Newspaper,
  FolderTree,
  Image,
  FileText,
  Bell,
  GalleryHorizontalEnd,
  Users,
  Shield,
  KeyRound,
  ScrollText,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/store/uiStore";

const menu = [
  { label: "Dashboard", to: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Tin tức", to: "/admin/articles", icon: Newspaper },
  { label: "Danh mục", to: "/admin/categories", icon: FolderTree },
  { label: "Media", to: "/admin/media", icon: Image },
  { label: "Văn bản", to: "/admin/documents", icon: FileText },
  { label: "Thông báo", to: "/admin/notifications", icon: Bell },
  { label: "Banner", to: "/admin/banners", icon: GalleryHorizontalEnd },
  { label: "Người dùng", to: "/admin/users", icon: Users },
  { label: "Vai trò", to: "/admin/roles", icon: Shield },
  { label: "Phân quyền", to: "/admin/permissions", icon: KeyRound },
  { label: "Audit Log", to: "/admin/audit", icon: ScrollText },
  { label: "Cài đặt", to: "/admin/settings", icon: Settings },
];

export default function Sidebar() {
  const collapsed = useUiStore((s) => s.sidebarCollapsed);

  return (
    <aside
      className={cn(
        "flex flex-col bg-primary text-primary-foreground transition-all",
        collapsed ? "w-16" : "w-60",
      )}
    >
      <div className="flex h-14 items-center border-b border-white/10 px-4 font-bold">
        {collapsed ? "N" : "NEWS-CMS"}
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-2">
        {menu.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground",
                isActive && "bg-white/15 text-primary-foreground",
              )
            }
          >
            <Icon className="h-5 w-5 shrink-0" />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
