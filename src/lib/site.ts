export const SITE = {
  name: "BetfairVIP",
  tagline: "India's Premium Cricket Betting Odds, Exchange & Predictions Hub",
  whatsapp: "https://wa.link/reddyanna_",
  currency: "₹",
};

export const formatCoins = (n: number) =>
  `${SITE.currency}${n.toLocaleString("en-IN")}`;