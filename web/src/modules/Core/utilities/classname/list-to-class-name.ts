type NestedArray<T> = T[] | NestedArray<T>[];

/**
 * formats a deeply nested array of values into a `className` string
 * @param values - {@link NestedArray<T>}
 * @returns The `listToClassName` function returns a string or undefined.
 */
export function listToClassName(...values: NestedArray<string | null | undefined>): string | undefined {
  /**
   * Removes extra whitespace from a given class name string.
   */
  function cleanClassName(className?: string | null): string | null {
    if (!className || className.trim() === '') {
      return null;
    }

    let modified = `${className}`.trim();

    if (modified.indexOf(' ')) {
      modified = modified.replace(/\s+/g, ' ');
    }

    return modified;
  }

  const flatValues = values.flat() as (string | null | undefined)[];

  const filtered = flatValues
    .map(cleanClassName)
    .filter((val) => typeof val === 'string');

  if (filtered.length === 0) {
    return undefined;
  }

  return filtered.join(' ');
}