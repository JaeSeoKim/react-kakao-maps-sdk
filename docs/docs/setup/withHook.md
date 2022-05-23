---
title: Hook을 이용하여 Kakao 지도 API 불러오기
sidebar_position: 2
---

동기적으로 Kakao Map API를 불러오고 싶거나, Script 태그를 삽입 하기 힘든 경우 `useInjectKakaoMapApi` hook를 이용하여 사용할 수 있습니다.

해당 Hook를 사용시 `react-kakao-maps-sdk` 라이브러리 내부에서 `Loader` 를 통한 loading 상태를 관찰하고 있기 때문에 렌더링 이후 hook를 통한 Kakao 지도 API를 불러오더라도 자동으로 리렌더링이 가능합니다.

해당 hook를 사용이후 전역에 설치가 되고 이후 재호출(동일한 옵션)이 일어나더라도 재설치 되거나, 제거되지 않습니다.

```tsx
function(){
  const { loading, error } = useInjectKakaoMapApi({
    appkey: "...", // 발급 받은 APPKEY
    ...options // 추가 옵션
  })

  return (
    // Map 내부에서 loading 상태를 인지하고 있기 때문에 optional rendring를 하지 않아도 됩니다.
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
    />
  );
}
```
