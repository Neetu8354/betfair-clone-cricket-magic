import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root")!;

if (rootEl.hasChildNodes()) {
  // Prerendered static HTML present (see scripts/prerender.mjs) — hydrate instead of remounting.
  hydrateRoot(rootEl, <App />);
} else {
  createRoot(rootEl).render(<App />);
}
