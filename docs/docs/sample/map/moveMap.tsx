import React, { useState } from "react"
import { Map, useMapPosition } from "react-kakao-maps-sdk"

const MoveMapPosition = () => {
  // map 객체의 중심을 설정하는 함수를 가져오는 hook
  const setCenter = useMapPosition()

  return (
    <>
      <h5>ReactHook으로 이동시키기</h5>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={() => setCenter({ lat: 33.452613, lng: 126.570888 })}>
          지도 중심좌표 이동시키기
        </button>
        <button
          onClick={() => setCenter({ lat: 33.45058, lng: 126.574942 }, true)}
        >
          지도 중심좌표 부드럽게 이동시키기
        </button>
      </div>
    </>
  )
}

const SampleCreateMap = () => {
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 33.452613, lng: 126.570888 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  })

  return (
    <>
      <Map // 지도를 표시할 Container
        center={state.center}
        isPanto={state.isPanto}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={3} // 지도의 확대 레벨
        onCenterChanged={() => console.log("center changed")}
      ></Map>
      {/* 이떄 useMapSetCenter, useMapPanTo 의 경우 반드시 Map 컴포넌트의 자식으로 감싸져 있어야 함 */}
      <MoveMapPosition />
      <h5>State변경으로 이동시키기</h5>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          onClick={() =>
            setState({
              center: { lat: 33.452613, lng: 126.570888 },
              isPanto: false,
            })
          }
        >
          지도 중심좌표 이동시키기
        </button>
        <button
          onClick={() =>
            setState({
              center: { lat: 33.45058, lng: 126.574942 },
              isPanto: true,
            })
          }
        >
          지도 중심좌표 부드럽게 이동시키기
        </button>
      </div>
    </>
  )
}

export default SampleCreateMap
