import { useMemo, useState } from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

const mockProjects = [
  {
    id: "1",
    title: "Bright Living Room",
    category: "Interior",
    beforeUrl: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=70",
    afterUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=70",
    description: "Neutral palette with crisp edges.",
  },
  {
    id: "2",
    title: "Exterior Refresh",
    category: "Exterior",
    beforeUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=70",
    afterUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=70",
    description: "Prep + two coats for a durable finish.",
  },
  {
    id: "3",
    title: "Door & Trim Upgrade",
    category: "Doors",
    beforeUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70",
    afterUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=70",
    description: "Smooth enamel, clean lines.",
  },
];

const categories = ["All", "Interior", "Exterior", "Doors", "Ceilings", "Commercial"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return mockProjects;
    return mockProjects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="bg-zinc-50">
      <Container className="py-12">
        <SectionTitle
          eyebrow="Portfolio"
          title="Before & After transformations"
          subtitle="Filter by category and explore the results."
        />

        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={
                "rounded-full px-3 py-1 text-sm font-semibold transition " +
                (filter === c
                  ? "bg-blue-600 text-white"
                  : "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50")
              }
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              category={p.category}
              beforeUrl={p.beforeUrl}
              afterUrl={p.afterUrl}
              description={p.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
