import { useEffect, useLayoutEffect } from "react"

export default document ? useLayoutEffect : useEffect
