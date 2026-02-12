import Container from "../components/Container";
import ServiceCard from "../components/ServiceCard";

const services = [
  { title: "Residential Interior Painting", desc: "Walls, ceilings, trims and doors with a clean finish.", iconName: "interior" },
  { title: "Residential Exterior Painting", desc: "Durable coatings with proper preparation.", iconName: "exterior" },
  { title: "Commercial Painting", desc: "Offices, shops and apartments — tidy work and clear scheduling.", iconName: "commercial" },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* BLUE HERO BLOCK (lighter logo blue, slightly transparent) */}
      <section className="bg-[#2D6FE5]/95">
        <Container className="py-12 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                House Painting Services
              </h1>
              <p className="mt-4 max-w-xl text-white/85">
                Residential & commercial painting in Melbourne. Clean finish, fair price, friendly service.
              </p>

              {/* yellow highlight tag */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F4C400] px-4 py-2 text-sm font-extrabold text-[#0B2A5B]">
                Quality Comes First
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
                  <p className="text-sm font-semibold text-white">Fast Quotes</p>
                  <p className="mt-1 text-sm text-white/80">Same day response</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
                  <p className="text-sm font-semibold text-white">Clean & Professional</p>
                  <p className="mt-1 text-sm text-white/80">Sharp edges, tidy job</p>
                </div>
              </div>
            </div>

            {/* Placeholder box (you add photos later) */}
            <div className="rounded-3xl border border-white/20 bg-white/10 p-4">
              <div className="aspect-[16/10] w-full rounded-2xl border border-white/20 bg-white/10" />
              <p className="mt-3 text-xs font-semibold text-white/80">
                (Add your before/after photos here later)
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* REST OF PAGE */}
      <Container className="py-12">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#2D6FE5]">Services</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          Everything you need for a fresh look
        </h2>
        <p className="mt-2 text-zinc-600">Interior, exterior and commercial — done with care.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Container>
    </div>
  );
}
