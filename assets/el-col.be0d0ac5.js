import{N as y,O as o,ap as n,q as h,$,S as c,u as g,ak as f,l as N,D as _,aa as C,w as x,Y as j,F as O,C as r,ac as v,ad as w,_ as E,af as k}from"./index.aedbc5e4.js";const S=Symbol("rowContextKey"),B=y({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:o([Number,Object]),default:()=>n({})},sm:{type:o([Number,Object]),default:()=>n({})},md:{type:o([Number,Object]),default:()=>n({})},lg:{type:o([Number,Object]),default:()=>n({})},xl:{type:o([Number,Object]),default:()=>n({})}}),D={name:"ElCol"},K=h({...D,props:B,setup(m){const t=m,{gutter:u}=$(S,{gutter:c(()=>0)}),a=g("col"),d=c(()=>{const e={};return u.value&&(e.paddingLeft=e.paddingRight=`${u.value/2}px`),e}),b=c(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const l=t[s];f(l)&&(s==="span"?e.push(a.b(`${t[s]}`)):l>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{f(t[s])?e.push(a.b(`${s}-${t[s]}`)):N(t[s])&&Object.entries(t[s]).forEach(([l,p])=>{e.push(l!=="span"?a.b(`${s}-${l}-${p}`):a.b(`${s}-${p}`))})}),u.value&&e.push(a.is("guttered")),e});return(e,i)=>(_(),C(w(e.tag),{class:O([r(a).b(),r(b)]),style:v(r(d))},{default:x(()=>[j(e.$slots,"default")]),_:3},8,["class","style"]))}});var P=E(K,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const I=k(P);export{I as E,S as r};
