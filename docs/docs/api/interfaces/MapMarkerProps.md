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

[components/MapMarker.tsx:124](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/MapMarker.tsx#L124)

___

### clickable

• `Optional` **clickable**: `boolean`

클릭 가능한 마커

#### Defined in

[components/MapMarker.tsx:109](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/MapMarker.tsx#L109)

___

### draggable

• `Optional` **draggable**: `boolean`

드래그 가능한 마커, 로드뷰에 올릴 경우에는 유효하지 않다.

#### Defined in

[components/MapMarker.tsx:104](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/MapMarker.tsx#L104)

___

### image

• `Optional` **image**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.alt?` | `string` | 마커 이미지의 alt 속성값을 정의한다. |
| `options.coords?` | `string` | 마커의 클릭 또는 마우스오버 가능한 영역을 표현하는 좌표값 |
| `options.offset?` | `Object` | 마커의 좌표에 일치시킬 이미지 안의 좌표 (기본값: 이미지의 가운데 아래) |
| `options.offset.x` | `number` | - |
| `options.offset.y` | `number` | - |
| `options.shape?` | ``"default"`` \| ``"rect"`` \| ``"circle"`` \| ``"poly"`` | 마커의 클릭 또는 마우스오버 가능한 영역의 모양 |
| `options.spriteOrigin?` | `Object` | 스프라이트 이미지 중 사용할 영역의 좌상단 좌표 |
| `options.spriteOrigin.x` | `number` | - |
| `options.spriteOrigin.y` | `number` | - |
| `options.spriteSize?` | `Object` | 스프라이트 이미지의 전체 크기 |
| `options.spriteSize.height` | `number` | - |
| `options.spriteSize.width` | `number` | - |
| `size` | `Object` | 표시 이미지 크기 |
| `size.height` | `number` | - |
| `size.width` | `number` | - |
| `src` | `string` | 표시 이미지 src |

#### Defined in

[components/MapMarker.tsx:19](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/MapMarker.tsx#L19)

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

[components/MapMarker.tsx:134](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/MapMarker.tsx#L134)

___

### opacity

• `Optional` **opacity**: `number`

마커 투명도 (0-1)

#### Defined in

[components/MapMarker.tsx:119](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/MapMarker.tsx#L119)

___

### position

• **position**: { `lat`: `number` ; `lng`: `number`  } \| { `x`: `number` ; `y`: `number`  }

표시 위치

#### Defined in

[components/MapMarker.tsx:9](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/MapMarker.tsx#L9)

___

### range

• `Optional` **range**: `number`

로드뷰 상에서 마커의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 마커는 로드뷰에서 보이지 않게 된다.

#### Defined in

[components/MapMarker.tsx:129](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/MapMarker.tsx#L129)

___

### title

• `Optional` **title**: `string`

마커 엘리먼트의 타이틀 속성 값 (툴팁)

#### Defined in

[components/MapMarker.tsx:99](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/MapMarker.tsx#L99)

___

### zIndex

• `Optional` **zIndex**: `number`

마커 엘리먼트의 z-index 속성 값

#### Defined in

[components/MapMarker.tsx:114](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/MapMarker.tsx#L114)

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

[components/MapMarker.tsx:69](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/MapMarker.tsx#L69)

___

### onCreate

▸ `Optional` **onCreate**(`maker`): `void`

Maker 생성 이벤트 핸들러

#### Parameters

| Name | Type |
| :------ | :------ |
| `maker` | `Marker` |

#### Returns

`void`

#### Defined in

[components/MapMarker.tsx:94](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/MapMarker.tsx#L94)

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

[components/MapMarker.tsx:89](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/MapMarker.tsx#L89)

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

[components/MapMarker.tsx:84](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/MapMarker.tsx#L84)

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

[components/MapMarker.tsx:79](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/MapMarker.tsx#L79)

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

[components/MapMarker.tsx:74](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/MapMarker.tsx#L74)
