var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;import{e as p,_ as s}from"./index-84929028.js";import{d as n,r as d,o as m,h as c,j as b,w as y,m as u,E as j}from"./index-04568d02.js";/* empty css                  */import"./el-table-column-003ab0a0.js";import"./el-scrollbar-361b3646.js";import"./index-8dfd8181.js";import"./index-c2298750.js";import"./el-checkbox-e33fbebf.js";/* empty css               */import"./el-tooltip-4ed993c7.js";import"./el-empty-0c0d1e06.js";const f={"m-2":""},v=u("导出"),z=u("详情"),g=u("编辑"),O=n({name:"multiTable"}),h=n((k=((e,a)=>{for(var t in a||(a={}))l.call(a,t)&&i(e,t,a[t]);if(r)for(var t of r(a))o.call(a,t)&&i(e,t,a[t]);return e})({},O),a(k,t({setup(e){const a=d({loading:!1,tableData:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-08",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}],tableColumns:[{prop:"date",label:"日期"},{prop:"Delivery Info",label:"配送信息",children:[{prop:"name",label:"姓名"},{prop:"Address Info",label:"地址信息",children:[{prop:"province",label:"省份"},{prop:"city",label:"城市"},{prop:"address",label:"地址"},{prop:"zip",label:"邮编"}]}]},{prop:"edit",label:"编辑",slot:"edit"}]}),t=()=>{p(a.tableData,a.tableColumns,{filename:"多级表格"})};return(e,r)=>{const l=j,o=s;return m(),c("div",f,[b(l,{"mb-2":"","float-right":"",type:"primary",onClick:t},{default:y((()=>[v])),_:1}),b(o,{loading:a.loading,"table-data":a.tableData,"table-columns":a.tableColumns},{edit:y((({scope:e})=>[b(l,{link:"",type:"primary",size:"small",onClick:a=>{e.row}},{default:y((()=>[z])),_:2},1032,["onClick"]),b(l,{link:"",type:"primary",size:"small"},{default:y((()=>[g])),_:1})])),_:1},8,["loading","table-data","table-columns"])])}}}))));var k;export{h as default};