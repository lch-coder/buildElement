import{aG as r,aH as u,u as i,aI as m}from"./index.2eb95586.js";const S=r({id:"user",state:()=>({token:"",username:"",nickname:"",avatar:""}),getters:{},actions:{setUserInfo(t){const{token:e,username:a,nickname:s,avatar:n,menuList:o}=t;this.token=e,this.username=a,this.nickname=s,this.avatar=n,u("token",e),i().setMenuList(o)},logout(){m("token")}}});export{S as u};