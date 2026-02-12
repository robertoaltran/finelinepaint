import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  return (
    <div className="bg-zinc-50">
      <Container className="py-12">
        <SectionTitle
          eyebrow="Contact"
          title="Talk to us"
          subtitle="Fast response, friendly service, and clear quotes."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">Direct</p>
            <div className="mt-3 space-y-2 text-sm text-zinc-700">
              <p>
                Phone:{" "}
                <a className="font-semibold text-blue-700 hover:underline" href="tel:+61400000000">
                  0400 000 000
                </a>
              </p>
              <p>
                Email:{" "}
                <a className="font-semibold text-blue-700 hover:underline" href="mailto:bogapainters@gmail.com">
                  bogapainters@gmail.com
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a className="font-semibold text-blue-700 hover:underline" href="#">
                  Click to chat
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">Hours</p>
            <p className="mt-3 text-sm text-zinc-700">Mon–Sat: 8am – 6pm</p>
            <p className="mt-2 text-sm text-zinc-700">Sunday: by appointment</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
