import type {
  HistoryMilestone,
  BattleHonor,
  Award,
  ModernPillar,
  DivisionImages,
} from "../types";
import anhHero from "@/assets/images/hero.jpg";
import anhKyNiem from "@/assets/images/lekyniem2311.jpg";
import anhHuyChuong from "@/assets/images/lenhanhuychuong.jpg";

export function getDivisionImages(): DivisionImages {
  return {
    hero: anhHero,
    intro: anhKyNiem,
    battle: anhHuyChuong,
  };
}

export function getHistoryMilestones(): HistoryMilestone[] {
  return [
    {
      year: "23/11/1965",
      title: "Thành lập Sư đoàn 5",
      desc: "Sư đoàn 5 được thành lập tại huyện Đất Đỏ, tỉnh Bà Rịa - Vũng Tàu, là một trong hai sư đoàn chủ lực đầu tiên ra đời trên chiến trường miền Đông Nam Bộ trong kháng chiến chống Mỹ, cứu nước.",
    },
    {
      year: "1965 - 1972",
      title: "Những chiến công vang dội",
      desc: "Giáp chiến với các đơn vị sừng sỏ của Mỹ - ngụy, lập nên các chiến thắng Võ Su, sân bay Vũng Tàu, ngã ba Đồng Xoài, Bàu Bàng - Dầu Tiếng và Chiến dịch Nguyễn Huệ 1972.",
    },
    {
      year: "1975",
      title: "Đại thắng mùa Xuân",
      desc: "Tham gia Chiến dịch Hồ Chí Minh lịch sử, cùng toàn quân, toàn dân giải phóng hoàn toàn miền Nam, thống nhất đất nước.",
    },
    {
      year: "1977 - 1989",
      title: "Bảo vệ biên giới & làm nhiệm vụ quốc tế",
      desc: "Chiến đấu bảo vệ biên giới Tây Nam của Tổ quốc và làm nhiệm vụ quốc tế giúp nhân dân Campuchia thoát khỏi họa diệt chủng.",
    },
    {
      year: "Nay",
      title: "Xây dựng đơn vị vững mạnh toàn diện",
      desc: "Tập trung huấn luyện, sẵn sàng chiến đấu, xây dựng đơn vị vững mạnh toàn diện “mẫu mực, tiêu biểu”, xứng đáng là đơn vị điểm của Bộ Quốc phòng và Quân khu 7.",
    },
  ];
}

export function getBattleHonors(): BattleHonor[] {
  return [
    {
      name: "Chiến thắng Bàu Bàng - Dầu Tiếng",
      desc: "Ngay sau khi thành lập, Sư đoàn giáp chiến và giành thắng lợi trước các đơn vị sừng sỏ của Mỹ - ngụy trên chiến trường miền Đông Nam Bộ.",
    },
    {
      name: "Chiến thắng Võ Su, sân bay Vũng Tàu, ngã ba Đồng Xoài",
      desc: "Với tinh thần chủ động tiến công, quả cảm, quyết chiến quyết thắng, Sư đoàn lập nên nhiều chiến công vang dội trên khắp chiến trường.",
    },
    {
      name: "Chiến dịch Nguyễn Huệ 1972",
      desc: "Đánh bại nhiều cuộc hành quân lớn của địch, góp phần làm thất bại chiến lược “Việt Nam hóa chiến tranh”.",
    },
    {
      name: "Chiến dịch Hồ Chí Minh 1975",
      desc: "Tham gia tổng tiến công và nổi dậy, góp phần giải phóng hoàn toàn miền Nam, thống nhất đất nước.",
    },
    {
      name: "Chiến tranh bảo vệ biên giới Tây Nam & nhiệm vụ quốc tế",
      desc: "Chiến đấu bảo vệ biên giới Tây Nam và làm nhiệm vụ quốc tế giúp nước bạn Campuchia thoát khỏi họa diệt chủng.",
    },
  ];
}

export function getAwards(): Award[] {
  return [
    {
      title: "2 lần Anh hùng LLVT nhân dân",
      desc: "Sư đoàn 5 vinh dự 2 lần được Đảng, Nhà nước tuyên dương danh hiệu “Anh hùng Lực lượng vũ trang nhân dân”.",
    },
    {
      title: "24 tập thể, 21 cá nhân Anh hùng",
      desc: "Có 24 tập thể và 21 cá nhân được tuyên dương danh hiệu Anh hùng LLVT nhân dân (6 tập thể được tuyên dương lần 2).",
    },
    {
      title: "Huân chương Ăng-co",
      desc: "Được Nhà nước Campuchia tặng thưởng Huân chương Ăng-co vì thành tích làm nhiệm vụ quốc tế.",
    },
    {
      title: "17 chữ vàng truyền thống",
      desc: "Được Quân ủy, Bộ Tư lệnh Miền tặng 17 chữ vàng: “Đoàn kết, trung dũng, cơ động linh hoạt, tự lực tự cường, đánh thắng mọi kẻ thù”.",
    },
  ];
}

export function getModernPillars(): ModernPillar[] {
  return [
    {
      title: "Huấn luyện, sẵn sàng chiến đấu",
      points: [
        "Nâng cao chất lượng huấn luyện, sát thực tế chiến đấu.",
        "Duy trì nghiêm chế độ trực sẵn sàng chiến đấu, quản lý vùng trời, địa bàn.",
        "Xây dựng đơn vị vững mạnh toàn diện “mẫu mực, tiêu biểu”.",
      ],
    },
    {
      title: "Xây dựng chính trị, con người",
      points: [
        "Giữ vững trận địa tư tưởng, xây dựng bản lĩnh chính trị vững vàng.",
        "Xây dựng không khí dân chủ, đoàn kết, gắn bó trong tập thể.",
        "Thực hiện tốt chính sách hậu phương Quân đội.",
      ],
    },
    {
      title: "Chuyển đổi số & khoa học công nghệ",
      points: [
        "Đẩy mạnh ứng dụng công nghệ thông tin trong quản lý, huấn luyện.",
        "Phát triển khoa học, công nghệ, đổi mới sáng tạo, chuyển đổi số.",
        "Tạo sân chơi lành mạnh, bổ ích, góp phần xây dựng nhân cách quân nhân.",
      ],
    },
  ];
}
