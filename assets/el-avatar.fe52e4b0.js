import{N as E,P as g,ak as v,ah as z,O as _,q as C,u as b,r as w,S as l,f as A,a8 as P,V as B,D as n,A as u,ac as f,C as o,aa as m,w as N,ad as q,ai as D,Y as F,F as I,_ as L,af as T}from"./index.aedbc5e4.js";const V=E({size:{type:[Number,String],values:g,default:"",validator:a=>v(a)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:z},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:_(String),default:"cover"}}),j={error:a=>a instanceof Event},O=["src","alt","srcset"],U={name:"ElAvatar"},Y=C({...U,props:V,emits:j,setup(a,{emit:d}){const t=a,e=b("avatar"),c=w(!1),y=l(()=>{const{size:s,icon:i,shape:p}=t,r=[e.b()];return A(s)&&r.push(e.m(s)),i&&r.push(e.m("icon")),p&&r.push(e.m(p)),r}),S=l(()=>{const{size:s}=t;return v(s)?e.cssVarBlock({size:P(s)||""}):void 0}),h=l(()=>({objectFit:t.fit}));B(()=>t.src,()=>c.value=!1);function k(s){c.value=!0,d("error",s)}return(s,i)=>(n(),u("span",{class:I(o(y)),style:f(o(S))},[(s.src||s.srcSet)&&!c.value?(n(),u("img",{key:0,src:s.src,alt:s.alt,srcset:s.srcSet,style:f(o(h)),onError:k},null,44,O)):s.icon?(n(),m(o(D),{key:1},{default:N(()=>[(n(),m(q(s.icon)))]),_:1})):F(s.$slots,"default",{key:2})],6))}});var $=L(Y,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);const H=T($);export{H as E};
