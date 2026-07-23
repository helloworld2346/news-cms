import type { MediaVideo, MediaImage } from "../types";

export function getMediaVideos(): MediaVideo[] {
  return [
    { title: "Phóng sự: Ngày truyền thống Sư đoàn", duration: "05:32" },
    { title: "Huấn luyện dã ngoại 2026", duration: "08:14" },
    { title: "Giao lưu văn nghệ quân dân", duration: "12:03" },
    { title: "Diễn tập hiệp đồng binh chủng", duration: "06:47" },
    { title: "Lễ tuyên thệ chiến sĩ mới", duration: "04:20" },
    { title: "Hội thao quốc phòng toàn dân", duration: "09:58" },
  ];
}

export function getMediaImages(): MediaImage[] {
  return Array.from({ length: 12 }).map((_, i) => ({
    title: `Hình ảnh hoạt động ${i + 1}`,
  }));
}
