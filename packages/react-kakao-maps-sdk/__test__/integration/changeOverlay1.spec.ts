import { test, expect } from "@playwright/test"
import { getTestUrl, waitNetworkIdleWithTimeout } from "../util"

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getTestUrl(
    "changeOverlay1",
    testInfo.config.updateSnapshots === "all",
  )
  await page.goto(url, { waitUntil: "networkidle" })
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot({
    maxDiffPixelRatio: 0.01,
  })

  await page.getByText("교통정보 보기").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot({
    maxDiffPixelRatio: 0.01,
  })

  await page.getByText("로드뷰 도로정보 보기").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot({
    maxDiffPixelRatio: 0.01,
  })

  await page.getByText("지형정보 보기").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot({
    maxDiffPixelRatio: 0.01,
  })

  await page.getByText("지적편집도 보기").click()
  await waitNetworkIdleWithTimeout(page)
  await expect(page).toHaveScreenshot({
    maxDiffPixelRatio: 0.01,
  })
})
