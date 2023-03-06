import{d as e,j as a,b as l,o,P as t,a as u,w as s,Q as r,a0 as d,W as n,$ as c,ac as m,c as p,ao as i,ap as f,ad as _,ae as v,Y as g,X as h,R as y,a4 as V,a5 as b,aq as x,ar as w,S as A,a2 as k}from"./element-plus-a36eb16e.js";const q=r("div",{title:"分步表单",desc:"将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"},null,-1),N={class:"max-w-960px mx-auto mb-4"},U={class:"max-w-400px mx-auto py-3"},C=n(" ￥ "),M=n(" 下一步 "),P={class:"text-2xl"},T=n(" 元 "),j=n(" 确认转账 "),$=n(" 上一步 "),Q=n(" 再转一笔 "),R=n(" 查看账单 "),S=e({__name:"step-form",setup(e){const S=a({formAccount:"formAccount@maodou.cloud",toAccount:"",accountType:"微信",toName:"",amount:"",password:""}),W={formAccount:{required:!0,message:"请选择付款账户",trigger:"change"},toAccount:{required:!0,message:"请输入收款账户",trigger:"change"},toName:{required:!0,message:"请输入收款人姓名",trigger:"change"},amount:{required:!0,message:"请输入转账金额",type:"number",trigger:"change"},password:{required:!0,message:"请输入支付密码",trigger:"change"}},X=l(0);function Y(){return e=this,a=null,l=function*(){X.value=Math.min(2,X.value+1)},new Promise(((o,t)=>{var u=e=>{try{r(l.next(e))}catch(a){t(a)}},s=e=>{try{r(l.throw(e))}catch(a){t(a)}},r=e=>e.done?o(e.value):Promise.resolve(e.value).then(u,s);r((l=l.apply(e,a)).next())}));var e,a,l}function z(){X.value=0}return(e,a)=>{const l=i,B=f,D=_,E=v,F=g,G=h,H=y,I=V,J=b,K=x,L=w,O=A,Z=k;return o(),t("div",null,[q,u(Z,{"m-3":"",shadow:"never"},{default:s((()=>[r("div",N,[u(B,{"align-center":"","finish-status":"success",active:X.value},{default:s((()=>[u(l,{title:"填写转账信息"}),u(l,{title:"确认转账信息"}),u(l,{title:"完成"})])),_:1},8,["active"])]),r("div",U,[u(O,{ref:"form$","label-position":"top",model:S,rules:W},{default:s((()=>[0===X.value?(o(),t(d,{key:0},[u(F,{label:"付款账户",prop:"formAccount"},{default:s((()=>[u(E,{modelValue:S.formAccount,"onUpdate:modelValue":a[0]||(a[0]=e=>S.formAccount=e),"flex-1":""},{default:s((()=>[u(D,{value:"formAccount@maodou.cloud"})])),_:1},8,["modelValue"])])),_:1}),u(F,{label:"收款账户",prop:"toAccount"},{default:s((()=>[u(E,{modelValue:S.accountType,"onUpdate:modelValue":a[1]||(a[1]=e=>S.accountType=e),class:"w-100px"},{default:s((()=>[u(D,{value:"微信"}),u(D,{value:"支付宝"})])),_:1},8,["modelValue"]),u(G,{modelValue:S.toAccount,"onUpdate:modelValue":a[2]||(a[2]=e=>S.toAccount=e),class:"flex-1 ml",placeholder:"请输入收款账号"},null,8,["modelValue"])])),_:1}),u(F,{label:"收款人姓名",prop:"toName"},{default:s((()=>[u(G,{modelValue:S.toName,"onUpdate:modelValue":a[3]||(a[3]=e=>S.toName=e),placeholder:"请输入收款人姓名"},null,8,["modelValue"])])),_:1}),u(F,{label:"转账金额",prop:"amount"},{default:s((()=>[u(G,{modelValue:S.amount,"onUpdate:modelValue":a[4]||(a[4]=e=>S.amount=e),modelModifiers:{number:!0},type:"number",placeholder:"请输入转账金额"},{prefix:s((()=>[C])),_:1},8,["modelValue"])])),_:1}),u(F,null,{default:s((()=>[u(H,{type:"primary",onClick:a[5]||(a[5]=e=>Y())},{default:s((()=>[M])),_:1})])),_:1})],64)):1===X.value?(o(),t(d,{key:1},[u(J,{column:1,border:""},{default:s((()=>[u(I,{label:"付款账户"},{default:s((()=>[n(c(S.formAccount),1)])),_:1}),u(I,{label:"收款账户"},{default:s((()=>[n(c(S.toAccount),1)])),_:1}),u(I,{label:"收款人姓名"},{default:s((()=>[n(c(S.toName),1)])),_:1}),u(I,{label:"转账金额"},{default:s((()=>[r("span",P,c(S.amount),1),T])),_:1})])),_:1}),u(K),u(F,{label:"支付密码",prop:"password"},{default:s((()=>[u(G,{modelValue:S.password,"onUpdate:modelValue":a[6]||(a[6]=e=>S.password=e),type:"password","show-password":"",placeholder:"请输入支付密码"},null,8,["modelValue"])])),_:1}),u(F,null,{default:s((()=>[u(H,{type:"primary",onClick:a[7]||(a[7]=e=>Y())},{default:s((()=>[j])),_:1}),u(H,{onClick:a[8]||(a[8]=e=>{X.value=Math.max(0,X.value-1)})},{default:s((()=>[$])),_:1})])),_:1})],64)):m("",!0),2===X.value?(o(),p(L,{key:2,icon:"success",title:"操作成功","sub-title":"预计两小时内到账"},{extra:s((()=>[u(H,{type:"primary",onClick:z},{default:s((()=>[Q])),_:1}),u(H,null,{default:s((()=>[R])),_:1})])),_:1})):m("",!0)])),_:1},8,["model"])])])),_:1})])}}});export{S as default};
