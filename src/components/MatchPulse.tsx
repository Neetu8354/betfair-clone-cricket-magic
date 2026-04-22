import { TrendingUp } from "lucide-react";
import { SITE } from "@/lib/site";

const matches = [
  {
    league: "IPL T20 • Today 19:30",
    a: "Mumbai", b: "Chennai",
    fans: { a: 62, b: 38 }, form: { a: "WWLWW", b: "LWWLW" },
    matched: "₹61,088",
  },
  {
    league: "T20I • Today 19:45",
    a: "India", b: "Australia",
    fans: { a: 71, b: 29 }, form: { a: "WWWLW", b: "WLWWL" },
    matched: "₹84,210",
  },
  {
    league: "BBL • Tomorrow 14:00",
    a: "Sydney", b: "Perth",
    fans: { a: 44, b: 56 }, form: { a: "LWLWW", b: "WWWLW" },
    matched: "₹22,540",
  },
];

const Cell = ({ label, value, tone }: { label: string; value: string; tone: "back" | "lay" }) => (
  <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className={`flex w-[68px] flex-col items-center justify-center rounded-sm py-1.5 transition-all hover:brightness-110 ${tone === "back" ? "bg-back" : "bg-lay"}`}>
    <span className="text-lg font-black leading-none tracking-tight text-[hsl(220_15%_10%)]">{value}</span>
    <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-[hsl(220_15%_10%)]/70">{label}</span>
  </a>
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
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground"><TrendingUp className="h-3 w-3" /> Pool {m.matched}</span>
          </div>
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3 px-4 py-3">
            <div>
              <div className="text-base font-bold text-foreground">{m.a}</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Form {m.form.a}</div>
            </div>
            <Cell label="Fans %" value={`${m.fans.a}`} tone="back" />
            <Cell label="Predict" value="Pick" tone="lay" />
          </div>
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-t border-border px-4 py-3">
            <div>
              <div className="text-base font-bold text-foreground">{m.b}</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Form {m.form.b}</div>
            </div>
            <Cell label="Fans %" value={`${m.fans.b}`} tone="back" />
            <Cell label="Predict" value="Pick" tone="lay" />
          </div>
        </div>
      ))}
    </div>
  </section>
);