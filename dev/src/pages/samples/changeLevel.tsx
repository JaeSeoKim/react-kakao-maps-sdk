import { useRef, useState } from "react"
import { Map } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"

export default function ChangeLevel() {
  useKakaoLoader()
  const mapRef = useRef<kakao.maps.Map>(null)
  const defaultLevel = 3
  const [level, setLevel] = useState(defaultLevel)

  const handleLevel = (type: "increase" | "decrease") => {
    const map = mapRef.current
    if (!map) return

    if (type === "increase") {
      map.setLevel(map.getLevel() + 1)
      setLevel(map.getLevel())
    } else {
      type === "decrease"
      map.setLevel(map.getLevel() - 1)
      setLevel(map.getLevel())
    }
  }

  return (
    <Map // 지도를 표시할 Container
      center={{
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "350px",
      }}
      level={defaultLevel} // 지도의 확대 레벨
      zoomable={true}
      ref={mapRef}
    >
      <p>
        <button onClick={() => handleLevel("decrease")}>지도레벨 - 1</button>{" "}
        <button onClick={() => handleLevel("increase")}>지도레벨 + 1</button>{" "}
        <span id="maplevel">현재 지도 레벨은 {level} 레벨 입니다.</span>
      </p>
    </Map>
  )
}
