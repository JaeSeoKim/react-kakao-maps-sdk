import { test, expect } from "@playwright/test"

const getUrl = (id: string, isUpdateSanpShots: boolean = false) =>
  isUpdateSanpShots
    ? `http://127.0.0.1:5252/samples/${id}.html`
    : `/samples/${id}`

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getUrl(
    "disableMapDragMove",
    testInfo.config.updateSnapshots === "all",
  )
  await page.goto(url, { waitUntil: "networkidle" })
  await expect(page).toHaveScreenshot()
  const firstRenderScreenshot = await page.screenshot()

  const drag = async () => {
    const mapBoundingBox = await page.locator("#map").boundingBox()
    await page.mouse.move(mapBoundingBox!.x, mapBoundingBox!.y)
    await page.mouse.down()
    await page.mouse.move(
      mapBoundingBox!.x + mapBoundingBox!.width / 2,
      mapBoundingBox!.y + mapBoundingBox!.height / 2,
    )
    await page.mouse.up()
    await page.waitForLoadState("networkidle")
  }

  await page.getByText("지도 드래그 이동 끄기").click()
  await drag()
  expect(await page.screenshot()).toStrictEqual(firstRenderScreenshot)
  await expect(page).toHaveScreenshot()

  await page.getByText("지도 드래그 이동 켜기").click()
  await drag()
  expect(await page.screenshot()).not.toStrictEqual(firstRenderScreenshot)
  await expect(page).toHaveScreenshot()
})
