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
      className="mx-auto flex w-full max-w-2xl items-center gap-2 rounded-full border border-slate-200 bg-white p-2 shadow-lg shadow-slate-900/5"
    >
      <Search className="ml-3 h-5 w-5 shrink-0 text-slate-400" />
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Tìm kiếm thông tin phù hợp..."
        className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
      >
        Tìm kiếm
      </button>
    </form>
  );
}
