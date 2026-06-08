const ITEMS = [
  { q: "Started my SIP with just ₹5,000/month on Ashish's guidance. Three years later, my corpus has grown beyond what any FD could have done. The guidance was patient and genuinely personalised.", n: "Ramesh Mohanty", r: "Small Business Owner, Bhubaneswar", a: "R" },
  { q: "The research content on X first caught my attention. Then the consultation blew me away — no sales pitch, just honest advice about what suits my risk tolerance and timeline. Rare.", n: "Priya Nanda", r: "IT Professional, Hyderabad", a: "P" },
  { q: "As a farmer, I never thought mutual funds were for me. ShriNivesh explained everything simply and helped me start a small SIP. Two years in, I recommend it to everyone in my village.", n: "Suresh Pradhan", r: "Cotton Farmer, Sambalpur", a: "S" },
];

export function Testimonials() {
  return (
    <section className="test-section" id="testimonials">
      <div className="test-header">
        <div className="section-tag">Client Stories</div>
        <h2 className="section-title">Real people. <em>Real wealth built.</em></h2>
      </div>
      <div className="test-grid">
        {ITEMS.map((it, i) => (
          <div className="test-card reveal-on-scroll visible" key={it.n} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="stars">★★★★★</div>
            <p className="test-quote">{it.q}</p>
            <div className="test-author">
              <div className="author-avatar">{it.a}</div>
              <div>
                <div className="author-name">{it.n}</div>
                <div className="author-role">{it.r}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
