import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react"
import { useMap } from "../hooks/useMap"
import { useKakaoEvent } from "../hooks/useKakaoEvent"
import { useKakaoMapsSetEffect } from "../hooks/useKakaoMapsSetEffect"
import { MarkerClustererContext } from "./MarkerClusterer"
import { InfoWindow } from "./InfoWindow"

export interface MarkerProps {
  map?: kakao.maps.Map | kakao.maps.Roadview
  position: { lat: number; lng: number }
  image?: {
    src: string
    size: { width: number; height: number }
    options?: kakao.maps.MarkerOptions["image"] extends kakao.maps.MarkerImage
      ? kakao.maps.MarkerImage["__getOptions"]
      : never
  }
  title?: string
  draggable?: boolean
  clickable?: boolean
  zIndex?: number
  opacity?: number
  altitude?: number
  range?: number
  onCreate?: (marker: kakao.maps.Marker) => void
  onClick?: (marker: kakao.maps.Marker) => void
  onMouseOver?: (marker: kakao.maps.Marker) => void
  onMouseOut?: (marker: kakao.maps.Marker) => void
  onDragStart?: (marker: kakao.maps.Marker) => void
  onDragEnd?: (marker: kakao.maps.Marker) => void
  infoWindowOptions?: {
    disableAutoPan?: boolean
    removable?: boolean
    zIndex?: number
    altitude?: number
    range?: number
  }
}

let markerCounter = 0

export const Marker = React.forwardRef<
  kakao.maps.Marker,
  React.PropsWithChildren<MarkerProps>
>(function Marker(
  {
    children,
    position,
    image,
    altitude,
    clickable,
    draggable,
    infoWindowOptions,
    onCreate,
    onClick,
    onDragEnd,
    onDragStart,
    onMouseOut,
    onMouseOver,
    opacity,
    range,
    title,
    zIndex,
    ...restProps
  },
  ref,
) {
  const map = useMap("Marker")
  const registry = useContext(MarkerClustererContext)

  const id = useRef(markerCounter++).current
  const isMounted = useRef(false)

  const allProps = {
    position,
    image,
    altitude,
    clickable,
    draggable,
    infoWindowOptions,
    onCreate,
    onClick,
    onDragEnd,
    onDragStart,
    onMouseOut,
    onMouseOver,
    opacity,
    range,
    title,
    zIndex,
    ...restProps,
  }

  useEffect(() => {
    if (!registry) return

    const descriptor = {
      id,
      type: "Marker" as const,
      props: allProps,
      children,
    }

    if (!isMounted.current) {
      registry.register(descriptor)
      isMounted.current = true
    } else {
      registry.update(id, "Marker", allProps, children)
    }

    return () => {
      registry.unregister(id)
      isMounted.current = false
    }
  }, [registry, id, allProps, children])

  if (registry) {
    return null
  }

  // --- 독립적으로 사용될 때의 Fallback 로직 ---

  const markerImage = useMemo(() => {
    if (!image) return undefined
    return new kakao.maps.MarkerImage(
      image.src,
      new kakao.maps.Size(image.size.width, image.size.height),
      image.options,
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(image)])

  const marker = useMemo(() => {
    return new kakao.maps.Marker({
      position: new kakao.maps.LatLng(position.lat, position.lng),
      image: markerImage,
      altitude,
      clickable,
      draggable,
      opacity,
      range,
      title,
      zIndex,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useImperativeHandle(ref, () => marker, [marker])

  useLayoutEffect(() => {
    marker.setMap(map)
    return () => {
      marker.setMap(null)
    }
  }, [map, marker])

  useLayoutEffect(() => {
    if (onCreate) onCreate(marker)
  }, [marker, onCreate])

  const latlng = useMemo(
    () => new kakao.maps.LatLng(position.lat, position.lng),
    [position.lat, position.lng],
  )

  useKakaoMapsSetEffect(marker, "setPosition", latlng)
  useKakaoMapsSetEffect(marker, "setImage", markerImage!)
  useKakaoMapsSetEffect(marker, "setAltitude", altitude!)
  useKakaoMapsSetEffect(marker, "setClickable", clickable!)
  useKakaoMapsSetEffect(marker, "setDraggable", draggable!)
  useKakaoMapsSetEffect(marker, "setOpacity", opacity!)
  useKakaoMapsSetEffect(marker, "setRange", range!)
  useKakaoMapsSetEffect(marker, "setTitle", title!)
  useKakaoMapsSetEffect(marker, "setZIndex", zIndex!)

  useKakaoEvent(marker, "click", onClick)
  useKakaoEvent(marker, "dragstart", onDragStart)
  useKakaoEvent(marker, "dragend", onDragEnd)
  useKakaoEvent(marker, "mouseout", onMouseOut)
  useKakaoEvent(marker, "mouseover", onMouseOver)

  if (children) {
    return (
      <InfoWindow
        position={latlng}
        map={map}
        marker={marker}
        altitude={infoWindowOptions?.altitude}
        disableAutoPan={infoWindowOptions?.disableAutoPan}
        range={infoWindowOptions?.range}
        removable={infoWindowOptions?.removable}
        zIndex={infoWindowOptions?.zIndex}
      >
        {children}
      </InfoWindow>
    )
  }

  return null
})
