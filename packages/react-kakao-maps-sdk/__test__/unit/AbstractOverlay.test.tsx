import { expect, jest, test } from "@jest/globals"
import { render, waitFor } from "@testing-library/react"

import { AbstractOverlay, Map } from "../../src"
import {
  AbstractOverlay as MockAbstractOverlay,
  KakaoMap,
} from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

test("AbstractOverlay creates instance, invokes lifecycle callbacks, and unmounts", async () => {
  // Arrange
  const onCreate = jest.fn()
  const onAdd = jest.fn()
  const onRemove = jest.fn()
  const draw = jest.fn()

  const { unmount } = render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <AbstractOverlay
        onAdd={onAdd}
        onRemove={onRemove}
        draw={draw}
        onCreate={onCreate}
      />
    </Map>,
  )

  // Act
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.AbstractOverlay).length).toBe(1)
  })

  const [map] = getMockInstances<kakao.maps.Map>(KakaoMap)
  const [overlay] =
    getMockInstances<InstanceType<typeof MockAbstractOverlay>>(
      MockAbstractOverlay,
    )

  expect(onCreate).toHaveBeenCalledWith(overlay)
  expect(onAdd).toHaveBeenCalled()
  expect(draw).toHaveBeenCalled()
  expect(overlay.setMap).toHaveBeenCalledWith(map)

  // Act
  unmount()

  // Assert
  await waitFor(() => {
    expect(onRemove).toHaveBeenCalled()
    expect(overlay.setMap).toHaveBeenCalledWith(null)
  })
})

test("AbstractOverlay requires Map context", () => {
  // Arrange
  // Assert
  const onAdd = jest.fn()
  const onRemove = jest.fn()
  const draw = jest.fn()

  expect(() => {
    render(<AbstractOverlay onAdd={onAdd} onRemove={onRemove} draw={draw} />)
  }).toThrow("useMap must exist inside Map Component!")
})
