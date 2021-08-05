import React, { useRef } from "react";
import { useKakaoMapsSDK } from "./lib/Kakaomap/hooks";
import { CustomOverlayMap, Map } from "./lib/Kakaomap";

const App = () => {
  //  script 동적 로딩하는 hook, HTML에 Sciprt 삽입 하여 사용하여도 가능함.
  const loading = useKakaoMapsSDK({
    apiKey: process.env.REACT_APP_KAKAOMAP_API_KEY as string,
  });

  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Map // 지도를 표시할 Container
        containerElem={ref.current}
        loading={loading} // useKakaoMapsSDK를 이용하여 script 동적 로딩 할 때 사용
        position={{
          lat: 33.5563,
          lng: 126.7958,
        }}
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <CustomOverlayMap
          position={{
            lat: 33.5563,
            lng: 126.7958,
          }}
        >
          인포 윈도우!
        </CustomOverlayMap>
      </Map>
    </>
  );
};
export default App;
