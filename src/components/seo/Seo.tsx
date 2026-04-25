import { useEffect } from "react";

type Props = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  keywords?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
};

const SITE_URL = "https://sports-casino-clone.lovable.app";
const DEFAULT_IMG = `${SITE_URL}/og-default.jpg`;

const upsertMeta = (key: string, value: string, attr: "name" | "property" = "name") => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

export const Seo = ({
  title,
  description,
  canonical,
  image = DEFAULT_IMG,
  type = "website",
  jsonLd,
  keywords,
  publishedTime,
  modifiedTime,
  author = "Betfair Editorial",
}: Props) => {
  useEffect(() => {
    document.title = title;
    upsertMeta("description", description);
    if (keywords) upsertMeta("keywords", keywords);
    upsertMeta("author", author);
    upsertMeta("robots", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");

    upsertMeta("og:title", title, "property");
    upsertMeta("og:description", description, "property");
    upsertMeta("og:type", type, "property");
    upsertMeta("og:image", image, "property");
    upsertMeta("og:site_name", "Betfair", "property");

    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);
    upsertMeta("twitter:image", image);

    if (publishedTime) upsertMeta("article:published_time", publishedTime, "property");
    if (modifiedTime) upsertMeta("article:modified_time", modifiedTime, "property");

    const href = canonical
      ? canonical.startsWith("http")
        ? canonical
        : `${SITE_URL}${canonical}`
      : `${SITE_URL}${window.location.pathname}`;
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = href;
    upsertMeta("og:url", href, "property");

    // Preconnects (perf hint, idempotent)
    ["https://fonts.googleapis.com", "https://fonts.gstatic.com"].forEach((origin) => {
      if (!document.head.querySelector(`link[rel="preconnect"][href="${origin}"]`)) {
        const l = document.createElement("link");
        l.rel = "preconnect";
        l.href = origin;
        if (origin.includes("gstatic")) l.crossOrigin = "anonymous";
        document.head.appendChild(l);
      }
    });

    // JSON-LD
    document.querySelectorAll('script[data-seo-jsonld="true"]').forEach((n) => n.remove());
    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      blocks.forEach((block) => {
        const s = document.createElement("script");
        s.type = "application/ld+json";
        s.dataset.seoJsonld = "true";
        s.text = JSON.stringify(block);
        document.head.appendChild(s);
      });
    }
  }, [title, description, canonical, image, type, jsonLd, keywords, publishedTime, modifiedTime, author]);

  return null;
};

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Betfair",
  alternateName: "Betfair Cricket Hub",
  url: SITE_URL,
  logo: `${SITE_URL}/og-default.jpg`,
  sameAs: [],
  description: "India's premium cricket stats, predictions and community hub.",
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Betfair",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const breadcrumbJsonLd = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`,
  })),
});

export { SITE_URL };