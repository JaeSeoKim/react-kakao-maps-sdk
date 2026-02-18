import { createMock, mockInstances } from "./mockCore"

export class MarkerClusterer implements kakao.maps.MarkerClusterer {
  public setMap = createMock()
  public addMarker = createMock()
  public removeMarker = createMock()
  public addMarkers = createMock()
  public removeMarkers = createMock()
  public clear = createMock()
  public redraw = createMock()
  public setGridSize = createMock()
  public setMinClusterSize = createMock()
  public setAverageCenter = createMock()
  public setMinLevel = createMock()
  public setTexts = createMock()
  public setCalculator = createMock()
  public setStyles = createMock()

  constructor(_options: kakao.maps.MarkerClustererOptions) {
    mockInstances.add(MarkerClusterer, this)
  }

  public getGridSize(): number {
    throw new Error("getGridSize is not implemented in MarkerClusterer mock")
  }

  public getMinClusterSize(): number {
    throw new Error(
      "getMinClusterSize is not implemented in MarkerClusterer mock",
    )
  }

  public getAverageCenter(): boolean {
    throw new Error(
      "getAverageCenter is not implemented in MarkerClusterer mock",
    )
  }

  public getMinLevel(): number {
    throw new Error("getMinLevel is not implemented in MarkerClusterer mock")
  }

  public getDisableClickZoom(): boolean {
    throw new Error(
      "getDisableClickZoom is not implemented in MarkerClusterer mock",
    )
  }

  public getClickable(): boolean {
    throw new Error("getClickable is not implemented in MarkerClusterer mock")
  }

  public getHoverable(): boolean {
    throw new Error("getHoverable is not implemented in MarkerClusterer mock")
  }

  public getMap(): kakao.maps.Map | null {
    throw new Error("getMap is not implemented in MarkerClusterer mock")
  }

  public getTexts(): string[] | ((size: number) => string[]) {
    throw new Error("getTexts is not implemented in MarkerClusterer mock")
  }

  public getCalculator(): number[] | ((size: number) => number[]) {
    throw new Error("getCalculator is not implemented in MarkerClusterer mock")
  }

  public getStyles(): object[] {
    throw new Error("getStyles is not implemented in MarkerClusterer mock")
  }
}
