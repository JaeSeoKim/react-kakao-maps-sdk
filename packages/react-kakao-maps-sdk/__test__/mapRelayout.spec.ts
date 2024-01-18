import { test, expect, Page } from "@playwright/test"

const expectPagetoHaveScreenshotWithWait = async (
  page: Page,
  timeout?: number,
) => {
  await page.waitForLoadState("networkidle")
  await page.waitForTimeout(timeout ?? 300)
  await expect(page).toHaveScreenshot()
}

const getUrl = (id: string, isUpdateSanpShots: boolean = false) =>
  isUpdateSanpShots
    ? `http://127.0.0.1:5252/samples/${id}.html`
    : `/samples/${id}`

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getUrl("mapRelayout", testInfo.config.updateSnapshots === "all")
  await page.goto(url, { waitUntil: "networkidle" })
  await expectPagetoHaveScreenshotWithWait(page)

  await page.getByText("지도 크기 바꾸기").click()
  await expectPagetoHaveScreenshotWithWait(page)

  await page.getByText("relayout 호출하기").click()
  await expectPagetoHaveScreenshotWithWait(page)
})
