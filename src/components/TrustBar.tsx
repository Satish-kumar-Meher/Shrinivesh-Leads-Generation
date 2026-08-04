export function TrustBar() {
  const items = [
    { i: "🏛️", t: "NSE Invest Empanelled" },
    { i: "🔬", t: "NISM Certified" },
    { i: "📜", t: "AMFI Registered MFD" },
    { i: "🔒", t: "Free Portfolio Consultation" },
    { i: "🌾", t: "Rooted in Odisha · Pan-India" },
  ];
  return (
    <div className="trust-bar">
      {items.map((it) => (
        <div className="trust-item" key={it.t}>
          <span className="icon">{it.i}</span> {it.t}
        </div>
      ))}
    </div>
  );
}
