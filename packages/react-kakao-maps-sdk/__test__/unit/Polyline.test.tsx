import { expect, jest, test } from "@jest/globals"
import { act, render, waitFor } from "@testing-library/react"

import { Map, type PolylineProps, Polyline } from "../../src"
import { KakaoMap, Polyline as MockPolyline } from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

const MAP_CENTER = { lat: 33.450701, lng: 126.570667 }
const MAP_STYLE = { width: "320px", height: "240px" }

const toLatLngList = (path: Array<{ lat: number; lng: number }>) =>
  path.map((point) => new window.kakao.maps.LatLng(point.lat, point.lng))

const isSameLatLngPath = (
  actual: kakao.maps.LatLng[] | kakao.maps.LatLng[][] | undefined,
  expected: kakao.maps.LatLng[],
) => {
  if (!actual || Array.isArray(actual[0])) return false
  const actualFlat = actual as kakao.maps.LatLng[]
  return (
    actualFlat.length === expected.length &&
    actualFlat.every((point, index) => point.equals(expected[index]))
  )
}

const renderPolyline = (props: PolylineProps) => {
  return render(
    <Map center={MAP_CENTER} style={MAP_STYLE}>
      <Polyline {...props} />
    </Map>,
  )
}

const waitForPolyline = async () => {
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Polyline).length).toBe(1)
  })

  const [polyline] = getMockInstances<MockPolyline>(MockPolyline)
  return polyline
}

