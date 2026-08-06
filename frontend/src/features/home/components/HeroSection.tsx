import SearchBar from "./SearchBar";
import subBanner from "@/assets/images/subbanner.png";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/backgrounds/hero-grid.svg")` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-24 bg-gradient-to-b from-transparent to-surface"
      />

      {/* Tiêu đề + ô tìm kiếm (giữ hẹp) */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-24 pb-10 text-center">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">
          Cổng thông tin điện tử Sư đoàn 5
        </h1>
        <p className="mt-3 text-slate-600">
          Tìm kiếm thông tin, văn bản và tài liệu nội bộ nhanh chóng
        </p>
        <div className="mt-8">
          <SearchBar />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-6 md:px-8">
        <img
          src={subBanner}
          alt="Sư đoàn 5"
          className="w-full rounded-lg object-cover shadow-sm"
        />
      </div>
    </section>
  );
}
