<div align="center">
  <img src="https://raw.githubusercontent.com/JaeSeoKim/react-kakao-maps-sdk/main/docs/static/img/logo.png" width="128px"/>
  <h1>react-kakao-maps-sdk</h1>
  <p><a href="https://apis.map.kakao.com/" alt="kakao api">Kakao Maps API</a>를 react에 맞게 포팅한 라이브러리 입니다.</p>
  <p>
    <a href="https://www.npmjs.com/package/react-kakao-maps-sdk"><img alt="version" src="https://img.shields.io/npm/v/react-kakao-maps-sdk" /></a>
    <img alt="license" src="https://img.shields.io/npm/l/react-kakao-maps-sdk" />
    <img alt="docs build status" src="https://github.com/JaeSeoKim/react-kakao-maps-sdk/actions/workflows/docs.yaml/badge.svg" />
    <a href="https://www.npmjs.com/package/react-kakao-maps-sdk"><img alt="npm dm" src="https://img.shields.io/npm/dm/react-kakao-maps-sdk" /></a>
    <a href="https://github.com/JaeSeoKim/react-kakao-maps-sdk/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/JaeSeoKim/react-kakao-maps-sdk"></a>
  </p>
</div>

## Usage

이 라이브러리를 사용하기 위해서는 **필수적**으로 Kakao 지도 API를 불러와야 합니다.

[Kakao 지도 Javscript API](https://apis.map.kakao.com/web/guide/)

### HTML Script Tag를 이용하여 Kakao 지도 API 불러오기

```html
<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다.&libraries=services,clusterer"
></script>
```

### [Hook을 이용하여 Kakao 지도 API 불러오기](https://react-kakao-maps-sdk.jaeseokim.dev/docs/setup/withHook)

```tsx
const Component = () => {
  const [ loading, error ] = useKakaoLoader({
    appkey: "...", // 발급 받은 APPKEY
    ...options // 추가 옵션
  })

  return <>
    ...
  <>
}
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
# or
pnpm add react-kakao-maps-sdk
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

> **※ 참고**: 해당 기능을 사용하기 위해서는 사용자는 반드시 `clusterer` library를 불러와야 합니다.

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

## Documentation

- [Tutorial](https://react-kakao-maps-sdk.jaeseokim.dev/docs/intro)
- [Sample](https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample)
- [API](https://react-kakao-maps-sdk.jaeseokim.dev/docs/api)

## Working list

- Map
  - Marker
  - InfoWindow
  - CustomOverlay
  - MarkerClusterer
  - AbstractOverlay
  - Shape
    - Circle, Polyline, Polygon, Rectangle, Ellipse
  - DrawingBox
- Roadview
  - Marker
  - InfoWindow
  - CustomOverlay
- StaticMap

## Contribute

ISSUE와 PR 대환영 입니다..!!
