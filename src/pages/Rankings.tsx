import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Seo, breadcrumbJsonLd, orgJsonLd } from "@/components/seo/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Leaderboard } from "@/components/Leaderboard";
import { Trophy, TrendingUp, TrendingDown, Minus, Info, Bat, Target } from "lucide-react";
import { Link } from "react-router-dom";

type Move = "up" | "down" | "same";

const teamRankings: { rank: number; team: string; short: string; played: number; won: number; lost: number; nrr: string; points: number; move: Move }[] = [
  { rank: 1, team: "Mumbai Indians", short: "MI", played: 8, won: 6, lost: 2, nrr: "+1.24", points: 12, move: "up" },
  { rank: 2, team: "Chennai Super Kings", short: "CSK", played: 8, won: 6, lost: 2, nrr: "+0.92", points: 12, move: "same" },
  { rank: 3, team: "Royal Challengers Bengaluru", short: "RCB", played: 8, won: 5, lost: 3, nrr: "+0.61", points: 10, move: "up" },
  { rank: 4, team: "Kolkata Knight Riders", short: "KKR", played: 8, won: 5, lost: 3, nrr: "+0.18", points: 10, move: "down" },
  { rank: 5, team: "Gujarat Titans", short: "GT", played: 8, won: 4, lost: 4, nrr: "+0.05", points: 8, move: "same" },
  { rank: 6, team: "Delhi Capitals", short: "DC", played: 8, won: 3, lost: 5, nrr: "-0.31", points: 6, move: "down" },
  { rank: 7, team: "Rajasthan Royals", short: "RR", played: 8, won: 3, lost: 5, nrr: "-0.48", points: 6, move: "up" },
  { rank: 8, team: "Punjab Kings", short: "PBKS", played: 8, won: 2, lost: 6, nrr: "-0.87", points: 4, move: "down" },
];

const topBatters = [
  { rank: 1, name: "V. Sharma", team: "MI", runs: 642, sr: 152.3, avg: 48.6 },
  { rank: 2, name: "S. Khan", team: "CSK", runs: 588, sr: 145.7, avg: 44.1 },
  { rank: 3, name: "A. Patel", team: "RCB", runs: 521, sr: 148.9, avg: 40.0 },
  { rank: 4, name: "R. Pandey", team: "KKR", runs: 412, sr: 138.1, avg: 36.2 },
  { rank: 5, name: "M. Yadav", team: "GT", runs: 398, sr: 141.5, avg: 33.1 },
];

const topBowlers = [
  { rank: 1, name: "K. Iyer", team: "MI", wkts: 18, eco: 7.2, sr: 14.1 },
  { rank: 2, name: "T. Singh", team: "CSK", wkts: 16, eco: 7.8, sr: 15.0 },
  { rank: 3, name: "H. Mehta", team: "RCB", wkts: 15, eco: 8.1, sr: 16.2 },
  { rank: 4, name: "P. Nair", team: "KKR", wkts: 14, eco: 7.5, sr: 15.8 },
  { rank: 5, name: "D. Roy", team: "GT", wkts: 13, eco: 7.9, sr: 16.5 },
];