describe("Polyline", () => {
  test("given Polyline is rendered, then one polyline overlay instance is created", async () => {
    // Arrange
    renderPolyline({ path: [MAP_CENTER] })

    // Act
    const polyline = await waitForPolyline()

    // Assert
    expect(polyline).toBeDefined()
  })

  test("given Polyline already exists, when rerendered, then the same overlay instance is reused", async () => {
    // Arrange
    const { rerender } = renderPolyline({ path: [MAP_CENTER] })

    await waitForPolyline()
    const [instanceBeforeRerender] =
      getMockInstances<MockPolyline>(MockPolyline)

    // Act
    rerender(
      <Map center={MAP_CENTER} style={MAP_STYLE}>
        <Polyline path={[MAP_CENTER, { lat: 33.460701, lng: 126.580667 }]} />
      </Map>,
    )

    // Assert
    await waitFor(() => {
      expect(getMockInstances(window.kakao.maps.Polyline).length).toBe(1)
    })
    const [instanceAfterRerender] = getMockInstances<MockPolyline>(MockPolyline)
    expect(instanceAfterRerender).toBe(instanceBeforeRerender)
  })

  test("given Polyline mounts, then it is attached to the current map", async () => {
    // Arrange
    renderPolyline({ path: [MAP_CENTER] })

    // Act
    const polyline = await waitForPolyline()

    // Assert
    const [map] = getMockInstances<kakao.maps.Map>(KakaoMap)
    expect(polyline.setMap).toHaveBeenCalledWith(map)
  })

  test("given Polyline unmounts, then it is detached from the map", async () => {
    // Arrange
    const { unmount } = renderPolyline({ path: [MAP_CENTER] })
    const polyline = await waitForPolyline()

    // Act
    unmount()

    // Assert
    expect(polyline.setMap).toHaveBeenLastCalledWith(null)
  })

  test("given onCreate is provided, when Polyline mounts, then it receives the created polyline", async () => {
    // Arrange
    const onCreate = jest.fn()
    renderPolyline({ path: [MAP_CENTER], onCreate })

    // Act
    const polyline = await waitForPolyline()

    // Assert
    expect(onCreate).toHaveBeenCalledWith(polyline)
  })

  test("given initial path, when Polyline mounts, then path is applied", async () => {
    // Arrange
    const pathAtMount = [MAP_CENTER, { lat: 33.460701, lng: 126.580667 }]
    const expectedPath = toLatLngList(pathAtMount)

    renderPolyline({ path: pathAtMount })

    // Act
    const polyline = await waitForPolyline()

    // Assert
    const [pathArgOnMount] = polyline.setPath.mock.calls[0] ?? []
    expect(isSameLatLngPath(pathArgOnMount, expectedPath)).toBe(true)
  })

  test("given path changes, when Polyline rerenders, then path is updated", async () => {
    // Arrange
    const pathBeforeRerender = [MAP_CENTER]
    const pathAfterRerender = [MAP_CENTER, { lat: 33.460701, lng: 126.580667 }]
    const expectedPathAfterRerender = toLatLngList(pathAfterRerender)

    const { rerender } = renderPolyline({ path: pathBeforeRerender })

    const polyline = await waitForPolyline()
    polyline.setPath.mockClear()

    // Act
    rerender(
      <Map center={MAP_CENTER} style={MAP_STYLE}>
        <Polyline path={pathAfterRerender} />
      </Map>,
    )

    // Assert
    await waitFor(() => {
      const [pathArgAfterRerender] = polyline.setPath.mock.calls.at(-1) ?? []
      expect(
        isSameLatLngPath(pathArgAfterRerender, expectedPathAfterRerender),
      ).toBe(true)
    })
  })

  test("given initial zIndex, when Polyline mounts, then zIndex is applied", async () => {
    // Arrange
    renderPolyline({ path: [MAP_CENTER], zIndex: 2 })

    // Act
    const polyline = await waitForPolyline()

    // Assert
    expect(polyline.setZIndex).toHaveBeenCalledWith(2)
  })

  test("given zIndex is undefined, when Polyline mounts, then default zIndex 0 is kept", async () => {
    // Arrange
    renderPolyline({ path: [MAP_CENTER] })

    // Act
    const polyline = await waitForPolyline()

    // Assert
    expect(polyline.setZIndex).toHaveBeenCalledWith(0)
  })

  test("given initial style props, when Polyline mounts, then style options are applied", async () => {
    // Arrange
    const styleAtMount = {
      endArrow: false,
      strokeColor: "#ff0000",
      strokeOpacity: 0.5,
      strokeStyle: "solid" as const,
      strokeWeight: 3,
    }

    renderPolyline({ path: [MAP_CENTER], ...styleAtMount })

    // Act
    const polyline = await waitForPolyline()

    // Assert
    expect(polyline.setOptions).toHaveBeenCalledWith(styleAtMount)
  })

  test("given style props change, when Polyline rerenders, then style options are updated", async () => {
    // Arrange
    const styleBeforeRerender = {
      endArrow: false,
      strokeColor: "#ff0000",
      strokeOpacity: 0.5,
      strokeStyle: "solid" as const,
      strokeWeight: 3,
    }
    const styleAfterRerender = {
      endArrow: true,
      strokeColor: "#000000",
      strokeOpacity: 0.8,
      strokeStyle: "dash" as const,
      strokeWeight: 6,
    }

    const { rerender } = renderPolyline({
      path: [MAP_CENTER],
      ...styleBeforeRerender,
    })

    const polyline = await waitForPolyline()
    polyline.setOptions.mockClear()

    // Act
    rerender(
      <Map center={MAP_CENTER} style={MAP_STYLE}>
        <Polyline path={[MAP_CENTER]} {...styleAfterRerender} />
      </Map>,
    )

    // Assert
    await waitFor(() => {
      expect(polyline.setOptions).toHaveBeenCalledWith(styleAfterRerender)
    })
  })

  test("given mouseover handler, when mouseover occurs, then callback is invoked", async () => {
    // Arrange
    const onMouseover = jest.fn()
    const mouseEvent = { tag: "mouseover" }
    renderPolyline({ path: [MAP_CENTER], onMouseover })

    // Act
    const polyline = await waitForPolyline()
    act(() => {
      window.kakao.maps.event.trigger(polyline, "mouseover", mouseEvent)
    })

    // Assert
    expect(onMouseover).toHaveBeenCalledWith(polyline, mouseEvent)
  })

  test("given mouseout handler, when mouseout occurs, then callback is invoked", async () => {
    // Arrange
    const onMouseout = jest.fn()
    const mouseEvent = { tag: "mouseout" }
    renderPolyline({ path: [MAP_CENTER], onMouseout })

    // Act
    const polyline = await waitForPolyline()
    act(() => {
      window.kakao.maps.event.trigger(polyline, "mouseout", mouseEvent)
    })

    // Assert
    expect(onMouseout).toHaveBeenCalledWith(polyline, mouseEvent)
  })

  test("given mousemove handler, when mousemove occurs, then callback is invoked", async () => {
    // Arrange
    const onMousemove = jest.fn()
    const mouseEvent = { tag: "mousemove" }
    renderPolyline({ path: [MAP_CENTER], onMousemove })

    // Act
    const polyline = await waitForPolyline()
    act(() => {
      window.kakao.maps.event.trigger(polyline, "mousemove", mouseEvent)
    })

    // Assert
    expect(onMousemove).toHaveBeenCalledWith(polyline, mouseEvent)
  })

  test("given mousedown handler, when mousedown occurs, then callback is invoked", async () => {
    // Arrange
    const onMousedown = jest.fn()
    const mouseEvent = { tag: "mousedown" }
    renderPolyline({ path: [MAP_CENTER], onMousedown })

    // Act
    const polyline = await waitForPolyline()
    act(() => {
      window.kakao.maps.event.trigger(polyline, "mousedown", mouseEvent)
    })

    // Assert
    expect(onMousedown).toHaveBeenCalledWith(polyline, mouseEvent)
  })

  test("given click handler, when click occurs, then callback is invoked", async () => {
    // Arrange
    const onClick = jest.fn()
    const mouseEvent = { tag: "click" }
    renderPolyline({ path: [MAP_CENTER], onClick })

    // Act
    const polyline = await waitForPolyline()
    act(() => {
      window.kakao.maps.event.trigger(polyline, "click", mouseEvent)
    })

    // Assert
    expect(onClick).toHaveBeenCalledWith(polyline, mouseEvent)
  })

  test("given Polyline is unmounted, when click occurs afterward, then callback is not invoked", async () => {
    // Arrange
    const onClick = jest.fn()
    const { unmount } = renderPolyline({ path: [MAP_CENTER], onClick })
    const polyline = await waitForPolyline()

    // Act
    unmount()
    act(() => {
      window.kakao.maps.event.trigger(polyline, "click", {
        tag: "after-unmount",
      })
    })

    // Assert
    expect(onClick).not.toHaveBeenCalled()
  })
})
