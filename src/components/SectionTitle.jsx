export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700/80">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-2xl text-zinc-600">{subtitle}</p> : null}
    </div>
  );
}
