import { ShieldCheck, Swords, CheckCircle2 } from "lucide-react";
import {
  useRegiment271Facts,
  useRegiment271Milestones,
  useRegiment271Battles,
  useRegiment271Political,
} from "../hooks/useRegiment271Data";
import anhHero from "@/assets/images/csme271.jpg";
import anhIntro from "@/assets/images/sscde271.jpg";
import anhBattle from "@/assets/images/e271ahllvt.jpg";
import { usePageTitle } from "@/components/common/page-title-context";

export default function Regiment271HistoryPage() {
  usePageTitle("Trung đoàn 271 (Sư đoàn 5): 77 năm một chặng đường vẻ vang");
  const { data: facts = [] } = useRegiment271Facts();
  const { data: milestones = [] } = useRegiment271Milestones();
  const { data: battles = [] } = useRegiment271Battles();
  const { data: political = [] } = useRegiment271Political();

  return (
    <article className="mx-auto max-w-5xl px-6 py-10 md:px-8">
      {/* Hero bài viết */}
      <header className="relative isolate overflow-hidden rounded-xl bg-primary text-primary-foreground shadow-sm">
        <img
          src={anhHero}
          alt="Trung đoàn 271"
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40"
        />
        <div className="relative z-10 p-8 md:p-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground/80">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            Giới thiệu · Trung đoàn 271
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            Trung đoàn 271 (Sư đoàn 5): 77 năm một chặng đường vẻ vang
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm font-semibold italic text-yellow-400 md:text-base">
            “Tích cực chủ động, khắc phục khó khăn, tự lực tự cường, chiến đấu
            dũng cảm, đoàn kết tốt, kỷ luật nghiêm, tiến bộ vững chắc”
          </p>
        </div>
        <div
          aria-hidden="true"
          className="relative z-10 h-1 w-full bg-accent"
        />
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

      {/* 1. Lời giới thiệu chung */}
      <section className="mt-10 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
        <p className="text-lg font-semibold text-primary">
          Trung đoàn 271 (Sư đoàn 5) là một trong những trung đoàn chủ lực đầu
          tiên của Quân đội Nhân dân Việt Nam, được thành lập ngày 18/12/1947
          tại chiến trường cực Nam Trung Bộ, tiền thân là Trung đoàn 812.
        </p>
        <p>
          Trải qua 77 năm xây dựng, chiến đấu và trưởng thành (18/12/1947 -
          18/12/2024), với những chiến công, thành tích đạt được, Trung đoàn
          được Đảng, Nhà nước tặng thưởng danh hiệu Anh hùng LLVT Nhân dân trong
          chiến đấu và trong thời kỳ đổi mới, cùng nhiều phần thưởng cao quý.
        </p>
      </section>

      {/* Ảnh lớn minh hoạ */}
      <figure className="mt-8">
        <img
          src={anhIntro}
          alt="Trung đoàn 271"
          className="h-96 w-full object-cover shadow-sm md:h-[36rem]"
        />
        <figcaption className="mt-2 text-center text-xs italic text-slate-500">
          Đoàn công tác báo động sẵn sàng chiến đấu tại Trung đoàn 271.
        </figcaption>
      </figure>

      {/* 2. Timeline lịch sử - một cột */}
      <section className="mt-12">
        <h2 className="border-l-4 border-accent pl-3 text-xl font-bold uppercase text-primary">
          Dấu mốc lịch sử
        </h2>
        <ol className="relative mt-6 border-l-2 border-slate-200 pl-6">
          {milestones.map((m) => (
            <li key={m.year} className="relative pb-8 last:pb-0">
              <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-white" />
              <div className="text-sm font-bold text-accent">{m.year}</div>
              <h3 className="mt-1 text-base font-semibold text-primary">
                {m.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600">{m.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 3. Chiến công tiêu biểu + ảnh */}
      <section className="mt-12">
        <h2 className="border-l-4 border-accent pl-3 text-xl font-bold uppercase text-primary">
          Chiến công tiêu biểu
        </h2>
        <figure className="mt-8">
          <img
            src={anhBattle}
            alt="Chiến công Trung đoàn 271"
            className="h-96 w-full object-cover shadow-sm md:h-[36rem]"
          />
          <figcaption className="mt-2 text-center text-xs italic text-slate-500">
            Trung đoàn 271 nhận danh hiệu Anh hùng LLVT Nhân dân.
          </figcaption>
        </figure>
        <ol className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {battles.map((b, i) => (
            <li
              key={b.name}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-4 text-7xl font-black text-accent/10"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-accent">
                <Swords className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-primary">
                {b.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {b.desc}
              </p>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform group-hover:scale-x-100"
              />
            </li>
          ))}
        </ol>
      </section>

      {/* 4. Công tác chính trị & huấn luyện */}
      <section className="mt-12">
        <h2 className="border-l-4 border-accent pl-3 text-xl font-bold uppercase text-primary">
          Công tác chính trị &amp; nâng cao chất lượng huấn luyện
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {political.map((blk) => (
            <div
              key={blk.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-sm font-bold text-primary">{blk.title}</h3>
              <ul className="mt-3 space-y-2">
                {blk.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Lời kết */}
      <section className="mt-12 rounded-xl border border-slate-200 bg-surface p-6 md:p-8">
        <p className="text-[15px] leading-relaxed text-slate-700 md:text-base">
          Phát huy truyền thống 77 năm của đơn vị hai lần Anh hùng, cán bộ,
          chiến sĩ Trung đoàn 271 tiếp tục xây dựng Đảng bộ trong sạch vững mạnh
          “gương mẫu, tiêu biểu”, đơn vị vững mạnh toàn diện “mẫu mực, tiêu
          biểu”, góp phần cùng toàn Đảng, toàn dân, toàn quân xây dựng và bảo vệ
          vững chắc Tổ quốc Việt Nam XHCN.
        </p>
        <p className="mt-4 text-center text-base font-semibold italic text-primary">
          “Tích cực chủ động, khắc phục khó khăn, tự lực tự cường, chiến đấu
          dũng cảm, đoàn kết tốt, kỷ luật nghiêm, tiến bộ vững chắc”
        </p>
      </section>
    </article>
  );
}
