import{D as N,d as L,L as T,J as v,aJ as C,R as $,b as x,a_ as I,G as m,ah as g,E as y,bL as A,H as R,F as B,h,k as O,ac as _}from"./index.664c5611.js";import{P as o,i as P,a as k}from"./vnode.6abb7551.js";const V=N({prefixCls:{type:String}}),z=L({name:"ElSpaceItem",props:V,setup(e,{slots:u}){const p=T("space"),i=v(()=>`${e.prefixCls||p.b()}__item`);return()=>C("div",{class:i.value},$(u,"default"))}}),w={small:8,default:12,large:16};function Y(e){const u=T("space"),p=v(()=>[u.b(),u.m(e.direction),e.class]),i=x(0),n=x(0),d=v(()=>{const t=e.wrap||e.fill?{flexWrap:"wrap",marginBottom:`-${n.value}px`}:{},l={alignItems:e.alignment};return[t,l,e.style]}),f=v(()=>{const t={paddingBottom:`${n.value}px`,marginRight:`${i.value}px`},l=e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{};return[t,l]});return I(()=>{const{size:t="small",wrap:l,direction:r,fill:a}=e;if(m(t)){const[s=0,c=0]=t;i.value=s,n.value=c}else{let s;g(t)?s=t:s=w[t||"small"]||w.small,(l||a)&&r==="horizontal"?i.value=n.value=s:r==="horizontal"?(i.value=s,n.value=0):(n.value=s,i.value=0)}}),{classes:p,containerStyle:d,itemStyle:f}}const j=N({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:y([String,Object,Array]),default:""},style:{type:y([String,Array,Object]),default:""},alignment:{type:y(String),default:"center"},prefixCls:{type:String},spacer:{type:y([Object,String,Number,Array]),default:null,validator:e=>A(e)||g(e)||R(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:B,validator:e=>g(e)||m(e)&&e.length===2&&e.every(g)}});var F=L({name:"ElSpace",props:j,setup(e,{slots:u}){const{classes:p,containerStyle:i,itemStyle:n}=Y(e);function d(f,t="",l=[]){const{prefixCls:r}=e;return f.forEach((a,s)=>{P(a)?m(a.children)&&a.children.forEach((c,S)=>{P(c)&&m(c.children)?d(c.children,`${t+S}-`,l):l.push(h(z,{style:n.value,prefixCls:r,key:`nested-${t+S}`},{default:()=>[c]},o.PROPS|o.STYLE,["style","prefixCls"]))}):k(a)&&l.push(h(z,{style:n.value,prefixCls:r,key:`LoopKey${t+s}`},{default:()=>[a]},o.PROPS|o.STYLE,["style","prefixCls"]))}),l}return()=>{var f;const{spacer:t,direction:l}=e,r=$(u,"default",{key:0},()=>[]);if(((f=r.children)!=null?f:[]).length===0)return null;if(m(r.children)){let a=d(r.children);if(t){const s=a.length-1;a=a.reduce((c,S,E)=>{const b=[...c,S];return E!==s&&b.push(h("span",{style:[n.value,l==="vertical"?"width: 100%":null],key:E},[A(t)?t:O(t,o.TEXT)],o.STYLE)),b},[])}return h("div",{class:p.value,style:i.value},a,o.STYLE|o.CLASS)}return r.children}}});const W=_(F);export{W as E};