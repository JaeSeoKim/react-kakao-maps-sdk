import { useEffect } from "react"

const useKakaoEvent = <T extends kakao.maps.event.EventTarget>(
  /**
   * 이벤트 타겟
   */
  target: T | undefined,
  /**
   * event 타입
   */
  type: string,
  /**
   * 호출될 callback
   */
  callback:
    | ((target: T, ...args: kakao.maps.event.MouseEvent[]) => void)
    | undefined
) => {
  useEffect(() => {
    if (!target || !callback) return

    const wrapCallback = (mouseEvent?: kakao.maps.event.MouseEvent) => {
      if (mouseEvent === undefined) return callback(target)
      else return callback(target, mouseEvent)
    }

    kakao.maps.event.addListener(target, type, wrapCallback)

    return () => {
      kakao.maps.event.removeListener(target, type, wrapCallback)
    }
  }, [target, type, callback])
}

export default useKakaoEvent
