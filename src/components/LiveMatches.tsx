import { Radio } from "lucide-react";
import { SITE } from "@/lib/site";

// Recent verified IPL 2025 season fixtures (source: IPLT20.com / ESPNcricinfo).
// Static demo data — refresh manually when a new season starts.
const matches = [
  { league: "IPL 2025 • Final", a: "Royal Challengers Bengaluru", b: "Punjab Kings", score: "RCB won by 6 runs", live: false },
  { league: "IPL 2025 • Qualifier 2", a: "Punjab Kings", b: "Mumbai Indians", score: "PBKS won by 5 wickets", live: false },
  { league: "IPL 2025 • Qualifier 1", a: "Royal Challengers Bengaluru", b: "Punjab Kings", score: "RCB won by 8 wickets", live: false },
  { league: "IPL 2025 • Eliminator", a: "Mumbai Indians", b: "Gujarat Titans", score: "MI won by 20 runs", live: false },
];

export const LiveMatches = () => (
  <section className="container py-12">
    <div className="mb-6">
      <h2 className="text-3xl font-extrabold text-foreground">Live Cricket</h2>
      <p className="text-muted-foreground">Track scores. Predict outcomes. Win virtual glory.</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {matches.map((m, i) => (
        <a key={i} href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="group rounded-xl border border-border bg-gradient-card p-4 shadow-card-elevated transition-all hover:-translate-y-0.5 hover:border-emerald">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{m.league}</span>
            {m.live && (
              <span className="flex items-center gap-1 rounded-full bg-destructive/20 px-2 py-0.5 text-[10px] font-bold uppercase text-destructive">
                <Radio className="h-3 w-3 animate-pulse" /> Live
              </span>
            )}
          </div>
          <div className="mt-3 text-lg font-bold text-foreground">{m.a}</div>
          <div className="text-sm text-muted-foreground">vs</div>
          <div className="text-lg font-bold text-foreground">{m.b}</div>
          <div className="mt-3 text-sm font-semibold text-gold">{m.score}</div>
        </a>
      ))}
    </div>
  </section>
);