import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PillProps {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}

export const Pill = ({ onClick, className, children, ariaLabel }: PillProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    className={cn(
      "flex min-w-[58px] flex-col items-center justify-center gap-0.5 rounded-md bg-slate-900 px-2 py-1 text-white transition-colors duration-150 active:bg-slate-700",
      className,
    )}
  >
    {children}
  </button>
);