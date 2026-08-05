// frontend/src/components/common/DesktopNav.tsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.png";
import { navItems } from "./nav-items";

const linkBase =
  "relative whitespace-nowrap py-4 text-sm font-semibold tracking-wide transition-colors";
const underline =
  "after:absolute after:inset-x-0 after:bottom-2 after:h-0.5 after:bg-white after:transition-transform";

type Props = { compact?: boolean; title?: string | null };

export default function DesktopNav({ compact = false, title = null }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const showTitle = !!title;

  return (
    <div className="relative">
      <div
        aria-hidden={!showTitle}
        className={cn(
          "absolute inset-0 z-10 mx-auto flex max-w-screen-2xl items-center gap-3 px-4 transition-all duration-300 ease-out md:px-8",
          showTitle
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <NavLink to="/" className="flex shrink-0 items-center gap-2">
          <img
            src={logo}
            alt="Logo Sư đoàn"
            className="h-9 w-9 object-contain"
          />
          <span className="whitespace-nowrap text-lg font-bold tracking-wide text-slate-700">
            Sư đoàn 5
          </span>
        </NavLink>
        <div className="flex-1 text-center">
          <h1 className="truncate text-base font-bold text-slate-700 md:text-base">
            {title}
          </h1>
        </div>
      </div>

      {/* Tabs điều hướng: mờ dần / trượt xuống khi hiện tiêu đề */}
      <nav
        className={cn(
          "mx-auto hidden max-w-screen-2xl items-center justify-center gap-5 px-4 transition-all duration-300 ease-out md:px-8 xl:flex 2xl:gap-6",
          showTitle
            ? "pointer-events-none translate-y-2 opacity-0"
            : "translate-y-0 opacity-100",
        )}
      >
        {/* Luôn render để có transition; ẩn/hiện + trượt vào khi compact */}
        <NavLink
          to="/"
          aria-hidden={!compact}
          tabIndex={compact ? 0 : -1}
          className={cn(
            "flex shrink-0 items-center gap-2 overflow-hidden transition-all duration-300 ease-out",
            compact
              ? "mr-4 max-w-xs translate-x-0 opacity-100"
              : "pointer-events-none mr-0 max-w-0 -translate-x-4 opacity-0",
          )}
        >
          <img
            src={logo}
            alt="Logo Sư đoàn"
            className={cn(
              "object-contain transition-all duration-300 ease-out",
              compact ? "h-9 w-9 scale-100" : "h-9 w-0 scale-90",
            )}
          />
          <span className="whitespace-nowrap text-lg font-bold tracking-wide text-white">
            Sư đoàn 5
          </span>
        </NavLink>

        {navItems.map((item, i) =>
          item.children ? (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenIndex(i)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className={cn(
                  linkBase,
                  underline,
                  "flex items-center gap-1 text-white hover:text-white/80 after:scale-x-0",
                )}
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    openIndex === i && "rotate-180",
                  )}
                />
              </button>

              <div
                className={cn(
                  "absolute left-1/2 top-full z-50 min-w-[16rem] -translate-x-1/2 rounded-lg border border-slate-200 bg-white py-2 shadow-lg transition",
                  openIndex === i
                    ? "visible opacity-100"
                    : "invisible opacity-0",
                )}
              >
                {item.children.map((child) => (
                  <NavLink
                    key={child.to}
                    to={child.to}
                    onClick={() => setOpenIndex(null)}
                    className={({ isActive }) =>
                      cn(
                        "block px-4 py-2.5 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-accent/10 text-accent"
                          : "text-slate-700 hover:bg-slate-50 hover:text-primary",
                      )
                    }
                  >
                    {child.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink
              key={item.to}
              to={item.to!}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  linkBase,
                  underline,
                  isActive
                    ? "text-white after:scale-x-100"
                    : "text-white hover:text-white/80 after:scale-x-0",
                )
              }
            >
              {item.label}
            </NavLink>
          ),
        )}
      </nav>
    </div>
  );
}
