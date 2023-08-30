import React, { useImperativeHandle, useLayoutEffect, useMemo } from "react"
import { useKakaoEvent } from "../hooks/useKakaoEvent"
import { useMap } from "../hooks/useMap"

interface LatLng {
  lat: number
  lng: number
}

export interface RectangleProps {
  bounds: {
    sw: LatLng
    ne: LatLng
  }
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
    target: kakao.maps.Rectangle,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void
  /**
   * 마우스 커서가 벗어나면 발생한다.
   */
  onMouseout?: (
    target: kakao.maps.Rectangle,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void
  /**
   * 마우스를 움직이면 발생한다.
   */
  onMousemove?: (
    target: kakao.maps.Rectangle,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void
  /**
   * 마우스 버튼을 누르면 발생한다.
   */
  onMousedown?: (
    target: kakao.maps.Rectangle,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void
  /**
   * 클릭하면 발생한다.
   */
  onClick?: (
    target: kakao.maps.Rectangle,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void
  /**
   * 객체 생성시 호출 됩니다.
   */
  onCreate?: (target: kakao.maps.Rectangle) => void
}

/**
 * Map 상에 사각형을 그립니다.
 */
export const Rectangle = React.forwardRef<kakao.maps.Rectangle, RectangleProps>(
  function Rectangle(
    {
      bounds,
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
    },
    ref,
  ) {
    const map = useMap(`Rectangle`)

    const rectangleBounds = useMemo(() => {
      return new kakao.maps.LatLngBounds(
        new kakao.maps.LatLng(bounds.sw.lat, bounds.sw.lng),
        new kakao.maps.LatLng(bounds.ne.lat, bounds.ne.lng),
      )
    }, [bounds])

    const rectangle = useMemo(() => {
      return new kakao.maps.Rectangle({
        bounds: rectangleBounds,
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

    useImperativeHandle(ref, () => rectangle, [rectangle])

    useLayoutEffect(() => {
      rectangle.setMap(map)
      return () => rectangle.setMap(null)
    }, [map, rectangle])

    useLayoutEffect(() => {
      if (onCreate) onCreate(rectangle)
    }, [rectangle, onCreate])

    useLayoutEffect(() => {
      rectangle.setOptions({
        fillColor,
        fillOpacity,
        strokeColor,
        strokeOpacity,
        strokeStyle,
        strokeWeight,
      })
    }, [
      rectangle,
      fillColor,
      fillOpacity,
      strokeColor,
      strokeOpacity,
      strokeStyle,
      strokeWeight,
    ])

    useLayoutEffect(() => {
      rectangle.setBounds(rectangleBounds)
    }, [rectangle, rectangleBounds])

    useLayoutEffect(() => {
      if (zIndex) rectangle.setZIndex(zIndex)
    }, [rectangle, zIndex])

    useKakaoEvent(rectangle, "mouseover", onMouseover)
    useKakaoEvent(rectangle, "mouseout", onMouseout)
    useKakaoEvent(rectangle, "mousemove", onMousemove)
    useKakaoEvent(rectangle, "mousedown", onMousedown)
    useKakaoEvent(rectangle, "click", onClick)

    return null
  },
)
