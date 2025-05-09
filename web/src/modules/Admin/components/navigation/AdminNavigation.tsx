import { Tabs } from "@mantine/core";
import { ADMIN_TABS } from "./tabs";
import type { AdminTabName } from "../../../../pages/admin/AdminDashboardPage";
import type { Dispatch, SetStateAction } from "react";
import type { DataTableSearchQuery } from "../DataTable/types";

export function AdminNavigation({
  controller: [activeTab, setTab],
  searchQuery,
}: {
  controller: [AdminTabName, Dispatch<SetStateAction<AdminTabName>>];
  searchQuery: DataTableSearchQuery;
}) {
  return (
    <Tabs
      value={activeTab}
      onChange={(value: string | null) =>
        !!value ? setTab(value as AdminTabName) : null
      }
    >
      <Tabs.List>
        {ADMIN_TABS.map((tab) => (
          <Tabs.Tab value={tab.name} key={tab.name} rightSection={<tab.icon />}>
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {ADMIN_TABS.map((tab) => (
        <Tabs.Panel value={tab.name} key={tab.name}>
          {tab.name === activeTab && (
            <tab.component searchQuery={searchQuery} />
          )}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}
