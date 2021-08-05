"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var Roadview_1 = require("./Roadview");
var CustomOverlayRoadview = function (_a) {
    var position = _a.position, children = _a.children, option = _a.option;
    var roadview = react_1.useContext(Roadview_1.KakaoRoadviewContext);
    return (react_1.default.createElement(CustomOverlay, __assign({}, option, { map: roadview, position: new kakao.maps.LatLng(position.lat, position.lng) }), children));
};
exports.default = CustomOverlayRoadview;
var CustomOverlay = (function (_super) {
    __extends(CustomOverlay, _super);
    function CustomOverlay(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            overlay: {},
        };
        _this.el = document.createElement("div");
        return _this;
    }
    CustomOverlay.prototype.componentDidMount = function () {
        var _a = this.props, rv = _a.map, position = _a.position, xAnchor = _a.xAnchor, yAnchor = _a.yAnchor, zIndex = _a.zIndex, clickable = _a.clickable, content = _a.content;
        var el = this.el;
        var overlay = new kakao.maps.CustomOverlay({
            content: content ? content : el,
            position: position,
            xAnchor: xAnchor,
            yAnchor: yAnchor,
            zIndex: zIndex,
            clickable: clickable,
        });
        kakao.maps.event.addListener(rv, "init", function () {
            overlay.setMap(rv);
            var projection = rv.getProjection();
            var viewpoint = projection.viewpointFromCoords(overlay.getPosition(), overlay.getAltitude());
            rv.setViewpoint(viewpoint);
        });
        this.setState(function () { return ({ overlay: overlay }); });
    };
    CustomOverlay.prototype.componentWillUnmount = function () {
        var overlay = this.state.overlay;
        if (overlay) {
            overlay.setMap(null);
        }
    };
    CustomOverlay.prototype.render = function () {
        var children = this.props.children;
        return react_dom_1.default.createPortal(children, this.el);
    };
    return CustomOverlay;
}(react_1.default.Component));
//# sourceMappingURL=CustomOverlayRoadview.js.map