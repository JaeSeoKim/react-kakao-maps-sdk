import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import useKakaoEvent from "../hooks/useKakaoEvent"

export const KakaoMapContext = React.createContext<kakao.maps.Map>(
  undefined as unknown as kakao.maps.Map
)
export interface MapProps {
  /**
   * MapContinaer의 id에 대해서 지정합니다.
   *
   * @default  "kakao-map-container"
   */
  id?: string

  /**
   * MapContainer의 className에 대해서 지정합니다.
   */
  className?: string

  /**
   * MapContainer의 style에 대해서 지정합니다.
   */
  style?: React.CSSProperties

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
  mapTypeId?: kakao.maps.MapTypeId

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
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void

  /**
   * 지도를 더블클릭하면 발생한다.
   */
  onDoubleClick?: (
    target: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void

  /**
   * 지도를 마우스 오른쪽 버튼으로 클릭하면 발생한다.
   */
  onRightClick?: (
    target: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void

  /**
   * 지도에서 마우스 커서를 이동하면 발생한다.
   */
  onMouseMove?: (
    target: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void

  /**
   * 드래그를 시작할 때 발생한다.
   */
  onDragStart?: (
    target: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void

  /**
   * 드래그를 하는 동안 발생한다.
   */
  onDrag?: (
    target: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void

  /**
   * 드래그가 끝날 때 발생한다.
   */
  onDragEnd?: (
    target: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent
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
}

/**
 * 기본적인 Map 객체를 생성하는 Comeponent 입니다.
 * props로 받는 `on*` 이벤트는 해당 `kakao.maps.Map` 객체를 반환 합니다.
 * `onCreate` 이벤트를 통해 생성 후 `map` 객체에 직접 접근하여 초기 설정이 가능합니다.
 */
const Map: React.FC<MapProps> = ({
  id = "kakao-map-container",
  style,
  children,
  center,
  isPanto = false,
  padding = 32,
  className,
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
  onCreate,
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
}) => {
  const [map, setMap] = useState<kakao.maps.Map>()

  const container = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!window.kakao) {
      console.warn(
        "kakao map javascript api를 먼저 불러와야 합니다. `https://apis.map.kakao.com/web/guide`"
      )
      return
    }

    kakao.maps.load(() => {
      const initalMapCenter =
        "lat" in center
          ? new kakao.maps.LatLng(center.lat, center.lng)
          : new kakao.maps.Coords(center.x, center.y)
      const kakaoMap = new kakao.maps.Map(container.current as HTMLDivElement, {
        center: initalMapCenter,
        disableDoubleClick: disableDoubleClick,
        disableDoubleClickZoom: disableDoubleClickZoom,
        draggable: draggable,
        keyboardShortcuts: keyboardShortcuts,
        level: level,
        mapTypeId: mapTypeId,
        projectionId: projectionId,
        scrollwheel: scrollwheel,
        tileAnimation: tileAnimation,
      })

      setMap(kakaoMap)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disableDoubleClick, disableDoubleClickZoom, mapTypeId, tileAnimation])

  useEffect(() => {
    if (!map || !onCreate) return
    onCreate(map)
  }, [map, onCreate])

  // center position 변경시 map center 변경
  useEffect(() => {
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
    // @ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, center.lat, center.lng, center.x, center.y])

  // Container style, className, id 등 디자인 요소가 변경될 요지가 변경시 relayout
  useEffect(() => {
    if (!map) return

    map.relayout()
  }, [map, style, className, id])

  useEffect(() => {
    if (!map || typeof draggable === "undefined") return
    map.setDraggable(draggable)
  }, [map, draggable])

  useEffect(() => {
    if (!map || typeof zoomable === "undefined") return
    map.setZoomable(zoomable)
  }, [map, zoomable])

  useEffect(() => {
    if (!map || !keyboardShortcuts || typeof keyboardShortcuts !== "boolean")
      return
    map.setKeyboardShortcuts(keyboardShortcuts)
  }, [map, keyboardShortcuts])

  useEffect(() => {
    if (!map || !level) return
    map.setLevel(level)
  }, [map, level])

  useEffect(() => {
    if (!map || !mapTypeId) return
    map.setMapTypeId(mapTypeId)
  }, [map, mapTypeId])

  useEffect(() => {
    if (!map || !projectionId) return
    map.setProjectionId(projectionId)
  }, [map, projectionId])

  useEffect(() => {
    if (!map || !maxLevel) return
    map.setMaxLevel(maxLevel)
  }, [map, maxLevel])

  useEffect(() => {
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
      <div id={id} style={style} className={className} ref={container}></div>
      {map && (
        <KakaoMapContext.Provider value={map}>
          {children}
        </KakaoMapContext.Provider>
      )}
    </>
  )
}

export default Map
