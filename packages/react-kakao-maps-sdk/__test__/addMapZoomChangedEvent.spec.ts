import { test, expect } from "@playwright/test"
import { getTestUrl, waitNetworkIdleWithTimeout } from "./util"

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getTestUrl(
    "addMapZoomChangedEvent",
    testInfo.config.updateSnapshots === "all",
  )
  await page.goto(url, { waitUntil: "networkidle" })
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot()

  await page.getByTitle("확대").click()
  await expect(page.locator("#result")).toHaveText("현재 지도 레벨은 2 입니다")

  await page.getByTitle("축소").click()
  await waitNetworkIdleWithTimeout(page)
  await page.getByTitle("축소").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page.locator("#result")).toHaveText("현재 지도 레벨은 4 입니다")
})
