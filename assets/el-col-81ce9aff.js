var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;import{G as p,K as o,aS as n,_ as b,d as c,a1 as f,N as d,M as m,a7 as y,aT as i,o as g,B as O,w as h,T as j,n as $,k as v,Q as N,R as x,V as w}from"./index-04568d02.js";const E=Symbol("rowContextKey"),P=p({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:o([Number,Object]),default:()=>n({})},sm:{type:o([Number,Object]),default:()=>n({})},md:{type:o([Number,Object]),default:()=>n({})},lg:{type:o([Number,Object]),default:()=>n({})},xl:{type:o([Number,Object]),default:()=>n({})}}),S=c((_=((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&u(e,a,t[a]);if(s)for(var a of s(t))l.call(t,a)&&u(e,a,t[a]);return e})({},{name:"ElCol"}),t(_,a({props:P,setup(e){const t=e,{gutter:a}=f(E,{gutter:d((()=>0))}),s=m("col"),r=d((()=>{const e={};return a.value&&(e.paddingLeft=e.paddingRight=a.value/2+"px"),e})),l=d((()=>{const e=[];return["span","offset","pull","push"].forEach((a=>{const r=t[a];y(r)&&("span"===a?e.push(s.b(`${t[a]}`)):r>0&&e.push(s.b(`${a}-${t[a]}`)))})),["xs","sm","md","lg","xl"].forEach((a=>{y(t[a])?e.push(s.b(`${a}-${t[a]}`)):i(t[a])&&Object.entries(t[a]).forEach((([t,r])=>{e.push("span"!==t?s.b(`${a}-${t}-${r}`):s.b(`${a}-${r}`))}))})),a.value&&e.push(s.is("guttered")),e}));return(e,t)=>(g(),O(x(e.tag),{class:$([v(s).b(),v(l)]),style:N(v(r))},{default:h((()=>[j(e.$slots,"default")])),_:3},8,["class","style"]))}}))));var _;const k=w(b(S,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]));export{k as E,E as r};