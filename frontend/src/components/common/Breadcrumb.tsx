import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { navItems } from "./nav-items";

interface Crumb {
  label: string;
  to?: string; // không có to = chặng cuối hoặc nhóm cha không điều hướng
}

// Suy ra danh sách chặng từ pathname dựa trên navItems
function getCrumbs(pathname: string): Crumb[] {
  for (const item of navItems) {
    // khớp mục phẳng (vd TRANG CHỦ) — bỏ qua ở đây vì "/" không hiện breadcrumb
    if (item.children) {
      const child = item.children.find((c) => c.to === pathname);
      if (child) {
        return [
          { label: item.label }, // nhóm cha: không có route -> không click
          { label: child.label }, // mục con: chặng cuối
        ];
      }
    }
  }
  return [];
}

export default function Breadcrumb() {
  const { pathname } = useLocation();

  // Không hiển thị ở trang chủ
  if (pathname === "/") return null;

  const crumbs = getCrumbs(pathname);
  if (crumbs.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-screen-2xl items-center gap-2 px-6 py-3 text-sm md:px-8">
        <Link
          to="/"
          className="flex items-center gap-1 text-slate-500 transition-colors hover:text-primary"
        >
          <Home className="h-4 w-4" />
          Trang chủ
        </Link>

        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <span key={c.label} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 shrink-0 text-slate-300" />
              {c.to && !isLast ? (
                <Link
                  to={c.to}
                  className="text-slate-500 transition-colors hover:text-primary"
                >
                  {c.label}
                </Link>
              ) : (
                <span
                  className={
                    isLast ? "font-semibold text-primary" : "text-slate-500"
                  }
                  aria-current={isLast ? "page" : undefined}
                >
                  {c.label}
                </span>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
