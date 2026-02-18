import { jest } from "@jest/globals"

import { AbstractOverlay } from "./AbstractOverlay.mock"
import { Circle } from "./Circle.mock"
import { CustomOverlay } from "./CustomOverlay.mock"
import { DrawingManager } from "./DrawingManager.mock"
import { Ellipse } from "./Ellipse.mock"
import { InfoWindow } from "./InfoWindow.mock"
import { KakaoMap } from "./Map.mock"
import { MapTypeControl } from "./MapTypeControl.mock"
import { Marker } from "./Marker.mock"
import { MarkerClusterer } from "./MarkerClusterer.mock"
import { Polygon } from "./Polygon.mock"
import { Polyline } from "./Polyline.mock"
import { Rectangle } from "./Rectangle.mock"
import { Roadview } from "./Roadview.mock"
import { RoadviewClient } from "./RoadviewClient.mock"
import { StaticMap } from "./StaticMap.mock"
import { Toolbox } from "./Toolbox.mock"
import { ZoomControl } from "./ZoomControl.mock"
import {
  MockInstancesRegistry,
  createMock,
  createRoot,
  mockInstances,
} from "./mockCore"
import {
  ControlPosition,
  Coords,
  LatLng,
  LatLngBounds,
  MapTypeId,
  MarkerImage,
  Point,
  Size,
  Viewpoint,
} from "./primitives.mock"

export {
  AbstractOverlay,
  Circle,
  ControlPosition,
  Coords,
  CustomOverlay,
  Ellipse,
  InfoWindow,
  KakaoMap,
  LatLng,
  LatLngBounds,
  MapTypeControl,
  MapTypeId,
  Marker,
  MarkerClusterer,
  MarkerImage,
  MockInstancesRegistry,
  Point,
  Polygon,
  Polyline,
  Rectangle,
  Roadview,
  RoadviewClient,
  Size,
  StaticMap,
  Viewpoint,
  createMock,
  createRoot,
  mockInstances,
}

type Listener = (...args: readonly unknown[]) => void

class EventStore {
  private store = new WeakMap<object, Map<string, Set<Listener>>>()

  add(target: object, type: string, listener: Listener) {
    let byType = this.store.get(target)
    if (!byType) {
      byType = new Map()
      this.store.set(target, byType)
    }

    const set = byType.get(type) ?? new Set<Listener>()
    set.add(listener)
    byType.set(type, set)
  }

  remove(target: object, type: string, listener: Listener) {
    const byType = this.store.get(target)
    const set = byType?.get(type)
    set?.delete(listener)
  }

  get(target: object, type: string): Listener[] {
    const byType = this.store.get(target)
    return Array.from(byType?.get(type) ?? [])
  }

  trigger(target: object, type: string, data?: unknown) {
    const listeners = this.get(target, type)
    for (const listener of listeners) {
      if (typeof data === "undefined") listener()
      else listener(data)
    }
  }
}

type MockKakaoEvent = {
  addListener: jest.MockedFunction<
    (target: object, type: string, listener: Listener) => Listener
  >
  removeListener: jest.MockedFunction<
    (target: object, type: string, listener: Listener) => void
  >
  trigger: jest.MockedFunction<
    (target: object, type: string, data?: unknown) => void
  >
  preventMap: jest.MockedFunction<() => void>
}

type MockKakaoMapsBase = {
  load: (cb?: () => void) => void
  event: MockKakaoEvent
  LatLng: typeof LatLng
  Coords: typeof Coords
  LatLngBounds: typeof LatLngBounds
  Size: typeof Size
  Point: typeof Point
  Viewpoint: typeof Viewpoint
  MarkerImage: typeof MarkerImage
  Map: typeof KakaoMap
  MapTypeId: typeof MapTypeId
  ControlPosition: typeof ControlPosition
  MapTypeControl: typeof MapTypeControl
  ZoomControl: typeof ZoomControl
  Marker: typeof Marker
  Polyline: typeof Polyline
  Polygon: typeof Polygon
  Circle: typeof Circle
  Ellipse: typeof Ellipse
  Rectangle: typeof Rectangle
  InfoWindow: typeof InfoWindow
  CustomOverlay: typeof CustomOverlay
  AbstractOverlay: typeof AbstractOverlay
  StaticMap: typeof StaticMap
  Roadview: typeof Roadview
  RoadviewClient: typeof RoadviewClient
}

