import { test, expect } from "@playwright/test"
import { getTestUrl, waitNetworkIdleWithTimeout } from "../util"

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getTestUrl("moveMap", testInfo.config.updateSnapshots === "all")
  await page.goto(url, { waitUntil: "networkidle" })
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot()

  await page.getByText("지도 중심좌표 부드럽게 이동시키기").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot({
    animations: "allow",
  })
  await page.getByText("지도 중심좌표 이동시키기").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot()
})
