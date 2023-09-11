import { test, expect } from "@playwright/test"

const getUrl = (id: string, isUpdateSanpShots: boolean = false) =>
  isUpdateSanpShots
    ? `http://127.0.0.1:5252/samples/${id}.html`
    : `/samples/${id}`

test("ScreenShot 렌더링 결과 비교", async ({ page }, testInfo) => {
  const url = getUrl("mapInfo", testInfo.config.updateSnapshots === "all")
  await page.goto(url, { waitUntil: "networkidle" })
  await expect(page).toHaveScreenshot()

  await page.locator("#getInfoBtn").click()
  await expect(page).toHaveScreenshot()
  await expect(page.locator("#info")).toHaveText(
    `지도 중심좌표는 위도 33.450700761312206, 경도 126.57066121198349 이고 지도 레벨은 3 입니다  지도 타입은 1 이고  지도의 남서쪽 좌표는 33.449099264271794, 126.56387179175788 이고 북동쪽 좌표는 33.45230188814768, 126.57745088565449 입니다`,
  )

  await page.getByTitle("스카이뷰").click()
  await page.locator("#getInfoBtn").click()
  await expect(page.locator("#info")).toHaveText(
    `지도 중심좌표는 위도 33.450700761312206, 경도 126.57066121198349 이고 지도 레벨은 3 입니다  지도 타입은 3 이고  지도의 남서쪽 좌표는 33.449099264271794, 126.56387179175788 이고 북동쪽 좌표는 33.45230188814768, 126.57745088565449 입니다`,
  )
  await page.waitForLoadState("networkidle")
  await expect(page).toHaveScreenshot()
})
