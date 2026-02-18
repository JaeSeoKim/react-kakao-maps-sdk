import { test, expect } from "@playwright/test"
import { getTestUrl, waitNetworkIdleWithTimeout } from "../util"

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getTestUrl(
    "addMapBoundsChangedEvent",
    testInfo.config.updateSnapshots === "all",
  )
  await page.goto(url, { waitUntil: "networkidle" })
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot()

  const mapBoundingBox = await page.locator("#map").boundingBox()
  await page.mouse.move(mapBoundingBox!.x, mapBoundingBox!.y)
  await page.mouse.down()
  await page.mouse.move(
    mapBoundingBox!.x + mapBoundingBox!.width / 2,
    mapBoundingBox!.y + mapBoundingBox!.height / 2,
  )
  await waitNetworkIdleWithTimeout(page)

  await expect(page.locator("#result")).toHaveText(
    "영역좌표는 남서쪽 위도, 경도는  (33.45065294391403, 126.55706658514791)이고 북동쪽 위도, 경도는  (33.45385631221043, 126.57064566190085)입니다 ",
  )
  await page.mouse.move(
    mapBoundingBox!.x + mapBoundingBox!.width / 3,
    mapBoundingBox!.y + mapBoundingBox!.height / 3,
  )
  await page.mouse.up()
  await waitNetworkIdleWithTimeout(page)
  await expect(page.locator("#result")).toHaveText(
    "영역좌표는 남서쪽 위도, 경도는  (33.45012909463751, 126.55933862932383)이고 북동쪽 위도, 경도는  (33.45333221438989, 126.57291771102653)입니다 ",
  )
})
