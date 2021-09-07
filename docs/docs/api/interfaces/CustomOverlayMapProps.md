---
id: "CustomOverlayMapProps"
title: "Interface: CustomOverlayMapProps"
sidebar_label: "CustomOverlayMapProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### clickable

• `Optional` **clickable**: `boolean`

true 로 설정하면 컨텐츠 영역을 클릭했을 경우 지도 이벤트를 막아준다.

#### Defined in

[components/CustomOverlayMap.tsx:16](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/CustomOverlayMap.tsx#L16)

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

[components/CustomOverlayMap.tsx:9](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/CustomOverlayMap.tsx#L9)

___

### xAnchor

• `Optional` **xAnchor**: `number`

컨텐츠의 x축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5

#### Defined in

[components/CustomOverlayMap.tsx:21](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/CustomOverlayMap.tsx#L21)

___

### yAnchor

• `Optional` **yAnchor**: `number`

컨텐츠의 y축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5

#### Defined in

[components/CustomOverlayMap.tsx:26](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/CustomOverlayMap.tsx#L26)

___

### zIndex

• `Optional` **zIndex**: `number`

커스텀 오버레이의 z-index

#### Defined in

[components/CustomOverlayMap.tsx:31](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/CustomOverlayMap.tsx#L31)

## Methods

### onCustomOverlayCreated

▸ `Optional` **onCustomOverlayCreated**(`customOverlay`): `void`

커스텀 오버레이를 생성 후 해당 객체를 가지고 callback 함수를 실행 시켜줌

#### Parameters

| Name | Type |
| :------ | :------ |
| `customOverlay` | `CustomOverlay` |

#### Returns

`void`

#### Defined in

[components/CustomOverlayMap.tsx:36](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/CustomOverlayMap.tsx#L36)
