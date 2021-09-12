---
id: "MapInfoWindowProps"
title: "Interface: MapInfoWindowProps"
sidebar_label: "MapInfoWindowProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### altitude

• `Optional` **altitude**: `number`

로드뷰에 올라있는 인포윈도우의 높이 값(m 단위)

#### Defined in

[components/MapInfoWindow.tsx:31](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MapInfoWindow.tsx#L31)

---

### disableAutoPan

• `Optional` **disableAutoPan**: `boolean`

인포윈도우를 열 때 지도가 자동으로 패닝하지 않을지의 여부 (기본값: false)

#### Defined in

[components/MapInfoWindow.tsx:16](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MapInfoWindow.tsx#L16)

---

### position

• **position**: `Object`

인포윈도가 표시될 위치

#### Type declaration

| Name  | Type     |
| :---- | :------- |
| `lat` | `number` |
| `lng` | `number` |

#### Defined in

[components/MapInfoWindow.tsx:9](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MapInfoWindow.tsx#L9)

---

### range

• `Optional` **range**: `number`

로드뷰 상에서 인포윈도우의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 인포윈도우는 보이지 않게 된다

#### Defined in

[components/MapInfoWindow.tsx:36](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MapInfoWindow.tsx#L36)

---

### removable

• `Optional` **removable**: `boolean`

삭제 가능한 인포윈도우

#### Defined in

[components/MapInfoWindow.tsx:21](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MapInfoWindow.tsx#L21)

---

### zIndex

• `Optional` **zIndex**: `number`

인포윈도우 엘리먼트의 z-index 속성 값

#### Defined in

[components/MapInfoWindow.tsx:26](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MapInfoWindow.tsx#L26)

## Methods

### onCreate

▸ `Optional` **onCreate**(`infoWindow`): `void`

인포윈도우 객체 생성후 해당 객체를 반환하는 함수

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `infoWindow` | `InfoWindow` |

#### Returns

`void`

#### Defined in

[components/MapInfoWindow.tsx:41](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MapInfoWindow.tsx#L41)
