import React, { useState, useEffect } from "react"
import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"

const BasicClusterer = () => {
  useKakaoLoader()

  const [positions, setPositions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [map, setMap] = useState(null) // 지도 객체를 저장할 state

  useEffect(() => {
    fetch("/stations.json")
      .then((response) => response.json())
      .then((data) => {
        const pos = data.positions || data
        if (Array.isArray(pos)) {
          setPositions(pos)
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("stations.json 파일 로딩 중 에러 발생:", error)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    if (map && !isLoading) {
      const timer = setTimeout(() => {
        map.relayout()
      }, 0)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [map, isLoading])

  // 지도 레벨을 변경하는 함수
  const handleZoom = (level) => {
    if (!map) return
    //map.setLevel(level)
    map.setLevel(level, {
      // 확대/축소 시 부드러운 이동 효과
      anchor: map.getCenter(),
      animate: {
        duration: 300,
      },
    })
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isLoading ? (
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>지도 및 데이터 로딩 중...</p>
        </div>
      ) : (
        <Map
          center={{ lat: 37.566826, lng: 126.9786567 }}
          style={{ width: "100%", flex: 1 }}
          level={10}
          onCreate={setMap} // Map 객체가 생성되면 state에 저장
        >
          <MarkerClusterer
            averageCenter={true} // 클러스터 마커를 클러스터에 포함된 마커들의 평균 위치로 설정
            minLevel={10} // 클러스터링을 시작할 최소 지도 레벨
          >
            {positions.map((pos) => (
              <MapMarker
                key={pos.statId} // 데이터의 고유 ID를 key로 사용
                position={{ lat: pos.lat, lng: pos.lng }}
              />
            ))}
          </MarkerClusterer>
        </Map>
      )}
      <div
        style={{ padding: "16px", textAlign: "center", background: "#f8f9fa" }}
      >
        <button
          onClick={() => handleZoom(10)}
          style={{
            margin: "0 5px",
            padding: "8px 16px",
            border: "1px solid #6c757d",
            backgroundColor: "#6c757d",
            color: "white",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          지역 클러스터 보기 (level: 10)
        </button>
        <button
          onClick={() => handleZoom(11)}
          style={{
            margin: "0 5px",
            padding: "8px 16px",
            border: "1px solid #17a2b8",
            backgroundColor: "#17a2b8",
            color: "white",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          전체 클러스터 보기 (level: 11)
        </button>
        <button
          onClick={() => handleZoom(9)}
          style={{
            margin: "0 5px",
            padding: "8px 16px",
            border: "1px solid #28a745",
            backgroundColor: "#28a745",
            color: "white",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          마커 보기 (level: 9)
        </button>
      </div>
    </div>
  )
}

export default BasicClusterer
