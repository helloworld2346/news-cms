import { Search, Bell, ChevronDown } from "lucide-react";
import logo from "@/assets/images/logo.png";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-accent text-accent-foreground shadow-sm">
      <div className="relative flex h-20 items-center justify-center px-4 md:px-8">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo Sư đoàn"
            className="h-16 w-16 shrink-0 object-contain"
          />
          <div className="text-center leading-tight">
            <div className="text-4xl font-bold tracking-wide md:text-4xl">
              Sư đoàn 5
            </div>
          </div>
        </div>

        <div className="absolute right-4 flex items-center gap-2 md:right-8">
          <button
            className="rounded-full p-2 text-white hover:bg-white/10"
            aria-label="Tìm kiếm"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            className="relative rounded-full p-2 text-white hover:bg-white/10"
            aria-label="Thông báo"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-accent">
              3
            </span>
          </button>
          <button className="hidden items-center gap-2 rounded-md px-2 py-1 hover:bg-white/10 md:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-accent">
              A
            </span>
            <span className="whitespace-nowrap text-sm font-medium text-white">
              Quản trị viên
            </span>
            <ChevronDown className="h-4 w-4 text-white/80" />
          </button>

          <MobileNav />
        </div>
      </div>

      <div className="hidden border-t border-white/20 xl:block">
        <DesktopNav />
      </div>
    </header>
  );
}
