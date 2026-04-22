import { Home, BarChart3, Trophy, Activity, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

const items = [
  { icon: Home, label: "Home", href: "#top" },
  { icon: Activity, label: "Pulse", href: "#matches" },
  { icon: BarChart3, label: "Stats", href: "#stats" },
  { icon: Trophy, label: "Standings", href: "#standings" },
  { icon: MessageCircle, label: "Chat", href: SITE.whatsapp, external: true },
];

export const BottomNav = () => (
  <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 backdrop-blur-lg lg:hidden">
    <ul className="grid grid-cols-5">
      {items.map((it, i) => {
        const active = i === 2;
        return (
          <li key={it.label}>
            <a
              href={it.href}
              target={it.external ? "_blank" : undefined}
              rel={it.external ? "noopener noreferrer" : undefined}
              className={`relative flex flex-col items-center gap-1 py-2.5 transition-colors ${active ? "text-gold" : "text-muted-foreground hover:text-foreground"}`}
            >
              {active && <span className="absolute inset-x-6 top-0 h-0.5 rounded-b bg-gold" />}
              <it.icon className="h-5 w-5" strokeWidth={active ? 2.5 : 2} />
              <span className="text-[10px] font-semibold uppercase tracking-wider">{it.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  </nav>
);