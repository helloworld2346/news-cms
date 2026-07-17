import { Search, Bell, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.png";

const navItems = [
  { to: "/", label: "TRANG CHỦ", end: true },
  { to: "/tin-tuc", label: "TIN TỨC" },
  { to: "/van-ban", label: "VĂN BẢN" },
  { to: "/thu-vien-so", label: "THƯ VIỆN SỐ" },
  { to: "/media", label: "MEDIA" },
  { to: "/lich-cong-tac", label: "LỊCH CÔNG TÁC" },
  { to: "/thong-bao", label: "THÔNG BÁO" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-6">
        {/* Logo + brand (trái) */}
        <div className="flex shrink-0 items-center gap-3">
          <img
            src={logo}
            alt="Logo Sư đoàn"
            className="h-12 w-12 object-contain"
          />
          <div className="leading-tight">
            <div className="text-lg font-bold tracking-wide text-primary">
              TRANG TIN TỨC SƯ ĐOÀN
            </div>
            <div className="text-xs text-slate-500">
              Cổng thông tin điện tử nội bộ
            </div>
          </div>
        </div>

        {/* Menu (giữa) */}
        <nav className="flex flex-1 items-center justify-center gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "relative py-1 text-sm font-semibold tracking-wide text-slate-700 transition-colors hover:text-primary",
                  isActive &&
                    "text-accent after:absolute after:-bottom-[26px] after:left-0 after:h-0.5 after:w-full after:bg-accent",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions (phải) */}
        <div className="flex shrink-0 items-center gap-4">
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
          <button className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-100">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              A
            </span>
            <span className="text-sm font-medium text-slate-700">
              Quản trị viên
            </span>
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </button>
        </div>
      </div>
    </header>
  );
}
