---
id: "AbstractOverlayProps"
title: "Interface: AbstractOverlayProps"
sidebar_label: "AbstractOverlayProps"
sidebar_position: 0
custom_edit_url: null
---

## Methods

### draw

▸ **draw**(): `void`

AbstractOverlay에서 필요한 `onAdd` 함수를 구현 합니다.
위치를 재조정할 필요가 있을 때 호출된다.
이 함수 내에서 엘리먼트의 위치를 잡아주어야 한다.

이때 arrow 함수가 아닌 일반 funtion으로 하여 this 바인딩이 되도록 하여 AbstractOverlay를 상속 받은 객체에 접근하여 필요 기능을 정의 합니다.
```tsx
const panel = (this as kakao.maps.AbstractOverlay).getPanels().overlayLayer
panel.appendChild(node.current)
```

#### Returns

`void`

#### Defined in

[components/AbstractOverlay.tsx:16](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/AbstractOverlay.tsx#L16)

___

### onAdd

▸ **onAdd**(): `void`

지도에 올릴 때 호출된다.
setMap(map) 을 실행하면 이 함수가 실행된다.
이 함수 내에서 생성된 `DOM` 객체를 MapPanels에 자식 노드로 넣어주도록 한다.

```tsx
var projection = this.getProjection()
var point = projection.pointFromCoords(positionLatlng)
var width = node.current.offsetWidth
var height = node.current.offsetHeight

console.log(point, width, height)

node.current.style.left = point.x - width / 2 + "px"
node.current.style.top = point.y - height / 2 + "px"
```

#### Returns

`void`

#### Defined in

[components/AbstractOverlay.tsx:34](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/AbstractOverlay.tsx#L34)

___

### onCreate

▸ `Optional` **onCreate**(`target`): `void`

생성된 kakao.maps.AbstractOverlay 객체를 받을 수 있는 CallBack 함수 입니다.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `AbstractOverlay` |

#### Returns

`void`

#### Defined in

[components/AbstractOverlay.tsx:50](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/AbstractOverlay.tsx#L50)

___

### onRemove

▸ **onRemove**(): `void`

지도에서 제거할 때 호출된다.
setMap(null) 을 실행하면 이 함수가 실행된다.
이 함수 내에서 MapPanels에 자식 노드로 넣어준 엘리먼트를 제거하도록 한다.

```tsx
this.node.parentNode.removeChild(this.node);
```

#### Returns

`void`

#### Defined in

[components/AbstractOverlay.tsx:45](https://github.com/JaeSeoKim/react-kakao-maps/blob/0abe091/src/components/AbstractOverlay.tsx#L45)
