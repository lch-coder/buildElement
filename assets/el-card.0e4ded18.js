import{F as d,H as n,d as p,Q as c,e as o,f as t,a4 as r,a5 as s,a6 as l,i,ae as u,a2 as y,g as f,af as m,ag as h,aj as v}from"./index.db4528e9.js";const S=d({header:{type:String,default:""},bodyStyle:{type:n([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),g={name:"ElCard"},w=p({...g,props:S,setup(_){const a=c("card");return(e,b)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[l(e.$slots,"header",{},()=>[i(u(e.header),1)])],2)):y("v-if",!0),f("div",{class:r(s(a).e("body")),style:m(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var C=h(w,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const E=v(C);export{E};
