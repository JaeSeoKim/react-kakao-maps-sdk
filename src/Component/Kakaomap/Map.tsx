import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export const KakaoMapContext = React.createContext<kakao.maps.Map>(
  {} as kakao.maps.Map
);

export interface MapProps {
  /**
   * MapContainer의 className에 대해서 지정합니다.
   */
  className?: string;

  /**
   * 중심으로 설정할 위치 입니다.
   */
  center: {
    lat: number;
    lng: number;
  };

  /**
   * Map Continaer Size를 지정합니다.
   */
  size?: {
    width: string;
    height: string;
  };

  /**
   * 스크립트를 동적으로 로드확인을 위해 사용한다.
   * @default false
   */
  loading?: boolean;

  /**
   * kakao.maps.Map의 속성을 지정합니다.
   */
  option?: {
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
  children,
  center,
  className,
  size,
  loading = false,
  option,
}) => {
  const [map, setMap] = useState<kakao.maps.Map>();

  const container = useRef<HTMLDivElement>(null);

  /**
   * useRef와 함께 사용하는 경우에는 useLayoutEffect를 사용하여
   * container.current가 null를 가지고 있는 경우를 방지 할 수 있다.
   */
  useLayoutEffect(() => {
    if (loading) return;

    kakao.maps.load(() => {
      // 초기 위치 객체 생성
      const initalMapCenter = new kakao.maps.LatLng(center.lat, center.lng);

      // kakaoMap 객체 생성
      const kakaoMap = new kakao.maps.Map(container.current as HTMLDivElement, {
        center: initalMapCenter,
        ...option,
      });

      // kakaoMap 객체 저장
      setMap(kakaoMap);
    });
  }, [loading, center, option, container]);

  useEffect(() => {
    // size
    if (map === null || size === undefined) return;

    const { width, height } = size;

    container.current!.style.width = width;
    container.current!.style.height = height;
  }, [map, size]);

  return (
    <>
      <div
        id={"kakao-map-container"}
        className={className}
        ref={container}
      ></div>
      {map && (
        <KakaoMapContext.Provider value={map}>
          {children}
        </KakaoMapContext.Provider>
      )}
    </>
  );
};

export default Map;
