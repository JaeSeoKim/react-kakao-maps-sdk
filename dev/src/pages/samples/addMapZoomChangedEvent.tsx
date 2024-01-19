import { Map, ZoomControl } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"
import { useState } from "react"

export default function AddMapZoomChangedEvent() {
  useKakaoLoader()
  const [result, setResult] = useState("")

  return (
    <>
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          width: "100%",
          height: "350px",
        }}
        level={3} // 지도의 확대 레벨
        onZoomChanged={(map) => {
          const level = map.getLevel()
          setResult(`현재 지도 레벨은 ${level} 입니다`)
        }}
      >
        <ZoomControl />
      </Map>
      <p>
        <em>지도를 확대 또는 축소 해주세요!</em>
      </p>
      <p id="result">{result}</p>
    </>
  )
}
