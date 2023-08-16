var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(l,t,s)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[t]=s,i=(e,l)=>{for(var t in l||(l={}))a.call(l,t)&&n(e,t,l[t]);if(s)for(var t of s(l))r.call(l,t)&&n(e,t,l[t]);return e},o=(e,s)=>l(e,t(s));import{d as c,a1 as p,aX as u,O as d,M as y,aY as b,G as m,_ as h,k as v,o as f,h as g,i as w,F as S,A as k,B as O,j as D,a4 as j,aa as A,aK as E,Y as N,N as $,n as x,T as P,m as _,z,S as I,V as C,ao as W}from"./index-04568d02.js";var B=c({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String},type:{type:String}},setup:()=>({descriptions:p("elDescriptions",{})}),render(){var e,l,t,s,a,r;const n=u(this.cell),{border:i,direction:o}=this.descriptions,c="vertical"===o,p=(null==(t=null==(l=null==(e=this.cell)?void 0:e.children)?void 0:l.label)?void 0:t.call(l))||n.label,m=null==(r=null==(a=null==(s=this.cell)?void 0:s.children)?void 0:a.default)?void 0:r.call(a),h=n.span,v=n.align?`is-${n.align}`:"",f=n.labelAlign?`is-${n.labelAlign}`:v,g=n.className,w=n.labelClassName,S={width:d(n.width),minWidth:d(n.minWidth)},k=y("descriptions");switch(this.type){case"label":return b(this.tag,{style:S,class:[k.e("cell"),k.e("label"),k.is("bordered-label",i),k.is("vertical-label",c),f,w],colSpan:c?h:1},p);case"content":return b(this.tag,{style:S,class:[k.e("cell"),k.e("content"),k.is("bordered-content",i),k.is("vertical-content",c),v,g],colSpan:c?h:2*h-1},m);default:return b("td",{style:S,class:[k.e("cell"),v],colSpan:h},[b("span",{class:[k.e("label"),w]},p),b("span",{class:[k.e("content"),g]},m)])}}});const Y=m({row:{type:Array,default:()=>[]}}),F={key:1};var G=h(c(o(i({},{name:"ElDescriptionsRow"}),{props:Y,setup(e){const l=p("elDescriptions",{});return(e,t)=>"vertical"===v(l).direction?(f(),g(S,{key:0},[w("tr",null,[(f(!0),g(S,null,k(e.row,((e,l)=>(f(),O(v(B),{key:`tr1-${l}`,cell:e,tag:"th",type:"label"},null,8,["cell"])))),128))]),w("tr",null,[(f(!0),g(S,null,k(e.row,((e,l)=>(f(),O(v(B),{key:`tr2-${l}`,cell:e,tag:"td",type:"content"},null,8,["cell"])))),128))])],64)):(f(),g("tr",F,[(f(!0),g(S,null,k(e.row,((e,t)=>(f(),g(S,{key:`tr3-${t}`},[v(l).border?(f(),g(S,{key:0},[D(v(B),{cell:e,tag:"td",type:"label"},null,8,["cell"]),D(v(B),{cell:e,tag:"td",type:"content"},null,8,["cell"])],64)):(f(),O(v(B),{key:1,cell:e,tag:"td",type:"both"},null,8,["cell"]))],64)))),128))]))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const K=m({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:j,title:{type:String,default:""},extra:{type:String,default:""}});var M=h(c(o(i({},{name:"ElDescriptions"}),{props:K,setup(e){const l=e,t=y("descriptions"),s=A(),a=E();N("elDescriptions",l);const r=$((()=>[t.b(),t.m(s.value)])),n=e=>{const l=Array.isArray(e)?e:[e],t=[];return l.forEach((e=>{Array.isArray(e.children)?t.push(...n(e.children)):t.push(e)})),t},i=(e,l,t,s=!1)=>(e.props||(e.props={}),l>t&&(e.props.span=t),s&&(e.props.span=l),e),o=()=>{var e;const t=n(null==(e=a.default)?void 0:e.call(a)).filter((e=>{var l;return"ElDescriptionsItem"===(null==(l=null==e?void 0:e.type)?void 0:l.name)})),s=[];let r=[],o=l.column,c=0;return t.forEach(((e,a)=>{var n;const p=(null==(n=e.props)?void 0:n.span)||1;if(a<t.length-1&&(c+=p>o?o:p),a===t.length-1){const t=l.column-c%l.column;return r.push(i(e,t,o,!0)),void s.push(r)}p<o?(o-=p,r.push(e)):(r.push(i(e,p,o)),s.push(r),o=l.column,r=[])})),s};return(e,l)=>(f(),g("div",{class:x(v(r))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(f(),g("div",{key:0,class:x(v(t).e("header"))},[w("div",{class:x(v(t).e("title"))},[P(e.$slots,"title",{},(()=>[_(z(e.title),1)]))],2),w("div",{class:x(v(t).e("extra"))},[P(e.$slots,"extra",{},(()=>[_(z(e.extra),1)]))],2)],2)):I("v-if",!0),w("div",{class:x(v(t).e("body"))},[w("table",{class:x([v(t).e("table"),v(t).is("bordered",e.border)])},[w("tbody",null,[(f(!0),g(S,null,k(o(),((e,l)=>(f(),O(G,{key:l,row:e},null,8,["row"])))),128))])],2)],2)],2))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]),R=c({name:"ElDescriptionsItem",props:{label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}});const T=C(M,{DescriptionsItem:R}),V=W(R);export{V as E,T as a};