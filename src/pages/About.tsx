import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Seo, breadcrumbJsonLd, orgJsonLd } from "@/components/seo/Seo";
import { Trophy, Users, BarChart3, Shield, Sparkles, Target } from "lucide-react";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const About = () => {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Betfair — India's Cricket Stats & Predictions Hub",
    url: "https://betfair365s.live/about",
    description:
      "Betfair is an independent cricket community publishing live scores, deep stats, IPL power rankings and prediction strategy guides for Indian fans.",
    publisher: orgJsonLd,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Betfair Cricket Hub?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Betfair is an independent cricket stats, predictions and community platform for Indian fans, covering IPL, T20Is, ODIs and Tests with live scores, player analytics and editorial deep-dives.",
        },
      },
      {
        "@type": "Question",
        name: "Is Betfair affiliated with any league or operator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Betfair Cricket Hub is a fan-built editorial platform and is not affiliated with any cricket board, league, broadcaster or betting operator.",
        },
      },
      {
        "@type": "Question",
        name: "How do you build your prediction models?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our editors blend historical match data, venue splits, player form curves and matchup analytics — explained in plain English in our blog's prediction strategy guides.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Seo
        title="About Betfair — India's Cricket Stats & Predictions Hub"
        description="Meet the team behind Betfair Cricket Hub. Independent cricket stats, IPL power rankings, prediction strategy guides and a fan-first community for Indian cricket lovers."
        canonical="/about"
        keywords="about betfair, cricket stats team, IPL analysis india, cricket prediction experts, fan cricket community"
        jsonLd={[
          orgJsonLd,
          aboutJsonLd,
          faqJsonLd,
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
          ]),
        ]}
      />
      <Header />
      <main className="container py-10">
        <Breadcrumbs items={[{ label: "About" }]} className="mb-6" />

        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            <Sparkles className="h-3 w-3" /> About Betfair
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Cricket, decoded — by fans, for fans.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {SITE.name} is India's independent cricket stats and predictions hub. We publish live scores, IPL power
            rankings, player watchlists and the kind of deep editorial analysis that helps you watch the game smarter.
          </p>
        </header>

        <section className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {[
            { icon: BarChart3, title: "Data-first", text: "Every take is backed by venue splits, form curves and matchup analytics — never vibes alone." },
            { icon: Users, title: "Community-led", text: "Built around an active WhatsApp community of Indian cricket obsessives sharing predictions in real time." },
            { icon: Shield, title: "Independent", text: "Not affiliated with any board, league, broadcaster or operator. Editorial freedom is the whole point." },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-6">
              <c.icon className="h-6 w-6 text-gold" />
              <h2 className="mt-3 text-lg font-bold">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto mt-14 max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
          <h2 className="text-2xl font-bold text-foreground">Our mission</h2>
          <p>
            We started Betfair Cricket Hub because Indian cricket coverage is either too shallow (score updates) or too
            walled-off (paid analyst desks). We sit in the middle: free, fast, and rigorous. Whether you're prepping for
            an <Link to="/blog/ipl-2026-team-power-rankings" className="text-gold underline-offset-4 hover:underline">IPL 2026 matchup</Link>{" "}
            or learning to <Link to="/blog/how-to-read-cricket-stats-like-an-analyst" className="text-gold underline-offset-4 hover:underline">read cricket stats like an analyst</Link>,
            our blog is where the homework lives.
          </p>
          <h2 className="text-2xl font-bold text-foreground">What we cover</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Live scores and match pulse for every IPL, international and major domestic fixture.</li>
            <li>Player watchlists — our <Link to="/blog/top-10-batters-to-watch-2026" className="text-gold underline-offset-4 hover:underline">top 10 batters</Link> and <Link to="/blog/top-10-bowlers-2026-watchlist" className="text-gold underline-offset-4 hover:underline">bowlers to watch in 2026</Link>.</li>
            <li>Prediction strategy — venue effects, toss impact, and our <Link to="/blog/cricket-prediction-models-explained" className="text-gold underline-offset-4 hover:underline">model explainers</Link>.</li>
            <li>A 101-term <Link to="/blog/cricket-glossary-101-terms" className="text-gold underline-offset-4 hover:underline">cricket glossary</Link> so newcomers never feel lost.</li>
          </ul>
          <h2 className="text-2xl font-bold text-foreground">Editorial standards</h2>
          <p>
            Every article is written or reviewed by the Betfair Editorial desk, fact-checked against publicly available
            ball-by-ball data, and updated when results materially change. We disclose model assumptions and we never
            present opinion as certainty.
          </p>
        </section>

        <section className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gold/40 bg-gold/5 p-8 text-center">
          <Target className="mx-auto h-8 w-8 text-gold" />
          <h2 className="mt-3 text-2xl font-bold">Join the community</h2>
          <p className="mt-2 text-muted-foreground">
            Get match-day predictions, breaking team news and analyst threads — straight to your WhatsApp.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-gold-foreground hover:bg-gold/90">
              <Trophy className="h-4 w-4" /> Join on WhatsApp
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold hover:bg-muted">
              Contact the editors
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
    </div>
  );
};

export default About;
