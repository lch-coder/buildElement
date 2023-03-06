var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(l,a,o)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[a]=o;import{d as i,j as c,z as r,o as d,P as u,a as m,w as p,Q as h,a0 as f,a1 as b,T as g,$ as k,W as C,c as v,u as y,k as _,J as L,aA as V,aB as j,Z as x,aC as O,al as w,R as D,aD as P,b as T}from"./element-plus-a36eb16e.js";import{l as U}from"./index-9451d340.js";import{_ as A}from"./plugin-vue_export-helper-1b428a4d.js";import{e as I,_ as E}from"./index-be8ec916.js";const z={class:"custom-column"},S={class:"custom-column-left"},q=["onClick"],B={class:"custom-column-right"},R=["id"],H={class:"check_list"},J={class:"dialog-footer"},Q=C("取消"),W=C("确认"),Z=A(i({__name:"dialogCustomColumn",props:{dialogVisible:{type:Boolean,default:!1},columnList:null},emits:["update:dialogVisible","handle-close","handle-confirm"],setup(e,{expose:l,emit:a}){const o=e,{dialogVisible:t}=U(o,a),n=c({curretIndex:0,columnList:[]}),s=()=>{t.value=!1,a("handle-close")},i=()=>{t.value=!1;let e=L(n.columnList).filter((e=>{e.children=e.children.filter((l=>e.checkedColumnList.includes(l.prop)));const l=e.children.map((e=>e.prop));return e.children=V(e.children,(e=>j(l,(l=>e.prop===l)))),e.children.length>0}));a("handle-confirm",e)};function T(e){n.columnList[e].checkAll=n.columnList[e].checkedColumnList.length===n.columnList[e].children.length}return l({handleConfirm:i}),r((()=>{(()=>{const e=[];o.columnList.forEach((l=>{const a=l;a.checkedColumnList=[],a.checkAll=!1,e.push(a)})),n.columnList=L(e),e.filter((e=>(e.children=e.children.filter((e=>e.defaultCheck)),e.children.length>0))).forEach((e=>{let l=e.children.map((e=>e.prop));n.columnList.forEach(((a,o)=>{e.prop===a.prop&&a.checkedColumnList.push(...l),T(o)}))}))})()})),(e,l)=>{const a=x,o=O,c=w,r=D,L=P;return d(),u("div",null,[m(L,{modelValue:y(t),"onUpdate:modelValue":l[0]||(l[0]=e=>_(t)?t.value=e:null),title:"自定义列","custom-class":"custom-column__dialog",draggable:"","before-close":s,"close-on-click-modal":!1},{footer:p((()=>[h("span",J,[m(r,{"auto-insert-space":"",onClick:s},{default:p((()=>[Q])),_:1}),m(r,{type:"primary","auto-insert-space":"",onClick:i},{default:p((()=>[W])),_:1})])])),default:p((()=>[h("div",z,[h("div",S,[(d(!0),u(f,null,b(n.columnList,((e,l)=>(d(),u("div",{key:e.prop+l,class:g([n.curretIndex==l?"active":"","side"]),onClick:e=>function(e){n.curretIndex=e;const l=document.querySelector("#rightTitle"+e);document.querySelector(".custom-column-right").scrollTo({top:l.offsetTop-77,behavior:"smooth"})}(l)},k(e.label),11,q)))),128))]),h("div",B,[(d(!0),u(f,null,b(n.columnList,((e,l)=>(d(),u("div",{id:"rightTitle"+l,key:e.prop+l,class:"column-list"},[m(a,{modelValue:e.checkAll,"onUpdate:modelValue":l=>e.checkAll=l,class:"check_title",onChange:e=>function(e,l){n.columnList[l].checkedColumnList=e?n.columnList[l].children.map((e=>e.prop)):[]}(e,l)},{default:p((()=>[C(k(e.label),1)])),_:2},1032,["modelValue","onUpdate:modelValue","onChange"]),h("div",H,[m(c,{modelValue:e.checkedColumnList,"onUpdate:modelValue":l=>e.checkedColumnList=l},{default:p((()=>[(d(!0),u(f,null,b(e.children,((e,t)=>(d(),v(a,{key:e.label+t,label:e.prop,onChange:e=>T(l)},{default:p((()=>[m(o,{placement:"top-start",trigger:"hover",content:e.tip,"show-after":200,disabled:!e.tip},{reference:p((()=>[h("span",null,k(e.label),1)])),_:2},1032,["content","disabled"])])),_:2},1032,["label","onChange"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])],8,R)))),128))])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-440712a7"]]),$={"m-2":""},F={"mb-2":"",flex:"","justify-end":""},G=C("自定义列"),K=C("导出"),M=C("详情"),N=C("编辑"),X=i({name:"basicTable"}),Y=i((ee=((e,l)=>{for(var a in l||(l={}))t.call(l,a)&&s(e,a,l[a]);if(o)for(var a of o(l))n.call(l,a)&&s(e,a,l[a]);return e})({},X),l(ee,a({setup(e){const l=c({loading:!1,tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],tableColumns:[],columnList:[{prop:"baseData",label:"基础信息",children:[{prop:"date",label:"日期",defaultCheck:!0},{prop:"name",label:"姓名"},{prop:"address",label:"地址"}]}]}),a=T(!1),o=T(null),t=e=>{const a=e.map((e=>e.children)).flat();a.push({prop:"edit",label:"详情",fixed:"right",slot:"edit"}),l.tableColumns=L(a)},n=()=>{I(l.tableData,l.tableColumns,{filename:"基础表格"})};return r((()=>{o.value.handleConfirm()})),(e,s)=>{const i=D,c=E,r=Z;return d(),u("div",$,[h("div",F,[m(i,{onClick:s[0]||(s[0]=e=>a.value=!0)},{default:p((()=>[G])),_:1}),m(i,{type:"primary",onClick:n},{default:p((()=>[K])),_:1})]),m(c,{loading:l.loading,"table-data":l.tableData,"table-columns":l.tableColumns},{edit:p((({scope:e})=>[m(i,{link:"",type:"primary",size:"small",onClick:l=>{e.row}},{default:p((()=>[M])),_:2},1032,["onClick"]),m(i,{link:"",type:"primary",size:"small"},{default:p((()=>[N])),_:1})])),_:1},8,["loading","table-data","table-columns"]),m(r,{ref_key:"dialogRef",ref:o,"dialog-visible":a.value,"onUpdate:dialog-visible":s[1]||(s[1]=e=>a.value=e),"column-list":l.columnList,onHandleConfirm:t},null,8,["dialog-visible","column-list"])])}}}))));var ee;export{Y as default};