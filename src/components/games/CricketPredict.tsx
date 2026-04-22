import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCoins } from "@/hooks/useCoins";
import { toast } from "sonner";
import { formatCoins } from "@/lib/site";

const matches = [
  { a: "Mumbai", b: "Chennai", odds: [1.8, 2.1] },
  { a: "Bengaluru", b: "Kolkata", odds: [2.0, 1.9] },
  { a: "Delhi", b: "Punjab", odds: [1.7, 2.3] },
];

export const CricketPredict = () => {
  const { coins, add } = useCoins();
  const [picks, setPicks] = useState<Record<number, 0 | 1 | undefined>>({});
  const bet = 1000;

  const submit = () => {
    const made = Object.keys(picks).length;
    if (!made) return toast.error("Pick at least one match");
    if (coins < bet * made) return toast.error("Not enough coins!");
    let delta = -bet * made;
    let wins = 0;
    Object.entries(picks).forEach(([idx, side]) => {
      const win = Math.random() < 0.5;
      if (win) {
        delta += Math.round(bet * matches[+idx].odds[side!]);
        wins++;
      }
    });
    add(delta);
    setPicks({});
    if (delta > 0) toast.success(`${wins} correct! Net +${formatCoins(delta)}`);
    else toast.error(`Net ${formatCoins(delta)}. Better luck next time!`);
  };

  return (
    <div className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card-elevated">
      <h3 className="text-xl font-bold text-foreground">Cricket Match Prediction</h3>
      <p className="text-sm text-muted-foreground">Pick winners — {formatCoins(bet)} virtual coins per pick</p>
      <div className="mt-4 space-y-2">
        {matches.map((m, idx) => (
          <div key={idx} className="flex items-center gap-2 rounded-lg border border-border bg-background/40 p-2">
            <span className="flex-1 text-sm font-semibold">{m.a} vs {m.b}</span>
            {[0, 1].map((s) => (
              <button
                key={s}
                onClick={() => setPicks((p) => ({ ...p, [idx]: p[idx] === s ? undefined : (s as 0 | 1) }))}
                className={`rounded-md px-3 py-1.5 text-xs font-bold transition-all ${picks[idx] === s ? "bg-gold text-gold-foreground" : "bg-secondary text-foreground hover:bg-muted"}`}
              >
                {s === 0 ? m.a : m.b} @{m.odds[s]}
              </button>
            ))}
          </div>
        ))}
      </div>
      <Button onClick={submit} variant="hero" className="mt-4 w-full">Place Predictions</Button>
    </div>
  );
};