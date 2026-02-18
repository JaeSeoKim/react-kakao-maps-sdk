type Listener = () => void

export interface MarkerClustererRedrawVersionStore {
  getSnapshot: () => number
  subscribe: (listener: Listener) => () => void
  requestRedraw: () => void
  completeRedraw: () => void
}

/**
 * marker clusterer의 redraw 요청을 관리하기 위해 사용하는 store 입니다.
 *
 * 기존 render tree 기반으로 redraw 동작은 react 19버전 strict mode에서의 상태 불일치가 발생하여, redraw 요청과 완료를 명시적으로 관리하기 위해 만들었습니다.
 */
export const createMarkerClustererRedrawVersionStore =
  (): MarkerClustererRedrawVersionStore => {
    let version = 0
    const listeners = new Set<Listener>()

    return {
      getSnapshot: () => version,
      subscribe: (listener) => {
        listeners.add(listener)
        return () => listeners.delete(listener)
      },
      requestRedraw: () => {
        version += 1
        listeners.forEach((listener) => listener())
      },
      completeRedraw: () => {
        version = 0
        listeners.forEach((listener) => listener())
        return
      },
    }
  }
