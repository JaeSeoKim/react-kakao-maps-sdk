import React, { useRef, useState, useImperativeHandle } from "react"
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect"

export interface StaticMapProps {
  /**
   * MapContinaer의 id에 대해서 지정합니다.
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
  center: {
    lat: number
    lng: number
  }

  /**
   * 확대 수준
   * @default 3
   */
  level?: number

  /**
   * 지도 종류 (기본값: 일반 지도)
   */
  mapTypeId?: kakao.maps.MapTypeId

  /**
   * 이미지 지도에 표시할 마커 또는 마커 배열
   */
  marker:
    | boolean
    | {
        /**
         * 마커 tooltip에 표시될 내용
         */
        text?: string
        /**
         * 마커 포지션
         */
        position?: {
          lat: number
          lng: number
        }
      }
    | Array<{
        /**
         * 마커 tooltip에 표시될 내용
         */
        text?: string
        /**
         * 마커 포지션
         */
        position: {
          lat: number
          lng: number
        }
      }>
  /**
   * StaticMap 생성 이벤트 핸들러
   */
  onCreate?: (maker: kakao.maps.StaticMap) => void
}

const StaticMap = React.forwardRef<kakao.maps.StaticMap, StaticMapProps>(
  (
    {
      id = "react-kakao-maps-sdk-staticmap-container",
      style,
      className,
      center,
      marker,
      level,
      mapTypeId,
      onCreate,
    },
    ref
  ) => {
    const [map, setMap] = useState<kakao.maps.StaticMap>()
    const container = useRef<HTMLDivElement>(null)

    useIsomorphicLayoutEffect(() => {
      if (!window.kakao) {
        console.warn(
          "kakao map javascript api를 먼저 불러와야 합니다. `https://apis.map.kakao.com/web/guide`"
        )
        return
      }

      const mapContainer = container.current
      if (!mapContainer) return

      kakao.maps.load(() => {
        const _marker = (() => {
          if (Array.isArray(marker)) {
            return marker.map((mk) => {
              return {
                ...mk,
                position: new kakao.maps.LatLng(
                  mk.position.lat,
                  mk.position.lng
                ),
              }
            })
          }
          if (typeof marker === "object") {
            if (!!marker.position) {
              return {
                ...marker,
                position: new kakao.maps.LatLng(
                  marker.position.lat,
                  marker.position.lng
                ),
              }
            }
            return marker as { text: string }
          }
          return marker
        })()
        const kakaoStaticMap = new kakao.maps.StaticMap(mapContainer, {
          center: new kakao.maps.LatLng(center.lat, center.lng),
          level,
          mapTypeId,
          marker: _marker,
        })

        setMap(kakaoStaticMap)
      })
    }, [JSON.stringify(marker)])

    useImperativeHandle(ref, () => map!, [map])

    useIsomorphicLayoutEffect(() => {
      if (map) map.setCenter(new kakao.maps.LatLng(center.lat, center.lng))
    }, [map, center.lat, center.lng])

    useIsomorphicLayoutEffect(() => {
      if (map && level) map.setLevel(level)
    }, [map, level])

    useIsomorphicLayoutEffect(() => {
      if (map && mapTypeId) map.setMapTypeId(mapTypeId)
    }, [map, mapTypeId])

    useIsomorphicLayoutEffect(() => {
      if (map && onCreate) onCreate(map)
    }, [map, onCreate])

    return (
      <div id={id} style={style} className={className} ref={container}></div>
    )
  }
)

export default StaticMap
