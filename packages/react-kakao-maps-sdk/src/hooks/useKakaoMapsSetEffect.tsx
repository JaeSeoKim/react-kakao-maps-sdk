import { _Parameters } from "../types"
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect"

/**
 * kakao.maps.event.EventTarget의 메소드를 호출하는 hook!
 *
 * @param target
 * @param method 메소드 이름 (ex. "setCenter")
 * @param args 메소드 arguments 이때 넘겨지는 객체가 `undefined` 일 수 도있는 경우 `!` 연산자를 통해서 무시할 것.!
 */
export const useKakaoMapsSetEffect = <
  T extends kakao.maps.event.EventTarget,
  K extends keyof T,
>(
  target: T | undefined,
  method: K,
  ...args: _Parameters<T[K]>
) => {
  useIsomorphicLayoutEffect(() => {
    if (!target || args.every((arg) => typeof arg === "undefined")) return
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    target[method].call(target, ...args)
  }, [target, method, ...args])
}
