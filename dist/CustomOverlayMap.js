import React, { useContext } from "react";
import CustomOverlay from "./CustomOverlay";
import { KakaoMapContext } from "./Map";
const CustomOverlayMap = ({ position, children, option, }) => {
    const map = useContext(KakaoMapContext);
    return (React.createElement(CustomOverlay, Object.assign({}, option, { map: map, position: new kakao.maps.LatLng(position.lat, position.lng) }), children));
};
export default CustomOverlayMap;
