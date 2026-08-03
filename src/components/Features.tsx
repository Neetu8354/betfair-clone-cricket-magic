import { Shield, Zap, Gift, Users } from "lucide-react";

const items = [
  { icon: Shield, t: "100% Safe & Legal", d: "Free-to-play with virtual coins. No real-money gambling." },
  { icon: Zap, t: "Instant Play", d: "No downloads. Play in your browser, any device." },
  { icon: Gift, t: "Daily Rewards", d: "Login bonus, streak rewards & seasonal coin drops." },
  { icon: Users, t: "Active Community", d: "Join thousands on WhatsApp for tips & tournaments." },
];

export const Features = () => (
  <section className="container py-12">
    <h2 className="text-center text-3xl font-extrabold text-foreground">Why RoyalKhel?</h2>
    <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">India's most loved free gaming arena, built for cricket and casino fans.</p>
    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => (
        <div key={it.t} className="rounded-2xl border border-border bg-gradient-card p-6 text-center shadow-card-elevated">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold shadow-gold">
            <it.icon className="h-6 w-6 text-gold-foreground" />
          </div>
          <h3 className="text-lg font-bold text-foreground">{it.t}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{it.d}</p>
        </div>
      ))}
    </div>
  </section>
);