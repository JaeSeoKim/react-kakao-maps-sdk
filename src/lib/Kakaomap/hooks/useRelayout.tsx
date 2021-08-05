import { useContext } from "react";
import { KakaoMapContext } from "../Map";
import { KakaoRoadviewContext } from "../Roadview";

const useRelayout = () => {
  const map = useContext(KakaoMapContext);
  const roadview = useContext(KakaoRoadviewContext);

  const relayout = () => {
    if (map) {
      map.relayout();
    }
    if (roadview) {
      roadview.relayout();
    }
  };

  return relayout;
};

export default useRelayout;
