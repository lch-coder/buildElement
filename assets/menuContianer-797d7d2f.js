import{d as f,b7 as g,p as l,j as x,k,B as v,m as a,D as y,U as d,q as L,c as C,z as S,f as M,o as N}from"./index-5ef55067.js";const b={name:"MenuBox"},z=f({...b,props:{menuList:{default:[]},hierarchy:{default:100}},setup(i){const e=i;let r=e.menuList.slice(1),n=e.hierarchy+100;return(m,c)=>{var t;const s=g("menuBox",!0);return l(),x("div",{"p-4":"","m-2":"",class:L(`bg-purple-${a(n)}`)},[k("h2",null,v((t=e==null?void 0:e.menuList)==null?void 0:t[0].title),1),a(r).length>0?(l(),y(s,{key:0,"menu-list":a(r),hierarchy:a(n)},null,8,["menu-list","hierarchy"])):d("",!0)],2)}}}),D=f({__name:"menuContianer",setup(i){const e=C(),r=S(),n=M([]),m=(c,s)=>{let t=[],_=(h,o,p)=>{if(p.length!==0)for(let u of p){if(o.push(u),u.name===h){t=JSON.parse(JSON.stringify(o));return}const B=Array.isArray(u.children)?u.children:[];_(h,o,B),o.pop()}};return _(c,[],s),t};return N(()=>{n.value=m(r.name,e.menuList)}),(c,s)=>{const t=z;return n.value.length>0?(l(),y(t,{key:0,"menu-list":n.value,hierarchy:100},null,8,["menu-list"])):d("",!0)}}});export{D as _};