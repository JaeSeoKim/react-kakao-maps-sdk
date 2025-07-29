import React, { useMemo, useEffect, useRef, useContext } from "react"
import { useMap } from "../hooks/useMap"
import { Marker } from "./Marker"
import { MarkerClustererContext } from "./MarkerClusterer"

// =================================================================================================
// 1. Props 타입 및 컴포넌트 시그니처
// =================================================================================================

export interface MapMarkerProps {
  position: { lat: number; lng: number } | { x: number; y: number }
  image?: {
    src: string
    size: { width: number; height: number }
    options?: {
      alt?: string
      coords?: string
      offset?: { x: number; y: number }
      shape?: "default" | "rect" | "circle" | "poly"
      spriteOrigin?: { x: number; y: number }
      spriteSize?: { width: number; height: number }
    }
  }
  onClick?: (marker: kakao.maps.Marker) => void
  onMouseOver?: (marker: kakao.maps.Marker) => void
  onMouseOut?: (marker: kakao.maps.Marker) => void
  onDragStart?: (marker: kakao.maps.Marker) => void
  onDragEnd?: (marker: kakao.maps.Marker) => void
  onCreate?: (marker: kakao.maps.Marker) => void
  title?: string
  draggable?: boolean
  clickable?: boolean
  zIndex?: number
  opacity?: number
  infoWindowOptions?: {
    disableAutoPan?: boolean
    removable?: boolean
    zIndex?: number
  }
}

let markerCounter = 0

// =================================================================================================
// 2. 새롭게 구현된 MapMarker 컴포넌트
// =================================================================================================

export const MapMarker = React.forwardRef<
  kakao.maps.Marker,
  React.PropsWithChildren<MapMarkerProps>
>(function MapMarker({ children, ...props }, ref) {
  const map = useMap("MapMarker")
  const registry = useContext(MarkerClustererContext)

  const id = useRef(markerCounter++).current
  const isMounted = useRef(false)

  const markerPosition = useMemo(() => {
    if ("lat" in props.position) {
      return new kakao.maps.LatLng(props.position.lat, props.position.lng)
    }
    return new kakao.maps.Coords(props.position.x, props.position.y).toLatLng()
  }, [props.position])

  // --- 클러스터러 하위일 때의 로직 ---
  useEffect(() => {
    // registry가 없으면 클러스터러 하위가 아니므로 아무것도 하지 않음
    if (!registry) return

    // MarkerClusterer에 전달할 설명서(Descriptor)
    const descriptor = { id, type: "Marker" as const, props, children }

    if (!isMounted.current) {
      // 1. [수정됨] 첫 마운트 시, type을 명시하여 등록
      registry.register(descriptor)
      isMounted.current = true
    } else {
      // 2. [수정됨] 이후 props 변경 시, type과 함께 업데이트 요청
      registry.update(id, "Marker", props, children)
    }

    return () => {
      // 컴포넌트가 사라질 때 클러스터러에서 제거하도록 요청
      registry.unregister(id)
    }
  }, [registry, id, props, children])

  // 클러스터러 하위에 있을 경우, 렌더링은 부모(MarkerClusterer)에게 위임하므로 null 반환
  if (registry) {
    return null
  }

  // --- 클러스터러 하위가 아닐 때의 독립 실행 로직 (Fallback) ---
  return (
    <Marker map={map} position={markerPosition} {...props} ref={ref}>
      {children}
    </Marker>
  )
})
