import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Seo, breadcrumbJsonLd, orgJsonLd, SITE_URL } from "@/components/seo/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ALL_AUTHORS, postsByAuthor } from "@/data/posts";
import { BadgeCheck, ArrowRight, Users } from "lucide-react";

const AuthorIndex = () => {
  const jsonLd = [
    orgJsonLd,
    breadcrumbJsonLd([
      { name: "Home", url: "/" },
      { name: "Authors", url: "/authors" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "BetfairVIP Editorial Team",
      url: `${SITE_URL}/authors`,
      description:
        "Meet the verified cricket analysts, editors and writers behind BetfairVIP's IPL and T20 coverage.",
      hasPart: ALL_AUTHORS.map((a) => ({
        "@type": "Person",
        name: a.name,
        jobTitle: a.role,
        url: `${SITE_URL}/authors/${a.slug}`,
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Seo
        title="BetfairVIP Editorial Team — Cricket Analysts & Writers"
        description="Meet the verified cricket analysts, editors and strategy writers behind BetfairVIP's IPL coverage, predictions and T20 stats explainers."
        canonical="/authors"
        keywords="betfair editorial team, cricket analysts India, IPL writers, T20 cricket experts"
        jsonLd={jsonLd}
      />
      <Header />
      <main className="container max-w-5xl py-10">
        <Breadcrumbs items={[{ label: "Authors" }]} className="mb-8" />

        <header className="relative mb-10 overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 md:p-12 shadow-card-elevated">
          <div className="pointer-events-none absolute inset-0 bg-gradient-aurora opacity-90" />
          <div className="relative">
            <span className="eyebrow"><Users className="h-3 w-3" /> Editorial Team</span>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Meet the people behind <span className="text-gold-gradient">BetfairVIP</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Every BetfairVIP article is written or reviewed by a verified cricket
              specialist. Analysts, editors and strategy writers behind our IPL
              coverage and T20 predictions.
            </p>
          </div>
        </header>

        <ul className="grid gap-5 sm:grid-cols-2">
          {ALL_AUTHORS.map((a) => {
            const count = postsByAuthor(a.slug).length;
            return (
              <li key={a.slug}>
                <Link
                  to={`/authors/${a.slug}`}
                  className="group block h-full rounded-2xl border border-border bg-gradient-card p-6 shadow-card-elevated transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-gold"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-lg font-bold text-gold-foreground shadow-gold">
                      {a.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h2 className="font-display text-base font-bold">{a.name}</h2>
                        {a.verified && (
                          <BadgeCheck
                            className="h-4 w-4 text-gold"
                            aria-label="Verified BetfairVIP editorial author"
                          />
                        )}
                      </div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        {a.role}
                      </div>
                      <p className="mt-2 line-clamp-3 text-sm text-foreground/85">
                        {a.bio}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold">
                        {count} article{count === 1 ? "" : "s"}
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
    </div>
  );
};

export default AuthorIndex;