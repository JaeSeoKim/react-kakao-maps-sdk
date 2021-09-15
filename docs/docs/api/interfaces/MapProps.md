---
id: "MapProps"
title: "Interface: MapProps"
sidebar_label: "MapProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### center

• **center**: { `lat`: `number` ; `lng`: `number`  } \| { `x`: `number` ; `y`: `number`  }

중심으로 설정할 위치 입니다.

#### Defined in

[components/Map.tsx:28](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L28)

___

### className

• `Optional` **className**: `string`

MapContainer의 className에 대해서 지정합니다.

#### Defined in

[components/Map.tsx:18](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L18)

___

### disableDoubleClick

• `Optional` **disableDoubleClick**: `boolean`

더블클릭 이벤트 및 더블클릭 확대 가능 여부

#### Defined in

[components/Map.tsx:89](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L89)

___

### disableDoubleClickZoom

• `Optional` **disableDoubleClickZoom**: `boolean`

더블클릭 확대 가능 여부

#### Defined in

[components/Map.tsx:94](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L94)

___

### draggable

• `Optional` **draggable**: `boolean`

마우스 드래그, 휠, 모바일 터치를 이용한 시점 변경(이동, 확대, 축소) 가능 여부

#### Defined in

[components/Map.tsx:74](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L74)

___

### id

• `Optional` **id**: `string`

MapContinaer의 id에 대해서 지정합니다.

**`default`** "kakao-map-container"

#### Defined in

[components/Map.tsx:13](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L13)

___

### isPanto

• `Optional` **isPanto**: `boolean`

중심을 이동시킬때 Panto를 사용할지 정합니다.

**`default`** false

#### Defined in

[components/Map.tsx:42](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L42)

___

### keyboardShortcuts

• `Optional` **keyboardShortcuts**: `boolean` \| { `speed`: `number`  }

키보드의 방향키와 +, – 키로 지도 이동,확대,축소 가능 여부 (기본값: false)

#### Defined in

[components/Map.tsx:109](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L109)

___

### level

• `Optional` **level**: `number`

확대 수준 (기본값: 3)

#### Defined in

[components/Map.tsx:54](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L54)

___

### mapTypeId

• `Optional` **mapTypeId**: `MapTypeId`

지도 종류 (기본값: 일반 지도)

#### Defined in

[components/Map.tsx:69](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L69)

___

### maxLevel

• `Optional` **maxLevel**: `number`

최대 확대 수준

#### Defined in

[components/Map.tsx:59](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L59)

___

### minLevel

• `Optional` **minLevel**: `number`

최소 확대 수준

#### Defined in

[components/Map.tsx:64](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L64)

___

### padding

• `Optional` **padding**: `number`

중심 좌표를 지정한 좌표 또는 영역으로 부드럽게 이동한다. 필요하면 확대 또는 축소도 수행한다.
만약 이동할 거리가 지도 화면의 크기보다 클 경우 애니메이션 없이 이동한다.
padding 만큼 제외하고 영역을 계산하며, padding 을 지정하지 않으면 기본값으로 32가 사용된다.

#### Defined in

[components/Map.tsx:49](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L49)

___

### projectionId

• `Optional` **projectionId**: `string`

투영법 지정 (기본값: kakao.maps.ProjectionId.WCONG)

#### Defined in

[components/Map.tsx:99](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L99)

___

### scrollwheel

• `Optional` **scrollwheel**: `boolean`

마우스 휠, 모바일 터치를 이용한 확대 및 축소 가능 여부

#### Defined in

[components/Map.tsx:84](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L84)

___

### style

• `Optional` **style**: `CSSProperties`

MapContainer의 style에 대해서 지정합니다.

#### Defined in

[components/Map.tsx:23](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L23)

___

### tileAnimation

• `Optional` **tileAnimation**: `boolean`

지도 타일 애니메이션 설정 여부 (기본값: true)

#### Defined in

[components/Map.tsx:104](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L104)

___

### zoomable

• `Optional` **zoomable**: `boolean`

마우스 휠이나 멀티터치로 지도 확대, 축소 기능을 막습니다. 상황에 따라 지도 확대, 축소 기능을 제어할 수 있습니다.

#### Defined in

[components/Map.tsx:79](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L79)

## Methods

### onBoundsChanged

▸ `Optional` **onBoundsChanged**(`target`): `void`

지도 영역이 변경되면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Map` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:141](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L141)

___

### onCenterChanged

▸ `Optional` **onCenterChanged**(`target`): `void`

중심 좌표가 변경되면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Map` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:126](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L126)

___

### onClick

▸ `Optional` **onClick**(`target`, `mouseEvent`): `void`

지도를 클릭하면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Map` |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:146](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L146)

___

### onCreate

▸ `Optional` **onCreate**(`map`): `void`

map 생성 후 해당 객체를 전달하는 함수

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:121](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L121)

___

### onDoubleClick

▸ `Optional` **onDoubleClick**(`target`, `mouseEvent`): `void`

지도를 더블클릭하면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Map` |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:154](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L154)

___

### onDrag

▸ `Optional` **onDrag**(`target`, `mouseEvent`): `void`

드래그를 하는 동안 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Map` |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:186](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L186)

___

### onDragEnd

▸ `Optional` **onDragEnd**(`target`, `mouseEvent`): `void`

드래그가 끝날 때 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Map` |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:194](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L194)

___

### onDragStart

▸ `Optional` **onDragStart**(`target`, `mouseEvent`): `void`

드래그를 시작할 때 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Map` |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:178](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L178)

___

### onIdle

▸ `Optional` **onIdle**(`target`): `void`

중심 좌표나 확대 수준이 변경되면 발생한다.
단, 애니메이션 도중에는 발생하지 않는다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Map` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:203](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L203)

___

### onMaptypeidChanged

▸ `Optional` **onMaptypeidChanged**(`target`): `void`

지도 기본 타일(일반지도, 스카이뷰, 하이브리드)이 변경되면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Map` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:214](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L214)

___

### onMouseMove

▸ `Optional` **onMouseMove**(`target`, `mouseEvent`): `void`

지도에서 마우스 커서를 이동하면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Map` |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:170](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L170)

___

### onRightClick

▸ `Optional` **onRightClick**(`target`, `mouseEvent`): `void`

지도를 마우스 오른쪽 버튼으로 클릭하면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Map` |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:162](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L162)

___

### onTileLoaded

▸ `Optional` **onTileLoaded**(`target`): `void`

확대수준이 변경되거나 지도가 이동했을때 타일 이미지 로드가 모두 완료되면 발생한다.
지도이동이 미세하기 일어나 타일 이미지 로드가 일어나지 않은경우 발생하지 않는다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Map` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:209](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L209)

___

### onZoomChanged

▸ `Optional` **onZoomChanged**(`target`): `void`

확대 수준이 변경되면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Map` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:136](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L136)

___

### onZoomStart

▸ `Optional` **onZoomStart**(`target`): `void`

확대 수준이 변경되기 직전 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Map` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:131](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Map.tsx#L131)
