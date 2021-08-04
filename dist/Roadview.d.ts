/// <reference types="kakao.maps.d.ts" />
import React from "react";
export declare const KakaoRoadviewContext: React.Context<kakao.maps.Roadview>;
export interface RoadviewProps {
    /**
     * MapContainer의 className에 대해서 지정합니다.
     */
    className?: string;
    /**
     * 중심으로 설정할 위치 입니다.
     * 해당 lat와 lng에 해당하는 radius범위 안에서 가장가까운 Roadview을 선택합니다.
     * 만약 없다면 lat, lng로 설정 됩니다.
     */
    center: {
        lat: number;
        lng: number;
        radius: number;
    };
    /**
     * Map Continaer Size를 지정합니다.
     */
    size?: {
        width: string;
        height: string;
    };
    /**
     * 스크립트를 동적으로 로드확인을 위해 사용한다.
     * @default false
     */
    loading?: boolean;
    /**
     * kakao.maps.Roadview 속성을 지정합니다.
     */
    option?: {
        /**
         * 로드뷰 시작 지역의 고유 아이디 값.
         */
        panoId?: number;
        /**
         * panoId가 유효하지 않을 경우 지도좌표를 기반으로 데이터를 요청할 수평 좌표값.
         */
        panoX?: number;
        /**
         * panoId가 유효하지 않을 경우 지도좌표를 기반으로 데이터를 요청할 수직 좌표값.
         */
        panoY?: number;
        /**
         * 로드뷰 처음 실행시에 바라봐야 할 수평 각. 0이 정북방향. (0_360)
         */
        pan?: number;
        /**
         * 로드뷰 처음 실행시에 바라봐야 할 수직 각.(-90_90)
         */
        tilt?: number;
        /**
         * 로드뷰 줌 초기값.(-3_3)
         */
        zoom?: number;
    };
}
declare const Roadview: React.FC<RoadviewProps>;
export default Roadview;
