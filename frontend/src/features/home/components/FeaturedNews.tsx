import { ArrowUpRight } from "lucide-react";
import { useFeaturedMain, useFeaturedSide } from "../hooks/useHomeData";
import anhMau1 from "@/assets/images/anhmau1.png";
import anhMau3 from "@/assets/images/anhmau3.jpeg";

export default function FeaturedNews() {
  const { data: main } = useFeaturedMain();
  const { data: side = [] } = useFeaturedSide();
  if (!main) return null;
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* tin lớn */}
      <article className="group relative h-full min-h-[26rem] overflow-hidden rounded-lg border border-slate-200 shadow-sm">
        <img
          src={anhMau3}
          alt={main.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
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
            className="group flex flex-1 items-stretch gap-4 overflow-hidden rounded-lg transition-shadow hover:shadow-md"
          >
            {/* ảnh tràn sát mép trái + cao bằng card */}
            <img
              src={anhMau1}
              alt={s.title}
              className="w-48 shrink-0 self-stretch object-cover rounded-lg"
            />
            <div className="min-w-0 flex-1 py-3">
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
            <ArrowUpRight className="mr-3 mt-3 h-4 w-4 shrink-0 text-slate-400 group-hover:text-accent" />
          </article>
        ))}
      </div>
    </div>
  );
}
