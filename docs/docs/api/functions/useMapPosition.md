---
id: "useMapPosition"
title: "Function: useMapPosition"
sidebar_label: "useMapPosition"
sidebar_position: 0
custom_edit_url: null
---

▸ `Const` **useMapPosition**(): (`__namedParameters`: { `isPanto?`: `boolean` ; `padding?`: `number` ; `position`: { `lat`: `number` ; `lng`: `number`  }  }) => `void`

#### Returns

`fn`

▸ (`__namedParameters`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `__namedParameters` | `Object` | - |
| `__namedParameters.isPanto?` | `boolean` | 중심 좌표를 지정한 좌표 또는 영역으로 부드럽게 이동한다  **`default`** false |
| `__namedParameters.padding?` | `number` | 중심 좌표를 지정한 좌표 또는 영역으로 부드럽게 이동한다. 필요하면 확대 또는 축소도 수행한다. 만약 이동할 거리가 지도 화면의 크기보다 클 경우 애니메이션 없이 이동한다. padding 만큼 제외하고 영역을 계산하며, padding 을 지정하지 않으면 기본값으로 32가 사용된다.  **`default`** 32 |
| `__namedParameters.position` | `Object` | - |
| `__namedParameters.position.lat` | `number` | - |
| `__namedParameters.position.lng` | `number` | - |

##### Returns

`void`

#### Defined in

[hooks/useMapPosition.tsx:4](https://github.com/JaeSeoKim/react-kakao-maps/blob/66f59fe/src/hooks/useMapPosition.tsx#L4)
