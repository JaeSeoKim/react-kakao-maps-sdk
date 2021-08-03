import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
export const KakaoMapContext = React.createContext({});
const Map = ({ children, center, className, size, loading = false, option, }) => {
    const [map, setMap] = useState();
    const container = useRef(null);
    /**
     * useRef와 함께 사용하는 경우에는 useLayoutEffect를 사용하여
     * container.current가 null를 가지고 있는 경우를 방지 할 수 있다.
     */
    useLayoutEffect(() => {
        if (loading)
            return;
        kakao.maps.load(() => {
            // 초기 위치 객체 생성
            const initalMapCenter = new kakao.maps.LatLng(center.lat, center.lng);
            // kakaoMap 객체 생성
            const kakaoMap = new kakao.maps.Map(container.current, Object.assign({ center: initalMapCenter }, option));
            // kakaoMap 객체 저장
            setMap(kakaoMap);
        });
    }, [loading, center, option, container]);
    useEffect(() => {
        // size
        if (map === null || size === undefined)
            return;
        const { width, height } = size;
        container.current.style.width = width;
        container.current.style.height = height;
    }, [map, size]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { id: "kakao-map-container", className: className, ref: container }),
        map && (React.createElement(KakaoMapContext.Provider, { value: map }, children))));
};
export default Map;
