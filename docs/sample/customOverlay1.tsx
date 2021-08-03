import React from "react";
import { useKakaoMapsSDK } from "../../src/Component/Kakaomap/hooks";
import { Map, CustomOverlayMap } from "../../src/Component/Kakaomap";
import "./customOverlay1.css";

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
        lat: 33.450701,
        lng: 126.570667,
      }}
      size={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
      option={{
        level: 3, // 지도의 확대 레벨
      }}
    >
      <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
        // 커스텀 오버레이가 표시될 위치입니다
        position={{
          lat: 33.450701,
          lng: 126.570667,
        }}
      >
        {/* 커스텀 오버레이에 표시할 내용입니다 */}
        <div className="label">
          <span className="left"></span>
          <span className="center">카카오!</span>
          <span className="right"></span>
        </div>
      </CustomOverlayMap>
    </Map>
  );
};

export default SampleCreateMap;
