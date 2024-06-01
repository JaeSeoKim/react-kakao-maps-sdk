"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1688],{9752:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>g});var a=r(6437);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var u=a.createContext({}),s=function(e){var n=a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),b=t,g=p["".concat(u,".").concat(b)]||p[b]||d[b]||l;return r?a.createElement(g,o(o({ref:n},c),{},{components:r})):a.createElement(g,o({ref:n},c))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=b;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:t,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},220:(e,n,r)=>{r.d(n,{A:()=>o});var a=r(6437),t=r(2767);const l={tabItem:"tabItem_Kzaa"};function o(e){let{children:n,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,o),hidden:r},n)}},4897:(e,n,r)=>{r.d(n,{A:()=>w});var a=r(2304),t=r(6437),l=r(2767),o=r(9064),i=r(8610),u=r(6101),s=r(362),c=r(1298);function p(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}function d(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??p(r);return function(e){const n=(0,s.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function b(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,l=d(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[u,s]=g({queryString:r,groupId:a}),[p,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),f=(()=>{const e=u??p;return b({value:e,tabValues:l})?e:null})();(0,t.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),m(e)}),[s,m,l]),tabValues:l}}var f=r(9445);const y={tabList:"tabList_srU7",tabItem:"tabItem_VyFA"};function v(e){let{className:n,block:r,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),a=s[r].value;a!==i&&(p(n),u(a))},b=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},n)},s.map((e=>{let{value:n,label:r,attributes:o}=e;return t.createElement("li",(0,a.A)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:b,onClick:d},o,{className:(0,l.A)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":i===n})}),r??n)})))}function k(e){let{lazy:n,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function h(e){const n=m(e);return t.createElement("div",{className:(0,l.A)("tabs-container",y.tabList)},t.createElement(v,(0,a.A)({},e,n)),t.createElement(k,(0,a.A)({},e,n)))}function w(e){const n=(0,f.A)();return t.createElement(h,(0,a.A)({key:String(n)},e))}},9766:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(2304),t=(r(6437),r(9752)),l=r(4897),o=r(220);const i={title:"Toolbox \uc0ac\uc6a9\ud558\uae30",sidebar_position:13},u=void 0,s={unversionedId:"sample/library/drawingToolbox",id:"sample/library/drawingToolbox",title:"Toolbox \uc0ac\uc6a9\ud558\uae30",description:"\ub3c4\ud615\uc744 \uc880 \ub354 \uc27d\uac8c \uadf8\ub9b4 \uc218 \uc788\ub294 Toolbox\ub97c \uc0dd\uc131\ud558\uace0 \uc9c0\ub3c4\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",source:"@site/docs/sample/library/drawingToolbox.mdx",sourceDirName:"sample/library",slug:"/sample/library/drawingToolbox",permalink:"/docs/sample/library/drawingToolbox",draft:!1,editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/library/drawingToolbox.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Toolbox \uc0ac\uc6a9\ud558\uae30",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Drawing Library\uc5d0\uc11c \ub370\uc774\ud130 \uc5bb\uae30",permalink:"/docs/sample/library/drawingGetData"},next:{title:"Drawing undo, redo",permalink:"/docs/sample/library/drawingUndo"}},c={},p=[],d={toc:p},b="wrapper";function g(e){let{components:n,...r}=e;return(0,t.yg)(b,(0,a.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"\ub3c4\ud615\uc744 \uc880 \ub354 \uc27d\uac8c \uadf8\ub9b4 \uc218 \uc788\ub294 Toolbox\ub97c \uc0dd\uc131\ud558\uace0 \uc9c0\ub3c4\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"original docs : ",(0,t.yg)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/drawingToolbox/"},"https://apis.map.kakao.com/web/sample/drawingToolbox/"))),(0,t.yg)(l.A,{mdxType:"Tabs"},(0,t.yg)(o.A,{value:"jsx",label:"JavaScript (live)",default:!0,mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function Main() {\n  // ref \uac1d\uccb4\ub97c \ud1b5\ud574 kakao.maps.drawng.DrawingManager \uac1d\uccb4\ub97c \uc804\ub2ec \ubc1b\uc544 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n  const managerRef = useRef(null)\n\n  return (\n    <>\n      <Map\n        center={{\n          // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n          lat: 33.450701,\n          lng: 126.570667,\n        }}\n        style={{\n          width: "100%",\n          height: "450px",\n        }}\n        level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n      >\n        <DrawingManager\n          ref={managerRef}\n          drawingMode={[\n            "arrow",\n            "circle",\n            "ellipse",\n            "marker",\n            "polyline",\n            "rectangle",\n            "polygon",\n          ]}\n          guideTooltip={["draw", "drag", "edit"]}\n          markerOptions={{\n            // \ub9c8\ucee4 \uc635\uc158\uc785\ub2c8\ub2e4\n            draggable: true, // \ub9c8\ucee4\ub97c \uadf8\ub9ac\uace0 \ub098\uc11c \ub4dc\ub798\uadf8 \uac00\ub2a5\ud558\uac8c \ud569\ub2c8\ub2e4\n            removable: true, // \ub9c8\ucee4\ub97c \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n          }}\n          polylineOptions={{\n            // \uc120 \uc635\uc158\uc785\ub2c8\ub2e4\n            draggable: true, // \uadf8\ub9b0 \ud6c4 \ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            removable: true, // \uadf8\ub9b0 \ud6c4 \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n            editable: true, // \uadf8\ub9b0 \ud6c4 \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            strokeColor: "#39f", // \uc120 \uc0c9\n            hintStrokeStyle: "dash", // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \uc120 \uc2a4\ud0c0\uc77c\n            hintStrokeOpacity: 0.5, // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \ud22c\uba85\ub3c4\n          }}\n          rectangleOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f", // \uc678\uacfd\uc120 \uc0c9\n            fillColor: "#39f", // \ucc44\uc6b0\uae30 \uc0c9\n            fillOpacity: 0.5, // \ucc44\uc6b0\uae30\uc0c9 \ud22c\uba85\ub3c4\n          }}\n          circleOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n          }}\n          polygonOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n            hintStrokeStyle: "dash",\n            hintStrokeOpacity: 0.5,\n          }}\n          arrowOptions={{\n            draggable: true, // \uadf8\ub9b0 \ud6c4 \ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            removable: true, // \uadf8\ub9b0 \ud6c4 \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n            editable: true, // \uadf8\ub9b0 \ud6c4 \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            strokeColor: "#39f", // \uc120 \uc0c9\n            hintStrokeStyle: "dash", // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \uc120 \uc2a4\ud0c0\uc77c\n            hintStrokeOpacity: 0.5, // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \ud22c\uba85\ub3c4\n          }}\n          ellipseOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n          }}\n        >\n          <Toolbox />\n        </DrawingManager>\n      </Map>\n    </>\n  )\n}\n'))),(0,t.yg)(o.A,{value:"tsx",label:"TypeScript",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'function Main() {\n  // ref \uac1d\uccb4\ub97c \ud1b5\ud574 kakao.maps.drawng.DrawingManager \uac1d\uccb4\ub97c \uc804\ub2ec \ubc1b\uc544 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n  // \ub610\ud55c TypeScript\ub97c \uc0ac\uc6a9\ud558\uae30 \ub584\ubb38\uc5d0 \uc804\ub2ec \ubc1b\ub294 DrawingManager\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 OverlayType\uc5d0 \ub300\ud574\uc11c \uc815\uc758\ud574\uc57c \ud569\ub2c8\ub2e4.\n  const managerRef =\n    useRef<\n      kakao.maps.drawing.DrawingManager<\n        | kakao.maps.drawing.OverlayType.ARROW\n        | kakao.maps.drawing.OverlayType.CIRCLE\n        | kakao.maps.drawing.OverlayType.ELLIPSE\n        | kakao.maps.drawing.OverlayType.MARKER\n        | kakao.maps.drawing.OverlayType.POLYLINE\n        | kakao.maps.drawing.OverlayType.RECTANGLE\n        | kakao.maps.drawing.OverlayType.POLYGON\n      >\n    >(null)\n\n  return (\n    <>\n      <Map\n        center={{\n          // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n          lat: 33.450701,\n          lng: 126.570667,\n        }}\n        style={{\n          width: "100%",\n          height: "450px",\n        }}\n        level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n      >\n        <DrawingManager\n          ref={managerRef}\n          drawingMode={[\n            kakao.maps.drawing.OverlayType.ARROW,\n            kakao.maps.drawing.OverlayType.CIRCLE,\n            kakao.maps.drawing.OverlayType.ELLIPSE,\n            kakao.maps.drawing.OverlayType.MARKER,\n            kakao.maps.drawing.OverlayType.POLYLINE,\n            kakao.maps.drawing.OverlayType.RECTANGLE,\n            kakao.maps.drawing.OverlayType.POLYGON,\n          ]}\n          guideTooltip={["draw", "drag", "edit"]}\n          markerOptions={{\n            // \ub9c8\ucee4 \uc635\uc158\uc785\ub2c8\ub2e4\n            draggable: true, // \ub9c8\ucee4\ub97c \uadf8\ub9ac\uace0 \ub098\uc11c \ub4dc\ub798\uadf8 \uac00\ub2a5\ud558\uac8c \ud569\ub2c8\ub2e4\n            removable: true, // \ub9c8\ucee4\ub97c \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n          }}\n          polylineOptions={{\n            // \uc120 \uc635\uc158\uc785\ub2c8\ub2e4\n            draggable: true, // \uadf8\ub9b0 \ud6c4 \ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            removable: true, // \uadf8\ub9b0 \ud6c4 \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n            editable: true, // \uadf8\ub9b0 \ud6c4 \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            strokeColor: "#39f", // \uc120 \uc0c9\n            hintStrokeStyle: "dash", // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \uc120 \uc2a4\ud0c0\uc77c\n            hintStrokeOpacity: 0.5, // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \ud22c\uba85\ub3c4\n          }}\n          rectangleOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f", // \uc678\uacfd\uc120 \uc0c9\n            fillColor: "#39f", // \ucc44\uc6b0\uae30 \uc0c9\n            fillOpacity: 0.5, // \ucc44\uc6b0\uae30\uc0c9 \ud22c\uba85\ub3c4\n          }}\n          circleOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n          }}\n          polygonOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n            hintStrokeStyle: "dash",\n            hintStrokeOpacity: 0.5,\n          }}\n          arrowOptions={{\n            draggable: true, // \uadf8\ub9b0 \ud6c4 \ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            removable: true, // \uadf8\ub9b0 \ud6c4 \uc0ad\uc81c \ud560 \uc218 \uc788\ub3c4\ub85d x \ubc84\ud2bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n            editable: true, // \uadf8\ub9b0 \ud6c4 \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n            strokeColor: "#39f", // \uc120 \uc0c9\n            hintStrokeStyle: "dash", // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \uc120 \uc2a4\ud0c0\uc77c\n            hintStrokeOpacity: 0.5, // \uadf8\ub9ac\uc911 \ub9c8\uc6b0\uc2a4\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \ubcf4\uc870\uc120\uc758 \ud22c\uba85\ub3c4\n          }}\n          ellipseOptions={{\n            draggable: true,\n            removable: true,\n            editable: true,\n            strokeColor: "#39f",\n            fillColor: "#39f",\n            fillOpacity: 0.5,\n          }}\n        >\n          <Toolbox />\n        </DrawingManager>\n      </Map>\n    </>\n  )\n}\n')))))}g.isMDXComponent=!0}}]);