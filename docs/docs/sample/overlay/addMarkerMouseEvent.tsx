import React, { useState } from "react"
import { Map, MapMarker } from "react-kakao-maps-sdk"

const SampleCreateMap = () => {
  // 인포윈도우 Open 여부를 저장하는 state 입니다.
  const [isOpen, setIsOpen] = useState(false)

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
      <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
        position={{
          // 인포윈도우가 표시될 위치입니다
          lat: 33.450701,
          lng: 126.570667,
        }}
        clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        // 마커에 마우스오버 이벤트를 등록합니다
        onMouseOver={
          // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
          () => setIsOpen(true)
        }
        // 마커에 마우스아웃 이벤트를 등록합니다
        onMouseOut={
          // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
          () => setIsOpen(false)
        }
      >
        {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
        {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
        {isOpen && <div style={{ padding: "5px" }}>Hello World!</div>}
      </MapMarker>
    </Map>
  )
}

export default SampleCreateMap
