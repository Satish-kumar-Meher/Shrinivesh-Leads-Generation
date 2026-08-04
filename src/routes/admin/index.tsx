import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { deleteLeadFn, updateLeadMeetingTimeFn } from "@/actions/leads";

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  sip_amount: string;
  risk_profile: string;
  status: "new" | "contacted" | "meeting_scheduled" | "meeting_completed" | "accepted" | "denied";
  meeting_booked: boolean;
  calendly_booking_link: string | null;
  meeting_time: string | null;
  notes: string;
  created_at: string;
};

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  useEffect(() => {
    checkAuth();
    fetchLeads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function checkAuth() {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      navigate({ to: "/admin/login" });
    }
  }

  async function fetchLeads() {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to load leads");
      console.error(error);
    } else {
      let loadedLeads = (data as Lead[]) || [];

      // Auto-update to meeting_completed if meeting time has passed
      let needsUpdate = false;
      const now = new Date();
      loadedLeads = loadedLeads.map((lead) => {
        if (
          lead.status === "meeting_scheduled" &&
          lead.meeting_time &&
          new Date(lead.meeting_time) < now
        ) {
          needsUpdate = true;
          // Fire update to supabase in background
          supabase.from("leads").update({ status: "meeting_completed" }).eq("id", lead.id).then();
          return { ...lead, status: "meeting_completed" };
        }
        return lead;
      });

      setLeads(loadedLeads);
      if (needsUpdate) {
        toast.info("Some meetings have passed. Status auto-updated to Completed.");
      }
    }
    setLoading(false);
  }

  async function updateLeadStatus(id: string, status: Lead["status"]) {
    const { error } = await supabase.from("leads").update({ status }).eq("id", id);
    if (error) {
      toast.error("Failed to update status");
    } else {
      toast.success("Status updated");
      setLeads(leads.map((l) => (l.id === id ? { ...l, status } : l)));
      if (selectedLead?.id === id) {
        setSelectedLead({ ...selectedLead, status });
      }
    }
  }

  async function saveNotes(id: string, notes: string) {
    const { error } = await supabase.from("leads").update({ notes }).eq("id", id);
    if (error) {
      toast.error("Failed to save notes");
    } else {
      toast.success("Notes saved");
      setLeads(leads.map((l) => (l.id === id ? { ...l, notes } : l)));
    }
  }

  async function handleDeleteLead(id: string) {
    if (!confirm("Are you sure you want to completely delete this lead? This cannot be undone."))
      return;

    const res = await deleteLeadFn({ data: { leadId: id } });
    if (res.success) {
      toast.success("Lead deleted successfully");
      setLeads(leads.filter((l) => l.id !== id));
      setSelectedLead(null);
    } else {
      toast.error("Failed to delete lead");
    }
  }

  async function handleSaveMeetingTime(id: string, time: string) {
    const res = await updateLeadMeetingTimeFn({
      data: { leadId: id, meetingTime: time ? new Date(time).toISOString() : null },
    });
    if (res.success) {
      toast.success("Meeting time saved");
      setLeads(
        leads.map((l) =>
          l.id === id ? { ...l, meeting_time: time ? new Date(time).toISOString() : null } : l,
        ),
      );
      if (selectedLead?.id === id) {
        setSelectedLead({
          ...selectedLead,
          meeting_time: time ? new Date(time).toISOString() : null,
        });
      }

      // Re-trigger auto-check logic
      setTimeout(fetchLeads, 500);
    } else {
      toast.error("Failed to save meeting time");
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate({ to: "/admin/login" });
  }

  const stats = {
    total: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    accepted: leads.filter((l) => l.status === "accepted").length,
    denied: leads.filter((l) => l.status === "denied").length,
    meetings: leads.filter((l) => l.meeting_booked).length,
  };

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  if (loading) return <div style={{ padding: 40 }}>Loading dashboard...</div>;

  return (
    <div style={{ padding: "40px 80px", maxWidth: "1400px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: "32px", color: "#102440" }}>
          {greeting}, Ashish
        </h1>
        <button
          onClick={handleLogout}
          className="btn-ghost"
          style={{ padding: "8px 16px", fontSize: "13px" }}
        >
          Sign Out
        </button>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {[
          { label: "Total Leads", value: stats.total, color: "#102440" },
          { label: "New Leads", value: stats.new, color: "#e07b2a" },
          { label: "Meetings Scheduled", value: stats.meetings, color: "#5b7811" },
          { label: "Contacted", value: stats.contacted, color: "#6b7c65" },
          { label: "Accepted", value: stats.accepted, color: "#2d5a24" },
          { label: "Denied", value: stats.denied, color: "#c0392b" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: "white",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#6b7c65",
                marginBottom: "8px",
                fontWeight: 600,
              }}
            >
              {s.label}
            </div>
            <div
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "32px",
                fontWeight: 700,
                color: s.color,
              }}
            >
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Leads Table */}
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead style={{ background: "#f8f9fa", borderBottom: "1px solid #eaeaea" }}>
            <tr>
              <th
                style={{
                  padding: "16px 24px",
                  fontSize: "12px",
                  color: "#6b7c65",
                  fontWeight: 600,
                }}
              >
                Name
              </th>
              <th
                style={{
                  padding: "16px 24px",
                  fontSize: "12px",
                  color: "#6b7c65",
                  fontWeight: 600,
                }}
              >
                Contact
              </th>
              <th
                style={{
                  padding: "16px 24px",
                  fontSize: "12px",
                  color: "#6b7c65",
                  fontWeight: 600,
                }}
              >
                SIP Capacity
              </th>
              <th
                style={{
                  padding: "16px 24px",
                  fontSize: "12px",
                  color: "#6b7c65",
                  fontWeight: 600,
                }}
              >
                Status
              </th>
              <th
                style={{
                  padding: "16px 24px",
                  fontSize: "12px",
                  color: "#6b7c65",
                  fontWeight: 600,
                }}
              >
                Meeting
              </th>
              <th
                style={{
                  padding: "16px 24px",
                  fontSize: "12px",
                  color: "#6b7c65",
                  fontWeight: 600,
                }}
              >
                Date
              </th>
              <th
                style={{
                  padding: "16px 24px",
                  fontSize: "12px",
                  color: "#6b7c65",
                  fontWeight: 600,
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.id}
                style={{ borderBottom: "1px solid #f0f0f0", transition: "background 0.2s" }}
                className="table-row-hover"
              >
                <td
                  style={{
                    padding: "16px 24px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#102440",
                  }}
                >
                  {lead.name}
                </td>
                <td style={{ padding: "16px 24px", fontSize: "13px", color: "#6b7c65" }}>
                  <div>{lead.email}</div>
                  <div style={{ fontSize: "12px", marginTop: "4px" }}>{lead.phone}</div>
                </td>
                <td style={{ padding: "16px 24px", fontSize: "13px", color: "#102440" }}>
                  {lead.sip_amount}
                </td>
                <td style={{ padding: "16px 24px" }}>
                  <select
                    value={lead.status}
                    onChange={(e) => updateLeadStatus(lead.id, e.target.value as Lead["status"])}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "6px",
                      border: "1px solid #e0e0e0",
                      fontSize: "12px",
                      background: "white",
                    }}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="meeting_scheduled">Meeting Scheduled</option>
                    <option value="meeting_completed">Meeting Completed</option>
                    <option value="accepted">Accepted</option>
                    <option value="denied">Denied</option>
                  </select>
                </td>
                <td style={{ padding: "16px 24px" }}>
                  {lead.meeting_booked ? (
                    <div>
                      <span
                        style={{
                          background: "#e8f5e2",
                          color: "#2d5a24",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          fontSize: "11px",
                          fontWeight: 600,
                        }}
                      >
                        Booked
                      </span>
                      {lead.meeting_time && (
                        <div style={{ fontSize: "11px", color: "#888", marginTop: "6px" }}>
                          {new Date(lead.meeting_time).toLocaleString(undefined, {
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <span
                      style={{
                        background: "#f5f5f5",
                        color: "#888",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "11px",
                        fontWeight: 600,
                      }}
                    >
                      Pending
                    </span>
                  )}
                </td>
                <td style={{ padding: "16px 24px", fontSize: "13px", color: "#6b7c65" }}>
                  {new Date(lead.created_at).toLocaleDateString()}
                </td>
                <td style={{ padding: "16px 24px" }}>
                  <button
                    onClick={() => setSelectedLead(lead)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#5b7811",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan={7} style={{ padding: "40px", textAlign: "center", color: "#888" }}>
                  No leads found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Drawer */}
      {selectedLead && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            justifyContent: "flex-end",
            background: "rgba(0,0,0,0.4)",
          }}
          onClick={() => setSelectedLead(null)}
        >
          <div
            style={{
              width: "400px",
              background: "white",
              height: "100%",
              padding: "32px",
              boxShadow: "-10px 0 40px rgba(0,0,0,0.1)",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "32px",
              }}
            >
              <h2
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "24px",
                  color: "#102440",
                }}
              >
                Lead Details
              </h2>
              <button
                onClick={() => setSelectedLead(null)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                  color: "#888",
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    color: "#888",
                    fontWeight: 600,
                  }}
                >
                  Name
                </label>
                <div style={{ fontSize: "16px", fontWeight: 600, color: "#102440" }}>
                  {selectedLead.name}
                </div>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    color: "#888",
                    fontWeight: 600,
                  }}
                >
                  Email
                </label>
                <div style={{ fontSize: "14px", color: "#102440" }}>
                  <a href={`mailto:${selectedLead.email}`} style={{ color: "#5b7811" }}>
                    {selectedLead.email}
                  </a>
                </div>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    color: "#888",
                    fontWeight: 600,
                  }}
                >
                  Phone
                </label>
                <div style={{ fontSize: "14px", color: "#102440" }}>{selectedLead.phone}</div>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    color: "#888",
                    fontWeight: 600,
                  }}
                >
                  SIP Capacity
                </label>
                <div style={{ fontSize: "14px", color: "#102440" }}>{selectedLead.sip_amount}</div>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    color: "#888",
                    fontWeight: 600,
                  }}
                >
                  Meeting Booked
                </label>
                <div style={{ fontSize: "14px", color: "#102440" }}>
                  {selectedLead.meeting_booked ? "Yes" : "No"}
                </div>
                {selectedLead.calendly_booking_link && (
                  <a
                    href={selectedLead.calendly_booking_link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: "12px", color: "#e07b2a" }}
                  >
                    View Booking
                  </a>
                )}
              </div>

              <div style={{ marginTop: "20px", borderTop: "1px solid #eee", paddingTop: "20px" }}>
                <label
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    color: "#888",
                    fontWeight: 600,
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Log Meeting Time
                </label>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input
                    type="datetime-local"
                    value={
                      selectedLead.meeting_time
                        ? new Date(
                            new Date(selectedLead.meeting_time).getTime() -
                              new Date().getTimezoneOffset() * 60000,
                          )
                            .toISOString()
                            .slice(0, 16)
                        : ""
                    }
                    onChange={(e) => handleSaveMeetingTime(selectedLead.id, e.target.value)}
                    style={{
                      flex: 1,
                      padding: "8px 12px",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "13px",
                    }}
                  />
                </div>
                <p style={{ fontSize: "11px", color: "#888", marginTop: "4px" }}>
                  Set the time of the Calendly meeting. Status will auto-complete after this time
                  passes.
                </p>
              </div>

              <div style={{ marginTop: "20px", borderTop: "1px solid #eee", paddingTop: "20px" }}>
                <label
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    color: "#888",
                    fontWeight: 600,
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Admin Notes
                </label>
                <textarea
                  value={selectedLead.notes || ""}
                  onChange={(e) => setSelectedLead({ ...selectedLead, notes: e.target.value })}
                  style={{
                    width: "100%",
                    height: "120px",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "14px",
                    resize: "vertical",
                  }}
                  placeholder="Add notes about this lead..."
                />
                <button
                  onClick={() => saveNotes(selectedLead.id, selectedLead.notes)}
                  className="submit-btn"
                  style={{ padding: "8px 16px", fontSize: "13px", marginTop: "12px" }}
                >
                  Save Notes
                </button>
              </div>

              <div style={{ marginTop: "32px" }}>
                <button
                  onClick={() => handleDeleteLead(selectedLead.id)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "1px solid #c0392b",
                    color: "#c0392b",
                    padding: "12px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#fdedec";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  Delete Lead Permanently
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
