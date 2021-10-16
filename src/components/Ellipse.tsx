import React, { useEffect, useMemo } from "react"
import useKakaoEvent from "../hooks/useKakaoEvent"
import useMap from "../hooks/useMap"

export interface EllipseProps {
  /**
   * 중심 좌표를 지정합니다.
   */
  center: {
    lat: number
    lng: number
  }
  /**
   * 미터 단위의 x축 반지름
   */
  rx: number

  /**
   * 미터 단위의 y축 반지름
   */
  ry: number

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
   * 타원의 z-index 속성 값
   */
  zIndex?: number

  /**
   * 타원에 마우스 커서를 올리면 발생한다.
   */
  onMouseover?: (
    target: kakao.maps.Ellipse,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void
  /**
   * 마우스 커서가 타원에서 벗어나면 발생한다.
   */
  onMouseout?: (
    target: kakao.maps.Ellipse,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void
  /**
   * 타원에서 마우스를 움직이면 발생한다.
   */
  onMousemove?: (
    target: kakao.maps.Ellipse,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void
  /**
   * 타원에서 마우스 버튼을 누르면 발생한다.
   */
  onMousedown?: (
    target: kakao.maps.Ellipse,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void
  /**
   * 타원을 클릭하면 발생한다.
   */
  onClick?: (
    target: kakao.maps.Ellipse,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void

  /**
   * 객체 생성시 호출 됩니다.
   */
  onCreate?: (target: kakao.maps.Ellipse) => void
}

/**
 * Map 상에 타원을 그립니다.
 */
const Ellipse: React.FC<EllipseProps> = ({
  center,
  rx,
  ry,
  fillColor,
  fillOpacity,
  strokeColor,
  strokeOpacity,
  strokeStyle,
  strokeWeight,
  zIndex,
  onMouseover,
  onMouseout,
  onMousemove,
  onMousedown,
  onClick,
  onCreate,
}) => {
  const map = useMap(`Ellipse`)

  const ellipseCenter = useMemo(() => {
    return new kakao.maps.LatLng(center.lat, center.lng)
  }, [center.lat, center.lng])

  const ellipse = useMemo(() => {
    return new kakao.maps.Ellipse({
      center: ellipseCenter,
      rx,
      ry,
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
    ellipse.setMap(map)

    return () => {
      ellipse.setMap(null)
    }
  }, [map, ellipse])

  useEffect(() => {
    if (onCreate) onCreate(ellipse)
  }, [ellipse, onCreate])

  useEffect(() => {
    if (ellipse) ellipse.setPosition(ellipseCenter)
  }, [ellipse, ellipseCenter])

  useEffect(() => {
    ellipse.setRadius(rx, ry)
  }, [ellipse, rx, ry])

  useEffect(() => {
    if (!zIndex) return
    ellipse.setZIndex(zIndex)
  }, [ellipse, zIndex])

  useEffect(() => {
    ellipse.setOptions({
      fillColor,
      fillOpacity,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeWeight,
    })
  }, [
    ellipse,
    fillColor,
    fillOpacity,
    strokeColor,
    strokeOpacity,
    strokeStyle,
    strokeWeight,
  ])

  useKakaoEvent(ellipse, "mouseover", onMouseover)
  useKakaoEvent(ellipse, "mouseout", onMouseout)
  useKakaoEvent(ellipse, "mousemove", onMousemove)
  useKakaoEvent(ellipse, "mousedown", onMousedown)
  useKakaoEvent(ellipse, "click", onClick)

  return null
}

export default Ellipse
