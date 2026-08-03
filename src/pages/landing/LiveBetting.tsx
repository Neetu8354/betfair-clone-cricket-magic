import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Seo, breadcrumbJsonLd, orgJsonLd } from "@/components/seo/Seo";
import { Activity, Zap, BarChart3, Radar, MessageCircle, TrendingUp } from "lucide-react";
import { SITE } from "@/lib/site";

const FAQS = [
  { q: "What is live cricket prediction on BetfairVIP?", a: "Live cricket prediction is the BetfairVIP community feature where fans submit ball-by-ball and over-by-over forecasts during a match. It's free, social, and ranked on a public leaderboard." },
  { q: "How fast is the BetfairVIP live scoreboard?", a: "Our live cricket scoreboard updates in roughly 0.8 seconds from the venue — faster than most TV broadcasts which run a 5–8 second delay." },
  { q: "Do I need any money to play live predictions?", a: "No. BetfairVIP fan predictions are 100% free. We use virtual coins and a community leaderboard, never real-money wagering." },
  { q: "Which matches are covered in live mode?", a: "Every IPL, T20I, ODI, Test and major domestic T20 fixture gets live coverage with ball-by-ball pulse, win-probability shifts and fan prediction threads." },
];

const LiveBetting = () => (
  <div className="min-h-screen bg-background pb-16 lg:pb-0">
    <Seo
      title="Live Cricket Predictions — Real-Time Match Pulse | BetfairVIP"
      description="Track live cricket scores in under 1 second, watch win-probability shift ball by ball, and join the BetfairVIP community's live fan-prediction threads — totally free."
      canonical="/live-betting"
      keywords="live cricket prediction, live cricket score, ball by ball cricket, live IPL prediction, real time cricket updates, betfair live cricket"
      image="/og-live.jpg"
      jsonLd={[
        orgJsonLd,
        breadcrumbJsonLd([{ name: "Home", url: "/" }, { name: "Live Predictions", url: "/live-betting" }]),
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      ]}
    />
    <Header />
    <main className="container py-10">
      <Breadcrumbs items={[{ label: "Live Predictions" }]} className="mb-6" />
      <header className="mx-auto max-w-3xl text-center">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
          <Activity className="h-3 w-3" /> Real-time • Free • Social
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          <span className="bg-gradient-gold bg-clip-text text-transparent">Live cricket predictions</span> with sub-second updates
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The fastest live cricket scoreboard in India, ball-by-ball win-probability and a community of fans
          calling matches in real time. No money, no risk — just better cricket.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link to="/#matches" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-bold text-gold-foreground hover:bg-gold/90">
            <Zap className="h-4 w-4" /> Open live scoreboard
          </Link>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold hover:bg-muted">
            <MessageCircle className="h-4 w-4" /> Join the live chat
          </a>
        </div>
      </header>
      <section className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
        {[
          { icon: Zap, title: "0.8s update latency", text: "Direct ball-by-ball feeds beat the 4.2s industry median by 5×." },
          { icon: BarChart3, title: "Win-probability live", text: "Watch how each delivery shifts the model's match call." },
          { icon: Radar, title: "Match pulse", text: "Pace, momentum and over-by-over scoring trend in one view." },
        ].map((c) => (
          <div key={c.title} className="rounded-xl border border-border bg-card p-6">
            <c.icon className="h-6 w-6 text-gold" />
            <h2 className="mt-3 text-lg font-bold">{c.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto mt-14 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
        <h2 className="text-2xl font-bold text-foreground">How live cricket predictions work</h2>
        <p>
          Every BetfairVIP live match gets a real-time scoreboard, a ball-by-ball pulse and a fan-prediction thread.
          The BetfairVIP model rebuilds after each over — gaining roughly 12–15 points of accuracy versus its
          pre-match number, exactly as we explain in our{" "}
          <Link to="/blog/cricket-prediction-models-explained" className="text-gold underline-offset-4 hover:underline">cricket prediction models guide</Link>.
        </p>
        <p>
          Combine that with our{" "}
          <Link to="/blog/venues-that-favour-chasing" className="text-gold underline-offset-4 hover:underline">venues-that-favour-chasing study</Link>{" "}
          and the framework in our{" "}
          <Link to="/blog/fan-predictions-strategy-guide" className="text-gold underline-offset-4 hover:underline">fan predictions strategy guide</Link>{" "}
          and you'll spot value most casual fans miss.
        </p>
        <h2 className="text-2xl font-bold text-foreground">What makes BetfairVIP live mode different</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Sub-second scoreboard updates from venue feeds, not aggregator delays.</li>
          <li>Live win-probability and projected first-innings totals.</li>
          <li>Community match thread — predictions, jokes, takes, all in one place.</li>
          <li>Zero ads inside the live scoreboard.</li>
        </ul>
      </section>
      <section className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-card p-6">
        <div className="flex items-start gap-3">
          <TrendingUp className="h-5 w-5 text-gold" />
          <div>
            <h2 className="font-bold">Pro tip from the BetfairVIP desk</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              The biggest live-prediction edge comes after the powerplay — that's when win-probability becomes
              meaningfully more reliable. Wait, then call.
            </p>
          </div>
        </div>
      </section>
      <section aria-labelledby="live-faq" className="mx-auto mt-14 max-w-3xl">
        <h2 id="live-faq" className="text-2xl font-bold">Live predictions — frequently asked questions</h2>
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
    </main>
    <Footer />
    <BottomNav />
    <WhatsAppButton />
  </div>
);

export default LiveBetting;
