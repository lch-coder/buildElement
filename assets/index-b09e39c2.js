import{d as c,f as i,b7 as d,p as f,j as p,l as m}from"./index-5ef55067.js";const v={"h-100":""},k=c({__name:"index",setup(x){const r=i(""),s=i(),l=i({title:{text:"Stacked Line",triggerEvent:!0},tooltip:{trigger:"axis",formatter:function(a){let t="";for(let n=0;n<a.length;n++){const e=a[n];if(r.value){if(e.seriesName===r.value){t=e.axisValue+"<br/>"+e.marker+e.seriesName+" : "+e.data+"<br/>";break}}else n===0&&(t+=e.axisValue+"<br/>"),t+=e.marker+e.seriesName+" : "+e.data+"<br/>"}return t}},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"],type:"scroll"},grid:{top:"20%",left:"10%",right:"10%",bottom:"10%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"Email",type:"line",stack:"Total",data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",data:[320,332,301,334,390,330,320]},{name:"Search Engine",type:"line",stack:"Total",data:[820,932,901,934,1290,1330,1320]}]}),u=a=>{const t=Object.keys(a.event.target).find(o=>o.includes("ec_inner"))||"",n=a.event.target[t];console.log(`当前点击了第${n.dataIndex}组数据中的第${n.seriesIndex}条数据`);const e=[a.event.event.offsetX,a.event.event.offsetY];if(s.value.containPixel("grid",e)){let o=s.value.chart.convertFromPixel({seriesIndex:0},e)[0];o=parseInt(o),console.log("x轴索引",o)}};return(a,t)=>{const n=d("v-chart");return f(),p("div",v,[m(n,{ref_key:"chartRef",ref:s,autoresize:"","update-options":{notMerge:!0},option:l.value,onMousemove:t[0]||(t[0]=e=>{r.value=e.seriesName}),onMouseout:t[1]||(t[1]=()=>{r.value=""}),onClick:u},null,8,["option"])])}}});export{k as default};