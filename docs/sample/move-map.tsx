import React from "react";
import {
  useKakaoMapsSDK,
  useMapSetCenter,
  useMapPanTo,
} from "../../src/Component/Kakaomap/hooks";
import Map from "../../src/Component/Kakaomap/Map";

const MoveMapPosition = () => {
  const setCenter = useMapSetCenter();
  const panTo = useMapPanTo();

  return (
    <div>
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
  const loading = useKakaoMapsSDK({
    apiKey: process.env.KAKAOMAP_API_KEY,
  });

  return (
    <Map
      loading={loading}
      center={{
        lat: 33.450701,
        lng: 126.570667,
      }}
      size={{
        width: "100%",
        height: "450px",
      }}
      option={{
        level: 3,
      }}
    >
      <MoveMapPosition />
    </Map>
  );
};

export default SampleCreateMap;
