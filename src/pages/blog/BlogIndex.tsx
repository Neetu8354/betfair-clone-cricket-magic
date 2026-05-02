import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Seo, breadcrumbJsonLd, websiteJsonLd, orgJsonLd, SITE_URL } from "@/components/seo/Seo";
import { POSTS } from "@/data/posts";
import { Calendar, Clock, Tag, ArrowRight, BadgeCheck, Newspaper } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const BlogIndex = () => {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: POSTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/blog/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Seo
        title="Cricket Blog — Stats, Predictions & Player Analysis | Betfair"
        description="Deep cricket analysis, IPL 2026 power rankings, prediction strategy guides, player watchlists and the most-complete cricket glossary on the web."
        canonical="/blog"
        keywords="cricket blog, IPL 2026 analysis, cricket stats articles, cricket predictions, player rankings"
        jsonLd={[
          orgJsonLd,
          websiteJsonLd,
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
          ]),
          itemListJsonLd,
        ]}
      />
      <Header />
      <main className="container py-12">
        <Breadcrumbs items={[{ label: "Blog" }]} className="mb-8" />

        <header className="relative mb-14 overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 md:p-12 shadow-card-elevated">
          <div className="pointer-events-none absolute inset-0 bg-gradient-aurora opacity-80" />
          <div className="relative">
            <span className="eyebrow"><Newspaper className="h-3 w-3" /> Cricket Editorial</span>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              The <span className="text-gold-gradient">Betfair</span> Cricket Blog
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Long-form analysis, prediction strategy, player watchlists and tooling reviews — written by verified analysts, backed by ball-by-ball data.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-3.5 w-3.5 text-gold" /> Verified editorial team
              </span>
              <span className="opacity-50">•</span>
              <span>{POSTS.length} articles</span>
              <span className="opacity-50">•</span>
              <span>Updated weekly</span>
            </div>
          </div>
        </header>

        {/* Featured article */}
        {POSTS[0] && (
          <section aria-label="Featured article" className="mb-14">
            <Link
              to={`/blog/${POSTS[0].slug}`}
              className="group grid gap-6 rounded-3xl border border-border bg-gradient-card p-6 shadow-card-elevated transition-all hover:border-gold/50 hover:shadow-gold md:grid-cols-[1.1fr_1fr] md:p-8"
            >
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  Featured • {POSTS[0].category}
                </div>
                <h2 className="font-display text-2xl font-bold leading-tight tracking-tight transition-colors group-hover:text-gold md:text-4xl">
                  {POSTS[0].title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground md:text-base">
                  {POSTS[0].excerpt}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  {POSTS[0].author && (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-gold-foreground">
                        {POSTS[0].author.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </span>
                      {POSTS[0].author.name}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {POSTS[0].readMinutes} min read</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(POSTS[0].date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  Read the analysis <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              <div className="order-1 md:order-2 relative aspect-[16/10] overflow-hidden rounded-2xl bg-background-elevated">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-gold-deep/20 to-emerald/20" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-aurora" />
                <div className="relative flex h-full items-end p-6">
                  <div className="rounded-xl border border-border bg-background/70 px-3 py-2 text-[11px] font-semibold backdrop-blur">
                    {POSTS[0].tags.slice(0, 3).join(" · ")}
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        <section aria-label="All articles">
          <h2 className="mb-6 font-display text-xl font-bold tracking-tight">All articles</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.slice(1).map((p) => (
              <article
                key={p.slug}
                className="group flex h-full flex-col rounded-2xl border border-border bg-gradient-card p-6 shadow-card-elevated transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-gold"
              >
                <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  <Tag className="h-2.5 w-2.5" /> {p.category}
                </div>
                <h3 className="font-display text-lg font-bold leading-snug">
                  <Link
                    to={`/blog/${p.slug}`}
                    className="transition-colors group-hover:text-gold"
                  >
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">
                  {p.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border/60 pt-3 text-[11px] text-muted-foreground">
                  {p.author && (
                    <Link
                      to={`/authors/${p.author.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 hover:text-gold"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 text-[9px] font-bold text-gold">
                        {p.author.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </span>
                      {p.author.name.split(" ")[0]}
                    </Link>
                  )}
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readMinutes}m</span>
                  <span className="ml-auto inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BottomNav />
    </div>
  );
};

export default BlogIndex;