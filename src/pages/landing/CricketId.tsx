import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Seo, breadcrumbJsonLd, orgJsonLd } from "@/components/seo/Seo";
import { ShieldCheck, Zap, Users, MessageCircle, CheckCircle2, Trophy } from "lucide-react";
import { SITE } from "@/lib/site";

const FAQS = [
  { q: "What is a BetfairVIP cricket ID?", a: "A BetfairVIP cricket ID is your free BetfairVIP Cricket Hub community profile — used to join match-day chats, submit fan predictions, and track your spot on the community leaderboard." },
  { q: "Is the BetfairVIP cricket ID free?", a: "Yes. Creating a BetfairVIP cricket ID via our WhatsApp community is completely free and takes under a minute." },
  { q: "How do I get my cricket ID?", a: "Tap the WhatsApp button, send 'NEW ID' to our community line, and the team replies with your unique BetfairVIP cricket ID and onboarding steps." },
  { q: "What can I do with my cricket ID?", a: "Join live match threads, post fan predictions, climb the leaderboard, and access weekly stats drops and IPL 2026 power rankings." },
];

const CricketId = () => (
  <div className="min-h-screen bg-background pb-16 lg:pb-0">
    <Seo
      title="Cricket ID — Get Your Free BetfairVIP Cricket ID in Minutes"
      description="Create your free BetfairVIP cricket ID, join the WhatsApp community, post fan predictions on every IPL 2026 match and climb the BetfairVIP leaderboard."
      canonical="/cricket-id"
      keywords="cricket id, betfair cricket id, free cricket id, online cricket id, IPL cricket id, cricket id whatsapp, get cricket id india"
      image="/og-default.jpg"
      jsonLd={[
        orgJsonLd,
        breadcrumbJsonLd([{ name: "Home", url: "/" }, { name: "Cricket ID", url: "/cricket-id" }]),
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        { "@context": "https://schema.org", "@type": "HowTo", name: "How to get a BetfairVIP cricket ID", step: [
          { "@type": "HowToStep", name: "Open WhatsApp", text: "Tap the WhatsApp button on this page." },
          { "@type": "HowToStep", name: "Send 'NEW ID'", text: "Message 'NEW ID' to the BetfairVIP community line." },
          { "@type": "HowToStep", name: "Receive your ID", text: "The team replies with your unique BetfairVIP cricket ID." },
          { "@type": "HowToStep", name: "Start predicting", text: "Join match threads, post predictions and climb the leaderboard." },
        ] },
      ]}
    />
    <Header />
    <main className="container py-10">
      <Breadcrumbs items={[{ label: "Cricket ID" }]} className="mb-6" />
      <header className="mx-auto max-w-3xl text-center">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
          <Trophy className="h-3 w-3" /> Free • 60-second setup
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Get your free <span className="bg-gradient-gold bg-clip-text text-transparent">BetfairVIP cricket ID</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your BetfairVIP cricket ID unlocks the WhatsApp community, fan predictions on every IPL 2026 match,
          and a permanent spot on the BetfairVIP leaderboard. Free, fast and built for Indian cricket fans.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-bold text-gold-foreground hover:bg-gold/90">
            <MessageCircle className="h-4 w-4" /> Get my cricket ID on WhatsApp
          </a>
          <Link to="/blog/fan-predictions-strategy-guide" className="text-sm font-semibold text-gold underline-offset-4 hover:underline">
            Read the predictions strategy guide →
          </Link>
        </div>
      </header>
      <section className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
        {[
          { icon: Zap, title: "Instant onboarding", text: "ID issued in under 60 seconds. No forms, no payment." },
          { icon: ShieldCheck, title: "Safe & free", text: "We never share your number. Community-only access." },
          { icon: Users, title: "Active community", text: "Join 25,000+ fans across IPL, T20I and Test threads." },
        ].map((c) => (
          <div key={c.title} className="rounded-xl border border-border bg-card p-6">
            <c.icon className="h-6 w-6 text-gold" />
            <h2 className="mt-3 text-lg font-bold">{c.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto mt-14 max-w-3xl">
        <h2 className="text-2xl font-bold">How to get your BetfairVIP cricket ID</h2>
        <ol className="mt-4 space-y-3">
          {["Tap the WhatsApp button above to open our community line.","Send the message 'NEW ID' to the BetfairVIP editorial team.","Receive your unique BetfairVIP cricket ID within 60 seconds.","Jump into live match threads and post your first fan prediction."].map((step, i) => (
            <li key={i} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground text-sm font-bold">{i + 1}</span>
              <span className="text-sm text-foreground/90">{step}</span>
            </li>
          ))}
        </ol>
      </section>
      <section className="mx-auto mt-14 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
        <h2 className="text-2xl font-bold text-foreground">What you can do with a BetfairVIP cricket ID</h2>
        <p>
          Your BetfairVIP cricket ID is your front-row seat to the most active Indian cricket community online.
          Use it to enter weekly fan-prediction contests, follow our{" "}
          <Link to="/blog/ipl-2026-team-power-rankings" className="text-gold underline-offset-4 hover:underline">IPL 2026 power rankings</Link>,
          and learn how to{" "}
          <Link to="/blog/how-to-read-cricket-stats-like-an-analyst" className="text-gold underline-offset-4 hover:underline">read cricket stats like an analyst</Link>.
        </p>
        <ul className="space-y-2">
          {["Live match-thread access for every IPL, T20I, ODI and Test fixture.","Submit fan predictions and earn points on the BetfairVIP leaderboard.","Weekly stats drops, batter/bowler watchlists and venue notes.","Early access to new BetfairVIP Cricket Hub features."].map((t) => (
            <li key={t} className="flex items-start gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" /> {t}</li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="cricket-id-faq" className="mx-auto mt-14 max-w-3xl">
        <h2 id="cricket-id-faq" className="text-2xl font-bold">Cricket ID — frequently asked questions</h2>
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
        <h2 className="text-2xl font-bold">Ready for your BetfairVIP cricket ID?</h2>
        <p className="mt-2 text-muted-foreground">It's free. Your ID arrives in under a minute on WhatsApp.</p>
        <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-bold text-gold-foreground hover:bg-gold/90">
          <MessageCircle className="h-4 w-4" /> Claim my free cricket ID
        </a>
      </section>
    </main>
    <Footer />
    <BottomNav />
    <WhatsAppButton />
  </div>
);

export default CricketId;
