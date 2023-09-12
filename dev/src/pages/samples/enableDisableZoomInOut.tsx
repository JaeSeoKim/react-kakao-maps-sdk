import { Map } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"
import { useState } from "react"

export default function EnableDisableZoomInOut() {
  useKakaoLoader()
  const [zoomable, setZoomable] = useState<boolean>(true)

  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "350px",
      }}
      level={3} // 지도의 확대 레벨
      zoomable={zoomable}
    >
      <p>
        <button onClick={() => setZoomable(false)}>지도 확대/축소 끄기</button>{" "}
        <button onClick={() => setZoomable(true)}>지도 확대/축소 켜기</button>
      </p>
    </Map>
  )
}
