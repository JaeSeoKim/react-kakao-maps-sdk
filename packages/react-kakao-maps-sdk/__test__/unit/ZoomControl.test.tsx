import { expect, test } from "@jest/globals"
import { render, waitFor } from "@testing-library/react"

import { Map, ZoomControl } from "../../src"
import { KakaoMap } from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

test("ZoomControl uses default position, adds control, and removes by instance", async () => {
  // Arrange
  const { unmount } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <ZoomControl />
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
    expect(getMockInstances(window.kakao.maps.ZoomControl).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  const [control] = getMockInstances(window.kakao.maps.ZoomControl)
  const [addControlCall] = map.addControl.mock.calls as unknown[][]

  expect(map.addControl).toHaveBeenCalled()
  expect(addControlCall?.[0]).toBe(control)

  // Act
  unmount()

  // Assert
  expect(map.removeControl).toHaveBeenCalledWith(control)
})

test("ZoomControl updates to new position when position changes", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <ZoomControl position="LEFT" />
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.ZoomControl).length).toBe(1)
  })

  // Assert
  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  const [control] = getMockInstances(window.kakao.maps.ZoomControl)

  map.addControl.mockClear()
  map.removeControl.mockClear()

  // Act
  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <ZoomControl position="RIGHT" />
    </Map>,
  )

  // Assert
  await waitFor(() => {
    expect(map.removeControl).toHaveBeenCalledWith(control)
    const [addControlCall] = map.addControl.mock.calls as unknown[][]
    expect(addControlCall?.[0]).toBe(control)
  })
})
