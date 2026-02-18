import { createMock, mockInstances } from "./mockCore"

export class Rectangle implements kakao.maps.Rectangle {
  public setMap = createMock<void, [kakao.maps.Map | null]>()
  public setOptions = createMock<void, [Partial<kakao.maps.RectangleOptions>]>()
  public setBounds = createMock<void, [kakao.maps.LatLngBounds]>()
  public setZIndex = createMock<void, [number]>()

  constructor(options: kakao.maps.RectangleOptions) {
    this.setBounds(options.bounds)
    this.setZIndex(options.zIndex ?? 0)
    this.setOptions({
      fillColor: options.fillColor,
      fillOpacity: options.fillOpacity,
      strokeColor: options.strokeColor,
      strokeOpacity: options.strokeOpacity,
      strokeStyle: options.strokeStyle,
      strokeWeight: options.strokeWeight,
    })
    mockInstances.add(Rectangle, this)
  }

  public getMap(): kakao.maps.Map | null {
    throw new Error("getMap is not implemented in Rectangle mock")
  }

  public getOptions(): Partial<kakao.maps.RectangleOptions> {
    throw new Error("getOptions is not implemented in Rectangle mock")
  }

  public getBounds(): kakao.maps.LatLngBounds {
    throw new Error("getBounds is not implemented in Rectangle mock")
  }

  public getZIndex(): number {
    throw new Error("getZIndex is not implemented in Rectangle mock")
  }
}
