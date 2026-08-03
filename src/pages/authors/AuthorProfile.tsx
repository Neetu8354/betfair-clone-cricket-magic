import { Link, Navigate, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Seo, breadcrumbJsonLd, orgJsonLd, SITE_URL } from "@/components/seo/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAuthor, postsByAuthor } from "@/data/posts";
import { BadgeCheck, Calendar, Clock, Mail, MapPin, Twitter, Linkedin, ArrowRight } from "lucide-react";

const AuthorProfile = () => {
  const { slug = "" } = useParams();
  const author = getAuthor(slug);
  if (!author) return <Navigate to="/authors" replace />;

  const posts = postsByAuthor(slug);
  const url = `${SITE_URL}/authors/${author.slug}`;

  const personJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.longBio || author.bio,
    url,
    email: author.email,
    worksFor: { "@type": "Organization", name: "BetfairVIP", url: SITE_URL },
    knowsAbout: author.expertise,
    address: author.location
      ? { "@type": "PostalAddress", addressLocality: author.location }
      : undefined,
    sameAs: [
      author.social?.twitter,
      author.social?.linkedin,
      author.social?.website,
    ].filter(Boolean),
  };

  const jsonLd = [
    orgJsonLd,
    breadcrumbJsonLd([
      { name: "Home", url: "/" },
      { name: "Authors", url: "/authors" },
      { name: author.name, url: `/authors/${author.slug}` },
    ]),
    personJsonLd,
  ];

  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Seo
        title={`${author.name} — ${author.role} | BetfairVIP`}
        description={`${author.name} is a verified BetfairVIP editorial author. ${author.bio}`}
        canonical={`/authors/${author.slug}`}
        keywords={`${author.name}, ${(author.expertise || []).join(", ")}, betfair editorial`}
        type="article"
        author={author.name}
        jsonLd={jsonLd}
      />
      <Header />
      <main className="container max-w-3xl py-10">
        <Breadcrumbs
          items={[
            { label: "Authors", to: "/authors" },
            { label: author.name },
          ]}
          className="mb-8"
        />

        {/* Profile header */}
        <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-7 shadow-card-elevated md:p-9">
          <div className="pointer-events-none absolute inset-0 bg-gradient-aurora opacity-80" />
          <div className="relative flex flex-col items-start gap-5 sm:flex-row">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-2xl font-bold text-gold-foreground shadow-gold ring-4 ring-gold/15">
              {author.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h1 className="font-display text-2xl font-bold tracking-tight md:text-4xl">
                  {author.name}
                </h1>
                {author.verified && (
                  <span
                    className="inline-flex items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-gold"
                    title="Verified BetfairVIP editorial author"
                  >
                    <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    Verified
                  </span>
                )}
              </div>
              <div className="mt-1 text-[12px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                {author.role}
              </div>

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                {author.location && (
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {author.location}
                  </span>
                )}
                {author.yearsExperience && (
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {author.yearsExperience}+ yrs experience
                  </span>
                )}
                {author.email && (
                  <a
                    href={`mailto:${author.email}`}
                    className="inline-flex items-center gap-1 hover:text-foreground"
                  >
                    <Mail className="h-3 w-3" /> {author.email}
                  </a>
                )}
              </div>

              {(author.social?.twitter || author.social?.linkedin) && (
                <div className="mt-3 flex gap-2">
                  {author.social?.twitter && (
                    <a
                      href={author.social.twitter}
                      target="_blank"
                      rel="me noopener noreferrer"
                      aria-label={`${author.name} on X`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border hover:border-gold/50"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {author.social?.linkedin && (
                    <a
                      href={author.social.linkedin}
                      target="_blank"
                      rel="me noopener noreferrer"
                      aria-label={`${author.name} on LinkedIn`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border hover:border-gold/50"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          <p className="relative mt-6 text-[15px] leading-relaxed text-foreground/90">
            {author.longBio || author.bio}
          </p>

          {author.credentials && author.credentials.length > 0 && (
            <div className="relative mt-6">
              <h2 className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Credentials
              </h2>
              <ul className="flex flex-wrap gap-2">
                {author.credentials.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-foreground/85"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {author.expertise && author.expertise.length > 0 && (
            <div className="relative mt-4">
              <h2 className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Areas of expertise
              </h2>
              <ul className="flex flex-wrap gap-2">
                {author.expertise.map((e) => (
                  <li
                    key={e}
                    className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[11px] font-semibold text-gold"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Articles by author */}
        <section className="mt-12" aria-labelledby="articles-by">
          <h2 id="articles-by" className="mb-5 font-display text-2xl font-bold tracking-tight">
            Articles by {author.name.split(" ")[0]}{" "}
            <span className="text-sm font-medium text-muted-foreground">
              ({posts.length})
            </span>
          </h2>

          {posts.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No published articles yet — check back soon.
            </p>
          ) : (
            <ul className="space-y-3">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/blog/${p.slug}`}
                    className="group block rounded-2xl border border-border bg-gradient-card p-5 shadow-card-elevated transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-gold"
                  >
                    <div className="mb-2 inline-flex w-fit rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                      {p.category}
                    </div>
                    <h3 className="font-display text-base font-bold leading-snug group-hover:text-gold">
                      {p.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(p.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {p.readMinutes} min read
                      </span>
                      <span className="ml-auto inline-flex items-center gap-1 font-semibold text-gold">
                        Read <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="mt-10 rounded-xl border border-border bg-card p-5">
          <h2 className="mb-2 text-base font-bold">Editorial standards</h2>
          <p className="text-sm text-foreground/85">
            Every BetfairVIP article is written or reviewed by a verified
            specialist on our editorial team. Read more about our{" "}
            <Link to="/about" className="font-semibold text-gold underline-offset-4 hover:underline">
              editorial mission
            </Link>{" "}
            or{" "}
            <Link to="/contact" className="font-semibold text-gold underline-offset-4 hover:underline">
              contact the team
            </Link>
            .
          </p>
        </section>
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
    </div>
  );
};

export default AuthorProfile;