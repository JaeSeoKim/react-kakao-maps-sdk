import { SIGNATURE } from "./constants"

export type Libraries = ("services" | "clusterer" | "drawing")[]

export interface LoaderOptions {
  /**
   * script 객체 생성시 사용자 정의 id
   */
  id?: string
  /**
   * 발급 받은 Kakao 지도 Javscript API 키.
   *
   * @see [준비하기](https://apis.map.kakao.com/web/guide/#ready)
   */
  appkey: string
  /**
   * 사용하는 라이브러리 목록
   *
   * Kakao 지도 Javascript API 는 지도와 함께 사용할 수 있는 라이브러리 를 지원하고 있습니다.
   * 라이브러리는 javascript API와 관련되어 있지만 조금 특화된 기능을 묶어둔 것을 말합니다. 이 기능은 추가로 불러와서 사용할 수 있도록 되어있습니다.
   * 현재 사용할 수 있는 라이브러리는 다음과 같습니다.
   *
   * clusterer: 마커를 클러스터링 할 수 있는 클러스터러 라이브러리 입니다.
   * services: 장소 검색 과 주소-좌표 변환 을 할 수 있는 services 라이브러리 입니다.
   * drawing: 지도 위에 마커와 그래픽스 객체를 쉽게 그릴 수 있게 그리기 모드를 지원하는 drawing 라이브러리 입니다.
   * 라이브러리는 계속해서 추가될 예정입니다.
   */
  libraries?: Libraries
  /**
   * 사용자 정의 Kakao 지도 javascript 경로 지정
   *
   * @default "//dapi.kakao.com/v2/maps/sdk.js"
   */
  url?: string
  /**
   * 보안을 위한 nonce 값 설정
   */
  nonce?: string
  /**
   * 스크립트 로드 재시도 횟수
   */
  retries?: number
}

export enum LoaderStatus {
  INITIALIZED,
  LOADING,
  SUCCESS,
  FAILURE,
}

const DEFAULT_ID = `${SIGNATURE}_Loader`

export type LoaderErorr = Event | string

/**
 * Kakao Map Api Loader
 *
 * `new Loader(options).load()` 함수를 이용하여 Api를 비동기적으로 삽입할 수 있습니다.
 *
 * 해당 Loader를 이용시 `react-kakao-maps-sdk` 내부에서 injection 되는 이벤트를 감지하여 kakao map api 로딩 이후에 렌더링을 진행합니다.
 */
export class Loader {
  private static instance: Loader
  private static loadEventCallback = new Set<(e?: LoaderErorr) => void>()

  public readonly id: string
  public readonly appkey: string
  public readonly url: string
  public readonly libraries: Libraries
  public readonly nonce: string | undefined
  public readonly retries: number

  private callbacks: ((e?: LoaderErorr) => void)[] = []
  private done = false
  private loading = false
  private errors: LoaderErorr[] = []
  private onEvent: LoaderErorr | undefined

  constructor({
    appkey,
    id = DEFAULT_ID,
    libraries = [],
    nonce,
    retries = 3,
    url = "//dapi.kakao.com/v2/maps/sdk.js",
  }: LoaderOptions) {
    this.id = id
    this.appkey = appkey
    this.libraries = libraries
    this.nonce = nonce
    this.retries = retries
    this.url = url

    if (
      Loader.instance &&
      !Loader.equalOptions(this.options, Loader.instance.options)
    ) {
      if (!Loader.equalOptions(this.options, Loader.instance.options)) {
        switch (Loader.instance.status) {
          case LoaderStatus.FAILURE:
            throw new Error(
              `Loader must not be called again with different options. \n${JSON.stringify(
                this.options,
                null,
                2,
              )}\n!==\n${JSON.stringify(Loader.instance.options, null, 2)}`,
            )
            break
          default:
            Loader.instance.reset()
            Loader.instance = this
            break
        }
      }
    }
    if (!Loader.instance) {
      Loader.instance = this
    }
    return Loader.instance
  }

  public get options() {
    return {
      appkey: this.appkey,
      id: this.id,
      libraries: this.libraries,
      nonce: this.nonce,
      retries: this.retries,
      url: this.url,
    }
  }

