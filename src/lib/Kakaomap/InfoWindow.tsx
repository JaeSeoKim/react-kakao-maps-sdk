import React, { useEffect, useRef, useState } from "react";
import ReactDom from "react-dom";

interface InfoWindowProps {
  map: kakao.maps.Map | kakao.maps.Roadview;
  position: kakao.maps.LatLng | kakao.maps.Viewpoint;
  options?: {
    /**
     * 인포윈도우를 열 때 지도가 자동으로 패닝하지 않을지의 여부 (기본값: false)
     */
    disableAutoPan?: boolean;

    /**
     * 삭제 가능한 인포윈도우
     */
    removable?: boolean;

    /**
     * 인포윈도우 엘리먼트의 z-index 속성 값
     */
    zIndex?: number;

    /**
     * 로드뷰에 올라있는 인포윈도우의 높이 값(m 단위)
     */
    altitude?: number;

    /**
     * 로드뷰 상에서 인포윈도우의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 인포윈도우는 보이지 않게 된다
     */
    range?: number;
  };
}

const InfoWindow: React.FC<InfoWindowProps> = ({
  map,
  position,
  children,
  options,
}) => {
  const container = useRef(document.createElement("div"));
  const [infoWindow, setInfoWindow] = useState<kakao.maps.InfoWindow>();

  useEffect(() => {
    const kakaoInfoWindow = new kakao.maps.InfoWindow({
      ...options,
      content: container.current,
      position: position,
      map: map,
    });
    setInfoWindow(kakaoInfoWindow);

    return () => {
      kakaoInfoWindow.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, container]);

  // 현재 위치에 표시되는 인포윈도우를 생성한다
  useEffect(() => {
    if (!infoWindow) return;
    infoWindow.setPosition(position);
  }, [infoWindow, position]);

  useEffect(() => {
    if (!infoWindow || !options?.altitude) return;
    infoWindow.setAltitude(options.altitude);
  }, [infoWindow, options?.altitude]);

  useEffect(() => {
    if (!infoWindow || !options?.range) return;
    infoWindow.setRange(options.range);
  }, [infoWindow, options?.range]);

  useEffect(() => {
    if (!infoWindow || !options?.zIndex) return;
    infoWindow.setZIndex(options.zIndex);
  }, [infoWindow, options?.zIndex]);

  return ReactDom.createPortal(children, container.current);
};

export default InfoWindow;
