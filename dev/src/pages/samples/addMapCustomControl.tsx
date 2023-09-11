import { Map } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"
import AddMapCustomControlStyle from "./addMapCustomControl.style"
import { useRef, useState } from "react"

export default function AddMapCustomControl() {
  useKakaoLoader()

  const mapRef = useRef<kakao.maps.Map>(null)
  const [mapType, setMapType] = useState<"roadmap" | "skyview">("roadmap")

  const zoomIn = () => {
    const map = mapRef.current
    if (!map) return
    map.setLevel(map.getLevel() - 1)
  }

  const zoomOut = () => {
    const map = mapRef.current
    if (!map) return
    map.setLevel(map.getLevel() + 1)
  }

  return (
    <>
      <AddMapCustomControlStyle />
      <div className={`map_wrap`}>
        <Map // 지도를 표시할 Container
          id="map"
          center={{
            // 지도의 중심좌표
            lat: 33.450701,
            lng: 126.570667,
          }}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden",
          }}
          level={3}
          mapTypeId={mapType === "roadmap" ? "ROADMAP" : "HYBRID"}
          ref={mapRef}
        ></Map>
        {/* 지도타입 컨트롤 div 입니다 */}
        <div className="custom_typecontrol radius_border">
          <span
            id="btnRoadmap"
            className={mapType === "roadmap" ? "selected_btn" : "btn"}
            onClick={() => setMapType("roadmap")}
          >
            지도
          </span>
          <span
            id="btnSkyview"
            className={mapType === "skyview" ? "selected_btn" : "btn"}
            onClick={() => {
              setMapType("skyview")
            }}
          >
            스카이뷰
          </span>
        </div>
        {/* 지도 확대, 축소 컨트롤 div 입니다 */}
        <div className="custom_zoomcontrol radius_border">
          <span onClick={zoomIn}>
            <img
              src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
              alt="확대"
            />
          </span>
          <span onClick={zoomOut}>
            <img
              src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
              alt="축소"
            />
          </span>
        </div>
      </div>
    </>
  )
}
