import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <div className="bg-white">
      <Container className="py-12">
        <SectionTitle
          eyebrow="About"
          title="A friendly team with a professional finish"
          subtitle="We focus on clean work, fair pricing, and a smooth experience from quote to final coat."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-sm font-semibold text-zinc-900">What we believe</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700">
              <li>• Quality comes first — sharp edges and consistent coverage.</li>
              <li>• Respect for your home — clean prep and tidy finish.</li>
              <li>• Clear communication — no surprises.</li>
              <li>• Great value — accessible pricing without cutting corners.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">Where we work</p>
            <p className="mt-2 text-sm text-zinc-700">
              Melbourne and surrounding suburbs — Bayside, Inner South, Inner North and beyond.
            </p>
            <p className="mt-4 text-sm text-zinc-700">
              If you’re not sure whether we cover your area, send a quick message on the Quote page.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
