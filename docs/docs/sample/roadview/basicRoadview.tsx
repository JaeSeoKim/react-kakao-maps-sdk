import React from "react"
import { Roadview } from "react-kakao-maps-sdk"

const SampleCreateMap = () => {
  return (
    <Roadview // 로드뷰를 표시할 Container
      position={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
        radius: 50,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
    />
  )
}

export default SampleCreateMap
