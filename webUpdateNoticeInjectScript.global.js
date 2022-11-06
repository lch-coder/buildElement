"use strict";(()=>{var s="web_version_by_plugin";var r="system_update_plugin_web_update_notification",d="plugin-web-update-notice-anchor";var l=document.querySelector(`.${d}`);l==null||l.addEventListener("click",()=>{window.location.reload()});function w(o,e){let n=!1;return function(...c){n||(n=!0,o.apply(this,c),setTimeout(()=>{n=!1},e))}}function _(o){let{injectFileBase:e="",checkInterval:n,hiddenDefaultNotification:c}=o,i=()=>{window.fetch(`${e}${s}.json?t=${Date.now()}`).then(t=>{if(!t.ok)throw new Error(`Failed to fetch ${s}.json`);return t.json()}).then(t=>{window.web_version_by_plugin!==t.version&&(document.body.dispatchEvent(new CustomEvent(r,{detail:o,bubbles:!0})),!window.hasShowSystemUpdateNotice_plugin&&!c&&(N(o),console.log("system has update\uFF01\uFF01\uFF01")))}).catch(t=>{console.error(t),console.log("Failed to check system update")})};i(),setInterval(i,n||10*60*1e3);let a=w(i,5e3);window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&a()}),window.addEventListener("focus",()=>{a()}),window.addEventListener("error",t=>{var p;((p=t==null?void 0:t.target)==null?void 0:p.tagName)==="SCRIPT"&&i()},!0)}window.webUpdateCheck_checkAndNotice=_;function N(o){window.hasShowSystemUpdateNotice_plugin=!0;let{notificationProps:e,customNotificationHTML:n}=o,c=document.createElement("div"),i="";if(n)i=n;else{let a=(e==null?void 0:e.title)||"\u{1F4E2} &nbsp;\u7CFB\u7EDF\u5347\u7EA7\u901A\u77E5",t=(e==null?void 0:e.description)||"\u68C0\u6D4B\u5230\u5F53\u524D\u7CFB\u7EDF\u7248\u672C\u5DF2\u66F4\u65B0\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u540E\u4F7F\u7528\u3002",u=(e==null?void 0:e.buttonText)||"\u5237\u65B0";c.classList.add("plugin-web-update-notice"),i=`
    <div class="plugin-web-update-notice-content" data-cy="notification-content">
      <div class="plugin-web-update-notice-content-title">
        ${a}
      </div>
      <div class="plugin-web-update-notice-content-desc">
        ${t}
      </div>
      <a class="plugin-web-update-notice-refresh-btn">
        ${u}
      </a>
    </div>`}c.innerHTML=i,document.querySelector(`.${d}`).appendChild(c)}})();
//# sourceMappingURL=webUpdateNoticeInjectScript.global.js.map
        webUpdateCheck_checkAndNotice({"logVersion":true,"injectFileBase":"/"});