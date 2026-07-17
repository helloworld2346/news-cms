import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SecurityBanner() {
  return (
    <section className="relative overflow-hidden rounded-lg bg-primary text-primary-foreground">
      <div className="flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <ShieldCheck className="h-10 w-10 shrink-0 text-accent" />
          <div>
            <h3 className="text-xl font-bold">An toàn thông tin</h3>
            <p className="mt-1 max-w-xl text-sm text-primary-foreground/70">
              Tuân thủ quy định bảo mật, bảo vệ dữ liệu nội bộ. Không chia sẻ
              tài khoản, không truy cập tài nguyên ngoài mạng LAN.
            </p>
          </div>
        </div>
        <Button variant="accent" size="lg">
          Xem hướng dẫn bảo mật
        </Button>
      </div>
    </section>
  );
}
