import{bZ as u,b_ as s,bb as h,bJ as d,b$ as m}from"./index-8ec3f03e.js";function f(n){return n}function v(n,e,t){switch(t.length){case 0:return n.call(e);case 1:return n.call(e,t[0]);case 2:return n.call(e,t[0],t[1]);case 3:return n.call(e,t[0],t[1],t[2])}return n.apply(e,t)}var g=800,S=16,y=Date.now;function p(n){var e=0,t=0;return function(){var a=y(),r=S-(a-t);if(t=a,r>0){if(++e>=g)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}function w(n){return function(){return n}}var x=u?function(n,e){return u(n,"toString",{configurable:!0,enumerable:!1,value:w(e),writable:!0})}:f;const T=x;var C=p(T);const O=C;function _(n,e,t,a){for(var r=n.length,i=t+(a?1:-1);a?i--:++i<r;)if(e(n[i],i,n))return i;return-1}var b=Math.max;function $(n,e,t){return e=b(e===void 0?n.length-1:e,0),function(){for(var a=arguments,r=-1,i=b(a.length-e,0),l=Array(i);++r<i;)l[r]=a[e+r];r=-1;for(var o=Array(e+1);++r<e;)o[r]=a[r];return o[e]=t(l),v(n,this,o)}}function A(n,e){return O($(n,e,f),n+"")}var c=s?s.isConcatSpreadable:void 0;function F(n){return h(n)||d(n)||!!(c&&n&&n[c])}function N(n,e,t,a,r){var i=-1,l=n.length;for(t||(t=F),r||(r=[]);++i<l;){var o=n[i];e>0&&t(o)?e>1?N(o,e-1,t,a,r):m(r,o):a||(r[r.length]=o)}return r}export{A as a,_ as b,N as c,f as i};
