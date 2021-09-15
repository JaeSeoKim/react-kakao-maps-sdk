/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react"
import ReactDOM from "react-dom"
import Head from "@docusaurus/Head"
import * as ReactKakaoMapsSdk from "react-kakao-maps-sdk"
import clusterPositionsData from "./clusterPositions.json"

const AddMapControlStyle = () => (
  <Head>
    <style>{`
    .map_wrap {position:relative;overflow:hidden;width:100%;height:350px;}
    .radius_border{border:1px solid #919191;border-radius:5px;}
    .custom_typecontrol {color:#000;display:flex;position:absolute;top:10px;right:10px;overflow:hidden;width:130px;height:30px;margin:0;padding:0;z-index:1;font-size:12px;font-family:'Malgun Gothic', '맑은 고딕', sans-serif;}
    .custom_typecontrol span {display:block;width:65px;height:30px;float:left;text-align:center;line-height:30px;cursor:pointer;}
    .custom_typecontrol .btn {background:#fff;background:linear-gradient(#fff,  #e6e6e6);}
    .custom_typecontrol .btn:hover {background:#f5f5f5;background:linear-gradient(#f5f5f5,#e3e3e3);}
    .custom_typecontrol .btn:active {background:#e6e6e6;background:linear-gradient(#e6e6e6, #fff);}
    .custom_typecontrol .selected_btn {color:#fff;background:#425470;background:linear-gradient(#425470, #5b6d8a);}
    .custom_typecontrol .selected_btn:hover {color:#fff;}
    .custom_zoomcontrol {position:absolute;top:50px;right:10px;width:36px;height:80px;overflow:hidden;z-index:1;background-color:#f5f5f5;}
    .custom_zoomcontrol span {display:flex;justify-content:center;width:36px;height:40px;text-align:center;cursor:pointer;}
    .custom_zoomcontrol span img {width:15px;height:15px;align-self:center;}
    .custom_zoomcontrol span:first-child{border-bottom:1px solid #bfbfbf;}
    `}</style>
  </Head>
)

const RoadviewCustomOverlayStyle = () => (
  <Head>
    <style>{`
    .overlay_info {
      border-radius: 6px;
      margin-bottom: 12px;
      float: left;
      position: relative;
      border: 1px solid #ccc;
      border-bottom: 2px solid #ddd;
      background-color: #fff;
    }
    .overlay_info:nth-of-type(n) {
      border: 0;
      box-shadow: 0px 1px 2px #888;
    }
    .overlay_info a {
      display: block;
      background: #d95050;
      background: #d95050
        url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png)
        no-repeat right 14px center;
      text-decoration: none;
      color: #fff;
      padding: 12px 36px 12px 14px;
      font-size: 14px;
      border-radius: 6px 6px 0 0;
    }
    .overlay_info a strong {
      background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/place_icon.png)
        no-repeat;
      padding-left: 27px;
    }
    .overlay_info .desc {
      padding: 14px;
      position: relative;
      min-width: 190px;
      height: auto;
    }
    .overlay_info img {
      vertical-align: top;
    }
    .overlay_info .address {
      font-size: 12px;
      color: #333;
      position: absolute;
      left: 80px;
      right: 14px;
      top: 14px;
      white-space: normal;
    }
    .overlay_info:after {
      content: "";
      position: absolute;
      margin-left: -11px;
      left: 50%;
      bottom: -12px;
      width: 22px;
      height: 12px;
      background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png)
        no-repeat 0 bottom;
    }
    `}</style>
  </Head>
)

const CustomOverlay1Style = () => (
  <Head>
    <style>{`
    .label {
      margin-bottom: 96px;
    }
    .label * {
      display: inline-block;
      vertical-align: top;
    }
    .label .left {
      background: url("https://t1.daumcdn.net/localimg/localimages/07/2011/map/storeview/tip_l.png")
        no-repeat;
      display: inline-block;
      height: 24px;
      overflow: hidden;
      vertical-align: top;
      width: 7px;
    }
    .label .center {
      background: url(https://t1.daumcdn.net/localimg/localimages/07/2011/map/storeview/tip_bg.png)
        repeat-x;
      display: inline-block;
      height: 24px;
      font-size: 12px;
      line-height: 24px;
    }
    .label .right {
      background: url("https://t1.daumcdn.net/localimg/localimages/07/2011/map/storeview/tip_r.png") -1px
        0 no-repeat;
      display: inline-block;
      height: 24px;
      overflow: hidden;
      width: 6px;
    }
    `}</style>
  </Head>
)

