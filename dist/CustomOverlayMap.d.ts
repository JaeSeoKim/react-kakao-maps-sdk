import React from "react";
interface CustomOverlayMapProps {
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
declare const CustomOverlayMap: React.FC<CustomOverlayMapProps>;
export default CustomOverlayMap;
