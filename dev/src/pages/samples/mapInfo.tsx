import { useRef, useState } from "react"
import { Map, MapTypeControl } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"

export default function MapInfo() {
  useKakaoLoader()
  const mapRef = useRef<kakao.maps.Map>(null)
  const [info, setInfo] = useState<string>("")

  const getInfo = () => {
    const map = mapRef.current
    if (!map) return

    const center = map.getCenter()

    // 지도의 현재 레벨을 얻어옵니다
    const level = map.getLevel()

    // 지도타입을 얻어옵니다
    const mapTypeId = map.getMapTypeId()

    // 지도의 현재 영역을 얻어옵니다
    const bounds = map.getBounds()

    // 영역의 남서쪽 좌표를 얻어옵니다
    const swLatLng = bounds.getSouthWest()

    // 영역의 북동쪽 좌표를 얻어옵니다
    const neLatLng = bounds.getNorthEast()

    // 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다
    // const boundsStr = bounds.toString()

    let message = "지도 중심좌표는 위도 " + center.getLat() + ", <br>"
    message += "경도 " + center.getLng() + " 이고 <br>"
    message += "지도 레벨은 " + level + " 입니다 <br> <br>"
    message += "지도 타입은 " + mapTypeId + " 이고 <br> "
    message +=
      "지도의 남서쪽 좌표는 " +
      swLatLng.getLat() +
      ", " +
      swLatLng.getLng() +
      " 이고 <br>"
    message +=
      "북동쪽 좌표는 " +
      neLatLng.getLat() +
      ", " +
      neLatLng.getLng() +
      " 입니다"
    setInfo(message)
  }

  return (
    <Map // 지도를 표시할 Container
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "350px",
      }}
      level={3} // 지도의 확대 레벨
      ref={mapRef}
    >
      <MapTypeControl position={"TOPRIGHT"} />
      <button id="getInfoBtn" onClick={getInfo}>
        맵정보 가져오기
      </button>
      <p
        id="info"
        dangerouslySetInnerHTML={{
          __html: info,
        }}
      />
    </Map>
  )
}
