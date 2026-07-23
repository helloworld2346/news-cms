import type { QuickAccessItem } from "../types";

export function getQuickAccess(): QuickAccessItem[] {
  return [
    {
      key: "news",
      label: "Tin tức",
      to: "/tin-tuc/quan-khu-su-doan",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      key: "about",
      label: "Giới thiệu",
      to: "/gioi-thieu/lich-su-su-doan-5",
      bg: "bg-emerald-50",
      text: "text-emerald-500",
    },
    {
      key: "library",
      label: "Thư viện số",
      to: "/thu-vien-so/dung-chung",
      bg: "bg-violet-50",
      text: "text-violet-500",
    },
    {
      key: "training",
      label: "Huấn luyện",
      to: "/huan-luyen/ke-hoach",
      bg: "bg-amber-50",
      text: "text-amber-500",
    },
    {
      key: "digital",
      label: "Chuyển đổi số",
      to: "/chuyen-doi-so/binh-dan-hoc-vu-so",
      bg: "bg-cyan-50",
      text: "text-cyan-500",
    },
    {
      key: "media",
      label: "Video - Hình ảnh",
      to: "/media",
      bg: "bg-pink-50",
      text: "text-pink-500",
    },
  ];
}
