import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

const cols = {
  Cricket: ["Live Scores", "Fixtures", "Match Pulse", "Standings"],
  Stats: ["Top Batters", "Top Bowlers", "Team Form", "Records"],
  Company: ["About", "News", "Community", "Contact"],
};

export const Footer = () => (
  <footer className="mt-16 border-t border-border bg-background">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Logo />
        <p className="mt-3 text-sm text-muted-foreground">{SITE.tagline}. Built for fans, by fans.</p>
        </div>
        {Object.entries(cols).map(([title, links]) => (
          <div key={title}>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-gold">{title}</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l}>
                  <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Betfair. Cricket stats, predictions & community. Not affiliated with any league or operator.
      </div>
    </div>
  </footer>
);