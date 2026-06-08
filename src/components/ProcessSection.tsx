const STEPS = [
  { n: 1, t: "See The Fund Picks", d: "Click any locked card above. Share your name, phone, and email. Fund names are revealed instantly — free, no payment required." },
  { n: 2, t: "Free Portfolio Call", d: "I'll reach out within 24 hours for a free 20-minute call to understand your financial goals, income, and risk appetite personally.", alt: true },
  { n: 3, t: "Complete Your KYC", d: "Onboard seamlessly through NSE Invest — fully digital, paperless, and SEBI-compliant. Takes less than 10 minutes on your phone." },
  { n: 4, t: "Start & Grow", d: "Your personalised SIP begins. Regular reviews, rebalancing alerts, and ongoing research keep your wealth on track every quarter.", alt: true },
];

export function ProcessSection() {
  return (
    <section className="process-section" id="process">
      <div className="process-header">
        <div className="section-tag">Simple Onboarding</div>
        <h2 className="section-title">From curiosity to <em>growing wealth</em> in 4 steps</h2>
      </div>
      <div className="process-steps">
        {STEPS.map((s, i) => (
          <div className="process-step reveal-on-scroll visible" key={s.n} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className={`step-num${s.alt ? " alt" : ""}`}>{s.n}</div>
            <h4 className="step-title">{s.t}</h4>
            <p className="step-desc">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
