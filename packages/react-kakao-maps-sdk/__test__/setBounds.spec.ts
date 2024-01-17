import { test, expect } from "@playwright/test"

const getUrl = (id: string, isUpdateSanpShots: boolean = false) =>
  isUpdateSanpShots
    ? `http://127.0.0.1:5252/samples/${id}.html`
    : `/samples/${id}`

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getUrl("setBounds", testInfo.config.updateSnapshots === "all")
  await page.goto(url, { waitUntil: "networkidle" })
  await page.waitForLoadState("networkidle")
  await expect(page).toHaveScreenshot()

  await page.getByText("지도 범위 재설정 하기").click()
  await page.waitForLoadState("networkidle")
  await expect(page).toHaveScreenshot()
})
