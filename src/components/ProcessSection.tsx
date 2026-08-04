const STEPS = [
  {
    n: 1,
    t: "See The Fund Picks",
    d: "Click any locked card above. Share your name, phone, and email. Fund names are revealed instantly — free, no payment required.",
  },
  {
    n: 2,
    t: "Book Your Slot",
    d: "Use the Calendly widget to instantly schedule a 20-minute portfolio review call at a time that works perfectly for you.",
    alt: true,
  },
  {
    n: 3,
    t: "Portfolio Consultation",
    d: "We discuss your financial goals, current investments, risk appetite, and see how our approach fits into your plans.",
  },
  {
    n: 4,
    t: "Actionable Insights",
    d: "Walk away with absolute clarity on where you stand and what your next steps should be — no pressure, no commitment.",
    alt: true,
  },
];

export function ProcessSection() {
  return (
    <section className="process-section" id="process">
      <div className="process-header">
        <div className="section-tag">Simple Process</div>
        <h2 className="section-title">
          From curiosity to <em>clarity</em> in 4 steps
        </h2>
      </div>
      <div className="process-steps">
        {STEPS.map((s, i) => (
          <div
            className="process-step reveal-on-scroll visible"
            key={s.n}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className={`step-num${s.alt ? " alt" : ""}`}>{s.n}</div>
            <h4 className="step-title">{s.t}</h4>
            <p className="step-desc">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
