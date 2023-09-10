import { test, expect } from "@playwright/test"

const getUrl = (id: string, isUpdateSanpShots: boolean = false) =>
  isUpdateSanpShots
    ? `http://127.0.0.1:5252/samples/${id}.html`
    : `/samples/${id}`

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getUrl(
    "addMapCustomControl",
    testInfo.config.updateSnapshots === "all",
  )
  await page.goto(url, { waitUntil: "networkidle" })
  await expect(page).toHaveScreenshot()

  await page.locator("#btnSkyview").click()
  await page.waitForLoadState("networkidle")
  await expect(page).toHaveScreenshot()

  await page.locator("#btnRoadmap").click()
  await page.waitForLoadState("networkidle")
  await expect(page).toHaveScreenshot()

  await page.getByAltText("확대").click()
  await page.getByAltText("확대").click()
  await page.getByAltText("확대").click()
  await page.waitForLoadState("networkidle")
  await expect(page).toHaveScreenshot()

  await page.getByAltText("축소").click()
  await page.waitForLoadState("networkidle")
  await expect(page).toHaveScreenshot()
})
