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

containerElem가 들어온다면 무시 됩니다.

#### Defined in

[components/Roadview.tsx:23](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/Roadview.tsx#L23)

___

### containerElem

• `Optional` **containerElem**: ``null`` \| `HTMLElement`

roadviewContainer Elem를 사용자 정의 합니다.

#### Defined in

[components/Roadview.tsx:35](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/Roadview.tsx#L35)

___

### id

• `Optional` **id**: `string`

roadviewContinaer의 id에 대해서 지정합니다.

containerElem가 들어온다면 무시 됩니다.

**`default`** "kakao-roadview-container"

#### Defined in

[components/Roadview.tsx:16](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/Roadview.tsx#L16)

___

### pan

• `Optional` **pan**: `number`

로드뷰 처음 실행시에 바라봐야 할 수평 각. 0이 정북방향. (0_360)

#### Defined in

[components/Roadview.tsx:66](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/Roadview.tsx#L66)

___

### panoId

• `Optional` **panoId**: `number`

로드뷰 시작 지역의 고유 아이디 값.

#### Defined in

[components/Roadview.tsx:51](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/Roadview.tsx#L51)

___

### panoX

• `Optional` **panoX**: `number`

panoId가 유효하지 않을 경우 지도좌표를 기반으로 데이터를 요청할 수평 좌표값.

#### Defined in

[components/Roadview.tsx:56](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/Roadview.tsx#L56)

___

### panoY

• `Optional` **panoY**: `number`

panoId가 유효하지 않을 경우 지도좌표를 기반으로 데이터를 요청할 수직 좌표값.

#### Defined in

[components/Roadview.tsx:61](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/Roadview.tsx#L61)

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

[components/Roadview.tsx:42](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/Roadview.tsx#L42)

___

### style

• `Optional` **style**: `CSSProperties`

roadviewContainer의 style에 대해서 지정합니다.

containerElem가 들어온다면 무시 됩니다.

#### Defined in

[components/Roadview.tsx:30](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/Roadview.tsx#L30)

___

### tilt

• `Optional` **tilt**: `number`

로드뷰 처음 실행시에 바라봐야 할 수직 각.(-90_90)

#### Defined in

[components/Roadview.tsx:71](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/Roadview.tsx#L71)

___

### zoom

• `Optional` **zoom**: `number`

로드뷰 줌 초기값.(-3_3)

#### Defined in

[components/Roadview.tsx:76](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/Roadview.tsx#L76)

## Methods

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

[components/Roadview.tsx:86](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/Roadview.tsx#L86)

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

[components/Roadview.tsx:91](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/Roadview.tsx#L91)

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

[components/Roadview.tsx:101](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/Roadview.tsx#L101)

___

### onRoadviewCreated

▸ `Optional` **onRoadviewCreated**(`roadview`): `void`

로드뷰 생성후 해당 객체를 전달하는 callback.

#### Parameters

| Name | Type |
| :------ | :------ |
| `roadview` | `Roadview` |

#### Returns

`void`

#### Defined in

[components/Roadview.tsx:81](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/Roadview.tsx#L81)

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

[components/Roadview.tsx:96](https://github.com/JaeSeoKim/react-kakao-maps/blob/2388133/src/components/Roadview.tsx#L96)
