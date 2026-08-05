// frontend/src/components/common/Header.tsx
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.png";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { usePageTitleValue } from "./page-title-context";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const pageTitle = usePageTitleValue();
  const showTitle = scrolled && !!pageTitle;

  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <header className="contents">
      <div
        ref={bannerRef}
        className="sticky top-0 z-50 bg-accent text-accent-foreground shadow-sm xl:static xl:z-auto xl:shadow-none"
      >
        <div className="relative flex h-20 items-center justify-center px-4 md:px-8">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Sư đoàn"
              className="h-16 w-16 shrink-0 object-contain"
            />
            <div className="text-center leading-tight">
              <div className="text-2xl font-bold tracking-wide md:text-4xl">
                SƯ ĐOÀN 5
              </div>
            </div>
          </div>

          <div className="absolute right-4 flex items-center gap-2 md:right-8">
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
      </div>
      <div
        className={cn(
          "sticky top-0 z-40 hidden border-t transition-all duration-300 xl:block",
          showTitle
            ? "border-slate-200 bg-white text-slate-700 shadow-md shadow-slate-300/50"
            : "border-white/20 bg-accent text-accent-foreground shadow-sm",
        )}
      >
        <DesktopNav compact={scrolled} title={showTitle ? pageTitle : null} />
      </div>
    </header>
  );
}
