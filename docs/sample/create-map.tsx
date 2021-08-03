import React from "react";
import { useKakaoMapsSDK } from "../../src/Component/Kakaomap/hooks";
import { Map } from "../../src/Component/Kakaomap/";

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
    />
  );
};

export default SampleCreateMap;
