import { useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronDown,
  Search,
  RotateCw,
  Play,
  LineChart,
  Star,
  Home,
  AArrowDown,
  ArrowUpDown,
  Dices,
  Delete,
  CircleDot,
} from "lucide-react";

/**
 * Free-to-play "Pitch Exchange" — a pixel-faithful clone of a popular
 * sports-exchange mobile UI, but rebranded and using virtual Pitch Coins (PC).
 * No real money. No deposits. No withdrawals. Purely for fun.
 */

type OddCellTone = "back-strong" | "back-weak" | "lay-strong" | "lay-weak";

const OddCell = ({
  price,
  size,
  tone,
  onClick,
  active,
}: {
  price: string;
  size: string;
  tone: OddCellTone;
  onClick?: () => void;
  active?: boolean;
}) => {
  const toneMap: Record<OddCellTone, string> = {
    "back-strong": "bg-[hsl(205,90%,72%)] text-slate-900",
    "back-weak": "bg-[hsl(60,18%,55%)] text-slate-900",
    "lay-strong": "bg-[hsl(12,95%,78%)] text-slate-900",
    "lay-weak": "bg-[hsl(355,55%,82%)] text-slate-900",
  };
  return (
    <button
      onClick={onClick}
      className={`flex h-[52px] w-[64px] flex-col items-center justify-center rounded-[2px] transition-all active:scale-[0.97] ${toneMap[tone]} ${
        active ? "ring-2 ring-amber-500 ring-offset-1 ring-offset-white" : ""
      }`}
    >
      <span className="text-[17px] font-bold leading-none">{price}</span>
      <span className="mt-1 text-[10px] font-medium opacity-80">{size} PC</span>
    </button>
  );
};

type Selection = {
  team: string;
  back: string;
  backSize: string;
  lay: string;
  laySize: string;
  pl: string; // current p&l label like » 0 PC or » 14 PC (green)
  weak?: boolean;
};

const STORAGE_KEY = "pitchpro:wallet";
const DAILY_KEY = "pitchpro:daily";

const useWallet = () => {
  const [balance, setBalance] = useState<number>(() => {
    const v = localStorage.getItem(STORAGE_KEY);
    return v ? Number(v) : 5000;
  });
  const [bonus, setBonus] = useState<number>(50);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(balance));
  }, [balance]);
  return { balance, setBalance, bonus, setBonus };
};

