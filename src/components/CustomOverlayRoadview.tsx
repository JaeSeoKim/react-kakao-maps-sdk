import React, { useEffect, useMemo, useRef } from "react"
import ReactDOM from "react-dom"
import useRoadview from "../hooks/useRoadview"

export interface CustomOverlayRoadviewProps {
  /**
   * 커스텀 오버레이의 좌표
   */
  position: {
    lat: number
    lng: number
  }

  /**
   * true 로 설정하면 컨텐츠 영역을 클릭했을 경우 지도 이벤트를 막아준다.
   */
  clickable?: boolean

  /**
   * 컨텐츠의 x축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5
   */
  xAnchor?: number

  /**
   * 컨텐츠의 y축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5
   */
  yAnchor?: number

  /**
   * 커스텀 오버레이의 z-index
   */
  zIndex?: number

  /**
   * 로드뷰상에서 커스텀 오버레이의 높이(위치)를 지정한다.
   * 단위는 m(미터)이며 현재 로드뷰의 바닥 높이를 기준으로 떨어져있는 높이를 말한다.
   */
  altitude?: number

  /**
   * 커스텀 오버레이의 가시반경을 설정한다.
   * 로드뷰의 위치와 커스텀 오버레이의 위치 사이의 거리가 가시반경 이내일 경우에만 로드뷰상에 노출된다.
   * 단위는 m(미터)이며 기본값은 500m이다.
   */
  range?: number

  /**
   * 커스텀 오버레이를 생성 후 해당 객체를 가지고 callback 함수를 실행 시켜줌
   */
  onCreate?: (customOverlay: kakao.maps.CustomOverlay) => void
}

/**
 * Roadview에 CustomOverlay를 올릴 때 사용하는 컴포넌트 입니다.
 * `onCreate` 함수를 통해서 `CustomOverlay` 객체에 직접 접근 및 초기 설정 작업을 지정할 수 있습니다.
 */
const CustomOverlayRoadview: React.FC<CustomOverlayRoadviewProps> = ({
  position,
  children,
  clickable,
  xAnchor,
  yAnchor,
  zIndex,
  altitude,
  range,
  onCreate,
}) => {
  const roadview = useRoadview(`CustomOverlayRoadview`)
  const container = useRef(document.createElement("div"))

  const overlayPosition = useMemo(() => {
    return new kakao.maps.LatLng(position.lat, position.lng)
  }, [position.lat, position.lng])

  const overlay = useMemo(() => {
    const KakaoCustomOverlay = new kakao.maps.CustomOverlay({
      clickable: clickable,
      xAnchor: xAnchor,
      yAnchor: yAnchor,
      zIndex: zIndex,
      position: overlayPosition,
      content: container.current,
    })
    return KakaoCustomOverlay
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickable, xAnchor, yAnchor])

  useEffect(() => {
    if (onCreate) onCreate(overlay)
  }, [overlay, onCreate])

  useEffect(() => {
    if (!roadview) return

    kakao.maps.event.addListener(roadview, "init", () => {
      overlay.setMap(roadview)
    })

    return () => {
      overlay.setMap(null)
    }
  }, [overlay, roadview])

  useEffect(() => {
    overlay.setPosition(overlayPosition)
  }, [overlay, overlayPosition])

  useEffect(() => {
    if (!zIndex) return
    overlay.setZIndex(zIndex)
  }, [overlay, zIndex])

  useEffect(() => {
    if (!altitude) return
    overlay.setAltitude(altitude)
  }, [overlay, altitude])

  useEffect(() => {
    if (!range) return
    overlay.setRange(range)
  }, [overlay, range])

  return ReactDOM.createPortal(children, container.current)
}

export default CustomOverlayRoadview
