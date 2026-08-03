import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { Seo } from "@/components/seo/Seo";
import { Home, ArrowLeft, Newspaper, Trophy } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404: route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Seo
        title="Page not found (404) | BetfairVIP Cricket Hub"
        description="The page you're looking for doesn't exist. Head back to the BetfairVIP home page or browse our cricket blog."
        noindex
      />
      <Header />
      <main className="container flex min-h-[60vh] items-center justify-center py-16">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-7xl font-extrabold text-gold md:text-8xl">404</p>
          <h1 className="mt-3 text-2xl font-bold md:text-3xl">This page got bowled out</h1>
          <p className="mt-3 text-muted-foreground">
            We couldn't find <code className="rounded bg-muted px-1.5 py-0.5 text-xs">{location.pathname}</code>.
            It may have moved, or the link is broken.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-gold-foreground hover:bg-gold/90">
              <Home className="h-4 w-4" /> Back to home
            </Link>
            <Link to="/blog" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold hover:bg-muted">
              <Newspaper className="h-4 w-4" /> Read the blog
            </Link>
            <Link to="/ipl-2026" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold hover:bg-muted">
              <Trophy className="h-4 w-4" /> IPL 2026 hub
            </Link>
          </div>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3 w-3" /> Go back
          </button>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default NotFound;
