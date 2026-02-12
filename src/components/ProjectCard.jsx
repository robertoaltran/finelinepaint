export default function ProjectCard({ title, category, beforeUrl, afterUrl, description }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="grid grid-cols-2">
        <div className="relative">
          <img
            src={beforeUrl}
            alt={"Before - " + title}
            className="h-44 w-full object-cover sm:h-52"
            loading="lazy"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-zinc-900">
            Before
          </span>
        </div>
        <div className="relative">
          <img
            src={afterUrl}
            alt={"After - " + title}
            className="h-44 w-full object-cover sm:h-52"
            loading="lazy"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-zinc-900">
            After
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-semibold text-zinc-900">{title}</h3>
          <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
            {category}
          </span>
        </div>
        {description ? <p className="mt-2 text-sm text-zinc-600">{description}</p> : null}
      </div>
    </div>
  );
}
