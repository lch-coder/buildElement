import{D as p,ae as k,d as m,L as y,o as a,g as i,a6 as t,w as h,a9 as v,j as s,af as b,aa as o,n as r,R as d,_ as C,ac as E}from"./index.12772b39.js";const g=p({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:k,default:""}}),w={click:l=>l instanceof MouseEvent},B=["href"],L={name:"ElLink"},$=m({...L,props:g,emits:w,setup(l,{emit:c}){const u=l,n=y("link");function f(e){u.disabled||c("click",e)}return(e,S)=>(a(),i("a",{class:r([s(n).b(),s(n).m(e.type),s(n).is("disabled",e.disabled),s(n).is("underline",e.underline&&!e.disabled)]),href:e.disabled||!e.href?void 0:e.href,onClick:f},[e.icon?(a(),t(s(b),{key:0},{default:h(()=>[(a(),t(v(e.icon)))]),_:1})):o("v-if",!0),e.$slots.default?(a(),i("span",{key:1,class:r(s(n).e("inner"))},[d(e.$slots,"default")],2)):o("v-if",!0),e.$slots.icon?d(e.$slots,"icon",{key:2}):o("v-if",!0)],10,B))}});var P=C($,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const D=E(P);export{D as E};
