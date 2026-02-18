import { mockInstances } from "./mockCore"

export class ZoomControl implements kakao.maps.ZoomControl {
  constructor() {
    mockInstances.add(ZoomControl, this)
  }
}
