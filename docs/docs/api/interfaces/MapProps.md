---
id: "MapProps"
title: "Interface: MapProps"
sidebar_label: "MapProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### center

• **center**: `Object`

중심으로 설정할 위치 입니다.

#### Type declaration

| Name  | Type     |
| :---- | :------- |
| `lat` | `number` |
| `lng` | `number` |

#### Defined in

[components/Map.tsx:29](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L29)

---

### className

• `Optional` **className**: `string`

MapContainer의 className에 대해서 지정합니다.

#### Defined in

[components/Map.tsx:19](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L19)

---

### disableDoubleClick

• `Optional` **disableDoubleClick**: `boolean`

더블클릭 이벤트 및 더블클릭 확대 가능 여부

#### Defined in

[components/Map.tsx:85](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L85)

---

### disableDoubleClickZoom

• `Optional` **disableDoubleClickZoom**: `boolean`

더블클릭 확대 가능 여부

#### Defined in

[components/Map.tsx:90](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L90)

---

### draggable

• `Optional` **draggable**: `boolean`

마우스 드래그, 휠, 모바일 터치를 이용한 시점 변경(이동, 확대, 축소) 가능 여부

#### Defined in

[components/Map.tsx:70](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L70)

---

### id

• `Optional` **id**: `string`

MapContinaer의 id에 대해서 지정합니다.

**`default`** "kakao-map-container"

#### Defined in

[components/Map.tsx:14](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L14)

---

### isPanto

• `Optional` **isPanto**: `boolean`

중심을 이동시킬때 Panto를 사용할지 정합니다.

**`default`** false

#### Defined in

[components/Map.tsx:38](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L38)

---

### keyboardShortcuts

• `Optional` **keyboardShortcuts**: `boolean` \| { `speed`: `number` }

키보드의 방향키와 +, – 키로 지도 이동,확대,축소 가능 여부 (기본값: false)

#### Defined in

[components/Map.tsx:105](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L105)

---

### level

• `Optional` **level**: `number`

확대 수준 (기본값: 3)

#### Defined in

[components/Map.tsx:50](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L50)

---

### mapTypeId

• `Optional` **mapTypeId**: `MapTypeId`

지도 종류 (기본값: 일반 지도)

#### Defined in

[components/Map.tsx:65](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L65)

---

### maxLevel

• `Optional` **maxLevel**: `number`

최대 확대 수준

#### Defined in

[components/Map.tsx:55](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L55)

---

### minLevel

• `Optional` **minLevel**: `number`

최소 확대 수준

#### Defined in

[components/Map.tsx:60](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L60)

---

### padding

• `Optional` **padding**: `number`

중심 좌표를 지정한 좌표 또는 영역으로 부드럽게 이동한다. 필요하면 확대 또는 축소도 수행한다.
만약 이동할 거리가 지도 화면의 크기보다 클 경우 애니메이션 없이 이동한다.
padding 만큼 제외하고 영역을 계산하며, padding 을 지정하지 않으면 기본값으로 32가 사용된다.

#### Defined in

[components/Map.tsx:45](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L45)

---

### projectionId

• `Optional` **projectionId**: `string`

투영법 지정 (기본값: kakao.maps.ProjectionId.WCONG)

#### Defined in

[components/Map.tsx:95](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L95)

---

### scrollwheel

• `Optional` **scrollwheel**: `boolean`

마우스 휠, 모바일 터치를 이용한 확대 및 축소 가능 여부

#### Defined in

[components/Map.tsx:80](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L80)

---

### style

• `Optional` **style**: `CSSProperties`

MapContainer의 style에 대해서 지정합니다.

#### Defined in

[components/Map.tsx:24](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L24)

---

### tileAnimation

• `Optional` **tileAnimation**: `boolean`

지도 타일 애니메이션 설정 여부 (기본값: true)

#### Defined in

[components/Map.tsx:100](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L100)

---

### zoomable

