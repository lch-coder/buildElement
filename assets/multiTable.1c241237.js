import{e as s,_ as c}from"./index.22ccc5a4.js";import{d as i,r as d,o as m,f as F,h as e,w as t,k as o}from"./index.c960bcf4.js";import{E as D}from"./el-button.84716c26.js";import"./el-table-column.5b3344f4.js";import"./el-scrollbar.f30f315d.js";import"./event.c507d8ad.js";import"./index.1a308800.js";import"./index.4bdf0c44.js";import"./el-checkbox.ccc875e0.js";import"./index.3edab383.js";/* empty css               */import"./el-tooltip.89296c46.js";import"./el-empty.041d205a.js";const C={"m-2":""},A=o("\u5BFC\u51FA"),_=o("\u8BE6\u60C5"),b=o("\u7F16\u8F91"),f=i({name:"multiTable"}),j=i({...f,setup(y){const u=d({loading:!1,tableData:[{date:"2016-05-03",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-02",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-08",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-06",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-07",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333}],tableColumns:[{prop:"date",label:"\u65E5\u671F"},{prop:"Delivery Info",label:"\u914D\u9001\u4FE1\u606F",children:[{prop:"name",label:"\u59D3\u540D"},{prop:"Address Info",label:"\u5730\u5740\u4FE1\u606F",children:[{prop:"province",label:"\u7701\u4EFD"},{prop:"city",label:"\u57CE\u5E02"},{prop:"address",label:"\u5730\u5740"},{prop:"zip",label:"\u90AE\u7F16"}]}]},{prop:"edit",label:"\u7F16\u8F91",slot:"edit"}]}),r=l=>{console.log("click",l)},n=()=>{s(u.tableData,u.tableColumns,{filename:"\u591A\u7EA7\u8868\u683C"})};return(l,v)=>{const a=D,p=c;return m(),F("div",C,[e(a,{"mb-2":"","float-right":"",type:"primary",onClick:n},{default:t(()=>[A]),_:1}),e(p,{loading:u.loading,"table-data":u.tableData,"table-columns":u.tableColumns},{edit:t(({scope:E})=>[e(a,{link:"",type:"primary",size:"small",onClick:B=>r(E.row)},{default:t(()=>[_]),_:2},1032,["onClick"]),e(a,{link:"",type:"primary",size:"small"},{default:t(()=>[b]),_:1})]),_:1},8,["loading","table-data","table-columns"])])}}});export{j as default};
