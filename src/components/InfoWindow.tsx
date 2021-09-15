import React, { useEffect, useMemo, useRef } from "react"
import ReactDom from "react-dom"

interface InfoWindowProps {
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
  style?: CSSStyleDeclaration

  map: kakao.maps.Map | kakao.maps.Roadview
  position: kakao.maps.LatLng | kakao.maps.Viewpoint
  marker?: kakao.maps.Marker
  /**
   * 인포윈도우를 열 때 지도가 자동으로 패닝하지 않을지의 여부
   * @default false
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

  /**
   * 인포윈도우 객체 생성후 해당 객체를 반환하는 함수
   */
  onCreate?: (infoWindow: kakao.maps.InfoWindow) => void
}

const InfoWindow: React.FC<InfoWindowProps> = ({
  id,
  className,
  style,
  map,
  position,
  marker,
  children,
  altitude,
  disableAutoPan,
  range,
  removable,
  zIndex,
  onCreate,
}) => {
  const container = useRef(document.createElement("div"))

  const infoWindow = useMemo(() => {
    const kakaoInfoWindow = new kakao.maps.InfoWindow({
      altitude: altitude,
      disableAutoPan: disableAutoPan,
      range: range,
      removable: removable,
      zIndex: zIndex,
      content: container.current,
      position: position,
    })
    container.current.style.whiteSpace = "nowrap"
    return kakaoInfoWindow
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disableAutoPan, removable])

  useEffect(() => {
    infoWindow.open(map, marker)
    return () => {
      infoWindow.close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, marker])

  useEffect(() => {
    if (onCreate) onCreate(infoWindow)
  }, [infoWindow, onCreate])

  useEffect(() => {
    if (!infoWindow) return
    infoWindow.setPosition(position)
  }, [infoWindow, position])

  useEffect(() => {
    if (!infoWindow || !altitude) return
    infoWindow.setAltitude(altitude)
  }, [infoWindow, altitude])

  useEffect(() => {
    if (!infoWindow || !range) return
    infoWindow.setRange(range)
  }, [infoWindow, range])

  useEffect(() => {
    if (!infoWindow || !zIndex) return
    infoWindow.setZIndex(zIndex)
  }, [infoWindow, zIndex])

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

  return ReactDom.createPortal(children, container.current)
}

export default InfoWindow
