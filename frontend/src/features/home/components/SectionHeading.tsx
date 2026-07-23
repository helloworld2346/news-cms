import { Link } from "react-router-dom";

interface Props {
  title: string;
  href?: string;
}

export default function SectionHeading({ title, href = "#" }: Props) {
  return (
    <div className="mb-4 flex items-center justify-between border-b-2 border-primary pb-2">
      <h2 className="text-lg font-bold uppercase text-primary">{title}</h2>
      {href !== "#" && (
        <Link to={href} className="text-sm text-accent hover:underline">
          Xem tất cả
        </Link>
      )}
    </div>
  );
}
