import { r as reactExports, W as jsxRuntimeExports } from "./server-B624L8BS.mjs";
import { u as useNavigate, t as toast } from "./router-Bk79mrfr.mjs";
import { s as supabase } from "./supabase-HtjIjxBe.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./index-k2CwRawH.mjs";
function AdminLogin() {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    supabase.auth.getSession().then(({
      data: {
        session
      }
    }) => {
      if (session) {
        navigate({
          to: "/admin"
        });
      }
    });
  }, [navigate]);
  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    const {
      error
    } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      toast.error(error.message);
      setLoading(false);
    } else {
      toast.success("Logged in successfully");
      navigate({
        to: "/admin"
      });
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    background: "white",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
    width: "100%",
    maxWidth: "400px"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "28px",
      marginBottom: "8px",
      color: "#102440"
    }, children: "Admin Login" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
      fontSize: "14px",
      color: "#6b7c65",
      marginBottom: "24px"
    }, children: "Sign in to manage leads and consultations." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", style: {
        marginBottom: 0
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Email Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "admin@shrinivesh.com", value: email, onChange: (e) => setEmail(e.target.value), required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", style: {
        marginBottom: 0
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", placeholder: "••••••••", value: password, onChange: (e) => setPassword(e.target.value), required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "submit-btn", disabled: loading, style: {
        marginTop: "8px"
      }, children: loading ? "Signing in..." : "Sign In" })
    ] })
  ] }) });
}
export {
  AdminLogin as component
};
