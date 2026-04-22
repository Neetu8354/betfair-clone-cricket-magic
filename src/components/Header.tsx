import { Menu, MessageCircle, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

const nav = ["Live Scores", "Fixtures", "Stats", "Standings", "News"];

export const Header = () => {
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
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Bell className="h-4 w-4" />
          </Button>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm" className="hidden sm:inline-flex">
              <MessageCircle className="h-4 w-4" /> Join
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