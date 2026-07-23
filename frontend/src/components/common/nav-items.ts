export interface NavChild {
  to: string;
  label: string;
}

export interface NavItem {
  to?: string; // có thể không có nếu chỉ là nhóm mở dropdown
  label: string;
  end?: boolean;
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  { to: "/", label: "TRANG CHỦ", end: true },
  {
    label: "GIỚI THIỆU",
    children: [
      { to: "/gioi-thieu/lich-su-su-doan-5", label: "Lịch sử Sư đoàn 5" },
      { to: "/gioi-thieu/lich-su-trung-doan-4", label: "Lịch sử Trung đoàn 4" },
      { to: "/gioi-thieu/lich-su-trung-doan-5", label: "Lịch sử Trung đoàn 5" },
      {
        to: "/gioi-thieu/lich-su-trung-doan-271",
        label: "Lịch sử Trung đoàn 271",
      },
    ],
  },
  {
    label: "TIN TỨC SỰ KIỆN",
    children: [
      { to: "/tin-tuc/quan-khu-su-doan", label: "Tin tức quân khu & sư đoàn" },
      { to: "/tin-tuc/quan-doi", label: "Tin tức quân đội" },
      { to: "/tin-tuc/the-gioi", label: "Tin thế giới" },
      { to: "/tin-tuc/trong-nuoc", label: "Tin tức trong nước" },
    ],
  },
  {
    label: "THƯ VIỆN SỐ",
    children: [
      { to: "/thu-vien-so/dung-chung", label: "Dữ liệu dùng chung" },
      { to: "/thu-vien-so/dung-rieng", label: "Dữ liệu dùng riêng" },
    ],
  },
  {
    label: "HUẤN LUYỆN CHIẾN ĐẤU",
    children: [
      { to: "/huan-luyen/ke-hoach", label: "Kế hoạch huấn luyện" },
      { to: "/huan-luyen/chuong-trinh", label: "Chương trình huấn luyện" },
      {
        to: "/huan-luyen/mau-bieu-bao-cao",
        label: "Mẫu biểu báo cáo huấn luyện",
      },
      { to: "/huan-luyen/tai-lieu", label: "Tài liệu huấn luyện" },
    ],
  },
  {
    label: "CHUYỂN ĐỔI SỐ",
    children: [
      { to: "/chuyen-doi-so/binh-dan-hoc-vu-so", label: "Bình dân học vụ số" },
      {
        to: "/chuyen-doi-so/phat-trien-khoa-hoc-cong-nghe",
        label: "Phát triển KHCN, đổi mới sáng tạo, chuyển đổi số",
      },
    ],
  },
];
