---
id: "RoadviewProps"
title: "Interface: RoadviewProps"
sidebar_label: "RoadviewProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### className

• `Optional` **className**: `string`

roadviewContainer의 className에 대해서 지정합니다.

#### Defined in

[components/Roadview.tsx:19](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/Roadview.tsx#L19)

___

### id

• `Optional` **id**: `string`

roadviewContinaer의 id에 대해서 지정합니다.

**`default`** "kakao-roadview-container"

#### Defined in

[components/Roadview.tsx:14](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/Roadview.tsx#L14)

___

### pan

• `Optional` **pan**: `number`

로드뷰 처음 실행시에 바라봐야 할 수평 각. 0이 정북방향. (0_360)

#### Defined in

[components/Roadview.tsx:55](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/Roadview.tsx#L55)

___

### panoId

• `Optional` **panoId**: `number`

로드뷰 시작 지역의 고유 아이디 값.

#### Defined in

[components/Roadview.tsx:40](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/Roadview.tsx#L40)

___

### panoX

• `Optional` **panoX**: `number`

panoId가 유효하지 않을 경우 지도좌표를 기반으로 데이터를 요청할 수평 좌표값.

#### Defined in

[components/Roadview.tsx:45](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/Roadview.tsx#L45)

___

### panoY

• `Optional` **panoY**: `number`

panoId가 유효하지 않을 경우 지도좌표를 기반으로 데이터를 요청할 수직 좌표값.

#### Defined in

[components/Roadview.tsx:50](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/Roadview.tsx#L50)

___

### position

• **position**: `Object`

중심으로 설정할 위치 입니다.
해당 lat와 lng에 해당하는 radius범위 안에서 가장가까운 Roadview을 선택합니다.
만약 없다면 lat, lng로 설정 됩니다.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lat` | `number` |
| `lng` | `number` |
| `radius` | `number` |

#### Defined in

[components/Roadview.tsx:31](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/Roadview.tsx#L31)

___

### style

• `Optional` **style**: `CSSProperties`

roadviewContainer의 style에 대해서 지정합니다.

#### Defined in

[components/Roadview.tsx:24](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/Roadview.tsx#L24)

___

### tilt

• `Optional` **tilt**: `number`

로드뷰 처음 실행시에 바라봐야 할 수직 각.(-90_90)

#### Defined in

[components/Roadview.tsx:60](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/Roadview.tsx#L60)

___

### zoom

• `Optional` **zoom**: `number`

로드뷰 줌 초기값.(-3_3)

#### Defined in

[components/Roadview.tsx:65](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/Roadview.tsx#L65)

## Methods

### onCreate

▸ `Optional` **onCreate**(`roadview`): `void`

로드뷰 생성후 해당 객체를 전달하는 callback.

#### Parameters

| Name | Type |
| :------ | :------ |
| `roadview` | `Roadview` |

#### Returns

`void`

#### Defined in

[components/Roadview.tsx:70](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/Roadview.tsx#L70)

___

### onInit

▸ `Optional` **onInit**(`target`): `void`

로드뷰가 초기화를 끝내면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Roadview` |

#### Returns

`void`

#### Defined in

[components/Roadview.tsx:75](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/Roadview.tsx#L75)

___

### onPanoidChange

▸ `Optional` **onPanoidChange**(`target`): `void`

파노라마 ID가 바뀌면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Roadview` |

#### Returns

`void`

#### Defined in

[components/Roadview.tsx:80](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/Roadview.tsx#L80)

___

### onPositionChanged

▸ `Optional` **onPositionChanged**(`target`): `void`

지도 좌표가 바뀌면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Roadview` |

#### Returns

`void`

#### Defined in

[components/Roadview.tsx:90](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/Roadview.tsx#L90)

___

### onViewpointChange

▸ `Optional` **onViewpointChange**(`target`): `void`

시점이 바뀌면 발생한다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Roadview` |

#### Returns

`void`

#### Defined in

[components/Roadview.tsx:85](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/Roadview.tsx#L85)
