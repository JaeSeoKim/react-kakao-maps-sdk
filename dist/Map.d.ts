/// <reference types="kakao.maps.d.ts" />
import React from "react";
export declare const KakaoMapContext: React.Context<kakao.maps.Map>;
export interface MapProps {
    className?: string;
    center: {
        lat: number;
        lng: number;
    };
    size?: {
        width: string;
        height: string;
    };
    loading?: boolean;
    option?: {
        level?: number;
        mapTypeId?: kakao.maps.MapTypeId;
        draggable?: boolean;
        scrollwheel?: boolean;
        disableDoubleClick?: boolean;
        disableDoubleClickZoom?: boolean;
        projectionId?: string;
        tileAnimation?: boolean;
        keyboardShortcuts?: boolean | {
            speed: number;
        };
    };
}
declare const Map: React.FC<MapProps>;
export default Map;
