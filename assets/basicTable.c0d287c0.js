import{e as d,_ as p}from"./index.b3407cdd.js";import{d as s,r as c,o as _,f as E,h as e,w as t,k as o}from"./index.e72333c3.js";import{E as C}from"./el-button.bbda3968.js";import"./el-table-column.e846ec92.js";import"./el-scrollbar.f5466e45.js";import"./event.c507d8ad.js";import"./index.7a63b64f.js";import"./el-checkbox.622097b1.js";import"./index.abe40df2.js";/* empty css               */import"./el-tooltip.89296c46.js";import"./el-empty.fc5e991a.js";const F={"m-2":""},b=o("\u5BFC\u51FA"),D=o("\u8BE6\u60C5"),f=o("\u7F16\u8F91"),k=s({name:"basicTable"}),q=s({...k,setup(A){const u=c({loading:!1,tableData:[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}],tableColumns:[{prop:"date",label:"\u65E5\u671F"},{prop:"name",label:"\u59D3\u540D"},{prop:"address",label:"\u5730\u5740"},{prop:"edit",label:"\u7F16\u8F91",slot:"edit"}]}),n=l=>{console.log("click",l)},r=()=>{d(u.tableData,u.tableColumns,{filename:"\u57FA\u7840\u8868\u683C"})};return(l,h)=>{const a=C,i=p;return _(),E("div",F,[e(a,{"mb-2":"","float-right":"",type:"primary",onClick:r},{default:t(()=>[b]),_:1}),e(i,{loading:u.loading,"table-data":u.tableData,"table-columns":u.tableColumns},{edit:t(({scope:m})=>[e(a,{link:"",type:"primary",size:"small",onClick:B=>n(m.row)},{default:t(()=>[D]),_:2},1032,["onClick"]),e(a,{link:"",type:"primary",size:"small"},{default:t(()=>[f]),_:1})]),_:1},8,["loading","table-data","table-columns"])])}}});export{q as default};
