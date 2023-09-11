import React, { useRef, useState, useImperativeHandle } from "react"
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect"
import { useKakaoEvent } from "../hooks/useKakaoEvent"
import {
  CompatibleReactElement,
  PolymorphicComponentPropsWithOutRef,
} from "../types"
import { Loader } from "../util/kakaoMapApiLoader"
import { SIGNATURE } from "../util/constants"

export const KakaoMapContext = React.createContext<kakao.maps.Map>(
  undefined as unknown as kakao.maps.Map,
)

export type _MapProps = {
  /**
   * 중심으로 설정할 위치 입니다.
   */
  center:
    | {
        lat: number
        lng: number
      }
    | {
        x: number
        y: number
      }

  /**
   * 중심을 이동시킬때 Panto를 사용할지 정합니다.
   * @default false
   */
  isPanto?: boolean

  /**
   * 중심 좌표를 지정한 좌표 또는 영역으로 부드럽게 이동한다. 필요하면 확대 또는 축소도 수행한다.
   * 만약 이동할 거리가 지도 화면의 크기보다 클 경우 애니메이션 없이 이동한다.
   * padding 만큼 제외하고 영역을 계산하며, padding 을 지정하지 않으면 기본값으로 32가 사용된다.
   */
  padding?: number

  /**
   * 확대 수준 (기본값: 3)
   */
  level?: number

  /**
   * 최대 확대 수준
   */
  maxLevel?: number

  /**
   * 최소 확대 수준
   */
  minLevel?: number

  /**
   * 지도 종류 (기본값: 일반 지도)
   */
  mapTypeId?: kakao.maps.MapTypeId | keyof typeof kakao.maps.MapTypeId

  /**
   * 마우스 드래그, 휠, 모바일 터치를 이용한 시점 변경(이동, 확대, 축소) 가능 여부
   */
  draggable?: boolean

  /**
   * 마우스 휠이나 멀티터치로 지도 확대, 축소 기능을 막습니다. 상황에 따라 지도 확대, 축소 기능을 제어할 수 있습니다.
   */
  zoomable?: boolean

  /**
   * 마우스 휠, 모바일 터치를 이용한 확대 및 축소 가능 여부
   */
  scrollwheel?: boolean

  /**
   * 더블클릭 이벤트 및 더블클릭 확대 가능 여부
   */
  disableDoubleClick?: boolean

  /**
   * 더블클릭 확대 가능 여부
   */
  disableDoubleClickZoom?: boolean

  /**
   * 투영법 지정 (기본값: kakao.maps.ProjectionId.WCONG)
   */
  projectionId?: string

  /**
   * 지도 타일 애니메이션 설정 여부 (기본값: true)
   */
  tileAnimation?: boolean

  /**
   * 키보드의 방향키와 +, – 키로 지도 이동,확대,축소 가능 여부 (기본값: false)
   */
  keyboardShortcuts?:
    | boolean
    | {
        /**
         * 지도 이동 속도
         */
        speed: number
      }

  /**
   * map 생성 후 해당 객체를 전달하는 함수
   */
  onCreate?: (map: kakao.maps.Map) => void

  /**
   * 중심 좌표가 변경되면 발생한다.
   */
  onCenterChanged?: (target: kakao.maps.Map) => void

  /**
   * 확대 수준이 변경되기 직전 발생한다.
   */
  onZoomStart?: (target: kakao.maps.Map) => void

  /**
   * 확대 수준이 변경되면 발생한다.
   */
  onZoomChanged?: (target: kakao.maps.Map) => void

  /**
   * 지도 영역이 변경되면 발생한다.
   */
  onBoundsChanged?: (target: kakao.maps.Map) => void

  /**
   * 지도를 클릭하면 발생한다.
   */
  onClick?: (
    target: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void

  /**
   * 지도를 더블클릭하면 발생한다.
   */
  onDoubleClick?: (
    target: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void

  /**
   * 지도를 마우스 오른쪽 버튼으로 클릭하면 발생한다.
   */
  onRightClick?: (
    target: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void

  /**
   * 지도에서 마우스 커서를 이동하면 발생한다.
   */
  onMouseMove?: (
    target: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void

  /**
   * 드래그를 시작할 때 발생한다.
   */
  onDragStart?: (
    target: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void

  /**
   * 드래그를 하는 동안 발생한다.
   */
  onDrag?: (
    target: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void

  /**
   * 드래그가 끝날 때 발생한다.
   */
  onDragEnd?: (
    target: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent,
  ) => void

  /**
   * 중심 좌표나 확대 수준이 변경되면 발생한다.
   * 단, 애니메이션 도중에는 발생하지 않는다.
   */
  onIdle?: (target: kakao.maps.Map) => void

  /**
   * 확대수준이 변경되거나 지도가 이동했을때 타일 이미지 로드가 모두 완료되면 발생한다.
   * 지도이동이 미세하기 일어나 타일 이미지 로드가 일어나지 않은경우 발생하지 않는다.
   */
  onTileLoaded?: (target: kakao.maps.Map) => void

  /**
   * 지도 기본 타일(일반지도, 스카이뷰, 하이브리드)이 변경되면 발생한다.
   */
  onMaptypeidChanged?: (target: kakao.maps.Map) => void

  children?: React.ReactNode | undefined
}

export type MapProps<T extends React.ElementType = "div"> =
  PolymorphicComponentPropsWithOutRef<T, _MapProps> &
    React.RefAttributes<kakao.maps.Map>

export type MapComponent = <T extends React.ElementType = "div">(
  props: MapProps<T>,
) => CompatibleReactElement

/**
 * 기본적인 Map 객체를 생성하는 Comeponent 입니다.
 * props로 받는 `on*` 이벤트는 해당 `kakao.maps.Map` 객체를 함께 인자로 전달 합니다.
 *
 * `ref`를 통해 `map` 객체에 직접 접근하여 사용 또는 onCreate 이벤트를 이용하여 접근이 가능합니다.
 *
 * > *주의 사항* `Map`, `RoadView` 컴포넌트에 한하여, ref 객체가 컴포넌트 마운트 시점에 바로 초기화가 안될 수 있습니다.
 * >
 * > 컴포넌트 마운트 시점에 `useEffect` 를 활용하여, 특정 로직을 수행하고 싶은 경우 `ref` 객체를 사용하는 것보다
 * > `onCreate` 이벤트와 `useState`를 함께 활용하여 제어하는 것을 추천 드립니다.
 */
export const Map: MapComponent = React.forwardRef(function Map<
  T extends React.ElementType = "div",
>(
  {
    id,
    as,
    children,
    center,
    isPanto = false,
    padding = 32,
    disableDoubleClick,
    disableDoubleClickZoom,
    draggable,
    zoomable,
    keyboardShortcuts,
    level,
    maxLevel,
    minLevel,
    mapTypeId,
    projectionId,
    scrollwheel,
    tileAnimation,
    onBoundsChanged,
    onCenterChanged,
    onClick,
    onDoubleClick,
    onDrag,
    onDragEnd,
    onDragStart,
    onIdle,
    onMaptypeidChanged,
    onMouseMove,
    onRightClick,
    onTileLoaded,
    onZoomChanged,
    onZoomStart,
    onCreate,
    ...props
  }: MapProps<T>,
  ref: React.ForwardedRef<kakao.maps.Map>,
) {
  const Container = as || "div"
  const [isLoaded, setIsLoaded] = useState(false)
  const [map, setMap] = useState<kakao.maps.Map>()
  const container = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const callback = Loader.addLoadEventLisnter((err) => setIsLoaded(!err))
    return () => {
      Loader.removeLoadEventLisnter(callback)
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (!isLoaded) return

    const MapContainer = container.current

    if (!MapContainer) return

    const initalMapCenter =
      "lat" in center
        ? new kakao.maps.LatLng(center.lat, center.lng)
        : new kakao.maps.Coords(center.x, center.y)

    const kakaoMap = new kakao.maps.Map(MapContainer, {
      center: initalMapCenter,
      disableDoubleClick,
      disableDoubleClickZoom,
      draggable,
      keyboardShortcuts,
      level,
      mapTypeId:
        typeof mapTypeId === "string"
          ? kakao.maps.MapTypeId[mapTypeId]
          : mapTypeId,
      projectionId,
      scrollwheel,
      tileAnimation,
    })

    setMap(kakaoMap)

    return () => {
      MapContainer.innerHTML = ""
    }
  }, [isLoaded, disableDoubleClick, disableDoubleClickZoom, tileAnimation])

  useImperativeHandle(ref, () => map!, [map])

  useIsomorphicLayoutEffect(() => {
    if (!map || !onCreate) return
    onCreate(map)
  }, [map, onCreate])

  // center position 변경시 map center 변경
  useIsomorphicLayoutEffect(() => {
    if (!map) return

    let prevCenter = map.getCenter()
    if (prevCenter instanceof kakao.maps.Coords) {
      prevCenter = prevCenter.toLatLng()
    }

    const centerPosition =
      "lat" in center
        ? new kakao.maps.LatLng(center.lat, center.lng)
        : new kakao.maps.Coords(center.x, center.y)

    if (
      (centerPosition instanceof kakao.maps.LatLng &&
        centerPosition.equals(prevCenter)) ||
      (centerPosition instanceof kakao.maps.Coords &&
        centerPosition.toLatLng().equals(prevCenter))
    ) {
      return
    }

    if (isPanto) {
      map.panTo(centerPosition, padding)
    } else {
      map.setCenter(centerPosition)
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  }, [map, center.lat, center.lng, center.x, center.y])

  useIsomorphicLayoutEffect(() => {
    if (!map || typeof draggable === "undefined") return
    map.setDraggable(draggable)
  }, [map, draggable])

  useIsomorphicLayoutEffect(() => {
    if (!map || typeof zoomable === "undefined") return
    map.setZoomable(zoomable)
  }, [map, zoomable])

  useIsomorphicLayoutEffect(() => {
    if (!map || !keyboardShortcuts || typeof keyboardShortcuts !== "boolean")
      return
    map.setKeyboardShortcuts(keyboardShortcuts)
  }, [map, keyboardShortcuts])

  useIsomorphicLayoutEffect(() => {
    if (!map || !level) return
    map.setLevel(level)
  }, [map, level])

  useIsomorphicLayoutEffect(() => {
    if (!map || !mapTypeId) return
    map.setMapTypeId(
      typeof mapTypeId === "string"
        ? kakao.maps.MapTypeId[mapTypeId]
        : mapTypeId,
    )
  }, [map, mapTypeId])

  useIsomorphicLayoutEffect(() => {
    if (!map || !projectionId) return
    map.setProjectionId(projectionId)
  }, [map, projectionId])

  useIsomorphicLayoutEffect(() => {
    if (!map || !maxLevel) return
    map.setMaxLevel(maxLevel)
  }, [map, maxLevel])

  useIsomorphicLayoutEffect(() => {
    if (!map || !minLevel) return
    map.setMinLevel(minLevel)
  }, [map, minLevel])

  useKakaoEvent(map, "bounds_changed", onBoundsChanged)
  useKakaoEvent(map, "center_changed", onCenterChanged)
  useKakaoEvent(map, "click", onClick)
  useKakaoEvent(map, "dblclick", onDoubleClick)
  useKakaoEvent(map, "drag", onDrag)
  useKakaoEvent(map, "dragstart", onDragStart)
  useKakaoEvent(map, "dragend", onDragEnd)
  useKakaoEvent(map, "idle", onIdle)
  useKakaoEvent(map, "maptypeid_changed", onMaptypeidChanged)
  useKakaoEvent(map, "mousemove", onMouseMove)
  useKakaoEvent(map, "rightclick", onRightClick)
  useKakaoEvent(map, "tilesloaded", onTileLoaded)
  useKakaoEvent(map, "zoom_changed", onZoomChanged)
  useKakaoEvent(map, "zoom_start", onZoomStart)

  return (
    <>
      <Container id={id || `${SIGNATURE}_Map`} {...props} ref={container} />
      {map && (
        <KakaoMapContext.Provider value={map}>
          {children}
        </KakaoMapContext.Provider>
      )}
    </>
  )
})
