import { AppShellMain } from "@mantine/core";
import { useSearch } from "@tanstack/react-router";
import { useState } from "react";

import type { ADMIN_TABS } from "../../modules/Admin/components/navigation/tabs";
import { AdminNavigation } from "../../modules/Admin/components/navigation/AdminNavigation";

export type AdminTabName = (typeof ADMIN_TABS)[number]["name"];

function isValidTabName(name: string) {
  const validTabs: AdminTabName[] = [
    "businesses",
    "cities",
    "countries",
    "states",
  ];

  return validTabs.includes(name as AdminTabName);
}

export function AdminDashboardPage() {
  const query = useSearch({
    from: "/admin/",
  });
  const tabController = useState<AdminTabName>(
    isValidTabName(query.tab) ? query.tab : "businesses"
  );

  return (
    <AppShellMain>
      <AdminNavigation
        controller={tabController}
        searchQuery={{
          limit: query.limit,
          offset: query.offset,
          sort: query.sort,
          filter: query.filter,
        }}
      />
    </AppShellMain>
  );
}
