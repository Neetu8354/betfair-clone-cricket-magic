import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PromoSlider } from "@/components/PromoSlider";
import { LiveMatches } from "@/components/LiveMatches";
import { MatchPulse } from "@/components/MatchPulse";
import { PlayerStats } from "@/components/PlayerStats";
import { Features } from "@/components/Features";
import { Leaderboard } from "@/components/Leaderboard";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BottomNav } from "@/components/BottomNav";
import { Seo, orgJsonLd, websiteJsonLd, breadcrumbJsonLd, SITE_URL } from "@/components/seo/Seo";
import { POSTS } from "@/data/posts";
import { Link } from "react-router-dom";
import { HelpCircle, ArrowRight, Calendar, Clock, Newspaper } from "lucide-react";

const Index = () => {
  const faqs = [
    { q: "What is BetfairVIP Cricket Hub?", a: "BetfairVIP is India's premium cricket destination featuring live scores, deep statistics, fan predictions, player rankings and a 24/7 community — all in a single, fast dashboard." },
    { q: "Is BetfairVIP free to use?", a: "Yes — live scores, stats, blog articles and community access are completely free." },
    { q: "How accurate are the live cricket scores?", a: "Our live scoreboard updates in under one second from the venue, faster than most TV broadcasts which carry a 5–8 second delay." },
    { q: "Where can I read in-depth cricket analysis?", a: "The BetfairVIP blog publishes long-form analysis on IPL power rankings, prediction strategy, player watchlists and statistics explainers — visit the blog from the navigation." },
  ];
  const homeFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div id="top" className="min-h-screen bg-background pb-16 lg:pb-0">
      <Seo
        title="BetfairVIP — India's Premium Cricket Stats, Live Scores & Predictions Hub"
        description="Live cricket scores, deep IPL stats, fan predictions, top batter & bowler rankings and a 24/7 cricket community. Updated in under 1 second from the venue."
        canonical="/"
        keywords="live cricket scores, IPL 2026 stats, cricket predictions India, top cricket batters, top cricket bowlers, cricket community, BetfairVIP cricket"
        jsonLd={[orgJsonLd, websiteJsonLd, breadcrumbJsonLd([{ name: "Home", url: "/" }]), homeFaq]}
      />
      <Header />
      <main>
        <h1 className="sr-only">BetfairVIP — India's Premium Cricket Stats and Predictions Hub</h1>
        <Hero />
        <PromoSlider />
        <div id="matches"><LiveMatches /></div>
        <MatchPulse />
        <div id="stats"><PlayerStats /></div>
        <Features />
        <div id="standings"><Leaderboard /></div>
        <section aria-labelledby="latest-blog" className="container py-20">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow"><Newspaper className="h-3 w-3" /> Editorial</span>
              <h2 id="latest-blog" className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                From the <span className="text-gold-gradient">cricket blog</span>
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                Long-form analysis, prediction strategy and player watchlists — written by verified analysts.
              </p>
            </div>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 self-start rounded-full border border-border-strong bg-background-elevated/60 px-4 py-2 text-sm font-semibold text-foreground hover:border-gold/60 hover:text-gold"
            >
              View all articles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.slice(0, 6).map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 shadow-card-elevated transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-gold"
              >
                <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {p.category}
                </div>
                <h3 className="font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-gold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 border-t border-border/60 pt-3 text-[11px] text-muted-foreground">
                  {p.author && (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 text-[9px] font-bold text-gold">
                        {p.author.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </span>
                      {p.author.name.split(" ")[0]}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readMinutes}m</span>
                  <span className="ml-auto inline-flex items-center gap-1"><Calendar className="h-3 w-3" />
                    {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="home-faq" className="relative py-20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-aurora opacity-50" />
          <div className="container relative">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 text-center">
                <span className="eyebrow"><HelpCircle className="h-3 w-3" /> FAQ</span>
                <h2 id="home-faq" className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                  Frequently asked questions
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Quick answers about BetfairVIP Cricket Hub, our live scores and community.
                </p>
              </div>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl border border-border bg-gradient-card p-5 shadow-card-elevated transition-all open:border-gold/40 hover:border-gold/40"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground">
                      <span>{f.q}</span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-base leading-none text-gold transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/80">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BottomNav />
    </div>
  );
};

export default Index;
