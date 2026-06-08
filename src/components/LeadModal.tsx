import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { FUNDS, useLeadModal } from "./lead/LeadModalContext";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Enter a valid email").max(120),
  sip: z.string().min(1, "Select your SIP capacity"),
  current: z.string().min(1, "Select an option"),
});
type FormVals = z.infer<typeof schema>;

export function LeadModal() {
  const { open, fund, closeModal } = useLeadModal();
  const [revealed, setRevealed] = useState(false);
  const f = FUNDS[fund];

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormVals>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", sip: "", current: "" },
  });

  function onClose() {
    closeModal();
    setTimeout(() => {
      setRevealed(false);
      reset();
    }, 200);
  }

  async function onSubmit(values: FormVals) {
    // eslint-disable-next-line no-console
    console.log("Lead captured:", { ...values, fund });
    toast.success("Fund name revealed below");
    setRevealed(true);
  }

  if (!open) return null;

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-box" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        {!revealed ? (
          <div className="modal-form-area">
            <div className="modal-tag">{f.tag}</div>
            <h3 className="modal-heading">One step away from the fund name</h3>
            <p className="modal-sub">Share your details and the fund name is revealed instantly. I'll follow up with a personalised note on why this fund suits different investor profiles.</p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-group">
                <label>Your Full Name</label>
                <input type="text" placeholder="e.g. Ramesh Kumar" {...register("name")} />
                {errors.name && <p style={{ color: "#c0392b", fontSize: 11, marginTop: 4 }}>{errors.name.message}</p>}
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" {...register("phone")} />
                  {errors.phone && <p style={{ color: "#c0392b", fontSize: 11, marginTop: 4 }}>{errors.phone.message}</p>}
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="you@email.com" {...register("email")} />
                  {errors.email && <p style={{ color: "#c0392b", fontSize: 11, marginTop: 4 }}>{errors.email.message}</p>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Monthly SIP Capacity</label>
                  <select {...register("sip")}>
                    <option value="">Select range</option>
                    <option>Less than ₹5,000</option>
                    <option>₹5,000 – ₹10,000</option>
                    <option>₹10,000 – ₹25,000</option>
                    <option>₹25,000 – ₹50,000</option>
                    <option>₹50,000+</option>
                  </select>
                  {errors.sip && <p style={{ color: "#c0392b", fontSize: 11, marginTop: 4 }}>{errors.sip.message}</p>}
                </div>
                <div className="form-group">
                  <label>Currently Investing in MFs?</label>
                  <select {...register("current")}>
                    <option value="">Select</option>
                    <option>Yes, actively</option>
                    <option>Yes, but not regularly</option>
                    <option>No, just starting</option>
                  </select>
                  {errors.current && <p style={{ color: "#c0392b", fontSize: 11, marginTop: 4 }}>{errors.current.message}</p>}
                </div>
              </div>
              <button className="submit-btn" type="submit" disabled={isSubmitting}>
                Reveal Fund Name Now &nbsp;🔓
              </button>
              <p className="privacy-note">🔒 Your details stay private. No spam. I'll reach out once for a free portfolio conversation — nothing more.</p>
            </form>
          </div>
        ) : (
          <div className="reveal-screen active">
            <div className="reveal-icon">✅</div>
            <div className="modal-tag" style={{ textAlign: "center", marginBottom: 6 }}>{f.tag}</div>
            <div className="reveal-fund-name">{f.name}</div>
            <div className="reveal-fund-cat">{f.cat}</div>
            <div className="reveal-note">{f.note}</div>
            <button className="book-call-btn" onClick={() => toast.success("We'll be in touch within 24 hours.")}>📞 &nbsp;Book a Free Portfolio Call</button>
            <p className="reveal-note-small">I'll reach out to you within 24 hours to schedule a call.</p>
          </div>
        )}
      </div>
    </div>
  );
}
