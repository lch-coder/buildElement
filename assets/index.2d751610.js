import{N as E,P as T,q as w,U as N,u as M,S as P,D as n,A as V,B as t,Y as m,F as o,C as a,aa as c,w as i,d as k,aU as g,az as C,ai as y,ae as h,ac as b,T as $,_ as I,af as U}from"./index.aedbc5e4.js";const q=E({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:T,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),A={close:l=>l instanceof MouseEvent,click:l=>l instanceof MouseEvent},D={name:"ElTag"},F=w({...D,props:q,emits:A,setup(l,{emit:r}){const v=l,S=N(),s=M("tag"),u=P(()=>{const{type:e,hit:f,effect:_,closable:B,round:z}=v;return[s.b(),s.is("closable",B),s.m(e),s.m(S.value),s.m(_),s.is("hit",f),s.is("round",z)]}),p=e=>{r("close",e)},d=e=>{r("click",e)};return(e,f)=>e.disableTransitions?(n(),V("span",{key:0,class:o(a(u)),style:b({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(n(),c(a(y),{key:0,class:o(a(s).e("close")),onClick:C(p,["stop"])},{default:i(()=>[k(a(g))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)):(n(),c($,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:""},{default:i(()=>[t("span",{class:o(a(u)),style:b({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(n(),c(a(y),{key:0,class:o(a(s).e("close")),onClick:C(p,["stop"])},{default:i(()=>[k(a(g))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)]),_:3},8,["name"]))}});var Y=I(F,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const G=U(Y);export{G as E,q as t};
