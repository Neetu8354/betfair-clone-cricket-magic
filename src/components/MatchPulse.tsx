import { TrendingUp } from "lucide-react";

const matches = [
  {
    league: "IPL T20 • Today 19:30",
    a: "Mumbai", b: "Chennai",
    fans: { a: 62, b: 38 }, form: { a: "WWLWW", b: "LWWLW" },
    buzz: "61K fans",
  },
  {
    league: "T20I • Today 19:45",
    a: "India", b: "Australia",
    fans: { a: 71, b: 29 }, form: { a: "WWWLW", b: "WLWWL" },
    buzz: "84K fans",
  },
  {
    league: "BBL • Tomorrow 14:00",
    a: "Sydney", b: "Perth",
    fans: { a: 44, b: 56 }, form: { a: "LWLWW", b: "WWWLW" },
    buzz: "22K fans",
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