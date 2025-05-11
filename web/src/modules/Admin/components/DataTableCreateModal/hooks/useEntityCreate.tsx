import { useDisclosure } from "@mantine/hooks";
import type { AdminTabName } from "../../../../../pages/admin/AdminDashboardPage";
import { useCallback, useState } from "react";

export function useEntityCreate<Name extends AdminTabName>() {
  const [contextName, _setContextName] = useState<Name | null>(null);
  const [modalIsOpen, { open: _openModal, close: _closeModal }] =
    useDisclosure();

  const closeModal = useCallback(() => {
    _setContextName(null);
    _closeModal();
  }, [_closeModal, _setContextName]);

  const openModal = useCallback(
    (name: Name) => {
      _setContextName(name);
      _openModal();
    },
    [_openModal, _setContextName]
  );

  return [
    {
      contextName,
      modalIsOpen,
    },
    {
      openModal,
      closeModal,
    },
  ] as const;
}
