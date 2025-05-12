import { z } from "zod";
import type { AdminTabName } from "../../../../../pages/admin/AdminDashboardPage";

/**
 * Takes an `AdminTabName` as input and returns the singular form of the name if it matches
 * specific cases.
 * @param {Name} name -  "businesses", "cities", "countries", or "states".
 * @returns string - sinular name
 */
function getSingular<Name extends AdminTabName>(name: Name) {
  switch (name) {
    case "businesses":
      return "business";
    case "cities":
      return "city";
    case "countries":
      return "country";
    case "states":
      return "state";
    default:
      return name;
  }
}

/**
 * Returns the maximum length of a code based on the provided `AdminTabName`.
 * @param {Name} name - Name
 * @returns null | number - max length
 */
function getCodeMaxLength<Name extends AdminTabName>(
  name: Name
): number | null {
  if (["countries", "states"].includes(name)) {
    return 3;
  }

  return null;
}
/**
 * Generates a validation schema for a given AdminTabName, including code and name fields with specific
 * length and transformation rules.
 * @param {Name} name - `AdminTabName`
 * @returns validator
 */
export function getValidator<Name extends AdminTabName>(name: Name) {
  const singularName = getSingular(name);
  const codeMaxLength = getCodeMaxLength(name);

  const nameField = z
    .string()
    .trim()
    .min(1, `${singularName} code is required`)
    .max(32, `${singularName} code too long (max 32)`)
    .transform((val) => val.replace(/\s{2,}/g, " "));

  if (codeMaxLength) {
    const codeField = z
      .string()
      .trim()
      .min(1, `${singularName} code is required`)
      .max(
        codeMaxLength,
        `${singularName} code too long (max ${codeMaxLength})`
      )
      .transform((val) => val.toUpperCase());

    if (name === "states") {
      return z.object({
        code: codeField,
        name: nameField,
        countryId: z.number().positive("Country is required").int(),
      });
    } else if (name === "cities") {
      return z.object({
        name: nameField,
        countryId: z.number().positive("Country is required").int(),
        provinceId: z.number().positive("State/Province is required").int(),
      });
    }

    return z.object({
      code: codeField,
      name: nameField,
    });
  }

  if (name === "cities") {
    return z.object({
      name: nameField,
      stateId: z.number().positive().int(),
    });
  }

  return z.object({
    name: nameField,
  });
}
