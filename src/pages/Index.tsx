import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PromoSlider } from "@/components/PromoSlider";
import { LiveMatches } from "@/components/LiveMatches";
import { MatchPulse } from "@/components/MatchPulse";
import { PredictionPicker } from "@/components/PredictionPicker";
import { PlayerStats } from "@/components/PlayerStats";
import { Features } from "@/components/Features";
import { Leaderboard } from "@/components/Leaderboard";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BottomNav } from "@/components/BottomNav";

const Index = () => {
  useEffect(() => {
    document.title = "PitchPro — India's Premium Cricket Stats & Predictions Hub";
    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", "PitchPro — India's premium cricket hub. Live scores, deep stats, fan predictions, top player rankings and a buzzing community.");
    setMeta("og:title", "PitchPro — Cricket Stats & Predictions Hub", "property");
    setMeta("og:description", "Live cricket scores, deep stats, fan predictions and community chat — all in one beautifully crafted dashboard.", "property");
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
      name: "PitchPro",
      description: "India's premium cricket stats and predictions hub.",
      url: window.location.origin,
    });
  }, []);

  return (
    <div id="top" className="min-h-screen bg-background pb-16 lg:pb-0">
      <Header />
      <main>
        <h1 className="sr-only">PitchPro — India's Premium Cricket Stats and Predictions Hub</h1>
        <Hero />
        <PromoSlider />
        <div id="matches"><LiveMatches /></div>
        <MatchPulse />
        <PredictionPicker />
        <div id="stats"><PlayerStats /></div>
        <Features />
        <div id="standings"><Leaderboard /></div>
      </main>
      <Footer />
      <WhatsAppButton />
      <BottomNav />
    </div>
  );
};

export default Index;
