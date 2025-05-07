import { createFileRoute } from "@tanstack/react-router";
import { UserDashboard } from "../pages/UserDashboardPage";
import { isLoggedInGuard } from "../guards/is-logged-in";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: isLoggedInGuard,
  component: RouteComponent,
});

function RouteComponent() {
  return <UserDashboard />;
}
