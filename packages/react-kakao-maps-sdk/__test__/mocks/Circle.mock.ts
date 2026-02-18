import { createMock, mockInstances } from "./mockCore"

export class Circle implements kakao.maps.Circle {
  public setMap = createMock<void, [kakao.maps.Map | null]>()
  public setOptions = createMock<void, [Partial<kakao.maps.CircleOptions>]>()
  public setPosition = createMock<void, [kakao.maps.LatLng]>()
  public setRadius = createMock<void, [number]>()
  public setZIndex = createMock<void, [number]>()

  constructor(options: kakao.maps.CircleOptions) {
    this.setPosition(options.center)
    this.setRadius(options.radius)
    this.setZIndex(options.zIndex ?? 0)
    this.setOptions({
      fillColor: options.fillColor,
      fillOpacity: options.fillOpacity,
      strokeColor: options.strokeColor,
      strokeOpacity: options.strokeOpacity,
      strokeStyle: options.strokeStyle,
      strokeWeight: options.strokeWeight,
    })
    mockInstances.add(Circle, this)
  }

  public getMap(): kakao.maps.Map | null {
    throw new Error("getMap is not implemented in Circle mock")
  }

  public getOptions(): Partial<kakao.maps.CircleOptions> {
    throw new Error("getOptions is not implemented in Circle mock")
  }

  public getPosition(): kakao.maps.LatLng {
    throw new Error("getPosition is not implemented in Circle mock")
  }

  public getRadius(): number {
    throw new Error("getRadius is not implemented in Circle mock")
  }

  public getZIndex(): number {
    throw new Error("getZIndex is not implemented in Circle mock")
  }

  public getBounds(): kakao.maps.LatLngBounds {
    throw new Error("getBounds is not implemented in Circle mock")
  }
}
