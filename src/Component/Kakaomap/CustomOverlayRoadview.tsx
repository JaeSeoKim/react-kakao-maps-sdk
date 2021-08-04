import React, { useContext } from "react";
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

const CustomOverlayRoadview: React.FC<CustomOverlayRoadviewProps> = ({
  position,
  children,
  option,
}) => {
  const roadview = useContext(KakaoRoadviewContext);

  return (
    <CustomOverlay
      {...option}
      map={roadview}
      position={new kakao.maps.LatLng(position.lat, position.lng)}
    >
      {children}
    </CustomOverlay>
  );
};

export default CustomOverlayRoadview;

interface CustomOverlayProps extends kakao.maps.CustomOverlayOptions {
  map: kakao.maps.Roadview;
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
    const {
      map: rv,
      position,
      xAnchor,
      yAnchor,
      zIndex,
      clickable,
      content,
    } = this.props;
    const { el } = this;

    const overlay = new kakao.maps.CustomOverlay({
      content: content ? content : el,
      position: position,
      xAnchor: xAnchor,
      yAnchor: yAnchor,
      zIndex: zIndex,
      clickable: clickable,
    });

    kakao.maps.event.addListener(rv, "init", function () {
      //rvCustomOverlay.setAltitude(2); //커스텀 오버레이의 고도값을 설정합니다.(로드뷰 화면 중앙이 0입니다)
      overlay.setMap(rv);

      var projection = rv.getProjection(); // viewpoint(화면좌표)값을 추출할 수 있는 projection 객체를 가져옵니다.

      // 커스텀오버레이의 position과 altitude값을 통해 viewpoint값(화면좌표)를 추출합니다.
      var viewpoint = projection.viewpointFromCoords(
        overlay.getPosition(),
        overlay.getAltitude()
      );

      rv.setViewpoint(viewpoint); //커스텀 오버레이를 로드뷰의 가운데에 오도록 로드뷰의 시점을 변화 시킵니다.
    });

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
