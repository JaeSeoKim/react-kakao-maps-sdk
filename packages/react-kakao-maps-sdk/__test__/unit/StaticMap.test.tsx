import { expect, jest, test } from "@jest/globals"
import { render, waitFor } from "@testing-library/react"

import { StaticMap } from "../../src"
import { StaticMap as MockStaticMap } from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

test("StaticMap creates static map and triggers onCreate", async () => {
  // Arrange
  const onCreate = jest.fn()

  // Act
  render(
    <StaticMap
      center={{ lat: 33.450701, lng: 126.570667 }}
      level={3}
      mapTypeId="ROADMAP"
      marker={{
        position: {
          lat: 33.4507,
          lng: 126.5707,
        },
      }}
      onCreate={onCreate}
    />,
  )

  // Assert
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.StaticMap).length).toBe(1)
  })

  const [staticMap] =
    getMockInstances<InstanceType<typeof MockStaticMap>>(MockStaticMap)

  expect(onCreate).toHaveBeenCalledWith(staticMap)
})

test("StaticMap updates center when center prop changes", async () => {
  // Arrange
  const { rerender } = render(
    <StaticMap
      center={{ lat: 33.450701, lng: 126.570667 }}
      marker={true}
      level={3}
      onCreate={jest.fn()}
    />,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.StaticMap).length).toBe(1)
  })

  const [staticMap] =
    getMockInstances<InstanceType<typeof MockStaticMap>>(MockStaticMap)
  staticMap.setCenter.mockClear()

  // Act
  rerender(
    <StaticMap
      center={{ lat: 33.460701, lng: 126.580667 }}
      marker={true}
      level={3}
      onCreate={jest.fn()}
    />,
  )

  // Assert
  await waitFor(() => {
    expect(staticMap.setCenter).toHaveBeenCalledWith(
      expect.objectContaining({
        getLat: expect.any(Function),
        getLng: expect.any(Function),
      }),
    )
  })
})

test("StaticMap updates level and mapTypeId", async () => {
  // Arrange
  const { rerender } = render(
    <StaticMap
      center={{ lat: 33.450701, lng: 126.570667 }}
      marker={false}
      level={3}
      mapTypeId="ROADMAP"
      onCreate={jest.fn()}
    />,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.StaticMap).length).toBe(1)
  })

  const [staticMap] =
    getMockInstances<InstanceType<typeof MockStaticMap>>(MockStaticMap)
  staticMap.setLevel.mockClear()
  staticMap.setMapTypeId.mockClear()

  // Act
  rerender(
    <StaticMap
      center={{ lat: 33.450701, lng: 126.570667 }}
      marker={false}
      level={7}
      mapTypeId="SKYVIEW"
      onCreate={jest.fn()}
    />,
  )

  // Assert
  await waitFor(() => {
    expect(staticMap.setLevel).toHaveBeenCalledWith(7)
    expect(staticMap.setMapTypeId).toHaveBeenCalledWith(
      window.kakao.maps.MapTypeId.SKYVIEW,
    )
  })
})
