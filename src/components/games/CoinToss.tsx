import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCoins } from "@/hooks/useCoins";
import { toast } from "sonner";
import { formatCoins } from "@/lib/site";

export const CoinToss = () => {
  const { coins, add } = useCoins();
  const [pick, setPick] = useState<"H" | "T" | null>(null);
  const [result, setResult] = useState<"H" | "T" | null>(null);
  const [spinning, setSpinning] = useState(false);
  const bet = 500;

  const play = (choice: "H" | "T") => {
    if (coins < bet) return toast.error("Not enough coins!");
    setPick(choice);
    setSpinning(true);
    setResult(null);
    setTimeout(() => {
      const r = Math.random() < 0.5 ? "H" : "T";
      setResult(r);
      setSpinning(false);
      if (r === choice) {
        add(bet);
        toast.success(`You won ${formatCoins(bet)}!`);
      } else {
        add(-bet);
        toast.error(`Lost ${formatCoins(bet)}. Try again!`);
      }
    }, 1200);
  };

  return (
    <div className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card-elevated">
      <h3 className="text-xl font-bold text-foreground">Cricket Toss</h3>
      <p className="text-sm text-muted-foreground">Heads or Tails — bet {formatCoins(bet)} virtual coins</p>
      <div className="my-6 flex justify-center">
        <div className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-gold text-4xl font-extrabold text-gold-foreground shadow-gold ${spinning ? "animate-spin" : ""}`}>
          {spinning ? "?" : result ?? "₹"}
        </div>
      </div>
      <div className="flex gap-2">
        <Button onClick={() => play("H")} disabled={spinning} variant="hero" className="flex-1">Heads</Button>
        <Button onClick={() => play("T")} disabled={spinning} variant="emerald" className="flex-1">Tails</Button>
      </div>
    </div>
  );
};