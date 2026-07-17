const main = {
  title: "Hội nghị tổng kết công tác năm 2026 của Sư đoàn",
  desc: "Sáng nay, Sư đoàn tổ chức hội nghị tổng kết, đánh giá kết quả thực hiện nhiệm vụ và triển khai phương hướng năm mới.",
  date: "17/07/2026",
};

const side = [
  { title: "Đẩy mạnh phong trào thi đua quyết thắng", date: "16/07/2026" },
  {
    title: "Tăng cường công tác huấn luyện sẵn sàng chiến đấu",
    date: "15/07/2026",
  },
  { title: "Hoạt động đền ơn đáp nghĩa tại địa phương", date: "14/07/2026" },
];

export default function FeaturedNews() {
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
