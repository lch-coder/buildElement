var e=Object.defineProperty,s=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(s,r,a)=>r in s?e(s,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[r]=a;import{G as c,bd as l,a7 as i,I as p,K as u,_ as f,d as v,M as m,c as y,N as b,a6 as d,O as g,am as O,o as S,h,Q as j,k,B as w,w as P,R as E,P as z,T as _,n as x,V as B}from"./index-07ab5625.js";const I=c({size:{type:[Number,String],values:l,default:"",validator:e=>i(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:p},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:u(String),default:"cover"}}),N={error:e=>e instanceof Event},V=["src","alt","srcset"],q=v((A=((e,s)=>{for(var r in s||(s={}))t.call(s,r)&&o(e,r,s[r]);if(a)for(var r of a(s))n.call(s,r)&&o(e,r,s[r]);return e})({},{name:"ElAvatar"}),s(A,r({props:I,emits:N,setup(e,{emit:s}){const r=e,a=m("avatar"),t=y(!1),n=b((()=>{const{size:e,icon:s,shape:t}=r,n=[a.b()];return d(e)&&n.push(a.m(e)),s&&n.push(a.m("icon")),t&&n.push(a.m(t)),n})),o=b((()=>{const{size:e}=r;return i(e)?a.cssVarBlock({size:g(e)||""}):void 0})),c=b((()=>({objectFit:r.fit})));function l(e){t.value=!0,s("error",e)}return O((()=>r.src),(()=>t.value=!1)),(e,s)=>(S(),h("span",{class:x(k(n)),style:j(k(o))},[!e.src&&!e.srcSet||t.value?e.icon?(S(),w(k(z),{key:1},{default:P((()=>[(S(),w(E(e.icon)))])),_:1})):_(e.$slots,"default",{key:2}):(S(),h("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:j(k(c)),onError:l},null,44,V))],6))}}))));var A;const D=B(f(q,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]));export{D as E};
