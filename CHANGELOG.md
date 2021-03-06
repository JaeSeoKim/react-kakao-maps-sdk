# Changelog βοΈ

### v1.1.1

#### Bump π‘

- [kakao.maps.d.ts": "^0.1.32"](https://github.com/JaeSeoKim/kakao.maps.d.ts/releases/tag/v0.1.32)

### v1.1.0

#### Feat β¨

- StaticMap
- refλ₯Ό ν΅ν κ°μ²΄ μ κ·Ό μ§μ
- useInjectKakaoMapApi

#### Fix π 

- useEffect -> useLayoutEffect λ³κ²½
- kakao map μ°κ²°μ μν΄ κ°μΈμ§λ `div` κ°μ²΄ `hidden` μΌλ‘ λ³κ²½ λ° `parentElement` μ λ λλ§ νλλ‘ μμ 
- κΈ°ν λ¬Έμ λ° νμ μ€λ₯ μμ 

#### Bump π‘

- [kakao.maps.d.ts": "^0.1.31"](https://github.com/JaeSeoKim/kakao.maps.d.ts/releases/tag/v0.1.31)

### v1.0.8

#### Feat β¨

- DrawingBox
- Toolbox

#### Bump π‘

- [kakao.maps.d.ts": "^0.1.30"](https://github.com/JaeSeoKim/kakao.maps.d.ts/releases/tag/v0.1.30)
- devDependencies (@types, eslint, etc...)

### v1.0.7

#### Feat β¨

- [Support React 18 ](https://github.com/JaeSeoKim/react-kakao-maps-sdk/pull/13)

#### Bump π‘

- devDependencies (@types, eslint, etc...)

#### Contributors π€

- [@kimkanu](https://github.com/kimkanu)

### v1.0.6

#### Feat β¨

- [Enable CustomOverlayMap clustering](https://github.com/JaeSeoKim/react-kakao-maps-sdk/pull/10)

#### Bump π‘

- [kakao.maps.d.ts": "^0.1.26"](https://github.com/JaeSeoKim/kakao.maps.d.ts/releases/tag/v0.1.26)

  [update MarkerClusterer to handle Marker and CustomOverlay as union](https://github.com/JaeSeoKim/kakao.maps.d.ts/pull/2)

#### Contributors π€

- [@thomas-min](https://github.com/thomas-min)

### v1.0.5

#### Bump π‘

- [kakao.maps.d.ts": "^0.1.25"](https://github.com/JaeSeoKim/kakao.maps.d.ts/tree/v0.1.25)

  [geocoder μΆκ° λ©μλ type μμ±](https://github.com/JaeSeoKim/react-kakao-maps-sdk/issues/8)

### v1.0.4

#### Fixed π

- SSRμ μν `useLayoutEffect` μμ `useEffect` λ‘ λ³κ²½

### v1.0.3

#### Fixed π

- Circle, Ellipse μ€μ¬μ΄ λ³κ²½λμ§ μλ μ€λ₯ μμ  [#1](https://github.com/JaeSeoKim/react-kakao-maps-sdk/issues/1)

### v1.0.2

#### Bump π‘

- [kakao.maps.d.ts": "^0.1.24"](https://github.com/JaeSeoKim/kakao.maps.d.ts/tree/feab5ea06c44c0f54020627e627c041b1b5ac8fb)

### v1.0.1

#### Fixed π

- Buildλ νμΌμ΄ Publish μλλ μ€λ₯ μμ 

### v1.0.0

#### Feature π

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

#### Fixed π

- useMapPosition μ κ±°
- docs Tutorial λ¬Έμ μμ± μλ£
- μΌλΆ νμ μμ  μ€λ₯ μμ .

### v0.2.1

- RoadviewInfoWindow, RoadviewMarker μΆκ°
- Map, Roadview relayout λ‘μ§ μ κ±°
- React.Portal Contianer Elementμ id, className, style μ¬μ μ Props μΆκ°
- μΌλΆ μ»΄ν¬λνΈμ λ‘μ§ μ€λ₯ μμ 
- kakao.maps.d.ts Update!
- Roadview μμ  μΆκ°!

### v0.2.0

- AbstractOverlay μΆκ°
- MarkerClusterer μΆκ°
- MapTypeControl, MapTypeId, ZoomControl μΆκ°
- Circle, Ellipse, Polygon, Polyline, Rectangle μΆκ°
- μ»΄ν¬λνΈ, hook μΌλΆ λ¦¬ν©ν λ§
- markerImage Type μ€λ₯ μμ 
- μΌλΆ ν¨μ μ¬μ©λ² μμ 

### v0.1.1

- publish μ€λ₯ μμ 

### v0.1.0

- using micorbundle
- remove react-script
- change directory sturctor
- add husky, gitmoji, prettier
- add github action CI

### v0.0.20

- kakao.maps.d.ts dependenciesλ‘ μ΄λ

### v0.0.19

- Roadview viewpoint zoomμ΄ μ¬ μ€μ  λμ§ μλλ‘ μμ 

### v0.0.18

- Roadview viewpoint μ΄κΈ°ν μ΄μ μμ 

### v0.0.17

- Roadview viewpoint μν κ΄λ¦¬ μμ 

### v0.0.16

- Marker Position λ¬Έμ  ν΄κ²°

### v0.0.15

- Map center change λ‘μ§ μμ 
- kakao.maps.event.TARGET μΌλ‘ λ  μ μλ ν­λͺ©λ€μ λν΄μ `on~Created` μΆκ°
- λͺ¨λ  event handlerμ λν΄ μ λ¬λλ μΈμ `target` μΆκ°

### v0.0.14

- Roadview SSRμ kakao κ΄λ ¨ κ°μ²΄ μλ¬ μμ 

### v0.0.13

- Roadview resizeμ customoverlay μ¬λΌμ§λ μ€λ₯ μμ 
- Map event handler μ€λ₯ μμ 
- CustomOverlayMap, CustomOverlayRoadview λ¦¬ν©ν λ§
- EventHandler κ΄λ ¨ μ½λ hookμΌλ‘ μ¬μμ±

### v0.0.12

- Map event handler μΆκ°
- Roadview event handler μΆκ°
- Marker Props μμ 
- λλΆλΆμ component useEffect κ΄μ¬μ¬ λΆλ¦¬

### v0.0.11

- Marker option update κ°λ₯ νλλ‘ μμ 

### v0.0.10

- Map center useEffect deps μ€λ₯ μμ 
- Marker κ°μ²΄ κ΄λ¦¬ λ°©μ useMemoλ‘ λ³κ²½
- build λ νμΌ comment ν¬ν¨ νλλ‘ μμ 

### v0.0.9

- CustomOverlayRoadview μ€λ₯ μμ 

### v0.0.8

- Map position prop μ΄λ¦ center λ‘ λ‘€λ°±

### v0.0.7

- useRelayout μΆκ°
- MapInfoWindow μΆκ°
- MapMarker μΆκ°
  - μ΄λ²€νΈ, InfoWindow λ± κ΅¬ν
- CustomOverlayMap, CustomOverlayRoadview Code refactoring
  - class compontent -> functional component λ‘ λ³κ²½
  - dragEvent μΆκ°.
- Map, Roadview μΈλΆ HTMLElementλ₯Ό κ°μ§κ³  μμ±μ΄ κ°λ₯νλλ‘ μμ 
  - μ¬λ¬κ°μ§ μΈμλ€μ λν΄μ μμ ν¨. ex) size propμμ styleλ‘ νμ₯, center -> position, option -> options λ±

### v0.0.6

- νλ‘μ νΈ κ΅¬μ‘° μμ 
- main - release λλ λ²μ 
- develop - κ°λ° μ μ© λΈλμΉ
- docs - κ°λ° API λ¬Έμ

### v0.0.5

- Roadview, CustomOverlayRoadview μ»΄ν¬λνΈ μΆκ°

### v0.0.1 ~ v0.0.4

- μ΄κΈ° νλ‘μ νΈ μ€μ 
- Map Container μΆκ°
- useMapSetCenter μΆκΈ°
- useMapPanTo μΆκ°
- CustomOverlayMap μΆκ°
- API λ¬Έμ μμ±
