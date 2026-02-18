import { createMock, createRoot, mockInstances } from "./mockCore"
import { LatLng } from "./primitives.mock"

export class CustomOverlay implements kakao.maps.CustomOverlay {
  private root: HTMLElement
  private content: string | HTMLElement
  private map: kakao.maps.Map | kakao.maps.Roadview | null = null
  private position: kakao.maps.LatLng
  private visible = true
  private zIndex = 0
  private altitude = 0
  private range = 500

  private syncContentRoot() {
    this.root.innerHTML = ""
    if (typeof this.content === "string") {
      this.root.innerHTML = this.content
      return
    }

    this.root.appendChild(this.content)
  }

  private syncMount() {
    if (this.map) {
      if (!this.root.isConnected) document.body.appendChild(this.root)
      return
    }

    this.root.remove()
  }

  public setMap = createMock(
    (map: kakao.maps.Map | kakao.maps.Roadview | null) => {
      this.map = map
      this.syncMount()
    },
  )

  public getContent = createMock(() => this.content)

  public setContent = createMock((content: string | HTMLElement) => {
    this.content = content
    this.syncContentRoot()
  })

  public setPosition = createMock((position: kakao.maps.LatLng) => {
    this.position = position
  })

  public setZIndex = createMock((zIndex: number) => {
    this.zIndex = zIndex
  })

  public setAltitude = createMock((altitude: number) => {
    this.altitude = altitude
  })

  public setRange = createMock((range: number) => {
    this.range = range
  })

  public setVisible = createMock((visible: boolean) => {
    this.visible = visible
  })

  public getMap(): kakao.maps.Map | null {
    const KakaoMap = globalThis.kakao?.maps.Map
    if (!KakaoMap || !this.map) return null

    return this.map instanceof KakaoMap ? this.map : null
  }

  public getPosition(): kakao.maps.LatLng {
    return this.position
  }

  public getVisible(): boolean {
    return this.visible
  }

  public getZIndex(): number {
    return this.zIndex
  }

  public getAltitude(): number {
    return this.altitude
  }

  public getRange(): number {
    return this.range
  }

  constructor(options: kakao.maps.CustomOverlayOptions) {
    this.root = createRoot("CustomOverlay")
    this.content = options.content ?? ""
    this.position =
      options.position instanceof LatLng ? options.position : new LatLng(0, 0)
    this.map = options.map ?? null
    this.zIndex = options.zIndex ?? 0
    this.syncContentRoot()
    this.syncMount()
    mockInstances.add(CustomOverlay, this)
  }
}
