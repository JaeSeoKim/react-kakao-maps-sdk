import { createMock, createRoot, mockInstances } from "./mockCore"

export class InfoWindow implements kakao.maps.InfoWindow {
  private root: HTMLElement
  private content: string | Node
  private map: kakao.maps.Map | kakao.maps.Roadview | null = null

  public open = createMock<void, [unknown, unknown?]>((_map, _marker) => {
    this.map = (_map as kakao.maps.Map | kakao.maps.Roadview | null) ?? null
    if (!this.root.isConnected) document.body.appendChild(this.root)
  })
  public close = createMock(() => {
    this.map = null
    this.root.remove()
  })
  public getContent = createMock<string | HTMLElement>(
    () => this.content as string | HTMLElement,
  )
  public setContent = createMock<void, [string | HTMLElement]>((content) => {
    this.content = content
    this.root.innerHTML = ""
    if (typeof content === "string") this.root.innerHTML = content
    else if (content) this.root.appendChild(content)
  })
  public setPosition = createMock()
  public setAltitude = createMock()
  public setRange = createMock()
  public setZIndex = createMock()

  public getMap(): kakao.maps.Map | kakao.maps.Roadview {
    if (!this.map)
      throw new Error("getMap is not implemented in InfoWindow mock")
    return this.map
  }
  public getPosition(): kakao.maps.LatLng {
    throw new Error("getPosition is not implemented in InfoWindow mock")
  }
  public getZIndex(): number {
    throw new Error("getZIndex is not implemented in InfoWindow mock")
  }
  public getAltitude(): number {
    throw new Error("getAltitude is not implemented in InfoWindow mock")
  }
  public getRange(): number {
    throw new Error("getRange is not implemented in InfoWindow mock")
  }

  constructor(
    options: kakao.maps.InfoWindowOptions = {} as kakao.maps.InfoWindowOptions,
  ) {
    this.root = createRoot("InfoWindow")
    this.content =
      typeof options.content === "string"
        ? options.content
        : options.content instanceof Node
        ? options.content
        : ""
    if (typeof this.content === "string") this.root.innerHTML = this.content
    else if (this.content) this.root.appendChild(this.content)
    mockInstances.add(InfoWindow, this)
  }
}
