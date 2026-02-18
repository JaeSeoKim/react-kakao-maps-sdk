import { createMock, mockInstances } from "./mockCore"
import { LatLng } from "./primitives.mock"

export class Marker implements kakao.maps.Marker {
  private map: kakao.maps.Map | kakao.maps.Roadview | null = null
  private position: kakao.maps.LatLng
  private image: kakao.maps.MarkerImage | undefined

  public setMap = createMock<
    void,
    [kakao.maps.Map | kakao.maps.Roadview | null]
  >((map) => {
    this.map = map
  })
  public getMap = createMock<kakao.maps.Map | kakao.maps.Roadview | null>(
    () => this.map,
  )

  public setPosition = createMock<void, [kakao.maps.LatLng]>((position) => {
    this.position = position
  })
  public getPosition = createMock<kakao.maps.LatLng>(() => this.position)

  public setImage = createMock<void, [kakao.maps.MarkerImage]>((image) => {
    this.image = image
  })
  public getImage = createMock<kakao.maps.MarkerImage | undefined>(
    () => this.image,
  )

  public setAltitude = createMock<void, [number]>()
  public setClickable = createMock<void, [boolean]>()
  public setDraggable = createMock<void, [boolean]>()
  public setOpacity = createMock<void, [number]>()
  public setRange = createMock<void, [number]>()
  public setTitle = createMock<void, [string]>()
  public setZIndex = createMock<void, [number]>()

  private isLatLng(value: unknown): value is kakao.maps.LatLng {
    return (
      typeof value === "object" &&
      value !== null &&
      "getLat" in value &&
      "getLng" in value
    )
  }

  constructor(
    options: kakao.maps.MarkerOptions = {} as kakao.maps.MarkerOptions,
  ) {
    this.map = options.map ?? null
    this.position = this.isLatLng(options.position)
      ? options.position
      : new LatLng(0, 0)
    this.image = options.image
    mockInstances.add(Marker, this)
  }

  public getZIndex(): number {
    throw new Error("getZIndex is not implemented in Marker mock")
  }
  public setVisible = createMock<void, [boolean]>()
  public getVisible(): boolean {
    throw new Error("getVisible is not implemented in Marker mock")
  }
  public getTitle(): string {
    throw new Error("getTitle is not implemented in Marker mock")
  }
  public getClickable(): boolean {
    throw new Error("getClickable is not implemented in Marker mock")
  }
  public getDraggable(): boolean {
    throw new Error("getDraggable is not implemented in Marker mock")
  }
  public getAltitude(): number {
    throw new Error("getAltitude is not implemented in Marker mock")
  }
  public getRange(): number {
    throw new Error("getRange is not implemented in Marker mock")
  }
  public getOpacity(): number {
    throw new Error("getOpacity is not implemented in Marker mock")
  }
}
