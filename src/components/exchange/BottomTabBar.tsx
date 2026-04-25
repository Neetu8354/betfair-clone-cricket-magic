import { Home, Menu, CircleDot, ArrowLeftRight, Dices, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Tab {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

const tabs: Tab[] = [
  { icon: Home, label: "Home" },
  { icon: Menu, label: "Menu" },
  { icon: CircleDot, label: "Cash Out", active: true },
  { icon: ArrowLeftRight, label: "Sportsbook" },
  { icon: Dices, label: "Games" },
];

export const BottomTabBar = () => (
  <nav className="sticky bottom-0 grid h-14 grid-cols-5 border-t border-slate-300 bg-[#ECECEC] py-1.5">
    {tabs.map((t) => (
      <button
        key={t.label}
        type="button"
        aria-label={t.label}
        className={cn(
          "flex flex-col items-center justify-center gap-0.5 transition-colors",
          t.active ? "text-amber-500" : "text-slate-600",
        )}
      >
        <t.icon
          className={cn(
            "h-5 w-5",
            t.active && "fill-amber-400 text-amber-500",
          )}
        />
        <span className="text-[10px] font-semibold">{t.label}</span>
      </button>
    ))}
  </nav>
);