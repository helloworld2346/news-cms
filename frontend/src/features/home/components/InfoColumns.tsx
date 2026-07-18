import { FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { getLatestNews } from "../services/newsService";
import { getDocuments } from "../services/documentService";
import { getNotifications } from "../services/notificationService";
import { getSchedule } from "../services/scheduleService";

export default function InfoColumns() {
  const latestNews = getLatestNews();
  const documents = getDocuments();
  const notifications = getNotifications();
  const schedule = getSchedule();
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
