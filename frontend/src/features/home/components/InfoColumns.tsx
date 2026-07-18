import { Bell } from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  useLatestNews,
  useDocuments,
  useNotifications,
  useSchedule,
  useScheduleDate,
} from "../hooks/useHomeData";

export default function InfoColumns() {
  const { data: latestNews = [] } = useLatestNews();
  const { data: documents = [] } = useDocuments();
  const { data: notifications = [] } = useNotifications();
  const { data: schedule = [] } = useSchedule();
  const { data: scheduleDate } = useScheduleDate();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {/* Tin mới nhất */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <SectionHeading title="Tin mới nhất" />
        <ul className="space-y-3">
          {latestNews.map((n) => (
            <li
              key={n.title}
              className="flex items-start gap-3 border-b border-slate-100 pb-3 last:border-0"
            >
              <img
                src={n.thumbnail}
                alt={n.title}
                className="h-14 w-14 shrink-0 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <a
                  href="#"
                  className="line-clamp-2 text-sm font-medium text-slate-800 hover:text-accent"
                >
                  {n.title}
                </a>
                <div className="mt-1 flex items-center justify-between text-xs text-slate-400">
                  <span>{n.date}</span>
                  <span className="truncate pl-2">{n.dept}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Văn bản mới */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <SectionHeading title="Văn bản mới" />
        <ul className="space-y-3">
          {documents.map((d) => (
            <li
              key={d.name}
              className="flex items-start gap-3 border-b border-slate-100 pb-3 last:border-0"
            >
              <div
                className={`flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg ${d.bg} ${d.color}`}
              >
                <span className="text-[10px] font-bold leading-none">
                  {d.type}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <a
                  href="#"
                  className="line-clamp-2 text-sm font-medium text-slate-800 hover:text-accent"
                >
                  {d.name}
                </a>
                <div className="mt-1 flex items-center justify-between text-xs text-slate-400">
                  <span className="truncate">
                    {d.date} · {d.dept}
                  </span>
                  <span className="shrink-0 pl-2">{d.size}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Thông báo */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <SectionHeading title="Thông báo" />
        <ul className="space-y-3">
          {notifications.map((n) => (
            <li
              key={n.title}
              className="flex items-start gap-3 border-b border-slate-100 pb-3 last:border-0"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-accent">
                <Bell className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <a
                  href="#"
                  className="line-clamp-2 text-sm font-medium text-slate-800 hover:text-accent"
                >
                  {n.title}
                </a>
                <div className="mt-1 text-xs text-slate-400">
                  {n.date} · {n.dept}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Lịch công tác */}
      <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <SectionHeading title="Lịch công tác" />
        <div className="flex items-start gap-4">
          {/* ô ngày */}
          {scheduleDate && (
            <div className="flex w-16 shrink-0 flex-col items-center rounded-lg bg-primary/5 py-3 text-center">
              <span className="text-[11px] font-semibold uppercase text-slate-500">
                {scheduleDate.weekday}
              </span>
              <span className="text-2xl font-bold text-primary">
                {scheduleDate.day}
              </span>
              <span className="text-[11px] text-slate-500">
                {scheduleDate.month}
              </span>
            </div>
          )}
          {/* timeline */}
          <ul className="relative flex-1 space-y-4 border-l border-slate-200 pl-4">
            {schedule.map((s) => (
              <li key={s.title} className="relative">
                <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                <div className="text-xs font-semibold text-slate-500">
                  {s.time}
                </div>
                <div className="text-sm font-medium text-slate-800">
                  {s.title}
                </div>
                <div className="text-xs text-slate-400">{s.dept}</div>
              </li>
            ))}
          </ul>
        </div>
        <button className="mt-4 w-full rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50">
          Xem lịch tháng
        </button>
      </div>
    </div>
  );
}
