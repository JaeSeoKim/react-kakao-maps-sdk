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

- ### [지도 레벨 바꾸기](/docs/sample/map/moveMap)

  - 지도 레벨을 지도 객체 메소드를 호출해서 변경합니다.

- ### [지도 정보 얻어오기](/docs/sample/map/mapInfo)

  - 지도 레벨, 중심좌표, 지도 타입, 지도 영역정보를 얻어와 표출합니다.

- ### [지도에 컨트롤 올리기](/docs/sample/map/addMapControl)

  - 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 버튼과 지도 확대, 축소를 제어할 수 있는 도구를 쉽게 지도 위에 올릴 수 있습니다. 각각 지도 타입 컨트롤, 지도 줌 컨트롤이라고 부르며, 아래 예제와 같이 지도 위에 표시될 위치를 지정할 수도 있습니다.

- ### [지도 이동 막기](/docs/sample/map/disableMapDragMove)

  - 마우스 드래그로 지도를 이동시키는 기능을 막습니다. 모바일 기기에서 터치스크롤시 지도가 이동되는 것을 막고싶거나 지도가 이동되면 안되는 경우 등 상황에 따라 지도의 이동 기능을 제어할 수 있습니다.

- ### [지도 확대 축소 막기](/docs/sample/map/enableDisableZoomInOut)

  - 마우스 휠이나 멀티터치로 지도 확대, 축소 기능을 막습니다. 상황에 따라 지도 확대, 축소 기능을 제어할 수 있습니다.

- ### [지도에 교통정보 표시하기](/docs/sample/map/addTrafficOverlay)

  - 지도에 현재 실시간 교통 정보가 컬러로 표시되어 있는 라인을 올릴 수 있습니다.

- ### [지도에 로드뷰 도로 표시하기](/docs/sample/map/addRoadviewOverlay)

  - 지도 위에 로드뷰 정보가 있는 도로를 표시할 수 있습니다.

- ### [지도에 지형도 표시하기](/docs/sample/map/addTerrainOverlay)

  - 지도 위에 지형 정보를 알 수 있는 지형도를 표시할 수 있습니다.

- ### [지도 타입 바꾸기1](/docs/sample/map/changeOverlay1)

  - 교통정보, 로드뷰 도로정보, 지형도 정보를 버튼 클릭에 따라 지도 타입을 변경합니다.

- ### [지도 타입 바꾸기2](/docs/sample/map/changeOverlay2)

  - 지형정보, 교통정보, 자전거도로 정보를 체크박스 선택에 따라 지도타입을 겹쳐보이게 표시합니다.

- ### [지도 범위 재설정 하기](/docs/sample/map/setBounds)

  - 지도 범위를 재설정합니다. 어떤 좌표나 마커들이 지도에 모두 보여야 할 때 좌표들의 정보를 갖는 LatLngBounds를 사용하여 좌표들이 모두 보이게 지도의 중심좌표와 레벨을 재설정 할 수 있습니다.

- ### [지도 영역 크기 동적 변경하기](/docs/sample/map/mapRelayout)

  - 지도 객체는 생성될 때 지도 div 크기에 따라 픽셀과 좌표정보를 설정하여 가지고 있습니다. 이 정보로 지도 객체는 지도표시, 마커 표시, 확대, 축소, 이동 등의 좌표 계산 등 지도 표시에 필요한 여러가지 연산을 수행하는데 이때 지도 div의 크기가 변경이 되면 지도객체가 가지고 있는 픽셀과 좌표정보가 div를 표시하는 크기와 달라지기 때문에 지도가 정상적으로 표출되지 않을 수도 있습니다. 그래서 크기를 변경한 이후에는 반드시 relayout 함수를 호출하여 픽셀과 좌표정보를 새로 설정해주어야합니다. window의 resize 이벤트에 의한 크기변경은 map.relayout 함수가 자동으로 호출됩니다. react-kakao-maps-sdk 에서는 기본적으로 style, className, id을 Props로 받고 있고 해당 객체는 useEffect 를 통해 dependency에 추가 되어 변화가 발생시 자동으로 map.relayout 함수를 호출 하고 있습니다. 만약 상위 단계에서의 style 변화 등 호출 해야 하는 경우에만 onCreate, useMap 등 을 통해 map.relayout 를 직접 호출 하여서 사용하면 됩니다.

- ### [클릭 이벤트 등록하기](/docs/sample/map/addMapClickEvent)

  - 지도를 마우스로 클릭했을때 click 이벤트가 발생합니다. 이 예제에서는 지도를 클릭했을 때 지도 아래쪽에 해당 위치의 좌표를 뿌려주고 있습니다.

