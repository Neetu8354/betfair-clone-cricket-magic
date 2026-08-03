import { Link, useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Seo, breadcrumbJsonLd, orgJsonLd, SITE_URL } from "@/components/seo/Seo";
import { getPost, relatedPosts, POSTS, Block } from "@/data/posts";
import { Calendar, Clock, ArrowRight, BadgeCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const renderBlock = (b: Block, i: number) => {
  switch (b.type) {
    case "p":
      return (
        <p
          key={i}
          className="my-5 text-[17px] leading-[1.75] text-foreground/90 first-of-type:first-letter:float-left first-of-type:first-letter:mr-2 first-of-type:first-letter:mt-1 first-of-type:first-letter:font-display first-of-type:first-letter:text-5xl first-of-type:first-letter:font-bold first-of-type:first-letter:text-gold"
        >
          {b.text}
        </p>
      );
    case "linkp":
      return (
        <p key={i} className="my-5 text-[17px] leading-[1.75] text-foreground/90">
          {b.parts.map((part, j) =>
            typeof part === "string" ? (
              <span key={j}>{part}</span>
            ) : (
              <Link key={j} to={part.href} className="font-semibold text-gold underline-offset-4 hover:underline">
                {part.text}
              </Link>
            ),
          )}
        </p>
      );
    case "h2":
      return (
        <h2
          key={i}
          id={b.id}
          className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight scroll-mt-24 md:text-3xl"
        >
          {b.text}
        </h2>
      );
    case "h3":
      return <h3 key={i} id={b.id} className="mt-8 mb-2 font-display text-xl font-bold scroll-mt-24">{b.text}</h3>;
    case "ul":
      return (
        <ul key={i} className="my-4 list-disc space-y-2 pl-6 text-foreground/90">
          {b.items.map((it, j) => <li key={j}>{it}</li>)}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="my-4 list-decimal space-y-2 pl-6 text-foreground/90">
          {b.items.map((it, j) => <li key={j}>{it}</li>)}
        </ol>
      );
    case "quote":
      return (
        <blockquote key={i} className="my-6 border-l-4 border-gold pl-4 italic text-foreground/80">
          {b.text}{b.cite && <cite className="block mt-1 text-xs text-muted-foreground">— {b.cite}</cite>}
        </blockquote>
      );
    case "callout":
      return (
        <aside
          key={i}
          className="my-7 rounded-2xl border border-gold/30 bg-gold/[0.06] p-5 text-sm leading-relaxed text-foreground shadow-card-elevated"
        >
          <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Key takeaway</div>
          {b.text}
        </aside>
      );
    case "table":
      return (
        <div key={i} className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>{b.headers.map((h, j) => <th key={j} className="border border-border bg-muted px-3 py-2 text-left">{h}</th>)}</tr>
            </thead>
            <tbody>
              {b.rows.map((row, ri) => (
                <tr key={ri}>{row.map((c, ci) => <td key={ci} className="border border-border px-3 py-2">{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
};

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = getPost(slug);
  if (!post) return <Navigate to="/blog" replace />;

  const url = `${SITE_URL}/blog/${post.slug}`;
  const author = post.author;
  // Per-post OG image: use cover if defined, else map by category, else default.
  const categoryImageMap: Record<string, string> = {
    Analysis: "/og-stats.jpg",
    Guide: "/og-stats.jpg",
    Reviews: "/og-live.jpg",
    Explainer: "/og-stats.jpg",
    Players: "/og-players.jpg",
    Strategy: "/og-stats.jpg",
    Community: "/og-default.jpg",
  };
  const ogImage = post.cover || categoryImageMap[post.category] || "/og-default.jpg";
  // Special case: IPL-tagged posts get the IPL cover.
  const isIpl = post.tags.some((t) => t.toLowerCase().includes("ipl"));
  const finalOg = isIpl ? "/og-ipl-2026.jpg" : ogImage;
  const articleJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${finalOg}`,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          jobTitle: author.role,
          url: `${SITE_URL}/authors/${author.slug}`,
          worksFor: { "@type": "Organization", name: "Betfair365" },
        }
      : { "@type": "Organization", name: "Betfair365 Editorial" },
    publisher: { "@type": "Organization", name: "Betfair365", logo: { "@type": "ImageObject", url: `${SITE_URL}/og-default.jpg` } },
    mainEntityOfPage: url,
    keywords: post.keywords,
    articleSection: post.category,
    inLanguage: "en-IN",
  };

  const faqJsonLd = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const jsonLd: Record<string, unknown>[] = [
    orgJsonLd,
    breadcrumbJsonLd([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: post.title, url: `/blog/${post.slug}` },
    ]),
    articleJsonLd,
  ];
  if (faqJsonLd) jsonLd.push(faqJsonLd);

  const related = relatedPosts(post.slug, 3);

  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Seo
        title={`${post.title} | Betfair365`}
        description={post.description}
        canonical={`/blog/${post.slug}`}
        type="article"
        image={finalOg}
        keywords={post.keywords}
        publishedTime={post.date}
        modifiedTime={post.updated || post.date}
        author={author?.name}
        jsonLd={jsonLd}
      />
      <Header />
      <main className="container max-w-3xl py-10">
        <Breadcrumbs
          items={[
            { label: "Blog", to: "/blog" },
            { label: post.title },
          ]}
          className="mb-8"
        />

        <header className="mb-10">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
            {post.category}
          </div>
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            {post.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-border/70 py-4">
            {author ? (
              <Link
                to={`/authors/${author.slug}`}
                className="group flex items-center gap-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-sm font-bold text-gold-foreground shadow-gold">
                  {author.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </span>
                <span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-gold">
                    {author.name}
                    <BadgeCheck className="h-3.5 w-3.5 text-gold" />
                  </span>
                  <span className="text-[11px] text-muted-foreground">{author.role}</span>
                </span>
              </Link>
            ) : (
              <span className="text-sm font-semibold text-foreground">Betfair365 Editorial</span>
            )}
            <span className="ml-auto flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
              <span className="opacity-50">•</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readMinutes} min read</span>
            </span>
          </div>
        </header>

        <article className="max-w-none">
          {post.content.map(renderBlock)}
        </article>

        {author && (
          <section aria-label="About the author" className="mt-10 rounded-xl border border-border bg-card p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground font-bold">
                {author.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold">About {author.name}</h2>
                  <BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{author.role}</div>
                <p className="mt-2 text-sm text-foreground/85">{author.bio}</p>
                {author.credentials && author.credentials.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {author.credentials.map((c) => (
                      <li key={c} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted-foreground">{c}</li>
                    ))}
                  </ul>
                )}
                <Link
                  to={`/authors/${author.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold hover:underline"
                >
                  View full profile & all articles
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Internal link hub for SEO */}
        <section aria-label="Explore Betfair365" className="mt-10 rounded-xl border border-border bg-card p-5">
          <h2 className="mb-3 text-lg font-bold">Keep exploring</h2>
          <ul className="grid gap-2 text-sm sm:grid-cols-2">
            <li><Link to="/" className="text-foreground hover:text-gold">→ Live cricket scores hub</Link></li>
            <li><Link to="/#stats" className="text-foreground hover:text-gold">→ Top batters & bowlers stats</Link></li>
            <li><Link to="/#standings" className="text-foreground hover:text-gold">→ Team standings & form</Link></li>
            <li><Link to="/blog" className="text-foreground hover:text-gold">→ All cricket blog posts</Link></li>
          </ul>
        </section>

        {post.faq && post.faq.length > 0 && (
          <section aria-labelledby="faq" className="mt-10">
            <h2 id="faq" className="mb-4 text-2xl font-extrabold">Frequently asked questions</h2>
            <div className="space-y-3">
              {post.faq.map((f, i) => (
                <details key={i} className="group rounded-lg border border-border bg-card p-4">
                  <summary className="cursor-pointer list-none text-base font-semibold text-foreground">
                    {f.q}
                  </summary>
                  <p className="mt-2 text-sm text-foreground/85">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section aria-label="Related articles" className="mt-14">
            <h2 className="mb-5 font-display text-2xl font-bold tracking-tight">Related reads</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-gradient-card p-5 shadow-card-elevated transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-gold"
                >
                  <div className="mb-2 inline-flex w-fit rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                    {r.category}
                  </div>
                  <h3 className="font-display text-sm font-bold leading-snug group-hover:text-gold">{r.title}</h3>
                  <span className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-semibold text-gold">
                    Read <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="relative mt-14 overflow-hidden rounded-3xl border border-gold/30 bg-gradient-card p-8 text-center shadow-card-elevated">
          <div className="pointer-events-none absolute inset-0 bg-gradient-aurora opacity-90" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold">
              Join the <span className="text-gold-gradient">Betfair365</span> cricket community
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Live match chats, fan predictions and weekly stats drops — straight from our editorial team.
            </p>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-bold text-gold-foreground shadow-gold hover:opacity-95"
            >
              Join free <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <BottomNav />
      {/* Cross-link footer for crawl depth */}
      <nav aria-label="All articles" className="container pb-12">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">All articles</h2>
        <ul className="flex flex-wrap gap-2">
          {POSTS.map((p) => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground hover:border-gold hover:text-gold">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BlogPost;