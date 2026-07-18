import type { ScheduleItem, ScheduleDate } from "../types";

export function getScheduleDate(): ScheduleDate {
  return { weekday: "Thứ sáu", day: "16", month: "05/2026" };
}

export function getSchedule(): ScheduleItem[] {
  return [
    { time: "08:00", title: "Họp giao ban tuần", dept: "Phòng Tham mưu" },
    {
      time: "10:00",
      title: "Kiểm tra công tác hậu cần",
      dept: "Phòng Hậu cần",
    },
    { time: "14:00", title: "Tập huấn nghiệp vụ", dept: "Phòng Chính trị" },
    { time: "16:00", title: "Họp Ban Thường vụ", dept: "Ban Thường vụ" },
  ];
}
