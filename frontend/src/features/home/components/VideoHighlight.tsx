import { PlayCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

const videos = [
  { title: "Phóng sự: Ngày truyền thống Sư đoàn" },
  { title: "Huấn luyện dã ngoại 2026" },
  { title: "Giao lưu văn nghệ quân dân" },
];

export default function VideoHighlight() {
  return (
    <div>
      <SectionHeading title="Video nổi bật" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {videos.map((v) => (
          <div
            key={v.title}
            className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
          >
            <div className="relative flex aspect-video items-center justify-center bg-slate-800">
              <PlayCircle className="h-12 w-12 text-white/80" />
            </div>
            <div className="p-3 text-sm font-medium text-slate-800">
              {v.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
