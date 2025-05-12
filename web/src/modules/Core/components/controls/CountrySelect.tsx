import { Combobox, TextInput, useCombobox } from "@mantine/core";
import {
  forwardRef,
  useEffect,
  useState,
  type ForwardedRef,
  type ReactNode,
} from "react";
import { useApiClient } from "../../hooks/useApiClient";
import { useDataTableQuery } from "../../../Admin/components/DataTable/hooks/useDataTableQuery";
import type { Country } from "../../../../types/location.types";
import { getSimilarity } from "../../../../utilities/string";

function CountrySelectComponent(
  {
    defaultValue,
    error,
    onValueChange,
    onBlur,
  }: {
    defaultValue?: number | null;
    error?: ReactNode;
    onValueChange?: (newValue: Country | null) => void;
    onBlur?: () => void;
  },
  ref?: ForwardedRef<HTMLInputElement>
) {
  const http = useApiClient();
  const combobox = useCombobox();
  const [filterText, setFilterText] = useState("");
  const [value, setValue] = useState<Country | null>(null);
  const [{ query }] = useDataTableQuery<"countries">({
    http,
    entity: "countries",
    searchQuery: {
      limit: "6",
      offset: "0",
      filter: JSON.stringify({
        search: filterText,
      }),
    },
  });

  useEffect(() => {
    if (onValueChange) {
      onValueChange(value);
    }
  }, [value]);

  const data = query.data ?? [];

  const getSimilarities = (item: Country) => {
    const codeSimilarity = getSimilarity(
      `${item.code}`.toLowerCase(),
      loweredSearch
    );
    const nameSimilarity = getSimilarity(
      `${item.name}`.toLowerCase(),
      loweredSearch
    );

    return {
      code: codeSimilarity,
      name: nameSimilarity,
    };
  };

  const shouldFilterOptions = filterText.length;
  const loweredSearch = `${filterText}`;
  const filteredOptions = shouldFilterOptions
    ? data.filter((item) => {
        const { code, name } = getSimilarities(item);

        return code > 0.5 || name > 0.5;
      })
    : data;

  const sortedOptions = filteredOptions.toSorted((a: Country, b: Country) => {
    const aSimilarities = getSimilarities(a);
    const bSimilarities = getSimilarities(b);

    return (
      (aSimilarities.code | aSimilarities.name) -
      (bSimilarities.code + bSimilarities.name)
    );
  });

  const getOptionById = (id: number) =>
    sortedOptions.find((opt) => opt.id === id) ?? null;

  useEffect(() => {
    if (defaultValue) {
      const found = getOptionById(defaultValue);

      setValue(found);
    }
  }, []);

  const options = sortedOptions.map((item) => (
    <Combobox.Option value={`${item.id}`} key={`${item.id}`}>
      {item.code} - {item.name}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(optionValue) => {
        const id = +optionValue;
        const newValue = getOptionById(id);

        if (newValue) {
          setValue(newValue);
          setFilterText(`${newValue.code} - ${newValue.name}`);
        } else {
          setValue(null);
          setFilterText("");
        }

        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <TextInput
          label="Country"
          required
          ref={ref}
          error={error}
          value={filterText}
          onChange={(ev) => {
            const { value: val } = ev.target as HTMLInputElement;

            setFilterText(val);
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();

            if (!value) {
              setFilterText("");
            } else if (!filterText) {
              setValue(null);
            }

            if (onBlur) {
              onBlur();
            }
          }}
        />
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length === 0 ? (
            <Combobox.Empty>No countries found</Combobox.Empty>
          ) : (
            options
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

export const CountrySelect = forwardRef(CountrySelectComponent);
