import { Menu, MessageCircle, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { SITE, formatCoins } from "@/lib/site";
import { useCoins } from "@/hooks/useCoins";

const nav = ["Cricket", "Casino", "Arcade", "Spin & Win", "Promotions"];

export const Header = () => {
  const { coins } = useCoins();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden lg:flex items-center gap-6">
            {nav.map((n) => (
              <a key={n} href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold">
                {n}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-gold/30 bg-card px-3 py-1.5">
            <Wallet className="h-4 w-4 text-gold" />
            <span className="text-sm font-semibold text-gold">{formatCoins(coins)}</span>
          </div>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm" className="hidden sm:inline-flex">
              <MessageCircle className="h-4 w-4" /> Join Now
            </Button>
          </a>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
};