import { Menu, MessageCircle, Bell, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const nav: { label: string; href: string; internal?: boolean }[] = [
  { label: "Live Scores", href: "/live", internal: true },
  { label: "IPL 2026", href: "/ipl-2026", internal: true },
  { label: "Stats", href: "/stats", internal: true },
  { label: "Rankings", href: "/rankings", internal: true },
  { label: "Blog", href: "/blog", internal: true },
  { label: "About", href: "/about", internal: true },
  { label: "Contact", href: "/contact", internal: true },
  { label: "Community", href: SITE.whatsapp },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/") return location.pathname === "/";
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/80 backdrop-blur-xl shadow-card-elevated"
          : "border-b border-transparent bg-background/40 backdrop-blur-md"
      }`}
    >
      {/* gold hairline accent */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) =>
              n.internal ? (
                <Link
                  key={n.label}
                  to={n.href}
                  className={`relative rounded-full px-3 py-1.5 text-[13px] font-semibold transition-colors ${
                    isActive(n.href)
                      ? "text-gold"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {n.label}
                  {isActive(n.href) && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold" />
                  )}
                </Link>
              ) : (
                <a
                  key={n.label}
                  href={n.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-3 py-1.5 text-[13px] font-semibold text-foreground/70 transition-colors hover:text-foreground"
                >
                  {n.label}
                </a>
              )
            )}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/live"
            aria-label="Live cricket matches"
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald/30 bg-emerald/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald sm:px-3 sm:py-1.5 sm:text-[11px]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            Live
          </Link>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Notifications"
            className="hidden sm:inline-flex text-foreground/80 hover:text-foreground hover:bg-secondary"
          >
            <Bell className="h-4 w-4" />
          </Button>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex">
            <Button
              size="sm"
              className="bg-gradient-gold text-gold-foreground font-bold shadow-gold hover:opacity-95"
            >
              <MessageCircle className="h-4 w-4" /> Join
            </Button>
          </a>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-foreground hover:bg-secondary"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background-elevated/95 backdrop-blur-xl">
          <nav className="container py-4">
            <ul className="grid gap-1">
              {nav.map((n) => (
                <li key={n.label}>
                  {n.internal ? (
                    <Link
                      to={n.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                        isActive(n.href)
                          ? "bg-gold/10 text-gold"
                          : "text-foreground/85 hover:bg-secondary"
                      }`}
                    >
                      {n.label}
                    </Link>
                  ) : (
                    <a
                      href={n.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground/85 hover:bg-secondary"
                    >
                      {n.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-3 block">
              <Button className="w-full bg-gradient-gold text-gold-foreground font-bold shadow-gold">
                <MessageCircle className="h-4 w-4" /> Join the community
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};