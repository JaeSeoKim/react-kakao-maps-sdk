import React, { useLayoutEffect, useImperativeHandle, useMemo } from "react"
import ReactDom from "react-dom"
import { useKakaoMapsSetEffect } from "../hooks/useKakaoMapsSetEffect"

interface InfoWindowProps {
  map: kakao.maps.Map | kakao.maps.Roadview
  position: kakao.maps.LatLng | kakao.maps.Viewpoint
  marker?: kakao.maps.Marker
  /**
   * 인포윈도우를 열 때 지도가 자동으로 패닝하지 않을지의 여부
   * @default false
   */
  disableAutoPan?: boolean

  /**
   * 삭제 가능한 인포윈도우
   */
  removable?: boolean

  /**
   * 인포윈도우 엘리먼트의 z-index 속성 값
   */
  zIndex?: number

  /**
   * 로드뷰에 올라있는 인포윈도우의 높이 값(m 단위)
   */
  altitude?: number

  /**
   * 로드뷰 상에서 인포윈도우의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 인포윈도우는 보이지 않게 된다
   */
  range?: number

  /**
   * 인포윈도우 객체 생성후 해당 객체를 반환하는 함수
   */
  onCreate?: (infoWindow: kakao.maps.InfoWindow) => void
}

export const InfoWindow = React.forwardRef<
  kakao.maps.InfoWindow,
  React.PropsWithChildren<InfoWindowProps>
>(function InfoWindow(
  {
    map,
    position,
    marker,
    children,
    altitude,
    disableAutoPan,
    range,
    removable,
    zIndex,
    onCreate,
  },
  ref,
) {
  const infoWindow = useMemo(() => {
    const container = document.createElement("div")
    container.style.display = "none"

    const kakaoInfoWindow = new kakao.maps.InfoWindow({
      altitude: altitude,
      disableAutoPan: disableAutoPan,
      range: range,
      removable: removable,
      zIndex: zIndex,
      content: container,
      position: position,
    })
    return kakaoInfoWindow
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disableAutoPan, removable])

  const container = useMemo(
    () => infoWindow.getContent() as HTMLElement,
    [infoWindow],
  )

  useImperativeHandle(ref, () => infoWindow, [infoWindow])

  useLayoutEffect(() => {
    infoWindow.open(map, marker)
    return () => {
      infoWindow.close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, marker])

  useLayoutEffect(() => {
    if (onCreate) onCreate(infoWindow)
  }, [infoWindow, onCreate])

  useKakaoMapsSetEffect(infoWindow, "setPosition", position)
  useKakaoMapsSetEffect(infoWindow, "setAltitude", altitude!)
  useKakaoMapsSetEffect(infoWindow, "setRange", range!)
  useKakaoMapsSetEffect(infoWindow, "setZIndex", zIndex!)

  return ReactDom.createPortal(children, container.parentElement ?? container)
})
