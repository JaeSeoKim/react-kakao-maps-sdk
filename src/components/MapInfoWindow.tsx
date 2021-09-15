import React, { useMemo } from "react"
import InfoWindow from "./InfoWindow"
import useMap from "../hooks/useMap"

export interface MapInfoWindowProps {
  /**
   * Contianer id에 대해서 지정합니다.
   */
  id?: string

  /**
   * Contianer className에 대해서 지정합니다.
   */
  className?: string

  /**
   * Contianer style에 대해서 지정합니다.
   */
  style?: React.CSSProperties

  /**
   * 인포윈도가 표시될 위치
   */
  position: {
    lat: number
    lng: number
  }
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
   * 인포윈도우 객체 생성후 해당 객체를 반환하는 함수
   */
  onCreate?: (infoWindow: kakao.maps.InfoWindow) => void
}

/**
 * Map 컴포넌트에서 InfoWindow를 그릴 때 사용됩니다.
 * `onCreate` 이벤트를 통해 생성 후 `infoWindow` 객체에 직접 접근하여 초기 설정이 가능합니다.
 */
const MapInfoWindow: React.FC<MapInfoWindowProps> = ({
  id,
  className,
  style,
  position,
  children,
  disableAutoPan,
  removable,
  zIndex,
  onCreate,
}) => {
  const map = useMap(`MapInfoWindow`)
  const infoPosition = useMemo(() => {
    return new kakao.maps.LatLng(position.lat, position.lng)
  }, [position.lat, position.lng])

  return (
    <InfoWindow
      id={id}
      className={className}
      style={style}
      disableAutoPan={disableAutoPan}
      removable={removable}
      zIndex={zIndex}
      map={map}
      position={infoPosition}
      onCreate={onCreate}
    >
      {children}
    </InfoWindow>
  )
}

export default MapInfoWindow
