import { expect, test } from "@jest/globals"

test("kakao maps mock initializes", () => {
  // Arrange
  // Assert
  expect(window.kakao).toBeDefined()
  expect(window.kakao.maps).toBeDefined()
  expect(typeof window.kakao.maps.load).toBe("function")
  expect(typeof window.kakao.maps.event.addListener).toBe("function")
})
