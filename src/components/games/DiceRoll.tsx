import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCoins } from "@/hooks/useCoins";
import { toast } from "sonner";
import { formatCoins } from "@/lib/site";

export const DiceRoll = () => {
  const { coins, add } = useCoins();
  const [pick, setPick] = useState<"high" | "low" | null>(null);
  const [die, setDie] = useState(1);
  const [rolling, setRolling] = useState(false);
  const bet = 300;

  const play = (choice: "high" | "low") => {
    if (coins < bet) return toast.error("Not enough coins!");
    setPick(choice);
    setRolling(true);
    let n = 0;
    const tick = setInterval(() => {
      setDie(Math.ceil(Math.random() * 6));
      n++;
      if (n > 10) {
        clearInterval(tick);
        const r = Math.ceil(Math.random() * 6);
        setDie(r);
        setRolling(false);
        const win = (choice === "high" && r >= 4) || (choice === "low" && r <= 3);
        if (win) { add(bet); toast.success(`Rolled ${r}! +${formatCoins(bet)}`); }
        else { add(-bet); toast.error(`Rolled ${r}. -${formatCoins(bet)}`); }
      }
    }, 80);
  };

  return (
    <div className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card-elevated">
      <h3 className="text-xl font-bold text-foreground">Lucky Dice</h3>
      <p className="text-sm text-muted-foreground">High (4-6) or Low (1-3) — bet {formatCoins(bet)}</p>
      <div className="my-6 flex justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-gold bg-background text-5xl font-extrabold text-gold shadow-gold">
          {die}
        </div>
      </div>
      <div className="flex gap-2">
        <Button onClick={() => play("low")} disabled={rolling} variant="emerald" className="flex-1">Low (1-3)</Button>
        <Button onClick={() => play("high")} disabled={rolling} variant="hero" className="flex-1">High (4-6)</Button>
      </div>
    </div>
  );
};