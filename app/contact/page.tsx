import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { CTASection } from "@/components/cta-section";
import { Card } from "@/components/ui/card";
import { WHATSAPP_NUMBER } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  title: "Contact | InnovativeIT Solutions",
  description:
    "Get in touch with InnovativeIT Solutions for websites, apps, cybersecurity, and AI automation.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="section">
        <div className="container-padding mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-semibold">Let’s start your project</h1>
              <p className="mt-3 text-white/70">
                Share your vision and we’ll respond with a tailored plan and timeline.
              </p>
            </div>
            <ContactForm />
          </div>
          <div className="space-y-6">
            <Card className="space-y-4">
              <h2 className="text-xl font-semibold">Contact details</h2>
              <div className="space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gold" />
                  <span>hello@innovativeitsolutions.co.za</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gold" />
                  <span>{WHATSAPP_NUMBER}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gold" />
                  <span>South Africa (Remote)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-gold" />
                  <span>Mon - Fri, 08:00 - 18:00</span>
                </div>
              </div>
              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-gold/40 px-5 py-3 text-sm font-semibold text-gold transition hover:bg-gold/10"
              >
                WhatsApp Us
              </Link>
            </Card>
            <Card className="space-y-3">
              <h3 className="text-lg font-semibold">What happens next?</h3>
              <p className="text-sm text-white/70">
                We’ll confirm your requirements, align on timelines, and prepare a proposal within 48
                hours.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Need a quick answer?"
        description="Message us on WhatsApp for a same-day response."
        buttonLabel="Chat on WhatsApp"
        href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
        target="_blank"
        rel="noreferrer"
      />
    </div>
  );
}
