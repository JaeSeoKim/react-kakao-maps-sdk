import { expect, jest, test } from "@jest/globals"
import { render, waitFor } from "@testing-library/react"

import { Map, MapMarker } from "../../src"
import { KakaoMap, Marker } from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

test("MapMarker creates marker and calls onCreate", async () => {
  // Arrange
  const onCreate = jest.fn()

  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MapMarker
        position={{ lat: 33.450701, lng: 126.570667 }}
        title="start"
        onCreate={onCreate}
      />
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
    expect(getMockInstances(window.kakao.maps.Marker).length).toBe(1)
  })

  const [map] = getMockInstances<kakao.maps.Map>(KakaoMap)
  const [marker] = getMockInstances<Marker>(Marker)

  // Assert
  expect(marker.setMap).toHaveBeenCalledWith(map)
  expect(onCreate).toHaveBeenCalledWith(marker)
  expect(marker.setPosition).toHaveBeenCalled()
})

test("MapMarker updates position and marker options when props change", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MapMarker
        position={{ lat: 33.450701, lng: 126.570667 }}
        title="old"
        clickable={false}
        draggable={false}
        zIndex={1}
        opacity={0.3}
        image={{
          src: "/old.png",
          size: { width: 20, height: 20 },
        }}
      />
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
    expect(getMockInstances(window.kakao.maps.Marker).length).toBe(1)
  })

  const [marker] = getMockInstances<Marker>(Marker)

  marker.setPosition.mockClear()
  marker.setTitle.mockClear()
  marker.setClickable.mockClear()
  marker.setDraggable.mockClear()
  marker.setZIndex.mockClear()
  marker.setOpacity.mockClear()
  marker.setImage.mockClear()

  // Act
  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MapMarker
        position={{ lat: 33.460701, lng: 126.580667 }}
        title="new"
        clickable
        draggable
        zIndex={5}
        opacity={0.7}
        image={{
          src: "/new.png",
          size: { width: 30, height: 30 },
        }}
      />
    </Map>,
  )

  // Assert
  await waitFor(() => {
    expect(marker.setPosition).toHaveBeenCalled()
    expect(marker.setTitle).toHaveBeenCalledWith("new")
    expect(marker.setClickable).toHaveBeenCalledWith(true)
    expect(marker.setDraggable).toHaveBeenCalledWith(true)
    expect(marker.setZIndex).toHaveBeenCalledWith(5)
    expect(marker.setOpacity).toHaveBeenCalledWith(0.7)
    expect(marker.setImage).toHaveBeenCalled()
  })
})
