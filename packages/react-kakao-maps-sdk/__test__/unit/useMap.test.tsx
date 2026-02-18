import { expect, jest, test } from "@jest/globals"
import { render, waitFor } from "@testing-library/react"
import { useEffect } from "react"

import { Map, useMap } from "../../src"
import { KakaoMap } from "../mocks/kakaoMapsMock"
import { getMockInstances } from "../mocks/testHelpers"

const UseMapProbe = ({ onMap }: { onMap: (map: kakao.maps.Map) => void }) => {
  const map = useMap("UseMapProbe")

  useEffect(() => {
    onMap(map)
  }, [map, onMap])

  return null
}

test("useMap throws when called outside Map component", () => {
  // Arrange
  const onMap = jest.fn()

  // Act
  const renderOutsideMap = () => render(<UseMapProbe onMap={onMap} />)

  // Assert
  expect(renderOutsideMap).toThrow(
    "UseMapProbe Component must exist inside Map Component!",
  )
})

test("useMap returns the current map instance inside Map component", async () => {
  // Arrange
  const onMap = jest.fn()

  // Act
  render(
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "320px", height: "240px" }}
    >
      <UseMapProbe onMap={onMap} />
    </Map>,
  )

  // Assert
  await waitFor(() => {
    expect(getMockInstances(window.kakao.maps.Map).length).toBe(1)
  })

  const [map] = getMockInstances<kakao.maps.Map>(KakaoMap)
  expect(onMap).toHaveBeenCalledWith(map)
})
