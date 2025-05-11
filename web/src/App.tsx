import { QueryClientProvider } from "@tanstack/react-query";
import { type PropsWithChildren } from "react";
import { RouterProvider } from "@tanstack/react-router";
import { QUERY_CLIENT, THEME } from "./const";
import { router } from "./main";
import { ApiClientProvider } from "./modules/Core/hooks/useApiClient";
import { AuthProvider } from "./modules/Core/hooks/useAuth";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

function AppProviders({ children }: PropsWithChildren) {
  return (
    <ApiClientProvider>
      <MantineProvider theme={THEME} defaultColorScheme="dark">
        <QueryClientProvider client={QUERY_CLIENT}>
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </MantineProvider>
    </ApiClientProvider>
  );
}

function App() {
  return (
    <>
      <ColorSchemeScript />
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>
    </>
  );
}

export default App;
