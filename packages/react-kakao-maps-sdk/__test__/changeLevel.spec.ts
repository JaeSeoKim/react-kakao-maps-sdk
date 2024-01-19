import { test, expect } from "@playwright/test"
import { getTestUrl, waitNetworkIdleWithTimeout } from "./util"

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getTestUrl(
    "changeLevel",
    testInfo.config.updateSnapshots === "all",
  )
  await page.goto(url, { waitUntil: "networkidle" })
  await expect(page.locator("#maplevel")).toHaveText(
    "현재 지도 레벨은 3 레벨 입니다.",
  )
  await expect(page).toHaveScreenshot()

  page.getByText("지도레벨 + 1").click()
  page.getByText("지도레벨 + 1").click()
  page.getByText("지도레벨 + 1").click()
  await expect(page.locator("#maplevel")).toHaveText(
    "현재 지도 레벨은 6 레벨 입니다.",
  )
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot()

  await page.getByText("지도레벨 - 1").click()
  await page.getByText("지도레벨 - 1").click()
  await expect(page.locator("#maplevel")).toHaveText(
    "현재 지도 레벨은 4 레벨 입니다.",
  )
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot()
})
