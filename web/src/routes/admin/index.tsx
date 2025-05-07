import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboardPage } from "../../pages/admin/AdminDashboardPage";
import { isAdminGuard } from "../../guards/is-admin";

export const Route = createFileRoute("/admin/")({
  beforeLoad: isAdminGuard,
  component: RouteComponent,
});

function RouteComponent() {
  return <AdminDashboardPage />;
}
