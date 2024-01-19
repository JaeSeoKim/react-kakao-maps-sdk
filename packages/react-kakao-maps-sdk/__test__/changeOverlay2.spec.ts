import { test, expect } from "@playwright/test"
import { getTestUrl, waitNetworkIdleWithTimeout } from "./util"

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getTestUrl(
    "changeOverlay2",
    testInfo.config.updateSnapshots === "all",
  )
  await page.goto(url, { waitUntil: "networkidle" })
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot()

  await page.locator("#chkUseDistrict").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot({
    maxDiffPixelRatio: 0.01,
  })

  await page.locator("#chkTerrain").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot({
    maxDiffPixelRatio: 0.01,
  })

  await page.locator("#chkTraffic").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot({
    maxDiffPixelRatio: 0.01,
  })

  await page.locator("#chkBicycle").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot({
    maxDiffPixelRatio: 0.01,
  })

  await page.locator("#chkTerrain").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot({
    maxDiffPixelRatio: 0.01,
  })
})
