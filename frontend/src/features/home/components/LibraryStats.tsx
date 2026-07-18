import {
  FileText,
  FileType,
  Sheet,
  Presentation,
  BookOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useLibraryStats } from "../hooks/useHomeData";  

const iconMap: Record<string, LucideIcon> = {
  pdf: FileText,
  word: FileType,
  excel: Sheet,
  ppt: Presentation,
  ebook: BookOpen,
};

export default function LibraryStats() {
  const { data: stats = [] } = useLibraryStats(); 
  return (
    <div>
      <SectionHeading title="Thư viện số" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {stats.map(({ key, label, count, color }) => {
          const Icon = iconMap[key];
          return (
            <div
              key={key}
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
          );
        })}
      </div>
    </div>
  );
}
