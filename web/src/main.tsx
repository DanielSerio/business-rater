import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/exports/global.scss";
import App from "./App.tsx";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { createRouter } from "@tanstack/react-router";

// Create a new router instance
export const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
