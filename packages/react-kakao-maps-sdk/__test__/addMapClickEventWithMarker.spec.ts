import { test, expect } from "@playwright/test"

const getUrl = (id: string, isUpdateSanpShots: boolean = false) =>
  isUpdateSanpShots
    ? `http://127.0.0.1:5252/samples/${id}.html`
    : `/samples/${id}`

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getUrl(
    "addMapClickEventWithMarker",
    testInfo.config.updateSnapshots === "all",
  )
  await page.goto(url, { waitUntil: "networkidle" })
  await page.waitForLoadState("networkidle")
  await expect(page).toHaveScreenshot({
    maxDiffPixels: 120, // map의 center값을 넘겼지만, `map.getCenter()` 시 넘어오는 값이 정확하게 일치하지 않아서 fail 나는 부분을 무시
  })

  const mapBoundingBox = await page.locator("#map").boundingBox()
  await page.mouse.click(mapBoundingBox!.x, mapBoundingBox!.y)
  await expect(page.locator("#clickLatlng")).toHaveText(
    "클릭한 위치의 위도는 33.452254813152855 이고, 경도는 126.5638559967347 입니다",
  )
  await expect(page).toHaveScreenshot()

  await page.mouse.click(
    mapBoundingBox!.x + mapBoundingBox!.width / 2,
    mapBoundingBox!.y + mapBoundingBox!.height / 2,
  )
  await expect(page.locator("#clickLatlng")).toHaveText(
    "클릭한 위치의 위도는 33.450700761312206 이고, 경도는 126.57066121198349 입니다",
  )
  await expect(page).toHaveScreenshot()
})
