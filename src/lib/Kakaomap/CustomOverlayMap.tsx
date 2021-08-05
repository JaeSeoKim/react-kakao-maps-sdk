import React, { useContext } from "react";
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
  option?: {
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
  option,
}) => {
  const map = useContext(KakaoMapContext);

  return (
    <CustomOverlay
      {...option}
      map={map}
      position={new kakao.maps.LatLng(position.lat, position.lng)}
    >
      {children}
    </CustomOverlay>
  );
};

export default CustomOverlayMap;

interface CustomOverlayProps extends kakao.maps.CustomOverlayOptions {
  map: kakao.maps.Map;
}

class CustomOverlay extends React.Component<CustomOverlayProps> {
  el: HTMLDivElement;

  constructor(props: CustomOverlayProps) {
    super(props);
    this.el = document.createElement("div");
  }

  state = {
    overlay: {} as kakao.maps.CustomOverlay,
  };

  componentDidMount() {
    const { map, position, xAnchor, yAnchor, zIndex, clickable, content } =
      this.props;
    const { el } = this;

    const overlay = new kakao.maps.CustomOverlay({
      content: content ? content : el,
      position: position,
      xAnchor: xAnchor,
      yAnchor: yAnchor,
      zIndex: zIndex,
      clickable: clickable,
    });

    overlay.setMap(map);

    this.setState(() => ({ overlay }));
  }

  componentWillUnmount() {
    const { overlay } = this.state;
    if (overlay) {
      overlay.setMap(null);
    }
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}
