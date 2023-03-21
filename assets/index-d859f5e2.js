var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,r=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&n(e,t,a[t]);if(l)for(var t of l(a))o.call(a,t)&&n(e,t,a[t]);return e},i=(e,l)=>a(e,t(l)),u=(e,a,t)=>new Promise(((l,s)=>{var o=e=>{try{r(t.next(e))}catch(a){s(a)}},n=e=>{try{r(t.throw(e))}catch(a){s(a)}},r=e=>e.done?l(e.value):Promise.resolve(e.value).then(o,n);r((t=t.apply(e,a)).next())}));import{G as c,K as d,aS as p,_ as b,d as v,ar as m,a1 as f,aw as y,M as h,c as g,am as P,ag as x,b0 as T,o as w,h as k,n as N,k as $,Q as B,bj as C,bk as S,bl as _,bm as j,N as O,ak as E,bg as R,j as F,P as A,aO as V,aP as K,aW as L,a3 as M,r as D,as as q,Y as z,bn as G,T as I,a5 as U,aG as W,a6 as Y,a7 as H,aK as Q,bo as X,bp as J,ac as Z,aM as ee,S as ae,V as te,ao as le,w as se}from"./index-07ab5625.js";import oe from"./lineDemo-ccb42142.js";import ne from"./pieDemo-5ce13be0.js";import{_ as re}from"./plugin-vue_export-helper-1b428a4d.js";const ie=Symbol("tabsRootContextKey"),ue=c({tabs:{type:d(Array),default:()=>p([])}});var ce=b(v(i(r({},{name:"ElTabBar"}),{props:ue,setup(e,{expose:a}){const t=e,l=m(),s=f(ie);s||y("ElTabBar","<el-tabs><el-tab-bar /></el-tabs>");const o=h("tabs"),n=g(),r=g(),i=()=>r.value=(()=>{let e=0,a=0;const o=["top","bottom"].includes(s.props.tabPosition)?"width":"height",n="width"===o?"x":"y";return t.tabs.every((s=>{var r,i,u,c;const d=null==(i=null==(r=l.parent)?void 0:r.refs)?void 0:i[`tab-${s.paneName}`];if(!d)return!1;if(!s.active)return!0;a=d[`client${C(o)}`];const p="x"===n?"left":"top";e=d.getBoundingClientRect()[p]-(null!=(c=null==(u=d.parentElement)?void 0:u.getBoundingClientRect()[p])?c:0);const b=window.getComputedStyle(d);return"width"===o&&(t.tabs.length>1&&(a-=Number.parseFloat(b.paddingLeft)+Number.parseFloat(b.paddingRight)),e+=Number.parseFloat(b.paddingLeft)),!1})),{[o]:`${a}px`,transform:`translate${C(n)}(${e}px)`}})();return P((()=>t.tabs),(()=>u(this,null,(function*(){yield x(),i()}))),{immediate:!0}),T(n,(()=>i())),a({ref:n,update:i}),(e,a)=>(w(),k("div",{ref_key:"barRef",ref:n,class:N([$(o).e("active-bar"),$(o).is($(s).props.tabPosition)]),style:B(r.value)},null,6))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const de=c({panes:{type:d(Array),default:()=>p([])},currentName:{type:[String,Number],default:""},editable:Boolean,onTabClick:{type:d(Function),default:S},onTabRemove:{type:d(Function),default:S},type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),pe=v({name:"ElTabNav",props:de,setup(e,{expose:a}){const t=m(),l=f(ie);l||y("ElTabNav","<el-tabs><tab-nav /></el-tabs>");const s=h("tabs"),o=_(),n=j(),r=g(),i=g(),c=g(),d=g(!1),p=g(0),b=g(!1),v=g(!0),w=O((()=>["top","bottom"].includes(l.props.tabPosition)?"width":"height")),k=O((()=>({transform:`translate${"width"===w.value?"X":"Y"}(-${p.value}px)`}))),N=()=>{if(!r.value)return;const e=r.value[`offset${C(w.value)}`],a=p.value;if(!a)return;const t=a>e?a-e:0;p.value=t},$=()=>{if(!r.value||!i.value)return;const e=i.value[`offset${C(w.value)}`],a=r.value[`offset${C(w.value)}`],t=p.value;if(e-t<=a)return;const l=e-t>2*a?t+a:e-a;p.value=l},B=()=>u(this,null,(function*(){const e=i.value;if(!(d.value&&c.value&&r.value&&e))return;yield x();const a=c.value.querySelector(".is-active");if(!a)return;const t=r.value,s=["top","bottom"].includes(l.props.tabPosition),o=a.getBoundingClientRect(),n=t.getBoundingClientRect(),u=s?e.offsetWidth-n.width:e.offsetHeight-n.height,b=p.value;let v=b;s?(o.left<n.left&&(v=b-(n.left-o.left)),o.right>n.right&&(v=b+o.right-n.right)):(o.top<n.top&&(v=b-(n.top-o.top)),o.bottom>n.bottom&&(v=b+(o.bottom-n.bottom))),v=Math.max(v,0),p.value=Math.min(v,u)})),S=()=>{if(!i.value||!r.value)return;const e=i.value[`offset${C(w.value)}`],a=r.value[`offset${C(w.value)}`],t=p.value;if(a<e){const t=p.value;d.value=d.value||{},d.value.prev=t,d.value.next=t+a<e,e-t<a&&(p.value=e-a)}else d.value=!1,t>0&&(p.value=0)},D=e=>{const a=e.code,{up:t,down:l,left:s,right:o}=M;if(![t,l,s,o].includes(a))return;const n=Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),r=n.indexOf(e.target);let i;i=a===s||a===t?0===r?n.length-1:r-1:r<n.length-1?r+1:0,n[i].focus(),n[i].click(),q()},q=()=>{v.value&&(b.value=!0)},z=()=>b.value=!1;return P(o,(e=>{"hidden"===e?v.value=!1:"visible"===e&&setTimeout((()=>v.value=!0),50)})),P(n,(e=>{e?setTimeout((()=>v.value=!0),50):v.value=!1})),T(c,S),E((()=>setTimeout((()=>B()),0))),R((()=>S())),a({scrollToActiveTab:B,removeFocus:z}),P((()=>e.panes),(()=>t.update()),{flush:"post"}),()=>{const a=d.value?[F("span",{class:[s.e("nav-prev"),s.is("disabled",!d.value.prev)],onClick:N},[F(A,null,{default:()=>[F(V,null,null)]})]),F("span",{class:[s.e("nav-next"),s.is("disabled",!d.value.next)],onClick:$},[F(A,null,{default:()=>[F(K,null,null)]})])]:null,t=e.panes.map(((a,t)=>{var o,n,r,i;const u=a.props.disabled,c=null!=(n=null!=(o=a.props.name)?o:a.index)?n:`${t}`,d=!u&&(a.isClosable||e.editable);a.index=`${t}`;const p=d?F(A,{class:"is-icon-close",onClick:t=>e.onTabRemove(a,t)},{default:()=>[F(L,null,null)]}):null,v=(null==(i=(r=a.slots).label)?void 0:i.call(r))||a.props.label,m=!u&&a.active?0:-1;return F("div",{ref:`tab-${c}`,class:[s.e("item"),s.is(l.props.tabPosition),s.is("active",a.active),s.is("disabled",u),s.is("closable",d),s.is("focus",b.value)],id:`tab-${c}`,key:`tab-${c}`,"aria-controls":`pane-${c}`,role:"tab","aria-selected":a.active,tabindex:m,onFocus:()=>q(),onBlur:()=>z(),onClick:t=>{z(),e.onTabClick(a,c,t)},onKeydown:t=>{!d||t.code!==M.delete&&t.code!==M.backspace||e.onTabRemove(a,t)}},[v,p])}));return F("div",{ref:c,class:[s.e("nav-wrap"),s.is("scrollable",!!d.value),s.is(l.props.tabPosition)]},[a,F("div",{class:s.e("nav-scroll"),ref:r},[F("div",{class:[s.e("nav"),s.is(l.props.tabPosition),s.is("stretch",e.stretch&&["top","bottom"].includes(l.props.tabPosition))],ref:i,style:k.value,role:"tablist",onKeydown:D},[e.type?null:F(ce,{tabs:[...e.panes]},null),t])])])}}}),be=c({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:d(Function),default:()=>!0},stretch:Boolean}),ve=e=>Y(e)||H(e);var me=v({name:"ElTabs",props:be,emits:{[U]:e=>ve(e),"tab-click":(e,a)=>a instanceof Event,"tab-change":e=>ve(e),edit:(e,a)=>["remove","add"].includes(a),"tab-remove":e=>ve(e),"tab-add":()=>!0},setup(e,{emit:a,slots:t,expose:l}){var s,o;const n=h("tabs"),r=g(),i=D({}),c=g(null!=(o=null!=(s=e.modelValue)?s:e.activeName)?o:"0"),d=t=>u(this,null,(function*(){var l,s,o;if(c.value!==t&&!W(t))try{!1!==(yield null==(l=e.beforeLeave)?void 0:l.call(e,t,c.value))&&((e=>{c.value=e,a(U,e),a("tab-change",e)})(t),null==(o=null==(s=r.value)?void 0:s.removeFocus)||o.call(s))}catch(n){}})),p=(e,t,l)=>{e.props.disabled||(d(t),a("tab-click",e,l))},b=(e,t)=>{e.props.disabled||W(e.props.name)||(t.stopPropagation(),a("edit",e.props.name,"remove"),a("tab-remove",e.props.name))},v=()=>{a("edit",void 0,"add"),a("tab-add")};q({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},O((()=>!!e.activeName))),P((()=>e.activeName),(e=>d(e))),P((()=>e.modelValue),(e=>d(e))),P(c,(()=>u(this,null,(function*(){var e;yield x(),null==(e=r.value)||e.scrollToActiveTab()}))));z(ie,{props:e,currentName:c,registerPane:e=>i[e.uid]=e,unregisterPane:e=>delete i[e]});return l({currentName:c}),()=>{const a=e.editable||e.addable?F("span",{class:n.e("new-tab"),tabindex:"0",onClick:v,onKeydown:e=>{e.code===M.enter&&v()}},[F(A,{class:n.is("icon-plus")},{default:()=>[F(G,null,null)]})]):null,l=F("div",{class:[n.e("header"),n.is(e.tabPosition)]},[a,F(pe,{ref:r,currentName:c.value,editable:e.editable,type:e.type,panes:Object.values(i),stretch:e.stretch,onTabClick:p,onTabRemove:b},null)]),s=F("div",{class:n.e("content")},[I(t,"default")]);return F("div",{class:[n.b(),n.m(e.tabPosition),{[n.m("card")]:"card"===e.type,[n.m("border-card")]:"border-card"===e.type}]},[..."bottom"!==e.tabPosition?[l,s]:[s,l]])}}});const fe=c({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ye=["id","aria-hidden","aria-labelledby"];var he=b(v(i(r({},{name:"ElTabPane"}),{props:fe,setup(e){const a=e,t=m(),l=Q(),s=f(ie);s||y("ElTabPane","usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=h("tab-pane"),n=g(),r=O((()=>a.closable||s.props.closable)),i=X((()=>{var e;return s.currentName.value===(null!=(e=a.name)?e:n.value)})),u=g(i.value),c=O((()=>{var e;return null!=(e=a.name)?e:n.value})),d=X((()=>!a.lazy||u.value||i.value));P(i,(e=>{e&&(u.value=!0)}));const p=D({uid:t.uid,slots:l,props:a,paneName:c,active:i,index:n,isClosable:r});return E((()=>{s.registerPane(p)})),J((()=>{s.unregisterPane(p.uid)})),(e,a)=>$(d)?Z((w(),k("div",{key:0,id:`pane-${$(c)}`,class:N($(o).b()),role:"tabpanel","aria-hidden":!$(i),"aria-labelledby":`tab-${$(c)}`},[I(e.$slots,"default")],10,ye)),[[ee,$(i)]]):ae("v-if",!0)}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const ge=te(me,{TabPane:he}),Pe=le(he),xe={"m-4":""},Te=re(v({__name:"index",setup(e){const a=g("first");return(e,t)=>{const l=Pe,s=ge;return w(),k("div",xe,[F(s,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e)},{default:se((()=>[F(l,{label:"折线图移动到点显示该点tooltip",name:"first"},{default:se((()=>[F(oe)])),_:1}),F(l,{label:"饼图点击高亮",name:"second"},{default:se((()=>[F(ne)])),_:1})])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-77e7eb4a"]]);export{Te as default};
