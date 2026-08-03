export const Logo = ({ className = "" }: { className?: string }) => (
  <div
    className={`flex items-center gap-2.5 ${className}`}
    role="img"
    aria-label="BetfairVIP Cricket Hub logo"
  >
    <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-gold shadow-gold ring-1 ring-gold/40">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-gold-foreground"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M5 19 L19 5" />
        <path d="M5 19 L9 19 L9 15" />
        <path d="M19 5 L15 5 L15 9" />
      </svg>
    </div>
    <div className="leading-none">
      <div className="font-display text-lg font-bold tracking-tight text-foreground">
        Betfair<span className="text-gold-gradient">VIP</span>
      </div>
      <div className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
        Cricket • Betting
      </div>
    </div>
  </div>
);