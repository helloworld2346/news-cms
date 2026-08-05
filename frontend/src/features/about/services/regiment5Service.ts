import type {
  RegimentFact,
  RegimentMilestone,
  RegimentBattle,
  RegimentPoliticalBlock,
} from "../types";

export function getRegiment5Facts(): RegimentFact[] {
  return [
    { label: "Ngày thành lập", value: "31/05/1965" },
    { label: "Năm truyền thống", value: "60 năm" },
    { label: "Nơi thành lập", value: "Suối Bà Hảo, Tây Ninh" },
    { label: "Danh hiệu", value: "2 lần Anh hùng LLVTND" },
  ];
}

export function getRegiment5Milestones(): RegimentMilestone[] {
  return [
    {
      year: "31/05/1965",
      title: "Thành lập Trung đoàn 5",
      desc: "Thành lập tại khu rừng Bà Hảo, chiến khu Dương Minh Châu, tỉnh Tây Ninh; tiền thân là Trung đoàn 1 bộ đội chủ lực Quân khu Tây Nam Bộ.",
    },
    {
      year: "11/09/1965",
      title: "Chiến công đầu ra quân",
      desc: "Tiểu đoàn 2 (nay là Tiểu đoàn 5) bất ngờ tập kích diệt gọn Đồn Túc Trưng (Định Quán, Đồng Nai), diệt và bắt sống 22 tên địch, thu 35 súng các loại.",
    },
    {
      year: "1965 - 1969",
      title: "Bám trụ chiến trường miền Đông",
      desc: "Cơ động chiến đấu liên tục tại Bà Rịa, Long Khánh, Biên Hòa, Tây Ninh, Phước Long; xây dựng nên truyền thống “Vượt mọi khó khăn, liên tục đánh thắng”.",
    },
    {
      year: "1970 - 1975",
      title: "Anh hùng LLVTND lần thứ nhất",
      desc: "Chiến đấu trên chiến trường Đông Bắc Campuchia và miền Đông Nam Bộ; được Đảng, Nhà nước tặng danh hiệu Anh hùng LLVTND lần thứ nhất (9.1975).",
    },
    {
      year: "1978 - 1989",
      title: "Bảo vệ biên giới Tây Nam & nhiệm vụ quốc tế",
      desc: "Tăng cường vào đội hình Sư đoàn 303, chiến đấu bảo vệ biên giới Tây Nam và làm nhiệm vụ quốc tế giúp bạn tại Campuchia; được phong Anh hùng LLVTND lần thứ hai (1985).",
    },
    {
      year: "09/1989",
      title: "Trở về đội hình Sư đoàn 5",
      desc: "Hoàn thành nghĩa vụ quốc tế trở về Tổ quốc, thực hiện nhiệm vụ huấn luyện, sẵn sàng chiến đấu và xây dựng đơn vị.",
    },
    {
      year: "31/05/2025",
      title: "Kỷ niệm 60 năm Ngày truyền thống",
      desc: "Long trọng tổ chức Lễ kỷ niệm 60 năm Ngày truyền thống Trung đoàn (31/5/1965 - 31/5/2025).",
    },
  ];
}

export function getRegiment5Battles(): RegimentBattle[] {
  return [
    {
      name: "Chiến công đầu Đồn Túc Trưng",
      desc: "Trận đầu ra quân thắng lợi trên chiến trường miền Đông Nam Bộ (11/9/1965), tiêu diệt và bắt sống địch, thu nhiều vũ khí.",
    },
    {
      name: "Bám trụ chiến trường Bà Rịa - Long Khánh",
      desc: "Thực hiện hàng trăm trận đánh, đánh thiệt hại nặng 4 tiểu đoàn quân Mỹ, 5 tiểu đoàn quân Ngụy và một đại đội quân Úc (1965 - 1969).",
    },
    {
      name: "Chiến đấu tại Campuchia & miền Đông Nam Bộ",
      desc: "Từ 1970 đến 1975 lập nhiều chiến công vang dội, góp phần vào đại thắng mùa Xuân 1975, giải phóng hoàn toàn miền Nam.",
    },
    {
      name: "Bảo vệ biên giới Tây Nam & làm nhiệm vụ quốc tế",
      desc: "Chiến đấu đánh đổ tập đoàn phản động Khmer Đỏ và giúp nhân dân Campuchia thoát khỏi họa diệt chủng.",
    },
  ];
}

export function getRegiment5Political(): RegimentPoliticalBlock[] {
  return [
    {
      title: "Xây dựng chính quy, huấn luyện giỏi",
      points: [
        "Mục tiêu “Ba nhất”: chính quy nhất, huấn luyện giỏi nhất, kỷ luật nghiêm nhất.",
        "Tổ chức “Ngày chính quy mẫu” hằng tuần để kiểm tra tác phong, điều lệnh, cảnh quan.",
        "Huấn luyện theo phương châm “Cơ bản, thiết thực, vững chắc”, sát thực tế chiến đấu.",
        "Nhiều năm liên tục được Bộ Quốc phòng tặng cờ “Đơn vị huấn luyện giỏi”.",
      ],
    },
    {
      title: "Công tác chính trị, tư tưởng",
      points: [
        "Mô hình “Mỗi tối một câu chuyện lịch sử”, “Mỗi ngày một câu hỏi, một đáp án chính trị bổ ích”.",
        "Đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
        "Xây dựng đơn vị vững mạnh toàn diện “mẫu mực, tiêu biểu”.",
        "1.249 cán bộ, chiến sĩ tham gia hỗ trợ nhân dân phòng, chống dịch Covid-19 năm 2021.",
      ],
    },
  ];
}
