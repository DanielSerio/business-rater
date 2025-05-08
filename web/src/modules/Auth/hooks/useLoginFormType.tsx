import { useEffect, useState } from "react";

/**
 * Manages the type of a login form with options for login or register.
 * @param {"login" | "register"} [defaultValue] - The `defaultValue` parameter: "login" | "register"
 */
export function useLoginFormType(defaultValue?: "login" | "register") {
  const [type, _setType] = useState<"login" | "register">(
    defaultValue ?? "login"
  );

  // reset the value if the params change
  useEffect(() => {
    if (defaultValue) {
      _setType(defaultValue);
    }
  }, [defaultValue]);

  const methods = {
    setType: _setType,
    toggle: () => _setType((t) => (t === "login" ? "register" : "login")),
  };

  return [type, methods] as const;
}
