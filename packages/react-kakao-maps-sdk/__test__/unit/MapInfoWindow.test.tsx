import { expect, jest, test } from "@jest/globals"
import { render, waitFor } from "@testing-library/react"

import { Map, MapInfoWindow } from "../../src"
import { InfoWindow, KakaoMap } from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

test("MapInfoWindow creates infoWindow and opens/close via map lifecycle", async () => {
  // Arrange
  const onCreate = jest.fn()

  const { unmount } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MapInfoWindow
        position={{ lat: 33.450701, lng: 126.570667 }}
        disableAutoPan={false}
        zIndex={3}
        onCreate={onCreate}
      >
        <div>info-window-content</div>
      </MapInfoWindow>
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
    expect(getMockInstances(window.kakao.maps.InfoWindow).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  const [infoWindow] = getMockInstances<InfoWindow>(InfoWindow)

  // Assert
  expect(onCreate).toHaveBeenCalledWith(infoWindow)
  expect(infoWindow.open).toHaveBeenCalled()
  const [openedMap] = infoWindow.open.mock.calls[0] as unknown[]
  expect(openedMap).toBe(map)

  // Act
  unmount()

  // Assert
  expect(infoWindow.close).toHaveBeenCalled()
})

test("MapInfoWindow updates position and z-index when props change", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MapInfoWindow position={{ lat: 33.450701, lng: 126.570667 }} zIndex={2}>
        <div>info-window-content</div>
      </MapInfoWindow>
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.InfoWindow).length).toBe(1)
  })

  const [infoWindow] = getMockInstances<InfoWindow>(InfoWindow)
  infoWindow.setPosition.mockClear()
  infoWindow.setZIndex.mockClear()

  // Act
  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MapInfoWindow position={{ lat: 34.450701, lng: 127.570667 }} zIndex={8}>
        <div>info-window-content</div>
      </MapInfoWindow>
    </Map>,
  )

  // Assert
  await waitFor(() => {
    expect(infoWindow.setPosition).toHaveBeenCalled()
    expect(infoWindow.setZIndex).toHaveBeenCalledWith(8)
  })
})
