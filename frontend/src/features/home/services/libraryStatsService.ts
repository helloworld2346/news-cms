import type { LibraryStatItem } from "../types";

export function getLibraryStats(): LibraryStatItem[] {
  return [
    { key: "pdf", label: "PDF", count: 128, color: "bg-red-500" },
    { key: "word", label: "Word", count: 96, color: "bg-blue-500" },
    { key: "excel", label: "Excel", count: 54, color: "bg-emerald-500" },
    { key: "ppt", label: "PowerPoint", count: 37, color: "bg-orange-500" },
    { key: "ebook", label: "Ebook", count: 21, color: "bg-violet-500" },
  ];
}
