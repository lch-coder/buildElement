var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(l,t,o)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[t]=o,i=(e,l)=>{for(var t in l||(l={}))a.call(l,t)&&s(e,t,l[t]);if(o)for(var t of o(l))n.call(l,t)&&s(e,t,l[t]);return e};import{aZ as r,a1 as u,N as p,ar as c,a_ as d,a$ as v,am as h,k as m,d as b,M as f,r as g,al as y,aU as C,ag as S,_ as O,ac as x,aM as w,o as L,h as I,T,i as P,z as E,n as V,af as k,c as M,ak as B,b0 as z,Q as D,L as q,b1 as W,ai as F,aa as A,an as K,b2 as j,b3 as H,b4 as R,aT as _,a5 as $,b5 as Q,a3 as N,b6 as G,a9 as U,v as Y,P as Z,ap as J,aA as X,aE as ee,Y as le,b7 as te,b8 as oe,j as ae,w as ne,B as se,F as ie,A as re,S as ue,aH as pe,at as ce,b9 as de,ba as ve,R as he,V as me,ao as be}from"./index-49e2bcdc.js";import{E as fe,u as ge}from"./index-b3a1827a.js";import{E as ye}from"./el-scrollbar-655bdbc1.js";import{E as Ce,t as Se}from"./index-8c4d604b.js";import{i as Oe}from"./el-form-item-633ebb2d.js";import{d as xe,C as we}from"./index-eec7053d.js";const Le=b({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=f("select"),t=g({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:o,itemSelected:a,isDisabled:n,select:s,hoverItem:i}=function(e,l){const t=u("ElSelect"),o=u("ElSelectGroup",{disabled:!1}),a=p((()=>"[object object]"===Object.prototype.toString.call(e.value).toLowerCase())),n=p((()=>t.props.multiple?g(t.props.modelValue,e.value):y(e.value,t.props.modelValue))),s=p((()=>{if(t.props.multiple){const e=t.props.modelValue||[];return!n.value&&e.length>=t.props.multipleLimit&&t.props.multipleLimit>0}return!1})),i=p((()=>e.label||(a.value?"":e.value))),r=p((()=>e.value||e.label||"")),b=p((()=>e.disabled||l.groupDisabled||s.value)),f=c(),g=(e=[],l)=>{if(a.value){const o=t.props.valueKey;return e&&e.some((e=>d(v(e,o))===v(l,o)))}return e&&e.includes(l)},y=(e,l)=>{if(a.value){const{valueKey:o}=t.props;return v(e,o)===v(l,o)}return e===l};h((()=>i.value),(()=>{e.created||t.props.remote||t.setSelected()})),h((()=>e.value),((l,o)=>{const{remote:a,valueKey:n}=t.props;if(!e.created&&!a){if(n&&"object"==typeof l&&"object"==typeof o&&l[n]===o[n])return;t.setSelected()}})),h((()=>o.disabled),(()=>{l.groupDisabled=o.disabled}),{immediate:!0});const{queryChange:C}=d(t);return h(C,(o=>{const{query:a}=m(o),n=new RegExp(((e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"))(a),"i");l.visible=n.test(i.value)||e.created,l.visible||t.filteredOptionsCount--})),{select:t,currentLabel:i,currentValue:r,itemSelected:n,isDisabled:b,hoverItem:()=>{e.disabled||o.disabled||(t.hoverIndex=t.optionsArray.indexOf(f.proxy))}}}(e,t),{visible:r,hover:b}=y(t),O=c().proxy,x=O.value;return s.onOptionCreate(O),C((()=>{const{selected:e}=s,l=(s.props.multiple?e:[e]).some((e=>e.value===O.value));S((()=>{s.cachedOptions.get(x)!==O||l||s.cachedOptions.delete(x)})),s.onOptionDestroy(x,O)})),{ns:l,currentLabel:o,itemSelected:a,isDisabled:n,select:s,hoverItem:i,visible:r,hover:b,selectOptionClick:function(){!0!==e.disabled&&!0!==t.groupDisabled&&s.handleOptionSelect(O,!0)},states:t}}});var Ie=O(Le,[["render",function(e,l,t,o,a,n){return x((L(),I("li",{class:V([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...l)=>e.hoverItem&&e.hoverItem(...l)),onClick:l[1]||(l[1]=k(((...l)=>e.selectOptionClick&&e.selectOptionClick(...l)),["stop"]))},[T(e.$slots,"default",{},(()=>[P("span",null,E(e.currentLabel),1)]))],34)),[[w,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const Te=b({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=u("ElSelect"),l=f("select"),t=p((()=>e.props.popperClass)),o=p((()=>e.props.multiple)),a=p((()=>e.props.fitInputWidth)),n=M("");function s(){var l;n.value=`${null==(l=e.selectWrapper)?void 0:l.offsetWidth}px`}return B((()=>{s(),z(e.selectWrapper,s)})),{ns:l,minWidth:n,popperClass:t,isMultiple:o,isFitInputWidth:a}}});const Pe=(e,l,t)=>{const{t:o}=q(),a=f("select"),n=M(null),s=M(null),i=M(null),u=M(null),c=M(null),m=M(null),b=M(-1),g=W({query:""}),y=W(""),{form:C,formItem:O}=F(),x=p((()=>!e.filterable||e.multiple||!l.visible)),w=p((()=>e.disabled||(null==C?void 0:C.disabled))),L=p((()=>{const t=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:void 0!==e.modelValue&&null!==e.modelValue&&""!==e.modelValue;return e.clearable&&!w.value&&l.inputHovering&&t})),I=p((()=>e.remote&&e.filterable?"":e.suffixIcon)),T=p((()=>a.is("reverse",I.value&&l.visible))),P=p((()=>e.remote?300:0)),E=p((()=>e.loading?e.loadingText||o("el.select.loading"):(!e.remote||""!==l.query||0!==l.options.size)&&(e.filterable&&l.query&&l.options.size>0&&0===l.filteredOptionsCount?e.noMatchText||o("el.select.noMatch"):0===l.options.size?e.noDataText||o("el.select.noData"):null))),V=p((()=>Array.from(l.options.values()))),k=p((()=>Array.from(l.cachedOptions.values()))),B=p((()=>{const t=V.value.filter((e=>!e.created)).some((e=>e.currentLabel===l.query));return e.filterable&&e.allowCreate&&""!==l.query&&!t})),z=A(),D=p((()=>["small"].includes(z.value)?"small":"default")),Y=p({get:()=>l.visible&&!1!==E.value,set(e){l.visible=e}});h([()=>w.value,()=>z.value,()=>null==C?void 0:C.size],(()=>{S((()=>{Z()}))})),h((()=>e.placeholder),(e=>{l.cachedPlaceHolder=l.currentPlaceholder=e})),h((()=>e.modelValue),((t,o)=>{e.multiple&&(Z(),t&&t.length>0||s.value&&""!==l.query?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",J(l.query))),le(),e.filterable&&!e.multiple&&(l.inputLength=20),!Oe(t,o)&&e.validateEvent&&(null==O||O.validate("change").catch((e=>K())))}),{flush:"post",deep:!0}),h((()=>l.visible),(o=>{var a,n,r;o?(null==(n=null==(a=i.value)?void 0:a.updatePopper)||n.call(a),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,e.multiple?null==(r=s.value)||r.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),J(l.query),e.multiple||e.remote||(g.value.query="",j(g),j(y)))):(s.value&&s.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,oe(),S((()=>{s.value&&""===s.value.value&&0===l.selected.length&&(l.currentPlaceholder=l.cachedPlaceHolder)})),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),t.emit("visible-change",o)})),h((()=>l.options.entries()),(()=>{var t,o,a;if(!H)return;null==(o=null==(t=i.value)?void 0:t.updatePopper)||o.call(t),e.multiple&&Z();const n=(null==(a=c.value)?void 0:a.querySelectorAll("input"))||[];Array.from(n).includes(document.activeElement)||le(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&ee()}),{flush:"post"}),h((()=>l.hoverIndex),(e=>{"number"==typeof e&&e>-1&&(b.value=V.value[e]||{}),V.value.forEach((e=>{e.hover=b.value===e}))}));const Z=()=>{e.collapseTags&&!e.filterable||S((()=>{var e,t;if(!n.value)return;const o=n.value.$el.querySelector("input"),a=u.value,s=(p=z.value||(null==C?void 0:C.size),r[p||"default"]);var p;o.style.height=(0===l.selected.length?s:Math.max(a?a.clientHeight+(a.clientHeight>s?6:0):0,s))-2+"px",l.tagInMultiLine=Number.parseFloat(o.style.height)>=s,l.visible&&!1!==E.value&&(null==(t=null==(e=i.value)?void 0:e.updatePopper)||t.call(e))}))},J=t=>{l.previousQuery===t||l.isOnComposition||(null!==l.previousQuery||"function"!=typeof e.filterMethod&&"function"!=typeof e.remoteMethod?(l.previousQuery=t,S((()=>{var e,t;l.visible&&(null==(t=null==(e=i.value)?void 0:e.updatePopper)||t.call(e))})),l.hoverIndex=-1,e.multiple&&e.filterable&&S((()=>{const t=15*s.value.value.length+20;l.inputLength=e.collapseTags?Math.min(50,t):t,X(),Z()})),e.remote&&"function"==typeof e.remoteMethod?(l.hoverIndex=-1,e.remoteMethod(t)):"function"==typeof e.filterMethod?(e.filterMethod(t),j(y)):(l.filteredOptionsCount=l.optionsCount,g.value.query=t,j(g),j(y)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&ee()):l.previousQuery=t)},X=()=>{""!==l.currentPlaceholder&&(l.currentPlaceholder=s.value.value?"":l.cachedPlaceHolder)},ee=()=>{const e=V.value.filter((e=>e.visible&&!e.disabled&&!e.states.groupDisabled)),t=e.find((e=>e.created)),o=e[0];l.hoverIndex=pe(V.value,t||o)},le=()=>{var t;if(!e.multiple){const o=te(e.modelValue);return(null==(t=o.props)?void 0:t.created)?(l.createdLabel=o.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=o.currentLabel,l.selected=o,void(e.filterable&&(l.query=l.selectedLabel))}l.selectedLabel="";const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach((e=>{o.push(te(e))})),l.selected=o,S((()=>{Z()}))},te=t=>{let o;const a="object"===R(t).toLowerCase(),n="null"===R(t).toLowerCase(),s="undefined"===R(t).toLowerCase();for(let r=l.cachedOptions.size-1;r>=0;r--){const l=k.value[r];if(a?v(l.value,e.valueKey)===v(t,e.valueKey):l.value===t){o={value:t,currentLabel:l.currentLabel,isDisabled:l.isDisabled};break}}if(o)return o;const i={value:t,currentLabel:a?t.label:n||s?"":t};return e.multiple&&(i.hitState=!1),i},oe=()=>{setTimeout((()=>{const t=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map((e=>V.value.findIndex((l=>v(l,t)===v(e,t)))))):l.hoverIndex=-1:l.hoverIndex=V.value.findIndex((e=>me(e)===me(l.selected)))}),300)},ae=()=>{var e;l.inputWidth=null==(e=n.value)?void 0:e.$el.getBoundingClientRect().width},ne=xe((()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,J(l.query))}),P.value),se=xe((e=>{J(e.target.value)}),P.value),ie=l=>{Oe(e.modelValue,l)||t.emit(U,l)},re=o=>{o.stopPropagation();const a=e.multiple?[]:"";if("string"!=typeof a)for(const e of l.selected)e.isDisabled&&a.push(e.value);t.emit($,a),ie(a),l.visible=!1,t.emit("clear")},ue=(o,a)=>{var n;if(e.multiple){const a=(e.modelValue||[]).slice(),i=pe(a,o.value);i>-1?a.splice(i,1):(e.multipleLimit<=0||a.length<e.multipleLimit)&&a.push(o.value),t.emit($,a),ie(a),o.created&&(l.query="",J(""),l.inputLength=20),e.filterable&&(null==(n=s.value)||n.focus())}else t.emit($,o.value),ie(o.value),l.visible=!1;l.isSilentBlur=a,ce(),l.visible||S((()=>{de(o)}))},pe=(l=[],t)=>{if(!_(t))return l.indexOf(t);const o=e.valueKey;let a=-1;return l.some(((e,l)=>d(v(e,o))===v(t,o)&&(a=l,!0))),a},ce=()=>{l.softFocus=!0;const e=s.value||n.value;e&&(null==e||e.focus())},de=e=>{var l,t,o,n,s;const r=Array.isArray(e)?e[0]:e;let u=null;if(null==r?void 0:r.value){const e=V.value.filter((e=>e.value===r.value));e.length>0&&(u=e[0].$el)}if(i.value&&u){const e=null==(n=null==(o=null==(t=null==(l=i.value)?void 0:l.popperRef)?void 0:t.contentRef)?void 0:o.querySelector)?void 0:n.call(o,`.${a.be("dropdown","wrap")}`);e&&Q(e,u)}null==(s=m.value)||s.handleScroll()},ve=e=>{if(!Array.isArray(l.selected))return;const t=l.selected[l.selected.length-1];return t?!0===e||!1===e?(t.hitState=e,e):(t.hitState=!t.hitState,t.hitState):void 0},he=()=>{var e;w.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:l.visible=!l.visible,l.visible&&(null==(e=s.value||n.value)||e.focus()))},me=l=>_(l.value)?v(l.value,e.valueKey):l.value,be=p((()=>V.value.filter((e=>e.visible)).every((e=>e.disabled)))),fe=e=>{if(l.visible){if(0!==l.options.size&&0!==l.filteredOptionsCount&&!l.isOnComposition&&!be.value){"next"===e?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):"prev"===e&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const t=V.value[l.hoverIndex];!0!==t.disabled&&!0!==t.states.groupDisabled&&t.visible||fe(e),S((()=>de(b.value)))}}else l.visible=!0};return{optionsArray:V,selectSize:z,handleResize:()=>{var l,t;ae(),null==(t=null==(l=i.value)?void 0:l.updatePopper)||t.call(l),e.multiple&&!e.filterable&&Z()},debouncedOnInputChange:ne,debouncedQueryChange:se,deletePrevTag:o=>{if(o.target.value.length<=0&&!ve()){const l=e.modelValue.slice();l.pop(),t.emit($,l),ie(l)}1===o.target.value.length&&0===e.modelValue.length&&(l.currentPlaceholder=l.cachedPlaceHolder)},deleteTag:(o,a)=>{const n=l.selected.indexOf(a);if(n>-1&&!w.value){const l=e.modelValue.slice();l.splice(n,1),t.emit($,l),ie(l),t.emit("remove-tag",a.value)}o.stopPropagation()},deleteSelected:re,handleOptionSelect:ue,scrollToOption:de,readonly:x,resetInputHeight:Z,showClose:L,iconComponent:I,iconReverse:T,showNewOption:B,collapseTagSize:D,setSelected:le,managePlaceholder:X,selectDisabled:w,emptyText:E,toggleLastOptionHitState:ve,resetInputState:e=>{e.code!==N.backspace&&ve(!1),l.inputLength=15*s.value.value.length+20,Z()},handleComposition:e=>{const t=e.target.value;if("compositionend"===e.type)l.isOnComposition=!1,S((()=>J(t)));else{const e=t[t.length-1]||"";l.isOnComposition=!G(e)}},onOptionCreate:e=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(e.value,e),l.cachedOptions.set(e.value,e)},onOptionDestroy:(e,t)=>{l.options.get(e)===t&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(e))},handleMenuEnter:()=>{S((()=>de(l.selected)))},handleFocus:o=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),t.emit("focus",o))},blur:()=>{var e;l.visible=!1,null==(e=n.value)||e.blur()},handleBlur:e=>{S((()=>{l.isSilentBlur?l.isSilentBlur=!1:t.emit("blur",e)})),l.softFocus=!1},handleClearClick:e=>{re(e)},handleClose:()=>{l.visible=!1},handleKeydownEscape:e=>{l.visible&&(e.preventDefault(),e.stopPropagation(),l.visible=!1)},toggleMenu:he,selectOption:()=>{l.visible?V.value[l.hoverIndex]&&ue(V.value[l.hoverIndex],void 0):he()},getValueKey:me,navigateOptions:fe,dropMenuVisible:Y,queryChange:g,groupQueryChange:y,reference:n,input:s,tooltipRef:i,tags:u,selectWrapper:c,scrollbar:m}},Ee=b({name:"ElSelect",componentName:"ElSelect",components:{ElInput:Y,ElSelectMenu:O(Te,[["render",function(e,l,t,o,a,n){return L(),I("div",{class:V([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:D({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[T(e.$slots,"default")],6)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]),ElOption:Ie,ElTag:Ce,ElScrollbar:ye,ElTooltip:fe,ElIcon:Z},directives:{ClickOutside:we},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:J},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},teleported:ge.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:[String,Object],default:X},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:[String,Object],default:ee},tagType:(Ve=i({},Se.type),ke={default:"info"},l(Ve,t(ke))),validateEvent:{type:Boolean,default:!0}},emits:[$,U,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const t=f("select"),o=f("input"),{t:a}=q(),n=function(e){const{t:l}=q();return g({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1})}(e),{optionsArray:s,selectSize:i,readonly:r,handleResize:u,collapseTagSize:c,debouncedOnInputChange:d,debouncedQueryChange:v,deletePrevTag:h,deleteTag:b,deleteSelected:C,handleOptionSelect:O,scrollToOption:x,setSelected:w,resetInputHeight:L,managePlaceholder:I,showClose:T,selectDisabled:P,iconComponent:E,iconReverse:V,showNewOption:k,emptyText:M,toggleLastOptionHitState:D,resetInputState:W,handleComposition:F,onOptionCreate:A,onOptionDestroy:K,handleMenuEnter:j,handleFocus:H,blur:R,handleBlur:_,handleClearClick:Q,handleClose:N,handleKeydownEscape:G,toggleMenu:U,selectOption:Y,getValueKey:Z,navigateOptions:J,dropMenuVisible:X,reference:ee,input:te,tooltipRef:oe,tags:ae,selectWrapper:ne,scrollbar:se,queryChange:ie,groupQueryChange:re}=Pe(e,n,l),{focus:ue}=(pe=ee,{focus:()=>{var e,l;null==(l=null==(e=pe.value)?void 0:e.focus)||l.call(e)}});var pe;const{inputWidth:ce,selected:de,inputLength:ve,filteredOptionsCount:he,visible:me,softFocus:be,selectedLabel:fe,hoverIndex:ge,query:ye,inputHovering:Ce,currentPlaceholder:Se,menuVisibleOnFocus:Oe,isOnComposition:xe,isSilentBlur:we,options:Le,cachedOptions:Ie,optionsCount:Te,prefixWidth:Ee,tagInMultiLine:Ve}=y(n),ke=p((()=>{const l=[t.b()],o=m(i);return o&&l.push(t.m(o)),e.disabled&&l.push(t.m("disabled")),l})),Me=p((()=>({maxWidth:m(ce)-32+"px",width:"100%"})));le("ElSelect",g({props:e,options:Le,optionsArray:s,cachedOptions:Ie,optionsCount:Te,filteredOptionsCount:he,hoverIndex:ge,handleOptionSelect:O,onOptionCreate:A,onOptionDestroy:K,selectWrapper:ne,selected:de,setSelected:w,queryChange:ie,groupQueryChange:re})),B((()=>{n.cachedPlaceHolder=Se.value=e.placeholder||a("el.select.placeholder"),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(Se.value=""),z(ne,u),e.remote&&e.multiple&&L(),S((()=>{const e=ee.value&&ee.value.$el;if(e&&(ce.value=e.getBoundingClientRect().width,l.slots.prefix)){const l=e.querySelector(`.${o.e("prefix")}`);Ee.value=Math.max(l.getBoundingClientRect().width+5,30)}})),w()})),e.multiple&&!Array.isArray(e.modelValue)&&l.emit($,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit($,"");const Be=p((()=>{var e,l;return null==(l=null==(e=oe.value)?void 0:e.popperRef)?void 0:l.contentRef}));return{tagInMultiLine:Ve,prefixWidth:Ee,selectSize:i,readonly:r,handleResize:u,collapseTagSize:c,debouncedOnInputChange:d,debouncedQueryChange:v,deletePrevTag:h,deleteTag:b,deleteSelected:C,handleOptionSelect:O,scrollToOption:x,inputWidth:ce,selected:de,inputLength:ve,filteredOptionsCount:he,visible:me,softFocus:be,selectedLabel:fe,hoverIndex:ge,query:ye,inputHovering:Ce,currentPlaceholder:Se,menuVisibleOnFocus:Oe,isOnComposition:xe,isSilentBlur:we,options:Le,resetInputHeight:L,managePlaceholder:I,showClose:T,selectDisabled:P,iconComponent:E,iconReverse:V,showNewOption:k,emptyText:M,toggleLastOptionHitState:D,resetInputState:W,handleComposition:F,handleMenuEnter:j,handleFocus:H,blur:R,handleBlur:_,handleClearClick:Q,handleClose:N,handleKeydownEscape:G,toggleMenu:U,selectOption:Y,getValueKey:Z,navigateOptions:J,dropMenuVisible:X,focus:ue,reference:ee,input:te,tooltipRef:oe,popperPaneRef:Be,tags:ae,selectWrapper:ne,scrollbar:se,wrapperKls:ke,selectTagsStyle:Me,nsSelect:t}}});var Ve,ke;const Me={class:"select-trigger"},Be=["disabled","autocomplete"],ze={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};var De=O(Ee,[["render",function(e,l,t,o,a,n){const s=te("el-tag"),i=te("el-tooltip"),r=te("el-icon"),u=te("el-input"),p=te("el-option"),c=te("el-scrollbar"),d=te("el-select-menu"),v=oe("click-outside");return x((L(),I("div",{ref:"selectWrapper",class:V(e.wrapperKls),onClick:l[22]||(l[22]=k(((...l)=>e.toggleMenu&&e.toggleMenu(...l)),["stop"]))},[ae(i,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:"bottom-start",teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:ne((()=>[P("div",Me,[e.multiple?(L(),I("div",{key:0,ref:"tags",class:V(e.nsSelect.e("tags")),style:D(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(L(),I("span",{key:0,class:V([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[ae(s,{closable:!e.selectDisabled&&!e.selected[0].isDisabled,size:e.collapseTagSize,hit:e.selected[0].hitState,type:e.tagType,"disable-transitions":"",onClose:l[0]||(l[0]=l=>e.deleteTag(l,e.selected[0]))},{default:ne((()=>[P("span",{class:V(e.nsSelect.e("tags-text")),style:D({maxWidth:e.inputWidth-123+"px"})},E(e.selected[0].currentLabel),7)])),_:1},8,["closable","size","hit","type"]),e.selected.length>1?(L(),se(s,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:ne((()=>[e.collapseTagsTooltip?(L(),se(i,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:ne((()=>[P("span",{class:V(e.nsSelect.e("tags-text"))},"+ "+E(e.selected.length-1),3)])),content:ne((()=>[P("div",{class:V(e.nsSelect.e("collapse-tags"))},[(L(!0),I(ie,null,re(e.selected.slice(1),((l,t)=>(L(),I("div",{key:t,class:V(e.nsSelect.e("collapse-tag"))},[(L(),se(s,{key:e.getValueKey(l),class:"in-tooltip",closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,hit:l.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:t=>e.deleteTag(t,l)},{default:ne((()=>[P("span",{class:V(e.nsSelect.e("tags-text")),style:D({maxWidth:e.inputWidth-75+"px"})},E(l.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"]))],2)))),128))],2)])),_:1},8,["disabled","effect","teleported"])):(L(),I("span",{key:1,class:V(e.nsSelect.e("tags-text"))},"+ "+E(e.selected.length-1),3))])),_:1},8,["size","type"])):ue("v-if",!0)],2)):ue("v-if",!0),ue(" <div> "),e.collapseTags?ue("v-if",!0):(L(),se(pe,{key:1,onAfterLeave:e.resetInputHeight},{default:ne((()=>[P("span",{class:V([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(L(!0),I(ie,null,re(e.selected,(l=>(L(),se(s,{key:e.getValueKey(l),closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,hit:l.hitState,type:e.tagType,"disable-transitions":"",onClose:t=>e.deleteTag(t,l)},{default:ne((()=>[P("span",{class:V(e.nsSelect.e("tags-text")),style:D({maxWidth:e.inputWidth-75+"px"})},E(l.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])))),128))],2)])),_:1},8,["onAfterLeave"])),ue(" </div> "),e.filterable?x((L(),I("input",{key:2,ref:"input","onUpdate:modelValue":l[1]||(l[1]=l=>e.query=l),type:"text",class:V([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:D({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:e.inputLength/(e.inputWidth-32)+"%",maxWidth:e.inputWidth-42+"px"}),onFocus:l[2]||(l[2]=(...l)=>e.handleFocus&&e.handleFocus(...l)),onBlur:l[3]||(l[3]=(...l)=>e.handleBlur&&e.handleBlur(...l)),onKeyup:l[4]||(l[4]=(...l)=>e.managePlaceholder&&e.managePlaceholder(...l)),onKeydown:[l[5]||(l[5]=(...l)=>e.resetInputState&&e.resetInputState(...l)),l[6]||(l[6]=ce(k((l=>e.navigateOptions("next")),["prevent"]),["down"])),l[7]||(l[7]=ce(k((l=>e.navigateOptions("prev")),["prevent"]),["up"])),l[8]||(l[8]=ce(((...l)=>e.handleKeydownEscape&&e.handleKeydownEscape(...l)),["esc"])),l[9]||(l[9]=ce(k(((...l)=>e.selectOption&&e.selectOption(...l)),["stop","prevent"]),["enter"])),l[10]||(l[10]=ce(((...l)=>e.deletePrevTag&&e.deletePrevTag(...l)),["delete"])),l[11]||(l[11]=ce((l=>e.visible=!1),["tab"]))],onCompositionstart:l[12]||(l[12]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onCompositionupdate:l[13]||(l[13]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onCompositionend:l[14]||(l[14]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onInput:l[15]||(l[15]=(...l)=>e.debouncedQueryChange&&e.debouncedQueryChange(...l))},null,46,Be)),[[de,e.query]]):ue("v-if",!0)],6)):ue("v-if",!0),ae(u,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=l=>e.selectedLabel=l),type:"text",placeholder:e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:V([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=ce(k((l=>e.navigateOptions("next")),["stop","prevent"]),["down"])),l[18]||(l[18]=ce(k((l=>e.navigateOptions("prev")),["stop","prevent"]),["up"])),ce(k(e.selectOption,["stop","prevent"]),["enter"]),ce(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=ce((l=>e.visible=!1),["tab"]))],onMouseenter:l[20]||(l[20]=l=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=l=>e.inputHovering=!1)},ve({suffix:ne((()=>[e.iconComponent&&!e.showClose?(L(),se(r,{key:0,class:V([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:ne((()=>[(L(),se(he(e.iconComponent)))])),_:1},8,["class"])):ue("v-if",!0),e.showClose&&e.clearIcon?(L(),se(r,{key:1,class:V([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:ne((()=>[(L(),se(he(e.clearIcon)))])),_:1},8,["class","onClick"])):ue("v-if",!0)])),_:2},[e.$slots.prefix?{name:"prefix",fn:ne((()=>[P("div",ze,[T(e.$slots,"prefix")])]))}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])])])),content:ne((()=>[ae(d,null,{default:ne((()=>[x(ae(c,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:V([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&0===e.filteredOptionsCount)])},{default:ne((()=>[e.showNewOption?(L(),se(p,{key:0,value:e.query,created:!0},null,8,["value"])):ue("v-if",!0),T(e.$slots,"default")])),_:3},8,["wrap-class","view-class","class"]),[[w,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&0===e.options.size)?(L(),I(ie,{key:0},[e.$slots.empty?T(e.$slots,"empty",{key:0}):(L(),I("p",{key:1,class:V(e.nsSelect.be("dropdown","empty"))},E(e.emptyText),3))],64)):ue("v-if",!0)])),_:3})])),_:3},8,["visible","teleported","popper-class","effect","transition","persistent","onShow"])],2)),[[v,e.handleClose,e.popperPaneRef]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);var qe=O(b({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=f("select"),t=M(!0),o=c(),a=M([]);le("ElSelectGroup",g(i({},y(e))));const n=u("ElSelect");B((()=>{a.value=s(o.subTree)}));const s=e=>{const l=[];return Array.isArray(e.children)&&e.children.forEach((e=>{var t;e.type&&"ElOption"===e.type.name&&e.component&&e.component.proxy?l.push(e.component.proxy):(null==(t=e.children)?void 0:t.length)&&l.push(...s(e))})),l},{groupQueryChange:r}=d(n);return h(r,(()=>{t.value=a.value.some((e=>!0===e.visible))})),{visible:t,ns:l}}}),[["render",function(e,l,t,o,a,n){return x((L(),I("ul",{class:V(e.ns.be("group","wrap"))},[P("li",{class:V(e.ns.be("group","title"))},E(e.label),3),P("li",null,[P("ul",{class:V(e.ns.b("group"))},[T(e.$slots,"default")],2)])],2)),[[w,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const We=me(De,{Option:Ie,OptionGroup:qe}),Fe=be(Ie);be(qe);export{Fe as E,We as a};