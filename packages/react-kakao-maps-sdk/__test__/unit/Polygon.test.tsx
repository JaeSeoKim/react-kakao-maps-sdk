import { expect, jest, test } from "@jest/globals"
import { act, render, waitFor } from "@testing-library/react"

import { Map, type PolygonProps, Polygon } from "../../src"
import { KakaoMap, Polygon as MockPolygon } from "../mocks/kakaoMapsMock"
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

const renderPolygon = (props: PolygonProps) => {
  return render(
    <Map center={MAP_CENTER} style={MAP_STYLE}>
      <Polygon {...props} />
    </Map>,
  )
}

const waitForPolygon = async () => {
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Polygon).length).toBe(1)
  })

  const [polygon] = getMockInstances<MockPolygon>(MockPolygon)
  return polygon
}

describe("Polygon", () => {
  test("given Polygon is rendered, then one polygon overlay instance is created", async () => {
    // Arrange
    renderPolygon({ path: [MAP_CENTER] })

    // Act
    const polygon = await waitForPolygon()

    // Assert
    expect(polygon).toBeDefined()
  })

  test("given Polygon already exists, when rerendered, then the same overlay instance is reused", async () => {
    // Arrange
    const { rerender } = renderPolygon({ path: [MAP_CENTER] })

    await waitForPolygon()
    const [instanceBeforeRerender] = getMockInstances<MockPolygon>(MockPolygon)

    // Act
    rerender(
      <Map center={MAP_CENTER} style={MAP_STYLE}>
        <Polygon path={[MAP_CENTER, { lat: 33.460701, lng: 126.580667 }]} />
      </Map>,
    )

    // Assert
    await waitFor(() => {
      expect(getMockInstances(window.kakao.maps.Polygon).length).toBe(1)
    })
    const [instanceAfterRerender] = getMockInstances<MockPolygon>(MockPolygon)
    expect(instanceAfterRerender).toBe(instanceBeforeRerender)
  })

  test("given Polygon mounts, then it is attached to the current map", async () => {
    // Arrange
    renderPolygon({ path: [MAP_CENTER] })

    // Act
    const polygon = await waitForPolygon()

    // Assert
    const [map] = getMockInstances<kakao.maps.Map>(KakaoMap)
    expect(polygon.setMap).toHaveBeenCalledWith(map)
  })

  test("given Polygon unmounts, then it is detached from the map", async () => {
    // Arrange
    const { unmount } = renderPolygon({ path: [MAP_CENTER] })
    const polygon = await waitForPolygon()

    // Act
    unmount()

    // Assert
    expect(polygon.setMap).toHaveBeenLastCalledWith(null)
  })

  test("given onCreate is provided, when Polygon mounts, then it receives the created polygon", async () => {
    // Arrange
    const onCreate = jest.fn()
    renderPolygon({ path: [MAP_CENTER], onCreate })

    // Act
    const polygon = await waitForPolygon()

    // Assert
    expect(onCreate).toHaveBeenCalledWith(polygon)
  })

  test("given initial path, when Polygon mounts, then path is applied", async () => {
    // Arrange
    const pathAtMount = [MAP_CENTER, { lat: 33.460701, lng: 126.580667 }]
    const expectedPath = toLatLngList(pathAtMount)

    renderPolygon({ path: pathAtMount })

    // Act
    const polygon = await waitForPolygon()

    // Assert
    const [pathArgOnMount] = polygon.setPath.mock.calls[0] ?? []
    expect(isSameLatLngPath(pathArgOnMount, expectedPath)).toBe(true)
  })

  test("given path changes, when Polygon rerenders, then path is updated", async () => {
    // Arrange
    const pathBeforeRerender = [MAP_CENTER]
    const pathAfterRerender = [MAP_CENTER, { lat: 33.460701, lng: 126.580667 }]
    const expectedPathAfterRerender = toLatLngList(pathAfterRerender)

    const { rerender } = renderPolygon({ path: pathBeforeRerender })

    const polygon = await waitForPolygon()
    polygon.setPath.mockClear()

    // Act
    rerender(
      <Map center={MAP_CENTER} style={MAP_STYLE}>
        <Polygon path={pathAfterRerender} />
      </Map>,
    )

    // Assert
    await waitFor(() => {
      const [pathArgAfterRerender] = polygon.setPath.mock.calls.at(-1) ?? []
      expect(
        isSameLatLngPath(pathArgAfterRerender, expectedPathAfterRerender),
      ).toBe(true)
    })
  })

  test("given initial zIndex, when Polygon mounts, then zIndex is applied", async () => {
    // Arrange
    renderPolygon({ path: [MAP_CENTER], zIndex: 3 })

    // Act
    const polygon = await waitForPolygon()

    // Assert
    expect(polygon.setZIndex).toHaveBeenCalledWith(3)
  })

  test("given zIndex is undefined, when Polygon mounts, then default zIndex 0 is kept", async () => {
    // Arrange
    renderPolygon({ path: [MAP_CENTER] })

    // Act
    const polygon = await waitForPolygon()

    // Assert
    expect(polygon.setZIndex).toHaveBeenCalledWith(0)
  })

  test("given initial style props, when Polygon mounts, then style options are applied", async () => {
    // Arrange
    const styleAtMount = {
      fillColor: "#00ff00",
      fillOpacity: 0.2,
      strokeColor: "#ff0000",
      strokeOpacity: 0.6,
      strokeStyle: "solid" as const,
      strokeWeight: 3,
    }

    renderPolygon({ path: [MAP_CENTER], ...styleAtMount })

    // Act
    const polygon = await waitForPolygon()

    // Assert
    expect(polygon.setOptions).toHaveBeenCalledWith(styleAtMount)
  })

  test("given style props change, when Polygon rerenders, then style options are updated", async () => {
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

    const { rerender } = renderPolygon({
      path: [MAP_CENTER],
      ...styleBeforeRerender,
    })

    const polygon = await waitForPolygon()
    polygon.setOptions.mockClear()

    // Act
    rerender(
      <Map center={MAP_CENTER} style={MAP_STYLE}>
        <Polygon path={[MAP_CENTER]} {...styleAfterRerender} />
      </Map>,
    )

    // Assert
    await waitFor(() => {
      expect(polygon.setOptions).toHaveBeenCalledWith(styleAfterRerender)
    })
  })

  test("given mouseover handler, when mouseover occurs, then callback is invoked", async () => {
    // Arrange
    const onMouseover = jest.fn()
    const mouseEvent = { tag: "mouseover" }
    renderPolygon({ path: [MAP_CENTER], onMouseover })

    // Act
    const polygon = await waitForPolygon()
    act(() => {
      window.kakao.maps.event.trigger(polygon, "mouseover", mouseEvent)
    })

    // Assert
    expect(onMouseover).toHaveBeenCalledWith(polygon, mouseEvent)
  })

  test("given mouseout handler, when mouseout occurs, then callback is invoked", async () => {
    // Arrange
    const onMouseout = jest.fn()
    const mouseEvent = { tag: "mouseout" }
    renderPolygon({ path: [MAP_CENTER], onMouseout })

    // Act
    const polygon = await waitForPolygon()
    act(() => {
      window.kakao.maps.event.trigger(polygon, "mouseout", mouseEvent)
    })

    // Assert
    expect(onMouseout).toHaveBeenCalledWith(polygon, mouseEvent)
  })

  test("given mousemove handler, when mousemove occurs, then callback is invoked", async () => {
    // Arrange
    const onMousemove = jest.fn()
    const mouseEvent = { tag: "mousemove" }
    renderPolygon({ path: [MAP_CENTER], onMousemove })

    // Act
    const polygon = await waitForPolygon()
    act(() => {
      window.kakao.maps.event.trigger(polygon, "mousemove", mouseEvent)
    })

    // Assert
    expect(onMousemove).toHaveBeenCalledWith(polygon, mouseEvent)
  })

  test("given mousedown handler, when mousedown occurs, then callback is invoked", async () => {
    // Arrange
    const onMousedown = jest.fn()
    const mouseEvent = { tag: "mousedown" }
    renderPolygon({ path: [MAP_CENTER], onMousedown })

    // Act
    const polygon = await waitForPolygon()
    act(() => {
      window.kakao.maps.event.trigger(polygon, "mousedown", mouseEvent)
    })

    // Assert
    expect(onMousedown).toHaveBeenCalledWith(polygon, mouseEvent)
  })

  test("given click handler, when click occurs, then callback is invoked", async () => {
    // Arrange
    const onClick = jest.fn()
    const mouseEvent = { tag: "click" }
    renderPolygon({ path: [MAP_CENTER], onClick })

    // Act
    const polygon = await waitForPolygon()
    act(() => {
      window.kakao.maps.event.trigger(polygon, "click", mouseEvent)
    })

    // Assert
    expect(onClick).toHaveBeenCalledWith(polygon, mouseEvent)
  })

  test("given Polygon is unmounted, when click occurs afterward, then callback is not invoked", async () => {
    // Arrange
    const onClick = jest.fn()
    const { unmount } = renderPolygon({ path: [MAP_CENTER], onClick })
    const polygon = await waitForPolygon()

    // Act
    unmount()
    act(() => {
      window.kakao.maps.event.trigger(polygon, "click", {
        tag: "after-unmount",
      })
    })

    // Assert
    expect(onClick).not.toHaveBeenCalled()
  })
})
