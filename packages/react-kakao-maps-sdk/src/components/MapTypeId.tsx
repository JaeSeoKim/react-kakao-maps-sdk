import React, { useEffect } from "react"
import { useMap } from "../hooks/useMap"

export interface MapTypeIdProps {
  /**
   * MapTypeId를 정의 한다.
   */
  type: kakao.maps.MapTypeId | keyof typeof kakao.maps.MapTypeId
}

/**
 * 추가적으로 보이고 싶은 지도 타입을 추가 할 때 사용한다.
 */
export const MapTypeId: React.FC<MapTypeIdProps> = ({ type: _type }) => {
  const map = useMap(`MapTypeId`)
  const type = typeof _type === "string" ? kakao.maps.MapTypeId[_type] : _type

  useEffect(() => {
    map.addOverlayMapTypeId(type)

    return () => {
      map.removeOverlayMapTypeId(type)
    }
  }, [map, type])

  return null
}
