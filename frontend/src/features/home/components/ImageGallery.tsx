import SectionHeading from "./SectionHeading";

export default function ImageGallery() {
  return (
    <div>
      <SectionHeading title="Hình ảnh hoạt động" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
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
