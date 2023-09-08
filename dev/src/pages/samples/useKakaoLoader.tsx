import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: import.meta.env.VITE_KAKAOMAP_API_KEY,
    libraries: ["clusterer", "drawing", "services"],
  })
}
