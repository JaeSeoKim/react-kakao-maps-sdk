# 프로젝트 구조

```
.
├── CHANGELOG.md
├── LICENSE
├── README.md
├── docs // docusaurus를 이용하여 문서를 관리
│   ├── README.md
│   ├── babel.config.js
│   ├── docs // 문서를 작성하는 경로 입니다. (md, mdx) 모두 사용이 가능합니다.
│   │   ├── api // TSDOC를 이용하여 자동으로 문서가 생성되는 위치 입니다. 이 부분을 수정을 하려면 {PROJECT_DIR}/src 하위의 소스코드에 TSDOC을 추가해주세요.
│   │   ├── intro.md
│   │   └── sample // 샘플에 대한 문서가 들어가 있습니다. 새롭게 추가할만한 셈플코드나 기존 코드를 개선시켜서 기여해주세요!
│   ├── docusaurus.config.js
│   ├── package-lock.json
│   ├── package.json
│   ├── sidebars.js
│   ├── src
│   │   ├── components
│   │   ├── css
│   │   ├── pages
│   │   └── theme
│   ├── static
│   │   ├── favicon.ico
│   │   └── img
│   ├── tsconfig.json
│   └── typedoc-sidebar.js
├── mangle.json
├── package-lock.json
├── package.json
├── src // Libary Src Code
│   ├── components
│   │   ├── AbstractOverlay.tsx
│   │   ├── Circle.tsx
│   │   ├── CustomOverlayMap.tsx
│   │   ├── CustomOverlayRoadview.tsx
│   │   ├── Ellipse.tsx
│   │   ├── InfoWindow.tsx
│   │   ├── Map.tsx
│   │   ├── MapInfoWindow.tsx
│   │   ├── MapMarker.tsx
│   │   ├── MapTypeControl.tsx
│   │   ├── MapTypeId.tsx
│   │   ├── Marker.tsx
│   │   ├── MarkerClusterer.tsx
│   │   ├── Polygon.tsx
│   │   ├── Polyline.tsx
│   │   ├── Rectangle.tsx
│   │   ├── Roadview.tsx
│   │   ├── RoadviewInfoWindow.tsx
│   │   ├── RoadviewMarker.tsx
│   │   └── ZoomControl.tsx
│   ├── hooks
│   │   ├── useKakaoEvent.tsx
│   │   ├── useMap.tsx
│   │   └── useRoadview.tsx
│   └── index.ts
└── tsconfig.json
```

## 프로젝트 의존성 설치하기

```sh
npm install && cd docs && npm install
```

## 문서 기여하기


### 문서 Server 실행하기

문서 Server를 실행 하기전에 `KAKAOMAP_API_KEY` 에 대한 KEY를 환경 변수에 설정하고 실행 해야 합니다.

> KEY 발급 안내 : https://apis.map.kakao.com/web/guide/

`docs/.env.example` 를 참고 하여 `docs/.env` 파일을 생성하여 실행시 해당 파일을 참고하여 환경 변수를 가지고 싱행 하게 할 수 있습니다.

문서 디렉토리에서 `npm start` 명령어를 통해서 실행 해야 합니다.

```sh
npm start
```

### API - TSDOC

현재 주석을 통한 TSDOC를 이용하여 문서를 생성하고 있습니다.

기본적으로 간단하게 Kakao Map의 문서에서 설명을 그대로 채용한 부분이 있어서 일부분 말투와 설명이 부족한 부분이 있습니다. 현재 `src/components/AbstractOverlay.tsx` 코드의 경우 샘플과 함께 자세한 설명을 추가 해두었으니 해당 파일을 레퍼런스 느낌으로 삼아서 수정 해주시면 됩니다.

### Sample

`docs/docs/sample`

현재 Sample 코드를 보면 `https://apis.map.kakao.com/web/sample/` 와 동일한 문서를 가져갈려고 하는 형태를 보실 수 있습니다.

현재 작성이 완료되지 않은 부분을 수정하여 추가해주시거나 Sample Code에서 개선 할 부분이 보이신다면 해당 부분을 수정해서 PR 날려주세요.

## 코드 기여하기

현재 코드에서 개선할 부분에 대해서 PR를 보내주시면 됩니다.

추가적으로 현재 `Test Code` 에 대한 도입을 준비중인데 이에 대한 도움을 주시면 감사하겠습니다!
