import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { Link } from "react-router-dom";
import { POSTS } from "@/data/posts";
import { Mail, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";

const cols: Record<string, { label: string; to?: string; href?: string }[]> = {
  Cricket: [
    { label: "Live Scores", to: "/#matches" },
    { label: "IPL 2026 Hub", to: "/ipl-2026" },
    { label: "Live Predictions", to: "/live-betting" },
    { label: "Cricket ID", to: "/cricket-id" },
    { label: "Match Pulse", to: "/#matches" },
    { label: "Standings", to: "/#standings" },
  ],
  Stats: [
    { label: "Top Batters", to: "/#stats" },
    { label: "Top Bowlers", to: "/#stats" },
    { label: "Team Form", to: "/#standings" },
    { label: "Cricket Glossary", to: "/blog/cricket-glossary-101-terms" },
  ],
  Blog: [
    { label: "All Articles", to: "/blog" },
    { label: "IPL 2026 Power Rankings", to: "/blog/ipl-2026-team-power-rankings" },
    { label: "How to Read Cricket Stats", to: "/blog/how-to-read-cricket-stats-like-an-analyst" },
    { label: "Prediction Strategy Guide", to: "/blog/fan-predictions-strategy-guide" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "Editorial Team", to: "/authors" },
    { label: "Contact", to: "/contact" },
    { label: "Community", href: SITE.whatsapp },
    { label: "Cricket Blog", to: "/blog" },
  ],
};

export const Footer = () => (
  <footer className="relative mt-24 border-t border-border bg-background">
    {/* aurora top */}
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-aurora opacity-60" />

    <div className="container relative py-16">
      {/* CTA / newsletter */}
      <div className="mb-14 grid gap-6 rounded-3xl border border-border bg-gradient-card p-8 shadow-card-elevated md:grid-cols-[1.2fr_1fr] md:items-center md:p-10">
        <div>
          <span className="eyebrow"><Mail className="h-3 w-3" /> Newsletter</span>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Match-day insights, every Friday.
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Power rankings, watchlists and prediction strategy — straight to your inbox. Free, no spam.
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-2 sm:flex-row"
          aria-label="Subscribe to the Betfair cricket newsletter"
        >
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@cricketfan.in"
            className="h-11 w-full flex-1 rounded-full border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 text-sm font-bold text-gold-foreground shadow-gold transition-opacity hover:opacity-95"
          >
            Subscribe <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>

      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {SITE.tagline}. Built for fans, by fans — verified analysts, sub-second live scores and a 24/7 cricket community.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1.5 text-xs font-semibold text-emerald hover:bg-emerald/15"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Community
            </a>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-gold" /> Free • No real-money play
            </span>
          </div>
        </div>
        {Object.entries(cols).map(([title, links]) => (
          <div key={title}>
            <h4 className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              {title}
            </h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.label}>
                  {l.to ? (
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Compact tag cloud */}
      <div className="mt-12 border-t border-border pt-8">
        <h4 className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Popular reads
        </h4>
        <ul className="flex flex-wrap gap-2">
          {POSTS.slice(0, 8).map((p) => (
            <li key={p.slug}>
              <Link
                to={`/blog/${p.slug}`}
                className="inline-block rounded-full border border-border bg-background-elevated/60 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-gold/60 hover:text-gold"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} Betfair. Cricket stats, predictions & community.</span>
        <span className="text-muted-foreground/80">
          Not affiliated with any league or operator. India's premium cricket hub.
        </span>
      </div>
    </div>
  </footer>
);