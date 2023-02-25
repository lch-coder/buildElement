import{aZ as Cl,a3 as we,P as p,as as ll,a_ as Ie,a$ as D,an as q,m as el,d as Le,O as oe,r as Te,am as nl,i as Sl,ai as V,_ as Ee,ae as pe,aN as ol,p as v,j as k,V as ne,k as P,B as U,q as m,ah as G,f as A,o as tl,b0 as vl,S as le,N as il,b1 as rl,ak as Ol,ac as wl,ao as Il,b2 as de,b3 as Ll,b4 as xe,aU as sl,a7 as X,b5 as Tl,a5 as El,b6 as $l,ab as ml,y as Vl,R as kl,aq as Ml,aB as Pl,aF as zl,$ as bl,b7 as _,b8 as Bl,l as ce,w as L,D as K,F as _e,C as ul,U as z,aI as Dl,au as B,b9 as ql,ba as Fl,T as dl,X as Wl,ap as hl}from"./index-5ef55067.js";import{E as Kl,u as Al}from"./index-bbb1343b.js";import{E as Nl}from"./el-scrollbar-ad0f2917.js";import{E as Rl,t as Hl}from"./index-724cc930.js";import{i as cl}from"./el-form-item-90aeaa68.js";import{d as pl,C as jl}from"./index-b09e6e02.js";const Ql=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),Gl=e=>Cl[e||"default"],Ul=e=>({focus:()=>{var l,i;(i=(l=e.value)==null?void 0:l.focus)==null||i.call(l)}}),gl="ElSelectGroup",$e="ElSelect";function Xl(e,l){const i=we($e),b=we(gl,{disabled:!1}),h=p(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),u=p(()=>i.props.multiple?O(i.props.modelValue,e.value):T(e.value,i.props.modelValue)),r=p(()=>{if(i.props.multiple){const c=i.props.modelValue||[];return!u.value&&c.length>=i.props.multipleLimit&&i.props.multipleLimit>0}else return!1}),d=p(()=>e.label||(h.value?"":e.value)),S=p(()=>e.value||e.label||""),w=p(()=>e.disabled||l.groupDisabled||r.value),f=ll(),O=(c=[],g)=>{if(h.value){const y=i.props.valueKey;return c&&c.some(F=>Ie(D(F,y))===D(g,y))}else return c&&c.includes(g)},T=(c,g)=>{if(h.value){const{valueKey:y}=i.props;return D(c,y)===D(g,y)}else return c===g},E=()=>{!e.disabled&&!b.disabled&&(i.hoverIndex=i.optionsArray.indexOf(f.proxy))};q(()=>d.value,()=>{!e.created&&!i.props.remote&&i.setSelected()}),q(()=>e.value,(c,g)=>{const{remote:y,valueKey:F}=i.props;if(!e.created&&!y){if(F&&typeof c=="object"&&typeof g=="object"&&c[F]===g[F])return;i.setSelected()}}),q(()=>b.disabled,()=>{l.groupDisabled=b.disabled},{immediate:!0});const{queryChange:t}=Ie(i);return q(t,c=>{const{query:g}=el(c),y=new RegExp(Ql(g),"i");l.visible=y.test(d.value)||e.created,l.visible||i.filteredOptionsCount--}),{select:i,currentLabel:d,currentValue:S,itemSelected:u,isDisabled:w,hoverItem:E}}const Zl=Le({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=oe("select"),i=Te({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:b,itemSelected:h,isDisabled:u,select:r,hoverItem:d}=Xl(e,i),{visible:S,hover:w}=nl(i),f=ll().proxy,O=f.value;r.onOptionCreate(f),Sl(()=>{const{selected:E}=r,c=(r.props.multiple?E:[E]).some(g=>g.value===f.value);V(()=>{r.cachedOptions.get(O)===f&&!c&&r.cachedOptions.delete(O)}),r.onOptionDestroy(O,f)});function T(){e.disabled!==!0&&i.groupDisabled!==!0&&r.handleOptionSelect(f,!0)}return{ns:l,currentLabel:b,itemSelected:h,isDisabled:u,select:r,hoverItem:d,visible:S,hover:w,selectOptionClick:T,states:i}}});function Jl(e,l,i,b,h,u){return pe((v(),k("li",{class:m([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...r)=>e.hoverItem&&e.hoverItem(...r)),onClick:l[1]||(l[1]=G((...r)=>e.selectOptionClick&&e.selectOptionClick(...r),["stop"]))},[ne(e.$slots,"default",{},()=>[P("span",null,U(e.currentLabel),1)])],34)),[[ol,e.visible]])}var al=Ee(Zl,[["render",Jl],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const Yl=Le({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=we($e),l=oe("select"),i=p(()=>e.props.popperClass),b=p(()=>e.props.multiple),h=p(()=>e.props.fitInputWidth),u=A("");function r(){var d;u.value=`${(d=e.selectWrapper)==null?void 0:d.offsetWidth}px`}return tl(()=>{r(),vl(e.selectWrapper,r)}),{ns:l,minWidth:u,popperClass:i,isMultiple:b,isFitInputWidth:h}}});function xl(e,l,i,b,h,u){return v(),k("div",{class:m([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:le({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[ne(e.$slots,"default")],6)}var _l=Ee(Yl,[["render",xl],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function en(e){const{t:l}=il();return Te({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1})}const ln=(e,l,i)=>{const{t:b}=il(),h=oe("select"),u=A(null),r=A(null),d=A(null),S=A(null),w=A(null),f=A(null),O=A(-1),T=rl({query:""}),E=rl(""),{form:t,formItem:c}=Ol(),g=p(()=>!e.filterable||e.multiple||!l.visible),y=p(()=>e.disabled||(t==null?void 0:t.disabled)),F=p(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!y.value&&l.inputHovering&&n}),te=p(()=>e.remote&&e.filterable?"":e.suffixIcon),Ve=p(()=>h.is("reverse",te.value&&l.visible)),fe=p(()=>e.remote?300:0),ie=p(()=>e.loading?e.loadingText||b("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||b("el.select.noMatch"):l.options.size===0?e.noDataText||b("el.select.noData"):null),I=p(()=>Array.from(l.options.values())),ke=p(()=>Array.from(l.cachedOptions.values())),Me=p(()=>{const n=I.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),ee=wl(),Pe=p(()=>["small"].includes(ee.value)?"small":"default"),ze=p({get(){return l.visible&&ie.value!==!1},set(n){l.visible=n}});q([()=>y.value,()=>ee.value,()=>t==null?void 0:t.size],()=>{V(()=>{W()})}),q(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n}),q(()=>e.modelValue,(n,o)=>{e.multiple&&(W(),n&&n.length>0||r.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",R(l.query))),ae(),e.filterable&&!e.multiple&&(l.inputLength=20),!cl(n,o)&&e.validateEvent&&(c==null||c.validate("change").catch(a=>Il()))},{flush:"post",deep:!0}),q(()=>l.visible,n=>{var o,a,s;n?((a=(o=d.value)==null?void 0:o.updatePopper)==null||a.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,e.multiple?(s=r.value)==null||s.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),R(l.query),!e.multiple&&!e.remote&&(T.value.query="",de(T),de(E)))):(r.value&&r.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,Be(),V(()=>{r.value&&r.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),i.emit("visible-change",n)}),q(()=>l.options.entries(),()=>{var n,o,a;if(!Ll)return;(o=(n=d.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&W();const s=((a=w.value)==null?void 0:a.querySelectorAll("input"))||[];Array.from(s).includes(document.activeElement)||ae(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&me()},{flush:"post"}),q(()=>l.hoverIndex,n=>{typeof n=="number"&&n>-1&&(O.value=I.value[n]||{}),I.value.forEach(o=>{o.hover=O.value===o})});const W=()=>{e.collapseTags&&!e.filterable||V(()=>{var n,o;if(!u.value)return;const a=u.value.$el.querySelector("input"),s=S.value,C=Gl(ee.value||(t==null?void 0:t.size));a.style.height=`${(l.selected.length===0?C:Math.max(s?s.clientHeight+(s.clientHeight>C?6:0):0,C))-2}px`,l.tagInMultiLine=Number.parseFloat(a.style.height)>=C,l.visible&&ie.value!==!1&&((o=(n=d.value)==null?void 0:n.updatePopper)==null||o.call(n))})},R=n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(typeof e.filterMethod=="function"||typeof e.remoteMethod=="function")){l.previousQuery=n;return}l.previousQuery=n,V(()=>{var o,a;l.visible&&((a=(o=d.value)==null?void 0:o.updatePopper)==null||a.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&V(()=>{const o=r.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,ve(),W()}),e.remote&&typeof e.remoteMethod=="function"?(l.hoverIndex=-1,e.remoteMethod(n)):typeof e.filterMethod=="function"?(e.filterMethod(n),de(E)):(l.filteredOptionsCount=l.optionsCount,T.value.query=n,de(T),de(E)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&me()}},ve=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=r.value.value?"":l.cachedPlaceHolder)},me=()=>{const n=I.value.filter(s=>s.visible&&!s.disabled&&!s.states.groupDisabled),o=n.find(s=>s.created),a=n[0];l.hoverIndex=re(I.value,o||a)},ae=()=>{var n;if(e.multiple)l.selectedLabel="";else{const a=be(e.modelValue);(n=a.props)!=null&&n.created?(l.createdLabel=a.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=a.currentLabel,l.selected=a,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(a=>{o.push(be(a))}),l.selected=o,V(()=>{W()})},be=n=>{let o;const a=xe(n).toLowerCase()==="object",s=xe(n).toLowerCase()==="null",C=xe(n).toLowerCase()==="undefined";for(let N=l.cachedOptions.size-1;N>=0;N--){const M=ke.value[N];if(a?D(M.value,e.valueKey)===D(n,e.valueKey):M.value===n){o={value:n,currentLabel:M.currentLabel,isDisabled:M.isDisabled};break}}if(o)return o;const j=a?n.label:!s&&!C?n:"",Q={value:n,currentLabel:j};return e.multiple&&(Q.hitState=!1),Q},Be=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>I.value.findIndex(a=>D(a,n)===D(o,n)))):l.hoverIndex=-1:l.hoverIndex=I.value.findIndex(o=>Y(o)===Y(l.selected))},300)},De=()=>{var n,o;qe(),(o=(n=d.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&!e.filterable&&W()},qe=()=>{var n;l.inputWidth=(n=u.value)==null?void 0:n.$el.getBoundingClientRect().width},Fe=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,R(l.query))},We=pl(()=>{Fe()},fe.value),Ke=pl(n=>{R(n.target.value)},fe.value),Z=n=>{cl(e.modelValue,n)||i.emit(ml,n)},Ae=n=>{if(n.target.value.length<=0&&!se()){const o=e.modelValue.slice();o.pop(),i.emit(X,o),Z(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)},Ne=(n,o)=>{const a=l.selected.indexOf(o);if(a>-1&&!y.value){const s=e.modelValue.slice();s.splice(a,1),i.emit(X,s),Z(s),i.emit("remove-tag",o.value)}n.stopPropagation()},J=n=>{n.stopPropagation();const o=e.multiple?[]:"";if(typeof o!="string")for(const a of l.selected)a.isDisabled&&o.push(a.value);i.emit(X,o),Z(o),l.visible=!1,i.emit("clear")},he=(n,o)=>{var a;if(e.multiple){const s=(e.modelValue||[]).slice(),C=re(s,n.value);C>-1?s.splice(C,1):(e.multipleLimit<=0||s.length<e.multipleLimit)&&s.push(n.value),i.emit(X,s),Z(s),n.created&&(l.query="",R(""),l.inputLength=20),e.filterable&&((a=r.value)==null||a.focus())}else i.emit(X,n.value),Z(n.value),l.visible=!1;l.isSilentBlur=o,Re(),!l.visible&&V(()=>{H(n)})},re=(n=[],o)=>{if(!sl(o))return n.indexOf(o);const a=e.valueKey;let s=-1;return n.some((C,j)=>Ie(D(C,a))===D(o,a)?(s=j,!0):!1),s},Re=()=>{l.softFocus=!0;const n=r.value||u.value;n&&(n==null||n.focus())},H=n=>{var o,a,s,C,j;const Q=Array.isArray(n)?n[0]:n;let N=null;if(Q!=null&&Q.value){const M=I.value.filter($=>$.value===Q.value);M.length>0&&(N=M[0].$el)}if(d.value&&N){const M=(C=(s=(a=(o=d.value)==null?void 0:o.popperRef)==null?void 0:a.contentRef)==null?void 0:s.querySelector)==null?void 0:C.call(s,`.${h.be("dropdown","wrap")}`);M&&Tl(M,N)}(j=f.value)==null||j.handleScroll()},He=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},je=(n,o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},Qe=n=>{n.code!==El.backspace&&se(!1),l.inputLength=r.value.value.length*15+20,W()},se=n=>{if(!Array.isArray(l.selected))return;const o=l.selected[l.selected.length-1];if(o)return n===!0||n===!1?(o.hitState=n,n):(o.hitState=!o.hitState,o.hitState)},ue=n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,V(()=>R(o));else{const a=o[o.length-1]||"";l.isOnComposition=!$l(a)}},ge=()=>{V(()=>H(l.selected))},Ge=n=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),i.emit("focus",n))},ye=()=>{var n;l.visible=!1,(n=u.value)==null||n.blur()},Ue=n=>{V(()=>{l.isSilentBlur?l.isSilentBlur=!1:i.emit("blur",n)}),l.softFocus=!1},Xe=n=>{J(n)},Ze=()=>{l.visible=!1},Ce=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},Se=()=>{var n;y.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:l.visible=!l.visible,l.visible&&((n=r.value||u.value)==null||n.focus()))},Je=()=>{l.visible?I.value[l.hoverIndex]&&he(I.value[l.hoverIndex],void 0):Se()},Y=n=>sl(n.value)?D(n.value,e.valueKey):n.value,Ye=p(()=>I.value.filter(n=>n.visible).every(n=>n.disabled)),Oe=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!Ye.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=I.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&Oe(n),V(()=>H(O.value))}};return{optionsArray:I,selectSize:ee,handleResize:De,debouncedOnInputChange:We,debouncedQueryChange:Ke,deletePrevTag:Ae,deleteTag:Ne,deleteSelected:J,handleOptionSelect:he,scrollToOption:H,readonly:g,resetInputHeight:W,showClose:F,iconComponent:te,iconReverse:Ve,showNewOption:Me,collapseTagSize:Pe,setSelected:ae,managePlaceholder:ve,selectDisabled:y,emptyText:ie,toggleLastOptionHitState:se,resetInputState:Qe,handleComposition:ue,onOptionCreate:He,onOptionDestroy:je,handleMenuEnter:ge,handleFocus:Ge,blur:ye,handleBlur:Ue,handleClearClick:Xe,handleClose:Ze,handleKeydownEscape:Ce,toggleMenu:Se,selectOption:Je,getValueKey:Y,navigateOptions:Oe,dropMenuVisible:ze,queryChange:T,groupQueryChange:E,reference:u,input:r,tooltipRef:d,tags:S,selectWrapper:w,scrollbar:f}},fl="ElSelect",nn=Le({name:fl,componentName:fl,components:{ElInput:Vl,ElSelectMenu:_l,ElOption:al,ElTag:Rl,ElScrollbar:Nl,ElTooltip:Kl,ElIcon:kl},directives:{ClickOutside:jl},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:Ml},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},teleported:Al.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:[String,Object],default:Pl},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:[String,Object],default:zl},tagType:{...Hl.type,default:"info"},validateEvent:{type:Boolean,default:!0}},emits:[X,ml,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const i=oe("select"),b=oe("input"),{t:h}=il(),u=en(e),{optionsArray:r,selectSize:d,readonly:S,handleResize:w,collapseTagSize:f,debouncedOnInputChange:O,debouncedQueryChange:T,deletePrevTag:E,deleteTag:t,deleteSelected:c,handleOptionSelect:g,scrollToOption:y,setSelected:F,resetInputHeight:te,managePlaceholder:Ve,showClose:fe,selectDisabled:ie,iconComponent:I,iconReverse:ke,showNewOption:Me,emptyText:ee,toggleLastOptionHitState:Pe,resetInputState:ze,handleComposition:W,onOptionCreate:R,onOptionDestroy:ve,handleMenuEnter:me,handleFocus:ae,blur:be,handleBlur:Be,handleClearClick:De,handleClose:qe,handleKeydownEscape:Fe,toggleMenu:We,selectOption:Ke,getValueKey:Z,navigateOptions:Ae,dropMenuVisible:Ne,reference:J,input:he,tooltipRef:re,tags:Re,selectWrapper:H,scrollbar:He,queryChange:je,groupQueryChange:Qe}=ln(e,u,l),{focus:se}=Ul(J),{inputWidth:ue,selected:ge,inputLength:Ge,filteredOptionsCount:ye,visible:Ue,softFocus:Xe,selectedLabel:Ze,hoverIndex:Ce,query:Se,inputHovering:Je,currentPlaceholder:Y,menuVisibleOnFocus:Ye,isOnComposition:Oe,isSilentBlur:n,options:o,cachedOptions:a,optionsCount:s,prefixWidth:C,tagInMultiLine:j}=nl(u),Q=p(()=>{const $=[i.b()],x=el(d);return x&&$.push(i.m(x)),e.disabled&&$.push(i.m("disabled")),$}),N=p(()=>({maxWidth:`${el(ue)-32}px`,width:"100%"}));bl($e,Te({props:e,options:o,optionsArray:r,cachedOptions:a,optionsCount:s,filteredOptionsCount:ye,hoverIndex:Ce,handleOptionSelect:g,onOptionCreate:R,onOptionDestroy:ve,selectWrapper:H,selected:ge,setSelected:F,queryChange:je,groupQueryChange:Qe})),tl(()=>{u.cachedPlaceHolder=Y.value=e.placeholder||h("el.select.placeholder"),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(Y.value=""),vl(H,w),e.remote&&e.multiple&&te(),V(()=>{const $=J.value&&J.value.$el;if($&&(ue.value=$.getBoundingClientRect().width,l.slots.prefix)){const x=$.querySelector(`.${b.e("prefix")}`);C.value=Math.max(x.getBoundingClientRect().width+5,30)}}),F()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(X,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(X,"");const M=p(()=>{var $,x;return(x=($=re.value)==null?void 0:$.popperRef)==null?void 0:x.contentRef});return{tagInMultiLine:j,prefixWidth:C,selectSize:d,readonly:S,handleResize:w,collapseTagSize:f,debouncedOnInputChange:O,debouncedQueryChange:T,deletePrevTag:E,deleteTag:t,deleteSelected:c,handleOptionSelect:g,scrollToOption:y,inputWidth:ue,selected:ge,inputLength:Ge,filteredOptionsCount:ye,visible:Ue,softFocus:Xe,selectedLabel:Ze,hoverIndex:Ce,query:Se,inputHovering:Je,currentPlaceholder:Y,menuVisibleOnFocus:Ye,isOnComposition:Oe,isSilentBlur:n,options:o,resetInputHeight:te,managePlaceholder:Ve,showClose:fe,selectDisabled:ie,iconComponent:I,iconReverse:ke,showNewOption:Me,emptyText:ee,toggleLastOptionHitState:Pe,resetInputState:ze,handleComposition:W,handleMenuEnter:me,handleFocus:ae,blur:be,handleBlur:Be,handleClearClick:De,handleClose:qe,handleKeydownEscape:Fe,toggleMenu:We,selectOption:Ke,getValueKey:Z,navigateOptions:Ae,dropMenuVisible:Ne,focus:se,reference:J,input:he,tooltipRef:re,popperPaneRef:M,tags:Re,selectWrapper:H,scrollbar:He,wrapperKls:Q,selectTagsStyle:N,nsSelect:i}}}),on={class:"select-trigger"},tn=["disabled","autocomplete"],an={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function rn(e,l,i,b,h,u){const r=_("el-tag"),d=_("el-tooltip"),S=_("el-icon"),w=_("el-input"),f=_("el-option"),O=_("el-scrollbar"),T=_("el-select-menu"),E=Bl("click-outside");return pe((v(),k("div",{ref:"selectWrapper",class:m(e.wrapperKls),onClick:l[22]||(l[22]=G((...t)=>e.toggleMenu&&e.toggleMenu(...t),["stop"]))},[ce(d,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:"bottom-start",teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:L(()=>[P("div",on,[e.multiple?(v(),k("div",{key:0,ref:"tags",class:m(e.nsSelect.e("tags")),style:le(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(v(),k("span",{key:0,class:m([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[ce(r,{closable:!e.selectDisabled&&!e.selected[0].isDisabled,size:e.collapseTagSize,hit:e.selected[0].hitState,type:e.tagType,"disable-transitions":"",onClose:l[0]||(l[0]=t=>e.deleteTag(t,e.selected[0]))},{default:L(()=>[P("span",{class:m(e.nsSelect.e("tags-text")),style:le({maxWidth:e.inputWidth-123+"px"})},U(e.selected[0].currentLabel),7)]),_:1},8,["closable","size","hit","type"]),e.selected.length>1?(v(),K(r,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:L(()=>[e.collapseTagsTooltip?(v(),K(d,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:L(()=>[P("span",{class:m(e.nsSelect.e("tags-text"))},"+ "+U(e.selected.length-1),3)]),content:L(()=>[P("div",{class:m(e.nsSelect.e("collapse-tags"))},[(v(!0),k(_e,null,ul(e.selected.slice(1),(t,c)=>(v(),k("div",{key:c,class:m(e.nsSelect.e("collapse-tag"))},[(v(),K(r,{key:e.getValueKey(t),class:"in-tooltip",closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:g=>e.deleteTag(g,t)},{default:L(()=>[P("span",{class:m(e.nsSelect.e("tags-text")),style:le({maxWidth:e.inputWidth-75+"px"})},U(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(v(),k("span",{key:1,class:m(e.nsSelect.e("tags-text"))},"+ "+U(e.selected.length-1),3))]),_:1},8,["size","type"])):z("v-if",!0)],2)):z("v-if",!0),z(" <div> "),e.collapseTags?z("v-if",!0):(v(),K(Dl,{key:1,onAfterLeave:e.resetInputHeight},{default:L(()=>[P("span",{class:m([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(v(!0),k(_e,null,ul(e.selected,t=>(v(),K(r,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:c=>e.deleteTag(c,t)},{default:L(()=>[P("span",{class:m(e.nsSelect.e("tags-text")),style:le({maxWidth:e.inputWidth-75+"px"})},U(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),z(" </div> "),e.filterable?pe((v(),k("input",{key:2,ref:"input","onUpdate:modelValue":l[1]||(l[1]=t=>e.query=t),type:"text",class:m([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:le({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[2]||(l[2]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:l[3]||(l[3]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onKeyup:l[4]||(l[4]=(...t)=>e.managePlaceholder&&e.managePlaceholder(...t)),onKeydown:[l[5]||(l[5]=(...t)=>e.resetInputState&&e.resetInputState(...t)),l[6]||(l[6]=B(G(t=>e.navigateOptions("next"),["prevent"]),["down"])),l[7]||(l[7]=B(G(t=>e.navigateOptions("prev"),["prevent"]),["up"])),l[8]||(l[8]=B((...t)=>e.handleKeydownEscape&&e.handleKeydownEscape(...t),["esc"])),l[9]||(l[9]=B(G((...t)=>e.selectOption&&e.selectOption(...t),["stop","prevent"]),["enter"])),l[10]||(l[10]=B((...t)=>e.deletePrevTag&&e.deletePrevTag(...t),["delete"])),l[11]||(l[11]=B(t=>e.visible=!1,["tab"]))],onCompositionstart:l[12]||(l[12]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:l[13]||(l[13]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:l[14]||(l[14]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onInput:l[15]||(l[15]=(...t)=>e.debouncedQueryChange&&e.debouncedQueryChange(...t))},null,46,tn)),[[ql,e.query]]):z("v-if",!0)],6)):z("v-if",!0),ce(w,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=t=>e.selectedLabel=t),type:"text",placeholder:e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:m([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=B(G(t=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[18]||(l[18]=B(G(t=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),B(G(e.selectOption,["stop","prevent"]),["enter"]),B(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=B(t=>e.visible=!1,["tab"]))],onMouseenter:l[20]||(l[20]=t=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=t=>e.inputHovering=!1)},Fl({suffix:L(()=>[e.iconComponent&&!e.showClose?(v(),K(S,{key:0,class:m([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:L(()=>[(v(),K(dl(e.iconComponent)))]),_:1},8,["class"])):z("v-if",!0),e.showClose&&e.clearIcon?(v(),K(S,{key:1,class:m([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:L(()=>[(v(),K(dl(e.clearIcon)))]),_:1},8,["class","onClick"])):z("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:L(()=>[P("div",an,[ne(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])])]),content:L(()=>[ce(T,null,{default:L(()=>[pe(ce(O,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:m([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&e.filteredOptionsCount===0)])},{default:L(()=>[e.showNewOption?(v(),K(f,{key:0,value:e.query,created:!0},null,8,["value"])):z("v-if",!0),ne(e.$slots,"default")]),_:3},8,["wrap-class","view-class","class"]),[[ol,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(v(),k(_e,{key:0},[e.$slots.empty?ne(e.$slots,"empty",{key:0}):(v(),k("p",{key:1,class:m(e.nsSelect.be("dropdown","empty"))},U(e.emptyText),3))],64)):z("v-if",!0)]),_:3})]),_:3},8,["visible","teleported","popper-class","effect","transition","persistent","onShow"])],2)),[[E,e.handleClose,e.popperPaneRef]])}var sn=Ee(nn,[["render",rn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const un=Le({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=oe("select"),i=A(!0),b=ll(),h=A([]);bl(gl,Te({...nl(e)}));const u=we($e);tl(()=>{h.value=r(b.subTree)});const r=S=>{const w=[];return Array.isArray(S.children)&&S.children.forEach(f=>{var O;f.type&&f.type.name==="ElOption"&&f.component&&f.component.proxy?w.push(f.component.proxy):(O=f.children)!=null&&O.length&&w.push(...r(f))}),w},{groupQueryChange:d}=Ie(u);return q(d,()=>{i.value=h.value.some(S=>S.visible===!0)}),{visible:i,ns:l}}});function dn(e,l,i,b,h,u){return pe((v(),k("ul",{class:m(e.ns.be("group","wrap"))},[P("li",{class:m(e.ns.be("group","title"))},U(e.label),3),P("li",null,[P("ul",{class:m(e.ns.b("group"))},[ne(e.$slots,"default")],2)])],2)),[[ol,e.visible]])}var yl=Ee(un,[["render",dn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const hn=Wl(sn,{Option:al,OptionGroup:yl}),gn=hl(al);hl(yl);export{gn as E,hn as a};
