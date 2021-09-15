---
id: "Map"
title: "Variable: Map"
sidebar_label: "Map"
sidebar_position: 0
custom_edit_url: null
---

• `Const` **Map**: `React.FC`<[`MapProps`](../interfaces/MapProps.md)\>

기본적인 Map 객체를 생성하는 Comeponent 입니다.
props로 받는 `on*` 이벤트는 해당 `kakao.maps.Map` 객체를 반환 합니다.
`onCreate` 이벤트를 통해 생성 후 `map` 객체에 직접 접근하여 초기 설정이 가능합니다.

#### Defined in

[components/Map.tsx:222](https://github.com/JaeSeoKim/react-kakao-maps/blob/1c2440a/src/components/Map.tsx#L222)
