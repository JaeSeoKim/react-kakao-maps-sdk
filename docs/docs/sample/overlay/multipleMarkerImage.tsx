import React from "react"
import { Map, MapMarker } from "react-kakao-maps-sdk"

const positions = [
  {
    title: "카카오",
    latlng: { lat: 33.450705, lng: 126.570677 },
  },
  {
    title: "생태연못",
    latlng: { lat: 33.450936, lng: 126.569477 },
  },
  {
    title: "텃밭",
    latlng: { lat: 33.450879, lng: 126.56994 },
  },
  {
    title: "근린공원",
    latlng: { lat: 33.451393, lng: 126.570738 },
  },
]

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
      {positions.map((position, index) => (
        <MapMarker
          key={`${position.title}-${position.latlng}`}
          position={position.latlng} // 마커를 표시할 위치
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
            size: [24, 35], // 마커이미지의 크기입니다
          }}
          title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        />
      ))}
    </Map>
  )
}

export default SampleCreateMap
