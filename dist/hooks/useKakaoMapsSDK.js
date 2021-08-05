"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useKakaoMapsSDK = function (_a) {
    var apiKey = _a.apiKey, endpoint = _a.endpoint;
    var _b = react_1.useState(true), loading = _b[0], setLoading = _b[1];
    react_1.useEffect(function () {
        var script = document.createElement("script");
        script.id = "kakao-maps-sdk";
        script.src =
            (endpoint !== null && endpoint !== void 0 ? endpoint : "//dapi.kakao.com/v2/maps/sdk.js") +
                "?autoload=false&appkey=" +
                apiKey;
        document.head.appendChild(script);
        script.onload = function () {
            setLoading(false);
        };
    }, [apiKey, endpoint]);
    return loading;
};
exports.default = useKakaoMapsSDK;
//# sourceMappingURL=useKakaoMapsSDK.js.map