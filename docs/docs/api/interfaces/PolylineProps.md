---
id: "PolylineProps"
title: "Interface: PolylineProps"
sidebar_label: "PolylineProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### endArrow

• `Optional` **endArrow**: `boolean`

화살표 여부

#### Defined in

[components/Polyline.tsx:15](https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/fb6f0aa/src/components/Polyline.tsx#L15)

___

### path

• **path**: `LatLng`[] \| `LatLng`[][]

#### Defined in

[components/Polyline.tsx:11](https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/fb6f0aa/src/components/Polyline.tsx#L11)

___

### strokeColor

• `Optional` **strokeColor**: `string`

#xxxxxx 형태의 선 색 (기본값: ‘#F10000’)

#### Defined in

[components/Polyline.tsx:23](https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/fb6f0aa/src/components/Polyline.tsx#L23)

___

### strokeOpacity

• `Optional` **strokeOpacity**: `number`

선 불투명도 (0-1) (기본값: 0.6)

#### Defined in

[components/Polyline.tsx:27](https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/fb6f0aa/src/components/Polyline.tsx#L27)

___

### strokeStyle

• `Optional` **strokeStyle**: `StrokeStyles`

선 스타일 (기본값: ‘solid’)

#### Defined in

[components/Polyline.tsx:31](https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/fb6f0aa/src/components/Polyline.tsx#L31)

___

### strokeWeight

• `Optional` **strokeWeight**: `number`

픽셀 단위의 선 두께 (기본값: 3)

#### Defined in

[components/Polyline.tsx:19](https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/fb6f0aa/src/components/Polyline.tsx#L19)

___

### zIndex

• `Optional` **zIndex**: `number`

선의 z-index 속성 값

#### Defined in

[components/Polyline.tsx:35](https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/fb6f0aa/src/components/Polyline.tsx#L35)

## Methods

### onClick

▸ `Optional` **onClick**(`target`, `mouseEvent`): `void`

클릭하면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Polyline` |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Polyline.tsx:68](https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/fb6f0aa/src/components/Polyline.tsx#L68)

___

### onCreate

▸ `Optional` **onCreate**(`target`): `void`

객체 생성시 호출 됩니다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Polyline` |

#### Returns

`void`

#### Defined in

[components/Polyline.tsx:75](https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/fb6f0aa/src/components/Polyline.tsx#L75)

___

### onMousedown

▸ `Optional` **onMousedown**(`target`, `mouseEvent`): `void`

마우스 버튼을 누르면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Polyline` |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Polyline.tsx:61](https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/fb6f0aa/src/components/Polyline.tsx#L61)

___

### onMousemove

▸ `Optional` **onMousemove**(`target`, `mouseEvent`): `void`

마우스를 움직이면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Polyline` |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Polyline.tsx:54](https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/fb6f0aa/src/components/Polyline.tsx#L54)

___

### onMouseout

▸ `Optional` **onMouseout**(`target`, `mouseEvent`): `void`

마우스 커서가 벗어나면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Polyline` |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Polyline.tsx:47](https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/fb6f0aa/src/components/Polyline.tsx#L47)

___

### onMouseover

▸ `Optional` **onMouseover**(`target`, `mouseEvent`): `void`

마우스 커서를 올리면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Polyline` |
| `mouseEvent` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[components/Polyline.tsx:40](https://github.com/JaeSeoKim/react-kakao-maps-sdk/blob/fb6f0aa/src/components/Polyline.tsx#L40)
