---
id: "RoadviewInfoWindowProps"
title: "Interface: RoadviewInfoWindowProps"
sidebar_label: "RoadviewInfoWindowProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### altitude

• `Optional` **altitude**: `number`

로드뷰에 올라있는 인포윈도우의 높이 값(m 단위)

#### Defined in

[components/RoadviewInfoWindow.tsx:66](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/RoadviewInfoWindow.tsx#L66)

___

### className

• `Optional` **className**: `string`

Contianer className에 대해서 지정합니다.

#### Defined in

[components/RoadviewInfoWindow.tsx:14](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/RoadviewInfoWindow.tsx#L14)

___

### disableAutoPan

• `Optional` **disableAutoPan**: `boolean`

인포윈도우를 열 때 지도가 자동으로 패닝하지 않을지의 여부 (기본값: false)

#### Defined in

[components/RoadviewInfoWindow.tsx:51](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/RoadviewInfoWindow.tsx#L51)

___

### id

• `Optional` **id**: `string`

Contianer id에 대해서 지정합니다.

#### Defined in

[components/RoadviewInfoWindow.tsx:9](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/RoadviewInfoWindow.tsx#L9)

___

### position

• **position**: { `lat`: `number` ; `lng`: `number`  } \| { `pan`: `number` ; `panoId?`: `number` ; `tilt`: `number` ; `zoom?`: `number`  }

인포윈도가 표시될 위치

#### Defined in

[components/RoadviewInfoWindow.tsx:24](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/RoadviewInfoWindow.tsx#L24)

___

### range

• `Optional` **range**: `number`

로드뷰 상에서 인포윈도우의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 인포윈도우는 보이지 않게 된다

#### Defined in

[components/RoadviewInfoWindow.tsx:71](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/RoadviewInfoWindow.tsx#L71)

___

### removable

• `Optional` **removable**: `boolean`

삭제 가능한 인포윈도우

#### Defined in

[components/RoadviewInfoWindow.tsx:56](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/RoadviewInfoWindow.tsx#L56)

___

### style

• `Optional` **style**: `CSSProperties`

Contianer style에 대해서 지정합니다.

#### Defined in

[components/RoadviewInfoWindow.tsx:19](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/RoadviewInfoWindow.tsx#L19)

___

### zIndex

• `Optional` **zIndex**: `number`

인포윈도우 엘리먼트의 z-index 속성 값

#### Defined in

[components/RoadviewInfoWindow.tsx:61](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/RoadviewInfoWindow.tsx#L61)

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

[components/RoadviewInfoWindow.tsx:76](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/RoadviewInfoWindow.tsx#L76)
