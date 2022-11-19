import{K as G,ac as R,E as $,c3 as Z,ar as A,b1 as B,F as w,b3 as X,b0 as Q,c4 as ee,b2 as te,aq as h,v as E,x as d,d as oe,h as ne,J as g,aL as le,a4 as F,B as se,aX as ae,b as C,at as ce,au as ue,C as ie,V as re,S as de,N as D,a9 as fe,c5 as k,_ as Y,G as L,L as me,i as _,O as pe,bd as v}from"./index.4f42a7a5.js";import{P as N}from"./vnode.41b11878.js";import{t as ye,U as z}from"./event.c507d8ad.js";import{u as P}from"./el-button.39cb793c.js";import{g as Ce}from"./scroll.0a04e903.js";import{b as ve,u as Ee}from"./index.f15024e9.js";const Ke=(...e)=>t=>{e.forEach(o=>{G(o)?o(t):o.value=t})},be=e=>{R(e)||ye("[useLockscreen]","You need to pass a ref param to this function");const t=$("popup"),o=Z(()=>t.bm("parent","hidden"));if(!A||B(document.body,o.value))return;let n=0,a=!1,c="0";const l=()=>{te(document.body,o.value),a&&(document.body.style.width=c)};w(e,f=>{if(!f){l();return}a=!B(document.body,o.value),a&&(c=document.body.style.width),n=Ce(t.namespace.value);const s=document.documentElement.clientHeight<document.body.scrollHeight,i=X(document.body,"overflowY");n>0&&(s||i==="scroll")&&a&&(document.body.style.width=`calc(100% - ${n}px)`),Q(document.body,o.value)}),ee(()=>l())},ge=e=>{if(!e)return{onClick:h,onMousedown:h,onMouseup:h};let t=!1,o=!1;return{onClick:l=>{t&&o&&e(l),t=o=!1},onMousedown:l=>{t=l.target===l.currentTarget},onMouseup:l=>{o=l.target===l.currentTarget}}},Ie=E({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:d([String,Array,Object])},zIndex:{type:d([String,Number])}}),Oe={click:e=>e instanceof MouseEvent};var Se=oe({name:"ElOverlay",props:Ie,emits:Oe,setup(e,{slots:t,emit:o}){const n=$("overlay"),a=s=>{o("click",s)},{onClick:c,onMousedown:l,onMouseup:f}=ge(e.customMaskEvent?void 0:a);return()=>e.mask?ne("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:c,onMousedown:l,onMouseup:f},[g(t,"default")],N.STYLE|N.CLASS|N.PROPS,["onClick","onMouseup","onMousedown"]):le("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[g(t,"default")])}});const Ve=Se,Te=E({center:{type:Boolean,default:!1},closeIcon:{type:F,default:""},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),je={close:()=>!0},He=E({...Te,appendToBody:{type:Boolean,default:!1},beforeClose:{type:d(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),Je={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[z]:e=>se(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ue=(e,t)=>{const n=fe().emit,{nextZIndex:a}=ae();let c="";const l=P(),f=P(),s=C(!1),i=C(!1),r=C(!1),u=C(e.zIndex||a());let y,p;const I=ce("namespace",ue),K=ie(()=>{const m={},b=`--${I.value}-dialog`;return e.fullscreen||(e.top&&(m[`${b}-margin-top`]=e.top),e.width&&(m[`${b}-width`]=re(e.width))),m});function V(){n("opened")}function j(){n("closed"),n(z,!1),e.destroyOnClose&&(r.value=!1)}function H(){n("close")}function M(){p==null||p(),y==null||y(),e.openDelay&&e.openDelay>0?{stop:y}=k(()=>x(),e.openDelay):x()}function O(){y==null||y(),p==null||p(),e.closeDelay&&e.closeDelay>0?{stop:p}=k(()=>T(),e.closeDelay):T()}function S(){function m(b){b||(i.value=!0,s.value=!1)}e.beforeClose?e.beforeClose(m):O()}function J(){e.closeOnClickModal&&S()}function x(){!A||(s.value=!0)}function T(){s.value=!1}function U(){n("openAutoFocus")}function W(){n("closeAutoFocus")}e.lockScroll&&be(s);function q(){e.closeOnPressEscape&&S()}return w(()=>e.modelValue,m=>{m?(i.value=!1,M(),r.value=!0,u.value=e.zIndex?u.value++:a(),de(()=>{n("open"),t.value&&(t.value.scrollTop=0)})):s.value&&O()}),w(()=>e.fullscreen,m=>{!t.value||(m?(c=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=c)}),D(()=>{e.modelValue&&(s.value=!0,r.value=!0,M())}),{afterEnter:V,afterLeave:j,beforeLeave:H,handleClose:S,onModalClick:J,close:O,doClose:T,onOpenAutoFocus:U,onCloseAutoFocus:W,onCloseRequested:q,titleId:l,bodyId:f,closed:i,style:K,rendered:r,visible:s,zIndex:u}},he={inheritAttrs:!1};function _e(e,t,o,n,a,c){return g(e.$slots,"default")}var Ne=Y(he,[["render",_e],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const we={name:"ElCollectionItem",inheritAttrs:!1};function Me(e,t,o,n,a,c){return g(e.$slots,"default")}var xe=Y(we,[["render",Me],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const Be="data-el-collection-item",ke=e=>{const t=`El${e}Collection`,o=`${t}Item`,n=Symbol(t),a=Symbol(o),c={...Ne,name:t,setup(){const f=C(null),s=new Map;L(n,{itemMap:s,getItems:()=>{const r=_(f);if(!r)return[];const u=Array.from(r.querySelectorAll(`[${Be}]`));return[...s.values()].sort((p,I)=>u.indexOf(p.ref)-u.indexOf(I.ref))},collectionRef:f})}},l={...xe,name:o,setup(f,{attrs:s}){const i=C(null),r=me(n,void 0);L(a,{collectionItemRef:i}),D(()=>{const u=_(i);u&&r.itemMap.set(u,{ref:u,...s})}),pe(()=>{const u=_(i);r.itemMap.delete(u)})}};return{COLLECTION_INJECTION_KEY:n,COLLECTION_ITEM_INJECTION_KEY:a,ElCollection:c,ElCollectionItem:l}},We=E({trigger:ve.trigger,effect:{...Ee.effect,default:"light"},type:{type:d(String)},placement:{type:d(String),default:"bottom"},popperOptions:{type:d(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:d([Number,String]),default:0},maxHeight:{type:d([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:d(Object)}}),qe=E({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:F}}),Ge=E({onKeydown:{type:d(Function)}}),Le=[v.down,v.pageDown,v.home],Pe=[v.up,v.pageUp,v.end],Re=[...Le,...Pe],{ElCollection:Ze,ElCollectionItem:Xe,COLLECTION_INJECTION_KEY:Qe,COLLECTION_ITEM_INJECTION_KEY:et}=ke("Dropdown");export{et as C,Ve as E,Re as F,Pe as L,je as a,He as b,Ke as c,Te as d,Je as e,ge as f,We as g,ke as h,Ze as i,qe as j,Be as k,Xe as l,Ge as m,Qe as n,Ue as u};