import { Button } from "@/components/ui/button";
import { MessageCircle, Play, Sparkles, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-cricket.jpg";
import { SITE } from "@/lib/site";

const stats = [
  { v: "500+", l: "Matches tracked" },
  { v: "1.2M", l: "Stat points" },
  { v: "<1s", l: "Live latency" },
  { v: "24/7", l: "Community chat" },
];

export const Hero = () => (
  <section className="relative overflow-hidden">
    {/* Backdrop */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Live cricket stadium with batsman hitting a six"
        width={1920}
        height={896}
        fetchPriority="high"
        decoding="async"
        className="h-full w-full object-cover"
      />
      {/* layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-aurora opacity-90" />
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>

    <div className="container relative z-10 flex min-h-[88vh] flex-col items-start justify-center py-24">
      <div className="eyebrow animate-fade-up">
        <Sparkles className="h-3.5 w-3.5" />
        Live Stats • Predictions • Community
      </div>

      <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-foreground md:text-7xl lg:text-[88px]">
        Every Ball.{" "}
        <span className="text-gold-gradient">Every Stat.</span>
        <br className="hidden sm:block" /> One Premium Hub.
      </h1>

      <p className="mt-6 max-w-xl text-base text-foreground/75 md:text-lg">
        India's premium cricket destination — sub-second live scores, deep IPL
        stats, fan predictions and a 24/7 community, in one beautifully crafted
        dashboard.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <a href="#matches">
          <Button variant="hero" size="lg" className="rounded-full px-6">
            <Play className="h-4 w-4" /> Explore matches
          </Button>
        </a>
        <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-border-strong bg-background/50 px-6 text-foreground backdrop-blur hover:bg-background/80"
          >
            <MessageCircle className="h-4 w-4" /> Join community
            <ArrowRight className="h-4 w-4 opacity-60" />
          </Button>
        </a>
      </div>

      {/* Stats strip */}
      <div className="mt-14 w-full max-w-3xl">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.l}
              className="bg-background-elevated/85 px-5 py-4 backdrop-blur"
            >
              <div className="font-display text-2xl font-bold text-gold md:text-3xl">
                {s.v}
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* bottom fade for seamless next section */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
  </section>
);