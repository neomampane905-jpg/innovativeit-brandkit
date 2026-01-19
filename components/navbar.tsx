import Link from "next/link";

import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="container-padding mx-auto flex h-20 max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/40 text-lg font-semibold text-gold">
            T
          </div>
          <span className="text-lg font-semibold">InnovativeIT Solutions</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="link-hover text-sm">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button asChild variant="outline">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
      <div className="border-t border-white/5 md:hidden">
        <div className="container-padding mx-auto flex items-center justify-between py-3 text-xs">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="link-hover">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
