import { Resend } from "resend";
try {
  const resend = new Resend("re_placeholder");
  console.log("Resend init ok");
} catch(e) {
  console.error("Resend init error:", e);
}
