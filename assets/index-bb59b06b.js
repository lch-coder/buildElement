var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;import{_ as l}from"./plugin-vue_export-helper-1b428a4d.js";import{d as s,c as d,r as u,b7 as m,o as p,h as c,j as y,w as g,F as v,A as h,B as x}from"./index-04568d02.js";const b={class:"drag-container"},f=s({name:"dragLayout"}),w=s((S=((e,a)=>{for(var t in a||(a={}))i.call(a,t)&&n(e,t,a[t]);if(r)for(var t of r(a))o.call(a,t)&&n(e,t,a[t]);return e})({},f),a(S,t({setup(e){const a=d([{i:1,x:0,y:0,w:4,h:11},{i:2,x:4,y:0,w:4,h:11},{i:3,x:8,y:0,w:4,h:11},{i:4,x:0,y:11,w:4,h:11},{i:5,x:4,y:11,w:4,h:11},{i:6,x:8,y:11,w:4,h:11},{i:7,x:0,y:22,w:4,h:11}]),t=u({boardData:{1:{option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]}},2:{option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]}},3:{option:{title:{text:"Referer of a Website",subtext:"Fake Data",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}},4:{option:{title:{text:"Funnel"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}%"},toolbox:{feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},legend:{data:["Show","Click","Visit","Inquiry","Order"]},series:[{name:"Funnel",type:"funnel",left:"10%",top:60,bottom:60,width:"80%",min:0,max:100,minSize:"0%",maxSize:"100%",sort:"descending",gap:2,label:{show:!0,position:"inside"},labelLine:{length:10,lineStyle:{width:1,type:"solid"}},itemStyle:{borderColor:"#fff",borderWidth:1},emphasis:{label:{fontSize:20}},data:[{value:60,name:"Visit"},{value:40,name:"Inquiry"},{value:20,name:"Order"},{value:80,name:"Click"},{value:100,name:"Show"}]}]}},5:{option:{xAxis:{},yAxis:{},series:[{symbolSize:20,data:[[10,8.04],[8.07,6.95],[13,7.58],[9.05,8.81],[11,8.33],[14,7.66],[13.4,6.81],[10,6.33],[14,8.96],[12.5,6.82],[9.15,7.2],[11.5,7.2],[3.03,4.23],[12.2,7.83],[2.02,4.47],[1.05,3.33],[4.05,4.96],[6.03,7.24],[12,6.26],[12,8.84],[7.08,5.82],[5.02,5.68]],type:"scatter"}]}},6:{option:{series:[{type:"treemap",data:[{name:"nodeA",value:10,children:[{name:"nodeAa",value:4},{name:"nodeAb",value:6}]},{name:"nodeB",value:20,children:[{name:"nodeBa",value:20,children:[{name:"nodeBa1",value:20}]}]}]}]}},7:{option:{title:{text:"Basic Radar Chart"},legend:{data:["Allocated Budget","Actual Spending"]},radar:{indicator:[{name:"Sales",max:6500},{name:"Administration",max:16e3},{name:"Information Technology",max:3e4},{name:"Customer Support",max:38e3},{name:"Development",max:52e3},{name:"Marketing",max:25e3}]},series:[{name:"Budget vs spending",type:"radar",data:[{value:[4200,3e3,2e4,35e3,5e4,18e3],name:"Allocated Budget"},{value:[5e3,14e3,28e3,26e3,42e3,21e3],name:"Actual Spending"}]}]}}}});return(e,r)=>{const i=m("v-chart"),o=m("grid-item"),n=m("grid-layout");return p(),c("div",b,[y(n,{layout:a.value,"onUpdate:layout":r[0]||(r[0]=e=>a.value=e),"col-num":12,"row-height":30,"is-mirrored":!1,"vertical-compact":!0,margin:[10,10],"use-css-transforms":!0,"is-draggable":!0,"is-resizable":!0},{default:g((()=>[(p(!0),c(v,null,h(a.value,(e=>(p(),x(o,{key:e.i,x:e.x,y:e.y,w:e.w,h:e.h,i:e.i},{default:g((()=>{var a;return[y(i,{autoresize:"","update-options":{notMerge:!0},option:(null==(a=t.boardData[e.i])?void 0:a.option)||{}},null,8,["option"])]})),_:2},1032,["x","y","w","h","i"])))),128))])),_:1},8,["layout"])])}}}))));var S;const A=l(w,[["__scopeId","data-v-139cf52e"]]);export{A as default};