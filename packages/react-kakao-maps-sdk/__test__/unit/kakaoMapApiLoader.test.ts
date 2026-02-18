import { expect, jest, test } from "@jest/globals"

import { Loader } from "../../src"

const LOADER_OPTIONS = { appkey: "test-appkey" }

test("Loader.load resolves with kakao object and uses kakao.maps.load", async () => {
  // Arrange
  const loadSpy = jest.spyOn(window.kakao.maps, "load")
  const loader = new Loader(LOADER_OPTIONS)

  // Act
  const kakaoObject = await loader.load()

  // Assert
  expect(kakaoObject).toBe(window.kakao)
  expect(loadSpy).toHaveBeenCalled()

  loadSpy.mockRestore()
})

test("Loader add/remove load listener controls kakao.maps.load callback notifications", async () => {
  // Arrange
  const listener = jest.fn()
  const callback = Loader.addLoadEventLisnter(listener)
  listener.mockClear()

  Loader.removeLoadEventLisnter(callback)

  const loader = new Loader(LOADER_OPTIONS)

  // Act
  await loader.load()

  // Assert
  expect(listener).not.toHaveBeenCalled()
})

test("Loader.createUrl composes appkey, libraries and autoload=false", () => {
  // Arrange
  const loader = new Loader({
    ...LOADER_OPTIONS,
    libraries: ["services", "clusterer"],
  })

  // Act
  const url = loader.createUrl()

  // Assert
  expect(url).toContain("appkey=test-appkey")
  expect(url).toContain("libraries=services,clusterer")
  expect(url).toContain("autoload=false")
})

test("Loader reuses singleton instance for equal options", () => {
  // Arrange
  const firstLoader = new Loader(LOADER_OPTIONS)

  // Act
  const secondLoader = new Loader(LOADER_OPTIONS)

  // Assert
  expect(secondLoader).toBe(firstLoader)
})

test("Loader warns when Kakao Maps is already loaded", async () => {
  // Arrange
  const warnSpy = jest.spyOn(console, "warn").mockImplementation(() => {})
  const loader = new Loader(LOADER_OPTIONS)

  // Act
  await loader.load()

  // Assert
  expect(warnSpy).toHaveBeenCalled()

  warnSpy.mockRestore()
})
