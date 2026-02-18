import { createMock, mockInstances } from "./mockCore"

export class AbstractOverlay implements kakao.maps.AbstractOverlay {
  private map: kakao.maps.Map | null = null

  public draw = createMock(() => {})
  public onAdd = createMock(() => {})
  public onRemove = createMock(() => {})

  public setMap = createMock((map: kakao.maps.Map | null) => {
    this.map = map
    if (map) {
      this.onAdd()
      this.draw()
    } else {
      this.onRemove()
    }
  })

  public getMap() {
    return this.map
  }

  public getPanels(): kakao.maps.MapPanels {
    throw new Error("getPanels is not implemented in AbstractOverlay mock")
  }

  public getProjection(): kakao.maps.MapProjection {
    throw new Error("getProjection is not implemented in AbstractOverlay mock")
  }

  constructor() {
    mockInstances.add(AbstractOverlay, this)
  }
}
