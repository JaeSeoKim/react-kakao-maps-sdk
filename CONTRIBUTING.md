# 프로젝트 구조

해당 프로젝트는 MonoRepo 구조를 띄며, `pnpm`를 이용하고 있습니다.
폴더 구조에 대한 설명은 아래를 참고 해주세요.

```tree
react-kakao-maps-sdk
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── babel.config.js
├── configs # 공통으로 사용되는 설정들이 모여있는지 패키지 폴더 입니다.
│   ├── babel
│   ├── eslint
│   ├── prettier
│   └── rollup
├── dev # 개발시 사용하는 Dev 서버 입니다.
│   ├── README.md
│   ├── index.html
│   ├── package.json
│   ├── public
│   │   └── vite.svg
│   ├── src
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── pages
│   │   │   ├── dev.tsx
│   │   │   └── samples # 해당 폴더에 E2E 및 문서화에 사용되는 샘플 코드를 합성합니다.
│   │   └── vite-env.d.ts
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── docs # Docusaurus를 통해 docs를 생성합니다.
│   ├── README.md
│   ├── babel.config.js
│   ├── docs # 문서를 작성하는 경로 입니다. (md, mdx) 모두 사용이 가능합니다.
│   │   ├── api # TSDOC를 이용하여 자동으로 문서가 생성되는 위치 입니다. 이 부분을 수정을 하려면 {PROJECT_DIR}/src 하위의 소스코드에 TSDOC을 추가해주세요.
│   │   ├── intro.mdx
│   │   ├── sample # 샘플에 대한 문서가 들어가 있습니다.
│   │   └── setup
│   ├── docusaurus.config.js
│   ├── package.json
│   ├── sidebars.js
│   ├── src
│   ├── static
│   ├── tsconfig.json
│   └── typedoc-sidebar.js
├── examples # react-kakao-maps-sdk를 다양한 프레임워크와 결합하여 사용할 수 있는 예시를 모아둔 폴더 입니다.
│   └── nextjs-app
├── package.json
├── packages
│   └── react-kakao-maps-sdk # 메인이 되는 라이브러리 패키지 폴더 입니다.
│       ├── CHANGELOG.md
│       ├── README.md
│       ├── __test__ # E2E 테스자를 작성하는 폴더 입니다.
│       ├── babel.config.cjs
│       ├── package.json
│       ├── playwright.config.ts
│       ├── rollup.config.cjs
│       ├── src # 하위 폴더 명에 따라 계층적으로 코드를 작성합니다.
│       │   ├── components
│       │   ├── hooks
│       │   ├── index.ts
│       │   ├── types.ts
│       │   └── util
│       ├── tsconfig.build.json
│       └── tsconfig.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── sample-original
│   ├── index.js
│   ├── package.json
│   └── samples # 크롤링을 통해 가져온 kakao map API 원본 Sample 입니다. 해당 코드를 이용하여 비교 렌더링을 진행합니다.
└── tsconfig.json
```

## 의존성 설치

```sh
pnpm install
```

`playwright`를 위해 아래의 명령어를 실행 후 안내에 따라 추가적인 명령어를 실행합니다.

```sh
npx playwright install
```

## 환경변수 설정

개발 및 문서화에 대한 결과물을 보기 위해서는 `kakao map api key`가 필요합니다.

> KEY 발급 안내 : https://apis.map.kakao.com/web/guide/

아래의 파일을 참고하여 각 폴더에 `.env` 파일을 만들어 주세요.

- `dev/.env.example`
- `docs/.env.example`
- `sample-original/.env.example`

또한 Kakao Developer에 kakao map를 호출하는 URL을 기입 하여야 합니다.

#### port 및 url

- dev: 5173
- docs: 3000
- sample-original: 5252
- sandpack: https://2-6-9-sandpack.codesandbox.io/ [참고](https://github.com/codesandbox/sandpack/blob/v2.6.9/sandpack-client/src/clients/runtime/index.ts#L29-L35) # 따라서 버전에 따라 플랫폼 재등록 필요..!

## 문서 기여하기

### 문서 Server 실행하기

문서 Server를 실행 하기전에 `KAKAOMAP_API_KEY` 에 대한 KEY를 환경 변수에 설정하고 실행 해야 합니다.

프로젝트 루트에서 아래의 명령어를 사용하거나

```sh
pnpm run docs
```

`docs` 경로에서 아래의 명령을 통해 직접 실행할 수 있습니다.

```sh
pnpm run dev
```

### API - TSDOC

현재 주석을 통한 TSDOC를 이용하여 문서를 생성하고 있습니다.

기본적으로 간단하게 Kakao Map의 문서에서 설명을 그대로 채용한 부분이 있어서 일부분 말투와 설명이 부족한 부분이 있습니다. 현재 `src/components/AbstractOverlay.tsx` 코드의 경우 샘플과 함께 자세한 설명을 추가 해두었으니 해당 파일을 레퍼런스 느낌으로 삼아서 수정 해주시면 됩니다.

### Sample

`docs/docs/sample`

현재 Sample 코드를 보면 `https://apis.map.kakao.com/web/sample/` 와 동일한 문서를 가져갈려고 하는 형태를 보실 수 있습니다.

이때 E2E 테스트와 같이 Sample 코드를 재사용할 수 있도록 `SandPack`를 이용하여 문서를 작성을 다시 작성하고 있습니다.

`docs/docs/sample/map/addMapCustomControl.mdx` 파일을 보면 다음과 같이 sample 소스코드를 직접 load하여 사용하는 것을 볼 수 있습니다.

```tsx
import codesource from "!!raw-loader!~samples/addMapCustomControl.tsx"
import styleSource from "!!raw-loader!~samples/addMapCustomControl.style.tsx"

;<LiveEditor
  files={{
    "/addMapCustomControl.style.tsx": styleSource,
  }}
>
  {codesource}
</LiveEditor>
```

`~samples`의 경우 `dev/src/pages/samples`와 alias되어 있으니, `dev` 서버에서 테스트 완료 후 문서에 추가하면 됩니다.

## dev 서버

<!-- TODO: 문서작성하기 -->

## E2E 테스트

<!-- TODO: 문서작성하기 -->

## 코드 기여하기

현재 코드에서 개선할 부분에 대해서 PR를 보내주시면 됩니다.
언제든지 기여에 대해서는 언제나 환영합니다.!
