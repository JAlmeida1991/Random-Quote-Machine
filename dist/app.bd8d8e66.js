parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"5zVv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.containerAPI=exports.container=exports.title=exports.author=exports.quote=exports.button=void 0;var e=document.querySelector(".btn");exports.button=e;var t=document.querySelector(".quote");exports.quote=t;var r=document.querySelector(".author");exports.author=r;var o=document.querySelector(".title");exports.title=o;var u=document.querySelector(".container");exports.container=u;var n=document.querySelector(".container-api");exports.containerAPI=n;
},{}],"QVnC":[function(require,module,exports) {
var t=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(G([])));L&&L!==e&&n.call(L,i)&&(m=L);var x=g.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=h(t[e],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(f).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o){var i=new b(u(r,e,n,o));return t.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}("object"==typeof module?module.exports:{});
},{}],"ED/T":[function(require,module,exports) {
"use strict";module.exports=function(r,n){return function(){for(var t=new Array(arguments.length),e=0;e<t.length;e++)t[e]=arguments[e];return r.apply(n,t)}};
},{}],"q/Zl":[function(require,module,exports) {
function t(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function n(n){return"function"==typeof n.readFloatLE&&"function"==typeof n.slice&&t(n.slice(0,0))}module.exports=function(o){return null!=o&&(t(o)||n(o)||!!o._isBuffer)};
},{}],"S1cf":[function(require,module,exports) {
"use strict";var e=require("./helpers/bind"),r=require("is-buffer"),n=Object.prototype.toString;function t(e){return"[object Array]"===n.call(e)}function i(e){return"[object ArrayBuffer]"===n.call(e)}function o(e){return"undefined"!=typeof FormData&&e instanceof FormData}function f(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function u(e){return"string"==typeof e}function c(e){return"number"==typeof e}function a(e){return void 0===e}function l(e){return null!==e&&"object"==typeof e}function s(e){return"[object Date]"===n.call(e)}function p(e){return"[object File]"===n.call(e)}function y(e){return"[object Blob]"===n.call(e)}function d(e){return"[object Function]"===n.call(e)}function b(e){return l(e)&&d(e.pipe)}function j(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function m(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function B(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function v(e,r){if(null!=e)if("object"!=typeof e&&(e=[e]),t(e))for(var n=0,i=e.length;n<i;n++)r.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.call(null,e[o],o,e)}function A(){var e={};function r(r,n){"object"==typeof e[n]&&"object"==typeof r?e[n]=A(e[n],r):e[n]=r}for(var n=0,t=arguments.length;n<t;n++)v(arguments[n],r);return e}function g(r,n,t){return v(n,function(n,i){r[i]=t&&"function"==typeof n?e(n,t):n}),r}module.exports={isArray:t,isArrayBuffer:i,isBuffer:r,isFormData:o,isArrayBufferView:f,isString:u,isNumber:c,isObject:l,isUndefined:a,isDate:s,isFile:p,isBlob:y,isFunction:d,isStream:b,isURLSearchParams:j,isStandardBrowserEnv:B,forEach:v,merge:A,extend:g,trim:m};
},{"./helpers/bind":"ED/T","is-buffer":"q/Zl"}],"M8l6":[function(require,module,exports) {
"use strict";var e=require("../utils");module.exports=function(t,r){e.forEach(t,function(e,o){o!==r&&o.toUpperCase()===r.toUpperCase()&&(t[r]=e,delete t[o])})};
},{"../utils":"S1cf"}],"YdsM":[function(require,module,exports) {
"use strict";module.exports=function(e,o,r,s,t){return e.config=o,r&&(e.code=r),e.request=s,e.response=t,e};
},{}],"3bIi":[function(require,module,exports) {
"use strict";var r=require("./enhanceError");module.exports=function(e,n,o,t,u){var a=new Error(e);return r(a,n,o,t,u)};
},{"./enhanceError":"YdsM"}],"aS8y":[function(require,module,exports) {
"use strict";var t=require("./createError");module.exports=function(e,s,u){var a=u.config.validateStatus;u.status&&a&&!a(u.status)?s(t("Request failed with status code "+u.status,u.config,null,u.request,u)):e(u)};
},{"./createError":"3bIi"}],"H6Qo":[function(require,module,exports) {
"use strict";var e=require("./../utils");function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}module.exports=function(i,n,t){if(!n)return i;var a;if(t)a=t(n);else if(e.isURLSearchParams(n))a=n.toString();else{var c=[];e.forEach(n,function(i,n){null!=i&&(e.isArray(i)?n+="[]":i=[i],e.forEach(i,function(i){e.isDate(i)?i=i.toISOString():e.isObject(i)&&(i=JSON.stringify(i)),c.push(r(n)+"="+r(i))}))}),a=c.join("&")}return a&&(i+=(-1===i.indexOf("?")?"?":"&")+a),i};
},{"./../utils":"S1cf"}],"ZeD7":[function(require,module,exports) {
"use strict";var e=require("./../utils"),t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];module.exports=function(r){var i,o,n,s={};return r?(e.forEach(r.split("\n"),function(r){if(n=r.indexOf(":"),i=e.trim(r.substr(0,n)).toLowerCase(),o=e.trim(r.substr(n+1)),i){if(s[i]&&t.indexOf(i)>=0)return;s[i]="set-cookie"===i?(s[i]?s[i]:[]).concat([o]):s[i]?s[i]+", "+o:o}}),s):s};
},{"./../utils":"S1cf"}],"/w7L":[function(require,module,exports) {
"use strict";var t=require("./../utils");module.exports=t.isStandardBrowserEnv()?function(){var r,e=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");function a(t){var r=t;return e&&(o.setAttribute("href",r),r=o.href),o.setAttribute("href",r),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}return r=a(window.location.href),function(e){var o=t.isString(e)?a(e):e;return o.protocol===r.protocol&&o.host===r.host}}():function(){return!0};
},{"./../utils":"S1cf"}],"mmkS":[function(require,module,exports) {
"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function t(){this.message="String contains an invalid character"}function o(o){for(var e,a,n=String(o),c="",i=0,h=r;n.charAt(0|i)||(h="=",i%1);c+=h.charAt(63&e>>8-i%1*8)){if((a=n.charCodeAt(i+=.75))>255)throw new t;e=e<<8|a}return c}t.prototype=new Error,t.prototype.code=5,t.prototype.name="InvalidCharacterError",module.exports=o;
},{}],"dn2M":[function(require,module,exports) {
"use strict";var e=require("./../utils");module.exports=e.isStandardBrowserEnv()?{write:function(n,t,o,r,i,u){var s=[];s.push(n+"="+encodeURIComponent(t)),e.isNumber(o)&&s.push("expires="+new Date(o).toGMTString()),e.isString(r)&&s.push("path="+r),e.isString(i)&&s.push("domain="+i),!0===u&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};
},{"./../utils":"S1cf"}],"KRuG":[function(require,module,exports) {
"use strict";var e=require("./../utils"),r=require("./../core/settle"),o=require("./../helpers/buildURL"),t=require("./../helpers/parseHeaders"),n=require("./../helpers/isURLSameOrigin"),s=require("../core/createError"),i="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||require("./../helpers/btoa");module.exports=function(a){return new Promise(function(u,d){var l=a.data,p=a.headers;e.isFormData(l)&&delete p["Content-Type"];var f=new XMLHttpRequest,c="onreadystatechange",w=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in f||n(a.url)||(f=new window.XDomainRequest,c="onload",w=!0,f.onprogress=function(){},f.ontimeout=function(){}),a.auth){var h=a.auth.username||"",m=a.auth.password||"";p.Authorization="Basic "+i(h+":"+m)}if(f.open(a.method.toUpperCase(),o(a.url,a.params,a.paramsSerializer),!0),f.timeout=a.timeout,f[c]=function(){if(f&&(4===f.readyState||w)&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in f?t(f.getAllResponseHeaders()):null,o={data:a.responseType&&"text"!==a.responseType?f.response:f.responseText,status:1223===f.status?204:f.status,statusText:1223===f.status?"No Content":f.statusText,headers:e,config:a,request:f};r(u,d,o),f=null}},f.onerror=function(){d(s("Network Error",a,null,f)),f=null},f.ontimeout=function(){d(s("timeout of "+a.timeout+"ms exceeded",a,"ECONNABORTED",f)),f=null},e.isStandardBrowserEnv()){var y=require("./../helpers/cookies"),q=(a.withCredentials||n(a.url))&&a.xsrfCookieName?y.read(a.xsrfCookieName):void 0;q&&(p[a.xsrfHeaderName]=q)}if("setRequestHeader"in f&&e.forEach(p,function(e,r){void 0===l&&"content-type"===r.toLowerCase()?delete p[r]:f.setRequestHeader(r,e)}),a.withCredentials&&(f.withCredentials=!0),a.responseType)try{f.responseType=a.responseType}catch(T){if("json"!==a.responseType)throw T}"function"==typeof a.onDownloadProgress&&f.addEventListener("progress",a.onDownloadProgress),"function"==typeof a.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",a.onUploadProgress),a.cancelToken&&a.cancelToken.promise.then(function(e){f&&(f.abort(),d(e),f=null)}),void 0===l&&(l=null),f.send(l)})};
},{"./../utils":"S1cf","./../core/settle":"aS8y","./../helpers/buildURL":"H6Qo","./../helpers/parseHeaders":"ZeD7","./../helpers/isURLSameOrigin":"/w7L","../core/createError":"3bIi","./../helpers/btoa":"mmkS","./../helpers/cookies":"dn2M"}],"pBGv":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"BXyq":[function(require,module,exports) {
var process = require("process");
var e=require("process"),t=require("./utils"),r=require("./helpers/normalizeHeaderName"),n={"Content-Type":"application/x-www-form-urlencoded"};function a(e,r){!t.isUndefined(e)&&t.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function i(){var t;return"undefined"!=typeof XMLHttpRequest?t=require("./adapters/xhr"):void 0!==e&&(t=require("./adapters/http")),t}var o={adapter:i(),transformRequest:[function(e,n){return r(n,"Content-Type"),t.isFormData(e)||t.isArrayBuffer(e)||t.isBuffer(e)||t.isStream(e)||t.isFile(e)||t.isBlob(e)?e:t.isArrayBufferView(e)?e.buffer:t.isURLSearchParams(e)?(a(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):t.isObject(e)?(a(n,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};t.forEach(["delete","get","head"],function(e){o.headers[e]={}}),t.forEach(["post","put","patch"],function(e){o.headers[e]=t.merge(n)}),module.exports=o;
},{"./utils":"S1cf","./helpers/normalizeHeaderName":"M8l6","./adapters/xhr":"KRuG","./adapters/http":"KRuG","process":"pBGv"}],"rj2i":[function(require,module,exports) {
"use strict";var t=require("./../utils");function e(){this.handlers=[]}e.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},e.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},e.prototype.forEach=function(e){t.forEach(this.handlers,function(t){null!==t&&e(t)})},module.exports=e;
},{"./../utils":"S1cf"}],"woEt":[function(require,module,exports) {
"use strict";var r=require("./../utils");module.exports=function(t,u,e){return r.forEach(e,function(r){t=r(t,u)}),t};
},{"./../utils":"S1cf"}],"V3+0":[function(require,module,exports) {
"use strict";module.exports=function(t){return!(!t||!t.__CANCEL__)};
},{}],"7/2Y":[function(require,module,exports) {
"use strict";module.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)};
},{}],"a2Uu":[function(require,module,exports) {
"use strict";module.exports=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e};
},{}],"uz6X":[function(require,module,exports) {
"use strict";var e=require("./../utils"),r=require("./transformData"),a=require("../cancel/isCancel"),s=require("../defaults"),t=require("./../helpers/isAbsoluteURL"),n=require("./../helpers/combineURLs");function o(e){e.cancelToken&&e.cancelToken.throwIfRequested()}module.exports=function(d){return o(d),d.baseURL&&!t(d.url)&&(d.url=n(d.baseURL,d.url)),d.headers=d.headers||{},d.data=r(d.data,d.headers,d.transformRequest),d.headers=e.merge(d.headers.common||{},d.headers[d.method]||{},d.headers||{}),e.forEach(["delete","get","head","post","put","patch","common"],function(e){delete d.headers[e]}),(d.adapter||s.adapter)(d).then(function(e){return o(d),e.data=r(e.data,e.headers,d.transformResponse),e},function(e){return a(e)||(o(d),e&&e.response&&(e.response.data=r(e.response.data,e.response.headers,d.transformResponse))),Promise.reject(e)})};
},{"./../utils":"S1cf","./transformData":"woEt","../cancel/isCancel":"V3+0","../defaults":"BXyq","./../helpers/isAbsoluteURL":"7/2Y","./../helpers/combineURLs":"a2Uu"}],"OvAf":[function(require,module,exports) {
"use strict";var e=require("./../defaults"),t=require("./../utils"),r=require("./InterceptorManager"),o=require("./dispatchRequest");function s(e){this.defaults=e,this.interceptors={request:new r,response:new r}}s.prototype.request=function(r){"string"==typeof r&&(r=t.merge({url:arguments[0]},arguments[1])),(r=t.merge(e,{method:"get"},this.defaults,r)).method=r.method.toLowerCase();var s=[o,void 0],u=Promise.resolve(r);for(this.interceptors.request.forEach(function(e){s.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){s.push(e.fulfilled,e.rejected)});s.length;)u=u.then(s.shift(),s.shift());return u},t.forEach(["delete","get","head","options"],function(e){s.prototype[e]=function(r,o){return this.request(t.merge(o||{},{method:e,url:r}))}}),t.forEach(["post","put","patch"],function(e){s.prototype[e]=function(r,o,s){return this.request(t.merge(s||{},{method:e,url:r,data:o}))}}),module.exports=s;
},{"./../defaults":"BXyq","./../utils":"S1cf","./InterceptorManager":"rj2i","./dispatchRequest":"uz6X"}],"mI+K":[function(require,module,exports) {
"use strict";function t(t){this.message=t}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,module.exports=t;
},{}],"tsWd":[function(require,module,exports) {
"use strict";var e=require("./Cancel");function n(n){if("function"!=typeof n)throw new TypeError("executor must be a function.");var o;this.promise=new Promise(function(e){o=e});var r=this;n(function(n){r.reason||(r.reason=new e(n),o(r.reason))})}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(n){e=n}),cancel:e}},module.exports=n;
},{"./Cancel":"mI+K"}],"X8jb":[function(require,module,exports) {
"use strict";module.exports=function(n){return function(t){return n.apply(null,t)}};
},{}],"nUiQ":[function(require,module,exports) {
"use strict";var e=require("./utils"),r=require("./helpers/bind"),n=require("./core/Axios"),t=require("./defaults");function u(t){var u=new n(t),l=r(n.prototype.request,u);return e.extend(l,n.prototype,u),e.extend(l,u),l}var l=u(t);l.Axios=n,l.create=function(r){return u(e.merge(t,r))},l.Cancel=require("./cancel/Cancel"),l.CancelToken=require("./cancel/CancelToken"),l.isCancel=require("./cancel/isCancel"),l.all=function(e){return Promise.all(e)},l.spread=require("./helpers/spread"),module.exports=l,module.exports.default=l;
},{"./utils":"S1cf","./helpers/bind":"ED/T","./core/Axios":"OvAf","./defaults":"BXyq","./cancel/Cancel":"mI+K","./cancel/CancelToken":"tsWd","./cancel/isCancel":"V3+0","./helpers/spread":"X8jb"}],"dZBD":[function(require,module,exports) {
module.exports=require("./lib/axios");
},{"./lib/axios":"nUiQ"}],"EDcV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=n(require("regenerator-runtime")),e=n(require("axios")),r=require("./globals");function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e,r,n,o,a,u){try{var c=t[a](u),i=c.value}catch(l){return void r(l)}c.done?e(i):Promise.resolve(i).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise(function(n,a){var u=t.apply(e,r);function c(t){o(u,n,a,c,i,"next",t)}function i(t){o(u,n,a,c,i,"throw",t)}c(void 0)})}}function u(){return c.apply(this,arguments)}function c(){return(c=a(t.default.mark(function n(){var o,a,u;return t.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,e.default)("/quotes");case 3:o=t.sent,a=o.data,u=Math.round(Math.random()*(a.length-1)),r.quote.textContent=a[u].text,r.author.textContent=a[u].from,l(),t.next=20;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),r.quote.remove(),r.button.remove(),r.title.remove(),r.author.remove(),r.containerAPI.remove(),s();case 20:case"end":return t.stop()}},n,this,[[0,11]])}))).apply(this,arguments)}function i(){var t=Math.round(255*Math.random()),e=Math.round(255*Math.random()),r=Math.round(255*Math.random());return"rgb(".concat(t,",").concat(e,",").concat(r,")")}function l(){var t=i();r.quote.style.color=t,r.author.style.color=t,r.title.style.color=t,r.button.style.backgroundColor=t,r.container.style.borderColor=t}function s(){var t=document.createElement("p");r.container.style.border="none",t.textContent="Something went wrong...",t.style.color="#D32F2F",t.style.textAlign="center",t.style.fontSize="3.5rem",t.style.fontFamily="fantasy",r.container.appendChild(t)}var d=u;exports.default=d;
},{"regenerator-runtime":"QVnC","axios":"dZBD","./globals":"5zVv"}],"QdeU":[function(require,module,exports) {
"use strict";var e=require("./globals"),t=r(require("./helpers"));function r(e){return e&&e.__esModule?e:{default:e}}e.button.addEventListener("click",t.default),window.addEventListener("load",t.default);
},{"./globals":"5zVv","./helpers":"EDcV"}]},{},["QdeU"], null)
//# sourceMappingURL=/app.bd8d8e66.map