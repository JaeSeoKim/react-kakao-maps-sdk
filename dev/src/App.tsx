import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk"

function App() {
  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAOMAP_API_KEY,
    libraries: ["clusterer", "drawing", "services"],
  })

  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{
        width: "100wh",
        height: "100vh",
      }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  )
}

export default App
