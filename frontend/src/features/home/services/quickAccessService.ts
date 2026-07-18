import type { QuickAccessItem } from "../types";

export function getQuickAccess(): QuickAccessItem[] {
  return [
    { key: "news", label: "Tin tức", color: "bg-blue-500" },
    { key: "document", label: "Văn bản", color: "bg-emerald-500" },
    { key: "library", label: "Thư viện số", color: "bg-violet-500" },
    { key: "media", label: "Media", color: "bg-pink-500" },
    { key: "calendar", label: "Lịch công tác", color: "bg-amber-500" },
    { key: "bell", label: "Thông báo", color: "bg-red-500" },
    { key: "help", label: "Hỏi đáp", color: "bg-cyan-500" },
    { key: "form", label: "Biểu mẫu", color: "bg-teal-500" },
    { key: "contact", label: "Danh bạ", color: "bg-indigo-500" },
    { key: "all", label: "Tất cả", color: "bg-slate-500" },
  ];
}
