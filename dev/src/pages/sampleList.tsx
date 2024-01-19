import { RouteObject } from "react-router-dom"

const samplesModules = import.meta.glob("./samples/!(use)*.tsx", {
  eager: true,
})

export const samples = Object.keys(samplesModules)
  .map((path) => {
    const { default: Component } = samplesModules[path] as {
      default: React.FC
    }

    const route: RouteObject = {
      path: path.substring("./samples/".length, path.length - ".tsx".length),
      element: <Component />,
    }
    return route
  })
  .filter((route) => !route.path!.endsWith(".style"))
