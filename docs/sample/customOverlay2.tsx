import React from "react";
import { useKakaoMapsSDK } from "../../src/Component/Kakaomap/hooks";
import { Map, CustomOverlayMap } from "../../src/Component/Kakaomap";
import "./customOverlay2.css";

// 커스텀 오버레이에 표시될 Component 입니다.
const MovieChart = () => (
  <div className="overlaybox">
    <div className="boxtitle">금주 영화순위</div>
    <div className="first">
      <div className="triangle text">1</div>
      <div className="movietitle text">드래곤 길들이기2</div>
    </div>
    <ul>
      <li className="up">
        <span className="number">2</span>
        <span className="title">명량</span>
        <span className="arrow up"></span>
        <span className="count">2</span>
      </li>
      <li>
        <span className="number">3</span>
        <span className="title">해적(바다로 간 산적)</span>
        <span className="arrow up"></span>
        <span className="count">6</span>
      </li>
      <li>
        <span className="number">4</span>
        <span className="title">해무</span>
        <span className="arrow up"></span>
        <span className="count">3</span>
      </li>
      <li>
        <span className="number">5</span>
        <span className="title">안녕, 헤이즐</span>
        <span className="arrow down"></span>
        <span className="count">1</span>
      </li>
    </ul>
  </div>
);

const SampleCreateMap = () => {
  //  script 동적 로딩하는 hook, HTML에 Sciprt 삽입 하여 사용하여도 가능함.
  const loading = useKakaoMapsSDK({
    apiKey: process.env.KAKAOMAP_API_KEY,
  });

  return (
    <Map // 지도를 표시할 Container
      loading={loading} // useKakaoMapsSDK를 이용하여 script 동적 로딩 할 때 사용
      center={{
        // 지도의 중심좌표
        lat: 37.502,
        lng: 127.026581,
      }}
      size={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
      option={{
        level: 4, // 지도의 확대 레벨
      }}
    >
      <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
        // 커스텀 오버레이가 표시될 위치입니다
        position={{
          lat: 37.49887,
          lng: 127.026581,
        }}
        option={{
          // 커스텀 오버레이가에 대한 확장 옵션
          xAnchor: 0.3,
          yAnchor: 0.91,
        }}
      >
        <MovieChart />
      </CustomOverlayMap>
    </Map>
  );
};

export default SampleCreateMap;
