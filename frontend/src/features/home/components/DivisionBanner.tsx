import { ShieldCheck, Star } from "lucide-react";

export default function DivisionBanner() {
  return (
    <section className="relative isolate overflow-hidden rounded-xl bg-primary text-primary-foreground shadow-sm">
      {/* nền lưới mờ tái dùng của hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url("/backgrounds/hero-grid.svg")` }}
      />
      {/* vệt sáng chéo trang trí */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 z-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-10 text-center md:flex-row md:gap-8 md:px-12 md:py-12 md:text-left">
        {/* phù hiệu dựng bằng code */}
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-accent bg-primary shadow-lg">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
            <Star className="h-9 w-9 fill-current text-primary-foreground" />
          </div>
        </div>

        {/* nội dung */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            Cổng thông tin điện tử
          </div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Sư đoàn 5</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base font-semibold italic text-yellow-400 md:mx-0 md:text-lg">
            “Đoàn kết trung dũng, cơ động linh hoạt, tự lực tự cường, đánh thắng
            mọi kẻ thù”
          </p>
        </div>
      </div>

      {/* dải đỏ dưới cùng */}
      <div aria-hidden="true" className="relative z-10 h-1 w-full bg-accent" />
    </section>
  );
}
