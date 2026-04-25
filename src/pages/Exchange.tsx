import { useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronDown,
  Search,
  RotateCw,
  Play,
  LineChart,
  Star,
  Gift,
  ClipboardList,
} from "lucide-react";
import { toast } from "sonner";
import { OddCell, type OddTone } from "@/components/exchange/OddCell";
import { Pill } from "@/components/exchange/Pill";
import { StepperInput } from "@/components/exchange/StepperInput";
import { Keypad } from "@/components/exchange/Keypad";
import { BottomTabBar } from "@/components/exchange/BottomTabBar";

type Side = "back" | "lay";

interface Selection {
  team: string;
  back: number;
  backSize: string;
  lay: number;
  laySize: string;
  pl: string;
  weak?: boolean;
}

const matchOdds: Selection[] = [
  { team: "Denmark", back: 1.58, backSize: "£1,226", lay: 1.59, laySize: "£386", pl: "» £0.00" },
  { team: "Rep of Ireland", back: 8.4, backSize: "£77", lay: 8.6, laySize: "£73", pl: "» £14.80", weak: true },
];

const drawRow: Selection = {
  team: "The Draw",
  back: 3.95,
  backSize: "£366",
  lay: 4,
  laySize: "£779",
  pl: "» £0.00",
  weak: true,
};

