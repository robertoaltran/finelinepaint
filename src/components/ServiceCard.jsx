function Circle({ children }) {
  return (
    <div className="grid h-16 w-16 place-items-center rounded-full bg-[#0B2A5B] shadow-[0_10px_25px_rgba(11,42,91,0.18)]">
      {children}
    </div>
  );
}

function IconInterior() {
  // house + small interior mark (wider look)
  return (
    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
      <path d="M7.5 13.5h2" />
    </svg>
  );
}

function IconExterior() {
  // house + sun (wider look)
  return (
    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 11 12 3l9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M12 9.5v-2" />
      <path d="M18.8 7.2l-1.4 1.4" />
      <path d="M20 12h-2" />
      <circle cx="12" cy="12" r="2.2" />
    </svg>
  );
}

function IconCommercial() {
  // building icon (wider look)
  return (
    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 21V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v15" />
      <path d="M8 21V8h8v13" />
      <path d="M10 11h.01M10 14h.01M10 17h.01" />
      <path d="M14 11h.01M14 14h.01M14 17h.01" />
    </svg>
  );
}

function Icon({ name }) {
  if (name === "interior") return <IconInterior />;
  if (name === "exterior") return <IconExterior />;
  return <IconCommercial />;
}

export default function ServiceCard({ title, desc, iconName }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_10px_25px_rgba(11,42,91,0.10)] transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-5">
        <Circle>
          <Icon name={iconName} />
        </Circle>

        <div>
          <h3 className="text-base font-extrabold text-zinc-900">{title}</h3>

          {/* tiny yellow accent under title to match logo */}
          <div className="mt-2 h-1 w-10 rounded-full bg-[#F4C400]" />

          <p className="mt-3 text-sm text-zinc-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}
