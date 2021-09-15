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

| Name | Type |
| :------ | :------ |
| `ne` | `LatLng` |
| `sw` | `LatLng` |

#### Defined in

[components/Rectangle.tsx:11](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Rectangle.tsx#L11)

___

### fillColor

• `Optional` **fillColor**: `string`

#xxxxxx 형태의 채움 색 (기본값: ‘#F10000’)

#### Defined in

[components/Rectangle.tsx:18](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Rectangle.tsx#L18)

___

### fillOpacity

• `Optional` **fillOpacity**: `number`

채움 불투명도 (0-1) (기본값: 0)

#### Defined in

[components/Rectangle.tsx:22](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Rectangle.tsx#L22)

___

### strokeColor

• `Optional` **strokeColor**: `string`

#xxxxxx 형태의 선 색 (기본값: ‘#F10000’)

#### Defined in

[components/Rectangle.tsx:30](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Rectangle.tsx#L30)

___

### strokeOpacity

• `Optional` **strokeOpacity**: `number`

선 불투명도 (0-1) (기본값: 0.6)

#### Defined in

[components/Rectangle.tsx:34](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Rectangle.tsx#L34)

___

### strokeStyle

• `Optional` **strokeStyle**: `StrokeStyles`

선 스타일 (기본값: ‘solid’)

#### Defined in

[components/Rectangle.tsx:38](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Rectangle.tsx#L38)

___

### strokeWeight

• `Optional` **strokeWeight**: `number`

픽셀 단위의 선 두께 (기본값: 3)

#### Defined in

[components/Rectangle.tsx:26](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Rectangle.tsx#L26)

___

### zIndex

• `Optional` **zIndex**: `number`

선의 z-index 속성 값

#### Defined in

[components/Rectangle.tsx:42](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Rectangle.tsx#L42)

## Methods

### onClick

▸ `Optional` **onClick**(`target`, `mouseEvent`): `void`

클릭하면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Rectangle` |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Rectangle.tsx:75](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Rectangle.tsx#L75)

___

### onCreate

▸ `Optional` **onCreate**(`target`): `void`

객체 생성시 호출 됩니다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Rectangle` |

#### Returns

`void`

#### Defined in

[components/Rectangle.tsx:82](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Rectangle.tsx#L82)

___

### onMousedown

▸ `Optional` **onMousedown**(`target`, `mouseEvent`): `void`

마우스 버튼을 누르면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Rectangle` |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Rectangle.tsx:68](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Rectangle.tsx#L68)

___

### onMousemove

▸ `Optional` **onMousemove**(`target`, `mouseEvent`): `void`

마우스를 움직이면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Rectangle` |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Rectangle.tsx:61](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Rectangle.tsx#L61)

___

### onMouseout

▸ `Optional` **onMouseout**(`target`, `mouseEvent`): `void`

마우스 커서가 벗어나면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Rectangle` |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Rectangle.tsx:54](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Rectangle.tsx#L54)

___

### onMouseover

▸ `Optional` **onMouseover**(`target`, `mouseEvent`): `void`

마우스 커서를 올리면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Rectangle` |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Rectangle.tsx:47](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/Rectangle.tsx#L47)
