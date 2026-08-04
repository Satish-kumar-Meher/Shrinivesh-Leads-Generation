import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
function getEnv(key: string, fallback: string = "") {
  return process.env[key] || fallback;
}

const supabaseUrl = getEnv("VITE_SUPABASE_URL", "https://placeholder-project.supabase.co");
const supabaseServiceKey = getEnv(
  "SUPABASE_SERVICE_ROLE_KEY",
  getEnv("VITE_SUPABASE_ANON_KEY", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder"),
);

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const resend = new Resend(getEnv("RESEND_API_KEY", "re_placeholder"));

export const submitLeadFn = createServerFn({ method: "POST" })
  .validator(
    z.object({
      name: z.string(),
      phone: z.string(),
      email: z.string(),
      sip: z.string(),
      current: z.string(),
      risk_profile: z.string().optional().default("Standard"),
      fund: z.string().optional(),
    }),
  )
  .handler(async ({ data }) => {
    try {
      // 1. Save to Supabase
      const { data: lead, error } = await supabase
        .from("leads")
        .insert([
          {
            name: data.name,
            phone: data.phone,
            email: data.email,
            sip_amount: data.sip,
            risk_profile: data.risk_profile || "Standard",
            status: "new",
            meeting_booked: false,
          },
        ])
        .select()
        .single();

      if (error) {
        console.error("Supabase insert error:", error);
        throw new Error("Failed to save lead");
      }

      // 2. Send Email via Resend
      const adminEmail = getEnv("ADMIN_EMAIL", "admin@shrinivesh.com");
      const fromEmail = getEnv("RESEND_FROM_EMAIL", "onboarding@resend.dev");

      await resend.emails.send({
        from: `ShriNivesh Leads <${fromEmail}>`,
        to: adminEmail,
        subject: `New Lead: ${data.name}`,
        html: `
          <h2>New Lead Received</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>SIP Capacity:</strong> ${data.sip}</p>
          <p><strong>Current Investment:</strong> ${data.current}</p>
          <p><strong>Fund Interest:</strong> ${data.fund}</p>
        `,
      });

      return { success: true, leadId: lead?.id };
    } catch (err) {
      console.error("Error processing lead:", err);
      // We don't fail the client request entirely if email fails, but we should probably still return success if the DB insert worked
      return { success: false, error: "Internal server error" };
    }
  });

export const updateLeadMeetingStatusFn = createServerFn({ method: "POST" })
  .validator(
    z.object({
      leadId: z.string(),
      booked: z.boolean(),
      calendlyLink: z.string().optional(),
    }),
  )
  .handler(async ({ data }) => {
    const { error } = await supabase
      .from("leads")
      .update({
        meeting_booked: data.booked,
        calendly_booking_link: data.calendlyLink,
        status: data.booked ? "meeting_scheduled" : "new",
      })
      .eq("id", data.leadId);

    if (error) {
      console.error("Failed to update meeting status:", error);
      return { success: false };
    }
    return { success: true };
  });

export const updateLeadMeetingTimeFn = createServerFn({ method: "POST" })
  .validator(
    z.object({
      leadId: z.string(),
      meetingTime: z.string().nullable(),
    }),
  )
  .handler(async ({ data }) => {
    const { error } = await supabase
      .from("leads")
      .update({ meeting_time: data.meetingTime })
      .eq("id", data.leadId);

    if (error) {
      console.error("Failed to update meeting time:", error);
      return { success: false };
    }
    return { success: true };
  });

export const deleteLeadFn = createServerFn({ method: "POST" })
  .validator(
    z.object({
      leadId: z.string(),
    }),
  )
  .handler(async ({ data }) => {
    const { error } = await supabase.from("leads").delete().eq("id", data.leadId);

    if (error) {
      console.error("Failed to delete lead:", error);
      return { success: false };
    }
    return { success: true };
  });
