/// <reference types="kakao.maps.d.ts" />
import React from "react";
export declare const KakaoRoadviewContext: React.Context<kakao.maps.Roadview>;
export interface RoadviewProps {
    className?: string;
    center: {
        lat: number;
        lng: number;
        radius: number;
    };
    size?: {
        width: string;
        height: string;
    };
    loading?: boolean;
    option?: {
        panoId?: number;
        panoX?: number;
        panoY?: number;
        pan?: number;
        tilt?: number;
        zoom?: number;
    };
}
declare const Roadview: React.FC<RoadviewProps>;
export default Roadview;