• `Optional` **zoomable**: `boolean`

마우스 휠이나 멀티터치로 지도 확대, 축소 기능을 막습니다. 상황에 따라 지도 확대, 축소 기능을 제어할 수 있습니다.

#### Defined in

[components/Map.tsx:75](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L75)

## Methods

### onBoundsChanged

▸ `Optional` **onBoundsChanged**(`target`): `void`

지도 영역이 변경되면 발생한다.

#### Parameters

| Name     | Type  |
| :------- | :---- |
| `target` | `Map` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:137](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L137)

---

### onCenterChanged

▸ `Optional` **onCenterChanged**(`target`): `void`

중심 좌표가 변경되면 발생한다.

#### Parameters

| Name     | Type  |
| :------- | :---- |
| `target` | `Map` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:122](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L122)

---

### onClick

▸ `Optional` **onClick**(`target`, `mouseEvent`): `void`

지도를 클릭하면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Map`        |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:142](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L142)

---

### onCreate

▸ `Optional` **onCreate**(`map`): `void`

map 생성 후 해당 객체를 전달하는 함수

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `map` | `Map` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:117](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L117)

---

### onDoubleClick

▸ `Optional` **onDoubleClick**(`target`, `mouseEvent`): `void`

지도를 더블클릭하면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Map`        |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:150](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L150)

---

### onDrag

▸ `Optional` **onDrag**(`target`, `mouseEvent`): `void`

드래그를 하는 동안 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Map`        |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:182](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L182)

---

### onDragEnd

▸ `Optional` **onDragEnd**(`target`, `mouseEvent`): `void`

드래그가 끝날 때 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Map`        |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:190](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L190)

---

### onDragStart

▸ `Optional` **onDragStart**(`target`, `mouseEvent`): `void`

드래그를 시작할 때 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Map`        |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:174](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L174)

---

### onIdle

▸ `Optional` **onIdle**(`target`): `void`

중심 좌표나 확대 수준이 변경되면 발생한다.
단, 애니메이션 도중에는 발생하지 않는다.

#### Parameters

| Name     | Type  |
| :------- | :---- |
| `target` | `Map` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:199](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L199)

---

### onMaptypeidChanged

▸ `Optional` **onMaptypeidChanged**(`target`): `void`

지도 기본 타일(일반지도, 스카이뷰, 하이브리드)이 변경되면 발생한다.

#### Parameters

| Name     | Type  |
| :------- | :---- |
| `target` | `Map` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:210](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L210)

---

### onMouseMove

▸ `Optional` **onMouseMove**(`target`, `mouseEvent`): `void`

지도에서 마우스 커서를 이동하면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Map`        |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:166](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L166)

---

### onRightClick

▸ `Optional` **onRightClick**(`target`, `mouseEvent`): `void`

지도를 마우스 오른쪽 버튼으로 클릭하면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Map`        |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:158](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L158)

---

### onTileLoaded

▸ `Optional` **onTileLoaded**(`target`): `void`

확대수준이 변경되거나 지도가 이동했을때 타일 이미지 로드가 모두 완료되면 발생한다.
지도이동이 미세하기 일어나 타일 이미지 로드가 일어나지 않은경우 발생하지 않는다.

#### Parameters

| Name     | Type  |
| :------- | :---- |
| `target` | `Map` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:205](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L205)

---

### onZoomChanged

▸ `Optional` **onZoomChanged**(`target`): `void`

확대 수준이 변경되면 발생한다.

#### Parameters

| Name     | Type  |
| :------- | :---- |
| `target` | `Map` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:132](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L132)

---

### onZoomStart

▸ `Optional` **onZoomStart**(`target`): `void`

확대 수준이 변경되기 직전 발생한다.

#### Parameters

| Name     | Type  |
| :------- | :---- |
| `target` | `Map` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:127](https://github.com/JaeSeoKim/react-kakao-maps/blob/3623c5a/src/components/Map.tsx#L127)
