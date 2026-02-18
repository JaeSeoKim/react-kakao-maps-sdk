import { mockInstances } from "./mockCore"

export class LatLng {
  private readonly lat: number
  private readonly lng: number

  constructor(lat: number, lng: number) {
    this.lat = lat
    this.lng = lng
    mockInstances.add(LatLng, this)
  }

  getLat() {
    return this.lat
  }

  getLng() {
    return this.lng
  }

  equals(other: unknown) {
    if (!other || typeof other !== "object") return false

    const candidate = other as {
      getLat?: () => unknown
      getLng?: () => unknown
    }

    return (
      candidate.getLat?.() === this.lat && candidate.getLng?.() === this.lng
    )
  }

  toCoords() {
    return new Coords(this.lng, this.lat)
  }
}

export class Coords {
  private readonly x: number
  private readonly y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
    mockInstances.add(Coords, this)
  }

  getX() {
    return this.x
  }

  getY() {
    return this.y
  }

  toLatLng() {
    return new LatLng(this.y, this.x)
  }

  equals(other: unknown) {
    if (!other || typeof other !== "object") return false

    const candidate = other as {
      getX?: () => unknown
      getY?: () => unknown
    }

    return candidate.getX?.() === this.x && candidate.getY?.() === this.y
  }
}

export class LatLngBounds {
  constructor(
    public readonly sw: LatLng,
    public readonly ne: LatLng,
  ) {
    mockInstances.add(LatLngBounds, this)
  }
}

export class Size {
  constructor(
    public readonly width: number,
    public readonly height: number,
  ) {
    mockInstances.add(Size, this)
  }
}

export class Point {
  constructor(
    public readonly x: number,
    public readonly y: number,
  ) {
    mockInstances.add(Point, this)
  }
}

export class Viewpoint {
  constructor(
    public pan: number,
    public tilt: number,
    public zoom: number,
    public panoId?: number,
  ) {
    mockInstances.add(Viewpoint, this)
  }
}

export class MarkerImage {
  constructor(
    public readonly src: string,
    public readonly size: Size,
    public readonly options?: unknown,
  ) {
    mockInstances.add(MarkerImage, this)
  }
}

export const MapTypeId = {
  ROADMAP: 1,
  SKYVIEW: 2,
  HYBRID: 3,
  OVERLAY: 4,
  ROADVIEW: 5,
  TRAFFIC: 6,
  TERRAIN: 7,
  BICYCLE: 8,
  BICYCLE_HYBRID: 9,
  USE_DISTRICT: 10,
} as const

export const ControlPosition = {
  TOPLEFT: 0,
  TOP: 1,
  TOPRIGHT: 2,
  BOTTOMLEFT: 3,
  BOTTOM: 4,
  BOTTOMRIGHT: 5,
  LEFT: 6,
  RIGHT: 7,
} as const
