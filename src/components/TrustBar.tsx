export function TrustBar() {
  const items = [
    { i: "🏛️", t: "NSE Invest Empanelled" },
    { i: "🔬", t: "SEBI Registered Research Analyst" },
    { i: "📜", t: "AMFI Registered MFD" },
    { i: "🔒", t: "KYC-First. Advice-Always." },
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
