### 0.0.12
- Map envent 추가
- Marker Props 수정
- 대부분의 component useEffect 관심사 분리
- useSetCenter, usePanto 삭제

### 0.0.11
- Marker option update 가능 하도록 수정

### 0.0.10
- Map center useEffect deps 오류 수정
- Marker 객체 관리 방식 useMemo로 변경
- build 된 파일 comment 포함 하도록 수정

### 0.0.9
- CustomOverlayRoadview 오류 수정

### 0.0.8
- Map position prop 이름 center 로 롤백

### 0.0.7
- useRelayout 추가
- MapInfoWindow 추가
- MapMarker 추가
  - 이벤트, InfoWindow 등 구현
- CustomOverlayMap, CustomOverlayRoadview Code refactoring
  - class compontent -> functional component 로 변경
  - dragEvent 추가.
- Map, Roadview 외부 HTMLElement를 가지고 생성이 가능하도록 수정
  - 여러가지 인자들에 대해서 수정함. ex) size prop에서 style로 확장, center -> position, option -> options 등

### 0.0.6
- 프로젝트 구조 수정
- main - release 되는 버전
- develop - 개발 전용 브랜치
- docs - 개발 API 문서

### 0.0.5
- Roadview, CustomOverlayRoadview 컴포넌트 추가

### 0.0.1 ~ 0.0.4
- 초기 프로젝트 설정
- Map Container 추가
- useMapSetCenter 추기
- useMapPanTo 추가
- CustomOverlayMap 추가
- API 문서 생성
