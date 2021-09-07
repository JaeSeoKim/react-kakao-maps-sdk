---
id: "MapMarkerProps"
title: "Interface: MapMarkerProps"
sidebar_label: "MapMarkerProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### altitude

• `Optional` **altitude**: `number`

로드뷰에 올라있는 마커의 높이 값(m 단위)

#### Defined in

[components/MapMarker.tsx:111](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/MapMarker.tsx#L111)

___

### clickable

• `Optional` **clickable**: `boolean`

클릭 가능한 마커

#### Defined in

[components/MapMarker.tsx:96](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/MapMarker.tsx#L96)

___

### draggable

• `Optional` **draggable**: `boolean`

드래그 가능한 마커, 로드뷰에 올릴 경우에는 유효하지 않다.

#### Defined in

[components/MapMarker.tsx:91](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/MapMarker.tsx#L91)

___

### image

• `Optional` **image**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.alt?` | `string` | 마커 이미지의 alt 속성값을 정의한다. |
| `options.coords?` | `string` | 마커의 클릭 또는 마우스오버 가능한 영역을 표현하는 좌표값 |
| `options.offset?` | [x: number, y: number] | 마커의 좌표에 일치시킬 이미지 안의 좌표 (기본값: 이미지의 가운데 아래) |
| `options.shape?` | ``"default"`` \| ``"rect"`` \| ``"circle"`` \| ``"poly"`` | 마커의 클릭 또는 마우스오버 가능한 영역의 모양 |
| `options.spriteOrigin?` | [x: number, y: number] | 스프라이트 이미지 중 사용할 영역의 좌상단 좌표 |
| `options.spriteSize?` | [width: number, height: number] | 스프라이트 이미지의 전체 크기 |
| `size` | [width: number, height: number] | 표시 이미지 크기 |
| `src` | `string` | 표시 이미지 src |

#### Defined in

[components/MapMarker.tsx:14](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/MapMarker.tsx#L14)

___

### infoWindowOptions

• `Optional` **infoWindowOptions**: `Object`

InfoWindow 옵션

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `altitude?` | `number` | 로드뷰에 올라있는 인포윈도우의 높이 값(m 단위) |
| `disableAutoPan?` | `boolean` | 인포윈도우를 열 때 지도가 자동으로 패닝하지 않을지의 여부 (기본값: false) |
| `range?` | `number` | 로드뷰 상에서 인포윈도우의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 인포윈도우는 보이지 않게 된다 |
| `removable?` | `boolean` | 삭제 가능한 인포윈도우 |
| `zIndex?` | `number` | 인포윈도우 엘리먼트의 z-index 속성 값 |

#### Defined in

[components/MapMarker.tsx:121](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/MapMarker.tsx#L121)

___

### opacity

• `Optional` **opacity**: `number`

마커 투명도 (0-1)

#### Defined in

[components/MapMarker.tsx:106](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/MapMarker.tsx#L106)

___

### position

• **position**: `Object`

표시 위치

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lat` | `number` |
| `lng` | `number` |

#### Defined in

[components/MapMarker.tsx:9](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/MapMarker.tsx#L9)

___

### range

• `Optional` **range**: `number`

로드뷰 상에서 마커의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 마커는 로드뷰에서 보이지 않게 된다.

#### Defined in

[components/MapMarker.tsx:116](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/MapMarker.tsx#L116)

___

### title

• `Optional` **title**: `string`

마커 엘리먼트의 타이틀 속성 값 (툴팁)

#### Defined in

[components/MapMarker.tsx:86](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/MapMarker.tsx#L86)

___

### zIndex

• `Optional` **zIndex**: `number`

마커 엘리먼트의 z-index 속성 값

#### Defined in

[components/MapMarker.tsx:101](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/MapMarker.tsx#L101)

## Methods

### onClick

▸ `Optional` **onClick**(`marker`): `void`

click 이벤트 핸들러

#### Parameters

| Name | Type |
| :------ | :------ |
| `marker` | `Marker` |

#### Returns

`void`

#### Defined in

[components/MapMarker.tsx:61](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/MapMarker.tsx#L61)

___

### onDragEnd

▸ `Optional` **onDragEnd**(`marker`): `void`

dragend 이벤트 핸들러

#### Parameters

| Name | Type |
| :------ | :------ |
| `marker` | `Marker` |

#### Returns

`void`

#### Defined in

[components/MapMarker.tsx:81](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/MapMarker.tsx#L81)

___

### onDragStart

▸ `Optional` **onDragStart**(`marker`): `void`

dragstart 이벤트 핸들러

#### Parameters

| Name | Type |
| :------ | :------ |
| `marker` | `Marker` |

#### Returns

`void`

#### Defined in

[components/MapMarker.tsx:76](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/MapMarker.tsx#L76)

___

### onMouseOut

▸ `Optional` **onMouseOut**(`marker`): `void`

mouseout 이벤트 핸들러

#### Parameters

| Name | Type |
| :------ | :------ |
| `marker` | `Marker` |

#### Returns

`void`

#### Defined in

[components/MapMarker.tsx:71](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/MapMarker.tsx#L71)

___

### onMouseOver

▸ `Optional` **onMouseOver**(`marker`): `void`

mouseover 이벤트 핸들러

#### Parameters

| Name | Type |
| :------ | :------ |
| `marker` | `Marker` |

#### Returns

`void`

#### Defined in

[components/MapMarker.tsx:66](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/MapMarker.tsx#L66)
