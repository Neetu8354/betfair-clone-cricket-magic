import { useEffect, useState } from "react";

const KEY = "rk_coins";
const START = 10000;

export function useCoins() {
  const [coins, setCoins] = useState<number>(() => {
    if (typeof window === "undefined") return START;
    const v = localStorage.getItem(KEY);
    return v ? parseInt(v, 10) : START;
  });

  useEffect(() => {
    localStorage.setItem(KEY, String(coins));
  }, [coins]);

  const reset = () => setCoins(START);
  const add = (n: number) => setCoins((c) => Math.max(0, c + n));

  return { coins, setCoins, add, reset };
}