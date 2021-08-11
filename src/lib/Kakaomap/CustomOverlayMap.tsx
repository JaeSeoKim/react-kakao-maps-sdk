import React, { useContext, useEffect, useMemo, useRef } from "react";
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

  /**
   * 커스텀 오버레이를 생성 후 해당 객체를 가지고 callback 함수를 실행 시켜줌
   */
  onCustomOverlayCreated?: (customOverlay: kakao.maps.CustomOverlay) => void;
}

const CustomOverlayMap: React.FC<CustomOverlayMapProps> = ({
  position,
  children,
  clickable,
  xAnchor,
  yAnchor,
  zIndex,
  onCustomOverlayCreated,
}) => {
  const map = useContext(KakaoMapContext);
  const container = useRef(document.createElement("div"));

  const overlayPosition = useMemo(() => {
    return new kakao.maps.LatLng(position.lat, position.lng);
  }, [position.lat, position.lng]);

  const overlay = useMemo(() => {
    const KakaoCustomOverlay = new kakao.maps.CustomOverlay({
      clickable: clickable,
      xAnchor: xAnchor,
      yAnchor: yAnchor,
      zIndex: zIndex,
      position: overlayPosition,
      content: container.current,
    });

    if (onCustomOverlayCreated) onCustomOverlayCreated(KakaoCustomOverlay);
    return KakaoCustomOverlay;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickable, xAnchor, yAnchor]);

  useEffect(() => {
    if (!map) return;

    overlay.setMap(map);
    return () => {
      overlay.setMap(null);
    };
  }, [map, overlay]);

  useEffect(() => {
    overlay.setPosition(overlayPosition);
  }, [overlay, overlayPosition]);

  useEffect(() => {
    if (!zIndex) return;
    overlay.setZIndex(zIndex);
  }, [overlay, zIndex]);

  return ReactDOM.createPortal(children, container.current);
};

export default CustomOverlayMap;
