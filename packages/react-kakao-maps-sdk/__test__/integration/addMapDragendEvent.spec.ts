import { test, expect } from "@playwright/test"
import { getTestUrl, waitNetworkIdleWithTimeout } from "../util"

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getTestUrl(
    "addMapDragendEvent",
    testInfo.config.updateSnapshots === "all",
  )
  await page.goto(url, { waitUntil: "networkidle" })
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot()

  const drag = async () => {
    const mapBoundingBox = await page.locator("#map").boundingBox()
    await page.mouse.move(mapBoundingBox!.x, mapBoundingBox!.y)
    await page.mouse.down()
    await page.mouse.move(
      mapBoundingBox!.x + mapBoundingBox!.width / 2,
      mapBoundingBox!.y + mapBoundingBox!.height / 2,
    )
    await page.mouse.up()
    await waitNetworkIdleWithTimeout(page)
  }

  await drag()
  await expect(page.locator("#result")).toHaveText(
    "변경된 지도 중심좌표는 33.452254813152855 이고, 경도는 126.5638559967347 입니다",
  )

  await drag()
  await expect(page.locator("#result")).toHaveText(
    "변경된 지도 중심좌표는 33.453808489118444 이고, 경도는 126.55705054272451 입니다",
  )
})
