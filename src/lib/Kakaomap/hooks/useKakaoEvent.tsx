import { useEffect } from "react";

const useKakaoEvent = (
  /**
   * 이벤트 타겟
   */
  target: kakao.maps.event.EventTarget | undefined,
  /**
   * event 타입
   */
  type: string,
  /**
   * 호출될 callback
   */
  callback: Function | undefined
) => {
  useEffect(() => {
    if (!target || !callback) return;
    kakao.maps.event.addListener(target, type, callback);

    return () => {
      kakao.maps.event.removeListener(target, type, callback);
    };
  }, [target, type, callback]);
};

export default useKakaoEvent;
