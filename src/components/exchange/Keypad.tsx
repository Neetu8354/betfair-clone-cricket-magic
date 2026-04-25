import { Delete } from "lucide-react";

interface KeypadProps {
  onAppend: (s: string) => void;
  onBackspace: () => void;
}

const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "00", "."];

export const Keypad = ({ onAppend, onBackspace }: KeypadProps) => (
  <div className="grid grid-cols-7 gap-1.5 bg-[#ECECEC] p-2">
    {KEYS.slice(0, 6).map((k) => (
      <button
        key={k}
        type="button"
        onClick={() => onAppend(k)}
        className="h-12 rounded-md border border-[#E0E0E0] bg-white text-[20px] font-medium text-slate-800 shadow-sm transition-colors active:bg-slate-100"
      >
        {k}
      </button>
    ))}
    <button
      type="button"
      aria-label="backspace"
      onClick={onBackspace}
      className="row-span-2 flex items-center justify-center rounded-md bg-slate-900 text-white shadow-sm transition-colors active:bg-slate-700"
    >
      <Delete className="h-5 w-5" />
    </button>
    {KEYS.slice(6).map((k) => (
      <button
        key={k}
        type="button"
        onClick={() => onAppend(k)}
        className="h-12 rounded-md border border-[#E0E0E0] bg-white text-[20px] font-medium text-slate-800 shadow-sm transition-colors active:bg-slate-100"
      >
        {k}
      </button>
    ))}
  </div>
);