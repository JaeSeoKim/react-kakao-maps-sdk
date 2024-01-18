import { test, expect } from "@playwright/test"

const getUrl = (id: string, isUpdateSanpShots: boolean = false) =>
  isUpdateSanpShots
    ? `http://127.0.0.1:5252/samples/${id}.html`
    : `/samples/${id}`

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getUrl(
    "addMapClickEvent",
    testInfo.config.updateSnapshots === "all",
  )
  await page.goto(url, { waitUntil: "networkidle" })
  await page.waitForLoadState("networkidle")
  await expect(page).toHaveScreenshot()

  const mapBoundingBox = await page.locator("#map").boundingBox()
  await page.mouse.click(mapBoundingBox!.x, mapBoundingBox!.y)
  await expect(page.locator("#result")).toHaveText(
    "클릭한 위치의 위도는 33.452254813152855 이고, 경도는 126.5638559967347 입니다",
  )

  await page.mouse.click(
    mapBoundingBox!.x + mapBoundingBox!.width / 2,
    mapBoundingBox!.y + mapBoundingBox!.height / 2,
  )
  await expect(page.locator("#result")).toHaveText(
    "클릭한 위치의 위도는 33.450700761312206 이고, 경도는 126.57066121198349 입니다",
  )
})
