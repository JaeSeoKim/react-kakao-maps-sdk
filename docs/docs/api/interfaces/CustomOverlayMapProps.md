---
id: "CustomOverlayMapProps"
title: "Interface: CustomOverlayMapProps"
sidebar_label: "CustomOverlayMapProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### className

• `Optional` **className**: `string`

CustomOverlay의 Contianer className에 대해서 지정합니다.

#### Defined in

[components/CustomOverlayMap.tsx:14](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/CustomOverlayMap.tsx#L14)

___

### clickable

• `Optional` **clickable**: `boolean`

true 로 설정하면 컨텐츠 영역을 클릭했을 경우 지도 이벤트를 막아준다.

#### Defined in

[components/CustomOverlayMap.tsx:31](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/CustomOverlayMap.tsx#L31)

___

### id

• `Optional` **id**: `string`

CustomOverlay의 Contianer id에 대해서 지정합니다.

#### Defined in

[components/CustomOverlayMap.tsx:9](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/CustomOverlayMap.tsx#L9)

___

### position

• **position**: `Object`

커스텀 오버레이의 좌표

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lat` | `number` |
| `lng` | `number` |

#### Defined in

[components/CustomOverlayMap.tsx:24](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/CustomOverlayMap.tsx#L24)

___

### style

• `Optional` **style**: `CSSProperties`

CustomOverlay의 Contianer style에 대해서 지정합니다.

#### Defined in

[components/CustomOverlayMap.tsx:19](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/CustomOverlayMap.tsx#L19)

___

### xAnchor

• `Optional` **xAnchor**: `number`

컨텐츠의 x축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5

#### Defined in

[components/CustomOverlayMap.tsx:36](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/CustomOverlayMap.tsx#L36)

___

### yAnchor

• `Optional` **yAnchor**: `number`

컨텐츠의 y축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5

#### Defined in

[components/CustomOverlayMap.tsx:41](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/CustomOverlayMap.tsx#L41)

___

### zIndex

• `Optional` **zIndex**: `number`

커스텀 오버레이의 z-index

#### Defined in

[components/CustomOverlayMap.tsx:46](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/CustomOverlayMap.tsx#L46)

## Methods

### onCreate

▸ `Optional` **onCreate**(`customOverlay`): `void`

커스텀 오버레이를 생성 후 해당 객체를 가지고 callback 함수를 실행 시켜줌

#### Parameters

| Name | Type |
| :------ | :------ |
| `customOverlay` | `CustomOverlay` |

#### Returns

`void`

#### Defined in

[components/CustomOverlayMap.tsx:51](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/CustomOverlayMap.tsx#L51)
