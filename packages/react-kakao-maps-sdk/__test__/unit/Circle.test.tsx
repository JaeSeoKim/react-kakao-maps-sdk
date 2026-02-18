import { expect, jest, test } from "@jest/globals"
import { act, render, waitFor } from "@testing-library/react"

import { Circle, type CircleProps, Map } from "../../src"
import { Circle as MockCircle, KakaoMap } from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

const MAP_CENTER = { lat: 33.450701, lng: 126.570667 }
const MAP_STYLE = { width: "320px", height: "240px" }

const renderCircle = (props: CircleProps) => {
  return render(
    <Map center={MAP_CENTER} style={MAP_STYLE}>
      <Circle {...props} />
    </Map>,
  )
}

const waitForCircle = async () => {
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Circle).length).toBe(1)
  })

  const [circle] = getMockInstances<MockCircle>(MockCircle)
  return circle
}

describe("Circle", () => {
  test("given Circle is rendered, then one circle overlay instance is created", async () => {
    // Arrange
    const centerAtRender = { lat: 33.450701, lng: 126.570667 }
    const radiusAtRender = 100

    renderCircle({ center: centerAtRender, radius: radiusAtRender })

    // Act
    const circle = await waitForCircle()

    // Assert
    expect(circle).toBeDefined()
  })

  test("given Circle already exists, when rerendered, then the same overlay instance is reused", async () => {
    // Arrange
    const centerBeforeRerender = { lat: 33.450701, lng: 126.570667 }
    const radiusBeforeRerender = 100
    const centerAfterRerender = { lat: 33.560701, lng: 126.670667 }
    const radiusAfterRerender = 250

    const { rerender } = renderCircle({
      center: centerBeforeRerender,
      radius: radiusBeforeRerender,
    })

    await waitForCircle()
    const [instanceBeforeRerender] = getMockInstances<MockCircle>(MockCircle)

    // Act
    rerender(
      <Map center={MAP_CENTER} style={MAP_STYLE}>
        <Circle center={centerAfterRerender} radius={radiusAfterRerender} />
      </Map>,
    )

    // Assert
    await waitFor(() => {
      expect(getMockInstances(window.kakao.maps.Circle).length).toBe(1)
    })
    const [instanceAfterRerender] = getMockInstances<MockCircle>(MockCircle)
    expect(instanceAfterRerender).toBe(instanceBeforeRerender)
  })

  test("given Circle mounts, then it is attached to the current map", async () => {
    // Arrange
    const centerAtMount = { lat: 33.450701, lng: 126.570667 }
    const radiusAtMount = 100

    renderCircle({ center: centerAtMount, radius: radiusAtMount })

    // Act
    const circle = await waitForCircle()

    // Assert
    const [map] = getMockInstances<kakao.maps.Map>(KakaoMap)
    expect(circle.setMap).toHaveBeenCalledWith(map)
  })

  test("given Circle unmounts, then it is detached from the map", async () => {
    // Arrange
    const centerAtMount = { lat: 33.450701, lng: 126.570667 }
    const radiusAtMount = 100

    const { unmount } = renderCircle({
      center: centerAtMount,
      radius: radiusAtMount,
    })
    const circle = await waitForCircle()

    // Act
    unmount()

    // Assert
    expect(circle.setMap).toHaveBeenLastCalledWith(null)
  })

  test("given onCreate is provided, when Circle mounts, then it receives the created circle", async () => {
    // Arrange
    const centerAtMount = { lat: 33.450701, lng: 126.570667 }
    const radiusAtMount = 100
    const onCreate = jest.fn()

    renderCircle({ center: centerAtMount, radius: radiusAtMount, onCreate })

    // Act
    const circle = await waitForCircle()

    // Assert
    expect(onCreate).toHaveBeenCalledWith(circle)
  })

  test("given initial center, when Circle mounts, then position is set from that center", async () => {
    // Arrange
    const centerAtMount = { lat: 33.450701, lng: 126.570667 }
    const radiusAtMount = 100
    const expectedPositionOnMount = new window.kakao.maps.LatLng(
      centerAtMount.lat,
      centerAtMount.lng,
    )

    renderCircle({ center: centerAtMount, radius: radiusAtMount })

    // Act
    const circle = await waitForCircle()

    // Assert
    expect(circle.setPosition).toHaveBeenCalledWith(expectedPositionOnMount)
  })

  test("given center changes, when Circle rerenders, then position is updated", async () => {
    // Arrange
    const centerBeforeRerender = { lat: 33.450701, lng: 126.570667 }
    const centerAfterRerender = { lat: 33.560701, lng: 126.670667 }
    const radiusAtBothRenders = 100
    const expectedPositionAfterRerender = new window.kakao.maps.LatLng(
      centerAfterRerender.lat,
      centerAfterRerender.lng,
    )

    const { rerender } = renderCircle({
      center: centerBeforeRerender,
      radius: radiusAtBothRenders,
    })

    const circle = await waitForCircle()
    circle.setPosition.mockClear()

    // Act
    rerender(
      <Map center={MAP_CENTER} style={MAP_STYLE}>
        <Circle center={centerAfterRerender} radius={radiusAtBothRenders} />
      </Map>,
    )

    // Assert
    await waitFor(() => {
      expect(circle.setPosition).toHaveBeenCalledWith(
        expectedPositionAfterRerender,
      )
    })
  })

  test("given initial radius, when Circle mounts, then radius is applied", async () => {
    // Arrange
    const centerAtMount = { lat: 33.450701, lng: 126.570667 }
    const radiusAtMount = 100

    renderCircle({ center: centerAtMount, radius: radiusAtMount })

    // Act
    const circle = await waitForCircle()

    // Assert
    expect(circle.setRadius).toHaveBeenCalledWith(radiusAtMount)
  })

  test("given radius changes, when Circle rerenders, then radius is updated", async () => {
    // Arrange
    const centerAtBothRenders = { lat: 33.450701, lng: 126.570667 }
    const radiusBeforeRerender = 100
    const radiusAfterRerender = 250

    const { rerender } = renderCircle({
      center: centerAtBothRenders,
      radius: radiusBeforeRerender,
    })

    const circle = await waitForCircle()
    circle.setRadius.mockClear()

    // Act
    rerender(
      <Map center={MAP_CENTER} style={MAP_STYLE}>
        <Circle center={centerAtBothRenders} radius={radiusAfterRerender} />
      </Map>,
    )

    // Assert
    await waitFor(() => {
      expect(circle.setRadius).toHaveBeenCalledWith(radiusAfterRerender)
    })
  })

  test("given initial zIndex, when Circle mounts, then zIndex is applied", async () => {
    // Arrange
    const centerAtMount = { lat: 33.450701, lng: 126.570667 }
    const radiusAtMount = 100
    const zIndexAtMount = 3

    renderCircle({
      center: centerAtMount,
      radius: radiusAtMount,
      zIndex: zIndexAtMount,
    })

    // Act
    const circle = await waitForCircle()

    // Assert
    expect(circle.setZIndex).toHaveBeenCalledWith(zIndexAtMount)
  })

  test("given zIndex is undefined, when Circle mounts, then default zIndex 0 is kept", async () => {
    // Arrange
    const centerAtMount = { lat: 33.450701, lng: 126.570667 }
    const radiusAtMount = 100

    renderCircle({ center: centerAtMount, radius: radiusAtMount })

    // Act
    const circle = await waitForCircle()

    // Assert
    expect(circle.setZIndex).toHaveBeenCalledWith(0)
  })

  test("given initial style props, when Circle mounts, then style options are applied", async () => {
    // Arrange
    const centerAtMount = { lat: 33.450701, lng: 126.570667 }
    const radiusAtMount = 100
    const styleAtMount = {
      fillColor: "#ff0000",
      fillOpacity: 0.2,
      strokeColor: "#00ff00",
      strokeOpacity: 0.4,
      strokeStyle: "solid" as const,
      strokeWeight: 4,
    }

    renderCircle({
      center: centerAtMount,
      radius: radiusAtMount,
      ...styleAtMount,
    })

    // Act
    const circle = await waitForCircle()

    // Assert
    expect(circle.setOptions).toHaveBeenCalledWith(styleAtMount)
  })

  test("given style props change, when Circle rerenders, then style options are updated", async () => {
    // Arrange
    const centerAtBothRenders = { lat: 33.450701, lng: 126.570667 }
    const radiusAtBothRenders = 100
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

    const { rerender } = renderCircle({
      center: centerAtBothRenders,
      radius: radiusAtBothRenders,
      ...styleBeforeRerender,
    })

    const circle = await waitForCircle()
    circle.setOptions.mockClear()

    // Act
    rerender(
      <Map center={MAP_CENTER} style={MAP_STYLE}>
        <Circle
          center={centerAtBothRenders}
          radius={radiusAtBothRenders}
          {...styleAfterRerender}
        />
      </Map>,
    )

    // Assert
    await waitFor(() => {
      expect(circle.setOptions).toHaveBeenCalledWith(styleAfterRerender)
    })
  })

  test("given mouseover handler, when mouseover occurs, then callback is invoked", async () => {
    // Arrange
    const centerAtMount = { lat: 33.450701, lng: 126.570667 }
    const radiusAtMount = 100
    const onMouseover = jest.fn()
    const emittedMouseoverEvent = { tag: "mouseover" }

    renderCircle({
      center: centerAtMount,
      radius: radiusAtMount,
      onMouseover,
    })

    // Act
    const circle = await waitForCircle()
    act(() => {
      window.kakao.maps.event.trigger(
        circle,
        "mouseover",
        emittedMouseoverEvent,
      )
    })

    // Assert
    expect(onMouseover).toHaveBeenCalledWith(circle, emittedMouseoverEvent)
  })

  test("given mouseout handler, when mouseout occurs, then callback is invoked", async () => {
    // Arrange
    const centerAtMount = { lat: 33.450701, lng: 126.570667 }
    const radiusAtMount = 100
    const onMouseout = jest.fn()
    const emittedMouseoutEvent = { tag: "mouseout" }

    renderCircle({ center: centerAtMount, radius: radiusAtMount, onMouseout })

    // Act
    const circle = await waitForCircle()
    act(() => {
      window.kakao.maps.event.trigger(circle, "mouseout", emittedMouseoutEvent)
    })

    // Assert
    expect(onMouseout).toHaveBeenCalledWith(circle, emittedMouseoutEvent)
  })

  test("given mousemove handler, when mousemove occurs, then callback is invoked", async () => {
    // Arrange
    const centerAtMount = { lat: 33.450701, lng: 126.570667 }
    const radiusAtMount = 100
    const onMousemove = jest.fn()
    const emittedMousemoveEvent = { tag: "mousemove" }

    renderCircle({ center: centerAtMount, radius: radiusAtMount, onMousemove })

    // Act
    const circle = await waitForCircle()
    act(() => {
      window.kakao.maps.event.trigger(
        circle,
        "mousemove",
        emittedMousemoveEvent,
      )
    })

    // Assert
    expect(onMousemove).toHaveBeenCalledWith(circle, emittedMousemoveEvent)
  })

  test("given mousedown handler, when mousedown occurs, then callback is invoked", async () => {
    // Arrange
    const centerAtMount = { lat: 33.450701, lng: 126.570667 }
    const radiusAtMount = 100
    const onMousedown = jest.fn()
    const emittedMousedownEvent = { tag: "mousedown" }

    renderCircle({ center: centerAtMount, radius: radiusAtMount, onMousedown })

    // Act
    const circle = await waitForCircle()
    act(() => {
      window.kakao.maps.event.trigger(
        circle,
        "mousedown",
        emittedMousedownEvent,
      )
    })

    // Assert
    expect(onMousedown).toHaveBeenCalledWith(circle, emittedMousedownEvent)
  })

  test("given click handler, when click occurs, then callback is invoked", async () => {
    // Arrange
    const centerAtMount = { lat: 33.450701, lng: 126.570667 }
    const radiusAtMount = 100
    const onClick = jest.fn()
    const emittedClickEvent = { tag: "click" }

    renderCircle({ center: centerAtMount, radius: radiusAtMount, onClick })

    // Act
    const circle = await waitForCircle()
    act(() => {
      window.kakao.maps.event.trigger(circle, "click", emittedClickEvent)
    })

    // Assert
    expect(onClick).toHaveBeenCalledWith(circle, emittedClickEvent)
  })

  test("given Circle is unmounted, when click occurs afterward, then callback is not invoked", async () => {
    // Arrange
    const centerAtMount = { lat: 33.450701, lng: 126.570667 }
    const radiusAtMount = 100
    const onClick = jest.fn()
    const emittedClickAfterUnmount = { tag: "after-unmount" }

    const { unmount } = renderCircle({
      center: centerAtMount,
      radius: radiusAtMount,
      onClick,
    })

    const circle = await waitForCircle()

    // Act
    unmount()
    act(() => {
      window.kakao.maps.event.trigger(circle, "click", emittedClickAfterUnmount)
    })

    // Assert
    expect(onClick).not.toHaveBeenCalled()
  })
})
