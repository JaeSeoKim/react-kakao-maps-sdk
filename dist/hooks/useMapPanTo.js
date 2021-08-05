"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Map_1 = require("../Map");
var useMapPanTo = function () {
    var map = react_1.useContext(Map_1.KakaoMapContext);
    var _a = react_1.useState(null), position = _a[0], setPoition = _a[1];
    react_1.useEffect(function () {
        if (map && position) {
            map.panTo(new kakao.maps.LatLng(position.lat, position.lng));
        }
    }, [map, position]);
    return setPoition;
};
exports.default = useMapPanTo;
//# sourceMappingURL=useMapPanTo.js.map