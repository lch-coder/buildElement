var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,s=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&i(e,n,t[n]);if(o)for(var n of o(t))a.call(t,n)&&i(e,n,t[n]);return e},l=(e,o)=>t(e,n(o));import{cH as p,K as u,ar as f,N as c,aR as d,am as v,ak as m,b3 as g,a8 as h,cI as b,y,G as w,k as x,Y as O,_ as E,d as A,c as k,T,M as C,a1 as R,aU as B,o as S,h as M,n as j,bk as P,ac as L,cJ as D,aT as H,F,cK as I,cd as _,j as W,cL as $,ch as N,cM as z,B as q,w as K,U as V,S as U,bf as G,c8 as Y,al as X,bT as J,Q,V as Z,a3 as ee,aD as te,b7 as ne,aM as oe,aH as re,bU as ae,a2 as ie,aL as se,aG as le,ah as pe,cj as ue,cN as fe,z as ce}from"./index-04568d02.js";const de=(e,t,{checkForDefaultPrevented:n=!0}={})=>o=>{const r=null==e?void 0:e(o);if(!1===n||!r)return null==t?void 0:t(o)},ve=e=>t=>"mouse"===t.pointerType?e(t):void 0,me=Symbol("popper"),ge=Symbol("popperContent"),he=p({type:u(Boolean),default:null}),be=p({type:u(Function)}),ye=e=>{const t=`update:${e}`,n=`onUpdate:${e}`;return{useModelToggle:({indicator:o,toggleReason:r,shouldHideWhenRouteChanges:a,shouldProceed:i,onShow:l,onHide:p})=>{const u=f(),{emit:b}=u,y=u.props,w=c((()=>d(y[n]))),x=c((()=>null===y[e])),O=e=>{!0!==o.value&&(o.value=!0,r&&(r.value=e),d(l)&&l(e))},E=e=>{!1!==o.value&&(o.value=!1,r&&(r.value=e),d(p)&&p(e))},A=e=>{if(!0===y.disabled||d(i)&&!i())return;const n=w.value&&g;n&&b(t,!0),!x.value&&n||O(e)},k=e=>{if(!0===y.disabled||!g)return;const n=w.value&&g;n&&b(t,!1),!x.value&&n||E(e)},T=e=>{h(e)&&(y.disabled&&e?w.value&&b(t,!1):o.value!==e&&(e?O():E()))};return v((()=>y[e]),T),a&&void 0!==u.appContext.config.globalProperties.$route&&v((()=>s({},u.proxy.$route)),(()=>{a.value&&o.value&&k()})),m((()=>{T(y[e])})),{hide:k,show:A,toggle:()=>{o.value?k():A()},hasUpdateHandler:w}},useModelToggleProps:{[e]:he,[n]:be},useModelToggleEmits:[t]}};let we;ye("modelValue");const xe=`el-popper-container-${Math.floor(1e4*Math.random())}`,Oe=`#${xe}`,Ee=()=>{y((()=>{g&&(we&&document.body.querySelector(Oe)||(we=(()=>{const e=document.createElement("div");return e.id=xe,document.body.appendChild(e),e})()))}))},Ae=w({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200}}),ke=({showAfter:e,hideAfter:t,open:n,close:o})=>{const{registerTimeout:r}=function(){let e;const t=()=>window.clearTimeout(e);return b((()=>t())),{registerTimeout:(n,o)=>{t(),e=window.setTimeout(n,o)},cancelTimeout:t}}();return{onOpen:t=>{r((()=>{n(t)}),x(e))},onClose:e=>{r((()=>{o(e)}),x(t))}}},Te=Symbol("elForwardRef"),Ce={LIGHT:"light",DARK:"dark"},Re=w({role:{type:String,default:"tooltip"}});var Be=E(A(l(s({},{name:"ElPopperRoot",inheritAttrs:!1}),{props:Re,setup(e,{expose:t}){const n=e,o={triggerRef:k(),popperInstanceRef:k(),contentRef:k(),referenceRef:k(),role:c((()=>n.role))};return t(o),O(me,o),(e,t)=>T(e.$slots,"default")}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);const Se=w({arrowOffset:{type:Number,default:5}});var Me=E(A(l(s({},{name:"ElPopperArrow",inheritAttrs:!1}),{props:Se,setup(e,{expose:t}){const n=e,o=C("popper"),{arrowOffset:r,arrowRef:a}=R(ge,void 0);return v((()=>n.arrowOffset),(e=>{r.value=e})),B((()=>{a.value=void 0})),t({arrowRef:a}),(e,t)=>(S(),M("span",{ref_key:"arrowRef",ref:a,class:j(x(o).e("arrow")),"data-popper-arrow":""},null,2))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);const je=A({name:"ElOnlyChild",setup(e,{slots:t,attrs:n}){var o;const r=R(Te),a=(i=null!=(o=null==r?void 0:r.setForwardRef)?o:P,{mounted(e){i(e)},updated(e){i(e)},unmounted(){i(null)}});var i;return()=>{var e;const o=null==(e=t.default)?void 0:e.call(t,n);if(!o)return null;if(o.length>1)return null;const r=Pe(o);return r?L(D(r,n),[[a]]):null}}});function Pe(e){if(!e)return null;const t=e;for(const n of t){if(H(n))switch(n.type){case _:continue;case I:case"svg":return Le(n);case F:return Pe(n.children);default:return n}return Le(n)}return null}function Le(e){const t=C("only-child");return W("span",{class:t.e("content")},[e])}const De=w({virtualRef:{type:u(Object)},virtualTriggering:Boolean,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function,onBlur:Function,onContextmenu:Function,id:String,open:Boolean});var He=E(A(l(s({},{name:"ElPopperTrigger",inheritAttrs:!1}),{props:De,setup(e,{expose:t}){const n=e,{role:o,triggerRef:r}=R(me,void 0);var a;a=r,O(Te,{setForwardRef:e=>{a.value=e}});const i=c((()=>l.value?n.id:void 0)),s=c((()=>{if(o&&"tooltip"===o.value)return n.open&&n.id?n.id:void 0})),l=c((()=>{if(o&&"tooltip"!==o.value)return o.value})),p=c((()=>l.value?`${n.open}`:void 0));let u;return m((()=>{v((()=>n.virtualRef),(e=>{e&&(r.value=$(e))}),{immediate:!0}),v((()=>r.value),((e,t)=>{null==u||u(),u=void 0,N(e)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach((o=>{var r;const a=n[o];a&&(e.addEventListener(o.slice(2).toLowerCase(),a),null==(r=null==t?void 0:t.removeEventListener)||r.call(t,o.slice(2).toLowerCase(),a))})),u=v([i,s,l,p],(t=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(((n,o)=>{z(t[o])?e.removeAttribute(n):e.setAttribute(n,t[o])}))}),{immediate:!0})),N(t)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((e=>t.removeAttribute(e)))}),{immediate:!0})})),B((()=>{null==u||u(),u=void 0})),t({triggerRef:r}),(e,t)=>e.virtualTriggering?U("v-if",!0):(S(),q(x(je),V({key:0},e.$attrs,{"aria-controls":x(i),"aria-describedby":x(s),"aria-expanded":x(p),"aria-haspopup":x(l)}),{default:K((()=>[T(e.$slots,"default")])),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]),Fe="top",Ie="bottom",_e="right",We="left",$e="auto",Ne=[Fe,Ie,_e,We],ze="start",qe="end",Ke="viewport",Ve="popper",Ue=Ne.reduce((function(e,t){return e.concat([t+"-"+ze,t+"-"+qe])}),[]),Ge=[].concat(Ne,[$e]).reduce((function(e,t){return e.concat([t,t+"-"+ze,t+"-"+qe])}),[]),Ye=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Xe(e){return e?(e.nodeName||"").toLowerCase():null}function Je(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Qe(e){return e instanceof Je(e).Element||e instanceof Element}function Ze(e){return e instanceof Je(e).HTMLElement||e instanceof HTMLElement}function et(e){return"undefined"!=typeof ShadowRoot&&(e instanceof Je(e).ShadowRoot||e instanceof ShadowRoot)}var tt={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];!Ze(r)||!Xe(r)||(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});!Ze(o)||!Xe(o)||(Object.assign(o.style,a),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};function nt(e){return e.split("-")[0]}var ot=Math.max,rt=Math.min,at=Math.round;function it(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(Ze(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(o=at(n.width)/i||1),a>0&&(r=at(n.height)/a||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function st(e){var t=it(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function lt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&et(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function pt(e){return Je(e).getComputedStyle(e)}function ut(e){return["table","td","th"].indexOf(Xe(e))>=0}function ft(e){return((Qe(e)?e.ownerDocument:e.document)||window.document).documentElement}function ct(e){return"html"===Xe(e)?e:e.assignedSlot||e.parentNode||(et(e)?e.host:null)||ft(e)}function dt(e){return Ze(e)&&"fixed"!==pt(e).position?e.offsetParent:null}function vt(e){for(var t=Je(e),n=dt(e);n&&ut(n)&&"static"===pt(n).position;)n=dt(n);return n&&("html"===Xe(n)||"body"===Xe(n)&&"static"===pt(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&Ze(e)&&"fixed"===pt(e).position)return null;var n=ct(e);for(et(n)&&(n=n.host);Ze(n)&&["html","body"].indexOf(Xe(n))<0;){var o=pt(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}function mt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function gt(e,t,n){return ot(e,rt(t,n))}function ht(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function bt(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var yt={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,s=nt(n.placement),l=mt(s),p=[We,_e].indexOf(s)>=0?"height":"width";if(a&&i){var u=function(e,t){return ht("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:bt(e,Ne))}(r.padding,n),f=st(a),c="y"===l?Fe:We,d="y"===l?Ie:_e,v=n.rects.reference[p]+n.rects.reference[l]-i[l]-n.rects.popper[p],m=i[l]-n.rects.reference[l],g=vt(a),h=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=v/2-m/2,y=u[c],w=h-f[p]-u[d],x=h/2-f[p]/2+b,O=gt(y,x,w),E=l;n.modifiersData[o]=((t={})[E]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"==typeof o&&!(o=t.elements.popper.querySelector(o))||!lt(t.elements.popper,o)||(t.elements.arrow=o))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function wt(e){return e.split("-")[1]}var xt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ot(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,s=e.position,l=e.gpuAcceleration,p=e.adaptive,u=e.roundOffsets,f=e.isFixed,c=i.x,d=void 0===c?0:c,v=i.y,m=void 0===v?0:v,g="function"==typeof u?u({x:d,y:m}):{x:d,y:m};d=g.x,m=g.y;var h=i.hasOwnProperty("x"),b=i.hasOwnProperty("y"),y=We,w=Fe,x=window;if(p){var O=vt(n),E="clientHeight",A="clientWidth";if(O===Je(n)&&("static"!==pt(O=ft(n)).position&&"absolute"===s&&(E="scrollHeight",A="scrollWidth")),r===Fe||(r===We||r===_e)&&a===qe)w=Ie,m-=(f&&O===x&&x.visualViewport?x.visualViewport.height:O[E])-o.height,m*=l?1:-1;if(r===We||(r===Fe||r===Ie)&&a===qe)y=_e,d-=(f&&O===x&&x.visualViewport?x.visualViewport.width:O[A])-o.width,d*=l?1:-1}var k,T=Object.assign({position:s},p&&xt),C=!0===u?function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:at(t*o)/o||0,y:at(n*o)/o||0}}({x:d,y:m}):{x:d,y:m};return d=C.x,m=C.y,l?Object.assign({},T,((k={})[w]=b?"0":"",k[y]=h?"0":"",k.transform=(x.devicePixelRatio||1)<=1?"translate("+d+"px, "+m+"px)":"translate3d("+d+"px, "+m+"px, 0)",k)):Object.assign({},T,((t={})[w]=b?m+"px":"",t[y]=h?d+"px":"",t.transform="",t))}var Et={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,a=n.adaptive,i=void 0===a||a,s=n.roundOffsets,l=void 0===s||s,p={placement:nt(t.placement),variation:wt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Ot(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ot(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},At={passive:!0};var kt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=void 0===r||r,i=o.resize,s=void 0===i||i,l=Je(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",n.update,At)})),s&&l.addEventListener("resize",n.update,At),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",n.update,At)})),s&&l.removeEventListener("resize",n.update,At)}},data:{}},Tt={left:"right",right:"left",bottom:"top",top:"bottom"};function Ct(e){return e.replace(/left|right|bottom|top/g,(function(e){return Tt[e]}))}var Rt={start:"end",end:"start"};function Bt(e){return e.replace(/start|end/g,(function(e){return Rt[e]}))}function St(e){var t=Je(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Mt(e){return it(ft(e)).left+St(e).scrollLeft}function jt(e){var t=pt(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function Pt(e){return["html","body","#document"].indexOf(Xe(e))>=0?e.ownerDocument.body:Ze(e)&&jt(e)?e:Pt(ct(e))}function Lt(e,t){var n;void 0===t&&(t=[]);var o=Pt(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),a=Je(o),i=r?[a].concat(a.visualViewport||[],jt(o)?o:[]):o,s=t.concat(i);return r?s:s.concat(Lt(ct(i)))}function Dt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ht(e,t){return t===Ke?Dt(function(e){var t=Je(e),n=ft(e),o=t.visualViewport,r=n.clientWidth,a=n.clientHeight,i=0,s=0;return o&&(r=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=o.offsetLeft,s=o.offsetTop)),{width:r,height:a,x:i+Mt(e),y:s}}(e)):Qe(t)?function(e){var t=it(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):Dt(function(e){var t,n=ft(e),o=St(e),r=null==(t=e.ownerDocument)?void 0:t.body,a=ot(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=ot(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-o.scrollLeft+Mt(e),l=-o.scrollTop;return"rtl"===pt(r||n).direction&&(s+=ot(n.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:s,y:l}}(ft(e)))}function Ft(e,t,n){var o="clippingParents"===t?function(e){var t=Lt(ct(e)),n=["absolute","fixed"].indexOf(pt(e).position)>=0&&Ze(e)?vt(e):e;return Qe(n)?t.filter((function(e){return Qe(e)&&lt(e,n)&&"body"!==Xe(e)})):[]}(e):[].concat(t),r=[].concat(o,[n]),a=r[0],i=r.reduce((function(t,n){var o=Ht(e,n);return t.top=ot(o.top,t.top),t.right=rt(o.right,t.right),t.bottom=rt(o.bottom,t.bottom),t.left=ot(o.left,t.left),t}),Ht(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function It(e){var t,n=e.reference,o=e.element,r=e.placement,a=r?nt(r):null,i=r?wt(r):null,s=n.x+n.width/2-o.width/2,l=n.y+n.height/2-o.height/2;switch(a){case Fe:t={x:s,y:n.y-o.height};break;case Ie:t={x:s,y:n.y+n.height};break;case _e:t={x:n.x+n.width,y:l};break;case We:t={x:n.x-o.width,y:l};break;default:t={x:n.x,y:n.y}}var p=a?mt(a):null;if(null!=p){var u="y"===p?"height":"width";switch(i){case ze:t[p]=t[p]-(n[u]/2-o[u]/2);break;case qe:t[p]=t[p]+(n[u]/2-o[u]/2)}}return t}function _t(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=void 0===o?e.placement:o,a=n.boundary,i=void 0===a?"clippingParents":a,s=n.rootBoundary,l=void 0===s?Ke:s,p=n.elementContext,u=void 0===p?Ve:p,f=n.altBoundary,c=void 0!==f&&f,d=n.padding,v=void 0===d?0:d,m=ht("number"!=typeof v?v:bt(v,Ne)),g=u===Ve?"reference":Ve,h=e.rects.popper,b=e.elements[c?g:u],y=Ft(Qe(b)?b:b.contextElement||ft(e.elements.popper),i,l),w=it(e.elements.reference),x=It({reference:w,element:h,strategy:"absolute",placement:r}),O=Dt(Object.assign({},h,x)),E=u===Ve?O:w,A={top:y.top-E.top+m.top,bottom:E.bottom-y.bottom+m.bottom,left:y.left-E.left+m.left,right:E.right-y.right+m.right},k=e.modifiersData.offset;if(u===Ve&&k){var T=k[r];Object.keys(A).forEach((function(e){var t=[_e,Ie].indexOf(e)>=0?1:-1,n=[Fe,Ie].indexOf(e)>=0?"y":"x";A[e]+=T[n]*t}))}return A}var Wt={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,a=void 0===r||r,i=n.altAxis,s=void 0===i||i,l=n.fallbackPlacements,p=n.padding,u=n.boundary,f=n.rootBoundary,c=n.altBoundary,d=n.flipVariations,v=void 0===d||d,m=n.allowedAutoPlacements,g=t.options.placement,h=nt(g),b=l||(h===g||!v?[Ct(g)]:function(e){if(nt(e)===$e)return[];var t=Ct(e);return[Bt(e),t,Bt(t)]}(g)),y=[g].concat(b).reduce((function(e,n){return e.concat(nt(n)===$e?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,a=n.rootBoundary,i=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,p=void 0===l?Ge:l,u=wt(o),f=u?s?Ue:Ue.filter((function(e){return wt(e)===u})):Ne,c=f.filter((function(e){return p.indexOf(e)>=0}));0===c.length&&(c=f);var d=c.reduce((function(t,n){return t[n]=_t(e,{placement:n,boundary:r,rootBoundary:a,padding:i})[nt(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:f,padding:p,flipVariations:v,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,E=!0,A=y[0],k=0;k<y.length;k++){var T=y[k],C=nt(T),R=wt(T)===ze,B=[Fe,Ie].indexOf(C)>=0,S=B?"width":"height",M=_t(t,{placement:T,boundary:u,rootBoundary:f,altBoundary:c,padding:p}),j=B?R?_e:We:R?Ie:Fe;w[S]>x[S]&&(j=Ct(j));var P=Ct(j),L=[];if(a&&L.push(M[C]<=0),s&&L.push(M[j]<=0,M[P]<=0),L.every((function(e){return e}))){A=T,E=!1;break}O.set(T,L)}if(E)for(var D=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},H=v?3:1;H>0;H--){if("break"===D(H))break}t.placement!==A&&(t.modifiersData[o]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function $t(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Nt(e){return[Fe,_e,Ie,We].some((function(t){return e[t]>=0}))}var zt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=_t(t,{elementContext:"reference"}),s=_t(t,{altBoundary:!0}),l=$t(i,o),p=$t(s,r,a),u=Nt(l),f=Nt(p);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:p,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}};var qt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,a=void 0===r?[0,0]:r,i=Ge.reduce((function(e,n){return e[n]=function(e,t,n){var o=nt(e),r=[We,Fe].indexOf(o)>=0?-1:1,a="function"==typeof n?n(Object.assign({},t,{placement:e})):n,i=a[0],s=a[1];return i=i||0,s=(s||0)*r,[We,_e].indexOf(o)>=0?{x:s,y:i}:{x:i,y:s}}(n,t.rects,a),e}),{}),s=i[t.placement],l=s.x,p=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=p),t.modifiersData[o]=i}};var Kt={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=It({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var Vt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,a=void 0===r||r,i=n.altAxis,s=void 0!==i&&i,l=n.boundary,p=n.rootBoundary,u=n.altBoundary,f=n.padding,c=n.tether,d=void 0===c||c,v=n.tetherOffset,m=void 0===v?0:v,g=_t(t,{boundary:l,rootBoundary:p,padding:f,altBoundary:u}),h=nt(t.placement),b=wt(t.placement),y=!b,w=mt(h),x=function(e){return"x"===e?"y":"x"}(w),O=t.modifiersData.popperOffsets,E=t.rects.reference,A=t.rects.popper,k="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,T="number"==typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),C=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(O){if(a){var B,S="y"===w?Fe:We,M="y"===w?Ie:_e,j="y"===w?"height":"width",P=O[w],L=P+g[S],D=P-g[M],H=d?-A[j]/2:0,F=b===ze?E[j]:A[j],I=b===ze?-A[j]:-E[j],_=t.elements.arrow,W=d&&_?st(_):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},N=$[S],z=$[M],q=gt(0,E[j],W[j]),K=y?E[j]/2-H-q-N-T.mainAxis:F-q-N-T.mainAxis,V=y?-E[j]/2+H+q+z+T.mainAxis:I+q+z+T.mainAxis,U=t.elements.arrow&&vt(t.elements.arrow),G=U?"y"===w?U.clientTop||0:U.clientLeft||0:0,Y=null!=(B=null==C?void 0:C[w])?B:0,X=P+V-Y,J=gt(d?rt(L,P+K-Y-G):L,P,d?ot(D,X):D);O[w]=J,R[w]=J-P}if(s){var Q,Z="x"===w?Fe:We,ee="x"===w?Ie:_e,te=O[x],ne="y"===x?"height":"width",oe=te+g[Z],re=te-g[ee],ae=-1!==[Fe,We].indexOf(h),ie=null!=(Q=null==C?void 0:C[x])?Q:0,se=ae?oe:te-E[ne]-A[ne]-ie+T.altAxis,le=ae?te+E[ne]+A[ne]-ie-T.altAxis:re,pe=d&&ae?function(e,t,n){var o=gt(e,t,n);return o>n?n:o}(se,te,le):gt(d?se:oe,te,d?le:re);O[x]=pe,R[x]=pe-te}t.modifiersData[o]=R}},requiresIfExists:["offset"]};function Ut(e,t,n){void 0===n&&(n=!1);var o=Ze(t),r=Ze(t)&&function(e){var t=e.getBoundingClientRect(),n=at(t.width)/e.offsetWidth||1,o=at(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),a=ft(t),i=it(e,r),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(o||!o&&!n)&&(("body"!==Xe(t)||jt(a))&&(s=function(e){return e!==Je(e)&&Ze(e)?function(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):St(e)}(t)),Ze(t)?((l=it(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=Mt(a))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function Gt(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}function Yt(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var Xt={placement:"bottom",modifiers:[],strategy:"absolute"};function Jt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Qt(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,a=void 0===r?Xt:r;return function(e,t,n){void 0===n&&(n=a);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},Xt,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},i=[],s=!1,l={state:r,setOptions:function(n){var s="function"==typeof n?n(r.options):n;p(),r.options=Object.assign({},a,r.options,s),r.scrollParents={reference:Qe(e)?Lt(e):e.contextElement?Lt(e.contextElement):[],popper:Lt(t)};var u=function(e){var t=Gt(e);return Ye.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,r.options.modifiers)));return r.orderedModifiers=u.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,a=e.effect;if("function"==typeof a){var s=a({state:r,name:t,instance:l,options:o}),p=function(){};i.push(s||p)}})),l.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,n=e.popper;if(Jt(t,n)){r.rects={reference:Ut(t,vt(n),"fixed"===r.options.strategy),popper:st(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<r.orderedModifiers.length;o++)if(!0!==r.reset){var a=r.orderedModifiers[o],i=a.fn,p=a.options,u=void 0===p?{}:p,f=a.name;"function"==typeof i&&(r=i({state:r,options:u,name:f,instance:l})||r)}else r.reset=!1,o=-1}}},update:Yt((function(){return new Promise((function(e){l.forceUpdate(),e(r)}))})),destroy:function(){p(),s=!0}};if(!Jt(e,t))return l;function p(){i.forEach((function(e){return e()})),i=[]}return l.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}Qt(),Qt({defaultModifiers:[kt,Kt,Et,tt]});var Zt=Qt({defaultModifiers:[kt,Kt,Et,tt,qt,Wt,Vt,yt,zt]});const en=w({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:u(Array),default:()=>[]},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Ge,default:"bottom"},popperOptions:{type:u(Object),default:()=>({})},strategy:{type:String,values:["fixed","absolute"],default:"absolute"}}),tn=w(l(s({},en),{id:String,style:{type:u([String,Array,Object])},className:{type:u([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:u([String,Array,Object])},popperStyle:{type:u([String,Array,Object])},referenceEl:{type:u(Object)},triggerTargetEl:{type:u(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number})),nn=(e,t)=>{const{placement:n,strategy:o,popperOptions:r}=e,a=l(s({placement:n,strategy:o},r),{modifiers:on(e)});return function(e,{arrowEl:t,arrowOffset:n}){e.modifiers.push({name:"arrow",options:{element:t,padding:null!=n?n:5}})}(a,t),function(e,t){t&&(e.modifiers=[...e.modifiers,...null!=t?t:[]])}(a,null==r?void 0:r.modifiers),a};function on(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:o}=e;return[{name:"offset",options:{offset:[0,null!=t?t:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:null!=o?o:[]}},{name:"computeStyles",options:{gpuAcceleration:n,adaptive:n}}]}var rn=E(A(l(s({},{name:"ElPopperContent"}),{props:tn,emits:["mouseenter","mouseleave","focus","blur","close"],setup(e,{expose:t,emit:n}){const o=e,{popperInstanceRef:r,contentRef:a,triggerRef:i,role:p}=R(me,void 0),u=R(G,void 0),{nextZIndex:f}=Y(),d=C("popper"),h=k(),b=k("first"),y=k(),w=k();O(ge,{arrowRef:y,arrowOffset:w}),u&&(u.addInputId||u.removeInputId)&&O(G,l(s({},u),{addInputId:P,removeInputId:P}));const E=k(o.zIndex||f()),A=k(!1);let L;const D=c((()=>(e=>{if(g)return $(e)})(o.referenceEl)||x(i))),H=c((()=>[{zIndex:x(E)},o.popperStyle])),F=c((()=>[d.b(),d.is("pure",o.pure),d.is(o.effect),o.popperClass])),I=c((()=>p&&"dialog"===p.value?"false":void 0)),_=(e=!0)=>{var t;null==(t=x(r))||t.update(),e&&(E.value=o.zIndex||f())},q=()=>{var e,t;const n={name:"eventListeners",enabled:o.visible};null==(t=null==(e=x(r))?void 0:e.setOptions)||t.call(e,(e=>l(s({},e),{modifiers:[...e.modifiers||[],n]}))),_(!1),o.visible&&o.focusOnShow?A.value=!0:!1===o.visible&&(A.value=!1)},V=()=>{n("focus")},U=()=>{b.value="first",n("blur")},Z=e=>{var t;o.visible&&!A.value&&(e.target&&(b.value=e.target),A.value=!0,e.relatedTarget&&(null==(t=e.relatedTarget)||t.focus()))},ee=()=>{o.trapping||(A.value=!1)},te=()=>{A.value=!1,n("close")};return m((()=>{let e;v(D,(t=>{var n;null==e||e();const i=x(r);if(null==(n=null==i?void 0:i.destroy)||n.call(i),t){const n=x(h);a.value=n,r.value=(({referenceEl:e,popperContentEl:t,arrowEl:n})=>{const r=nn(o,{arrowEl:n,arrowOffset:x(w)});return Zt(e,t,r)})({referenceEl:t,popperContentEl:n,arrowEl:x(y)}),e=v((()=>t.getBoundingClientRect()),(()=>_()),{immediate:!0})}else r.value=void 0}),{immediate:!0}),v((()=>o.triggerTargetEl),((e,t)=>{null==L||L(),L=void 0;const n=x(e||h.value),r=x(t||h.value);if(N(n)){const{ariaLabel:e,id:t}=X(o);L=v([p,e,I,t],(e=>{["role","aria-label","aria-modal","id"].forEach(((t,o)=>{z(e[o])?n.removeAttribute(t):n.setAttribute(t,e[o])}))}),{immediate:!0})}N(r)&&["role","aria-label","aria-modal","id"].forEach((e=>{r.removeAttribute(e)}))}),{immediate:!0}),v((()=>o.visible),q,{immediate:!0}),v((()=>nn(o,{arrowEl:x(y),arrowOffset:x(w)})),(e=>{var t;return null==(t=r.value)?void 0:t.setOptions(e)}))})),B((()=>{null==L||L(),L=void 0})),t({popperContentRef:h,popperInstanceRef:r,updatePopper:_,contentStyle:H}),(e,t)=>(S(),M("div",{ref_key:"popperContentRef",ref:h,style:Q(x(H)),class:j(x(F)),tabindex:"-1",onMouseenter:t[0]||(t[0]=t=>e.$emit("mouseenter",t)),onMouseleave:t[1]||(t[1]=t=>e.$emit("mouseleave",t))},[W(x(J),{trapped:A.value,"trap-on-focus-in":!0,"focus-trap-el":h.value,"focus-start-el":b.value,onFocusAfterTrapped:V,onFocusAfterReleased:U,onFocusin:Z,onFocusoutPrevented:ee,onReleaseRequested:te},{default:K((()=>[T(e.$slots,"default")])),_:3},8,["trapped","focus-trap-el","focus-start-el"])],38))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);const an=Z(Be),sn=C("tooltip"),ln=w(l(s(s({},Ae),tn),{appendTo:{type:u([String,Object]),default:Oe},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:u(Boolean),default:null},transition:{type:String,default:`${sn.namespace.value}-fade-in-linear`},teleported:{type:Boolean,default:!0},disabled:{type:Boolean}})),pn=w(l(s({},De),{disabled:Boolean,trigger:{type:u([String,Array]),default:"hover"},triggerKeys:{type:u(Array),default:()=>[ee.enter,ee.space]}})),un=w({openDelay:{type:Number},visibleArrow:{type:Boolean,default:void 0},hideAfter:{type:Number,default:200},showArrow:{type:Boolean,default:!0}}),fn=Symbol("elTooltip");var cn=E(A({name:"ElTooltipContent",components:{ElPopperContent:rn},inheritAttrs:!1,props:ln,setup(e){const t=k(null),n=k(!1),o=k(!1),r=k(!1),a=k(!1),{controlled:i,id:s,open:l,trigger:p,onClose:u,onOpen:f,onShow:d,onHide:m,onBeforeShow:g,onBeforeHide:h}=R(fn,void 0),b=c((()=>e.persistent));B((()=>{a.value=!0}));const y=c((()=>!!x(b)||x(l))),w=c((()=>!e.disabled&&x(l))),O=c((()=>{var t;return null!=(t=e.style)?t:{}})),E=c((()=>!x(l))),A=()=>{if(x(i))return!0},T=de(A,(()=>{e.enterable&&"hover"===x(p)&&f()})),C=de(A,(()=>{"hover"===x(p)&&u()}));let S;return v((()=>x(l)),(e=>{e||null==S||S()}),{flush:"post"}),{ariaHidden:E,entering:o,leaving:r,id:s,intermediateOpen:n,contentStyle:O,contentRef:t,destroyed:a,shouldRender:y,shouldShow:w,onClose:u,open:l,onAfterShow:()=>{d(),S=te(c((()=>{var e;return null==(e=t.value)?void 0:e.popperContentRef})),(()=>{if(x(i))return;"hover"!==x(p)&&u()}))},onBeforeEnter:()=>{var e,n;null==(n=null==(e=t.value)?void 0:e.updatePopper)||n.call(e),null==g||g()},onBeforeLeave:()=>{null==h||h()},onContentEnter:T,onContentLeave:C,onTransitionLeave:()=>{m()},onBlur:()=>{e.virtualTriggering||u()}}}}),[["render",function(e,t,n,o,r,a){const i=ne("el-popper-content");return S(),q(ae,{disabled:!e.teleported,to:e.appendTo},[W(re,{name:e.transition,onAfterLeave:e.onTransitionLeave,onBeforeEnter:e.onBeforeEnter,onAfterEnter:e.onAfterShow,onBeforeLeave:e.onBeforeLeave},{default:K((()=>[e.shouldRender?L((S(),q(i,V({key:0,id:e.id,ref:"contentRef"},e.$attrs,{"aria-label":e.ariaLabel,"aria-hidden":e.ariaHidden,"boundaries-padding":e.boundariesPadding,"fallback-placements":e.fallbackPlacements,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,placement:e.placement,"popper-options":e.popperOptions,strategy:e.strategy,effect:e.effect,enterable:e.enterable,pure:e.pure,"popper-class":e.popperClass,"popper-style":[e.popperStyle,e.contentStyle],"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,visible:e.shouldShow,"z-index":e.zIndex,onMouseenter:e.onContentEnter,onMouseleave:e.onContentLeave,onBlur:e.onBlur,onClose:e.onClose}),{default:K((()=>[U(" Workaround bug #6378 "),e.destroyed?U("v-if",!0):T(e.$slots,"default",{key:0})])),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onBlur","onClose"])),[[oe,e.shouldShow]]):U("v-if",!0)])),_:3},8,["name","onAfterLeave","onBeforeEnter","onAfterEnter","onBeforeLeave"])],8,["disabled","to"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);const dn=(e,t,n)=>o=>{((e,t)=>ie(e)?e.includes(t):e===t)(x(e),t)&&n(o)};var vn=E(A({name:"ElTooltipTrigger",components:{ElPopperTrigger:He},props:pn,setup(e){const t=C("tooltip"),{controlled:n,id:o,open:r,onOpen:a,onClose:i,onToggle:s}=R(fn,void 0),l=k(null),p=()=>{if(x(n)||e.disabled)return!0},u=se(e,"trigger"),f=de(p,dn(u,"hover",a)),c=de(p,dn(u,"hover",i)),d=de(p,dn(u,"click",(e=>{0===e.button&&s(e)}))),v=de(p,dn(u,"focus",a));return{onBlur:de(p,dn(u,"focus",i)),onContextMenu:de(p,dn(u,"contextmenu",(e=>{e.preventDefault(),s(e)}))),onFocus:v,onMouseenter:f,onMouseleave:c,onClick:d,onKeydown:de(p,(t=>{const{code:n}=t;e.triggerKeys.includes(n)&&(t.preventDefault(),s(t))})),open:r,id:o,triggerRef:l,ns:t}}}),[["render",function(e,t,n,o,r,a){const i=ne("el-popper-trigger");return S(),q(i,{id:e.id,"virtual-ref":e.virtualRef,open:e.open,"virtual-triggering":e.virtualTriggering,class:j(e.ns.e("trigger")),onBlur:e.onBlur,onClick:e.onClick,onContextmenu:e.onContextMenu,onFocus:e.onFocus,onMouseenter:e.onMouseenter,onMouseleave:e.onMouseleave,onKeydown:e.onKeydown},{default:K((()=>[T(e.$slots,"default")])),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);const{useModelToggleProps:mn,useModelToggle:gn,useModelToggleEmits:hn}=ye("visible"),bn=A({name:"ElTooltip",components:{ElPopper:an,ElPopperArrow:Me,ElTooltipContent:cn,ElTooltipTrigger:vn},props:s(s(s(s(s(s({},Re),mn),ln),pn),Se),un),emits:[...hn,"before-show","before-hide","show","hide","open","close"],setup(e,{emit:t}){Ee();const n=c((()=>(le(e.openDelay),e.openDelay||e.showAfter))),o=c((()=>(le(e.visibleArrow),h(e.visibleArrow)?e.visibleArrow:e.showArrow))),r=pe(),a=k(null),i=k(null),s=()=>{var e;const t=x(a);t&&(null==(e=t.popperInstanceRef)||e.update())},l=k(!1),p=k(void 0),{show:u,hide:f,hasUpdateHandler:d}=gn({indicator:l,toggleReason:p}),{onOpen:m,onClose:g}=ke({showAfter:n,hideAfter:se(e,"hideAfter"),open:u,close:f}),b=c((()=>h(e.visible)&&!d.value));O(fn,{controlled:b,id:r,open:ue(l),trigger:se(e,"trigger"),onOpen:e=>{m(e)},onClose:e=>{g(e)},onToggle:e=>{x(l)?g(e):m(e)},onShow:()=>{t("show",p.value)},onHide:()=>{t("hide",p.value)},onBeforeShow:()=>{t("before-show",p.value)},onBeforeHide:()=>{t("before-hide",p.value)},updatePopper:s}),v((()=>e.disabled),(e=>{e&&l.value&&(l.value=!1)}));return fe((()=>l.value&&f())),{compatShowAfter:n,compatShowArrow:o,popperRef:a,contentRef:i,open:l,hide:f,isFocusInsideContent:()=>{var e,t;const n=null==(t=null==(e=i.value)?void 0:e.contentRef)?void 0:t.popperContentRef;return n&&n.contains(document.activeElement)},updatePopper:s,onOpen:m,onClose:g}}}),yn=["innerHTML"],wn={key:1};const xn=Z(E(bn,[["render",function(e,t,n,o,r,a){const i=ne("el-tooltip-trigger"),s=ne("el-popper-arrow"),l=ne("el-tooltip-content"),p=ne("el-popper");return S(),q(p,{ref:"popperRef",role:e.role},{default:K((()=>[W(i,{disabled:e.disabled,trigger:e.trigger,"trigger-keys":e.triggerKeys,"virtual-ref":e.virtualRef,"virtual-triggering":e.virtualTriggering},{default:K((()=>[e.$slots.default?T(e.$slots,"default",{key:0}):U("v-if",!0)])),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),W(l,{ref:"contentRef","aria-label":e.ariaLabel,"boundaries-padding":e.boundariesPadding,content:e.content,disabled:e.disabled,effect:e.effect,enterable:e.enterable,"fallback-placements":e.fallbackPlacements,"hide-after":e.hideAfter,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,persistent:e.persistent,"popper-class":e.popperClass,"popper-style":e.popperStyle,placement:e.placement,"popper-options":e.popperOptions,pure:e.pure,"raw-content":e.rawContent,"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,"show-after":e.compatShowAfter,strategy:e.strategy,teleported:e.teleported,transition:e.transition,"virtual-triggering":e.virtualTriggering,"z-index":e.zIndex,"append-to":e.appendTo},{default:K((()=>[T(e.$slots,"content",{},(()=>[e.rawContent?(S(),M("span",{key:0,innerHTML:e.content},null,8,yn)):(S(),M("span",wn,ce(e.content),1))])),e.compatShowArrow?(S(),q(s,{key:0,"arrow-offset":e.arrowOffset},null,8,["arrow-offset"])):U("v-if",!0)])),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])])),_:3},8,["role"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]));export{xn as E,je as O,fn as T,pn as a,Ce as b,de as c,ln as u,ve as w,Zt as y};