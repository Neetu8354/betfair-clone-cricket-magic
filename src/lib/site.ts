export const SITE = {
  name: "RoyalKhel",
  tagline: "India's Free-to-Play Cricket & Casino Arena",
  whatsapp: "https://wa.link/reddyanna_",
  currency: "₹",
};

export const formatCoins = (n: number) =>
  `${SITE.currency}${n.toLocaleString("en-IN")}`;