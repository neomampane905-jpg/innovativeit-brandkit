import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  title: "InnovativeIT Solutions | South African Digital Agency",
  description:
    "InnovativeIT Solutions builds premium websites, web apps, and automation for ambitious South African brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen bg-black">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
