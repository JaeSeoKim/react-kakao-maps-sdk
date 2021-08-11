import React, { useEffect, useRef, useState } from "react";
import useKakaoEvent from "./hooks/useKakaoEvent";

export const KakaoRoadviewContext = React.createContext<kakao.maps.Roadview>(
  undefined as unknown as kakao.maps.Roadview
);

export interface RoadviewProps {
  /**
   * roadviewContinaer의 id에 대해서 지정합니다.
   *
   * containerElem가 들어온다면 무시 됩니다.
   *
   * @default  "kakao-roadview-container"
   */
  id?: string;

  /**
   * roadviewContainer의 className에 대해서 지정합니다.
   *
   * containerElem가 들어온다면 무시 됩니다.
   */
  className?: string;

  /**
   * roadviewContainer의 style에 대해서 지정합니다.
   *
   * containerElem가 들어온다면 무시 됩니다.
   */
  style?: React.CSSProperties;

  /**
   * roadviewContainer Elem를 사용자 정의 합니다.
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

  /**
   * 로드뷰 생성후 해당 객체를 전달하는 callback.
   */
  onRoadviewCreated?: (roadview: kakao.maps.Roadview) => void;

  /**
   * 로드뷰가 초기화를 끝내면 발생한다.
   */
  onInit?: (target: kakao.maps.Roadview) => void;

  /**
   * 파노라마 ID가 바뀌면 발생한다.
   */
  onPanoidChange?: (target: kakao.maps.Roadview) => void;

  /**
   * 시점이 바뀌면 발생한다.
   */
  onViewpointChange?: (target: kakao.maps.Roadview) => void;

  /**
   * 지도 좌표가 바뀌면 발생한다.
   */
  onPositionChanged?: (target: kakao.maps.Roadview) => void;
}

const Roadview: React.FC<RoadviewProps> = ({
  id = "kakao-roadview-container",
  containerElem,
  style,
  children,
  position,
  className,
  pan,
  panoId,
  panoX,
  panoY,
  tilt,
  zoom,
  onRoadviewCreated,
  onInit,
  onPanoidChange,
  onPositionChanged,
  onViewpointChange,
}) => {
  const [roadview, setRoadview] = useState<kakao.maps.Roadview>();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = containerElem ? containerElem : container.current;

    if (!target) return;

    const kakaoRoadview = new kakao.maps.Roadview(target, {
      pan: pan,
      panoId: panoId,
      panoX: panoX,
      panoY: panoY,
      tilt: tilt,
      zoom: zoom,
    });

    setRoadview(kakaoRoadview);
    if (onRoadviewCreated) onRoadviewCreated(kakaoRoadview);
  }, [containerElem, onRoadviewCreated, pan, panoId, panoX, panoY, tilt, zoom]);

  useEffect(() => {
    if (
      !roadview ||
      panoId ||
      (roadview.getPosition().getLat() === position.lat &&
        roadview.getPosition().getLng() === position.lng)
    )
      return;

    const newPostion = new kakao.maps.LatLng(position.lat, position.lng);

    new kakao.maps.RoadviewClient().getNearestPanoId(
      newPostion,
      position.radius,
      (panoId) => {
        roadview.setPanoId(panoId, newPostion);
      }
    );
  }, [roadview, panoId, position.lat, position.lng, position.radius]);

  useEffect(() => {
    if (
      !roadview ||
      !panoId ||
      panoId === roadview.getPanoId() ||
      (roadview.getPosition().getLat() === position.lat &&
        roadview.getPosition().getLng() === position.lng)
    )
      return;

    const newPostion = new kakao.maps.LatLng(position.lat, position.lng);
    roadview.setPanoId(panoId, newPostion);
  }, [roadview, panoId, position.lat, position.lng]);

  // containerElem size 갱신시 roadview relayout 이벤트 처리
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

  // Container style, className, id 등 디자인 요소가 변경될 요지가 변경시 relayout
  useEffect(() => {
    if (!roadview || containerElem) return;

    roadview.relayout();
  }, [roadview, style, className, id, containerElem]);

  useKakaoEvent(roadview, "init", onInit);
  useKakaoEvent(roadview, "panoid_changed", onPanoidChange);
  useKakaoEvent(roadview, "viewpoint_changed", onViewpointChange);
  useKakaoEvent(roadview, "position_changed", onPositionChanged);

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