const CustomOverlay2Style = () => (
  <Head>
    <style>{`
    .overlaybox {
      position: relative;
      width: 360px;
      height: 350px;
      background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/box_movie.png")
        no-repeat;
      padding: 15px 10px;
    }
    .overlaybox div,
    ul {
      overflow: hidden;
      margin: 0;
      padding: 0;
    }
    .overlaybox li {
      list-style: none;
    }
    .overlaybox .boxtitle {
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png")
        no-repeat right 120px center;
      margin-bottom: 8px;
    }
    .overlaybox .first {
      position: relative;
      width: 247px;
      height: 136px;
      background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumb.png")
        no-repeat;
      margin-bottom: 8px;
    }
    .first .text {
      color: #fff;
      font-weight: bold;
    }
    .first .triangle {
      position: absolute;
      width: 48px;
      height: 48px;
      top: 0;
      left: 0;
      background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/triangle.png")
        no-repeat;
      padding: 6px;
      font-size: 18px;
    }
    .first .movietitle {
      position: absolute;
      width: 100%;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      padding: 7px 15px;
      font-size: 14px;
    }
    .overlaybox ul {
      width: 247px;
    }
    .overlaybox li {
      position: relative;
      margin-bottom: 2px;
      background: #2b2d36;
      padding: 5px 10px;
      color: #aaabaf;
      line-height: 1;
    }
    .overlaybox li span {
      display: inline-block;
    }
    .overlaybox li .number {
      font-size: 16px;
      font-weight: bold;
    }
    .overlaybox li .title {
      font-size: 13px;
    }
    .overlaybox ul .arrow {
      position: absolute;
      margin-top: 8px;
      right: 25px;
      width: 5px;
      height: 3px;
      background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/updown.png")
        no-repeat;
    }
    .overlaybox li .up {
      background-position: 0 -40px;
    }
    .overlaybox li .down {
      background-position: 0 -60px;
    }
    .overlaybox li .count {
      position: absolute;
      margin-top: 5px;
      right: 15px;
      font-size: 10px;
    }
    .overlaybox li:hover {
      color: #fff;
      background: #d24545;
    }
    .overlaybox li:hover .up {
      background-position: 0 0px;
    }
    .overlaybox li:hover .down {
      background-position: 0 -20px;
    }
    `}</style>
  </Head>
)

const CategoryMarkerStyle = () => (
  <Head>
    <style>{`
    #mapwrap{position:relative;overflow:hidden;}
    .category, .category *{margin:0;padding:0;color:#000;}
    .category {position:absolute;overflow:hidden;top:10px;left:10px;width:150px;height:50px;z-index:10;border:1px solid black;font-family:'Malgun Gothic','맑은 고딕',sans-serif;font-size:12px;text-align:center;background-color:#fff;}
    .category .menu_selected {background:#FF5F4A;color:#fff;border-left:1px solid #915B2F;border-right:1px solid #915B2F;margin:0px;}
    .category ul{display:flex}
    .category li{list-style:none;float:left;width:50px;height:50px;margin:0 !important;padding-top:5px;cursor:pointer;}
    .category .ico_comm {display:block;margin:0 auto 2px;width:22px;height:26px;background:url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png') no-repeat;}
    .category .ico_coffee {background-position:-10px 0;}
    .category .ico_store {background-position:-10px -36px;}
    .category .ico_carpark {background-position:-10px -72px;}
    `}</style>
  </Head>
)

