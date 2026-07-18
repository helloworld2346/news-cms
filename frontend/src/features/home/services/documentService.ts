import type { DocumentItem } from "../types";

export function getDocuments(): DocumentItem[] {
  return [
    {
      name: "Công văn số 1256/CV-CT về việc triển khai kế hoạch huấn luyện năm 2026",
      type: "PDF",
      size: "125 KB",
      date: "15/05/2026",
      dept: "Phòng Tham mưu",
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      name: "Quyết định số 789/QĐ-ĐU về việc kiện toàn tổ chức Đảng",
      type: "DOC",
      size: "210 KB",
      date: "15/05/2026",
      dept: "Ban Tổ chức",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      name: "Kế hoạch số 456/KH-HC về công tác hậu cần năm 2026",
      type: "XLS",
      size: "320 KB",
      date: "15/05/2026",
      dept: "Phòng Hậu cần",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      name: "Báo cáo tổng kết công tác 6 tháng đầu năm 2026",
      type: "PPT",
      size: "1.2 MB",
      date: "14/05/2026",
      dept: "Phòng Chính trị",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      name: "Nghị quyết số 101/NQ-ĐU về phương hướng nhiệm vụ 6 tháng cuối năm 2026",
      type: "PPT",
      size: "180 KB",
      date: "14/05/2026",
      dept: "Ban Thường vụ",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];
}
