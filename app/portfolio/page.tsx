import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio | InnovativeIT Solutions",
  description:
    "Browse recent digital projects and case studies from InnovativeIT Solutions.",
};

export default function PortfolioPage() {
  return (
    <section className="section">
      <div className="container-padding mx-auto max-w-6xl space-y-8">
        <div>
          <h1 className="text-4xl font-semibold">Portfolio</h1>
          <p className="mt-3 max-w-2xl text-white/70">
            A snapshot of websites, platforms, and digital experiences built for ambitious brands.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
