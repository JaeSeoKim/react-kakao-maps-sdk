import React, { useImperativeHandle, useLayoutEffect, useMemo } from "react"
import { useMap } from "../hooks/useMap"

export interface AbstractOverlayProps {
  /**
   * AbstractOverlay에서 필요한 `onAdd` 함수를 구현 합니다.
   * 위치를 재조정할 필요가 있을 때 호출된다.
   * 이 함수 내에서 엘리먼트의 위치를 잡아주어야 한다.
   *
   * 이때 arrow 함수가 아닌 일반 funtion으로 하여 this 바인딩이 되도록 하여 AbstractOverlay를 상속 받은 객체에 접근하여 필요 기능을 정의 합니다.
   * ```tsx
   * const panel = (this as kakao.maps.AbstractOverlay).getPanels().overlayLayer
   * panel.appendChild(node.current)
   * ```
   */
  draw: () => void
  /**
   * 지도에 올릴 때 호출된다.
   * setMap(map) 을 실행하면 이 함수가 실행된다.
   * 이 함수 내에서 생성된 `DOM` 객체를 MapPanels에 자식 노드로 넣어주도록 한다.
   *
   * ```tsx
   * var projection = this.getProjection()
   * var point = projection.pointFromCoords(positionLatlng)
   * var width = node.current.offsetWidth
   * var height = node.current.offsetHeight
   *
   * console.log(point, width, height)
   *
   * node.current.style.left = point.x - width / 2 + "px"
   * node.current.style.top = point.y - height / 2 + "px"
   * ```
   */
  onAdd: () => void

  /**
   * 지도에서 제거할 때 호출된다.
   * setMap(null) 을 실행하면 이 함수가 실행된다.
   * 이 함수 내에서 MapPanels에 자식 노드로 넣어준 엘리먼트를 제거하도록 한다.
   *
   * ```tsx
   * this.node.parentNode.removeChild(this.node);
   * ```
   */
  onRemove: () => void

  /**
   * 생성된 kakao.maps.AbstractOverlay 객체를 받을 수 있는 CallBack 함수 입니다.
   */
  onCreate?: (target: kakao.maps.AbstractOverlay) => void
}

/**
 * `API` 사용자가 직접 정의할 수 있는 오버레이.
 * AbstractOverlay를 상속 받아 사용할 객체를 생성하고 prototype을 연결해 준다.
 * 온전히 동작하는 오버레이를 만들고자 한다면 3가지 인터페이스 메소드( onAdd, draw, onRemove )를 구현해야 한다.
 *
 * 해당 Component 내부에서 `ReactAbstractOveraly` class를 만들어 `onAdd`, `draw`, `onRemove` 를 연결한 후 React Life Cycle에 맞춰 `setMap` 를 자동으로 호출 합니다.
 *
 * *경고* `draw`, `onAdd`, `onRemove` 의 경우 반드시 익명함수가 **아닌** 형태로 만들어서 전달해야 합니다.
 * `this.~` 를 통한 접근이 가능하니 해당 부분을 이용해서 구현 해주세요!
 *
 * ### Example Code
 *
 * ```jsx live
 * function () {
 *  const TooltipMarker = ({
 *    position,
 *  }) => {
 *    const node = useRef(document.createElement("div"))
 *
 *    const positionLatlng = useMemo(() => {
 *      return new kakao.maps.LatLng(position.lat, position.lng)
 *    }, [position.lat, position.lng])
 *
 *    function onAdd() {
 *      const panel = this.getPanels()
 *        .overlayLayer
 *      panel.appendChild(node.current)
 *    }
 *
 *    function onRemove() {
 *      node.current.parentNode.removeChild(node.current)
 *    }
 *
 *    function draw() {
 *      var projection = this.getProjection()
 *      var point = projection.pointFromCoords(positionLatlng)
 *      var width = node.current.offsetWidth
 *      var height = node.current.offsetHeight
 *
 *      console.log(point, width, height)
 *
 *      node.current.style.left = point.x - width / 2 + "px"
 *      node.current.style.top = point.y - height / 2 + "px"
 *    }
 *
 *    useEffect(() => {
 *      node.current.style.position = "absolute"
 *      node.current.style.whiteSpace = "nowrap"
 *    }, [])
 *
 *    return (
 *      <>
 *        <AbstractOverlay onAdd={onAdd} onRemove={onRemove} draw={draw} />
 *        {ReactDOM.createPortal(
 *          <div
 *            style={{
 *              color: "#000",
 *              backgroundColor: "#fff",
 *              padding: "5px",
 *              borderRadius: "15px",
 *            }}
 *          >
 *            Hello Marker!
 *          </div>,
 *          node.current
 *        )}
 *      </>
 *    )
 *  }
 *
 *  return (
 *    <>
 *      <Map // 지도를 표시할 Container
 *        center={{
 *          // 지도의 중심좌표
 *          lat: 37.54699,
 *          lng: 127.09598,
 *        }}
 *        style={{
 *          // 지도의 크기
 *          width: "100%",
 *          height: "450px",
 *        }}
 *        level={3} // 지도의 확대 레벨
 *      >
 *        <TooltipMarker
 *          position={{
 *            lat: 37.54699,
 *            lng: 127.09598,
 *          }}
 *        />
 *      </Map>
 *    </>
 *  )
 *}
 * ```
 */
export const AbstractOverlay = React.forwardRef<
  kakao.maps.AbstractOverlay,
  AbstractOverlayProps
>(({ draw, onAdd, onRemove, onCreate }, ref) => {
  const map = useMap()

  const reactAbstractOverlay = useMemo(() => {
    class ReactAbstractOveraly extends kakao.maps.AbstractOverlay {
      constructor(draw: () => void, onAdd: () => void, onRemove: () => void) {
        super()
        this.draw = draw
        this.onAdd = onAdd
        this.onRemove = onRemove
      }
    }
    const overlay = new ReactAbstractOveraly(draw, onAdd, onRemove)
    return overlay
  }, [draw, onAdd, onRemove])

  useImperativeHandle(ref, () => reactAbstractOverlay, [reactAbstractOverlay])

  useLayoutEffect(() => {
    reactAbstractOverlay.setMap(map)

    return () => {
      reactAbstractOverlay.setMap(null)
    }
  }, [map, reactAbstractOverlay])

  useLayoutEffect(() => {
    if (onCreate) onCreate(reactAbstractOverlay)
  }, [reactAbstractOverlay, onCreate])

  return null
})