const CalculatePolylineDistanceStyle = () => (
  <Head>
    <style>{`
    .dot {overflow:hidden;float:left;width:12px;height:12px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/mini_circle.png');}
    .dotOverlay {color:#000;position:relative;bottom:10px;border-radius:6px;border: 1px solid #ccc;border-bottom:2px solid #ddd;float:left;font-size:12px;padding:5px;background:#fff;}
    .dotOverlay li {display:block;}
    .dotOverlay:nth-of-type(n) {border:0; box-shadow:0px 1px 2px #888;}
    .number {font-weight:bold;color:#ee6152;}
    .dotOverlay:after {content:'position:absolute;margin-left:-6px;left:50%;bottom:-8px;width:11px;height:8px;background:url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white_small.png')}
    .distanceInfo {position:relative;list-style:none;margin:0;}
    .distanceInfo .label {display:inline-block;width:50px;}
    .distanceInfo:after {content:none;}
    `}</style>
  </Head>
)

const CalculatePolygonAreaStyle = () => (
  <Head>
    <style>{`
    .info {color:#000;position:relative;top:5px;left:5px;border-radius:6px;border: 1px solid #ccc;border-bottom:2px solid #ddd;font-size:12px;padding:5px;background:#fff;list-style:none;margin:0;}
    .info:nth-of-type(n) {border:0; box-shadow:0px 1px 2px #888;}
    .info .label {display:inline-block;width:50px;}
    .number {font-weight:bold;color:#00a0e9;}
    `}</style>
  </Head>
)

const AddPolygonMouseEvent2Style = () => (
  <Head>
    <style>{`
    .area {
      color: #000;
      position: absolute;
      background: #fff;
      border: 1px solid #888;
      border-radius: 3px;
      font-size: 12px;
      top: -5px;
      left: 15px;
      padding:2px;
    }

    .info {
      color: #000;
      font-size: 12px;
      padding: 5px;
    }
    .info .title {
      font-weight: bold;
    }
    `}</style>
  </Head>
)

const CalculateCircleRadiusStyle = () => (
  <Head>
    <style>{`
    .info {color:#000;position:relative;top:5px;left:5px;border-radius:6px;border: 1px solid #ccc;border-bottom:2px solid #ddd;font-size:12px;padding:5px;background:#fff;list-style:none;margin:0;}
    .info:nth-of-type(n) {border:0; box-shadow:0px 1px 2px #888;}
    .info .label {display:inline-block;width:50px;}
    .number {font-weight:bold;color:#00a0e9;}
    `}</style>
  </Head>
)

const RemovableCustomOverlayStyle = () => (
  <Head>
    <style>{`
    .wrap {color:#000;position: absolute;left: 0;bottom: 40px;width: 288px;height: 132px;margin-left: -144px;text-align: left;overflow: hidden;font-size: 12px;font-family: Malgun Gothic, dotum, 돋움, sans-serif;line-height: 1.5;}
    .wrap * {padding: 0;margin: 0;}
    .wrap .info {width: 286px;height: 120px;border-radius: 5px;border-bottom: 2px solid #ccc;border-right: 1px solid #ccc;overflow: hidden;background: #fff;}
    .wrap .info:nth-child(1) {border: 0;box-shadow: 0px 1px 2px #888;}
    .info .title {padding: 5px 0 0 10px;height: 30px;background: #eee;border-bottom: 1px solid #ddd;font-size: 18px;font-weight: bold;}
    .info .close {position: absolute;top: 10px;right: 10px;color: #888;width: 17px;height: 17px;background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png);}
    .info .close:hover {cursor: pointer;}
    .info .body {position: relative;overflow: hidden;}
    .info .desc {position: relative;margin: 13px 0 0 90px;height: 75px;}
    .desc .ellipsis {overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .desc .jibun {font-size: 11px;color: #888;margin-top: -2px;}
    .info .img {position: absolute;top: 6px;left: 5px;width: 73px;height: 71px;border: 1px solid #ddd;color: #888;overflow: hidden;}
    .info:after {content: ;position: absolute;margin-left: -12px;left: 50%;bottom: 0;width: 22px;height: 12px;background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png)}
    .info .link {color: #5085BB;}
    `}</style>
  </Head>
)

