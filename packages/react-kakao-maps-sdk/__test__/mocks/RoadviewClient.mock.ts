import { mockInstances } from "./mockCore"

export class RoadviewClient implements kakao.maps.RoadviewClient {
  constructor() {
    mockInstances.add(RoadviewClient, this)
  }

  getNearestPanoId(
    _position: kakao.maps.LatLng,
    _radius: number,
    callback: (id: number) => void,
  ): number {
    callback(1)
    return 1
  }
}
