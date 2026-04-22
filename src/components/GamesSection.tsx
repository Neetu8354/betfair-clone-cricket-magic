import { CoinToss } from "./games/CoinToss";
import { DiceRoll } from "./games/DiceRoll";
import { CricketPredict } from "./games/CricketPredict";
import { Button } from "@/components/ui/button";
import { useCoins } from "@/hooks/useCoins";
import { formatCoins } from "@/lib/site";
import { RefreshCw } from "lucide-react";

export const GamesSection = () => {
  const { coins, reset } = useCoins();
  return (
    <section id="games" className="container py-12">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-3xl font-extrabold text-foreground">Play Free Games</h2>
          <p className="text-muted-foreground">100% virtual coins. Zero real-money risk.</p>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-gold/30 bg-card px-4 py-2">
          <span className="text-sm text-muted-foreground">Wallet:</span>
          <span className="text-lg font-extrabold text-gold">{formatCoins(coins)}</span>
          <Button onClick={reset} variant="ghost" size="sm"><RefreshCw className="h-3.5 w-3.5" /> Reset</Button>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <CricketPredict />
        <CoinToss />
        <DiceRoll />
      </div>
    </section>
  );
};