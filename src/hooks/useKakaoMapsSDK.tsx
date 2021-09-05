import { useEffect, useState } from "react"

interface useKakaoMapsSDKProps {
  /**
   * kakao map sdk api key에 대해서 지정합니다.
   */
  apiKey: string

  /**
   * kakao map sdk endpoint에 대해서 지정합니다.
   */
  endpoint?: string
}

const useKakaoMapsSDK = ({ apiKey, endpoint }: useKakaoMapsSDKProps) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const script = document.createElement("script")

    script.id = "kakao-maps-sdk"
    script.src =
      (endpoint ?? "//dapi.kakao.com/v2/maps/sdk.js") +
      "?autoload=false&appkey=" +
      apiKey
    document.head.appendChild(script)

    script.onload = () => {
      setLoading(false)
    }
  }, [apiKey, endpoint])

  return loading
}

export default useKakaoMapsSDK
