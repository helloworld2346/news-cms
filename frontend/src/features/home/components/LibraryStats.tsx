import {
  FileText,
  FileType,
  Sheet,
  Presentation,
  BookOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

const stats: {
  icon: LucideIcon;
  label: string;
  count: number;
  color: string;
}[] = [
  { icon: FileText, label: "PDF", count: 128, color: "bg-red-500" },
  { icon: FileType, label: "Word", count: 96, color: "bg-blue-500" },
  { icon: Sheet, label: "Excel", count: 54, color: "bg-emerald-500" },
  {
    icon: Presentation,
    label: "PowerPoint",
    count: 37,
    color: "bg-orange-500",
  },
  { icon: BookOpen, label: "Ebook", count: 21, color: "bg-violet-500" },
];

export default function LibraryStats() {
  return (
    <div>
      <SectionHeading title="Thư viện số" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {stats.map(({ icon: Icon, label, count, color }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full ${color} text-white`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold text-slate-800">{count}</span>
            <span className="text-xs text-slate-500">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
