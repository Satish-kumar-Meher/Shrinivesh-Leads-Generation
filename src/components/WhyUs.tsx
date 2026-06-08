const CARDS = [
  { i: "🔬", t: "SEBI-Registered Research", d: "Not opinions — registered, accountable research with proper disclosures. Every fund pick has a documented rationale." },
  { i: "🤝", t: "KYC Before Fund Names", d: "We understand you before we recommend anything. This isn't a workaround — it's how responsible MFD business works." },
  { i: "🌾", t: "Local Roots, National Reach", d: "Deep roots in Odisha. We understand local income patterns, agricultural cycles, and family wealth goals from the ground up." },
  { i: "📚", t: "Education First", d: "Market insights, investing psychology, IPO analysis — freely shared on X (Twitter) every day. No paywall, no agenda." },
];

export function WhyUs() {
  return (
    <section className="why-section" id="why">
      <div className="why-left reveal-on-scroll visible">
        <div className="section-tag">Why ShriNivesh</div>
        <h2 className="section-title">Research-First.<br /><em>Client-Always.</em></h2>
        <p className="why-desc">We're not distributors pushing NFOs for commission. We're educators, analysts, and long-term partners. Every recommendation comes backed by documented research — PE ratios, manager evaluation, and macro alignment — not sales targets.</p>
      </div>
      <div className="why-grid reveal-on-scroll visible">
        {CARDS.map((c) => (
          <div className="why-card" key={c.t}>
            <div className="why-icon">{c.i}</div>
            <h4 className="why-title">{c.t}</h4>
            <p className="why-text">{c.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
