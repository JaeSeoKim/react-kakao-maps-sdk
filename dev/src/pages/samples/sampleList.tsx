import { RouteObject } from "react-router-dom"
import BasicMap from "./basicMap"
import MoveMap from "./moveMap"

export const samples: RouteObject[] = [
  {
    path: "basicMap",
    element: <BasicMap />,
  },
  {
    path: "moveMap",
    element: <MoveMap />,
  },
]
