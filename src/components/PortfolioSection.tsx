const BARS = [
  { yr: "2020", pct: "+14.9%", p: 33, n: 33, sub: "Both flat" },
  { yr: "2021", pct: "+54%", p: 100, n: 65, sub: "vs +24.1%" },
  { yr: "2022", pct: "−8%", p: 16, n: 20, sub: "Down year", neg: true },
  { yr: "2023", pct: "+38.2%", p: 82, n: 54, sub: "vs +20.1%" },
  { yr: "2024", pct: "+22.4%", p: 52, n: 37, sub: "vs +15.3%" },
  { yr: "2025", pct: "+11.8%", p: 28, n: 19, sub: "YTD" },
];

const FUNDS = [
  {
    l: "Fund 1 · Flexi Cap",
    n: "Diversified Growth Pick",
    tags: [
      ["PE at entry", "21.3x"],
      ["Expense", "0.69%"],
      ["Manager tenure", "11+ yrs"],
    ],
    x: "18.4%",
  },
  {
    l: "Fund 2 · Mid Cap",
    n: "Mid-Market Compounder",
    tags: [
      ["PE at entry", "24.6x"],
      ["Expense", "0.82%"],
      ["Manager tenure", "8+ yrs"],
    ],
    x: "22.1%",
  },
  {
    l: "Fund 3 · Small Cap",
    n: "High-Conviction Frontier",
    tags: [
      ["PE at entry", "19.8x"],
      ["Expense", "0.94%"],
      ["Turnover", "<20%"],
    ],
    x: "27.8%",
  },
];

export function PortfolioSection() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="section-tag reveal-on-scroll visible">The Numbers</div>
      <h2 className="section-title reveal-on-scroll visible">
        ₹10K/month. 5 years.
        <br />3 funds. <em>Here's the breakdown.</em>
      </h2>
      <p className="section-lead reveal-on-scroll visible">
        Built on publicly available NAV data. Every fund chosen by a documented research process —
        not hype, not NFO pressure, not distributor incentives.
      </p>

      <div className="portfolio-grid" style={{ marginTop: 56 }}>
        <div className="chart-block reveal-on-scroll visible">
          <div className="chart-title">Annual Returns: Model Portfolio vs Nifty 50 TRI</div>
          <div className="chart-sub">
            Illustrative · Based on public NAV data · Not client returns
          </div>
          <div className="chart-legend">
            <div className="leg-item">
              <div className="leg-dot p" />
              Model Portfolio
            </div>
            <div className="leg-item">
              <div className="leg-dot n" />
              Nifty 50 TRI
            </div>
          </div>
          <div className="bars-wrap">
            {BARS.map((b, i) => (
              <div className="bar-group" key={b.yr}>
                <div className={`bar-pct${b.neg ? " neg" : ""}`}>{b.pct}</div>
                <div className="bar-pair">
                  <div
                    className={`b ${b.neg ? "neg" : "p"}`}
                    style={{ height: `${b.p}%`, animationDelay: `${0.1 + i * 0.1}s` }}
                  />
                  <div
                    className={`b ${b.neg ? "neg-n" : "n"}`}
                    style={{ height: `${b.n}%`, animationDelay: `${0.3 + i * 0.1}s` }}
                  />
                </div>
                <div className="bar-lbl">
                  {b.yr}
                  <br />
                  <span style={{ color: b.neg ? "rgba(224,123,42,0.6)" : "rgba(255,255,255,0.3)" }}>
                    {b.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="fund-cards reveal-on-scroll visible">
            {FUNDS.map((f) => (
              <div className="fund-card-item" key={f.n}>
                <div>
                  <div className="fci-label">{f.l}</div>
                  <div className="fci-name">{f.n}</div>
                  <div className="fci-meta">
                    {f.tags.map(([k, v]) => (
                      <span className="fci-tag" key={k}>
                        {k}: <strong>{v}</strong>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="fci-right">
                  <div className="fci-xirr">{f.x}</div>
                  <div className="fci-xirr-lbl">XIRR · 5Y SIP</div>
                </div>
              </div>
            ))}
          </div>

          <div className="portfolio-summary reveal-on-scroll visible" style={{ marginTop: 28 }}>
            <div className="ps-item">
              <label>Total Invested</label>
              <div className="pv cream">₹6.0 L</div>
            </div>
            <div className="ps-item">
              <label>Current Value</label>
              <div className="pv green">₹11.4 L</div>
            </div>
            <div className="ps-item">
              <label>Absolute Gain</label>
              <div className="pv orange">₹5.4 L</div>
            </div>
            <div className="ps-item">
              <label>Portfolio XIRR</label>
              <div className="pv green">19.8%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
