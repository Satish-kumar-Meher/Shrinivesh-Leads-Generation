import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { u } from "../_libs/hookform__resolvers.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { j, R } from "../_libs/calcom__embed-react.mjs";
import { u as updateLeadMeetingStatusFn, a as updateLeadMeetingTimeFn, s as submitLeadFn } from "./leads-FE9c7gFf.mjs";
import "../_libs/seroval.mjs";
import { L as LoaderCircle } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./server-Dg7Q6TuF.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/isbot.mjs";
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bars-wrap", children: BARS.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bar-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `bar-pct${b.neg ? " neg" : ""}`, children: b.pct }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bar-pair", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `b ${b.neg ? "neg" : "p"}`,
                style: { height: `${b.p}%`, animationDelay: `${0.1 + i * 0.1}s` }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `b ${b.neg ? "neg-n" : "n"}`,
                style: { height: `${b.n}%`, animationDelay: `${0.3 + i * 0.1}s` }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bar-lbl", children: [
            b.yr,
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: b.neg ? "rgba(224,123,42,0.6)" : "rgba(255,255,255,0.3)" }, children: b.sub })
          ] })
        ] }, b.yr)) })
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
      ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reco-point", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rp-dot", children: "✓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t })
      ] }, t)) })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "process-steps", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "process-step reveal-on-scroll visible",
        style: { transitionDelay: `${i * 0.1}s` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `step-num${s.alt ? " alt" : ""}`, children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "step-title", children: s.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "step-desc", children: s.d })
        ]
      },
      s.n
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "test-grid", children: ITEMS.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "test-card reveal-on-scroll visible",
        style: { transitionDelay: `${i * 0.1}s` },
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
