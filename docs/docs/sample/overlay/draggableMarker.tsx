import React from "react"
import { Map, MapMarker } from "react-kakao-maps-sdk"

const SampleCreateMap = () => {
  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
      level={3} // 지도의 확대 레벨
    >
      <MapMarker // 마커를 생성합니다
        position={{
          // 마커가 표시될 위치입니다
          lat: 33.450701,
          lng: 126.570667,
        }}
        draggable={true} // 마커가 드래그 가능하도록 설정합니다
      />
    </Map>
  )
}

export default SampleCreateMap
