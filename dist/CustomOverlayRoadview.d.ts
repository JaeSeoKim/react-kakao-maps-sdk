import React from "react";
interface CustomOverlayRoadviewProps {
    /**
     * 커스텀 오버레이의 좌표
     */
    position: {
        lat: number;
        lng: number;
    };
    /**
     * 커스텀 오버레이 옵션
     */
    option?: {
        /**
         * true 로 설정하면 컨텐츠 영역을 클릭했을 경우 지도 이벤트를 막아준다.
         */
        clickable?: boolean;
        /**
         * 엘리먼트 또는 HTML 문자열 형태의 내용
         */
        content?: HTMLElement | string;
        /**
         * 컨텐츠의 x축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5
         */
        xAnchor?: number;
        /**
         * 컨텐츠의 y축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5
         */
        yAnchor?: number;
        /**
         * 커스텀 오버레이의 z-index
         */
        zIndex?: number;
    };
}
declare const CustomOverlayRoadview: React.FC<CustomOverlayRoadviewProps>;
export default CustomOverlayRoadview;
