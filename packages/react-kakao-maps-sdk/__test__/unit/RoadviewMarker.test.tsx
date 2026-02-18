import { expect, jest, test } from "@jest/globals"
import { act, render, waitFor } from "@testing-library/react"

import { Roadview, RoadviewMarker } from "../../src"
import { Marker, Roadview as MockRoadview } from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

test("RoadviewMarker creates marker and calls onCreate", async () => {
  // Arrange
  const onCreate = jest.fn()

  render(
    <Roadview position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}>
      <RoadviewMarker
        position={{ lat: 37.5665, lng: 126.978 }}
        onCreate={onCreate}
      />
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
    expect(getMockInstances(window.kakao.maps.Marker).length).toBe(1)
  })

  const [marker] = getMockInstances<Marker>(Marker)

  // Assert
  expect(onCreate).toHaveBeenCalledWith(marker)
  expect(marker.setMap).toHaveBeenCalled()
})

test("RoadviewMarker updates position and marker options when props change", async () => {
  // Arrange
  const { rerender } = render(
    <Roadview position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}>
      <RoadviewMarker
        position={{ lat: 37.5665, lng: 126.978 }}
        title="old"
        clickable={false}
        zIndex={1}
        opacity={0.3}
        altitude={1}
        range={10}
        image={{
          src: "/old.png",
          size: { width: 20, height: 20 },
        }}
      />
    </Roadview>,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Roadview).length).toBe(1)
  })

  const [roadview] =
    getMockInstances<InstanceType<typeof MockRoadview>>(MockRoadview)

  act(() => {
    window.kakao.maps.event.trigger(roadview, "init")
  })

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Marker).length).toBe(1)
  })

  const [marker] = getMockInstances<Marker>(Marker)

  marker.setPosition.mockClear()
  marker.setAltitude.mockClear()
  marker.setClickable.mockClear()
  marker.setImage.mockClear()
  marker.setOpacity.mockClear()
  marker.setRange.mockClear()
  marker.setTitle.mockClear()
  marker.setZIndex.mockClear()

  // Act
  rerender(
    <Roadview position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}>
      <RoadviewMarker
        position={{ lat: 38.0, lng: 127.0 }}
        title="new"
        clickable
        zIndex={3}
        opacity={0.8}
        altitude={2}
        range={20}
        image={{
          src: "/new.png",
          size: { width: 24, height: 24 },
        }}
      />
    </Roadview>,
  )

  // Assert
  await waitFor(() => {
    expect(marker.setPosition).toHaveBeenCalled()
    expect(marker.setAltitude).toHaveBeenCalledWith(2)
    expect(marker.setClickable).toHaveBeenCalledWith(true)
    expect(marker.setZIndex).toHaveBeenCalledWith(3)
    expect(marker.setOpacity).toHaveBeenCalledWith(0.8)
    expect(marker.setRange).toHaveBeenCalledWith(20)
    expect(marker.setTitle).toHaveBeenCalledWith("new")
    expect(marker.setImage).toHaveBeenCalled()
  })
})
