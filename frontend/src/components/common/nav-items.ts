export interface NavItem {
  to: string;
  label: string;
  end?: boolean;
}

export const navItems: NavItem[] = [
  { to: "/", label: "TRANG CHỦ", end: true },
  { to: "/tin-tuc", label: "TIN TỨC" },
  { to: "/van-ban", label: "VĂN BẢN" },
  { to: "/thu-vien-so", label: "THƯ VIỆN SỐ" },
  { to: "/media", label: "MEDIA" },
  { to: "/lich-cong-tac", label: "LỊCH CÔNG TÁC" },
  { to: "/thong-bao", label: "THÔNG BÁO" },
];
