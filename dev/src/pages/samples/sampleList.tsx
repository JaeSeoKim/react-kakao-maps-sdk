import { RouteObject } from "react-router-dom"
import BasicMap from "./basicMap"
import MoveMap from "./moveMap"
import ChangeLevel from "./changeLevel"
import MapInfo from "./mapInfo"
import AddMapControl from "./addMapControl"
import AddMapCustomControl from "./addMapCustomControl"

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
]
