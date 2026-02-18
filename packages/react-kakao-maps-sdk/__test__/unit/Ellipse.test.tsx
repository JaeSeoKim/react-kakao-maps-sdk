import { expect, jest, test } from "@jest/globals"
import { act, render, waitFor } from "@testing-library/react"

import { Ellipse, type EllipseProps, Map } from "../../src"
import { Ellipse as MockEllipse, KakaoMap } from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

const MAP_CENTER = { lat: 33.450701, lng: 126.570667 }
const MAP_STYLE = { width: "320px", height: "240px" }

const renderEllipse = (props: EllipseProps) => {
  return render(
    <Map center={MAP_CENTER} style={MAP_STYLE}>
      <Ellipse {...props} />
    </Map>,
  )
}

const waitForEllipse = async () => {
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Ellipse).length).toBe(1)
  })

  const [ellipse] = getMockInstances<MockEllipse>(MockEllipse)
  return ellipse
}

describe("Ellipse", () => {
  test("given Ellipse is rendered, then one ellipse overlay instance is created", async () => {
    // Arrange
    renderEllipse({ center: MAP_CENTER, rx: 10, ry: 20 })

    // Act
    const ellipse = await waitForEllipse()

    // Assert
    expect(ellipse).toBeDefined()
  })

  test("given Ellipse already exists, when rerendered, then the same overlay instance is reused", async () => {
    // Arrange
    const { rerender } = renderEllipse({ center: MAP_CENTER, rx: 10, ry: 20 })

    await waitForEllipse()
    const [instanceBeforeRerender] = getMockInstances<MockEllipse>(MockEllipse)

    // Act
    rerender(
      <Map center={MAP_CENTER} style={MAP_STYLE}>
        <Ellipse center={{ lat: 33.560701, lng: 126.670667 }} rx={30} ry={40} />
      </Map>,
    )

    // Assert
    await waitFor(() => {
      expect(getMockInstances(window.kakao.maps.Ellipse).length).toBe(1)
    })
    const [instanceAfterRerender] = getMockInstances<MockEllipse>(MockEllipse)
    expect(instanceAfterRerender).toBe(instanceBeforeRerender)
  })

  test("given Ellipse mounts, then it is attached to the current map", async () => {
    // Arrange
    renderEllipse({ center: MAP_CENTER, rx: 10, ry: 20 })

    // Act
    const ellipse = await waitForEllipse()

    // Assert
    const [map] = getMockInstances<kakao.maps.Map>(KakaoMap)
    expect(ellipse.setMap).toHaveBeenCalledWith(map)
  })

  test("given Ellipse unmounts, then it is detached from the map", async () => {
    // Arrange
    const { unmount } = renderEllipse({ center: MAP_CENTER, rx: 10, ry: 20 })
    const ellipse = await waitForEllipse()

    // Act
    unmount()

    // Assert
    expect(ellipse.setMap).toHaveBeenLastCalledWith(null)
  })

  test("given onCreate is provided, when Ellipse mounts, then it receives the created ellipse", async () => {
    // Arrange
    const onCreate = jest.fn()
    renderEllipse({ center: MAP_CENTER, rx: 10, ry: 20, onCreate })

    // Act
    const ellipse = await waitForEllipse()

    // Assert
    expect(onCreate).toHaveBeenCalledWith(ellipse)
  })

  test("given initial center, when Ellipse mounts, then position is set from that center", async () => {
    // Arrange
    const expectedPositionOnMount = new window.kakao.maps.LatLng(
      MAP_CENTER.lat,
      MAP_CENTER.lng,
    )

    renderEllipse({ center: MAP_CENTER, rx: 10, ry: 20 })

    // Act
    const ellipse = await waitForEllipse()

    // Assert
    expect(ellipse.setPosition).toHaveBeenCalledWith(expectedPositionOnMount)
  })

  test("given center changes, when Ellipse rerenders, then position is updated", async () => {
    // Arrange
    const centerAfterRerender = { lat: 33.460701, lng: 126.580667 }
    const expectedPositionAfterRerender = new window.kakao.maps.LatLng(
      centerAfterRerender.lat,
      centerAfterRerender.lng,
    )
    const { rerender } = renderEllipse({ center: MAP_CENTER, rx: 10, ry: 20 })

    const ellipse = await waitForEllipse()
    ellipse.setPosition.mockClear()

    // Act
    rerender(
      <Map center={MAP_CENTER} style={MAP_STYLE}>
        <Ellipse center={centerAfterRerender} rx={10} ry={20} />
      </Map>,
    )

    // Assert
    await waitFor(() => {
      expect(ellipse.setPosition).toHaveBeenCalledWith(
        expectedPositionAfterRerender,
      )
    })
  })

  test("given initial rx/ry, when Ellipse mounts, then radius is applied", async () => {
    // Arrange
    renderEllipse({ center: MAP_CENTER, rx: 10, ry: 20 })

    // Act
    const ellipse = await waitForEllipse()

    // Assert
    expect(ellipse.setRadius).toHaveBeenCalledWith(10, 20)
  })

  test("given rx/ry changes, when Ellipse rerenders, then radius is updated", async () => {
    // Arrange
    const { rerender } = renderEllipse({ center: MAP_CENTER, rx: 10, ry: 20 })

    const ellipse = await waitForEllipse()
    ellipse.setRadius.mockClear()

    // Act
    rerender(
      <Map center={MAP_CENTER} style={MAP_STYLE}>
        <Ellipse center={MAP_CENTER} rx={30} ry={40} />
      </Map>,
    )

    // Assert
    await waitFor(() => {
      expect(ellipse.setRadius).toHaveBeenCalledWith(30, 40)
    })
  })

  test("given initial zIndex, when Ellipse mounts, then zIndex is applied", async () => {
    // Arrange
    renderEllipse({ center: MAP_CENTER, rx: 10, ry: 20, zIndex: 3 })

    // Act
    const ellipse = await waitForEllipse()

    // Assert
    expect(ellipse.setZIndex).toHaveBeenCalledWith(3)
  })

  test("given zIndex is undefined, when Ellipse mounts, then default zIndex 0 is kept", async () => {
    // Arrange
    renderEllipse({ center: MAP_CENTER, rx: 10, ry: 20 })

    // Act
    const ellipse = await waitForEllipse()

    // Assert
    expect(ellipse.setZIndex).toHaveBeenCalledWith(0)
  })

  test("given initial style props, when Ellipse mounts, then style options are applied", async () => {
    // Arrange
    const styleAtMount = {
      fillColor: "#ff0000",
      fillOpacity: 0.2,
      strokeColor: "#00ff00",
      strokeOpacity: 0.4,
      strokeStyle: "solid" as const,
      strokeWeight: 4,
    }

    renderEllipse({ center: MAP_CENTER, rx: 10, ry: 20, ...styleAtMount })

    // Act
    const ellipse = await waitForEllipse()

    // Assert
    expect(ellipse.setOptions).toHaveBeenCalledWith(styleAtMount)
  })

  test("given style props change, when Ellipse rerenders, then style options are updated", async () => {
    // Arrange
    const styleBeforeRerender = {
      fillColor: "#ff0000",
      fillOpacity: 0.2,
      strokeColor: "#00ff00",
      strokeOpacity: 0.4,
      strokeStyle: "solid" as const,
      strokeWeight: 4,
    }
    const styleAfterRerender = {
      fillColor: "#0000ff",
      fillOpacity: 0.7,
      strokeColor: "#111111",
      strokeOpacity: 0.9,
      strokeStyle: "dash" as const,
      strokeWeight: 7,
    }

    const { rerender } = renderEllipse({
      center: MAP_CENTER,
      rx: 10,
      ry: 20,
      ...styleBeforeRerender,
    })

    const ellipse = await waitForEllipse()
    ellipse.setOptions.mockClear()

    // Act
    rerender(
      <Map center={MAP_CENTER} style={MAP_STYLE}>
        <Ellipse center={MAP_CENTER} rx={10} ry={20} {...styleAfterRerender} />
      </Map>,
    )

    // Assert
    await waitFor(() => {
      expect(ellipse.setOptions).toHaveBeenCalledWith(styleAfterRerender)
    })
  })

  test("given mouseover handler, when mouseover occurs, then callback is invoked", async () => {
    // Arrange
    const onMouseover = jest.fn()
    const mouseEvent = { tag: "mouseover" }
    renderEllipse({ center: MAP_CENTER, rx: 10, ry: 20, onMouseover })

    // Act
    const ellipse = await waitForEllipse()
    act(() => {
      window.kakao.maps.event.trigger(ellipse, "mouseover", mouseEvent)
    })

    // Assert
    expect(onMouseover).toHaveBeenCalledWith(ellipse, mouseEvent)
  })

  test("given mouseout handler, when mouseout occurs, then callback is invoked", async () => {
    // Arrange
    const onMouseout = jest.fn()
    const mouseEvent = { tag: "mouseout" }
    renderEllipse({ center: MAP_CENTER, rx: 10, ry: 20, onMouseout })

    // Act
    const ellipse = await waitForEllipse()
    act(() => {
      window.kakao.maps.event.trigger(ellipse, "mouseout", mouseEvent)
    })

    // Assert
    expect(onMouseout).toHaveBeenCalledWith(ellipse, mouseEvent)
  })

  test("given mousemove handler, when mousemove occurs, then callback is invoked", async () => {
    // Arrange
    const onMousemove = jest.fn()
    const mouseEvent = { tag: "mousemove" }
    renderEllipse({ center: MAP_CENTER, rx: 10, ry: 20, onMousemove })

    // Act
    const ellipse = await waitForEllipse()
    act(() => {
      window.kakao.maps.event.trigger(ellipse, "mousemove", mouseEvent)
    })

    // Assert
    expect(onMousemove).toHaveBeenCalledWith(ellipse, mouseEvent)
  })

  test("given mousedown handler, when mousedown occurs, then callback is invoked", async () => {
    // Arrange
    const onMousedown = jest.fn()
    const mouseEvent = { tag: "mousedown" }
    renderEllipse({ center: MAP_CENTER, rx: 10, ry: 20, onMousedown })

    // Act
    const ellipse = await waitForEllipse()
    act(() => {
      window.kakao.maps.event.trigger(ellipse, "mousedown", mouseEvent)
    })

    // Assert
    expect(onMousedown).toHaveBeenCalledWith(ellipse, mouseEvent)
  })

  test("given click handler, when click occurs, then callback is invoked", async () => {
    // Arrange
    const onClick = jest.fn()
    const mouseEvent = { tag: "click" }
    renderEllipse({ center: MAP_CENTER, rx: 10, ry: 20, onClick })

    // Act
    const ellipse = await waitForEllipse()
    act(() => {
      window.kakao.maps.event.trigger(ellipse, "click", mouseEvent)
    })

    // Assert
    expect(onClick).toHaveBeenCalledWith(ellipse, mouseEvent)
  })

  test("given Ellipse is unmounted, when click occurs afterward, then callback is not invoked", async () => {
    // Arrange
    const onClick = jest.fn()
    const { unmount } = renderEllipse({
      center: MAP_CENTER,
      rx: 10,
      ry: 20,
      onClick,
    })
    const ellipse = await waitForEllipse()

    // Act
    unmount()
    act(() => {
      window.kakao.maps.event.trigger(ellipse, "click", {
        tag: "after-unmount",
      })
    })

    // Assert
    expect(onClick).not.toHaveBeenCalled()
  })
})
