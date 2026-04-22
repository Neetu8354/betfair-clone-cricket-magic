import { useState } from "react";
import { Delete, RefreshCw, Coins, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { useCoins } from "@/hooks/useCoins";
import { toast } from "sonner";

const matches = [
  {
    id: "ind-aus",
    league: "T20I • Today 19:45",
    a: "India", b: "Australia",
    pool: "₹84,210",
    rows: [
      { name: "India", form: "WWWLW", back: { o: "1.62", v: "₹1,226" }, lay: { o: "1.65", v: "₹386" } },
      { name: "Australia", form: "WLWWL", back: { o: "2.40", v: "₹77",  }, lay: { o: "2.46", v: "₹73"  } },
      { name: "The Tie", form: "—",     back: { o: "12.0", v: "₹366" }, lay: { o: "14.5", v: "₹779" } },
    ],
  },
];

const Cell = ({ tone, o, v, onClick, active }: { tone: "back" | "lay"; o: string; v: string; onClick: () => void; active: boolean }) => (
  <button
    onClick={onClick}
    className={`flex w-[68px] flex-col items-center justify-center rounded-sm py-1.5 transition-all ${
      tone === "back"
        ? `bg-back hover:brightness-110 ${active ? "ring-2 ring-offset-2 ring-offset-card ring-back" : ""}`
        : `bg-lay hover:brightness-110 ${active ? "ring-2 ring-offset-2 ring-offset-card ring-lay" : ""}`
    }`}
  >
    <span className="text-lg font-black leading-none tracking-tight text-[hsl(220_15%_10%)]">{o}</span>
    <span className="mt-0.5 text-[10px] font-medium text-[hsl(220_15%_10%)]/70">{v}</span>
  </button>
);

const KEYS = ["1","2","3","4","5","6","7","8","9","0","00","."];

export const PredictionPicker = () => {
  const m = matches[0];
  const [pick, setPick] = useState<{ row: number; tone: "back" | "lay" } | null>({ row: 1, tone: "back" });
  const [confidence, setConfidence] = useState("100");
  const { coins, picks, placePick, resolveLast } = useCoins();
  const lastOpen = picks.find((p) => p.status === "open");

  const tap = (k: string) => {
    if (k === "back") return setConfidence((c) => c.slice(0, -1) || "0");
    setConfidence((c) => (c === "0" ? k : c + k));
  };
  const bump = (n: number) => setConfidence((c) => String(Math.max(0, (parseInt(c || "0", 10) + n))));

  const selectedLabel = pick ? m.rows[pick.row].name : "—";
  const stake = parseInt(confidence || "0", 10);
  const odds = pick ? parseFloat(pick.tone === "back" ? m.rows[pick.row].back.o : m.rows[pick.row].lay.o) : 0;
  const potential = Math.round(stake * odds);

  const handlePlace = () => {
    if (!pick) return toast.error("Pick a side first");
    if (stake <= 0) return toast.error("Set a stake");
    if (stake > coins) return toast.error("Not enough Pitch Coins");
    const ok = placePick({
      match: `${m.a} vs ${m.b}`,
      selection: m.rows[pick.row].name,
      side: pick.tone === "back" ? "for" : "against",
      odds,
      stake,
    });
    if (ok) toast.success(`Pick placed · ${stake} PC on ${m.rows[pick.row].name}`);
  };

  const handleResolve = (won: boolean) => {
    resolveLast(won);
    toast(won ? "🎉 Pick won! Coins credited." : "Better luck next match.");
  };

  return (
    <section className="container py-10">
      <div className="mb-4">
        <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">Prediction Desk</h2>
        <p className="text-sm text-muted-foreground">Pick a side, set your confidence, share your call.</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card-elevated">
        {/* Match strip */}
        <div className="flex items-center justify-between bg-secondary/60 px-4 py-3">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-gold">{m.league}</div>
            <div className="text-base font-bold text-foreground">{m.a} <span className="text-muted-foreground">vs</span> {m.b}</div>
          </div>
          <span className="rounded-full bg-background/60 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">Pool {m.pool}</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-[1fr_64px_64px] items-center gap-3 px-4 pt-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          <span>Selection</span>
          <span className="text-center text-back">For</span>
          <span className="text-center text-lay">Against</span>
        </div>

        {/* Rows */}
        <div className="space-y-1 px-4 py-3">
          {m.rows.map((r, i) => (
            <div key={r.name} className="grid grid-cols-[1fr_64px_64px] items-center gap-3 rounded-lg py-1.5">
              <div>
                <div className="text-sm font-bold text-foreground">{r.name}</div>
                <div className="text-[11px] text-muted-foreground">Form {r.form}</div>
              </div>
              <Cell tone="back" o={r.back.o} v={r.back.v} onClick={() => setPick({ row: i, tone: "back" })} active={pick?.row === i && pick?.tone === "back"} />
              <Cell tone="lay" o={r.lay.o} v={r.lay.v} onClick={() => setPick({ row: i, tone: "lay" })} active={pick?.row === i && pick?.tone === "lay"} />
            </div>
          ))}
        </div>

        {/* Picker panel */}
        <div className="border-t border-border bg-secondary/30 p-4">
          <div className="mb-3 text-xs text-muted-foreground">
            Your call: <span className="font-bold text-foreground">{selectedLabel}</span>
            {pick && <span className={`ml-1 font-bold ${pick.tone === "back" ? "text-back" : "text-lay"}`}>· {pick.tone === "back" ? "FOR" : "AGAINST"}</span>}
          </div>

          {/* Stake row */}
          <div className="mb-2 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>Stake (Pitch Coins · virtual)</span>
            <span>Potential: <span className="font-bold text-gold tabular-nums">{potential.toLocaleString("en-IN")} PC</span></span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center justify-between rounded-lg bg-card px-2 py-1.5">
              <button onClick={() => bump(-1)} aria-label="decrease" className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-lg font-bold text-foreground hover:bg-muted">−</button>
              <span className="text-base font-extrabold text-foreground tabular-nums">{confidence}</span>
              <button onClick={() => bump(1)} aria-label="increase" className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-lg font-bold text-foreground hover:bg-muted">+</button>
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={() => setConfidence("0")} variant="ghost" size="sm" className="flex-1"><RefreshCw className="h-3.5 w-3.5" /> Reset</Button>
              <Button onClick={handlePlace} variant="hero" size="sm" className="flex-1"><Coins className="h-3.5 w-3.5" /> Place</Button>
            </div>
          </div>

          {/* Quick chips */}
          <div className="mt-2 grid grid-cols-4 gap-2">
            {[10, 25, 50, 100].map((n) => (
              <button key={n} onClick={() => setConfidence(String(n))} className="rounded-md bg-card py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted">+{n}</button>
            ))}
          </div>

          {/* Keypad */}
          <div className="mt-3 grid grid-cols-7 gap-1.5">
            {KEYS.map((k) => (
              <button key={k} onClick={() => tap(k)} className="rounded-md bg-card py-2.5 text-base font-bold text-foreground transition-colors hover:bg-muted">{k}</button>
            ))}
            <button onClick={() => tap("back")} aria-label="backspace" className="flex items-center justify-center rounded-md bg-secondary py-2.5 text-foreground hover:bg-muted">
              <Delete className="h-4 w-4" />
            </button>
          </div>

          {lastOpen && (
            <div className="mt-3 flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2">
              <div className="text-[11px]">
                <div className="font-bold text-foreground">Open: {lastOpen.selection} <span className="text-muted-foreground">({lastOpen.side === "for" ? "FOR" : "AGAINST"})</span></div>
                <div className="text-muted-foreground">Stake {lastOpen.stake} PC @ {lastOpen.odds}</div>
              </div>
              <div className="flex gap-1.5">
                <button onClick={() => handleResolve(true)} className="flex items-center gap-1 rounded-md bg-back px-2 py-1 text-[11px] font-bold text-[hsl(220_15%_10%)] hover:brightness-110"><Check className="h-3 w-3" /> Won</button>
                <button onClick={() => handleResolve(false)} className="flex items-center gap-1 rounded-md bg-lay px-2 py-1 text-[11px] font-bold text-[hsl(220_15%_10%)] hover:brightness-110"><X className="h-3 w-3" /> Lost</button>
              </div>
            </div>
          )}

          <p className="mt-3 text-center text-[10px] text-muted-foreground">
            Pitch Coins are virtual & free. No real money, no withdrawals. Just for fun.
          </p>
        </div>
      </div>
      <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-3 block text-center text-xs text-muted-foreground hover:text-foreground">
        Share your pick on WhatsApp →
      </a>
    </section>
  );
};