import { Map, MapTypeId } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"

export default function AddTrafficOverlay() {
  useKakaoLoader()

  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "350px",
      }}
      level={3} // 지도의 확대 레벨
    >
      {/* 지도에 교통정보를 표시하도록 지도타입을 추가합니다 */}
      <MapTypeId type={"TRAFFIC"} />
    </Map>
  )
}
