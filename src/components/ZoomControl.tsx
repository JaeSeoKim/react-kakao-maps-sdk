import React, { useEffect, useMemo } from "react"
import useMap from "../hooks/useMap"

export interface ZoomControlProps {
  /**
   * ZoomControl의 Position를 정의 한다.
   */
  position?: kakao.maps.ControlPosition
}

/**
 * 확대·축소 컨트롤을 생성한다.
 */
const ZoomControl: React.FC<ZoomControlProps> = ({
  position = kakao.maps.ControlPosition.RIGHT,
}) => {
  const map = useMap(`ZoomControl`)

  const ZoomControl = useMemo(() => {
    return new kakao.maps.ZoomControl()
  }, [])

  useEffect(() => {
    map.addControl(ZoomControl, position)

    return () => {
      map.removeControl(ZoomControl)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, position])

  return null
}

export default ZoomControl
