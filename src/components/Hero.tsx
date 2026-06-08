import { useLeadModal } from "./lead/LeadModalContext";

export function Hero() {
  const { openModal } = useLeadModal();
  return (
    <section className="hero">
      <div className="hero-bg" />

      <div className="hero-left">
        <div className="hero-tag">Model Portfolio · Jan 2020 – May 2025</div>
        <h1 className="hero-headline">
          ₹10,000/month SIP.<br />
          <em>5 Years. 3 Funds.</em>
          <span className="accent">Here's What Happened.</span>
        </h1>
        <p className="hero-sub">
          Not star ratings. Not bank recommendations. Fundamentals — PE ratios, fund manager stability, and portfolio concentration. This is what disciplined research builds.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => openModal("flexi")}>See Our 2025–30 Fund Picks</button>
          <a href="#portfolio" className="btn-ghost">View The Numbers</a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">₹<span>11.4L</span></span>
            <span className="stat-label">From ₹6L Invested</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">19<span>.8%</span></span>
            <span className="stat-label">Portfolio XIRR</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">+<span>5.6%</span></span>
            <span className="stat-label">Alpha vs Nifty 50</span>
          </div>
        </div>
        <p className="hero-disc">* Illustrative model portfolio. Not actual client data. Past performance is not indicative of future returns.</p>
      </div>

      <div className="hero-right">
        <div className="hero-card-stack">
          <div className="float-badge one">
            <div className="badge-icon">📈</div>
            <div className="badge-text">Portfolio XIRR</div>
            <div className="badge-sub">19.8% · 5 Year SIP</div>
          </div>

          <div className="card-main">
            <div className="card-header">
              <span className="card-label">Illustrative Model Portfolio</span>
              <span className="card-badge">↑ Beat Nifty by 5.6%</span>
            </div>
            <p className="card-disc">Not client data · Based on public NAV history</p>
            <div className="portfolio-value">₹11,40,000</div>
            <div className="portfolio-change">↑ ₹5,40,000 gain on ₹6,00,000 invested</div>
            <div className="mini-chart">
              <svg viewBox="0 0 360 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4a8c3f" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#4a8c3f" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,54 L40,50 L80,46 L100,42 L140,36 L180,28 L220,20 L260,14 L300,8 L360,3 L360,60 L0,60 Z" fill="url(#g1)" />
                <path d="M0,54 L40,50 L80,46 L100,42 L140,36 L180,28 L220,20 L260,14 L300,8 L360,3" stroke="#4a8c3f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <div className="fund-list">
              {[
                { n: "Flexi Cap Pick", c: "Large & Mid Cap Blend", r: "18.4%" },
                { n: "Mid Cap Pick", c: "Pure Mid Cap Category", r: "22.1%" },
                { n: "Small Cap Pick", c: "Small Cap Category", r: "27.8%" },
              ].map((f) => (
                <div className="fund-row" key={f.n}>
                  <div className="fund-info">
                    <span className="fund-name">{f.n}</span>
                    <span className="fund-cat">{f.c}</span>
                  </div>
                  <span className="fund-ret">{f.r}</span>
                </div>
              ))}
            </div>
            <div className="card-bottom">
              <div className="xirr-row">
                <div className="xirr-box">
                  <label>Portfolio XIRR</label>
                  <div className="xv green">19.8%</div>
                </div>
                <div className="xirr-box">
                  <label>Nifty 50 TRI</label>
                  <div className="xv orange">14.2%</div>
                </div>
              </div>
              <div className="vs-badge">📊 &nbsp;Alpha generated: +5.6% per annum above benchmark</div>
            </div>
          </div>

          <div className="float-badge two">
            <div className="badge-icon">🔒</div>
            <div className="badge-text">Fund Names</div>
            <div className="badge-sub">Free · One click away</div>
          </div>
        </div>
      </div>
    </section>
  );
}
