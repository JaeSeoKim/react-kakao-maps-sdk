import React, { useContext, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { KakaoMapContext } from "./Map";

interface CustomOverlayMapProps {
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
     * 엘리먼트 또는 HTML 문자열 형태의 내용
     */
    content?: HTMLElement | string;

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

const CustomOverlayMap: React.FC<CustomOverlayMapProps> = ({
  position,
  children,
  options,
}) => {
  const map = useContext(KakaoMapContext);
  const container = useRef(document.createElement("div"));

  useEffect(() => {
    if (!map) return;

    const kakaoOverlay = new kakao.maps.CustomOverlay({
      ...options,
      map: map,
      content: options?.content || container.current,
      position: new kakao.maps.LatLng(position.lat, position.lng),
    });

    return () => {
      kakaoOverlay.setMap(null);
    };
  }, [container, map, position, options]);

  return ReactDOM.createPortal(children, container.current);
};

export default CustomOverlayMap;
