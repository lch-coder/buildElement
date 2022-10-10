import{D as Q,ae as X,aU as Y,E as w,d as J,L as Z,b as ee,J as I,a4 as te,o as f,a6 as v,w as t,g as F,n as T,i as E,af as ue,a8 as le,a9 as ae,aa as R,k as r,a7 as C,h as e,R as oe,ax as ne,_ as de,ac as se,r as O,f as b,aV as i,aW as c,a0 as U,p as pe,j as re}from"./index.0e5bb908.js";import{E as me,a as ie}from"./el-form-item.8512f471.js";import{c as q,E as z}from"./el-button.0c5163ea.js";import{E as ce,a as fe}from"./el-table-column.099b4872.js";import"./el-checkbox.dc9b8f40.js";/* empty css               */import"./el-tooltip.89296c46.js";import{u as H,E as _e}from"./el-scrollbar.53ad0c72.js";import{E as Ee}from"./el-link.a7f7e5de.js";import{E as Be}from"./el-card.15883f67.js";import{E as ye}from"./el-row.9c47a35d.js";import{E as ve}from"./el-date-picker.ab121045.js";import{E as Fe}from"./el-input.69eeca1d.js";import{E as Ve,a as ke}from"./el-select.b7c1c6ee.js";import{E as Ce}from"./el-col.e7a63e0e.js";import{_ as De}from"./plugin-vue_export-helper.f63bf49c.js";import{u as be}from"./index.f8156681.js";import"./event.c507d8ad.js";import"./index.1a5753ad.js";import"./index.6b2ed818.js";import"./scroll.ce64f232.js";const Ae=Q({title:String,confirmButtonText:String,cancelButtonText:String,confirmButtonType:{type:String,values:q,default:"primary"},cancelButtonType:{type:String,values:q,default:"text"},icon:{type:X,default:Y},iconColor:{type:String,default:"#f90"},hideIcon:{type:Boolean,default:!1},hideAfter:{type:Number,default:200},onConfirm:{type:w(Function)},onCancel:{type:w(Function)},teleported:H.teleported,persistent:H.persistent,width:{type:[String,Number],default:150}}),ge={name:"ElPopconfirm"},he=J({...ge,props:Ae,setup(V){const l=V,{t:d}=be(),y=Z("popconfirm"),D=ee(),A=()=>{var a,n;(n=(a=D.value)==null?void 0:a.onClose)==null||n.call(a)},P=I(()=>({width:te(l.width)})),S=a=>{var n;(n=l.onConfirm)==null||n.call(l,a),A()},s=a=>{var n;(n=l.onCancel)==null||n.call(l,a),A()},p=I(()=>l.confirmButtonText||d("el.popconfirm.confirmButtonText")),o=I(()=>l.cancelButtonText||d("el.popconfirm.cancelButtonText"));return(a,n)=>(f(),v(E(_e),ne({ref_key:"tooltipRef",ref:D,trigger:"click",effect:"light"},a.$attrs,{"popper-class":`${E(y).namespace.value}-popover`,"popper-style":E(P),teleported:a.teleported,"fallback-placements":["bottom","top","right","left"],"hide-after":a.hideAfter,persistent:a.persistent}),{content:t(()=>[F("div",{class:T(E(y).b())},[F("div",{class:T(E(y).e("main"))},[!a.hideIcon&&a.icon?(f(),v(E(ue),{key:0,class:T(E(y).e("icon")),style:le({color:a.iconColor})},{default:t(()=>[(f(),v(ae(a.icon)))]),_:1},8,["class","style"])):R("v-if",!0),r(" "+C(a.title),1)],2),F("div",{class:T(E(y).e("action"))},[e(E(z),{size:"small",type:a.cancelButtonType==="text"?"":a.cancelButtonType,text:a.cancelButtonType==="text",onClick:s},{default:t(()=>[r(C(E(o)),1)]),_:1},8,["type","text"]),e(E(z),{size:"small",type:a.confirmButtonType==="text"?"":a.confirmButtonType,text:a.confirmButtonType==="text",onClick:S},{default:t(()=>[r(C(E(p)),1)]),_:1},8,["type","text"])],2)],2)]),default:t(()=>[a.$slots.reference?oe(a.$slots,"reference",{key:0}):R("v-if",!0)]),_:3},16,["popper-class","popper-style","teleported","hide-after","persistent"]))}});var Te=de(he,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popconfirm/src/popconfirm.vue"]]);const Ue=se(Te);const M=V=>(pe("data-v-0b879201"),V=V(),re(),V),Pe=M(()=>F("div",{title:"\u9AD8\u7EA7\u8868\u5355",desc:"\u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"},null,-1)),Se=r(" Http:// "),xe=r(" .com "),$e={class:"space-x-2"},Ne=r(" \u7F16\u8F91 "),Ie=r(" \u4FDD\u5B58 "),Re=r(" \u5220\u9664 "),ze=r(" \u53D6\u6D88 "),Le=M(()=>F("div",{"i-ep-plus":""},null,-1)),je=r(" \u6DFB\u52A0\u4E00\u884C\u6570\u636E "),we={class:"text-center"},Oe=r(" \u4FDD\u5B58 "),qe=r(" \u53D6\u6D88 "),He=J({__name:"advanced-form",setup(V){const l=O({name:"",domain:"",manager:"",approver:"",dates:[],type:"",address:"",phone:"",taskName:"",taskDesc:"",taskExecutor:"",taskResponsible:"",taskDates:[],taskType:"",users:[{id:1,name:"\u5C0F\u660E",number:"0001",department:"\u6709\u5173\u90E8\u95E8"},{id:2,name:"\u5C0F\u5409",number:"0002",department:"\u91CD\u8981\u90E8\u95E8"},{id:3,name:"\u5F20\u4E09",number:"0003",department:"\u5211\u4E8B\u90E8\u95E8"}]}),d=O({});function y(p){d[p.id]={...p}}function D(p){delete d[p.id]}function A(p){Object.assign(p,d[p.id]),D(p)}function P(p){l.value.users.splice(p,1)}function S(){const p={id:Date.now(),name:"",number:"",department:""};l.value.users.push(p),y(p)}const s={xl:6,lg:8,sm:12,xs:24};return(p,o)=>{const a=Fe,n=me,m=Ce,_=Ve,k=ke,L=ve,j=ye,x=Be,g=ce,h=Ee,W=Ue,G=fe,$=z,K=ie;return f(),b("div",null,[Pe,e(K,{ref:"form$","label-position":"top",class:"space-y-4 m-3"},{default:t(()=>[e(x,{shadow:"never",header:"\u4ED3\u5E93\u7BA1\u7406"},{default:t(()=>[e(j,{gutter:24},{default:t(()=>[e(m,i(c(s)),{default:t(()=>[e(n,{label:"\u4ED3\u5E93\u540D",prop:"name"},{default:t(()=>[e(a,{modelValue:l.name,"onUpdate:modelValue":o[0]||(o[0]=u=>l.name=u),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})]),_:1},16),e(m,i(c(s)),{default:t(()=>[e(n,{label:"\u4ED3\u5E93\u57DF\u540D",prop:"domain"},{default:t(()=>[e(a,{modelValue:l.domain,"onUpdate:modelValue":o[1]||(o[1]=u=>l.domain=u),placeholder:"\u8BF7\u8F93\u5165"},{prepend:t(()=>[Se]),append:t(()=>[xe]),_:1},8,["modelValue"])]),_:1})]),_:1},16),e(m,i(c(s)),{default:t(()=>[e(n,{label:"\u4ED3\u5E93\u7BA1\u7406\u5458",prop:"manager"},{default:t(()=>[e(k,{modelValue:l.manager,"onUpdate:modelValue":o[2]||(o[2]=u=>l.manager=u)},{default:t(()=>[e(_,{value:"\u7BA1\u7406\u54581"}),e(_,{value:"\u7BA1\u7406\u54582"})]),_:1},8,["modelValue"])]),_:1})]),_:1},16),e(m,i(c(s)),{default:t(()=>[e(n,{label:"\u5BA1\u6279\u4EBA",prop:"approver"},{default:t(()=>[e(k,{modelValue:l.approver,"onUpdate:modelValue":o[3]||(o[3]=u=>l.approver=u)},{default:t(()=>[e(_,{value:"\u5BA1\u6279\u4EBA1"}),e(_,{value:"\u5BA1\u6279\u4EBA2"})]),_:1},8,["modelValue"])]),_:1})]),_:1},16),e(m,i(c(s)),{default:t(()=>[e(n,{label:"\u751F\u6548\u65E5\u671F",prop:"dates"},{default:t(()=>[e(L,{modelValue:l.dates,"onUpdate:modelValue":o[4]||(o[4]=u=>l.dates=u),type:"daterange","range-separator":"\u5230","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4"},null,8,["modelValue"])]),_:1})]),_:1},16),e(m,i(c(s)),{default:t(()=>[e(n,{label:"\u4ED3\u5E93\u7C7B\u578B",prop:"type"},{default:t(()=>[e(k,{modelValue:l.type,"onUpdate:modelValue":o[5]||(o[5]=u=>l.type=u)},{default:t(()=>[e(_,{value:"\u4ED3\u5E93\u7C7B\u578B1"}),e(_,{value:"\u4ED3\u5E93\u7C7B\u578B2"})]),_:1},8,["modelValue"])]),_:1})]),_:1},16),e(m,i(c(s)),{default:t(()=>[e(n,{label:"\u4ED3\u5E93\u5730\u5740",prop:"address"},{default:t(()=>[e(a,{modelValue:l.address,"onUpdate:modelValue":o[6]||(o[6]=u=>l.address=u),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})]),_:1},16),e(m,i(c(s)),{default:t(()=>[e(n,{label:"\u4ED3\u5E93\u7535\u8BDD",prop:"phone"},{default:t(()=>[e(a,{modelValue:l.phone,"onUpdate:modelValue":o[7]||(o[7]=u=>l.phone=u),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})]),_:1},16)]),_:1})]),_:1}),e(x,{shadow:"never",header:"\u4EFB\u52A1\u7BA1\u7406"},{default:t(()=>[e(j,{gutter:24},{default:t(()=>[e(m,i(c(s)),{default:t(()=>[e(n,{label:"\u4EFB\u52A1\u540D",prop:"taskName"},{default:t(()=>[e(a,{modelValue:l.taskName,"onUpdate:modelValue":o[8]||(o[8]=u=>l.taskName=u),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})]),_:1},16),e(m,i(c(s)),{default:t(()=>[e(n,{label:"\u4EFB\u52A1\u63CF\u8FF0",prop:"taskDesc"},{default:t(()=>[e(a,{modelValue:l.taskDesc,"onUpdate:modelValue":o[9]||(o[9]=u=>l.taskDesc=u),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})]),_:1},16),e(m,i(c(s)),{default:t(()=>[e(n,{label:"\u6267\u884C\u4EBA",prop:"manager"},{default:t(()=>[e(k,{modelValue:l.manager,"onUpdate:modelValue":o[10]||(o[10]=u=>l.manager=u)},{default:t(()=>[e(_,{value:"\u6267\u884C\u4EBA1"}),e(_,{value:"\u6267\u884C\u4EBA2"})]),_:1},8,["modelValue"])]),_:1})]),_:1},16),e(m,i(c(s)),{default:t(()=>[e(n,{label:"\u8D23\u4EFB\u4EBA",prop:"taskResponsible"},{default:t(()=>[e(k,{modelValue:l.taskResponsible,"onUpdate:modelValue":o[11]||(o[11]=u=>l.taskResponsible=u)},{default:t(()=>[e(_,{value:"\u8D23\u4EFB\u4EBA1"}),e(_,{value:"\u8D23\u4EFB\u4EBA2"})]),_:1},8,["modelValue"])]),_:1})]),_:1},16),e(m,i(c(s)),{default:t(()=>[e(n,{label:"\u751F\u6548\u65E5\u671F",prop:"taskDates"},{default:t(()=>[e(L,{modelValue:l.taskDates,"onUpdate:modelValue":o[12]||(o[12]=u=>l.taskDates=u),type:"daterange","range-separator":"\u5230","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4"},null,8,["modelValue"])]),_:1})]),_:1},16),e(m,i(c(s)),{default:t(()=>[e(n,{label:"\u4EFB\u52A1\u7C7B\u578B",prop:"taskType"},{default:t(()=>[e(k,{modelValue:l.taskType,"onUpdate:modelValue":o[13]||(o[13]=u=>l.taskType=u)},{default:t(()=>[e(_,{value:"\u4EFB\u52A1\u7C7B\u578B1"}),e(_,{value:"\u4EFB\u52A1\u7C7B\u578B2"})]),_:1},8,["modelValue"])]),_:1})]),_:1},16)]),_:1})]),_:1}),e(x,{shadow:"never",header:"\u6210\u5458\u7BA1\u7406"},{default:t(()=>[e(G,{data:l.users},{default:t(()=>[e(g,{label:"\u6210\u5458\u59D3\u540D"},{default:t(({row:u})=>[d[u.id]?(f(),v(a,{key:`input${u.id}`,modelValue:d[u.id].name,"onUpdate:modelValue":B=>d[u.id].name=B,autofocus:""},null,8,["modelValue","onUpdate:modelValue"])):(f(),b(U,{key:1},[r(C(u.name),1)],64))]),_:1}),e(g,{label:"\u5DE5\u53F7"},{default:t(({row:u})=>[d[u.id]?(f(),v(a,{key:0,modelValue:d[u.id].number,"onUpdate:modelValue":B=>d[u.id].number=B},null,8,["modelValue","onUpdate:modelValue"])):(f(),b(U,{key:1},[r(C(u.number),1)],64))]),_:1}),e(g,{label:"\u6240\u5C5E\u90E8\u95E8"},{default:t(({row:u})=>[d[u.id]?(f(),v(a,{key:0,modelValue:d[u.id].department,"onUpdate:modelValue":B=>d[u.id].department=B},null,8,["modelValue","onUpdate:modelValue"])):(f(),b(U,{key:1},[r(C(u.department),1)],64))]),_:1}),e(g,{label:"\u64CD\u4F5C"},{default:t(({$index:u,row:B})=>[F("div",$e,[d[B.id]?(f(),b(U,{key:1},[e(h,{type:"primary",onClick:N=>A(B)},{default:t(()=>[Ie]),_:2},1032,["onClick"]),e(W,{title:"\u786E\u8BA4\u5220\u9664?",onConfirm:N=>P(u)},{reference:t(()=>[e(h,{type:"primary"},{default:t(()=>[Re]),_:1})]),_:2},1032,["onConfirm"]),d[B.id]?(f(),v(h,{key:0,type:"primary",onClick:N=>D(B)},{default:t(()=>[ze]),_:2},1032,["onClick"])):R("",!0)],64)):(f(),v(h,{key:0,type:"primary",onClick:N=>y(B)},{default:t(()=>[Ne]),_:2},1032,["onClick"]))])]),_:1})]),_:1},8,["data"]),e($,{class:"w-full mt-4 border-dashed",onClick:S},{default:t(()=>[Le,je]),_:1})]),_:1}),F("div",we,[e($,{type:"primary"},{default:t(()=>[Oe]),_:1}),e($,null,{default:t(()=>[qe]),_:1})])]),_:1},512)])}}}),it=De(He,[["__scopeId","data-v-0b879201"]]);export{it as default};
