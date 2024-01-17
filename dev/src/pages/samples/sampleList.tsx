import { RouteObject } from "react-router-dom"
import BasicMap from "./basicMap"
import MoveMap from "./moveMap"
import ChangeLevel from "./changeLevel"
import MapInfo from "./mapInfo"
import AddMapControl from "./addMapControl"
import AddMapCustomControl from "./addMapCustomControl"
import DisableMapDragMove from "./disableMapDragMove"
import EnableDisableZoomInOut from "./enableDisableZoomInOut"
import AddTrafficOverlay from "./addTrafficOverlay"
import AddRoadviewOverlay from "./addRoadviewOverlay"
import AddTerrainOverlay from "./addTerrainOverlay"
import ChangeOverlay1 from "./changeOverlay1"
import ChangeOverlay2 from "./changeOverlay2"

export const samples: RouteObject[] = [
  {
    path: "basicMap",
    element: <BasicMap />,
  },
  {
    path: "moveMap",
    element: <MoveMap />,
  },
  {
    path: "changeLevel",
    element: <ChangeLevel />,
  },
  {
    path: "mapInfo",
    element: <MapInfo />,
  },
  {
    path: "addMapControl",
    element: <AddMapControl />,
  },
  {
    path: "addMapCustomControl",
    element: <AddMapCustomControl />,
  },
  {
    path: "disableMapDragMove",
    element: <DisableMapDragMove />,
  },
  {
    path: "enableDisableZoomInOut",
    element: <EnableDisableZoomInOut />,
  },
  {
    path: "addTrafficOverlay",
    element: <AddTrafficOverlay />,
  },
  {
    path: "addRoadviewOverlay",
    element: <AddRoadviewOverlay />,
  },
  {
    path: "addTerrainOverlay",
    element: <AddTerrainOverlay />,
  },
  {
    path: "changeOverlay1",
    element: <ChangeOverlay1 />,
  },
  {
    path: "changeOverlay2",
    element: <ChangeOverlay2 />,
  },
]
