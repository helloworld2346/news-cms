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
  LayoutGrid,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getQuickAccess } from "../services/quickAccessService";

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
  all: LayoutGrid,
};

export default function QuickAccess() {
  const items = getQuickAccess();
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 lg:grid-cols-10">
      {items.map(({ key, label, color }) => {
        const Icon = iconMap[key];
        return (
          <a
            key={key}
            href="#"
            className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:shadow-md"
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full ${color} text-white`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-xs font-medium text-slate-700">{label}</span>
          </a>
        );
      })}
    </div>
  );
}
