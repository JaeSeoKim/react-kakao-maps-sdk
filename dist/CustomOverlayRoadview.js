import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { KakaoRoadviewContext } from "./Roadview";
const CustomOverlayRoadview = ({ position, children, option, }) => {
    const roadview = useContext(KakaoRoadviewContext);
    return (React.createElement(CustomOverlay, Object.assign({}, option, { map: roadview, position: new kakao.maps.LatLng(position.lat, position.lng) }), children));
};
export default CustomOverlayRoadview;
class CustomOverlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overlay: {},
        };
        this.el = document.createElement("div");
    }
    componentDidMount() {
        const { map: rv, position, xAnchor, yAnchor, zIndex, clickable, content, } = this.props;
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
            var viewpoint = projection.viewpointFromCoords(overlay.getPosition(), overlay.getAltitude());
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
