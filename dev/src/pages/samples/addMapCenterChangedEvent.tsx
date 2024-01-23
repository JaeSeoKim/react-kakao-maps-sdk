import { Map } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"
import { useState } from "react"

export default function AddMapCenterChangedEvent() {
  useKakaoLoader()
  const [data, setData] = useState<{
    level: number
    position: {
      lat: number
      lng: number
    }
  }>()

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
        onCenterChanged={(map) => {
          const level = map.getLevel()
          const latlng = map.getCenter()

          setData({
            level: level,
            position: {
              lat: latlng.getLat(),
              lng: latlng.getLng(),
            },
          })
        }}
      />
      <p>
        <em>지도 중심좌표가 변경되면 지도 정보가 표출됩니다</em>
      </p>
      <p id="result">
        {data && (
          <>
            <p>지도 레벨은 {data.level} 이고</p>
            <p>
              중심 좌표는 위도 {data.position.lat}, 경도 {data.position.lng}
              입니다
            </p>
          </>
        )}
      </p>
    </>
  )
}
