import type { DocumentItem } from "../types";

export function getDocuments(): DocumentItem[] {
  return [
    {
      name: "Kế hoạch huấn luyện năm 2026",
      type: "PDF",
      size: "125 KB",
      color: "text-red-600",
    },
    {
      name: "Báo cáo tổng kết quý II",
      type: "DOC",
      size: "210 KB",
      color: "text-blue-600",
    },
    {
      name: "Bảng thống kê quân số",
      type: "XLS",
      size: "320 KB",
      color: "text-emerald-600",
    },
    {
      name: "Bài giảng chính trị",
      type: "PPT",
      size: "1.2 MB",
      color: "text-orange-600",
    },
    {
      name: "Quy định nội bộ mới",
      type: "PDF",
      size: "180 KB",
      color: "text-red-600",
    },
  ];
}
