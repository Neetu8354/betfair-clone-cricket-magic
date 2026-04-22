import { Home, BarChart3, Trophy, Activity, Newspaper } from "lucide-react";

const items = [
  { icon: Home, label: "Home", href: "#top" },
  { icon: Activity, label: "Live", href: "#matches" },
  { icon: Newspaper, label: "Pulse", href: "#matches" },
  { icon: BarChart3, label: "Stats", href: "#stats" },
  { icon: Trophy, label: "Ranks", href: "#standings" },
];

export const BottomNav = () => (
  <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 backdrop-blur-lg lg:hidden">
    <ul className="grid grid-cols-5">
      {items.map((it) => (
        <li key={it.label}>
          <a href={it.href} className="flex flex-col items-center gap-1 py-2.5 text-muted-foreground transition-colors hover:text-foreground">
            <it.icon className="h-5 w-5" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">{it.label}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);