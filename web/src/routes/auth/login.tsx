import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "../../pages/auth/LoginPage";
import { isLoggedOutGuard } from "../../guards/is-logged-out";

export const Route = createFileRoute("/auth/login")({
  beforeLoad: isLoggedOutGuard,
  component: RouteComponent,
});

function RouteComponent() {
  return <LoginPage />;
}
