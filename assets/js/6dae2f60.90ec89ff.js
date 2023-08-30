"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48],{4852:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>y});var t=a(9231);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),i=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=i(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},v=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(a),v=r,y=m["".concat(p,".").concat(v)]||m[v]||u[v]||s;return a?t.createElement(y,o(o({ref:n},c),{},{components:a})):t.createElement(y,o({ref:n},c))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=v;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=a[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}v.displayName="MDXCreateElement"},1340:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var t=a(328),r=(a(9231),a(4852));const s={title:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774 \uc0dd\uc131\ud558\uae302",sidebar_position:22},o=void 0,l={unversionedId:"sample/overlay/customOverlay2",id:"sample/overlay/customOverlay2",title:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774 \uc0dd\uc131\ud558\uae302",description:"HTML\uacfc CSS\ub97c \uc774\uc6a9\ud574 \uc9c0\ub3c4 \uc704\uc5d0 \uc790\uc720\ub86d\uac8c \ucee8\ud150\uce20\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4.",source:"@site/docs/sample/overlay/customOverlay2.mdx",sourceDirName:"sample/overlay",slug:"/sample/overlay/customOverlay2",permalink:"/docs/sample/overlay/customOverlay2",draft:!1,editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/overlay/customOverlay2.mdx",tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774 \uc0dd\uc131\ud558\uae302",sidebar_position:22},sidebar:"tutorialSidebar",previous:{title:"\ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774 \uc0dd\uc131\ud558\uae301",permalink:"/docs/sample/overlay/customOverlay1"},next:{title:"\ub2eb\uae30\uac00 \uac00\ub2a5\ud55c \ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774",permalink:"/docs/sample/overlay/removableCustomOverlay"}},p={},i=[],c={toc:i},m="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(m,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"HTML\uacfc CSS\ub97c \uc774\uc6a9\ud574 \uc9c0\ub3c4 \uc704\uc5d0 \uc790\uc720\ub86d\uac8c \ucee8\ud150\uce20\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"original docs : ",(0,r.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/customOverlay2/"},"https://apis.map.kakao.com/web/sample/customOverlay2/"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function(){\n  // \ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\uc5d0 \ud45c\uc2dc\ub420 Component \uc785\ub2c8\ub2e4.\n  const MovieChart = () => (\n    <div className="overlaybox">\n      <div className="boxtitle">\uae08\uc8fc \uc601\ud654\uc21c\uc704</div>\n      <div className="first">\n        <div className="triangle text">1</div>\n        <div className="movietitle text">\ub4dc\ub798\uace4 \uae38\ub4e4\uc774\uae302</div>\n      </div>\n      <ul>\n        <li className="up">\n          <span className="number">2</span>\n          <span className="title">\uba85\ub7c9</span>\n          <span className="arrow up"></span>\n          <span className="count">2</span>\n        </li>\n        <li>\n          <span className="number">3</span>\n          <span className="title">\ud574\uc801(\ubc14\ub2e4\ub85c \uac04 \uc0b0\uc801)</span>\n          <span className="arrow up"></span>\n          <span className="count">6</span>\n        </li>\n        <li>\n          <span className="number">4</span>\n          <span className="title">\ud574\ubb34</span>\n          <span className="arrow up"></span>\n          <span className="count">3</span>\n        </li>\n        <li>\n          <span className="number">5</span>\n          <span className="title">\uc548\ub155, \ud5e4\uc774\uc990</span>\n          <span className="arrow down"></span>\n          <span className="count">1</span>\n        </li>\n      </ul>\n    </div>\n  )\n\n  return (\n    <>\n      <CustomOverlay2Style />\n      <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n        center={{\n          // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n          lat: 37.502,\n          lng: 127.026581,\n        }}\n        style={{\n          // \uc9c0\ub3c4\uc758 \ud06c\uae30\n          width: "100%",\n          height: "450px",\n        }}\n        level={4} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n      >\n        <CustomOverlayMap // \ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\ub97c \ud45c\uc2dc\ud560 Container\n          // \ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\uac00 \ud45c\uc2dc\ub420 \uc704\uce58\uc785\ub2c8\ub2e4\n          position={{\n            lat: 37.49887,\n            lng: 127.026581,\n          }}\n          // \ucee4\uc2a4\ud140 \uc624\ubc84\ub808\uc774\uac00\uc5d0 \ub300\ud55c \ud655\uc7a5 \uc635\uc158\n          xAnchor={0.3}\n          yAnchor={0.91}\n        >\n          <MovieChart />\n        </CustomOverlayMap>\n      </Map>\n    </>\n  )\n}\n\n')))}u.isMDXComponent=!0}}]);