const Exchange = () => {
  useEffect(() => {
    document.title = "Exchange — Match Odds";
  }, []);

  const [selected, setSelected] = useState<{ team: string; side: Side; price: number } | null>({
    team: "Rep of Ireland",
    side: "back",
    price: 8.4,
  });
  const [stake, setStake] = useState("2");
  const [bonusOn, setBonusOn] = useState(true);

  const stakeNum = Number(stake) || 0;
  const odds = selected?.price ?? 0;
  const profit = useMemo(() => +(odds * stakeNum - stakeNum).toFixed(2), [odds, stakeNum]);

  const pickRow = (s: Selection, side: Side) =>
    setSelected({ team: s.team, side, price: side === "back" ? s.back : s.lay });

  const appendStake = (k: string) => setStake((p) => (p === "0" ? k : p + k));
  const backspace = () => setStake((p) => (p.length <= 1 ? "0" : p.slice(0, -1)));
  const addChip = (n: number) => setStake(String(+(stakeNum + n).toFixed(2)));

  const placeBet = () => {
    if (!selected || stakeNum <= 0) return;
    toast.success("Pick locked", { description: `Profit £${profit.toFixed(2)}` });
    setStake("0");
  };

  const renderRow = (s: Selection) => (
    <div
      key={s.team}
      className="flex items-center justify-between border-b border-[#E5E5E5] px-3 py-2.5 hover:bg-slate-50"
    >
      <div className="flex items-center gap-2">
        <LineChart className="h-5 w-5 text-slate-500" />
        <div className="leading-tight">
          <div className="text-[15px] font-bold text-slate-900">{s.team}</div>
          <div className="text-[12px] font-semibold text-[#2E9B47]">{s.pl}</div>
        </div>
      </div>
      <div className="flex gap-1">
        <OddCell
          tone={(s.weak ? "back-weak" : "back-strong") as OddTone}
          price={String(s.back)}
          size={s.backSize}
          active={selected?.team === s.team && selected.side === "back"}
          onClick={() => pickRow(s, "back")}
        />
        <OddCell
          tone={(s.weak ? "lay-weak" : "lay-strong") as OddTone}
          price={String(s.lay)}
          size={s.laySize}
          active={selected?.team === s.team && selected.side === "lay"}
          onClick={() => pickRow(s, "lay")}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#ECECEC]">
      <div className="mx-auto flex min-h-screen max-w-[420px] flex-col bg-white shadow-2xl">
        {/* 1. BRAND HEADER */}
        <header className="flex items-center justify-between bg-[#FFB327] px-2 py-2">
          <div className="flex items-center gap-1">
            <button aria-label="back" className="rounded p-1 active:bg-black/10">
              <ChevronLeft className="h-6 w-6 text-slate-900" />
            </button>
            <div className="flex flex-col leading-none">
              <span className="text-[20px] font-extrabold tracking-tight text-slate-900">betfair</span>
              <span className="text-[8px] font-bold tracking-[0.2em] text-slate-900/80">EXCHANGE</span>
            </div>
          </div>
          <div className="flex items-stretch gap-1">
            <Pill ariaLabel="Search">
              <Search className="h-4 w-4" />
              <span className="text-[10px] font-semibold">Search</span>
            </Pill>
            <Pill ariaLabel="Balance">
              <span className="text-[12px] font-bold leading-none">£0.00</span>
              <span className="text-[10px] font-semibold leading-none">🪙 £50.00</span>
            </Pill>
            <Pill ariaLabel="My Bets">
              <ClipboardList className="h-4 w-4" />
              <span className="text-[10px] font-semibold">My Bets</span>
            </Pill>
          </div>
        </header>

        {/* 2. MATCH STRIP */}
        <div
          className="flex items-center justify-between px-3 py-2.5 text-white"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg,#2B2B2B 0 6px,#1F1F1F 6px 12px)",
          }}
        >
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center text-amber-400">
              <Play className="h-4 w-4 animate-pulse fill-amber-400" />
              <span className="text-[8px] font-bold">LIVE</span>
              <ChevronDown className="-mt-0.5 h-3 w-3" />
            </div>
            <div className="leading-tight">
              <div className="text-[17px] font-extrabold">Denmark</div>
              <div className="text-[17px] font-extrabold">Rep of Ireland</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[13px] text-slate-200">
            <span>Today 19:45</span>
            <RotateCw className="h-4 w-4" />
          </div>
        </div>

        {/* 3. MARKET HEADER */}
        <div className="flex items-center justify-between border-b border-[#E5E5E5] px-3 py-2">
          <span className="text-[12px] text-slate-700">Matched: £61,088</span>
          <div className="flex w-[136px] justify-around text-[13px] font-semibold text-slate-700">
            <span>Back</span>
            <span>Lay</span>
          </div>
        </div>

        {/* 4. SELECTION ROWS */}
        {matchOdds.map(renderRow)}

        {/* 5. BET SLIP */}
        {selected && (
          <div className="bg-[#D9ECF7] px-3 py-3">
            <div className="text-[13px] text-slate-800">
              {selected.side === "back" ? "Back (Bet For)" : "Lay (Bet Against)"}:{" "}
              <span className="font-bold">{selected.team} - Match Odds</span>
            </div>

            <label className="mt-3 flex items-center justify-between">
              <span className="flex items-center gap-2 text-[13px] text-slate-800">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-sky-500 text-white">
                  <Gift className="h-3 w-3" />
                </span>
                Use Eligible £50.00 Bonus
              </span>
              <button
                type="button"
                aria-label="toggle bonus"
                onClick={() => setBonusOn((v) => !v)}
                className={`relative h-6 w-11 rounded-full transition-colors duration-200 ${
                  bonusOn ? "bg-[#3DC76B]" : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-200 ${
                    bonusOn ? "translate-x-[22px]" : "translate-x-0.5"
                  }`}
                />
              </button>
            </label>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <StepperInput
                value={selected.price.toFixed(2)}
                onChange={(v) => setSelected({ ...selected, price: Number(v) || 1.01 })}
                step={0.01}
                decimals={2}
                min={1.01}
              />
              <StepperInput value={stake} onChange={setStake} step={1} align="right" />
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setStake("0")}
                className="h-12 rounded-md bg-slate-200 text-[14px] font-bold text-slate-700 transition-colors active:bg-slate-300"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={placeBet}
                disabled={stakeNum <= 0}
                className="h-12 rounded-md bg-[#FFB327] text-center font-bold leading-tight text-slate-900 shadow-sm transition-all active:scale-[0.97] active:bg-amber-500 disabled:opacity-60"
              >
                <div className="text-[15px] font-extrabold">Place bet</div>
                <div className="text-[11px] font-semibold">Profit £{profit.toFixed(2)}</div>
              </button>
            </div>
          </div>
        )}

        {/* 6. QUICK STAKE BAR */}
        <div className="grid grid-cols-4 gap-px bg-slate-300">
          {[10, 20, 50, 100].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => addChip(n)}
              className="h-11 bg-[#E5E5E5] text-[14px] font-semibold text-slate-700 transition-colors active:bg-slate-200"
            >
              +{n}
            </button>
          ))}
        </div>

        {/* 7. KEYPAD */}
        <Keypad onAppend={appendStake} onBackspace={backspace} />

        {/* 8. THE DRAW */}
        {renderRow(drawRow)}

        {/* 9. NEXT MARKET HEADER */}
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
        <div className="border-b border-[#E5E5E5] px-3 py-2 text-[12px] text-slate-600">
          Matched: £8,732
        </div>

        <main className="flex-1" />

        {/* 10. BOTTOM TAB BAR */}
        <BottomTabBar />
      </div>
    </div>
  );
};

export default Exchange;