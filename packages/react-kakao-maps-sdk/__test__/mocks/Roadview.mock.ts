import { createMock, mockInstances } from "./mockCore"
import { LatLng } from "./primitives.mock"

export class Roadview implements kakao.maps.Roadview {
  private position: kakao.maps.LatLng
  private panoId: number
  private viewpoint: kakao.maps.Viewpoint

  public getPosition = createMock<kakao.maps.LatLng>(() => this.position)
  public getPanoId = createMock<number>(() => this.panoId)
  public getViewpoint = createMock<kakao.maps.Viewpoint>(() => {
    return new window.kakao.maps.Viewpoint(
      this.viewpoint.pan,
      this.viewpoint.tilt,
      this.viewpoint.zoom,
      this.panoId,
    )
  })
  public setViewpoint = createMock<void, [kakao.maps.Viewpoint]>((vp) => {
    this.viewpoint = vp
  })
  public setPanoId = createMock<void, [number, kakao.maps.LatLng]>(
    (panoId, position) => {
      this.panoId = Number(panoId)
      this.position = position
    },
  )

  public getViewpointWithPanoId(): kakao.maps.Viewpoint & { panoId: number } {
    throw new Error(
      "getViewpointWithPanoId is not implemented in Roadview mock",
    )
  }
  public getProjection(): kakao.maps.MapProjection {
    throw new Error("getProjection is not implemented in Roadview mock")
  }
  public relayout() {
    throw new Error("relayout is not implemented in Roadview mock")
  }

  constructor(
    _container: HTMLElement,
    options: kakao.maps.RoadviewOptions = {} as kakao.maps.RoadviewOptions,
  ) {
    this.position = new LatLng(options.panoY ?? 0, options.panoX ?? 0)
    this.panoId = options.panoId ?? 0
    this.viewpoint = new window.kakao.maps.Viewpoint(
      options.pan ?? 0,
      options.tilt ?? 0,
      options.zoom ?? 0,
      this.panoId,
    )
    mockInstances.add(Roadview, this)
  }
}
