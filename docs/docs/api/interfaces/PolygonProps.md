---
id: "PolygonProps"
title: "Interface: PolygonProps"
sidebar_label: "PolygonProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### fillColor

• `Optional` **fillColor**: `string`

#xxxxxx 형태의 채움 색 (기본값: ‘#F10000’)

#### Defined in

[components/Polygon.tsx:15](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Polygon.tsx#L15)

---

### fillOpacity

• `Optional` **fillOpacity**: `number`

채움 불투명도 (0-1) (기본값: 0)

#### Defined in

[components/Polygon.tsx:19](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Polygon.tsx#L19)

---

### path

• **path**: `LatLng`[] \| `LatLng`[][]

#### Defined in

[components/Polygon.tsx:11](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Polygon.tsx#L11)

---

### strokeColor

• `Optional` **strokeColor**: `string`

#xxxxxx 형태의 선 색 (기본값: ‘#F10000’)

#### Defined in

[components/Polygon.tsx:27](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Polygon.tsx#L27)

---

### strokeOpacity

• `Optional` **strokeOpacity**: `number`

선 불투명도 (0-1) (기본값: 0.6)

#### Defined in

[components/Polygon.tsx:31](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Polygon.tsx#L31)

---

### strokeStyle

• `Optional` **strokeStyle**: `StrokeStyles`

선 스타일 (기본값: ‘solid’)

#### Defined in

[components/Polygon.tsx:35](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Polygon.tsx#L35)

---

### strokeWeight

• `Optional` **strokeWeight**: `number`

픽셀 단위의 선 두께 (기본값: 3)

#### Defined in

[components/Polygon.tsx:23](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Polygon.tsx#L23)

---

### zIndex

• `Optional` **zIndex**: `number`

선의 z-index 속성 값

#### Defined in

[components/Polygon.tsx:39](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Polygon.tsx#L39)

## Methods

### onClick

▸ `Optional` **onClick**(`target`, `mouseEvent`): `void`

클릭하면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Polygon`    |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Polygon.tsx:72](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Polygon.tsx#L72)

---

### onCreate

▸ `Optional` **onCreate**(`target`): `void`

객체 생성시 호출 됩니다.

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `target` | `Polygon` |

#### Returns

`void`

#### Defined in

[components/Polygon.tsx:79](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Polygon.tsx#L79)

---

### onMousedown

▸ `Optional` **onMousedown**(`target`, `mouseEvent`): `void`

마우스 버튼을 누르면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Polygon`    |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Polygon.tsx:65](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Polygon.tsx#L65)

---

### onMousemove

▸ `Optional` **onMousemove**(`target`, `mouseEvent`): `void`

마우스를 움직이면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Polygon`    |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Polygon.tsx:58](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Polygon.tsx#L58)

---

### onMouseout

▸ `Optional` **onMouseout**(`target`, `mouseEvent`): `void`

마우스 커서가 벗어나면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Polygon`    |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Polygon.tsx:51](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Polygon.tsx#L51)

---

### onMouseover

▸ `Optional` **onMouseover**(`target`, `mouseEvent`): `void`

마우스 커서를 올리면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Polygon`    |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Polygon.tsx:44](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Polygon.tsx#L44)
