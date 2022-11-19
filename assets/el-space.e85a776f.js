import{v as w,d as A,E as C,C as v,aL as L,J as T,b as x,b4 as I,z as m,a7 as g,x as y,aN as $,A as B,y as O,h,k as R,a2 as k}from"./index.4f42a7a5.js";import{P as o,i as z,a as V}from"./vnode.41b11878.js";const Y=w({prefixCls:{type:String}}),P=A({name:"ElSpaceItem",props:Y,setup(e,{slots:u}){const p=C("space"),i=v(()=>`${e.prefixCls||p.b()}__item`);return()=>L("div",{class:i.value},T(u,"default"))}}),N={small:8,default:12,large:16};function _(e){const u=C("space"),p=v(()=>[u.b(),u.m(e.direction),e.class]),i=x(0),n=x(0),d=v(()=>{const t=e.wrap||e.fill?{flexWrap:"wrap",marginBottom:`-${n.value}px`}:{},l={alignItems:e.alignment};return[t,l,e.style]}),f=v(()=>{const t={paddingBottom:`${n.value}px`,marginRight:`${i.value}px`},l=e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{};return[t,l]});return I(()=>{const{size:t="small",wrap:l,direction:r,fill:a}=e;if(m(t)){const[s=0,c=0]=t;i.value=s,n.value=c}else{let s;g(t)?s=t:s=N[t||"small"]||N.small,(l||a)&&r==="horizontal"?i.value=n.value=s:r==="horizontal"?(i.value=s,n.value=0):(n.value=s,i.value=0)}}),{classes:p,containerStyle:d,itemStyle:f}}const j=w({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:y([String,Object,Array]),default:""},style:{type:y([String,Array,Object]),default:""},alignment:{type:y(String),default:"center"},prefixCls:{type:String},spacer:{type:y([Object,String,Number,Array]),default:null,validator:e=>$(e)||g(e)||B(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:O,validator:e=>g(e)||m(e)&&e.length===2&&e.every(g)}});var F=A({name:"ElSpace",props:j,setup(e,{slots:u}){const{classes:p,containerStyle:i,itemStyle:n}=_(e);function d(f,t="",l=[]){const{prefixCls:r}=e;return f.forEach((a,s)=>{z(a)?m(a.children)&&a.children.forEach((c,S)=>{z(c)&&m(c.children)?d(c.children,`${t+S}-`,l):l.push(h(P,{style:n.value,prefixCls:r,key:`nested-${t+S}`},{default:()=>[c]},o.PROPS|o.STYLE,["style","prefixCls"]))}):V(a)&&l.push(h(P,{style:n.value,prefixCls:r,key:`LoopKey${t+s}`},{default:()=>[a]},o.PROPS|o.STYLE,["style","prefixCls"]))}),l}return()=>{var f;const{spacer:t,direction:l}=e,r=T(u,"default",{key:0},()=>[]);if(((f=r.children)!=null?f:[]).length===0)return null;if(m(r.children)){let a=d(r.children);if(t){const s=a.length-1;a=a.reduce((c,S,E)=>{const b=[...c,S];return E!==s&&b.push(h("span",{style:[n.value,l==="vertical"?"width: 100%":null],key:E},[$(t)?t:R(t,o.TEXT)],o.STYLE)),b},[])}return h("div",{class:p.value,style:i.value},a,o.STYLE|o.CLASS)}return r.children}}});const J=k(F);export{J as E};