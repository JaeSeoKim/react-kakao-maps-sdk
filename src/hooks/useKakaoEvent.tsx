import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"

const useKakaoEvent = <T extends kakao.maps.event.EventTarget>(
  /**
   * 이벤트 타겟
   */
  target: T | undefined,
  /**
   * event 타입
   */
  type: "center_changed"|"zoom_start"|"zoom_changed"|"bounds_changed"|"click"|"dblclick"|"rightclick"|"mouseover"|"mouseout"|"mousemove"|"mousedown"|"dragstart"|"drag"|"dragend"|"idle"|"tilesloaded"|"maptypeid_changed"|"clusterclick"|"clusterover"|"clusterout"|"clusterdblclick"|"clusterrightclick"|"clustered"|"init"|"panoid_changed"|"viewpoint_changed"|"position_changed",
  /**
   * 호출될 callback
   */
  callback: ((target: T, ...args: any[]) => void) | undefined
) => {
  useIsomorphicLayoutEffect(() => {
    if (!target || !callback) return

    const wrapCallback = (...arg: any[]) => {
      if (arg === undefined) return callback(target)
      else return callback(target, ...arg)
    }

    kakao.maps.event.addListener(target, type, wrapCallback)

    return () => {
      kakao.maps.event.removeListener(target, type, wrapCallback)
    }
  }, [target, type, callback])
}

export default useKakaoEvent
