import {
  Newspaper,
  FileText,
  Library,
  Image,
  Calendar,
  Bell,
  HelpCircle,
  ClipboardList,
  Contact,
  MoreHorizontal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useQuickAccess } from "../hooks/useHomeData";

const iconMap: Record<string, LucideIcon> = {
  news: Newspaper,
  document: FileText,
  library: Library,
  media: Image,
  calendar: Calendar,
  bell: Bell,
  help: HelpCircle,
  form: ClipboardList,
  contact: Contact,
  all: MoreHorizontal,
};

export default function QuickAccess() {
  const { data: items = [] } = useQuickAccess();
  return (
    <div className="flex flex-wrap items-start justify-between gap-1 rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:gap-2 sm:p-4">
      {items.map(({ key, label, bg, text }) => {
        const Icon = iconMap[key];
        return (
          <a
            key={key}
            href="#"
            className="flex w-[4.5rem] flex-col items-center gap-2 rounded-xl px-2 py-3 text-center transition hover:bg-slate-50 sm:w-24"
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full ${bg} ${text}`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-xs font-medium text-slate-600">{label}</span>
          </a>
        );
      })}
    </div>
  );
}
