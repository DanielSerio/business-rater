import { AppShell } from "@mantine/core";
import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { PublicHeader } from "../modules/Core/components/layout/Header/PublicHeader";
import { ProtectedHeader } from "../modules/Core/components/layout/Header/ProtectedHeader";

function isPublicRoute(path: string) {
  const publicRoutes = ["/", "/auth/login"];

  return publicRoutes.includes(path);
}

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();
    const isPublic = isPublicRoute(location.pathname);

    return (
      <AppShell header={{ height: 60 }}>
        {!!isPublic ? <PublicHeader /> : <ProtectedHeader />}
        <Outlet />
      </AppShell>
    );
  },
});
