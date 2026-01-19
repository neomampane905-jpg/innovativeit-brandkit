import Link from "next/link";

import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export function CTASection({
  title,
  description,
  buttonLabel = "Contact Us",
  href = "/contact",
  target,
  rel,
}: CTASectionProps) {
  return (
    <section className="section">
      <div className="container-padding mx-auto max-w-5xl">
        <div className="gold-gradient glow-border rounded-3xl border border-gold/20 p-10 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
          {description ? (
            <p className="mt-3 text-white/70">{description}</p>
          ) : null}
          <Button asChild className="mt-6">
            <Link href={href} target={target} rel={rel}>
              {buttonLabel}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
