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

| Name | Type |
| :------ | :------ |
| `lat` | `number` |
| `lng` | `number` |

#### Defined in

[components/Map.tsx:40](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L40)

___

### className

• `Optional` **className**: `string`

MapContainer의 className에 대해서 지정합니다.

containerElem가 들어온다면 무시 됩니다.

#### Defined in

[components/Map.tsx:23](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L23)

___

### containerElem

• `Optional` **containerElem**: ``null`` \| `HTMLElement`

MapContainer Elem를 사용자 정의 합니다.

#### Defined in

[components/Map.tsx:35](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L35)

___

### disableDoubleClick

• `Optional` **disableDoubleClick**: `boolean`

더블클릭 이벤트 및 더블클릭 확대 가능 여부

#### Defined in

[components/Map.tsx:97](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L97)

___

### disableDoubleClickZoom

• `Optional` **disableDoubleClickZoom**: `boolean`

더블클릭 확대 가능 여부

#### Defined in

[components/Map.tsx:102](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L102)

___

### draggable

• `Optional` **draggable**: `boolean`

마우스 드래그, 휠, 모바일 터치를 이용한 시점 변경(이동, 확대, 축소) 가능 여부

#### Defined in

[components/Map.tsx:87](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L87)

___

### id

• `Optional` **id**: `string`

MapContinaer의 id에 대해서 지정합니다.

containerElem가 들어온다면 무시 됩니다.

**`default`** "kakao-map-container"

#### Defined in

[components/Map.tsx:16](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L16)

___

### isPanto

• `Optional` **isPanto**: `boolean`

중심을 이동시킬때 Panto를 사용할지 정합니다.

**`default`** false

#### Defined in

[components/Map.tsx:49](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L49)

___

### keyboardShortcuts

• `Optional` **keyboardShortcuts**: `boolean` \| { `speed`: `number`  }

키보드의 방향키와 +, – 키로 지도 이동,확대,축소 가능 여부 (기본값: false)

#### Defined in

[components/Map.tsx:117](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L117)

___

### level

• `Optional` **level**: `number`

확대 수준 (기본값: 3)

#### Defined in

[components/Map.tsx:67](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L67)

___

### loading

• `Optional` **loading**: `boolean`

스크립트를 동적으로 로드확인을 위해 사용한다.

**`default`** false

#### Defined in

[components/Map.tsx:62](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L62)

___

### mapTypeId

• `Optional` **mapTypeId**: `MapTypeId`

지도 종류 (기본값: 일반 지도)

#### Defined in

[components/Map.tsx:82](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L82)

___

### maxLevel

• `Optional` **maxLevel**: `number`

최대 확대 수준

#### Defined in

[components/Map.tsx:72](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L72)

___

### minLevel

• `Optional` **minLevel**: `number`

최소 확대 수준

#### Defined in

[components/Map.tsx:77](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L77)

___

### padding

• `Optional` **padding**: `number`

중심 좌표를 지정한 좌표 또는 영역으로 부드럽게 이동한다. 필요하면 확대 또는 축소도 수행한다.
만약 이동할 거리가 지도 화면의 크기보다 클 경우 애니메이션 없이 이동한다.
padding 만큼 제외하고 영역을 계산하며, padding 을 지정하지 않으면 기본값으로 32가 사용된다.

#### Defined in

[components/Map.tsx:56](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L56)

___

### projectionId

• `Optional` **projectionId**: `string`

투영법 지정 (기본값: kakao.maps.ProjectionId.WCONG)

#### Defined in

[components/Map.tsx:107](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L107)

___

### scrollwheel

• `Optional` **scrollwheel**: `boolean`

마우스 휠, 모바일 터치를 이용한 확대 및 축소 가능 여부

#### Defined in

[components/Map.tsx:92](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L92)

___

### style

• `Optional` **style**: `CSSProperties`

MapContainer의 style에 대해서 지정합니다.

containerElem가 들어온다면 무시 됩니다.

#### Defined in

[components/Map.tsx:30](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L30)

___

### tileAnimation

• `Optional` **tileAnimation**: `boolean`

지도 타일 애니메이션 설정 여부 (기본값: true)

#### Defined in

[components/Map.tsx:112](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L112)

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

[components/Map.tsx:149](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L149)

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

[components/Map.tsx:134](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L134)

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

[components/Map.tsx:154](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L154)

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

[components/Map.tsx:162](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L162)

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

[components/Map.tsx:194](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L194)

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

[components/Map.tsx:202](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L202)

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

[components/Map.tsx:186](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L186)

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

[components/Map.tsx:211](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L211)

___

### onMapCreated

▸ `Optional` **onMapCreated**(`map`): `void`

map 생성 후 해당 객체를 전달하는 함수

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map` |

#### Returns

`void`

#### Defined in

[components/Map.tsx:129](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L129)

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

[components/Map.tsx:222](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L222)

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

[components/Map.tsx:178](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L178)

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

[components/Map.tsx:170](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L170)

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

[components/Map.tsx:217](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L217)

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

[components/Map.tsx:144](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L144)

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

[components/Map.tsx:139](https://github.com/JaeSeoKim/react-kakao-maps/blob/2648067/src/components/Map.tsx#L139)
