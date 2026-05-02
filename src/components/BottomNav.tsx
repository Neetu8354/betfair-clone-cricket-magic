import { Home, BarChart3, Trophy, Activity, Newspaper } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type Item = { icon: typeof Home; label: string; to: string; match?: (path: string, hash: string) => boolean };

const items: Item[] = [
  { icon: Home, label: "Home", to: "/", match: (p, h) => p === "/" && (h === "" || h === "#top") },
  { icon: Activity, label: "Live", to: "/#matches", match: (p, h) => p === "/" && h === "#matches" },
  { icon: BarChart3, label: "Stats", to: "/#stats", match: (p, h) => p === "/" && h === "#stats" },
  { icon: Trophy, label: "Ranks", to: "/#standings", match: (p, h) => p === "/" && h === "#standings" },
  { icon: Newspaper, label: "Blog", to: "/blog", match: (p) => p.startsWith("/blog") },
];

export const BottomNav = () => {
  const { pathname, hash } = useLocation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/85 backdrop-blur-xl lg:hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <ul className="grid grid-cols-5 px-1 pb-[env(safe-area-inset-bottom)]">
        {items.map((it) => {
          const active = it.match?.(pathname, hash) ?? false;
          return (
            <li key={it.label}>
              <Link
                to={it.to}
                className="group flex flex-col items-center gap-1 py-2.5"
                aria-current={active ? "page" : undefined}
              >
                <span
                  className={`flex h-9 w-12 items-center justify-center rounded-full transition-all ${
                    active
                      ? "bg-gold/15 text-gold"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  <it.icon className="h-[18px] w-[18px]" />
                </span>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                    active ? "text-gold" : "text-muted-foreground"
                  }`}
                >
                  {it.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};