import { expect, jest, test } from "@jest/globals"
import { render, waitFor } from "@testing-library/react"

import { Map } from "../../src"
import { KakaoMap } from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

test("center update uses setCenter when isPanto=false", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    />,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  map.setCenter.mockClear()
  map.panTo.mockClear()

  rerender(
    <Map
      center={{ lat: 33.460701, lng: 126.580667 }}
      style={{ width: "320px", height: "240px" }}
    />,
  )

  // Assert
  await waitFor(() => {
    expect(map.setCenter).toHaveBeenCalled()
  })
  expect(map.panTo).not.toHaveBeenCalled()
})

test("Map invokes onCreate with the created map instance", async () => {
  // Arrange
  const onCreate = jest.fn()

  // Act
  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
      onCreate={onCreate}
    />,
  )

  // Assert
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  expect(onCreate).toHaveBeenCalledWith(map)
})

test("center update uses panTo with padding when isPanto=true", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      isPanto={true}
      style={{ width: "320px", height: "240px" }}
    />,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  map.setCenter.mockClear()
  map.panTo.mockClear()

  rerender(
    <Map
      center={{ lat: 33.460701, lng: 126.580667 }}
      isPanto={true}
      style={{ width: "320px", height: "240px" }}
    />,
  )

  // Assert
  await waitFor(() => {
    expect(map.panTo).toHaveBeenCalled()
  })
  expect(map.setCenter).not.toHaveBeenCalled()
})

test("unchanged center does not call setCenter or panTo again", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    />,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  map.setCenter.mockClear()
  map.panTo.mockClear()

  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    />,
  )

  // Assert
  await new Promise((resolve) => setTimeout(resolve, 50))
  expect(map.setCenter).not.toHaveBeenCalled()
  expect(map.panTo).not.toHaveBeenCalled()
})

test("level prop update calls map.setLevel", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      level={3}
      style={{ width: "320px", height: "240px" }}
    />,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  map.setLevel.mockClear()

  // Act
  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      level={5}
      style={{ width: "320px", height: "240px" }}
    />,
  )

  // Assert
  await waitFor(() => {
    expect(map.setLevel).toHaveBeenCalledWith(5)
  })
})

test("draggable prop update calls map.setDraggable", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      draggable={true}
      style={{ width: "320px", height: "240px" }}
    />,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)

  // Act
  await waitFor(() => {
    expect(map.setDraggable).toHaveBeenCalledWith(true)
  })

  map.setDraggable.mockClear()

  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      draggable={false}
      style={{ width: "320px", height: "240px" }}
    />,
  )

  // Assert
  await waitFor(() => {
    expect(map.setDraggable).toHaveBeenCalledWith(false)
  })
})

test("zoomable prop update calls map.setZoomable", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      zoomable={true}
      style={{ width: "320px", height: "240px" }}
    />,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)

  // Act
  await waitFor(() => {
    expect(map.setZoomable).toHaveBeenCalledWith(true)
  })

  map.setZoomable.mockClear()

  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      zoomable={false}
      style={{ width: "320px", height: "240px" }}
    />,
  )

  // Assert
  await waitFor(() => {
    expect(map.setZoomable).toHaveBeenCalledWith(false)
  })
})

test("mapTypeId string updates call map.setMapTypeId with resolved constant", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      mapTypeId="ROADMAP"
      style={{ width: "320px", height: "240px" }}
    />,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  map.setMapTypeId.mockClear()

  // Act
  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      mapTypeId="SKYVIEW"
      style={{ width: "320px", height: "240px" }}
    />,
  )

  // Assert
  await waitFor(() => {
    expect(map.setMapTypeId).toHaveBeenCalled()
  })
})

test("kakao.maps.event.trigger calls useKakaoEvent handlers", async () => {
  // Arrange
  const onClick = jest.fn()

  // Act
  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
      onClick={onClick}
    />,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)

  // Act
  window.kakao.maps.event.trigger(map, "click", { foo: "bar" })

  // Assert
  expect(onClick).toHaveBeenCalledWith(map, { foo: "bar" })
})

