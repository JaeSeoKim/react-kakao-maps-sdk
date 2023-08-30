import { useEffect, useLayoutEffect } from "react"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" && typeof document !== "undefined"
    ? useLayoutEffect
    : useEffect
