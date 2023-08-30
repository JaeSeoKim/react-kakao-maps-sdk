import React, { useEffect, useImperativeHandle, useMemo } from "react"
import { useMap } from "../hooks/useMap"

export interface ZoomControlProps {
  /**
   * ZoomControl의 Position를 정의 한다.
   */
  position?: kakao.maps.ControlPosition
}

/**
 * 확대·축소 컨트롤을 생성한다.
 */
export const ZoomControl = React.forwardRef<
  kakao.maps.ZoomControl,
  ZoomControlProps
>(function ZoomControl({ position = kakao.maps.ControlPosition.RIGHT }, ref) {
  const map = useMap(`ZoomControl`)

  const ZoomControl = useMemo(() => {
    return new kakao.maps.ZoomControl()
  }, [])

  useImperativeHandle(ref, () => ZoomControl, [ZoomControl])

  useEffect(() => {
    map.addControl(ZoomControl, position)

    return () => {
      map.removeControl(ZoomControl)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, position])

  return null
})
