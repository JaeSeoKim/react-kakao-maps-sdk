import { useState } from "react"
import { Map } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"

export default function ChangeLevel() {
  useKakaoLoader()
  const [level, setLevel] = useState(3)

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
      level={level} // 지도의 확대 레벨
    >
      <p>
        <button onClick={() => setLevel(level - 1)}>지도레벨 - 1</button>{" "}
        <button onClick={() => setLevel(level + 1)}>지도레벨 + 1</button>{" "}
        <span id="maplevel">현재 지도 레벨은 {level} 레벨 입니다.</span>
      </p>
    </Map>
  )
}
