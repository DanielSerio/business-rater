import { useCallback, useState } from "react";
import type { AdminTabName } from "../../../../../pages/admin/AdminDashboardPage";
import type { DataTableEntity } from "../types";
import { useForm } from "@mantine/form";

interface FormDetails<Name extends AdminTabName> {
  description?: string;
  exclude?: (keyof DataTableEntity<Name>)[];
  retype?: keyof DataTableEntity<Name>;
}

export interface UseSelectedRecordParams<Name extends AdminTabName> {
  update: FormDetails<Name>;
  delete: FormDetails<Name>;
}

/**
 * Creates a shallow copy of an object while omitting specified keys.
 * @param {T} obj - The `obj` parameter is an object of type `T`, where `T` is a generic type that
 * extends `object`. This means `obj` can be any object type.
 * @param {(keyof T)[]} keysToOmit - The `keysToOmit` parameter is an array of keys that you want to
 * omit from the object `obj`. These keys should be of the same type as the keys of the object `obj`.
 * @returns object - the partial object
 */
function omitKeys<T extends object>(obj: T, keysToOmit: (keyof T)[]) {
  const { ...newObj } = obj; // creates a shallow copy using spread

  keysToOmit.forEach((key) => delete newObj[key]); // delete specified keys from copy

  return newObj;
}

export function useSelectedRecord<Name extends AdminTabName>({
  update,
  delete: deleteDetails,
}: UseSelectedRecordParams<Name>) {
  const [original, _setOriginal] = useState<Readonly<
    DataTableEntity<Name>
  > | null>(null);
  const updateForm = useForm<Partial<DataTableEntity<Name>>>({
    initialValues: {},
  });
  const deleteForm = useForm<Partial<DataTableEntity<Name>>>({
    initialValues: {},
  });

  const openRecord = useCallback(
    (record: DataTableEntity<Name>) => {
      _setOriginal(Object.freeze(record));

      const updateProps = Object.assign(
        {},
        update.exclude ? omitKeys({ ...record }, update.exclude) : { ...record }
      );
      const deleteProps = Object.assign(
        {},
        deleteDetails.exclude
          ? omitKeys({ ...record }, deleteDetails.exclude)
          : deleteDetails.retype
            ? { [deleteDetails.retype]: "" }
            : { ...record }
      ) as Partial<DataTableEntity<Name>>;

      updateForm.setValues({
        ...updateProps,
      });

      deleteForm.setValues({
        ...deleteProps,
      });
    },
    [_setOriginal, updateForm, deleteForm, deleteDetails, update]
  );

  const closeRecord = useCallback(() => {
    _setOriginal(null);
    updateForm.reset();
    deleteForm.reset();
  }, [_setOriginal, updateForm, deleteForm]);

  return [
    {
      original,
      updateForm,
      deleteForm,
    },
    { openRecord, closeRecord },
  ] as const;
}
