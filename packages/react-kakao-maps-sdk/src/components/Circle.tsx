import React, { useImperativeHandle, useLayoutEffect, useMemo } from "react"
import { useKakaoEvent } from "../hooks/useKakaoEvent"
import { useMap } from "../hooks/useMap"

export interface CircleProps {
  /**
   * 중심 좌표를 지정합니다.
   */
  center: {
    lat: number
    lng: number
  }
  /**
   * 원의 반지름 크기를 지정합니다 (미터 단위).
   */
  radius: number

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
   * 원의 z-index 속성 값
   */
  zIndex?: number

  /**
   * 원에 마우스 커서를 올리면 발생한다.
   */
  onMouseover?: (
    target: kakao.maps.Circle,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void
  /**
   * 마우스 커서가 원에서 벗어나면 발생한다.
   */
  onMouseout?: (
    target: kakao.maps.Circle,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void
  /**
   * 원에서 마우스를 움직이면 발생한다.
   */
  onMousemove?: (
    target: kakao.maps.Circle,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void
  /**
   * 원에서 마우스 버튼을 누르면 발생한다.
   */
  onMousedown?: (
    target: kakao.maps.Circle,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void
  /**
   * 원을 클릭하면 발생한다.
   */
  onClick?: (
    target: kakao.maps.Circle,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void

  /**
   * 객체 생성시 호출 됩니다.
   */
  onCreate?: (target: kakao.maps.Circle) => void
}

/**
 * Map 상에 원을 그립니다.
 */
export const Circle = React.forwardRef<kakao.maps.Circle, CircleProps>(
  function Circle(
    {
      center,
      radius,
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
    },
    ref,
  ) {
    const map = useMap(`Circle`)

    const circleCenter = useMemo(() => {
      return new kakao.maps.LatLng(center.lat, center.lng)
    }, [center.lat, center.lng])

    const circle = useMemo(() => {
      return new kakao.maps.Circle({
        center: circleCenter,
        radius,
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

    useImperativeHandle(ref, () => circle, [circle])

    useLayoutEffect(() => {
      circle.setMap(map)
      return () => {
        circle.setMap(null)
      }
    }, [map, circle])

    useLayoutEffect(() => {
      if (onCreate) onCreate(circle)
    }, [circle, onCreate])

    useLayoutEffect(() => {
      if (circle) circle.setPosition(circleCenter)
    }, [circle, circleCenter])

    useLayoutEffect(() => {
      circle.setRadius(radius)
    }, [circle, radius])

    useLayoutEffect(() => {
      if (!zIndex) return
      circle.setZIndex(zIndex)
    }, [circle, zIndex])

    useLayoutEffect(() => {
      circle.setOptions({
        fillColor,
        fillOpacity,
        strokeColor,
        strokeOpacity,
        strokeStyle,
        strokeWeight,
      })
    }, [
      circle,
      fillColor,
      fillOpacity,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeWeight,
    ])

    useKakaoEvent(circle, "mouseover", onMouseover)
    useKakaoEvent(circle, "mouseout", onMouseout)
    useKakaoEvent(circle, "mousemove", onMousemove)
    useKakaoEvent(circle, "mousedown", onMousedown)
    useKakaoEvent(circle, "click", onClick)

    return null
  },
)
