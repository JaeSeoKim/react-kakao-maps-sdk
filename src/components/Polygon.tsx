import React, { useEffect, useMemo } from "react"
import useKakaoEvent from "../hooks/useKakaoEvent"
import useMap from "../hooks/useMap"

interface LatLng {
  lat: number
  lng: number
}

export interface PolygonProps {
  path: LatLng[] | LatLng[][]
  /**
   * #xxxxxx 형태의 채움 색 (기본값: ‘#F10000’)
   */
  fillColor?: string
  /**
   * 채움 불투명도 (0-1) (기본값: 0)
   */
  fillOpacity?: number
  /**
   * 픽셀 단위의 선 두께 (기본값: 3)
   */
  strokeWeight?: number
  /**
   * #xxxxxx 형태의 선 색 (기본값: ‘#F10000’)
   */
  strokeColor?: string
  /**
   * 선 불투명도 (0-1) (기본값: 0.6)
   */
  strokeOpacity?: number
  /**
   * 선 스타일 (기본값: ‘solid’)
   */
  strokeStyle?: kakao.maps.StrokeStyles
  /**
   * 선의 z-index 속성 값
   */
  zIndex?: number

  /**
   * 마우스 커서를 올리면 발생한다.
   */
  onMouseover?: (
    target: kakao.maps.Polygon,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void
  /**
   * 마우스 커서가 벗어나면 발생한다.
   */
  onMouseout?: (
    target: kakao.maps.Polygon,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void
  /**
   * 마우스를 움직이면 발생한다.
   */
  onMousemove?: (
    target: kakao.maps.Polygon,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void
  /**
   * 마우스 버튼을 누르면 발생한다.
   */
  onMousedown?: (
    target: kakao.maps.Polygon,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void
  /**
   * 클릭하면 발생한다.
   */
  onClick?: (
    target: kakao.maps.Polygon,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void
  /**
   * 객체 생성시 호출 됩니다.
   */
  onCreate?: (target: kakao.maps.Polygon) => void
}

/**
 * Map 상에 다각형을 그립니다.
 */
const Polygon: React.FC<PolygonProps> = ({
  path,
  onClick,
  onMousedown,
  onMousemove,
  onMouseout,
  onMouseover,
  onCreate,
  strokeColor,
  strokeOpacity,
  strokeStyle,
  strokeWeight,
  fillColor,
  fillOpacity,
  zIndex,
}) => {
  const map = useMap(`Polygon`)

  const polygonPath = useMemo(() => {
    if ((path as LatLng[]).every((v) => v instanceof Array)) {
      return (path as LatLng[][]).map((v) => {
        return v.map((p) => new kakao.maps.LatLng(p.lat, p.lng))
      })
    }
    return (path as LatLng[]).map((v) => {
      return new kakao.maps.LatLng(v.lat, v.lng)
    })
  }, [path])

  const polygon = useMemo(() => {
    return new kakao.maps.Polygon({
      path: polygonPath,
      fillColor,
      fillOpacity,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeWeight,
      zIndex,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (onCreate) onCreate(polygon)
  }, [polygon, onCreate])

  useEffect(() => {
    polygon.setMap(map)
    return () => polygon.setMap(null)
  }, [map, polygon])

  useEffect(() => {
    polygon.setOptions({
      fillColor,
      fillOpacity,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeWeight,
    })
  }, [
    polygon,
    fillColor,
    fillOpacity,
    strokeColor,
    strokeOpacity,
    strokeStyle,
    strokeWeight,
  ])

  useEffect(() => {
    polygon.setPath(polygonPath)
  }, [polygon, polygonPath])

  useEffect(() => {
    if (zIndex) polygon.setZIndex(zIndex)
  }, [polygon, zIndex])

  useKakaoEvent(polygon, "mouseover", onMouseover)
  useKakaoEvent(polygon, "mouseout", onMouseout)
  useKakaoEvent(polygon, "mousemove", onMousemove)
  useKakaoEvent(polygon, "mousedown", onMousedown)
  useKakaoEvent(polygon, "click", onClick)

  return null
}

export default Polygon
