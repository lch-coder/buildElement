var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,o,l)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[o]=l,u=(e,t)=>{for(var o in t||(t={}))a.call(t,o)&&s(e,o,t[o]);if(l)for(var o of l(t))n.call(t,o)&&s(e,o,t[o]);return e},r=(e,l)=>t(e,o(l));import{aR as c,G as i,I as p,K as d,a5 as f,a8 as y,ar as m,c8 as b,ah as C,c as O,cE as g,cF as v,N as I,O as E,cG as N,am as S,ag as h,ak as B,cm as w,b3 as T,_,T as x,Y as k,a1 as j,k as D,aU as F,a3 as L}from"./index-49e2bcdc.js";import{a as A,u as M}from"./index-b3a1827a.js";const P=(...e)=>t=>{e.forEach((e=>{c(e)?e(t):e.value=t}))},$=i({center:{type:Boolean,default:!1},closeIcon:{type:p,default:""},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),K={close:()=>!0},z=i(r(u({},$),{appendToBody:{type:Boolean,default:!1},beforeClose:{type:d(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}})),R={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[f]:e=>y(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Y=(e,t)=>{const o=m().emit,{nextZIndex:l}=b();let a="";const n=C(),s=C(),u=O(!1),r=O(!1),c=O(!1),i=O(e.zIndex||l());let p,d;const y=g("namespace",v),_=I((()=>{const t={},o=`--${y.value}-dialog`;return e.fullscreen||(e.top&&(t[`${o}-margin-top`]=e.top),e.width&&(t[`${o}-width`]=E(e.width))),t}));function x(){null==d||d(),null==p||p(),e.openDelay&&e.openDelay>0?({stop:p}=w((()=>D()),e.openDelay)):D()}function k(){null==p||p(),null==d||d(),e.closeDelay&&e.closeDelay>0?({stop:d}=w((()=>F()),e.closeDelay)):F()}function j(){e.beforeClose?e.beforeClose((function(e){e||(r.value=!0,u.value=!1)})):k()}function D(){T&&(u.value=!0)}function F(){u.value=!1}return e.lockScroll&&N(u),S((()=>e.modelValue),(a=>{a?(r.value=!1,x(),c.value=!0,i.value=e.zIndex?i.value++:l(),h((()=>{o("open"),t.value&&(t.value.scrollTop=0)}))):u.value&&k()})),S((()=>e.fullscreen),(e=>{t.value&&(e?(a=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=a)})),B((()=>{e.modelValue&&(u.value=!0,c.value=!0,x())})),{afterEnter:function(){o("opened")},afterLeave:function(){o("closed"),o(f,!1),e.destroyOnClose&&(c.value=!1)},beforeLeave:function(){o("close")},handleClose:j,onModalClick:function(){e.closeOnClickModal&&j()},close:k,doClose:F,onOpenAutoFocus:function(){o("openAutoFocus")},onCloseAutoFocus:function(){o("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&j()},titleId:n,bodyId:s,closed:r,style:_,rendered:c,visible:u,zIndex:i}};var J=_({inheritAttrs:!1},[["render",function(e,t,o,l,a,n){return x(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);var V=_({name:"ElCollectionItem",inheritAttrs:!1},[["render",function(e,t,o,l,a,n){return x(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const q="data-el-collection-item",G=e=>{const t=`El${e}Collection`,o=`${t}Item`,l=Symbol(t),a=Symbol(o),n=r(u({},J),{name:t,setup(){const e=O(null),t=new Map;k(l,{itemMap:t,getItems:()=>{const o=D(e);if(!o)return[];const l=Array.from(o.querySelectorAll("[data-el-collection-item]"));return[...t.values()].sort(((e,t)=>l.indexOf(e.ref)-l.indexOf(t.ref)))},collectionRef:e})}}),s=r(u({},V),{name:o,setup(e,{attrs:t}){const o=O(null),n=j(l,void 0);k(a,{collectionItemRef:o}),B((()=>{const e=D(o);e&&n.itemMap.set(e,u({ref:e},t))})),F((()=>{const e=D(o);n.itemMap.delete(e)}))}});return{COLLECTION_INJECTION_KEY:l,COLLECTION_ITEM_INJECTION_KEY:a,ElCollection:n,ElCollectionItem:s}},U=i({trigger:A.trigger,effect:r(u({},M.effect),{default:"light"}),type:{type:d(String)},placement:{type:d(String),default:"bottom"},popperOptions:{type:d(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:d([Number,String]),default:0},maxHeight:{type:d([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:d(Object)}}),H=i({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:p}}),Z=i({onKeydown:{type:d(Function)}}),Q=[L.down,L.pageDown,L.home],W=[L.up,L.pageUp,L.end],X=[...Q,...W],{ElCollection:ee,ElCollectionItem:te,COLLECTION_INJECTION_KEY:oe,COLLECTION_ITEM_INJECTION_KEY:le}=G("Dropdown");export{le as C,ee as E,X as F,W as L,K as a,z as b,P as c,$ as d,R as e,U as f,G as g,H as h,q as i,te as j,Z as k,oe as l,Y as u};