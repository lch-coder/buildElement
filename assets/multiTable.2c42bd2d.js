import{e as m,_ as c}from"./index.790f8803.js";import{d as i,r as u,o as _,f,h as t,w as o,k as s}from"./index.63013eb4.js";import{E as A}from"./el-button.36693609.js";import"./el-table-column.9de72e4b.js";import"./el-scrollbar.ac407038.js";import"./event.c507d8ad.js";import"./index.13172098.js";import"./el-checkbox.de1129d7.js";import"./index.9bd0839c.js";/* empty css               */import"./el-tooltip.89296c46.js";import"./el-empty.8c912466.js";const C={"m-2":""},b=s("\u5BFC\u51FA"),g=s("Detail"),y=s("Edit"),L=i({name:"multiTable"}),V=i({...L,setup(v){const e=u({loading:!1,tableData:[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}],tableColumns:[{prop:"date",label:"\u65E5\u671F"},{prop:"Delivery Info",label:"Delivery Info",children:[{prop:"name",label:"\u59D3\u540D"},{prop:"Address Info",label:"Address Info",children:[{prop:"state",label:"\u72B6\u6001"},{prop:"city",label:"\u57CE\u5E02"},{prop:"address",label:"\u5730\u5740"},{prop:"zip",label:"Zip"}]}]},{prop:"edit",label:"\u7F16\u8F91",slot:"edit"}]}),n=l=>{console.log("click",l)},r=()=>{m(e.tableData,e.tableColumns,{filename:"\u591A\u7EA7\u8868\u683C"})};return(l,T)=>{const a=A,d=c;return _(),f("div",C,[t(a,{"mb-2":"","float-right":"",type:"primary",onClick:r},{default:o(()=>[b]),_:1}),t(d,{loading:e.loading,"table-data":e.tableData,"table-columns":e.tableColumns},{edit:o(({scope:p})=>[t(a,{link:"",type:"primary",size:"small",onClick:h=>n(p.row)},{default:o(()=>[g]),_:2},1032,["onClick"]),t(a,{link:"",type:"primary",size:"small"},{default:o(()=>[y]),_:1})]),_:1},8,["loading","table-data","table-columns"])])}}});export{V as default};
