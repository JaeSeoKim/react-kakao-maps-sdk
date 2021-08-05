import React from "react";
interface CustomOverlayRoadviewProps {
    position: {
        lat: number;
        lng: number;
    };
    option?: {
        clickable?: boolean;
        content?: HTMLElement | string;
        xAnchor?: number;
        yAnchor?: number;
        zIndex?: number;
    };
}
declare const CustomOverlayRoadview: React.FC<CustomOverlayRoadviewProps>;
export default CustomOverlayRoadview;
