import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Seo, breadcrumbJsonLd, orgJsonLd } from "@/components/seo/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Leaderboard } from "@/components/Leaderboard";
import { Users, MessageCircle, Trophy, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/site";

const Community = () => (
  <div className="min-h-screen bg-background pb-16 lg:pb-0">
    <Seo
      title="Cricket Community — Fan Predictions & Leaderboard | BetfairVIP"
      description="Join BetfairVIP's cricket community. Compete in fan predictions, climb the leaderboard, share insights with 25,000+ cricket enthusiasts and win recognition."
      canonical="/community"
      keywords="cricket community, fan predictions, cricket leaderboard, cricket enthusiasts, cricket predictions india"
      jsonLd={[
        orgJsonLd,
        breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Community", url: "/community" },
        ]),
      ]}
    />
    <Header />
    <main className="container py-8 md:py-10">
      <Breadcrumbs items={[{ label: "Community" }]} className="mb-6" />
      <header className="mx-auto max-w-3xl text-center">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald/40 bg-emerald/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald">
          <Users className="h-3 w-3" /> 25,000+ Members
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Cricket <span className="text-gold">Community</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Join India's most active cricket prediction community. Compete in fan predictions, climb the leaderboard, and connect with fellow cricket enthusiasts.
        </p>
      </header>

      {/* Community Stats */}
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-gradient-card p-6 text-center shadow-card">
          <Users className="mx-auto h-8 w-8 text-emerald mb-3" />
          <p className="text-3xl font-bold">25,000+</p>
          <p className="text-sm text-muted-foreground">Active Members</p>
        </div>
        <div className="rounded-2xl border border-border bg-gradient-card p-6 text-center shadow-card">
          <Trophy className="mx-auto h-8 w-8 text-gold mb-3" />
          <p className="text-3xl font-bold">Daily</p>
          <p className="text-sm text-muted-foreground">Prediction Contests</p>
        </div>
        <div className="rounded-2xl border border-border bg-gradient-card p-6 text-center shadow-card">
          <TrendingUp className="mx-auto h-8 w-8 text-destructive mb-3" />
          <p className="text-3xl font-bold">100%</p>
          <p className="text-sm text-muted-foreground">Free to Play</p>
        </div>
      </div>

      {/* Community Leaderboard */}
      <section className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">Top Predictors</h2>
            <p className="text-sm text-muted-foreground">Ranked by prediction accuracy and community engagement</p>
          </div>
          <Link to="/rankings" className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold hover:bg-gold/20">
            View Full Leaderboard →
          </Link>
        </div>
        <Leaderboard />
      </section>

      {/* Community Features */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
          <MessageCircle className="h-8 w-8 text-gold mb-3" />
          <h3 className="text-lg font-bold">Daily Discussions</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Engage in real-time discussions about live matches, player performances, and prediction strategies with fellow cricket fans.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
          <Trophy className="h-8 w-8 text-emerald mb-3" />
          <h3 className="text-lg font-bold">Prediction Contests</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Compete daily in prediction contests. Earn points, climb the leaderboard, and gain recognition as a top cricket predictor.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
          <Users className="h-8 w-8 text-blue-500 mb-3" />
          <h3 className="text-lg font-bold">Expert Insights</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Learn from top predictors and cricket analysts. Access detailed analysis, player watchlists, and prediction strategies.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
          <TrendingUp className="h-8 w-8 text-destructive mb-3" />
          <h3 className="text-lg font-bold">Track Your Progress</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Monitor your prediction accuracy, win rate, and ranking. See how you stack up against other community members.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gold/40 bg-gold/5 p-8 text-center">
        <h2 className="text-2xl font-bold">Ready to Join the Community?</h2>
        <p className="mt-3 text-muted-foreground">
          Connect with 25,000+ cricket enthusiasts, make predictions, and compete on the leaderboard. It's 100% free.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-emerald px-6 py-3 text-sm font-bold text-white hover:bg-emerald/90"
          >
            <MessageCircle className="h-4 w-4" /> Join WhatsApp Community
          </a>
          <Link to="/rankings" className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold hover:bg-muted">
            View Leaderboard →
          </Link>
        </div>
      </section>
    </main>
    <Footer />
    <BottomNav />
    <WhatsAppButton />
  </div>
);

export default Community;
