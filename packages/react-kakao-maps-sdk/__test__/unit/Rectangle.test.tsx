import { expect, jest, test } from "@jest/globals"
import { act, render, waitFor } from "@testing-library/react"

import { Map, Rectangle, type RectangleProps } from "../../src"
import { KakaoMap, Rectangle as MockRectangle } from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

const MAP_CENTER = { lat: 33.450701, lng: 126.570667 }
const MAP_STYLE = { width: "320px", height: "240px" }

const BOUNDS_AT_MOUNT = {
  sw: { lat: 33.0, lng: 126.0 },
  ne: { lat: 34.0, lng: 127.0 },
}

const renderRectangle = (props: RectangleProps) => {
  return render(
    <Map center={MAP_CENTER} style={MAP_STYLE}>
      <Rectangle {...props} />
    </Map>,
  )
}

const waitForRectangle = async () => {
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Rectangle).length).toBe(1)
  })

  const [rectangle] = getMockInstances<MockRectangle>(MockRectangle)
  return rectangle
}

describe("Rectangle", () => {
  test("given Rectangle is rendered, then one rectangle overlay instance is created", async () => {
    // Arrange
    renderRectangle({ bounds: BOUNDS_AT_MOUNT })

    // Act
    const rectangle = await waitForRectangle()

    // Assert
    expect(rectangle).toBeDefined()
  })

  test("given Rectangle already exists, when rerendered, then the same overlay instance is reused", async () => {
    // Arrange
    const { rerender } = renderRectangle({ bounds: BOUNDS_AT_MOUNT })

    await waitForRectangle()
    const [instanceBeforeRerender] =
      getMockInstances<MockRectangle>(MockRectangle)

    // Act
    rerender(
      <Map center={MAP_CENTER} style={MAP_STYLE}>
        <Rectangle
          bounds={{
            sw: { lat: 33.1, lng: 126.1 },
            ne: { lat: 34.1, lng: 127.1 },
          }}
        />
      </Map>,
    )

    // Assert
    await waitFor(() => {
      expect(getMockInstances(window.kakao.maps.Rectangle).length).toBe(1)
    })
    const [instanceAfterRerender] =
      getMockInstances<MockRectangle>(MockRectangle)
    expect(instanceAfterRerender).toBe(instanceBeforeRerender)
  })

  test("given Rectangle mounts, then it is attached to the current map", async () => {
    // Arrange
    renderRectangle({ bounds: BOUNDS_AT_MOUNT })

    // Act
    const rectangle = await waitForRectangle()

    // Assert
    const [map] = getMockInstances<kakao.maps.Map>(KakaoMap)
    expect(rectangle.setMap).toHaveBeenCalledWith(map)
  })

  test("given Rectangle unmounts, then it is detached from the map", async () => {
    // Arrange
    const { unmount } = renderRectangle({ bounds: BOUNDS_AT_MOUNT })
    const rectangle = await waitForRectangle()

    // Act
    unmount()

    // Assert
    expect(rectangle.setMap).toHaveBeenLastCalledWith(null)
  })

  test("given onCreate is provided, when Rectangle mounts, then it receives the created rectangle", async () => {
    // Arrange
    const onCreate = jest.fn()
    renderRectangle({ bounds: BOUNDS_AT_MOUNT, onCreate })

    // Act
    const rectangle = await waitForRectangle()

    // Assert
    expect(onCreate).toHaveBeenCalledWith(rectangle)
  })

  test("given initial bounds, when Rectangle mounts, then bounds are applied", async () => {
    // Arrange
    renderRectangle({ bounds: BOUNDS_AT_MOUNT })

    // Act
    const rectangle = await waitForRectangle()

    // Assert
    expect(rectangle.setBounds).toHaveBeenCalledWith(
      new window.kakao.maps.LatLngBounds(
        new window.kakao.maps.LatLng(
          BOUNDS_AT_MOUNT.sw.lat,
          BOUNDS_AT_MOUNT.sw.lng,
        ),
        new window.kakao.maps.LatLng(
          BOUNDS_AT_MOUNT.ne.lat,
          BOUNDS_AT_MOUNT.ne.lng,
        ),
      ),
    )
  })

  test("given bounds change, when Rectangle rerenders, then bounds are updated", async () => {
    // Arrange
    const boundsAfterRerender = {
      sw: { lat: 33.1, lng: 126.1 },
      ne: { lat: 34.1, lng: 127.1 },
    }
    const expectedBoundsAfterRerender = new window.kakao.maps.LatLngBounds(
      new window.kakao.maps.LatLng(
        boundsAfterRerender.sw.lat,
        boundsAfterRerender.sw.lng,
      ),
      new window.kakao.maps.LatLng(
        boundsAfterRerender.ne.lat,
        boundsAfterRerender.ne.lng,
      ),
    )

    const { rerender } = renderRectangle({ bounds: BOUNDS_AT_MOUNT })

    const rectangle = await waitForRectangle()
    rectangle.setBounds.mockClear()

    // Act
    rerender(
      <Map center={MAP_CENTER} style={MAP_STYLE}>
        <Rectangle bounds={boundsAfterRerender} />
      </Map>,
    )

    // Assert
    await waitFor(() => {
      expect(rectangle.setBounds).toHaveBeenCalledWith(
        expectedBoundsAfterRerender,
      )
    })
  })

  test("given initial zIndex, when Rectangle mounts, then zIndex is applied", async () => {
    // Arrange
    renderRectangle({ bounds: BOUNDS_AT_MOUNT, zIndex: 3 })

    // Act
    const rectangle = await waitForRectangle()

    // Assert
    expect(rectangle.setZIndex).toHaveBeenCalledWith(3)
  })

  test("given zIndex is undefined, when Rectangle mounts, then default zIndex 0 is kept", async () => {
    // Arrange
    renderRectangle({ bounds: BOUNDS_AT_MOUNT })

    // Act
    const rectangle = await waitForRectangle()

    // Assert
    expect(rectangle.setZIndex).toHaveBeenCalledWith(0)
  })

  test("given initial style props, when Rectangle mounts, then style options are applied", async () => {
    // Arrange
    const styleAtMount = {
      fillColor: "#00ff00",
      fillOpacity: 0.2,
      strokeColor: "#ff0000",
      strokeOpacity: 0.6,
      strokeStyle: "solid" as const,
      strokeWeight: 3,
    }

    renderRectangle({ bounds: BOUNDS_AT_MOUNT, ...styleAtMount })

    // Act
    const rectangle = await waitForRectangle()

    // Assert
    expect(rectangle.setOptions).toHaveBeenCalledWith(styleAtMount)
  })

  test("given style props change, when Rectangle rerenders, then style options are updated", async () => {
    // Arrange
    const styleBeforeRerender = {
      fillColor: "#00ff00",
      fillOpacity: 0.2,
      strokeColor: "#ff0000",
      strokeOpacity: 0.6,
      strokeStyle: "solid" as const,
      strokeWeight: 3,
    }
    const styleAfterRerender = {
      fillColor: "#0000ff",
      fillOpacity: 0.7,
      strokeColor: "#111111",
      strokeOpacity: 0.9,
      strokeStyle: "dash" as const,
      strokeWeight: 7,
    }

    const { rerender } = renderRectangle({
      bounds: BOUNDS_AT_MOUNT,
      ...styleBeforeRerender,
    })

    const rectangle = await waitForRectangle()
    rectangle.setOptions.mockClear()

    // Act
    rerender(
      <Map center={MAP_CENTER} style={MAP_STYLE}>
        <Rectangle bounds={BOUNDS_AT_MOUNT} {...styleAfterRerender} />
      </Map>,
    )

    // Assert
    await waitFor(() => {
      expect(rectangle.setOptions).toHaveBeenCalledWith(styleAfterRerender)
    })
  })

  test("given mouseover handler, when mouseover occurs, then callback is invoked", async () => {
    // Arrange
    const onMouseover = jest.fn()
    const mouseEvent = { tag: "mouseover" }
    renderRectangle({ bounds: BOUNDS_AT_MOUNT, onMouseover })

    // Act
    const rectangle = await waitForRectangle()
    act(() => {
      window.kakao.maps.event.trigger(rectangle, "mouseover", mouseEvent)
    })

    // Assert
    expect(onMouseover).toHaveBeenCalledWith(rectangle, mouseEvent)
  })

  test("given mouseout handler, when mouseout occurs, then callback is invoked", async () => {
    // Arrange
    const onMouseout = jest.fn()
    const mouseEvent = { tag: "mouseout" }
    renderRectangle({ bounds: BOUNDS_AT_MOUNT, onMouseout })

    // Act
    const rectangle = await waitForRectangle()
    act(() => {
      window.kakao.maps.event.trigger(rectangle, "mouseout", mouseEvent)
    })

    // Assert
    expect(onMouseout).toHaveBeenCalledWith(rectangle, mouseEvent)
  })

  test("given mousemove handler, when mousemove occurs, then callback is invoked", async () => {
    // Arrange
    const onMousemove = jest.fn()
    const mouseEvent = { tag: "mousemove" }
    renderRectangle({ bounds: BOUNDS_AT_MOUNT, onMousemove })

    // Act
    const rectangle = await waitForRectangle()
    act(() => {
      window.kakao.maps.event.trigger(rectangle, "mousemove", mouseEvent)
    })

    // Assert
    expect(onMousemove).toHaveBeenCalledWith(rectangle, mouseEvent)
  })

  test("given mousedown handler, when mousedown occurs, then callback is invoked", async () => {
    // Arrange
    const onMousedown = jest.fn()
    const mouseEvent = { tag: "mousedown" }
    renderRectangle({ bounds: BOUNDS_AT_MOUNT, onMousedown })

    // Act
    const rectangle = await waitForRectangle()
    act(() => {
      window.kakao.maps.event.trigger(rectangle, "mousedown", mouseEvent)
    })

    // Assert
    expect(onMousedown).toHaveBeenCalledWith(rectangle, mouseEvent)
  })

  test("given click handler, when click occurs, then callback is invoked", async () => {
    // Arrange
    const onClick = jest.fn()
    const mouseEvent = { tag: "click" }
    renderRectangle({ bounds: BOUNDS_AT_MOUNT, onClick })

    // Act
    const rectangle = await waitForRectangle()
    act(() => {
      window.kakao.maps.event.trigger(rectangle, "click", mouseEvent)
    })

    // Assert
    expect(onClick).toHaveBeenCalledWith(rectangle, mouseEvent)
  })

  test("given Rectangle is unmounted, when click occurs afterward, then callback is not invoked", async () => {
    // Arrange
    const onClick = jest.fn()
    const { unmount } = renderRectangle({ bounds: BOUNDS_AT_MOUNT, onClick })
    const rectangle = await waitForRectangle()

    // Act
    unmount()
    act(() => {
      window.kakao.maps.event.trigger(rectangle, "click", {
        tag: "after-unmount",
      })
    })

    // Assert
    expect(onClick).not.toHaveBeenCalled()
  })
})
