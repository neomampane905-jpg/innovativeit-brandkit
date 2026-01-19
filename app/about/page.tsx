import type { Metadata } from "next";
import Image from "next/image";

import { CTASection } from "@/components/cta-section";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About | InnovativeIT Solutions",
  description:
    "Learn about InnovativeIT Solutions, our mission, and the team delivering premium digital experiences.",
};

const values = [
  {
    title: "Excellence",
    description: "We craft every detail with intention and polish.",
  },
  {
    title: "Loyalty",
    description: "We invest in long-term partnerships built on trust.",
  },
  {
    title: "Results",
    description: "We focus on measurable outcomes that move the needle.",
  },
  {
    title: "Integrity",
    description: "We communicate clearly and deliver what we promise.",
  },
];

const team = [
  {
    name: "Tumi N.",
    role: "Creative Director",
  },
  {
    name: "Michael P.",
    role: "Lead Developer",
  },
  {
    name: "Sibongile R.",
    role: "Security Specialist",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="section">
        <div className="container-padding mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold">Our story</h1>
            <p className="text-white/70">
              InnovativeIT Solutions is a South African digital agency focused on high-performing web
              experiences, secure builds, and growth-ready automation. We blend modern design with
              engineering excellence to help ambitious teams launch faster.
            </p>
            <p className="text-white/70">
              Our mission is to deliver premium digital products that convert, scale, and stand the
              test of time.
            </p>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/placeholder.svg"
              alt="Team collaboration"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white/5">
        <div className="container-padding mx-auto max-w-6xl space-y-8">
          <div>
            <h2 className="text-3xl font-semibold">Our values</h2>
            <p className="mt-2 text-white/70">
              We stay true to our principles in every project partnership.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="space-y-2">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-white/70">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-padding mx-auto max-w-6xl space-y-8">
          <div>
            <h2 className="text-3xl font-semibold">Meet the team</h2>
            <p className="mt-2 text-white/70">
              A focused crew of strategists, designers, and engineers.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="space-y-2 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 text-lg font-semibold text-gold">
                  {member.name.slice(0, 1)}
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-white/60">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s build together"
        description="Tell us about your goals and we’ll map the right solution."
        buttonLabel="Contact the Team"
      />
    </div>
  );
}
