---
id: "CircleProps"
title: "Interface: CircleProps"
sidebar_label: "CircleProps"
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

components/Circle.tsx:9

---

### fillColor

• `Optional` **fillColor**: `string`

#xxxxxx 형태의 채움 색 (기본값: ‘#F10000’)

#### Defined in

components/Circle.tsx:21

---

### fillOpacity

• `Optional` **fillOpacity**: `number`

채움 불투명도 (0-1) (기본값: 0)

#### Defined in

components/Circle.tsx:25

---

### radius

• **radius**: `number`

원의 반지름 크기를 지정합니다 (미터 단위).

#### Defined in

components/Circle.tsx:16

---

### strokeColor

• `Optional` **strokeColor**: `string`

#xxxxxx 형태의 선 색 (기본값: ‘#F10000’)

#### Defined in

components/Circle.tsx:33

---

### strokeOpacity

• `Optional` **strokeOpacity**: `number`

선 불투명도 (0-1) (기본값: 0.6)

#### Defined in

components/Circle.tsx:37

---

### strokeStyle

• `Optional` **strokeStyle**: `StrokeStyles`

선 스타일 (기본값: ‘solid’)

#### Defined in

components/Circle.tsx:41

---

### strokeWeight

• `Optional` **strokeWeight**: `number`

픽셀 단위의 선 두께 (기본값: 3)

#### Defined in

components/Circle.tsx:29

---

### zIndex

• `Optional` **zIndex**: `number`

원의 z-index 속성 값

#### Defined in

components/Circle.tsx:45

## Methods

### onClick

▸ `Optional` **onClick**(`target`, `mouseEvent`): `void`

원을 클릭하면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Circle`     |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

components/Circle.tsx:78

---

### onCreate

▸ `Optional` **onCreate**(`target`): `void`

객체 생성시 호출 됩니다.

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `target` | `Circle` |

#### Returns

`void`

#### Defined in

components/Circle.tsx:86

---

### onMousedown

▸ `Optional` **onMousedown**(`target`, `mouseEvent`): `void`

원에서 마우스 버튼을 누르면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Circle`     |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

components/Circle.tsx:71

---

### onMousemove

▸ `Optional` **onMousemove**(`target`, `mouseEvent`): `void`

원에서 마우스를 움직이면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Circle`     |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

components/Circle.tsx:64

---

### onMouseout

▸ `Optional` **onMouseout**(`target`, `mouseEvent`): `void`

마우스 커서가 원에서 벗어나면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Circle`     |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

components/Circle.tsx:57

---

### onMouseover

▸ `Optional` **onMouseover**(`target`, `mouseEvent`): `void`

원에 마우스 커서를 올리면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Circle`     |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

components/Circle.tsx:50
