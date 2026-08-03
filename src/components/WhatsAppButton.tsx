import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export const WhatsAppButton = () => (
  <a
    href={SITE.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    className="fixed bottom-20 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-glow transition-transform hover:scale-110 animate-pulse-glow lg:bottom-5 lg:right-5 lg:h-14 lg:w-14"
  >
    <MessageCircle className="h-6 w-6 text-white lg:h-7 lg:w-7" />
  </a>
);