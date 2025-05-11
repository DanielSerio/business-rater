import { Modal } from "@mantine/core";
import type { AdminTabName } from "../../../../pages/admin/AdminDashboardPage";
import { CreateBusinessForm } from "./forms/CreateBusinessForm";
import { CreateCityForm } from "./forms/CreateCityForm";
import { CreateCountryForm } from "./forms/CreateCountryForm";
import { CreateStateForm } from "./forms/CreateStateForm";
import { useApiClient } from "../../../Core/hooks/useApiClient";

/**
 * HOF that acts as a "form router" for the create modal.
 */
export function DataTableCreateForm({
  contextName,
  closeModal,
}: {
  contextName: AdminTabName;
  closeModal: () => void;
}) {
  const http = useApiClient();

  switch (contextName) {
    case "businesses":
      return <CreateBusinessForm http={http} closeModal={closeModal} />;
    case "cities":
      return <CreateCityForm http={http} closeModal={closeModal} />;
    case "countries":
      return <CreateCountryForm http={http} closeModal={closeModal} />;
    case "states":
      return <CreateStateForm http={http} closeModal={closeModal} />;
    default:
      return <>An error occurred</>;
  }
}

export interface DataTableCreateFormProps<Name extends AdminTabName> {
  contextName: Name | null;
  closeModal: () => void;
}

export function DataTableCreateModal<Name extends AdminTabName>({
  contextName,
  closeModal,
}: DataTableCreateFormProps<Name>) {
  if (!contextName) {
    return null;
  }

  return (
    <Modal
      opened={!!contextName}
      title={`${contextName} » create`}
      styles={{
        header: {
          textTransform: "capitalize",
        },
      }}
      centered
      onClose={closeModal}
    >
      <Modal.Body>
        <DataTableCreateForm
          contextName={contextName}
          closeModal={closeModal}
        />
      </Modal.Body>
    </Modal>
  );
}
