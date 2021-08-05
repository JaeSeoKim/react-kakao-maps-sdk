import React, { useContext, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { KakaoRoadviewContext } from "./Roadview";

interface CustomOverlayRoadviewProps {
  /**
   * 커스텀 오버레이의 좌표
   */
  position: {
    lat: number;
    lng: number;
  };

  /**
   * 커스텀 오버레이 옵션
   */
  options?: {
    /**
     * true 로 설정하면 컨텐츠 영역을 클릭했을 경우 지도 이벤트를 막아준다.
     */
    clickable?: boolean;

    /**
     * 컨텐츠의 x축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5
     */
    xAnchor?: number;

    /**
     * 컨텐츠의 y축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5
     */
    yAnchor?: number;

    /**
     * 커스텀 오버레이의 z-index
     */
    zIndex?: number;
  };
}

const CustomOverlayRoadview: React.FC<CustomOverlayRoadviewProps> = ({
  position,
  children,
  options,
}) => {
  const roadview = useContext(KakaoRoadviewContext);
  const container = useRef(document.createElement("div"));

  useEffect(() => {
    if (!roadview) return;

    const overlay = new kakao.maps.CustomOverlay({
      ...options,
      content: container.current,
      position: new kakao.maps.LatLng(position.lat, position.lng),
    });

    const setUpOverlay = () => {
      //roadview.CustomOverlay.setAltitude(2); //커스텀 오버레이의 고도값을 설정합니다.(로드뷰 화면 중앙이 0입니다)
      overlay.setMap(roadview);

      var projection = roadview.getProjection(); // viewpoint(화면좌표)값을 추출할 수 있는 projection 객체를 가져옵니다.

      // 커스텀오버레이의 position과 altitude값을 통해 viewpoint값(화면좌표)를 추출합니다.
      var viewpoint = projection.viewpointFromCoords(
        overlay.getPosition(),
        overlay.getAltitude()
      );

      roadview.setViewpoint(viewpoint); //커스텀 오버레이를 로드뷰의 가운데에 오도록 로드뷰의 시점을 변화 시킵니다.
    };

    kakao.maps.event.addListener(roadview, "init", setUpOverlay);

    return () => {
      overlay.setMap(null);
      kakao.maps.event.removeListener(roadview, "init", setUpOverlay);
    };
  }, [container, roadview, options, position]);

  return ReactDOM.createPortal(children, container.current);
};

export default CustomOverlayRoadview;
