import{D as g,F as k,ah as v,ae as z,E as _,d as b,L as w,b as C,J as l,H as A,a4 as B,N,o as n,f as u,a8 as f,i as o,a6 as m,w as P,a9 as L,af as D,R as F,n as I,_ as T,ac as j}from"./index.664c5611.js";const q=g({size:{type:[Number,String],values:k,default:"",validator:a=>v(a)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:z},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:_(String),default:"cover"}}),H={error:a=>a instanceof Event},J=["src","alt","srcset"],R={name:"ElAvatar"},U=b({...R,props:q,emits:H,setup(a,{emit:d}){const t=a,e=w("avatar"),c=C(!1),y=l(()=>{const{size:s,icon:i,shape:p}=t,r=[e.b()];return A(s)&&r.push(e.m(s)),i&&r.push(e.m("icon")),p&&r.push(e.m(p)),r}),S=l(()=>{const{size:s}=t;return v(s)?e.cssVarBlock({size:B(s)||""}):void 0}),h=l(()=>({objectFit:t.fit}));N(()=>t.src,()=>c.value=!1);function E(s){c.value=!0,d("error",s)}return(s,i)=>(n(),u("span",{class:I(o(y)),style:f(o(S))},[(s.src||s.srcSet)&&!c.value?(n(),u("img",{key:0,src:s.src,alt:s.alt,srcset:s.srcSet,style:f(o(h)),onError:E},null,44,J)):s.icon?(n(),m(o(D),{key:1},{default:P(()=>[(n(),m(L(s.icon)))]),_:1})):F(s.$slots,"default",{key:2})],6))}});var V=T(U,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);const G=j(V);export{G as E};