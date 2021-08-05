import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export const KakaoMapContext = React.createContext<kakao.maps.Map>(
  undefined as unknown as kakao.maps.Map
);

export interface MapProps {
  /**
   * MapContinaer의 id에 대해서 지정합니다.
   *
   * containerElem가 들어온다면 무시 됩니다.
   *
   * @default  "kakao-map-container"
   */
  id?: string;

  /**
   * MapContainer의 className에 대해서 지정합니다.
   *
   * containerElem가 들어온다면 무시 됩니다.
   */
  className?: string;

  /**
   * MapContainer의 style에 대해서 지정합니다.
   *
   * containerElem가 들어온다면 무시 됩니다.
   */
  style?: React.CSSProperties;

  /**
   * MapContainer Elem를 사용자 정의 합니다.
   */
  containerElem?: HTMLElement | null;

  /**
   * 중심으로 설정할 위치 입니다.
   */
  position: {
    lat: number;
    lng: number;
  };

  /**
   * 스크립트를 동적으로 로드확인을 위해 사용한다.
   * @default false
   */
  loading?: boolean;

  /**
   * kakao.maps.Map의 속성을 지정합니다.
   */
  options?: {
    /**
     * 확대 수준 (기본값: 3)
     */
    level?: number;

    /**
     * 지도 종류 (기본값: 일반 지도)
     */
    mapTypeId?: kakao.maps.MapTypeId;

    /**
     * 마우스 드래그, 휠, 모바일 터치를 이용한 시점 변경(이동, 확대, 축소) 가능 여부
     */
    draggable?: boolean;

    /**
     * 마우스 휠, 모바일 터치를 이용한 확대 및 축소 가능 여부
     */
    scrollwheel?: boolean;

    /**
     * 더블클릭 이벤트 및 더블클릭 확대 가능 여부
     */
    disableDoubleClick?: boolean;

    /**
     * 더블클릭 확대 가능 여부
     */
    disableDoubleClickZoom?: boolean;

    /**
     * 투영법 지정 (기본값: kakao.maps.ProjectionId.WCONG)
     */
    projectionId?: string;

    /**
     * 지도 타일 애니메이션 설정 여부 (기본값: true)
     */
    tileAnimation?: boolean;

    /**
     * 키보드의 방향키와 +, – 키로 지도 이동,확대,축소 가능 여부 (기본값: false)
     */
    keyboardShortcuts?:
      | boolean
      | {
          /**
           * 지도 이동 속도
           */
          speed: number;
        };
  };
}

const Map: React.FC<MapProps> = ({
  id = "kakao-map-container",
  style,
  containerElem,
  children,
  position,
  className,
  loading = false,
  options,
}) => {
  const [map, setMap] = useState<kakao.maps.Map>();

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading || !containerElem || map !== undefined) return;

    kakao.maps.load(() => {
      // 초기 위치 객체 생성
      const initalMapCenter = new kakao.maps.LatLng(position.lat, position.lng);

      // kakaoMap 객체 생성
      const kakaoMap = new kakao.maps.Map(containerElem, {
        center: initalMapCenter,
        ...options,
      });

      // kakaoMap 객체 저장
      setMap(kakaoMap);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, options, containerElem, map]);

  useEffect(() => {
    if (!map || !containerElem) return;

    const observer = new MutationObserver(() => {
      map.relayout();
    });

    observer.observe(containerElem, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => {
      observer.disconnect();
    };
  }, [map, containerElem]);

  useLayoutEffect(() => {
    if (loading || containerElem || map !== undefined) return;

    kakao.maps.load(() => {
      // 초기 위치 객체 생성
      const initalMapCenter = new kakao.maps.LatLng(position.lat, position.lng);

      // kakaoMap 객체 생성
      const kakaoMap = new kakao.maps.Map(container.current as HTMLDivElement, {
        center: initalMapCenter,
        ...options,
      });

      // kakaoMap 객체 저장
      setMap(kakaoMap);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, options, container]);

  useEffect(() => {
    if (!map) return;

    map.setCenter(new kakao.maps.LatLng(position.lat, position.lng));
  }, [map, position]);

  useEffect(() => {
    if (!map || containerElem) return;

    map.relayout();
  }, [map, style, className, id, containerElem]);

  return (
    <>
      {!containerElem && (
        <div id={id} style={style} className={className} ref={container}></div>
      )}
      {map && (
        <KakaoMapContext.Provider value={map}>
          {children}
        </KakaoMapContext.Provider>
      )}
    </>
  );
};

export default Map;
