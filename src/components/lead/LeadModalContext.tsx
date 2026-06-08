import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

export type FundKey = "flexi" | "mid" | "small";

type Ctx = {
  open: boolean;
  fund: FundKey;
  openModal: (f?: FundKey) => void;
  closeModal: () => void;
};

const LeadModalCtx = createContext<Ctx | null>(null);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [fund, setFund] = useState<FundKey>("flexi");
  const openModal = useCallback((f?: FundKey) => {
    setFund(f ?? "flexi");
    setOpen(true);
  }, []);
  const closeModal = useCallback(() => setOpen(false), []);
  return (
    <LeadModalCtx.Provider value={{ open, fund, openModal, closeModal }}>
      {children}
    </LeadModalCtx.Provider>
  );
}

export function useLeadModal() {
  const ctx = useContext(LeadModalCtx);
  if (!ctx) throw new Error("useLeadModal must be used within LeadModalProvider");
  return ctx;
}

export const FUNDS: Record<FundKey, { tag: string; name: string; cat: string; note: string }> = {
  flexi: {
    tag: "Flexi Cap Pick · 2025–2030",
    name: "Parag Parikh Flexi Cap Fund",
    cat: "FLEXI CAP CATEGORY · DIRECT GROWTH",
    note: "Why this pick: Portfolio PE of ~22x vs category average ~28x. The fund maintains 15–20% international allocation providing rupee hedge — relevant as the rupee faces structural depreciation pressure. Portfolio turnover under 15% — true buy-and-hold philosophy. Ideal for a 5-year+ horizon with moderate risk appetite.",
  },
  mid: {
    tag: "Mid Cap Pick · 2025–2030",
    name: "Nippon India Growth Fund",
    cat: "MID CAP CATEGORY · DIRECT GROWTH",
    note: "Why this pick: Consistent alpha over benchmark across 3 market cycles. Portfolio concentrated in high ROCE businesses with strong domestic demand tailwinds from India's capex super-cycle. Fund manager with 9+ year tenure — institutional memory that matters enormously in mid cap navigation.",
  },
  small: {
    tag: "Small Cap Pick · 2025–2030",
    name: "Quant Small Cap Fund",
    cat: "SMALL CAP CATEGORY · DIRECT GROWTH",
    note: "Why this pick: Unique quant-driven stock selection removes emotional bias from the process. Low portfolio turnover for a small cap fund — unusually disciplined. Currently holds quality businesses at valuations below their 3-year average. High risk, high conviction — only suitable for 5+ year horizon investors.",
  },
};
