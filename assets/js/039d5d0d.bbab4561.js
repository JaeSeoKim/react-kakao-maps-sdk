"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5647],{3905:(n,e,a)=>{a.d(e,{Zo:()=>y,kt:()=>d});var t=a(7378);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function l(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function o(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function i(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},l=Object.keys(n);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var p=t.createContext({}),s=function(n){var e=t.useContext(p),a=e;return n&&(a="function"==typeof n?n(e):o(o({},e),n)),a},y=function(n){var e=s(n.components);return t.createElement(p.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(n,e){var a=n.components,r=n.mdxType,l=n.originalType,p=n.parentName,y=i(n,["components","mdxType","originalType","parentName"]),u=s(a),d=r,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return a?t.createElement(g,o(o({ref:e},y),{},{components:a})):t.createElement(g,o({ref:e},y))}));function d(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i.mdxType="string"==typeof n?n:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(n,e,a)=>{a.d(e,{Z:()=>o});var t=a(7378),r=a(6010);const l="tabItem_Ymn6";function o(n){let{children:e,hidden:a,className:o}=n;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},e)}},5488:(n,e,a)=>{a.d(e,{Z:()=>d});var t=a(7462),r=a(7378),l=a(6010),o=a(2389),i=a(7392),p=a(7094),s=a(2466);const y="tabList__CuJ",c="tabItem_LNqP";function u(n){var e,a;const{lazy:o,block:u,defaultValue:d,values:g,groupId:m,className:v}=n,k=r.Children.map(n.children,(n=>{if((0,r.isValidElement)(n)&&"value"in n.props)return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:k.map((n=>{let{props:{value:e,label:a,attributes:t}}=n;return{value:e,label:a,attributes:t}})),f=(0,i.l)(b,((n,e)=>n.value===e.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((n=>n.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const O=null===d?d:null!=(e=null!=d?d:null==(a=k.find((n=>n.props.default)))?void 0:a.props.value)?e:k[0].props.value;if(null!==O&&!b.some((n=>n.value===O)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+O+'" but none of its children has the corresponding value. Available values are: '+b.map((n=>n.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:T}=(0,p.U)(),[h,E]=(0,r.useState)(O),D=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=m){const n=w[m];null!=n&&n!==h&&b.some((e=>e.value===n))&&E(n)}const C=n=>{const e=n.currentTarget,a=D.indexOf(e),t=b[a].value;t!==h&&(x(e),E(t),null!=m&&T(m,String(t)))},P=n=>{var e;let a=null;switch(n.key){case"ArrowRight":{var t;const e=D.indexOf(n.currentTarget)+1;a=null!=(t=D[e])?t:D[0];break}case"ArrowLeft":{var r;const e=D.indexOf(n.currentTarget)-1;a=null!=(r=D[e])?r:D[D.length-1];break}}null==(e=a)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",y)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},v)},b.map((n=>{let{value:e,label:a,attributes:o}=n;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,key:e,ref:n=>D.push(n),onKeyDown:P,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":h===e})}),null!=a?a:e)}))),o?(0,r.cloneElement)(k.filter((n=>n.props.value===h))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((n,e)=>(0,r.cloneElement)(n,{key:e,hidden:n.props.value!==h})))))}function d(n){const e=(0,o.Z)();return r.createElement(u,(0,t.Z)({key:String(e)},n))}},7788:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>y,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=a(7462),r=(a(7378),a(3905)),l=a(5488),o=a(5162);const i={title:"Drawing Library\uc5d0\uc11c \ub370\uc774\ud130 \uc5bb\uae30",sidebar_position:12},p=void 0,s={unversionedId:"sample/library/drawingGetData",id:"sample/library/drawingGetData",title:"Drawing Library\uc5d0\uc11c \ub370\uc774\ud130 \uc5bb\uae30",description:"Drawing Library\ub97c \uc774\uc6a9\ud574 \ub3c4\ud615\uc744 \uadf8\ub9ac\uace0 \uadf8\ub824\uc9c4 \ub3c4\ud615\uc758 \ub370\uc774\ud130\ub97c Drawing Manager\uc758 getData \uba54\uc18c\ub4dc\ub97c \uc774\uc6a9\ud574 \uac00\uc838\uc628 \ud6c4 \ub2e4\ub978 \uc9c0\ub3c4\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",source:"@site/docs/sample/library/drawingGetData.mdx",sourceDirName:"sample/library",slug:"/sample/library/drawingGetData",permalink:"/docs/sample/library/drawingGetData",draft:!1,editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/library/drawingGetData.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Drawing Library\uc5d0\uc11c \ub370\uc774\ud130 \uc5bb\uae30",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Drawing Library \uc0ac\uc6a9\ud558\uae30",permalink:"/docs/sample/library/basicDrawingLibrary"},next:{title:"Toolbox \uc0ac\uc6a9\ud558\uae30",permalink:"/docs/sample/library/drawingToolbox"}},y={},c=[],u={toc:c};function d(n){let{components:e,...a}=n;return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Drawing Library\ub97c \uc774\uc6a9\ud574 \ub3c4\ud615\uc744 \uadf8\ub9ac\uace0 \uadf8\ub824\uc9c4 \ub3c4\ud615\uc758 \ub370\uc774\ud130\ub97c Drawing Manager\uc758 getData \uba54\uc18c\ub4dc\ub97c \uc774\uc6a9\ud574 \uac00\uc838\uc628 \ud6c4 \ub2e4\ub978 \uc9c0\ub3c4\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"original docs : ",(0,r.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/drawingGetData/"},"https://apis.map.kakao.com/web/sample/drawingGetData/"))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"jsx",label:"JavaScript (live)",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function Main() {\n  // ref \uac1d\uccb4\ub97c \ud1b5\ud574 kakao.maps.drawng.DrawingManager \uac1d\uccb4\ub97c \uc804\ub2ec \ubc1b\uc544 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n  const managerRef = useRef(null)\n\n  const [overlayData, setOverlayData] = useState({\n    arrow: [],\n    circle: [],\n    ellipse: [],\n    marker: [],\n    polygon: [],\n    polyline: [],\n    rectangle: [],\n  })\n\n  function selectOverlay(type) {\n    const manager = managerRef.current\n    manager.cancel()\n    manager.select(type)\n  }\n\n  function drawOverlayData() {\n    const manager = managerRef.current\n    setOverlayData(manager.getData())\n  }\n\n  // Drawing Manager\uc5d0\uc11c \uac00\uc838\uc628 \ub370\uc774\ud130 \uc911\n  // \uc120\uacfc \ub2e4\uac01\ud615\uc758 \uaf2d\uc9c0\uc810 \uc815\ubcf4\ub97c latlng \ubc30\uc5f4\ub85c \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4\n  function pointsToPath(points) {\n    return points.map((point) => ({\n      lat: point.y,\n      lng: point.x,\n    }))\n  }\n\n  return (\n    <>\n      <Map\n        center={{\n          // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n          lat: 33.450701,\n          lng: 126.570667,\n        }}\n        style={{\n          width: "100%",\n          height: "450px",\n        }}\n        level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n      >\n        <DrawingManager\n          ref={managerRef}\n          drawingMode={[\n            kakao.maps.drawing.OverlayType.CIRCLE,\n            kakao.maps.drawing.OverlayType.ELLIPSE,\n            kakao.maps.drawing.OverlayType.MARKER,\n            kakao.maps.drawing.OverlayType.POLYLINE,\n            kakao.maps.drawing.OverlayType.RECTANGLE,\n            kakao.maps.drawing.OverlayType.POLYGON,\n          ]}\n          guideTooltip={["draw", "drag", "edit"]}\n          markerOptions={{\n            // \ub9c8\ucee4 \uc635\uc158\uc785\ub2c8\ub2e4\n            draggable: true, // \ub9c8\ucee4\ub97c \uadf8\ub9ac\uace0 \ub098\uc11c \ub4dc\ub798\uadf8 \uac00\ub2a5\ud558\uac8c \ud569\ub2c8\ub2e4\n            removable: true, // \ub9c8\ucee4\ub97c \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n          }}\n          polylineOptions={{\n            // \uc120 \uc635\uc158\uc785\ub2c8\ub2e4\n            draggable: true, // \uadf8\ub9b0 \ud6c4 \ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            removable: true, // \uadf8\ub9b0 \ud6c4 \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n            editable: true, // \uadf8\ub9b0 \ud6c4 \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            strokeColor: "#39f", // \uc120 \uc0c9\n            hintStrokeStyle: "dash", // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \uc120 \uc2a4\ud0c0\uc77c\n            hintStrokeOpacity: 0.5, // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \ud22c\uba85\ub3c4\n          }}\n          rectangleOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f", // \uc678\uacfd\uc120 \uc0c9\n            fillColor: "#39f", // \ucc44\uc6b0\uae30 \uc0c9\n            fillOpacity: 0.5, // \ucc44\uc6b0\uae30\uc0c9 \ud22c\uba85\ub3c4\n          }}\n          circleOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n          }}\n          polygonOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n            hintStrokeStyle: "dash",\n            hintStrokeOpacity: 0.5,\n          }}\n          ellipseOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n          }}\n        />\n      </Map>\n      <div\n        style={{\n          display: "flex",\n          gap: "8px",\n        }}\n      >\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.POLYLINE)\n          }}\n        >\n          \uc120\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.CIRCLE)\n          }}\n        >\n          \uc6d0\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.ELLIPSE)\n          }}\n        >\n          \ud0c0\uc6d0\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.MARKER)\n          }}\n        >\n          \ub9c8\ucee4\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.POLYGON)\n          }}\n        >\n          \ub2e4\uac01\ud615\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.RECTANGLE)\n          }}\n        >\n          \uc0ac\uac01\ud615\n        </button>\n      </div>\n      <div\n        style={{\n          position: "relative",\n        }}\n      >\n        <Map\n          center={{\n            // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n            lat: 33.450701,\n            lng: 126.570667,\n          }}\n          style={{\n            width: "100%",\n            height: "450px",\n          }}\n          level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n        >\n          {overlayData.polyline.map(({ points, options }, i) => (\n            <Polyline key={i} path={pointsToPath(points)} {...options} />\n          ))}\n          {overlayData.circle.map(({ options, center, radius }, i) => (\n            <Circle\n              key={i}\n              radius={radius}\n              center={{\n                lat: center.y,\n                lng: center.x,\n              }}\n              {...options}\n            />\n          ))}\n          {overlayData.ellipse.map(({ center, rx, ry, options }, i) => (\n            <Ellipse\n              key={i}\n              center={{\n                lat: center.y,\n                lng: center.x,\n              }}\n              rx={rx}\n              ry={ry}\n              {...options}\n            />\n          ))}\n          {overlayData.marker.map(({ x, y, zIndex }, i) => (\n            <MapMarker\n              key={i}\n              position={{\n                lat: y,\n                lng: x,\n              }}\n              zIndex={zIndex}\n            />\n          ))}\n          {overlayData.polygon.map(({ options, points }, i) => (\n            <Polygon key={i} path={pointsToPath(points)} {...options} />\n          ))}\n          {overlayData.rectangle.map(({ options, sPoint, ePoint }, i) => (\n            <Rectangle\n              key={i}\n              bounds={{\n                sw: {\n                  lat: sPoint.y,\n                  lng: sPoint.x,\n                },\n                ne: {\n                  lat: ePoint.y,\n                  lng: ePoint.x,\n                },\n              }}\n              {...options}\n            />\n          ))}\n        </Map>\n        <div>\n          <button onClick={drawOverlayData}>\uac00\uc838\uc624\uae30</button>\n        </div>\n      </div>\n    </>\n  )\n}\n'))),(0,r.kt)(o.Z,{value:"tsx",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const Main = () => {\n  type DrawingManagerType = kakao.maps.drawing.DrawingManager<\n    | kakao.maps.drawing.OverlayType.CIRCLE\n    | kakao.maps.drawing.OverlayType.ELLIPSE\n    | kakao.maps.drawing.OverlayType.MARKER\n    | kakao.maps.drawing.OverlayType.POLYLINE\n    | kakao.maps.drawing.OverlayType.RECTANGLE\n    | kakao.maps.drawing.OverlayType.POLYGON\n  >\n\n  const managerRef = useRef<DrawingManagerType>(null)\n\n  const [overlayData, setOverlayData] = useState<\n    ReturnType<DrawingManagerType["getData"]>\n  >({\n    arrow: [],\n    circle: [],\n    ellipse: [],\n    marker: [],\n    polygon: [],\n    polyline: [],\n    rectangle: [],\n  })\n\n  function selectOverlay(\n    type:\n      | kakao.maps.drawing.OverlayType.CIRCLE\n      | kakao.maps.drawing.OverlayType.ELLIPSE\n      | kakao.maps.drawing.OverlayType.MARKER\n      | kakao.maps.drawing.OverlayType.POLYLINE\n      | kakao.maps.drawing.OverlayType.RECTANGLE\n      | kakao.maps.drawing.OverlayType.POLYGON\n  ) {\n    const manager = managerRef.current\n    manager.cancel()\n    manager.select(type)\n  }\n\n  function drawOverlayData() {\n    const manager = managerRef.current\n    setOverlayData(manager.getData())\n  }\n\n  // Drawing Manager\uc5d0\uc11c \uac00\uc838\uc628 \ub370\uc774\ud130 \uc911\n  // \uc120\uacfc \ub2e4\uac01\ud615\uc758 \uaf2d\uc9c0\uc810 \uc815\ubcf4\ub97c latlng \ubc30\uc5f4\ub85c \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4\n  function pointsToPath(points: Array<{ x: number; y: number }>) {\n    return points.map((point) => ({\n      lat: point.y,\n      lng: point.x,\n    }))\n  }\n\n  return (\n    <>\n      <Map\n        center={{\n          // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n          lat: 33.450701,\n          lng: 126.570667,\n        }}\n        style={{\n          width: "100%",\n          height: "450px",\n        }}\n        level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n      >\n        <DrawingManager\n          ref={managerRef}\n          drawingMode={[\n            kakao.maps.drawing.OverlayType.CIRCLE,\n            kakao.maps.drawing.OverlayType.ELLIPSE,\n            kakao.maps.drawing.OverlayType.MARKER,\n            kakao.maps.drawing.OverlayType.POLYLINE,\n            kakao.maps.drawing.OverlayType.RECTANGLE,\n            kakao.maps.drawing.OverlayType.POLYGON,\n          ]}\n          guideTooltip={["draw", "drag", "edit"]}\n          markerOptions={{\n            // \ub9c8\ucee4 \uc635\uc158\uc785\ub2c8\ub2e4\n            draggable: true, // \ub9c8\ucee4\ub97c \uadf8\ub9ac\uace0 \ub098\uc11c \ub4dc\ub798\uadf8 \uac00\ub2a5\ud558\uac8c \ud569\ub2c8\ub2e4\n            removable: true, // \ub9c8\ucee4\ub97c \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n          }}\n          polylineOptions={{\n            // \uc120 \uc635\uc158\uc785\ub2c8\ub2e4\n            draggable: true, // \uadf8\ub9b0 \ud6c4 \ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            removable: true, // \uadf8\ub9b0 \ud6c4 \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n            editable: true, // \uadf8\ub9b0 \ud6c4 \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            strokeColor: "#39f", // \uc120 \uc0c9\n            hintStrokeStyle: "dash", // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \uc120 \uc2a4\ud0c0\uc77c\n            hintStrokeOpacity: 0.5, // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \ud22c\uba85\ub3c4\n          }}\n          rectangleOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f", // \uc678\uacfd\uc120 \uc0c9\n            fillColor: "#39f", // \ucc44\uc6b0\uae30 \uc0c9\n            fillOpacity: 0.5, // \ucc44\uc6b0\uae30\uc0c9 \ud22c\uba85\ub3c4\n          }}\n          circleOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n          }}\n          polygonOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n            hintStrokeStyle: "dash",\n            hintStrokeOpacity: 0.5,\n          }}\n          ellipseOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n          }}\n        />\n      </Map>\n      <div\n        style={{\n          display: "flex",\n          gap: "8px",\n        }}\n      >\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.POLYLINE)\n          }}\n        >\n          \uc120\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.CIRCLE)\n          }}\n        >\n          \uc6d0\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.ELLIPSE)\n          }}\n        >\n          \ud0c0\uc6d0\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.MARKER)\n          }}\n        >\n          \ub9c8\ucee4\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.POLYGON)\n          }}\n        >\n          \ub2e4\uac01\ud615\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.RECTANGLE)\n          }}\n        >\n          \uc0ac\uac01\ud615\n        </button>\n      </div>\n      <div\n        style={{\n          position: "relative",\n        }}\n      >\n        <Map\n          center={{\n            // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n            lat: 33.450701,\n            lng: 126.570667,\n          }}\n          style={{\n            width: "100%",\n            height: "450px",\n          }}\n          level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n        >\n          {overlayData.polyline.map(({ points, options }, i) => (\n            <Polyline key={i} path={pointsToPath(points)} {...options} />\n          ))}\n          {overlayData.circle.map(({ options, center, radius }, i) => (\n            <Circle\n              key={i}\n              radius={radius}\n              center={{\n                lat: center.y,\n                lng: center.x,\n              }}\n              {...options}\n            />\n          ))}\n          {overlayData.ellipse.map(({ center, rx, ry, options }, i) => (\n            <Ellipse\n              key={i}\n              center={{\n                lat: center.y,\n                lng: center.x,\n              }}\n              rx={rx}\n              ry={ry}\n              {...options}\n            />\n          ))}\n          {overlayData.marker.map(({ x, y, zIndex }, i) => (\n            <MapMarker\n              key={i}\n              position={{\n                lat: y,\n                lng: x,\n              }}\n              zIndex={zIndex}\n            />\n          ))}\n          {overlayData.polygon.map(({ options, points }, i) => (\n            <Polygon key={i} path={pointsToPath(points)} {...options} />\n          ))}\n          {overlayData.rectangle.map(({ options, sPoint, ePoint }, i) => (\n            <Rectangle\n              key={i}\n              bounds={{\n                sw: {\n                  lat: sPoint.y,\n                  lng: sPoint.x,\n                },\n                ne: {\n                  lat: ePoint.y,\n                  lng: ePoint.x,\n                },\n              }}\n              {...options}\n            />\n          ))}\n        </Map>\n        <div>\n          <button onClick={drawOverlayData}>\uac00\uc838\uc624\uae30</button>\n        </div>\n      </div>\n    </>\n  )\n}\n')))))}d.isMDXComponent=!0}}]);