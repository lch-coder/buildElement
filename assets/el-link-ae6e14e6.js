var e=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(s,a,t)=>a in s?e(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;import{I as i,K as o,_ as c,d,O as f,m as p,i as u,D as y,w as b,T as m,l as k,R as v,U as O,n as g,V as h,X as j}from"./index-66553315.js";const w=i({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:o,default:""}}),P={click:e=>e instanceof MouseEvent},E=["href"],$=d((_=((e,s)=>{for(var a in s||(s={}))n.call(s,a)&&l(e,a,s[a]);if(t)for(var a of t(s))r.call(s,a)&&l(e,a,s[a]);return e})({},{name:"ElLink"}),s(_,a({props:w,emits:P,setup(e,{emit:s}){const a=e,t=f("link");function n(e){a.disabled||s("click",e)}return(e,s)=>(p(),u("a",{class:g([k(t).b(),k(t).m(e.type),k(t).is("disabled",e.disabled),k(t).is("underline",e.underline&&!e.disabled)]),href:e.disabled||!e.href?void 0:e.href,onClick:n},[e.icon?(p(),y(k(v),{key:0},{default:b((()=>[(p(),y(m(e.icon)))])),_:1})):O("v-if",!0),e.$slots.default?(p(),u("span",{key:1,class:g(k(t).e("inner"))},[h(e.$slots,"default")],2)):O("v-if",!0),e.$slots.icon?h(e.$slots,"icon",{key:2}):O("v-if",!0)],10,E))}}))));var _;const S=j(c($,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]));export{S as E};
