import{d as e,b as t,r as a,o as n,P as r,a as i}from"./element-plus-a36eb16e.js";const o={"h-full":""},s=e({__name:"lineDemo",setup(e){const s=t(""),l=t(),u=t({title:{text:"Stacked Line",triggerEvent:!0},tooltip:{trigger:"axis",formatter:function(e){let t="";for(let a=0;a<e.length;a++){const n=e[a];if(s.value){if(n.seriesName===s.value){t=n.axisValue+"<br/>"+n.marker+n.seriesName+" : "+n.data+"<br/>";break}}else 0===a&&(t+=n.axisValue+"<br/>"),t+=n.marker+n.seriesName+" : "+n.data+"<br/>"}return t}},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"],type:"scroll"},grid:{top:"20%",left:"10%",right:"10%",bottom:"10%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"Email",type:"line",stack:"Total",data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",data:[320,332,301,334,390,330,320]},{name:"Search Engine",type:"line",stack:"Total",data:[820,932,901,934,1290,1330,1320]}]}),c=e=>{const t=Object.keys(e.event.target).find((e=>e.includes("ec_inner")))||"",a=(e.event.target[t],[e.event.event.offsetX,e.event.event.offsetY]);if(l.value.containPixel("grid",a)){let e=l.value.chart.convertFromPixel({seriesIndex:0},a)[0];e=parseInt(e)}};return(e,t)=>{const d=a("v-chart");return n(),r("div",o,[i(d,{ref_key:"chartRef",ref:l,autoresize:"","update-options":{notMerge:!0},option:u.value,onMousemove:t[0]||(t[0]=e=>{s.value=e.seriesName}),onMouseout:t[1]||(t[1]=()=>{s.value=""}),onClick:c},null,8,["option"])])}}});export{s as default};
