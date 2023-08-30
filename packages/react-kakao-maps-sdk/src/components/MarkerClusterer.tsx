import React, {
  useLayoutEffect,
  useImperativeHandle,
  useMemo,
  useContext,
} from "react"
import { useKakaoEvent } from "../hooks/useKakaoEvent"
import { useMap } from "../hooks/useMap"
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect"

export const KakaoMapMarkerClustererContext =
  React.createContext<kakao.maps.MarkerClusterer>(
    undefined as unknown as kakao.maps.MarkerClusterer,
  )

export interface MarkerClustererProps {
  /**
   * 클러스터의 격자 크기. 화면 픽셀 단위이며 해당 격자 영역 안에 마커가 포함되면 클러스터에 포함시킨다
   * @default 60
   */
  gridSize?: number
  /**
   * 마커들의 좌표 평균을 클러스터 좌표 설정 여부
   * @default false
   */
  averageCenter?: boolean
  /**
   * 클러스터링 할 지도의 최소 레벨 값. 지정한 숫자에 해당하는 레벨 미만에서는 클러스터링 하지 않는다
   * @default 0
   */
  minLevel?: number
  /**
   * 클러스터링 할 최소 마커 수
   * @default 2
   */
  minClusterSize?: number
  /**
   * 클러스터의 스타일. 여러개를 선언하면 calculator 로 구분된 사이즈 구간마다 서로 다른 스타일을 적용시킬 수 있다
   */
  styles?: React.CSSProperties[] | object[]
  /**
   * 클러스터에 표시할 문자열 또는 문자열 생성 함수.
   * @default "클러스터에 포함된 숫자"
   */
  texts?: string[] | ((size: number) => string)
  /**
   * 클러스터 크기를 구분하는 값을 가진 배열 또는 구분값 생성함수
   * @default [10, 100, 1000, 10000]
   */
  calculator?: number[] | ((size: number) => number[])
  /**
   * 클러스터 클릭 시 지도 확대 여부. true로 설정하면 클러스터 클릭 시 확대 되지 않는다
   * @default false
   */
  disableClickZoom?: boolean
  /**
   * 클러스터 클릭 가능 여부 지정 옵션. false일 경우 클러스터의 clusterclick, clusterdblclick, clusterrightclick 이벤트가 발생하지 않으며, 커서가 변경되지 않는다.
   * @default true
   */
  clickable?: boolean
  /**
   * 클러스터에 마우스 over/out 가능 여부 지정 옵션. false일 경우 클러스터의 clusterover, clusterout 이벤트가 발생하지 않는다.
   * @default true
   */
  hoverable?: boolean

  /**
   * 클러스터 마커를 클릭 했을 때 발생한다.
   * 이벤트 핸들러 함수 인자로는 Cluster 객체가 넘어온다.
   * 클러스터 마커 클릭 시 지도가 줌인 되는 경우 원하는 Cluster 객체를 얻지 못할 수도 있다.
   * 때문에 MarkerClusterer 를 생성할 때 disableClickZoom 옵션을 true로 설정하여
   * 클러스터 마커를 클릭했을 때 지도가 줌인되지 않도록 설정 후 사용한다.
   */
  onClusterclick?: (
    target: kakao.maps.MarkerClusterer,
    cluster: kakao.maps.Cluster,
  ) => void
  /**
   * 클러스터 마커를 마우스 오버 했을 때 발생한다
   * 이벤트 핸들러 함수 인자로는 마우스 오버한 Cluster 객체가 넘어온다.
   */
  onClusterover?: (
    target: kakao.maps.MarkerClusterer,
    cluster: kakao.maps.Cluster,
  ) => void
  /**
   * 클러스터 마커를 마우스 아웃 했을 때 발생한다
   * 이벤트 핸들러 함수 인자로는 마우스 아웃된 Cluster 객체가 넘어온다.
   */
  onClusterout?: (
    target: kakao.maps.MarkerClusterer,
    cluster: kakao.maps.Cluster,
  ) => void
  /**
   * 클러스터 마커를 더블클릭 했을 때 발생한다
   * 이벤트 핸들러 함수 인자로는 더블클릭한 Cluster 객체가 넘어온다.
   * MarkerClusterer 를 생성할 때 disableClickZoom 옵션을 true로 설정해야만 이벤트가 발생한다.
   */
  onClusterdblclick?: (
    target: kakao.maps.MarkerClusterer,
    cluster: kakao.maps.Cluster,
  ) => void
  /**
   * 클러스터 마커를 오른쪽 클릭 했을 때 발생한다
   * 이벤트 핸들러 함수 인자로는 오른쪽 클릭한 Cluster 객체가 넘어온다.
   */
  onClusterrightclick?: (
    target: kakao.maps.MarkerClusterer,
    cluster: kakao.maps.Cluster,
  ) => void
  /**
   * 클러스터링이 완료됐을 때 발생한다.
   * 이벤트 핸들러 함수 인자로는 생성된 Cluster 객체 전체가 배열로 넘어온다.
   */
  onClustered?: (
    target: kakao.maps.MarkerClusterer,
    clusters: kakao.maps.Cluster[],
  ) => void
  /**
   * MarkerClusterer 생성 후 해당 객체를 전달하는 함수
   */
  onCreate?: (target: kakao.maps.MarkerClusterer) => void
}

