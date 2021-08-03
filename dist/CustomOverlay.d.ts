/// <reference types="kakao.maps.d.ts" />
import * as React from "react";
interface CustomOverlayProps extends kakao.maps.CustomOverlayOptions {
    map: kakao.maps.Map | kakao.maps.Roadview;
}
declare class CustomOverlay extends React.Component<CustomOverlayProps> {
    el: HTMLDivElement;
    constructor(props: CustomOverlayProps);
    state: {
        overlay: kakao.maps.CustomOverlay;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
}
export default CustomOverlay;
