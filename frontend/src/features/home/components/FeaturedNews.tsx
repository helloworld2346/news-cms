import { ArrowUpRight } from "lucide-react";
import { useFeaturedMain, useFeaturedSide } from "../hooks/useHomeData";

export default function FeaturedNews() {
  const { data: main } = useFeaturedMain();
  const { data: side = [] } = useFeaturedSide();
  if (!main) return null;
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* tin lớn */}
      <article className="group relative h-full min-h-[20rem] overflow-hidden rounded-lg border border-slate-200 shadow-sm">
        {/* ảnh phủ toàn khung */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
          Ảnh tin nổi bật
        </div>
        {/* lớp gradient tối để chữ dễ đọc */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {/* nội dung đè lên ảnh, bám đáy */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <span className="mb-2 inline-block rounded bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">
            TIN NỔI BẬT
          </span>
          <h3 className="text-lg font-bold text-white">{main.title}</h3>
          <p className="mt-2 text-sm text-white/80">{main.desc}</p>
          <span className="mt-2 block text-xs text-white/60">{main.date}</span>
        </div>
      </article>
      {/* 3 tin nhỏ */}
      <div className="flex flex-col gap-4">
        {side.map((s) => (
          <article
            key={s.title}
            className="group flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-24 w-32 shrink-0 items-center justify-center overflow-hidden rounded-md bg-slate-200 text-xs text-slate-400">
              Ảnh
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="line-clamp-2 text-sm font-bold text-slate-800 group-hover:text-accent">
                {s.title}
              </h4>
              <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                <span>{s.date}</span>
                <span>·</span>
                <span>{s.dept}</span>
              </div>
              <p className="mt-1 line-clamp-2 text-xs text-slate-600">
                {s.desc}
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-accent" />
          </article>
        ))}
      </div>
    </div>
  );
}
