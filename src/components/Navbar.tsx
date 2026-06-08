import { useLeadModal } from "./lead/LeadModalContext";

export function Navbar() {
  const { openModal } = useLeadModal();
  return (
    <nav>
      <div className="nav-logo">
        <span className="nav-wordmark">Shri<span>Nivesh</span></span>
      </div>
      <div className="nav-center">Beyond Investing — Lead Generation</div>
      <div className="nav-right">
        <div className="nav-badge">SEBI RA · ARN Holder</div>
        <button className="nav-cta" onClick={() => openModal("flexi")}>See Fund Picks →</button>
      </div>
    </nav>
  );
}
