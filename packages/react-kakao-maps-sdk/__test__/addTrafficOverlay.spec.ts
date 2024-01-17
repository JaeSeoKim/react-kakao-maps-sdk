import { test, expect } from "@playwright/test"

const getUrl = (id: string, isUpdateSanpShots: boolean = false) =>
  isUpdateSanpShots
    ? `http://127.0.0.1:5252/samples/${id}.html`
    : `/samples/${id}`

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getUrl(
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
  await page.waitForLoadState("networkidle")
  await expect(page).toHaveScreenshot({
    maxDiffPixelRatio: 0.01,
  })
})
