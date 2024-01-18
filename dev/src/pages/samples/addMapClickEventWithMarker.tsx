import { Map, MapMarker } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"
import { useState } from "react"

const center = {
  // 지도의 중심좌표
  lat: 33.450701,
  lng: 126.570667,
}

export default function AddMapClickEventWithMarker() {
  useKakaoLoader()
  const [position, setPosition] = useState<{
    lat: number
    lng: number
  }>()

  return (
    <>
      <Map // 지도를 표시할 Container
        id="map"
        center={center}
        style={{
          width: "100%",
          height: "350px",
        }}
        level={3} // 지도의 확대 레벨
        onClick={(_, mouseEvent) => {
          const latlng = mouseEvent.latLng
          setPosition({
            lat: latlng.getLat(),
            lng: latlng.getLng(),
          })
        }}
      >
        <MapMarker position={position ?? center} />
      </Map>
      <p>
        <em>지도를 클릭해주세요!</em>
      </p>
      <div id="clickLatlng">
        {position &&
          `클릭한 위치의 위도는 ${position.lat} 이고, 경도는 ${position.lng} 입니다`}
      </div>
    </>
  )
}
