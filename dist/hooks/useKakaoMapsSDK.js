import { useEffect, useState } from "react";
const useKakaoMapsSDK = ({ apiKey, endpoint }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const script = document.createElement("script");
        script.id = "kakao-maps-sdk";
        script.src =
            (endpoint !== null && endpoint !== void 0 ? endpoint : "//dapi.kakao.com/v2/maps/sdk.js") +
                "?autoload=false&appkey=" +
                apiKey;
        document.head.appendChild(script);
        script.onload = () => {
            setLoading(false);
        };
    }, [apiKey, endpoint]);
    return loading;
};
export default useKakaoMapsSDK;
