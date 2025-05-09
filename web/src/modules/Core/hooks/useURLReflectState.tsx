import { useRouterState } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";

export interface RawObject {
  [k: string]: any;
}

function createSearchParams<State extends RawObject>(state?: State | null) {
  if (!state) {
    return null;
  }

  return new URLSearchParams(state);
}

function getExistingSearchParams(url?: string): URLSearchParams | null {
  if (!url) {
    return null;
  }

  return new URLSearchParams(url);
}

function mergeSearchParams(params1: URLSearchParams, params2: URLSearchParams) {
  const less = params1.size > params2.size ? params2 : params1;
  const more = params1 === less ? params2 : params1;

  for (const [key, value] of less.entries()) {
    if (params2.has(key) && params1.has(key) && params1 === more) {
      more.set(key, params2.get(key) ?? "");
    } else {
      if (
        more.get(key) &&
        (value === null || value == undefined || value === "")
      ) {
        more.delete(key);
      } else if (!more.get(key)) {
        more.set(key, value);
      }
    }
  }

  return more;
}

export function useUrlReflectState<State extends RawObject>(
  state?: State | null,
  deps?: any[]
) {
  const routerState = useRouterState();

  const serial = JSON.stringify(state);

  useEffect(() => {
    const siteUrl =
      routerState.resolvedLocation?.href || routerState.location.href;
    const url = new URL(`${window.location.origin}${siteUrl}`);

    const existingSearchParams = getExistingSearchParams(url.search);
    const createdSearchParams = createSearchParams(state);
    const origin = `${siteUrl}`.split("?")[0];

    console.info("State changed", serial, {
      existingSearchParams: existingSearchParams?.toString(),
      createdSearchParams: createdSearchParams?.toString(),
    });

    if (existingSearchParams && createdSearchParams) {
      const merged = mergeSearchParams(
        existingSearchParams,
        createdSearchParams
      );

      const newUrl = `${origin}?${merged.toString()}`;

      if (newUrl !== siteUrl) {
        console.log("query merged: ", newUrl);
        window.history.replaceState({}, "", newUrl);
      }
    } else if (createdSearchParams?.toString()) {
      const newUrl = `${origin}?${createdSearchParams.toString()}`;

      if (newUrl !== siteUrl) {
        console.log("query created: ", createdSearchParams);
        window.history.replaceState({}, "", newUrl);
      }
    } else if (existingSearchParams?.toString()) {
      const newUrl = `${origin}?${existingSearchParams.toString()}`;

      if (newUrl !== siteUrl) {
        console.log("query existing: ", existingSearchParams);
        window.history.replaceState({}, "", newUrl);
      }
    }
  }, [serial, ...(deps ?? [])]);
}
