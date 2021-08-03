import * as React from "react";
import * as ReactDOM from "react-dom";
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
export default CustomOverlay;
