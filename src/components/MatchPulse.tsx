import { TrendingUp } from "lucide-react";

// Recent IPL 2025 playoff results — fan sentiment captured pre-match.
// Form strings reflect last 5 league-stage results for each side (W = Win, L = Loss, N = No result).
const matches = [
  {
    league: "IPL 2025 • Final",
    a: "Royal Challengers Bengaluru", b: "Punjab Kings",
    fans: { a: 58, b: 42 }, form: { a: "WWWLW", b: "WLWWW" },
    buzz: "92K fans",
  },
  {
    league: "IPL 2025 • Qualifier 2",
    a: "Punjab Kings", b: "Mumbai Indians",
    fans: { a: 49, b: 51 }, form: { a: "LWWWL", b: "WWWWL" },
    buzz: "67K fans",
  },
  {
    league: "IPL 2025 • Qualifier 1",
    a: "Royal Challengers Bengaluru", b: "Punjab Kings",
    fans: { a: 54, b: 46 }, form: { a: "WWLWW", b: "WWWLW" },
    buzz: "71K fans",
  },
];

const Bar = ({ value }: { value: number }) => (
  <div className="flex w-[88px] flex-col items-end gap-1">
    <span className="text-sm font-black tabular-nums text-foreground">{value}%</span>
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
      <div className="h-full rounded-full bg-gold" style={{ width: `${value}%` }} />
    </div>
  </div>
);

export const MatchPulse = () => (
  <section className="container py-10">
    <div className="mb-5 flex items-end justify-between">
      <div>
        <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">Match Pulse</h2>
        <p className="text-sm text-muted-foreground">Community sentiment & form — updated live.</p>
      </div>
    </div>
    <div className="space-y-3">
      {matches.map((m, i) => (
        <div key={i} className="overflow-hidden rounded-xl border border-border bg-gradient-card shadow-card-elevated">
          <div className="flex items-center justify-between bg-secondary/40 px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">{m.league}</span>
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground"><TrendingUp className="h-3 w-3" /> {m.buzz}</span>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-3">
            <div>
              <div className="text-base font-bold text-foreground">{m.a}</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Form {m.form.a}</div>
            </div>
            <Bar value={m.fans.a} />
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-3 border-t border-border px-4 py-3">
            <div>
              <div className="text-base font-bold text-foreground">{m.b}</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Form {m.form.b}</div>
            </div>
            <Bar value={m.fans.b} />
          </div>
        </div>
      ))}
    </div>
  </section>
);