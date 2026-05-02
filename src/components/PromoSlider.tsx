import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";
import promo3 from "@/assets/promo-3.jpg";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const slides = [
  {
    img: promo1,
    title: "IPL Prediction Cup",
    subtitle: "Predict every match. Climb the leaderboard.",
    cta: "Play Cricket",
    alt: "Betfair IPL 2026 prediction cup banner with cricket trophy and Indian fan crowd",
  },
  {
    img: promo2,
    title: "Royal Casino Night",
    subtitle: "Cards, dice & big moments — zero risk.",
    cta: "Enter Casino",
    alt: "Betfair royal casino night promo featuring cards, dice and golden chips on a dark table",
  },
  {
    img: promo3,
    title: "Daily ₹50,000 Coin Drop",
    subtitle: "Login daily and grab free virtual coins.",
    cta: "Claim Now",
    alt: "Daily 50,000 virtual coin drop reward banner for Betfair cricket community members",
  },
];

export const PromoSlider = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="container py-10">
      <div className="relative overflow-hidden rounded-2xl border border-border shadow-card-elevated">
        <div className="relative aspect-[21/9] md:aspect-[21/8]">
          {slides.map((s, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
            >
              <img src={s.img} alt={s.alt} loading="lazy" width={1920} height={822} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="container">
                  <div className="max-w-md animate-fade-up">
                    <h3 className="text-3xl font-extrabold text-foreground md:text-5xl">{s.title}</h3>
                    <p className="mt-3 text-foreground/80 md:text-lg">{s.subtitle}</p>
                    <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                      <Button variant="hero" className="mt-5">{s.cta}</Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => setI((v) => (v - 1 + slides.length) % slides.length)} aria-label="Previous slide" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 backdrop-blur hover:bg-background">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={() => setI((v) => (v + 1) % slides.length)} aria-label="Next slide" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 backdrop-blur hover:bg-background">
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Go to slide ${idx + 1}`} className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-2 bg-foreground/40"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};