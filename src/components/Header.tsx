import { Menu, MessageCircle, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

const nav = ["Live Scores", "Fixtures", "Stats", "Standings", "News"];

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/40 bg-gold text-gold-foreground shadow-gold">
      <div className="container flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden lg:flex items-center gap-6">
            {nav.map((n) => (
              <a key={n} href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gold-foreground/85 transition-colors hover:text-gold-foreground">
                {n}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex hover:bg-black/10">
            <Bell className="h-4 w-4" />
          </Button>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="hidden sm:inline-flex bg-background text-foreground hover:bg-background/90">
              <MessageCircle className="h-4 w-4" /> Join
            </Button>
          </a>
          <Button variant="ghost" size="icon" className="lg:hidden hover:bg-black/10">
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
};