var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,i=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;import{d as n,b as o,o as s,P as c,a as d,w as p,Q as f,W as b,R as m,ax as h,a2 as v,X as y}from"./element-plus-a36eb16e.js";import{b as _}from"./index-d08f8f0f.js";const O=f("div",null,"Tab Home",-1),w=b("跳转Tab Detail"),j=b("跳转Tab Multi Detail 1"),D=b("跳转Tab Multi Detail 2"),P=f("div",null,"测试缓存",-1),g=b("全局刷新"),x=n((H=((e,a)=>{for(var t in a||(a={}))l.call(a,t)&&i(e,t,a[t]);if(r)for(var t of r(a))u.call(a,t)&&i(e,t,a[t]);return e})({},{name:"Tab"}),a(H,t({setup(e){const a=_(),t=o("默认内容"),r=()=>{a.replace({path:"/redirect"+a.currentRoute.value.path,query:a.currentRoute.value.query})};function l(){a.push({path:"/function/tab-detail",query:{name:"abc"},hash:"#DEMO_HASH"})}function u(e){a.push({path:"/function/tab-multi-detail",query:{name:"abc",num:e},hash:"#DEMO_HASH"})}return(e,a)=>{const i=m,n=h,o=v,f=y;return s(),c("div",null,[d(n,{direction:"vertical","m-2":""},{default:p((()=>[d(o,{class:"shadow-sm rounded-16px","w-100":""},{header:p((()=>[O])),default:p((()=>[d(n,{direction:"vertical",size:12,alignment:"left"},{default:p((()=>[d(i,{onClick:l},{default:p((()=>[w])),_:1}),d(i,{onClick:a[0]||(a[0]=e=>u(1))},{default:p((()=>[j])),_:1}),d(i,{onClick:a[1]||(a[1]=e=>u(2))},{default:p((()=>[D])),_:1})])),_:1})])),_:1})])),_:1}),d(n,{direction:"vertical","m-2":""},{default:p((()=>[d(o,{class:"shadow-sm rounded-16px","w-100":""},{header:p((()=>[P])),default:p((()=>[d(n,{direction:"vertical",size:12},{default:p((()=>[d(f,{modelValue:t.value,"onUpdate:modelValue":a[2]||(a[2]=e=>t.value=e)},null,8,["modelValue"]),d(i,{icon:"i-ep-refresh-right",onClick:r},{default:p((()=>[g])),_:1})])),_:1})])),_:1})])),_:1})])}}}))));var H;export{x as default};
