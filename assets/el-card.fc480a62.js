import{H as d,J as n,d as p,T as c,o,g as t,n as r,j as s,a7 as l,k as i,af as u,a5 as y,h,ag as m,ah as f,ak as v}from"./index.a4ce353d.js";const S=d({header:{type:String,default:""},bodyStyle:{type:n([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),g={name:"ElCard"},k=p({...g,props:S,setup(C){const a=c("card");return(e,_)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[l(e.$slots,"header",{},()=>[i(u(e.header),1)])],2)):y("v-if",!0),h("div",{class:r(s(a).e("body")),style:m(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var w=f(k,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const E=v(w);export{E};