import { createMock, mockInstances } from "./mockCore"

export class Polygon implements kakao.maps.Polygon {
  public setMap = createMock<void, [kakao.maps.Map | null]>()
  public setOptions = createMock<void, [Partial<kakao.maps.PolygonOptions>]>()
  public setPath = createMock<
    void,
    [kakao.maps.LatLng[] | kakao.maps.LatLng[][]]
  >()
  public setZIndex = createMock<void, [number]>()
  public getLength(): number {
    throw new Error("getLength is not implemented in Polygon mock")
  }
  public getArea(): number {
    throw new Error("getArea is not implemented in Polygon mock")
  }

  constructor(options: kakao.maps.PolygonOptions) {
    this.setPath(options.path)
    this.setZIndex(options.zIndex ?? 0)
    this.setOptions({
      fillColor: options.fillColor,
      fillOpacity: options.fillOpacity,
      strokeColor: options.strokeColor,
      strokeOpacity: options.strokeOpacity,
      strokeStyle: options.strokeStyle,
      strokeWeight: options.strokeWeight,
    })
    mockInstances.add(Polygon, this)
  }

  public getMap(): kakao.maps.Map | null {
    throw new Error("getMap is not implemented in Polygon mock")
  }

  public getOptions(): Partial<kakao.maps.PolygonOptions> {
    throw new Error("getOptions is not implemented in Polygon mock")
  }

  public getPath(): kakao.maps.LatLng[] | kakao.maps.LatLng[][] {
    throw new Error("getPath is not implemented in Polygon mock")
  }

  public getZIndex(): number {
    throw new Error("getZIndex is not implemented in Polygon mock")
  }
}