export const MarkerClusterer = React.forwardRef<
  kakao.maps.MarkerClusterer,
  React.PropsWithChildren<MarkerClustererProps>
>(function MarkerClusterer(
  {
    children,
    averageCenter,
    calculator,
    clickable,
    disableClickZoom,
    gridSize,
    hoverable,
    minClusterSize,
    minLevel,
    styles,
    texts,
    onClusterclick,
    onClusterdblclick,
    onClustered,
    onClusterout,
    onClusterover,
    onClusterrightclick,
    onCreate,
  },
  ref,
) {
  const map = useMap(`MarkerClusterer`)
  const markerClusterer = useMemo(() => {
    if (!window.kakao.maps.MarkerClusterer) {
      console.warn(
        "clusterer 라이브러리를 별도 로드 해야 사용 가능합니다. `https://apis.map.kakao.com/web/guide/#loadlibrary`",
      )
      return
    }
    return new kakao.maps.MarkerClusterer({
      averageCenter,
      calculator,
      clickable,
      disableClickZoom,
      gridSize,
      hoverable,
      minClusterSize,
      minLevel,
      styles,
      texts,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useImperativeHandle(ref, () => markerClusterer!, [markerClusterer])

  useLayoutEffect(() => {
    markerClusterer?.setMap(map)
  }, [map, markerClusterer])

  useLayoutEffect(() => {
    if (markerClusterer && onCreate) onCreate(markerClusterer)
  }, [markerClusterer, onCreate])

  useLayoutEffect(() => {
    if (markerClusterer && gridSize) {
      markerClusterer.setGridSize(gridSize)
      markerClusterer.redraw()
    }
  }, [markerClusterer, gridSize])

  useLayoutEffect(() => {
    if (markerClusterer && minClusterSize) {
      markerClusterer.setMinClusterSize(minClusterSize)
      markerClusterer.redraw()
    }
  }, [markerClusterer, minClusterSize])

  useLayoutEffect(() => {
    if (markerClusterer && typeof averageCenter !== "undefined") {
      markerClusterer.setAverageCenter(averageCenter)
      markerClusterer.redraw()
    }
  }, [markerClusterer, averageCenter])

  useLayoutEffect(() => {
    if (markerClusterer && minLevel) {
      markerClusterer.setMinLevel(minLevel)
      markerClusterer.redraw()
    }
  }, [markerClusterer, minLevel])

  useLayoutEffect(() => {
    if (markerClusterer && texts) {
      markerClusterer.setTexts(texts)
      markerClusterer.redraw()
    }
  }, [markerClusterer, texts])

  useLayoutEffect(() => {
    if (markerClusterer && calculator) {
      markerClusterer.setCalculator(calculator)
      markerClusterer.redraw()
    }
  }, [markerClusterer, calculator])

  useKakaoEvent(markerClusterer, "clustered", onClustered)
  useKakaoEvent(markerClusterer, "clusterclick", onClusterclick)
  useKakaoEvent(markerClusterer, "clusterover", onClusterover)
  useKakaoEvent(markerClusterer, "clusterout", onClusterout)
  useKakaoEvent(markerClusterer, "clusterdblclick", onClusterdblclick)
  useKakaoEvent(markerClusterer, "clusterrightclick", onClusterrightclick)

  useLayoutEffect(() => {
    if (markerClusterer && styles) {
      markerClusterer.setStyles(styles)
      markerClusterer.redraw()
    }
  }, [markerClusterer, styles])

  if (!markerClusterer) {
    return null
  }

  return (
    <KakaoMapMarkerClustererContext.Provider value={markerClusterer}>
      {children}
      <MarkerClustererRedraw>{children}</MarkerClustererRedraw>
    </KakaoMapMarkerClustererContext.Provider>
  )
})

const MarkerClustererRedraw: React.FC<{ children: React.ReactNode }> = ({
  children: _,
}) => {
  const markerClusterer = useContext(KakaoMapMarkerClustererContext)
  useIsomorphicLayoutEffect(() => {
    markerClusterer.redraw()
  })
  return null
}
