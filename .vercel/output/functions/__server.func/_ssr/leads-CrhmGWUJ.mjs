import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-Dg7Q6TuF.mjs";
import { R as Resend } from "../_libs/resend.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import fs from "fs";
import path from "path";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, b as booleanType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/postal-mime.mjs";
import "../_libs/standardwebhooks.mjs";
import "../_libs/stablelib__base64.mjs";
import "../_libs/fast-sha256.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
function getEnv(key, fallback = "") {
  try {
    const envPath = path.resolve(process.cwd(), ".env");
    if (fs.existsSync(envPath)) {
      const envFile = fs.readFileSync(envPath, "utf-8");
      const match = envFile.match(new RegExp(`^${key}=(.*)$`, "m"));
      if (match) return match[1].trim();
    }
  } catch (e) {
  }
  return process.env[key] || fallback;
}
const supabaseUrl = getEnv("VITE_SUPABASE_URL", "https://placeholder-project.supabase.co");
const supabaseServiceKey = getEnv("SUPABASE_SERVICE_ROLE_KEY", getEnv("VITE_SUPABASE_ANON_KEY", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder"));
const supabase = createClient(supabaseUrl, supabaseServiceKey);
const resend = new Resend(getEnv("RESEND_API_KEY", "re_placeholder"));
const submitLeadFn_createServerFn_handler = createServerRpc({
  id: "58246c96447369cd14bbdb3fc5ccdf09f644412dbd285dd9e86b921189e9988f",
  name: "submitLeadFn",
  filename: "src/actions/leads.ts"
}, (opts) => submitLeadFn.__executeServer(opts));
const submitLeadFn = createServerFn({
  method: "POST"
}).validator(objectType({
  name: stringType(),
  phone: stringType(),
  email: stringType(),
  sip: stringType(),
  current: stringType(),
  risk_profile: stringType().optional().default("Standard"),
  fund: stringType().optional()
})).handler(submitLeadFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const {
      data: lead,
      error
    } = await supabase.from("leads").insert([{
      name: data.name,
      phone: data.phone,
      email: data.email,
      sip_amount: data.sip,
      risk_profile: data.risk_profile || "Standard",
      status: "new",
      meeting_booked: false
    }]).select().single();
    if (error) {
      console.error("Supabase insert error:", error);
      throw new Error("Failed to save lead");
    }
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
        `
    });
    return {
      success: true,
      leadId: lead?.id
    };
  } catch (err) {
    console.error("Error processing lead:", err);
    return {
      success: false,
      error: "Internal server error"
    };
  }
});
const updateLeadMeetingStatusFn_createServerFn_handler = createServerRpc({
  id: "2346c51317ba750c0f51204e37e36732bec350fb086a2756d91ce75e1e92b34b",
  name: "updateLeadMeetingStatusFn",
  filename: "src/actions/leads.ts"
}, (opts) => updateLeadMeetingStatusFn.__executeServer(opts));
const updateLeadMeetingStatusFn = createServerFn({
  method: "POST"
}).validator(objectType({
  leadId: stringType(),
  booked: booleanType(),
  calendlyLink: stringType().optional()
})).handler(updateLeadMeetingStatusFn_createServerFn_handler, async ({
  data
}) => {
  const {
    error
  } = await supabase.from("leads").update({
    meeting_booked: data.booked,
    calendly_booking_link: data.calendlyLink,
    status: data.booked ? "meeting_scheduled" : "new"
  }).eq("id", data.leadId);
  if (error) {
    console.error("Failed to update meeting status:", error);
    return {
      success: false
    };
  }
  return {
    success: true
  };
});
const updateLeadMeetingTimeFn_createServerFn_handler = createServerRpc({
  id: "a3e45626a601ff6747ab859b35ede6c725f5e3da308fde360bba11b6e913c831",
  name: "updateLeadMeetingTimeFn",
  filename: "src/actions/leads.ts"
}, (opts) => updateLeadMeetingTimeFn.__executeServer(opts));
const updateLeadMeetingTimeFn = createServerFn({
  method: "POST"
}).validator(objectType({
  leadId: stringType(),
  meetingTime: stringType().nullable()
})).handler(updateLeadMeetingTimeFn_createServerFn_handler, async ({
  data
}) => {
  const {
    error
  } = await supabase.from("leads").update({
    meeting_time: data.meetingTime
  }).eq("id", data.leadId);
  if (error) {
    console.error("Failed to update meeting time:", error);
    return {
      success: false
    };
  }
  return {
    success: true
  };
});
const deleteLeadFn_createServerFn_handler = createServerRpc({
  id: "7106cd2d8ff83a816dfba4784a53b72a2abad6b04b9c25062ea19a1121e68d27",
  name: "deleteLeadFn",
  filename: "src/actions/leads.ts"
}, (opts) => deleteLeadFn.__executeServer(opts));
const deleteLeadFn = createServerFn({
  method: "POST"
}).validator(objectType({
  leadId: stringType()
})).handler(deleteLeadFn_createServerFn_handler, async ({
  data
}) => {
  const {
    error
  } = await supabase.from("leads").delete().eq("id", data.leadId);
  if (error) {
    console.error("Failed to delete lead:", error);
    return {
      success: false
    };
  }
  return {
    success: true
  };
});
export {
  deleteLeadFn_createServerFn_handler,
  submitLeadFn_createServerFn_handler,
  updateLeadMeetingStatusFn_createServerFn_handler,
  updateLeadMeetingTimeFn_createServerFn_handler
};
