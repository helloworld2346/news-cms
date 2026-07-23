import { Routes, Route } from "react-router-dom";
import PublicLayout from "@/app/layouts/PublicLayout";
import HomePage from "@/features/home/pages/HomePage";
import MediaPage from "@/features/media/pages/MediaPage";  


function Placeholder({ title }: { title: string }) {
  return <div className="p-6">{title}</div>;
}

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/media" element={<MediaPage />} />

        {/* Giới thiệu */}
        <Route
          path="/gioi-thieu/lich-su-su-doan-5"
          element={<Placeholder title="Lịch sử Sư đoàn 5" />}
        />
        <Route
          path="/gioi-thieu/lich-su-trung-doan-4"
          element={<Placeholder title="Lịch sử Trung đoàn 4" />}
        />
        <Route
          path="/gioi-thieu/lich-su-trung-doan-5"
          element={<Placeholder title="Lịch sử Trung đoàn 5" />}
        />
        <Route
          path="/gioi-thieu/lich-su-trung-doan-271"
          element={<Placeholder title="Lịch sử Trung đoàn 271" />}
        />

        {/* Tin tức sự kiện */}
        <Route
          path="/tin-tuc/quan-khu-su-doan"
          element={<Placeholder title="Tin tức quân khu & sư đoàn" />}
        />
        <Route
          path="/tin-tuc/quan-doi"
          element={<Placeholder title="Tin tức quân đội" />}
        />
        <Route
          path="/tin-tuc/the-gioi"
          element={<Placeholder title="Tin thế giới" />}
        />
        <Route
          path="/tin-tuc/trong-nuoc"
          element={<Placeholder title="Tin tức trong nước" />}
        />

        {/* Thư viện số */}
        <Route
          path="/thu-vien-so/dung-chung"
          element={<Placeholder title="Dữ liệu dùng chung" />}
        />
        <Route
          path="/thu-vien-so/dung-rieng"
          element={<Placeholder title="Dữ liệu dùng riêng" />}
        />

        {/* Huấn luyện chiến đấu */}
        <Route
          path="/huan-luyen/ke-hoach"
          element={<Placeholder title="Kế hoạch huấn luyện" />}
        />
        <Route
          path="/huan-luyen/chuong-trinh"
          element={<Placeholder title="Chương trình huấn luyện" />}
        />
        <Route
          path="/huan-luyen/mau-bieu-bao-cao"
          element={<Placeholder title="Mẫu biểu báo cáo huấn luyện" />}
        />
        <Route
          path="/huan-luyen/tai-lieu"
          element={<Placeholder title="Tài liệu huấn luyện" />}
        />

        {/* Chuyển đổi số */}
        <Route
          path="/chuyen-doi-so/binh-dan-hoc-vu-so"
          element={<Placeholder title="Bình dân học vụ số" />}
        />
        <Route
          path="/chuyen-doi-so/phat-trien-khoa-hoc-cong-nghe"
          element={
            <Placeholder title="Phát triển KHCN, đổi mới sáng tạo, chuyển đổi số" />
          }
        />
      </Route>
    </Routes>
  );
}
