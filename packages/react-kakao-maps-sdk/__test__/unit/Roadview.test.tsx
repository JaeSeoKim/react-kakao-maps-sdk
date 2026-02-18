import { expect, jest, test } from "@jest/globals"
import { act, render, screen, waitFor } from "@testing-library/react"

import { Roadview } from "../../src"
import {
  Roadview as MockRoadview,
  RoadviewClient,
} from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

test("Roadview creates instance and invokes onCreate", async () => {
  // Arrange
  const onCreate = jest.fn()

  // Act
  render(
    <Roadview
      position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}
      onCreate={onCreate}
    />,
  )

  // Assert
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Roadview).length).toBe(1)
  })

  const [roadview] =
    getMockInstances<InstanceType<typeof MockRoadview>>(MockRoadview)

  expect(onCreate).toHaveBeenCalledWith(roadview)
})

test("Roadview children are rendered only after init event", async () => {
  // Arrange
  render(
    <Roadview position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}>
      <div>roadview-child</div>
    </Roadview>,
  )

  // Assert
  expect(screen.queryByText("roadview-child")).toBeNull()

  // Act
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

test("Roadview wire events to callbacks", async () => {
  // Arrange
  const onInit = jest.fn()
  const onPanoidChange = jest.fn()
  const onPositionChanged = jest.fn()

  render(
    <Roadview
      position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}
      onInit={onInit}
      onPanoidChange={onPanoidChange}
      onPositionChanged={onPositionChanged}
    />,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Roadview).length).toBe(1)
  })

  const [roadview] =
    getMockInstances<InstanceType<typeof MockRoadview>>(MockRoadview)

  // Act
  act(() => {
    window.kakao.maps.event.trigger(roadview, "init")
    window.kakao.maps.event.trigger(roadview, "panoid_changed", 777)
    window.kakao.maps.event.trigger(roadview, "position_changed", {
      lat: 1,
      lng: 2,
    })
  })

  // Assert
  await waitFor(() => {
    expect(onInit).toHaveBeenCalledWith(roadview)
    expect(onPanoidChange).toHaveBeenCalledWith(roadview, 777)
    expect(onPositionChanged).toHaveBeenCalledWith(
      roadview,
      expect.objectContaining({ lat: 1, lng: 2 }),
    )
  })
})

test("Roadview onErrorGetNearestPanoId is called when nearest pano id is null", async () => {
  // Arrange
  const onErrorGetNearestPanoId = jest.fn()
  const nearestSpy = jest
    .spyOn(RoadviewClient.prototype, "getNearestPanoId")
    .mockImplementation((_position, _radius, callback) => {
      callback(null as unknown as number)
      return 1
    })

  render(
    <Roadview
      position={{ lat: 33.450701, lng: 126.570667, radius: 50 }}
      onErrorGetNearestPanoId={onErrorGetNearestPanoId}
    />,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Roadview).length).toBe(1)
  })

  // Assert
  await waitFor(() => {
    expect(nearestSpy).toHaveBeenCalled()
    expect(onErrorGetNearestPanoId).toHaveBeenCalled()
  })

  nearestSpy.mockRestore()
})

test("Roadview forwards viewpoint_changed event to onViewpointChange", async () => {
  // Arrange
  const onViewpointChange = jest.fn()

  // Act
  render(
    <Roadview
      position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}
      onViewpointChange={onViewpointChange}
    />,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Roadview).length).toBe(1)
  })

  const [roadview] =
    getMockInstances<InstanceType<typeof MockRoadview>>(MockRoadview)

  // Act
  act(() => {
    window.kakao.maps.event.trigger(roadview, "viewpoint_changed", {
      pan: 10,
      tilt: 5,
    })
  })

  // Assert
  expect(onViewpointChange).toHaveBeenCalledWith(
    roadview,
    expect.objectContaining({ pan: 10, tilt: 5 }),
  )
})

test("Roadview updates panoId directly when panoId prop changes", async () => {
  // Arrange
  const { rerender } = render(
    <Roadview
      position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}
      panoId={1}
    />,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Roadview).length).toBe(1)
  })

  const [roadview] =
    getMockInstances<InstanceType<typeof MockRoadview>>(MockRoadview)
  roadview.setPanoId.mockClear()

  // Act
  rerender(
    <Roadview
      position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}
      panoId={3}
    />,
  )

  // Assert
  await waitFor(() => {
    expect(roadview.setPanoId).toHaveBeenCalled()
  })
  expect(roadview.setPanoId).toHaveBeenLastCalledWith(
    3,
    expect.objectContaining({ lat: 37.566826, lng: 126.9786567 }),
  )
})

test("Roadview updates viewpoint when pan and tilt change", async () => {
  // Arrange
  const { rerender } = render(
    <Roadview
      position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}
      pan={10}
      tilt={5}
    />,
  )

  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Roadview).length).toBe(1)
  })

  const [roadview] =
    getMockInstances<InstanceType<typeof MockRoadview>>(MockRoadview)
  roadview.setViewpoint.mockClear()

  // Act
  rerender(
    <Roadview
      position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}
      pan={25}
      tilt={15}
    />,
  )

  // Assert
  await waitFor(() => {
    expect(roadview.setViewpoint).toHaveBeenCalled()
  })
  expect(roadview.setViewpoint).toHaveBeenLastCalledWith(
    expect.objectContaining({ pan: 25, tilt: 15 }),
  )
})
