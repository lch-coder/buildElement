import{E as g,ak as k,D as v,H as z,G as _,d as C,P as b,C as w,z as l,J as P,av as A,X as B,o as n,e as u,af as f,a5 as o,a7 as m,w as N,a8 as j,a9 as D,a6 as I,a4 as L,ag as T,aj as q}from"./index.ff6b271a.js";const F=g({size:{type:[Number,String],values:k,default:"",validator:s=>v(s)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:z},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:_(String),default:"cover"}}),G={error:s=>s instanceof Event},H=["src","alt","srcset"],J={name:"ElAvatar"},U=C({...J,props:F,emits:G,setup(s,{emit:d}){const t=s,e=b("avatar"),c=w(!1),y=l(()=>{const{size:a,icon:i,shape:p}=t,r=[e.b()];return P(a)&&r.push(e.m(a)),i&&r.push(e.m("icon")),p&&r.push(e.m(p)),r}),S=l(()=>{const{size:a}=t;return v(a)?e.cssVarBlock({size:A(a)||""}):void 0}),h=l(()=>({objectFit:t.fit}));B(()=>t.src,()=>c.value=!1);function E(a){c.value=!0,d("error",a)}return(a,i)=>(n(),u("span",{class:L(o(y)),style:f(o(S))},[(a.src||a.srcSet)&&!c.value?(n(),u("img",{key:0,src:a.src,alt:a.alt,srcset:a.srcSet,style:f(o(h)),onError:E},null,44,H)):a.icon?(n(),m(o(D),{key:1},{default:N(()=>[(n(),m(j(a.icon)))]),_:1})):I(a.$slots,"default",{key:2})],6))}});var V=T(U,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);const $=q(V);export{$ as E};
