<h1 align="center">react-kakao-maps-sdk</h1>

<p align="center"><a href="https://apis.map.kakao.com/" alt="kakao api">Kakao Maps API</a>를 react에 맞게 포팅한 라이브러리 입니다.</p>

> 현재 개발 진행중 이며 제공하는 기능이 완벽하지 않을 수 있습니다. ISSUE와 PR 부탁드립니다.
>
> 사용 가능한 기능은 [API Docs](https://react-kakao-maps-sdk.jaeseokim.dev/docs/) 를 확인 해주세요. (0.1.0 버전 릴리즈 이전까지 Props, 사용방법 등 이 계속 변경 됩니다. )

## Usage

이 라이브러리를 사용하기 위해서는 Kakao 지도 API를 불러와야 합니다.

[Kakao 지도 Javscript API](https://apis.map.kakao.com/web/guide/)

```html
<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다."
></script>
```

또는 라이브러리 내부에서 hook으로 제공하는 `useKakaoMapsSDK` 를 이용하여 동적로드도 가능합니다.

```jsx
const Test = () => {
  const isLoading = useKakaoMapsSDK({ apiKey: KAKAO_MAP_API_KEY })

  if (isLoadgin) {
    return <>로딩...</>
  }
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "480px", height: "360px" }}
    />
  )
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

- [Sample Docs](https://react-kakao-maps-sdk.jaeseokim.dev/docs/)

## Working List

### Map

- Marker
- InfoWindow
- CustomOverlay

### Roadview

- CustomOverlay

## Contribute

ISSUE와 PR 대환영 입니다..!!
