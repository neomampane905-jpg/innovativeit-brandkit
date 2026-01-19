import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

interface PortfolioDetailProps {
  params: { slug: string };
}

export function generateMetadata({ params }: PortfolioDetailProps): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  return {
    title: project
      ? `${project.title} | InnovativeIT Solutions`
      : "Project | InnovativeIT Solutions",
    description: project?.summary ?? "Project case study from InnovativeIT Solutions.",
  };
}

export default function PortfolioDetailPage({ params }: PortfolioDetailProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return (
      <section className="section">
        <div className="container-padding mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <p className="mt-3 text-white/70">Please return to the portfolio listing.</p>
          <Button asChild className="mt-6">
            <Link href="/portfolio">Back to Portfolio</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <div>
      <section className="section">
        <div className="container-padding mx-auto max-w-5xl space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-wide text-gold">{project.category}</p>
            <h1 className="text-4xl font-semibold">{project.title}</h1>
            <p className="text-white/70">{project.summary}</p>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-white/10 bg-black/60 p-6">
              <h2 className="text-xl font-semibold">Problem</h2>
              <p className="text-sm text-white/70">
                The client needed a premium digital experience that simplified onboarding and
                increased trust with their customers.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-white/10 bg-black/60 p-6">
              <h2 className="text-xl font-semibold">Solution</h2>
              <p className="text-sm text-white/70">
                We delivered a streamlined UX, new visual system, and optimized build performance.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-white/10 bg-black/60 p-6">
              <h2 className="text-xl font-semibold">Key Features</h2>
              <ul className="text-sm text-white/70">
                <li>• Responsive UI kit</li>
                <li>• Secure authentication flow</li>
                <li>• Analytics-ready dashboards</li>
              </ul>
            </div>
            <div className="space-y-3 rounded-2xl border border-white/10 bg-black/60 p-6">
              <h2 className="text-xl font-semibold">Tech Used</h2>
              <ul className="text-sm text-white/70">
                <li>• Next.js + TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• API integrations</li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl border border-gold/20 bg-gold/10 p-6 text-sm text-white/80">
            <p>
              Results: Delivered a faster onboarding journey with improved conversions and clearer
              product storytelling.
            </p>
          </div>
        </div>
      </section>
      <CTASection
        title="Want something similar?"
        description="Let’s build a tailored solution for your business goals."
        buttonLabel="Start Your Project"
      />
    </div>
  );
}
