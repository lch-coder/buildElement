import{g as G}from"./vnode.41b11878.js";import{d as C,L as K,V as I,E as L,aL as N,v as W,i as o,o as a,f,g as b,R as h,aK as E,X as $,h as V,_ as j,a6 as J,D as O,T as U,G as X,C as Y,n as _,J as B,k as P,Y as R,a0 as q,a2 as H,a3 as M}from"./index.4f42a7a5.js";const z="elDescriptions";var k=C({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String},type:{type:String}},setup(){return{descriptions:K(z,{})}},render(){var g,c,l,S,r,d;const i=G(this.cell),{border:w,direction:A}=this.descriptions,e=A==="vertical",p=((l=(c=(g=this.cell)==null?void 0:g.children)==null?void 0:c.label)==null?void 0:l.call(c))||i.label,n=(d=(r=(S=this.cell)==null?void 0:S.children)==null?void 0:r.default)==null?void 0:d.call(r),t=i.span,u=i.align?`is-${i.align}`:"",D=i.labelAlign?`is-${i.labelAlign}`:u,m=i.className,y=i.labelClassName,v={width:I(i.width),minWidth:I(i.minWidth)},s=L("descriptions");switch(this.type){case"label":return N(this.tag,{style:v,class:[s.e("cell"),s.e("label"),s.is("bordered-label",w),s.is("vertical-label",e),D,y],colSpan:e?t:1},p);case"content":return N(this.tag,{style:v,class:[s.e("cell"),s.e("content"),s.is("bordered-content",w),s.is("vertical-content",e),u,m],colSpan:e?t:t*2-1},n);default:return N("td",{style:v,class:[s.e("cell"),u],colSpan:t},[N("span",{class:[s.e("label"),y]},p),N("span",{class:[s.e("content"),m]},n)])}}});const Q=W({row:{type:Array,default:()=>[]}}),Z={key:1},x={name:"ElDescriptionsRow"},ee=C({...x,props:Q,setup(g){const c=K(z,{});return(l,S)=>o(c).direction==="vertical"?(a(),f(h,{key:0},[b("tr",null,[(a(!0),f(h,null,E(l.row,(r,d)=>(a(),$(o(k),{key:`tr1-${d}`,cell:r,tag:"th",type:"label"},null,8,["cell"]))),128))]),b("tr",null,[(a(!0),f(h,null,E(l.row,(r,d)=>(a(),$(o(k),{key:`tr2-${d}`,cell:r,tag:"td",type:"content"},null,8,["cell"]))),128))])],64)):(a(),f("tr",Z,[(a(!0),f(h,null,E(l.row,(r,d)=>(a(),f(h,{key:`tr3-${d}`},[o(c).border?(a(),f(h,{key:0},[V(o(k),{cell:r,tag:"td",type:"label"},null,8,["cell"]),V(o(k),{cell:r,tag:"td",type:"content"},null,8,["cell"])],64)):(a(),$(o(k),{key:1,cell:r,tag:"td",type:"both"},null,8,["cell"]))],64))),128))]))}});var te=j(ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const se=W({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:J,title:{type:String,default:""},extra:{type:String,default:""}}),le={name:"ElDescriptions"},ne=C({...le,props:se,setup(g){const c=g,l=L("descriptions"),S=O(),r=U();X(z,c);const d=Y(()=>[l.b(),l.m(S.value)]),i=e=>{const p=Array.isArray(e)?e:[e],n=[];return p.forEach(t=>{Array.isArray(t.children)?n.push(...i(t.children)):n.push(t)}),n},w=(e,p,n,t=!1)=>(e.props||(e.props={}),p>n&&(e.props.span=n),t&&(e.props.span=p),e),A=()=>{var e;const p=i((e=r.default)==null?void 0:e.call(r)).filter(m=>{var y;return((y=m==null?void 0:m.type)==null?void 0:y.name)==="ElDescriptionsItem"}),n=[];let t=[],u=c.column,D=0;return p.forEach((m,y)=>{var v;const s=((v=m.props)==null?void 0:v.span)||1;if(y<p.length-1&&(D+=s>u?u:s),y===p.length-1){const F=c.column-D%c.column;t.push(w(m,F,u,!0)),n.push(t);return}s<u?(u-=s,t.push(m)):(t.push(w(m,s,u)),n.push(t),u=c.column,t=[])}),n};return(e,p)=>(a(),f("div",{class:_(o(d))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(a(),f("div",{key:0,class:_(o(l).e("header"))},[b("div",{class:_(o(l).e("title"))},[B(e.$slots,"title",{},()=>[P(R(e.title),1)])],2),b("div",{class:_(o(l).e("extra"))},[B(e.$slots,"extra",{},()=>[P(R(e.extra),1)])],2)],2)):q("v-if",!0),b("div",{class:_(o(l).e("body"))},[b("table",{class:_([o(l).e("table"),o(l).is("bordered",e.border)])},[b("tbody",null,[(a(!0),f(h,null,E(A(),(n,t)=>(a(),$(te,{key:t,row:n},null,8,["row"]))),128))])],2)],2)],2))}});var re=j(ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]),T=C({name:"ElDescriptionsItem",props:{label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}});const ie=H(re,{DescriptionsItem:T}),ce=M(T);export{ce as E,ie as a};