/// <reference types="kakao.maps.d.ts" />

import "@testing-library/jest-dom/jest-globals"
import { jest, beforeEach, afterEach } from "@jest/globals"
import { cleanup } from "@testing-library/react"
import {
  initializeKakaoMock,
  mockInstances,
} from "./__test__/mocks/kakaoMapsMock"

beforeEach(() => {
  initializeKakaoMock()
})

afterEach(() => {
  cleanup()
  mockInstances.clearAll()
  jest.clearAllMocks()
})
