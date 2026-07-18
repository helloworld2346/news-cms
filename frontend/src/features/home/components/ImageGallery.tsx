import SectionHeading from "./SectionHeading";
import { getGalleryCount } from "../services/galleryService";

export default function ImageGallery() {
  const count = getGalleryCount();
  return (
    <div>
      <SectionHeading title="Hình ảnh hoạt động" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="flex aspect-square items-center justify-center rounded-lg bg-slate-200 text-xs text-slate-400"
          >
            Ảnh {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
