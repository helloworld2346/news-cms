import type { FeaturedMain, FeaturedSide, LatestNewsItem } from "../types";

export function getFeaturedMain(): FeaturedMain {
  return {
    title: "Hội nghị tổng kết công tác năm 2026 của Sư đoàn",
    desc: "Sáng nay, Sư đoàn tổ chức hội nghị tổng kết, đánh giá kết quả thực hiện nhiệm vụ và triển khai phương hướng năm mới.",
    date: "17/07/2026",
  };
}

export function getFeaturedSide(): FeaturedSide[] {
  return [
    { title: "Đẩy mạnh phong trào thi đua quyết thắng", date: "16/07/2026" },
    {
      title: "Tăng cường công tác huấn luyện sẵn sàng chiến đấu",
      date: "15/07/2026",
    },
    { title: "Hoạt động đền ơn đáp nghĩa tại địa phương", date: "14/07/2026" },
  ];
}

export function getLatestNews(): LatestNewsItem[] {
  return [
    {
      title: "Sư đoàn tổ chức diễn tập hiệp đồng",
      date: "17/07/2026",
      dept: "Phòng Tham mưu",
    },
    {
      title: "Gặp mặt cán bộ hưu trí nhân dịp lễ",
      date: "16/07/2026",
      dept: "Phòng Chính trị",
    },
    {
      title: "Kiểm tra công tác hậu cần quý III",
      date: "15/07/2026",
      dept: "Phòng Hậu cần",
    },
    {
      title: "Bồi dưỡng nghiệp vụ cho cán bộ trẻ",
      date: "14/07/2026",
      dept: "Phòng Chính trị",
    },
    {
      title: "Hội thao chào mừng ngày truyền thống",
      date: "13/07/2026",
      dept: "Ban TDTT",
    },
  ];
}
