import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboardPage } from "../../pages/admin/AdminDashboardPage";

export const Route = createFileRoute("/admin/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AdminDashboardPage />;
}
