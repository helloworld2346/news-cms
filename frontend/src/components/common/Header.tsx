import { Search, Bell, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.png";
import { navItems } from "./nav-items";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="flex h-20 items-center gap-4 px-4 md:gap-6 md:px-8">
        <div className="flex min-w-0 shrink items-center gap-3">
          <img
            src={logo}
            alt="Logo Sư đoàn"
            className="h-12 w-12 shrink-0 object-contain"
          />
          <div className="min-w-0 leading-tight">
            <div className="truncate text-lg font-bold tracking-wide text-primary">
              TRANG TIN TỨC SƯ ĐOÀN 5
            </div>
            <div className="truncate text-xs text-slate-500">
              Cổng thông tin điện tử
            </div>
          </div>
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-6 xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "relative whitespace-nowrap py-7 text-sm font-semibold tracking-wide transition-colors",
                  "after:absolute after:inset-x-0 after:bottom-5 after:h-0.5 after:bg-accent after:transition-transform",
                  isActive
                    ? "text-accent after:scale-x-100"
                    : "text-slate-700 hover:text-primary after:scale-x-0",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-0">
          <button
            className="rounded-full p-2 text-slate-600 hover:bg-slate-100"
            aria-label="Tìm kiếm"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            className="relative rounded-full p-2 text-slate-600 hover:bg-slate-100"
            aria-label="Thông báo"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
              3
            </span>
          </button>
          <button className="hidden items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-100 md:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              A
            </span>
            <span className="whitespace-nowrap text-sm font-medium text-slate-700">
              Quản trị viên
            </span>
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </button>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
