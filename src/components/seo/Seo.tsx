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
  noindex?: boolean;
  locale?: string;
};

const SITE_URL = "https://betfairvip.live";
const DEFAULT_IMG = `/og-default.jpg`;

const absUrl = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

const upsertMeta = (key: string, value: string, attr: "name" | "property" = "name") => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

const upsertLink = (rel: string, href: string, hreflang?: string) => {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    if (hreflang) el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.href = href;
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
  author = "BetfairVIP",
  noindex = false,
  locale = "en_IN",
}: Props) => {
  useEffect(() => {
    const ogImage = absUrl(image);

    document.title = title;
    upsertMeta("description", description);
    if (keywords) upsertMeta("keywords", keywords);
    upsertMeta("author", author);
    upsertMeta(
      "robots",
      noindex
        ? "noindex,nofollow"
        : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    );

    upsertMeta("og:title", title, "property");
    upsertMeta("og:description", description, "property");
    upsertMeta("og:type", type, "property");
    upsertMeta("og:image", ogImage, "property");
    upsertMeta("og:image:width", "1200", "property");
    upsertMeta("og:image:height", "640", "property");
    upsertMeta("og:image:alt", title, "property");
    upsertMeta("og:site_name", "BetfairVIP", "property");
    upsertMeta("og:locale", locale, "property");

    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);
    upsertMeta("twitter:image", ogImage);

    if (publishedTime) upsertMeta("article:published_time", publishedTime, "property");
    if (modifiedTime) upsertMeta("article:modified_time", modifiedTime, "property");

    const href = canonical ? absUrl(canonical) : `${SITE_URL}${window.location.pathname}`;
    upsertLink("canonical", href);
    upsertMeta("og:url", href, "property");

    // hreflang — India English primary + global English + x-default
    upsertLink("alternate", href, "en-IN");
    upsertLink("alternate", href, "en");
    upsertLink("alternate", href, "x-default");

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
  }, [title, description, canonical, image, type, jsonLd, keywords, publishedTime, modifiedTime, author, noindex, locale]);

  return null;
};

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BetfairVIP",
  alternateName: "BetfairVIP Cricket Hub",
  url: SITE_URL,
  logo: `${SITE_URL}/og-default.jpg`,
  sameAs: [],
  description: "India's premium cricket stats, predictions and community hub.",
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BetfairVIP",
  url: SITE_URL,
  inLanguage: "en-IN",
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
