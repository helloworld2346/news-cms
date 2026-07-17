import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewsletterForm() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm">
      <Mail className="mx-auto h-10 w-10 text-primary" />
      <h3 className="mt-3 text-xl font-bold text-primary">
        Đăng ký nhận bản tin nội bộ
      </h3>
      <p className="mt-1 text-sm text-slate-600">
        Nhận thông báo mới nhất qua hệ thống nội bộ.
      </p>
      <form className="mx-auto mt-4 flex max-w-md items-center gap-2">
        <input
          type="text"
          placeholder="Tên đăng nhập / mã cán bộ"
          className="h-11 flex-1 rounded-md border border-slate-300 px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <Button className="h-11">Đăng ký</Button>
      </form>
    </section>
  );
}
