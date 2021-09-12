---
id: "EllipseProps"
title: "Interface: EllipseProps"
sidebar_label: "EllipseProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### center

• **center**: `Object`

중심 좌표를 지정합니다.

#### Type declaration

| Name  | Type     |
| :---- | :------- |
| `lat` | `number` |
| `lng` | `number` |

#### Defined in

[components/Ellipse.tsx:9](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Ellipse.tsx#L9)

---

### fillColor

• `Optional` **fillColor**: `string`

#xxxxxx 형태의 채움 색 (기본값: ‘#F10000’)

#### Defined in

[components/Ellipse.tsx:26](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Ellipse.tsx#L26)

---

### fillOpacity

• `Optional` **fillOpacity**: `number`

채움 불투명도 (0-1) (기본값: 0)

#### Defined in

[components/Ellipse.tsx:31](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Ellipse.tsx#L31)

---

### rx

• **rx**: `number`

미터 단위의 x축 반지름

#### Defined in

[components/Ellipse.tsx:16](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Ellipse.tsx#L16)

---

### ry

• **ry**: `number`

미터 단위의 y축 반지름

#### Defined in

[components/Ellipse.tsx:21](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Ellipse.tsx#L21)

---

### strokeColor

• `Optional` **strokeColor**: `string`

#xxxxxx 형태의 선 색 (기본값: ‘#F10000’)

#### Defined in

[components/Ellipse.tsx:41](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Ellipse.tsx#L41)

---

### strokeOpacity

• `Optional` **strokeOpacity**: `number`

선 불투명도 (0-1) (기본값: 0.6)

#### Defined in

[components/Ellipse.tsx:46](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Ellipse.tsx#L46)

---

### strokeStyle

• `Optional` **strokeStyle**: `StrokeStyles`

선 스타일 (기본값: ‘solid’)

#### Defined in

[components/Ellipse.tsx:51](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Ellipse.tsx#L51)

---

### strokeWeight

• `Optional` **strokeWeight**: `number`

픽셀 단위의 선 두께 (기본값: 3)

#### Defined in

[components/Ellipse.tsx:36](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Ellipse.tsx#L36)

---

### zIndex

• `Optional` **zIndex**: `number`

타원의 z-index 속성 값

#### Defined in

[components/Ellipse.tsx:56](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Ellipse.tsx#L56)

## Methods

### onClick

▸ `Optional` **onClick**(`target`, `mouseEvent`): `void`

타원을 클릭하면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Ellipse`    |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Ellipse.tsx:89](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Ellipse.tsx#L89)

---

### onCreate

▸ `Optional` **onCreate**(`target`): `void`

객체 생성시 호출 됩니다.

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `target` | `Ellipse` |

#### Returns

`void`

#### Defined in

[components/Ellipse.tsx:97](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Ellipse.tsx#L97)

---

### onMousedown

▸ `Optional` **onMousedown**(`target`, `mouseEvent`): `void`

타원에서 마우스 버튼을 누르면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Ellipse`    |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Ellipse.tsx:82](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Ellipse.tsx#L82)

---

### onMousemove

▸ `Optional` **onMousemove**(`target`, `mouseEvent`): `void`

타원에서 마우스를 움직이면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Ellipse`    |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Ellipse.tsx:75](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Ellipse.tsx#L75)

---

### onMouseout

▸ `Optional` **onMouseout**(`target`, `mouseEvent`): `void`

마우스 커서가 타원에서 벗어나면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Ellipse`    |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Ellipse.tsx:68](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Ellipse.tsx#L68)

---

### onMouseover

▸ `Optional` **onMouseover**(`target`, `mouseEvent`): `void`

타원에 마우스 커서를 올리면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Ellipse`    |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Ellipse.tsx:61](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/Ellipse.tsx#L61)
