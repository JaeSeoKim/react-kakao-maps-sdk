import { expect, test } from "@jest/globals"
import { render, waitFor } from "@testing-library/react"

import { Map, MapTypeId } from "../../src"
import { KakaoMap } from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

test("MapTypeId adds overlay id on mount and removes on unmount", async () => {
  // Arrange
  const { unmount } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MapTypeId type="ROADVIEW" />
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)

  expect(map.addOverlayMapTypeId).toHaveBeenCalledWith(
    window.kakao.maps.MapTypeId.ROADVIEW,
  )

  // Act
  unmount()

  // Assert
  expect(map.removeOverlayMapTypeId).toHaveBeenCalledWith(
    window.kakao.maps.MapTypeId.ROADVIEW,
  )
})

test("MapTypeId updates overlay id when mapType changes", async () => {
  // Arrange
  const { rerender } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MapTypeId type="ROADVIEW" />
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<KakaoMap>(KakaoMap)
  map.addOverlayMapTypeId.mockClear()
  map.removeOverlayMapTypeId.mockClear()

  // Act
  rerender(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MapTypeId type="SKYVIEW" />
    </Map>,
  )

  // Assert
  await waitFor(() => {
    expect(map.removeOverlayMapTypeId).toHaveBeenCalledWith(
      window.kakao.maps.MapTypeId.ROADVIEW,
    )
    expect(map.addOverlayMapTypeId).toHaveBeenCalledWith(
      window.kakao.maps.MapTypeId.SKYVIEW,
    )
  })
})
