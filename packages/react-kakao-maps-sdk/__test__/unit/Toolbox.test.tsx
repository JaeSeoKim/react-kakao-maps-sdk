import { expect, jest, test } from "@jest/globals"
import { render, waitFor } from "@testing-library/react"

import { DrawingManager, Map, Toolbox } from "../../src"
import { KakaoMap } from "../mocks/kakaoMapsMock"
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

test("Toolbox adds toolbox control to map with string position", async () => {
  // Arrange
  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <DrawingManager {...drawingManagerRequiredOptions}>
        <Toolbox position="TOPRIGHT" />
      </DrawingManager>
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
    expect(getMockInstances(window.kakao.maps.drawing.Toolbox).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  const toolboxCalls = (
    map.addControl as unknown as {
      mock: { calls: [unknown, unknown][] }
    }
  ).mock.calls

  // Assert
  const topRightCall = toolboxCalls.find(
    ([, position]) => position === window.kakao.maps.ControlPosition.TOPRIGHT,
  )
  expect(topRightCall?.[0]).toEqual(expect.any(HTMLElement))
})

test("Toolbox updates position when position prop changes", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <DrawingManager {...drawingManagerRequiredOptions}>
        <Toolbox position="TOPLEFT" />
      </DrawingManager>
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.drawing.Toolbox).length).toBe(1)
    expect(
      getMockInstances(window.kakao.maps.drawing.DrawingManager).length,
    ).toBe(1)
  })

  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <DrawingManager {...drawingManagerRequiredOptions}>
        <Toolbox position={window.kakao.maps.ControlPosition.BOTTOMRIGHT} />
      </DrawingManager>
    </Map>,
  )

  // Assert
  await waitFor(() => {
    const maps = getMockInstances<KakaoMap>(KakaoMap)
    const hasBottomRightPosition = maps.some((map) => {
      const calls = (
        map.addControl as unknown as {
          mock: { calls: [unknown, unknown][] }
        }
      ).mock.calls

      return calls.some(
        ([, position]) =>
          position === window.kakao.maps.ControlPosition.BOTTOMRIGHT,
      )
    })

    expect(hasBottomRightPosition).toBe(true)
  })
})

test("Toolbox removes control from map on unmount", async () => {
  // Arrange
  const { unmount } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <DrawingManager {...drawingManagerRequiredOptions}>
        <Toolbox />
      </DrawingManager>
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(
      getMockInstances(window.kakao.maps.drawing.DrawingManager).length,
    ).toBe(1)
    expect(getMockInstances(window.kakao.maps.drawing.Toolbox).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  // Act
  unmount()

  // Assert
  const addControlCalls = (
    map.addControl as unknown as {
      mock: { calls: [HTMLElement, unknown][] }
    }
  ).mock.calls
  const firstToolboxElement = addControlCalls[0]?.[0]

  expect(firstToolboxElement).toEqual(expect.any(HTMLElement))
  expect(map.removeControl).toHaveBeenCalledWith(firstToolboxElement)
})

test("Toolbox requires DrawingManager context", () => {
  // Arrange
  const originalError = jest
    .spyOn(console, "error")
    .mockImplementation(() => {})

  // Assert
  expect(() => {
    render(
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "320px", height: "240px" }}
      >
        <Toolbox />
      </Map>,
    )
  }).toThrow("Toolbox must exist inside DrawingManager Component!`")

  originalError.mockRestore()
})
