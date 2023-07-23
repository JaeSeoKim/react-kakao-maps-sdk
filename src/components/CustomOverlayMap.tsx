import React, {
  useContext,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react"
import ReactDOM from "react-dom"
import useMap from "../hooks/useMap"
import { KakaoMapMarkerClustererContext } from "./MarkerClusterer"

export interface CustomOverlayMapProps {
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
 * `onCreate` 이벤트 또는 `ref` 객체를 통해서 `CustomOverlay` 객체에 직접 접근 및 초기 설정 작업을 지정할 수 있습니다.
 */
const CustomOverlayMap = React.forwardRef<
  kakao.maps.CustomOverlay,
  React.PropsWithChildren<CustomOverlayMapProps>
>(
  (
    { position, children, clickable, xAnchor, yAnchor, zIndex, onCreate },
    ref
  ) => {
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
      container.current.style.display = "none"

      return KakaoCustomOverlay
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clickable, xAnchor, yAnchor])

    useImperativeHandle(ref, () => overlay, [overlay])

    useLayoutEffect(() => {
      if (!map) return

      if (markerCluster) {
        markerCluster.addMarker(overlay, true)
      } else {
        overlay.setMap(map)
      }

      return () => {
        if (markerCluster) {
          markerCluster.removeMarker(overlay, true)
        } else {
          overlay.setMap(null)
        }
      }
    }, [map, markerCluster, overlay])

    useLayoutEffect(() => {
      if (onCreate) onCreate(overlay)
    }, [overlay, onCreate])

    useLayoutEffect(() => {
      overlay.setPosition(overlayPosition)
    }, [overlay, overlayPosition])

    useLayoutEffect(() => {
      if (!zIndex) return
      overlay.setZIndex(zIndex)
    }, [overlay, zIndex])

    return (
      container.current.parentElement &&
      ReactDOM.createPortal(children, container.current.parentElement)
    )
  }
)

export default CustomOverlayMap
