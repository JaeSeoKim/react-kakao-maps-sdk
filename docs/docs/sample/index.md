---
title: Index
sidebar_position: 0
slug: /sample/
---

# react-kakao-maps의 샘플 예시 입니다.

[Kakao Maps Api Sample 문서](https://apis.map.kakao.com/web/sample/) 와 최대한 동일한 예시로 작성 하였습니다.

## 지도

<hr/>

- ### [지도 생성하기](/docs/sample/map/basicMap)

  - 지도를 생성하는 가장 기본적인 예제입니다.

- ### [지도 이동시키기](/docs/sample/map/moveMap)
  - 지도를 이동시킵니다. 지도 객체의 메소드를 통해 지도를 원하는 좌표로 이동시킬 수 있습니다. 또, 지도가 표시되고 있는 영역크기를 벗어나지 않는 거리라면 애니메이션 효과처럼 지도를 부드럽게 이동시킬 수도 있습니다.

## 오버레이

<hr/>

- ### [마커 생성하기](/docs/sample/overlay/basicMarker)

  - 지도에 올라가는 핀 모양의 이미지를 마커라고 부릅니다. 아래 예제는 지도 위에 마커를 표시하는 기본 예제입니다.

- ### [드래그 가능한 마커 생성하기](/docs/sample/overlay/draggableMarker)

  - 마우스로 드래그가 가능한 마커를 생성합니다.

- ### [다른 이미지로 마커 생성하기](/docs/sample/overlay/basicMarkerImage)

  - 원하는 이미지를 사용해서 더 멋진 마커를 만들 수 있습니다. 아래 예제는 마커로 사용할 이미지의 크기나 꼭지점 위치 등을 지정하여 기본 마커 대신 이용하는 예제입니다.

- ### [인포윈도우 생성하기](/docs/sample/overlay/basicInfoWindow)

  - 텍스트를 올릴 수 있는 말풍선 모양의 이미지를 인포윈도우라고 부릅니다. 아래 예제는 삭제 버튼을 포함한 인포윈도우를 지도에 표시하는 예제입니다.

- ### [마커에 인포윈도우 표시하기](/docs/sample/overlay/markerWithInfoWindow)

  - 마커 위에 인포윈도우를 함께 표시합니다. 인포윈도우에 들어갈 내용은 HTML (React Component)로 자유롭게 입력할 수 있습니다.

- ### [마커에 클릭 이벤트 등록하기](/docs/sample/overlay/addMarkerClickEvent)

  - 마커를 마우스로 클릭했을때 click 이벤트가 발생합니다. 이 예제에서는 마커를 클릭했을 때 마커 위에 인포윈도우를 표시하고 있습니다.

- ### [마커에 마우스 이벤트 등록하기](/docs/sample/overlay/addMarkerMouseEvent)

  - 마커에 마우스 커서를 올렸을때 mouseover 이벤트가, 마우스 커서를 내리면 mouseout 이벤트가 발생합니다. 이 예제에서는 마커에 마우스 커서를 올리고 내릴때 인포윈도우를 표시하거나 제거하고 있습니다.

- ### [draggable 마커 이벤트 적용하기](/docs/sample/overlay/addDraggableMarkerDragEvent)

  - 드래그가 가능한 마커에 dragstart, dragend 이벤트를 등록합니다. 이 예제에서는 마커의 드래그가 시작될 때 즉, dragstart 이벤트가 발생할 때 마커의 이미지를 다른이미지로 변경하며, 마커의 드래그가 끝날 때 즉, dragend 이벤트가 발생할 때 마커의 이미지를 처음 이미지로 재변경하고 있습니다.
  -

- ### [원, 선, 사각형, 다각형 표시하기](/docs/sample/overlay/drawShape)

  - 지도 위에 원, 선, 사각형, 다각형을 표시합니다.

- ### [커스텀 오버레이 생성하기1](/docs/sample/overlay/customOverlay1)

  - 커스텀 오버레이를 생성합니다.

- ### [커스텀 오버레이 생성하기2](/docs/sample/overlay/customOverlay2)
  - HTML과 CSS를 이용해 지도 위에 자유롭게 컨텐츠를 표시합니다.

## 로드뷰

<hr/>

- ### [로드뷰 생성하기](/docs/sample/roadview/basicRoadview)

  - 로드뷰를 생성하는 기본 예제입니다. 로드뷰는 모든 좌표에 존재하는 것이 아니므로, 특정 위치의 좌표에서 가장 가까운 곳에 존재하는 사진을 가져와야 합니다. 아래 예제는 이러한 방식으로 (파노라마) 사진 ID값을 얻은 후에, 이를 로드뷰에 표시하고 있습니다.

- ### [로드뷰에 커스텀오버레이 올리기](/docs/sample/roadview/roadviewCustomOverlay)
  - 지도와 로드뷰에 커스텀 오버레이를 올립니다. 로드뷰는 커스텀 오버레이가 중앙에 오도록 viewpoint값을 변경시킵니다.
