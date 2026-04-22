import { Home, BarChart3, Trophy, Ticket, Activity } from "lucide-react";
import { MyPicksSheet } from "./MyPicksSheet";

const items = [
  { icon: Home, label: "Home", href: "#top" },
  { icon: Activity, label: "Pulse", href: "#matches" },
  { icon: Ticket, label: "My Picks", picks: true },
  { icon: BarChart3, label: "Stats", href: "#stats" },
  { icon: Trophy, label: "Ranks", href: "#standings" },
];

export const BottomNav = () => (
  <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 backdrop-blur-lg lg:hidden">
    <ul className="grid grid-cols-5">
      {items.map((it) => {
        const active = !!it.picks;
        const inner = (
          <span className={`relative flex flex-col items-center gap-1 py-2.5 transition-colors ${active ? "text-gold" : "text-muted-foreground hover:text-foreground"}`}>
            {active && <span className="absolute inset-x-6 top-0 h-0.5 rounded-b bg-gold" />}
            <it.icon className="h-5 w-5" strokeWidth={active ? 2.5 : 2} />
            <span className="text-[10px] font-semibold uppercase tracking-wider">{it.label}</span>
          </span>
        );
        return (
          <li key={it.label}>
            {it.picks ? (
              <MyPicksSheet>
                <button className="w-full">{inner}</button>
              </MyPicksSheet>
            ) : (
              <a href={it.href}>{inner}</a>
            )}
          </li>
        );
      })}
    </ul>
  </nav>
);