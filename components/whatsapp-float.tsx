import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+27XXXXXXXXX";

export function WhatsAppFloat() {
  return (
    <Link
      href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-black shadow-lg transition hover:-translate-y-1"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}

export { WHATSAPP_NUMBER };
