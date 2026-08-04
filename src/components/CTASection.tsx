import { useLeadModal } from "./lead/LeadModalContext";

export function CTASection() {
  const { openModal } = useLeadModal();
  return (
    <section className="cta-section" id="cta">
      <div className="cta-eyebrow">Start Here · It's Free</div>
      <h2 className="cta-title">
        See the 3 funds.
        <br />
        <em>Then let's build your portfolio.</em>
      </h2>
      <p className="cta-sub">
        Fund names revealed instantly after you share your details. No payment. No spam. Just honest
        research and a free follow-up call.
      </p>
      <div className="cta-actions">
        <button className="btn-cta" onClick={() => openModal("flexi")}>
          See Free Fund Picks Now
        </button>
        <a href="mailto:hello@shrinivesh.com" className="btn-cta-alt">
          Talk to Ashish Directly
        </a>
      </div>
    </section>
  );
}
