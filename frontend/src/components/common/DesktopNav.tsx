import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "./nav-items";

const linkBase =
  "relative whitespace-nowrap py-7 text-sm font-semibold tracking-wide transition-colors";
const underline =
  "after:absolute after:inset-x-0 after:bottom-5 after:h-0.5 after:bg-accent after:transition-transform";

export default function DesktopNav() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav className="hidden flex-1 items-center justify-center gap-5 xl:flex 2xl:gap-6">
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
                "flex items-center gap-1 text-slate-700 hover:text-primary after:scale-x-0",
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
                openIndex === i ? "visible opacity-100" : "invisible opacity-0",
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
                  ? "text-accent after:scale-x-100"
                  : "text-slate-700 hover:text-primary after:scale-x-0",
              )
            }
          >
            {item.label}
          </NavLink>
        ),
      )}
    </nav>
  );
}
