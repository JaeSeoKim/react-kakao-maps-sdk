import { expect, jest, test } from "@jest/globals"
import { act, render, waitFor } from "@testing-library/react"

import { Roadview, RoadviewInfoWindow } from "../../src"
import { InfoWindow, Roadview as MockRoadview } from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

test("RoadviewInfoWindow creates infoWindow on roadview init and calls onCreate", async () => {
  // Arrange
  const onCreate = jest.fn()

  const { unmount } = render(
    <Roadview position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}>
      <RoadviewInfoWindow
        position={{ lat: 37.5665, lng: 126.978 }}
        zIndex={3}
        onCreate={onCreate}
      >
        <div>roadview-infowindow</div>
      </RoadviewInfoWindow>
    </Roadview>,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Roadview).length).toBe(1)
  })

  const [roadview] =
    getMockInstances<InstanceType<typeof MockRoadview>>(MockRoadview)

  act(() => {
    window.kakao.maps.event.trigger(roadview, "init")
  })

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.InfoWindow).length).toBe(1)
  })

  const [infoWindow] = getMockInstances<InfoWindow>(InfoWindow)

  // Assert
  expect(onCreate).toHaveBeenCalledWith(infoWindow)
  expect(infoWindow.open).toHaveBeenCalled()
  const [openedMap] = infoWindow.open.mock.calls[0] as unknown[]
  expect(openedMap).toBe(roadview)

  // Act
  unmount()

  // Assert
  expect(infoWindow.close).toHaveBeenCalled()
})

test("RoadviewInfoWindow updates position and z-index when props change", async () => {
  // Arrange
  const { rerender } = render(
    <Roadview position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}>
      <RoadviewInfoWindow position={{ lat: 37.5665, lng: 126.978 }} zIndex={2}>
        <div>roadview-infowindow</div>
      </RoadviewInfoWindow>
    </Roadview>,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Roadview).length).toBe(1)
  })

  const [roadview] =
    getMockInstances<InstanceType<typeof MockRoadview>>(MockRoadview)

  act(() => {
    window.kakao.maps.event.trigger(roadview, "init")
  })

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.InfoWindow).length).toBe(1)
  })

  const [infoWindow] = getMockInstances<InfoWindow>(InfoWindow)

  infoWindow.setPosition.mockClear()
  infoWindow.setZIndex.mockClear()

  // Act
  rerender(
    <Roadview position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}>
      <RoadviewInfoWindow position={{ lat: 38.0, lng: 127.0 }} zIndex={7}>
        <div>roadview-infowindow</div>
      </RoadviewInfoWindow>
    </Roadview>,
  )

  // Assert
  await waitFor(() => {
    expect(infoWindow.setPosition).toHaveBeenCalled()
    expect(infoWindow.setZIndex).toHaveBeenCalledWith(7)
  })
})
