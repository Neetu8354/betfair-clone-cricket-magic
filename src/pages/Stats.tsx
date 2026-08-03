import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Seo, breadcrumbJsonLd, orgJsonLd } from "@/components/seo/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlayerStats } from "@/components/PlayerStats";
import { Features } from "@/components/Features";
import { BarChart3 } from "lucide-react";

const Stats = () => (
  <div className="min-h-screen bg-background pb-16 lg:pb-0">
    <Seo
      title="Cricket Stats & Player Analytics — IPL 2026 | BetfairPlays Live"
      description="Deep cricket stats, player form curves, strike rates, averages and matchup analytics for IPL 2026 and international cricket — explained for Indian fans."
      canonical="/stats"
      keywords="cricket stats, ipl player stats, batting average, strike rate, cricket analytics india"
      jsonLd={[
        orgJsonLd,
        breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Stats", url: "/stats" },
        ]),
      ]}
    />
    <Header />
    <main className="container py-8 md:py-10">
      <Breadcrumbs items={[{ label: "Stats" }]} className="mb-6" />
      <header className="mx-auto max-w-3xl text-center">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
          <BarChart3 className="h-3 w-3" /> Player Analytics
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Cricket <span className="text-gold">Stats</span> & Form
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Form curves, strike rates and matchup splits for the season's standout performers.
        </p>
      </header>
      <div className="mt-8">
        <PlayerStats />
        <Features />
      </div>
    </main>
    <Footer />
    <BottomNav />
    <WhatsAppButton />
  </div>
);

export default Stats;