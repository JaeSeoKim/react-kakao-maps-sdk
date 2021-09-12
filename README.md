<div align="center">
  <img src="./docs/static/img/logo.png" width="128px"/>
  <h1>react-kakao-maps-sdk</h1>
  <p><a href="https://apis.map.kakao.com/" alt="kakao api">Kakao Maps API</a>를 react에 맞게 포팅한 라이브러리 입니다.</p>
  <p>
    <img alt="version" src="https://img.shields.io/npm/v/react-kakao-maps-sdk" />
    <img alt="license" src="https://img.shields.io/npm/l/react-kakao-maps-sdk" />
    <img alt="npm publish build status" src="https://github.com/JaeSeoKim/react-kakao-maps-sdk/actions/workflows/npm-publish.yaml/badge.svg" />
    <img alt="docs build status" src="https://github.com/JaeSeoKim/react-kakao-maps-sdk/actions/workflows/docs.yaml/badge.svg" />
    <img alt="npm dm" src="https://img.shields.io/npm/dm/react-kakao-maps-sdk" />
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/JaeSeoKim/react-kakao-maps-sdk">
  </p>
</div>

> 현재 개발 진행중 이며 제공하는 기능이 완벽하지 않을 수 있습니다. ISSUE와 PR 부탁드립니다.
>
> 사용 가능한 기능은 [API Docs](https://react-kakao-maps-sdk.jaeseokim.dev/) 를 확인 해주세요. (1.0.0 버전 릴리즈 이전까지 Props, 사용방법 등 이 계속 변경 됩니다. )

## Usage

이 라이브러리를 사용하기 위해서는 Kakao 지도 API를 불러와야 합니다.

[Kakao 지도 Javscript API](https://apis.map.kakao.com/web/guide/)

```html
<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다.&libraries=services,clusterer,drawing"
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
      "daum.maps.d.ts"
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

```jsx
const MarkerWithInfoWindow = () => (
  <Map
    center={{ lat: 33.5563, lng: 126.79581 }}
    style={{ width: "480px", height: "360px" }}
  >
    <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
      Hello World!
    </MapMarker>
  </Map>
)
```

### 맵위에 커스텀오버레이 올리기

```jsx
const MarkerWithInfoWindow = () => (
  <Map
    center={{ lat: 33.5563, lng: 126.79581 }}
    style={{ width: "480px", height: "360px" }}
  >
    <CustomOverlayMap position={{ lat: 33.55635, lng: 126.795841 }}>
      <div>Custom Overlay!</div>
    </CustomOverlayMap>
  </Map>
)
```

## Documentation

- [Tutorial](https://react-kakao-maps-sdk.jaeseokim.dev/docs/intro)
- [Sample](https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample)
- [API](https://react-kakao-maps-sdk.jaeseokim.dev/docs/api)

## Package

- [kakao.maps.d.ts](https://github.com/JaeSeoKim/kakao.maps.d.ts)

## Contribute

ISSUE와 PR 대환영 입니다..!!
