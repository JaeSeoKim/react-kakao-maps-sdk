import React from "react";
import { useKakaoMapsSDK } from "../../src/Component/Kakaomap/hooks";
import { Map, CustomOverlayMap } from "../../src/Component/Kakaomap";

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
    >
      <CustomOverlayMap
        position={{
          lat: 33.450701,
          lng: 126.570667,
        }}
      >
        <div
          style={{
            border: "1px solid #333",
            borderRadius: "3px",
            backgroundColor: "#fff",
            paddingLeft: "2px",
            paddingRight: "2px",
            paddingTop: "1px",
            paddingBottom: "1px",
            color: "rgb(51, 51, 51)",
            fontSize: "12px",
          }}
        >
          <span>카카오!</span>
        </div>
      </CustomOverlayMap>
    </Map>
  );
};

export default SampleCreateMap;
