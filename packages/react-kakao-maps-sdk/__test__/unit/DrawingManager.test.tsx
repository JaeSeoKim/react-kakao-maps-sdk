import { expect, jest, test } from "@jest/globals"
import { act, render, waitFor } from "@testing-library/react"

import { DrawingManager, Map } from "../../src"
import { initializeKakaoMock, KakaoMap } from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

const drawingManagerRequiredOptions = {
  markerOptions: {} as kakao.maps.drawing.MarkerOptions,
  rectangleOptions: {} as kakao.maps.drawing.RectangleOptions,
  circleOptions: {} as kakao.maps.drawing.CircleOptions,
  ellipseOptions: {} as kakao.maps.drawing.EllipseOptions,
  polylineOptions: {} as kakao.maps.drawing.PolylineOptions,
  arrowOptions: {} as kakao.maps.drawing.ArrowOptions,
  polygonOptions: {} as kakao.maps.drawing.PolygonOptions,
}

test("DrawingManager creates instance and passes map in constructor", async () => {
  // Arrange
  const onCreate = jest.fn()
  const polylineOptions = {
    draggable: false,
    editable: false,
    removable: false,
  }

  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <DrawingManager
        {...drawingManagerRequiredOptions}
        polylineOptions={polylineOptions}
        drawingMode={[window.kakao.maps.drawing.OverlayType.POLYLINE]}
        guideTooltip={["draw", "edit"]}
        onCreate={onCreate}
      />
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(
      getMockInstances(window.kakao.maps.drawing.DrawingManager).length,
    ).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  const [drawingManager] = getMockInstances<
    kakao.maps.drawing.DrawingManager & {
      setConstructorOptions: jest.MockedFunction<(options: unknown) => void>
    }
  >(window.kakao.maps.drawing.DrawingManager)
  const [constructorOptions] =
    drawingManager.setConstructorOptions.mock.calls[0]
  const passedOptions = constructorOptions as {
    drawingMode?: unknown[]
    guideTooltip?: unknown[]
    map?: unknown
    polylineOptions?: unknown
  }

  // Assert
  expect(passedOptions?.map).toBe(map)
  expect(passedOptions?.drawingMode).toEqual([
    window.kakao.maps.drawing.OverlayType.POLYLINE,
  ])
  expect(passedOptions?.guideTooltip).toEqual(["draw", "edit"])
  expect(passedOptions?.polylineOptions).toEqual(polylineOptions)
  expect(onCreate).toHaveBeenCalledWith(drawingManager)
})

test("DrawingManager wires all supported callbacks", async () => {
  // Arrange
  const onSelect = jest.fn()
  const onDrawstart = jest.fn()
  const onDraw = jest.fn()
  const onDrawend = jest.fn()
  const onDrawnext = jest.fn()
  const onCancle = jest.fn()
  const onRemove = jest.fn()
  const onStateChanged = jest.fn()

  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <DrawingManager
        {...drawingManagerRequiredOptions}
        onSelect={onSelect}
        onDrawstart={onDrawstart}
        onDraw={onDraw}
        onDrawend={onDrawend}
        onDrawnext={onDrawnext}
        onCancle={onCancle}
        onRemove={onRemove}
        onStateChanged={onStateChanged}
        markerOptions={{
          draggable: false,
          removable: false,
        }}
      />
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(
      getMockInstances(window.kakao.maps.drawing.DrawingManager).length,
    ).toBe(1)
  })

  const [drawingManager] = getMockInstances<kakao.maps.drawing.DrawingManager>(
    window.kakao.maps.drawing.DrawingManager,
  )

  act(() => {
    window.kakao.maps.event.trigger(drawingManager, "select", {
      action: "select",
    })
    window.kakao.maps.event.trigger(drawingManager, "drawstart", {
      action: "drawstart",
    })
    window.kakao.maps.event.trigger(drawingManager, "draw", {
      action: "draw",
    })
    window.kakao.maps.event.trigger(drawingManager, "drawend", {
      action: "drawend",
    })
    window.kakao.maps.event.trigger(drawingManager, "drawnext", {
      action: "drawnext",
    })
    window.kakao.maps.event.trigger(drawingManager, "cancel", {
      action: "cancel",
    })
    window.kakao.maps.event.trigger(drawingManager, "remove", {
      action: "remove",
    })
    window.kakao.maps.event.trigger(drawingManager, "state_changed")
  })

  // Assert
  expect(onSelect).toHaveBeenCalledWith(drawingManager, expect.any(Object))
  expect(onDrawstart).toHaveBeenCalledWith(drawingManager, expect.any(Object))
  expect(onDraw).toHaveBeenCalledWith(drawingManager, expect.any(Object))
  expect(onDrawend).toHaveBeenCalledWith(drawingManager, expect.any(Object))
  expect(onDrawnext).toHaveBeenCalledWith(drawingManager, expect.any(Object))
  expect(onCancle).toHaveBeenCalledWith(drawingManager, expect.any(Object))
  expect(onRemove).toHaveBeenCalledWith(drawingManager, expect.any(Object))
  expect(onStateChanged).toHaveBeenCalledWith(drawingManager)
})

test("DrawingManager only initializes with constructor props once", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <DrawingManager
        {...drawingManagerRequiredOptions}
        drawingMode={[window.kakao.maps.drawing.OverlayType.POLYLINE]}
        guideTooltip={["draw"]}
      />
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(
      getMockInstances(window.kakao.maps.drawing.DrawingManager).length,
    ).toBe(1)
  })

  const [firstManager] = getMockInstances<
    kakao.maps.drawing.DrawingManager & {
      setConstructorOptions: jest.MockedFunction<(options: unknown) => void>
    }
  >(window.kakao.maps.drawing.DrawingManager)

  const [firstConstructorOptions] =
    firstManager.setConstructorOptions.mock.calls[0]

  // Act
  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <DrawingManager
        {...drawingManagerRequiredOptions}
        drawingMode={[window.kakao.maps.drawing.OverlayType.POLYGON]}
        guideTooltip={["drag"]}
      />
    </Map>,
  )

  // Assert
  await waitFor(() => {
    const [secondManager] = getMockInstances<
      kakao.maps.drawing.DrawingManager & {
        setConstructorOptions: jest.MockedFunction<(options: unknown) => void>
      }
    >(window.kakao.maps.drawing.DrawingManager)

    expect(secondManager).toBe(firstManager)
    expect(secondManager.setConstructorOptions).toHaveBeenCalledTimes(1)
  })

  expect(firstConstructorOptions).toMatchObject({
    drawingMode: [window.kakao.maps.drawing.OverlayType.POLYLINE],
    guideTooltip: ["draw"],
  })
})

test("DrawingManager warns and renders null when drawing library is missing", async () => {
  // Arrange
  initializeKakaoMock({ libraries: { drawing: false } })
  const warn = jest.spyOn(console, "warn").mockImplementation(() => {})

  // Act
  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <DrawingManager
        {...drawingManagerRequiredOptions}
        markerOptions={{
          draggable: false,
          removable: false,
        }}
      />
    </Map>,
  )

  // Assert
  await waitFor(() => {
    expect(warn).toHaveBeenCalled()
  })

  warn.mockRestore()
})
