import{E as U,aq as ne,y as g,I as N,C as D,al as A,ak as O,B,L as G,ay as oe,W as M,A as R,Y as P,d as F,K as j,O as V,o as y,a6 as W,w as q,e as T,$ as S,az as I,a4 as e,c as x,aA as L,a3 as h,a5 as z,a2 as te,g as K,ad as Y,a1 as $,a7 as H,af as w,ae as se,am as ue,an as ie,ai as re,ax as J}from"./index.2eb95586.js";import{u as de,a as Q}from"./el-button.413b0494.js";import{U as E}from"./el-form-item.c06ca56f.js";import{d as X}from"./error.0cc953a0.js";const ce={modelValue:{type:Array,default:()=>[]},disabled:Boolean,min:{type:Number,default:void 0},max:{type:Number,default:void 0},size:U,id:{type:String,default:void 0},label:{type:String,default:void 0},fill:{type:String,default:void 0},textColor:{type:String,default:void 0},tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}},Z={modelValue:{type:[Number,String,Boolean],default:()=>{}},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:U,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},C=()=>{const{form:l,formItem:i}=de(),t=ne("CheckboxGroup",{}),r=g(()=>t&&(t==null?void 0:t.name)==="ElCheckboxGroup"),b=g(()=>i==null?void 0:i.size);return{isGroup:r,checkboxGroup:t,elForm:l,elFormItemSize:b,elFormItem:i}},be=(l,{elFormItem:i})=>{const{inputId:t,isLabeledByFormItem:r}=Q(l,{formItemContext:i});return{isLabeledByFormItem:r,groupId:t}},ve=l=>{const i=B(!1),{emit:t}=R(),{isGroup:r,checkboxGroup:b,elFormItem:v}=C(),m=B(!1);return{model:g({get(){var s,u;return r.value?(s=b.modelValue)==null?void 0:s.value:(u=l.modelValue)!=null?u:i.value},set(s){var u;r.value&&Array.isArray(s)?(m.value=b.max!==void 0&&s.length>b.max.value,m.value===!1&&((u=b==null?void 0:b.changeEvent)==null||u.call(b,s))):(t(E,s),i.value=s)}}),isGroup:r,isLimitExceeded:m,elFormItem:v}},me=(l,i,{model:t})=>{const{isGroup:r,checkboxGroup:b}=C(),v=B(!1),m=G(b==null?void 0:b.checkboxGroupSize,{prop:!0}),p=g(()=>{const n=t.value;return oe(n)==="[object Boolean]"?n:Array.isArray(n)?n.includes(l.label):n!=null?n===l.trueLabel:!!n}),s=G(g(()=>{var n;return r.value?(n=b==null?void 0:b.checkboxGroupSize)==null?void 0:n.value:void 0})),u=g(()=>!!(i.default||l.label));return{isChecked:p,focus:v,size:m,checkboxSize:s,hasOwnLabel:u}},fe=(l,{model:i,isChecked:t})=>{const{elForm:r,isGroup:b,checkboxGroup:v}=C(),m=g(()=>{var s,u;const n=(s=v.max)==null?void 0:s.value,k=(u=v.min)==null?void 0:u.value;return!!(n||k)&&i.value.length>=n&&!t.value||i.value.length<=k&&t.value});return{isDisabled:g(()=>{var s,u;const n=l.disabled||(r==null?void 0:r.disabled);return(u=b.value?((s=v.disabled)==null?void 0:s.value)||n||m.value:n)!=null?u:!1}),isLimitDisabled:m}},pe=(l,{model:i})=>{function t(){Array.isArray(i.value)&&!i.value.includes(l.label)?i.value.push(l.label):i.value=l.trueLabel||!0}l.checked&&t()},ke=(l,{model:i,isLimitExceeded:t,hasOwnLabel:r,isDisabled:b,isLabeledByFormItem:v})=>{const{elFormItem:m,checkboxGroup:p}=C(),{emit:s}=R();function u(a){var c,f;return a===l.trueLabel||a===!0?(c=l.trueLabel)!=null?c:!0:(f=l.falseLabel)!=null?f:!1}function n(a,c){s("change",u(a),c)}function k(a){if(t.value)return;const c=a.target;s("change",u(c.checked),a)}async function d(a){t.value||!r.value&&!b.value&&v.value&&(i.value=u([!1,l.falseLabel].includes(i.value)),await P(),n(i.value,a))}const o=g(()=>{var a;return((a=p.validateEvent)==null?void 0:a.value)||l.validateEvent});return M(()=>l.modelValue,()=>{o.value&&(m==null||m.validate("change").catch(a=>X()))}),{handleChange:k,onClickRoot:d}},_={[E]:l=>N(l)||D(l)||A(l),change:l=>N(l)||D(l)||A(l)},he={[E]:l=>O(l),change:l=>O(l)},ee=(l,i)=>{const{model:t,isGroup:r,isLimitExceeded:b,elFormItem:v}=ve(l),{focus:m,size:p,isChecked:s,checkboxSize:u,hasOwnLabel:n}=me(l,i,{model:t}),{isDisabled:k}=fe(l,{model:t,isChecked:s}),{inputId:d,isLabeledByFormItem:o}=Q(l,{formItemContext:v,disableIdGeneration:n,disableIdManagement:r}),{handleChange:a,onClickRoot:c}=ke(l,{model:t,isLimitExceeded:b,hasOwnLabel:n,isDisabled:k,isLabeledByFormItem:o});return pe(l,{model:t}),{elFormItem:v,inputId:d,isLabeledByFormItem:o,isChecked:s,isDisabled:k,isGroup:r,checkboxSize:u,hasOwnLabel:n,model:t,handleChange:a,onClickRoot:c,focus:m,size:p}},ge=["tabindex","role","aria-checked"],ye=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],xe=["id","aria-hidden","disabled","value","name","tabindex"],Ce={name:"ElCheckbox"},Se=F({...Ce,props:Z,emits:_,setup(l){const i=l,t=j(),{inputId:r,isLabeledByFormItem:b,isChecked:v,isDisabled:m,checkboxSize:p,hasOwnLabel:s,model:u,handleChange:n,onClickRoot:k,focus:d}=ee(i,t),o=V("checkbox");return(a,c)=>(y(),W(H(!e(s)&&e(b)?"span":"label"),{class:h([e(o).b(),e(o).m(e(p)),e(o).is("disabled",e(m)),e(o).is("bordered",a.border),e(o).is("checked",e(v))]),"aria-controls":a.indeterminate?a.controls:null,onClick:e(k)},{default:q(()=>[T("span",{class:h([e(o).e("input"),e(o).is("disabled",e(m)),e(o).is("checked",e(v)),e(o).is("indeterminate",a.indeterminate),e(o).is("focus",e(d))]),tabindex:a.indeterminate?0:void 0,role:a.indeterminate?"checkbox":void 0,"aria-checked":a.indeterminate?"mixed":void 0},[a.trueLabel||a.falseLabel?S((y(),x("input",{key:0,id:e(r),"onUpdate:modelValue":c[0]||(c[0]=f=>L(u)?u.value=f:null),class:h(e(o).e("original")),type:"checkbox","aria-hidden":a.indeterminate?"true":"false",name:a.name,tabindex:a.tabindex,disabled:e(m),"true-value":a.trueLabel,"false-value":a.falseLabel,onChange:c[1]||(c[1]=(...f)=>e(n)&&e(n)(...f)),onFocus:c[2]||(c[2]=f=>d.value=!0),onBlur:c[3]||(c[3]=f=>d.value=!1)},null,42,ye)),[[I,e(u)]]):S((y(),x("input",{key:1,id:e(r),"onUpdate:modelValue":c[4]||(c[4]=f=>L(u)?u.value=f:null),class:h(e(o).e("original")),type:"checkbox","aria-hidden":a.indeterminate?"true":"false",disabled:e(m),value:a.label,name:a.name,tabindex:a.tabindex,onChange:c[5]||(c[5]=(...f)=>e(n)&&e(n)(...f)),onFocus:c[6]||(c[6]=f=>d.value=!0),onBlur:c[7]||(c[7]=f=>d.value=!1)},null,42,xe)),[[I,e(u)]]),T("span",{class:h(e(o).e("inner"))},null,2)],10,ge),e(s)?(y(),x("span",{key:0,class:h(e(o).e("label"))},[z(a.$slots,"default"),a.$slots.default?$("v-if",!0):(y(),x(te,{key:0},[K(Y(a.label),1)],64))],2)):$("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var Ie=w(Se,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const Le=["name","tabindex","disabled","true-value","false-value"],Ee=["name","tabindex","disabled","value"],Be={name:"ElCheckboxButton"},Ge=F({...Be,props:Z,emits:_,setup(l){const i=l,t=j(),{focus:r,isChecked:b,isDisabled:v,size:m,model:p,handleChange:s}=ee(i,t),{checkboxGroup:u}=C(),n=V("checkbox"),k=g(()=>{var d,o,a,c;const f=(o=(d=u==null?void 0:u.fill)==null?void 0:d.value)!=null?o:"";return{backgroundColor:f,borderColor:f,color:(c=(a=u==null?void 0:u.textColor)==null?void 0:a.value)!=null?c:"",boxShadow:f?`-1px 0 0 0 ${f}`:void 0}});return(d,o)=>(y(),x("label",{class:h([e(n).b("button"),e(n).bm("button",e(m)),e(n).is("disabled",e(v)),e(n).is("checked",e(b)),e(n).is("focus",e(r))])},[d.trueLabel||d.falseLabel?S((y(),x("input",{key:0,"onUpdate:modelValue":o[0]||(o[0]=a=>L(p)?p.value=a:null),class:h(e(n).be("button","original")),type:"checkbox",name:d.name,tabindex:d.tabindex,disabled:e(v),"true-value":d.trueLabel,"false-value":d.falseLabel,onChange:o[1]||(o[1]=(...a)=>e(s)&&e(s)(...a)),onFocus:o[2]||(o[2]=a=>r.value=!0),onBlur:o[3]||(o[3]=a=>r.value=!1)},null,42,Le)),[[I,e(p)]]):S((y(),x("input",{key:1,"onUpdate:modelValue":o[4]||(o[4]=a=>L(p)?p.value=a:null),class:h(e(n).be("button","original")),type:"checkbox",name:d.name,tabindex:d.tabindex,disabled:e(v),value:d.label,onChange:o[5]||(o[5]=(...a)=>e(s)&&e(s)(...a)),onFocus:o[6]||(o[6]=a=>r.value=!0),onBlur:o[7]||(o[7]=a=>r.value=!1)},null,42,Ee)),[[I,e(p)]]),d.$slots.default||d.label?(y(),x("span",{key:2,class:h(e(n).be("button","inner")),style:se(e(b)?e(k):void 0)},[z(d.$slots,"default",{},()=>[K(Y(d.label),1)])],6)):$("v-if",!0)],2))}});var ae=w(Ge,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const $e={name:"ElCheckboxGroup"},Fe=F({...$e,props:ce,emits:he,setup(l,{emit:i}){const t=l,{elFormItem:r}=C(),{groupId:b,isLabeledByFormItem:v}=be(t,{elFormItem:r}),m=G(),p=V("checkbox"),s=n=>{i(E,n),P(()=>{i("change",n)})},u=g({get(){return t.modelValue},set(n){s(n)}});return ue("CheckboxGroup",{name:"ElCheckboxGroup",...ie(t),modelValue:u,checkboxGroupSize:m,changeEvent:s}),M(()=>t.modelValue,()=>{t.validateEvent&&(r==null||r.validate("change").catch(n=>X()))}),(n,k)=>{var d;return y(),W(H(n.tag),{id:e(b),class:h(e(p).b("group")),role:"group","aria-label":e(v)?void 0:n.label||"checkbox-group","aria-labelledby":e(v)?(d=e(r))==null?void 0:d.labelId:void 0},{default:q(()=>[z(n.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var le=w(Fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const De=re(Ie,{CheckboxButton:ae,CheckboxGroup:le});J(ae);const Ae=J(le);export{De as E,Ae as a};