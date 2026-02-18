import { test, expect } from "@playwright/test"
import { getTestUrl, waitNetworkIdleWithTimeout } from "../util"

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getTestUrl(
    "addMapCenterChangedEvent",
    testInfo.config.updateSnapshots === "all",
  )
  await page.goto(url, { waitUntil: "networkidle" })
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot()

  const mapBoundingBox = await page.locator("#map").boundingBox()
  await page.mouse.move(mapBoundingBox!.x, mapBoundingBox!.y)
  await page.mouse.wheel(0, 10)
  await page.mouse.down()
  await page.mouse.move(
    mapBoundingBox!.x + mapBoundingBox!.width / 2,
    mapBoundingBox!.y + mapBoundingBox!.height / 2,
  )
  await waitNetworkIdleWithTimeout(page)

  await expect(page.locator("#result")).toHaveText(
    "지도 레벨은 4 이고중심 좌표는 위도 33.44914633366172, 경도 126.57746618837292입니다",
  )
  await page.mouse.move(
    mapBoundingBox!.x + mapBoundingBox!.width / 3,
    mapBoundingBox!.y + mapBoundingBox!.height / 3,
  )
  await page.mouse.up()
  await page.mouse.wheel(0, -3)
  await waitNetworkIdleWithTimeout(page)
  await expect(page.locator("#result")).toHaveText(
    "지도 레벨은 3 이고중심 좌표는 위도 33.449670516261634, 경도 126.5751942751081입니다",
  )
})
