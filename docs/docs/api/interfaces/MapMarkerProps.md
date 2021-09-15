---
id: "MapMarkerProps"
title: "Interface: MapMarkerProps"
sidebar_label: "MapMarkerProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### clickable

• `Optional` **clickable**: `boolean`

클릭 가능한 마커

#### Defined in

[components/MapMarker.tsx:124](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapMarker.tsx#L124)

___

### draggable

• `Optional` **draggable**: `boolean`

드래그 가능한 마커, 로드뷰에 올릴 경우에는 유효하지 않다.

#### Defined in

[components/MapMarker.tsx:119](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapMarker.tsx#L119)

___

### image

• `Optional` **image**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.alt?` | `string` | 마커 이미지의 alt 속성값을 정의한다. |
| `options.className?` | `string` | Contianer className에 대해서 지정합니다. |
| `options.coords?` | `string` | 마커의 클릭 또는 마우스오버 가능한 영역을 표현하는 좌표값 |
| `options.id?` | `string` | Contianer id에 대해서 지정합니다. |
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
| `options.style?` | `CSSProperties` | Contianer style에 대해서 지정합니다. |
| `size` | `Object` | 표시 이미지 크기 |
| `size.height` | `number` | - |
| `size.width` | `number` | - |
| `src` | `string` | 표시 이미지 src |

#### Defined in

[components/MapMarker.tsx:19](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapMarker.tsx#L19)

___

### infoWindowOptions

• `Optional` **infoWindowOptions**: `Object`

InfoWindow 옵션

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `className?` | `string` | Contianer className에 대해서 지정합니다. |
| `disableAutoPan?` | `boolean` | 인포윈도우를 열 때 지도가 자동으로 패닝하지 않을지의 여부 (기본값: false) |
| `id?` | `string` | Contianer id에 대해서 지정합니다. |
| `removable?` | `boolean` | 삭제 가능한 인포윈도우 |
| `style?` | `CSSProperties` | Contianer style에 대해서 지정합니다. |
| `zIndex?` | `number` | 인포윈도우 엘리먼트의 z-index 속성 값 |

#### Defined in

[components/MapMarker.tsx:139](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapMarker.tsx#L139)

___

### opacity

• `Optional` **opacity**: `number`

마커 투명도 (0-1)

#### Defined in

[components/MapMarker.tsx:134](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapMarker.tsx#L134)

___

### position

• **position**: { `lat`: `number` ; `lng`: `number`  } \| { `x`: `number` ; `y`: `number`  }

표시 위치

#### Defined in

[components/MapMarker.tsx:9](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapMarker.tsx#L9)

___

### title

• `Optional` **title**: `string`

마커 엘리먼트의 타이틀 속성 값 (툴팁)

#### Defined in

[components/MapMarker.tsx:114](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapMarker.tsx#L114)

___

### zIndex

• `Optional` **zIndex**: `number`

마커 엘리먼트의 z-index 속성 값

#### Defined in

[components/MapMarker.tsx:129](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapMarker.tsx#L129)

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

[components/MapMarker.tsx:84](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapMarker.tsx#L84)

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

[components/MapMarker.tsx:109](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapMarker.tsx#L109)

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

[components/MapMarker.tsx:104](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapMarker.tsx#L104)

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

[components/MapMarker.tsx:99](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapMarker.tsx#L99)

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

[components/MapMarker.tsx:94](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapMarker.tsx#L94)

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

[components/MapMarker.tsx:89](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapMarker.tsx#L89)
