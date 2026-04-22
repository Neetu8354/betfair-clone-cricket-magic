export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gold shadow-gold">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold-foreground" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 19 L19 5" />
        <path d="M5 19 L9 19 L9 15" />
        <path d="M19 5 L15 5 L15 9" />
      </svg>
    </div>
    <div className="leading-none">
      <div className="text-lg font-extrabold tracking-tight text-foreground">
        Pitch<span className="text-gold">Pro</span>
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Stats • Predictions
      </div>
    </div>
  </div>
);