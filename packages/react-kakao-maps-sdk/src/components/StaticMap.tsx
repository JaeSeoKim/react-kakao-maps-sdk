import React, { useRef, useState, useImperativeHandle } from "react"
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect"
import { Loader } from "../util/kakaoMapApiLoader"
import {
  CompatibleReactElement,
  PolymorphicComponentPropsWithOutRef,
} from "../types"
import { useKakaoMapsSetEffect } from "../hooks/useKakaoMapsSetEffect"

export interface _StaticMapProps {
  /**
   * MapContinaer의 id에 대해서 지정합니다.
   */
  id?: string

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
  mapTypeId?: kakao.maps.MapTypeId | keyof typeof kakao.maps.MapTypeId

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

export type StaticMapProps<T extends React.ElementType = "div"> =
  PolymorphicComponentPropsWithOutRef<T, _StaticMapProps> &
    React.RefAttributes<kakao.maps.StaticMap>

export type StaticMapComponent = <T extends React.ElementType = "div">(
  props: StaticMapProps<T>,
) => CompatibleReactElement

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
    }: StaticMapProps<T>,
    ref: React.ForwardedRef<kakao.maps.StaticMap>,
  ) {
    const Container = as || "div"

    const [isLoaded, setIsLoaded] = useState(false)
    const [map, setMap] = useState<kakao.maps.StaticMap>()
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
        mapTypeId:
          typeof mapTypeId === "string"
            ? kakao.maps.MapTypeId[mapTypeId]
            : mapTypeId,
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

    useKakaoMapsSetEffect(map, "setLevel", level!)
    useKakaoMapsSetEffect(
      map,
      "setMapTypeId",
      typeof mapTypeId === "string"
        ? kakao.maps.MapTypeId[mapTypeId]
        : mapTypeId!,
    )

    return <Container id={id} {...props} ref={container}></Container>
  },
)
