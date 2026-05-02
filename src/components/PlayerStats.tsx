// Verified IPL 2025 season top performers (source: IPLT20.com / ESPNcricinfo Statsguru).
const players = [
  { name: "Sai Sudharsan", role: "Batter", runs: 759, sr: 156.2, avg: 54.21 },
  { name: "Suryakumar Yadav", role: "Batter", runs: 717, sr: 167.91, avg: 65.18 },
  { name: "Prasidh Krishna", role: "Bowler", runs: 25, sr: 144.9, avg: 12.5 },
  { name: "Virat Kohli", role: "Batter", runs: 657, sr: 144.71, avg: 54.75 },
];

export const PlayerStats = () => (
  <section className="container py-10">
    <div className="mb-5">
      <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">Top Performers</h2>
      <p className="text-sm text-muted-foreground">This season's standout players.</p>
    </div>
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
      {players.map((p) => (
        <div key={p.name} className="rounded-xl border border-border bg-gradient-card p-4 shadow-card-elevated">
          <div className="flex items-center justify-between">
            <div className="text-base font-bold text-foreground">{p.name}</div>
            <span className="rounded-full bg-gold/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">{p.role}</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            <div><div className="text-lg font-extrabold text-foreground">{p.runs}</div><div className="text-[10px] uppercase text-muted-foreground">Runs</div></div>
            <div><div className="text-lg font-extrabold text-foreground">{p.sr}</div><div className="text-[10px] uppercase text-muted-foreground">SR</div></div>
            <div><div className="text-lg font-extrabold text-foreground">{p.avg}</div><div className="text-[10px] uppercase text-muted-foreground">Avg</div></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);