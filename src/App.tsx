import React from "react";
import {
  CustomOverlayMap,
  CustomOverlayRoadview,
  Map,
  Roadview,
} from "./lib/Kakaomap";

const Content = () => (
  <div className="overlay_info">
    <a href="https://place.map.kakao.com/17600274">
      <strong>월정리 해수욕장</strong>
    </a>
    <div className="desc">
      <img
        src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/place_thumb.png"
        alt=""
      />
      <span className="address">제주특별자치도 제주시 구좌읍 월정리 33-3</span>
    </div>
  </div>
);

const SampleCreateMap = () => {
  return (
    <>
      <Map // 로드뷰를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 33.5563,
          lng: 126.79581,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "300px",
        }}
        level={3}
      >
        <CustomOverlayMap
          position={{
            lat: 33.55635,
            lng: 126.795841,
          }}
          options={{
            xAnchor: 0.5,
            yAnchor: 1.1,
          }}
        >
          <Content />
        </CustomOverlayMap>
      </Map>
      <Roadview // 로드뷰를 표시할 Container
        position={{
          // 지도의 중심좌표
          lat: 33.5563,
          lng: 126.7958,
          radius: 50,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "300px",
        }}
      >
        <CustomOverlayRoadview
          position={{
            lat: 33.55635,
            lng: 126.795841,
          }}
          options={{
            xAnchor: 0.5,
            yAnchor: 0.5,
          }}
        >
          <Content />
        </CustomOverlayRoadview>
      </Roadview>
    </>
  );
};

export default SampleCreateMap;
