import { Trophy } from "lucide-react";

const players = [
  { n: "RajaOfRanchi", c: 250000, w: 142 },
  { n: "MumbaiMasti", c: 198400, w: 121 },
  { n: "DilliDhamaka", c: 175200, w: 115 },
  { n: "ChennaiChamp", c: 162000, w: 108 },
  { n: "PunjabPower", c: 144800, w: 99 },
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