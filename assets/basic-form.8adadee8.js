import{aH as da,bA as ca,bB as me,v as Y,x as Ae,d as z,E as L,L as Ie,C as B,b as G,o as _,f as A,g as V,n as f,i as e,Y as O,h as m,a0 as T,_ as Q,z as fe,bd as pa,G as Te,an as ma,a6 as Pe,A as J,a7 as X,B as H,D as Re,ag as $e,aa as Ne,bC as Oe,ac as Ue,J as he,k as ee,ap as ye,S as _e,Z as be,N as Ge,r as Me,H as fa,F as le,a2 as xe,a3 as ze,a4 as Ce,V as va,bf as ba,X as U,w as h,$ as oe,a5 as Z,R as we,aw as ga,a9 as ha,bD as Fe,bE as ya}from"./index.4f42a7a5.js";import{E as _a}from"./el-card.7ef0ff31.js";import{E as Ea,a as ka}from"./el-form-item.09a2f7e3.js";import{u as Sa,a as Ke,b as qe,d as Va,E as Ba}from"./el-button.39cb793c.js";import{b as Ca,a as wa,c as Fa}from"./el-checkbox-group.d07d7e35.js";import{E as Da,a as Aa}from"./el-checkbox.917b49bc.js";import{E as Ia}from"./el-input.57d3c243.js";import"./el-scrollbar.bdd670a5.js";import{E as Ta}from"./el-col.467ec9cb.js";import{t as Pa,u as Ra,b as $a,a as Na,T as De,d as q,c as Oa,e as Ua,f as Ga,D as Ma,C as xa,E as za}from"./el-date-picker.b62541ea.js";/* empty css               */import{E as Ka,a as qa}from"./el-select.630ab4fc.js";import{u as Ha}from"./index.e779c815.js";import{s as He,S as La,c as ja}from"./_baseIsEqual.9ce57f19.js";import{i as Ya}from"./validator.daecee69.js";import{U as j,C as ue,d as Le,I as ge,t as Wa}from"./event.c507d8ad.js";import"./index.f15024e9.js";import"./index.944f5ab2.js";import"./index.84ded2e5.js";import"./scroll.0a04e903.js";function Za(){}function Ja(t){return t!==t}function Xa(t,o,l){for(var a=l-1,v=t.length;++a<v;)if(t[a]===o)return a;return-1}function Qa(t,o,l){return o===o?Xa(t,o,l):Ca(t,Ja,l)}function et(t,o){var l=t==null?0:t.length;return!!l&&Qa(t,o,0)>-1}function at(t){return da(t)&&ca(t)}function tt(t,o,l){for(var a=-1,v=t==null?0:t.length;++a<v;)if(l(o,t[a]))return!0;return!1}var nt=1/0,ot=me&&1/He(new me([,-0]))[1]==nt?function(t){return new me(t)}:Za;const lt=ot;var st=200;function ut(t,o,l){var a=-1,v=et,p=t.length,u=!0,c=[],n=c;if(l)u=!1,v=tt;else if(p>=st){var y=o?null:lt(t);if(y)return He(y);u=!1,v=ja,n=new La}else n=o?[]:c;e:for(;++a<p;){var b=t[a],d=o?o(b):b;if(b=l||b!==0?b:0,u&&d===d){for(var g=n.length;g--;)if(n[g]===d)continue e;o&&n.push(d),c.push(b)}else v(n,d,l)||(n!==c&&n.push(d),c.push(b))}return c}var it=wa(function(t){return ut(Fa(t,1,at,!0))});const ve=it,je=Symbol("radioGroupKey"),rt=Y({...Pa,parsedValue:{type:Ae(Array)}}),dt=["disabled"],ct=z({__name:"panel-time-range",props:rt,emits:["pick","select-range","set-picker-option"],setup(t,{emit:o}){const l=t,a=(i,r)=>{const E=[];for(let F=i;F<=r;F++)E.push(F);return E},{t:v,lang:p}=Ha(),u=L("time"),c=L("picker"),n=Ie("EP_PICKER_BASE"),{arrowControl:y,disabledHours:b,disabledMinutes:d,disabledSeconds:g,defaultValue:w}=n.props,C=B(()=>l.parsedValue[0]),$=B(()=>l.parsedValue[1]),M=Ra(l),k=()=>{o("pick",M.value,!1)},D=B(()=>l.format.includes("ss")),x=B(()=>l.format.includes("A")?"A":l.format.includes("a")?"a":""),W=(i=!1)=>{o("pick",[C.value,$.value],i)},S=i=>{ae(i.millisecond(0),$.value)},s=i=>{ae(C.value,i.millisecond(0))},I=i=>{const r=i.map(F=>q(F).locale(p.value)),E=ke(r);return r[0].isSame(E[0])&&r[1].isSame(E[1])},ae=(i,r)=>{o("pick",[i,r],!0)},te=B(()=>C.value>$.value),ne=G([0,2]),Qe=(i,r)=>{o("select-range",i,r,"min"),ne.value=[i,r]},Ee=B(()=>D.value?11:8),ea=(i,r)=>{o("select-range",i,r,"max");const E=e(Ee);ne.value=[i+E,r+E]},aa=i=>{const r=D.value?[0,3,6,11,14,17]:[0,3,8,11],E=["hours","minutes"].concat(D.value?["seconds"]:[]),P=(r.indexOf(ne.value[0])+i+r.length)%r.length,R=r.length/2;P<R?ce.start_emitSelectRange(E[P]):ce.end_emitSelectRange(E[P-R])},ta=i=>{const r=i.code,{left:E,right:F,up:P,down:R}=pa;if([E,F].includes(r)){aa(r===E?-1:1),i.preventDefault();return}if([P,R].includes(r)){const N=r===P?-1:1,K=ne.value[0]<Ee.value?"start":"end";ce[`${K}_scrollDown`](N),i.preventDefault();return}},ie=(i,r)=>{const E=b?b(i):[],F=i==="start",R=(r||(F?$.value:C.value)).hour(),N=F?a(R+1,23):a(0,R-1);return ve(E,N)},re=(i,r,E)=>{const F=d?d(i,r):[],P=r==="start",R=E||(P?$.value:C.value),N=R.hour();if(i!==N)return F;const K=R.minute(),pe=P?a(K+1,59):a(0,K-1);return ve(F,pe)},de=(i,r,E,F)=>{const P=g?g(i,r,E):[],R=E==="start",N=F||(R?$.value:C.value),K=N.hour(),pe=N.minute();if(i!==K||r!==pe)return P;const Be=N.second(),ra=R?a(Be+1,59):a(0,Be-1);return ve(P,ra)},ke=([i,r])=>[Se(i,"start",!0,r),Se(r,"end",!1,i)],{getAvailableHours:na,getAvailableMinutes:oa,getAvailableSeconds:la}=$a(ie,re,de),{timePickerOptions:ce,getAvailableTime:Se,onSetOption:Ve}=Na({getAvailableHours:na,getAvailableMinutes:oa,getAvailableSeconds:la}),sa=i=>i?fe(i)?i.map(r=>q(r,l.format).locale(p.value)):q(i,l.format).locale(p.value):null,ua=i=>i?fe(i)?i.map(r=>r.format(l.format)):i.format(l.format):null,ia=()=>{if(fe(w))return w.map(r=>q(r).locale(p.value));const i=q(w).locale(p.value);return[i,i.add(60,"m")]};return o("set-picker-option",["formatToString",ua]),o("set-picker-option",["parseUserInput",sa]),o("set-picker-option",["isValidValue",I]),o("set-picker-option",["handleKeydownInput",ta]),o("set-picker-option",["getDefaultValue",ia]),o("set-picker-option",["getRangeAvailableTime",ke]),(i,r)=>i.actualVisible?(_(),A("div",{key:0,class:f([e(u).b("range-picker"),e(c).b("panel")])},[V("div",{class:f(e(u).be("range-picker","content"))},[V("div",{class:f(e(u).be("range-picker","cell"))},[V("div",{class:f(e(u).be("range-picker","header"))},O(e(v)("el.datepicker.startTime")),3),V("div",{class:f([e(u).be("range-picker","body"),e(u).be("panel","content"),e(u).is("arrow",e(y)),{"has-seconds":e(D)}])},[m(De,{ref:"minSpinner",role:"start","show-seconds":e(D),"am-pm-mode":e(x),"arrow-control":e(y),"spinner-date":e(C),"disabled-hours":ie,"disabled-minutes":re,"disabled-seconds":de,onChange:S,onSetOption:e(Ve),onSelectRange:Qe},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2),V("div",{class:f(e(u).be("range-picker","cell"))},[V("div",{class:f(e(u).be("range-picker","header"))},O(e(v)("el.datepicker.endTime")),3),V("div",{class:f([e(u).be("range-picker","body"),e(u).be("panel","content"),e(u).is("arrow",e(y)),{"has-seconds":e(D)}])},[m(De,{ref:"maxSpinner",role:"end","show-seconds":e(D),"am-pm-mode":e(x),"arrow-control":e(y),"spinner-date":e($),"disabled-hours":ie,"disabled-minutes":re,"disabled-seconds":de,onChange:s,onSetOption:e(Ve),onSelectRange:ea},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2)],2),V("div",{class:f(e(u).be("panel","footer"))},[V("button",{type:"button",class:f([e(u).be("panel","btn"),"cancel"]),onClick:r[0]||(r[0]=E=>k())},O(e(v)("el.datepicker.cancel")),3),V("button",{type:"button",class:f([e(u).be("panel","btn"),"confirm"]),disabled:e(te),onClick:r[1]||(r[1]=E=>W())},O(e(v)("el.datepicker.confirm")),11,dt)],2)],2)):T("v-if",!0)}});var pt=Q(ct,[["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-range.vue"]]);q.extend(Oa);var mt=z({name:"ElTimePicker",install:null,props:{...Ua,isRange:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,o){const l=G(),[a,v]=t.isRange?["timerange",pt]:["time",Ga],p=u=>o.emit("update:modelValue",u);return Te("ElPopperOptions",t.popperOptions),o.expose({focus:u=>{var c;(c=l.value)==null||c.handleFocusInput(u)},blur:u=>{var c;(c=l.value)==null||c.handleBlurInput(u)}}),()=>{var u;const c=(u=t.format)!=null?u:Ma;return m(xa,ma(t,{ref:l,type:a,format:c,"onUpdate:modelValue":p}),{default:n=>m(v,n,null)})}}});const se=mt;se.install=t=>{t.component(se.name,se)};const ft=se,Ye=Y({size:Pe,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),vt=Y({...Ye,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),We={[j]:t=>J(t)||X(t)||H(t),[ue]:t=>J(t)||X(t)||H(t)},Ze=(t,o)=>{const l=G(),a=Ie(je,void 0),v=B(()=>!!a),p=B({get(){return v.value?a.modelValue:t.modelValue},set(b){v.value?a.changeEvent(b):o&&o(j,b),l.value.checked=t.modelValue===t.label}}),u=Re(B(()=>a==null?void 0:a.size)),c=$e(B(()=>a==null?void 0:a.disabled)),n=G(!1),y=B(()=>c.value||v.value&&p.value!==t.label?-1:0);return{radioRef:l,isGroup:v,radioGroup:a,focus:n,size:u,disabled:c,tabIndex:y,modelValue:p}},bt=["value","name","disabled"],gt={name:"ElRadio"},ht=z({...gt,props:vt,emits:We,setup(t,{emit:o}){const l=t,a=L("radio"),{radioRef:v,radioGroup:p,focus:u,size:c,disabled:n,modelValue:y}=Ze(l,o);function b(){_e(()=>o("change",y.value))}return(d,g)=>{var w;return _(),A("label",{class:f([e(a).b(),e(a).is("disabled",e(n)),e(a).is("focus",e(u)),e(a).is("bordered",d.border),e(a).is("checked",e(y)===d.label),e(a).m(e(c))])},[V("span",{class:f([e(a).e("input"),e(a).is("disabled",e(n)),e(a).is("checked",e(y)===d.label)])},[Ne(V("input",{ref_key:"radioRef",ref:v,"onUpdate:modelValue":g[0]||(g[0]=C=>Ue(y)?y.value=C:null),class:f(e(a).e("original")),value:d.label,name:d.name||((w=e(p))==null?void 0:w.name),disabled:e(n),type:"radio",onFocus:g[1]||(g[1]=C=>u.value=!0),onBlur:g[2]||(g[2]=C=>u.value=!1),onChange:b},null,42,bt),[[Oe,e(y)]]),V("span",{class:f(e(a).e("inner"))},null,2)],2),V("span",{class:f(e(a).e("label")),onKeydown:g[3]||(g[3]=ye(()=>{},["stop"]))},[he(d.$slots,"default",{},()=>[ee(O(d.label),1)])],34)],2)}}});var yt=Q(ht,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const _t=Y({...Ye,name:{type:String,default:""}}),Et=["value","name","disabled"],kt={name:"ElRadioButton"},St=z({...kt,props:_t,setup(t){const o=t,l=L("radio"),{radioRef:a,focus:v,size:p,disabled:u,modelValue:c,radioGroup:n}=Ze(o),y=B(()=>({backgroundColor:(n==null?void 0:n.fill)||"",borderColor:(n==null?void 0:n.fill)||"",boxShadow:n!=null&&n.fill?`-1px 0 0 0 ${n.fill}`:"",color:(n==null?void 0:n.textColor)||""}));return(b,d)=>{var g;return _(),A("label",{class:f([e(l).b("button"),e(l).is("active",e(c)===b.label),e(l).is("disabled",e(u)),e(l).is("focus",e(v)),e(l).bm("button",e(p))])},[Ne(V("input",{ref_key:"radioRef",ref:a,"onUpdate:modelValue":d[0]||(d[0]=w=>Ue(c)?c.value=w:null),class:f(e(l).be("button","original-radio")),value:b.label,type:"radio",name:b.name||((g=e(n))==null?void 0:g.name),disabled:e(u),onFocus:d[1]||(d[1]=w=>v.value=!0),onBlur:d[2]||(d[2]=w=>v.value=!1)},null,42,Et),[[Oe,e(c)]]),V("span",{class:f(e(l).be("button","inner")),style:be(e(c)===b.label?e(y):{}),onKeydown:d[3]||(d[3]=ye(()=>{},["stop"]))},[he(b.$slots,"default",{},()=>[ee(O(b.label),1)])],38)],2)}}});var Je=Q(St,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const Vt=Y({id:{type:String,default:void 0},size:Pe,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),Bt=We,Ct=["id","aria-label","aria-labelledby"],wt={name:"ElRadioGroup"},Ft=z({...wt,props:Vt,emits:Bt,setup(t,{emit:o}){const l=t,a=L("radio"),v=Sa(),p=G(),{formItem:u}=Ke(),{inputId:c,isLabeledByFormItem:n}=qe(l,{formItemContext:u}),y=d=>{o(j,d),_e(()=>o("change",d))};Ge(()=>{const d=p.value.querySelectorAll("[type=radio]"),g=d[0];!Array.from(d).some(w=>w.checked)&&g&&(g.tabIndex=0)});const b=B(()=>l.name||v.value);return Te(je,Me({...fa(l),changeEvent:y,name:b})),le(()=>l.modelValue,()=>{l.validateEvent&&(u==null||u.validate("change").catch(d=>Le()))}),(d,g)=>(_(),A("div",{id:e(c),ref_key:"radioGroupRef",ref:p,class:f(e(a).b("group")),role:"radiogroup","aria-label":e(n)?void 0:d.label||"radio-group","aria-labelledby":e(n)?e(u).labelId:void 0},[he(d.$slots,"default")],10,Ct))}});var Xe=Q(Ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const Dt=xe(yt,{RadioButton:Je,RadioGroup:Xe}),At=ze(Xe);ze(Je);const It=Y({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:Ce,default:""},inactiveIcon:{type:Ce,default:""},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:Ae(Function)},size:{type:String,validator:Ya},tabindex:{type:[String,Number]}}),Tt={[j]:t=>H(t)||J(t)||X(t),[ue]:t=>H(t)||J(t)||X(t),[ge]:t=>H(t)||J(t)||X(t)},Pt=["onClick"],Rt=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],$t=["aria-hidden"],Nt=["aria-hidden"],Ot=["aria-hidden"],Ut=["aria-hidden"],Gt={name:"ElSwitch"},Mt=z({...Gt,props:It,emits:Tt,setup(t,{expose:o,emit:l}){const a=t,v="ElSwitch",p=ha(),{formItem:u}=Ke(),c=Re(),n=L("switch");Va({from:'"value"',replacement:'"model-value" or "v-model"',scope:v,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},B(()=>{var s;return!!((s=p.vnode.props)!=null&&s.value)}));const{inputId:y}=qe(a,{formItemContext:u}),b=$e(B(()=>a.loading)),d=G(a.modelValue!==!1),g=G(),w=G(),C=B(()=>[n.b(),n.m(c.value),n.is("disabled",b.value),n.is("checked",k.value)]),$=B(()=>({width:va(a.width)}));le(()=>a.modelValue,()=>{d.value=!0}),le(()=>a.value,()=>{d.value=!1});const M=B(()=>d.value?a.modelValue:a.value),k=B(()=>M.value===a.activeValue);[a.activeValue,a.inactiveValue].includes(M.value)||(l(j,a.inactiveValue),l(ue,a.inactiveValue),l(ge,a.inactiveValue)),le(k,s=>{var I;g.value.checked=s,a.validateEvent&&((I=u==null?void 0:u.validate)==null||I.call(u,"change").catch(ae=>Le()))});const D=()=>{const s=k.value?a.inactiveValue:a.activeValue;l(j,s),l(ue,s),l(ge,s),_e(()=>{g.value.checked=k.value})},x=()=>{if(b.value)return;const{beforeChange:s}=a;if(!s){D();return}const I=s();[Fe(I),H(I)].includes(!0)||Wa(v,"beforeChange must return type `Promise<boolean>` or `boolean`"),Fe(I)?I.then(te=>{te&&D()}).catch(te=>{}):I&&D()},W=B(()=>n.cssVarBlock({...a.activeColor?{"on-color":a.activeColor}:null,...a.inactiveColor?{"off-color":a.inactiveColor}:null,...a.borderColor?{"border-color":a.borderColor}:null})),S=()=>{var s,I;(I=(s=g.value)==null?void 0:s.focus)==null||I.call(s)};return Ge(()=>{g.value.checked=k.value}),o({focus:S,checked:k}),(s,I)=>(_(),A("div",{class:f(e(C)),style:be(e(W)),onClick:ye(x,["prevent"])},[V("input",{id:e(y),ref_key:"input",ref:g,class:f(e(n).e("input")),type:"checkbox",role:"switch","aria-checked":e(k),"aria-disabled":e(b),name:s.name,"true-value":s.activeValue,"false-value":s.inactiveValue,disabled:e(b),tabindex:s.tabindex,onChange:D,onKeydown:ba(x,["enter"])},null,42,Rt),!s.inlinePrompt&&(s.inactiveIcon||s.inactiveText)?(_(),A("span",{key:0,class:f([e(n).e("label"),e(n).em("label","left"),e(n).is("active",!e(k))])},[s.inactiveIcon?(_(),U(e(Z),{key:0},{default:h(()=>[(_(),U(oe(s.inactiveIcon)))]),_:1})):T("v-if",!0),!s.inactiveIcon&&s.inactiveText?(_(),A("span",{key:1,"aria-hidden":e(k)},O(s.inactiveText),9,$t)):T("v-if",!0)],2)):T("v-if",!0),V("span",{ref_key:"core",ref:w,class:f(e(n).e("core")),style:be(e($))},[s.inlinePrompt?(_(),A("div",{key:0,class:f(e(n).e("inner"))},[s.activeIcon||s.inactiveIcon?(_(),A(we,{key:0},[s.activeIcon?(_(),U(e(Z),{key:0,class:f([e(n).is("icon"),e(k)?e(n).is("show"):e(n).is("hide")])},{default:h(()=>[(_(),U(oe(s.activeIcon)))]),_:1},8,["class"])):T("v-if",!0),s.inactiveIcon?(_(),U(e(Z),{key:1,class:f([e(n).is("icon"),e(k)?e(n).is("hide"):e(n).is("show")])},{default:h(()=>[(_(),U(oe(s.inactiveIcon)))]),_:1},8,["class"])):T("v-if",!0)],64)):s.activeText||s.inactiveIcon?(_(),A(we,{key:1},[s.activeText?(_(),A("span",{key:0,class:f([e(n).is("text"),e(k)?e(n).is("show"):e(n).is("hide")]),"aria-hidden":!e(k)},O(s.activeText.substring(0,3)),11,Nt)):T("v-if",!0),s.inactiveText?(_(),A("span",{key:1,class:f([e(n).is("text"),e(k)?e(n).is("hide"):e(n).is("show")]),"aria-hidden":e(k)},O(s.inactiveText.substring(0,3)),11,Ot)):T("v-if",!0)],64)):T("v-if",!0)],2)):T("v-if",!0),V("div",{class:f(e(n).e("action"))},[s.loading?(_(),U(e(Z),{key:0,class:f(e(n).is("loading"))},{default:h(()=>[m(e(ga))]),_:1},8,["class"])):T("v-if",!0)],2)],6),!s.inlinePrompt&&(s.activeIcon||s.activeText)?(_(),A("span",{key:1,class:f([e(n).e("label"),e(n).em("label","right"),e(n).is("active",e(k))])},[s.activeIcon?(_(),U(e(Z),{key:0},{default:h(()=>[(_(),U(oe(s.activeIcon)))]),_:1})):T("v-if",!0),!s.activeIcon&&s.activeText?(_(),A("span",{key:1,"aria-hidden":!e(k)},O(s.activeText),9,Ut)):T("v-if",!0)],2)):T("v-if",!0)],14,Pt))}});var xt=Q(Mt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const zt=xe(xt);const Kt=V("div",{title:"\u57FA\u7840\u8868\u5355",desc:"\u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002"},null,-1),qt=ee(" - "),Ht=ee(" \u7ACB\u5373\u521B\u5EFA "),Lt=ee(" \u91CD\u7F6E "),fn=z({__name:"basic-form",setup(t){const o=Me({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),l={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0",trigger:"blur"},{min:3,max:5,message:"\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26",trigger:"blur"}],region:{required:!0,message:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF",trigger:"change"},date1:{type:"date",required:!0,message:"\u8BF7\u9009\u62E9\u65E5\u671F",trigger:"change"},date2:{type:"date",required:!0,message:"\u8BF7\u9009\u62E9\u65F6\u95F4",trigger:"change"},type:{type:"array",required:!0,message:"\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6D3B\u52A8\u6027\u8D28",trigger:"change"},resource:{required:!0,message:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u8D44\u6E90",trigger:"change"},desc:{required:!0,message:"\u8BF7\u586B\u5199\u6D3B\u52A8\u5F62\u5F0F",trigger:"blur"}};async function a(){ya.success("\u521B\u5EFA\u6210\u529F")}return(v,p)=>{const u=Ia,c=Ea,n=Ka,y=qa,b=za,d=Ta,g=ft,w=zt,C=Da,$=Aa,M=Dt,k=At,D=Ba,x=ka,W=_a;return _(),A("div",null,[Kt,m(W,{"m-3":"",shadow:"never"},{default:h(()=>[m(x,{ref:"form$",class:"max-w-600px mx-auto py-3","label-position":"top",model:o,rules:l},{default:h(()=>[m(c,{label:"\u6D3B\u52A8\u540D\u79F0",prop:"name"},{default:h(()=>[m(u,{modelValue:o.name,"onUpdate:modelValue":p[0]||(p[0]=S=>o.name=S)},null,8,["modelValue"])]),_:1}),m(c,{label:"\u6D3B\u52A8\u533A\u57DF",prop:"region"},{default:h(()=>[m(y,{modelValue:o.region,"onUpdate:modelValue":p[1]||(p[1]=S=>o.region=S),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:h(()=>[m(n,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),m(n,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),m(c,{label:"\u6D3B\u52A8\u65F6\u95F4",required:""},{default:h(()=>[m(d,{span:11},{default:h(()=>[m(c,{prop:"date1"},{default:h(()=>[m(b,{modelValue:o.date1,"onUpdate:modelValue":p[2]||(p[2]=S=>o.date1=S),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),m(d,{class:"text-center",span:1},{default:h(()=>[qt]),_:1}),m(d,{span:11},{default:h(()=>[m(c,{prop:"date2"},{default:h(()=>[m(g,{modelValue:o.date2,"onUpdate:modelValue":p[3]||(p[3]=S=>o.date2=S),placeholder:"\u9009\u62E9\u65F6\u95F4",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),m(c,{label:"\u5373\u65F6\u914D\u9001",prop:"delivery"},{default:h(()=>[m(w,{modelValue:o.delivery,"onUpdate:modelValue":p[4]||(p[4]=S=>o.delivery=S)},null,8,["modelValue"])]),_:1}),m(c,{label:"\u6D3B\u52A8\u6027\u8D28",prop:"type"},{default:h(()=>[m($,{modelValue:o.type,"onUpdate:modelValue":p[5]||(p[5]=S=>o.type=S)},{default:h(()=>[m(C,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),m(C,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"}),m(C,{label:"\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8",name:"type"}),m(C,{label:"\u5355\u7EAF\u54C1\u724C\u66DD\u5149",name:"type"})]),_:1},8,["modelValue"])]),_:1}),m(c,{label:"\u7279\u6B8A\u8D44\u6E90",prop:"resource"},{default:h(()=>[m(k,{modelValue:o.resource,"onUpdate:modelValue":p[6]||(p[6]=S=>o.resource=S)},{default:h(()=>[m(M,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),m(M,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),m(c,{label:"\u6D3B\u52A8\u5F62\u5F0F",prop:"desc"},{default:h(()=>[m(u,{modelValue:o.desc,"onUpdate:modelValue":p[7]||(p[7]=S=>o.desc=S),type:"textarea"},null,8,["modelValue"])]),_:1}),m(c,null,{default:h(()=>[m(D,{type:"primary",onClick:p[8]||(p[8]=S=>a())},{default:h(()=>[Ht]),_:1}),m(D,null,{default:h(()=>[Lt]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})])}}});export{fn as default};