import cricket from "@/assets/cat-cricket.jpg";
import casino from "@/assets/cat-casino.jpg";
import arcade from "@/assets/cat-arcade.jpg";
import spin from "@/assets/cat-spin.jpg";
import { SITE } from "@/lib/site";

const cats = [
  { name: "Cricket", desc: "Predict & win", img: cricket },
  { name: "Casino", desc: "Cards & dice", img: casino },
  { name: "Arcade", desc: "Quick games", img: arcade },
  { name: "Spin & Win", desc: "Daily spins", img: spin },
];

export const Categories = () => (
  <section className="container py-12">
    <div className="mb-6 flex items-end justify-between">
      <div>
        <h2 className="text-3xl font-extrabold text-foreground">Game Categories</h2>
        <p className="text-muted-foreground">Pick your arena. All free, all fun.</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {cats.map((c) => (
        <a key={c.name} href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-5 shadow-card-elevated transition-all hover:-translate-y-1 hover:border-gold hover:shadow-gold">
          <img src={c.img} alt={c.name} loading="lazy" width={400} height={400} className="mx-auto h-28 w-28 object-contain transition-transform group-hover:scale-110" />
          <div className="mt-3 text-center">
            <div className="text-lg font-bold text-foreground">{c.name}</div>
            <div className="text-xs text-muted-foreground">{c.desc}</div>
          </div>
        </a>
      ))}
    </div>
  </section>
);