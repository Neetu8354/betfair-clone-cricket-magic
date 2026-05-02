import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Seo, breadcrumbJsonLd, orgJsonLd } from "@/components/seo/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Leaderboard } from "@/components/Leaderboard";
import { Trophy } from "lucide-react";

const Rankings = () => (
  <div className="min-h-screen bg-background pb-16 lg:pb-0">
    <Seo
      title="Cricket Rankings & Leaderboard — IPL Power Rankings | BetfairPlays Live"
      description="Live cricket rankings, IPL team power rankings and the BetfairPlays community leaderboard — top fan predictors of the season."
      canonical="/rankings"
      keywords="cricket rankings, ipl power rankings, cricket leaderboard, top fan predictors india"
      jsonLd={[
        orgJsonLd,
        breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Rankings", url: "/rankings" },
        ]),
      ]}
    />
    <Header />
    <main className="container py-8 md:py-10">
      <Breadcrumbs items={[{ label: "Rankings" }]} className="mb-6" />
      <header className="mx-auto max-w-3xl text-center">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
          <Trophy className="h-3 w-3" /> Leaderboard
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Cricket <span className="text-gold">Rankings</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Top fan predictors and community standings — refreshed every match day.
        </p>
      </header>
      <div className="mt-8">
        <Leaderboard />
      </div>
    </main>
    <Footer />
    <BottomNav />
    <WhatsAppButton />
  </div>
);

export default Rankings;