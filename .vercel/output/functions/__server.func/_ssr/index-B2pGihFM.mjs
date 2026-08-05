import { r as reactExports, W as jsxRuntimeExports, V as React } from "./server-B624L8BS.mjs";
import { t as toast } from "./router-Bk79mrfr.mjs";
import { u as updateLeadMeetingStatusFn, a as updateLeadMeetingTimeFn, s as submitLeadFn } from "./leads-Bnvaf6H1.mjs";
import { o as objectType, s as stringType } from "./types-DLNE6-nO.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const LeadModalCtx = reactExports.createContext(null);
function LeadModalProvider({ children }) {
  const [open, setOpen] = reactExports.useState(false);
  const [fund, setFund] = reactExports.useState("flexi");
  const openModal = reactExports.useCallback((f) => {
    setFund(f ?? "flexi");
    setOpen(true);
  }, []);
  const closeModal = reactExports.useCallback(() => setOpen(false), []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LeadModalCtx.Provider, { value: { open, fund, openModal, closeModal }, children });
}
function useLeadModal() {
  const ctx = reactExports.useContext(LeadModalCtx);
  if (!ctx) throw new Error("useLeadModal must be used within LeadModalProvider");
  return ctx;
}
const FUNDS$1 = {
  flexi: {
    tag: "Flexi Cap Pick · 2025–2030",
    name: "Parag Parikh Flexi Cap Fund",
    cat: "FLEXI CAP CATEGORY · DIRECT GROWTH",
    note: "Why this pick: Portfolio PE of ~22x vs category average ~28x. The fund maintains 15–20% international allocation providing rupee hedge — relevant as the rupee faces structural depreciation pressure. Portfolio turnover under 15% — true buy-and-hold philosophy. Ideal for a 5-year+ horizon with moderate risk appetite."
  },
  mid: {
    tag: "Mid Cap Pick · 2025–2030",
    name: "Nippon India Growth Fund",
    cat: "MID CAP CATEGORY · DIRECT GROWTH",
    note: "Why this pick: Consistent alpha over benchmark across 3 market cycles. Portfolio concentrated in high ROCE businesses with strong domestic demand tailwinds from India's capex super-cycle. Fund manager with 9+ year tenure — institutional memory that matters enormously in mid cap navigation."
  },
  small: {
    tag: "Small Cap Pick · 2025–2030",
    name: "Quant Small Cap Fund",
    cat: "SMALL CAP CATEGORY · DIRECT GROWTH",
    note: "Why this pick: Unique quant-driven stock selection removes emotional bias from the process. Low portfolio turnover for a small cap fund — unusually disciplined. Currently holds quality businesses at valuations below their 3-year average. High risk, high conviction — only suitable for 5+ year horizon investors."
  }
};
function Navbar() {
  const { openModal } = useLeadModal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "nav-logo", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "nav-wordmark", children: [
      "Shri",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Nivesh" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "nav-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nav-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "nav-badge", children: "NISM CERTIFIED · ARN Holder" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "nav-cta", onClick: () => openModal("flexi"), children: "See Fund Picks →" })
    ] })
  ] });
}
function Hero() {
  const { openModal } = useLeadModal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "hero", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-bg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-tag", children: "Model Portfolio · Jan 2020 – May 2025" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "hero-headline", children: [
        "₹10,000/month SIP.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "5 Years. 3 Funds." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "accent", children: "Here's What Happened." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-sub", children: "Not star ratings. Not bank recommendations. Fundamentals — PE ratios, fund manager stability, and portfolio concentration. This is what disciplined research builds." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-primary", onClick: () => openModal("flexi"), children: "See Our 2025–30 Fund Picks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#portfolio", className: "btn-ghost", children: "View The Numbers" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-num", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pv green", children: "₹11.4L" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-label", children: "From ₹6L Invested" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-num", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pv green", children: "19.8%" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-label", children: "Portfolio XIRR" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-num", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+5.6%" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-label", children: "Alpha vs Nifty 50" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-disc", children: "* Illustrative model portfolio. Not actual client data. Past performance is not indicative of future returns." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-card-stack", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "float-badge one", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-icon", children: "📈" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-text", children: "Portfolio XIRR" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-sub", children: "19.8% · 5 Year SIP" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-main", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "card-label", children: "Illustrative Model Portfolio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "card-badge", children: "↑ Beat Nifty by 5.6%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-disc", children: "Not client data · Based on public NAV history" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "portfolio-value", children: "₹11,40,000" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "portfolio-change", children: "↑ ₹5,40,000 gain on ₹6,00,000 invested" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mini-chart", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 360 60", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g1", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#4a8c3f", stopOpacity: "0.22" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#4a8c3f", stopOpacity: "0" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M0,54 L40,50 L80,46 L100,42 L140,36 L180,28 L220,20 L260,14 L300,8 L360,3 L360,60 L0,60 Z",
              fill: "url(#g1)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M0,54 L40,50 L80,46 L100,42 L140,36 L180,28 L220,20 L260,14 L300,8 L360,3",
              stroke: "#4a8c3f",
              strokeWidth: "2.5",
              fill: "none",
              strokeLinecap: "round"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fund-list", children: [
          { n: "Flexi Cap Pick", c: "Large & Mid Cap Blend", r: "18.4%" },
          { n: "Mid Cap Pick", c: "Pure Mid Cap Category", r: "22.1%" },
          { n: "Small Cap Pick", c: "Small Cap Category", r: "27.8%" }
        ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fund-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fund-info", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fund-name", children: f.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fund-cat", children: f.c })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fund-ret", children: f.r })
        ] }, f.n)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-bottom", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xirr-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xirr-box", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Portfolio XIRR" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "xv green", children: "19.8%" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xirr-box", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Nifty 50 TRI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "xv orange", children: "14.2%" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "vs-badge", children: "📊  Alpha generated: +5.6% per annum above benchmark" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "float-badge two", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-icon", children: "🔒" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-text", children: "Fund Names" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-sub", children: "Free · One click away" })
      ] })
    ] }) })
  ] });
}
function TrustBar() {
  const items = [
    { i: "🏛️", t: "NSE Invest Empanelled" },
    { i: "🔬", t: "NISM Certified" },
    { i: "📜", t: "AMFI Registered MFD" },
    { i: "🔒", t: "Free Portfolio Consultation" },
    { i: "🌾", t: "Rooted in Odisha · Pan-India" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "trust-bar", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "trust-item", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "icon", children: it.i }),
    " ",
    it.t
  ] }, it.t)) });
}
const BARS = [
  { yr: "2020", pct: "+14.9%", p: 33, n: 33, sub: "Both flat" },
  { yr: "2021", pct: "+54%", p: 100, n: 65, sub: "vs +24.1%" },
  { yr: "2022", pct: "−8%", p: 16, n: 20, sub: "Down year", neg: true },
  { yr: "2023", pct: "+38.2%", p: 82, n: 54, sub: "vs +20.1%" },
  { yr: "2024", pct: "+22.4%", p: 52, n: 37, sub: "vs +15.3%" },
  { yr: "2025", pct: "+11.8%", p: 28, n: 19, sub: "YTD" }
];
const FUNDS = [
  {
    l: "Fund 1 · Flexi Cap",
    n: "Diversified Growth Pick",
    tags: [
      ["PE at entry", "21.3x"],
      ["Expense", "0.69%"],
      ["Manager tenure", "11+ yrs"]
    ],
    x: "18.4%"
  },
  {
    l: "Fund 2 · Mid Cap",
    n: "Mid-Market Compounder",
    tags: [
      ["PE at entry", "24.6x"],
      ["Expense", "0.82%"],
      ["Manager tenure", "8+ yrs"]
    ],
    x: "22.1%"
  },
  {
    l: "Fund 3 · Small Cap",
    n: "High-Conviction Frontier",
    tags: [
      ["PE at entry", "19.8x"],
      ["Expense", "0.94%"],
      ["Turnover", "<20%"]
    ],
    x: "27.8%"
  }
];
function PortfolioSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "portfolio-section", id: "portfolio", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag reveal-on-scroll visible", children: "The Numbers" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-title reveal-on-scroll visible", children: [
      "₹10K/month. 5 years.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "3 funds. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Here's the breakdown." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-lead reveal-on-scroll visible", children: "Built on publicly available NAV data. Every fund chosen by a documented research process — not hype, not NFO pressure, not distributor incentives." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "portfolio-grid", style: { marginTop: 56 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chart-block reveal-on-scroll visible", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-title", children: "Annual Returns: Model Portfolio vs Nifty 50 TRI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chart-sub", children: "Illustrative · Based on public NAV data · Not client returns" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chart-legend", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leg-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "leg-dot p" }),
            "Model Portfolio"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leg-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "leg-dot n" }),
            "Nifty 50 TRI"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bars-wrap", children: BARS.map((b2, i2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bar-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `bar-pct${b2.neg ? " neg" : ""}`, children: b2.pct }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bar-pair", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `b ${b2.neg ? "neg" : "p"}`,
                style: { height: `${b2.p}%`, animationDelay: `${0.1 + i2 * 0.1}s` }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `b ${b2.neg ? "neg-n" : "n"}`,
                style: { height: `${b2.n}%`, animationDelay: `${0.3 + i2 * 0.1}s` }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bar-lbl", children: [
            b2.yr,
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: b2.neg ? "rgba(224,123,42,0.6)" : "rgba(255,255,255,0.3)" }, children: b2.sub })
          ] })
        ] }, b2.yr)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fund-cards reveal-on-scroll visible", children: FUNDS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fund-card-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fci-label", children: f.l }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fci-name", children: f.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fci-meta", children: f.tags.map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fci-tag", children: [
              k,
              ": ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: v })
            ] }, k)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fci-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fci-xirr", children: f.x }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fci-xirr-lbl", children: "XIRR · 5Y SIP" })
          ] })
        ] }, f.n)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "portfolio-summary reveal-on-scroll visible", style: { marginTop: 28 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ps-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Total Invested" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pv cream", children: "₹6.0 L" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ps-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Current Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pv green", children: "₹11.4 L" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ps-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Absolute Gain" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pv orange", children: "₹5.4 L" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ps-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Portfolio XIRR" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pv green", children: "19.8%" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const CARDS$1 = [
  {
    key: "flexi",
    cat: "Flexi Cap Pick · 2025–30",
    tone: "flexi",
    teaser: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "This fund has a ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "portfolio PE lower than its own 5-year average" }),
      " right now — buying growth at a discount. The fund manager has navigated 3 market corrections without deviating from mandate once."
    ] })
  },
  {
    key: "mid",
    cat: "Mid Cap Pick · 2025–30",
    tone: "mid",
    teaser: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Mid caps are entering the sweet spot of India's domestic capex cycle. This fund holds",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "high ROCE businesses with zero net debt" }),
      " — the kind that compound quietly for years without making news."
    ] })
  },
  {
    key: "small",
    cat: "Small Cap Pick · 2025–30",
    tone: "small",
    teaser: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Not all small caps are risky. This fund has a",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "portfolio turnover ratio under 20%" }),
      " — the manager buys and holds conviction bets. That discipline is exactly how small cap wealth gets built, not traded."
    ] })
  }
];
function RecommendationSection() {
  const { openModal } = useLeadModal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "reco-section", id: "recommendations", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reco-grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reco-left reveal-on-scroll visible", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag", children: "Research · 2025–2030" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-title", children: [
        "My current picks for the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "next 5-year cycle." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reco-body", children: "The model portfolio above wasn't luck. It was a process. I've run the same process to identify 3 funds for 2025–2030. The economy is entering a different phase — the right funds for the next cycle are not the same as the last one." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reco-body", children: "The fund names are free to access. I only ask that you share your details so I can follow up with genuinely personalised advice." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reco-points", children: [
        "Each fund selected after analysing 100+ schemes — PE ratios, turnover, manager track record across a full market cycle",
        "Macro tailwinds considered — domestic consumption, capex cycle, and rupee dynamics for 2025–2030",
        "Completely free. No paid subscription. Just share your details and the fund names are revealed instantly",
        "Backed by SEBI Registered Research Analyst credentials — not broker opinions, not YouTube tips"
      ].map((t2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reco-point", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rp-dot", children: "✓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2 })
      ] }, t2)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "locked-cards reveal-on-scroll visible", children: CARDS$1.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "locked-card", onClick: () => openModal(c.key), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lc-top", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `lc-cat ${c.tone}`, children: c.cat }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lc-lock", children: "🔒" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lc-teaser", children: c.teaser }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lc-blur" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "lc-btn", children: "Reveal Fund Name  →" })
    ] }, c.key)) })
  ] }) });
}
const STEPS = [
  {
    n: 1,
    t: "See The Fund Picks",
    d: "Click any locked card above. Share your name, phone, and email. Fund names are revealed instantly — free, no payment required."
  },
  {
    n: 2,
    t: "Book Your Slot",
    d: "Use the Calendly widget to instantly schedule a 20-minute portfolio review call at a time that works perfectly for you.",
    alt: true
  },
  {
    n: 3,
    t: "Portfolio Consultation",
    d: "We discuss your financial goals, current investments, risk appetite, and see how our approach fits into your plans."
  },
  {
    n: 4,
    t: "Actionable Insights",
    d: "Walk away with absolute clarity on where you stand and what your next steps should be — no pressure, no commitment.",
    alt: true
  }
];
function ProcessSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "process-section", id: "process", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "process-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag", children: "Simple Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-title", children: [
        "From curiosity to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "clarity" }),
        " in 4 steps"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "process-steps", children: STEPS.map((s2, i2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "process-step reveal-on-scroll visible",
        style: { transitionDelay: `${i2 * 0.1}s` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `step-num${s2.alt ? " alt" : ""}`, children: s2.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "step-title", children: s2.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "step-desc", children: s2.d })
        ]
      },
      s2.n
    )) })
  ] });
}
const CARDS = [
  {
    i: "🔬",
    t: "SEBI-Registered Research",
    d: "Not opinions — registered, accountable research with proper disclosures. Every fund pick has a documented rationale."
  },
  {
    i: "🤝",
    t: "Clarity Before Commitment",
    d: "We offer a free portfolio consultation before anything else. We understand your goals first, without any pressure to invest."
  },
  {
    i: "🌾",
    t: "Local Roots, National Reach",
    d: "Deep roots in Odisha. We understand local income patterns, agricultural cycles, and family wealth goals from the ground up."
  },
  {
    i: "📚",
    t: "Education First",
    d: "Market insights, investing psychology, IPO analysis — freely shared on X (Twitter) every day. No paywall, no agenda."
  }
];
function WhyUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "why-section", id: "why", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "why-left reveal-on-scroll visible", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag", children: "Why ShriNivesh" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-title", children: [
        "Research-First.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Client-Always." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "why-desc", children: "We're not distributors pushing NFOs for commission. We're educators, analysts, and long-term partners. Every recommendation comes backed by documented research — PE ratios, manager evaluation, and macro alignment — not sales targets." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "why-grid reveal-on-scroll visible", children: CARDS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "why-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "why-icon", children: c.i }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "why-title", children: c.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "why-text", children: c.d })
    ] }, c.t)) })
  ] });
}
const ITEMS = [
  {
    q: "Started my SIP with just ₹5,000/month on Ashish's guidance. Three years later, my corpus has grown beyond what any FD could have done. The guidance was patient and genuinely personalised.",
    n: "Ramesh Mohanty",
    r: "Small Business Owner, Bhubaneswar",
    a: "R"
  },
  {
    q: "The research content on X first caught my attention. Then the consultation blew me away — no sales pitch, just honest advice about what suits my risk tolerance and timeline. Rare.",
    n: "Priya Nanda",
    r: "IT Professional, Hyderabad",
    a: "P"
  },
  {
    q: "As a farmer, I never thought mutual funds were for me. ShriNivesh explained everything simply and helped me start a small SIP. Two years in, I recommend it to everyone in my village.",
    n: "Suresh Pradhan",
    r: "Cotton Farmer, Sambalpur",
    a: "S"
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "test-section", id: "testimonials", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "test-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag", children: "Client Stories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-title", children: [
        "Real people. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Real wealth built." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "test-grid", children: ITEMS.map((it, i2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "test-card reveal-on-scroll visible",
        style: { transitionDelay: `${i2 * 0.1}s` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stars", children: "★★★★★" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "test-quote", children: it.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "test-author", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "author-avatar", children: it.a }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "author-name", children: it.n }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "author-role", children: it.r })
            ] })
          ] })
        ]
      },
      it.n
    )) })
  ] });
}
function Manifesto() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manifesto-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manifesto-inner reveal-on-scroll visible", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "manifesto-text", children: [
      "“The funds that built wealth from 2020–2025 are ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "not necessarily" }),
      " the funds for 2025–2030. The economy rotates. The right advisor rotates with it.”"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "manifesto-attr", children: "Ashish · ShriNivesh · SEBI Registered Research Analyst" })
  ] }) });
}
function CTASection() {
  const { openModal } = useLeadModal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "cta-section", id: "cta", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cta-eyebrow", children: "Start Here · It's Free" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "cta-title", children: [
      "See the 3 funds.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Then let's build your portfolio." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "cta-sub", children: "Fund names revealed instantly after you share your details. No payment. No spam. Just honest research and a free follow-up call." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-cta", onClick: () => openModal("flexi"), children: "See Free Fund Picks Now" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@shrinivesh.com", className: "btn-cta-alt", children: "Talk to Ashish Directly" })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-top", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-brand", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-brand-name", children: "ShriNivesh" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "SEBI Registered Research Analyst & AMFI Registered Mutual Fund Distributor. Empanelled with NSE Invest. Helping Indian investors build wealth through research and clarity — beyond just investing." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Mutual Fund Distribution" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "SIP Planning" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Research Reports" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Goal-Based Planning" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Resources" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Market Insights" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "IPO Analysis" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Investor Education" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Follow on X / Twitter" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Connect" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Contact Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "WhatsApp" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "NSE Invest Portal" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Disclosures" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-copy", children: "© 2025 ShriNivesh. All rights reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-disc", children: "Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing. The model portfolio shown is illustrative only and does not represent actual client returns. Past performance is not indicative of future returns. SEBI RA Registration: INH000XXXXXX · ARN: XXXXXX" })
    ] })
  ] });
}
var isCheckBoxInput = (element) => element.type === "checkbox";
var isDateObject = (value) => value instanceof Date;
var isNullOrUndefined = (value) => value == null;
const isObjectType = (value) => typeof value === "object";
var isObject = (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
var getEventValue = (event) => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var isNameInFieldArray = (names, name) => name.split(".").some((part, index, arr) => !isNaN(Number(part)) && names.has(arr.slice(0, index).join(".")));
var isPlainObject = (tempObject) => {
  const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
  return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
};
var isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
function cloneObject(data) {
  if (data instanceof Date) {
    return new Date(data);
  }
  const isFileListInstance = typeof FileList !== "undefined" && data instanceof FileList;
  if (isWeb && (data instanceof Blob || isFileListInstance)) {
    return data;
  }
  const isArray = Array.isArray(data);
  if (!isArray && !(isObject(data) && isPlainObject(data))) {
    return data;
  }
  const copy = isArray ? [] : Object.create(Object.getPrototypeOf(data));
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      copy[key] = cloneObject(data[key]);
    }
  }
  return copy;
}
const EVENTS = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  SUBMIT: "submit",
  TRIGGER: "trigger",
  VALID: "valid"
};
const VALIDATION_MODE = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
};
const INPUT_VALIDATION_RULES = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
const FORM_ERROR_TYPE = "form";
const ROOT_ERROR_TYPE = "root";
const PROTOTYPE_KEYWORDS = ["__proto__", "constructor", "prototype"];
var isKey = (value) => /^\w*$/.test(value);
var isUndefined = (val) => val === void 0;
var stringToPath = (input) => input.split(/[.[\]'"]/g).filter(Boolean);
var get = (object, path, defaultValue) => {
  if (!path || !isObject(object)) {
    return defaultValue;
  }
  const paths = isKey(path) ? [path] : stringToPath(path);
  if (paths.some((key) => PROTOTYPE_KEYWORDS.includes(key))) {
    return defaultValue;
  }
  const result = paths.reduce((result2, key) => {
    return isNullOrUndefined(result2) ? void 0 : result2[key];
  }, object);
  return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
};
var isBoolean = (value) => typeof value === "boolean";
var isFunction = (value) => typeof value === "function";
var set = (object, path, value) => {
  let index = -1;
  const tempPath = isKey(path) ? [path] : stringToPath(path);
  const length = tempPath.length;
  const lastIndex = length - 1;
  while (++index < length) {
    const key = tempPath[index];
    let newValue = value;
    if (index !== lastIndex) {
      const objValue = object[key];
      newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
    }
    if (PROTOTYPE_KEYWORDS.includes(key)) {
      return;
    }
    object[key] = newValue;
    object = object[key];
  }
};
const HookFormControlContext = React.createContext(null);
HookFormControlContext.displayName = "HookFormControlContext";
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
  const result = {};
  for (const key in formState) {
    Object.defineProperty(result, key, {
      get: () => {
        const _key = key;
        if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
          control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
        }
        return formState[_key];
      }
    });
  }
  return result;
};
const useIsomorphicLayoutEffect = isWeb ? React.useLayoutEffect : React.useEffect;
var isString = (value) => typeof value === "string";
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
  if (isString(names)) {
    isGlobal && _names.watch.add(names);
    return get(formValues, names, defaultValue);
  }
  if (Array.isArray(names)) {
    return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
  }
  isGlobal && (_names.watchAll = true);
  return formValues;
};
var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);
const isEmptyObjectWithCustomPrototype = (object, keys) => keys.length === 0 && !Array.isArray(object) && !isPlainObject(object);
function deepEqual(object1, object2, visited = /* @__PURE__ */ new WeakSet()) {
  if (object1 === object2) {
    return true;
  }
  if (isPrimitive(object1) || isPrimitive(object2)) {
    return Object.is(object1, object2);
  }
  if (isDateObject(object1) && isDateObject(object2)) {
    return Object.is(object1.getTime(), object2.getTime());
  }
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  if (isEmptyObjectWithCustomPrototype(object1, keys1) || isEmptyObjectWithCustomPrototype(object2, keys2)) {
    return Object.is(object1, object2);
  }
  if (visited.has(object1) || visited.has(object2)) {
    return true;
  }
  visited.add(object1);
  visited.add(object2);
  for (const key of keys1) {
    const val1 = object1[key];
    if (!(key in object2)) {
      return false;
    }
    if (key !== "ref") {
      const val2 = object2[key];
      if (isDateObject(val1) && isDateObject(val2) || (isObject(val1) || Array.isArray(val1)) && (isObject(val2) || Array.isArray(val2)) ? !deepEqual(val1, val2, visited) : !Object.is(val1, val2)) {
        return false;
      }
    }
  }
  return true;
}
const HookFormContext = React.createContext(null);
HookFormContext.displayName = "HookFormContext";
var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria ? {
  ...errors[name],
  types: {
    ...errors[name] && errors[name].types ? errors[name].types : {},
    [type]: message || true
  }
} : {};
var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];
var createSubject = () => {
  let _observers = [];
  const next = (value) => {
    for (const observer of _observers) {
      observer.next && observer.next(value);
    }
  };
  const subscribe = (observer) => {
    _observers.push(observer);
    return {
      unsubscribe: () => {
        _observers = _observers.filter((o2) => o2 !== observer);
      }
    };
  };
  const unsubscribe = () => {
    _observers = [];
  };
  return {
    get observers() {
      return _observers;
    },
    next,
    subscribe,
    unsubscribe
  };
};
function extractFormValues(fieldsState, formValues) {
  const values = {};
  for (const key in fieldsState) {
    if (fieldsState.hasOwnProperty(key)) {
      const fieldState = fieldsState[key];
      const fieldValue = formValues[key];
      if (fieldState && isObject(fieldState) && fieldValue) {
        const nestedFieldsState = extractFormValues(fieldState, fieldValue);
        if (isObject(nestedFieldsState)) {
          values[key] = nestedFieldsState;
        }
      } else if (fieldsState[key]) {
        values[key] = fieldValue;
      }
    }
  }
  return values;
}
var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;
var isFileInput = (element) => element.type === "file";
var isHTMLElement = (value) => {
  if (!isWeb) {
    return false;
  }
  const owner = value ? value.ownerDocument : 0;
  return value instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
};
var isMultipleSelect = (element) => element.type === `select-multiple`;
var isRadioInput = (element) => element.type === "radio";
var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);
var live = (ref) => isHTMLElement(ref) && ref.isConnected;
function baseGet(object, updatePath) {
  const length = updatePath.slice(0, -1).length;
  let index = 0;
  while (index < length) {
    if (isNullOrUndefined(object)) {
      object = void 0;
      break;
    }
    object = object[updatePath[index]];
    index++;
  }
  return object;
}
function isEmptyArray(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
      return false;
    }
  }
  return true;
}
function unset(object, path) {
  if (isString(path) && Object.prototype.hasOwnProperty.call(object, path)) {
    delete object[path];
    return object;
  }
  const paths = Array.isArray(path) ? path : isKey(path) ? [path] : stringToPath(path);
  const childObject = paths.length === 1 ? object : baseGet(object, paths);
  const index = paths.length - 1;
  const key = paths[index];
  if (childObject) {
    delete childObject[key];
  }
  if (index !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) {
    unset(object, paths.slice(0, -1));
  }
  return object;
}
var objectHasFunction = (data) => {
  for (const key in data) {
    if (isFunction(data[key])) {
      return true;
    }
  }
  return false;
};
function isTraversable(value) {
  return Array.isArray(value) || isObject(value) && !objectHasFunction(value);
}
function markFieldsDirty(data, fields = {}) {
  for (const key in data) {
    const value = data[key];
    if (isTraversable(value)) {
      fields[key] = Array.isArray(value) ? [] : {};
      markFieldsDirty(value, fields[key]);
    } else if (!isUndefined(value)) {
      fields[key] = true;
    }
  }
  return fields;
}
function pruneDirtyFields(value) {
  if (value === false) {
    return void 0;
  }
  if (value === true) {
    return true;
  }
  if (Array.isArray(value)) {
    const result = value.map((value2) => pruneDirtyFields(value2));
    return result.some((value2) => value2 !== void 0) ? result : void 0;
  }
  if (isObject(value)) {
    const result = {};
    for (const key in value) {
      const pruned = pruneDirtyFields(value[key]);
      if (!isUndefined(pruned)) {
        result[key] = pruned;
      }
    }
    return Object.keys(result).length ? result : void 0;
  }
  return void 0;
}
function getDirtyFields(data, formValues, dirtyFieldsFromValues) {
  if (!dirtyFieldsFromValues) {
    dirtyFieldsFromValues = markFieldsDirty(formValues);
  }
  for (const key in data) {
    const value = data[key];
    if (isTraversable(value)) {
      if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
        dirtyFieldsFromValues[key] = markFieldsDirty(value, Array.isArray(value) ? [] : {});
      } else {
        getDirtyFields(value, isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
      }
    } else {
      const formValue = formValues[key];
      dirtyFieldsFromValues[key] = !deepEqual(value, formValue);
    }
  }
  return pruneDirtyFields(dirtyFieldsFromValues) || {};
}
const defaultResult = {
  value: false,
  isValid: false
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
  if (Array.isArray(options)) {
    if (options.length > 1) {
      const values = options.filter((option) => option && option.checked && !option.disabled).map((option) => option.value);
      return { value: values, isValid: !!values.length };
    }
    return options[0].checked && !options[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === "" ? validResult : { value: options[0].value, isValid: true } : validResult
    ) : defaultResult;
  }
  return defaultResult;
};
var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value) ? value : valueAsNumber ? value === "" ? NaN : value ? +value : value : valueAsDate && isString(value) ? new Date(value) : setValueAs ? setValueAs(value) : value;
const defaultReturn = {
  isValid: false,
  value: null
};
var getRadioValue = (options) => Array.isArray(options) ? options.reduce((previous, option) => option && option.checked && !option.disabled ? {
  isValid: true,
  value: option.value
} : previous, defaultReturn) : defaultReturn;
function getFieldValue(_f) {
  const ref = _f.ref;
  if (isFileInput(ref)) {
    return ref.files;
  }
  if (isRadioInput(ref)) {
    return getRadioValue(_f.refs).value;
  }
  if (isMultipleSelect(ref)) {
    return [...ref.selectedOptions].map(({ value }) => value);
  }
  if (isCheckBoxInput(ref)) {
    return getCheckboxValue(_f.refs).value;
  }
  return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
  const fields = {};
  for (const name of fieldsNames) {
    const field = get(_fields, name);
    field && set(fields, name, field._f);
  }
  return {
    criteriaMode,
    names: [...fieldsNames],
    fields,
    shouldUseNativeValidation
  };
};
var isRegex = (value) => value instanceof RegExp;
var getRuleValue = (rule) => isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
var getValidationModes = (mode) => ({
  isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
  isOnBlur: mode === VALIDATION_MODE.onBlur,
  isOnChange: mode === VALIDATION_MODE.onChange,
  isOnAll: mode === VALIDATION_MODE.all,
  isOnTouch: mode === VALIDATION_MODE.onTouched
});
const ASYNC_FUNCTION = "AsyncFunction";
var hasPromiseValidation = (fieldReference) => !!fieldReference && !!fieldReference.validate && !!(isFunction(fieldReference.validate) && fieldReference.validate.constructor.name === ASYNC_FUNCTION || isObject(fieldReference.validate) && Object.values(fieldReference.validate).find((validateFunction) => validateFunction.constructor.name === ASYNC_FUNCTION));
var hasValidation = (options) => options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
var isWatched = (name, _names, isBlurEvent) => !isBlurEvent && (_names.watchAll || _names.watch.has(name) || [..._names.watch].some((watchName) => name.startsWith(`${watchName}.`)));
const iterateFieldsByAction = (fields, action, fieldsNames, abortEarly) => {
  for (const key of fieldsNames || Object.keys(fields)) {
    const field = get(fields, key);
    if (field) {
      const { _f, ...currentField } = field;
      if (_f) {
        if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) {
          return true;
        } else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) {
          return true;
        } else {
          if (iterateFieldsByAction(currentField, action)) {
            break;
          }
        }
      } else if (isObject(currentField)) {
        if (iterateFieldsByAction(currentField, action)) {
          break;
        }
      }
    }
  }
  return;
};
function schemaErrorLookup(errors, _fields, name) {
  const error = get(errors, name);
  if (error || isKey(name)) {
    return {
      error,
      name
    };
  }
  const names = name.split(".");
  while (names.length) {
    const fieldName = names.join(".");
    const field = get(_fields, fieldName);
    const foundError = get(errors, fieldName);
    if (field && !Array.isArray(field) && name !== fieldName) {
      return { name };
    }
    if (foundError && foundError.type) {
      return {
        name: fieldName,
        error: foundError
      };
    }
    if (foundError && foundError.root && foundError.root.type) {
      return {
        name: `${fieldName}.root`,
        error: foundError.root
      };
    }
    names.pop();
  }
  return {
    name
  };
}
var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
  updateFormState(formStateData);
  const { name, ...formState } = formStateData;
  return isEmptyObject(formState) || isRoot && Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key) => _proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
};
var shouldSubscribeByName = (name, signalName, exact) => !name || !signalName || name === signalName || convertToArrayPayload(name).some((currentName) => currentName && (exact ? currentName === signalName : currentName.startsWith(signalName) || signalName.startsWith(currentName)));
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
  if (mode.isOnAll) {
    return false;
  } else if (!isSubmitted && mode.isOnTouch) {
    return !(isTouched || isBlurEvent);
  } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
    return !isBlurEvent;
  } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
    return isBlurEvent;
  }
  return true;
};
var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);
var updateFieldArrayRootError = (errors, error, name) => {
  const existingErrors = get(errors, name);
  const fieldArrayErrors = Array.isArray(existingErrors) ? existingErrors : [];
  set(fieldArrayErrors, ROOT_ERROR_TYPE, error[name]);
  set(errors, name, fieldArrayErrors);
  return errors;
};
function getValidateError(result, ref, type = "validate") {
  if (isString(result) || Array.isArray(result) && result.every(isString) || isBoolean(result) && !result) {
    return {
      type,
      message: isString(result) ? result : "",
      ref
    };
  }
}
var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData) ? validationData : {
  value: validationData,
  message: ""
};
var validateField = async (field, disabledFieldNames, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
  const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount } = field._f;
  const inputValue = get(formValues, name);
  if (!mount || disabledFieldNames.has(name)) {
    return {};
  }
  const inputRef = refs ? refs[0] : ref;
  const setCustomValidity = (message) => {
    if (shouldUseNativeValidation && inputRef.reportValidity) {
      inputRef.setCustomValidity(isBoolean(message) ? "" : message || "");
      inputRef.reportValidity();
    }
  };
  const error = {};
  const isRadio = isRadioInput(ref);
  const isCheckBox = isCheckBoxInput(ref);
  const isRadioOrCheckbox2 = isRadio || isCheckBox;
  const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === "" || inputValue === "" || Array.isArray(inputValue) && !inputValue.length;
  const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
  const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
    const message = exceedMax ? maxLengthMessage : minLengthMessage;
    error[name] = {
      type: exceedMax ? maxType : minType,
      message,
      ref,
      ...appendErrorsCurry(exceedMax ? maxType : minType, message)
    };
  };
  if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox2 && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
    const { value, message } = isString(required) ? { value: !!required, message: required } : getValueAndMessage(required);
    if (value) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.required,
        message,
        ref: inputRef,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
    let exceedMax;
    let exceedMin;
    const maxOutput = getValueAndMessage(max);
    const minOutput = getValueAndMessage(min);
    if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
      const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
      if (!isNullOrUndefined(maxOutput.value)) {
        exceedMax = valueNumber > maxOutput.value;
      }
      if (!isNullOrUndefined(minOutput.value)) {
        exceedMin = valueNumber < minOutput.value;
      }
    } else {
      const valueDate = ref.valueAsDate || new Date(inputValue);
      const convertTimeToDate = (time) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + time);
      const isTime = ref.type == "time";
      const isWeek = ref.type == "week";
      if (isString(maxOutput.value) && inputValue) {
        exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
      }
      if (isString(minOutput.value) && inputValue) {
        exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
      }
    }
    if (exceedMax || exceedMin) {
      getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
    const maxLengthOutput = getValueAndMessage(maxLength);
    const minLengthOutput = getValueAndMessage(minLength);
    const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
    const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
    if (exceedMax || exceedMin) {
      getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if (pattern && !isEmpty && isString(inputValue)) {
    const { value: patternValue, message } = getValueAndMessage(pattern);
    if (isRegex(patternValue) && !inputValue.match(patternValue)) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.pattern,
        message,
        ref,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (validate) {
    if (isFunction(validate)) {
      const result = await validate(inputValue, formValues);
      const validateError = getValidateError(result, inputRef);
      if (validateError) {
        error[name] = {
          ...validateError,
          ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
        };
        if (!validateAllFieldCriteria) {
          setCustomValidity(validateError.message);
          return error;
        }
      }
    } else if (isObject(validate)) {
      let validationResult = {};
      for (const key in validate) {
        if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
          break;
        }
        const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
        if (validateError) {
          validationResult = {
            ...validateError,
            ...appendErrorsCurry(key, validateError.message)
          };
          setCustomValidity(validateError.message);
          if (validateAllFieldCriteria) {
            error[name] = validationResult;
          }
        }
      }
      if (!isEmptyObject(validationResult)) {
        error[name] = {
          ref: inputRef,
          ...validationResult
        };
        if (!validateAllFieldCriteria) {
          return error;
        }
      }
    }
  }
  setCustomValidity(true);
  return error;
};
const defaultOptions = {
  mode: VALIDATION_MODE.onSubmit,
  reValidateMode: VALIDATION_MODE.onChange,
  shouldFocusError: true
};
const DEFAULT_FORM_STATE = {
  submitCount: 0,
  isDirty: false,
  isReady: false,
  isValidating: false,
  isSubmitted: false,
  isSubmitting: false,
  isSubmitSuccessful: false,
  isValid: false,
  touchedFields: {},
  dirtyFields: {},
  validatingFields: {}
};
function createFormControl(props = {}) {
  let _options = {
    ...defaultOptions,
    ...props
  };
  let _formState = {
    ...cloneObject(DEFAULT_FORM_STATE),
    isLoading: isFunction(_options.defaultValues),
    errors: _options.errors || {},
    disabled: _options.disabled || false
  };
  let _fields = {};
  let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values) ? cloneObject(_options.defaultValues || _options.values) || {} : {};
  let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
  let _state = {
    action: false,
    mount: false,
    watch: false,
    keepIsValid: false
  };
  let _names = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set(),
    registerName: /* @__PURE__ */ new Set()
  };
  let delayErrorCallback;
  let timer = 0;
  const defaultProxyFormState = {
    isDirty: false,
    dirtyFields: false,
    validatingFields: false,
    touchedFields: false,
    isValidating: false,
    isValid: false,
    errors: false
  };
  const _proxyFormState = {
    ...defaultProxyFormState
  };
  let _proxySubscribeFormState = {
    ..._proxyFormState
  };
  const _subjects = {
    array: createSubject(),
    state: createSubject()
  };
  const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
  const debounce = (callback) => (wait) => {
    clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
  const _setValid = async (shouldUpdateValid) => {
    if (_state.keepIsValid) {
      return;
    }
    if (!_options.disabled && (_proxyFormState.isValid || _proxySubscribeFormState.isValid || shouldUpdateValid)) {
      let isValid;
      if (_options.resolver) {
        isValid = isEmptyObject((await _runSchema()).errors);
        _updateIsValidating();
      } else {
        isValid = await executeBuiltInValidation({
          fields: _fields,
          onlyCheckValid: true,
          eventType: EVENTS.VALID
        });
      }
      if (isValid !== _formState.isValid) {
        _subjects.state.next({
          isValid
        });
      }
    }
  };
  const _updateIsValidating = (names, isValidating) => {
    if (!_options.disabled && (_proxyFormState.isValidating || _proxyFormState.validatingFields || _proxySubscribeFormState.isValidating || _proxySubscribeFormState.validatingFields)) {
      (names || Array.from(_names.mount)).forEach((name) => {
        if (name) {
          isValidating ? set(_formState.validatingFields, name, isValidating) : unset(_formState.validatingFields, name);
        }
      });
      _subjects.state.next({
        validatingFields: _formState.validatingFields,
        isValidating: !isEmptyObject(_formState.validatingFields)
      });
    }
  };
  const _updateDirtyFields = () => {
    _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
  };
  const _setFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
    if (args && method && !_options.disabled) {
      _state.action = true;
      if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
        const fieldValues = method(get(_fields, name), args.argA, args.argB);
        shouldSetValues && set(_fields, name, fieldValues);
      }
      if (shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
        const errors = method(get(_formState.errors, name), args.argA, args.argB);
        shouldSetValues && set(_formState.errors, name, errors);
        unsetEmptyArray(_formState.errors, name);
      }
      if ((_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
        const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
        shouldSetValues && set(_formState.touchedFields, name, touchedFields);
      }
      if (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) {
        _updateDirtyFields();
      }
      _subjects.state.next({
        name,
        isDirty: _getDirty(name, values),
        dirtyFields: _formState.dirtyFields,
        errors: _formState.errors,
        isValid: _formState.isValid
      });
    } else {
      set(_formValues, name, values);
    }
  };
  const updateErrors = (name, error) => {
    set(_formState.errors, name, error);
    _subjects.state.next({
      errors: _formState.errors
    });
  };
  const _setErrors = (errors) => {
    _formState.errors = errors;
    _subjects.state.next({
      errors: _formState.errors,
      isValid: false
    });
  };
  const hasExplicitNullIntermediate = (name) => {
    const segments = isKey(name) ? [name] : stringToPath(name);
    let formValues = _formValues;
    let defaultValues = _defaultValues;
    for (let i2 = 0; i2 < segments.length - 1; i2++) {
      const key = segments[i2];
      formValues = isNullOrUndefined(formValues) ? formValues : formValues[key];
      defaultValues = isNullOrUndefined(defaultValues) ? defaultValues : defaultValues[key];
      if (formValues === null && defaultValues !== null) {
        return true;
      }
    }
    return false;
  };
  const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
    const field = get(_fields, name);
    if (field) {
      if (hasExplicitNullIntermediate(name)) {
        return;
      }
      const wasUnsetInFormValues = isUndefined(get(_formValues, name));
      const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
      isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
      if (_state.mount && !_state.action) {
        _setValid();
        if (wasUnsetInFormValues && _formState.isDirty && (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty)) {
          const isDirty = _getDirty();
          if (!isDirty) {
            _formState.isDirty = false;
            _subjects.state.next({ ..._formState });
          }
        }
      }
    }
  };
  const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
    let shouldUpdateField = false;
    let isPreviousDirty = false;
    const output = {
      name
    };
    if (!_options.disabled) {
      if (!isBlurEvent || shouldDirty) {
        if (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty) {
          isPreviousDirty = _formState.isDirty;
          _formState.isDirty = output.isDirty = _getDirty();
          shouldUpdateField = isPreviousDirty !== output.isDirty;
        }
        const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
        isPreviousDirty = !!get(_formState.dirtyFields, name);
        if (isCurrentFieldPristine !== _formState.isDirty) {
          _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
        } else {
          isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
        }
        output.dirtyFields = _formState.dirtyFields;
        shouldUpdateField = shouldUpdateField || (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) && isPreviousDirty !== !isCurrentFieldPristine;
      }
      if (isBlurEvent) {
        const isPreviousFieldTouched = get(_formState.touchedFields, name);
        if (!isPreviousFieldTouched) {
          set(_formState.touchedFields, name, isBlurEvent);
          output.touchedFields = _formState.touchedFields;
          shouldUpdateField = shouldUpdateField || (_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && isPreviousFieldTouched !== isBlurEvent;
        }
      }
      shouldUpdateField && shouldRender && _subjects.state.next(output);
    }
    return shouldUpdateField ? output : {};
  };
  const shouldRenderByError = (name, isValid, error, fieldState) => {
    const previousFieldError = get(_formState.errors, name);
    const shouldUpdateValid = (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isBoolean(isValid) && _formState.isValid !== isValid;
    if (_options.delayError && error) {
      delayErrorCallback = debounce(() => updateErrors(name, error));
      delayErrorCallback(_options.delayError);
    } else {
      clearTimeout(timer);
      delayErrorCallback = null;
      error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
    }
    if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
      const updatedFormState = {
        ...fieldState,
        ...shouldUpdateValid && isBoolean(isValid) ? { isValid } : {},
        errors: _formState.errors,
        name
      };
      _formState = {
        ..._formState,
        ...updatedFormState
      };
      _subjects.state.next(updatedFormState);
    }
  };
  const _runSchema = async (name) => {
    _updateIsValidating(name, true);
    return await _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
  };
  const executeSchemaAndUpdateState = async (names) => {
    const { errors } = await _runSchema(names);
    _updateIsValidating(names);
    if (names) {
      for (const name of names) {
        const error = get(errors, name);
        error ? _names.array.has(name) && isObject(error) && !Object.keys(error).some((key) => !Number.isNaN(Number(key))) ? updateFieldArrayRootError(_formState.errors, { [name]: error }, name) : set(_formState.errors, name, error) : unset(_formState.errors, name);
      }
    } else {
      _formState.errors = errors;
    }
    return errors;
  };
  const validateForm = async ({ name, eventType }) => {
    if (props.validate) {
      const result = await props.validate({
        formValues: _formValues,
        formState: _formState,
        name,
        eventType
      });
      if (isObject(result)) {
        for (const key in result) {
          const error = result[key];
          if (error) {
            setError(`${FORM_ERROR_TYPE}.${key}`, {
              message: isString(error.message) ? error.message : "",
              type: error.type || INPUT_VALIDATION_RULES.validate
            });
          }
        }
      } else if (isString(result) || !result) {
        setError(FORM_ERROR_TYPE, {
          message: result || "",
          type: INPUT_VALIDATION_RULES.validate
        });
      } else {
        clearErrors(FORM_ERROR_TYPE);
      }
      return result;
    }
    return true;
  };
  const executeBuiltInValidation = async ({ fields, onlyCheckValid, name, eventType, context = {
    valid: true,
    runRootValidation: false
  } }) => {
    if (props.validate) {
      context.runRootValidation = true;
      const result = await validateForm({
        name,
        eventType
      });
      if (!result) {
        context.valid = false;
        if (onlyCheckValid) {
          return context.valid;
        }
      }
    }
    for (const name2 in fields) {
      const field = fields[name2];
      if (field) {
        const { _f, ...fieldValue } = field;
        if (_f) {
          const isFieldArrayRoot = _names.array.has(_f.name);
          const isPromiseFunction = field._f && hasPromiseValidation(field._f);
          const shouldTrackIsValidatingState = _proxyFormState.validatingFields || _proxyFormState.isValidating || _proxySubscribeFormState.validatingFields || _proxySubscribeFormState.isValidating;
          if (isPromiseFunction && shouldTrackIsValidatingState) {
            _updateIsValidating([_f.name], true);
          }
          const fieldError = await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !onlyCheckValid, isFieldArrayRoot);
          if (isPromiseFunction && shouldTrackIsValidatingState) {
            _updateIsValidating([_f.name]);
          }
          if (fieldError[_f.name]) {
            context.valid = false;
            if (onlyCheckValid) {
              break;
            }
          }
          !onlyCheckValid && (get(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
          if (props.shouldUseNativeValidation && fieldError[_f.name]) {
            break;
          }
        }
        !isEmptyObject(fieldValue) && await executeBuiltInValidation({
          context,
          onlyCheckValid,
          fields: fieldValue,
          name: name2,
          eventType
        });
      }
    }
    return context.valid;
  };
  const _removeUnmounted = () => {
    for (const name of _names.unMount) {
      const field = get(_fields, name);
      field && (field._f.refs ? field._f.refs.every((ref) => !live(ref)) : !live(field._f.ref)) && unregister(name);
    }
    _names.unMount = /* @__PURE__ */ new Set();
  };
  const _getDirty = (name, data) => !_options.disabled && (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
  const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, {
    ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? { [names]: defaultValue } : defaultValue
  }, isGlobal, defaultValue);
  const _getFieldArray = (name) => compact(get(_state.mount ? _formValues : _defaultValues, name, _options.shouldUnregister ? get(_defaultValues, name, []) : []));
  const setFieldValue = (name, value, options = {}, skipClone = false) => {
    const field = get(_fields, name);
    let fieldValue = value;
    if (field) {
      const fieldReference = field._f;
      if (fieldReference) {
        !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value, fieldReference));
        fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value) ? "" : value;
        if (isMultipleSelect(fieldReference.ref)) {
          [...fieldReference.ref.options].forEach((optionRef) => optionRef.selected = fieldValue.includes(optionRef.value));
        } else if (fieldReference.refs) {
          if (isCheckBoxInput(fieldReference.ref)) {
            fieldReference.refs.forEach((checkboxRef) => {
              if (!checkboxRef.defaultChecked || !checkboxRef.disabled) {
                if (Array.isArray(fieldValue)) {
                  checkboxRef.checked = !!fieldValue.find((data) => data === checkboxRef.value);
                } else {
                  checkboxRef.checked = fieldValue === checkboxRef.value || !!fieldValue;
                }
              }
            });
          } else {
            fieldReference.refs.forEach((radioRef) => radioRef.checked = radioRef.value === fieldValue);
          }
        } else if (isFileInput(fieldReference.ref)) {
          fieldReference.ref.value = "";
        } else {
          fieldReference.ref.value = fieldValue;
          if (!fieldReference.ref.type) {
            _subjects.state.next({
              name,
              values: skipClone ? _formValues : cloneObject(_formValues)
            });
          }
        }
      }
    }
    (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
    options.shouldValidate && trigger(name);
  };
  const setFieldValues = (name, value, options, skipClone = false) => {
    for (const fieldKey in value) {
      if (!value.hasOwnProperty(fieldKey)) {
        return;
      }
      const fieldValue = value[fieldKey];
      const fieldName = name + "." + fieldKey;
      const field = get(_fields, fieldName);
      (_names.array.has(name) || isObject(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setFieldValues(fieldName, fieldValue, options, skipClone) : setFieldValue(fieldName, fieldValue, options, skipClone);
    }
  };
  const _setValue = (name, value, options, skipClone) => {
    const field = get(_fields, name);
    const isFieldArray = _names.array.has(name);
    const cloneValue = skipClone ? value : cloneObject(value);
    const previousValue = get(_formValues, name);
    const isValueUnchanged = deepEqual(previousValue, cloneValue);
    if (!isValueUnchanged) {
      set(_formValues, name, cloneValue);
    }
    if (isFieldArray) {
      _subjects.array.next({
        name,
        values: skipClone ? _formValues : cloneObject(_formValues)
      });
      if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields || _proxySubscribeFormState.isDirty || _proxySubscribeFormState.dirtyFields) && options.shouldDirty) {
        _updateDirtyFields();
        _subjects.state.next({
          name,
          dirtyFields: _formState.dirtyFields,
          isDirty: _getDirty(name, cloneValue)
        });
      }
    } else {
      const isEmpty = Array.isArray(cloneValue) && !cloneValue.length || isEmptyObject(cloneValue);
      if (!field || field._f || isNullOrUndefined(cloneValue) || isEmpty) {
        setFieldValue(name, cloneValue, options, skipClone);
      } else {
        setFieldValues(name, cloneValue, options, skipClone);
      }
    }
    if (!isValueUnchanged) {
      const watched = isWatched(name, _names);
      const values = skipClone ? _formValues : cloneObject(_formValues);
      _subjects.state.next({
        ...watched && _formState,
        name: _state.mount || watched ? name : void 0,
        values
      });
    }
  };
  const setValue = (name, value, options = {}) => _setValue(name, value, options, false);
  const setValues = (formValues, options = {}) => {
    const updatedFormValues = isFunction(formValues) ? formValues(_formValues) : formValues;
    if (!deepEqual(_formValues, updatedFormValues)) {
      _formValues = {
        ..._formValues,
        ...updatedFormValues
      };
      for (const fieldName of _names.mount) {
        _setValue(fieldName, get(updatedFormValues, fieldName), options, true);
      }
      _subjects.state.next({
        ..._formState,
        name: void 0,
        type: void 0,
        values: _formValues
      });
      if (options.shouldValidate) {
        _setValid();
      }
    }
  };
  const onChange = async (event) => {
    _state.mount = true;
    const target = event.target;
    let name = target.name;
    let isFieldValueUpdated = true;
    const field = get(_fields, name);
    const _updateIsFieldValueUpdated = (fieldValue) => {
      isFieldValueUpdated = Number.isNaN(fieldValue) || isDateObject(fieldValue) && isNaN(fieldValue.getTime()) || deepEqual(fieldValue, get(_formValues, name, fieldValue));
    };
    const validationModeBeforeSubmit = getValidationModes(_options.mode);
    const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
    if (field) {
      let error;
      let isValid;
      const fieldValue = target.type ? getFieldValue(field._f) : getEventValue(event);
      const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
      const shouldSkipValidation = !hasValidation(field._f) && !props.validate && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
      const watched = isWatched(name, _names, isBlurEvent);
      set(_formValues, name, fieldValue);
      if (isBlurEvent) {
        if (!target || !target.readOnly) {
          field._f.onBlur && field._f.onBlur(event);
          delayErrorCallback && delayErrorCallback(0);
        }
      } else if (field._f.onChange) {
        field._f.onChange(event);
      }
      const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent);
      const shouldRender = !isEmptyObject(fieldState) || watched;
      !isBlurEvent && _subjects.state.next({
        name,
        type: event.type,
        values: cloneObject(_formValues)
      });
      if (shouldSkipValidation) {
        if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
          if (_options.mode === "onBlur") {
            if (isBlurEvent) {
              _setValid();
            }
          } else if (!isBlurEvent) {
            _setValid();
          }
        }
        return shouldRender && _subjects.state.next({ name, ...watched ? {} : fieldState });
      }
      if (!_options.resolver && props.validate) {
        await validateForm({
          name,
          eventType: event.type
        });
      }
      !isBlurEvent && watched && _subjects.state.next({ ..._formState });
      if (_options.resolver) {
        const { errors } = await _runSchema([name]);
        _updateIsValidating([name]);
        _updateIsFieldValueUpdated(fieldValue);
        if (!isFieldValueUpdated) {
          !isEmptyObject(fieldState) && _subjects.state.next(fieldState);
          return;
        }
        const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
        const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
        error = errorLookupResult.error;
        name = errorLookupResult.name;
        isValid = isEmptyObject(errors);
      } else {
        _updateIsValidating([name], true);
        error = (await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
        _updateIsValidating([name]);
        _updateIsFieldValueUpdated(fieldValue);
        if (isFieldValueUpdated) {
          if (error) {
            isValid = false;
          } else if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
            isValid = await executeBuiltInValidation({
              fields: _fields,
              onlyCheckValid: true,
              name,
              eventType: event.type
            });
          }
        }
      }
      if (isFieldValueUpdated) {
        field._f.deps && (!Array.isArray(field._f.deps) || field._f.deps.length > 0) && trigger(field._f.deps);
        shouldRenderByError(name, isValid, error, fieldState);
      }
    }
  };
  const _focusInput = (ref, key) => {
    if (get(_formState.errors, key) && ref.focus) {
      ref.focus();
      return 1;
    }
    return;
  };
  const trigger = async (name, options = {}) => {
    let isValid;
    let validationResult;
    const fieldNames = convertToArrayPayload(name);
    if (_options.resolver) {
      const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
      isValid = isEmptyObject(errors);
      validationResult = name ? !fieldNames.some((name2) => get(errors, name2)) : isValid;
    } else if (name) {
      validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
        const field = get(_fields, fieldName);
        return await executeBuiltInValidation({
          fields: field && field._f ? { [fieldName]: field } : field,
          eventType: EVENTS.TRIGGER
        });
      }))).every(Boolean);
      !(!validationResult && !_formState.isValid) && _setValid();
    } else {
      validationResult = isValid = await executeBuiltInValidation({
        fields: _fields,
        name,
        eventType: EVENTS.TRIGGER
      });
    }
    _subjects.state.next({
      ...!isString(name) || (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isValid !== _formState.isValid ? {} : { name },
      ..._options.resolver || !name ? { isValid } : {},
      errors: _formState.errors
    });
    options.shouldFocus && !validationResult && iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
    return validationResult;
  };
  const getValues = (fieldNames, config2) => {
    let values = {
      ..._state.mount ? _formValues : _defaultValues
    };
    if (config2) {
      values = extractFormValues(config2.dirtyFields ? _formState.dirtyFields : _formState.touchedFields, values);
    }
    return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name) => get(values, name));
  };
  const getFieldState = (name, formState) => ({
    invalid: !!get((formState || _formState).errors, name),
    isDirty: !!get((formState || _formState).dirtyFields, name),
    error: get((formState || _formState).errors, name),
    isValidating: !!get(_formState.validatingFields, name),
    isTouched: !!get((formState || _formState).touchedFields, name)
  });
  const clearErrors = (name) => {
    const names = name ? convertToArrayPayload(name) : void 0;
    names === null || names === void 0 ? void 0 : names.forEach((inputName) => unset(_formState.errors, inputName));
    if (names) {
      names.forEach((inputName) => {
        _subjects.state.next({
          name: inputName,
          errors: _formState.errors
        });
      });
    } else {
      _subjects.state.next({
        errors: {}
      });
    }
  };
  const setError = (name, error, options) => {
    const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
    const currentError = get(_formState.errors, name) || {};
    const { ref: currentRef, message, type, ...restOfErrorTree } = currentError;
    set(_formState.errors, name, {
      ...restOfErrorTree,
      ...error,
      ref
    });
    _subjects.state.next({
      name,
      errors: _formState.errors,
      isValid: false
    });
    options && options.shouldFocus && ref && ref.focus && ref.focus();
  };
  const watch = (name, defaultValue) => isFunction(name) ? _subjects.state.subscribe({
    next: (payload) => "values" in payload && name(payload.values || _getWatch(void 0, defaultValue), payload)
  }) : _getWatch(name, defaultValue, true);
  const _subscribe = (props2) => _subjects.state.subscribe({
    next: (formState) => {
      if (shouldSubscribeByName(props2.name, formState.name, props2.exact) && shouldRenderFormState(formState, props2.formState || _proxyFormState, _setFormState, props2.reRenderRoot)) {
        const snapshot = { ..._formValues };
        props2.callback({
          values: snapshot,
          ..._formState,
          ...formState,
          defaultValues: _defaultValues
        });
      }
    }
  }).unsubscribe;
  const subscribe = (props2) => {
    _state.mount = true;
    _proxySubscribeFormState = {
      ..._proxySubscribeFormState,
      ...props2.formState
    };
    return _subscribe({
      ...props2,
      formState: {
        ...defaultProxyFormState,
        ...props2.formState
      }
    });
  };
  const unregister = (name, options = {}) => {
    for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
      _names.mount.delete(fieldName);
      _names.array.delete(fieldName);
      if (!options.keepValue) {
        unset(_fields, fieldName);
        unset(_formValues, fieldName);
      }
      !options.keepError && unset(_formState.errors, fieldName);
      !options.keepDirty && unset(_formState.dirtyFields, fieldName);
      !options.keepTouched && unset(_formState.touchedFields, fieldName);
      !options.keepIsValidating && unset(_formState.validatingFields, fieldName);
      !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
    }
    _subjects.state.next({
      values: cloneObject(_formValues)
    });
    _subjects.state.next({
      ..._formState,
      ...!options.keepDirty ? {} : { isDirty: _getDirty() }
    });
    !options.keepIsValid && _setValid();
  };
  const _setDisabledField = ({ disabled, name }) => {
    if (isBoolean(disabled) && _state.mount || !!disabled || _names.disabled.has(name)) {
      const wasDisabled = _names.disabled.has(name);
      const isDisabled = !!disabled;
      const disabledStateChanged = wasDisabled !== isDisabled;
      disabled ? _names.disabled.add(name) : _names.disabled.delete(name);
      disabledStateChanged && _state.mount && !_state.action && _setValid();
    }
  };
  const register = (name, options = {}) => {
    let field = get(_fields, name);
    const disabledIsDefined = isBoolean(options.disabled) || isBoolean(_options.disabled);
    const shouldRevalidateRemount = !_names.registerName.has(name) && field && field._f && !field._f.mount;
    set(_fields, name, {
      ...field || {},
      _f: {
        ...field && field._f ? field._f : { ref: { name } },
        name,
        mount: true,
        ...options
      }
    });
    _names.mount.add(name);
    if (field && !shouldRevalidateRemount) {
      _setDisabledField({
        disabled: isBoolean(options.disabled) ? options.disabled : _options.disabled,
        name
      });
    } else {
      updateValidAndValue(name, true, options.value);
    }
    return {
      ...disabledIsDefined ? { disabled: options.disabled || _options.disabled } : {},
      ..._options.progressive ? {
        required: !!options.required,
        min: getRuleValue(options.min),
        max: getRuleValue(options.max),
        minLength: getRuleValue(options.minLength),
        maxLength: getRuleValue(options.maxLength),
        pattern: getRuleValue(options.pattern)
      } : {},
      name,
      onChange,
      onBlur: onChange,
      ref: (ref) => {
        if (ref) {
          _names.registerName.add(name);
          register(name, options);
          _names.registerName.delete(name);
          field = get(_fields, name);
          const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll("input,select,textarea")[0] || ref : ref : ref;
          const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
          const refs = field._f.refs || [];
          if (radioOrCheckbox ? refs.find((option) => option === fieldRef) : fieldRef === field._f.ref) {
            return;
          }
          set(_fields, name, {
            _f: {
              ...field._f,
              ...radioOrCheckbox ? {
                refs: [
                  ...refs.filter(live),
                  fieldRef,
                  ...Array.isArray(get(_defaultValues, name)) ? [{}] : []
                ],
                ref: { type: fieldRef.type, name }
              } : { ref: fieldRef }
            }
          });
          updateValidAndValue(name, false, void 0, fieldRef);
        } else {
          field = get(_fields, name, {});
          if (field._f) {
            field._f.mount = false;
          }
          (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
        }
      }
    };
  };
  const _focusError = () => _options.shouldFocusError && !_options.shouldUseNativeValidation && iterateFieldsByAction(_fields, _focusInput, _names.mount);
  const _disableForm = (disabled) => {
    if (isBoolean(disabled)) {
      _subjects.state.next({ disabled });
      iterateFieldsByAction(_fields, (ref, name) => {
        const currentField = get(_fields, name);
        if (currentField) {
          ref.disabled = currentField._f.disabled || disabled;
          if (Array.isArray(currentField._f.refs)) {
            currentField._f.refs.forEach((inputRef) => {
              inputRef.disabled = currentField._f.disabled || disabled;
            });
          }
        }
      }, 0, false);
    }
  };
  const handleSubmit = (onValid, onInvalid) => async (e) => {
    let onValidError = void 0;
    if (e) {
      e.preventDefault && e.preventDefault();
      e.persist && e.persist();
    }
    let fieldValues = cloneObject(_formValues);
    _subjects.state.next({
      isSubmitting: true
    });
    if (_options.resolver) {
      const { errors, values } = await _runSchema();
      _updateIsValidating();
      _formState.errors = errors;
      fieldValues = cloneObject(values);
    } else {
      await executeBuiltInValidation({
        fields: _fields,
        eventType: EVENTS.SUBMIT
      });
    }
    if (_names.disabled.size) {
      for (const name of _names.disabled) {
        unset(fieldValues, name);
      }
    }
    unset(_formState.errors, ROOT_ERROR_TYPE);
    if (isEmptyObject(_formState.errors)) {
      _subjects.state.next({
        errors: {}
      });
      try {
        await onValid(fieldValues, e);
      } catch (error) {
        onValidError = error;
      }
    } else {
      if (onInvalid) {
        await onInvalid({ ..._formState.errors }, e);
      }
      _focusError();
      setTimeout(_focusError);
    }
    _subjects.state.next({
      isSubmitted: true,
      isSubmitting: false,
      isSubmitSuccessful: isEmptyObject(_formState.errors) && !onValidError,
      submitCount: _formState.submitCount + 1,
      errors: _formState.errors
    });
    if (onValidError) {
      throw onValidError;
    }
  };
  const resetField = (name, options = {}) => {
    if (get(_fields, name)) {
      if (isUndefined(options.defaultValue)) {
        setValue(name, cloneObject(get(_defaultValues, name)));
      } else {
        setValue(name, options.defaultValue);
        set(_defaultValues, name, cloneObject(options.defaultValue));
      }
      if (!options.keepTouched) {
        unset(_formState.touchedFields, name);
      }
      if (!options.keepDirty) {
        unset(_formState.dirtyFields, name);
        _formState.isDirty = options.defaultValue ? _getDirty(name, cloneObject(get(_defaultValues, name))) : _getDirty();
      }
      if (!options.keepError) {
        unset(_formState.errors, name);
        _proxyFormState.isValid && _setValid();
      }
      _subjects.state.next({ ..._formState });
    }
  };
  const _reset = (formValues, keepStateOptions = {}) => {
    const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
    const cloneUpdatedValues = cloneObject(updatedValues);
    const isEmptyResetValues = isEmptyObject(formValues);
    const values = cloneUpdatedValues;
    if (!keepStateOptions.keepDefaultValues) {
      _defaultValues = updatedValues;
    }
    if (!keepStateOptions.keepValues) {
      if (keepStateOptions.keepDirtyValues) {
        const fieldsToCheck = /* @__PURE__ */ new Set([
          ..._names.mount,
          ...Object.keys(getDirtyFields(_defaultValues, _formValues))
        ]);
        for (const fieldName of Array.from(fieldsToCheck)) {
          const isDirty = get(_formState.dirtyFields, fieldName);
          const existingValue = get(_formValues, fieldName);
          const newValue = get(values, fieldName);
          if (isDirty && !isUndefined(existingValue)) {
            set(values, fieldName, existingValue);
          } else if (!isDirty && !isUndefined(newValue)) {
            setValue(fieldName, newValue);
          }
        }
      } else {
        if (isWeb && isUndefined(formValues)) {
          for (const name of _names.mount) {
            const field = get(_fields, name);
            if (field && field._f) {
              const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
              if (isHTMLElement(fieldReference)) {
                const form = fieldReference.closest("form");
                if (form) {
                  form.reset();
                  break;
                }
              }
            }
          }
        }
        if (keepStateOptions.keepFieldsRef) {
          for (const fieldName of _names.mount) {
            setValue(fieldName, get(values, fieldName));
          }
        } else {
          _fields = {};
        }
      }
      if (_options.shouldUnregister) {
        _formValues = keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {};
        if (keepStateOptions.keepFieldsRef) {
          for (const fieldName of _names.mount) {
            set(_formValues, fieldName, get(values, fieldName));
          }
        }
      } else {
        _formValues = cloneObject(values);
      }
      _subjects.array.next({
        values: { ...values }
      });
      _subjects.state.next({
        values: { ...values }
      });
    }
    _names = {
      mount: keepStateOptions.keepDirtyValues ? _names.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      registerName: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: false,
      focus: ""
    };
    _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid || !!keepStateOptions.keepDirtyValues || !_options.shouldUnregister && !isEmptyObject(values);
    _state.watch = !!_options.shouldUnregister;
    _state.keepIsValid = !!keepStateOptions.keepIsValid;
    _state.action = false;
    if (!keepStateOptions.keepErrors) {
      _formState.errors = {};
    }
    _subjects.state.next({
      submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
      isDirty: isEmptyResetValues ? false : keepStateOptions.keepDirty ? _formState.isDirty : keepStateOptions.keepValues ? _getDirty() : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
      isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
      dirtyFields: isEmptyResetValues ? {} : keepStateOptions.keepDirtyValues ? keepStateOptions.keepDefaultValues && _formValues ? getDirtyFields(_defaultValues, _formValues) : _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : keepStateOptions.keepDirty ? _formState.dirtyFields : {},
      touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
      errors: keepStateOptions.keepErrors ? _formState.errors : {},
      isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful ? _formState.isSubmitSuccessful : false,
      isSubmitting: false,
      defaultValues: _defaultValues
    });
  };
  const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues) ? formValues(_formValues) : formValues, { ..._options.resetOptions, ...keepStateOptions });
  const setFocus = (name, options = {}) => {
    const field = get(_fields, name);
    const fieldReference = field && field._f;
    if (fieldReference) {
      const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
      if (fieldRef.focus) {
        setTimeout(() => {
          fieldRef.focus();
          options.shouldSelect && isFunction(fieldRef.select) && fieldRef.select();
        });
      }
    }
  };
  const _setFormState = (updatedFormState) => {
    _formState = {
      ..._formState,
      ...updatedFormState
    };
  };
  const _resetDefaultValues = () => isFunction(_options.defaultValues) && _options.defaultValues().then((values) => {
    reset(values, _options.resetOptions);
    _subjects.state.next({
      isLoading: false
    });
  });
  const resetDefaultValues = (values, options = {}) => {
    _defaultValues = cloneObject(values);
    if (!options.keepDirty) {
      const newDirtyFields = getDirtyFields(_defaultValues, _formValues);
      _formState.dirtyFields = newDirtyFields;
      _formState.isDirty = !isEmptyObject(newDirtyFields);
    }
    if (!options.keepIsValid) {
      _setValid();
    }
    _subjects.state.next({
      ..._formState,
      defaultValues: _defaultValues
    });
  };
  const methods = {
    control: {
      register,
      unregister,
      getFieldState,
      handleSubmit,
      setError,
      _subscribe,
      _runSchema,
      _updateIsValidating,
      _focusError,
      _getWatch,
      _getDirty,
      _setValid,
      _setFieldArray,
      _setDisabledField,
      _setErrors,
      _getFieldArray,
      _reset,
      _resetDefaultValues,
      _removeUnmounted,
      _disableForm,
      _subjects,
      _proxyFormState,
      get _fields() {
        return _fields;
      },
      get _formValues() {
        return _formValues;
      },
      get _state() {
        return _state;
      },
      set _state(value) {
        _state = value;
      },
      get _defaultValues() {
        return _defaultValues;
      },
      get _names() {
        return _names;
      },
      set _names(value) {
        _names = value;
      },
      get _formState() {
        return _formState;
      },
      get _options() {
        return _options;
      },
      set _options(value) {
        _options = {
          ..._options,
          ...value
        };
      }
    },
    subscribe,
    trigger,
    register,
    handleSubmit,
    watch,
    setValue,
    setValues,
    getValues,
    reset,
    resetField,
    resetDefaultValues,
    clearErrors,
    unregister,
    setError,
    setFocus,
    getFieldState
  };
  return {
    ...methods,
    formControl: methods
  };
}
function useForm(props = {}) {
  const _formControl = React.useRef(void 0);
  const _values = React.useRef(void 0);
  const [formState, updateFormState] = React.useState(() => ({
    ...cloneObject(DEFAULT_FORM_STATE),
    isLoading: isFunction(props.defaultValues),
    errors: props.errors || {},
    disabled: props.disabled || false,
    defaultValues: isFunction(props.defaultValues) ? void 0 : props.defaultValues
  }));
  if (!_formControl.current) {
    if (props.formControl) {
      _formControl.current = {
        ...props.formControl,
        formState
      };
      if (props.defaultValues && !isFunction(props.defaultValues)) {
        props.formControl.reset(props.defaultValues, props.resetOptions);
      }
    } else {
      const { formControl, ...rest } = createFormControl(props);
      _formControl.current = {
        ...rest,
        formState
      };
    }
  }
  const control = _formControl.current.control;
  control._options = props;
  useIsomorphicLayoutEffect(() => {
    const sub = control._subscribe({
      formState: control._proxyFormState,
      callback: () => updateFormState({
        ...control._formState,
        defaultValues: control._defaultValues
      }),
      reRenderRoot: true
    });
    updateFormState((data) => ({
      ...data,
      isReady: true
    }));
    control._formState.isReady = true;
    return sub;
  }, [control]);
  React.useEffect(() => control._disableForm(props.disabled), [control, props.disabled]);
  React.useEffect(() => {
    if (props.mode) {
      control._options.mode = props.mode;
    }
    if (props.reValidateMode) {
      control._options.reValidateMode = props.reValidateMode;
    }
  }, [control, props.mode, props.reValidateMode]);
  React.useEffect(() => {
    if (props.errors) {
      control._setErrors(props.errors);
      control._focusError();
    }
  }, [control, props.errors]);
  React.useEffect(() => {
    props.shouldUnregister && control._subjects.state.next({
      values: control._getWatch()
    });
  }, [control, props.shouldUnregister]);
  React.useEffect(() => {
    if (control._proxyFormState.isDirty) {
      const isDirty = control._getDirty();
      if (isDirty !== formState.isDirty) {
        control._subjects.state.next({
          isDirty
        });
      }
    }
  }, [control, formState.isDirty]);
  React.useEffect(() => {
    var _a;
    if (props.values && !deepEqual(props.values, _values.current)) {
      control._reset(props.values, {
        keepFieldsRef: true,
        ...control._options.resetOptions
      });
      if (!((_a = control._options.resetOptions) === null || _a === void 0 ? void 0 : _a.keepIsValid)) {
        control._setValid();
      }
      _values.current = props.values;
      updateFormState((state) => ({ ...state }));
    } else {
      control._resetDefaultValues();
    }
  }, [control, props.values]);
  React.useEffect(() => {
    if (!control._state.mount) {
      control._setValid();
      control._state.mount = true;
    }
    if (control._state.watch) {
      control._state.watch = false;
      control._subjects.state.next({ ...control._formState });
    }
    control._removeUnmounted();
  });
  _formControl.current.formState = React.useMemo(() => getProxyFormState(formState, control), [control, formState]);
  return _formControl.current;
}
const r = (t2, r2, o2) => {
  if (t2 && "reportValidity" in t2) {
    const s2 = get(o2, r2);
    t2.setCustomValidity(s2 && s2.message || ""), t2.reportValidity();
  }
}, o = (e, t2) => {
  for (const o2 in t2.fields) {
    const s2 = t2.fields[o2];
    s2 && s2.ref && "reportValidity" in s2.ref ? r(s2.ref, o2, e) : s2 && s2.refs && s2.refs.forEach((t3) => r(t3, o2, e));
  }
}, s$1 = (r2, s2) => {
  s2.shouldUseNativeValidation && o(r2, s2);
  const n2 = {};
  for (const o2 in r2) {
    const c = get(s2.fields, o2), f = Object.assign(r2[o2] || {}, { ref: c && c.ref });
    if (i$1(s2.names || Object.keys(r2), o2)) {
      const r3 = Object.assign({}, get(n2, o2));
      set(r3, "root", f), set(n2, o2, r3);
    } else set(n2, o2, f);
  }
  return n2;
}, i$1 = (e, t2) => {
  const r2 = n(t2).replace(/[.*+?^${}()|\\]/g, "\\$&");
  return e.some((e2) => n(e2).match(`^${r2}\\.\\d+`));
};
function n(e) {
  return e.replace(/[\[\]]/g, "");
}
function $constructor(name, initializer2, params) {
  function init(inst, def) {
    var _a;
    Object.defineProperty(inst, "_zod", {
      value: inst._zod ?? {},
      enumerable: false
    });
    (_a = inst._zod).traits ?? (_a.traits = /* @__PURE__ */ new Set());
    inst._zod.traits.add(name);
    initializer2(inst, def);
    for (const k in _.prototype) {
      if (!(k in inst))
        Object.defineProperty(inst, k, { value: _.prototype[k].bind(inst) });
    }
    inst._zod.constr = _;
    inst._zod.def = def;
  }
  const Parent = params?.Parent ?? Object;
  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    var _a;
    const inst = params?.Parent ? new Definition() : this;
    init(inst, def);
    (_a = inst._zod).deferred ?? (_a.deferred = []);
    for (const fn of inst._zod.deferred) {
      fn();
    }
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name);
    }
  });
  Object.defineProperty(_, "name", { value: name });
  return _;
}
class $ZodAsyncError extends Error {
  constructor() {
    super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
  }
}
const globalConfig = {};
function config(newConfig) {
  return globalConfig;
}
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
const captureStackTrace = Error.captureStackTrace ? Error.captureStackTrace : (..._args) => {
};
function unwrapMessage(message) {
  return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config2) {
  const full = { ...iss, path: iss.path ?? [] };
  if (!iss.message) {
    const message = unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config2.customError?.(iss)) ?? unwrapMessage(config2.localeError?.(iss)) ?? "Invalid input";
    full.message = message;
  }
  delete full.inst;
  delete full.continue;
  if (!ctx?.reportInput) {
    delete full.input;
  }
  return full;
}
const initializer = (inst, def) => {
  inst.name = "$ZodError";
  Object.defineProperty(inst, "_zod", {
    value: inst._zod,
    enumerable: false
  });
  Object.defineProperty(inst, "issues", {
    value: def,
    enumerable: false
  });
  Object.defineProperty(inst, "message", {
    get() {
      return JSON.stringify(def, jsonStringifyReplacer, 2);
    },
    enumerable: true
    // configurable: false,
  });
  Object.defineProperty(inst, "toString", {
    value: () => inst.message,
    enumerable: false
  });
};
const $ZodError = $constructor("$ZodError", initializer);
const $ZodRealError = $constructor("$ZodError", initializer, { Parent: Error });
const _parse = (_Err) => (schema2, value, _ctx, _params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
  const result = schema2._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError();
  }
  if (result.issues.length) {
    const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e, _params?.callee);
    throw e;
  }
  return result.value;
};
const parse = /* @__PURE__ */ _parse($ZodRealError);
const _parseAsync = (_Err) => async (schema2, value, _ctx, params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema2._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  if (result.issues.length) {
    const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e, params?.callee);
    throw e;
  }
  return result.value;
};
const parseAsync = /* @__PURE__ */ _parseAsync($ZodRealError);
function t() {
  return t = Object.assign ? Object.assign.bind() : function(r2) {
    for (var e = 1; e < arguments.length; e++) {
      var n2 = arguments[e];
      for (var o2 in n2) ({}).hasOwnProperty.call(n2, o2) && (r2[o2] = n2[o2]);
    }
    return r2;
  }, t.apply(null, arguments);
}
function s(r2, e) {
  try {
    var n2 = r2();
  } catch (r3) {
    return e(r3);
  }
  return n2 && n2.then ? n2.then(void 0, e) : n2;
}
function i(r2, e) {
  for (var o2 = {}; r2.length; ) {
    var t2 = r2[0], s2 = t2.code, i2 = t2.message, a2 = t2.path.join(".");
    if (!o2[a2]) if ("unionErrors" in t2) {
      var u2 = t2.unionErrors[0].errors[0];
      o2[a2] = { message: u2.message, type: u2.code };
    } else o2[a2] = { message: i2, type: s2 };
    if ("unionErrors" in t2 && t2.unionErrors.forEach(function(e2) {
      return e2.errors.forEach(function(e3) {
        return r2.push(e3);
      });
    }), e) {
      var c = o2[a2].types, f = c && c[t2.code];
      o2[a2] = appendErrors(a2, e, o2, s2, f ? [].concat(f, t2.message) : t2.message);
    }
    r2.shift();
  }
  return o2;
}
function a(r2, e) {
  for (var o2 = {}, s2 = function() {
    var s3 = r2[0], i2 = s3.code, a2 = s3.message, u2 = s3.path.join(".");
    if (!o2[u2]) if ("invalid_union" === s3.code && s3.errors.length > 0) {
      var c = s3.errors[0][0];
      o2[u2] = { message: c.message, type: c.code };
    } else o2[u2] = { message: a2, type: i2 };
    if ("invalid_union" === s3.code && s3.errors.forEach(function(e2) {
      return e2.forEach(function(e3) {
        return r2.push(t({}, e3, { path: [].concat(s3.path, e3.path) }));
      });
    }), e) {
      var f = o2[u2].types, l = f && f[s3.code];
      o2[u2] = appendErrors(u2, e, o2, i2, l ? [].concat(l, s3.message) : s3.message);
    }
    r2.shift();
  }; r2.length; ) s2();
  return o2;
}
function u(n2, t2, u2) {
  if (void 0 === u2 && (u2 = {}), (function(r2) {
    return "_def" in r2 && "object" == typeof r2._def && "typeName" in r2._def;
  })(n2)) return function(o$1, a2, c) {
    try {
      return Promise.resolve(s(function() {
        return Promise.resolve(n2["sync" === u2.mode ? "parse" : "parseAsync"](o$1, t2)).then(function(e) {
          return c.shouldUseNativeValidation && o({}, c), { errors: {}, values: u2.raw ? Object.assign({}, o$1) : e };
        });
      }, function(r2) {
        if ((function(r3) {
          return Array.isArray(null == r3 ? void 0 : r3.issues);
        })(r2)) return { values: {}, errors: s$1(i(r2.errors, !c.shouldUseNativeValidation && "all" === c.criteriaMode), c) };
        throw r2;
      }));
    } catch (r2) {
      return Promise.reject(r2);
    }
  };
  if ((function(r2) {
    return "_zod" in r2 && "object" == typeof r2._zod;
  })(n2)) return function(i2, c, f) {
    try {
      return Promise.resolve(s(function() {
        return Promise.resolve(("sync" === u2.mode ? parse : parseAsync)(n2, i2, t2)).then(function(e) {
          return f.shouldUseNativeValidation && o({}, f), { errors: {}, values: u2.raw ? Object.assign({}, i2) : e };
        });
      }, function(r2) {
        if ((function(r3) {
          return r3 instanceof $ZodError;
        })(r2)) return { values: {}, errors: s$1(a(r2.issues, !f.shouldUseNativeValidation && "all" === f.criteriaMode), f) };
        throw r2;
      }));
    } catch (r2) {
      return Promise.reject(r2);
    }
  };
  throw new Error("Invalid input: not a Zod schema");
}
const b = "https://app.cal.com/embed/embed.js";
function m(s2 = b) {
  (function(r2, e, l) {
    let t2 = function(n2, i2) {
      n2.q.push(i2);
    }, o2 = r2.document;
    r2.Cal = r2.Cal || function() {
      let n2 = r2.Cal, i2 = arguments;
      if (n2.loaded || (n2.ns = {}, n2.q = n2.q || [], o2.head.appendChild(o2.createElement("script")).src = e, n2.loaded = true), i2[0] === l) {
        const u2 = function() {
          t2(u2, arguments);
        }, c = i2[1];
        u2.q = u2.q || [], typeof c == "string" ? (n2.ns[c] = n2.ns[c] || u2, t2(n2.ns[c], i2), t2(n2, ["initNamespace", c])) : t2(n2, i2);
        return;
      }
      t2(n2, i2);
    };
  })(
    window,
    //! Replace it with "https://cal.com/embed.js" or the URL where you have embed.js installed
    s2,
    "init"
  );
  return window.Cal;
}
function q(s2) {
  const [r2, e] = reactExports.useState();
  return reactExports.useEffect(() => {
    e(() => m(s2));
  }, []), r2;
}
const h = function(r2) {
  const {
    calLink: e,
    calOrigin: l,
    namespace: t2 = "",
    config: o2,
    initConfig: n2 = {},
    embedJsUrl: i2,
    ...u2
  } = r2;
  if (!e)
    throw new Error("calLink is required");
  const c = reactExports.useRef(false), a2 = q(i2), f = reactExports.useRef(null);
  return reactExports.useEffect(() => {
    if (!a2 || c.current || !f.current)
      return;
    c.current = true;
    const d = f.current;
    t2 ? (a2("init", t2, {
      ...n2,
      origin: l
    }), a2.ns[t2]("inline", {
      elementOrSelector: d,
      calLink: e,
      config: o2
    })) : (a2("init", {
      ...n2,
      origin: l
    }), a2("inline", {
      elementOrSelector: d,
      calLink: e,
      config: o2
    }));
  }, [a2, e, o2, t2, l, n2]), a2 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ref: f,
    ...u2
  }) : null;
}, R = h;
function j(s2) {
  const r2 = {}, { namespace: e = "", embedJsUrl: l } = r2;
  return new Promise(function t2(o2) {
    const n2 = m(l);
    n2("init", e);
    const i2 = e ? n2.ns[e] : n2;
    if (!i2) {
      setTimeout(() => {
        t2(o2);
      }, 50);
      return;
    }
    o2(i2);
  });
}
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode);
const schema = objectType({
  name: stringType().trim().min(2, "Please enter your name").max(80),
  phone: stringType().trim().min(7, "Enter a valid phone").max(20),
  email: stringType().trim().email("Enter a valid email").max(120),
  sip: stringType().min(1, "Select your SIP capacity"),
  current: stringType().min(1, "Select an option")
});
function LeadModal() {
  const { open, fund, closeModal } = useLeadModal();
  const [revealed, setRevealed] = reactExports.useState(false);
  const [leadId, setLeadId] = reactExports.useState(null);
  const f = FUNDS$1[fund];
  reactExports.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);
  reactExports.useEffect(() => {
    (async function() {
      const cal = await j();
      cal("on", {
        action: "bookingSuccessful",
        callback: async (e) => {
          if (leadId) {
            await updateLeadMeetingStatusFn({
              data: { leadId, booked: true }
            });
            const meetingTime = e.detail?.data?.date || e.detail?.data?.startTime;
            if (meetingTime) {
              await updateLeadMeetingTimeFn({
                data: { leadId, meetingTime: new Date(meetingTime).toISOString() }
              });
            }
            toast.success("Meeting scheduled successfully!");
          }
        }
      });
    })();
  }, [leadId]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues
  } = useForm({
    resolver: u(schema),
    defaultValues: { name: "", phone: "", email: "", sip: "", current: "" }
  });
  function onClose() {
    closeModal();
    setTimeout(() => {
      setRevealed(false);
      reset();
    }, 200);
  }
  async function onSubmit(values) {
    try {
      const res = await submitLeadFn({ data: { ...values, fund } });
      if (res.success && res.leadId) {
        setLeadId(res.leadId);
        toast.success("Fund name revealed below");
        setRevealed(true);
      } else {
        toast.error("Failed to submit, please try again.");
      }
    } catch (err) {
      toast.error("An error occurred");
    }
  }
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "modal-overlay active",
      onClick: (e) => {
        if (e.target === e.currentTarget) onClose();
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-box", role: "dialog", "aria-modal": "true", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "modal-close", onClick: onClose, "aria-label": "Close", children: "✕" }),
        !revealed ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-form-area", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-tag", children: f.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "modal-heading", children: "One step away from the fund name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "modal-sub", children: "Share your details and the fund name is revealed instantly. I'll follow up with a personalised note on why this fund suits different investor profiles." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), noValidate: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Your Full Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "e.g. Ramesh Kumar", ...register("name") }),
              errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#c0392b", fontSize: 11, marginTop: 4 }, children: errors.name.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Phone Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", placeholder: "+91 98765 43210", ...register("phone") }),
                errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#c0392b", fontSize: 11, marginTop: 4 }, children: errors.phone.message })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Email Address" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "you@email.com", ...register("email") }),
                errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#c0392b", fontSize: 11, marginTop: 4 }, children: errors.email.message })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Monthly SIP Capacity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { ...register("sip"), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select range" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Less than ₹5,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "₹5,000 – ₹10,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "₹10,000 – ₹25,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "₹25,000 – ₹50,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "₹50,000+" })
                ] }),
                errors.sip && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#c0392b", fontSize: 11, marginTop: 4 }, children: errors.sip.message })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Currently Investing in MFs?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { ...register("current"), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Yes, actively" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Yes, but not regularly" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "No, just starting" })
                ] }),
                errors.current && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#c0392b", fontSize: 11, marginTop: 4 }, children: errors.current.message })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "submit-btn",
                type: "submit",
                disabled: isSubmitting,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px"
                },
                children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin", size: 16 }),
                  "Processing..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Reveal Fund Name Now  🔓" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "privacy-note", children: "🔒 Your details stay private. No spam. I'll reach out once for a free portfolio conversation — nothing more." })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal-screen active", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal-icon", children: "✅" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-tag", style: { textAlign: "center", marginBottom: 6 }, children: f.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal-fund-name", children: f.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal-fund-cat", children: f.cat }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal-note", children: f.note }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                marginTop: "24px",
                borderRadius: "8px",
                overflow: "hidden",
                height: "400px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h4",
                  {
                    style: {
                      fontFamily: '"Playfair Display", serif',
                      fontSize: "20px",
                      marginBottom: "12px"
                    },
                    children: "Book Your Free Consultation"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  R,
                  {
                    calLink: "ashish-kumar-meher/30min",
                    style: { width: "100%", height: "100%", overflow: "scroll" },
                    config: {
                      name: getValues("name"),
                      email: getValues("email")
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reveal-note-small", children: "Pick a time that works for you above to schedule our call." })
        ] })
      ] })
    }
  );
}
function Index() {
  reactExports.useEffect(() => {
    document.body.classList.add("shrinivesh");
    return () => {
      document.body.classList.remove("shrinivesh");
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(LeadModalProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrustBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RecommendationSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Manifesto, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LeadModal, {})
  ] });
}
export {
  Index as component
};
