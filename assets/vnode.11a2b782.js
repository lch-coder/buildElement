import{bL as T,a6 as N,b1 as i,aQ as n,bM as o}from"./index.a4ce353d.js";var L=(E=>(E[E.TEXT=1]="TEXT",E[E.CLASS=2]="CLASS",E[E.STYLE=4]="STYLE",E[E.PROPS=8]="PROPS",E[E.FULL_PROPS=16]="FULL_PROPS",E[E.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",E[E.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",E[E.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",E[E.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",E[E.NEED_PATCH=512]="NEED_PATCH",E[E.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",E[E.HOISTED=-1]="HOISTED",E[E.BAIL=-2]="BAIL",E))(L||{});function p(E){return T(E)&&E.type===N}function _(E){return T(E)&&E.type===i}function R(E){return T(E)&&!p(E)&&!_(E)}const m=E=>{if(!T(E))return{};const A=E.props||{},e=(T(E.type)?E.type.props:void 0)||{},S={};return Object.keys(e).forEach(r=>{n(e[r],"default")&&(S[r]=e[r].default)}),Object.keys(A).forEach(r=>{S[o(r)]=A[r]}),S};export{L as P,R as a,m as g,p as i};