import { MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { QUERY_CLIENT, THEME } from "./const";

import type { PropsWithChildren } from "react";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./main";

function AppProviders({ children }: PropsWithChildren) {
  return (
    <MantineProvider theme={THEME}>
      <QueryClientProvider client={QUERY_CLIENT}>
        {children}
      </QueryClientProvider>
    </MantineProvider>
  );
}

function App() {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
}

export default App;
