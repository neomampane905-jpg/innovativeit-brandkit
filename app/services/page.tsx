import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { ServiceCard } from "@/components/service-card";
import { Card } from "@/components/ui/card";
import { faqs, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | InnovativeIT Solutions",
  description:
    "Explore website design, app development, branding, cybersecurity, and AI automation services from InnovativeIT Solutions.",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="section">
        <div className="container-padding mx-auto max-w-6xl space-y-6">
          <div>
            <h1 className="text-4xl font-semibold">Services built for results</h1>
            <p className="mt-3 max-w-2xl text-white/70">
              We combine strategy, design, engineering, and security to deliver digital products that
              convert.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/5">
        <div className="container-padding mx-auto max-w-6xl space-y-6">
          <div>
            <h2 className="text-3xl font-semibold">FAQ</h2>
            <p className="mt-2 text-white/70">
              Answers to common questions about timelines, payments, and ongoing support.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <Card key={faq.question} className="space-y-3">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="text-sm text-white/70">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a tailored service mix?"
        description="Tell us about your goals and we’ll build a custom plan."
        buttonLabel="Start a Project"
      />
    </div>
  );
}
