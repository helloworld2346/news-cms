import type { NotificationItem } from "../types";

export function getNotifications(): NotificationItem[] {
  return [
    { title: "Lịch trực chỉ huy tuần 29", date: "17/07/2026" },
    { title: "Thông báo họp giao ban tháng", date: "16/07/2026" },
    { title: "Kế hoạch kiểm tra đột xuất", date: "15/07/2026" },
    { title: "Thông báo nghỉ lễ", date: "14/07/2026" },
    { title: "Triệu tập tập huấn nghiệp vụ", date: "13/07/2026" },
  ];
}
