// frontend/src/components/common/Footer.tsx
import { MapPin, Phone, Clock, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import { navItems } from "./nav-items";

// Lấy các nhóm có link con để dựng cột liên kết từ menu thật
const linkCols = navItems
  .filter((item) => item.children && item.children.length > 0)
  .slice(0, 3)
  .map((item) => ({
    title: item.label,
    links: item.children!.slice(0, 4),
  }));

export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground">
      {/* Dải accent trên cùng */}
      <div aria-hidden="true" className="h-1 w-full bg-accent" />

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo Sư đoàn 5"
                className="h-14 w-14 shrink-0 object-contain"
              />
              <div className="leading-tight">
                <div className="text-lg font-bold uppercase tracking-wide">
                  Sư đoàn 5
                </div>
                <div className="text-xs text-primary-foreground/70">
                  Quân khu 7
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Cổng thông tin điện tử Sư đoàn 5 - nơi cập nhật tin tức, lịch sử
              truyền thống và tài nguyên nội bộ của đơn vị.
            </p>

            {/* Liên hệ */}
            <ul className="mt-5 space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-accent" /> Địa chỉ nội
                bộ
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" /> 069 000 000
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-accent" /> 07:30 - 17:00
              </li>
            </ul>
          </div>

          {/* Cột liên kết từ menu thật */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {linkCols.map((col) => (
              <div key={col.title}>
                <div className="mb-4 text-sm font-semibold uppercase tracking-wide">
                  {col.title}
                </div>
                <ul className="space-y-2.5 text-sm text-primary-foreground/70">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <NavLink
                        to={l.to}
                        className="group inline-flex items-center gap-1 transition-colors hover:text-primary-foreground"
                      >
                        <ChevronRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5" />
                        <span>{l.label}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Thanh cuối */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Trang tin tức Sư đoàn 5 · Internal Use Only</div>
          <div className="flex gap-4">
            <a
              href="#"
              className="transition-colors hover:text-primary-foreground"
            >
              Điều khoản
            </a>
            <a
              href="#"
              className="transition-colors hover:text-primary-foreground"
            >
              Bảo mật
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
