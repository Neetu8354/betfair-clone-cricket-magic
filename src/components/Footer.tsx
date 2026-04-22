import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

const cols = {
  Games: ["Cricket", "Casino", "Arcade", "Spin & Win"],
  Company: ["About", "Promotions", "Leaderboard", "Blog"],
  Support: ["Help Center", "WhatsApp", "Contact", "Responsible Play"],
};

export const Footer = () => (
  <footer className="mt-16 border-t border-border bg-background">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground">{SITE.tagline}. Free-to-play with virtual coins only.</p>
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
        © {new Date().getFullYear()} RoyalKhel. Free-to-play entertainment platform. No real-money gambling. 18+ recommended.
      </div>
    </div>
  </footer>
);