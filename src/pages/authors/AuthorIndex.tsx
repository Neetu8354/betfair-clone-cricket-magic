import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Seo, breadcrumbJsonLd, orgJsonLd, SITE_URL } from "@/components/seo/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ALL_AUTHORS, postsByAuthor } from "@/data/posts";
import { BadgeCheck, ArrowRight } from "lucide-react";

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
      name: "Betfair Editorial Team",
      url: `${SITE_URL}/authors`,
      description:
        "Meet the verified cricket analysts, editors and writers behind Betfair's IPL and T20 coverage.",
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
        title="Betfair Editorial Team — Cricket Analysts & Writers"
        description="Meet the verified cricket analysts, editors and strategy writers behind Betfair's IPL coverage, predictions and T20 stats explainers."
        canonical="/authors"
        keywords="betfair editorial team, cricket analysts India, IPL writers, T20 cricket experts"
        jsonLd={jsonLd}
      />
      <Header />
      <main className="container max-w-4xl py-8">
        <Breadcrumbs items={[{ label: "Authors" }]} className="mb-6" />

        <header className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Betfair Editorial Team
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            Every Betfair article is written or reviewed by a verified cricket
            specialist. Meet the analysts, editors and strategy writers behind
            our IPL coverage and T20 predictions.
          </p>
        </header>

        <ul className="grid gap-4 sm:grid-cols-2">
          {ALL_AUTHORS.map((a) => {
            const count = postsByAuthor(a.slug).length;
            return (
              <li key={a.slug}>
                <Link
                  to={`/authors/${a.slug}`}
                  className="group block h-full rounded-xl border border-border bg-card p-5 transition-colors hover:border-gold/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground text-lg font-bold">
                      {a.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h2 className="text-base font-bold">{a.name}</h2>
                        {a.verified && (
                          <BadgeCheck
                            className="h-4 w-4 text-gold"
                            aria-label="Verified Betfair editorial author"
                          />
                        )}
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {a.role}
                      </div>
                      <p className="mt-2 line-clamp-3 text-sm text-foreground/85">
                        {a.bio}
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold">
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