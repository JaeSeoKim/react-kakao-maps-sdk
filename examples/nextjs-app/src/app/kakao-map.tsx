"use client"

import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk"

export default function KakaoMap() {
  const { error } = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_APPKEY!, // 발급 받은 APPKEY
    // ...options,
  })
  if (error) return <div>Error</div>
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  )
}
