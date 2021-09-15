---
id: "MapInfoWindowProps"
title: "Interface: MapInfoWindowProps"
sidebar_label: "MapInfoWindowProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### className

• `Optional` **className**: `string`

Contianer className에 대해서 지정합니다.

#### Defined in

[components/MapInfoWindow.tsx:14](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapInfoWindow.tsx#L14)

___

### disableAutoPan

• `Optional` **disableAutoPan**: `boolean`

인포윈도우를 열 때 지도가 자동으로 패닝하지 않을지의 여부 (기본값: false)

#### Defined in

[components/MapInfoWindow.tsx:31](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapInfoWindow.tsx#L31)

___

### id

• `Optional` **id**: `string`

Contianer id에 대해서 지정합니다.

#### Defined in

[components/MapInfoWindow.tsx:9](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapInfoWindow.tsx#L9)

___

### position

• **position**: `Object`

인포윈도가 표시될 위치

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lat` | `number` |
| `lng` | `number` |

#### Defined in

[components/MapInfoWindow.tsx:24](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapInfoWindow.tsx#L24)

___

### removable

• `Optional` **removable**: `boolean`

삭제 가능한 인포윈도우

#### Defined in

[components/MapInfoWindow.tsx:36](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapInfoWindow.tsx#L36)

___

### style

• `Optional` **style**: `CSSProperties`

Contianer style에 대해서 지정합니다.

#### Defined in

[components/MapInfoWindow.tsx:19](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapInfoWindow.tsx#L19)

___

### zIndex

• `Optional` **zIndex**: `number`

인포윈도우 엘리먼트의 z-index 속성 값

#### Defined in

[components/MapInfoWindow.tsx:41](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapInfoWindow.tsx#L41)

## Methods

### onCreate

▸ `Optional` **onCreate**(`infoWindow`): `void`

인포윈도우 객체 생성후 해당 객체를 반환하는 함수

#### Parameters

| Name | Type |
| :------ | :------ |
| `infoWindow` | `InfoWindow` |

#### Returns

`void`

#### Defined in

[components/MapInfoWindow.tsx:46](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/MapInfoWindow.tsx#L46)
