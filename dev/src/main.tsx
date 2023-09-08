import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Dev } from "./pages/dev.tsx"
import { samples } from "./pages/samples/sampleList.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dev",
    element: <Dev />,
  },
  {
    path: "/samples",
    children: samples,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
