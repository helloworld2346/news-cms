import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const term = q.trim();
    if (!term) return;
    navigate(`/tim-kiem?q=${encodeURIComponent(term)}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-3xl items-center gap-3"
    >
      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-4 shadow-lg shadow-slate-900/5">
        <Search className="h-5 w-5 shrink-0 text-accent" />
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Tìm kiếm tin tức, văn bản, tài liệu, hình ảnh, video..."
          className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>

      <button
        type="submit"
        className="shrink-0 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-colors hover:bg-accent/90"
      >
        Tìm kiếm
      </button>
    </form>
  );
}
