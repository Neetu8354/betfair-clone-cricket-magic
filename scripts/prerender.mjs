// Build-time static prerendering for the SPA.
// After `vite build`, this script boots a local static server for dist/,
// visits every URL listed in public/sitemap.xml with a headless browser,
// waits for the React app to render, and overwrites the corresponding
// dist HTML file with the fully rendered markup. This gives crawlers that
// don't execute JS real content instead of an empty <div id="root"></div>,
// while `src/main.tsx` hydrates the same markup on the client.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import http from "node:http";
import handler from "serve-handler";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

const ROOT = path.resolve(new URL(".", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const projectRoot = path.resolve(ROOT, "..");
const distDir = path.join(projectRoot, "dist");
const sitemapPath = path.join(projectRoot, "public", "sitemap.xml");

async function getRoutes() {
  const xml = await readFile(sitemapPath, "utf-8");
  const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  return locs.map((loc) => {
    const url = new URL(loc);
    return url.pathname === "" ? "/" : url.pathname;
  });
}

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) =>
      handler(req, res, { public: distDir, cleanUrls: false })
    );
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

async function main() {
  if (!existsSync(distDir)) {
    console.error("[prerender] dist/ not found. Run `vite build` first.");
    process.exit(1);
  }

  const routes = await getRoutes();
  const server = await startServer();
  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;

  const executablePath = await chromium.executablePath();
  const browser = await puppeteer.launch({
    executablePath,
    headless: chromium.headless,
    args: chromium.args,
  });

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      try {
        await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle0", timeout: 30000 });
        const html = await page.content();

        const outDir = route === "/" ? distDir : path.join(distDir, route.replace(/^\//, ""));
        await mkdir(outDir, { recursive: true });
        const outFile = path.join(outDir, "index.html");
        await writeFile(outFile, html, "utf-8");
        console.log(`[prerender] wrote ${path.relative(distDir, outFile)}`);
      } catch (err) {
        console.error(`[prerender] failed for ${route}:`, err.message);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  // Never fail the deploy because of prerendering — worst case the site
  // just falls back to client-side rendering, which is the pre-existing behavior.
  console.error("[prerender] skipped due to error:", err.message);
  process.exit(0);
});
