import { Map } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"
import { useState } from "react"

export default function AddMapDragendEvent() {
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
        onDragEnd={(map) => {
          const latlng = map.getCenter()
          setResult(
            `변경된 지도 중심좌표는 ${latlng.getLat()} 이고, 경도는 ${latlng.getLng()} 입니다`,
          )
        }}
      />
      <p>
        <em>지도를 움직여 주세요!</em>
      </p>
      <p id="result">{result}</p>
    </>
  )
}
