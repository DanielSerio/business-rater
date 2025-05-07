import { AppShell } from "@mantine/core";
import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { PublicHeader } from "../modules/Core/components/layout/PublicHeader";
import { ProtectedHeader } from "../modules/Core/components/layout/ProtectedHeader";

function isPublicRoute(path: string) {
  const publicRoutes = ["/", "/auth/login"];

  return publicRoutes.includes(path);
}

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();
    const isPublic = isPublicRoute(location.pathname);

    return (
      <AppShell>
        {!!isPublic ? <PublicHeader /> : <ProtectedHeader />}
        <Outlet />
      </AppShell>
    );
  },
});
