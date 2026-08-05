import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Seo, breadcrumbJsonLd, orgJsonLd } from "@/components/seo/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LiveMatches } from "@/components/LiveMatches";
import { MatchPulse } from "@/components/MatchPulse";
import { Radio, Sparkles } from "lucide-react";

const Live = () => (
  <div className="min-h-screen bg-background pb-16 lg:pb-0">
    <Seo
      title="Live Cricket Scores — IPL, T20I & Domestic | BetfairVIP"
      description="Real-time cricket scores, match pulse and ball-by-ball updates for IPL 2026, internationals and major domestic fixtures. India's fastest cricket live hub."
      canonical="/live"
      keywords="live cricket score, ipl live score, t20 live, india cricket live, ball by ball cricket"
      jsonLd={[
        orgJsonLd,
        breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Live Scores", url: "/live" },
        ]),
      ]}
    />
    <Header />
    <main className="container py-8 md:py-10">
      <Breadcrumbs items={[{ label: "Live Scores" }]} className="mb-6" />
      <header className="mx-auto max-w-3xl text-center">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald/40 bg-emerald/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald">
          <Radio className="h-3 w-3 animate-pulse" /> Live Now
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Live Cricket <span className="text-gold">Scores</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Ball-by-ball updates from every IPL, international and major domestic fixture — refreshed in real time.
        </p>
      </header>
      <div className="mt-8">
        <LiveMatches />
        <MatchPulse />
      </div>
      <section className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gold/40 bg-gold/5 p-6 text-center">
        <Sparkles className="mx-auto h-7 w-7 text-gold" />
        <h2 className="mt-3 text-xl font-bold">Never miss a wicket</h2>
        <p className="mt-2 text-sm text-muted-foreground">Get instant match alerts on WhatsApp.</p>
      </section>
    </main>
    <Footer />
    <BottomNav />
    <WhatsAppButton />
  </div>
);

export default Live;