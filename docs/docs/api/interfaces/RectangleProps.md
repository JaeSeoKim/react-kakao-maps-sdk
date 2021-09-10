---
id: "RectangleProps"
title: "Interface: RectangleProps"
sidebar_label: "RectangleProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### bounds

• **bounds**: `Object`

#### Type declaration

| Name | Type     |
| :--- | :------- |
| `ne` | `LatLng` |
| `sw` | `LatLng` |

#### Defined in

components/Rectangle.tsx:11

---

### fillColor

• `Optional` **fillColor**: `string`

#xxxxxx 형태의 채움 색 (기본값: ‘#F10000’)

#### Defined in

components/Rectangle.tsx:18

---

### fillOpacity

• `Optional` **fillOpacity**: `number`

채움 불투명도 (0-1) (기본값: 0)

#### Defined in

components/Rectangle.tsx:22

---

### strokeColor

• `Optional` **strokeColor**: `string`

#xxxxxx 형태의 선 색 (기본값: ‘#F10000’)

#### Defined in

components/Rectangle.tsx:30

---

### strokeOpacity

• `Optional` **strokeOpacity**: `number`

선 불투명도 (0-1) (기본값: 0.6)

#### Defined in

components/Rectangle.tsx:34

---

### strokeStyle

• `Optional` **strokeStyle**: `StrokeStyles`

선 스타일 (기본값: ‘solid’)

#### Defined in

components/Rectangle.tsx:38

---

### strokeWeight

• `Optional` **strokeWeight**: `number`

픽셀 단위의 선 두께 (기본값: 3)

#### Defined in

components/Rectangle.tsx:26

---

### zIndex

• `Optional` **zIndex**: `number`

선의 z-index 속성 값

#### Defined in

components/Rectangle.tsx:42

## Methods

### onClick

▸ `Optional` **onClick**(`target`, `mouseEvent`): `void`

클릭하면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Rectangle`  |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

components/Rectangle.tsx:75

---

### onCreate

▸ `Optional` **onCreate**(`target`): `void`

객체 생성시 호출 됩니다.

#### Parameters

| Name     | Type        |
| :------- | :---------- |
| `target` | `Rectangle` |

#### Returns

`void`

#### Defined in

components/Rectangle.tsx:82

---

### onMousedown

▸ `Optional` **onMousedown**(`target`, `mouseEvent`): `void`

마우스 버튼을 누르면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Rectangle`  |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

components/Rectangle.tsx:68

---

### onMousemove

▸ `Optional` **onMousemove**(`target`, `mouseEvent`): `void`

마우스를 움직이면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Rectangle`  |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

components/Rectangle.tsx:61

---

### onMouseout

▸ `Optional` **onMouseout**(`target`, `mouseEvent`): `void`

마우스 커서가 벗어나면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Rectangle`  |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

components/Rectangle.tsx:54

---

### onMouseover

▸ `Optional` **onMouseover**(`target`, `mouseEvent`): `void`

마우스 커서를 올리면 발생한다.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `target`     | `Rectangle`  |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

components/Rectangle.tsx:47
