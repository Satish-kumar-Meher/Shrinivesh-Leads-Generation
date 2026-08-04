import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#faf7f2", color: "#102440" }}>
      <Outlet />
    </div>
  );
}
