import { expect, jest, test } from "@jest/globals"
import { act, render, screen, waitFor } from "@testing-library/react"

import { CustomOverlayRoadview, Roadview } from "../../src"
import { CustomOverlay, Roadview as MockRoadview } from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

test("CustomOverlayRoadview mounts on roadview and renders children", async () => {
  // Arrange
  const onCreate = jest.fn()

  // Act
  render(
    <Roadview position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}>
      <CustomOverlayRoadview
        position={{ lat: 37.5665, lng: 126.978, pan: 1, tilt: 2 }}
        onCreate={onCreate}
      >
        <div>custom-overlay-roadview-content</div>
      </CustomOverlayRoadview>
    </Roadview>,
  )

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
    expect(getMockInstances(window.kakao.maps.CustomOverlay).length).toBe(1)
    expect(
      screen.getByText("custom-overlay-roadview-content"),
    ).toBeInTheDocument()
  })

  const [overlay] =
    getMockInstances<InstanceType<typeof CustomOverlay>>(CustomOverlay)

  expect(onCreate).toHaveBeenCalledWith(overlay)
  expect(overlay.setMap).toHaveBeenCalledWith(roadview)
})

test("CustomOverlayRoadview updates position when lat/lng changes", async () => {
  // Arrange
  const { rerender } = render(
    <Roadview position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}>
      <CustomOverlayRoadview position={{ lat: 37.0, lng: 126.0 }} />
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
    expect(getMockInstances(window.kakao.maps.CustomOverlay).length).toBe(1)
  })

  const [overlay] =
    getMockInstances<InstanceType<typeof CustomOverlay>>(CustomOverlay)
  overlay.setPosition.mockClear()

  // Act
  rerender(
    <Roadview position={{ lat: 37.566826, lng: 126.9786567, radius: 50 }}>
      <CustomOverlayRoadview position={{ lat: 38.0, lng: 127.0 }} />
    </Roadview>,
  )

  // Assert
  await waitFor(() => {
    expect(overlay.setPosition).toHaveBeenCalled()
  })
})

test("CustomOverlayRoadview requires Roadview context", () => {
  // Arrange
  // Act
  expect(() => {
    render(
      <CustomOverlayRoadview
        position={{ lat: 37.566826, lng: 126.9786567, panoId: 1 }}
      />,
    )
  }).toThrow(
    "CustomOverlayRoadview Component must exist inside Roadview Component!",
  )
  // Assert
})
