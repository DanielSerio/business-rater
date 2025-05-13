import { Drawer } from "@mantine/core";
import type { AdminTabName } from "../../../../pages/admin/AdminDashboardPage";
import type { DataTableEntity } from "./types";
import type { UseFormReturnType } from "@mantine/form";

export interface DataTableRecordDetailsDrawerProps<Name extends AdminTabName> {
  contextName: Name | null;
  record: Readonly<DataTableEntity<Name>> | null;
  updateForm: UseFormReturnType<Partial<DataTableEntity<Name>>>;
  deleteForm: UseFormReturnType<Partial<DataTableEntity<Name>>>;
  onClose: () => void;
}

export function DataTableRecordDetailsDrawer<Name extends AdminTabName>({
  record,
  onClose,
}: DataTableRecordDetailsDrawerProps<Name>) {
  return (
    <Drawer opened={!!record} onClose={onClose}>
      <h1>Drawer</h1>
    </Drawer>
  );
}
