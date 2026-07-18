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
    {
      title: "Diễn tập chiến thuật có bắn đạn thật tại thao trường tổng hợp",
      date: "15/05/2026",
      dept: "Phòng Tham mưu",
      desc: "Đợt diễn tập nhằm nâng cao năng lực chỉ huy, hiệp đồng và khả năng sẵn sàng chiến đấu của các lực lượng...",
    },
    {
      title:
        "Tăng cường ứng dụng công nghệ thông tin trong quản lý và điều hành",
      date: "14/05/2026",
      dept: "Phòng Kỹ thuật",
      desc: "Đẩy mạnh chuyển đổi số, ứng dụng CNTT giúp nâng cao hiệu quả quản lý, giảm thiểu thủ tục hành chính...",
    },
    {
      title: "Khen thưởng các tập thể và cá nhân có thành tích xuất sắc",
      date: "14/05/2026",
      dept: "Phòng Chính trị",
      desc: "Biểu dương và khen thưởng các tập thể, cá nhân đã có thành tích xuất sắc trong phong trào thi đua quyết thắng...",
    },
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
