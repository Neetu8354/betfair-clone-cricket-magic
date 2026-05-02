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
import { HelpCircle } from "lucide-react";

const Index = () => {
  const faqs = [
    { q: "What is Betfair Cricket Hub?", a: "Betfair is India's premium cricket destination featuring live scores, deep statistics, fan predictions, player rankings and a 24/7 community — all in a single, fast dashboard." },
    { q: "Is Betfair free to use?", a: "Yes — live scores, stats, blog articles and community access are completely free." },
    { q: "How accurate are the live cricket scores?", a: "Our live scoreboard updates in under one second from the venue, faster than most TV broadcasts which carry a 5–8 second delay." },
    { q: "Where can I read in-depth cricket analysis?", a: "The Betfair blog publishes long-form analysis on IPL power rankings, prediction strategy, player watchlists and statistics explainers — visit the blog from the navigation." },
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
        title="Betfair — India's Premium Cricket Stats, Live Scores & Predictions Hub"
        description="Live cricket scores, deep IPL stats, fan predictions, top batter & bowler rankings and a 24/7 cricket community. Updated in under 1 second from the venue."
        canonical="/"
        keywords="live cricket scores, IPL 2026 stats, cricket predictions India, top cricket batters, top cricket bowlers, cricket community, Betfair cricket"
        jsonLd={[orgJsonLd, websiteJsonLd, breadcrumbJsonLd([{ name: "Home", url: "/" }]), homeFaq]}
      />
      <Header />
      <main>
        <h1 className="sr-only">Betfair — India's Premium Cricket Stats and Predictions Hub</h1>
        <Hero />
        <PromoSlider />
        <div id="matches"><LiveMatches /></div>
        <MatchPulse />
        <div id="stats"><PlayerStats /></div>
        <Features />
        <div id="standings"><Leaderboard /></div>
        <section aria-labelledby="latest-blog" className="container py-12">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 id="latest-blog" className="text-2xl font-extrabold tracking-tight md:text-3xl">From the cricket blog</h2>
              <p className="text-sm text-muted-foreground">Long-form analysis, prediction strategy and player watchlists.</p>
            </div>
            <Link to="/blog" className="text-sm font-semibold text-gold hover:underline">View all →</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {POSTS.slice(0, 6).map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-gold/60">
                <div className="text-[10px] uppercase tracking-wider text-gold">{p.category}</div>
                <h3 className="mt-2 text-base font-bold leading-snug group-hover:text-gold">{p.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
        <section aria-labelledby="home-faq" className="container py-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 text-center">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                <HelpCircle className="h-3 w-3" /> FAQ
              </div>
              <h2 id="home-faq" className="text-2xl font-extrabold tracking-tight md:text-3xl">Frequently asked questions</h2>
              <p className="mt-2 text-sm text-muted-foreground">Quick answers about Betfair Cricket Hub, our live scores and community.</p>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group rounded-xl border border-border bg-card p-4 transition-colors hover:border-gold/40">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground">
                    <span>{f.q}</span>
                    <span className="text-gold transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-foreground/80">{f.a}</p>
                </details>
              ))}
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
