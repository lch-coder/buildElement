var e=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(s,a,t)=>a in s?e(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;import{I as r,bd as c,_ as i,d as p,ac as u,O as f,P as d,m as b,i as m,j as y,V as g,n as k,l as v,D as O,w as h,k as j,aW as C,ah as w,R as P,U as S,S as _,aI as E,X as B}from"./index-66553315.js";const I=r({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:c,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),T={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},$=p((x=((e,s)=>{for(var a in s||(s={}))o.call(s,a)&&n(e,a,s[a]);if(t)for(var a of t(s))l.call(s,a)&&n(e,a,s[a]);return e})({},{name:"ElTag"}),s(x,a({props:I,emits:T,setup(e,{emit:s}){const a=e,t=u(),o=f("tag"),l=d((()=>{const{type:e,hit:s,effect:l,closable:n,round:r}=a;return[o.b(),o.is("closable",n),o.m(e),o.m(t.value),o.m(l),o.is("hit",s),o.is("round",r)]})),n=e=>{s("close",e)},r=e=>{s("click",e)};return(e,s)=>e.disableTransitions?(b(),m("span",{key:0,class:k(v(l)),style:_({backgroundColor:e.color}),onClick:r},[y("span",{class:k(v(o).e("content"))},[g(e.$slots,"default")],2),e.closable?(b(),O(v(P),{key:0,class:k(v(o).e("close")),onClick:w(n,["stop"])},{default:h((()=>[j(v(C))])),_:1},8,["class","onClick"])):S("v-if",!0)],6)):(b(),O(E,{key:1,name:`${v(o).namespace.value}-zoom-in-center`,appear:""},{default:h((()=>[y("span",{class:k(v(l)),style:_({backgroundColor:e.color}),onClick:r},[y("span",{class:k(v(o).e("content"))},[g(e.$slots,"default")],2),e.closable?(b(),O(v(P),{key:0,class:k(v(o).e("close")),onClick:w(n,["stop"])},{default:h((()=>[j(v(C))])),_:1},8,["class","onClick"])):S("v-if",!0)],6)])),_:3},8,["name"]))}}))));var x;const z=B(i($,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]));export{z as E,I as t};
