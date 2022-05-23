import React, {
  useContext,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
} from "react"
import useKakaoEvent from "../hooks/useKakaoEvent"
import InfoWindow from "./InfoWindow"
import { KakaoMapMarkerClustererContext } from "./MarkerClusterer"

interface MarkerProps {
  map: kakao.maps.Map | kakao.maps.Roadview
  position: kakao.maps.LatLng | kakao.maps.Viewpoint

  /**
   * marker 생성 후 marker 객체를 전달하는 callback
   */
  onCreate?: (marker: kakao.maps.Marker) => void

  /**
   * click 이벤트 핸들러
   */
  onClick?: (marker: kakao.maps.Marker) => void

  /**
   * mouseover 이벤트 핸들러
   */
  onMouseOver?: (marker: kakao.maps.Marker) => void

  /**
   * mouseout 이벤트 핸들러
   */
  onMouseOut?: (marker: kakao.maps.Marker) => void

  /**
   * dragstart 이벤트 핸들러
   */
  onDragStart?: (marker: kakao.maps.Marker) => void

  /**
   * dragend 이벤트 핸들러
   */
  onDragEnd?: (marker: kakao.maps.Marker) => void

  /**
   * 마커의 이미지
   */
  image?: kakao.maps.MarkerImage

  /**
   * 마커 엘리먼트의 타이틀 속성 값 (툴팁)
   */
  title?: string

  /**
   * 드래그 가능한 마커, 로드뷰에 올릴 경우에는 유효하지 않다.
   */
  draggable?: boolean

  /**
   * 클릭 가능한 마커
   */
  clickable?: boolean

  /**
   * 마커 엘리먼트의 z-index 속성 값
   */
  zIndex?: number

  /**
   * 마커 투명도 (0-1)
   */
  opacity?: number

  /**
   * 로드뷰에 올라있는 마커의 높이 값(m 단위)
   */
  altitude?: number

  /**
   * 로드뷰 상에서 마커의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 마커는 로드뷰에서 보이지 않게 된다.
   */
  range?: number

  /**
   * InfoWindow 옵션
   */
  infoWindowOptions?: {
    /**
     * 인포윈도우를 열 때 지도가 자동으로 패닝하지 않을지의 여부 (기본값: false)
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
  }
}

const Marker = React.forwardRef<
  kakao.maps.Marker,
  React.PropsWithChildren<MarkerProps>
>(
  (
    {
      map,
      position,
      children,
      altitude,
      clickable,
      draggable,
      image,
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
    },
    ref
  ) => {
    const markerCluster = useContext(KakaoMapMarkerClustererContext)

    // Marker 객체는 단 한번만 생성 되도록 함
    const marker = useMemo(() => {
      const kakaoMarker = new kakao.maps.Marker({
        altitude,
        clickable,
        draggable,
        image,
        opacity,
        range,
        title,
        zIndex,
        position,
      })

      return kakaoMarker
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useImperativeHandle(ref, () => marker, [marker])

    useLayoutEffect(() => {
      if (markerCluster) {
        markerCluster.addMarker(marker)
      } else {
        marker.setMap(map)
      }

      return () => {
        if (markerCluster) {
          markerCluster.removeMarker(marker)
        } else {
          marker.setMap(null)
        }
      }
    }, [map, markerCluster, marker])

    useLayoutEffect(() => {
      if (onCreate) onCreate(marker)
    }, [marker, onCreate])

    useKakaoEvent(marker, "click", onClick)
    useKakaoEvent(marker, "dragstart", onDragStart)
    useKakaoEvent(marker, "dragend", onDragEnd)
    useKakaoEvent(marker, "mouseout", onMouseOut)
    useKakaoEvent(marker, "mouseover", onMouseOver)

    // position이 변경되면 객체를 갱신한다.
    useLayoutEffect(() => {
      if (!map || !marker || !position) return

      marker.setPosition(position)
    }, [map, marker, position])

    // image 객체가 존재하면 이미지를 로드한다
    useLayoutEffect(() => {
      if (!map || !marker || !image) return

      marker.setImage(image)
    }, [map, marker, image])

    // altitude 값이 있으면 높이를 조정한다
    useLayoutEffect(() => {
      if (!map || !marker || !altitude) return

      marker.setAltitude(altitude)
    }, [map, marker, altitude])

    // clickable 값이 있으면 클릭이 가능하도록 한다.
    useLayoutEffect(() => {
      if (!map || !marker || typeof clickable === "undefined") return

      marker.setClickable(clickable)
    }, [map, marker, clickable])

    // draggable 값이 있으면 드래그가 가능하도록 한다.
    useLayoutEffect(() => {
      if (!map || !marker || typeof draggable === "undefined") return

      marker.setDraggable(draggable)
    }, [map, marker, draggable])

    // opacity 값이 있으면 투명도를 조절한다.
    useLayoutEffect(() => {
      if (!map || !marker || !opacity) return

      marker.setOpacity(opacity)
    }, [map, marker, opacity])

    // range 값이 있으면 마커의 가시반경을 조절한다.
    useLayoutEffect(() => {
      if (!map || !marker || !range) return

      marker.setRange(range)
    }, [map, marker, range])

    // title 값이 있으면 마커의 제목을 조절한다.
    useLayoutEffect(() => {
      if (!map || !marker || !title) return

      marker.setTitle(title)
    }, [map, marker, title])

    // zIndex 값이 있으면 마커의 zindex를 조절한다.
    useLayoutEffect(() => {
      if (!map || !marker || !zIndex) return

      marker.setZIndex(zIndex)
    }, [map, marker, zIndex])

    if (children)
      return (
        <InfoWindow
          position={position}
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

    return null
  }
)

export default Marker
