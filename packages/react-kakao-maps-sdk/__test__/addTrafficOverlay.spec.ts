import { test, expect } from "@playwright/test"
import { getTestUrl, waitNetworkIdleWithTimeout } from "./util"

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getTestUrl(
    "addTrafficOverlay",
    testInfo.config.updateSnapshots === "all",
  )
  await page.goto(url, { waitUntil: "networkidle" })
  await expect(page).toHaveScreenshot({
    maxDiffPixelRatio: 0.01,
  })

  const mapBoundingBox = await page.locator("#map").boundingBox()

  await page.mouse.move(mapBoundingBox!.x, mapBoundingBox!.y)
  await page.mouse.down()
  await page.mouse.move(
    mapBoundingBox!.x + mapBoundingBox!.width / 2,
    mapBoundingBox!.y + mapBoundingBox!.height / 2,
  )
  await page.mouse.up()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot({
    maxDiffPixelRatio: 0.01,
  })
})