const Exchange = () => {
  useEffect(() => {
    document.title = "Pitch Exchange — Free-to-Play Picks";
  }, []);

  const { balance, setBalance, bonus, setBonus } = useWallet();

  const [selected, setSelected] = useState<{ team: string; side: "back" | "lay"; price: number } | null>({
    team: "Rep of Ireland",
    side: "back",
    price: 8.4,
  });
  const [stake, setStake] = useState<string>("2");
  const [useBonus, setUseBonus] = useState(true);
  const [picksCount, setPicksCount] = useState(0);

  const odds = selected?.price ?? 0;
  const stakeNum = Number(stake) || 0;
  const profit = useMemo(() => +(odds * stakeNum - stakeNum).toFixed(2), [odds, stakeNum]);

  const selections: Selection[] = [
    {
      team: "Denmark",
      back: "1.58",
      backSize: "1,226",
      lay: "1.59",
      laySize: "386",
      pl: "» 0 PC",
    },
    {
      team: "Rep of Ireland",
      back: "8.4",
      backSize: "77",
      lay: "8.6",
      laySize: "73",
      pl: "» 14 PC",
      weak: true,
    },
  ];

  const drawRow: Selection = {
    team: "The Draw",
    back: "3.95",
    backSize: "366",
    lay: "4",
    laySize: "779",
    pl: "» 0 PC",
    weak: true,
  };

  const incOdds = (d: number) => {
    if (!selected) return;
    setSelected({ ...selected, price: Math.max(1.01, +(selected.price + d).toFixed(2)) });
  };
  const incStake = (d: number) => setStake(String(Math.max(0, +(Number(stake) + d).toFixed(2))));
  const appendStake = (s: string) => setStake((prev) => (prev === "0" ? s : prev + s));
  const backspace = () => setStake((prev) => (prev.length <= 1 ? "0" : prev.slice(0, -1)));

  const placePick = () => {
    if (!selected || stakeNum <= 0) return;
    if (stakeNum > balance) return;
    setBalance(balance - stakeNum);
    setPicksCount((c) => c + 1);
    setStake("0");
  };

  const claimDaily = () => {
    const last = localStorage.getItem(DAILY_KEY);
    const today = new Date().toDateString();
    if (last === today) return;
    localStorage.setItem(DAILY_KEY, today);
    setBalance(balance + 500);
  };

  return (
    <div className="min-h-screen bg-[#ECECEC] text-slate-900">
      <div className="mx-auto max-w-[420px] bg-white shadow-2xl">
        {/* Top header */}
        <header className="flex items-center justify-between bg-[#FFB327] px-2 py-2">
          <div className="flex items-center gap-1">
            <button className="rounded p-1 active:bg-black/10">
              <ChevronLeft className="h-6 w-6 text-slate-900" />
            </button>
            <div className="flex items-center gap-1.5 leading-none">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white">
                <CircleDot className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] font-extrabold tracking-tight text-slate-900">pitchpro</span>
                <span className="text-[8px] font-bold tracking-[0.18em] text-slate-900/80">EXCHANGE</span>
              </div>
            </div>
          </div>
          <div className="flex items-stretch gap-1">
            <button className="flex flex-col items-center justify-center rounded bg-slate-800 px-2 py-1 text-white active:bg-slate-700">
              <Search className="h-4 w-4" />
              <span className="mt-0.5 text-[9px] font-semibold">Search</span>
            </button>
            <button
              onClick={claimDaily}
              className="flex flex-col items-center justify-center rounded bg-slate-800 px-2 py-1 text-white active:bg-slate-700"
            >
              <span className="text-[11px] font-bold leading-tight">{balance.toLocaleString()} PC</span>
              <span className="text-[10px] font-semibold leading-tight text-amber-300">🎁 {bonus} PC</span>
            </button>
            <button className="flex flex-col items-center justify-center rounded bg-slate-800 px-2 py-1 text-white active:bg-slate-700">
              <span className="text-[14px] font-black">📋</span>
              <span className="text-[9px] font-semibold">My Picks{picksCount ? ` (${picksCount})` : ""}</span>
            </button>
          </div>
        </header>

        {/* Match strip */}
        <div
          className="flex items-center justify-between px-3 py-2.5 text-white"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #2b2b2b 0 6px, #1f1f1f 6px 12px)",
          }}
        >
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center text-amber-400">
              <Play className="h-4 w-4 fill-amber-400" />
              <span className="text-[8px] font-bold">LIVE</span>
              <ChevronDown className="-mt-0.5 h-3 w-3" />
            </div>
            <div className="leading-tight">
              <div className="text-[15px] font-extrabold">Denmark</div>
              <div className="text-[15px] font-extrabold">Rep of Ireland</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[12px] text-slate-200">
            <span>Today 19:45</span>
            <RotateCw className="h-4 w-4" />
          </div>
        </div>

        {/* Buzz + headers */}
        <div className="flex items-center justify-between border-b border-slate-200 px-3 py-2">
          <span className="text-[12px] text-slate-700">Buzz: 61,088 fans</span>
          <div className="flex w-[148px] justify-around text-[13px] font-semibold text-slate-700">
            <span>Back</span>
            <span>Lay</span>
          </div>
        </div>

        {/* Selections */}
        {selections.map((s) => (
          <div
            key={s.team}
            className="flex items-center justify-between border-b border-slate-200 px-3 py-2.5"
          >
            <div className="flex items-center gap-2">
              <LineChart className="h-5 w-5 text-slate-500" />
              <div className="leading-tight">
                <div className="text-[14px] font-bold text-slate-900">{s.team}</div>
                <div className="text-[12px] font-semibold text-emerald-600">{s.pl}</div>
              </div>
            </div>
            <div className="flex gap-1">
              <OddCell
                tone={s.weak ? "back-weak" : "back-strong"}
                price={s.back}
                size={s.backSize}
                active={selected?.team === s.team && selected.side === "back"}
                onClick={() =>
                  setSelected({ team: s.team, side: "back", price: Number(s.back) })
                }
              />
              <OddCell
                tone={s.weak ? "lay-weak" : "lay-strong"}
                price={s.lay}
                size={s.laySize}
                active={selected?.team === s.team && selected.side === "lay"}
                onClick={() =>
                  setSelected({ team: s.team, side: "lay", price: Number(s.lay) })
                }
              />
            </div>
          </div>
        ))}

        {/* Pick slip */}
        {selected && (
          <div className="bg-[#D9ECF7] px-3 py-3">
            <div className="text-[12px] text-slate-800">
              {selected.side === "back" ? "Back (Pick For)" : "Lay (Pick Against)"}:{" "}
              <span className="font-bold">{selected.team} — Match Odds</span>
            </div>

            <label className="mt-3 flex items-center justify-between">
              <span className="flex items-center gap-2 text-[13px] text-slate-800">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-sky-500 text-white">🎁</span>
                Use Eligible {bonus} PC Bonus
              </span>
              <button
                onClick={() => setUseBonus((v) => !v)}
                className={`relative h-6 w-11 rounded-full transition-colors ${useBonus ? "bg-emerald-500" : "bg-slate-300"}`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                    useBonus ? "translate-x-[22px]" : "translate-x-0.5"
                  }`}
                />
              </button>
            </label>

            {/* Steppers */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="flex items-stretch overflow-hidden rounded border border-slate-300 bg-white">
                <button onClick={() => incOdds(-0.01)} className="w-9 bg-slate-100 text-lg font-bold active:bg-slate-200">
                  −
                </button>
                <input
                  className="w-full bg-white text-center text-[16px] font-semibold outline-none"
                  value={selected.price.toFixed(2)}
                  readOnly
                />
                <button onClick={() => incOdds(0.01)} className="w-9 bg-slate-100 text-lg font-bold active:bg-slate-200">
                  +
                </button>
              </div>
              <div className="flex items-stretch overflow-hidden rounded border border-slate-300 bg-white">
                <button onClick={() => incStake(-1)} className="w-9 bg-slate-100 text-lg font-bold active:bg-slate-200">
                  −
                </button>
                <input
                  className="w-full bg-white text-right pr-3 text-[16px] font-semibold outline-none"
                  value={stake}
                  onChange={(e) => setStake(e.target.value.replace(/[^0-9.]/g, ""))}
                />
                <button onClick={() => incStake(1)} className="w-9 bg-slate-100 text-lg font-bold active:bg-slate-200">
                  +
                </button>
              </div>
            </div>

            {/* Cancel + Place pick */}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button
                onClick={() => setStake("0")}
                className="rounded bg-slate-200 py-3 text-[14px] font-bold text-slate-700 active:bg-slate-300"
              >
                Cancel
              </button>
              <button
                onClick={placePick}
                disabled={stakeNum <= 0 || stakeNum > balance}
                className="rounded bg-[#FFB327] py-2 text-center font-bold leading-tight text-slate-900 shadow-sm active:bg-amber-500 disabled:opacity-60"
              >
                <div className="text-[14px]">Lock Pick</div>
                <div className="text-[11px] font-semibold">Profit {profit.toFixed(2)} PC</div>
              </button>
            </div>
          </div>
        )}

        {/* Quick chips */}
        <div className="grid grid-cols-4 gap-px bg-slate-300">
          {[10, 20, 50, 100].map((n) => (
            <button
              key={n}
              onClick={() => incStake(n)}
              className="bg-[#E5E5E5] py-3 text-[14px] font-semibold text-slate-700 active:bg-slate-200"
            >
              +{n}
            </button>
          ))}
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-7 gap-1.5 bg-[#ECECEC] p-2">
          {["1", "2", "3", "4", "5", "6"].map((n) => (
            <button
              key={n}
              onClick={() => appendStake(n)}
              className="row-span-1 rounded bg-white py-3 text-[18px] font-semibold text-slate-800 shadow-sm active:bg-slate-100"
            >
              {n}
            </button>
          ))}
          <button
            onClick={backspace}
            className="row-span-2 flex items-center justify-center rounded bg-slate-800 text-white shadow active:bg-slate-700"
          >
            <Delete className="h-5 w-5" />
          </button>
          {["7", "8", "9", "0", "00", "."].map((n) => (
            <button
              key={n}
              onClick={() => appendStake(n)}
              className="rounded bg-white py-3 text-[18px] font-semibold text-slate-800 shadow-sm active:bg-slate-100"
            >
              {n}
            </button>
          ))}
        </div>

        {/* The Draw row */}
        <div className="flex items-center justify-between border-y border-slate-200 px-3 py-2.5">
          <div className="flex items-center gap-2">
            <LineChart className="h-5 w-5 text-slate-500" />
            <div className="leading-tight">
              <div className="text-[14px] font-bold">{drawRow.team}</div>
              <div className="text-[12px] font-semibold text-emerald-600">{drawRow.pl}</div>
            </div>
          </div>
          <div className="flex gap-1">
            <OddCell
              tone="back-weak"
              price={drawRow.back}
              size={drawRow.backSize}
              active={selected?.team === drawRow.team && selected.side === "back"}
              onClick={() => setSelected({ team: drawRow.team, side: "back", price: Number(drawRow.back) })}
            />
            <OddCell
              tone="lay-weak"
              price={drawRow.lay}
              size={drawRow.laySize}
              active={selected?.team === drawRow.team && selected.side === "lay"}
              onClick={() => setSelected({ team: drawRow.team, side: "lay", price: Number(drawRow.lay) })}
            />
          </div>
        </div>

        {/* Next market header */}
        <div className="flex items-center justify-between bg-slate-900 px-3 py-2.5 text-white">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-white" />
            <span className="text-[14px] font-bold">Over/Under 1.5 Goals</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full border border-white/60" />
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-slate-200 px-3 py-2 text-[12px] text-slate-600">
          <span>Buzz: 8,732 fans</span>
        </div>

        {/* Disclaimer */}
        <div className="bg-[#F8F4E6] px-3 py-2 text-[10px] leading-snug text-slate-600">
          Pitch Coins (PC) are a virtual, free-to-play currency. No real money is involved.
          No deposits, no withdrawals, no cash prizes. For entertainment only.
        </div>

        {/* Bottom nav */}
        <nav className="sticky bottom-0 grid grid-cols-5 border-t border-slate-300 bg-[#ECECEC] py-1.5 text-slate-600">
          {[
            { icon: Home, label: "Home" },
            { icon: AArrowDown, label: "Menu" },
            { icon: CircleDot, label: "My Picks", active: true },
            { icon: ArrowUpDown, label: "Markets" },
            { icon: Dices, label: "Games" },
          ].map((it) => (
            <button
              key={it.label}
              className={`flex flex-col items-center gap-0.5 py-1 ${it.active ? "text-amber-500" : ""}`}
            >
              <it.icon className={`h-5 w-5 ${it.active ? "fill-amber-400 text-amber-500" : ""}`} />
              <span className="text-[10px] font-semibold">{it.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Exchange;