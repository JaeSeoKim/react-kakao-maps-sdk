import React, { useRef, useState, useImperativeHandle } from "react"
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect"
import { Loader } from "../util/kakaoMapApiLoader"
import { PolymorphicComponentPropsWithOutRef } from "../types"

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

type StaticMapComponent = <T extends React.ElementType = "div">(
  props: PolymorphicComponentPropsWithOutRef<T, StaticMapProps> &
    React.RefAttributes<kakao.maps.StaticMap>,
) => React.ReactNode | undefined

export const StaticMap: StaticMapComponent = React.forwardRef(
  function StaticMap<T extends React.ElementType = "div">(
    {
      as,
      id,
      center,
      marker,
      level,
      mapTypeId,
      onCreate,
      ...props
    }: PolymorphicComponentPropsWithOutRef<T, StaticMapProps>,
    ref: React.ForwardedRef<kakao.maps.StaticMap>,
  ) {
    const Container = as || "div"

    const [isLoaded, setIsLoaded] = useState(false)
    const [map, setMap] = useState<kakao.maps.StaticMap>()
    const container = useRef<HTMLDivElement>(null)

    useIsomorphicLayoutEffect(() => {
      Loader.isLoaded().then(setIsLoaded)
    }, [])

    useIsomorphicLayoutEffect(() => {
      if (!isLoaded) return

      const MapContainer = container.current
      if (!MapContainer) return

      const _marker = (() => {
        if (Array.isArray(marker)) {
          return marker.map((mk) => {
            return {
              ...mk,
              position: new kakao.maps.LatLng(mk.position.lat, mk.position.lng),
            }
          })
        }
        if (typeof marker === "object") {
          if (marker.position) {
            return {
              ...marker,
              position: new kakao.maps.LatLng(
                marker.position.lat,
                marker.position.lng,
              ),
            }
          }
          return marker as { text: string }
        }
        return marker
      })()
      const kakaoStaticMap = new kakao.maps.StaticMap(MapContainer, {
        center: new kakao.maps.LatLng(center.lat, center.lng),
        level,
        mapTypeId,
        marker: _marker,
      })
      setMap(kakaoStaticMap)
      return () => {
        MapContainer.innerHTML = ""
      }
    }, [isLoaded, JSON.stringify(marker)])

    useImperativeHandle(ref, () => map!, [map])

    useIsomorphicLayoutEffect(() => {
      if (map && onCreate) onCreate(map)
    }, [map, onCreate])

    useIsomorphicLayoutEffect(() => {
      if (map) map.setCenter(new kakao.maps.LatLng(center.lat, center.lng))
    }, [map, center.lat, center.lng])

    useIsomorphicLayoutEffect(() => {
      if (map && level) map.setLevel(level)
    }, [map, level])

    useIsomorphicLayoutEffect(() => {
      if (map && mapTypeId) map.setMapTypeId(mapTypeId)
    }, [map, mapTypeId])

    return <Container id={id} {...props} ref={container}></Container>
  },
)
