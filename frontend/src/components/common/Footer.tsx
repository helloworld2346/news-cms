import { MapPin, Phone, Clock } from "lucide-react";

const linkCols = [
  {
    title: "LIÊN KẾT NHANH",
    links: ["Trang chủ", "Tin tức", "Văn bản", "Thư viện số"],
  },
  {
    title: "HỖ TRỢ",
    links: ["Hướng dẫn sử dụng", "Câu hỏi thường gặp", "Liên hệ hỗ trợ"],
  },
  {
    title: "TÀI NGUYÊN",
    links: ["Biểu mẫu", "Danh bạ", "Lịch công tác"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-3 text-lg font-bold">TRANG TIN TỨC SƯ ĐOÀN</div>
          <p className="text-sm text-primary-foreground/70">
            Cổng thông tin điện tử &amp; thư viện số nội bộ.
          </p>
        </div>

        {/* Link columns */}
        {linkCols.map((col) => (
          <div key={col.title}>
            <div className="mb-3 text-sm font-semibold">{col.title}</div>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-xs text-primary-foreground/70 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" /> Địa chỉ nội bộ
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-4 w-4" /> 069 000 000
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> 07:30 - 17:00
            </span>
          </div>
          <div>© 2026 Trang tin tức Sư đoàn · Internal Use Only</div>
        </div>
      </div>
    </footer>
  );
}
