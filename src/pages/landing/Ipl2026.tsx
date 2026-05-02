import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Seo, breadcrumbJsonLd, orgJsonLd } from "@/components/seo/Seo";
import { Trophy, BarChart3, Calendar, Users, Sparkles, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

const FAQS = [
  { q: "When does IPL 2026 start?", a: "IPL 2026 is scheduled for late March 2026, with the final expected in late May. Betfair Cricket Hub publishes the full fixture grid the day BCCI releases it." },
  { q: "Who are the IPL 2026 favourites?", a: "Mumbai Indians and Gujarat Titans top our IPL 2026 power rankings on net run rate, top-order strike rate and death-overs economy." },
  { q: "Where can I see live IPL 2026 scores?", a: "The Betfair live cricket scoreboard updates every IPL 2026 match in under one second, with ball-by-ball win-probability." },
  { q: "Is IPL 2026 prediction free on Betfair?", a: "Yes. All IPL 2026 fan predictions on Betfair are free — we use virtual coins, never real-money wagering." },
];

const TIERS = [
  { name: "S-tier — Title favourites", teams: ["Mumbai Indians (88.4)", "Gujarat Titans (87.1)"], color: "border-gold/60 bg-gold/10" },
  { name: "A-tier — Playoff contenders", teams: ["Royal Challengers Bengaluru", "Chennai Super Kings", "Kolkata Knight Riders"], color: "border-border bg-card" },
  { name: "B-tier — Bubble teams", teams: ["Rajasthan Royals", "Lucknow Super Giants", "Delhi Capitals"], color: "border-border bg-card" },
  { name: "C-tier — Rebuilders", teams: ["Punjab Kings", "Sunrisers Hyderabad"], color: "border-border bg-card" },
];

const READS = [
  { to: "/blog/ipl-2026-team-power-rankings", title: "IPL 2026 team power rankings", desc: "Data-driven S→C tier list across all 10 franchises." },
  { to: "/blog/top-10-batters-to-watch-2026", title: "Top 10 IPL 2026 batters to watch", desc: "Form, intent and matchup-adjusted rankings." },
  { to: "/blog/top-10-bowlers-2026-watchlist", title: "Top 10 IPL 2026 bowlers", desc: "Death-overs economy, dot-ball % and wicket impact." },
  { to: "/blog/venues-that-favour-chasing", title: "IPL venues that favour chasing", desc: "Where the toss matters most in 2026." },
  { to: "/blog/cricket-prediction-models-explained", title: "How IPL prediction models work", desc: "Friendly explainer of what's under the hood." },
  { to: "/blog/fan-predictions-strategy-guide", title: "Fan predictions strategy guide", desc: "A repeatable framework for IPL 2026 picks." },
];

const Ipl2026 = () => (
  <div className="min-h-screen bg-background pb-16 lg:pb-0">
    <Seo
      title="IPL 2026 — Power Rankings, Live Scores & Fan Predictions | Betfair"
      description="Your IPL 2026 hub: data-driven power rankings, live ball-by-ball scores, top batter and bowler watchlists, fixtures and the Betfair fan-prediction community."
      canonical="/ipl-2026"
      keywords="IPL 2026, IPL 2026 schedule, IPL 2026 power rankings, IPL 2026 live score, IPL 2026 predictions, IPL 2026 teams, IPL 2026 stats"
      image="/og-ipl-2026.jpg"
      jsonLd={[
        orgJsonLd,
        breadcrumbJsonLd([{ name: "Home", url: "/" }, { name: "IPL 2026", url: "/ipl-2026" }]),
        { "@context": "https://schema.org", "@type": "SportsEvent", name: "Indian Premier League 2026", sport: "Cricket", startDate: "2026-03-22", endDate: "2026-05-31", eventStatus: "https://schema.org/EventScheduled", eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode", location: { "@type": "Country", name: "India" }, organizer: { "@type": "Organization", name: "BCCI" } },
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      ]}
    />
    <Header />
    <main className="container py-10">
      <Breadcrumbs items={[{ label: "IPL 2026" }]} className="mb-6" />
      <header className="mx-auto max-w-3xl text-center">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
          <Sparkles className="h-3 w-3" /> Season hub
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          <span className="bg-gradient-gold bg-clip-text text-transparent">IPL 2026</span> — power rankings, live scores & predictions
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The complete Betfair IPL 2026 hub: data-driven team tier list, ball-by-ball live scoreboard,
          top batter and bowler watchlists, and a 25,000-strong fan-prediction community.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link to="/blog/ipl-2026-team-power-rankings" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-bold text-gold-foreground hover:bg-gold/90">
            <Trophy className="h-4 w-4" /> Read full power rankings
          </Link>
          <Link to="/#matches" className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold hover:bg-muted">
            Live IPL scoreboard →
          </Link>
        </div>
      </header>
      <section className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-4">
        {[
          { icon: BarChart3, title: "Power rankings", text: "All 10 franchises ranked S→C tier on a 4-metric composite." },
          { icon: Calendar, title: "Full fixtures", text: "League stage, knockouts and playoff bracket as soon as released." },
          { icon: Users, title: "Player watchlist", text: "Top 10 batters and top 10 bowlers built from 12 months of data." },
          { icon: Trophy, title: "Fan predictions", text: "Free leaderboard contests on every IPL 2026 match." },
        ].map((c) => (
          <div key={c.title} className="rounded-xl border border-border bg-card p-5">
            <c.icon className="h-5 w-5 text-gold" />
            <h2 className="mt-3 text-base font-bold">{c.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto mt-14 max-w-4xl">
        <h2 className="text-2xl font-bold">IPL 2026 power rankings — tier list</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Composite of net run rate (35%), death-overs economy (25%), top-order strike rate (20%) and home/away split (20%).
          Full methodology in the{" "}
          <Link to="/blog/ipl-2026-team-power-rankings" className="text-gold underline-offset-4 hover:underline">power rankings article</Link>.
        </p>
        <div className="mt-5 space-y-3">
          {TIERS.map((t) => (
            <div key={t.name} className={`rounded-xl border p-4 ${t.color}`}>
              <div className="text-sm font-bold uppercase tracking-wider text-foreground">{t.name}</div>
              <ul className="mt-2 flex flex-wrap gap-2">
                {t.teams.map((team) => (
                  <li key={team} className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground">{team}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto mt-14 max-w-4xl">
        <h2 className="text-2xl font-bold">Deep IPL 2026 reads</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {READS.map((p) => (
            <Link key={p.to} to={p.to} className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-gold/60">
              <h3 className="text-base font-bold group-hover:text-gold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold">Read <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </section>
      <section aria-labelledby="ipl-faq" className="mx-auto mt-14 max-w-3xl">
        <h2 id="ipl-faq" className="text-2xl font-bold">IPL 2026 — frequently asked questions</h2>
        <div className="mt-4 space-y-3">
          {FAQS.map((f, i) => (
            <details key={i} className="group rounded-xl border border-border bg-card p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground">
                <span>{f.q}</span>
                <span className="text-gold transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-foreground/80">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gold/40 bg-gold/5 p-8 text-center">
        <h2 className="text-2xl font-bold">Get every IPL 2026 update first</h2>
        <p className="mt-2 text-muted-foreground">Match-day previews, live threads and weekly stats drops on WhatsApp.</p>
        <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-bold text-gold-foreground hover:bg-gold/90">
          Join the IPL 2026 community
        </a>
      </section>
    </main>
    <Footer />
    <BottomNav />
    <WhatsAppButton />
  </div>
);

export default Ipl2026;
