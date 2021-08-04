import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { KakaoMapContext } from "./Map";
const CustomOverlayMap = ({ position, children, option, }) => {
    const map = useContext(KakaoMapContext);
    return (React.createElement(CustomOverlay, Object.assign({}, option, { map: map, position: new kakao.maps.LatLng(position.lat, position.lng) }), children));
};
export default CustomOverlayMap;
class CustomOverlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overlay: {},
        };
        this.el = document.createElement("div");
    }
    componentDidMount() {
        const { map, position, xAnchor, yAnchor, zIndex, clickable, content } = this.props;
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
