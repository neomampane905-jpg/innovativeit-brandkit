import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Gem, MonitorSmartphone, ShieldCheck, Zap } from "lucide-react";

import { CTASection } from "@/components/cta-section";
import { ProjectCard } from "@/components/project-card";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { processSteps, projects, services, testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "InnovativeIT Solutions | Your Idea. Our Execution.",
  description:
    "Premium digital agency delivering websites, web apps, cybersecurity, and AI automation across South Africa.",
};

const trustItems = [
  { label: "Fast Delivery", icon: Zap },
  { label: "Secure Builds", icon: ShieldCheck },
  { label: "Modern Design", icon: MonitorSmartphone },
  { label: "Clear Pricing", icon: Gem },
];

export default function HomePage() {
  return (
    <div>
      <section className="section relative overflow-hidden bg-gold-radial">
        <div className="container-padding mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6 motion-safe:animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold">
              Premium Digital Agency
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Your Idea. Our Execution.
            </h1>
            <p className="text-lg text-white/70">
              Websites, web apps, mobile-ready solutions, cybersecurity, and AI — built fast, built right.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="https://wa.me/27XXXXXXXXX" target="_blank" rel="noreferrer">
                  WhatsApp Us
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative motion-safe:animate-fade-up">
            <div className="glow-border rounded-3xl border border-gold/20 bg-white/5 p-6">
              <div className="relative h-72 w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/placeholder.svg"
                  alt="InnovativeIT Solutions preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-white/70">
                <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
                  <p className="text-xs uppercase text-white/40">Avg. delivery</p>
                  <p className="mt-1 text-lg font-semibold text-white">21 days</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
                  <p className="text-xs uppercase text-white/40">Satisfaction</p>
                  <p className="mt-1 text-lg font-semibold text-white">98%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 py-8">
        <div className="container-padding mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3 text-sm text-white/70">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gold">
                <item.icon className="h-4 w-4" />
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-padding mx-auto max-w-6xl space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold">Services built for scale</h2>
              <p className="mt-2 text-white/70">
                Strategic design, engineering, and security for ambitious teams.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Link key={service.title} href="/services" className="block">
                <ServiceCard {...service} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/5">
        <div className="container-padding mx-auto max-w-6xl space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold">Featured work</h2>
              <p className="mt-2 text-white/70">
                Real outcomes delivered for South African businesses.
              </p>
            </div>
            <Link href="/portfolio" className="flex items-center text-sm text-gold">
              View all projects <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-padding mx-auto max-w-6xl space-y-8">
          <div>
            <h2 className="text-3xl font-semibold">Our process</h2>
            <p className="mt-2 text-white/70">
              A clear, collaborative journey from discovery to launch.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-black/60 p-5 text-sm text-white/70"
              >
                <div className="text-xs uppercase text-white/40">Step {index + 1}</div>
                <p className="mt-2 text-lg font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/5">
        <div className="container-padding mx-auto max-w-6xl space-y-8">
          <div>
            <h2 className="text-3xl font-semibold">Client testimonials</h2>
            <p className="mt-2 text-white/70">
              Trusted by growth-focused founders and teams.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to build?"
        description="Let’s scope your next digital project and deliver it with confidence."
        buttonLabel="Contact Us"
      />
    </div>
  );
}
