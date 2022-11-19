import{d as g,o as n,f as v,h as u,w as e,k as o,Y as a,i as b,R as E,aK as _,g as D,X as F}from"./index.4f42a7a5.js";import{E as y,a as C}from"./el-descriptions-item.acc0c5c3.js";/* empty css               */import{E as x}from"./el-card.7ef0ff31.js";import{E as B}from"./index.84ded2e5.js";import"./vnode.41b11878.js";const A="build-element",j="0.0.1",k={dev:"vite",build:"vue-tsc --noEmit && vite build",preview:"vite preview --port 8888",eslint:"eslint src --fix --ext .js,.ts,.jsx,.tsx,.vue"},h={"@better-scroll/core":"^2.4.2","@erkelost/utils":"^1.0.2","@iconify/tools":"^2.1.0","@iconify/utils":"^2.0.1","@types/ua-parser-js":"^0.7.36","@unocss/reset":"^0.44.4","@vueuse/core":"^8.9.4",axios:"^0.27.2","css-color-function":"^1.3.3",dayjs:"^1.11.5","element-plus":"^2.2.8","file-saver":"^2.0.5","lodash-es":"^4.17.21",nprogress:"^0.2.0",pinia:"^2.0.14","pinia-plugin-persistedstate":"^1.6.1",rollup:"^2.78.1","ua-parser-js":"^1.0.2","vite-plugin-pwa":"^0.12.2",vue:"^3.2.25","vue-router":"^4.0.16",xlsx:"^0.18.5","xlsx-style-vite":"^0.0.1"},w={"@babel/core":"^7.18.6","@babel/eslint-parser":"^7.18.2","@iconify-json/ep":"^1.1.6","@iconify/json":"^2.1.106","@plugin-web-update-notification/vite":"^0.5.2","@types/file-saver":"^2.0.5","@types/lodash-es":"^4.17.6","@types/node":"^18.0.0","@types/nprogress":"^0.2.0","@typescript-eslint/eslint-plugin":"^5.38.1","@typescript-eslint/parser":"^5.38.1","@vitejs/plugin-vue":"^2.3.3","@vitejs/plugin-vue-jsx":"^1.3.10","@vue/eslint-config-prettier":"^7.0.0",eslint:"^8.22.0","eslint-config-prettier":"^8.5.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-vue":"^9.5.1",mockjs:"^1.1.0",prettier:"^2.7.1","rollup-plugin-visualizer":"^5.8.3",sass:"^1.53.0",typescript:"^4.5.4",unocss:"^0.43.0","unplugin-auto-import":"^0.9.2","unplugin-vue-components":"0.22.4",vite:"^3.1.7","vite-plugin-eslint":"^1.8.1","vite-plugin-mock":"^2.9.6","vite-plugin-vue-setup-extend":"^0.4.0","vue-global-api":"^0.4.1","vue-tsc":"^0.34.7"},p={name:A,private:!0,version:j,scripts:k,dependencies:h,devDependencies:w},V={"m-4":""},T=D("p",null," Build Element \u662F\u4E00\u4E2A\u57FA\u4E8E Vue3\u3001Vite\u3001Element-Plus\u3001TypeScript\u3001Pinia\u7684\u4E2D\u540E\u53F0\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u4F7F\u7528\u4E86\u6700\u65B0\u7684\u524D\u7AEF\u6280\u672F\u6808\uFF0C\u5E76\u63D0\u70BC\u4E86\u5178\u578B\u7684\u4E1A\u52A1\u6A21\u578B\uFF0C\u9875\u9762\uFF0C\u5305\u62EC\u4E8C\u6B21\u5C01\u88C5\u7EC4\u4EF6\u3001\u52A8\u6001\u83DC\u5355\u3001\u6743\u9650\u6821\u9A8C\u3001\u7C92\u5B50\u5316\u6743\u9650\u63A7\u5236\u7B49\u529F\u80FD\uFF0C\u53EF\u4EE5\u5FEB\u901F\u642D\u5EFA\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u9879\u76EE\u3002 ",-1),K=g({__name:"index",setup(N){const c={name:p.name,version:p.version,dependencies:Object.entries(p.dependencies).map(i=>{const[r,t]=i;return{name:r,version:t}}),devDependencies:Object.entries(p.devDependencies).map(i=>{const[r,t]=i;return{name:r,version:t}})},f="2022-11-19 14:00:01";return(i,r)=>{const t=x,m=B,l=y,d=C;return n(),v("div",V,[u(t,{header:"\u5173\u4E8E","mb-2":""},{default:e(()=>[T]),_:1}),u(t,{header:"\u9879\u76EE\u4FE1\u606F","mb-2":""},{default:e(()=>[u(d,{border:""},{default:e(()=>[u(l,{label:"\u7248\u672C"},{default:e(()=>[u(m,null,{default:e(()=>[o(a(c.version),1)]),_:1})]),_:1}),u(l,{label:"\u6253\u5305\u65F6\u95F4"},{default:e(()=>[u(m,null,{default:e(()=>[o(a(b(f)),1)]),_:1})]),_:1})]),_:1})]),_:1}),u(t,{header:"\u751F\u4EA7\u73AF\u5883\u4F9D\u8D56","mb-2":""},{default:e(()=>[u(d,{border:""},{default:e(()=>[(n(!0),v(E,null,_(c.dependencies,s=>(n(),F(l,{key:s.name,label:s.name},{default:e(()=>[o(a(s.version),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),u(t,{header:"\u5F00\u53D1\u73AF\u5883\u4F9D\u8D56","mb-2":""},{default:e(()=>[u(d,{border:""},{default:e(()=>[(n(!0),v(E,null,_(c.devDependencies,s=>(n(),F(l,{key:s.name,label:s.name},{default:e(()=>[o(a(s.version),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})])}}});export{K as default};