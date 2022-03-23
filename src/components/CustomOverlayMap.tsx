import React, { useContext, useEffect, useMemo, useRef } from "react"
import ReactDOM from "react-dom"
import useMap from "../hooks/useMap"
import { KakaoMapMarkerClustererContext } from "./MarkerClusterer"

export interface CustomOverlayMapProps {
  /**
   * CustomOverlay의 Contianer id에 대해서 지정합니다.
   */
  id?: string

  /**
   * CustomOverlay의 Contianer className에 대해서 지정합니다.
   */
  className?: string

  /**
   * CustomOverlay의 Contianer style에 대해서 지정합니다.
   */
  style?: React.CSSProperties

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
   * 커스텀 오버레이를 생성 후 해당 객체를 가지고 callback 함수를 실행 시켜줌
   */
  onCreate?: (customOverlay: kakao.maps.CustomOverlay) => void
}

/**
 * Map에 CustomOverlay를 올릴 때 사용하는 컴포넌트 입니다.
 * `onCreate` 함수를 통해서 `CustomOverlay` 객체에 직접 접근 및 초기 설정 작업을 지정할 수 있습니다.
 */
const CustomOverlayMap: React.FC<CustomOverlayMapProps> = ({
  id,
  className,
  style,
  position,
  children,
  clickable,
  xAnchor,
  yAnchor,
  zIndex,
  onCreate,
}) => {
  const markerCluster = useContext(KakaoMapMarkerClustererContext)

  const map = useMap(`CustomOverlayMap`)
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
    if (!map) return

    if (markerCluster) {
      markerCluster.addMarker(overlay as unknown as kakao.maps.Marker)
    } else {
      overlay.setMap(map)
    }

    return () => {
      if (markerCluster) {
        markerCluster.removeMarker(overlay as unknown as kakao.maps.Marker)
      } else {
        overlay.setMap(null)
      }
    }
  }, [map, markerCluster, overlay])

  useEffect(() => {
    if (onCreate) onCreate(overlay)
  }, [overlay, onCreate])

  useEffect(() => {
    overlay.setPosition(overlayPosition)
  }, [overlay, overlayPosition])

  useEffect(() => {
    if (!zIndex) return
    overlay.setZIndex(zIndex)
  }, [overlay, zIndex])

  useEffect(() => {
    if (id) container.current.id = id
  }, [id])

  useEffect(() => {
    if (className) container.current.className = className
  }, [className])

  useEffect(() => {
    if (style) {
      for (const [key, value] of Object.entries(style)) {
        container.current.style[key] = value
      }
    }
  }, [style])

  return ReactDOM.createPortal(children, container.current)
}

export default CustomOverlayMap
