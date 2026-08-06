import type { EventNewsCategory } from "../types";
import anhMau1 from "@/assets/images/anhmau1.png";
import anhMau2 from "@/assets/images/anhmau2.jpg";
import anhMau3 from "@/assets/images/anhmau3.jpeg";
import hoiNghiSu5 from "@/assets/images/hoinghisu52025.png";
import su5BanDanThat from "@/assets/images/su5bandanthat.jpg";
import su5KhenThuong from "@/assets/images/khenthuongsu5.jpg";


export function getEventNews(): EventNewsCategory[] {
  return [
    {
      label: "Tin tức quân khu & sư đoàn",
      to: "/tin-tuc/quan-khu-su-doan",
      big: [
        {
          title: "Hội nghị tổng kết công tác năm 2025 của Sư đoàn",
          desc: "Sư đoàn tổ chức hội nghị tổng kết, đánh giá kết quả thực hiện nhiệm vụ và triển khai phương hướng năm mới.",
          image: hoiNghiSu5,
          to: "/tin-tuc/quan-khu-su-doan",
        },
        {
          title:
            "Diễn tập chiến thuật có bắn đạn thật tại thao trường tổng hợp",
          desc: "Đợt diễn tập nâng cao năng lực chỉ huy, hiệp đồng và khả năng sẵn sàng chiến đấu của các lực lượng.",
          image: su5BanDanThat,
          to: "/tin-tuc/quan-khu-su-doan",
        },
      ],
      small: [
        {
          title: "Khen thưởng các tập thể, cá nhân có thành tích xuất sắc",
          image: su5KhenThuong,
          to: "/tin-tuc/quan-khu-su-doan",
        },
        {
          title: "Gặp mặt cán bộ hưu trí nhân dịp lễ",
          image: anhMau1,
          to: "/tin-tuc/quan-khu-su-doan",
        },
        {
          title: "Hội thao chào mừng ngày truyền thống đơn vị",
          image: anhMau3,
          to: "/tin-tuc/quan-khu-su-doan",
        },
      ],
    },
    {
      label: "Tin tức quân đội",
      to: "/tin-tuc/quan-doi",
      big: [
        {
          title: "Toàn quân đẩy mạnh phong trào thi đua quyết thắng",
          desc: "Các đơn vị trong toàn quân triển khai nhiều hoạt động thiết thực hưởng ứng phong trào thi đua.",
          image: anhMau1,
          to: "/tin-tuc/quan-doi",
        },
        {
          title: "Nâng cao chất lượng huấn luyện, sẵn sàng chiến đấu",
          desc: "Tập trung đổi mới nội dung, phương pháp huấn luyện sát thực tế chiến đấu.",
          image: anhMau2,
          to: "/tin-tuc/quan-doi",
        },
      ],
      small: [
        {
          title: "Tăng cường công tác kỹ thuật, bảo đảm trang bị",
          image: anhMau3,
          to: "/tin-tuc/quan-doi",
        },
        {
          title: "Đẩy mạnh chuyển đổi số trong quản lý, điều hành",
          image: anhMau1,
          to: "/tin-tuc/quan-doi",
        },
        {
          title: "Chăm lo đời sống vật chất, tinh thần cho bộ đội",
          image: anhMau2,
          to: "/tin-tuc/quan-doi",
        },
      ],
    },
    {
      label: "Tin thế giới",
      to: "/tin-tuc/the-gioi",
      big: [
        {
          title: "Tình hình an ninh khu vực và thế giới tuần qua",
          desc: "Cập nhật các diễn biến chính trị, an ninh quốc phòng đáng chú ý trên thế giới.",
          image: anhMau2,
          to: "/tin-tuc/the-gioi",
        },
        {
          title: "Hợp tác quốc phòng song phương được tăng cường",
          desc: "Nhiều hoạt động hợp tác, giao lưu quốc phòng được triển khai hiệu quả.",
          image: anhMau3,
          to: "/tin-tuc/the-gioi",
        },
      ],
      small: [
        {
          title: "Diễn tập chung giữa các nước trong khu vực",
          image: anhMau1,
          to: "/tin-tuc/the-gioi",
        },
        {
          title: "Xu hướng phát triển công nghệ quốc phòng hiện đại",
          image: anhMau2,
          to: "/tin-tuc/the-gioi",
        },
        {
          title: "Các hội nghị an ninh quốc tế quan trọng",
          image: anhMau3,
          to: "/tin-tuc/the-gioi",
        },
      ],
    },
    {
      label: "Tin tức trong nước",
      to: "/tin-tuc/trong-nuoc",
      big: [
        {
          title: "Cả nước hướng về các hoạt động kỷ niệm lớn",
          desc: "Nhiều hoạt động ý nghĩa được tổ chức trên khắp các địa phương.",
          image: anhMau3,
          to: "/tin-tuc/trong-nuoc",
        },
        {
          title: "Phát triển kinh tế - xã hội gắn với quốc phòng, an ninh",
          desc: "Kết hợp chặt chẽ phát triển kinh tế với củng cố quốc phòng, an ninh.",
          image: anhMau1,
          to: "/tin-tuc/trong-nuoc",
        },
      ],
      small: [
        {
          title: "Các địa phương đẩy mạnh công tác dân vận",
          image: anhMau2,
          to: "/tin-tuc/trong-nuoc",
        },
        {
          title: "Chung tay xây dựng nông thôn mới",
          image: anhMau3,
          to: "/tin-tuc/trong-nuoc",
        },
        {
          title: "Hoạt động đền ơn đáp nghĩa lan tỏa sâu rộng",
          image: anhMau1,
          to: "/tin-tuc/trong-nuoc",
        },
      ],
    },
  ];
}
