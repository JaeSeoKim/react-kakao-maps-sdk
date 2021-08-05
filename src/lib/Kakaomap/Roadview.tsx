import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export const KakaoRoadviewContext = React.createContext<kakao.maps.Roadview>(
  undefined as unknown as kakao.maps.Roadview
);

export interface RoadviewProps {
  /**
   * MapContinaer의 id에 대해서 지정합니다.
   *
   * containerElem가 들어온다면 무시 됩니다.
   *
   * @default  "kakao-roadview-container"
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
   * 해당 lat와 lng에 해당하는 radius범위 안에서 가장가까운 Roadview을 선택합니다.
   * 만약 없다면 lat, lng로 설정 됩니다.
   */
  position: {
    lat: number;
    lng: number;
    radius: number;
  };

  /**
   * 스크립트를 동적으로 로드확인을 위해 사용한다.
   * @default false
   */
  loading?: boolean;

  /**
   * kakao.maps.Roadview 속성을 지정합니다.
   */
  options?: {
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
  id = "kakao-roadview-container",
  containerElem,
  style,
  children,
  position,
  className,
  loading = false,
  options,
}) => {
  const [roadview, setRoadview] = useState<kakao.maps.Roadview>();

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading || !containerElem || roadview !== undefined) return;

    kakao.maps.load(() => {
      // 초기 위치 객체 생성
      const initalPosition = new kakao.maps.LatLng(position.lat, position.lng);

      // kakaoRoadview 객체 생성
      const kakaoRoadview = new kakao.maps.Roadview(containerElem, options);

      const kakaoRoadviewClient = new kakao.maps.RoadviewClient();

      kakaoRoadviewClient.getNearestPanoId(
        initalPosition,
        position.radius,
        (panoId) => {
          kakaoRoadview.setPanoId(panoId, initalPosition);
        }
      );

      // kakaoRoadview 객체 저장
      setRoadview(kakaoRoadview);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, options, containerElem, roadview]);

  useEffect(() => {
    if (!roadview || !containerElem) return;

    const observer = new MutationObserver(() => {
      roadview.relayout();
    });

    observer.observe(containerElem, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => {
      observer.disconnect();
    };
  }, [roadview, containerElem]);

  /**
   * useRef와 함께 사용하는 경우에는 useLayoutEffect를 사용하여
   * container.current가 null를 가지고 있는 경우를 방지 할 수 있다.
   */
  useLayoutEffect(() => {
    if (loading || containerElem || roadview !== undefined) return;

    kakao.maps.load(() => {
      // 초기 위치 객체 생성
      const initalPosition = new kakao.maps.LatLng(position.lat, position.lng);

      // kakaoRoadview 객체 생성
      const kakaoRoadview = new kakao.maps.Roadview(
        container.current as HTMLDivElement,
        options
      );

      const kakaoRoadviewClient = new kakao.maps.RoadviewClient();

      kakaoRoadviewClient.getNearestPanoId(
        initalPosition,
        position.radius,
        (panoId) => {
          kakaoRoadview.setPanoId(panoId, initalPosition);
        }
      );

      // kakaoRoadview 객체 저장
      setRoadview(kakaoRoadview);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, options, container]);

  useEffect(() => {
    if (!roadview || containerElem) return;

    roadview.relayout();
  }, [roadview, style, className, id, containerElem]);

  useEffect(() => {
    if (!roadview) return;

    const initalPosition = new kakao.maps.LatLng(position.lat, position.lng);

    const kakaoRoadviewClient = new kakao.maps.RoadviewClient();

    kakaoRoadviewClient.getNearestPanoId(
      initalPosition,
      position.radius,
      (panoId) => {
        roadview.setPanoId(panoId, initalPosition);
      }
    );
  }, [roadview, position]);

  return (
    <>
      {!containerElem && (
        <div id={id} className={className} style={style} ref={container}></div>
      )}
      {roadview && (
        <KakaoRoadviewContext.Provider value={roadview}>
          {children}
        </KakaoRoadviewContext.Provider>
      )}
    </>
  );
};

export default Roadview;
