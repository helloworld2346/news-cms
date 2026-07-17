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

const items: { icon: LucideIcon; label: string; color: string }[] = [
  { icon: Newspaper, label: "Tin tức", color: "bg-blue-500" },
  { icon: FileText, label: "Văn bản", color: "bg-emerald-500" },
  { icon: Library, label: "Thư viện số", color: "bg-violet-500" },
  { icon: Image, label: "Media", color: "bg-pink-500" },
  { icon: Calendar, label: "Lịch công tác", color: "bg-amber-500" },
  { icon: Bell, label: "Thông báo", color: "bg-red-500" },
  { icon: HelpCircle, label: "Hỏi đáp", color: "bg-cyan-500" },
  { icon: ClipboardList, label: "Biểu mẫu", color: "bg-teal-500" },
  { icon: Contact, label: "Danh bạ", color: "bg-indigo-500" },
  { icon: LayoutGrid, label: "Tất cả", color: "bg-slate-500" },
];

export default function QuickAccess() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 lg:grid-cols-10">
      {items.map(({ icon: Icon, label, color }) => (
        <a
          key={label}
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
      ))}
    </div>
  );
}