const MoveIcon = ({ m }: { m: Move }) => {
  if (m === "up") return <TrendingUp className="h-3.5 w-3.5 text-emerald" aria-label="Moved up" />;
  if (m === "down") return <TrendingDown className="h-3.5 w-3.5 text-destructive" aria-label="Moved down" />;
  return <Minus className="h-3.5 w-3.5 text-muted-foreground" aria-label="Unchanged" />;
};

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
          <Trophy className="h-3 w-3" /> IPL 2026 Rankings
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Cricket <span className="text-gold">Rankings</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Live IPL 2026 standings, top batters, top bowlers and our community leaderboard — all on one page, refreshed every match day.
        </p>
      </header>

      {/* Quick jump */}
      <nav aria-label="Rankings sections" className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2 text-xs font-semibold">
        <a href="#teams" className="rounded-full border border-border bg-card px-3 py-1.5 text-foreground/80 hover:border-gold hover:text-gold">IPL Team Standings</a>
        <a href="#batters" className="rounded-full border border-border bg-card px-3 py-1.5 text-foreground/80 hover:border-gold hover:text-gold">Top Batters</a>
        <a href="#bowlers" className="rounded-full border border-border bg-card px-3 py-1.5 text-foreground/80 hover:border-gold hover:text-gold">Top Bowlers</a>
        <a href="#fans" className="rounded-full border border-border bg-card px-3 py-1.5 text-foreground/80 hover:border-gold hover:text-gold">Fan Leaderboard</a>
      </nav>

      {/* IPL Team Standings */}
      <section id="teams" className="mt-12 scroll-mt-24">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">IPL 2026 — Team Standings</h2>
            <p className="text-sm text-muted-foreground">Top 4 qualify for playoffs. Sorted by Points, then Net Run Rate.</p>
          </div>
          <span className="rounded-full border border-emerald/30 bg-emerald/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald">Updated Live</span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card-elevated">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead className="bg-secondary/50">
                <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                  <th className="p-3 md:p-4">Pos</th>
                  <th className="p-3 md:p-4">Team</th>
                  <th className="p-3 md:p-4 text-center" title="Matches played">P</th>
                  <th className="p-3 md:p-4 text-center" title="Won">W</th>
                  <th className="p-3 md:p-4 text-center" title="Lost">L</th>
                  <th className="p-3 md:p-4 text-right" title="Net Run Rate">NRR</th>
                  <th className="p-3 md:p-4 text-right">Pts</th>
                </tr>
              </thead>
              <tbody>
                {teamRankings.map((t) => {
                  const qualifying = t.rank <= 4;
                  return (
                    <tr key={t.short} className={`border-t border-border transition-colors hover:bg-secondary/30 ${qualifying ? "bg-emerald/[0.04]" : ""}`}>
                      <td className="p-3 md:p-4">
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${qualifying ? "bg-emerald/15 text-emerald" : "bg-secondary text-muted-foreground"}`}>{t.rank}</span>
                          <MoveIcon m={t.move} />
                        </div>
                      </td>
                      <td className="p-3 md:p-4">
                        <div className="font-semibold text-foreground">{t.team}</div>
                        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{t.short}</div>
                      </td>
                      <td className="p-3 md:p-4 text-center text-muted-foreground tabular-nums">{t.played}</td>
                      <td className="p-3 md:p-4 text-center font-semibold text-emerald tabular-nums">{t.won}</td>
                      <td className="p-3 md:p-4 text-center font-semibold text-destructive/90 tabular-nums">{t.lost}</td>
                      <td className={`p-3 md:p-4 text-right tabular-nums ${t.nrr.startsWith("+") ? "text-emerald" : "text-destructive/90"}`}>{t.nrr}</td>
                      <td className="p-3 md:p-4 text-right font-bold text-gold tabular-nums">{t.points}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-emerald/40" /> Playoff qualifying spot</span>
          <span className="inline-flex items-center gap-1.5"><TrendingUp className="h-3.5 w-3.5 text-emerald" /> Up</span>
          <span className="inline-flex items-center gap-1.5"><TrendingDown className="h-3.5 w-3.5 text-destructive" /> Down</span>
          <span className="inline-flex items-center gap-1.5"><Minus className="h-3.5 w-3.5" /> No change</span>
          <span className="inline-flex items-center gap-1.5"><Info className="h-3.5 w-3.5" /> NRR = Net Run Rate</span>
        </div>
      </section>

      {/* Top Batters & Bowlers */}
      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div id="batters" className="scroll-mt-24 rounded-2xl border border-border bg-gradient-card p-5 shadow-card-elevated">
          <div className="mb-4 flex items-center gap-2">
            <Bat className="h-5 w-5 text-gold" />
            <h2 className="text-xl font-extrabold text-foreground">Top Run-Scorers</h2>
          </div>
          <ul className="divide-y divide-border">
            {topBatters.map((p) => (
              <li key={p.name} className="flex items-center gap-3 py-3">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">{p.rank}</span>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-semibold text-foreground">{p.name}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.team} · SR {p.sr} · Avg {p.avg}</div>
                </div>
                <div className="text-right">
                  <div className="font-extrabold text-foreground tabular-nums">{p.runs}</div>
                  <div className="text-[10px] uppercase text-muted-foreground">Runs</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div id="bowlers" className="scroll-mt-24 rounded-2xl border border-border bg-gradient-card p-5 shadow-card-elevated">
          <div className="mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-gold" />
            <h2 className="text-xl font-extrabold text-foreground">Top Wicket-Takers</h2>
          </div>
          <ul className="divide-y divide-border">
            {topBowlers.map((p) => (
              <li key={p.name} className="flex items-center gap-3 py-3">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">{p.rank}</span>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-semibold text-foreground">{p.name}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.team} · Econ {p.eco} · SR {p.sr}</div>
                </div>
                <div className="text-right">
                  <div className="font-extrabold text-foreground tabular-nums">{p.wkts}</div>
                  <div className="text-[10px] uppercase text-muted-foreground">Wkts</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fan leaderboard */}
      <section id="fans" className="mt-12 scroll-mt-24">
        <div className="mb-2 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">Fan Leaderboard</h2>
            <p className="text-sm text-muted-foreground">Top community predictors this season — points awarded per correct match call.</p>
          </div>
        </div>
        <Leaderboard />
      </section>

      <section className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gold/40 bg-gold/5 p-6 text-center">
        <Trophy className="mx-auto h-7 w-7 text-gold" />
        <h2 className="mt-3 text-xl font-bold">Climb the leaderboard</h2>
        <p className="mt-2 text-sm text-muted-foreground">Submit predictions in our WhatsApp community — every correct call earns points.</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm">
          <Link to="/live" className="rounded-md border border-border px-4 py-2 font-semibold hover:bg-muted">View live matches</Link>
          <Link to="/stats" className="rounded-md border border-border px-4 py-2 font-semibold hover:bg-muted">See player stats</Link>
        </div>
      </section>
    </main>
    <Footer />
    <BottomNav />
    <WhatsAppButton />
  </div>
);

export default Rankings;