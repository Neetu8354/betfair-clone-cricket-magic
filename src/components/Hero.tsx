import { Button } from "@/components/ui/button";
import { MessageCircle, Play, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-cricket.jpg";
import { SITE } from "@/lib/site";

export const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Live cricket stadium with batsman hitting a six" width={1920} height={896} fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-background/40" />
    </div>
    <div className="container relative z-10 flex min-h-[80vh] flex-col items-start justify-center py-20">
      <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/60 px-4 py-1.5 backdrop-blur">
        <Sparkles className="h-3.5 w-3.5 text-gold" />
        <span className="text-xs font-semibold uppercase tracking-wider text-gold">Live Stats • Predictions • Community</span>
      </div>
      <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-7xl">
        Every Ball, <span className="bg-gradient-gold bg-clip-text text-transparent">Every Stat</span>, One Hub
      </h1>
      <p className="mt-5 max-w-xl text-lg text-foreground/80">
        India's premium cricket destination. Live scores, deep stats, fan predictions, and a buzzing community — all in one beautifully crafted dashboard.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#matches"><Button variant="hero" size="lg"><Play className="h-4 w-4" /> Explore Matches</Button></a>
        <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
          <Button variant="emerald" size="lg"><MessageCircle className="h-4 w-4" /> Join Community</Button>
        </a>
      </div>
      <div className="mt-10 flex flex-wrap gap-8">
        {[
          { v: "500+", l: "Matches Tracked" },
          { v: "1.2M", l: "Stats Points" },
          { v: "24/7", l: "Community Chat" },
        ].map((s) => (
          <div key={s.l}>
            <div className="text-3xl font-extrabold text-gold">{s.v}</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);