- ### [클릭한 위치에 마커 표시하기](/docs/sample/map/addMapClickEventWithMarker)

  - 지도를 마우스로 클릭했을때 click 이벤트가 발생합니다. 이 예제는 지도를 클릭했을 때 해당 위치에 마커를 올리는 예제입니다. 이때 마커는 1개만 생성하여 클릭한 위치로 옮겨주고 있습니다.

- ### [이동 이벤트 등록하기](/docs/sample/map/addMapDragendEvent)

  - 지도를 마우스로 이동시킬 경우에 dragend 이벤트가 발생합니다. 아래 예제는 마우스로 지도 이동이 완료된 시점의 중심 좌표를 표시하는 예제입니다.

- ### [확대, 축소 이벤트 등록하기](/docs/sample/map/addMapZoomChangedEvent)

  - 지도를 확대, 축소하거나, 지도 API의 특정 메소드를 호출하여 지도 레벨이 변경되는 경우에는 zoom_changed 이벤트가 발생합니다. 이 예제에서는 지도 레벨이 변경되었을 때 지도 아래쪽에 변경된 지도 레벨을 뿌려주고 있습니다. 줌 컨트롤을 이용하거나 마우스 스크롤을 이용하여 지도를 확대, 축소해보세요.

- ### [중심좌표 변경 이벤트 등록하기](/docs/sample/map/addMapCenterChangedEvent)

  - 지도를 이동하거나, 지도 API의 특정 메소드를 호출하여 지도의 중심좌표가 변경되었을 때 center_changed 이벤트가 발생합니다. 이 예제에서는 지도의 중심좌표가 변경되었을때 지도 아래쪽에 변경된 중심좌표 및 지도 레벨을 뿌려주고 있습니다. 지도를 움직여서 확인해보세요.

- ### [영역 변경 이벤트 등록하기](/docs/sample/map/addMapBoundsChangedEvent)

  - 지도를 이동 또는 확대/축소 하거나, 지도 API의 특정 메소드를 호출하여 지도 영역이 변경되는 경우에는 bounds_changed 이벤트가 발생합니다. 이 예제에서는 지도 영역이 변경되었을 때 지도 아래쪽에 변경된 지도 영역의 좌표를 뿌려주고 있습니다. 지도를 움직여서 확인해보세요.

- ### [타일로드 이벤트 등록하기](/docs/sample/map/addTilesloadedEvent)

  - 지도를 확대, 축소하거나 지도를 움직인 이후에 타일 이미지가 모두 완료되면 tilesloaded 이벤트가 발생합니다. 이 예제에서는 타일 이미지가 모두 로드 된 이후에 tilesloaded 이벤트가 발생하면 마커의 위치를 지도중심으로 설정합니다.

- ### [커스텀 타일셋1](/docs/sample/map/customTileset)

  - 직접 만든 타일 이미지로 타일셋을 만들어 사용할 수 있습니다.

- ### [커스텀 타일셋2](/docs/sample/map/getTile)
  - Tileset 객체를 생성할 때 getTile 함수를 파라미터로 입력하면 지도 위에 이미지 URL이 아닌 다른 HTML Element를 타일로 표시할 수 있습니다. 이 예제에서는 Div Element에 지도 타일 좌표와 레벨을 표시합니다.

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

- ### [geolocation으로 마커 표시하기](/docs/sample/overlay/geolocationMarker)

  - HTML5 GeoLocation을 이용해 접속위치를 얻어오고 접속위치에 마커와 인포윈도우를 표시합니다.

- ### [여러개 마커 표시하기](/docs/sample/overlay/multipleMarkerImage)

  - 지도 위에 마커 이미지를 사용하여 여러개의 마커를 표시합니다

- ### [여러개 마커 제어하기](/docs/sample/overlay/multipleMarkerControl)

  - 지도를 클릭한 위치에 마커를 표시하고 지도에 표시되고 있는 마커들을 감추고 다시 지도 위에 표시합니다.

- ### [여러개 마커에 이벤트 등록하기1](/docs/sample/overlay/multipleMarkerEvent)

  - 여러개의 마커에 마우스 이벤트를 등록합니다. 마커에 마우스오버하면 인포윈도우에 마커의 타이틀을 표시하고 마우스아웃하면 인포윈도우를 닫습니다.

- ### [여러개 마커에 이벤트 등록하기2](/docs/sample/overlay/multipleMarkerEvent2)

  - 이 샘플에서는 여러개의 마커에 마우스 이벤트를 등록하고 이벤트가 발생할 때 마다 마커에 다른이미지가 표시되도록 합니다. 마우스 오버시 조금 큰 마커 이미지로 변경되고 마우스 아웃시 처음 이미지로 변경합니다. 마우스 클릭시에는 다른 색깔의 마커 이미지로 변경하고 마우스 오버, 아웃 이벤트가 발생해도 이미지가 바뀌지 않습니다. 다른 마커를 클릭하면 클릭됐었던 마커는 다시 기본 마커로 이미지를 변경합니다.

