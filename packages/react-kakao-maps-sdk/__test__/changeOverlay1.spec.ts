import { test, expect } from "@playwright/test"

const getUrl = (id: string, isUpdateSanpShots: boolean = false) =>
  isUpdateSanpShots
    ? `http://127.0.0.1:5252/samples/${id}.html`
    : `/samples/${id}`

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getUrl(
    "changeOverlay1",
    testInfo.config.updateSnapshots === "all",
  )
  await page.goto(url, { waitUntil: "networkidle" })
  await page.waitForLoadState("networkidle")
  await expect(page).toHaveScreenshot()

  await page.getByText("교통정보 보기").click()
  await page.waitForLoadState("networkidle")
  await expect(page).toHaveScreenshot({
    animations: "allow",
  })

  await page.getByText("로드뷰 도로정보 보기").click()
  await page.waitForLoadState("networkidle")
  await expect(page).toHaveScreenshot()

  await page.getByText("지형정보 보기").click()
  await page.waitForLoadState("networkidle")
  await expect(page).toHaveScreenshot()

  await page.getByText("지적편집도 보기").click()
  await page.waitForLoadState("networkidle")
  await expect(page).toHaveScreenshot()
})
