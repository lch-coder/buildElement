import{aA as X,B as g,a4 as h,A as V,X as Y,Y as H,bP as Z,bQ as ee,aJ as te,W as M,y as D,P as re}from"./index.2eb95586.js";var C;const N=typeof window<"u",ne=e=>typeof e=="string",T=()=>{};N&&((C=window==null?void 0:window.navigator)==null?void 0:C.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ae(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const z=e=>e();function oe(e=z){const t=g(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...o)=>{t.value&&e(...o)}}}function A(e){return Z()?(ee(e),!0):!1}function se(e,t=!0){V()?te(e):t?e():H(e)}function ie(e,t=!0){V()?Y(e):t?e():H(e)}function le(e,t,r={}){const{immediate:n=!0}=r,a=g(!1);let o=null;function s(){o&&(clearTimeout(o),o=null)}function l(){a.value=!1,s()}function u(...c){s(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...c)},h(t))}return n&&(a.value=!0,N&&u()),A(l),{isPending:a,start:u,stop:l}}function xe(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=X(e),o=g(e);function s(l){return arguments.length?(o.value=l,o.value):(o.value=o.value===h(r)?h(n):h(r),o.value)}return a?s:[o,s]}var I=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,ce=(e,t)=>{var r={};for(var n in e)ue.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&I)for(var n of I(e))t.indexOf(n)<0&&fe.call(e,n)&&(r[n]=e[n]);return r};function de(e,t,r={}){const n=r,{eventFilter:a=z}=n,o=ce(n,["eventFilter"]);return M(e,ae(a,t),o)}var pe=Object.defineProperty,ve=Object.defineProperties,ge=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_e=(e,t)=>{for(var r in t||(t={}))Q.call(t,r)&&R(e,r,t[r]);if(E)for(var r of E(t))G.call(t,r)&&R(e,r,t[r]);return e},me=(e,t)=>ve(e,ge(t)),ye=(e,t)=>{var r={};for(var n in e)Q.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&E)for(var n of E(e))t.indexOf(n)<0&&G.call(e,n)&&(r[n]=e[n]);return r};function he(e,t,r={}){const n=r,{eventFilter:a}=n,o=ye(n,["eventFilter"]),{eventFilter:s,pause:l,resume:u,isActive:c}=oe(a);return{stop:de(e,t,me(_e({},o),{eventFilter:s})),pause:l,resume:u,isActive:c}}function we(e){var t;const r=h(e);return(t=r==null?void 0:r.$el)!=null?t:r}const S=N?window:void 0,Oe=N?window.navigator:void 0;function K(...e){let t,r,n,a;if(ne(e[0])?([r,n,a]=e,t=S):[t,r,n,a]=e,!t)return T;let o=T;const s=M(()=>we(t),u=>{o(),u&&(u.addEventListener(r,n,a),o=()=>{u.removeEventListener(r,n,a),o=T})},{immediate:!0,flush:"post"}),l=()=>{s(),o()};return A(l),l}function be(e,t={}){const{window:r=S}=t,n=Boolean(r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=g(!1),s=()=>{!n||(a||(a=r.matchMedia(e)),o.value=a.matches)};return se(()=>{s(),a&&("addEventListener"in a?a.addEventListener("change",s):a.addListener(s),A(()=>{"removeEventListener"in a?a.removeEventListener("change",s):a.removeListener(s)}))}),o}function Je(e={}){const{navigator:t=Oe,read:r=!1,source:n,copiedDuring:a=1500}=e,o=["copy","cut"],s=Boolean(t&&"clipboard"in t),l=g(""),u=g(!1),c=le(()=>u.value=!1,a);function _(){t.clipboard.readText().then(f=>{l.value=f})}if(s&&r)for(const f of o)K(f,_);async function w(f=h(n)){s&&f!=null&&(await t.clipboard.writeText(f),l.value=f,u.value=!0,c.start())}return{isSupported:s,text:l,copied:u,copy:w}}const F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L="__vueuse_ssr_handlers__";F[L]=F[L]||{};const Pe=F[L];function U(e,t){return Pe[e]||t}function Se(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const $e={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function je(e,t,r,n={}){var a;const{flush:o="pre",deep:s=!0,listenToStorageChanges:l=!0,writeDefaults:u=!0,shallow:c,window:_=S,eventFilter:w,onError:f=i=>{console.error(i)}}=n,p=(c?re:g)(t);if(!r)try{r=U("getDefaultStorage",()=>{var i;return(i=S)==null?void 0:i.localStorage})()}catch(i){f(i)}if(!r)return p;const O=h(t),$=Se(O),b=(a=n.serializer)!=null?a:$e[$],{pause:d,resume:m}=he(p,()=>y(p.value),{flush:o,deep:s,eventFilter:w});return _&&l&&K(_,"storage",j),j(),p;function y(i){try{i==null?r.removeItem(e):r.setItem(e,b.write(i))}catch(v){f(v)}}function P(i){if(!(i&&i.key!==e)){d();try{const v=i?i.newValue:r.getItem(e);return v==null?(u&&O!==null&&r.setItem(e,b.write(O)),O):typeof v!="string"?v:b.read(v)}catch(v){f(v)}finally{m()}}}function j(i){i&&i.key!==e||(p.value=P(i))}}function q(e){return be("(prefers-color-scheme: dark)",e)}var Ee=Object.defineProperty,W=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,De=(e,t)=>{for(var r in t||(t={}))Ne.call(t,r)&&k(e,r,t[r]);if(W)for(var r of W(t))Te.call(t,r)&&k(e,r,t[r]);return e};function Fe(e={}){const{selector:t="html",attribute:r="class",window:n=S,storage:a,storageKey:o="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:l,emitAuto:u}=e,c=De({auto:"",light:"light",dark:"dark"},e.modes||{}),_=q({window:n}),w=D(()=>_.value?"dark":"light"),f=l||(o==null?g("auto"):je(o,"auto",a,{window:n,listenToStorageChanges:s})),p=D({get(){return f.value==="auto"&&!u?w.value:f.value},set(d){f.value=d}}),O=U("updateHTMLAttrs",(d,m,y)=>{const P=n==null?void 0:n.document.querySelector(d);if(!!P)if(m==="class"){const j=y.split(/\s/g);Object.values(c).flatMap(i=>(i||"").split(/\s/g)).filter(Boolean).forEach(i=>{j.includes(i)?P.classList.add(i):P.classList.remove(i)})}else P.setAttribute(m,y)});function $(d){var m;const y=d==="auto"?w.value:d;O(t,r,(m=c[y])!=null?m:y)}function b(d){e.onChanged?e.onChanged(d,$):$(d)}return M(p,b,{flush:"post",immediate:!0}),ie(()=>b(p.value)),p}var Le=Object.defineProperty,Me=Object.defineProperties,Ae=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable,J=(e,t,r)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Re=(e,t)=>{for(var r in t||(t={}))Ce.call(t,r)&&J(e,r,t[r]);if(x)for(var r of x(t))Ie.call(t,r)&&J(e,r,t[r]);return e},We=(e,t)=>Me(e,Ae(t));function Be(e={}){const{valueDark:t="dark",valueLight:r="",window:n=S}=e,a=Fe(We(Re({},e),{onChanged:(l,u)=>{var c;e.onChanged?(c=e.onChanged)==null||c.call(e,l==="dark"):u(l)},modes:{dark:t,light:r}})),o=q({window:n});return D({get(){return a.value==="dark"},set(l){l===o.value?a.value="auto":a.value=l?"dark":"light"}})}var B;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(B||(B={}));export{Be as a,xe as b,Je as u};