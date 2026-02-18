import { createMock, mockInstances } from "./mockCore"

export class Ellipse implements kakao.maps.Ellipse {
  public setMap = createMock<void, [kakao.maps.Map | null]>()
  public setOptions = createMock<void, [Partial<kakao.maps.EllipseOptions>]>()
  public setPosition = createMock<void, [kakao.maps.LatLng]>()
  public setRadius = createMock<void, [number, number]>()
  public setZIndex = createMock<void, [number]>()
  public getBounds(): kakao.maps.LatLngBounds {
    throw new Error("getBounds is not implemented in Ellipse mock")
  }

  constructor(options: kakao.maps.EllipseOptions) {
    this.setPosition(options.center)
    this.setRadius(options.rx, options.ry)
    this.setZIndex(options.zIndex ?? 0)
    this.setOptions({
      fillColor: options.fillColor,
      fillOpacity: options.fillOpacity,
      strokeColor: options.strokeColor,
      strokeOpacity: options.strokeOpacity,
      strokeStyle: options.strokeStyle,
      strokeWeight: options.strokeWeight,
    })
    mockInstances.add(Ellipse, this)
  }

  public getMap(): kakao.maps.Map | null {
    throw new Error("getMap is not implemented in Ellipse mock")
  }

  public getOptions(): Partial<kakao.maps.EllipseOptions> {
    throw new Error("getOptions is not implemented in Ellipse mock")
  }

  public getPosition(): kakao.maps.LatLng {
    throw new Error("getPosition is not implemented in Ellipse mock")
  }

  public getRadius(): { rx: number; ry: number } {
    throw new Error("getRadius is not implemented in Ellipse mock")
  }

  public getRadiusX(): number {
    throw new Error("getRadiusX is not implemented in Ellipse mock")
  }

  public getRadiusY(): number {
    throw new Error("getRadiusY is not implemented in Ellipse mock")
  }

  public getZIndex(): number {
    throw new Error("getZIndex is not implemented in Ellipse mock")
  }
}
