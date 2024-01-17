import { useState } from "react"
import { Map, MapTypeId } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"

export default function ChangeOverlay2() {
  useKakaoLoader()
  const [overlayMapTypeId, setOverlayMapTypeId] = useState({
    TRAFFIC: false,
    BICYCLE: false,
    TERRAIN: false,
    USE_DISTRICT: false,
  })

  return (
    <>
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 37.57319,
          lng: 126.96658,
        }}
        style={{
          width: "100%",
          height: "350px",
        }}
        level={7}
      >
        {overlayMapTypeId.TRAFFIC && <MapTypeId type={"TRAFFIC"} />}
        {overlayMapTypeId.BICYCLE && <MapTypeId type={"BICYCLE"} />}
        {overlayMapTypeId.TERRAIN && <MapTypeId type={"TERRAIN"} />}
        {overlayMapTypeId.USE_DISTRICT && <MapTypeId type={"USE_DISTRICT"} />}
      </Map>
      <p>
        <input
          type="checkbox"
          id="chkUseDistrict"
          onChange={(e) =>
            setOverlayMapTypeId((p) => ({
              ...p,
              USE_DISTRICT: e.target.checked,
            }))
          }
        />
        {" 지적편집도 정보 보기 "}
        <input
          type="checkbox"
          id="chkTerrain"
          onChange={(e) =>
            setOverlayMapTypeId((p) => ({ ...p, TERRAIN: e.target.checked }))
          }
        />
        {" 지형정보 보기 "}
        <input
          type="checkbox"
          id="chkTraffic"
          onChange={(e) =>
            setOverlayMapTypeId((p) => ({ ...p, TRAFFIC: e.target.checked }))
          }
        />
        {" 교통정보 보기 "}
        <input
          type="checkbox"
          id="chkBicycle"
          onChange={(e) =>
            setOverlayMapTypeId((p) => ({
              ...p,
              BICYCLE: e.target.checked,
            }))
          }
        />
        {" 자전거도로 정보 보기 "}
      </p>
    </>
  )
}
