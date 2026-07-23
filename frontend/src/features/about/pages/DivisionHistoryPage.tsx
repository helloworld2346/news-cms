import {
  ShieldCheck,
  Swords,
  Award as AwardIcon,
  CheckCircle2,
} from "lucide-react";
import {
  useHistoryMilestones,
  useBattleHonors,
  useAwards,
  useModernPillars,
} from "../hooks/useAboutData";
import anhHero from "@/assets/images/hero.jpg";
import anhKyNiem from "@/assets/images/lekyniem2311.jpg";
import anhHuyChuong from "@/assets/images/lenhanhuychuong.jpg";

export default function DivisionHistoryPage() {
  const { data: milestones = [] } = useHistoryMilestones();
  const { data: battles = [] } = useBattleHonors();
  const { data: awards = [] } = useAwards();
  const { data: pillars = [] } = useModernPillars();

  return (
    <article className="mx-auto max-w-5xl px-6 py-10 md:px-8">
      {/* Hero bài viết */}
      <header className="relative isolate overflow-hidden rounded-xl bg-primary text-primary-foreground shadow-sm">
        <img
          src={anhHero}
          alt="Sư đoàn 5"
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40"
        />
        <div className="relative z-10 p-8 md:p-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground/80">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            Giới thiệu
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            Lịch sử truyền thống vẻ vang Sư đoàn 5 - Quân khu 7 (1965 - 2026)
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold italic text-yellow-400 md:text-base">
            “Đoàn kết trung dũng, cơ động linh hoạt, tự lực tự cường, đánh thắng
            mọi kẻ thù”
          </p>
        </div>
        <div
          aria-hidden="true"
          className="relative z-10 h-1 w-full bg-accent"
        />
      </header>

      {/* 1. Lời giới thiệu chung */}
      <section className="mt-10 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
        <p className="text-lg font-semibold text-primary">
          Sư đoàn Bộ binh 5 - lá cờ đầu trong phong trào thi đua quyết thắng của
          lực lượng vũ trang Quân khu 7, là một trong hai sư đoàn chủ lực đầu
          tiên ra đời trên chiến trường miền Đông Nam Bộ khốc liệt trong thời kỳ
          kháng chiến chống Mỹ, cứu nước.
        </p>
        <p>
          Trải qua hơn 6 thập kỷ xây dựng, chiến đấu và trưởng thành, Sư đoàn 5
          đã trở thành biểu tượng sáng ngời của chủ nghĩa anh hùng cách mạng,
          của tình đoàn kết quốc tế trong sáng và ý chí quyết chiến, quyết
          thắng. Dưới sự lãnh đạo tuyệt đối, trực tiếp về mọi mặt của Đảng, cùng
          sự đùm bọc của nhân dân, các thế hệ cán bộ, chiến sĩ Sư đoàn đã lập
          nên những chiến công hiển hách.
        </p>
      </section>

      {/* Ảnh lớn minh hoạ */}
      <figure className="mt-8">
        <img
          src={anhKyNiem}
          alt="Đại tướng Nguyễn Trọng Nghĩa và Thượng tướng Nguyễn Trường Thắng cùng các đại biểu đến dự lễ. (Ảnh: QDND.vn)"
          className="h-96 w-full object-cover shadow-sm md:h-[36rem]"
        />
        <figcaption className="mt-2 text-center text-xs italic text-slate-500">
          Đại tướng Nguyễn Trọng Nghĩa và Thượng tướng Nguyễn Trường Thắng cùng
          các đại biểu đến dự lễ. (Ảnh: QDND.vn)
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

      {/* 3. Những chiến thắng vang dội + ảnh */}
      <section className="mt-12">
        <h2 className="border-l-4 border-accent pl-3 text-xl font-bold uppercase text-primary">
          Những chiến thắng vang dội
        </h2>
        <figure className="mt-8">
          <img
            src={anhHuyChuong}
            alt="Chiến công Sư đoàn 5"
            className="mt-5 h-96 w-full object-cover shadow-sm md:h-[36rem]"
          />
          <figcaption className="mt-2 text-center text-xs italic text-slate-500">
            Thiếu tướng Du Trường Giang thừa ủy quyền của Chủ tịch nước trao
            tặng Huân chương Bảo vệ Tổ quốc hạng Nhì cho Bộ Chỉ huy Sư đoàn 5.
          </figcaption>
        </figure>
        <ul className="mt-6 space-y-4">
          {battles.map((b) => (
            <li key={b.name} className="flex gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-accent">
                <Swords className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-primary">{b.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{b.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. Huân chương, danh hiệu */}
      <section className="mt-12">
        <h2 className="border-l-4 border-accent pl-3 text-xl font-bold uppercase text-primary">
          Huân chương &amp; danh hiệu
        </h2>
        <ul className="mt-6 space-y-4">
          {awards.map((a) => (
            <li key={a.title} className="flex gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                <AwardIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-primary">{a.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{a.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Xây dựng đơn vị thời kỳ mới */}
      <section className="mt-12">
        <h2 className="border-l-4 border-accent pl-3 text-xl font-bold uppercase text-primary">
          Xây dựng đơn vị trong thời kỳ mới
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-sm font-bold text-primary">{p.title}</h3>
              <ul className="mt-3 space-y-2">
                {p.points.map((pt) => (
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

      {/* 6. Lời kết */}
      <section className="mt-12 rounded-xl border border-slate-200 bg-surface p-6 md:p-8">
        <p className="text-[15px] leading-relaxed text-slate-700 md:text-base">
          Phát huy truyền thống 6 thập kỷ xây dựng, chiến đấu và trưởng thành,
          cán bộ, chiến sĩ Sư đoàn Bộ binh 5 nguyện một lòng tuyệt đối trung
          thành với Đảng, với Tổ quốc và nhân dân; đoàn kết một lòng, chủ động
          sáng tạo, tự lực tự cường, tô thắm thêm truyền thống vẻ vang, xứng
          đáng là bức tường thành vững chắc của khu vực phòng thủ miền Đông Nam
          Bộ.
        </p>
        <p className="mt-4 text-center text-base font-semibold italic text-primary">
          “Đoàn kết trung dũng, cơ động linh hoạt, tự lực tự cường, đánh thắng
          mọi kẻ thù”
        </p>
      </section>
    </article>
  );
}
