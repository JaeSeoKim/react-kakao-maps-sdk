---
id: "CustomOverlayRoadviewProps"
title: "Interface: CustomOverlayRoadviewProps"
sidebar_label: "CustomOverlayRoadviewProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### altitude

• `Optional` **altitude**: `number`

로드뷰상에서 커스텀 오버레이의 높이(위치)를 지정한다.
단위는 m(미터)이며 현재 로드뷰의 바닥 높이를 기준으로 떨어져있는 높이를 말한다.

#### Defined in

[components/CustomOverlayRoadview.tsx:76](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/CustomOverlayRoadview.tsx#L76)

___

### className

• `Optional` **className**: `string`

CustomOverlay의 Contianer className에 대해서 지정합니다.

#### Defined in

[components/CustomOverlayRoadview.tsx:14](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/CustomOverlayRoadview.tsx#L14)

___

### clickable

• `Optional` **clickable**: `boolean`

true 로 설정하면 컨텐츠 영역을 클릭했을 경우 지도 이벤트를 막아준다.

#### Defined in

[components/CustomOverlayRoadview.tsx:55](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/CustomOverlayRoadview.tsx#L55)

___

### id

• `Optional` **id**: `string`

CustomOverlay의 Contianer id에 대해서 지정합니다.

#### Defined in

[components/CustomOverlayRoadview.tsx:9](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/CustomOverlayRoadview.tsx#L9)

___

### isFocus

• `Optional` **isFocus**: `boolean`

해당 객체 생성 후 Roadview의 시점을 전환하여 Focus 할 지에 대해서 정의 합니다.

#### Defined in

[components/CustomOverlayRoadview.tsx:50](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/CustomOverlayRoadview.tsx#L50)

___

### position

• **position**: { `lat`: `number` ; `lng`: `number`  } \| { `pan`: `number` ; `panoId?`: `number` ; `tilt`: `number` ; `zoom?`: `number`  }

커스텀 오버레이의 좌표

#### Defined in

[components/CustomOverlayRoadview.tsx:24](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/CustomOverlayRoadview.tsx#L24)

___

### range

• `Optional` **range**: `number`

커스텀 오버레이의 가시반경을 설정한다.
로드뷰의 위치와 커스텀 오버레이의 위치 사이의 거리가 가시반경 이내일 경우에만 로드뷰상에 노출된다.
단위는 m(미터)이며 기본값은 500m이다.

#### Defined in

[components/CustomOverlayRoadview.tsx:83](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/CustomOverlayRoadview.tsx#L83)

___

### style

• `Optional` **style**: `CSSStyleDeclaration`

CustomOverlay의 Contianer style에 대해서 지정합니다.

#### Defined in

[components/CustomOverlayRoadview.tsx:19](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/CustomOverlayRoadview.tsx#L19)

___

### xAnchor

• `Optional` **xAnchor**: `number`

컨텐츠의 x축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5

#### Defined in

[components/CustomOverlayRoadview.tsx:60](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/CustomOverlayRoadview.tsx#L60)

___

### yAnchor

• `Optional` **yAnchor**: `number`

컨텐츠의 y축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5

#### Defined in

[components/CustomOverlayRoadview.tsx:65](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/CustomOverlayRoadview.tsx#L65)

___

### zIndex

• `Optional` **zIndex**: `number`

커스텀 오버레이의 z-index

#### Defined in

[components/CustomOverlayRoadview.tsx:70](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/CustomOverlayRoadview.tsx#L70)

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

[components/CustomOverlayRoadview.tsx:88](https://github.com/JaeSeoKim/react-kakao-maps/blob/562aa12/src/components/CustomOverlayRoadview.tsx#L88)
