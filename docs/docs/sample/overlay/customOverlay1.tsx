import React from "react"
import { Map, CustomOverlayMap } from "react-kakao-maps-sdk"
import "./customOverlay1.css"

const SampleCreateMap = () => {
  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
      level={3} // 지도의 확대 레벨
    >
      <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
        // 커스텀 오버레이가 표시될 위치입니다
        position={{
          lat: 33.450701,
          lng: 126.570667,
        }}
      >
        {/* 커스텀 오버레이에 표시할 내용입니다 */}
        <div className="label">
          <span className="left"></span>
          <span className="center">카카오!</span>
          <span className="right"></span>
        </div>
      </CustomOverlayMap>
    </Map>
  )
}

export default SampleCreateMap
