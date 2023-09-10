import { Map, MapTypeControl, ZoomControl } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"

export default function AddMapControl() {
  useKakaoLoader()

  const MapControls = () => (
    <>
      <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      <ZoomControl position={kakao.maps.ControlPosition.RIGHT} />
    </>
  ) // 렌더링 시점에 kakao 객체 존재 하지 않는 오류 우회 하기 위한 Wrapping 처리

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
      >
        <MapControls />
      </Map>
    </>
  )
}
