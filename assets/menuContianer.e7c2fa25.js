import{q as f,b5 as x,G as l,C as g,D as v,ab as C,F as u,aa as y,ae as d,H as L,x as S,aS as k,r as M,A as N}from"./index.fdf57956.js";const b={name:"MenuBox"},A=f({...b,props:{menuList:{default:[]},hierarchy:{default:100}},setup(i){const e=i;let r=e.menuList.slice(1),n=e.hierarchy+100;return(m,c)=>{var t;const s=x("menuBox",!0);return l(),g("div",{"p-4":"","m-2":"",class:L(`bg-purple-${u(n)}`)},[v("h2",null,C((t=e==null?void 0:e.menuList)==null?void 0:t[0].title),1),u(r).length>0?(l(),y(s,{key:0,"menu-list":u(r),hierarchy:u(n)},null,8,["menu-list","hierarchy"])):d("",!0)],2)}}}),H=f({__name:"menuContianer",setup(i){const e=S(),r=k(),n=M([]),m=(c,s)=>{let t=[],_=(h,a,p)=>{if(p.length!==0)for(let o of p){if(a.push(o),o.name===h){t=JSON.parse(JSON.stringify(a));return}const B=Array.isArray(o.children)?o.children:[];_(h,a,B),a.pop()}};return _(c,[],s),t};return N(()=>{n.value=m(r.name,e.menuList)}),(c,s)=>{const t=A;return n.value.length>0?(l(),y(t,{key:0,"menu-list":n.value,hierarchy:100},null,8,["menu-list"])):d("",!0)}}});export{H as _};