import { createMock, mockInstances } from "./mockCore"

export class KakaoMap {
  private center: kakao.maps.LatLng

  private toLatLng(
    center: kakao.maps.LatLng | kakao.maps.Coords,
  ): kakao.maps.LatLng {
    if ("toLatLng" in center) {
      return center.toLatLng()
    }

    return center
  }

  public setCenter = createMock<void, [kakao.maps.LatLng]>((center) => {
    this.center = center
  })
  public getCenter = createMock<kakao.maps.LatLng>(() => this.center)

  public panTo = createMock<void, [kakao.maps.LatLng]>((center) => {
    this.center = center
  })

  public setDraggable = createMock<void, [unknown]>()
  public setZoomable = createMock<void, [unknown]>()
  public setKeyboardShortcuts = createMock<void, [unknown]>()
  public setLevel = createMock<void, [unknown]>()
  public setMapTypeId = createMock<void, [unknown]>()
  public setProjectionId = createMock<void, [unknown]>()
  public setMinLevel = createMock<void, [unknown]>()
  public setMaxLevel = createMock<void, [unknown]>()
  public addOverlayMapTypeId = createMock<void, [unknown]>()
  public removeOverlayMapTypeId = createMock<void, [unknown]>()
  public addControl = createMock<void, [unknown]>()
  public removeControl = createMock<void, [unknown]>()

  constructor(_container: HTMLElement, options: kakao.maps.MapOptions) {
    this.center = this.toLatLng(options.center)
    mockInstances.add(KakaoMap, this)
  }
}
