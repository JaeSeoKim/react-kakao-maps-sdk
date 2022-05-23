import { useEffect, useLayoutEffect } from "react"

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" && typeof document !== "undefined"
    ? useLayoutEffect
    : useEffect

export default useIsomorphicLayoutEffect
