import { r as reactExports, W as jsxRuntimeExports } from "./server-B624L8BS.mjs";
import { u as useNavigate, t as toast } from "./router-Bk79mrfr.mjs";
import { s as supabase } from "./supabase-HtjIjxBe.mjs";
import { a as updateLeadMeetingTimeFn, d as deleteLeadFn } from "./leads-Bnvaf6H1.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./index-k2CwRawH.mjs";
import "./types-DLNE6-nO.mjs";
function AdminDashboard() {
  const navigate = useNavigate();
  const [leads, setLeads] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [selectedLead, setSelectedLead] = reactExports.useState(null);
  reactExports.useEffect(() => {
    checkAuth();
    fetchLeads();
  }, []);
  async function checkAuth() {
    const {
      data: {
        session
      }
    } = await supabase.auth.getSession();
    if (!session) {
      navigate({
        to: "/admin/login"
      });
    }
  }
  async function fetchLeads() {
    const {
      data,
      error
    } = await supabase.from("leads").select("*").order("created_at", {
      ascending: false
    });
    if (error) {
      toast.error("Failed to load leads");
      console.error(error);
    } else {
      let loadedLeads = data || [];
      let needsUpdate = false;
      const now = /* @__PURE__ */ new Date();
      loadedLeads = loadedLeads.map((lead) => {
        if (lead.status === "meeting_scheduled" && lead.meeting_time && new Date(lead.meeting_time) < now) {
          needsUpdate = true;
          supabase.from("leads").update({
            status: "meeting_completed"
          }).eq("id", lead.id).then();
          return {
            ...lead,
            status: "meeting_completed"
          };
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
  async function updateLeadStatus(id, status) {
    const {
      error
    } = await supabase.from("leads").update({
      status
    }).eq("id", id);
    if (error) {
      toast.error("Failed to update status");
    } else {
      toast.success("Status updated");
      setLeads(leads.map((l) => l.id === id ? {
        ...l,
        status
      } : l));
      if (selectedLead?.id === id) {
        setSelectedLead({
          ...selectedLead,
          status
        });
      }
    }
  }
  async function saveNotes(id, notes) {
    const {
      error
    } = await supabase.from("leads").update({
      notes
    }).eq("id", id);
    if (error) {
      toast.error("Failed to save notes");
    } else {
      toast.success("Notes saved");
      setLeads(leads.map((l) => l.id === id ? {
        ...l,
        notes
      } : l));
    }
  }
  async function handleDeleteLead(id) {
    if (!confirm("Are you sure you want to completely delete this lead? This cannot be undone.")) return;
    const res = await deleteLeadFn({
      data: {
        leadId: id
      }
    });
    if (res.success) {
      toast.success("Lead deleted successfully");
      setLeads(leads.filter((l) => l.id !== id));
      setSelectedLead(null);
    } else {
      toast.error("Failed to delete lead");
    }
  }
  async function handleSaveMeetingTime(id, time) {
    const res = await updateLeadMeetingTimeFn({
      data: {
        leadId: id,
        meetingTime: time ? new Date(time).toISOString() : null
      }
    });
    if (res.success) {
      toast.success("Meeting time saved");
      setLeads(leads.map((l) => l.id === id ? {
        ...l,
        meeting_time: time ? new Date(time).toISOString() : null
      } : l));
      if (selectedLead?.id === id) {
        setSelectedLead({
          ...selectedLead,
          meeting_time: time ? new Date(time).toISOString() : null
        });
      }
      setTimeout(fetchLeads, 500);
    } else {
      toast.error("Failed to save meeting time");
    }
  }
  async function handleLogout() {
    await supabase.auth.signOut();
    navigate({
      to: "/admin/login"
    });
  }
  const stats = {
    total: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    accepted: leads.filter((l) => l.status === "accepted").length,
    denied: leads.filter((l) => l.status === "denied").length,
    meetings: leads.filter((l) => l.meeting_booked).length
  };
  const hour = (/* @__PURE__ */ new Date()).getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    padding: 40
  }, children: "Loading dashboard..." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    padding: "40px 80px",
    maxWidth: "1400px",
    margin: "0 auto"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "32px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: {
        fontFamily: '"Playfair Display", serif',
        fontSize: "32px",
        color: "#102440"
      }, children: [
        greeting,
        ", Ashish"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleLogout, className: "btn-ghost", style: {
        padding: "8px 16px",
        fontSize: "13px"
      }, children: "Sign Out" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "20px",
      marginBottom: "40px"
    }, children: [{
      label: "Total Leads",
      value: stats.total,
      color: "#102440"
    }, {
      label: "New Leads",
      value: stats.new,
      color: "#e07b2a"
    }, {
      label: "Meetings Scheduled",
      value: stats.meetings,
      color: "#5b7811"
    }, {
      label: "Contacted",
      value: stats.contacted,
      color: "#6b7c65"
    }, {
      label: "Accepted",
      value: stats.accepted,
      color: "#2d5a24"
    }, {
      label: "Denied",
      value: stats.denied,
      color: "#c0392b"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      background: "white",
      padding: "24px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.04)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "#6b7c65",
        marginBottom: "8px",
        fontWeight: 600
      }, children: s.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontFamily: '"Playfair Display", serif',
        fontSize: "32px",
        fontWeight: 700,
        color: s.color
      }, children: s.value })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      background: "white",
      borderRadius: "16px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      overflow: "hidden"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { style: {
      width: "100%",
      borderCollapse: "collapse",
      textAlign: "left"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { style: {
        background: "#f8f9fa",
        borderBottom: "1px solid #eaeaea"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
          padding: "16px 24px",
          fontSize: "12px",
          color: "#6b7c65",
          fontWeight: 600
        }, children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
          padding: "16px 24px",
          fontSize: "12px",
          color: "#6b7c65",
          fontWeight: 600
        }, children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
          padding: "16px 24px",
          fontSize: "12px",
          color: "#6b7c65",
          fontWeight: 600
        }, children: "SIP Capacity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
          padding: "16px 24px",
          fontSize: "12px",
          color: "#6b7c65",
          fontWeight: 600
        }, children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
          padding: "16px 24px",
          fontSize: "12px",
          color: "#6b7c65",
          fontWeight: 600
        }, children: "Meeting" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
          padding: "16px 24px",
          fontSize: "12px",
          color: "#6b7c65",
          fontWeight: 600
        }, children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
          padding: "16px 24px",
          fontSize: "12px",
          color: "#6b7c65",
          fontWeight: 600
        }, children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        leads.map((lead) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { style: {
          borderBottom: "1px solid #f0f0f0",
          transition: "background 0.2s"
        }, className: "table-row-hover", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
            padding: "16px 24px",
            fontSize: "14px",
            fontWeight: 600,
            color: "#102440"
          }, children: lead.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { style: {
            padding: "16px 24px",
            fontSize: "13px",
            color: "#6b7c65"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: lead.email }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              fontSize: "12px",
              marginTop: "4px"
            }, children: lead.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
            padding: "16px 24px",
            fontSize: "13px",
            color: "#102440"
          }, children: lead.sip_amount }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
            padding: "16px 24px"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: lead.status, onChange: (e) => updateLeadStatus(lead.id, e.target.value), style: {
            padding: "6px 12px",
            borderRadius: "6px",
            border: "1px solid #e0e0e0",
            fontSize: "12px",
            background: "white"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "new", children: "New" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "contacted", children: "Contacted" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "meeting_scheduled", children: "Meeting Scheduled" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "meeting_completed", children: "Meeting Completed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "accepted", children: "Accepted" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "denied", children: "Denied" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
            padding: "16px 24px"
          }, children: lead.meeting_booked ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              background: "#e8f5e2",
              color: "#2d5a24",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "11px",
              fontWeight: 600
            }, children: "Booked" }),
            lead.meeting_time && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              fontSize: "11px",
              color: "#888",
              marginTop: "6px"
            }, children: new Date(lead.meeting_time).toLocaleString(void 0, {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit"
            }) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            background: "#f5f5f5",
            color: "#888",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "11px",
            fontWeight: 600
          }, children: "Pending" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
            padding: "16px 24px",
            fontSize: "13px",
            color: "#6b7c65"
          }, children: new Date(lead.created_at).toLocaleDateString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
            padding: "16px 24px"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedLead(lead), style: {
            background: "none",
            border: "none",
            color: "#5b7811",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            textDecoration: "underline"
          }, children: "View Details" }) })
        ] }, lead.id)),
        leads.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, style: {
          padding: "40px",
          textAlign: "center",
          color: "#888"
        }, children: "No leads found." }) })
      ] })
    ] }) }),
    selectedLead && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      display: "flex",
      justifyContent: "flex-end",
      background: "rgba(0,0,0,0.4)"
    }, onClick: () => setSelectedLead(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      width: "400px",
      background: "white",
      height: "100%",
      padding: "32px",
      boxShadow: "-10px 0 40px rgba(0,0,0,0.1)",
      overflowY: "auto"
    }, onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "32px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontFamily: '"Playfair Display", serif',
          fontSize: "24px",
          color: "#102440"
        }, children: "Lead Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedLead(null), style: {
          background: "none",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
          color: "#888"
        }, children: "✕" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: {
            fontSize: "11px",
            textTransform: "uppercase",
            color: "#888",
            fontWeight: 600
          }, children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: "16px",
            fontWeight: 600,
            color: "#102440"
          }, children: selectedLead.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: {
            fontSize: "11px",
            textTransform: "uppercase",
            color: "#888",
            fontWeight: 600
          }, children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: "14px",
            color: "#102440"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${selectedLead.email}`, style: {
            color: "#5b7811"
          }, children: selectedLead.email }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: {
            fontSize: "11px",
            textTransform: "uppercase",
            color: "#888",
            fontWeight: 600
          }, children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: "14px",
            color: "#102440"
          }, children: selectedLead.phone })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: {
            fontSize: "11px",
            textTransform: "uppercase",
            color: "#888",
            fontWeight: 600
          }, children: "SIP Capacity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: "14px",
            color: "#102440"
          }, children: selectedLead.sip_amount })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: {
            fontSize: "11px",
            textTransform: "uppercase",
            color: "#888",
            fontWeight: 600
          }, children: "Meeting Booked" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: "14px",
            color: "#102440"
          }, children: selectedLead.meeting_booked ? "Yes" : "No" }),
          selectedLead.calendly_booking_link && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: selectedLead.calendly_booking_link, target: "_blank", rel: "noreferrer", style: {
            fontSize: "12px",
            color: "#e07b2a"
          }, children: "View Booking" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          marginTop: "20px",
          borderTop: "1px solid #eee",
          paddingTop: "20px"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: {
            fontSize: "11px",
            textTransform: "uppercase",
            color: "#888",
            fontWeight: 600,
            display: "block",
            marginBottom: "8px"
          }, children: "Log Meeting Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            display: "flex",
            gap: "8px"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "datetime-local", value: selectedLead.meeting_time ? new Date(new Date(selectedLead.meeting_time).getTime() - (/* @__PURE__ */ new Date()).getTimezoneOffset() * 6e4).toISOString().slice(0, 16) : "", onChange: (e) => handleSaveMeetingTime(selectedLead.id, e.target.value), style: {
            flex: 1,
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "13px"
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: "11px",
            color: "#888",
            marginTop: "4px"
          }, children: "Set the time of the Calendly meeting. Status will auto-complete after this time passes." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          marginTop: "20px",
          borderTop: "1px solid #eee",
          paddingTop: "20px"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: {
            fontSize: "11px",
            textTransform: "uppercase",
            color: "#888",
            fontWeight: 600,
            display: "block",
            marginBottom: "8px"
          }, children: "Admin Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: selectedLead.notes || "", onChange: (e) => setSelectedLead({
            ...selectedLead,
            notes: e.target.value
          }), style: {
            width: "100%",
            height: "120px",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "14px",
            resize: "vertical"
          }, placeholder: "Add notes about this lead..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => saveNotes(selectedLead.id, selectedLead.notes), className: "submit-btn", style: {
            padding: "8px 16px",
            fontSize: "13px",
            marginTop: "12px"
          }, children: "Save Notes" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          marginTop: "32px"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDeleteLead(selectedLead.id), style: {
          width: "100%",
          background: "transparent",
          border: "1px solid #c0392b",
          color: "#c0392b",
          padding: "12px",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.2s"
        }, onMouseOver: (e) => {
          e.currentTarget.style.background = "#fdedec";
        }, onMouseOut: (e) => {
          e.currentTarget.style.background = "transparent";
        }, children: "Delete Lead Permanently" }) })
      ] })
    ] }) })
  ] });
}
export {
  AdminDashboard as component
};
