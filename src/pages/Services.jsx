import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";

const groups = [
  {
    title: "Residential",
    items: [
      { title: "Interior painting", desc: "Walls, ceilings, trims, doors — clean lines and smooth finish.", icon: "🏠" },
      { title: "Exterior painting", desc: "Prep + durable coatings for Melbourne conditions.", icon: "☀️" },
      { title: "Doors & frames", desc: "Enamel finish that looks sharp and holds up.", icon: "🚪" },
    ],
  },
  {
    title: "Commercial",
    items: [
      { title: "Offices", desc: "Minimal disruption, tidy work, clear scheduling.", icon: "🏢" },
      { title: "Shops", desc: "Fresh look that matches your brand and space.", icon: "🛍️" },
      { title: "Apartments", desc: "Common areas, units, trims and touch-ups.", icon: "🏬" },
    ],
  },
  {
    title: "Extras",
    items: [
      { title: "Plaster repairs", desc: "Patching, sanding and surface levelling.", icon: "🧱" },
      { title: "Mould treatment", desc: "Bathroom and damp areas prepared properly.", icon: "🛁" },
      { title: "Surface preparation", desc: "Primer where needed for better adhesion and durability.", icon: "🧰" },
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      <Container className="py-12">
        <SectionTitle
          eyebrow="Services"
          title="Clear, complete painting services"
          subtitle="Straightforward options, fair pricing, and a professional finish."
        />

        <div className="space-y-10">
          {groups.map((g) => (
            <section key={g.title}>
              <h3 className="mb-4 text-lg font-bold text-zinc-900">{g.title}</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((i) => (
                  <ServiceCard key={i.title} {...i} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
          <p className="text-sm font-semibold text-zinc-900">What’s included</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
            <li>Preparation (patching / sanding where needed)</li>
            <li>Primer where required</li>
            <li>Two coats for consistent coverage</li>
            <li>Clean work area & tidy finish</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
