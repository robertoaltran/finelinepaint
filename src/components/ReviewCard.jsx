function Stars({ rating }) {
  const full = Math.max(1, Math.min(5, rating || 5));
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? "text-yellow-500" : "text-zinc-300"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewCard({ name, text, rating }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <Stars rating={rating} />
      <p className="mt-3 text-sm text-zinc-700">“{text}”</p>
      <p className="mt-3 text-sm font-semibold text-zinc-900">{name}</p>
    </div>
  );
}