export const initializeKakaoMock = (
  options: {
    load?: "sync" | "async"
    libraries?: { clusterer?: boolean; drawing?: boolean; services?: boolean }
  } = {},
) => {
  mockInstances.clearAll()

  document.querySelectorAll("[data-kakao-mock]").forEach((node) => {
    node.remove()
  })

  const events = new EventStore()

  const event: MockKakaoEvent = {
    addListener: createMock<Listener, [object, string, Listener]>(
      (target, type, listener) => {
        events.add(target, type, listener)
        return listener
      },
    ),
    removeListener: createMock<void, [object, string, Listener]>(
      (target, type, listener) => {
        events.remove(target, type, listener)
      },
    ),
    trigger: createMock<void, [object, string, unknown?]>(
      (target, type, data) => {
        events.trigger(target, type, data)
      },
    ),
    preventMap: createMock<void, []>(() => undefined),
  }

  const libraries = {
    clusterer: options.libraries?.clusterer ?? true,
    drawing: options.libraries?.drawing ?? true,
    services: options.libraries?.services ?? true,
  }

  const load = (cb?: () => void) => {
    if (options.load === "async") setTimeout(() => cb?.(), 0)
    else cb?.()
  }

  const maps: MockKakaoMapsBase & {
    MarkerClusterer?: typeof MarkerClusterer
    drawing?: {
      OverlayType: {
        MARKER: string
        RECTANGLE: string
        CIRCLE: string
        ELLIPSE: string
        POLYLINE: string
        ARROW: string
        POLYGON: string
      }
      DrawingManager: typeof DrawingManager
      Toolbox: typeof Toolbox
    }
  } = {
    load,
    event,
    LatLng,
    Coords,
    LatLngBounds,
    Size,
    Point,
    Viewpoint,
    MarkerImage,
    Map: KakaoMap,
    MapTypeId,
    ControlPosition,
    MapTypeControl,
    ZoomControl,
    Marker,
    Polyline,
    Polygon,
    Circle,
    Ellipse,
    Rectangle,
    InfoWindow,
    CustomOverlay,
    AbstractOverlay,
    StaticMap,
    Roadview,
    RoadviewClient,
  }

  if (libraries.clusterer) {
    maps.MarkerClusterer = MarkerClusterer
  }

  if (libraries.drawing) {
    maps.drawing = {
      OverlayType: {
        MARKER: "marker",
        RECTANGLE: "rectangle",
        CIRCLE: "circle",
        ELLIPSE: "ellipse",
        POLYLINE: "polyline",
        ARROW: "arrow",
        POLYGON: "polygon",
      },
      DrawingManager,
      Toolbox,
    }
  }

  const host = globalThis as unknown as {
    kakao: {
      maps: MockKakaoMapsBase & { drawing?: { [key: string]: unknown } }
    }
    window: {
      kakao: {
        maps: MockKakaoMapsBase & { drawing?: { [key: string]: unknown } }
      }
    }
    __kakaoMock: {
      mockInstances: MockInstancesRegistry
      events: EventStore
      reset: typeof initializeKakaoMock
    }
  }

  ;(host.kakao =
    host.kakao ||
    ({ maps } as {
      maps: MockKakaoMapsBase & { drawing?: { [key: string]: unknown } }
    })).maps = maps
  ;(host.window.kakao =
    host.window.kakao ||
    ({ maps } as {
      maps: MockKakaoMapsBase & { drawing?: { [key: string]: unknown } }
    })).maps = maps
  host.__kakaoMock = {
    mockInstances,
    events,
    reset: initializeKakaoMock,
  }
}
