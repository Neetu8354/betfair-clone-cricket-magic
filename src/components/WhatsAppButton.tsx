import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export const WhatsAppButton = () => (
  <a
    href={SITE.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-glow transition-transform hover:scale-110 animate-pulse-glow"
  >
    <MessageCircle className="h-7 w-7 text-white" />
  </a>
);