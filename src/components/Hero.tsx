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

    <div className="container relative z-10 flex min-h-[88vh] flex-col items-start justify-center py-20 sm:py-24">
      <div className="eyebrow animate-fade-up max-w-full">
        <Sparkles className="h-3.5 w-3.5 shrink-0" />
        <span className="leading-tight">Live • Predictions • Community</span>
      </div>

      <h1 className="mt-6 max-w-4xl font-display text-[40px] font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-7xl lg:text-[88px]">
        Every Ball.{" "}
        <span className="text-gold-gradient">Every Stat.</span>{" "}
        <span className="block sm:inline">One Premium Hub.</span>
      </h1>

      <p className="mt-5 max-w-xl text-[15px] text-foreground/75 sm:text-base md:text-lg">
        India's premium cricket destination — sub-second live scores, deep IPL
        stats, fan predictions and a 24/7 community, in one beautifully crafted
        dashboard.
      </p>

      <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
        <a href="#matches" className="w-full sm:w-auto">
          <Button variant="hero" size="lg" className="w-full rounded-full px-6 sm:w-auto">
            <Play className="h-4 w-4" /> Explore matches
          </Button>
        </a>
        <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <Button
            variant="outline"
            size="lg"
            className="w-full rounded-full border-border-strong bg-background/50 px-6 text-foreground backdrop-blur hover:bg-background/80 sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" /> Join community
            <ArrowRight className="h-4 w-4 opacity-60" />
          </Button>
        </a>
      </div>

      {/* Stats strip */}
      <div className="mt-12 w-full max-w-3xl">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.l}
              className="bg-background-elevated/85 px-4 py-3.5 backdrop-blur sm:px-5 sm:py-4"
            >
              <div className="font-display text-xl font-bold text-gold sm:text-2xl md:text-3xl">
                {s.v}
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
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