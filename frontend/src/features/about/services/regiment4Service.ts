import type {
  RegimentFact,
  RegimentMilestone,
  RegimentBattle,
  RegimentPoliticalBlock,
} from "../types";

export function getRegiment4Facts(): RegimentFact[] {
  return [
    { label: "Ngày thành lập", value: "03/02/1965" },
    { label: "Năm truyền thống", value: "61 năm" },
    { label: "Nơi thành lập", value: "Chiến khu Đ" },
    { label: "Trực thuộc", value: "Sư đoàn 5" },
  ];
}

export function getRegiment4Milestones(): RegimentMilestone[] {
  return [
    {
      year: "03/02/1965",
      title: "Thành lập Trung đoàn 4",
      desc: "Được thành lập tại Chiến khu Đ đúng dịp kỷ niệm 35 năm Ngày thành lập Đảng Cộng sản Việt Nam, theo quyết định của Khu ủy, Bộ Tư lệnh Miền.",
    },
    {
      year: "1965 - 1975",
      title: "Kiên cường bám trụ, lập công",
      desc: "Chiến đấu kiên cường trên chiến trường miền Đông Nam Bộ, lập nhiều chiến công hiển hách, góp phần vào đại thắng mùa Xuân 1975.",
    },
    {
      year: "1977 - 1989",
      title: "Bảo vệ biên giới & nhiệm vụ quốc tế",
      desc: "Tham gia chiến đấu bảo vệ biên giới Tây Nam và làm nhiệm vụ quốc tế giúp nhân dân Campuchia.",
    },
    {
      year: "Nay",
      title: "Xây dựng đơn vị vững mạnh toàn diện",
      desc: "Nâng cao chất lượng huấn luyện, sẵn sàng chiến đấu, xây dựng chính quy, kỷ luật nghiêm minh trong tình hình mới.",
    },
  ];
}

export function getRegiment4Battles(): RegimentBattle[] {
  return [
    {
      name: "Bám trụ chiến trường miền Đông Nam Bộ",
      desc: "Giữ vững ý chí quyết tâm cao, đánh bại nhiều cuộc hành quân của địch, bảo vệ vững chắc địa bàn.",
    },
    {
      name: "Tham gia đại thắng mùa Xuân 1975",
      desc: "Cùng toàn quân, toàn dân tiến công và nổi dậy, góp phần giải phóng hoàn toàn miền Nam, thống nhất đất nước.",
    },
    {
      name: "Bảo vệ biên giới Tây Nam & làm nhiệm vụ quốc tế",
      desc: "Chiến đấu bảo vệ Tổ quốc và giúp nước bạn Campuchia thoát khỏi họa diệt chủng.",
    },
  ];
}

export function getRegiment4Political(): RegimentPoliticalBlock[] {
  return [
    {
      title: "Xây dựng nền tảng chính trị vững chắc",
      points: [
        "Duy trì nghiêm chế độ học tập chính trị.",
        "Mô hình “Mỗi tối một câu hỏi, một đáp án chính trị bổ ích”.",
        "Mô hình “Giờ học chính trị kiểu mẫu”.",
        "“Tổ tư vấn tâm lý, pháp lý quân nhân”.",
        "Mô hình “3 cùng với chiến sĩ” (cùng học, cùng rèn, cùng tiến bộ).",
      ],
    },
    {
      title: "Xây dựng đội ngũ cán bộ và kỷ luật",
      points: [
        "Đề cao tính tiền phong gương mẫu của cán bộ, đảng viên gắn với học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
        "Kết hợp chặt chẽ giáo dục thuyết phục với quản lý kỷ luật nghiêm minh.",
        "Xây dựng chính quy, tạo sức mạnh chiến đấu tổng hợp cao, sẵn sàng nhận và hoàn thành tốt mọi nhiệm vụ.",
      ],
    },
  ];
}
