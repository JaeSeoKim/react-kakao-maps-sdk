"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7611],{9752:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(6437);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=p(t),d=a,m=y["".concat(s,".").concat(d)]||y[d]||u[d]||o;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[y]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6637:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(2304),a=(t(6437),t(9752));const o={title:"\uc6d0, \ud0c0\uc6d0, \uc120, \uc0ac\uac01\ud615, \ub2e4\uac01\ud615 \ud45c\uc2dc\ud558\uae30",sidebar_position:15},l=void 0,i={unversionedId:"sample/overlay/drawShape",id:"sample/overlay/drawShape",title:"\uc6d0, \ud0c0\uc6d0, \uc120, \uc0ac\uac01\ud615, \ub2e4\uac01\ud615 \ud45c\uc2dc\ud558\uae30",description:"\uc9c0\ub3c4 \uc704\uc5d0 \uc6d0, \ud0c0\uc6d0, \uc120, \uc0ac\uac01\ud615, \ub2e4\uac01\ud615\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",source:"@site/docs/sample/overlay/drawShape.mdx",sourceDirName:"sample/overlay",slug:"/sample/overlay/drawShape",permalink:"/docs/sample/overlay/drawShape",draft:!1,editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/overlay/drawShape.mdx",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"\uc6d0, \ud0c0\uc6d0, \uc120, \uc0ac\uac01\ud615, \ub2e4\uac01\ud615 \ud45c\uc2dc\ud558\uae30",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"\ub2e4\uc591\ud55c \uc774\ubbf8\uc9c0 \ub9c8\ucee4 \ud45c\uc2dc\ud558\uae30",permalink:"/docs/sample/overlay/categoryMarker"},next:{title:"\uc120\uc758 \uac70\ub9ac \uacc4\uc0b0\ud558\uae30",permalink:"/docs/sample/overlay/calculatePolylineDistance"}},s={},p=[],c={toc:p},y="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\uc9c0\ub3c4 \uc704\uc5d0 \uc6d0, \ud0c0\uc6d0, \uc120, \uc0ac\uac01\ud615, \ub2e4\uac01\ud615\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"original docs : ",(0,a.yg)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/drawShape/"},"https://apis.map.kakao.com/web/sample/drawShape/"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function(){\n  return (\n    <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n      center={{\n        // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n        lat: 33.450701,\n        lng: 126.570667,\n      }}\n      style={{\n        // \uc9c0\ub3c4\uc758 \ud06c\uae30\n        width: "100%",\n        height: "450px",\n      }}\n      level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n    >\n      <Circle\n        center={{\n          lat: 33.450701,\n          lng: 126.570667,\n        }}\n        radius={50}\n        strokeWeight={5} // \uc120\uc758 \ub450\uaed8\uc785\ub2c8\ub2e4\n        strokeColor={"#75B8FA"} // \uc120\uc758 \uc0c9\uae54\uc785\ub2c8\ub2e4\n        strokeOpacity={2} // \uc120\uc758 \ubd88\ud22c\uba85\ub3c4 \uc785\ub2c8\ub2e4 1\uc5d0\uc11c 0 \uc0ac\uc774\uc758 \uac12\uc774\uba70 0\uc5d0 \uac00\uae4c\uc6b8\uc218\ub85d \ud22c\uba85\ud569\ub2c8\ub2e4\n        strokeStyle={"dash"} // \uc120\uc758 \uc2a4\ud0c0\uc77c \uc785\ub2c8\ub2e4\n        fillColor={"#CFE7FF"} // \ucc44\uc6b0\uae30 \uc0c9\uae54\uc785\ub2c8\ub2e4\n        fillOpacity={0.7} // \ucc44\uc6b0\uae30 \ubd88\ud22c\uba85\ub3c4 \uc785\ub2c8\ub2e4\n      />\n      <Ellipse\n        center={{\n          lat: 33.45012,\n          lng: 126.570667,\n        }}\n        rx={14}\n        ry={24}\n        strokeWeight={3} // \uc120\uc758 \ub450\uaed8\uc785\ub2c8\ub2e4\n        strokeColor={"#39DE2A"} // \uc120\uc758 \uc0c9\uae54\uc785\ub2c8\ub2e4\n        strokeOpacity={0.8} // \uc120\uc758 \ubd88\ud22c\uba85\ub3c4 \uc785\ub2c8\ub2e4 1\uc5d0\uc11c 0 \uc0ac\uc774\uc758 \uac12\uc774\uba70 0\uc5d0 \uac00\uae4c\uc6b8\uc218\ub85d \ud22c\uba85\ud569\ub2c8\ub2e4\n        strokeStyle={"solid"} // \uc120\uc758 \uc2a4\ud0c0\uc77c\uc785\ub2c8\ub2e4\n        fillColor={"#A2FF99"} // \ucc44\uc6b0\uae30 \uc0c9\uae54\uc785\ub2c8\ub2e4\n        fillOpacity={0.7} // \ucc44\uc6b0\uae30 \ubd88\ud22c\uba85\ub3c4 \uc785\ub2c8\ub2e4\n      />\n      <Polyline\n        path={[\n          [\n            { lat: 33.452344169439975, lng: 126.56878163224233 },\n            { lat: 33.452739313807456, lng: 126.5709308145358 },\n            { lat: 33.45178067090639, lng: 126.572688693875 },\n          ],\n        ]}\n        strokeWeight={5} // \uc120\uc758 \ub450\uaed8 \uc785\ub2c8\ub2e4\n        strokeColor={"#FFAE00"} // \uc120\uc758 \uc0c9\uae54\uc785\ub2c8\ub2e4\n        strokeOpacity={0.7} // \uc120\uc758 \ubd88\ud22c\uba85\ub3c4 \uc785\ub2c8\ub2e4 1\uc5d0\uc11c 0 \uc0ac\uc774\uc758 \uac12\uc774\uba70 0\uc5d0 \uac00\uae4c\uc6b8\uc218\ub85d \ud22c\uba85\ud569\ub2c8\ub2e4\n        strokeStyle={"solid"} // \uc120\uc758 \uc2a4\ud0c0\uc77c\uc785\ub2c8\ub2e4\n      />\n      <Polygon\n        path={[\n          { lat: 33.45133510810506, lng: 126.57159381623066 },\n          { lat: 33.44955812811862, lng: 126.5713551811832 },\n          { lat: 33.449986291544086, lng: 126.57263296172184 },\n          { lat: 33.450682513554554, lng: 126.57321034054742 },\n          { lat: 33.451346760004206, lng: 126.57235740081413 },\n        ]}\n        strokeWeight={3} // \uc120\uc758 \ub450\uaed8\uc785\ub2c8\ub2e4\n        strokeColor={"#39DE2A"} // \uc120\uc758 \uc0c9\uae54\uc785\ub2c8\ub2e4\n        strokeOpacity={0.8} // \uc120\uc758 \ubd88\ud22c\uba85\ub3c4 \uc785\ub2c8\ub2e4 1\uc5d0\uc11c 0 \uc0ac\uc774\uc758 \uac12\uc774\uba70 0\uc5d0 \uac00\uae4c\uc6b8\uc218\ub85d \ud22c\uba85\ud569\ub2c8\ub2e4\n        strokeStyle={"longdash"} // \uc120\uc758 \uc2a4\ud0c0\uc77c\uc785\ub2c8\ub2e4\n        fillColor={"#A2FF99"} // \ucc44\uc6b0\uae30 \uc0c9\uae54\uc785\ub2c8\ub2e4\n        fillOpacity={0.7} // \ucc44\uc6b0\uae30 \ubd88\ud22c\uba85\ub3c4 \uc785\ub2c8\ub2e4\n      />\n      <Rectangle\n        bounds={{\n          sw: {\n            lat: 33.448842,\n            lng: 126.570379,\n          },\n          ne: {\n            lat: 33.450026,\n            lng: 126.568556,\n          },\n        }}\n        strokeWeight={4} // \uc120\uc758 \ub450\uaed8\uc785\ub2c8\ub2e4\n        strokeColor={"#FF3DE5"} // \uc120\uc758 \uc0c9\uae54\uc785\ub2c8\ub2e4\n        strokeOpacity={1} // \uc120\uc758 \ubd88\ud22c\uba85\ub3c4 \uc785\ub2c8\ub2e4 1\uc5d0\uc11c 0 \uc0ac\uc774\uc758 \uac12\uc774\uba70 0\uc5d0 \uac00\uae4c\uc6b8\uc218\ub85d \ud22c\uba85\ud569\ub2c8\ub2e4\n        strokeStyle={"shortdashdot"} // \uc120\uc758 \uc2a4\ud0c0\uc77c\uc785\ub2c8\ub2e4\n        fillColor={"#FF8AEF"} // \ucc44\uc6b0\uae30 \uc0c9\uae54\uc785\ub2c8\ub2e4\n        fillOpacity={0.8} // \ucc44\uc6b0\uae30 \ubd88\ud22c\uba85\ub3c4 \uc785\ub2c8\ub2e4\n      />\n    </Map>\n  );\n}\n')))}u.isMDXComponent=!0}}]);