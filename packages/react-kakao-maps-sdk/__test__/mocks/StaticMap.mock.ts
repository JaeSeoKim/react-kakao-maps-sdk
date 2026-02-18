import { createMock, mockInstances } from "./mockCore"

export class StaticMap implements kakao.maps.StaticMap {
  public setCenter = createMock<void, [kakao.maps.LatLng]>()
  public setLevel = createMock<void, [number]>()
  public setMapTypeId = createMock<void, [kakao.maps.MapTypeId]>()

  constructor(_container: HTMLElement, options: kakao.maps.StaticMapOptions) {
    this.setCenter(options.center)
    this.setLevel(options.level ?? 3)
    this.setMapTypeId(
      (options.mapTypeId as kakao.maps.MapTypeId) ??
        window.kakao.maps.MapTypeId.ROADMAP,
    )
    mockInstances.add(StaticMap, this)
  }

  public getCenter(): kakao.maps.LatLng {
    throw new Error("getCenter is not implemented in StaticMap mock")
  }

  public getLevel(): number {
    throw new Error("getLevel is not implemented in StaticMap mock")
  }

  public getMapTypeId(): kakao.maps.MapTypeId {
    throw new Error("getMapTypeId is not implemented in StaticMap mock")
  }
}
