interface StepperInputProps {
  value: string;
  onChange: (next: string) => void;
  step?: number;
  decimals?: number;
  min?: number;
  align?: "center" | "right";
}

export const StepperInput = ({
  value,
  onChange,
  step = 1,
  decimals = 0,
  min = 0,
  align = "center",
}: StepperInputProps) => {
  const fmt = (n: number) => (decimals > 0 ? n.toFixed(decimals) : String(n));
  const bump = (d: number) => {
    const next = Math.max(min, +(Number(value || 0) + d).toFixed(decimals));
    onChange(fmt(next));
  };
  return (
    <div className="flex h-11 items-stretch overflow-hidden rounded-md border border-slate-300 bg-white">
      <button
        type="button"
        aria-label="decrease"
        onClick={() => bump(-step)}
        className="w-9 bg-slate-100 text-lg font-bold text-slate-700 transition-colors active:bg-slate-200"
      >
        −
      </button>
      <input
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/[^0-9.]/g, ""))}
        className={`w-full bg-white text-[17px] font-semibold text-slate-900 outline-none ${
          align === "right" ? "pr-3 text-right" : "text-center"
        }`}
      />
      <button
        type="button"
        aria-label="increase"
        onClick={() => bump(step)}
        className="w-9 bg-slate-100 text-lg font-bold text-slate-700 transition-colors active:bg-slate-200"
      >
        +
      </button>
    </div>
  );
};