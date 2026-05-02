import { Menu, MessageCircle, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { Link } from "react-router-dom";

const nav: { label: string; href: string; internal?: boolean }[] = [
  { label: "Live Scores", href: "/#matches", internal: true },
  { label: "Stats", href: "/#stats", internal: true },
  { label: "Standings", href: "/#standings", internal: true },
  { label: "Blog", href: "/blog", internal: true },
  { label: "About", href: "/about", internal: true },
  { label: "Contact", href: "/contact", internal: true },
  { label: "Community", href: SITE.whatsapp },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/40 bg-gold text-gold-foreground shadow-gold">
      <div className="container flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden lg:flex items-center gap-6">
            {nav.map((n) => (
              n.internal ? (
                <Link key={n.label} to={n.href} className="text-sm font-semibold text-gold-foreground/85 transition-colors hover:text-gold-foreground">
                  {n.label}
                </Link>
              ) : (
                <a key={n.label} href={n.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gold-foreground/85 transition-colors hover:text-gold-foreground">
                  {n.label}
                </a>
              )
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