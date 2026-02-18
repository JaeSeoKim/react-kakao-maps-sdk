import { mockInstances } from "./mockCore"

export class MapTypeControl implements kakao.maps.MapTypeControl {
  constructor() {
    mockInstances.add(MapTypeControl, this)
  }
}
