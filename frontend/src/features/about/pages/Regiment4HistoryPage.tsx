import { ShieldCheck, Flag, Swords, CheckCircle2 } from "lucide-react";
import {
  useRegiment4Facts,
  useRegiment4Milestones,
  useRegiment4Battles,
  useRegiment4Political,
} from "../hooks/useRegiment4Data";
import anhHero from "@/assets/images/td4hero.jpg";
import anhIntro from "@/assets/images/anhmau2.jpg";
import anhBattle from "@/assets/images/anhmau3.jpeg";

export default function Regiment4HistoryPage() {
  const { data: facts = [] } = useRegiment4Facts();
  const { data: milestones = [] } = useRegiment4Milestones();
  const { data: battles = [] } = useRegiment4Battles();
  const { data: political = [] } = useRegiment4Political();

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-10 md:px-8">
      {/* Hero dạng split: ảnh trái, tiêu đề phải */}
      <header className="grid grid-cols-1 gap-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:grid-cols-2">
        <img
          src={anhHero}
          alt="Trung đoàn 4"
          className="h-64 w-full object-cover md:h-full"
        />
        <div className="flex flex-col justify-center p-8 md:p-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            <ShieldCheck className="h-3.5 w-3.5" />
            Giới thiệu · Trung đoàn 4
          </div>
          <h1 className="mt-4 text-2xl font-bold leading-tight text-primary md:text-3xl">
            Trung đoàn 4 (Sư đoàn 5): Kiên cường bám trụ, lẫy lừng chiến công
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Trải qua hơn 61 năm xây dựng, chiến đấu và trưởng thành (03/02/1965
            - nay), các thế hệ cán bộ, chiến sĩ Trung đoàn 4 luôn đoàn kết, giữ
            vững ý chí quyết tâm cao, lập nên nhiều chiến công hiển hách trong
            chiến đấu bảo vệ Tổ quốc, làm nhiệm vụ quốc tế và xây dựng Quân đội
            trong giai đoạn mới.
          </p>
        </div>
      </header>

      {/* Dải fact/số liệu */}
      <section className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-slate-200 bg-primary p-6 text-primary-foreground md:grid-cols-4">
        {facts.map((f) => (
          <div key={f.label} className="text-center">
            <div className="text-xl font-bold text-yellow-400 md:text-2xl">
              {f.value}
            </div>
            <div className="mt-1 text-xs text-primary-foreground/80">
              {f.label}
            </div>
          </div>
        ))}
      </section>

      {/* Bố cục 2 cột: nội dung chính + sidebar dấu mốc */}
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Cột chính */}
        <div className="lg:col-span-2">
          {/* Chiến công zig-zag */}
          <section>
            <h2 className="border-l-4 border-accent pl-3 text-xl font-bold uppercase text-primary">
              Chiến công tiêu biểu
            </h2>
            <img
              src={anhBattle}
              alt="Chiến công Trung đoàn 4"
              className="mt-6 h-72 w-full rounded-lg object-cover shadow-sm"
            />
            <ul className="mt-6 space-y-5">
              {battles.map((b, i) => (
                <li
                  key={b.name}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-accent">
                    <Swords className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-0.5 text-base font-bold text-primary">
                      {b.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {b.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Công tác chính trị & huấn luyện */}
          <section className="mt-12">
            <h2 className="border-l-4 border-accent pl-3 text-xl font-bold uppercase text-primary">
              Công tác chính trị & nâng cao chất lượng huấn luyện
            </h2>
            <figure className="mt-6">
              <img
                src={anhIntro}
                alt="Công tác chính trị Trung đoàn 4"
                className="h-72 w-full rounded-lg object-cover shadow-sm"
              />
            </figure>
            <div className="mt-6 space-y-5">
              {political.map((blk) => (
                <div
                  key={blk.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-sm font-bold text-primary">
                    {blk.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {blk.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar dấu mốc (sticky trên desktop) */}
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <h2 className="flex items-center gap-2 border-l-4 border-accent pl-3 text-xl font-bold uppercase text-primary">
              <Flag className="h-5 w-5 text-accent" />
              Dấu mốc
            </h2>
            <ol className="relative mt-6 border-l-2 border-slate-200 pl-6">
              {milestones.map((m) => (
                <li key={m.year} className="relative pb-6 last:pb-0">
                  <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-white" />
                  <div className="text-sm font-bold text-accent">{m.year}</div>
                  <h3 className="mt-1 text-sm font-semibold text-primary">
                    {m.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{m.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
}
