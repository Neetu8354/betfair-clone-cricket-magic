export const SITE = {
  name: "Betfair365",
  tagline: "India's Premium Cricket Stats & Predictions Hub",
  whatsapp: "https://wa.link/reddyanna_",
  currency: "₹",
};

export const formatCoins = (n: number) =>
  `${SITE.currency}${n.toLocaleString("en-IN")}`;