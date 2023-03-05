"use strict";(()=>{var d="web_version_by_plugin";var p="system_update_plugin_web_update_notification",r="plugin-web-update-notice-anchor",_="plugin-web-update-notice-refresh-btn",N="plugin-web-update-notice-dismiss-btn",l="web_update_check_dismiss_version_";var u=!1,b="";function m(i,n){let e=!1;return function(...s){e||(e=!0,i.apply(this,s),setTimeout(()=>{e=!1},n))}}function I(i){let{injectFileBase:n="",checkInterval:e,hiddenDefaultNotification:s}=i,o=()=>{window.fetch(`${n}${d}.json?t=${performance.now()}`).then(t=>{if(!t.ok)throw new Error(`Failed to fetch ${d}.json`);return t.json()}).then(({version:t})=>{if(b=t,window.web_version_by_plugin!==t){document.body.dispatchEvent(new CustomEvent(p,{detail:i,bubbles:!0}));let a=localStorage.getItem(`${l}${t}`)==="true";!u&&!s&&!a&&f(i)}}).catch(t=>{console.error(t),console.log("Failed to check system update")})};o(),setInterval(o,e||10*60*1e3);let c=m(o,5e3);window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&c()}),window.addEventListener("focus",()=>{c()}),window.addEventListener("error",t=>{t?.target?.tagName==="SCRIPT"&&o()},!0)}window.webUpdateCheck_checkAndNotice=I;function T(){document.querySelector(`.${_}`)?.addEventListener("click",()=>{window.location.reload()}),document.querySelector(`.${N}`)?.addEventListener("click",()=>{try{u=!1,document.querySelector(`.${r} .plugin-web-update-notice`)?.remove(),localStorage.setItem(`${l}${b}`,"true")}catch(e){console.error(e)}})}function f(i){u=!0;let{notificationProps:n,customNotificationHTML:e,hiddenDismissButton:s}=i,o=document.createElement("div"),c="";if(e)c=e;else{let t=n?.title??"\u{1F4E2} &nbsp;\u7CFB\u7EDF\u5347\u7EA7\u901A\u77E5",a=n?.description??"\u68C0\u6D4B\u5230\u5F53\u524D\u7CFB\u7EDF\u7248\u672C\u5DF2\u66F4\u65B0\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u540E\u4F7F\u7528\u3002",w=n?.buttonText??"\u5237\u65B0",E=n?.dismissButtonText??"\u5FFD\u7565",S=s?"":`<a class="plugin-web-update-notice-btn plugin-web-update-notice-dismiss-btn">${E}</a>`;o.classList.add("plugin-web-update-notice"),c=`
    <div class="plugin-web-update-notice-content" data-cy="notification-content">
      <div class="plugin-web-update-notice-content-title">
        ${t}
      </div>
      <div class="plugin-web-update-notice-content-desc">
        ${a}
      </div>
      <div class="plugin-web-update-notice-tools">
        ${S}
        <a class="plugin-web-update-notice-btn plugin-web-update-notice-refresh-btn">
          ${w}
        </a>
      </div>
    </div>`}o.innerHTML=c,document.querySelector(`.${r}`).appendChild(o),T()}})();
//# sourceMappingURL=webUpdateNoticeInjectScript.global.js.map
        webUpdateCheck_checkAndNotice({"logVersion":true,"injectFileBase":"/buildElement/"});