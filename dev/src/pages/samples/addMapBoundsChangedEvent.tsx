import { Map } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"
import { useState } from "react"

export default function AddMapBoundsChangedEvent() {
  useKakaoLoader()
  const [bounds, setBounds] = useState<{
    sw: string
    ne: string
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
        onBoundsChanged={(map) => {
          const bounds = map.getBounds()
          setBounds({
            sw: bounds.getSouthWest().toString(),
            ne: bounds.getNorthEast().toString(),
          })
        }}
      />
      <p>
        <em>지도 영역이 변경되면 지도 정보가 표출됩니다</em>
      </p>
      <p id="result">
        {bounds && (
          <p>
            영역좌표는 남서쪽 위도, 경도는 {bounds.sw}이고 <br />
            북동쪽 위도, 경도는 {bounds.ne}입니다{" "}
          </p>
        )}
      </p>
    </>
  )
}
