import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
export const KakaoRoadviewContext = React.createContext({});
const Roadview = ({ children, center, className, size, loading = false, option, }) => {
    const [roadview, setRoadview] = useState();
    const container = useRef(null);
    /**
     * useRef와 함께 사용하는 경우에는 useLayoutEffect를 사용하여
     * container.current가 null를 가지고 있는 경우를 방지 할 수 있다.
     */
    useLayoutEffect(() => {
        if (loading || roadview !== undefined)
            return;
        kakao.maps.load(() => {
            // 초기 위치 객체 생성
            const initalPosition = new kakao.maps.LatLng(center.lat, center.lng);
            // kakaoRoadview 객체 생성
            const kakaoRoadview = new kakao.maps.Roadview(container.current, option);
            const kakaoRoadviewClient = new kakao.maps.RoadviewClient();
            kakaoRoadviewClient.getNearestPanoId(initalPosition, center.radius, (panoId) => {
                kakaoRoadview.setPanoId(panoId, initalPosition);
            });
            // kakaoRoadview 객체 저장
            setRoadview(kakaoRoadview);
        });
    }, [loading, center, option, container]);
    useEffect(() => {
        // size
        if (roadview === undefined || size === undefined)
            return;
        const { width, height } = size;
        container.current.style.width = width;
        container.current.style.height = height;
        roadview.relayout();
    }, [roadview, size]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { id: "kakao-roadview-container", className: className, ref: container }),
        roadview && (React.createElement(KakaoRoadviewContext.Provider, { value: roadview }, children))));
};
export default Roadview;
