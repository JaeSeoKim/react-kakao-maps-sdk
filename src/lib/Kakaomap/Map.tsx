import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export const KakaoMapContext = React.createContext<kakao.maps.Map>(
  undefined as unknown as kakao.maps.Map
);

export interface MapProps {
  /**
   * MapContinaer의 id에 대해서 지정합니다.
   *
   * containerElem가 들어온다면 무시 됩니다.
   *
   * @default  "kakao-map-container"
   */
  id?: string;

  /**
   * MapContainer의 className에 대해서 지정합니다.
   *
   * containerElem가 들어온다면 무시 됩니다.
   */
  className?: string;

  /**
   * MapContainer의 style에 대해서 지정합니다.
   *
   * containerElem가 들어온다면 무시 됩니다.
   */
  style?: React.CSSProperties;

  /**
   * MapContainer Elem를 사용자 정의 합니다.
   */
  containerElem?: HTMLElement | null;

  /**
   * 중심으로 설정할 위치 입니다.
   */
  center: {
    lat: number;
    lng: number;
  };

  /**
   * 중심을 이동시킬때 Panto를 사용할지 정합니다.
   * @default false
   */
  isPanto?: boolean;

  /**
   * 스크립트를 동적으로 로드확인을 위해 사용한다.
   * @default false
   */
  loading?: boolean;

  /**
   * 확대 수준 (기본값: 3)
   */
  level?: number;

  /**
   * 최대 확대 수준
   */
  maxLevel?: number;

  /**
   * 최소 확대 수준
   */
  minLevel?: number;

  /**
   * 지도 종류 (기본값: 일반 지도)
   */
  mapTypeId?: kakao.maps.MapTypeId;

  /**
   * 마우스 드래그, 휠, 모바일 터치를 이용한 시점 변경(이동, 확대, 축소) 가능 여부
   */
  draggable?: boolean;

  /**
   * 마우스 휠, 모바일 터치를 이용한 확대 및 축소 가능 여부
   */
  scrollwheel?: boolean;

  /**
   * 더블클릭 이벤트 및 더블클릭 확대 가능 여부
   */
  disableDoubleClick?: boolean;

  /**
   * 더블클릭 확대 가능 여부
   */
  disableDoubleClickZoom?: boolean;

  /**
   * 투영법 지정 (기본값: kakao.maps.ProjectionId.WCONG)
   */
  projectionId?: string;

  /**
   * 지도 타일 애니메이션 설정 여부 (기본값: true)
   */
  tileAnimation?: boolean;

  /**
   * 키보드의 방향키와 +, – 키로 지도 이동,확대,축소 가능 여부 (기본값: false)
   */
  keyboardShortcuts?:
    | boolean
    | {
        /**
         * 지도 이동 속도
         */
        speed: number;
      };

  /**
   * 중심 좌표가 변경되면 발생한다.
   */
  onCenterChanged?: Function;

  /**
   * 확대 수준이 변경되기 직전 발생한다.
   */
  onZoomStart?: Function;

  /**
   * 확대 수준이 변경되면 발생한다.
   */
  onZoomChanged?: Function;

  /**
   * 지도 영역이 변경되면 발생한다.
   */
  onBoundsChanged?: Function;

  /**
   * 지도를 클릭하면 발생한다.
   */
  onClick?: (mouseEvent: kakao.maps.event.MouseEvent) => void;

  /**
   * 지도를 더블클릭하면 발생한다.
   */
  onDoubleClick?: (mouseEvent: kakao.maps.event.MouseEvent) => void;

  /**
   * 지도를 마우스 오른쪽 버튼으로 클릭하면 발생한다.
   */
  onRightClick?: (mouseEvent: kakao.maps.event.MouseEvent) => void;

  /**
   * 지도에서 마우스 커서를 이동하면 발생한다.
   */
  onMouseMove?: (mouseEvent: kakao.maps.event.MouseEvent) => void;

  /**
   * 드래그를 시작할 때 발생한다.
   */
  onDragStart?: (mouseEvent: kakao.maps.event.MouseEvent) => void;

  /**
   * 드래그를 하는 동안 발생한다.
   */
  onDrag?: (mouseEvent: kakao.maps.event.MouseEvent) => void;