test("kakao.maps.event.removeListener stops triggering after unmount", async () => {
  // Arrange
  const onClick = jest.fn()

  // Act
  const { unmount } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
      onClick={onClick}
    />,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)

  // Act
  window.kakao.maps.event.trigger(map, "click", { foo: "bar" })

  // Assert
  expect(onClick).toHaveBeenCalledTimes(1)

  // Act
  unmount()
  window.kakao.maps.event.trigger(map, "click", { foo: "bar" })

  // Assert
  expect(onClick).toHaveBeenCalledTimes(1)
})

test("Map forwards bounds_changed event to onBoundsChanged", async () => {
  // Arrange
  const onBoundsChanged = jest.fn()

  // Act
  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
      onBoundsChanged={onBoundsChanged}
    />,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  window.kakao.maps.event.trigger(map, "bounds_changed")

  // Assert
  expect(onBoundsChanged).toHaveBeenCalledWith(map)
})

test("Map forwards center_changed event to onCenterChanged", async () => {
  // Arrange
  const onCenterChanged = jest.fn()

  // Act
  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
      onCenterChanged={onCenterChanged}
    />,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  window.kakao.maps.event.trigger(map, "center_changed")

  // Assert
  expect(onCenterChanged).toHaveBeenCalledWith(map)
})

test("Map forwards zoom events to onZoomStart and onZoomChanged", async () => {
  // Arrange
  const onZoomStart = jest.fn()
  const onZoomChanged = jest.fn()

  // Act
  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
      onZoomStart={onZoomStart}
      onZoomChanged={onZoomChanged}
    />,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  window.kakao.maps.event.trigger(map, "zoom_start")
  window.kakao.maps.event.trigger(map, "zoom_changed")

  // Assert
  expect(onZoomStart).toHaveBeenCalledWith(map)
  expect(onZoomChanged).toHaveBeenCalledWith(map)
})

test("Map forwards tilesloaded and maptypeid_changed events", async () => {
  // Arrange
  const onTileLoaded = jest.fn()
  const onMaptypeidChanged = jest.fn()

  // Act
  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
      onTileLoaded={onTileLoaded}
      onMaptypeidChanged={onMaptypeidChanged}
    />,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  window.kakao.maps.event.trigger(map, "tilesloaded")
  window.kakao.maps.event.trigger(map, "maptypeid_changed")

  // Assert
  expect(onTileLoaded).toHaveBeenCalledWith(map)
  expect(onMaptypeidChanged).toHaveBeenCalledWith(map)
})

test("Map forwards drag events to drag callbacks", async () => {
  // Arrange
  const onDragStart = jest.fn()
  const onDrag = jest.fn()
  const onDragEnd = jest.fn()

  // Act
  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
    />,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  const eventPayload = { foo: "drag" }

  window.kakao.maps.event.trigger(map, "dragstart", eventPayload)
  window.kakao.maps.event.trigger(map, "drag", eventPayload)
  window.kakao.maps.event.trigger(map, "dragend", eventPayload)

  // Assert
  expect(onDragStart).toHaveBeenCalledWith(map, eventPayload)
  expect(onDrag).toHaveBeenCalledWith(map, eventPayload)
  expect(onDragEnd).toHaveBeenCalledWith(map, eventPayload)
})

test("keyboardShortcuts prop update calls map.setKeyboardShortcuts", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
      keyboardShortcuts={true}
    />,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  map.setKeyboardShortcuts.mockClear()

  // Act
  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
      keyboardShortcuts={false}
    />,
  )

  // Assert
  await waitFor(() => {
    expect(map.setKeyboardShortcuts).toHaveBeenCalledWith(false)
  })
})

test("projectionId prop update calls map.setProjectionId", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
      projectionId={"WCONG"}
    />,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  map.setProjectionId.mockClear()

  // Act
  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
      projectionId={"NONE"}
    />,
  )

  // Assert
  await waitFor(() => {
    expect(map.setProjectionId).toHaveBeenCalledWith("NONE")
  })
})
