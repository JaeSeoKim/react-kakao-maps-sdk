import React, { useMemo } from "react"
import InfoWindow from "./InfoWindow"
import useRoadview from "../hooks/useRoadview"

export interface RoadviewInfoWindowProps {
  /**
   * 인포윈도가 표시될 위치
   */
  position:
    | {
        lat: number
        lng: number
      }
    | {
        /**
         * 가로 각도, 0부터 360 사이의 값으로 북쪽부터 시계방향으로 대응한다.
         */
        pan: number
        /**
         * 세로 각도, -90부터 90 사이의 값으로 위쪽부터 아래쪽으로 대응한다.
         */
        tilt: number
        /**
         * 확대 수준, -3부터 3 사이의 정수이다.
         */
        zoom?: number
        /**
         * 특정 위치의 로드뷰 고유의 아이디 값
         */
        panoId?: number
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

/**
 * Map 컴포넌트에서 InfoWindow를 그릴 때 사용됩니다.
 * `onCreate` 이벤트를 통해 생성 후 `infoWindow` 객체에 직접 접근하여 초기 설정이 가능합니다.
 */
const RoadviewInfoWindow = React.forwardRef<
  kakao.maps.InfoWindow,
  React.PropsWithChildren<RoadviewInfoWindowProps>
>(
  (
    {
      position,
      children,
      altitude,
      disableAutoPan,
      range,
      removable,
      zIndex,
      onCreate,
    },
    ref
  ) => {
    const roadview = useRoadview(`RoadviewInfoWindow`)
    const infoPosition = useMemo(() => {
      if ("lat" in position) {
        return new kakao.maps.LatLng(position.lat, position.lng)
      }
      return new kakao.maps.Viewpoint(
        position.pan,
        position.tilt,
        position.zoom,
        position.panoId
      )
      /* eslint-disable react-hooks/exhaustive-deps */
    }, [
      // @ts-ignore
      position.lat,
      // @ts-ignore
      position.lng,
      // @ts-ignore
      position.pan,
      // @ts-ignore
      position.tilt,
      // @ts-ignore
      position.zoom,
      // @ts-ignore
      position.panoId,
    ])
    /* eslint-enable react-hooks/exhaustive-deps */

    return (
      <InfoWindow
        altitude={altitude}
        disableAutoPan={disableAutoPan}
        range={range}
        removable={removable}
        zIndex={zIndex}
        map={roadview}
        position={infoPosition}
        onCreate={onCreate}
        ref={ref}
      >
        {children}
      </InfoWindow>
    )
  }
)

export default RoadviewInfoWindow
