import React from "react";
import ReactDOM from "react-dom";

interface CustomOverlayProps extends kakao.maps.CustomOverlayOptions {
  map: kakao.maps.Map | kakao.maps.Roadview;
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

export default CustomOverlay;
