import { expect, test } from "@jest/globals"
import { render, waitFor } from "@testing-library/react"

import { CustomOverlayMap, Map } from "../../src"
import { CustomOverlay, KakaoMap } from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

test("CustomOverlayMap creates overlay and attaches to map", async () => {
  // Arrange
  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <CustomOverlayMap
        position={{ lat: 33.450701, lng: 126.570667 }}
        zIndex={2}
        clickable={true}
      />
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
    expect(getMockInstances(window.kakao.maps.CustomOverlay).length).toBe(1)
  })

  const [map] = getMockInstances<kakao.maps.Map>(KakaoMap)
  const [overlay] = getMockInstances<CustomOverlay>(CustomOverlay)

  // Assert
  expect(overlay.setMap).toHaveBeenCalledWith(map)
  expect(overlay.setPosition).toHaveBeenCalled()
  expect(overlay.setZIndex).toHaveBeenCalledWith(2)
})

test("CustomOverlayMap updates position and z-index on prop changes", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <CustomOverlayMap
        position={{ lat: 33.450701, lng: 126.570667 }}
        zIndex={2}
      />
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.CustomOverlay).length).toBe(1)
  })

  const [overlay] = getMockInstances<CustomOverlay>(CustomOverlay)

  overlay.setPosition.mockClear()
  overlay.setZIndex.mockClear()

  // Act
  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <CustomOverlayMap
        position={{ lat: 34.450701, lng: 127.570667 }}
        zIndex={5}
      />
    </Map>,
  )

  // Assert
  await waitFor(() => {
    expect(overlay.setPosition).toHaveBeenCalled()
    expect(overlay.setZIndex).toHaveBeenCalledWith(5)
  })
})
