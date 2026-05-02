import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { Link } from "react-router-dom";
import { POSTS } from "@/data/posts";

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
    { label: "Contact", to: "/contact" },
    { label: "Community", href: SITE.whatsapp },
    { label: "Cricket Blog", to: "/blog" },
  ],
};

export const Footer = () => (
  <footer className="mt-16 border-t border-border bg-background">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-5">
        <div>
          <Logo />
        <p className="mt-3 text-sm text-muted-foreground">{SITE.tagline}. Built for fans, by fans.</p>
        </div>
        {Object.entries(cols).map(([title, links]) => (
          <div key={title}>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-gold">{title}</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  {l.to ? (
                    <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l.label}</Link>
                  ) : (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Tag cloud — internal-link surface for SEO */}
      <div className="mt-10 border-t border-border pt-6">
        <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Popular reads</h4>
        <ul className="flex flex-wrap gap-2">
          {POSTS.map((p) => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-gold hover:text-gold">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Betfair. Cricket stats, predictions & community. Not affiliated with any league or operator.
      </div>
    </div>
  </footer>
);