const MarkerWithCustomOverlayStyle = () => (
  <Head>
    <style>{`
    .customoverlay {position:relative;bottom:85px;border-radius:6px;border: 1px solid #ccc;border-bottom:2px solid #ddd;float:left;}
    .customoverlay:nth-of-type(n) {border:0; box-shadow:0px 1px 2px #888;}
    .customoverlay a {display:block;text-decoration:none;color:#000;text-align:center;border-radius:6px;font-size:14px;font-weight:bold;overflow:hidden;background: #d95050;background: #d95050 url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center;}
    .customoverlay .title {display:block;text-align:center;background:#fff;margin-right:35px;padding:10px 15px;font-size:14px;font-weight:bold;}
    .customoverlay:after {content:'';position:absolute;margin-left:-12px;left:50%;bottom:-12px;width:22px;height:12px;background:url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')}
    `}</style>
  </Head>
)

const DragCustomOverlayStyle = () => (
  <Head>
    <style>{`
    .overlay {
      color:#000;
      position:absolute;
      left: -50px;
      top:0;
      width:100px;
      height: 100px;
      background: #fff;
      border:1px solid #ccc;
      border-radius: 5px;
      padding:5px;
      font-size:12px;
      text-align: center;
      white-space: pre;
      word-wrap: break-word;
      `}</style>
  </Head>
)

const MarkerTrackerStyle = () => (
  <Head>
    <style>{`
    .node {
      position: absolute;
      background-image: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/sign-info-64.png);
      cursor: pointer;
      width: 64px;
      height: 64px;
    }

    .tooltip {
      color:#000;
      background-color: #fff;
      position: absolute;
      border: 2px solid #333;
      font-size: 25px;
      font-weight: bold;
      padding: 3px 5px 0;
      left: 65px;
      top: 14px;
      border-radius: 5px;
      white-space: nowrap;
    }

    .tracker {
      position: absolute;
      margin: -35px 0 0 -30px;
      cursor: pointer;
      z-index: 3;
    }

    .icon {
      position: absolute;
      left: 6px;
      top: 9px;
      width: 48px;
      height: 48px;
      background-image: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/sign-info-48.png);
    }

    .balloon {
      position: absolute;
      width: 60px;
      height: 60px;
      background-image: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/balloon.png);
      -ms-transform-origin: 50% 34px;
      -webkit-transform-origin: 50% 34px;
      transform-origin: 50% 34px;
    }
      `}</style>
  </Head>
)

const MoveRoadviewStyle = () => (
  <Head>
    <style>{`
    .map_wrap {overflow:hidden;height:330px}
    /* 지도위에 로드뷰의 위치와 각도를 표시하기 위한 map walker 아이콘의 스타일 */
    .MapWalker {position:absolute;margin:-26px 0 0 -51px}
    .MapWalker .figure {position:absolute;width:25px;left:38px;top:-2px;
        height:39px;background:url(https://t1.daumcdn.net/localimg/localimages/07/2018/pc/roadview_minimap_wk_2018.png) -298px -114px no-repeat}
    .MapWalker .angleBack {width:102px;height:52px;background: url(https://t1.daumcdn.net/localimg/localimages/07/2018/pc/roadview_minimap_wk_2018.png) -834px -2px no-repeat;}
    .MapWalker.m0 .figure {background-position: -298px -114px;}
    .MapWalker.m1 .figure {background-position: -335px -114px;}
    .MapWalker.m2 .figure {background-position: -372px -114px;}
    .MapWalker.m3 .figure {background-position: -409px -114px;}
    .MapWalker.m4 .figure {background-position: -446px -114px;}
    .MapWalker.m5 .figure {background-position: -483px -114px;}
    .MapWalker.m6 .figure {background-position: -520px -114px;}
    .MapWalker.m7 .figure {background-position: -557px -114px;}
    .MapWalker.m8 .figure {background-position: -2px -114px;}
    .MapWalker.m9 .figure {background-position: -39px -114px;}
    .MapWalker.m10 .figure {background-position: -76px -114px;}
    .MapWalker.m11 .figure {background-position: -113px -114px;}
    .MapWalker.m12 .figure {background-position: -150px -114px;}
    .MapWalker.m13 .figure {background-position: -187px -114px;}
    .MapWalker.m14 .figure {background-position: -224px -114px;}
    .MapWalker.m15 .figure {background-position: -261px -114px;}
    .MapWalker.m0 .angleBack {background-position: -834px -2px;}
    .MapWalker.m1 .angleBack {background-position: -938px -2px;}
    .MapWalker.m2 .angleBack {background-position: -1042px -2px;}
    .MapWalker.m3 .angleBack {background-position: -1146px -2px;}
    .MapWalker.m4 .angleBack {background-position: -1250px -2px;}
    .MapWalker.m5 .angleBack {background-position: -1354px -2px;}
    .MapWalker.m6 .angleBack {background-position: -1458px -2px;}
    .MapWalker.m7 .angleBack {background-position: -1562px -2px;}
    .MapWalker.m8 .angleBack {background-position: -2px -2px;}
    .MapWalker.m9 .angleBack {background-position: -106px -2px;}
    .MapWalker.m10 .angleBack {background-position: -210px -2px;}
    .MapWalker.m11 .angleBack {background-position: -314px -2px;}
    .MapWalker.m12 .angleBack {background-position: -418px -2px;}
    .MapWalker.m13 .angleBack {background-position: -522px -2px;}
    .MapWalker.m14 .angleBack {background-position: -626px -2px;}
    .MapWalker.m15 .angleBack {background-position: -730px -2px;}
    `}</style>
  </Head>
)

