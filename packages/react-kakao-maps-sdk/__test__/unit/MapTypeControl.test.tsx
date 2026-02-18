import { expect, test } from "@jest/globals"
import { render, waitFor } from "@testing-library/react"

import { Map, MapTypeControl } from "../../src"
import { KakaoMap } from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

test("MapTypeControl resolves position, adds control, and removes by position", async () => {
  // Arrange
  const { unmount } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MapTypeControl position="TOPLEFT" />
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
    expect(getMockInstances(window.kakao.maps.MapTypeControl).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  const [control] = getMockInstances(window.kakao.maps.MapTypeControl)
  const [addControlCall] = map.addControl.mock.calls as unknown[][]

  expect(map.addControl).toHaveBeenCalled()
  expect(addControlCall?.[0]).toBe(control)
  expect(addControlCall?.[1]).toBe(window.kakao.maps.ControlPosition.TOPLEFT)

  // Act
  unmount()

  // Assert
  expect(map.removeControl).toHaveBeenCalledWith(
    window.kakao.maps.ControlPosition.TOPLEFT,
  )
})

test("MapTypeControl updates map control position when position changes", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MapTypeControl position="TOPLEFT" />
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.MapTypeControl).length).toBe(1)
  })

  // Assert
  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  const [control] = getMockInstances(window.kakao.maps.MapTypeControl)

  map.addControl.mockClear()
  map.removeControl.mockClear()

  // Act
  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MapTypeControl position="TOPRIGHT" />
    </Map>,
  )

  // Assert
  await waitFor(() => {
    const [addControlCall] = map.addControl.mock.calls as unknown[][]
    expect(map.removeControl).toHaveBeenCalledWith(
      window.kakao.maps.ControlPosition.TOPLEFT,
    )
    expect(addControlCall?.[0]).toBe(control)
    expect(addControlCall?.[1]).toBe(window.kakao.maps.ControlPosition.TOPRIGHT)
  })
})
