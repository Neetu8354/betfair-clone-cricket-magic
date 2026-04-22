import { useEffect, useState, useCallback } from "react";

const KEY = "pitchpro:wallet:v1";
const START = 5000;

export type Pick = {
  id: string;
  match: string;
  selection: string;
  side: "for" | "against";
  odds: number;
  stake: number;
  status: "open" | "won" | "lost";
  ts: number;
};

type Wallet = { coins: number; picks: Pick[]; wins: number };

const load = (): Wallet => {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { coins: START, picks: [], wins: 0 };
};

let listeners: Array<() => void> = [];
let state: Wallet = load();

const save = () => {
  localStorage.setItem(KEY, JSON.stringify(state));
  listeners.forEach((l) => l());
};

export const useCoins = () => {
  const [, force] = useState(0);
  useEffect(() => {
    const l = () => force((n) => n + 1);
    listeners.push(l);
    return () => {
      listeners = listeners.filter((x) => x !== l);
    };
  }, []);

  const placePick = useCallback((p: Omit<Pick, "id" | "status" | "ts">) => {
    if (p.stake <= 0 || p.stake > state.coins) return false;
    state = {
      ...state,
      coins: state.coins - p.stake,
      picks: [
        { ...p, id: crypto.randomUUID(), status: "open" as const, ts: Date.now() },
        ...state.picks,
      ].slice(0, 50),
    };
    save();
    return true;
  }, []);

  const resolveLast = useCallback((won: boolean) => {
    const open = state.picks.find((x) => x.status === "open");
    if (!open) return;
    const payout = won ? Math.round(open.stake * open.odds) : 0;
    state = {
      ...state,
      coins: state.coins + payout,
      wins: state.wins + (won ? 1 : 0),
      picks: state.picks.map((x) =>
        x.id === open.id ? { ...x, status: won ? "won" : "lost" } : x
      ),
    };
    save();
  }, []);

  const reset = useCallback(() => {
    state = { coins: START, picks: [], wins: 0 };
    save();
  }, []);

  const claimDaily = useCallback(() => {
    state = { ...state, coins: state.coins + 500 };
    save();
  }, []);

  return { ...state, placePick, resolveLast, reset, claimDaily };
};