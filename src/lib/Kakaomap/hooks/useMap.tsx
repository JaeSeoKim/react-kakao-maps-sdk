import React, { useContext } from "react";
import { KakaoMapContext } from "../Map";

/**
 * kakao map 객체를 가져오는 hook 입니다.
 */
const useMap = () => {
  const kakaoMap = useContext(KakaoMapContext);
  return kakaoMap;
};

export default useMap;
