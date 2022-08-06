"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6750],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>d});var r=a(7378);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=r.createContext({}),p=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=p(a),d=t,b=y["".concat(s,".").concat(d)]||y[d]||c[d]||l;return a?r.createElement(b,o(o({ref:n},u),{},{components:a})):r.createElement(b,o({ref:n},u))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,o=new Array(l);o[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},5162:(e,n,a)=>{a.d(n,{Z:()=>o});var r=a(7378),t=a(6010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,t.Z)(l,o),hidden:a},n)}},5488:(e,n,a)=>{a.d(n,{Z:()=>d});var r=a(7462),t=a(7378),l=a(6010),o=a(2389),i=a(7392),s=a(7094),p=a(2466);const u="tabList__CuJ",c="tabItem_LNqP";function y(e){var n,a;const{lazy:o,block:y,defaultValue:d,values:b,groupId:m,className:g}=e,k=t.Children.map(e.children,(e=>{if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:k.map((e=>{let{props:{value:n,label:a,attributes:r}}=e;return{value:n,label:a,attributes:r}})),f=(0,i.l)(v,((e,n)=>e.value===n.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const O=null===d?d:null!=(n=null!=d?d:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?n:k[0].props.value;if(null!==O&&!v.some((e=>e.value===O)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+O+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:h}=(0,s.U)(),[T,C]=(0,t.useState)(O),E=[],{blockElementScrollPositionUntilNextRender:L}=(0,p.o5)();if(null!=m){const e=w[m];null!=e&&e!==T&&v.some((n=>n.value===e))&&C(e)}const R=e=>{const n=e.currentTarget,a=E.indexOf(n),r=v[a].value;r!==T&&(L(n),C(r),null!=m&&h(m,String(r)))},D=e=>{var n;let a=null;switch(e.key){case"ArrowRight":{var r;const n=E.indexOf(e.currentTarget)+1;a=null!=(r=E[n])?r:E[0];break}case"ArrowLeft":{var t;const n=E.indexOf(e.currentTarget)-1;a=null!=(t=E[n])?t:E[E.length-1];break}}null==(n=a)||n.focus()};return t.createElement("div",{className:(0,l.Z)("tabs-container",u)},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":y},g)},v.map((e=>{let{value:n,label:a,attributes:o}=e;return t.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>E.push(e),onKeyDown:D,onFocus:R,onClick:R},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===n})}),null!=a?a:n)}))),o?(0,t.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):t.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function d(e){const n=(0,o.Z)();return t.createElement(y,(0,r.Z)({key:String(n)},e))}},7405:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=a(7462),t=(a(7378),a(3905)),l=a(5488),o=a(5162);const i={title:"Drawing Library \uc0ac\uc6a9\ud558\uae30",sidebar_position:11},s=void 0,p={unversionedId:"sample/library/basicDrawingLibrary",id:"sample/library/basicDrawingLibrary",title:"Drawing Library \uc0ac\uc6a9\ud558\uae30",description:"Drawing Library\uc758 \uae30\ubcf8\uc801\uc778 \uc0ac\uc6a9 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. Drawing Library\ub85c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc26c\uc6b4 \ub3c4\ud615 \uadf8\ub9ac\uae30\ub97c \uc81c\uacf5\ud558\uae30 \uc704\ud574\uc11c Drawing Manager\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.",source:"@site/docs/sample/library/basicDrawingLibrary.mdx",sourceDirName:"sample/library",slug:"/sample/library/basicDrawingLibrary",permalink:"/docs/sample/library/basicDrawingLibrary",draft:!1,editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/library/basicDrawingLibrary.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Drawing Library \uc0ac\uc6a9\ud558\uae30",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\ud074\ub7ec\uc2a4\ud130 \ub9c8\ucee4\uc5d0 \ud14d\uc2a4\ud2b8 \ud45c\uc2dc\ud558\uae30",permalink:"/docs/sample/library/chickenClusterer"},next:{title:"Drawing Library\uc5d0\uc11c \ub370\uc774\ud130 \uc5bb\uae30",permalink:"/docs/sample/library/drawingGetData"}},u={},c=[],y={toc:c};function d(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},y,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Drawing Library\uc758 \uae30\ubcf8\uc801\uc778 \uc0ac\uc6a9 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. Drawing Library\ub85c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc26c\uc6b4 \ub3c4\ud615 \uadf8\ub9ac\uae30\ub97c \uc81c\uacf5\ud558\uae30 \uc704\ud574\uc11c Drawing Manager\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"original docs : ",(0,t.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/basicDrawingLibrary/"},"https://apis.map.kakao.com/web/sample/basicDrawingLibrary/"))),(0,t.kt)(l.Z,{mdxType:"Tabs"},(0,t.kt)(o.Z,{value:"jsx",label:"JavaScript (live)",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function Main() {\n  // ref \uac1d\uccb4\ub97c \ud1b5\ud574 kakao.maps.drawng.DrawingManager \uac1d\uccb4\ub97c \uc804\ub2ec \ubc1b\uc544 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n  const managerRef = useRef(null)\n\n  function selectOverlay(type) {\n    const manager = managerRef.current\n    manager.cancel()\n    manager.select(type)\n  }\n\n  return (\n    <>\n      <Map\n        center={{\n          // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n          lat: 33.450701,\n          lng: 126.570667,\n        }}\n        style={{\n          width: "100%",\n          height: "450px",\n        }}\n        level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n      >\n        <DrawingManager\n          ref={managerRef}\n          drawingMode={[\n            kakao.maps.drawing.OverlayType.ARROW,\n            kakao.maps.drawing.OverlayType.CIRCLE,\n            kakao.maps.drawing.OverlayType.ELLIPSE,\n            kakao.maps.drawing.OverlayType.MARKER,\n            kakao.maps.drawing.OverlayType.POLYLINE,\n            kakao.maps.drawing.OverlayType.RECTANGLE,\n            kakao.maps.drawing.OverlayType.POLYGON,\n          ]}\n          guideTooltip={["draw", "drag", "edit"]}\n          markerOptions={{\n            // \ub9c8\ucee4 \uc635\uc158\uc785\ub2c8\ub2e4\n            draggable: true, // \ub9c8\ucee4\ub97c \uadf8\ub9ac\uace0 \ub098\uc11c \ub4dc\ub798\uadf8 \uac00\ub2a5\ud558\uac8c \ud569\ub2c8\ub2e4\n            removable: true, // \ub9c8\ucee4\ub97c \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n          }}\n          polylineOptions={{\n            // \uc120 \uc635\uc158\uc785\ub2c8\ub2e4\n            draggable: true, // \uadf8\ub9b0 \ud6c4 \ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            removable: true, // \uadf8\ub9b0 \ud6c4 \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n            editable: true, // \uadf8\ub9b0 \ud6c4 \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            strokeColor: "#39f", // \uc120 \uc0c9\n            hintStrokeStyle: "dash", // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \uc120 \uc2a4\ud0c0\uc77c\n            hintStrokeOpacity: 0.5, // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \ud22c\uba85\ub3c4\n          }}\n          rectangleOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f", // \uc678\uacfd\uc120 \uc0c9\n            fillColor: "#39f", // \ucc44\uc6b0\uae30 \uc0c9\n            fillOpacity: 0.5, // \ucc44\uc6b0\uae30\uc0c9 \ud22c\uba85\ub3c4\n          }}\n          circleOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n          }}\n          polygonOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n            hintStrokeStyle: "dash",\n            hintStrokeOpacity: 0.5,\n          }}\n          arrowOptions={{\n            draggable: true, // \uadf8\ub9b0 \ud6c4 \ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            removable: true, // \uadf8\ub9b0 \ud6c4 \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n            editable: true, // \uadf8\ub9b0 \ud6c4 \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            strokeColor: "#39f", // \uc120 \uc0c9\n            hintStrokeStyle: "dash", // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \uc120 \uc2a4\ud0c0\uc77c\n            hintStrokeOpacity: 0.5, // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \ud22c\uba85\ub3c4\n          }}\n          ellipseOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n          }}\n        />\n      </Map>\n      <div\n        style={{\n          display: "flex",\n          gap: "8px",\n        }}\n      >\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.POLYLINE)\n          }}\n        >\n          \uc120\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.ARROW)\n          }}\n        >\n          \ud654\uc0b4\ud45c\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.CIRCLE)\n          }}\n        >\n          \uc6d0\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.MARKER)\n          }}\n        >\n          \ub9c8\ucee4\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.POLYGON)\n          }}\n        >\n          \ub2e4\uac01\ud615\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.RECTANGLE)\n          }}\n        >\n          \uc0ac\uac01\ud615\n        </button>\n      </div>\n    </>\n  )\n}\n'))),(0,t.kt)(o.Z,{value:"tsx",label:"TypeScript",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx"},'const Main = () => {\n  // ref \uac1d\uccb4\ub97c \ud1b5\ud574 kakao.maps.drawng.DrawingManager \uac1d\uccb4\ub97c \uc804\ub2ec \ubc1b\uc544 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n  // \ub610\ud55c TypeScript\ub97c \uc0ac\uc6a9\ud558\uae30 \ub584\ubb38\uc5d0 \uc804\ub2ec \ubc1b\ub294 DrawingManager\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 OverlayType\uc5d0 \ub300\ud574\uc11c \uc815\uc758\ud574\uc57c \ud569\ub2c8\ub2e4.\n  const managerRef =\n    useRef<\n      kakao.maps.drawing.DrawingManager<\n        | kakao.maps.drawing.OverlayType.ARROW\n        | kakao.maps.drawing.OverlayType.CIRCLE\n        | kakao.maps.drawing.OverlayType.ELLIPSE\n        | kakao.maps.drawing.OverlayType.MARKER\n        | kakao.maps.drawing.OverlayType.POLYLINE\n        | kakao.maps.drawing.OverlayType.RECTANGLE\n        | kakao.maps.drawing.OverlayType.POLYGON\n      >\n    >(null)\n\n  function selectOverlay(type: kakao.maps.drawing.OverlayType) {\n    const manager = managerRef.current\n    manager.cancel()\n    manager.select(type)\n  }\n\n  return (\n    <>\n      <Map\n        center={{\n          // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n          lat: 33.450701,\n          lng: 126.570667,\n        }}\n        style={{\n          width: "100%",\n          height: "450px",\n        }}\n        level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n      >\n        <DrawingManager\n          ref={managerRef}\n          drawingMode={[\n            kakao.maps.drawing.OverlayType.ARROW,\n            kakao.maps.drawing.OverlayType.CIRCLE,\n            kakao.maps.drawing.OverlayType.ELLIPSE,\n            kakao.maps.drawing.OverlayType.MARKER,\n            kakao.maps.drawing.OverlayType.POLYLINE,\n            kakao.maps.drawing.OverlayType.RECTANGLE,\n            kakao.maps.drawing.OverlayType.POLYGON,\n          ]}\n          guideTooltip={["draw", "drag", "edit"]}\n          markerOptions={{\n            // \ub9c8\ucee4 \uc635\uc158\uc785\ub2c8\ub2e4\n            draggable: true, // \ub9c8\ucee4\ub97c \uadf8\ub9ac\uace0 \ub098\uc11c \ub4dc\ub798\uadf8 \uac00\ub2a5\ud558\uac8c \ud569\ub2c8\ub2e4\n            removable: true, // \ub9c8\ucee4\ub97c \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n          }}\n          polylineOptions={{\n            // \uc120 \uc635\uc158\uc785\ub2c8\ub2e4\n            draggable: true, // \uadf8\ub9b0 \ud6c4 \ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            removable: true, // \uadf8\ub9b0 \ud6c4 \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n            editable: true, // \uadf8\ub9b0 \ud6c4 \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            strokeColor: "#39f", // \uc120 \uc0c9\n            hintStrokeStyle: "dash", // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \uc120 \uc2a4\ud0c0\uc77c\n            hintStrokeOpacity: 0.5, // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \ud22c\uba85\ub3c4\n          }}\n          rectangleOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f", // \uc678\uacfd\uc120 \uc0c9\n            fillColor: "#39f", // \ucc44\uc6b0\uae30 \uc0c9\n            fillOpacity: 0.5, // \ucc44\uc6b0\uae30\uc0c9 \ud22c\uba85\ub3c4\n          }}\n          circleOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n          }}\n          polygonOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n            hintStrokeStyle: "dash",\n            hintStrokeOpacity: 0.5,\n          }}\n          arrowOptions={{\n            draggable: true, // \uadf8\ub9b0 \ud6c4 \ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            removable: true, // \uadf8\ub9b0 \ud6c4 \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n            editable: true, // \uadf8\ub9b0 \ud6c4 \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            strokeColor: "#39f", // \uc120 \uc0c9\n            hintStrokeStyle: "dash", // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \uc120 \uc2a4\ud0c0\uc77c\n            hintStrokeOpacity: 0.5, // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \ud22c\uba85\ub3c4\n          }}\n          ellipseOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n          }}\n        />\n      </Map>\n      <div\n        style={{\n          display: "flex",\n          gap: "8px",\n        }}\n      >\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.POLYLINE)\n          }}\n        >\n          \uc120\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.ARROW)\n          }}\n        >\n          \ud654\uc0b4\ud45c\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.CIRCLE)\n          }}\n        >\n          \uc6d0\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.MARKER)\n          }}\n        >\n          \ub9c8\ucee4\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.POLYGON)\n          }}\n        >\n          \ub2e4\uac01\ud615\n        </button>\n        <button\n          onClick={(e) => {\n            selectOverlay(kakao.maps.drawing.OverlayType.RECTANGLE)\n          }}\n        >\n          \uc0ac\uac01\ud615\n        </button>\n      </div>\n    </>\n  )\n}\n')))))}d.isMDXComponent=!0}}]);