import{a0 as G,m as R,u as $,ce as Z,i as A,b7 as k,X as w,j as Q,k as X,cf as ee,e as te,aA as S,P as E,Q as d,q as oe,d as ne,_ as I,h as le,ah as D,U as se,g as ae,r as C,aB as ce,aC as ue,V as ie,a8 as re,n as de,B as F,am as fe,cg as x,$ as Y,Y as L,a1 as me,G as _,C as pe,bh as v}from"./index.08e4fe22.js";import{P as N}from"./vnode.630c07c6.js";import{t as ye,U as z}from"./event.c507d8ad.js";import{u as P}from"./el-button.6afbbb0e.js";import{g as Ce}from"./scroll.e2ef7611.js";import{b as ve,u as Ee}from"./index.1bacf6ae.js";const je=(...e)=>t=>{e.forEach(o=>{G(o)?o(t):o.value=t})},ge=e=>{R(e)||ye("[useLockscreen]","You need to pass a ref param to this function");const t=$("popup"),o=Z(()=>t.bm("parent","hidden"));if(!A||k(document.body,o.value))return;let n=0,a=!1,c="0";const l=()=>{te(document.body,o.value),a&&(document.body.style.width=c)};w(e,f=>{if(!f){l();return}a=!k(document.body,o.value),a&&(c=document.body.style.width),n=Ce(t.namespace.value);const s=document.documentElement.clientHeight<document.body.scrollHeight,i=Q(document.body,"overflowY");n>0&&(s||i==="scroll")&&a&&(document.body.style.width=`calc(100% - ${n}px)`),X(document.body,o.value)}),ee(()=>l())},Ie=e=>{if(!e)return{onClick:S,onMousedown:S,onMouseup:S};let t=!1,o=!1;return{onClick:l=>{t&&o&&e(l),t=o=!1},onMousedown:l=>{t=l.target===l.currentTarget},onMouseup:l=>{o=l.target===l.currentTarget}}},be=E({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:d([String,Array,Object])},zIndex:{type:d([String,Number])}}),Oe={click:e=>e instanceof MouseEvent};var he=oe({name:"ElOverlay",props:be,emits:Oe,setup(e,{slots:t,emit:o}){const n=$("overlay"),a=s=>{o("click",s)},{onClick:c,onMousedown:l,onMouseup:f}=Ie(e.customMaskEvent?void 0:a);return()=>e.mask?ne("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:c,onMousedown:l,onMouseup:f},[I(t,"default")],N.STYLE|N.CLASS|N.PROPS,["onClick","onMouseup","onMousedown"]):le("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[I(t,"default")])}});const Ke=he,Te=E({center:{type:Boolean,default:!1},closeIcon:{type:D,default:""},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Ve={close:()=>!0},Ue=E({...Te,appendToBody:{type:Boolean,default:!1},beforeClose:{type:d(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),He={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[z]:e=>se(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Je=(e,t)=>{const n=fe().emit,{nextZIndex:a}=ae();let c="";const l=P(),f=P(),s=C(!1),i=C(!1),r=C(!1),u=C(e.zIndex||a());let y,p;const b=ce("namespace",ue),j=ie(()=>{const m={},g=`--${b.value}-dialog`;return e.fullscreen||(e.top&&(m[`${g}-margin-top`]=e.top),e.width&&(m[`${g}-width`]=re(e.width))),m});function K(){n("opened")}function V(){n("closed"),n(z,!1),e.destroyOnClose&&(r.value=!1)}function U(){n("close")}function M(){p==null||p(),y==null||y(),e.openDelay&&e.openDelay>0?{stop:y}=x(()=>B(),e.openDelay):B()}function O(){y==null||y(),p==null||p(),e.closeDelay&&e.closeDelay>0?{stop:p}=x(()=>T(),e.closeDelay):T()}function h(){function m(g){g||(i.value=!0,s.value=!1)}e.beforeClose?e.beforeClose(m):O()}function H(){e.closeOnClickModal&&h()}function B(){!A||(s.value=!0)}function T(){s.value=!1}function J(){n("openAutoFocus")}function W(){n("closeAutoFocus")}e.lockScroll&&ge(s);function q(){e.closeOnPressEscape&&h()}return w(()=>e.modelValue,m=>{m?(i.value=!1,M(),r.value=!0,u.value=e.zIndex?u.value++:a(),de(()=>{n("open"),t.value&&(t.value.scrollTop=0)})):s.value&&O()}),w(()=>e.fullscreen,m=>{!t.value||(m?(c=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=c)}),F(()=>{e.modelValue&&(s.value=!0,r.value=!0,M())}),{afterEnter:K,afterLeave:V,beforeLeave:U,handleClose:h,onModalClick:H,close:O,doClose:T,onOpenAutoFocus:J,onCloseAutoFocus:W,onCloseRequested:q,titleId:l,bodyId:f,closed:i,style:j,rendered:r,visible:s,zIndex:u}},Se={inheritAttrs:!1};function _e(e,t,o,n,a,c){return I(e.$slots,"default")}var Ne=Y(Se,[["render",_e],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const we={name:"ElCollectionItem",inheritAttrs:!1};function Me(e,t,o,n,a,c){return I(e.$slots,"default")}var Be=Y(we,[["render",Me],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const ke="data-el-collection-item",xe=e=>{const t=`El${e}Collection`,o=`${t}Item`,n=Symbol(t),a=Symbol(o),c={...Ne,name:t,setup(){const f=C(null),s=new Map;L(n,{itemMap:s,getItems:()=>{const r=_(f);if(!r)return[];const u=Array.from(r.querySelectorAll(`[${ke}]`));return[...s.values()].sort((p,b)=>u.indexOf(p.ref)-u.indexOf(b.ref))},collectionRef:f})}},l={...Be,name:o,setup(f,{attrs:s}){const i=C(null),r=me(n,void 0);L(a,{collectionItemRef:i}),F(()=>{const u=_(i);u&&r.itemMap.set(u,{ref:u,...s})}),pe(()=>{const u=_(i);r.itemMap.delete(u)})}};return{COLLECTION_INJECTION_KEY:n,COLLECTION_ITEM_INJECTION_KEY:a,ElCollection:c,ElCollectionItem:l}},We=E({trigger:ve.trigger,effect:{...Ee.effect,default:"light"},type:{type:d(String)},placement:{type:d(String),default:"bottom"},popperOptions:{type:d(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:d([Number,String]),default:0},maxHeight:{type:d([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:d(Object)}}),qe=E({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:D}}),Ge=E({onKeydown:{type:d(Function)}}),Le=[v.down,v.pageDown,v.home],Pe=[v.up,v.pageUp,v.end],Re=[...Le,...Pe],{ElCollection:Ze,ElCollectionItem:Qe,COLLECTION_INJECTION_KEY:Xe,COLLECTION_ITEM_INJECTION_KEY:et}=xe("Dropdown");export{et as C,Ke as E,Re as F,Pe as L,Ve as a,Ue as b,je as c,Te as d,He as e,Ie as f,We as g,xe as h,Ze as i,qe as j,ke as k,Qe as l,Ge as m,Xe as n,Je as u};