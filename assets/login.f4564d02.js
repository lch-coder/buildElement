import{d as h,u as w,a as g,b as v,c as y,r as V,o as k,e as C,f as t,g as e,w as o,h as m,i as b,j as I,p as S,k as A}from"./index.ff6b271a.js";import{E as D,a as U,b as N}from"./el-form-item.e283c414.js";import{E as R}from"./el-link.5faaec23.js";import{E as q}from"./el-checkbox.d47e0737.js";import{E as L}from"./el-button.d5325e02.js";import{_ as M}from"./plugin-vue_export-helper.f63bf49c.js";import"./error.0cc953a0.js";const T=u=>(S("data-v-0802c2aa"),u=u(),A(),u),j={class:"login"},P={"my-4":"","text-right":""},$=T(()=>t("div",{"text-center":"","pt-100px":""},[t("div",null,[t("span",{"font-600":"","text-4xl":"",class:"color-p"},"BulidAdmin")]),t("div",{"text-sm":"","mt-sm":"","mb-4xl":"",class:"color-s"},"\u57FA\u4E8E Vue3 + Ts + Element Plus \u7684\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF")],-1)),z={w328px:"",ma:""},G=m(" \u5FD8\u8BB0\u5BC6\u7801? "),H=m(" \u767B\u5F55 "),J=h({__name:"login",setup(u){const i=w(),_=g(),c=v();y();const s=V({username:"admin",password:"123456"}),f={username:{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},password:{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}},x=async()=>{let{data:l}=await b.get("/api/user/login");i.setUserInfo(l.data),await I(),c.push({path:_.permissionMenu})};return(l,a)=>{const p=L,d=D,n=U,B=q,E=R,F=N;return k(),C("div",j,[t("div",P,[e(p,{type:"text"})]),$,t("div",z,[e(F,{ref:"form$",model:s,rules:f},{default:o(()=>[e(n,{prop:"username"},{default:o(()=>[e(d,{modelValue:s.username,"onUpdate:modelValue":a[0]||(a[0]=r=>s.username=r),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D","prefix-icon":"i-ep-user"},null,8,["modelValue"])]),_:1}),e(n,{prop:"password"},{default:o(()=>[e(d,{modelValue:s.password,"onUpdate:modelValue":a[1]||(a[1]=r=>s.password=r),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",type:"password","prefix-icon":"i-ep-lock"},null,8,["modelValue"])]),_:1}),e(n,null,{default:o(()=>[e(B,{label:"\u81EA\u52A8\u767B\u5F55"}),e(E,{"ml-a":"",type:"primary",underline:!1},{default:o(()=>[G]),_:1})]),_:1}),e(n,null,{default:o(()=>[e(p,{type:"primary",style:{width:"100%"},onClick:x},{default:o(()=>[H]),_:1})]),_:1})]),_:1},8,["model"])])])}}}),ee=M(J,[["__scopeId","data-v-0802c2aa"]]);export{ee as default};
