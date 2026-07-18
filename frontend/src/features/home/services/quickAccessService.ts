import type { QuickAccessItem } from "../types";

export function getQuickAccess(): QuickAccessItem[] {
  return [
    { key: "news", label: "Tin tức", bg: "bg-blue-50", text: "text-blue-500" },
    {
      key: "document",
      label: "Văn bản",
      bg: "bg-emerald-50",
      text: "text-emerald-500",
    },
    {
      key: "library",
      label: "Thư viện số",
      bg: "bg-violet-50",
      text: "text-violet-500",
    },
    { key: "media", label: "Media", bg: "bg-pink-50", text: "text-pink-500" },
    {
      key: "calendar",
      label: "Lịch công tác",
      bg: "bg-amber-50",
      text: "text-amber-500",
    },
    { key: "bell", label: "Thông báo", bg: "bg-red-50", text: "text-red-500" },
    { key: "help", label: "Hỏi đáp", bg: "bg-cyan-50", text: "text-cyan-500" },
    { key: "form", label: "Biểu mẫu", bg: "bg-teal-50", text: "text-teal-500" },
    {
      key: "contact",
      label: "Danh bạ",
      bg: "bg-indigo-50",
      text: "text-indigo-500",
    },
    { key: "all", label: "Tất cả", bg: "bg-slate-100", text: "text-slate-500" },
  ];
}