  /**
   * 드래그가 끝날 때 발생한다.
   */
  onDragEnd?: (mouseEvent: kakao.maps.event.MouseEvent) => void;

  /**
   * 중심 좌표나 확대 수준이 변경되면 발생한다.
   * 단, 애니메이션 도중에는 발생하지 않는다.
   */
  onIdle?: Function;

  /**
   * 확대수준이 변경되거나 지도가 이동했을때 타일 이미지 로드가 모두 완료되면 발생한다.
   * 지도이동이 미세하기 일어나 타일 이미지 로드가 일어나지 않은경우 발생하지 않는다.
   */
  onTileLoaded?: Function;

  /**
   * 지도 기본 타일(일반지도, 스카이뷰, 하이브리드)이 변경되면 발생한다.
   */
  onMaptypeidChanged?: Function;
}

const Map: React.FC<MapProps> = ({
  id = "kakao-map-container",
  style,
  containerElem,
  children,
  center,
  isPanto = false,
  className,
  loading = false,
  disableDoubleClick,
  disableDoubleClickZoom,
  draggable,
  keyboardShortcuts,
  level,
  maxLevel,
  minLevel,
  mapTypeId,
  projectionId,
  scrollwheel,
  tileAnimation,
  onBoundsChanged,
  onCenterChanged,
  onClick,
  onDoubleClick,
  onDrag,
  onDragEnd,
  onDragStart,
  onIdle,
  onMaptypeidChanged,
  onMouseMove,
  onRightClick,
  onTileLoaded,
  onZoomChanged,
  onZoomStart,
}) => {
  const [map, setMap] = useState<kakao.maps.Map>();

  const container = useRef<HTMLDivElement>(null);

  // containerElem 존재할 때 Kakaomap 생성 로직
  useEffect(() => {
    if (loading || !containerElem) return;

    kakao.maps.load(() => {
      // 초기 위치 객체 생성
      const initalMapCenter = new kakao.maps.LatLng(center.lat, center.lng);

      // kakaoMap 객체 생성
      const kakaoMap = new kakao.maps.Map(containerElem, {
        center: initalMapCenter,
        disableDoubleClick: disableDoubleClick,
        disableDoubleClickZoom: disableDoubleClickZoom,
        draggable: draggable,
        keyboardShortcuts: keyboardShortcuts,
        level: level,
        mapTypeId: mapTypeId,
        projectionId: projectionId,
        scrollwheel: scrollwheel,
        tileAnimation: tileAnimation,
      });

      // kakaoMap 객체 저장
      setMap(kakaoMap);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    loading,
    containerElem,
    disableDoubleClick,
    disableDoubleClickZoom,
    mapTypeId,
    tileAnimation,
  ]);

  // containerElem 존재 하지 않을 때 kakaomap 객체 생성 로직f
  useLayoutEffect(() => {
    if (loading || containerElem) return;

    kakao.maps.load(() => {
      // 초기 위치 객체 생성
      const initalMapCenter = new kakao.maps.LatLng(center.lat, center.lng);

      // kakaoMap 객체 생성
      const kakaoMap = new kakao.maps.Map(container.current as HTMLDivElement, {
        center: initalMapCenter,
        disableDoubleClick: disableDoubleClick,
        disableDoubleClickZoom: disableDoubleClickZoom,
        draggable: draggable,
        keyboardShortcuts: keyboardShortcuts,
        level: level,
        mapTypeId: mapTypeId,
        projectionId: projectionId,
        scrollwheel: scrollwheel,
        tileAnimation: tileAnimation,
      });

      // kakaoMap 객체 저장
      setMap(kakaoMap);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    loading,
    containerElem,
    disableDoubleClick,
    disableDoubleClickZoom,
    mapTypeId,
    tileAnimation,
  ]);

  // center position 변경시 map center 변경
  useEffect(() => {
    if (!map) return;

    const centerPosition = new kakao.maps.LatLng(center.lat, center.lng);

    if (isPanto) {
      map.panTo(centerPosition);
    } else {
      map.setCenter(centerPosition);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, center.lat, center.lng]);

  // containerElem size 갱신시 map relayout 이벤트 처리
  useEffect(() => {
    if (!map || !containerElem) return;

    const observer = new MutationObserver(() => {
      map.relayout();
    });

    observer.observe(containerElem, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => {
      observer.disconnect();
    };
  }, [map, containerElem]);

  // Container style, className, id 등 디자인 요소가 변경될 요지가 변경시 relayout
  useEffect(() => {
    if (!map || containerElem) return;

    map.relayout();
  }, [map, style, className, id, containerElem]);

  useEffect(() => {
    if (!map || !draggable) return;
    map.setDraggable(draggable);
  }, [map, draggable]);

  useEffect(() => {
    if (!map || !keyboardShortcuts || typeof keyboardShortcuts !== "boolean")
      return;
    map.setKeyboardShortcuts(keyboardShortcuts);
  }, [map, keyboardShortcuts]);

  useEffect(() => {
    if (!map || !level) return;
    map.setLevel(level);
  }, [map, level]);

  useEffect(() => {
    if (!map || !mapTypeId) return;
    map.setMapTypeId(mapTypeId);
  }, [map, mapTypeId]);

  useEffect(() => {
    if (!map || !projectionId) return;
    map.setProjectionId(projectionId);
  }, [map, projectionId]);

  useEffect(() => {
    if (!map || !maxLevel) return;
    map.setMaxLevel(maxLevel);
  }, [map, maxLevel]);

  useEffect(() => {
    if (!map || !minLevel) return;
    map.setMinLevel(minLevel);
  }, [map, minLevel]);

  useEffect(() => {
    if (!map || !onBoundsChanged) return;
    kakao.maps.event.addListener(map, "bounds_changed", onBoundsChanged);
  }, [map, onBoundsChanged]);

  useEffect(() => {
    if (!map || !onCenterChanged) return;
    kakao.maps.event.addListener(map, "center_changed", onCenterChanged);
  }, [map, onCenterChanged]);

  useEffect(() => {
    if (!map || !onClick) return;
    kakao.maps.event.addListener(map, "click", onClick);
  }, [map, onClick]);

  useEffect(() => {
    if (!map || !onDoubleClick) return;
    kakao.maps.event.addListener(map, "dblclick", onDoubleClick);
  }, [map, onDoubleClick]);

  useEffect(() => {
    if (!map || !onDrag) return;
    kakao.maps.event.addListener(map, "drag", onDrag);
  }, [map, onDrag]);

  useEffect(() => {
    if (!map || !onDragStart) return;
    kakao.maps.event.addListener(map, "dragstart", onDragStart);
  }, [map, onDragStart]);

  useEffect(() => {
    if (!map || !onDragEnd) return;
    kakao.maps.event.addListener(map, "dragend", onDragEnd);
  }, [map, onDragEnd]);

  useEffect(() => {
    if (!map || !onIdle) return;
    kakao.maps.event.addListener(map, "idle", onIdle);
  }, [map, onIdle]);

  useEffect(() => {
    if (!map || !onMaptypeidChanged) return;
    kakao.maps.event.addListener(map, "maptypeid_changed", onMaptypeidChanged);
  }, [map, onMaptypeidChanged]);

  useEffect(() => {
    if (!map || !onMouseMove) return;
    kakao.maps.event.addListener(map, "mousemove", onMouseMove);
  }, [map, onMouseMove]);

  useEffect(() => {
    if (!map || !onRightClick) return;
    kakao.maps.event.addListener(map, "rightclick", onRightClick);
  }, [map, onRightClick]);

  useEffect(() => {
    if (!map || !onTileLoaded) return;
    kakao.maps.event.addListener(map, "tileloaded", onTileLoaded);
  }, [map, onTileLoaded]);

  useEffect(() => {
    if (!map || !onZoomChanged) return;
    kakao.maps.event.addListener(map, "zoom_changed", onZoomChanged);
  }, [map, onZoomChanged]);

  useEffect(() => {
    if (!map || !onZoomStart) return;
    kakao.maps.event.addListener(map, "zoom_start", onZoomStart);
  }, [map, onZoomStart]);

  return (
    <>
      {!containerElem && (
        <div id={id} style={style} className={className} ref={container}></div>
      )}
      {map && (
        <KakaoMapContext.Provider value={map}>
          {children}
        </KakaoMapContext.Provider>
      )}
    </>
  );
};

export default Map;
