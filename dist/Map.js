"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KakaoMapContext = void 0;
var react_1 = __importStar(require("react"));
exports.KakaoMapContext = react_1.default.createContext({});
var Map = function (_a) {
    var children = _a.children, center = _a.center, className = _a.className, size = _a.size, _b = _a.loading, loading = _b === void 0 ? false : _b, option = _a.option;
    var _c = react_1.useState(), map = _c[0], setMap = _c[1];
    var container = react_1.useRef(null);
    react_1.useLayoutEffect(function () {
        if (loading || map !== undefined)
            return;
        kakao.maps.load(function () {
            var initalMapCenter = new kakao.maps.LatLng(center.lat, center.lng);
            var kakaoMap = new kakao.maps.Map(container.current, __assign({ center: initalMapCenter }, option));
            setMap(kakaoMap);
        });
    }, [loading, center, option, container]);
    react_1.useEffect(function () {
        if (map === undefined || size === undefined)
            return;
        var width = size.width, height = size.height;
        container.current.style.width = width;
        container.current.style.height = height;
        map.relayout();
    }, [map, size]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { id: "kakao-map-container", className: className, ref: container }),
        map && (react_1.default.createElement(exports.KakaoMapContext.Provider, { value: map }, children))));
};
exports.default = Map;
//# sourceMappingURL=Map.js.map