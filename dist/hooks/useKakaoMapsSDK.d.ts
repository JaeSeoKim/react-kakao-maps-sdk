interface useKakaoMapsSDKProps {
    /**
     * kakao map sdk api key에 대해서 지정합니다.
     */
    apiKey: string;
    /**
     * kakao map sdk endpoint에 대해서 지정합니다.
     */
    endpoint?: string;
}
declare const useKakaoMapsSDK: ({ apiKey, endpoint }: useKakaoMapsSDKProps) => boolean;
export default useKakaoMapsSDK;
