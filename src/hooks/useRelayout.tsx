import { useContext } from "react"
import { KakaoMapContext } from "../components/Map"
import { KakaoRoadviewContext } from "../components/Roadview"

const useRelayout = () => {
  const map = useContext(KakaoMapContext)
  const roadview = useContext(KakaoRoadviewContext)

  const relayout = () => {
    if (map) {
      map.relayout()
    }
    if (roadview) {
      roadview.relayout()
    }
  }

  return relayout
}

export default useRelayout
