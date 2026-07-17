import { Routes, Route } from "react-router-dom";
import PublicLayout from "@/app/layouts/PublicLayout";
import AdminLayout from "@/app/layouts/AdminLayout";
import AuthGuard from "@/app/guards/AuthGuard";
import HomePage from "@/features/home/pages/HomePage";
import LoginPage from "@/features/auth/pages/LoginPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

function Placeholder({ title }: { title: string }) {
  return <div className="p-6">{title}</div>;
}

export default function AppRouter() {
  return (
    <Routes>
      {/* Public portal */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/tin-tuc" element={<Placeholder title="Tin tức" />} />
        <Route path="/van-ban" element={<Placeholder title="Văn bản" />} />
        <Route
          path="/thu-vien-so"
          element={<Placeholder title="Thư viện số" />}
        />
        <Route path="/media" element={<Placeholder title="Media" />} />
        <Route
          path="/lich-cong-tac"
          element={<Placeholder title="Lịch công tác" />}
        />
        <Route path="/thong-bao" element={<Placeholder title="Thông báo" />} />
      </Route>

      {/* Auth */}
      <Route path="/login" element={<LoginPage />} />

      {/* Admin (yêu cầu đăng nhập) */}
      <Route element={<AuthGuard />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route
        path="*"
        element={<Placeholder title="404 — Không tìm thấy trang" />}
      />
    </Routes>
  );
}
