import React from "react";
import { useKakaoMapsSDK } from "./lib/Kakaomap/hooks";
import { CustomOverlayRoadview, Roadview } from "./lib/Kakaomap";

const App = () => {
  //  script 동적 로딩하는 hook, HTML에 Sciprt 삽입 하여 사용하여도 가능함.
  const loading = useKakaoMapsSDK({
    apiKey: process.env.REACT_APP_KAKAOMAP_API_KEY as string,
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
        height: "100vh",
      }}
    >
      <CustomOverlayRoadview
        position={{
          lat: 33.55635,
          lng: 126.795841,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <h1>Hello World!</h1>
        </div>
      </CustomOverlayRoadview>
    </Roadview>
  );
};
export default App;
