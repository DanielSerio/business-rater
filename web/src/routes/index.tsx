import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "../pages/LandingPage";
import { isLoggedOutGuard } from "../guards/is-logged-out";

export const Route = createFileRoute("/")({
  beforeLoad: isLoggedOutGuard,
  component: Index,
});

function Index() {
  return <LandingPage />;
}
