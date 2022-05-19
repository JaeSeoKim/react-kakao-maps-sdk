import React, {
  Ref,
  useContext,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
} from "react"
import useMap from "../hooks/useMap"
import { DrawingManagerContext } from "./DrawingManager"

export type ToolboxProps = {
  /**
   * Toolbox의 Position를 정의 한다.
   */
  position?: kakao.maps.ControlPosition
}

const Toolbox = React.forwardRef(function (
  { position }: ToolboxProps,
  ref: Ref<kakao.maps.drawing.Toolbox>
) {
  position = position || kakao.maps.ControlPosition.TOP

  const map = useMap("Toolbox")
  const drawingmanager = useContext(DrawingManagerContext)

  if (!drawingmanager) {
    throw new Error("Toolbox must exist inside DrawingManager Component!`")
  }

  const toolbox = useMemo(
    () =>
      new kakao.maps.drawing.Toolbox({
        drawingManager: drawingmanager,
      }),
    [drawingmanager]
  )
  useImperativeHandle(ref, () => toolbox, [toolbox])

  useLayoutEffect(() => {
    const element = toolbox.getElement()
    map.addControl(element, position!)
    return () => {
      map.removeControl(element)
    }
  }, [map, toolbox, position])

  return null
})

export default Toolbox