  public static addLoadEventLisnter(callback: (err?: LoaderErorr) => void) {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(callback)
    }
    Loader.loadEventCallback.add(callback)
    return callback
  }

  public static removeLoadEventLisnter(callback: (err?: LoaderErorr) => void) {
    return Loader.loadEventCallback.delete(callback)
  }

  public load(): Promise<typeof kakao> {
    return new Promise((resolve, reject) => {
      this.loadCallback((err?: LoaderErorr) => {
        if (!err) {
          resolve(window.kakao)
        } else {
          reject(err)
        }
      })
    })
  }

  public get status(): LoaderStatus {
    if (this.onEvent) {
      return LoaderStatus.FAILURE
    }
    if (this.done) {
      return LoaderStatus.SUCCESS
    }
    if (this.loading) {
      return LoaderStatus.LOADING
    }
    return LoaderStatus.INITIALIZED
  }

  private get failed(): boolean {
    return this.done && !this.loading && this.errors.length >= this.retries + 1
  }

  private loadCallback(fn: (e?: LoaderErorr) => void): void {
    this.callbacks.push(fn)
    this.execute()
  }

  private resetIfRetryingFailed(): void {
    if (this.failed) {
      this.reset()
    }
  }

  private reset(): void {
    this.deleteScript()
    this.done = true
    this.loading = false
    this.errors = []
    this.onEvent = undefined
  }

  private execute() {
    this.resetIfRetryingFailed()

    if (this.done) {
      this.callback()
    } else {
      if (window.kakao && window.kakao.maps) {
        console.warn(
          "Kakao Maps이 이미 외부 요소에 의해 로딩되어 있습니다." +
            "설정한 옵션과 일치 하지 않을 수 있으며, 이에 따른 예상치 동작이 발생할 수 있습니다.",
        )
        window.kakao.maps.load(this.callback)
        return
      }

      if (!this.loading) {
        this.loading = true
        this.setScript()
      }
    }
  }

  private setScript() {
    if (document.getElementById(this.id)) {
      this.callback()
    }

    const url = this.createUrl()
    const script = document.createElement("script")

    script.id = this.id
    script.type = "text/javascript"
    script.src = url
    script.onerror = this.loadErrorCallback.bind(this)
    script.onload = this.callback.bind(this)
    script.defer = true
    script.async = true

    if (this.nonce) {
      script.nonce = this.nonce
    }

    document.head.appendChild(script)
  }

  private loadErrorCallback(event: LoaderErorr): void {
    this.errors.push(event)

    if (this.errors.length <= this.retries) {
      const delay = this.errors.length * 2 ** this.errors.length

      console.log(`Failed to load Kakao Maps script, retrying in ${delay} ms.`)

      setTimeout(() => {
        this.deleteScript()
        this.setScript()
      }, delay)
    } else {
      this.done = true
      this.loading = false
      this.onEvent = this.errors[this.errors.length - 1]

      this.callbacks.forEach((cb) => {
        cb(this.onEvent)
      })
      this.callbacks = []

      Loader.loadEventCallback.forEach((cb) => {
        cb(this.onEvent)
      })
    }
  }

  public createUrl(): string {
    let url = this.url
    url += `?appkey=${this.appkey}`

    if (this.libraries.length) {
      url += `&libraries=${this.libraries.join(",")}`
    }

    url += `&autoload=false`

    return url
  }

  private deleteScript() {
    const script = document.getElementById(this.id)
    if (script) {
      script.remove()
    }
  }

  private callback() {
    kakao.maps.load(() => {
      Loader.instance.done = true
      Loader.instance.loading = false

      Loader.instance.callbacks.forEach((cb) => {
        cb(Loader.instance.onEvent)
      })
      Loader.instance.callbacks = []

      Loader.loadEventCallback.forEach((cb) => {
        cb(Loader.instance.onEvent)
      })
    })
  }

  private static equalOptions(
    a: typeof Loader.prototype.options,
    b: typeof Loader.prototype.options,
  ): boolean {
    if (a.appkey !== b.appkey) return false
    if (a.id !== b.id) return false

    if (a.libraries.length !== b.libraries.length) return false
    for (let i = 0; i < a.libraries.length; ++i) {
      if (a.libraries[i] !== b.libraries[i]) return false
    }
    if (a.nonce !== b.nonce) return false
    if (a.retries !== b.retries) return false
    if (a.url !== b.url) return false
    return true
  }
}
