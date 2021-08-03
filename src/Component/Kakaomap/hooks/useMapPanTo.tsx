import { useContext, useEffect, useState } from "react";
import { KakaoMapContext } from "../Map";

const useMapPanTo = () => {
  const map = useContext(KakaoMapContext);

  const [position, setPoition] = useState<{
    lat: number;
    lng: number;
  }>(null as unknown as { lat: number; lng: number });

  useEffect(() => {
    if (map && position) {
      map.panTo(new kakao.maps.LatLng(position.lat, position.lng));
    }
  }, [map, position]);

  return setPoition;
};

export default useMapPanTo;
