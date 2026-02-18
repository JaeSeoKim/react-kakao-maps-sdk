import { createMock, mockInstances } from "./mockCore"

export class Polyline implements kakao.maps.Polyline {
  public setMap = createMock<void, [kakao.maps.Map | null]>()
  public setOptions = createMock<void, [Partial<kakao.maps.PolylineOptions>]>()
  public setPath = createMock<
    void,
    [kakao.maps.LatLng[] | kakao.maps.LatLng[][]]
  >()
  public setZIndex = createMock<void, [number]>()
  public getLength(): number {
    throw new Error("getLength is not implemented in Polyline mock")
  }

  constructor(options: kakao.maps.PolylineOptions) {
    this.setPath(options.path)
    this.setZIndex(options.zIndex ?? 0)
    this.setOptions({
      endArrow: options.endArrow,
      strokeColor: options.strokeColor,
      strokeOpacity: options.strokeOpacity,
      strokeStyle: options.strokeStyle,
      strokeWeight: options.strokeWeight,
    })
    mockInstances.add(Polyline, this)
  }

  public getMap(): kakao.maps.Map | null {
    throw new Error("getMap is not implemented in Polyline mock")
  }

  public getOptions(): Partial<kakao.maps.PolylineOptions> {
    throw new Error("getOptions is not implemented in Polyline mock")
  }

  public getPath(): kakao.maps.LatLng[] | kakao.maps.LatLng[][] {
    throw new Error("getPath is not implemented in Polyline mock")
  }

  public getZIndex(): number {
    throw new Error("getZIndex is not implemented in Polyline mock")
  }
}
