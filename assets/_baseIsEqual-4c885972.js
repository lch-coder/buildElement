import{c2 as F,c0 as x,bF as q,c3 as I,c4 as M,bb as G,c5 as $,c6 as b,bG as R,c7 as K,a0 as c}from"./index-5ef55067.js";var J="__lodash_hash_undefined__";function Q(n){return this.__data__.set(n,J),this}function X(n){return this.__data__.has(n)}function E(n){var e=-1,a=n==null?0:n.length;for(this.__data__=new F;++e<a;)this.add(n[e])}E.prototype.add=E.prototype.push=Q;E.prototype.has=X;function Y(n,e){for(var a=-1,f=n==null?0:n.length;++a<f;)if(e(n[a],a,n))return!0;return!1}function Z(n,e){return n.has(e)}var W=1,m=2;function U(n,e,a,f,u,r){var s=a&W,g=n.length,l=e.length;if(g!=l&&!(s&&l>g))return!1;var t=r.get(n),v=r.get(e);if(t&&v)return t==e&&v==n;var _=-1,i=!0,p=a&m?new E:void 0;for(r.set(n,e),r.set(e,n);++_<g;){var d=n[_],A=e[_];if(f)var T=s?f(A,d,_,e,n,r):f(d,A,_,n,e,r);if(T!==void 0){if(T)continue;i=!1;break}if(p){if(!Y(e,function(O,w){if(!Z(p,w)&&(d===O||u(d,O,a,f,r)))return p.push(w)})){i=!1;break}}else if(!(d===A||u(d,A,a,f,r))){i=!1;break}}return r.delete(n),r.delete(e),i}function h(n){var e=-1,a=Array(n.size);return n.forEach(function(f,u){a[++e]=[u,f]}),a}function z(n){var e=-1,a=Array(n.size);return n.forEach(function(f){a[++e]=f}),a}var j=1,V=2,o="[object Boolean]",k="[object Date]",nn="[object Error]",en="[object Map]",rn="[object Number]",an="[object RegExp]",fn="[object Set]",sn="[object String]",un="[object Symbol]",ln="[object ArrayBuffer]",gn="[object DataView]",B=x?x.prototype:void 0,S=B?B.valueOf:void 0;function tn(n,e,a,f,u,r,s){switch(a){case gn:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case ln:return!(n.byteLength!=e.byteLength||!r(new I(n),new I(e)));case o:case k:case rn:return q(+n,+e);case nn:return n.name==e.name&&n.message==e.message;case an:case sn:return n==e+"";case en:var g=h;case fn:var l=f&j;if(g||(g=z),n.size!=e.size&&!l)return!1;var t=s.get(n);if(t)return t==e;f|=V,s.set(n,e);var v=U(g(n),g(e),f,u,r,s);return s.delete(n),v;case un:if(S)return S.call(n)==S.call(e)}return!1}var _n=1,dn=Object.prototype,An=dn.hasOwnProperty;function vn(n,e,a,f,u,r){var s=a&_n,g=M(n),l=g.length,t=M(e),v=t.length;if(l!=v&&!s)return!1;for(var _=l;_--;){var i=g[_];if(!(s?i in e:An.call(e,i)))return!1}var p=r.get(n),d=r.get(e);if(p&&d)return p==e&&d==n;var A=!0;r.set(n,e),r.set(e,n);for(var T=s;++_<l;){i=g[_];var O=n[i],w=e[i];if(f)var D=s?f(w,O,i,e,n,r):f(O,w,i,n,e,r);if(!(D===void 0?O===w||u(O,w,a,f,r):D)){A=!1;break}T||(T=i=="constructor")}if(A&&!T){var y=n.constructor,P=e.constructor;y!=P&&"constructor"in n&&"constructor"in e&&!(typeof y=="function"&&y instanceof y&&typeof P=="function"&&P instanceof P)&&(A=!1)}return r.delete(n),r.delete(e),A}var pn=1,C="[object Arguments]",N="[object Array]",L="[object Object]",Tn=Object.prototype,H=Tn.hasOwnProperty;function On(n,e,a,f,u,r){var s=G(n),g=G(e),l=s?N:$(n),t=g?N:$(e);l=l==C?L:l,t=t==C?L:t;var v=l==L,_=t==L,i=l==t;if(i&&b(n)){if(!b(e))return!1;s=!0,v=!1}if(i&&!v)return r||(r=new R),s||K(n)?U(n,e,a,f,u,r):tn(n,e,l,a,f,u,r);if(!(a&pn)){var p=v&&H.call(n,"__wrapped__"),d=_&&H.call(e,"__wrapped__");if(p||d){var A=p?n.value():n,T=d?e.value():e;return r||(r=new R),u(A,T,a,f,r)}}return i?(r||(r=new R),vn(n,e,a,f,u,r)):!1}function wn(n,e,a,f,u){return n===e?!0:n==null||e==null||!c(n)&&!c(e)?n!==n&&e!==e:On(n,e,a,f,wn,u)}export{E as S,wn as b,Z as c,z as s};