- ### [다양한 이미지 마커 표시하기](/docs/sample/overlay/categoryMarker)

  - 다양한 이미지 마커를 지도 위에 마커를 표시합니다. 이 예제에서는 마커 이미지를 생성할 때 스프라이트 이미지를 사용합니다.

- ### [원, 선, 사각형, 다각형 표시하기](/docs/sample/overlay/drawShape)

  - 지도 위에 원, 선, 사각형, 다각형을 표시합니다.

- ### [선의 거리 계산하기](/docs/sample/overlay/calculatePolylineDistance)

  - 지도를 마우스로 클릭하면 선 그리기가 시작되고 오른쪽 마우스를 클릭하면 선 그리기가 종료되면서 그려진 선의 실제 거리(단위 : m)를 표시합니다.

- ### [다각형의 면적 계산하기](/docs/sample/overlay/calculatePolygonArea)

  - 지도를 마우스로 클릭하면 다각형 그리기가 시작되고 마우스 오른쪽 버튼을 클릭하면 다각형 그리기가 종료되고 그려진 다각형의 총 면적을 표시합니다.

- ### [다각형에 이벤트 등록하기1](/docs/sample/overlay/addPolygonMouseEvent1)

  - 다각형에 마우스아웃, 마우스오버, 마우스다운 이벤트를 등록합니다. 다각형에 마우스다운 이벤트가 발생하면 지도 아래 div에 마우스다운 이벤트 발생을 표시합니다. 다각형에 마우스오버 이벤트가 발생하면 다각형의 채우기 색을 변경하고 마우스아웃 이벤트가 발생하면 다각형의 채우기 색을 처음 색으로 변경합니다.

- ### [다각형에 이벤트 등록하기2](/docs/sample/overlay/addPolygonMouseEvent2)

  - 여러개의 다각형에 mouseover, mousemove, mouseout, click 이벤트를 등록합니다. 다각형에 mouseover 이벤트가 발생하면 다각형의 채움색을 변경하고 mouseout이 발생하면 채움색을 원래 색으로 변경합니다. 다각형에 mousemove 이벤트가 발생하면 해당 다각형의 이름을 마우스 커서 옆에 커스텀오버레이로 표시합니다. 다각형에 click이벤트가 발생하면 클릭한 지점에 다각형의 이름과 면적을 인포윈도우로 표시합니다.

- ### [원의 반경 계산하기](/docs/sample/overlay/calculateCircleRadius)

  - 지도를 클릭하면 원 그리기가 시작되고 오른쪽 마우스를 클릭하면 원 그리기가 중단되고 원의 실제 반경(단위 : m)을 표시합니다.

- ### [커스텀 오버레이 생성하기1](/docs/sample/overlay/customOverlay1)

  - 커스텀 오버레이를 생성합니다.

- ### [커스텀 오버레이 생성하기2](/docs/sample/overlay/customOverlay2)

  - HTML과 CSS를 이용해 지도 위에 자유롭게 컨텐츠를 표시합니다.

- ### [닫기가 가능한 커스텀 오버레이](/docs/sample/overlay/removableCustomOverlay)

  - HTML과 CSS를 이용해 지도 위에 자유롭게 컨텐츠를 표시합니다. 이 샘플에서는 커스텀 오버레이를 마커 위에 표시하고 X버튼을 클릭했을 때 커스텀 오버레이를 지도에서 제거합니다. 마커를 클릭하면 다시 커스텀 오버레이가 표시됩니다.

- ### [이미지 마커와 커스텀 오버레이](/docs/sample/overlay/markerWithCustomOverlay)

  - 지도에 커스텀 오버레이와 마커 이미지를 이용해 다른 이미지로 마커를 표시합니다.

- ### [이미지 마커와 커스텀 오버레이](/docs/sample/overlay/markerWithCustomOverlay)
  - 지도에 커스텀 오버레이와 마커 이미지를 이용해 다른 이미지로 마커를 표시합니다.

## 로드뷰

<hr/>

- ### [로드뷰 생성하기](/docs/sample/roadview/basicRoadview)

  - 로드뷰를 생성하는 기본 예제입니다. 로드뷰는 모든 좌표에 존재하는 것이 아니므로, 특정 위치의 좌표에서 가장 가까운 곳에 존재하는 사진을 가져와야 합니다. 아래 예제는 이러한 방식으로 (파노라마) 사진 ID값을 얻은 후에, 이를 로드뷰에 표시하고 있습니다.

- ### [로드뷰에 커스텀오버레이 올리기](/docs/sample/roadview/roadviewCustomOverlay)
  - 지도와 로드뷰에 커스텀 오버레이를 올립니다. 로드뷰는 커스텀 오버레이가 중앙에 오도록 viewpoint값을 변경시킵니다.
