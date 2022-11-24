(()=>{"use strict";var e,r,n,t,o,i,a,c={104:(e,r,n)=>{n(950);var t=n(533),o=n.n(t),i=document.querySelector(".form"),a=document.querySelector("[name='delay']"),c=document.querySelector("[name='step']"),d=document.querySelector("[name='amount']");function l(e,r){var n=Math.random()>.3;return new Promise((function(t,o){setTimeout((function(){n?t({position:e,delay:r}):o({position:e,delay:r})}),r)}))}i.addEventListener("submit",(function(e){e.preventDefault();var r=parseInt(a.value),n=parseInt(c.value),t=d.value;i.reset();for(var u=1;u<=t;u+=1)l(u,r).then((function(e){var r=e.position,n=e.delay;o().Notify.success("✅ Fulfilled promise ".concat(r," in ").concat(n,"ms"))})).catch((function(e){var r=e.position,n=e.delay;o().Notify.failure("❌ Rejected promise ".concat(r," in ").concat(n,"ms"))})),r+=n}))},950:(e,r,n)=>{var t=n(783)(e.id,{locals:!1});e.hot.dispose(t),e.hot.accept(void 0,t)}},d={};function l(e){var r=d[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=d[e]={id:e,exports:{}};try{var t={id:e,module:n,factory:c[e],require:l};l.i.forEach((function(e){e(t)})),n=t.module,t.factory.call(n.exports,n,n.exports,t.require)}catch(e){throw n.error=e,e}return n.exports}l.m=c,l.c=d,l.i=[],e=[],l.O=(r,n,t,o)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,t,o]=e[u],a=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(l.O).every((e=>l.O[e](n[c])))?n.splice(c--,1):(a=!1,o<i&&(i=o));if(a){e.splice(u--,1);var d=t();void 0!==d&&(r=d)}}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,t,o]},l.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return l.d(r,{a:r}),r},l.d=(e,r)=>{for(var n in r)l.o(r,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},l.hu=e=>e+"."+l.h()+".hot-update.js",l.miniCssF=e=>{},l.hmrF=()=>"03-promises."+l.h()+".hot-update.json",l.h=()=>"248d23500f88f3ff271a",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},l.l=(e,n,t,o)=>{if(r[e])r[e].push(n);else{var i,a;if(void 0!==t)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e){i=u;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=e),r[e]=[n];var s=(n,t)=>{i.onerror=i.onload=null,clearTimeout(f);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(t))),n)return n(t)},f=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),a&&document.head.appendChild(i)}},(()=>{var e,r,n,t={},o=l.c,i=[],a=[],c="idle",d=0,u=[];function s(e){c=e;for(var r=[],n=0;n<a.length;n++)r[n]=a[n].call(null,e);return Promise.all(r)}function f(){0==--d&&s("ready").then((function(){if(0===d){var e=u;u=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return s("check").then(l.hmrM).then((function(n){return n?s("prepare").then((function(){var t=[];return r=[],Promise.all(Object.keys(l.hmrC).reduce((function(e,o){return l.hmrC[o](n.c,n.r,n.m,e,r,t),e}),[])).then((function(){return r=function(){return e?v(e):s("ready").then((function(){return t}))},0===d?r():new Promise((function(e){u.push((function(){e(r())}))}));var r}))})):s(m()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+c+")")})):v(e)}function v(e){e=e||{},m();var t=r.map((function(r){return r(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return s("abort").then((function(){throw o[0]}));var i=s("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var a,c=s("apply"),d=function(e){a||(a=e)},l=[];return t.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var n=0;n<r.length;n++)l.push(r[n])}})),Promise.all([i,c]).then((function(){return a?s("fail").then((function(){throw a})):n?v(e).then((function(e){return l.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):s("idle").then((function(){return l}))}))}function m(){if(n)return r||(r=[]),Object.keys(l.hmrI).forEach((function(e){n.forEach((function(n){l.hmrI[e](n,r)}))})),n=void 0,!0}l.hmrD=t,l.i.push((function(u){var v,m,y,g,b=u.module,E=function(r,n){var t=o[n];if(!t)return r;var a=function(a){if(t.hot.active){if(o[a]){var c=o[a].parents;-1===c.indexOf(n)&&c.push(n)}else i=[n],e=a;-1===t.children.indexOf(a)&&t.children.push(a)}else console.warn("[HMR] unexpected require("+a+") from disposed module "+n),i=[];return r(a)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(n){r[e]=n}}};for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&"e"!==u&&Object.defineProperty(a,u,l(u));return a.e=function(e){return function(e){switch(c){case"ready":s("prepare");case"prepare":return d++,e.then(f,f),e;default:return e}}(r.e(e))},a}(u.require,u.id);b.hot=(v=u.id,m=b,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){i=m.parents.slice(),e=y?void 0:v,l(v)},active:!0,accept:function(e,r,n){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=r||function(){},g._acceptedErrorHandlers[e[t]]=n;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":r=[],Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](v,r)})),s("ready");break;case"ready":Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](v,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(v)}},check:p,apply:h,status:function(e){if(!e)return c;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var r=a.indexOf(e);r>=0&&a.splice(r,1)},data:t[v]},e=void 0,g),b.parents=i,b.children=[],i=[],u.require=E})),l.hmrC={},l.hmrI={}})(),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var r=l.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),n=(e,r,n,t)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=c,o.parentNode.removeChild(o),t(d)}},o.href=r,document.head.appendChild(o),o},t=(e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(a=n[t]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===r))return a}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var a;if((o=(a=i[t]).getAttribute("data-href"))===e||o===r)return a}},o=[],i=[],a=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var r=o[e];r.parentNode&&r.parentNode.removeChild(r)}o.length=0},apply:()=>{for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}}),l.hmrC.miniCss=(e,r,c,d,u,s)=>{u.push(a),e.forEach((e=>{var r=l.miniCssF(e),a=l.p+r,c=t(r,a);c&&d.push(new Promise(((r,t)=>{var d=n(e,a,(()=>{d.as="style",d.rel="preload",r()}),t);o.push(c),i.push(d)})))}))},(()=>{var e,r,n,t,o,i=l.hmrS_jsonp=l.hmrS_jsonp||{862:0,735:0},a={};function c(r,n){return e=n,new Promise(((e,n)=>{a[r]=e;var t=l.p+l.hu(r),o=new Error;l.l(t,(e=>{if(a[r]){a[r]=void 0;var t=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+r+" failed.\n("+t+": "+i+")",o.name="ChunkLoadError",o.type=t,o.request=i,n(o)}}))}))}function d(e){function a(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),i=o.id,a=o.chain,d=l.c[i];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var u=0;u<d.parents.length;u++){var s=d.parents[u],f=l.c[s];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([s]),moduleId:i,parentId:s};-1===r.indexOf(s)&&(f.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),c(n[s],[i])):(delete n[s],r.push(s),t.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function c(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}l.f&&delete l.f.jsonpHmr,r=void 0;var d={},u=[],s={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in n)if(l.o(n,p)){var h,v=n[p],m=!1,y=!1,g=!1,b="";switch((h=v?a(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(h),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in s[p]=v,c(u,h.outdatedModules),h.outdatedDependencies)l.o(h.outdatedDependencies,p)&&(d[p]||(d[p]=[]),c(d[p],h.outdatedDependencies[p]));g&&(c(u,[h.moduleId]),s[p]=f)}n=void 0;for(var E,w=[],_=0;_<u.length;_++){var I=u[_],D=l.c[I];D&&(D.hot._selfAccepted||D.hot._main)&&s[I]!==f&&!D.hot._selfInvalidated&&w.push({module:I,require:D.hot._requireSelf,errorHandler:D.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete i[e]})),t=void 0;for(var r,n=u.slice();n.length>0;){var o=n.pop(),a=l.c[o];if(a){var c={},s=a.hot._disposeHandlers;for(_=0;_<s.length;_++)s[_].call(null,c);for(l.hmrD[o]=c,a.hot.active=!1,delete l.c[o],delete d[o],_=0;_<a.children.length;_++){var f=l.c[a.children[_]];f&&(e=f.parents.indexOf(o))>=0&&f.parents.splice(e,1)}}}for(var p in d)if(l.o(d,p)&&(a=l.c[p]))for(E=d[p],_=0;_<E.length;_++)r=E[_],(e=a.children.indexOf(r))>=0&&a.children.splice(e,1)},apply:function(r){for(var n in s)l.o(s,n)&&(l.m[n]=s[n]);for(var t=0;t<o.length;t++)o[t](l);for(var i in d)if(l.o(d,i)){var a=l.c[i];if(a){E=d[i];for(var c=[],f=[],p=[],h=0;h<E.length;h++){var v=E[h],m=a.hot._acceptedDependencies[v],y=a.hot._acceptedErrorHandlers[v];if(m){if(-1!==c.indexOf(m))continue;c.push(m),f.push(y),p.push(v)}}for(var g=0;g<c.length;g++)try{c[g].call(null,E)}catch(n){if("function"==typeof f[g])try{f[g](n,{moduleId:i,dependencyId:p[g]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:p[g],error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:p[g],error:n}),e.ignoreErrored||r(n)}}}for(var b=0;b<w.length;b++){var _=w[b],I=_.module;try{_.require(I)}catch(n){if("function"==typeof _.errorHandler)try{_.errorHandler(n,{moduleId:I,module:l.c[I]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:I,error:n}),e.ignoreErrored||r(n)}}return u}}}self.webpackHotUpdate=(r,t,i)=>{for(var c in t)l.o(t,c)&&(n[c]=t[c],e&&e.push(c));i&&o.push(i),a[r]&&(a[r](),a[r]=void 0)},l.hmrI.jsonp=function(e,r){n||(n={},o=[],t=[],r.push(d)),l.o(n,e)||(n[e]=l.m[e])},l.hmrC.jsonp=function(e,a,u,s,f,p){f.push(d),r={},t=a,n=u.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],e.forEach((function(e){l.o(i,e)&&void 0!==i[e]?(s.push(c(e,p)),r[e]=!0):r[e]=!1})),l.f&&(l.f.jsonpHmr=function(e,n){r&&l.o(r,e)&&!r[e]&&(n.push(c(e)),r[e]=!0)})},l.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(l.p+l.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},l.O.j=e=>0===i[e];var u=(e,r)=>{var n,t,[o,a,c]=r,d=0;if(o.some((e=>0!==i[e]))){for(n in a)l.o(a,n)&&(l.m[n]=a[n]);if(c)var u=c(l)}for(e&&e(r);d<o.length;d++)t=o[d],l.o(i,t)&&i[t]&&i[t][0](),i[t]=0;return l.O(u)},s=self.webpackChunk=self.webpackChunk||[];s.forEach(u.bind(null,0)),s.push=u.bind(null,s.push.bind(s))})();var u=l.O(void 0,[345,735],(()=>l(104)));u=l.O(u)})();
//# sourceMappingURL=03-promises.8f8e51a859d133e9ceca.js.map