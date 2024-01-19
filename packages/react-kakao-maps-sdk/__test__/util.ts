import { Page } from "@playwright/test"

/**
 * networkidle 상태를 기준으로 기다리는 경우 dev 환경에서는 정상적으로 테스트가 통과하지만,
 * 사양이 낮은 CI 환경에서는 networkidle로는 js에서 network를 발생 시키자 못하므로 timeout를 함께 사용한다.
 */
export const waitNetworkIdleWithTimeout = async (
  /**
   * playwright에서 사용중인 page 객체
   */
  page: Page,
  /**
   * 추가적으로 기다리게 할 시간을 지정한다. `ms` 단위, 1초의 경우 1000을 전달해야 함.
   * @default 300
   */
  timeout?: number,
) => {
  await page.waitForLoadState("networkidle")
  await page.waitForTimeout(timeout ?? 300)
  await page.waitForLoadState("networkidle")
}

/**
 * 실제 테스트 대상의 URL를 가져오는 함수
 * `isUpdateSanpShots`가 활성화 된 경우 kakao에서 제작한 sample를 가지고 렌더링 및 테스트 진행
 */
export const getTestUrl = (id: string, isUpdateSanpShots: boolean = false) =>
  isUpdateSanpShots
    ? `http://127.0.0.1:5252/samples/${id}.html`
    : `/samples/${id}`
