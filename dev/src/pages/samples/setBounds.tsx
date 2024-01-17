import { Map, MapMarker, useMap } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"
import { useMemo, useState } from "react"

export default function SetBounds() {
  useKakaoLoader()
  const [points] = useState<
    {
      lat: number
      lng: number
    }[]
  >([
    { lat: 33.452278, lng: 126.567803 },
    { lat: 33.452671, lng: 126.574792 },
    { lat: 33.451744, lng: 126.572441 },
  ])

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
          // 지도의 크기
          width: "100%",
          height: "350px",
        }}
        level={3} // 지도의 확대 레벨
      >
        {points.map((point) => (
          <MapMarker
            key={`marker__${point.lat}-${point.lng}`}
            position={point}
          />
        ))}
        <ReSetttingMapBounds points={points} />
      </Map>
    </>
  )
}

const ReSetttingMapBounds = ({
  points,
}: {
  points: { lat: number; lng: number }[]
}) => {
  const map = useMap()
  const bounds = useMemo(() => {
    const bounds = new kakao.maps.LatLngBounds()

    points.forEach((point) => {
      bounds.extend(new kakao.maps.LatLng(point.lat, point.lng))
    })
    return bounds
  }, [points])

  return (
    <p>
      <button onClick={() => map.setBounds(bounds)}>
        지도 범위 재설정 하기
      </button>
    </p>
  )
}
