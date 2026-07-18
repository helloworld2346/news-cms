import { useFeaturedMain, useFeaturedSide } from "../hooks/useHomeData";

export default function FeaturedNews() {
  const { data: main } = useFeaturedMain();
  const { data: side = [] } = useFeaturedSide();
  if (!main) return null;
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* tin lớn */}
      <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="flex aspect-video items-center justify-center bg-slate-200 text-slate-400">
          Ảnh tin nổi bật
        </div>
        <div className="p-4">
          <span className="mb-2 inline-block rounded bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">
            TIN NỔI BẬT
          </span>
          <h3 className="text-lg font-bold text-slate-800">{main.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{main.desc}</p>
          <span className="mt-2 block text-xs text-slate-400">{main.date}</span>
        </div>
      </article>
      {/* 3 tin nhỏ */}
      <div className="flex flex-col gap-4">
        {side.map((s) => (
          <article
            key={s.title}
            className="flex gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm"
          >
            <div className="flex h-20 w-28 shrink-0 items-center justify-center rounded bg-slate-200 text-xs text-slate-400">
              Ảnh
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-800">
                {s.title}
              </h4>
              <span className="mt-1 block text-xs text-slate-400">
                {s.date}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
