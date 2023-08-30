---
title: Next.js
sidebar_position: 1
---

## No Sync Scripts

Next.js 사용 시, Script 컴포넌트를 사용하여 Kakao 지도 API를 불러와야 합니다.

[Next.js Script Component](https://nextjs.org/docs/basic-features/script)
[Next.js No Sync Scripts](https://nextjs.org/docs/messages/no-sync-scripts)

## Example

### \_document.js

```jsx
import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다.&libraries=services,clusterer&autoload=false"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  )
}
```

### index.js

```jsx
import { Map, MapMarker } from "react-kakao-maps-sdk"

function Home() {
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

export default Home
```
