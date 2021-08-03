import React from "react";
import {
  useKakaoMapsSDK,
  useMapSetCenter,
  useMapPanTo,
} from "../../src/Component/Kakaomap/hooks";
import { Map } from "../../src/Component/Kakaomap";

const MoveMapPosition = () => {
  // map 객체의 중심을 설정하는 함수를 가져오는 hook
  const setCenter = useMapSetCenter();
  // map 객체의 중심을 부드럽게 이동하는 함수를 가져오는 hook
  const panTo = useMapPanTo();

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <button onClick={() => setCenter({ lat: 33.452613, lng: 126.570888 })}>
        지도 중심좌표 이동시키기
      </button>
      <button onClick={() => panTo({ lat: 33.45058, lng: 126.574942 })}>
        지도 중심좌표 부드럽게 이동시키기
      </button>
    </div>
  );
};

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
        lat: 33.452613,
        lng: 126.570888,
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
      {/* 이떄 useMapSetCenter, useMapPanTo 의 경우 반드시 Map 컴포넌트의 자식으로 감싸져 있어야 함 */}
      <MoveMapPosition />
    </Map>
  );
};

export default SampleCreateMap;
