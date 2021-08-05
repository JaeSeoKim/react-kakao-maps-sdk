import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export const KakaoRoadviewContext = React.createContext<kakao.maps.Roadview>(
  {} as kakao.maps.Roadview
);

export interface RoadviewProps {
  /**
   * MapContainer의 className에 대해서 지정합니다.
   */
  className?: string;

  /**
   * 중심으로 설정할 위치 입니다.
   * 해당 lat와 lng에 해당하는 radius범위 안에서 가장가까운 Roadview을 선택합니다.
   * 만약 없다면 lat, lng로 설정 됩니다.
   */
  center: {
    lat: number;
    lng: number;
    radius: number;
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
   * kakao.maps.Roadview 속성을 지정합니다.
   */
  option?: {
    /**
     * 로드뷰 시작 지역의 고유 아이디 값.
     */
    panoId?: number;

    /**
     * panoId가 유효하지 않을 경우 지도좌표를 기반으로 데이터를 요청할 수평 좌표값.
     */
    panoX?: number;

    /**
     * panoId가 유효하지 않을 경우 지도좌표를 기반으로 데이터를 요청할 수직 좌표값.
     */
    panoY?: number;

    /**
     * 로드뷰 처음 실행시에 바라봐야 할 수평 각. 0이 정북방향. (0_360)
     */
    pan?: number;

    /**
     * 로드뷰 처음 실행시에 바라봐야 할 수직 각.(-90_90)
     */
    tilt?: number;

    /**
     * 로드뷰 줌 초기값.(-3_3)
     */
    zoom?: number;
  };
}

const Roadview: React.FC<RoadviewProps> = ({
  children,
  center,
  className,
  size,
  loading = false,
  option,
}) => {
  const [roadview, setRoadview] = useState<kakao.maps.Roadview>();

  const container = useRef<HTMLDivElement>(null);

  /**
   * useRef와 함께 사용하는 경우에는 useLayoutEffect를 사용하여
   * container.current가 null를 가지고 있는 경우를 방지 할 수 있다.
   */
  useLayoutEffect(() => {
    if (loading || roadview !== undefined) return;

    kakao.maps.load(() => {
      // 초기 위치 객체 생성
      const initalPosition = new kakao.maps.LatLng(center.lat, center.lng);

      // kakaoRoadview 객체 생성
      const kakaoRoadview = new kakao.maps.Roadview(
        container.current as HTMLDivElement,
        option
      );

      const kakaoRoadviewClient = new kakao.maps.RoadviewClient();

      kakaoRoadviewClient.getNearestPanoId(
        initalPosition,
        center.radius,
        (panoId) => {
          kakaoRoadview.setPanoId(panoId, initalPosition);
        }
      );

      // kakaoRoadview 객체 저장
      setRoadview(kakaoRoadview);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, center, option, container]);

  useEffect(() => {
    // size
    if (roadview === undefined || size === undefined) return;

    const { width, height } = size;

    container.current!.style.width = width;
    container.current!.style.height = height;

    roadview.relayout();
  }, [roadview, size]);

  return (
    <>
      <div
        id={"kakao-roadview-container"}
        className={className}
        ref={container}
      ></div>
      {roadview && (
        <KakaoRoadviewContext.Provider value={roadview}>
          {children}
        </KakaoRoadviewContext.Provider>
      )}
    </>
  );
};

export default Roadview;
