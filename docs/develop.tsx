import React from "react";
import { useKakaoMapsSDK } from "../src/Component/Kakaomap/hooks";
import { CustomOverlayRoadview, Roadview } from "../src/Component/Kakaomap";

const SampleCreateMap = () => {
  //  script 동적 로딩하는 hook, HTML에 Sciprt 삽입 하여 사용하여도 가능함.
  const loading = useKakaoMapsSDK({
    apiKey: process.env.KAKAOMAP_API_KEY,
  });

  return (
    <Roadview // 지도를 표시할 Container
      loading={loading} // useKakaoMapsSDK를 이용하여 script 동적 로딩 할 때 사용
      center={{
        // 지도의 중심좌표
        lat: 33.5563,
        lng: 126.7958,
        radius: 50,
      }}
      size={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
    >
      <CustomOverlayRoadview
        position={{
          lat: 33.55635,
          lng: 126.795841,
        }}
      >
        <div className="overlay_info">
          <a href="https://place.map.kakao.com/17600274" target="_blank">
            <strong>월정리 해수욕장</strong>
          </a>
          <div className="desc">
            <img
              src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/place_thumb.png"
              alt=""
            />
            <span className="address">
              제주특별자치도 제주시 구좌읍 월정리 33-3
            </span>
          </div>
        </div>
      </CustomOverlayRoadview>
    </Roadview>
  );
};
export default SampleCreateMap;
