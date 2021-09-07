import React, { useState } from "react"
import { Map, MapMarker } from "react-kakao-maps-sdk"

const startImage = {
  src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_b.png",
  size: [50, 45] as [number, number],
  options: {
    offset: [15, 43] as [number, number],
  },
}

const startDragImage = {
  src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_drag.png",
  size: [50, 64] as [number, number],
  options: {
    offset: [15, 54] as [number, number],
  },
}

const endImage = {
  src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_b.png",
  size: [50, 45] as [number, number],
  options: {
    offset: [15, 43] as [number, number],
  },
}

const endDragImage = {
  src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_drag.png",
  size: [50, 64] as [number, number],
  options: {
    offset: [15, 54] as [number, number],
  },
}

const SampleCreateMap = () => {
  const [start, setStart] = useState(startImage)
  const [end, setEnd] = useState(endImage)

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
      <MapMarker // 마커를 생성하고 지도에 표시합니다
        position={{
          // 마커가 표시될 위치입니다
          lat: 33.450701,
          lng: 126.570667,
        }}
        image={start}
        draggable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        onDragStart={() => setStart(startDragImage)} // 마커가 이동하면 이미지를 변경합니다
        onDragEnd={() => setStart(startImage)} // 마커가 이동하면 이미지를 변경합니다
      />
      <MapMarker // 마커를 생성하고 지도에 표시합니다
        position={{
          // 마커가 표시될 위치입니다
          lat: 33.450701,
          lng: 126.572667,
        }}
        image={end}
        draggable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        onDragStart={() => setEnd(endDragImage)} // 마커가 이동하면 이미지를 변경합니다
        onDragEnd={() => setEnd(endImage)} // 마커가 이동하면 이미지를 변경합니다
      />
    </Map>
  )
}

export default SampleCreateMap
