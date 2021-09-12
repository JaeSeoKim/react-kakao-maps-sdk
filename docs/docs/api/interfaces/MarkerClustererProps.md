---
id: "MarkerClustererProps"
title: "Interface: MarkerClustererProps"
sidebar_label: "MarkerClustererProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### averageCenter

• `Optional` **averageCenter**: `boolean`

마커들의 좌표 평균을 클러스터 좌표 설정 여부

**`default`** false

#### Defined in

[components/MarkerClusterer.tsx:20](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MarkerClusterer.tsx#L20)

---

### calculator

• `Optional` **calculator**: `number`[] \| (`size`: `number`) => `number`[]

클러스터 크기를 구분하는 값을 가진 배열 또는 구분값 생성함수

**`default`** [10, 100, 1000, 10000]

#### Defined in

[components/MarkerClusterer.tsx:44](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MarkerClusterer.tsx#L44)

---

### clickable

• `Optional` **clickable**: `boolean`

클러스터 클릭 가능 여부 지정 옵션. false일 경우 클러스터의 clusterclick, clusterdblclick, clusterrightclick 이벤트가 발생하지 않으며, 커서가 변경되지 않는다.

**`default`** true

#### Defined in

[components/MarkerClusterer.tsx:54](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MarkerClusterer.tsx#L54)

---

### disableClickZoom

• `Optional` **disableClickZoom**: `boolean`

클러스터 클릭 시 지도 확대 여부. true로 설정하면 클러스터 클릭 시 확대 되지 않는다

**`default`** false

#### Defined in

[components/MarkerClusterer.tsx:49](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MarkerClusterer.tsx#L49)

---

### gridSize

• `Optional` **gridSize**: `number`

클러스터의 격자 크기. 화면 픽셀 단위이며 해당 격자 영역 안에 마커가 포함되면 클러스터에 포함시킨다

**`default`** 60

#### Defined in

[components/MarkerClusterer.tsx:15](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MarkerClusterer.tsx#L15)

---

### hoverable

• `Optional` **hoverable**: `boolean`

클러스터에 마우스 over/out 가능 여부 지정 옵션. false일 경우 클러스터의 clusterover, clusterout 이벤트가 발생하지 않는다.

**`default`** true

#### Defined in

[components/MarkerClusterer.tsx:59](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MarkerClusterer.tsx#L59)

---

### minClusterSize

• `Optional` **minClusterSize**: `number`

클러스터링 할 최소 마커 수

**`default`** 2

#### Defined in

[components/MarkerClusterer.tsx:30](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MarkerClusterer.tsx#L30)

---

### minLevel

• `Optional` **minLevel**: `number`

클러스터링 할 지도의 최소 레벨 값. 지정한 숫자에 해당하는 레벨 미만에서는 클러스터링 하지 않는다

**`default`** 0

#### Defined in

[components/MarkerClusterer.tsx:25](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MarkerClusterer.tsx#L25)

---

### styles

• `Optional` **styles**: `CSSStyleDeclaration`[] \| `object`[]

클러스터의 스타일. 여러개를 선언하면 calculator 로 구분된 사이즈 구간마다 서로 다른 스타일을 적용시킬 수 있다

#### Defined in

[components/MarkerClusterer.tsx:34](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MarkerClusterer.tsx#L34)

---

### texts

• `Optional` **texts**: `string`[] \| (`size`: `number`) => `string`

클러스터에 표시할 문자열 또는 문자열 생성 함수.

**`default`** "클러스터에 포함된 숫자"

#### Defined in

[components/MarkerClusterer.tsx:39](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MarkerClusterer.tsx#L39)

## Methods

### onClusterclick

▸ `Optional` **onClusterclick**(`target`, `cluster`): `void`

클러스터 마커를 클릭 했을 때 발생한다.
이벤트 핸들러 함수 인자로는 Cluster 객체가 넘어온다.
클러스터 마커 클릭 시 지도가 줌인 되는 경우 원하는 Cluster 객체를 얻지 못할 수도 있다.
때문에 MarkerClusterer 를 생성할 때 disableClickZoom 옵션을 true로 설정하여
클러스터 마커를 클릭했을 때 지도가 줌인되지 않도록 설정 후 사용한다.

#### Parameters

| Name      | Type              |
| :-------- | :---------------- |
| `target`  | `MarkerClusterer` |
| `cluster` | `Cluster`         |

#### Returns

`void`

#### Defined in

[components/MarkerClusterer.tsx:68](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MarkerClusterer.tsx#L68)

---

### onClusterdblclick

▸ `Optional` **onClusterdblclick**(`target`, `cluster`): `void`

클러스터 마커를 더블클릭 했을 때 발생한다
이벤트 핸들러 함수 인자로는 더블클릭한 Cluster 객체가 넘어온다.
MarkerClusterer 를 생성할 때 disableClickZoom 옵션을 true로 설정해야만 이벤트가 발생한다.

#### Parameters

| Name      | Type              |
| :-------- | :---------------- |
| `target`  | `MarkerClusterer` |
| `cluster` | `Cluster`         |

#### Returns

`void`

#### Defined in

[components/MarkerClusterer.tsx:93](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MarkerClusterer.tsx#L93)

---

### onClustered

▸ `Optional` **onClustered**(`target`, `clusters`): `void`

클러스터링이 완료됐을 때 발생한다.
이벤트 핸들러 함수 인자로는 생성된 Cluster 객체 전체가 배열로 넘어온다.

#### Parameters

| Name       | Type              |
| :--------- | :---------------- |
| `target`   | `MarkerClusterer` |
| `clusters` | `Cluster`[]       |

#### Returns

`void`

#### Defined in

[components/MarkerClusterer.tsx:109](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MarkerClusterer.tsx#L109)

---

### onClusterout

▸ `Optional` **onClusterout**(`target`, `cluster`): `void`

클러스터 마커를 마우스 아웃 했을 때 발생한다
이벤트 핸들러 함수 인자로는 마우스 아웃된 Cluster 객체가 넘어온다.

#### Parameters

| Name      | Type              |
| :-------- | :---------------- |
| `target`  | `MarkerClusterer` |
| `cluster` | `Cluster`         |

#### Returns

`void`

#### Defined in

[components/MarkerClusterer.tsx:84](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MarkerClusterer.tsx#L84)

---

### onClusterover

▸ `Optional` **onClusterover**(`target`, `cluster`): `void`

클러스터 마커를 마우스 오버 했을 때 발생한다
이벤트 핸들러 함수 인자로는 마우스 오버한 Cluster 객체가 넘어온다.

#### Parameters

| Name      | Type              |
| :-------- | :---------------- |
| `target`  | `MarkerClusterer` |
| `cluster` | `Cluster`         |

#### Returns

`void`

#### Defined in

[components/MarkerClusterer.tsx:76](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MarkerClusterer.tsx#L76)

---

### onClusterrightclick

▸ `Optional` **onClusterrightclick**(`target`, `cluster`): `void`

클러스터 마커를 오른쪽 클릭 했을 때 발생한다
이벤트 핸들러 함수 인자로는 오른쪽 클릭한 Cluster 객체가 넘어온다.

#### Parameters

| Name      | Type              |
| :-------- | :---------------- |
| `target`  | `MarkerClusterer` |
| `cluster` | `Cluster`         |

#### Returns

`void`

#### Defined in

[components/MarkerClusterer.tsx:101](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MarkerClusterer.tsx#L101)

---

### onCreate

▸ `Optional` **onCreate**(`target`): `void`

MarkerClusterer 생성 후 해당 객체를 전달하는 함수

#### Parameters

| Name     | Type              |
| :------- | :---------------- |
| `target` | `MarkerClusterer` |

#### Returns

`void`

#### Defined in

[components/MarkerClusterer.tsx:116](https://github.com/JaeSeoKim/react-kakao-maps/blob/c2e6108/src/components/MarkerClusterer.tsx#L116)
