import React, { useImperativeHandle, useLayoutEffect, useMemo } from "react"
import { useMap } from "../hooks/useMap"

export interface MapTypeControlProps {
  /**
   * MapTypeControl의 Position를 정의 한다.
   */
  position?:
    | kakao.maps.ControlPosition
    | keyof typeof kakao.maps.ControlPosition
}

/**
 * 일반 지도/하이브리드 간 지도 타입 전환 컨트롤을 생성한다.
 * 현재는 일반 지도/하이브리드 간 전환 컨트롤만 지원되며 다른 지도 타입을 제어하는 컨트롤이 필요할 경우에는 직접 구현해야 한다.
 */
export const MapTypeControl = React.forwardRef<
  kakao.maps.MapTypeControl,
  MapTypeControlProps
>(function MapTypeControl(
  { position: _position = kakao.maps.ControlPosition.TOPRIGHT },
  ref,
) {
  const map = useMap(`MapTypeControl`)
  const position =
    typeof _position === "string"
      ? kakao.maps.ControlPosition[_position]
      : _position

  const mapTypeControl = useMemo(() => {
    return new kakao.maps.MapTypeControl()
  }, [])

  useImperativeHandle(ref, () => mapTypeControl, [mapTypeControl])

  useLayoutEffect(() => {
    map.addControl(mapTypeControl, position)

    return () => {
      map.removeControl(position)
    }
  }, [map, mapTypeControl, position])

  return null
})
