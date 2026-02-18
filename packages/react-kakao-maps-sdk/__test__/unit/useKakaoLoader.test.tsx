import { expect, jest, test } from "@jest/globals"
import { render, waitFor } from "@testing-library/react"
import { useEffect } from "react"

import { Loader, useInjectKakaoMapApi, useKakaoLoader } from "../../src"

const LOADER_OPTIONS = { appkey: "test-appkey" }

const Probe = ({
  options = LOADER_OPTIONS,
  report,
}: {
  options?: { appkey: string; id?: string }
  report: (state: [boolean, ErrorEvent | undefined]) => void
}) => {
  const state = useKakaoLoader(options)

  useEffect(() => {
    report(state)
  }, [report, state])

  return null
}

test("useKakaoLoader updates loading state after successful load", async () => {
  // Arrange
  const loadSpy = jest
    .spyOn(Loader.prototype, "load")
    .mockResolvedValue(window.kakao)
  const report = jest.fn<(state: [boolean, ErrorEvent | undefined]) => void>()

  // Act
  render(<Probe report={report} />)

  // Assert
  await waitFor(() => {
    expect(loadSpy).toHaveBeenCalledTimes(1)
    expect(report).toHaveBeenLastCalledWith([false, undefined])
  })

  loadSpy.mockRestore()
})

test("useKakaoLoader exposes load error when Loader.load rejects", async () => {
  // Arrange
  const error = new Event("error") as unknown as ErrorEvent
  const loadSpy = jest.spyOn(Loader.prototype, "load").mockRejectedValue(error)
  const report = jest.fn<(state: [boolean, ErrorEvent | undefined]) => void>()

  // Act
  render(<Probe report={report} />)

  // Assert
  await waitFor(() => {
    expect(loadSpy).toHaveBeenCalledTimes(1)
    expect(report).toHaveBeenLastCalledWith([false, error])
  })

  loadSpy.mockRestore()
})

test("useInjectKakaoMapApi exports the same hook as useKakaoLoader", () => {
  // Arrange
  // Act
  // Assert
  expect(useInjectKakaoMapApi).toBe(useKakaoLoader)
})

test("useKakaoLoader reports initial loading state before Loader resolves", () => {
  // Arrange
  const loadSpy = jest
    .spyOn(Loader.prototype, "load")
    .mockImplementation(() => new Promise(() => {}))
  const report = jest.fn<(state: [boolean, ErrorEvent | undefined]) => void>()

  // Act
  render(<Probe report={report} />)

  // Assert
  expect(loadSpy).toHaveBeenCalledTimes(1)
  expect(report).toHaveBeenCalledWith([true, undefined])

  loadSpy.mockRestore()
})

test("useKakaoLoader reruns load when options value changes", async () => {
  // Arrange
  const loadSpy = jest
    .spyOn(Loader.prototype, "load")
    .mockResolvedValue(window.kakao)
  const report = jest.fn<(state: [boolean, ErrorEvent | undefined]) => void>()
  const { rerender } = render(
    <Probe report={report} options={{ appkey: "test-appkey", id: "first" }} />,
  )

  await waitFor(() => {
    expect(loadSpy).toHaveBeenCalledTimes(1)
  })

  // Act
  rerender(
    <Probe report={report} options={{ appkey: "test-appkey", id: "second" }} />,
  )

  // Assert
  await waitFor(() => {
    expect(loadSpy).toHaveBeenCalledTimes(2)
  })

  loadSpy.mockRestore()
})

test("useKakaoLoader does not rerun load when options value is unchanged", async () => {
  // Arrange
  const loadSpy = jest
    .spyOn(Loader.prototype, "load")
    .mockResolvedValue(window.kakao)
  const report = jest.fn<(state: [boolean, ErrorEvent | undefined]) => void>()
  const { rerender } = render(
    <Probe report={report} options={{ appkey: "test-appkey", id: "same" }} />,
  )

  await waitFor(() => {
    expect(loadSpy).toHaveBeenCalledTimes(1)
  })

  // Act
  rerender(
    <Probe report={report} options={{ appkey: "test-appkey", id: "same" }} />,
  )

  // Assert
  await waitFor(() => {
    expect(loadSpy).toHaveBeenCalledTimes(1)
  })

  loadSpy.mockRestore()
})
