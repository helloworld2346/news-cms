import { FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";

const latestNews = [
  {
    title: "Sư đoàn tổ chức diễn tập hiệp đồng",
    date: "17/07/2026",
    dept: "Phòng Tham mưu",
  },
  {
    title: "Gặp mặt cán bộ hưu trí nhân dịp lễ",
    date: "16/07/2026",
    dept: "Phòng Chính trị",
  },
  {
    title: "Kiểm tra công tác hậu cần quý III",
    date: "15/07/2026",
    dept: "Phòng Hậu cần",
  },
  {
    title: "Bồi dưỡng nghiệp vụ cho cán bộ trẻ",
    date: "14/07/2026",
    dept: "Phòng Chính trị",
  },
  {
    title: "Hội thao chào mừng ngày truyền thống",
    date: "13/07/2026",
    dept: "Ban TDTT",
  },
];

const documents = [
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

const notifications = [
  { title: "Lịch trực chỉ huy tuần 29", date: "17/07/2026" },
  { title: "Thông báo họp giao ban tháng", date: "16/07/2026" },
  { title: "Kế hoạch kiểm tra đột xuất", date: "15/07/2026" },
  { title: "Thông báo nghỉ lễ", date: "14/07/2026" },
  { title: "Triệu tập tập huấn nghiệp vụ", date: "13/07/2026" },
];

const schedule = [
  { time: "07:30", title: "Giao ban chỉ huy", day: "Thứ 2" },
  { time: "09:00", title: "Kiểm tra huấn luyện", day: "Thứ 3" },
  { time: "14:00", title: "Họp Đảng uỷ", day: "Thứ 4" },
  { time: "08:00", title: "Diễn tập hiệp đồng", day: "Thứ 5" },
  { time: "15:30", title: "Sơ kết tuần", day: "Thứ 6" },
];

export default function InfoColumns() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {/* Tin mới nhất */}
      <div>
        <SectionHeading title="Tin mới nhất" />
        <ul className="space-y-3">
          {latestNews.map((n) => (
            <li key={n.title} className="border-b border-slate-100 pb-2">
              <a
                href="#"
                className="text-sm font-medium text-slate-800 hover:text-accent"
              >
                {n.title}
              </a>
              <div className="mt-1 flex justify-between text-xs text-slate-400">
                <span>{n.dept}</span>
                <span>{n.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Văn bản mới */}
      <div>
        <SectionHeading title="Văn bản mới" />
        <ul className="space-y-3">
          {documents.map((d) => (
            <li
              key={d.name}
              className="flex items-center gap-3 border-b border-slate-100 pb-2"
            >
              <FileText className={`h-6 w-6 shrink-0 ${d.color}`} />
              <div className="min-w-0 flex-1">
                <a
                  href="#"
                  className="block truncate text-sm font-medium text-slate-800 hover:text-accent"
                >
                  {d.name}
                </a>
                <span className="text-xs text-slate-400">
                  {d.type} · {d.size}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Thông báo */}
      <div>
        <SectionHeading title="Thông báo" />
        <ul className="space-y-3">
          {notifications.map((n) => (
            <li key={n.title} className="border-b border-slate-100 pb-2">
              <a
                href="#"
                className="text-sm font-medium text-slate-800 hover:text-accent"
              >
                {n.title}
              </a>
              <span className="mt-1 block text-xs text-slate-400">
                {n.date}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Lịch công tác */}
      <div>
        <SectionHeading title="Lịch công tác" />
        <ul className="space-y-3">
          {schedule.map((s) => (
            <li
              key={s.title}
              className="flex gap-3 border-b border-slate-100 pb-2"
            >
              <div className="flex w-14 shrink-0 flex-col items-center rounded bg-primary/5 py-1 text-center">
                <span className="text-xs font-bold text-primary">{s.day}</span>
                <span className="text-xs text-slate-500">{s.time}</span>
              </div>
              <span className="text-sm font-medium text-slate-800">
                {s.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
