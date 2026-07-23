import {
  Newspaper,
  Info,
  Library,
  GraduationCap,
  Cpu,
  Image,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useQuickAccess } from "../hooks/useHomeData";

const iconMap: Record<string, LucideIcon> = {
  news: Newspaper,
  about: Info,
  library: Library,
  training: GraduationCap,
  digital: Cpu,
  media: Image,
};

const routeMap: Record<string, string> = {
  news: "/tin-tuc/quan-khu-su-doan",
  about: "/gioi-thieu/lich-su-su-doan-5",
  library: "/thu-vien-so/dung-chung",
  training: "/huan-luyen/ke-hoach",
  digital: "/chuyen-doi-so/binh-dan-hoc-vu-so",
  media: "/media",
};

export default function QuickAccess() {
  const { data: items = [] } = useQuickAccess();
  return (
    <div className="flex w-full flex-wrap items-start justify-around gap-1 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:gap-2 sm:p-4">
      {items.map(({ key, label, bg, text }, i) => {
        const Icon = iconMap[key];
        return (
          <Fragment key={key}>
            <Link
              to={routeMap[key] ?? "/"}
              className="flex w-[4.5rem] flex-col items-center gap-2 rounded-xl px-2 py-3 text-center transition hover:bg-slate-50 sm:w-24"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full ${bg} ${text}`}
              >
                <Icon className="h-6 w-6" />
              </span>
              <span className="text-xs font-medium text-slate-600">
                {label}
              </span>
            </Link>

            {i < items.length - 1 && (
              <span
                aria-hidden
                className="mx-1 h-14 w-px shrink-0 self-center bg-gradient-to-b from-transparent via-primary/30 to-transparent"
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
