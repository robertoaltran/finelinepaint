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
            <p className="text-sm font-semibold text-zinc-900">Professional Background</p>

            <div className="mt-3 space-y-4 text-sm text-zinc-700">
              <p>
                My painting career began in Christchurch, New Zealand, working on structural crack repairs and repainting properties affected by the 2012 earthquakes. The work involved repairing cracks in plaster and exterior substrates, stabilising damaged areas, applying appropriate fillers and sealers, followed by sanding, priming, and repainting to restore the durability and appearance of the surfaces.
              </p>

              <p>
                For approximately three years, I worked on the restoration and painting of heritage buildings, including projects at the Christchurch Arts Centre and Riccarton House. These projects required careful preparation and specialised techniques when dealing with older substrates, such as aged timber and historic plaster. The work involved detailed surface preparation, stabilising damaged materials, sealing porous surfaces, and applying coatings compatible with heritage structures.
              </p>

              <p>
                After moving to Auckland, I established my own painting company, where I expanded my work into new residential builds and commercial projects. Much of the residential work involved spray application, particularly on new homes, ensuring smooth and consistent finishes on walls, ceilings, and trims. This included full surface preparation of plasterboard and timber, sanding, sealing, undercoating, and professional spray finishing.
              </p>

              <p>
                I also completed commercial projects, including painting work across a network of bank branches, where maintaining high preparation standards, clean finishes, and coordination with other trades was essential.
              </p>

              <p>
                The experience gained across earthquake restoration, heritage buildings, new residential construction, and commercial projects defines the way our company operates today.
              </p>

              <p>
                Fine Line Paint was built on the belief that skill, proper preparation, and quality materials are the foundation of a perfect finish.
              </p>

              <p>
                That is why Fine Line Paint is the right company for your project — because experience combined with quality workmanship delivers the best possible result.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">Where we work</p>
            <p className="mt-2 text-sm text-zinc-700">
              Melbourne and surrounding suburbs — Bayside, Inner South, Inner North and beyond.
            </p>
            <p className="mt-4 text-sm text-zinc-700">
              If you’re not sure whether we cover your area, send a quick message on the Quote page.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <img
                src="/images/foto1.jpg"
                alt="Painting project 1"
                className="h-40 w-full rounded-2xl object-cover"
              />
              <img
                src="/images/foto2.jpg"
                alt="Painting project 2"
                className="h-40 w-full rounded-2xl object-cover"
              />
              <img
                src="/images/foto3.jpg"
                alt="Painting project 3"
                className="h-40 w-full rounded-2xl object-cover"
              />
              <img
                src="/images/foto4.jpg"
                alt="Painting project 4"
                className="h-40 w-full rounded-2xl object-cover"
              />
              <img
                src="/images/foto5.jpg"
                alt="Painting project 5"
                className="h-40 w-full rounded-2xl object-cover"
              />
              <img
                src="/images/foto6.jpg"
                alt="Painting project 6"
                className="h-40 w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}