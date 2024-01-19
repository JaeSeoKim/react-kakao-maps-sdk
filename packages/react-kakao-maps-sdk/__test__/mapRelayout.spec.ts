import { test, expect } from "@playwright/test"
import { getTestUrl, waitNetworkIdleWithTimeout } from "./util"

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getTestUrl(
    "mapRelayout",
    testInfo.config.updateSnapshots === "all",
  )
  await page.goto(url, { waitUntil: "networkidle" })
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot()

  await page.getByText("지도 크기 바꾸기").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot()

  await page.getByText("relayout 호출하기").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot()
})
