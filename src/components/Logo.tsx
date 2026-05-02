export const Logo = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-2 ${className}`} role="img" aria-label="Betfair Cricket Hub logo">
    <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-gold-foreground">
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M5 19 L19 5" />
        <path d="M5 19 L9 19 L9 15" />
        <path d="M19 5 L15 5 L15 9" />
      </svg>
    </div>
    <div className="leading-none">
      <div className="text-lg font-extrabold tracking-tight text-gold-foreground">
        Bet<span className="opacity-70">fair</span>
      </div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-foreground/70">
        Exchange • Stats
      </div>
    </div>
  </div>
);