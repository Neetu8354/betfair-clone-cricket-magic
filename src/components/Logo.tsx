import { Crown } from "lucide-react";
import { SITE } from "@/lib/site";

export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold shadow-gold">
      <Crown className="h-5 w-5 text-gold-foreground" strokeWidth={2.5} />
    </div>
    <div className="leading-none">
      <div className="text-lg font-extrabold tracking-tight text-foreground">
        Royal<span className="text-gold">Khel</span>
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Play • Win • Celebrate
      </div>
    </div>
  </div>
);