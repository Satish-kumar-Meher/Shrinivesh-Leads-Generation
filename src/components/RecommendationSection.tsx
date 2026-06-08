import { useLeadModal, type FundKey } from "./lead/LeadModalContext";

const CARDS: { key: FundKey; cat: string; tone: string; teaser: React.ReactNode }[] = [
  {
    key: "flexi",
    cat: "Flexi Cap Pick · 2025–30",
    tone: "flexi",
    teaser: (
      <>This fund has a <strong>portfolio PE lower than its own 5-year average</strong> right now — buying growth at a discount. The fund manager has navigated 3 market corrections without deviating from mandate once.</>
    ),
  },
  {
    key: "mid",
    cat: "Mid Cap Pick · 2025–30",
    tone: "mid",
    teaser: (
      <>Mid caps are entering the sweet spot of India's domestic capex cycle. This fund holds <strong>high ROCE businesses with zero net debt</strong> — the kind that compound quietly for years without making news.</>
    ),
  },
  {
    key: "small",
    cat: "Small Cap Pick · 2025–30",
    tone: "small",
    teaser: (
      <>Not all small caps are risky. This fund has a <strong>portfolio turnover ratio under 20%</strong> — the manager buys and holds conviction bets. That discipline is exactly how small cap wealth gets built, not traded.</>
    ),
  },
];

export function RecommendationSection() {
  const { openModal } = useLeadModal();
  return (
    <section className="reco-section" id="recommendations">
      <div className="reco-grid">
        <div className="reco-left reveal-on-scroll visible">
          <div className="section-tag">Research · 2025–2030</div>
          <h2 className="section-title">My current picks for the <em>next 5-year cycle.</em></h2>
          <p className="reco-body">The model portfolio above wasn't luck. It was a process. I've run the same process to identify 3 funds for 2025–2030. The economy is entering a different phase — the right funds for the next cycle are not the same as the last one.</p>
          <p className="reco-body">The fund names are free to access. I only ask that you share your details so I can follow up with genuinely personalised advice.</p>
          <div className="reco-points">
            {[
              "Each fund selected after analysing 100+ schemes — PE ratios, turnover, manager track record across a full market cycle",
              "Macro tailwinds considered — domestic consumption, capex cycle, and rupee dynamics for 2025–2030",
              "Completely free. No paid subscription. Just share your details and the fund names are revealed instantly",
              "Backed by SEBI Registered Research Analyst credentials — not broker opinions, not YouTube tips",
            ].map((t) => (
              <div className="reco-point" key={t}>
                <div className="rp-dot">✓</div>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="locked-cards reveal-on-scroll visible">
          {CARDS.map((c) => (
            <div className="locked-card" key={c.key} onClick={() => openModal(c.key)}>
              <div className="lc-top">
                <div className={`lc-cat ${c.tone}`}>{c.cat}</div>
                <div className="lc-lock">🔒</div>
              </div>
              <p className="lc-teaser">{c.teaser}</p>
              <div className="lc-blur" />
              <button className="lc-btn">Reveal Fund Name &nbsp;→</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
