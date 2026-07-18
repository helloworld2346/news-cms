import type { NotificationItem } from "../types";

export function getNotifications(): NotificationItem[] {
  return [
    {
      title: "Thông báo nghỉ lễ 30/04 và 01/05/2026",
      date: "15/05/2026",
      dept: "Phòng Hậu cần",
    },
    {
      title: "Thông báo về việc khám sức khỏe định kỳ năm 2026",
      date: "15/05/2026",
      dept: "Phòng Quân y",
    },
    {
      title: "Thông báo họp giao ban tháng 5/2026",
      date: "14/05/2026",
      dept: "Phòng Tham mưu",
    },
    {
      title: "Thông báo tổ chức diễn tập phòng cháy chữa cháy",
      date: "13/05/2026",
      dept: "Phòng Hậu cần",
    },
    {
      title: "Thông báo cập nhật phần mềm quản lý văn bản",
      date: "13/05/2026",
      dept: "Phòng Kỹ thuật",
    },
  ];
}
