import{W as u,_ as i,q as p,u as c,$ as o,aa as m,H as f,S as g,w as d,a5 as y,I as w,G as s,a2 as _,a3 as v,a7 as R}from"./index-0c1b3d7d.js";import{r as S}from"./el-col-6aa2f9f5.js";const b=["start","center","end","space-around","space-between","space-evenly"],h=["top","middle","bottom"],C=u({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:b,default:"start"},align:{type:String,values:h,default:"top"}}),$={name:"ElRow"},j=p({...$,props:C,setup(n){const e=n,a=c("row"),r=o(()=>e.gutter);m(S,{gutter:r});const l=o(()=>{const t={};return e.gutter&&(t.marginRight=t.marginLeft=`-${e.gutter/2}px`),t});return(t,E)=>(f(),g(v(t.tag),{class:w([s(a).b(),s(a).is(`justify-${e.justify}`,t.justify!=="start"),s(a).is(`align-${e.align}`,t.align!=="top")]),style:_(s(l))},{default:d(()=>[y(t.$slots,"default")]),_:3},8,["class","style"]))}});var k=i(j,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const B=R(k);export{B as E};
