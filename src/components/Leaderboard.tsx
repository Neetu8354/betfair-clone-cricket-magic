import { Trophy } from "lucide-react";

// Community fan leaderboard — points awarded per correct match prediction in our WhatsApp group.
// Refreshed at the end of every IPL match-day.
const players = [
  { n: "RajaOfRanchi", c: 4820, w: 38 },
  { n: "MumbaiMasti", c: 4310, w: 33 },
  { n: "DilliDhamaka", c: 3975, w: 31 },
  { n: "ChennaiChamp", c: 3640, w: 29 },
  { n: "PunjabPower", c: 3210, w: 26 },
].sort((a, b) => b.c - a.c);

export const Leaderboard = () => {
  return (
  <section className="container py-12">
    <div className="mb-6 flex items-center gap-3">
      <Trophy className="h-7 w-7 text-gold" />
      <h2 className="text-3xl font-extrabold text-foreground">Top Players</h2>
      <span className="ml-auto rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Fan rankings</span>
    </div>
    <div className="overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card-elevated">
      <table className="w-full">
        <thead className="bg-secondary/50">
          <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
            <th className="p-4">#</th>
            <th className="p-4">Player</th>
            <th className="p-4 text-right">Wins</th>
            <th className="p-4 text-right">Points</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p, i) => (
            <tr key={p.n} className="border-t border-border transition-colors hover:bg-secondary/30">
              <td className="p-4 font-bold text-gold">#{i + 1}</td>
              <td className="p-4 font-semibold text-foreground">{p.n}</td>
              <td className="p-4 text-right text-muted-foreground">{p.w}</td>
              <td className="p-4 text-right font-bold text-gold tabular-nums">{p.c.toLocaleString("en-IN")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
  );
};