const RoadviewOverlay1Style = () => (
  <Head>
    <style>{`
    .screen_out {display:block;overflow:hidden;position:absolute;left:-9999px;width:1px;height:1px;font-size:0;line-height:0;text-indent:-9999px}
    .wrap_content {}
    .wrap_map {display:inline-block;width:50%;height:300px;position:relative}
    .wrap_roadview {display:inline-block;width:50%;height:300px;position:relative}
    .wrap_button {position:absolute;left:15px;top:12px;z-index:2}
    .btn_comm {border:none;float:left;display:block;width:70px;height:27px;background:url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/sample_button_control.png) no-repeat}
    .btn_linkMap {background-position:0 0;}
    .btn_resetMap {background-position:-69px 0;}
    .btn_linkRoadview {background-position:0 0;}
    .btn_resetRoadview {background-position:-69px 0;}
    `}</style>
  </Head>
)

const RoadviewImageOverlayStyle = () => (
  <Head>
    <style>{`
    #overlayImg {
      width: 394px;
      height: 242px;
      border: 1px solid #096320;
      transition: linear 0.5s opacity;
    }
    #overlayImg:hover {
      opacity: 0;
    }
    `}</style>
  </Head>
)

const RoadviewWithMapButtonStyle = () => (
  <Head>
    <style>{`
    #container {overflow:hidden;height:300px;position:relative;}
    #rvWrapper {width:50%;height:300px;top:0;right:0;position:absolute;z-index:0;}
    #container.view_roadview #mapWrapper {width: 50%;}
    #roadviewControl {position:absolute;top:5px;left:5px;width:42px;height:42px;z-index: 1;cursor: pointer; background: url(https://t1.daumcdn.net/localimg/localimages/07/2018/pc/common/img_search.png) 0 -450px no-repeat;}
    #roadviewControl.active {background-position:0 -350px;}
    #close {position: absolute;padding: 4px;top: 5px;left: 5px;cursor: pointer;background: #fff;border-radius: 4px;border: 1px solid #c8c8c8;box-shadow: 0px 1px #888;}
    #close .img {display: block;background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/rv_close.png) no-repeat;width: 14px;height: 14px;}
    `}</style>
  </Head>
)

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ReactDOM,
  ...ReactDOM,
  ...ReactKakaoMapsSdk,
  clusterPositionsData,
  Head,
  AddMapControlStyle,
  RoadviewCustomOverlayStyle,
  CustomOverlay1Style,
  CustomOverlay2Style,
  CategoryMarkerStyle,
  CalculatePolylineDistanceStyle,
  CalculatePolygonAreaStyle,
  AddPolygonMouseEvent2Style,
  CalculateCircleRadiusStyle,
  RemovableCustomOverlayStyle,
  MarkerWithCustomOverlayStyle,
  DragCustomOverlayStyle,
  MarkerTrackerStyle,
  MoveRoadviewStyle,
  RoadviewOverlay1Style,
  RoadviewImageOverlayStyle,
  RoadviewWithMapButtonStyle,
}

export default ReactLiveScope
