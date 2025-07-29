import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react"
import ReactDOM from "react-dom"
import { useMap } from "../hooks/useMap"
import { MarkerClustererContext } from "./MarkerClusterer"
import { useKakaoMapsSetEffect } from "../hooks/useKakaoMapsSetEffect"

// --- 타입 정의 ---

export interface CustomOverlayMapProps {
  position: {
    lat: number
    lng: number
  }
  clickable?: boolean
  xAnchor?: number
  yAnchor?: number
  zIndex?: number
  onCreate?: (customOverlay: kakao.maps.CustomOverlay) => void
}

// --- 컴포넌트 구현 ---

let overlayCounter = 0

export const CustomOverlayMap = React.forwardRef<
  kakao.maps.CustomOverlay,
  React.PropsWithChildren<CustomOverlayMapProps>
>(function CustomOverlayMap({ children, ...props }, ref) {
  const map = useMap("CustomOverlayMap")
  const registry = useContext(MarkerClustererContext)

  // 고유 ID 생성
  const id = useRef(overlayCounter++).current
  const isMounted = useRef(false)

  // 클러스터러 하위에 있을 경우, 설명서(Descriptor) 등록/수정/해제 로직
  useEffect(() => {
    if (!registry) return

    const descriptor = {
      id,
      type: "CustomOverlayMap" as const,
      props,
      children,
    }

    if (!isMounted.current) {
      registry.register(descriptor)
      isMounted.current = true
    } else {
      // update 호출 시 자신의 타입 "CustomOverlayMap"을 전달
      registry.update(id, "CustomOverlayMap", props, children)
    }

    return () => {
      registry.unregister(id)
    }
  }, [registry, id, props, children])

  // 클러스터러 하위에 있을 경우, 렌더링은 부모에게 위임하므로 null 반환
  if (registry) {
    return null
  }

  // --- 이하 독립적으로 사용될 때의 기존 로직 (Fallback) ---

  const overlayPosition = useMemo(
    () => new kakao.maps.LatLng(props.position.lat, props.position.lng),
    [props.position.lat, props.position.lng],
  )

  const overlay = useMemo(() => {
    const container = document.createElement("div")
    return new kakao.maps.CustomOverlay({
      ...props,
      position: overlayPosition,
      content: container,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.clickable, props.xAnchor, props.yAnchor])

  const container = useMemo(
    () => overlay.getContent() as HTMLElement,
    [overlay],
  )

  useImperativeHandle(ref, () => overlay, [overlay])

  useLayoutEffect(() => {
    overlay.setMap(map)
    return () => overlay.setMap(null)
  }, [map, overlay])

  useLayoutEffect(() => {
    if (props.onCreate) props.onCreate(overlay)
  }, [overlay, props.onCreate])

  useKakaoMapsSetEffect(overlay, "setPosition", overlayPosition)
  useKakaoMapsSetEffect(overlay, "setZIndex", props.zIndex!)

  return ReactDOM.createPortal(children, container)
})
