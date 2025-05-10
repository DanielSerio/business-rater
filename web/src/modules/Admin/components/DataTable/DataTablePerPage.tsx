import { Select, type SelectProps } from "@mantine/core";
import { DataTableTab } from "./DataTableTab";
import { FaArrowsUpDown } from "react-icons/fa6";

export interface DataTablePerPageProps extends SelectProps {}

export function DataTablePerPage({
  ...props
}: Omit<DataTablePerPageProps, "data">) {
  return (
    <DataTableTab targetIcon={FaArrowsUpDown}>
      <Select data={["1", "10", "25", "50", "100", "200", "400"]} {...props} />
    </DataTableTab>
  );
}
