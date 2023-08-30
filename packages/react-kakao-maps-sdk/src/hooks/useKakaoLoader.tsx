import { useEffect, useMemo, useState } from "react"
import { Loader, LoaderOptions } from "../util/kakaoMapApiLoader"

/**
 * Kakao Map Api를 Loading 합니다.
 *
 * 해당 hook은 cleanup 시점에도 Kakao Map Api를 제거 하지 않고, 동일한 hook를 여러 위치에서 호출 하더라도 최초 한번만 Loading 됩니다.
 */
export const useKakaoLoader = (options: LoaderOptions) => {
  const [state, setState] = useState<{
    loading: boolean
    error: ErrorEvent | undefined
  }>({
    loading: true,
    error: undefined,
  })

  const loader = useMemo(
    () => new Loader(options),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(options)],
  )

  useEffect(() => {
    loader
      .load()
      .then(() =>
        setState({
          loading: false,
          error: undefined,
        }),
      )
      .catch((error) =>
        setState({
          loading: false,
          error: error,
        }),
      )
  }, [loader])

  return state
}
