import React, { useImperativeHandle, useRef, useState } from "react"
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect"
import useKakaoEvent from "../hooks/useKakaoEvent"
import { PolymorphicComponentProps, PolymorphicComponentPropsWithOutRef } from "../types"
import { Loader } from "../util/kakaoMapApiLoader"

export const KakaoRoadviewContext = React.createContext<kakao.maps.Roadview>(
  undefined as unknown as kakao.maps.Roadview
)

export interface RoadviewProps {
  /**
   * 중심으로 설정할 위치 입니다.
   * 해당 lat와 lng에 해당하는 radius범위 안에서 가장가까운 Roadview을 선택합니다.
   * 만약 없다면 lat, lng로 설정 됩니다.
   */
  position: {
    lat: number
    lng: number
    radius: number
  }

  /**
   * 로드뷰 시작 지역의 고유 아이디 값.
   */
  panoId?: number

  /**
   * panoId가 유효하지 않을 경우 지도좌표를 기반으로 데이터를 요청할 수평 좌표값.
   */
  panoX?: number

  /**
   * panoId가 유효하지 않을 경우 지도좌표를 기반으로 데이터를 요청할 수직 좌표값.
   */
  panoY?: number

  /**
   * 로드뷰 처음 실행시에 바라봐야 할 수평 각. 0이 정북방향. (0_360)
   */
  pan?: number

  /**
   * 로드뷰 처음 실행시에 바라봐야 할 수직 각.(-90_90)
   */
  tilt?: number

  /**
   * 로드뷰 줌 초기값.(-3_3)
   */
  zoom?: number

  /**
   * 로드뷰 생성후 해당 객체를 전달하는 callback.
   */
  onCreate?: (roadview: kakao.maps.Roadview) => void

  /**
   * 로드뷰가 초기화를 끝내면 발생한다.
   */
  onInit?: (target: kakao.maps.Roadview) => void

  /**
   * 파노라마 ID가 바뀌면 발생한다.
   */
  onPanoidChange?: (target: kakao.maps.Roadview) => void

  /**
   * 시점이 바뀌면 발생한다.
   */
  onViewpointChange?: (target: kakao.maps.Roadview) => void

  /**
   * 지도 좌표가 바뀌면 발생한다.
   */
  onPositionChanged?: (target: kakao.maps.Roadview) => void

  /**
   * getNearestPanoId 동작 실패시 호출 합니다.
   */
  onErrorGetNearestPanoId?: (target: kakao.maps.Roadview) => void
}

type RoadviewComponent = <T extends React.ElementType = "div">(
  props: PolymorphicComponentPropsWithOutRef<T, RoadviewProps>
) => React.ReactElement | null
/**
 * Roadview를 Roadview를 생성하는 컴포넌트 입니다.
 * props로 받는 `on*` 이벤트는 해당 `kakao.maps.Map` 객체를 반환 합니다.
 * `onCreate` 이벤트를 통해 생성 후 `Roadview` 객체에 직접 접근하여 초기 설정이 가능합니다.
 */
const Roadview: RoadviewComponent = React.forwardRef(
  <T extends React.ElementType = "div">(
    {
      as,
      children,
      position,
      pan,
      panoId,
      panoX,
      panoY,
      tilt,
      zoom,
      onCreate,
      onInit,
      onPanoidChange,
      onPositionChanged,
      onViewpointChange,
      onErrorGetNearestPanoId,
      ...props
    }: PolymorphicComponentProps<T, React.PropsWithChildren<RoadviewProps>>,
    ref: React.ForwardedRef<kakao.maps.Roadview>
  ) => {
    const Container = as || "div"
    const [isLoaded, setIsLoaded] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [roadview, setRoadview] = useState<kakao.maps.Roadview>()
    const container = useRef<HTMLDivElement>(null)

    useIsomorphicLayoutEffect(() => {
      Loader.isLoaded().then(setIsLoaded)
    }, [])

    useIsomorphicLayoutEffect(() => {
      if (!isLoaded) return

      const RoadviewContainer = container.current

      if (!RoadviewContainer) return

      const kakaoRoadview = new kakao.maps.Roadview(RoadviewContainer, {
        pan: pan,
        panoId: panoId,
        panoX: panoX,
        panoY: panoY,
        tilt: tilt,
        zoom: zoom,
      })

      setRoadview(kakaoRoadview)

      return () => {
        RoadviewContainer.innerHTML = ""
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoaded, panoX, panoY, zoom])

    useImperativeHandle(ref, () => roadview!, [roadview])

    useIsomorphicLayoutEffect(() => {
      if (!roadview || !onCreate) return
      onCreate(roadview)
    }, [roadview, onCreate])

    useIsomorphicLayoutEffect(() => {
      if (
        !roadview ||
        panoId ||
        (roadview.getPosition().getLat() === position.lat &&
          roadview.getPosition().getLng() === position.lng)
      )
        return

      const newPostion = new kakao.maps.LatLng(position.lat, position.lng)

      new kakao.maps.RoadviewClient().getNearestPanoId(
        newPostion,
        position.radius,
        (panoId) => {
          if (panoId === null && onErrorGetNearestPanoId) {
            onErrorGetNearestPanoId(roadview)
          } else {
            roadview.setPanoId(panoId, newPostion)
          }
        }
      )
    }, [
      roadview,
      panoId,
      position.lat,
      position.lng,
      position.radius,
      onErrorGetNearestPanoId,
    ])

    useIsomorphicLayoutEffect(() => {
      if (
        !roadview ||
        !panoId ||
        panoId === roadview.getPanoId() ||
        (roadview.getPosition().getLat() === position.lat &&
          roadview.getPosition().getLng() === position.lng)
      )
        return

      const newPostion = new kakao.maps.LatLng(position.lat, position.lng)
      roadview.setPanoId(panoId, newPostion)
    }, [roadview, panoId, position.lat, position.lng])

    useIsomorphicLayoutEffect(() => {
      if (!roadview) return

      const prevViewpoint = roadview.getViewpoint()

      if (prevViewpoint.pan === pan && prevViewpoint.tilt === tilt) return

      if (pan) prevViewpoint.pan = pan
      if (tilt) prevViewpoint.tilt = tilt
      roadview.setViewpoint(prevViewpoint)
    }, [roadview, pan, tilt])

    useKakaoEvent(roadview, "init", (target) => {
      setIsLoading(false)
      if (onInit) onInit(target)
    })
    useKakaoEvent(roadview, "panoid_changed", onPanoidChange)
    useKakaoEvent(roadview, "viewpoint_changed", onViewpointChange)
    useKakaoEvent(roadview, "position_changed", onPositionChanged)

    return (
      <>
        <Container ref={container} {...props} />
        {roadview && !isLoading && (
          <KakaoRoadviewContext.Provider value={roadview}>
            {children}
          </KakaoRoadviewContext.Provider>
        )}
      </>
    )
  }
)

export default Roadview
