import React, { useMemo } from "react"
import useMap from "../hooks/useMap"
import Marker from "./Marker"

export interface MapMarkerProps {
  /**
   * 표시 위치
   */
  position:
    | {
        lat: number
        lng: number
      }
    | {
        x: number
        y: number
      }

  image?: {
    /**
     * 표시 이미지 src
     */
    src: string

    /**
     * 표시 이미지 크기
     */
    size: {
      width: number
      height: number
    }

    options?: {
      /**
       * 마커 이미지의 alt 속성값을 정의한다.
       */
      alt?: string

      /**
       * 마커의 클릭 또는 마우스오버 가능한 영역을 표현하는 좌표값
       */
      coords?: string

      /**
       * 마커의 좌표에 일치시킬 이미지 안의 좌표 (기본값: 이미지의 가운데 아래)
       */
      offset?: { x: number; y: number }

      /**
       * 마커의 클릭 또는 마우스오버 가능한 영역의 모양
       */
      shape?: "default" | "rect" | "circle" | "poly"

      /**
       * 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
       */
      spriteOrigin?: { x: number; y: number }

      /**
       * 스프라이트 이미지의 전체 크기
       */
      spriteSize?: { width: number; height: number }
    }
  }

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
   * Maker 생성 이벤트 핸들러
   */
  onCreate?: (maker: kakao.maps.Marker) => void

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

/**
 * Map에서 Marker를 생성할 때 사용 합니다.
 * `onCreate` 이벤트를 통해 생성 후 `maker` 객체에 직접 접근하여 초기 설정이 가능합니다.
 */
const MapMarker: React.FC<MapMarkerProps> = ({
  image,
  position,
  children,
  altitude,
  clickable,
  draggable,
  infoWindowOptions,
  onClick,
  onDragEnd,
  onDragStart,
  onMouseOut,
  onMouseOver,
  onCreate,
  opacity,
  range,
  title,
  zIndex,
}) => {
  const map = useMap(`MapMarker`)

  const markerImage = useMemo(() => {
    return (
      image &&
      new kakao.maps.MarkerImage(
        image.src,
        new kakao.maps.Size(image.size.width, image.size.height),
        {
          alt: image.options?.alt,
          coords: image.options?.coords,
          offset:
            image.options?.offset &&
            new kakao.maps.Point(
              image.options?.offset.x,
              image.options?.offset.y
            ),
          shape: image.options?.shape,
          spriteOrigin:
            image.options?.spriteOrigin &&
            new kakao.maps.Point(
              image.options?.spriteOrigin.x,
              image.options?.spriteOrigin.y
            ),
          spriteSize:
            image.options?.spriteSize &&
            new kakao.maps.Size(
              image.options?.spriteSize.width,
              image.options?.spriteSize.height
            ),
        }
      )
    )
  }, [image])

  const markerPosition = useMemo(() => {
    if ("lat" in position) {
      return new kakao.maps.LatLng(position.lat, position.lng)
    }
    return new kakao.maps.Coords(position.x, position.y).toLatLng()

    // @ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position.lat, position.lng, position.x, position.y])

  return (
    <Marker
      map={map}
      position={markerPosition}
      image={markerImage}
      altitude={altitude}
      clickable={clickable}
      draggable={draggable}
      infoWindowOptions={infoWindowOptions}
      onClick={onClick}
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onCreate={onCreate}
      opacity={opacity}
      range={range}
      title={title}
      zIndex={zIndex}
    >
      {children}
    </Marker>
  )
}

export default MapMarker
