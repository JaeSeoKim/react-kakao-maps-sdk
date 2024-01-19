import { test, expect } from "@playwright/test"
import { getTestUrl, waitNetworkIdleWithTimeout } from "./util"

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getTestUrl(
    "addMapCustomControl",
    testInfo.config.updateSnapshots === "all",
  )
  await page.goto(url, { waitUntil: "networkidle" })
  await expect(page).toHaveScreenshot()

  await page.locator("#btnSkyview").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot()

  await page.locator("#btnRoadmap").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot()

  await page.getByAltText("확대").click()
  await page.getByAltText("확대").click()
  await page.getByAltText("확대").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot()

  await page.getByAltText("축소").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot()
})
