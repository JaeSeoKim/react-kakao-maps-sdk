import { expect, test } from "@jest/globals"
import { act, render, screen, waitFor } from "@testing-library/react"

import {
  CustomOverlayMap,
  Map,
  MapMarker,
  MapInfoWindow,
  Roadview,
} from "../../src"

import {
  KakaoMap,
  LatLng,
  Marker,
  Roadview as MockRoadview,
} from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

test("LatLng mock equality can be asserted with constructor", () => {
  // Arrange
  const position = new LatLng(37.1234, 127.5678)

  // Act
  const expected = new LatLng(37.1234, 127.5678)

  // Assert
  expect(position).toEqual(expected)
})

test("CustomOverlayMap renders children via portal after setMap", async () => {
  // Arrange
  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <CustomOverlayMap position={{ lat: 33.450701, lng: 126.570667 }}>
        <div>overlay-content</div>
      </CustomOverlayMap>
    </Map>,
  )

  // Assert
  await waitFor(() => {
    expect(screen.getByText("overlay-content")).toBeInTheDocument()
  })
})

test("MapInfoWindow renders children via portal and cleans up", async () => {
  // Arrange
  const { unmount } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MapInfoWindow position={{ lat: 33.450701, lng: 126.570667 }}>
        <div>infowindow-content</div>
      </MapInfoWindow>
    </Map>,
  )

  // Assert
  await waitFor(() => {
    expect(screen.getByText("infowindow-content")).toBeInTheDocument()
  })

  // Act
  unmount()

  // Assert
  expect(screen.queryByText("infowindow-content")).toBeNull()
})

test("Roadview children render only after init event", async () => {
  // Arrange
  render(
    <Roadview position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}>
      <div>roadview-child</div>
    </Roadview>,
  )

  expect(screen.queryByText("roadview-child")).toBeNull()

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Roadview).length).toBe(1)
  })

  const [roadview] =
    getMockInstances<InstanceType<typeof MockRoadview>>(MockRoadview)

  // Act
  act(() => {
    window.kakao.maps.event.trigger(roadview, "init")
  })

  // Assert
  await waitFor(() => {
    expect(screen.getByText("roadview-child")).toBeInTheDocument()
  })
})

test("MapMarker attaches marker to map", async () => {
  // Arrange
  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <MapMarker position={{ lat: 33.450701, lng: 126.570667 }} />
    </Map>,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
    expect(getMockInstances(window.kakao.maps.Marker).length).toBe(1)
  })

  const [map] = getMockInstances<kakao.maps.Map>(KakaoMap)
  const [marker] = getMockInstances<Marker>(Marker)

  // Assert
  await waitFor(() => {
    expect(marker.setMap).toHaveBeenCalledWith(map)
  })
})
