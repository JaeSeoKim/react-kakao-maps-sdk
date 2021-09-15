import React, { useEffect, useMemo } from "react"
import useKakaoEvent from "../hooks/useKakaoEvent"
import useMap from "../hooks/useMap"

interface LatLng {
  lat: number
  lng: number
}

export interface PolylineProps {
  path: LatLng[] | LatLng[][]
  /**
   * 화살표 여부
   */
  endArrow?: boolean
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
    target: kakao.maps.Polyline,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void
  /**
   * 마우스 커서가 벗어나면 발생한다.
   */
  onMouseout?: (
    target: kakao.maps.Polyline,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void
  /**
   * 마우스를 움직이면 발생한다.
   */
  onMousemove?: (
    target: kakao.maps.Polyline,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void
  /**
   * 마우스 버튼을 누르면 발생한다.
   */
  onMousedown?: (
    target: kakao.maps.Polyline,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void
  /**
   * 클릭하면 발생한다.
   */
  onClick?: (
    target: kakao.maps.Polyline,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void
  /**
   * 객체 생성시 호출 됩니다.
   */
  onCreate?: (target: kakao.maps.Polyline) => void
}

/**
 * Map 상에 폴리라인을 그립니다.
 */
const Polyline: React.FC<PolylineProps> = ({
  path,
  endArrow,
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
  zIndex,
}) => {
  const map = useMap(`Polyline`)

  const polyLinePath = useMemo(() => {
    if ((path as LatLng[]).every((v) => v instanceof Array)) {
      return (path as LatLng[][]).map((v) => {
        return v.map((p) => new kakao.maps.LatLng(p.lat, p.lng))
      })
    }
    return (path as LatLng[]).map((v) => {
      return new kakao.maps.LatLng(v.lat, v.lng)
    })
  }, [path])

  const polyline = useMemo(() => {
    return new kakao.maps.Polyline({
      path: polyLinePath,
      endArrow,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeWeight,
      zIndex,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    polyline.setMap(map)
    return () => polyline.setMap(null)
  }, [map, polyline])

  useEffect(() => {
    if (onCreate) onCreate(polyline)
  }, [polyline, onCreate])

  useEffect(() => {
    polyline.setOptions({
      endArrow,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeWeight,
    })
  }, [
    polyline,
    endArrow,
    strokeColor,
    strokeOpacity,
    strokeStyle,
    strokeWeight,
  ])

  useEffect(() => {
    polyline.setPath(polyLinePath)
  }, [polyline, polyLinePath])

  useEffect(() => {
    if (zIndex) polyline.setZIndex(zIndex)
  }, [polyline, zIndex])

  useKakaoEvent(polyline, "mouseover", onMouseover)
  useKakaoEvent(polyline, "mouseout", onMouseout)
  useKakaoEvent(polyline, "mousemove", onMousemove)
  useKakaoEvent(polyline, "mousedown", onMousedown)
  useKakaoEvent(polyline, "click", onClick)

  return null
}

export default Polyline
