import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Ticket, Play, ChevronDown, RotateCcw, Delete, Home, BookA, CircleDot, ArrowLeftRight, Dices, Star, Coins } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useCoins } from "@/hooks/useCoins";
import { toast } from "sonner";

type Tone = "back" | "lay";
type Pick = { row: number; tone: Tone };

const MARKETS = [
  {
    title: "Match Odds",
    pool: 61088,
    rows: [
      { name: "India",     stake: 0,    back: { o: 1.58, v: 1226 }, lay: { o: 1.59, v: 386 }, dim: false },
      { name: "Australia", stake: 1480, back: { o: 8.4,  v: 77   }, lay: { o: 8.6,  v: 73  }, dim: false },
    ],
    extra: { name: "The Draw", stake: 0, back: { o: 3.95, v: 366 }, lay: { o: 4.0, v: 779 }, dim: true },
  },
];

const fmtPC = (n: number) => n.toLocaleString("en-IN");

const OddsCell = ({ tone, o, v, active, dim, onClick }:{ tone: Tone; o: number; v: number; active: boolean; dim?: boolean; onClick: () => void; }) => {
  const base = tone === "back" ? "bg-back" : "bg-lay";
  const dimBg = tone === "back" ? "bg-[hsl(60_25%_60%)]" : "bg-[hsl(0_35%_85%)]";
  return (
    <button
      onClick={onClick}
      className={`flex h-[52px] w-[68px] flex-col items-center justify-center rounded-[3px] transition active:scale-[0.97] ${dim ? dimBg : base} ${active ? "ring-2 ring-offset-2 ring-offset-white ring-[hsl(220_15%_10%)]" : ""}`}
    >
      <span className="text-[18px] font-black leading-none text-[hsl(220_15%_10%)]">{o}</span>
      <span className="mt-1 text-[11px] font-medium text-[hsl(220_15%_10%)]/75">£{fmtPC(v)}</span>
    </button>
  );
};

const SelectionRow = ({ name, stake, back, lay, dim, pickedTone, onPick }:{
  name: string; stake: number; back:{o:number;v:number}; lay:{o:number;v:number}; dim?: boolean;
  pickedTone: Tone | null; onPick: (t: Tone) => void;
}) => (
  <div className="flex items-center justify-between border-b border-[hsl(220_8%_88%)] bg-white px-4 py-3">
    <div className="flex items-center gap-2 min-w-0">
      <svg width="18" height="18" viewBox="0 0 24 24" className="shrink-0 text-[hsl(220_15%_25%)]"><path fill="currentColor" d="M3 17l4-4 4 3 7-8 3 3v9H3z" opacity=".25"/><path fill="none" stroke="currentColor" strokeWidth="2" d="M3 17l4-4 4 3 7-8"/></svg>
      <div className="min-w-0">
        <div className="truncate text-[15px] font-bold text-[hsl(220_15%_10%)]">{name}</div>
        <div className="text-[12px] font-medium text-[hsl(140_65%_38%)]">» {stake > 0 ? `${fmtPC(stake)} PC` : "0 PC"}</div>
      </div>
    </div>
    <div className="flex items-center gap-1.5">
      <OddsCell tone="back" o={back.o} v={back.v} dim={dim} active={pickedTone === "back"} onClick={() => onPick("back")} />
      <OddsCell tone="lay"  o={lay.o}  v={lay.v}  dim={dim} active={pickedTone === "lay"}  onClick={() => onPick("lay")} />
    </div>
  </div>
);

