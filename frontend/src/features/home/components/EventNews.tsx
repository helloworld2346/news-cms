import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useEventNews } from "../hooks/useHomeData";
import type { EventNewsCategory } from "../types";

function EventNewsBlock({ cat }: { cat: EventNewsCategory }) {
  return (
    <section>
      {/* tiêu đề mục căn giữa, chữ đỏ */}
      <div className="mb-5 text-center">
        <h2 className="inline-block text-xl font-bold uppercase text-primary">
          {cat.label}
        </h2>
        <div className="mx-auto mt-2 h-0.5 w-24 bg-primary" />
      </div>

      {/* hàng trên: 2 thẻ lớn */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {cat.big.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            className="group relative min-h-[18rem] overflow-hidden rounded-lg border border-slate-200 shadow-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              {item.desc && (
                <p className="mt-2 line-clamp-2 text-sm text-white/80">
                  {item.desc}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* hàng dưới: 3 thẻ nhỏ */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cat.small.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            className="group overflow-hidden rounded-lg border border-slate-200 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="h-40 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-start justify-between gap-2 p-4">
              <h4 className="line-clamp-2 text-sm font-bold text-slate-800 group-hover:text-accent">
                {item.title}
              </h4>
              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 group-hover:text-accent" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function EventNews() {
  const { data: categories = [] } = useEventNews();
  if (categories.length === 0) return null;
  return (
    <div className="space-y-12">
      {categories.map((cat) => (
        <EventNewsBlock key={cat.to} cat={cat} />
      ))}
    </div>
  );
}
