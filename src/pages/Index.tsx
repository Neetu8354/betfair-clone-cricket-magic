import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PromoSlider } from "@/components/PromoSlider";
import { Categories } from "@/components/Categories";
import { LiveMatches } from "@/components/LiveMatches";
import { GamesSection } from "@/components/GamesSection";
import { Features } from "@/components/Features";
import { Leaderboard } from "@/components/Leaderboard";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    document.title = "RoyalKhel — Free-to-Play Cricket & Casino Games India";
    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", "Play free cricket prediction, casino card games, dice & spin-the-wheel with virtual coins. India's #1 risk-free gaming arena. Join on WhatsApp.");
    setMeta("og:title", "RoyalKhel — Free Cricket & Casino Games", "property");
    setMeta("og:description", "Play free cricket & casino games with virtual coins. Zero real-money risk. India's most fun gaming arena.", "property");
    setMeta("og:type", "website", "property");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/";

    let ld = document.getElementById("ld-json");
    if (!ld) {
      ld = document.createElement("script");
      ld.id = "ld-json";
      (ld as HTMLScriptElement).type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "RoyalKhel",
      description: "Free-to-play cricket & casino games arena for India.",
      url: window.location.origin,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <h1 className="sr-only">RoyalKhel — Free-to-Play Cricket and Casino Games for India</h1>
        <Hero />
        <PromoSlider />
        <Categories />
        <LiveMatches />
        <GamesSection />
        <Features />
        <Leaderboard />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
