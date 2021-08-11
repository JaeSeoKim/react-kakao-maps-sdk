import { useContext } from "react";
import { KakaoMapContext } from "../Map";

const useMapPosition = () => {
  const map = useContext(KakaoMapContext);

  return (
    position: {
      lat: number;
      lng: number;
    },
    /**
     * 중심 좌표를 지정한 좌표 또는 영역으로 부드럽게 이동한다
     */
    isPanto: boolean = false,
    /**
     * 중심 좌표를 지정한 좌표 또는 영역으로 부드럽게 이동한다. 필요하면 확대 또는 축소도 수행한다.
     * 만약 이동할 거리가 지도 화면의 크기보다 클 경우 애니메이션 없이 이동한다.
     * padding 만큼 제외하고 영역을 계산하며, padding 을 지정하지 않으면 기본값으로 32가 사용된다.
     */
    padding?: number
  ) => {
    if (isPanto)
      return map.panTo(
        new kakao.maps.LatLng(position.lat, position.lng),
        padding
      );
    else map.setCenter(new kakao.maps.LatLng(position.lat, position.lng));
  };
};

export default useMapPosition;
