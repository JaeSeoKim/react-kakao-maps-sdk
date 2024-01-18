import { test, expect, Page } from "@playwright/test"

const waitNetworkIdleWithTimeout = async (page: Page, timeout?: number) => {
  await page.waitForLoadState("networkidle")
  await page.waitForTimeout(timeout ?? 300)
}

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
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot("firstRender.png")

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
  await waitNetworkIdleWithTimeout(page)
  expect(await page.screenshot()).toMatchSnapshot("firstRender.png")
  await expect(page).toHaveScreenshot()

  await page.getByText("지도 드래그 이동 켜기").click()
  await drag()
  await waitNetworkIdleWithTimeout(page)
  expect(await page.screenshot()).not.toMatchSnapshot("firstRender.png")
  await expect(page).toHaveScreenshot()
})
