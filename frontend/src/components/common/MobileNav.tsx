import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { navItems } from "./nav-items";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Đóng menu" : "Mở menu"}
        aria-expanded={open}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md hover:bg-slate-100"
      >
        <span
          className={cn(
            "block h-0.5 w-6 rounded-full bg-slate-700 transition-transform duration-300",
            open && "translate-y-[7px] rotate-45",
          )}
        />
        <span
          className={cn(
            "block h-0.5 w-6 rounded-full bg-slate-700 transition-opacity duration-300",
            open && "opacity-0",
          )}
        />
        <span
          className={cn(
            "block h-0.5 w-6 rounded-full bg-slate-700 transition-transform duration-300",
            open && "-translate-y-[7px] -rotate-45",
          )}
        />
      </button>

      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-slate-900/50 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <nav
        className={cn(
          "fixed right-0 top-0 z-40 flex h-full w-72 max-w-[80vw] flex-col gap-1 bg-white p-4 pt-20 shadow-xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              cn(
                "rounded-md px-4 py-3 text-sm font-semibold tracking-wide transition-colors",
                isActive
                  ? "bg-accent/10 text-accent"
                  : "text-slate-700 hover:bg-slate-100 hover:text-primary",
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
