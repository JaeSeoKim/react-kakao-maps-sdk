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
    "enableDisableZoomInOut",
    testInfo.config.updateSnapshots === "all",
  )
  await page.goto(url, { waitUntil: "networkidle" })
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot("firstRender.png")

  await page.getByText("지도 확대/축소 끄기").click()
  await page.locator("#map").hover()
  await page.mouse.wheel(0, 1000)
  await waitNetworkIdleWithTimeout(page)
  expect(await page.screenshot()).toMatchSnapshot("firstRender.png")
  await expect(page).toHaveScreenshot()

  await page.getByText("지도 확대/축소 켜기").click()
  await page.locator("#map").hover()
  await page.mouse.wheel(0, 300)
  await waitNetworkIdleWithTimeout(page)
  expect(await page.screenshot()).not.toMatchSnapshot("firstRender.png")
  await expect(page).toHaveScreenshot()
})
