import { PlayCircle } from "lucide-react";
import { useMediaVideos, useMediaImages } from "../hooks/useMediaData";

export default function MediaPage() {
  const { data: videos = [] } = useMediaVideos();
  const { data: images = [] } = useMediaImages();

  return (
    <div className="mx-auto max-w-screen-2xl space-y-12 px-6 py-10 md:px-8">
      <h1 className="text-2xl font-bold text-primary">Video - Hình ảnh</h1>

      {/* Video */}
      <section>
        <div className="mb-4 flex items-center justify-between border-b-2 border-primary pb-2">
          <h2 className="text-lg font-bold uppercase text-primary">
            Video nổi bật
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <div
              key={v.title}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative flex aspect-video items-center justify-center bg-slate-800">
                <PlayCircle className="h-12 w-12 text-white/80" />
                <span className="absolute bottom-2 right-2 rounded bg-black/60 px-1.5 py-0.5 text-xs text-white">
                  {v.duration}
                </span>
              </div>
              <div className="p-3 text-sm font-medium text-slate-800">
                {v.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hình ảnh */}
      <section>
        <div className="mb-4 flex items-center justify-between border-b-2 border-primary pb-2">
          <h2 className="text-lg font-bold uppercase text-primary">
            Hình ảnh hoạt động
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((img) => (
            <div
              key={img.title}
              className="flex aspect-square items-center justify-center rounded-lg bg-slate-200 text-xs text-slate-400"
            >
              {img.title}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
