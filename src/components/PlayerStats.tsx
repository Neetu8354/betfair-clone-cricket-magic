const players = [
  { name: "V. Sharma", role: "Batter", runs: 642, sr: 152.3, avg: 48.6 },
  { name: "R. Pandey", role: "All-rounder", runs: 412, sr: 138.1, avg: 36.2 },
  { name: "K. Iyer", role: "Bowler", runs: 88, sr: 110.0, avg: 12.4 },
  { name: "S. Khan", role: "Batter", runs: 588, sr: 145.7, avg: 44.1 },
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