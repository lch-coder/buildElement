import{d as f,aU as B,o as i,g,h as x,af as v,j as u,a8 as y,a5 as d,n as k,a as C,aI as S,c as N,a0 as M}from"./index.a4ce353d.js";const A={name:"menuBox"},J=f({...A,props:{menuList:{default:[]},hierarchy:{default:100}},setup(l){const e=l;let r=e.menuList.slice(1),t=e.hierarchy+100;return(m,c)=>{var n;const s=B("menuBox",!0);return i(),g("div",{"p-4":"","m-2":"",class:k(`bg-purple-${u(t)}`)},[x("h2",null,v((n=e==null?void 0:e.menuList)==null?void 0:n[0].title),1),u(r).length>0?(i(),y(s,{key:0,menuList:u(r),hierarchy:u(t)},null,8,["menuList","hierarchy"])):d("",!0)],2)}}}),V=f({__name:"menuContianer",setup(l){const e=C(),r=S(),t=N([]),m=(c,s)=>{let n=[],_=(h,a,p)=>{if(p.length!==0)for(let o of p){if(a.push(o),o.name===h){n=JSON.parse(JSON.stringify(a));return}const L=Array.isArray(o.children)?o.children:[];_(h,a,L),a.pop()}};return _(c,[],s),n};return M(()=>{t.value=m(r.name,e.menuList)}),(c,s)=>{const n=J;return t.value.length>0?(i(),y(n,{key:0,menuList:t.value,hierarchy:100},null,8,["menuList"])):d("",!0)}}});export{V as _};