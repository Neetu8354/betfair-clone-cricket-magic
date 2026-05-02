import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Seo, breadcrumbJsonLd, websiteJsonLd, orgJsonLd, SITE_URL } from "@/components/seo/Seo";
import { POSTS } from "@/data/posts";
import { Calendar, Clock, Tag } from "lucide-react";
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
      <main className="container py-10">
        <Breadcrumbs items={[{ label: "Blog" }]} className="mb-6" />

        <header className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            The <span className="bg-gradient-gold bg-clip-text text-transparent">Betfair</span> Cricket Blog
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Long-form analysis, prediction strategy, player watchlists and tooling reviews — written by fans, backed by data.
          </p>
        </header>

        <section aria-label="All articles" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.slug} className="group rounded-xl border border-border bg-card p-5 shadow-card-elevated transition-all hover:border-gold/60 hover:shadow-gold">
              <div className="mb-3 flex items-center gap-2 text-[11px] uppercase tracking-wider text-gold">
                <Tag className="h-3 w-3" /> {p.category}
              </div>
              <h2 className="text-lg font-bold leading-snug">
                <Link to={`/blog/${p.slug}`} className="transition-colors group-hover:text-gold">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readMinutes} min read</span>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BottomNav />
    </div>
  );
};

export default BlogIndex;