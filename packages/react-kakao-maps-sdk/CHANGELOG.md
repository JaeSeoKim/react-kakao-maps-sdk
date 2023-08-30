# Changelog ✍️

### v1.1.12

#### Fixed 🐞

- ECMAScript Modules 지원을 위한 package.json exports 명시 [#54](https://github.com/JaeSeoKim/react-kakao-maps-sdk/issues/54)

### v1.1.11

- NPM 배포 unpublish 이후 registry 캐시 문제로 인한 Version UP 조치

### v1.1.10

#### Fixed 🐞

- `MarkerClusterer` onClustered 이벤트 Marker 갯수만큼 호출되는 현상 수정 [#52](https://github.com/JaeSeoKim/react-kakao-maps-sdk/issues/52)

### v1.1.9

#### Fixed 🐞

- `DrawingManager` OverlayType string literal union type hint 추가 [#51](https://github.com/JaeSeoKim/react-kakao-maps-sdk/issues/51)

#### Bump 📡

- [kakao.maps.d.ts": "^0.1.38"](https://github.com/JaeSeoKim/kakao.maps.d.ts/releases/tag/v0.1.38)

### v1.1.8

#### Fixed 🐞

- `kakaoMapApiLoader` kakao.map 외부 소스로 사전 정의시 처리 오류 수정

#### Bump 📡

- [kakao.maps.d.ts": "^0.1.35"](https://github.com/JaeSeoKim/kakao.maps.d.ts/releases/tag/v0.1.35)

### v1.1.7

#### Feat ✨

- `useKakaoEvent` event type 추론 기능 추가 [#47](https://github.com/JaeSeoKim/react-kakao-maps-sdk/pull/47)

#### Bump 📡

- [kakao.maps.d.ts": "^0.1.34"](https://github.com/JaeSeoKim/kakao.maps.d.ts/releases/tag/v0.1.34)

#### Contributors 🤓

- [@puki4416](https://github.com/puki4416)

### v1.1.6

#### Fixed 🐞

- Map, Roadview 컴포넌트 ref type 에러 수정

### v1.1.5

#### Fixed 🐞

- Map, Roadview 컴포넌트 type 에러 수정
- kakaoMap load 버그 수정

### v1.1.4

#### Feat ✨

- Map, Roadview 컴포넌트에서 `as` props를 통한 container 사용자화 지원 및 type 추론 기능 추가

### v1.1.3

#### Bump 📡

- [kakao.maps.d.ts": "^0.1.33"](https://github.com/JaeSeoKim/kakao.maps.d.ts/releases/tag/v0.1.33)

### v1.1.2

#### Fix 🛠

- kakao map load 완료 이전에 map 객체를 렌더링 하는 오류 수정 [#25](https://github.com/JaeSeoKim/react-kakao-maps-sdk/issues/25)
- React peerDependency 잘못 설정되어 있던 오류 수정 [#26](https://github.com/JaeSeoKim/react-kakao-maps-sdk/issues/26)

### v1.1.1

#### Bump 📡

- [kakao.maps.d.ts": "^0.1.32"](https://github.com/JaeSeoKim/kakao.maps.d.ts/releases/tag/v0.1.32)

### v1.1.0

#### Feat ✨

- StaticMap
- ref를 통한 객체 접근 지원
- useInjectKakaoMapApi

#### Fix 🛠

- useEffect -> useLayoutEffect 변경
- kakao map 연결을 위해 감싸지던 `div` 객체 `hidden` 으로 변경 및 `parentElement` 에 렌더링 하도록 수정
- 기타 문서 및 타입 오류 수정

#### Bump 📡

- [kakao.maps.d.ts": "^0.1.31"](https://github.com/JaeSeoKim/kakao.maps.d.ts/releases/tag/v0.1.31)

### v1.0.8

#### Feat ✨

- DrawingBox
- Toolbox

#### Bump 📡

- [kakao.maps.d.ts": "^0.1.30"](https://github.com/JaeSeoKim/kakao.maps.d.ts/releases/tag/v0.1.30)
- devDependencies (@types, eslint, etc...)

### v1.0.7

#### Feat ✨

- [Support React 18 ](https://github.com/JaeSeoKim/react-kakao-maps-sdk/pull/13)

#### Bump 📡

- devDependencies (@types, eslint, etc...)

#### Contributors 🤓

- [@kimkanu](https://github.com/kimkanu)

### v1.0.6

#### Feat ✨

- [Enable CustomOverlayMap clustering](https://github.com/JaeSeoKim/react-kakao-maps-sdk/pull/10)

#### Bump 📡

- [kakao.maps.d.ts": "^0.1.26"](https://github.com/JaeSeoKim/kakao.maps.d.ts/releases/tag/v0.1.26)

  [update MarkerClusterer to handle Marker and CustomOverlay as union](https://github.com/JaeSeoKim/kakao.maps.d.ts/pull/2)

#### Contributors 🤓

- [@thomas-min](https://github.com/thomas-min)

### v1.0.5

#### Bump 📡

- [kakao.maps.d.ts": "^0.1.25"](https://github.com/JaeSeoKim/kakao.maps.d.ts/tree/v0.1.25)

  [geocoder 추가 메서드 type 작성](https://github.com/JaeSeoKim/react-kakao-maps-sdk/issues/8)

### v1.0.4

#### Fixed 🐞

- SSR을 위한 `useLayoutEffect` 에서 `useEffect` 로 변경

### v1.0.3

#### Fixed 🐞

- Circle, Ellipse 중심이 변경되지 않는 오류 수정 [#1](https://github.com/JaeSeoKim/react-kakao-maps-sdk/issues/1)

### v1.0.2

#### Bump 📡

- [kakao.maps.d.ts": "^0.1.24"](https://github.com/JaeSeoKim/kakao.maps.d.ts/tree/feab5ea06c44c0f54020627e627c041b1b5ac8fb)

### v1.0.1

#### Fixed 🐞

- Build된 파일이 Publish 안되던 오류 수정

### v1.0.0

#### Feature 🚀

- Map
  - Marker
  - InfoWindow
  - CustomOverlay
  - MarkerClusterer
  - AbstractOverlay
  - Shape
    - Circle, Polyline, Polygon, Rectangle, Ellipse
- Roadview
  - Marker
  - InfoWindow
  - CustomOverlay

#### Fixed 🐞

- useMapPosition 제거
- docs Tutorial 문서 작성 완료
- 일부 타입 수정 오류 수정.

### v0.2.1

- RoadviewInfoWindow, RoadviewMarker 추가
- Map, Roadview relayout 로직 제거
- React.Portal Contianer Element의 id, className, style 재정의 Props 추가
- 일부 컴포넌트의 로직 오류 수정
- kakao.maps.d.ts Update!
- Roadview 예제 추가!

### v0.2.0

- AbstractOverlay 추가
- MarkerClusterer 추가
- MapTypeControl, MapTypeId, ZoomControl 추가
- Circle, Ellipse, Polygon, Polyline, Rectangle 추가
- 컴포넌트, hook 일부 리팩토링
- markerImage Type 오류 수정
- 일부 함수 사용법 수정

### v0.1.1

- publish 오류 수정

### v0.1.0

- using micorbundle
- remove react-script
- change directory sturctor
- add husky, gitmoji, prettier
- add github action CI

### v0.0.20

- kakao.maps.d.ts dependencies로 이동

### v0.0.19

- Roadview viewpoint zoom이 재 설정 되지 않도록 수정

### v0.0.18

- Roadview viewpoint 초기화 이슈 수정

### v0.0.17

- Roadview viewpoint 상태 관리 수정

### v0.0.16

- Marker Position 문제 해결

### v0.0.15

- Map center change 로직 수정
- kakao.maps.event.TARGET 으로 될 수 있는 항목들에 대해서 `on~Created` 추가
- 모든 event handler에 대해 전달되는 인자 `target` 추가

### v0.0.14

- Roadview SSR시 kakao 관련 객체 에러 수정

### v0.0.13

- Roadview resize시 customoverlay 사라지는 오류 수정
- Map event handler 오류 수정
- CustomOverlayMap, CustomOverlayRoadview 리팩토링
- EventHandler 관련 코드 hook으로 재작성

### v0.0.12

- Map event handler 추가
- Roadview event handler 추가
- Marker Props 수정
- 대부분의 component useEffect 관심사 분리

### v0.0.11

- Marker option update 가능 하도록 수정

### v0.0.10

- Map center useEffect deps 오류 수정
- Marker 객체 관리 방식 useMemo로 변경
- build 된 파일 comment 포함 하도록 수정

### v0.0.9

- CustomOverlayRoadview 오류 수정

### v0.0.8

- Map position prop 이름 center 로 롤백

### v0.0.7

- useRelayout 추가
- MapInfoWindow 추가
- MapMarker 추가
  - 이벤트, InfoWindow 등 구현
- CustomOverlayMap, CustomOverlayRoadview Code refactoring
  - class compontent -> functional component 로 변경
  - dragEvent 추가.
- Map, Roadview 외부 HTMLElement를 가지고 생성이 가능하도록 수정
  - 여러가지 인자들에 대해서 수정함. ex) size prop에서 style로 확장, center -> position, option -> options 등

### v0.0.6

- 프로젝트 구조 수정
- main - release 되는 버전
- develop - 개발 전용 브랜치
- docs - 개발 API 문서

### v0.0.5

- Roadview, CustomOverlayRoadview 컴포넌트 추가

### v0.0.1 ~ v0.0.4

- 초기 프로젝트 설정
- Map Container 추가
- useMapSetCenter 추기
- useMapPanTo 추가
- CustomOverlayMap 추가
- API 문서 생성
