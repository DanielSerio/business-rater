import { createFileRoute } from "@tanstack/react-router";
import { UserDashboard } from "../pages/UserDashboard";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return <UserDashboard />;
}
