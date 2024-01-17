import { useState } from "react"
import { Map, MapTypeId } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"

export default function ChangeOverlay1() {
  useKakaoLoader()
  const [mapTypeId, setMapTypeId] =
    useState<keyof typeof kakao.maps.MapTypeId>()

  return (
    <>
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: "100%",
          height: "350px",
        }}
        level={5}
      >
        {mapTypeId && <MapTypeId type={mapTypeId} />}
      </Map>
      <p>
        <button onClick={() => setMapTypeId("TRAFFIC")}>교통정보 보기</button>{" "}
        <button onClick={() => setMapTypeId("ROADVIEW")}>
          로드뷰 도로정보 보기
        </button>{" "}
        <button onClick={() => setMapTypeId("TERRAIN")}>지형정보 보기</button>{" "}
        <button onClick={() => setMapTypeId("USE_DISTRICT")}>
          지적편집도 보기
        </button>
      </p>
    </>
  )
}
