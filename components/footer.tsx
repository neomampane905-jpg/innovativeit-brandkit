import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/95">
      <div className="container-padding mx-auto grid max-w-6xl gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/40 text-lg font-semibold text-gold">
              T
            </div>
            <span className="text-lg font-semibold">InnovativeIT Solutions</span>
          </div>
          <p className="text-sm text-white/60">
            Premium digital delivery for ambitious brands across South Africa and beyond.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-hover">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Social</h4>
          <div className="mt-4 flex items-center gap-3">
            {socials.map((social) => (
              <button
                key={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-gold/60 hover:text-gold"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} InnovativeIT Solutions. All rights reserved.
      </div>
    </footer>
  );
}
