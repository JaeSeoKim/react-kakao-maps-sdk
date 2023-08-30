"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3237],{6844:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var a=o(9231),n=o(9841),r=o(1781),s=o(4380),i=o(1592);const l={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",container:"container_bfhl",map:"map_sQa5"};var c=o(328);const u={features:"features_xdhU",featureSvg:"featureSvg__8YW"},d=[{title:"Easy to Use",image:"/img/undraw_Map_dark_re_36sy.svg",description:a.createElement(a.Fragment,null,"\ucef4\ud3ec\ub10c\ud2b8\ub97c \uc774\uc6a9\ud558\uc5ec \uac04\ub2e8\ud558\uac8c \uad6c\ud604\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4!")},{title:"Focus on What Matters",image:"/img/undraw_Location_tracking_re_n3ok.svg",description:a.createElement(a.Fragment,null,"\uae30\ub2a5 \uad6c\ud604\uc5d0 \uc9d1\uc911 \ud560 \uc218 \uc788\ub3c4\ub85d KakaoMap\uacfc React Life Cycle\uc744 \uc5f0\uacb0\ud558\uc5ec \uc81c\uacf5 \ud569\ub2c8\ub2e4!")},{title:"Powered by React, TypeScript",image:"/img/undraw_My_current_location_re_whmt.svg",description:a.createElement(a.Fragment,null,"TypeScript\uc758 \ud0c0\uc785 \ucd94\ub860\uacfc \ud568\uaed8 React\ub85c \uc27d\uac8c \uac1c\ubc1c\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4!!")}];function p(e){let{title:t,image:o,description:r}=e;return a.createElement("div",{className:(0,n.Z)("col col--4")},a.createElement("div",{className:"text--center"},a.createElement("img",{className:u.featureSvg,alt:t,src:o})),a.createElement("div",{className:"text--center padding-horiz--md"},a.createElement("h3",null,t),a.createElement("p",null,r)))}function m(){return a.createElement("section",{className:u.features},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},d.map(((e,t)=>a.createElement(p,(0,c.Z)({key:t},e)))))))}var f=o(3613);function k(){const{siteConfig:e}=(0,i.Z)();return a.createElement("header",{className:(0,n.Z)("hero hero--primary",l.heroBanner)},a.createElement("div",{className:(0,n.Z)("container",l.container)},a.createElement("h1",{className:"hero__title"},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline),a.createElement(f.Map,{className:l.map,center:{lat:33.450701,lng:126.570667}},a.createElement(f.MapMarker,{position:{lat:33.450701,lng:126.570667}},a.createElement("div",{style:{margin:"5px",color:"black"}},"React \ud83d\udc99 Kakao Map!")),a.createElement(f.CustomOverlayMap,{position:{lat:33.4498466026352,lng:126.57066214371602}},a.createElement("div",{className:l.buttons},a.createElement(s.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Tutorial - 5min \u23f1\ufe0f"))))))}function g(){const{siteConfig:e}=(0,i.Z)();return a.createElement(r.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},a.createElement(k,null),a.createElement("main",null,a.createElement(m,null)))}},3613:(e,t,o)=>{o.r(t),o.d(t,{AbstractOverlay:()=>z,Circle:()=>I,CustomOverlayMap:()=>L,CustomOverlayRoadview:()=>_,DrawingManager:()=>H,DrawingManagerContext:()=>N,Ellipse:()=>R,KakaoMapContext:()=>d,KakaoMapMarkerClustererContext:()=>g,KakaoRoadviewContext:()=>P,Loader:()=>u,LoaderStatus:()=>l,Map:()=>p,MapInfoWindow:()=>C,MapMarker:()=>v,MapTypeControl:()=>E,MapTypeId:()=>b,MarkerClusterer:()=>y,Polygon:()=>O,Polyline:()=>x,Rectangle:()=>S,Roadview:()=>A,RoadviewInfoWindow:()=>Z,RoadviewMarker:()=>D,StaticMap:()=>K,Toolbox:()=>F,ZoomControl:()=>M,useInjectKakaoMapApi:()=>$,useKakaoLoader:()=>U,useMap:()=>m,useRoadview:()=>T});var a=o(328),n=o(9231);const r="undefined"!=typeof window&&"undefined"!=typeof document?n.useLayoutEffect:n.useEffect,s=(e,t,o)=>{r((()=>{if(!e||!o)return;const a=function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return void 0===a?o(e):o(e,...a)};return kakao.maps.event.addListener(e,t,a),()=>{kakao.maps.event.removeListener(e,t,a)}}),[e,t,o])},i="__reactKakaoMapsSdk";let l=function(e){return e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE",e}({});const c=`${i}_Loader`;class u{static loadcheckcallbacks=[];callbacks=[];done=!1;loading=!1;errors=[];constructor(e){let{appkey:t,id:o=c,libraries:a=[],nonce:n,retries:r=3,url:s="//dapi.kakao.com/v2/maps/sdk.js"}=e;if(this.id=o,this.appkey=t,this.libraries=a,this.nonce=n,this.retries=r,this.url=s,u.instance){if(!u.equalOptions(this.options,u.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(u.instance.options)}`);return u.instance}u.instance=this}get options(){return{appkey:this.appkey,id:this.id,libraries:this.libraries,nonce:this.nonce,retries:this.retries,url:this.url}}static isLoaded(){return new Promise((e=>u.instance?u.instance.status===l.FAILURE?e(!1):void u.loadcheckcallbacks.push((t=>e(!t))):window.kakao&&window.kakao.maps?window.kakao.maps.load((()=>{e(!0)})):u.loadcheckcallbacks.push((t=>{e(!t)}))))}load(){return new Promise(((e,t)=>{this.loadCallback((o=>{o?t(o.error):e(window.kakao)}))}))}get status(){return this.onerrorEvent?l.FAILURE:this.done?l.SUCCESS:this.loading?l.LOADING:l.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}loadCallback(e){this.callbacks.push(e),this.execute()}resetIfRetryingFailed(){this.failed&&this.reset()}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=void 0}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.kakao&&window.kakao.maps)return console.warn("Kakao Maps\uc774 \uc774\ubbf8 \uc678\ubd80 \uc694\uc18c\uc5d0 \uc758\ud574 \ub85c\ub529\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.\uc124\uc815\ud55c \uc635\uc158\uacfc \uc77c\uce58 \ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc73c\uba70, \uc774\uc5d0 \ub530\ub978 \uc608\uc0c1\uce58 \ub3d9\uc791\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),void window.kakao.maps.load(this.callback);this.loading||(this.loading=!0,this.setScript())}}setScript(){document.getElementById(this.id)&&this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.onload=this.callback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}loadErrorCallback(e,t,o,a,n){if(this.errors.push({event:e,source:t,lineno:o,colno:a,error:n}),this.errors.length<=this.retries){const e=this.errors.length*2**this.errors.length;console.log(`Failed to load Kakao Maps script, retrying in ${e} ms.`),setTimeout((()=>{this.deleteScript(),this.setScript()}),e)}else this.onerrorEvent=this.errors[this.errors.length-1],this.callback()}createUrl(){let e=this.url;return e+=`?appkey=${this.appkey}`,this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),e+="&autoload=false",e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}callback(){kakao.maps.load((()=>{this.done=!0,this.loading=!1,this.callbacks.forEach((e=>{e(this.onerrorEvent)})),this.callbacks=[],u.loadcheckcallbacks.forEach((e=>{e(this.onerrorEvent)})),u.loadcheckcallbacks=[]}))}static equalOptions(e,t){if(e.appkey!==t.appkey)return!1;if(e.id!==t.id)return!1;if(e.libraries.length!==t.libraries.length)return!1;for(let o=0;o<e.libraries.length;++o)if(e.libraries[o]!==t.libraries[o])return!1;return e.nonce===t.nonce&&(e.retries===t.retries&&e.url===t.url)}}const d=n.createContext(void 0),p=n.forwardRef((function(e,t){let{id:o,as:l,children:c,center:p,isPanto:m=!1,padding:f=32,disableDoubleClick:k,disableDoubleClickZoom:g,draggable:y,zoomable:h,keyboardShortcuts:w,level:v,maxLevel:C,minLevel:L,mapTypeId:E,projectionId:M,scrollwheel:b,tileAnimation:I,onBoundsChanged:x,onCenterChanged:O,onClick:S,onDoubleClick:R,onDrag:z,onDragEnd:P,onDragStart:A,onIdle:T,onMaptypeidChanged:_,onMouseMove:D,onRightClick:Z,onTileLoaded:N,onZoomChanged:W,onZoomStart:H,onCreate:F,...K}=e;const U=l||"div",[$,j]=(0,n.useState)(!1),[B,G]=(0,n.useState)(),V=(0,n.useRef)(null);return r((()=>{u.isLoaded().then(j)}),[]),r((()=>{if(!$)return;const e=V.current;if(!e)return;const t="lat"in p?new kakao.maps.LatLng(p.lat,p.lng):new kakao.maps.Coords(p.x,p.y),o=new kakao.maps.Map(e,{center:t,disableDoubleClick:k,disableDoubleClickZoom:g,draggable:y,keyboardShortcuts:w,level:v,mapTypeId:E,projectionId:M,scrollwheel:b,tileAnimation:I});return G(o),()=>{e.innerHTML=""}}),[$,k,g,E,I]),(0,n.useImperativeHandle)(t,(()=>B),[B]),r((()=>{B&&F&&F(B)}),[B,F]),r((()=>{if(!B)return;let e=B.getCenter();e instanceof kakao.maps.Coords&&(e=e.toLatLng());const t="lat"in p?new kakao.maps.LatLng(p.lat,p.lng):new kakao.maps.Coords(p.x,p.y);t instanceof kakao.maps.LatLng&&t.equals(e)||t instanceof kakao.maps.Coords&&t.toLatLng().equals(e)||(m?B.panTo(t,f):B.setCenter(t))}),[B,p.lat,p.lng,p.x,p.y]),r((()=>{B&&void 0!==y&&B.setDraggable(y)}),[B,y]),r((()=>{B&&void 0!==h&&B.setZoomable(h)}),[B,h]),r((()=>{B&&w&&"boolean"==typeof w&&B.setKeyboardShortcuts(w)}),[B,w]),r((()=>{B&&v&&B.setLevel(v)}),[B,v]),r((()=>{B&&E&&B.setMapTypeId(E)}),[B,E]),r((()=>{B&&M&&B.setProjectionId(M)}),[B,M]),r((()=>{B&&C&&B.setMaxLevel(C)}),[B,C]),r((()=>{B&&L&&B.setMinLevel(L)}),[B,L]),s(B,"bounds_changed",x),s(B,"center_changed",O),s(B,"click",S),s(B,"dblclick",R),s(B,"drag",z),s(B,"dragstart",A),s(B,"dragend",P),s(B,"idle",T),s(B,"maptypeid_changed",_),s(B,"mousemove",D),s(B,"rightclick",Z),s(B,"tilesloaded",N),s(B,"zoom_changed",W),s(B,"zoom_start",H),n.createElement(n.Fragment,null,n.createElement(U,(0,a.Z)({id:o||`${i}_Map`},K,{ref:V})),B&&n.createElement(d.Provider,{value:B},c))})),m=e=>{const t=(0,n.useContext)(d);if(!t)throw new Error((e?e+" Component":"useMap")+" must exist inside Map Component!");return t};var f=o(4151);const k=n.forwardRef((function(e,t){let{map:o,position:a,marker:r,children:s,altitude:i,disableAutoPan:l,range:c,removable:u,zIndex:d,onCreate:p}=e;const m=(0,n.useRef)(document.createElement("div")),k=(0,n.useMemo)((()=>{const e=new kakao.maps.InfoWindow({altitude:i,disableAutoPan:l,range:c,removable:u,zIndex:d,content:m.current,position:a});return m.current.style.display="none",e}),[l,u]);return(0,n.useImperativeHandle)(t,(()=>k),[k]),(0,n.useLayoutEffect)((()=>(k.open(o,r),()=>{k.close()})),[o,r]),(0,n.useLayoutEffect)((()=>{p&&p(k)}),[k,p]),(0,n.useLayoutEffect)((()=>{k&&k.setPosition(a)}),[k,a]),(0,n.useLayoutEffect)((()=>{k&&i&&k.setAltitude(i)}),[k,i]),(0,n.useLayoutEffect)((()=>{k&&c&&k.setRange(c)}),[k,c]),(0,n.useLayoutEffect)((()=>{k&&d&&k.setZIndex(d)}),[k,d]),m.current.parentElement&&f.createPortal(s,m.current.parentElement)})),g=n.createContext(void 0),y=n.forwardRef((function(e,t){let{children:o,averageCenter:a,calculator:r,clickable:i,disableClickZoom:l,gridSize:c,hoverable:u,minClusterSize:d,minLevel:p,styles:f,texts:k,onClusterclick:y,onClusterdblclick:w,onClustered:v,onClusterout:C,onClusterover:L,onClusterrightclick:E,onCreate:M}=e;const b=m("MarkerClusterer"),I=(0,n.useMemo)((()=>{if(window.kakao.maps.MarkerClusterer)return new kakao.maps.MarkerClusterer({averageCenter:a,calculator:r,clickable:i,disableClickZoom:l,gridSize:c,hoverable:u,minClusterSize:d,minLevel:p,styles:f,texts:k});console.warn("clusterer \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ubcc4\ub3c4 \ub85c\ub4dc \ud574\uc57c \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4. `https://apis.map.kakao.com/web/guide/#loadlibrary`")}),[]);return(0,n.useImperativeHandle)(t,(()=>I),[I]),(0,n.useLayoutEffect)((()=>{I?.setMap(b)}),[b,I]),(0,n.useLayoutEffect)((()=>{I&&M&&M(I)}),[I,M]),(0,n.useLayoutEffect)((()=>{I&&c&&(I.setGridSize(c),I.redraw())}),[I,c]),(0,n.useLayoutEffect)((()=>{I&&d&&(I.setMinClusterSize(d),I.redraw())}),[I,d]),(0,n.useLayoutEffect)((()=>{I&&void 0!==a&&(I.setAverageCenter(a),I.redraw())}),[I,a]),(0,n.useLayoutEffect)((()=>{I&&p&&(I.setMinLevel(p),I.redraw())}),[I,p]),(0,n.useLayoutEffect)((()=>{I&&k&&(I.setTexts(k),I.redraw())}),[I,k]),(0,n.useLayoutEffect)((()=>{I&&r&&(I.setCalculator(r),I.redraw())}),[I,r]),s(I,"clustered",v),s(I,"clusterclick",y),s(I,"clusterover",L),s(I,"clusterout",C),s(I,"clusterdblclick",w),s(I,"clusterrightclick",E),(0,n.useLayoutEffect)((()=>{I&&f&&(I.setStyles(f),I.redraw())}),[I,f]),I?n.createElement(g.Provider,{value:I},o,n.createElement(h,null,o)):null})),h=e=>{let{children:t}=e;const o=(0,n.useContext)(g);return r((()=>{o.redraw()})),null},w=n.forwardRef((function(e,t){let{map:o,position:a,children:r,altitude:i,clickable:l,draggable:c,image:u,infoWindowOptions:d,onCreate:p,onClick:m,onDragEnd:f,onDragStart:y,onMouseOut:h,onMouseOver:w,opacity:v,range:C,title:L,zIndex:E}=e;const M=(0,n.useContext)(g),b=(0,n.useMemo)((()=>new kakao.maps.Marker({altitude:i,clickable:l,draggable:c,image:u,opacity:v,range:C,title:L,zIndex:E,position:a})),[]);return(0,n.useImperativeHandle)(t,(()=>b),[b]),(0,n.useLayoutEffect)((()=>(M?M.addMarker(b,!0):b.setMap(o),()=>{M?M.removeMarker(b,!0):b.setMap(null)})),[o,M,b]),(0,n.useLayoutEffect)((()=>{p&&p(b)}),[b,p]),s(b,"click",m),s(b,"dragstart",y),s(b,"dragend",f),s(b,"mouseout",h),s(b,"mouseover",w),(0,n.useLayoutEffect)((()=>{o&&b&&a&&b.setPosition(a)}),[o,b,a]),(0,n.useLayoutEffect)((()=>{o&&b&&u&&b.setImage(u)}),[o,b,u]),(0,n.useLayoutEffect)((()=>{o&&b&&i&&b.setAltitude(i)}),[o,b,i]),(0,n.useLayoutEffect)((()=>{o&&b&&void 0!==l&&b.setClickable(l)}),[o,b,l]),(0,n.useLayoutEffect)((()=>{o&&b&&void 0!==c&&b.setDraggable(c)}),[o,b,c]),(0,n.useLayoutEffect)((()=>{o&&b&&v&&b.setOpacity(v)}),[o,b,v]),(0,n.useLayoutEffect)((()=>{o&&b&&C&&b.setRange(C)}),[o,b,C]),(0,n.useLayoutEffect)((()=>{o&&b&&L&&b.setTitle(L)}),[o,b,L]),(0,n.useLayoutEffect)((()=>{o&&b&&E&&b.setZIndex(E)}),[o,b,E]),r?n.createElement(k,{position:a,map:o,marker:b,altitude:d?.altitude,disableAutoPan:d?.disableAutoPan,range:d?.range,removable:d?.removable,zIndex:d?.zIndex},r):null})),v=n.forwardRef((function(e,t){let{image:o,position:a,children:r,clickable:s,draggable:i,infoWindowOptions:l,onClick:c,onDragEnd:u,onDragStart:d,onMouseOut:p,onMouseOver:f,onCreate:k,opacity:g,title:y,zIndex:h}=e;const v=m("MapMarker"),C=(0,n.useMemo)((()=>o&&new kakao.maps.MarkerImage(o.src,new kakao.maps.Size(o.size.width,o.size.height),{alt:o.options?.alt,coords:o.options?.coords,offset:o.options?.offset&&new kakao.maps.Point(o.options?.offset.x,o.options?.offset.y),shape:o.options?.shape,spriteOrigin:o.options?.spriteOrigin&&new kakao.maps.Point(o.options?.spriteOrigin.x,o.options?.spriteOrigin.y),spriteSize:o.options?.spriteSize&&new kakao.maps.Size(o.options?.spriteSize.width,o.options?.spriteSize.height)})),[o]),L=(0,n.useMemo)((()=>"lat"in a?new kakao.maps.LatLng(a.lat,a.lng):new kakao.maps.Coords(a.x,a.y).toLatLng()),[a.lat,a.lng,a.x,a.y]);return n.createElement(w,{map:v,position:L,image:C,clickable:s,draggable:i,infoWindowOptions:l,onClick:c,onDragEnd:u,onDragStart:d,onMouseOut:p,onMouseOver:f,onCreate:k,opacity:g,title:y,zIndex:h,ref:t},r)})),C=n.forwardRef((function(e,t){let{position:o,children:a,disableAutoPan:r,removable:s,zIndex:i,onCreate:l}=e;const c=m("MapInfoWindow"),u=(0,n.useMemo)((()=>new kakao.maps.LatLng(o.lat,o.lng)),[o.lat,o.lng]);return n.createElement(k,{disableAutoPan:r,removable:s,zIndex:i,map:c,position:u,onCreate:l,ref:t},a)})),L=n.forwardRef((function(e,t){let{position:o,children:a,clickable:r,xAnchor:s,yAnchor:i,zIndex:l,onCreate:c}=e;const u=(0,n.useContext)(g),d=m("CustomOverlayMap"),p=(0,n.useRef)(document.createElement("div")),k=(0,n.useMemo)((()=>new kakao.maps.LatLng(o.lat,o.lng)),[o.lat,o.lng]),y=(0,n.useMemo)((()=>{const e=new kakao.maps.CustomOverlay({clickable:r,xAnchor:s,yAnchor:i,zIndex:l,position:k,content:p.current});return p.current.style.display="none",e}),[r,s,i]);return(0,n.useImperativeHandle)(t,(()=>y),[y]),(0,n.useLayoutEffect)((()=>{if(d)return u?u.addMarker(y,!0):y.setMap(d),()=>{u?u.removeMarker(y,!0):y.setMap(null)}}),[d,u,y]),(0,n.useLayoutEffect)((()=>{c&&c(y)}),[y,c]),(0,n.useLayoutEffect)((()=>{y.setPosition(k)}),[y,k]),(0,n.useLayoutEffect)((()=>{l&&y.setZIndex(l)}),[y,l]),p.current.parentElement&&f.createPortal(a,p.current.parentElement)})),E=n.forwardRef((function(e,t){let{position:o=kakao.maps.ControlPosition.TOPRIGHT}=e;const a=m("MapTypeControl"),r=(0,n.useMemo)((()=>new kakao.maps.MapTypeControl),[]);return(0,n.useImperativeHandle)(t,(()=>r),[r]),(0,n.useLayoutEffect)((()=>(a.addControl(r,o),()=>{a.removeControl(r)})),[a,r,o]),null})),M=n.forwardRef((function(e,t){let{position:o=kakao.maps.ControlPosition.RIGHT}=e;const a=m("ZoomControl"),r=(0,n.useMemo)((()=>new kakao.maps.ZoomControl),[]);return(0,n.useImperativeHandle)(t,(()=>r),[r]),(0,n.useEffect)((()=>(a.addControl(r,o),()=>{a.removeControl(r)})),[a,o]),null})),b=e=>{let{type:t}=e;const o=m("MapTypeId");return(0,n.useEffect)((()=>(o.addOverlayMapTypeId(t),()=>{o.removeOverlayMapTypeId(t)})),[o,t]),null},I=n.forwardRef((function(e,t){let{center:o,radius:a,fillColor:r,fillOpacity:i,strokeColor:l,strokeOpacity:c,strokeStyle:u,strokeWeight:d,zIndex:p,onMouseover:f,onMouseout:k,onMousemove:g,onMousedown:y,onClick:h,onCreate:w}=e;const v=m("Circle"),C=(0,n.useMemo)((()=>new kakao.maps.LatLng(o.lat,o.lng)),[o.lat,o.lng]),L=(0,n.useMemo)((()=>new kakao.maps.Circle({center:C,radius:a,fillColor:r,fillOpacity:i,strokeColor:l,strokeOpacity:c,strokeStyle:u,strokeWeight:d,zIndex:p})),[]);return(0,n.useImperativeHandle)(t,(()=>L),[L]),(0,n.useLayoutEffect)((()=>(L.setMap(v),()=>{L.setMap(null)})),[v,L]),(0,n.useLayoutEffect)((()=>{w&&w(L)}),[L,w]),(0,n.useLayoutEffect)((()=>{L&&L.setPosition(C)}),[L,C]),(0,n.useLayoutEffect)((()=>{L.setRadius(a)}),[L,a]),(0,n.useLayoutEffect)((()=>{p&&L.setZIndex(p)}),[L,p]),(0,n.useLayoutEffect)((()=>{L.setOptions({fillColor:r,fillOpacity:i,strokeColor:l,strokeOpacity:c,strokeStyle:u,strokeWeight:d})}),[L,r,i,l,c,u,d]),s(L,"mouseover",f),s(L,"mouseout",k),s(L,"mousemove",g),s(L,"mousedown",y),s(L,"click",h),null})),x=n.forwardRef((function(e,t){let{path:o,endArrow:a,onClick:r,onMousedown:i,onMousemove:l,onMouseout:c,onMouseover:u,onCreate:d,strokeColor:p,strokeOpacity:f,strokeStyle:k,strokeWeight:g,zIndex:y}=e;const h=m("Polyline"),w=(0,n.useMemo)((()=>o.every((e=>e instanceof Array))?o.map((e=>e.map((e=>new kakao.maps.LatLng(e.lat,e.lng))))):o.map((e=>new kakao.maps.LatLng(e.lat,e.lng)))),[o]),v=(0,n.useMemo)((()=>new kakao.maps.Polyline({path:w,endArrow:a,strokeColor:p,strokeOpacity:f,strokeStyle:k,strokeWeight:g,zIndex:y})),[]);return(0,n.useImperativeHandle)(t,(()=>v),[v]),(0,n.useLayoutEffect)((()=>(v.setMap(h),()=>v.setMap(null))),[h,v]),(0,n.useLayoutEffect)((()=>{d&&d(v)}),[v,d]),(0,n.useLayoutEffect)((()=>{v.setOptions({endArrow:a,strokeColor:p,strokeOpacity:f,strokeStyle:k,strokeWeight:g})}),[v,a,p,f,k,g]),(0,n.useLayoutEffect)((()=>{v.setPath(w)}),[v,w]),(0,n.useLayoutEffect)((()=>{y&&v.setZIndex(y)}),[v,y]),s(v,"mouseover",u),s(v,"mouseout",c),s(v,"mousemove",l),s(v,"mousedown",i),s(v,"click",r),null})),O=n.forwardRef((function(e,t){let{path:o,onClick:a,onMousedown:r,onMousemove:i,onMouseout:l,onMouseover:c,onCreate:u,strokeColor:d,strokeOpacity:p,strokeStyle:f,strokeWeight:k,fillColor:g,fillOpacity:y,zIndex:h}=e;const w=m("Polygon"),v=(0,n.useMemo)((()=>o.every((e=>e instanceof Array))?o.map((e=>e.map((e=>new kakao.maps.LatLng(e.lat,e.lng))))):o.map((e=>new kakao.maps.LatLng(e.lat,e.lng)))),[o]),C=(0,n.useMemo)((()=>new kakao.maps.Polygon({path:v,fillColor:g,fillOpacity:y,strokeColor:d,strokeOpacity:p,strokeStyle:f,strokeWeight:k,zIndex:h})),[]);return(0,n.useImperativeHandle)(t,(()=>C),[C]),(0,n.useLayoutEffect)((()=>(C.setMap(w),()=>C.setMap(null))),[w,C]),(0,n.useLayoutEffect)((()=>{u&&u(C)}),[C,u]),(0,n.useLayoutEffect)((()=>{C.setOptions({fillColor:g,fillOpacity:y,strokeColor:d,strokeOpacity:p,strokeStyle:f,strokeWeight:k})}),[C,g,y,d,p,f,k]),(0,n.useLayoutEffect)((()=>{C.setPath(v)}),[C,v]),(0,n.useLayoutEffect)((()=>{h&&C.setZIndex(h)}),[C,h]),s(C,"mouseover",c),s(C,"mouseout",l),s(C,"mousemove",i),s(C,"mousedown",r),s(C,"click",a),null})),S=n.forwardRef((function(e,t){let{bounds:o,onClick:a,onMousedown:r,onMousemove:i,onMouseout:l,onMouseover:c,onCreate:u,strokeColor:d,strokeOpacity:p,strokeStyle:f,strokeWeight:k,fillColor:g,fillOpacity:y,zIndex:h}=e;const w=m("Rectangle"),v=(0,n.useMemo)((()=>new kakao.maps.LatLngBounds(new kakao.maps.LatLng(o.sw.lat,o.sw.lng),new kakao.maps.LatLng(o.ne.lat,o.ne.lng))),[o]),C=(0,n.useMemo)((()=>new kakao.maps.Rectangle({bounds:v,fillColor:g,fillOpacity:y,strokeColor:d,strokeOpacity:p,strokeStyle:f,strokeWeight:k,zIndex:h})),[]);return(0,n.useImperativeHandle)(t,(()=>C),[C]),(0,n.useLayoutEffect)((()=>(C.setMap(w),()=>C.setMap(null))),[w,C]),(0,n.useLayoutEffect)((()=>{u&&u(C)}),[C,u]),(0,n.useLayoutEffect)((()=>{C.setOptions({fillColor:g,fillOpacity:y,strokeColor:d,strokeOpacity:p,strokeStyle:f,strokeWeight:k})}),[C,g,y,d,p,f,k]),(0,n.useLayoutEffect)((()=>{C.setBounds(v)}),[C,v]),(0,n.useLayoutEffect)((()=>{h&&C.setZIndex(h)}),[C,h]),s(C,"mouseover",c),s(C,"mouseout",l),s(C,"mousemove",i),s(C,"mousedown",r),s(C,"click",a),null})),R=n.forwardRef((function(e,t){let{center:o,rx:a,ry:r,fillColor:i,fillOpacity:l,strokeColor:c,strokeOpacity:u,strokeStyle:d,strokeWeight:p,zIndex:f,onMouseover:k,onMouseout:g,onMousemove:y,onMousedown:h,onClick:w,onCreate:v}=e;const C=m("Ellipse"),L=(0,n.useMemo)((()=>new kakao.maps.LatLng(o.lat,o.lng)),[o.lat,o.lng]),E=(0,n.useMemo)((()=>new kakao.maps.Ellipse({center:L,rx:a,ry:r,fillColor:i,fillOpacity:l,strokeColor:c,strokeOpacity:u,strokeStyle:d,strokeWeight:p,zIndex:f})),[]);return(0,n.useImperativeHandle)(t,(()=>E),[E]),(0,n.useLayoutEffect)((()=>(E.setMap(C),()=>{E.setMap(null)})),[C,E]),(0,n.useLayoutEffect)((()=>{v&&v(E)}),[E,v]),(0,n.useLayoutEffect)((()=>{E&&E.setPosition(L)}),[E,L]),(0,n.useLayoutEffect)((()=>{E.setRadius(a,r)}),[E,a,r]),(0,n.useLayoutEffect)((()=>{f&&E.setZIndex(f)}),[E,f]),(0,n.useLayoutEffect)((()=>{E.setOptions({fillColor:i,fillOpacity:l,strokeColor:c,strokeOpacity:u,strokeStyle:d,strokeWeight:p})}),[E,i,l,c,u,d,p]),s(E,"mouseover",k),s(E,"mouseout",g),s(E,"mousemove",y),s(E,"mousedown",h),s(E,"click",w),null})),z=n.forwardRef(((e,t)=>{let{draw:o,onAdd:a,onRemove:r,onCreate:s}=e;const i=m(),l=(0,n.useMemo)((()=>{class e extends kakao.maps.AbstractOverlay{constructor(e,t,o){super(),this.draw=e,this.onAdd=t,this.onRemove=o}}return new e(o,a,r)}),[o,a,r]);return(0,n.useImperativeHandle)(t,(()=>l),[l]),(0,n.useLayoutEffect)((()=>(l.setMap(i),()=>{l.setMap(null)})),[i,l]),(0,n.useLayoutEffect)((()=>{s&&s(l)}),[l,s]),null})),P=n.createContext(void 0),A=n.forwardRef((function(e,t){let{id:o,as:l,children:c,position:d,pan:p,panoId:m,panoX:f,panoY:k,tilt:g,zoom:y,onCreate:h,onInit:w,onPanoidChange:v,onPositionChanged:C,onViewpointChange:L,onErrorGetNearestPanoId:E,...M}=e;const b=l||"div",[I,x]=(0,n.useState)(!1),[O,S]=(0,n.useState)(!0),[R,z]=(0,n.useState)(),A=(0,n.useRef)(null);return r((()=>{u.isLoaded().then(x)}),[]),r((()=>{if(!I)return;const e=A.current;if(!e)return;const t=new kakao.maps.Roadview(e,{pan:p,panoId:m,panoX:f,panoY:k,tilt:g,zoom:y});return z(t),()=>{e.innerHTML=""}}),[I,f,k,y]),(0,n.useImperativeHandle)(t,(()=>R),[R]),r((()=>{R&&h&&h(R)}),[R,h]),r((()=>{if(!R||m||R.getPosition().getLat()===d.lat&&R.getPosition().getLng()===d.lng)return;const e=new kakao.maps.LatLng(d.lat,d.lng);(new kakao.maps.RoadviewClient).getNearestPanoId(e,d.radius,(t=>{null===t&&E?E(R):R.setPanoId(t,e)}))}),[R,m,d.lat,d.lng,d.radius,E]),r((()=>{if(!R||!m||m===R.getPanoId()||R.getPosition().getLat()===d.lat&&R.getPosition().getLng()===d.lng)return;const e=new kakao.maps.LatLng(d.lat,d.lng);R.setPanoId(m,e)}),[R,m,d.lat,d.lng]),r((()=>{if(!R)return;const e=R.getViewpoint();e.pan===p&&e.tilt===g||(p&&(e.pan=p),g&&(e.tilt=g),R.setViewpoint(e))}),[R,p,g]),s(R,"init",(e=>{S(!1),w&&w(e)})),s(R,"panoid_changed",v),s(R,"viewpoint_changed",L),s(R,"position_changed",C),n.createElement(n.Fragment,null,n.createElement(b,(0,a.Z)({ref:A,id:o||`${i}_Roadview`},M)),R&&!O&&n.createElement(P.Provider,{value:R},c))})),T=e=>{const t=(0,n.useContext)(P);if(!t)throw new Error((e?e+" Component":"useRoadview")+" must exist inside Roadview Component!");return t},_=n.forwardRef((function(e,t){let{position:o,children:a,clickable:r,xAnchor:s,yAnchor:i,zIndex:l,altitude:c,range:u,onCreate:d}=e;const p=T("CustomOverlayRoadview"),m=(0,n.useRef)(document.createElement("div")),k=(0,n.useMemo)((()=>"lat"in o?new kakao.maps.LatLng(o.lat,o.lng):new kakao.maps.Viewpoint(o.pan,o.tilt,o.zoom,o.panoId)),[o.lat,o.lng,o.pan,o.tilt,o.zoom,o.panoId]),g=(0,n.useMemo)((()=>{const e=new kakao.maps.CustomOverlay({clickable:r,xAnchor:s,yAnchor:i,zIndex:l,position:k,content:m.current});return m.current.style.display="none",e}),[r,s,i]);return(0,n.useImperativeHandle)(t,(()=>g),[g]),(0,n.useLayoutEffect)((()=>{if(p)return g.setMap(p),()=>{g.setMap(null)}}),[g,p]),(0,n.useLayoutEffect)((()=>{d&&d(g)}),[g,d]),(0,n.useLayoutEffect)((()=>{g.setPosition(k)}),[g,k]),(0,n.useLayoutEffect)((()=>{l&&g.setZIndex(l)}),[g,l]),(0,n.useLayoutEffect)((()=>{c&&g.setAltitude(c)}),[g,c]),(0,n.useLayoutEffect)((()=>{u&&g.setRange(u)}),[g,u]),m.current.parentElement&&f.createPortal(a,m.current.parentElement)})),D=n.forwardRef((function(e,t){let{image:o,position:a,children:r,altitude:s,clickable:i,infoWindowOptions:l,onClick:c,onDragEnd:u,onDragStart:d,onMouseOut:p,onMouseOver:m,onCreate:f,opacity:k,range:g,title:y,zIndex:h}=e;const v=T("RoadviewMarker"),C=(0,n.useMemo)((()=>o&&new kakao.maps.MarkerImage(o.src,new kakao.maps.Size(o.size.width,o.size.height),{alt:o.options?.alt,coords:o.options?.coords,offset:o.options?.offset&&new kakao.maps.Point(o.options?.offset.x,o.options?.offset.y),shape:o.options?.shape,spriteOrigin:o.options?.spriteOrigin&&new kakao.maps.Point(o.options?.spriteOrigin.x,o.options?.spriteOrigin.y),spriteSize:o.options?.spriteSize&&new kakao.maps.Size(o.options?.spriteSize.width,o.options?.spriteSize.height)})),[o]),L=(0,n.useMemo)((()=>"lat"in a?new kakao.maps.LatLng(a.lat,a.lng):"x"in a?new kakao.maps.Coords(a.x,a.y).toLatLng():new kakao.maps.Viewpoint(a.pan,a.tilt,a.zoom,a.panoId)),[a.lat,a.lng,a.x,a.y,a.pan,a.tilt,a.zoom,a?.panoId]);return n.createElement(w,{map:v,position:L,image:C,altitude:s,clickable:i,infoWindowOptions:l,onClick:c,onDragEnd:u,onDragStart:d,onMouseOut:p,onMouseOver:m,onCreate:f,opacity:k,range:g,title:y,zIndex:h,ref:t},r)})),Z=n.forwardRef((function(e,t){let{position:o,children:a,altitude:r,disableAutoPan:s,range:i,removable:l,zIndex:c,onCreate:u}=e;const d=T("RoadviewInfoWindow"),p=(0,n.useMemo)((()=>"lat"in o?new kakao.maps.LatLng(o.lat,o.lng):new kakao.maps.Viewpoint(o.pan,o.tilt,o.zoom,o.panoId)),[o.lat,o.lng,o.pan,o.tilt,o.zoom,o.panoId]);return n.createElement(k,{altitude:r,disableAutoPan:s,range:i,removable:l,zIndex:c,map:d,position:p,onCreate:u,ref:t},a)})),N=n.createContext(void 0);function W(e,t,o){(0,n.useLayoutEffect)((()=>{if(!e||!o)return;e.addListener(t,(function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return void 0===AbortSignal?o(e):o(e,...a)}))}),[o,e,t])}const H=n.forwardRef((function(e,t){let{arrowOptions:o,circleOptions:a,ellipseOptions:r,markerOptions:s,polygonOptions:i,polylineOptions:l,rectangleOptions:c,drawingMode:u,guideTooltip:d,onSelect:p,onDrawstart:f,onDraw:k,onDrawend:g,onDrawnext:y,onCancle:h,onRemove:w,onStateChanged:v,onCreate:C,children:L}=e;const E=m("Toolbox"),M=(0,n.useMemo)((()=>{if(window.kakao.maps.drawing)return new kakao.maps.drawing.DrawingManager({map:E,drawingMode:u,guideTooltip:d,arrowOptions:o,circleOptions:a,ellipseOptions:r,markerOptions:s,polygonOptions:i,polylineOptions:l,rectangleOptions:c});console.warn("drawing \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ubcc4\ub3c4 \ub85c\ub4dc \ud574\uc57c \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4. `https://apis.map.kakao.com/web/guide/#loadlibrary`")}),[]);return(0,n.useImperativeHandle)(t,(()=>M),[M]),(0,n.useLayoutEffect)((()=>{M&&C&&C(M)}),[M,C]),W(M,"select",p),W(M,"drawstart",f),W(M,"draw",k),W(M,"drawend",g),W(M,"drawnext",y),W(M,"cancel",h),W(M,"remove",w),W(M,"state_changed",v),M?n.createElement(N.Provider,{value:M},L):null})),F=n.forwardRef((function(e,t){let{position:o}=e;o=o||kakao.maps.ControlPosition.TOP;const a=m("Toolbox"),r=(0,n.useContext)(N);if(!r)throw new Error("Toolbox must exist inside DrawingManager Component!`");const s=(0,n.useMemo)((()=>new kakao.maps.drawing.Toolbox({drawingManager:r})),[r]);return(0,n.useImperativeHandle)(t,(()=>s),[s]),(0,n.useLayoutEffect)((()=>{const e=s.getElement();return a.addControl(e,o),()=>{a.removeControl(e)}}),[a,s,o]),null})),K=n.forwardRef((function(e,t){let{as:o,id:s,center:i,marker:l,level:c,mapTypeId:d,onCreate:p,...m}=e;const f=o||"div",[k,g]=(0,n.useState)(!1),[y,h]=(0,n.useState)(),w=(0,n.useRef)(null);return r((()=>{u.isLoaded().then(g)}),[]),r((()=>{if(!k)return;const e=w.current;if(!e)return;const t=Array.isArray(l)?l.map((e=>({...e,position:new kakao.maps.LatLng(e.position.lat,e.position.lng)}))):"object"==typeof l&&l.position?{...l,position:new kakao.maps.LatLng(l.position.lat,l.position.lng)}:l,o=new kakao.maps.StaticMap(e,{center:new kakao.maps.LatLng(i.lat,i.lng),level:c,mapTypeId:d,marker:t});return h(o),()=>{e.innerHTML=""}}),[k,JSON.stringify(l)]),(0,n.useImperativeHandle)(t,(()=>y),[y]),r((()=>{y&&p&&p(y)}),[y,p]),r((()=>{y&&y.setCenter(new kakao.maps.LatLng(i.lat,i.lng))}),[y,i.lat,i.lng]),r((()=>{y&&c&&y.setLevel(c)}),[y,c]),r((()=>{y&&d&&y.setMapTypeId(d)}),[y,d]),n.createElement(f,(0,a.Z)({id:s},m,{ref:w}))})),U=e=>{const[t,o]=(0,n.useState)({loading:!0,error:void 0}),a=(0,n.useMemo)((()=>new u(e)),[JSON.stringify(e)]);return(0,n.useEffect)((()=>{a.load().then((()=>o({loading:!1,error:void 0}))).catch((e=>o({loading:!1,error:e})))}),[a]),t},$=U}}]);