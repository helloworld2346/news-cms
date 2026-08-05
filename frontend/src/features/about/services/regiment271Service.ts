// frontend/src/features/about/services/regiment271Service.ts
import type {
  RegimentFact,
  RegimentMilestone,
  RegimentBattle,
  RegimentPoliticalBlock,
} from "../types";

export function getRegiment271Facts(): RegimentFact[] {
  return [
    { label: "Ngày thành lập", value: "18/12/1947" },
    { label: "Năm truyền thống", value: "77 năm" },
    { label: "Nơi thành lập", value: "Cực Nam Trung Bộ" },
    { label: "Danh hiệu", value: "2 lần Anh hùng LLVTND" },
  ];
}

export function getRegiment271Milestones(): RegimentMilestone[] {
  return [
    {
      year: "18/12/1947",
      title: "Thành lập Trung đoàn",
      desc: "Thành lập tại chiến trường cực Nam Trung Bộ, tiền thân là Trung đoàn 812 (Ninh Thuận, Bình Thuận) - một trong những trung đoàn chủ lực đầu tiên của Quân đội Nhân dân Việt Nam.",
    },
    {
      year: "08/1964",
      title: "Đổi phiên hiệu thành Trung đoàn 271",
      desc: "Trung đoàn 812 chuyển đổi phiên hiệu thành Trung đoàn 271, nằm trong đội hình Sư đoàn 341 (Quân khu 4), trụ vững trên tuyến đầu hậu phương miền Bắc.",
    },
    {
      year: "1971 - 1972",
      title: "Vào chiến trường miền Đông Nam Bộ",
      desc: "Tháng 11/1971 hành quân vượt Trường Sơn vào chiến trường miền Đông Nam Bộ - Nam Tây Nguyên, tham gia Chiến dịch Nguyễn Huệ năm 1972.",
    },
    {
      year: "1974 - 1975",
      title: "Chiến dịch Đường 14 - Phước Long & giải phóng miền Nam",
      desc: "Trong đội hình Sư đoàn 3, tiêu diệt Chi khu Bù Đăng, góp phần giải phóng Phước Long; tham gia giải phóng huyện Đức Hòa (30/4/1975), giải phóng tỉnh Long An.",
    },
    {
      year: "1979 - 1989",
      title: "Bảo vệ biên giới Tây Nam & nhiệm vụ quốc tế",
      desc: "Trong đội hình Sư đoàn 302, chiến đấu bảo vệ biên giới Tây Nam và làm nhiệm vụ quốc tế, giúp nhân dân Campuchia thoát khỏi họa diệt chủng.",
    },
    {
      year: "13/03/1992",
      title: "Về đội hình Sư đoàn 5",
      desc: "Bộ Tư lệnh Quân khu 7 ra Quyết định tách Trung đoàn 271 khỏi Sư đoàn 302 về đội hình Sư đoàn 5, đóng quân tại Phước Vĩnh, Phú Giáo, Bình Dương.",
    },
    {
      year: "2013",
      title: "Anh hùng LLVTND thời kỳ đổi mới",
      desc: "Ngày 7/1/2013, Trung đoàn được phong tặng danh hiệu Anh hùng LLVTND trong thời kỳ đổi mới, sau lần đầu được phong tặng ngày 15/1/1976.",
    },
  ];
}

export function getRegiment271Battles(): RegimentBattle[] {
  return [
    {
      name: "Chiến dịch Nguyễn Huệ 1972",
      desc: "Sau hơn 3 tháng hành quân vượt Trường Sơn, trung đoàn tham gia Chiến dịch Nguyễn Huệ trên chiến trường miền Đông Nam Bộ - Nam Tây Nguyên.",
    },
    {
      name: "Chiến dịch Đường 14 - Phước Long",
      desc: "Đảm nhiệm hướng tiến công chủ yếu, tiêu diệt Chi khu quân sự Bù Đăng, góp phần giải phóng hoàn toàn tỉnh Phước Long, tạo thời cơ cho Tổng tiến công mùa Xuân 1975.",
    },
    {
      name: "Giải phóng Đức Hòa - Long An",
      desc: "Tháng 4/1975 đập tan tuyến phòng thủ của địch ở hướng Tây Nam Sài Gòn, giải phóng huyện Đức Hòa (30/4/1975), góp phần giải phóng miền Nam, thống nhất đất nước.",
    },
    {
      name: "Bảo vệ biên giới Tây Nam & làm nhiệm vụ quốc tế",
      desc: "10 năm chiến đấu trên chiến trường Campuchia trong đội hình Sư đoàn 302, góp phần giải phóng Phnôm Pênh, làm rạng danh phẩm chất “Bộ đội Cụ Hồ”.",
    },
  ];
}

export function getRegiment271Political(): RegimentPoliticalBlock[] {
  return [
    {
      title: "Xây dựng chính quy, rèn luyện kỷ luật",
      points: [
        "Quyết tâm “Toàn Trung đoàn hành động theo điều lệnh”, kiểm tra điều lệnh 100% sĩ quan, quân nhân chuyên nghiệp.",
        "Vi phạm kỷ luật giảm bình quân 10-15% mỗi năm; tỷ lệ “An toàn tuyệt đối về chính trị, kỷ luật” trên 98%.",
        "Được Bộ Quốc phòng tặng cờ thi đua (2022); được công nhận “đơn vị huấn luyện giỏi”, vững mạnh toàn diện “mẫu mực, tiêu biểu”.",
        "Huấn luyện theo phương châm “Cơ bản, thiết thực, vững chắc”, sát thực tế chiến đấu.",
      ],
    },
    {
      title: "Công tác chính trị, tư tưởng & dân vận",
      points: [
        "Các mô hình “5 chủ động trong công tác tư tưởng”, “Chi bộ 5 tốt, đảng viên 5 tốt”, “Mỗi ngày một câu hỏi, mỗi tuần một điều luật”.",
        "Đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh gắn với Nghị quyết TW4.",
        "Năm 2021 cử 1.000 cán bộ, chiến sĩ hỗ trợ tỉnh Bình Dương phòng, chống dịch Covid-19.",
        "Điểm sáng về công tác dân vận, giúp dân khắc phục thiên tai, xóa đói giảm nghèo, xây dựng “thế trận lòng dân”.",
      ],
    },
  ];
}
