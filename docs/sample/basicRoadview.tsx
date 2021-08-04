import React from "react";
import { useKakaoMapsSDK } from "../../src/Component/Kakaomap/hooks";
import { Roadview } from "../../src/Component/Kakaomap";

const SampleCreateMap = () => {
  //  script 동적 로딩하는 hook, HTML에 Sciprt 삽입 하여 사용하여도 가능함.
  const loading = useKakaoMapsSDK({
    apiKey: process.env.KAKAOMAP_API_KEY,
  });

  return (
    <Roadview // 로드뷰를 표시할 Container
      loading={loading} // useKakaoMapsSDK를 이용하여 script 동적 로딩 할 때 사용
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
        radius: 50,
      }}
      size={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
    />
  );
};

export default SampleCreateMap;
