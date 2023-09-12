import { test, expect } from "@playwright/test"

const getUrl = (id: string, isUpdateSanpShots: boolean = false) =>
  isUpdateSanpShots
    ? `http://127.0.0.1:5252/samples/${id}.html`
    : `/samples/${id}`

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getUrl(
    "enableDisableZoomInOut",
    testInfo.config.updateSnapshots === "all",
  )
  await page.goto(url, { waitUntil: "networkidle" })
  await expect(page).toHaveScreenshot("firstRender.png")

  await page.getByText("지도 확대/축소 끄기").click()
  await page.locator("#map").hover()
  await page.mouse.wheel(0, 1000)
  await page.waitForLoadState("networkidle")
  expect(await page.screenshot()).toMatchSnapshot("firstRender.png")
  await expect(page).toHaveScreenshot()

  await page.getByText("지도 확대/축소 켜기").click()
  await page.locator("#map").hover()
  await page.mouse.wheel(0, 300)
  await page.waitForLoadState("networkidle")
  expect(await page.screenshot()).not.toMatchSnapshot("firstRender.png")
  await expect(page).toHaveScreenshot()
})
