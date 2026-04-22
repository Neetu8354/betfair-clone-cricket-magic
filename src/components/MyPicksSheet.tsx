import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCoins } from "@/hooks/useCoins";
import { Check, X, Coins, Trash2, Gift } from "lucide-react";
import { toast } from "sonner";
import { ReactNode } from "react";

const StatusBadge = ({ s }: { s: "open" | "won" | "lost" }) => {
  const map = {
    open: "bg-secondary text-muted-foreground",
    won: "bg-back text-[hsl(220_15%_10%)]",
    lost: "bg-lay text-[hsl(220_15%_10%)]",
  };
  return <span className={`rounded px-1.5 py-0.5 text-[9px] font-black uppercase ${map[s]}`}>{s}</span>;
};

export const MyPicksSheet = ({ children }: { children: ReactNode }) => {
  const { coins, picks, wins, resolveLast, reset, claimDaily } = useCoins();
  const open = picks.filter((p) => p.status === "open");
  const settled = picks.filter((p) => p.status !== "open");
  const totalStaked = open.reduce((s, p) => s + p.stake, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="bottom" className="h-[85vh] overflow-y-auto rounded-t-2xl border-gold/30 bg-background p-0">
        <SheetHeader className="sticky top-0 z-10 border-b border-border bg-gold px-4 py-3 text-left">
          <SheetTitle className="flex items-center justify-between text-gold-foreground">
            <span className="text-base font-black">My Picks</span>
            <span className="flex items-center gap-1 rounded-md bg-gold-foreground px-2 py-1 text-xs font-bold text-gold">
              <Coins className="h-3 w-3" /> {coins.toLocaleString("en-IN")} PC
            </span>
          </SheetTitle>
        </SheetHeader>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-2 border-b border-border bg-secondary/30 p-3 text-center">
          <div><div className="text-lg font-black text-foreground">{open.length}</div><div className="text-[10px] uppercase tracking-wider text-muted-foreground">Open</div></div>
          <div><div className="text-lg font-black text-back">{wins}</div><div className="text-[10px] uppercase tracking-wider text-muted-foreground">Wins</div></div>
          <div><div className="text-lg font-black text-gold tabular-nums">{totalStaked}</div><div className="text-[10px] uppercase tracking-wider text-muted-foreground">At risk</div></div>
        </div>

        {/* Quick actions */}
        <div className="flex gap-2 border-b border-border p-3">
          <Button onClick={() => { claimDaily(); toast.success("+500 PC daily bonus claimed"); }} variant="hero" size="sm" className="flex-1"><Gift className="h-3.5 w-3.5" /> Daily +500</Button>
          <Button onClick={() => { reset(); toast("Wallet reset to 5,000 PC"); }} variant="outline" size="sm" className="flex-1"><Trash2 className="h-3.5 w-3.5" /> Reset</Button>
        </div>

        {/* Open picks */}
        <div className="p-3">
          <h3 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Open ({open.length})</h3>
          {open.length === 0 && <p className="rounded-lg border border-dashed border-border p-4 text-center text-xs text-muted-foreground">No open picks. Lock one from the Prediction Desk.</p>}
          <div className="space-y-2">
            {open.map((p) => (
              <div key={p.id} className="rounded-lg border border-border bg-card p-3">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{p.match}</div>
                    <div className="truncate text-sm font-bold text-foreground">{p.selection} <span className={`text-[10px] font-black ${p.side === "for" ? "text-back" : "text-lay"}`}>· {p.side === "for" ? "FOR" : "AGAINST"}</span></div>
                  </div>
                  <StatusBadge s={p.status} />
                </div>
                <div className="mb-2 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Stake <span className="font-bold text-foreground tabular-nums">{p.stake} PC</span> @ <span className="font-bold text-foreground">{p.odds}</span></span>
                  <span>Win <span className="font-bold text-gold tabular-nums">{Math.round(p.stake * p.odds)} PC</span></span>
                </div>
                <div className="flex gap-1.5">
                  <button onClick={() => { resolveLast(true); toast.success("🎉 Pick won!"); }} className="flex flex-1 items-center justify-center gap-1 rounded-md bg-back py-1.5 text-[11px] font-bold text-[hsl(220_15%_10%)] hover:brightness-110"><Check className="h-3 w-3" /> Won</button>
                  <button onClick={() => { resolveLast(false); toast("Pick lost."); }} className="flex flex-1 items-center justify-center gap-1 rounded-md bg-lay py-1.5 text-[11px] font-bold text-[hsl(220_15%_10%)] hover:brightness-110"><X className="h-3 w-3" /> Lost</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Settled */}
        {settled.length > 0 && (
          <div className="border-t border-border p-3">
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">History</h3>
            <div className="space-y-1.5">
              {settled.map((p) => (
                <div key={p.id} className="flex items-center justify-between rounded-md border border-border bg-card/50 px-3 py-2 text-xs">
                  <div className="min-w-0">
                    <div className="truncate font-semibold text-foreground">{p.selection} <span className="text-muted-foreground">· {p.side.toUpperCase()}</span></div>
                    <div className="text-[10px] text-muted-foreground">{p.match} · {p.stake} PC @ {p.odds}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`tabular-nums font-bold ${p.status === "won" ? "text-back" : "text-muted-foreground line-through"}`}>{p.status === "won" ? `+${Math.round(p.stake * p.odds) - p.stake}` : `-${p.stake}`} PC</span>
                    <StatusBadge s={p.status} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="border-t border-border p-3 text-center text-[10px] text-muted-foreground">
          Pitch Coins are virtual & free. No real money, no purchases, no withdrawals.
        </p>
      </SheetContent>
    </Sheet>
  );
};