const PicksScreen = () => {
  const m = MARKETS[0];
  const { coins, placePick, claimDaily } = useCoins();
  const [pick, setPick] = useState<Pick | null>({ row: 1, tone: "back" });
  const [stakeStr, setStakeStr] = useState("2");
  const [bonus, setBonus] = useState(true);

  const stake = parseInt(stakeStr || "0", 10) || 0;
  const odds = useMemo(() => {
    if (!pick) return 0;
    const r = m.rows[pick.row];
    return pick.tone === "back" ? r.back.o : r.lay.o;
  }, [pick, m]);
  const profit = Math.max(0, Math.round(stake * (odds - 1)));
  const selectionName = pick ? m.rows[pick.row].name : "—";

  const onKey = (k: string) => {
    if (k === "back") return setStakeStr((s) => s.slice(0, -1) || "0");
    setStakeStr((s) => (s === "0" ? k : s + k));
  };
  const bump = (n: number) => setStakeStr((s) => String(Math.max(0, (parseInt(s || "0", 10) + n))));
  const bumpOdds = (_dir: 1 | -1) => {/* read-only display in this layout */};

  const lockPick = () => {
    if (!pick) return toast.error("Pick a side first");
    if (stake <= 0) return toast.error("Set a stake");
    if (stake > coins) return toast.error("Not enough Pitch Coins");
    const ok = placePick({
      match: "India vs Australia",
      selection: m.rows[pick.row].name,
      side: pick.tone === "back" ? "for" : "against",
      odds,
      stake,
    });
    if (ok) toast.success(`Locked · ${stake} PC · win ${fmtPC(profit + stake)} PC`);
  };

  return (
    <div className="mx-auto min-h-screen max-w-[420px] bg-[hsl(220_8%_92%)] pb-16 text-[hsl(220_15%_10%)]">
      {/* Status bar mock */}
      <div className="flex items-center justify-between bg-[hsl(220_15%_8%)] px-3 py-1 text-[11px] font-medium text-white">
        <span>•••• 4G</span><span>15:56</span><span>🔋</span>
      </div>

      {/* Yellow header */}
      <header className="relative bg-[hsl(45_100%_55%)] px-3 pb-3 pt-3">
        <div className="flex items-start justify-between gap-2">
          <Link to="/" className="flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(220_15%_10%)] text-[hsl(45_100%_55%)] font-black">P</Link>
          <div className="flex items-center gap-1.5">
            <button className="flex h-11 w-14 flex-col items-center justify-center rounded-md bg-[hsl(220_15%_17%)] text-white">
              <Search className="h-4 w-4" />
              <span className="text-[10px] font-medium">Search</span>
            </button>
            <button onClick={() => { claimDaily(); toast.success("+500 PC daily bonus"); }} className="flex h-11 min-w-[68px] flex-col items-center justify-center rounded-md bg-[hsl(220_15%_17%)] px-2 text-white">
              <span className="text-[12px] font-bold leading-tight tabular-nums">{fmtPC(coins)} PC</span>
              <span className="flex items-center gap-1 text-[9px] font-medium leading-none"><Coins className="h-2.5 w-2.5" /> Daily +500</span>
            </button>
            <button className="flex h-11 w-14 flex-col items-center justify-center rounded-md bg-[hsl(220_15%_17%)] text-white">
              <Ticket className="h-4 w-4" />
              <span className="text-[10px] font-medium">My Picks</span>
            </button>
          </div>
        </div>
      </header>

      {/* Match strip */}
      <div className="relative flex items-center justify-between bg-[hsl(220_15%_12%)] px-3 py-3 text-white"
           style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent 0 8px, rgba(255,255,255,.04) 8px 9px)" }}>
        <div className="flex items-center gap-2">
          <button className="flex flex-col items-center rounded bg-[hsl(0_75%_50%)] px-1.5 py-0.5 text-[9px] font-black leading-none">
            <Play className="h-2.5 w-2.5 fill-white" />
            <span className="mt-0.5">LIVE</span>
            <ChevronDown className="h-2.5 w-2.5" />
          </button>
          <div className="leading-tight">
            <div className="text-[15px] font-bold">India</div>
            <div className="text-[15px] font-bold">Australia</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-medium text-white/90">Today 19:45</span>
          <button aria-label="refresh"><RotateCcw className="h-4 w-4" /></button>
        </div>
      </div>

      {/* Market header */}
      <div className="flex items-center justify-between bg-white px-4 pb-1 pt-3">
        <span className="text-[12px] font-semibold text-[hsl(220_15%_25%)]">Pool: {fmtPC(m.pool)} PC</span>
        <div className="flex w-[148px] items-center justify-between text-[12px] font-semibold text-[hsl(220_15%_25%)]">
          <span className="w-[68px] text-center">For</span>
          <span className="w-[68px] text-center">Against</span>
        </div>
      </div>

      {/* Selection rows */}
      {m.rows.map((r, i) => (
        <SelectionRow
          key={r.name}
          name={r.name} stake={r.stake} back={r.back} lay={r.lay}
          pickedTone={pick?.row === i ? pick.tone : null}
          onPick={(t) => setPick({ row: i, tone: t })}
        />
      ))}

      {/* Pick slip */}
      <div className="bg-[hsl(205_70%_92%)] px-4 py-3">
        <div className="text-[13px] text-[hsl(220_15%_15%)]">
          {pick?.tone === "back" ? "FOR" : "AGAINST"} (Pick): <span className="font-bold">{selectionName} – Match Odds</span>
        </div>
        <div className="mt-3 flex items-center justify-between rounded-md">
          <div className="flex items-center gap-2 text-[13px] text-[hsl(220_15%_15%)]">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-[hsl(205_85%_55%)] text-white">
              <Coins className="h-3 w-3" />
            </span>
            Boost with Daily 500 PC bonus
          </div>
          <Switch checked={bonus} onCheckedChange={setBonus} className="data-[state=checked]:bg-[hsl(140_65%_45%)]" />
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="flex items-center justify-between rounded-md bg-white px-1 py-1">
            <button onClick={() => bumpOdds(-1)} className="flex h-9 w-9 items-center justify-center text-xl text-[hsl(220_15%_25%)]">−</button>
            <span className="text-[17px] font-bold tabular-nums">{odds.toFixed(2)}</span>
            <button onClick={() => bumpOdds(1)} className="flex h-9 w-9 items-center justify-center text-xl text-[hsl(220_15%_25%)]">+</button>
          </div>
          <div className="flex items-center justify-between rounded-md bg-white px-1 py-1">
            <button onClick={() => bump(-1)} className="flex h-9 w-9 items-center justify-center text-xl text-[hsl(220_15%_25%)]">−</button>
            <span className="text-[17px] font-bold tabular-nums">{stakeStr}</span>
            <button onClick={() => bump(1)} className="flex h-9 w-9 items-center justify-center text-xl text-[hsl(220_15%_25%)]">+</button>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2">
          <button onClick={() => { setPick(null); setStakeStr("0"); }} className="h-12 rounded-md bg-[hsl(220_8%_82%)] text-[15px] font-bold text-[hsl(220_15%_15%)]">Cancel</button>
          <button onClick={lockPick} className="h-12 rounded-md bg-[hsl(45_100%_55%)] text-center text-[15px] font-bold text-[hsl(220_15%_10%)]">
            <div>Lock Pick</div>
            <div className="text-[11px] font-medium">Win {fmtPC(stake + profit)} PC</div>
          </button>
        </div>
      </div>

      {/* Quick stake bar */}
      <div className="grid grid-cols-4 bg-[hsl(220_8%_82%)] text-[15px] text-[hsl(220_15%_15%)]">
        {[10, 20, 50, 100].map((n, i) => (
          <button key={n} onClick={() => bump(n)} className={`h-11 ${i < 3 ? "border-r border-white" : ""}`}>+{n}</button>
        ))}
      </div>

      {/* Keypad */}
      <div className="grid grid-cols-7 gap-px bg-[hsl(220_8%_82%)]">
        {["1","2","3","4","5","6"].map((k) => (
          <button key={k} onClick={() => onKey(k)} className="h-12 bg-white text-[20px] font-medium active:scale-95">{k}</button>
        ))}
        <button onClick={() => onKey("back")} className="row-span-2 flex items-center justify-center bg-[hsl(220_15%_12%)] text-white"><Delete className="h-5 w-5" /></button>
        {["7","8","9","0","00","."].map((k) => (
          <button key={k} onClick={() => onKey(k === "00" ? "00" : k)} className="h-12 bg-white text-[20px] font-medium active:scale-95">{k}</button>
        ))}
      </div>

      {/* The Draw row */}
      <SelectionRow
        name={m.extra.name} stake={m.extra.stake} back={m.extra.back} lay={m.extra.lay} dim
        pickedTone={null} onPick={() => toast("Suspended market")}
      />

      {/* Sub market header */}
      <div className="flex items-center justify-between bg-[hsl(220_15%_12%)] px-4 py-3 text-white">
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 fill-white" />
          <span className="text-[14px] font-bold">Total Sixes Over/Under 12.5</span>
        </div>
        <span className="h-3 w-3 rounded-full bg-[hsl(45_100%_55%)]" />
      </div>

      {/* Disclaimer */}
      <p className="bg-white px-4 py-3 text-center text-[10px] text-[hsl(220_8%_45%)]">
        Pitch Coins are virtual & free. Cannot be purchased, traded, or withdrawn. Free-to-play only.
      </p>

      {/* Bottom tab bar */}
      <nav className="fixed bottom-0 left-1/2 z-20 grid w-full max-w-[420px] -translate-x-1/2 grid-cols-5 bg-[hsl(220_15%_12%)] text-white">
        {[
          { i: Home, l: "Home", to: "/" },
          { i: BookA, l: "Markets" },
          { i: CircleDot, l: "My Picks", active: true },
          { i: ArrowLeftRight, l: "Leaderboard" },
          { i: Dices, l: "Games" },
        ].map(({ i: Icon, l, to, active }) => {
          const inner = (
            <div className={`flex h-14 flex-col items-center justify-center gap-0.5 ${active ? "text-[hsl(45_100%_55%)]" : "text-white/85"}`}>
              <Icon className="h-5 w-5" strokeWidth={active ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{l}</span>
            </div>
          );
          return to ? <Link key={l} to={to}>{inner}</Link> : <button key={l}>{inner}</button>;
        })}
      </nav>
    </div>
  );
};

export default PicksScreen;
