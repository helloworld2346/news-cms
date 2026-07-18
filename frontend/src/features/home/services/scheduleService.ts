import type { ScheduleItem } from "../types";

export function getSchedule(): ScheduleItem[] {
  return [
    { time: "07:30", title: "Giao ban chỉ huy", day: "Thứ 2" },
    { time: "09:00", title: "Kiểm tra huấn luyện", day: "Thứ 3" },
    { time: "14:00", title: "Họp Đảng uỷ", day: "Thứ 4" },
    { time: "08:00", title: "Diễn tập hiệp đồng", day: "Thứ 5" },
    { time: "15:30", title: "Sơ kết tuần", day: "Thứ 6" },
  ];
}
