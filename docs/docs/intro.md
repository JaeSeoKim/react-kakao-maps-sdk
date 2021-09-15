---
title: Tutorial
sidebar_position: 1
---

## Usage

이 라이브러리를 사용하기 위해서는 **필수적**으로 Kakao 지도 API를 불러와야 합니다.

[Kakao 지도 Javscript API](https://apis.map.kakao.com/web/guide/)

```html
<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다.&libraries=services,clusterer"
></script>
```

## TypeScript

타입스크립트 사용자를 위해 [kakao.maps.d.ts](https://github.com/JaeSeoKim/kakao.maps.d.ts) 패키지를 제공합니다.

`tsconfig.json`의 `compilerOptions.types` 속성에 `kakao.maps.d.ts` 패키지를 추가하시면 됩니다.

```js
{
  ...,
  "compilerOptions": {
    ...,
    "types": [
      ...,
      "kakao.maps.d.ts"
    ]
  }
}
```

## Install

```bash
npm install react-kakao-maps-sdk
# or
yarn add react-kakao-maps-sdk
```

## Simple Usage

### 맵위에 마커와 인포윈도우 올리기

```jsx live
function(){
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{color:"#000"}}>Hello World!</div>
      </MapMarker>
    </Map>
  )
}
```

### 맵위에 커스텀오버레이 올리기

```jsx live
function(){
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "360px" }}
    >
      <CustomOverlayMap position={{ lat: 33.55635, lng: 126.795841 }}>
        <div
          style={{padding:"42px", backgroundColor:"#fff", color:"#000"}}
        >
          Custom Overlay!
        </div>
      </CustomOverlayMap>
    </Map>
  )
}
```

### 맵위에 마커 클러스터 올리기

```jsx live
function(){
  return (
    <Map
      center={{ lat: 36.2683, lng: 127.6358 }}
      style={{ width: "100%", height: "360px" }}
      level={14}
    >
      <MarkerClusterer
        averageCenter={true}
        minLevel={10}
      >
        {clusterPositionsData.positions.map((pos) => (
          <MapMarker
            key={`${pos.lat}-${pos.lng}`}
            position={pos}
          />
        ))}
      </MarkerClusterer>
    </Map>
  )
}
```

### etc...

더 많은 사용 예시는 [Sample](/docs/sample) 페이지를 참고 하여 확인 해주세요.

## Documentation

- [Sample](/docs/sample)

- [API](/docs/api)
