var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=Math.pow,n=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{I as i,_ as u,d as c,a3 as v,O as m,ax as f,c as p,P as d,h,cc as y,aM as b,m as g,D as w,w as S,ae as z,aN as x,j as _,n as E,l as k,S as T,aI as L,b3 as O,i as j,k as H,F as $,M as B,a9 as C,Q as M,an as N,b0 as P,ai as X,$ as A,r as R,o as W,bg as Y,V as I,T as D,U as K,aU as U,X as q}from"./index-66553315.js";const F=Symbol("scrollbarContextKey"),Q={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}};var V=u(c({__name:"thumb",props:i({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),setup(e){const a=e,l=v(F),t=m("scrollbar");l||f("Thumb","can not inject scrollbar context");const r=p(),s=p(),n=p({}),i=p(!1);let u=!1,c=!1,j=O?document.onselectstart:null;const H=d((()=>Q[a.vertical?"vertical":"horizontal"])),$=d((()=>(({move:e,size:a,bar:l})=>({[l.size]:a,transform:`translate${l.axis}(${e}%)`}))({size:a.size,move:a.move,bar:H.value}))),B=d((()=>o(r.value[H.value.offset],2)/l.wrapElement[H.value.scrollSize]/a.ratio/s.value[H.value.offset])),C=e=>{var a;if(e.stopPropagation(),e.ctrlKey||[1,2].includes(e.button))return;null==(a=window.getSelection())||a.removeAllRanges(),N(e);const l=e.currentTarget;l&&(n.value[H.value.axis]=l[H.value.offset]-(e[H.value.client]-l.getBoundingClientRect()[H.value.direction]))},M=e=>{if(!s.value||!r.value||!l.wrapElement)return;const a=100*(Math.abs(e.target.getBoundingClientRect()[H.value.direction]-e[H.value.client])-s.value[H.value.offset]/2)*B.value/r.value[H.value.offset];l.wrapElement[H.value.scroll]=a*l.wrapElement[H.value.scrollSize]/100},N=e=>{e.stopImmediatePropagation(),u=!0,document.addEventListener("mousemove",P),document.addEventListener("mouseup",X),j=document.onselectstart,document.onselectstart=()=>!1},P=e=>{if(!r.value||!s.value)return;if(!1===u)return;const a=n.value[H.value.axis];if(!a)return;const t=100*(-1*(r.value.getBoundingClientRect()[H.value.direction]-e[H.value.client])-(s.value[H.value.offset]-a))*B.value/r.value[H.value.offset];l.wrapElement[H.value.scroll]=t*l.wrapElement[H.value.scrollSize]/100},X=()=>{u=!1,n.value[H.value.axis]=0,document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",X),A(),c&&(i.value=!1)};h((()=>{A(),document.removeEventListener("mouseup",X)}));const A=()=>{document.onselectstart!==j&&(document.onselectstart=j)};return y(b(l,"scrollbarElement"),"mousemove",(()=>{c=!1,i.value=!!a.size})),y(b(l,"scrollbarElement"),"mouseleave",(()=>{c=!0,i.value=u})),(e,a)=>(g(),w(L,{name:k(t).b("fade"),persisted:""},{default:S((()=>[z(_("div",{ref_key:"instance",ref:r,class:E([k(t).e("bar"),k(t).is(k(H).key)]),onMousedown:M},[_("div",{ref_key:"thumb",ref:s,class:E(k(t).e("thumb")),style:T(k($)),onMousedown:C},null,38)],34),[[x,e.always||i.value]])])),_:1},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);var G=u(c({__name:"bar",props:i({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),setup(e,{expose:a}){const l=e,t=p(0),r=p(0);return a({handleScroll:e=>{if(e){const a=e.offsetHeight-4,s=e.offsetWidth-4;r.value=100*e.scrollTop/a*l.ratioY,t.value=100*e.scrollLeft/s*l.ratioX}}}),(e,a)=>(g(),j($,null,[H(V,{move:t.value,ratio:e.ratioX,size:e.width,always:e.always},null,8,["move","ratio","size","always"]),H(V,{move:r.value,ratio:e.ratioY,size:e.height,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const J=i({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:Boolean,wrapStyle:{type:B([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),Z={scroll:({scrollTop:e,scrollLeft:a})=>[e,a].every(C)},ee=c((ae=((e,a)=>{for(var l in a||(a={}))r.call(a,l)&&n(e,l,a[l]);if(t)for(var l of t(a))s.call(a,l)&&n(e,l,a[l]);return e})({},{name:"ElScrollbar"}),a(ae,l({props:J,emits:Z,setup(e,{expose:a,emit:l}){const t=e,r=m("scrollbar");let s,n;const i=p(),u=p(),c=p(),v=p("0"),f=p("0"),h=p(),b=p(1),z=p(1),x=d((()=>{const e={};return t.height&&(e.height=M(t.height)),t.maxHeight&&(e.maxHeight=M(t.maxHeight)),[t.wrapStyle,e]})),L=()=>{var e;u.value&&(null==(e=h.value)||e.handleScroll(u.value),l("scroll",{scrollTop:u.value.scrollTop,scrollLeft:u.value.scrollLeft}))},O=()=>{if(!u.value)return;const e=u.value.offsetHeight-4,a=u.value.offsetWidth-4,l=o(e,2)/u.value.scrollHeight,r=o(a,2)/u.value.scrollWidth,s=Math.max(l,t.minSize),n=Math.max(r,t.minSize);b.value=l/(e-l)/(s/(e-s)),z.value=r/(a-r)/(n/(a-n)),f.value=s+4<e?`${s}px`:"",v.value=n+4<a?`${n}px`:""};return N((()=>t.noresize),(e=>{e?(null==s||s(),null==n||n()):(({stop:s}=P(c,O)),n=y("resize",O))}),{immediate:!0}),N((()=>[t.maxHeight,t.height]),(()=>{t.native||X((()=>{var e;O(),u.value&&(null==(e=h.value)||e.handleScroll(u.value))}))})),A(F,R({scrollbarElement:i,wrapElement:u})),W((()=>{t.native||X((()=>{O()}))})),Y((()=>O())),a({wrap$:u,update:O,scrollTo:function(e,a){U(e)?u.value.scrollTo(e):C(e)&&C(a)&&u.value.scrollTo(e,a)},setScrollTop:e=>{C(e)&&(u.value.scrollTop=e)},setScrollLeft:e=>{C(e)&&(u.value.scrollLeft=e)},handleScroll:L}),(e,a)=>(g(),j("div",{ref_key:"scrollbar$",ref:i,class:E(k(r).b())},[_("div",{ref_key:"wrap$",ref:u,class:E([e.wrapClass,k(r).e("wrap"),{[k(r).em("wrap","hidden-default")]:!e.native}]),style:T(k(x)),onScroll:L},[(g(),w(D(e.tag),{ref_key:"resize$",ref:c,class:E([k(r).e("view"),e.viewClass]),style:T(e.viewStyle)},{default:S((()=>[I(e.$slots,"default")])),_:3},8,["class","style"]))],38),e.native?K("v-if",!0):(g(),w(G,{key:0,ref_key:"barRef",ref:h,height:f.value,width:v.value,always:e.always,"ratio-x":z.value,"ratio-y":b.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}}))));var ae;const le=q(u(ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]));export{le as E};
