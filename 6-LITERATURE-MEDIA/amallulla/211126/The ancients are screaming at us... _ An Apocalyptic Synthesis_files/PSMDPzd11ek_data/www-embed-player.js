var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function v(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function pa(){this.A=!1;this.l=null;this.i=void 0;this.h=1;this.o=this.m=0;this.C=this.j=null}
function qa(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
pa.prototype.B=function(a){this.i=a};
function ra(a,b){a.j={Za:b,bb:!0};a.h=a.m||a.o}
pa.prototype.return=function(a){this.j={return:a};this.h=this.o};
function w(a,b,c){a.h=c;return{value:b}}
pa.prototype.u=function(a){this.h=a};
function sa(a,b,c){a.m=b;void 0!=c&&(a.o=c)}
function ta(a){a.m=0;var b=a.j.Za;a.j=null;return b}
function ua(a){a.C=[a.j];a.m=0;a.o=0}
function va(a){var b=a.C.splice(0)[0];(b=a.j=a.j||b)?b.bb?a.h=a.m||a.o:void 0!=b.u&&a.o<b.u?(a.h=b.u,a.j=null):a.h=a.o:a.h=0}
function wa(a){this.h=new pa;this.i=a}
function xa(a,b){qa(a.h);var c=a.h.l;if(c)return ya(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Aa(a)}
function ya(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.l=null,ra(a.h,g),Aa(a)}a.h.l=null;d.call(a.h,f);return Aa(a)}
function Aa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ra(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.bb)throw b.Za;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ba(a){this.next=function(b){qa(a.h);a.h.l?b=ya(a,a.h.l.next,b,a.h.B):(a.h.B(b),b=Aa(a));return b};
this.throw=function(b){qa(a.h);a.h.l?b=ya(a,a.h.l["throw"],b,a.h.B):(ra(a.h,b),b=Aa(a));return b};
this.return=function(b){return xa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){b=new Ba(new wa(b));oa&&a.prototype&&oa(b,a.prototype);return b}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ja});
t("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
function Ca(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ca(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ca(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Ca(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&Ca(h.data_,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ea(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ea(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ea(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||oa});
var Fa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ca(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Fa});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.A=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.o=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.T),reject:g(this.o)}};
b.prototype.T=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ga(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.L(g):this.m(g)}};
b.prototype.L=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.ha(h,g):this.m(g)};
b.prototype.o=function(g){this.B(2,g)};
b.prototype.m=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.U();this.C()};
b.prototype.U=function(){var g=this;e(function(){if(g.J()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.J=function(){if(this.A)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.C=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ga=function(g){var h=this.l();g.ra(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(y){try{l(r(y))}catch(B){n(B)}}:q}
var l,n,p=new b(function(r,q){l=r;n=q});
this.ra(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ra=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).ra(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(y){return function(B){r[y]=B;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).ra(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push([d,b[d]]);return c}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ea(this,b,"includes").indexOf(b,c||0)}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push(b[d]);return c}});
var z=this||self;function A(a,b,c){a=a.split(".");c=c||z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||z;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ha(){}
function Ia(a){a.Ka=void 0;a.getInstance=function(){return a.Ka?a.Ka:a.Ka=new a}}
function Ja(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ka(a){var b=Ja(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function La(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Sa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Sa=Qa:Sa=Ra;return Sa.apply(null,arguments)}
function Ta(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ua(a,b){A(a,b,void 0)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Gm=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Va(a){return a}
;function Wa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Wa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.rb=b)}
D(Wa,Error);Wa.prototype.name="CustomError";function Xa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Ya(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Za=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},$a=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},ab=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},bb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function cb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function db(a,b){b=Za(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function eb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function fb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function gb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function hb(a){var b=ib,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function jb(a){for(var b in a)return!1;return!0}
function kb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function lb(){var a=F("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ob(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ob(a[c]);return b}
var pb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pb.length;f++)c=pb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var rb;function sb(){if(void 0===rb){var a=null,b=z.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Va,createScript:Va,createScriptURL:Va})}catch(c){z.console&&z.console.error(c.message)}rb=a}else rb=a}return rb}
;function tb(a,b){this.h=a===ub&&b||""}
tb.prototype.X=!0;tb.prototype.W=function(){return this.h};
function vb(a){return new tb(ub,a)}
var ub={};vb("");var wb={};function xb(a){this.h=wb===wb?a:"";this.X=!0}
xb.prototype.W=function(){return this.h.toString()};
xb.prototype.toString=function(){return this.h.toString()};function yb(a,b){this.h=b===zb?a:""}
m=yb.prototype;m.X=!0;m.W=function(){return this.h.toString()};
m.Ja=!0;m.Fa=function(){return 1};
m.toString=function(){return this.h+""};
function Ab(a){if(a instanceof yb&&a.constructor===yb)return a.h;Ja(a);return"type_error:TrustedResourceUrl"}
var zb={};function Bb(a){var b=sb();a=b?b.createScriptURL(a):a;return new yb(a,zb)}
;var Cb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Db=/&/g,Eb=/</g,Fb=/>/g,Gb=/"/g,Hb=/'/g,Ib=/\x00/g,Jb=/[\x00&<>"']/;function Kb(a,b){this.h=b===Lb?a:""}
m=Kb.prototype;m.X=!0;m.W=function(){return this.h.toString()};
m.Ja=!0;m.Fa=function(){return 1};
m.toString=function(){return this.h.toString()};
function Mb(a){if(a instanceof Kb&&a.constructor===Kb)return a.h;Ja(a);return"type_error:SafeUrl"}
var Nb=RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',"i"),Pb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Qb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Lb={},Rb=new Kb("about:invalid#zClosurez",Lb);var Sb;a:{var Tb=z.navigator;if(Tb){var Ub=Tb.userAgent;if(Ub){Sb=Ub;break a}}Sb=""}function H(a){return-1!=Sb.indexOf(a)}
;function Vb(){return H("Firefox")||H("FxiOS")}
function Wb(){return(H("Chrome")||H("CriOS"))&&!H("Edge")}
;var Xb={};function Yb(a,b,c){this.h=c===Xb?a:"";this.i=b;this.X=this.Ja=!0}
Yb.prototype.Fa=function(){return this.i};
Yb.prototype.W=function(){return this.h.toString()};
Yb.prototype.toString=function(){return this.h.toString()};
function Zb(a,b){var c=sb();a=c?c.createHTML(a):a;return new Yb(a,b,Xb)}
;function $b(a,b){b instanceof Kb||b instanceof Kb||(b="object"==typeof b&&b.X?b.W():String(b),Qb.test(b)||(b="about:invalid#zClosurez"),b=new Kb(b,Lb));a.href=Mb(b)}
function ac(a,b){a.rel="stylesheet";a.href=Ab(b).toString();(b=bc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function cc(){return bc("script[nonce]",void 0)}
var dc=/^[\w+/_-]+[=]{0,2}$/;function bc(a,b){b=(b||z).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&dc.test(a)?a:"":""}
;function ec(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var fc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gc(a){return a?decodeURI(a):a}
function hc(a){return gc(a.match(fc)[3]||null)}
function ic(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ic(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function jc(a){var b=[],c;for(c in a)ic(c,a[c],b);return b.join("&")}
function kc(a,b){b=jc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var lc=/#|$/;function I(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function mc(){return H("iPhone")&&!H("iPod")&&!H("iPad")}
;function nc(a){nc[" "](a);return a}
nc[" "]=Ha;var oc=H("Opera"),pc=H("Trident")||H("MSIE"),qc=H("Edge"),rc=H("Gecko")&&!(-1!=Sb.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),sc=-1!=Sb.toLowerCase().indexOf("webkit")&&!H("Edge"),tc=H("Android");function uc(){var a=z.document;return a?a.documentMode:void 0}
var vc;a:{var wc="",xc=function(){var a=Sb;if(rc)return/rv:([^\);]+)(\)|;)/.exec(a);if(qc)return/Edge\/([\d\.]+)/.exec(a);if(pc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(sc)return/WebKit\/(\S+)/.exec(a);if(oc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
xc&&(wc=xc?xc[1]:"");if(pc){var yc=uc();if(null!=yc&&yc>parseFloat(wc)){vc=String(yc);break a}}vc=wc}var zc=vc,Ac;if(z.document&&pc){var Bc=uc();Ac=Bc?Bc:parseInt(zc,10)||void 0}else Ac=void 0;var Cc=Ac;Vb();var Dc=mc()||H("iPod"),Ec=H("iPad");!H("Android")||Wb()||Vb();Wb();var Fc=H("Safari")&&!(Wb()||H("Coast")||H("Opera")||H("Edge")||H("Edg/")||H("OPR")||Vb()||H("Silk")||H("Android"))&&!(mc()||H("iPad")||H("iPod"));var Gc={},Hc=null;
function Ic(a,b){Ka(a);void 0===b&&(b=0);if(!Hc){Hc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Gc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Hc[h]&&(Hc[h]=g)}}}b=Gc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Jc="function"===typeof Uint8Array;function Kc(a,b,c){if(null!=a)return"object"===typeof a?Jc&&a instanceof Uint8Array?c(a):Lc(a,b,c):b(a)}
function Lc(a,b,c){if(Array.isArray(a)){for(var d=Array(a.length),e=0;e<a.length;e++)d[e]=Kc(a[e],b,c);Array.isArray(a)&&a.Fb&&Mc(d);return d}d={};for(e in a)d[e]=Kc(a[e],b,c);return d}
function Nc(a){return"number"===typeof a?isFinite(a)?a:String(a):a}
function Oc(a){return new Uint8Array(a)}
function Pc(a){return a}
var Qc={Fb:{value:!0,configurable:!0}};function Mc(a){Array.isArray(a)&&!Object.isFrozen(a)&&Object.defineProperties(a,Qc);return a}
;function Rc(a,b){this.h=a;this.i=b;this.map={};this.j=!0;if(0<this.h.length){for(a=0;a<this.h.length;a++){b=this.h[a];var c=b[0];this.map[c.toString()]=new Sc(c,b[1])}this.j=!0}}
m=Rc.prototype;m.isFrozen=function(){return!1};
m.toJSON=function(){var a=this.P(!1);return Lc(a,Nc,Ic)};
m.P=function(a){if(this.j){if(this.i){var b=this.map,c;for(c in b)if(Object.prototype.hasOwnProperty.call(b,c)){var d=b[c].h;d&&d.P(a)}}}else{this.h.length=0;b=Tc(this);b.sort();for(c=0;c<b.length;c++){d=this.map[b[c]];var e=d.h;e&&e.P(a);this.h.push([d.key,d.value])}this.j=!0}return this.h};
m.clear=function(){this.map={};this.j=!1};
m.entries=function(){var a=[],b=Tc(this);b.sort();for(var c=0;c<b.length;c++){var d=this.map[b[c]];a.push([d.key,Uc(this,d)])}return new Vc(a)};
m.keys=function(){var a=[],b=Tc(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.map[b[c]].key);return new Vc(a)};
m.values=function(){var a=[],b=Tc(this);b.sort();for(var c=0;c<b.length;c++)a.push(Uc(this,this.map[b[c]]));return new Vc(a)};
m.forEach=function(a,b){var c=Tc(this);c.sort();for(var d=0;d<c.length;d++){var e=this.map[c[d]];a.call(b,Uc(this,e),e.key,this)}};
m.set=function(a,b){var c=new Sc(a);this.i?(c.h=b,c.value=b.P(!1)):c.value=b;this.map[a.toString()]=c;this.j=!1;return this};
function Uc(a,b){return a.i?(b.h||(b.h=new a.i(b.value),a.isFrozen()&&null(b.h)),b.h):b.value}
m.get=function(a){if(a=this.map[a.toString()])return Uc(this,a)};
m.has=function(a){return a.toString()in this.map};
function Tc(a){a=a.map;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}
Rc.prototype[Symbol.iterator]=function(){return this.entries()};
function Sc(a,b){this.key=a;this.value=b;this.h=void 0}
function Vc(a){this.i=0;this.h=a}
Vc.prototype.next=function(){return this.i<this.h.length?{done:!1,value:this.h[this.i++]}:{done:!0,value:void 0}};
Vc.prototype[Symbol.iterator]=function(){return this};var Wc;function Xc(a,b,c){var d=Wc;Wc=null;a||(a=d);d=this.constructor.Km;a||(a=d?[d]:[]);this.l=d?0:-1;this.h=null;this.i=a;a:{d=this.i.length;a=d-1;if(d&&(d=this.i[a],!(null===d||"object"!=typeof d||Array.isArray(d)||Jc&&d instanceof Uint8Array))){this.o=a-this.l;this.j=d;break a}void 0!==b&&-1<b?(this.o=Math.max(b,a+1-this.l),this.j=null):this.o=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.o?(a+=this.l,(d=this.i[a])?Mc(d):this.i[a]=Yc):(Zc(this),(d=this.j[a])?Mc(d):this.j[a]=Yc)}
var Yc=Object.freeze(Mc([]));function Zc(a){var b=a.o+a.l;a.i[b]||(a.j=a.i[b]={})}
function $c(a,b,c){return-1===b?null:(void 0===c?0:c)||b>=a.o?a.j?a.j[b]:void 0:a.i[b+a.l]}
function ad(a,b,c){a.h||(a.h={});if(b in a.h)return a.h[b];var d=$c(a,b);d||(d=Mc([]),bd(a,b,d));c=new Rc(d,c);return a.h[b]=c}
function bd(a,b,c,d){(void 0===d?0:d)||b>=a.o?(Zc(a),a.j[b]=c):a.i[b+a.l]=c}
function cd(a,b,c,d){if(-1===c)return null;a.h||(a.h={});a.h[c]||(d=$c(a,c,void 0===d?!1:d))&&(a.h[c]=new b(d));return a.h[c]}
function dd(a,b,c){a.h||(a.h={});var d=a.h[c];if(!d){var e=void 0===e?!1:e;d=$c(a,c,e);null==d&&(d=Yc);d===Yc&&(d=Mc([]),bd(a,c,d,e));e=d;d=[];for(var f=0;f<e.length;f++)d[f]=new b(e[f]);a.h[c]=d}return d}
Xc.prototype.toJSON=function(){var a=this.P(!1);return Lc(a,Nc,Ic)};
Xc.prototype.P=function(a){if(this.h)for(var b in this.h){var c=this.h[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&c[d].P(a);else c&&c.P(a)}return this.i};
Xc.prototype.toString=function(){return this.P(!1).toString()};
Xc.prototype.clone=function(){var a=this.constructor,b=Lc(this.P(!1),Pc,Oc);Wc=b;a=new a(b);Wc=null;ed(a,this);return a};
function ed(a,b){b.m&&(a.m=b.m.slice());var c=b.h;if(c){b=b.j;var d={},e;for(e in c){var f=c[e];if(f){var g=!(!b||!b[e]),h=+e;if(Array.isArray(f)){if(f.length)for(g=dd(a,f[0].constructor,h),h=0;h<Math.min(g.length,f.length);h++)ed(g[h],f[h])}else f instanceof Rc?f.i&&(d.Ba=ad(a,h,f.i),f.forEach(function(k){return function(l,n){return ed(k.Ba.get(n),l)}}(d))):(g=cd(a,f.constructor,h,g))&&ed(g,f)}d={Ba:d.Ba}}}}
;var fd=window;vb("csi.gstatic.com");vb("googleads.g.doubleclick.net");vb("pagead2.googlesyndication.com");vb("partner.googleadservices.com");vb("pubads.g.doubleclick.net");vb("securepubads.g.doubleclick.net");vb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var gd={};function hd(){}
function id(a){this.h=a}
v(id,hd);id.prototype.toString=function(){return this.h};
var jd=new id("about:invalid#zTSz",gd);function kd(a){this.isValid=a}
function ld(a){return new kd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var md=[ld("data"),ld("http"),ld("https"),ld("mailto"),ld("ftp"),new kd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function nd(a){if(a instanceof hd)if(a instanceof id)a=a.h;else throw Error("");else a=Mb(a);return a}
;function od(a,b){a.src=Ab(b);var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;var d=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]");(c=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function pd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=pd.prototype;m.clone=function(){return new pd(this.x,this.y)};
m.equals=function(a){return a instanceof pd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function qd(a,b){this.width=a;this.height=b}
m=qd.prototype;m.clone=function(){return new qd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function rd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function sd(a,b){gb(b,function(c,d){c&&"object"==typeof c&&c.X&&(c=c.W());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:td.hasOwnProperty(d)?a.setAttribute(td[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var td={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function ud(a,b,c){var d=arguments,e=document,f=d[1],g=vd(e,String(d[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):sd(g,f));2<d.length&&wd(e,g,d);return g}
function wd(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ka(f)||La(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(La(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}E(g?eb(f):f,d)}}}
function vd(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function xd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function yd(a){var b=zd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Ad(){var a=[];yd(function(b){a.push(b)});
return a}
var zd={lc:"allow-forms",mc:"allow-modals",nc:"allow-orientation-lock",oc:"allow-pointer-lock",pc:"allow-popups",qc:"allow-popups-to-escape-sandbox",sc:"allow-presentation",tc:"allow-same-origin",uc:"allow-scripts",wc:"allow-top-navigation",xc:"allow-top-navigation-by-user-activation"},Bd=Ya(function(){return Ad()});
function Cd(){var a=vd(document,"IFRAME"),b={};E(Bd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Dd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Ed=(new Date).getTime();function Fd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Gd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var y=e[1],B=e[2],G=e[3],R=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var P=G^y&(B^G);var K=1518500249}else P=y^B^G,K=1859775393;else 60>q?(P=y&B|G&(y|B),K=2400959708):(P=y^B^G,K=3395469782);P=((p<<5|p>>>27)&4294967295)+P+R+K+r[q]&4294967295;R=G;G=B;B=(y<<30|y>>>2)&4294967295;y=p;p=P}e[0]=e[0]+p&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+B&4294967295;e[3]=e[3]+G&4294967295;e[4]=e[4]+R&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],y=0,B=p.length;y<B;++y)q.push(p.charCodeAt(y));p=q}r||(r=p.length);q=0;if(0==l)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<r;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var y=24;0<=y;y-=8)p[r++]=e[q]>>y&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,tb:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Hd(a,b,c){var d=String(z.location.href);return d&&a&&b?[b,Id(Fd(d),a,c||null)].join(" "):null}
function Id(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),Jd(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=Jd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Jd(a){var b=Gd();b.update(a);return b.tb().toLowerCase()}
;var Kd={};function Ld(a){this.h=a||{cookie:""}}
m=Ld.prototype;m.isEnabled=function(){if(!z.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{La:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Pm;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.La}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Cb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{La:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Cb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Md=new Ld("undefined"==typeof document?null:document);function Nd(a){return!!Kd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Od(a){a=void 0===a?!1:a;var b=z.__SAPISID||z.__APISID||z.__3PSAPISID||z.__OVERRIDE_SID;Nd(a)&&(b=b||z.__1PSAPISID);if(b)return!0;var c=new Ld(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");Nd(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Pd(a,b,c,d){(a=z[a])||(a=(new Ld(document)).get(b));return a?Hd(a,c,d):null}
function Qd(a){var b=void 0===b?!1:b;var c=Fd(String(z.location.href)),d=[];if(Od(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?z.__SAPISID:z.__APISID;e||(e=new Ld(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Hd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Nd(b)&&((b=Pd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Pd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Rd(){this.data_=[];this.h=-1}
Rd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
Rd.prototype.get=function(a){return!!this.data_[a]};
function Sd(a){-1==a.h&&(a.h=bb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Td(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Td.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Ud(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Vd;
function Wd(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=vd(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Sa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Va;c.Va=null;e()}};
return function(e){d.next={Va:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function Xd(a){z.setTimeout(function(){throw a;},0)}
;function Yd(){this.i=this.h=null}
Yd.prototype.add=function(a,b){var c=Zd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Yd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Zd=new Td(function(){return new $d},function(a){return a.reset()});
function $d(){this.next=this.scope=this.h=null}
$d.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
$d.prototype.reset=function(){this.next=this.scope=this.h=null};function ae(a,b){be||ce();de||(be(),de=!0);ee.add(a,b)}
var be;function ce(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);be=function(){a.then(fe)}}else be=function(){var b=fe;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&!H("Edge")&&z.Window.prototype.setImmediate==z.setImmediate?(Vd||(Vd=Wd()),Vd(b)):z.setImmediate(b)}}
var de=!1,ee=new Yd;function fe(){for(var a;a=ee.remove();){try{a.h.call(a.scope)}catch(b){Xd(b)}Ud(Zd,a)}de=!1}
;function ge(a,b){this.h=a[z.Symbol.iterator]();this.i=b;this.j=0}
ge.prototype[Symbol.iterator]=function(){return this};
ge.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function he(a,b){return new ge(a,b)}
;function ie(){this.blockSize=-1}
;function je(){this.blockSize=-1;this.blockSize=64;this.h=[];this.o=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
D(je,ie);je.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function ke(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
je.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)ke(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){ke(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){ke(this,e);f=0;break}}this.i=f;this.l+=b}};
je.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;ke(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function le(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=me(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ne[c])c=ne[c];else{c=String(c);if(!ne[c]){var f=/function\s+([^\(]+)/m.exec(c);ne[c]=f?f[1]:"[Anonymous]"}c=ne[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function me(a,b){b||(b={});b[oe(a)]=!0;var c=a.stack||"";(a=a.rb)&&!b[oe(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=me(a,b));return c}
function oe(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ne={};function pe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function qe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ka(d)?qe.apply(null,d):pe(d)}}
;function J(){this.h=this.h;this.o=this.o}
J.prototype.h=!1;J.prototype.dispose=function(){this.h||(this.h=!0,this.D())};
function re(a,b){a.h?b():(a.o||(a.o=[]),a.o.push(b))}
J.prototype.D=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function se(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function te(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function ue(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:se(a).match(/\S+/g)||[],b=0<=Za(a,b));return b}
function ve(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ue(a,"inverted-hdpi")&&te(a,Array.prototype.filter.call(a.classList?a.classList:se(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var we="StopIteration"in z?z.StopIteration:{message:"StopIteration",stack:""};function xe(){}
xe.prototype.R=function(){throw we;};
xe.prototype.M=function(){return this};function ye(a){if(a instanceof ze||a instanceof Ae||a instanceof Be)return a;if("function"==typeof a.R)return new ze(function(){return Ce(a)});
if("function"==typeof a[Symbol.iterator])return new ze(function(){return a[Symbol.iterator]()});
if("function"==typeof a.M)return new ze(function(){return Ce(a.M())});
throw Error("Not an iterator or iterable.");}
function Ce(a){if(!(a instanceof xe))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.R();break}catch(d){if(d!==we)throw d;b=!0}return{value:c,done:b}}}}
function ze(a){this.i=a}
ze.prototype.M=function(){return new Ae(this.i())};
ze.prototype[Symbol.iterator]=function(){return new Be(this.i())};
ze.prototype.h=function(){return new Be(this.i())};
function Ae(a){this.i=a}
v(Ae,xe);Ae.prototype.R=function(){var a=this.i.next();if(a.done)throw we;return a.value};
Ae.prototype[Symbol.iterator]=function(){return new Be(this.i)};
Ae.prototype.h=function(){return new Be(this.i)};
function Be(a){ze.call(this,function(){return a});
this.j=a}
v(Be,ze);Be.prototype.next=function(){return this.j.next()};function De(a,b){this.i={};this.h=[];this.ca=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof De)for(c=Ee(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Ee(a){Fe(a);return a.h.concat()}
m=De.prototype;m.has=function(a){return Ge(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||He;Fe(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function He(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.ca=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return Ge(this.i,a)?(delete this.i[a],--this.size,this.ca++,this.h.length>2*this.size&&Fe(this),!0):!1};
function Fe(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Ge(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Ge(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Ge(this.i,a)?this.i[a]:b};
m.set=function(a,b){Ge(this.i,a)||(this.size+=1,this.h.push(a),this.ca++);this.i[a]=b};
m.forEach=function(a,b){for(var c=Ee(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new De(this)};
m.keys=function(){return ye(this.M(!0)).h()};
m.values=function(){return ye(this.M(!1)).h()};
m.entries=function(){var a=this;return he(this.keys(),function(b){return[b,a.get(b)]})};
m.M=function(a){Fe(this);var b=0,c=this.ca,d=this,e=new xe;e.R=function(){if(c!=d.ca)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw we;var f=d.h[b++];return a?f:d.i[f]};
return e};
function Ge(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Ie(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Ie.prototype.stopPropagation=function(){this.j=!0};
Ie.prototype.preventDefault=function(){this.defaultPrevented=!0};var Je=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{z.addEventListener("test",Ha,b),z.removeEventListener("test",Ha,b)}catch(c){}return a}();function Ke(a,b){Ie.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
D(Ke,Ie);var Le={2:"touch",3:"pen",4:"mouse"};
Ke.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(rc){a:{try{nc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Le[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Ke.O.preventDefault.call(this)};
Ke.prototype.stopPropagation=function(){Ke.O.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Ke.prototype.preventDefault=function(){Ke.O.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Me="closure_listenable_"+(1E6*Math.random()|0);var Ne=0;function Oe(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.wa=e;this.key=++Ne;this.la=this.qa=!1}
function Pe(a){a.la=!0;a.listener=null;a.proxy=null;a.src=null;a.wa=null}
;function Qe(a){this.src=a;this.listeners={};this.h=0}
Qe.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Re(a,b,d,e);-1<g?(b=a[g],c||(b.qa=!1)):(b=new Oe(b,this.src,f,!!d,e),b.qa=c,a.push(b));return b};
Qe.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Re(e,b,c,d);return-1<b?(Pe(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Se(a,b){var c=b.type;c in a.listeners&&db(a.listeners[c],b)&&(Pe(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Re(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.la&&f.listener==b&&f.capture==!!c&&f.wa==d)return e}return-1}
;var Te="closure_lm_"+(1E6*Math.random()|0),Ue={},Ve=0;function We(a,b,c,d,e){if(d&&d.once)Xe(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)We(a,b[f],c,d,e);else c=Ye(c),a&&a[Me]?a.Y(b,c,La(d)?!!d.capture:!!d,e):Ze(a,b,c,!1,d,e)}
function Ze(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=La(e)?!!e.capture:!!e,h=$e(a);h||(a[Te]=h=new Qe(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=af();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Je||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(bf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ve++}}
function af(){function a(c){return b.call(a.src,a.listener,c)}
var b=cf;return a}
function Xe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Xe(a,b[f],c,d,e);else c=Ye(c),a&&a[Me]?a.i.add(String(b),c,!0,La(d)?!!d.capture:!!d,e):Ze(a,b,c,!0,d,e)}
function df(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)df(a,b[f],c,d,e);else(d=La(d)?!!d.capture:!!d,c=Ye(c),a&&a[Me])?a.i.remove(String(b),c,d,e):a&&(a=$e(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Re(b,c,d,e)),(c=-1<a?b[a]:null)&&ef(c))}
function ef(a){if("number"!==typeof a&&a&&!a.la){var b=a.src;if(b&&b[Me])Se(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(bf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ve--;(c=$e(b))?(Se(c,a),0==c.h&&(c.src=null,b[Te]=null)):Pe(a)}}}
function bf(a){return a in Ue?Ue[a]:Ue[a]="on"+a}
function cf(a,b){if(a.la)a=!0;else{b=new Ke(b,this);var c=a.listener,d=a.wa||a.src;a.qa&&ef(a);a=c.call(d,b)}return a}
function $e(a){a=a[Te];return a instanceof Qe?a:null}
var ff="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ye(a){if("function"===typeof a)return a;a[ff]||(a[ff]=function(b){return a.handleEvent(b)});
return a[ff]}
;function gf(){J.call(this);this.i=new Qe(this);this.L=this;this.A=null}
D(gf,J);gf.prototype[Me]=!0;gf.prototype.addEventListener=function(a,b,c,d){We(this,a,b,c,d)};
gf.prototype.removeEventListener=function(a,b,c,d){df(this,a,b,c,d)};
function hf(a,b){var c=a.A;if(c){var d=[];for(var e=1;c;c=c.A)d.push(c),++e}a=a.L;c=b.type||b;"string"===typeof b?b=new Ie(b,a):b instanceof Ie?b.target=b.target||a:(e=b,b=new Ie(c,a),qb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=jf(g,c,!0,b)&&e}b.j||(g=b.h=a,e=jf(g,c,!0,b)&&e,b.j||(e=jf(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=jf(g,c,!1,b)&&e}
gf.prototype.D=function(){gf.O.D.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Pe(d[e]);delete a.listeners[c];a.h--}}this.A=null};
gf.prototype.Y=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function jf(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.la&&g.capture==c){var h=g.listener,k=g.wa||g.src;g.qa&&Se(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function kf(a){lf();return Bb(a)}
var lf=Ha;function mf(a){var b=[];nf(new of,a,b);return b.join("")}
function of(){}
function nf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),nf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),pf(d,c),c.push(":"),nf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":pf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var qf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},rf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function pf(a,b){b.push('"',a.replace(rf,function(c){var d=qf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),qf[c]=d);return d}),'"')}
;function sf(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function tf(a){this.h=0;this.A=void 0;this.l=this.i=this.j=null;this.o=this.m=!1;if(a!=Ha)try{var b=this;a.call(void 0,function(c){uf(b,2,c)},function(c){uf(b,3,c)})}catch(c){uf(this,3,c)}}
function vf(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
vf.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var wf=new Td(function(){return new vf},function(a){a.reset()});
function xf(a,b,c){var d=wf.get();d.i=a;d.onRejected=b;d.context=c;return d}
function yf(a){return new tf(function(b,c){c(a)})}
tf.prototype.then=function(a,b,c){return zf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
tf.prototype.$goog_Thenable=!0;function Af(a,b){return zf(a,null,b,void 0)}
tf.prototype.cancel=function(a){if(0==this.h){var b=new Bf(a);ae(function(){Cf(this,b)},this)}};
function Cf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Cf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Ef(c),Ff(c,e,3,b)))}a.j=null}else uf(a,3,b)}
function Gf(a,b){a.i||2!=a.h&&3!=a.h||Hf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function zf(a,b,c,d){var e=xf(null,null,null);e.h=new tf(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Bf?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Gf(a,e);return e.h}
tf.prototype.C=function(a){this.h=0;uf(this,2,a)};
tf.prototype.J=function(a){this.h=0;uf(this,3,a)};
function uf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.C,f=a.J;if(d instanceof tf){Gf(d,xf(e||Ha,f||null,a));var g=!0}else if(sf(d))d.then(e,f,a),g=!0;else{if(La(d))try{var h=d.then;if("function"===typeof h){If(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.A=c,a.h=b,a.j=null,Hf(a),3!=b||c instanceof Bf||Jf(a,c))}}
function If(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Hf(a){a.m||(a.m=!0,ae(a.B,a))}
function Ef(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
tf.prototype.B=function(){for(var a;a=Ef(this);)Ff(this,a,this.h,this.A);this.m=!1};
function Ff(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,Kf(b,c,d);else try{b.j?b.i.call(b.context):Kf(b,c,d)}catch(e){Lf.call(null,e)}Ud(wf,b)}
function Kf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Jf(a,b){a.o=!0;ae(function(){a.o&&Lf.call(null,b)})}
var Lf=Xd;function Bf(a){Wa.call(this,a)}
D(Bf,Wa);Bf.prototype.name="cancel";function L(a){J.call(this);this.A=1;this.l=[];this.m=0;this.i=[];this.j={};this.B=!!a}
D(L,J);m=L.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.A;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.A=e+3;d.push(e);return e};
function Mf(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.ka(b)}}
m.ka=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ha):(c&&db(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.da=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];Nf(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.ka(c)}}return 0!=e}return!1};
function Nf(a,b,c){ae(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.ka,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.D=function(){L.O.D.call(this);this.clear();this.l.length=0};function Of(a){this.h=a}
Of.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,mf(b))};
Of.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Of.prototype.remove=function(a){this.h.remove(a)};function Pf(a){this.h=a}
D(Pf,Of);function Qf(a){this.data=a}
function Rf(a){return void 0===a||a instanceof Qf?a:new Qf(a)}
Pf.prototype.set=function(a,b){Pf.O.set.call(this,a,Rf(b))};
Pf.prototype.i=function(a){a=Pf.O.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Pf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Sf(a){this.h=a}
D(Sf,Pf);Sf.prototype.set=function(a,b,c){if(b=Rf(b)){if(c){if(c<Date.now()){Sf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Sf.O.set.call(this,a,b)};
Sf.prototype.i=function(a){var b=Sf.O.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Sf.prototype.remove.call(this,a);else return b}};function Tf(){}
;function Uf(){}
D(Uf,Tf);Uf.prototype[Symbol.iterator]=function(){return ye(this.M(!0)).h()};
Uf.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Vf(a){this.h=a}
D(Vf,Uf);m=Vf.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.M=function(a){var b=0,c=this.h,d=new xe;d.R=function(){if(b>=c.length)throw we;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Wf(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
D(Wf,Vf);function Xf(a,b){this.i=a;this.h=null;var c;if(c=pc)c=!(9<=Number(Cc));if(c){Yf||(Yf=new De);this.h=Yf.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Yf.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
D(Xf,Uf);var Zf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Yf=null;function $f(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Zf[b]})}
m=Xf.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute($f(a),b);ag(this)};
m.get=function(a){a=this.h.getAttribute($f(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute($f(a));ag(this)};
m.M=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new xe;d.R=function(){if(b>=c.length)throw we;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ag(this)};
function ag(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function bg(a,b){this.i=a;this.h=b+"::"}
D(bg,Uf);bg.prototype.set=function(a,b){this.i.set(this.h+a,b)};
bg.prototype.get=function(a){return this.i.get(this.h+a)};
bg.prototype.remove=function(a){this.i.remove(this.h+a)};
bg.prototype.M=function(a){var b=this.i.M(!0),c=this,d=new xe;d.R=function(){for(var e=b.R();e.substr(0,c.h.length)!=c.h;)e=b.R();return a?e.substr(c.h.length):c.i.get(e)};
return d};function cg(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;function dg(a){Xc.call(this,a,92,eg)}
v(dg,Xc);var eg=[82];var fg,gg,hg,ig=z.window,jg=(null===(fg=null===ig||void 0===ig?void 0:ig.yt)||void 0===fg?void 0:fg.config_)||(null===(gg=null===ig||void 0===ig?void 0:ig.ytcfg)||void 0===gg?void 0:gg.data_)||{},kg=(null===(hg=null===ig||void 0===ig?void 0:ig.ytcfg)||void 0===hg?void 0:hg.obfuscatedData_)||[];new dg(kg);A("yt.config_",jg,void 0);A("yt.configJspb_",kg,void 0);function M(a){for(var b=0;b<arguments.length;++b);cg(jg,arguments)}
function F(a,b){return a in jg?jg[a]:b}
;var lg=[];function mg(a){lg.forEach(function(b){return b(a)})}
function ng(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){og(b)}}:a}
function og(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=F("ERRORS",[]),e.push([a,"ERROR",b,c,d]),M("ERRORS",e));mg(a)}
function pg(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=F("ERRORS",[]),e.push([a,"WARNING",b,c,d]),M("ERRORS",e))}
;var qg=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",qg,void 0);function rg(a){cg(qg,arguments)}
;function N(a){a=sg(a);return"string"===typeof a&&"false"===a?!1:!!a}
function tg(a,b){a=sg(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function sg(a){var b=F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:F("EXPERIMENT_FLAGS",{})[a]}
;var ug=0,vg=sc?"webkit":rc?"moz":pc?"ms":oc?"o":"";A("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++ug},void 0);var wg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function xg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in wg||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function yg(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
xg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
xg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
xg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ib=z.ytEventsEventsListeners||{};A("ytEventsEventsListeners",ib,void 0);var zg=z.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",zg,void 0);
function Ag(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return hb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=La(e[4])&&La(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Bg=Ya(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Cg(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ag(a,b,c,d);if(e)return e;e=++zg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new xg(h);if(!xd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new xg(h);
h.currentTarget=a;return c.call(a,h)};
g=ng(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Bg()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ib[e]=[a,b,c,g,d];return e}
function Dg(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in ib){var c=ib[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Bg()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ib[b]}}))}
;var Eg=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Fg(a,b){"function"===typeof a&&(a=ng(a));return window.setTimeout(a,b)}
function Gg(a){window.clearTimeout(a)}
;function Hg(a){this.C=a;this.i=null;this.m=0;this.B=null;this.A=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.L=Cg(window,"mousemove",Sa(this.T,this));a=Sa(this.J,this);"function"===typeof a&&(a=ng(a));this.U=window.setInterval(a,25)}
D(Hg,J);Hg.prototype.T=function(a){void 0===a.h&&yg(a);var b=a.h;void 0===a.i&&yg(a);this.i=new pd(b,a.i)};
Hg.prototype.J=function(){if(this.i){var a=Eg();if(0!=this.m){var b=this.B,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.A)/this.A)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.C();this.A=d}this.m=a;this.B=this.i;this.l=(this.l+1)%4}};
Hg.prototype.D=function(){window.clearInterval(this.U);Dg(this.L)};function Ig(){}
function Jg(a,b){return Kg(a,0,b)}
function Lg(a,b){return Kg(a,1,b)}
;function Mg(){Ig.apply(this,arguments)}
v(Mg,Ig);function Ng(){Mg.h||(Mg.h=new Mg);return Mg.h}
function Kg(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Fg(a,c||0)}
function Og(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):Gg(a)}}
Mg.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
Mg.prototype.pause=function(){var a=C("yt.scheduler.instance.pause");a&&a()};Ng();var Pg={};
function Qg(a){var b=void 0===a?{}:a;a=void 0===b.Lb?!1:b.Lb;b=void 0===b.vb?!0:b.vb;if(null==C("_lact",window)){var c=parseInt(F("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&Rg();Cg(document,"keydown",Rg);Cg(document,"keyup",Rg);Cg(document,"mousedown",Rg);Cg(document,"mouseup",Rg);a?Cg(window,"touchmove",function(){Sg("touchmove",200)},{passive:!0}):(Cg(window,"resize",function(){Sg("resize",200)}),b&&Cg(window,"scroll",function(){Sg("scroll",200)}));
new Hg(function(){Sg("mouse",100)});
Cg(document,"touchstart",Rg,{passive:!0});Cg(document,"touchend",Rg,{passive:!0})}}
function Sg(a,b){Pg[a]||(Pg[a]=!0,Lg(function(){Rg();Pg[a]=!1},b))}
function Rg(){null==C("_lact",window)&&Qg();var a=Date.now();A("_lact",a,window);-1==C("_fact",window)&&A("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function Tg(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function Ug(){var a=Vg;C("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a,void 0)}
function Wg(a){A("yt.ads.biscotti.lastId_",a,void 0)}
;var Xg=/^[\w.]*$/,Yg={q:!0,search_query:!0};function Zg(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=$g(f[0]||""),h=$g(f[1]||"");g in c?Array.isArray(c[g])?fb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(Zg);k.args=[{key:l,value:f[1],query:a,method:ah==n?"unchanged":n}];Yg.hasOwnProperty(l)||pg(k)}}return c}
var ah=String(Zg);function bh(a){var b=[];gb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ch(a){"?"==a.charAt(0)&&(a=a.substr(1));return Zg(a,"&")}
function dh(){var a=window.location.href;return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),ch(1<a.length?a[1]:a[0])):{}}
function eh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ch(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return kc(a,e)+d}
function fh(a){if(!b)var b=window.location.href;var c=a.match(fc)[1]||null,d=hc(a);c&&d?(a=a.match(fc),b=b.match(fc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?hc(b)==d&&(Number(b.match(fc)[4]||null)||null)==(Number(a.match(fc)[4]||null)||null):!0;return a}
function $g(a){return a&&a.match(Xg)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function gh(a){var b=hh;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Ed;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ma){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?fd:g;try{var h=g.history.length}catch(Ma){h=0}e.u_his=h;var k;e.u_h=null==(k=fd.screen)?void 0:k.height;var l;e.u_w=null==(l=fd.screen)?void 0:l.width;var n;e.u_ah=null==(n=fd.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=fd.screen)?void 0:p.availWidth;var r;e.u_cd=null==(r=fd.screen)?void 0:r.colorDepth}catch(Ma){}h=b.h;try{var q=h.screenX;var y=h.screenY}catch(Ma){}try{var B=h.outerWidth;var G=h.outerHeight}catch(Ma){}try{var R=h.innerWidth;var P=h.innerHeight}catch(Ma){}try{var K=h.screenLeft;var ea=h.screenTop}catch(Ma){}try{R=h.innerWidth,P=h.innerHeight}catch(Ma){}try{var Df=h.screen.availWidth;var an=h.screen.availTop}catch(Ma){}q=[K,ea,q,y,Df,an,B,G,R,P];y=b.h.top;try{var Ob=(y||window).document,za=
"CSS1Compat"==Ob.compatMode?Ob.documentElement:Ob.body;var Da=(new qd(za.clientWidth,za.clientHeight)).round()}catch(Ma){Da=new qd(-12245933,-12245933)}Ob=Da;Da={};za=new Rd;z.SVGElement&&z.document.createElementNS&&za.set(0);y=Cd();y["allow-top-navigation-by-user-activation"]&&za.set(1);y["allow-popups-to-escape-sandbox"]&&za.set(2);z.crypto&&z.crypto.subtle&&za.set(3);z.TextDecoder&&z.TextEncoder&&za.set(4);za=Sd(za);Da.bc=za;Da.bih=Ob.height;Da.biw=Ob.width;Da.brdim=q.join();b=b.i;b=(Da.vis={visible:1,
hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Da.wgl=!!fd.WebGLRenderingContext,Da);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var hh=new function(){var a=window.document;this.h=window;this.i=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return bh(gh(a))},void 0);Date.now();var ih="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function jh(){if(!ih)return null;var a=ih();return"open"in a?a:null}
function kh(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var lh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},mh="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ha("client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" "))),nh=!1;
function oh(a,b){b=void 0===b?{}:b;var c=fh(a),d=N("web_ajax_ignore_global_headers_if_set"),e;for(e in lh){var f=F(lh[e]);!f||!c&&hc(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!hc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!hc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!hc(a))b["X-YouTube-Ad-Signals"]=bh(gh(void 0));return b}
function ph(a){var b=window.location.search,c=hc(a);N("debug_handle_relative_url_for_query_forward_killswitch")||c||!fh(a)||(c=document.location.hostname);var d=gc(a.match(fc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ch(b),f={};E(mh,function(g){e[g]&&(f[g]=e[g])});
return eh(a,f||{},!1)}
function qh(a,b){var c=b.format||"JSON";a=rh(a,b);var d=sh(a,b),e=!1,f=th(a,function(k){if(!e){e=!0;h&&Gg(h);var l=kh(k),n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=uh(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||z;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Fg(function(){e||(e=!0,f.abort(),Gg(h),g.call(b.context||z,f))},b.timeout)}return f}
function rh(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=F("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=eh(a,b||{},!0);return a}
function sh(a,b){var c=F("XSRF_FIELD_NAME",void 0),d=F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=F("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||hc(a)&&!b.withCredentials&&hc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=ch(e),qb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):jc(e));f=e||f&&!jb(f);!nh&&f&&
"POST"!=b.method&&(nh=!0,og(Error("AJAX request with postData should use POST")));return e}
function uh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,pg(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?vh(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=wh(g)})}d&&xh(e);
return e}
function xh(a){if(La(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;vb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=Zb(a[b],null);a[c]=d}else xh(a[b])}}
function vh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function wh(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function th(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ng(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=jh();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;N("debug_forward_web_query_parameters")&&(a=ph(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=oh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var yh=Dc||Ec;function zh(a){var b=Sb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var Ah={},Bh=0;
function Ch(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!zh("cobalt")){if(a){a instanceof Kb||(a="object"==typeof a&&a.X?a.W():String(a),Qb.test(a)?a=new Kb(a,Lb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Pb))&&Nb.test(b[1])?new Kb(a,Lb):null));b=Mb(a||Rb);if("about:invalid#zClosurez"===b||b.startsWith("data"))a="";else{if(b instanceof Yb)a=b;else{var f="object"==typeof b;a=null;f&&b.Ja&&(a=b.Fa());b=f&&b.X?b.W():String(b);Jb.test(b)&&(-1!=b.indexOf("&")&&(b=b.replace(Db,"&amp;")),-1!=b.indexOf("<")&&
(b=b.replace(Eb,"&lt;")),-1!=b.indexOf(">")&&(b=b.replace(Fb,"&gt;")),-1!=b.indexOf('"')&&(b=b.replace(Gb,"&quot;")),-1!=b.indexOf("'")&&(b=b.replace(Hb,"&#39;")),-1!=b.indexOf("\x00")&&(b=b.replace(Ib,"&#0;")));a=Zb(b,a)}a instanceof Yb&&a.constructor===Yb?a=a.h:(Ja(a),a="type_error:SafeHtml");a=encodeURIComponent(String(mf(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=ud("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)th(a,
b,"POST",e,d);else if(F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)th(a,b,"GET","",d);else{b:{try{var g=new Xa({url:a});if(g.j&&g.i||g.l){var h=gc(a.match(fc)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(lc);d:{for(c=0;0<=(c=a.indexOf("ri",c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var r=c;break d}}c+=3}r=-1}if(0>r)var q=null;else{var y=a.indexOf("&",r);if(0>y||y>l)y=l;r+=3;q=decodeURIComponent(a.substr(r,y-r).replace(/\+/g,
" "))}k="1"!==q}f=!k;break b}}catch(B){}f=!1}f?Dh(a)?(b&&b(),f=!0):f=!1:f=!1;f||Eh(a,b)}}
function Fh(a,b,c){c=void 0===c?"":c;Dh(a,c)?b&&b():Ch(a,b,void 0,void 0,c)}
function Dh(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Eh(a,b){var c=new Image,d=""+Bh++;Ah[d]=c;c.onload=c.onerror=function(){b&&Ah[d]&&b();delete Ah[d]};
c.src=a}
;var Gh=z.ytPubsubPubsubInstance||new L,Hh=z.ytPubsubPubsubSubscribedKeys||{},Ih=z.ytPubsubPubsubTopicToKeys||{},Jh=z.ytPubsubPubsubIsSynchronous||{};function Kh(a,b){var c=Lh();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Hh[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Jh[a]?f():Fg(f,0)}catch(g){og(g)}},void 0);
Hh[d]=!0;Ih[a]||(Ih[a]=[]);Ih[a].push(d);return d}return 0}
function Mh(a){var b=Lh();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),E(a,function(c){b.unsubscribeByKey(c);delete Hh[c]}))}
function Nh(a,b){var c=Lh();c&&c.publish.apply(c,arguments)}
function Oh(a){var b=Lh();if(b)if(b.clear(a),a)Ph(a);else for(var c in Ih)Ph(c)}
function Lh(){return z.ytPubsubPubsubInstance}
function Ph(a){Ih[a]&&(a=Ih[a],E(a,function(b){Hh[b]&&delete Hh[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ka;L.prototype.publish=L.prototype.da;L.prototype.clear=L.prototype.clear;A("ytPubsubPubsubInstance",Gh,void 0);A("ytPubsubPubsubTopicToKeys",Ih,void 0);A("ytPubsubPubsubIsSynchronous",Jh,void 0);A("ytPubsubPubsubSubscribedKeys",Hh,void 0);var Qh=window,O=Qh.ytcsi&&Qh.ytcsi.now?Qh.ytcsi.now:Qh.performance&&Qh.performance.timing&&Qh.performance.now&&Qh.performance.timing.navigationStart?function(){return Qh.performance.timing.navigationStart+Qh.performance.now()}:function(){return(new Date).getTime()};var Rh=tg("initial_gel_batch_timeout",2E3),Sh=Math.pow(2,16)-1,Th=void 0,Uh=0,Vh=0,Wh=0,Xh=!0,Yh=z.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",Yh,void 0);var Zh=z.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",Zh,void 0);
function $h(a,b){if("log_event"===a.endpoint){var c="";a.ta?c="visitorOnlyApprovedKey":a.cttAuthInfo&&(Zh[a.cttAuthInfo.token]=ai(a.cttAuthInfo),c=a.cttAuthInfo.token);var d=Yh.get(c)||[];Yh.set(c,d);d.push(a.payload);b&&(Th=new b);a=tg("tvhtml5_logging_max_batch")||tg("web_logging_max_batch")||100;b=O();d.length>=a?bi({writeThenSend:!0},N("flush_only_full_queue")?c:void 0):10<=b-Wh&&(ci(),Wh=b)}}
function di(a,b){if("log_event"===a.endpoint){var c="";a.ta?c="visitorOnlyApprovedKey":a.cttAuthInfo&&(Zh[a.cttAuthInfo.token]=ai(a.cttAuthInfo),c=a.cttAuthInfo.token);var d=new Map;d.set(c,[a.payload]);b&&(Th=new b);return new tf(function(e){Th&&Th.isReady()?ei(d,e,{bypassNetworkless:!0},!0):e()})}}
function bi(a,b){a=void 0===a?{}:a;new tf(function(c){Gg(Uh);Gg(Vh);Vh=0;if(Th&&Th.isReady())if(void 0!==b){var d=new Map,e=Yh.get(b)||[];d.set(b,e);ei(d,c,a);Yh.delete(b)}else ei(Yh,c,a),Yh.clear();else ci(),c()})}
function ci(){N("web_gel_timeout_cap")&&!Vh&&(Vh=Fg(function(){bi({writeThenSend:!0})},6E4));
Gg(Uh);var a=F("LOGGING_BATCH_TIMEOUT",tg("web_gel_debounce_ms",1E4));N("shorten_initial_gel_batch_timeout")&&Xh&&(a=Rh);Uh=Fg(function(){bi({writeThenSend:!0})},a)}
function ei(a,b,c,d){var e=Th;c=void 0===c?{}:c;var f=Math.round(O()),g=a.size;a=u(a);for(var h=a.next();!h.done;h=a.next()){var k=u(h.value);h=k.next().value;var l=k=k.next().value;k=ob({context:fi(e.config_||gi())});k.events=l;(l=Zh[h])&&hi(k,h,l);delete Zh[h];h="visitorOnlyApprovedKey"===h;ii(k,f,h);N("always_send_and_write")&&(c.writeThenSend=!1);N("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&Fh("/generate_204");ji(e,"log_event",k,{retry:!0,onSuccess:function(){g--;
g||b()},
onError:function(){g--;g||b()},
gb:c,ta:h,Hm:!!d});Xh=!1}}
function ii(a,b,c){a.requestTimeMs=String(b);N("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=F("EVENT_ID",void 0))&&((c=F("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*Sh/2)),c++,c>Sh&&(c=1),M("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function hi(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function ai(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var ki=z.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",ki,void 0);
function li(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||O());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Tg();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};N("log_sequence_info_on_gel_web")&&d.ba&&(a=e.context,b=d.ba,ki[b]=b in ki?ki[b]+1:0,a.sequence={index:ki[b],groupKey:b},d.wb&&delete ki[d.ba]);(d.Qm?di:$h)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,ta:d.ta},c)}
;function mi(){if(!z.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return z.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":z.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":z.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":z.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function ni(a,b,c,d,e){Md.set(""+a,b,{La:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var oi=C("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",oi,void 0);function pi(){this.h=F("ALT_PREF_COOKIE_NAME","PREF");this.i=F("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Md.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(oi[d]=c.toString())}}}
pi.prototype.get=function(a,b){qi(a);ri(a);a=void 0!==oi[a]?oi[a].toString():null;return null!=a?a:b?b:""};
pi.prototype.set=function(a,b){qi(a);ri(a);if(null==b)throw Error("ExpectedNotNull");oi[a]=b.toString()};
pi.prototype.remove=function(a){qi(a);ri(a);delete oi[a]};
pi.prototype.clear=function(){for(var a in oi)delete oi[a]};
function ri(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function qi(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function si(a){a=void 0!==oi[a]?oi[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ia(pi);var ti={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},ui={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function vi(){var a=z.navigator;return a?a.connection:void 0}
;function wi(){return"INNERTUBE_API_KEY"in jg&&"INNERTUBE_API_VERSION"in jg}
function gi(){return{innertubeApiKey:F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:F("INNERTUBE_API_VERSION",void 0),yb:F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),zb:F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Bb:F("INNERTUBE_CONTEXT_HL",void 0),Ab:F("INNERTUBE_CONTEXT_GL",void 0),Cb:F("INNERTUBE_HOST_OVERRIDE",void 0)||"",Eb:!!F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Db:!!F("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:F("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function fi(a){var b={client:{hl:a.Bb,gl:a.Ab,clientName:a.zb,clientVersion:a.innertubeContextClientVersion,configInfo:a.yb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=z.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=F("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=F("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=F("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===
d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!N("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=mi()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!N("music_web_display_mode_killswitch")){var h;b.client.fb=null!=(h=b.client.fb)?h:{};b.client.fb.webDisplayMode=mi()}a.appInstallData&&
(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);F("DELEGATED_SESSION_ID")&&!N("pageid_as_header_web")&&(b.user={onBehalfOfUser:F("DELEGATED_SESSION_ID")});a:{if(h=vi()){a=ti[h.type||"unknown"]||"CONN_UNKNOWN";h=ti[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);N("web_log_effective_connection_type")&&
(a=vi(),a=null!==a&&void 0!==a&&a.effectiveType?ui.hasOwnProperty(a.effectiveType)?ui[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(ch(F("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=
d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function xi(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Fm||F("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Em:b=Qd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=F("SESSION_INDEX",0),N("pageid_as_header_web")&&(d["X-Goog-PageId"]=F("DELEGATED_SESSION_ID")));return d}
;function yi(a){a=Object.assign({},a);delete a.Authorization;var b=Qd();if(b){var c=new je;c.update(F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Ic(c.digest(),3)}return a}
;function zi(a){var b=new Wf;(b=b.isAvailable()?a?new bg(b,a):b:null)||(a=new Xf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Sf(a):null;this.i=document.domain||window.location.hostname}
zi.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(mf(b))}catch(f){return}else e=escape(b);ni(a,e,c,this.i)};
zi.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Md.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
zi.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Md.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ai;function Bi(){Ai||(Ai=new zi("yt.innertube"));return Ai}
function Ci(a,b,c,d){if(d)return null;d=Bi().get("nextId",!0)||1;var e=Bi().get("requests",!0)||{};e[d]={method:a,request:b,authState:yi(c),requestTime:Math.round(O())};Bi().set("nextId",d+1,86400,!0);Bi().set("requests",e,86400,!0);return d}
function Di(a){var b=Bi().get("requests",!0)||{};delete b[a];Bi().set("requests",b,86400,!0)}
function Ei(a){var b=Bi().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(O())-d.requestTime)){var e=d.authState,f=yi(xi(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(O())),ji(a,d.method,e,{}));delete b[c]}}Bi().set("requests",b,86400,!0)}}
;var Fi=function(){var a;return function(){a||(a=new zi("ytidb"));return a}}();
function Gi(){var a;return null===(a=Fi())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function Hi(a){var b=Gi();this.result={hasSucceededOnce:(null===b||void 0===b?void 0:b.hasSucceededOnce)||a};var c,d;null!==(c=Fi())&&void 0!==c&&c.h&&(null===(d=Fi())||void 0===d?void 0:d.set("LAST_RESULT_ENTRY_KEY",this.result,2592E3,!0))}
Hi.prototype.isSupported=function(){return this.result.hasSucceededOnce};var Ii=[],Ji=!1;function Ki(a){Ji||(Ii.push({type:"ERROR",payload:a}),10<Ii.length&&Ii.shift())}
function Li(a,b){Ji||(Ii.push({type:"EVENT",eventType:a,payload:b}),10<Ii.length&&Ii.shift())}
;function Mi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(ha(c))}
v(Mi,Error);function Ni(){try{return Oi(),!0}catch(a){return!1}}
function Oi(){if(void 0!==F("DATASYNC_ID",void 0))return F("DATASYNC_ID",void 0);throw new Mi("Datasync ID not set","unknown");}
;function Pi(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Qi(a){return a.substr(0,a.indexOf(":"))||a}
;var Ri={},Si=(Ri.AUTH_INVALID="No user identifier specified.",Ri.EXPLICIT_ABORT="Transaction was explicitly aborted.",Ri.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Ri.MISSING_INDEX="Index not created.",Ri.MISSING_OBJECT_STORE="Object store not created.",Ri.DB_DELETED_BY_MISSING_OBJECT_STORE="Database is deleted because an expected object store was not created.",Ri.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Ri.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",
Ri.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Ri.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Ri.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Ri),Ti={},Ui=(Ti.AUTH_INVALID="ERROR",Ti.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Ti.EXPLICIT_ABORT="IGNORED",Ti.IDB_NOT_SUPPORTED="ERROR",Ti.MISSING_INDEX="WARNING",Ti.MISSING_OBJECT_STORE="ERROR",Ti.DB_DELETED_BY_MISSING_OBJECT_STORE=
"WARNING",Ti.QUOTA_EXCEEDED="WARNING",Ti.QUOTA_MAYBE_EXCEEDED="WARNING",Ti.UNKNOWN_ABORT="WARNING",Ti.INCOMPATIBLE_DB_VERSION="WARNING",Ti),Vi={},Wi=(Vi.AUTH_INVALID=!1,Vi.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Vi.EXPLICIT_ABORT=!1,Vi.IDB_NOT_SUPPORTED=!1,Vi.MISSING_INDEX=!1,Vi.MISSING_OBJECT_STORE=!1,Vi.DB_DELETED_BY_MISSING_OBJECT_STORE=!1,Vi.QUOTA_EXCEEDED=!1,Vi.QUOTA_MAYBE_EXCEEDED=!0,Vi.UNKNOWN_ABORT=!0,Vi.INCOMPATIBLE_DB_VERSION=!1,Vi);
function Q(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Si[a]:c;d=void 0===d?Ui[a]:d;e=void 0===e?Wi[a]:e;Mi.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Q.prototype)}
v(Q,Mi);function Xi(a){Q.call(this,"MISSING_OBJECT_STORE",{Hb:a},Si.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Xi.prototype)}
v(Xi,Q);function Yi(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Yi.prototype)}
v(Yi,Error);var Zi=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function $i(a,b,c,d){b=Qi(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Q)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Q("QUOTA_EXCEEDED",a);if(Fc&&"UnknownError"===e.name)return new Q("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Yi)return new Q("MISSING_INDEX",Object.assign(Object.assign({},a),{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Zi.some(function(f){return e.message.includes(f)}))return new Q("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Q("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign(Object.assign({},a),{name:"IdbError",Mm:e.name})];e.level="WARNING";return e}
function aj(a,b,c){return new Q("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c}})}
;function bj(a){if(!a)throw Error();throw a;}
function cj(a){return a}
function dj(a){this.h=a}
function S(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
S.all=function(a){return new S(new dj(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={fa:0};f.fa<a.length;f={fa:f.fa},++f.fa)ej(S.resolve(a[f.fa]).then(function(g){return function(h){d[g.fa]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
S.resolve=function(a){return new S(new dj(function(b,c){a instanceof S?a.then(b,c):b(a)}))};
S.reject=function(a){return new S(new dj(function(b,c){c(a)}))};
S.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:cj,e=null!==b&&void 0!==b?b:bj;return new S(new dj(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){fj(c,c,d,f,g)}),c.onRejected.push(function(){gj(c,c,e,f,g)})):"FULFILLED"===c.state.status?fj(c,c,d,f,g):"REJECTED"===c.state.status&&gj(c,c,e,f,g)}))};
function ej(a,b){a.then(void 0,b)}
function fj(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof S?hj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function gj(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof S?hj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function hj(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof S?hj(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ij(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function jj(a){return new Promise(function(b,c){ij(a,b,c)})}
function T(a){return new S(new dj(function(b,c){ij(a,b,c)}))}
;function kj(a,b){return new S(new dj(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function lj(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(O());this.i=!1}
m=lj.prototype;m.add=function(a,b,c){return mj(this,[a],{mode:"readwrite",K:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return mj(this,[a],{mode:"readwrite",K:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return mj(this,[a],{mode:"readonly",K:!0},function(c){return c.objectStore(a).count(b)})};
function nj(a,b,c){a=a.h.createObjectStore(b,c);return new oj(a)}
m.delete=function(a,b){return mj(this,[a],{mode:"readwrite",K:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return mj(this,[a],{mode:"readonly",K:!0},function(c){return c.objectStore(a).get(b)})};
function pj(a,b){return mj(a,["LogsRequestsStore"],{mode:"readwrite",K:!0},function(c){c=c.objectStore("LogsRequestsStore");return T(c.h.put(b,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function mj(a,b,c,d){return I(a,function f(){var g=this,h,k,l,n,p,r,q,y,B,G,R,P;return x(f,function(K){switch(K.h){case 1:var ea={mode:"readonly",K:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?ea.mode=c:Object.assign(ea,c);h=ea;g.transactionCount++;k=h.K?3:1;l=0;case 2:if(n){K.u(3);break}l++;p=Math.round(O());sa(K,4);r=g.h.transaction(b,h.mode);ea=new qj(r);ea=rj(ea,d);return w(K,ea,6);case 6:return q=K.i,y=Math.round(O()),sj(g,p,y,l,void 0,b.join(),h),K.return(q);case 4:B=ta(K);G=Math.round(O());
R=$i(B,g.h.name,b.join(),g.h.version);if((P=R instanceof Q&&!R.h)||l>=k)sj(g,p,G,l,R,b.join(),h),n=R;K.u(2);break;case 3:return K.return(Promise.reject(n))}})})}
function sj(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Q&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Li("QUOTA_EXCEEDED",{dbName:Qi(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Q&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Li("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),tj(a,!1,d,f,b,g.tag),Ki(e)):tj(a,!0,d,f,b,g.tag)}
function tj(a,b,c,d,e,f){Li("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function oj(a){this.h=a}
m=oj.prototype;m.add=function(a,b){return T(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return T(this.h.clear()).then(function(){})};
m.count=function(a){return T(this.h.count(a))};
function uj(a,b){return vj(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?uj(this,a):T(this.h.delete(a))};
m.get=function(a){return T(this.h.get(a))};
m.index=function(a){try{return new wj(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Yi(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function vj(a,b,c){a=a.h.openCursor(b.query,b.direction);return xj(a).then(function(d){return kj(d,c)})}
function qj(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Q;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function rj(a,b){var c=new Promise(function(d,e){try{ej(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
qj.prototype.abort=function(){this.h.abort();this.i=!0;throw new Q("EXPLICIT_ABORT");};
qj.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new oj(a),this.j.set(a,b));return b};
function wj(a){this.h=a}
m=wj.prototype;m.count=function(a){return T(this.h.count(a))};
m.delete=function(a){return yj(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return T(this.h.get(a))};
m.getKey=function(a){return T(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function yj(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return xj(a).then(function(d){return kj(d,c)})}
function zj(a,b){this.request=a;this.cursor=b}
function xj(a){return T(a).then(function(b){return b?new zj(a,b):null})}
m=zj.prototype;m.advance=function(a){this.cursor.advance(a);return xj(this.request)};
m.continue=function(a){this.cursor.continue(a);return xj(this.request)};
m.delete=function(){return T(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return T(this.cursor.update(a))};function Aj(a,b,c){return new Promise(function(d,e){function f(){r||(r=new lj(g.result,{closed:p}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.Wb,n=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&Li("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:Qi(a)});var y=f(),B=new qj(g.transaction);
n&&n(y,function(G){return q.oldVersion<G&&q.newVersion>=G},B);
B.done.catch(function(G){e(G)})}catch(G){e(G)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){Li("IDB_UNEXPECTEDLY_CLOSED",{dbName:Qi(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Bj(a,b,c){c=void 0===c?{}:c;return Aj(a,b,c)}
function Cj(a,b){b=void 0===b?{}:b;return I(this,function d(){var e,f,g;return x(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return w(h,jj(e),0)})})}
;function Dj(a,b){this.name=a;this.options=b;this.l=!0;this.j=!1}
Dj.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Bj(a,b,c)};
Dj.prototype.delete=function(a){a=void 0===a?{}:a;return Cj(this.name,a)};
function Ej(a,b){return new Q("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
Dj.prototype.open=function(){function a(){return I(c,function g(){var h,k,l,n=this,p,r,q,y,B;return x(g,function(G){switch(G.h){case 1:return l=null!==(h=Error().stack)&&void 0!==h?h:"",sa(G,2),w(G,n.i(n.name,n.options.version,e),4);case 4:p=G.i;a:{var R=n.options;for(var P=u(Object.keys(R.xa)),K=P.next();!K.done;K=P.next()){K=K.value;var ea=R.xa[K],Df=void 0===ea.Nb?Number.MAX_VALUE:ea.Nb;if(p.h.version>=ea.Ea&&!(p.h.version>=Df)&&!p.h.objectStoreNames.contains(K)){R=K;break a}}R=void 0}r=R;if(void 0===
r){G.u(5);break}if(n.j){G.u(6);break}n.j=!0;return w(G,n.delete(),7);case 7:return Ki(new Q("DB_DELETED_BY_MISSING_OBJECT_STORE",{dbName:n.name,Hb:r})),G.return(a());case 6:throw new Xi(r);case 5:return G.return(p);case 2:q=ta(G);if(q instanceof DOMException?"VersionError"!==q.name:"DOMError"in self&&q instanceof DOMError?"VersionError"!==q.name:!(q instanceof Object&&"message"in q)||"An attempt was made to open a database using a lower version than the existing version."!==q.message){G.u(8);break}return w(G,
n.i(n.name,void 0,Object.assign(Object.assign({},e),{upgrade:void 0})),9);case 9:y=G.i;B=y.h.version;if(void 0!==n.options.version&&B>n.options.version+1)throw y.close(),n.l=!1,Ej(n,B);return G.return(y);case 8:throw b(),q instanceof Error&&!N("ytidb_async_stack_killswitch")&&(q.stack=q.stack+"\n"+l.substring(l.indexOf("\n")+1)),$i(q,n.name,"",null!==(k=n.options.version)&&void 0!==k?k:-1);}})})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw Ej(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Wb:b,upgrade:this.options.upgrade};return this.h=d=a()};var Fj=new Dj("YtIdbMeta",{xa:{databases:{Ea:1}},upgrade:function(a,b){b(1)&&nj(a,"databases",{keyPath:"actualName"})}});
function Gj(a){return I(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Fj.open(),2);d=e.i;return e.return(mj(d,["databases"],{K:!0,mode:"readwrite"},function(f){var g=f.objectStore("databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier:1)return T(g.h.put(a,void 0)).then(function(){})})}))})})}
function Hj(a){return I(this,function c(){var d;return x(c,function(e){if(1==e.h)return a?w(e,Fj.open(),2):e.return();d=e.i;return e.return(d.delete("databases",a))})})}
function Ij(a){return I(this,function c(){var d,e;return x(c,function(f){return 1==f.h?(d=[],w(f,Fj.open(),2)):3!=f.h?(e=f.i,w(f,mj(e,["databases"],{K:!0,mode:"readonly"},function(g){d.length=0;return vj(g.objectStore("databases"),{},function(h){a(h.getValue())&&d.push(h.getValue());return h.continue()})}),3)):f.return(d)})})}
function Jj(){return Ij(function(a){return"LogsDatabaseV2"===a.publicName&&void 0!==a.userIdentifier})}
;var Kj,Lj=new function(){}(new function(){});
function Mj(){return I(this,function b(){var c,d,e;return x(b,function(f){switch(f.h){case 1:c=Gi();if(null===c||void 0===c?0:c.hasSucceededOnce)return f.return(new Hi(!0));var g;if(g=yh)g=/WebKit\/([0-9]+)/.exec(Sb),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(Sb),g=!(g&&602<=parseInt(g[1],10)));if(g||qc)return f.return(new Hi(!1));try{if(d=self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return f.return(new Hi(!1))}catch(h){return f.return(new Hi(!1))}if(!("IDBTransaction"in
self&&"objectStoreNames"in IDBTransaction.prototype))return f.return(new Hi(!1));sa(f,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(f,Gj(e),4);case 4:return w(f,Hj("yt-idb-test-do-not-use"),5);case 5:return f.return(new Hi(!0));case 2:return ta(f),f.return(new Hi(!1))}})})}
function Nj(){if(void 0!==Kj)return Kj;Ji=!0;return Kj=Mj().then(function(a){Ji=!1;return a.isSupported()})}
function Oj(){return Nj().then(function(a){return a?Lj:void 0})}
;new function(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};function Pj(a){if(!Ni())throw a=new Q("AUTH_INVALID",{dbName:a}),Ki(a),a;var b=Oi();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Qj(a,b,c,d){var e;return I(this,function g(){var h,k,l,n,p;return x(g,function(r){switch(r.h){case 1:return h=null!==(e=Error().stack)&&void 0!==e?e:"",w(r,Oj(),2);case 2:k=r.i;if(!k)throw l=aj("openDbImpl",a,b),N("ytidb_async_stack_killswitch")||(l.stack=l.stack+"\n"+h.substring(h.indexOf("\n")+1)),Ki(l),l;Pi(a);n=c?{actualName:a,publicName:a,userIdentifier:void 0}:Pj(a);sa(r,3);return w(r,Gj(n),5);case 5:return w(r,Bj(n.actualName,b,d),6);case 6:return r.return(r.i);case 3:return p=ta(r),
sa(r,7),w(r,Hj(n.actualName),9);case 9:r.h=8;r.m=0;break;case 7:ta(r);case 8:throw p;}})})}
function Rj(a,b,c){c=void 0===c?{}:c;return Qj(a,b,!1,c)}
function Sj(a,b,c){c=void 0===c?{}:c;return Qj(a,b,!0,c)}
function Tj(a,b){b=void 0===b?{}:b;return I(this,function d(){var e,f;return x(d,function(g){if(1==g.h)return w(g,Oj(),2);if(3!=g.h){e=g.i;if(!e)return g.return();Pi(a);f=Pj(a);return w(g,Cj(f.actualName,b),3)}return w(g,Hj(f.actualName),0)})})}
function Uj(a,b){var c=this;a=a.map(function(d){return I(c,function f(){return x(f,function(g){return 1==g.h?w(g,Cj(d.actualName,b),2):w(g,Hj(d.actualName),0)})})});
return Promise.all(a).then(function(){})}
function Vj(){var a=void 0===a?{}:a;return I(this,function c(){var d,e;return x(c,function(f){if(1==f.h)return w(f,Oj(),2);if(3!=f.h){d=f.i;if(!d)return f.return();Pi("LogsDatabaseV2");return w(f,Jj(),3)}e=f.i;return w(f,Uj(e,a),0)})})}
function Wj(a,b){b=void 0===b?{}:b;return I(this,function d(){var e;return x(d,function(f){if(1==f.h)return w(f,Oj(),2);if(3!=f.h){e=f.i;if(!e)return f.return();Pi(a);return w(f,Cj(a,b),3)}return w(f,Hj(a),0)})})}
;function Xj(a){var b,c,d,e,f,g,h,k;this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.ja=function(){};
this.now=Date.now;this.nb=null!==(b=a.nb)&&void 0!==b?b:100;this.lb=null!==(c=a.lb)&&void 0!==c?c:1;this.jb=null!==(d=a.jb)&&void 0!==d?d:2592E6;this.hb=null!==(e=a.hb)&&void 0!==e?e:12E4;this.kb=null!==(f=a.kb)&&void 0!==f?f:5E3;this.databaseToken=null!==(g=a.databaseToken)&&void 0!==g?g:void 0;this.va=!!a.va;this.sa=null!==(h=a.sa)&&void 0!==h?h:.1;this.za=null!==(k=a.za)&&void 0!==k?k:10;a.handleError&&(this.handleError=a.handleError);a.ja&&(this.ja=a.ja);this.F=a.F;this.cb=a.cb;this.G=a.G;this.I=
a.I;this.S=a.S;this.Oa=a.Oa;this.Na=a.Na;this.databaseToken&&(!this.F||this.F("networkless_logging"))&&Yj(this)}
function Yj(a){I(a,function c(){var d=this;return x(c,function(e){if(!d.databaseToken)return e.return();Zj(d);d.I.H()&&d.ma();d.I.Y(d.Oa,d.ma.bind(d));d.I.Y(d.Na,d.Ua.bind(d));d.h=!0;return d.va&&Math.random()<=d.sa?w(e,d.G.sb(d.databaseToken),0):e.u(0)})})}
m=Xj.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.G.set(d,this.databaseToken).then(function(e){d.id=e;c.I.H()&&ak(c,d)}).catch(function(e){ak(c,d);
bk(c,e)})}else this.S(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.F&&this.F("nwl_skip_retry")&&(e.skipRetry=c);if(this.I.H()){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return I(d,function l(){var n=this,p;return x(l,function(r){if(1==r.h)return p=n,w(r,n.G.set(e,n.databaseToken).catch(function(q){bk(p,q)}),2);
f(g,h);r.h=0})})}}this.S(a,b,e.skipRetry)}else this.G.set(e,this.databaseToken).catch(function(g){d.S(a,b,e.skipRetry);
bk(d,g)})}else this.S(a,b,this.F&&this.F("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.databaseToken&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.G.ia(d.id,c.databaseToken):e=!0;c.I.aa&&c.F&&c.F("vss_network_hint")&&c.I.aa(!0);f(g,h)};
this.S(d.url,d.options);this.G.set(d,this.databaseToken).then(function(g){d.id=g;e&&c.G.ia(d.id,c.databaseToken)}).catch(function(g){bk(c,g)})}else this.S(a,b)};
m.ma=function(){var a=this;if(!this.databaseToken)throw aj("throttleSend");this.i||(this.i=Lg(function(){return I(a,function c(){var d=this,e;return x(c,function(f){if(1==f.h)return w(f,d.G.ab("NEW",d.databaseToken),2);if(3!=f.h)return e=f.i,e?w(f,ak(d,e),3):(d.Ua(),f.return());d.i&&(d.i=0,d.ma());f.h=0})})},this.nb))};
m.Ua=function(){Og(this.i);this.i=0};
function ak(a,b){return I(a,function d(){var e=this,f,g;return x(d,function(h){switch(h.h){case 1:if(!e.databaseToken)throw f=aj("immediateSend"),f;if(void 0===b.id){h.u(2);break}return w(h,e.G.Gb(b.id,e.databaseToken),3);case 3:(g=h.i)?b=g:e.ja(Error("The request cannot be found in the database."));case 2:if(ck(e,b,e.jb)){h.u(4);break}e.ja(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){h.u(5);break}return w(h,e.G.ia(b.id,e.databaseToken),5);case 5:return h.return();
case 4:b.skipRetry||(b=dk(e,b));if(!b){h.u(0);break}if(!b.skipRetry||void 0===b.id){h.u(8);break}return w(h,e.G.ia(b.id,e.databaseToken),8);case 8:e.S(b.url,b.options,!!b.skipRetry),h.h=0}})})}
function dk(a,b){if(!a.databaseToken)throw aj("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){return I(a,function h(){var k=this,l,n;return x(h,function(p){switch(p.h){case 1:l=k;n=ek(f);if(!(k.F&&k.F("nwl_consider_error_code")&&n||k.F&&!k.F("nwl_consider_error_code")&&k.potentialEsfErrorCounter<=k.za)){p.u(2);break}if(!k.I.N){p.u(3);break}return w(p,k.I.N(),3);case 3:if(k.I.H()){p.u(2);break}c(e,f);if(!k.F||!k.F("nwl_consider_error_code")||void 0===(null===b||void 0===b?void 0:b.id)){p.u(6);break}return w(p,k.G.Pa(b.id,k.databaseToken,!1),6);case 6:return p.return();
case 2:if(k.F&&k.F("nwl_consider_error_code")&&!n&&k.potentialEsfErrorCounter>k.za)return p.return();k.potentialEsfErrorCounter++;if(void 0===(null===b||void 0===b?void 0:b.id)){p.u(8);break}return b.sendCount<k.lb?w(p,k.G.Pa(b.id,k.databaseToken),12):w(p,k.G.ia(b.id,k.databaseToken),8);case 12:Lg(function(){l.I.H()&&l.ma()},k.kb);
case 8:c(e,f),p.h=0}})})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){return I(a,function h(){var k=this;return x(h,function(l){if(1==l.h)return void 0===(null===b||void 0===b?void 0:b.id)?l.u(2):w(l,k.G.ia(b.id,k.databaseToken),2);k.I.aa&&k.F&&k.F("vss_network_hint")&&k.I.aa(!0);d(e,f);l.h=0})})};
return b}
function ck(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Zj(a){if(!a.databaseToken)throw aj("retryQueuedRequests");a.G.ab("QUEUED",a.databaseToken).then(function(b){b&&!ck(a,b,a.hb)?Lg(function(){return I(a,function d(){var e=this;return x(d,function(f){if(1==f.h)return void 0===b.id?f.u(2):w(f,e.G.Pa(b.id,e.databaseToken),2);Zj(e);f.h=0})})}):a.I.H()&&a.ma()})}
function bk(a,b){a.ob&&!a.I.H()?a.ob(b):a.handleError(b)}
function ek(a){var b;return(a=null===(b=null===a||void 0===a?void 0:a.error)||void 0===b?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function fk(a,b){this.version=a;this.args=b}
;function gk(a,b){this.topic=a;this.h=b}
gk.prototype.toString=function(){return this.topic};var hk=C("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ka;L.prototype.publish=L.prototype.da;L.prototype.clear=L.prototype.clear;A("ytPubsub2Pubsub2Instance",hk,void 0);var ik=C("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",ik,void 0);var jk=C("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",jk,void 0);var kk=C("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",kk,void 0);
A("ytPubsub2Pubsub2SkipSubKey",null,void 0);function lk(a,b){var c=mk();c&&c.publish.call(c,a.toString(),a,b)}
function nk(a){var b=ok,c=mk();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=C("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(ik[d])try{if(f&&b instanceof gk&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ca){var l=new h;h.ca=l.version}var n=h.ca}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
eb(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){og(p)}},kk[b.toString()]?C("yt.scheduler.instance")?Kg(g,1,void 0):Fg(g,0):g())});
ik[d]=!0;jk[b.toString()]||(jk[b.toString()]=[]);jk[b.toString()].push(d);return d}
function pk(){var a=qk,b=nk(function(c){a.apply(void 0,arguments);rk(b)});
return b}
function rk(a){var b=mk();b&&("number"===typeof a&&(a=[a]),E(a,function(c){b.unsubscribeByKey(c);delete ik[c]}))}
function mk(){return C("ytPubsub2Pubsub2Instance")}
;function sk(a,b){Dj.call(this,a,b);this.options=b;Pi(a)}
v(sk,Dj);function tk(a,b){var c;return function(){c||(c=new sk(a,b));return c}}
sk.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Qa?Sj:Rj)(a,b,Object.assign({},c))};
sk.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Qa?Wj:Tj)(this.name,a)};
function uk(a,b){return tk(a,b)}
;var vk;
function wk(){if(vk)return vk();var a={};vk=uk("LogsDatabaseV2",{xa:(a.LogsRequestsStore={Ea:2},a),Qa:!1,upgrade:function(b,c,d){c(2)&&nj(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return vk()}
;function xk(a){return I(this,function c(){var d,e,f,g;return x(c,function(h){if(1==h.h)return d={startTime:O(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(h,wk().open(),2);if(3!=h.h)return e=h.i,f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:F("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(h,pj(e,f),3);g=h.i;d.Xb=O();yk(d);return h.return(g)})})}
function zk(a){return I(this,function c(){var d,e,f,g,h,k,l;return x(c,function(n){if(1==n.h)return d={startTime:O(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(n,wk().open(),2);if(3!=n.h)return e=n.i,f=F("INNERTUBE_CONTEXT_CLIENT_NAME",0),g=[a,f,0],h=[a,f,O()],k=IDBKeyRange.bound(g,h),l=void 0,w(n,mj(e,["LogsRequestsStore"],{mode:"readwrite",K:!0},function(p){return yj(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:k,direction:"prev"},function(r){r.getValue()&&(l=r.getValue(),
"NEW"===a&&(l.status="QUEUED",r.update(l)))})}),3);
d.Xb=O();yk(d);return n.return(l)})})}
function Ak(a){return I(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,wk().open(),2);d=e.i;return e.return(mj(d,["LogsRequestsStore"],{mode:"readwrite",K:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",T(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function Bk(a,b,c){c=void 0===c?!0:c;return I(this,function e(){var f;return x(e,function(g){if(1==g.h)return w(g,wk().open(),2);f=g.i;return g.return(mj(f,["LogsRequestsStore"],{mode:"readwrite",K:!0},function(h){var k=h.objectStore("LogsRequestsStore");return k.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),T(k.h.put(l,void 0)).then(function(){return l})):S.resolve(void 0)})}))})})}
function Ck(a){return I(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,wk().open(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function Dk(){return I(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,wk().open(),2);c=e.i;d=O()-2592E6;return w(e,mj(c,["LogsRequestsStore"],{mode:"readwrite",K:!0},function(f){return vj(f.objectStore("LogsRequestsStore"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function Ek(){return I(this,function b(){return x(b,function(c){return w(c,Vj(),0)})})}
function yk(a){N("nwl_csi_killswitch")||.01>=Math.random()&&lk("nwl_transaction_latency_payload",a)}
;var Fk={},Gk=uk("ServiceWorkerLogsDatabase",{xa:(Fk.SWHealthLog={Ea:1},Fk),Qa:!0,upgrade:function(a,b){b(1)&&nj(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Hk(){return I(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return N("web_clean_sw_logs_store")?w(e,Gk().open(),3):e.u(0);c=e.i;d=O()-2592E6;return w(e,mj(c,["SWHealthLog"],{mode:"readwrite",K:!0},function(f){return vj(f.objectStore("SWHealthLog"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function Ik(){return I(this,function b(){var c;return x(b,function(d){if(1==d.h)return w(d,Gk().open(),2);c=d.i;return w(d,c.clear("SWHealthLog"),0)})})}
;var Jk;function Kk(){Jk||(Jk=new zi("yt.offline"));return Jk}
function Lk(a){if(N("offline_error_handling")){var b=Kk().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Kk().set("errors",b,2592E3,!0)}}
;var Mk=tg("network_polling_interval",3E4);function U(){gf.call(this);this.C=0;this.J=this.l=!1;this.j=this.Ia();Nk(this);Ok(this)}
v(U,gf);function Pk(){if(!U.h){var a=C("yt.networkStatusManager.instance")||new U;A("yt.networkStatusManager.instance",a,void 0);U.h=a}return U.h}
m=U.prototype;m.H=function(){return this.j};
m.aa=function(a,b){a!==this.j&&((void 0===b?0:b)?this.N():this.j=a)};
m.Ib=function(a){this.l=!0;if(void 0===a?0:a)this.C||Qk(this)};
m.Ia=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.ub=function(){this.J=!0};
m.Y=function(a,b){return gf.prototype.Y.call(this,a,b)};
function Ok(a){window.addEventListener("online",function(){return I(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return w(e,d.N(),2);if(d.J&&N("offline_error_handling")){var f=Kk().get("errors",!0);if(f){for(var g in f)if(f[g]){var h=new Mi(g,"sent via offline_errors");h.name=f[g].name;h.stack=f[g].stack;h.level=f[g].level;og(h)}Kk().set("errors",{},2592E3,!0)}}e.h=0})})})}
function Nk(a){window.addEventListener("offline",function(){return I(a,function c(){var d=this;return x(c,function(e){return w(e,d.N(),0)})})})}
function Qk(a){a.C=Jg(function(){return I(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return d.j?d.Ia()||!d.l?e.u(3):w(e,d.N(),3):w(e,d.N(),3);Qk(d);e.h=0})})},Mk)}
m.N=function(a){var b=this;return this.m?this.m:this.m=new Promise(function(c){return I(b,function e(){var f,g,h,k=this;return x(e,function(l){switch(l.h){case 1:return f=window.AbortController?new window.AbortController:void 0,g=null===f||void 0===f?void 0:f.signal,h=!1,sa(l,2,3),f&&(k.B=Lg(function(){f.abort()},a||2E4)),w(l,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ua(l);k.m=void 0;k.B&&Og(k.B);h!==k.j&&(k.j=h,k.j&&k.l?hf(k,"ytnetworkstatus-online"):k.l&&hf(k,"ytnetworkstatus-offline"));c(h);va(l);break;case 2:ta(l),h=!1,l.u(3)}})})})};
U.prototype.sendNetworkCheckRequest=U.prototype.N;U.prototype.listen=U.prototype.Y;U.prototype.enableErrorFlushing=U.prototype.ub;U.prototype.getWindowStatus=U.prototype.Ia;U.prototype.monitorNetworkStatusChange=U.prototype.Ib;U.prototype.networkStatusHint=U.prototype.aa;U.prototype.isNetworkAvailable=U.prototype.H;U.getInstance=Pk;function Rk(a){a=void 0===a?{}:a;gf.call(this);var b=this;this.l=this.B=0;this.j=Pk();var c=C("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.Ya);a.eb&&(c=C("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=C("yt.networkStatusManager.instance.listen").bind(this.j))a.Aa?(this.Aa=a.Aa,c("ytnetworkstatus-online",function(){Sk(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){Sk(b,"publicytnetworkstatus-offline")})):
(c("ytnetworkstatus-online",function(){hf(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){hf(b,"publicytnetworkstatus-offline")}))}
v(Rk,gf);Rk.prototype.H=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.j);return a?a():!0};
Rk.prototype.aa=function(a,b){b=void 0===b?!1:b;var c=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);c&&c(a,b)};
Rk.prototype.N=function(a){return I(this,function c(){var d=this,e;return x(c,function(f){return(e=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(d.j))?f.return(e(a)):f.return(!0)})})};
function Sk(a,b){a.Aa?a.l?(Og(a.B),a.B=Lg(function(){a.m!==b&&(hf(a,b),a.m=b,a.l=O())},a.Aa-(O()-a.l))):(hf(a,b),a.m=b,a.l=O()):hf(a,b)}
;var Tk=!1,Uk,Vk=0,Wk=0,Xk,Yk=z.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Tk,databaseToken:Uk,potentialEsfErrorCounter:Wk,isIdbSupported:!!Uk};A("ytNetworklessLoggingInitializationOptions",Yk,void 0);
function Zk(){I(this,function b(){return x(b,function(c){switch(c.h){case 1:return w(c,Oj(),2);case 2:Uk=c.i;if(!Uk||!Ni()&&!N("nwl_init_require_datasync_id_killswitch")){c.u(0);break}Tk=!0;Yk.isNwlInitialized=Tk;Yk.databaseToken=Uk;Yk.isIdbSupported=!!Uk;return w(c,Wj("LogsDatabaseV2"),4);case 4:if(!(.1>=Math.random())){c.u(5);break}return w(c,Dk(Uk),6);case 6:return w(c,Hk(),5);case 5:$k();al().H()&&bl();al().Y("publicytnetworkstatus-online",bl);al().Y("publicytnetworkstatus-offline",cl);if(!N("networkless_immediately_drop_sw_health_store")){c.u(8);
break}return w(c,dl(),8);case 8:if(N("networkless_immediately_drop_all_requests"))return w(c,Ek(),0);c.u(0)}})})}
function el(a,b){function c(d){var e=al().H();if(!fl()||!d||e&&N("vss_networkless_bypass_write"))gl(a,b);else{var f={url:a,options:b,timestamp:O(),status:"NEW",sendCount:0};xk(f,d).then(function(g){f.id=g;al().H()&&hl(f)}).catch(function(g){hl(f);
al().H()?og(g):Lk(g)})}}
b=void 0===b?{}:b;N("skip_is_supported_killswitch")?Oj().then(function(d){c(d)}):c(il())}
function jl(a,b){function c(d){if(fl()&&d){var e={url:a,options:b,timestamp:O(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?Ck(e.id,d):f=!0;N("vss_network_hint")&&al().aa(!0);g(h,k)};
gl(e.url,e.options);xk(e,d).then(function(h){e.id=h;f&&Ck(e.id,d)}).catch(function(h){al().H()?og(h):Lk(h)})}else gl(a,b)}
b=void 0===b?{}:b;N("skip_is_supported_killswitch")?Oj().then(function(d){c(d)}):c(il())}
function bl(){var a=this,b=il();if(!b)throw aj("throttleSend");Vk||(Vk=Lg(function(){return I(a,function d(){var e;return x(d,function(f){if(1==f.h)return w(f,zk("NEW",b),2);if(3!=f.h)return e=f.i,e?w(f,hl(e),3):(cl(),f.return());Vk&&(Vk=0,bl());f.h=0})})},100))}
function cl(){Og(Vk);Vk=0}
function hl(a){return I(this,function c(){var d,e,f;return x(c,function(g){switch(g.h){case 1:d=il();if(!d)throw e=aj("immediateSend"),e;if(void 0===a.id){g.u(2);break}return w(g,Ak(a.id,d),3);case 3:(f=g.i)?a=f:pg(Error("The request cannot be found in the database."));case 2:if(kl(a,2592E6)){g.u(4);break}pg(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){g.u(5);break}return w(g,Ck(a.id,d),5);case 5:return g.return();case 4:a.skipRetry||(a=ll(a));var h=a,k,l;
if(null===(l=null===(k=null===h||void 0===h?void 0:h.options)||void 0===k?void 0:k.postParams)||void 0===l?0:l.requestTimeMs)h.options.postParams.requestTimeMs=Math.round(O());a=h;if(!a){g.u(0);break}if(!a.skipRetry||void 0===a.id){g.u(8);break}return w(g,Ck(a.id,d),8);case 8:gl(a.url,a.options,!!a.skipRetry),g.h=0}})})}
function ll(a){var b=this,c=il();if(!c)throw aj("updateRequestHandlers");var d=a.options.onError?a.options.onError:function(){};
a.options.onError=function(f,g){return I(b,function k(){var l;return x(k,function(n){switch(n.h){case 1:l=ek(g);if(!(N("nwl_consider_error_code")&&l||!N("nwl_consider_error_code")&&ml()<=tg("potential_esf_error_limit",10))){n.u(2);break}return w(n,al().N(),3);case 3:if(al().H()){n.u(2);break}d(f,g);if(!N("nwl_consider_error_code")||void 0===(null===a||void 0===a?void 0:a.id)){n.u(5);break}return w(n,Bk(a.id,c,!1),5);case 5:return n.return();case 2:if(N("nwl_consider_error_code")&&!l&&ml()>tg("potential_esf_error_limit",
10))return n.return();C("ytNetworklessLoggingInitializationOptions")&&Yk.potentialEsfErrorCounter++;Wk++;if(void 0===(null===a||void 0===a?void 0:a.id)){n.u(7);break}return 1>a.sendCount?w(n,Bk(a.id,c),11):w(n,Ck(a.id,c),7);case 11:Lg(function(){al().H()&&bl()},5E3);
case 7:d(f,g),n.h=0}})})};
var e=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(f,g){return I(b,function k(){return x(k,function(l){if(1==l.h)return void 0===(null===a||void 0===a?void 0:a.id)?l.u(2):w(l,Ck(a.id,c),2);N("vss_network_hint")&&al().aa(!0);e(f,g);l.h=0})})};
return a}
function kl(a,b){a=a.timestamp;return O()-a>=b?!1:!0}
function $k(){var a=this,b=il();if(!b)throw aj("retryQueuedRequests");zk("QUEUED",b).then(function(c){c&&!kl(c,12E4)?Lg(function(){return I(a,function e(){return x(e,function(f){if(1==f.h)return void 0===c.id?f.u(2):w(f,Bk(c.id,b),2);$k();f.h=0})})}):al().H()&&bl()})}
function dl(){return I(this,function b(){var c,d;return x(b,function(e){c=il();if(!c)throw d=aj("clearSWHealthLogsDb"),d;return e.return(Ik().catch(function(f){og(f)}))})})}
function al(){Xk||(Xk=new Rk({eb:!0,Ya:!0}));return Xk}
function gl(a,b,c){if(N("networkless_with_beacon")){var d=["method","postBody"];if(Object.keys(b).length>d.length)c=!0;else{c=0;d=u(d);for(var e=d.next();!e.done;e=d.next())b.hasOwnProperty(e.value)&&c++;c=Object.keys(b).length!==c}c?qh(a,b):Fh(a,void 0,b.postBody)}else c&&0===Object.keys(b).length?Ch(a):qh(a,b)}
function fl(){return C("ytNetworklessLoggingInitializationOptions")?Yk.isNwlInitialized:Tk}
function il(){return C("ytNetworklessLoggingInitializationOptions")?Yk.databaseToken:Uk}
function ml(){return C("ytNetworklessLoggingInitializationOptions")?Yk.potentialEsfErrorCounter:Wk}
;function nl(){Xj.call(this,{G:{sb:Dk,ia:Ck,ab:zk,Gb:Ak,Pa:Bk,set:xk},I:new Rk({eb:!0,Ya:!0}),handleError:og,ja:pg,S:ol,now:O,ob:Lk,cb:Ng(),Oa:"publicytnetworkstatus-online",Na:"publicytnetworkstatus-offline",va:!0,sa:.1,za:tg("potential_esf_error_limit",10),F:N});this.va&&Math.random()<=this.sa&&this.databaseToken&&Hk();N("networkless_immediately_drop_sw_health_store")&&pl(this);N("networkless_immediately_drop_all_requests")&&Ek();Wj("LogsDatabaseV2")}
v(nl,Xj);function ql(){var a=C("yt.networklessRequestController.instance");a||(a=new nl,A("yt.networklessRequestController.instance",a,void 0),N("networkless_logging")&&Oj().then(function(b){a.databaseToken=b;Yj(a)}));
return a}
nl.prototype.writeThenSend=function(a,b){b||(b={});Ni()||(this.h=!1);Xj.prototype.writeThenSend.call(this,a,b)};
nl.prototype.sendThenWrite=function(a,b,c){b||(b={});Ni()||(this.h=!1);Xj.prototype.sendThenWrite.call(this,a,b,c)};
nl.prototype.sendAndWrite=function(a,b){b||(b={});Ni()||(this.h=!1);Xj.prototype.sendAndWrite.call(this,a,b)};
function pl(a){I(a,function c(){var d=this,e,f;return x(c,function(g){e=d;if(!d.databaseToken)throw f=aj("clearSWHealthLogsDb"),f;return g.return(Ik().catch(function(h){e.handleError(h)}))})})}
function ol(a,b,c){var d;if(null===(d=b.postParams)||void 0===d?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(O());if(N("networkless_with_beacon")){c=b;var e=["method","postBody"];if(Object.keys(c).length>e.length)c=!0;else{d=0;e=u(e);for(var f=e.next();!f.done;f=e.next())c.hasOwnProperty(f.value)&&d++;c=Object.keys(c).length!==d}c?qh(a,b):Fh(a,void 0,b.postBody)}else c&&0===Object.keys(b).length?Ch(a):qh(a,b)}
;function rl(a){var b=this;this.config_=null;a?this.config_=a:wi()&&(this.config_=gi());Jg(function(){Ei(b)},5E3)}
rl.prototype.isReady=function(){!this.config_&&wi()&&(this.config_=gi());return!!this.config_};
function ji(a,b,c,d){function e(y){y=void 0===y?!1:y;var B;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||N("skip_ls_gel_retry")||(B=Ci(b,c,l,k)),B)){var G=g.onSuccess,R=g.onFetchSuccess;g.onSuccess=function(P,K){Di(B);G(P,K)};
c.onFetchSuccess=function(P,K){Di(B);R(P,K)}}try{y&&d.retry&&!d.gb.bypassNetworkless?(g.method="POST",d.gb.writeThenSend?N("use_new_nwl")?ql().writeThenSend(q,g):el(q,g):N("use_new_nwl")?ql().sendAndWrite(q,g):jl(q,g)):(g.method="POST",g.postParams||(g.postParams={}),qh(q,g))}catch(P){if("InvalidAccessError"==P.name)B&&(Di(B),B=0),pg(Error("An extension is blocking network request."));
else throw P;}B&&Jg(function(){Ei(a)},5E3)}
!F("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&pg(new Mi("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Mi("innertube xhrclient not ready",b,c,d);og(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,B){if(d.onSuccess)d.onSuccess(B)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,B){if(d.onError)d.onError(B)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.config_.Cb)&&(h=f);var k=a.config_.Eb||!1,l=xi(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},r=a.config_.Db&&f;N("omit_innertube_api_key_for_Bearer_auth_header")&&(r=r&&f.startsWith("Bearer"));r||(p.key=a.config_.innertubeApiKey);var q=eh(""+h+n,p||{},!0);N("use_new_nwl")||fl()?Nj().then(function(y){e(y)}):e(!1)}
;function V(a,b,c){c=void 0===c?{}:c;var d=rl;F("ytLoggingEventsDefaultDisabled",!1)&&rl==rl&&(d=null);li(a,b,d,c)}
;var sl=[{Ma:function(a){return"Cannot read property '"+a.key+"'"},
ya:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ma:function(a){return"Cannot call '"+a.key+"'"},
ya:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ma:function(a){return a.key+" is not defined"},
ya:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var ul={Z:[],V:[{Ta:tl,weight:500}]};function tl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function vl(){this.V=[];this.Z=[]}
var wl;function xl(){if(!wl){var a=wl=new vl;a.Z.length=0;a.V.length=0;ul.Z&&a.Z.push.apply(a.Z,ul.Z);ul.V&&a.V.push.apply(a.V,ul.V)}return wl}
;var yl=new L;function zl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Al(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Al(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Al(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Al(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Bl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Cl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=zl(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Cl(e+".ve",f,g,h):0;d+=g;d+=Cl(e,a[e],b,c);if(500<d)break}}else c[b]=Dl(a),d+=c[b].length;else c[b]=Dl(a),d+=c[b].length;return d}
function Cl(a,b,c,d){c+="."+a;a=Dl(b);d[c]=a;return c.length+a.length}
function Dl(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var El=new Set,Fl=0,Gl=0,Hl=0,Il=[],Jl=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Kl(a){Ll(a,"WARNING")}
function Ll(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),N("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=Fl))){var g=le(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=Bl(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var n=
a.params;if("object"===typeof a.params)for(l in n){if(n[l]){var p="params."+l,r=Dl(n[l]);c[p]=r;k+=p.length+r.length;if(500<k)break}}else c.params=Dl(n)}if(Il.length)for(l=0;l<Il.length&&!(k=Bl(Il[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=
xl();c=u(a.Z);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.Lm)){a=d.weight;break a}a=u(a.V);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Ta(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(sl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.ya[l.name])for(e=u(c.ya[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=
d[g+1];l.message=c.Ma(f);break}l.params||(l.params={});a=xl();l.params["params.errorServiceSignature"]="msg="+a.Z.length+"&cb="+a.V.length;l.params["params.serviceWorker"]="false";z.document&&z.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));vb("sample").constructor!==tb&&(l.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!El.has(l.message)){"ERROR"===b?(yl.da("handleError",
l),N("record_app_crashed_web")&&0===Hl&&1===l.sampleWeight&&(Hl++,V("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),Gl++):"WARNING"===b&&yl.da("handleWarning",l);if(N("kevlar_gel_error_routing")){a=b;b:{c=u(Jl);for(d=c.next();!d.done;d=c.next())if(zh(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);c=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||
isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};e={pageUrl:window.location.href,kvPairs:[]};F("FEXP_EXPERIMENTS")&&(e.experimentIds=F("FEXP_EXPERIMENTS"));if(f=l.params)for(g=u(Object.keys(f)),h=g.next();!h.done;h=
g.next())h=h.value,e.kvPairs.push({key:"client."+h,value:String(f[h])});f=F("SERVER_NAME",void 0);g=F("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(V("clientError",c),("ERROR"===a||N("errors_flush_gel_always_killswitch"))&&bi())}if(!N("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,
level:b,"client.name":a.name},postParams:{url:F("PAGE_NAME",window.location.href),file:l.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=F("SERVER_NAME",void 0);c=F("SERVER_VERSION",void 0);
a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}qh(F("ECATCHER_REPORT_HOST","")+"/error_204",b)}try{El.add(l.message)}catch(q){}Fl++}}}
function Ml(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,ha(c))}
;var Nl={Lc:3611,Yb:27686,Zb:85013,ac:23462,dc:42016,ec:62407,fc:26926,cc:43781,hc:51236,ic:79148,jc:50160,kc:77504,yc:87907,zc:18630,Ac:54445,Bc:80935,Cc:105675,Dc:37521,Ec:47786,Fc:98349,Gc:123695,Hc:6827,Ic:29434,Jc:7282,Kc:124448,Oc:32276,Nc:76278,Pc:93911,Qc:106531,Rc:27259,Sc:27262,Tc:27263,Vc:21759,Wc:27107,Xc:62936,Yc:49568,Zc:38408,bd:80637,cd:68727,dd:68728,ed:80353,fd:80356,gd:74610,hd:45707,jd:83962,kd:83970,ld:46713,md:89711,nd:74612,od:93265,pd:74611,qd:131380,sd:128979,td:128978,rd:131391,
ud:105350,wd:134800,vd:131392,yd:113533,zd:93252,Ad:99357,Cd:94521,Dd:114252,Ed:113532,Fd:94522,Bd:94583,Gd:88E3,Hd:93253,Id:93254,Jd:94387,Kd:94388,Ld:93255,Md:97424,xd:72502,Nd:110111,Od:76019,Qd:117092,Rd:117093,Pd:89431,Sd:110466,Td:77240,Ud:60508,Vd:137401,Wd:137402,Xd:137046,Yd:73393,Zd:113534,ae:92098,be:131381,ce:84517,de:83759,ee:80357,ge:86113,he:72598,ie:72733,je:107349,ke:124275,le:118203,me:133275,ne:133274,oe:133272,pe:133273,qe:133276,se:117431,re:133797,te:128572,ue:133405,we:117429,
xe:117430,ye:117432,ze:120080,Ae:117259,Be:121692,Ce:132972,De:133051,Ee:133658,Fe:132971,Ge:97615,He:31402,Je:133624,Ke:133623,Le:133622,Ie:133621,Me:84774,Ne:95117,Oe:98930,Pe:98931,Qe:98932,Re:43347,Se:129889,Te:45474,Ue:100352,Ve:84758,We:98443,Xe:117985,Ye:74613,Ze:74614,af:64502,bf:136032,cf:74615,df:74616,ef:122224,ff:74617,gf:77820,hf:74618,jf:93278,kf:93274,lf:93275,mf:93276,nf:22110,pf:29433,qf:133798,rf:132295,tf:120541,vf:82047,wf:113550,xf:75836,yf:75837,zf:42352,Af:84512,Bf:76065,Cf:75989,
Df:16623,Ef:32594,Ff:27240,Gf:32633,Hf:74858,Jf:3945,If:16989,Kf:45520,Lf:25488,Mf:25492,Nf:25494,Of:55760,Pf:14057,Qf:18451,Rf:57204,Sf:57203,Tf:17897,Uf:57205,Vf:18198,Wf:17898,Xf:17909,Yf:43980,Zf:46220,ag:11721,cg:49954,dg:96369,eg:3854,fg:56251,gg:25624,hg:16906,ig:99999,jg:68172,kg:27068,lg:47973,mg:72773,ng:26970,og:26971,pg:96805,qg:17752,rg:73233,sg:109512,tg:22256,ug:14115,vg:22696,wg:89278,xg:89277,yg:109513,zg:43278,Ag:43459,Bg:43464,Cg:89279,Dg:43717,Eg:55764,Fg:22255,Gg:89281,Hg:40963,
Ig:43277,Jg:43442,Kg:91824,Lg:120137,Mg:96367,Ng:36850,Og:72694,Pg:37414,Qg:36851,Sg:124863,Rg:121343,Tg:73491,Ug:54473,Vg:43375,Wg:46674,Xg:32473,Yg:72901,Zg:72906,ah:50947,bh:50612,dh:50613,eh:50942,fh:84938,gh:84943,hh:84939,ih:84941,jh:84944,kh:84940,lh:84942,mh:35585,nh:51926,oh:79983,ph:63238,qh:18921,rh:63241,sh:57893,th:41182,uh:135732,vh:33424,wh:22207,xh:42993,yh:36229,zh:22206,Ah:22205,Bh:18993,Ch:19001,Dh:18990,Eh:18991,Fh:18997,Gh:18725,Hh:19003,Ih:36874,Jh:44763,Kh:33427,Lh:67793,Mh:22182,
Nh:37091,Oh:34650,Ph:50617,Qh:47261,Rh:22287,Sh:25144,Th:97917,Uh:62397,Vh:125598,Wh:137935,Xh:36961,Yh:108035,Zh:27426,ai:27857,bi:27846,ci:27854,di:69692,fi:61411,gi:39299,hi:38696,ii:62520,ji:36382,ki:108701,li:50663,mi:36387,ni:14908,oi:37533,ri:105443,si:61635,ti:62274,vi:133818,wi:65702,xi:65703,yi:65701,zi:76256,Ai:37671,Bi:49953,Di:36216,Ei:28237,Fi:39553,Gi:29222,Hi:26107,Ii:38050,Ji:26108,Li:120745,Ki:26109,Mi:26110,Ni:66881,Oi:28236,Pi:14586,Qi:57929,Ri:74723,Si:44098,Ti:44099,Wi:23528,
Xi:61699,Ui:134104,Vi:134103,Yi:59149,Zi:101951,aj:97346,bj:118051,cj:95102,dj:64882,ej:119505,fj:63595,gj:63349,hj:95101,ij:75240,jj:27039,kj:68823,lj:21537,mj:83464,nj:75707,oj:83113,pj:101952,qj:101953,sj:79610,tj:125755,uj:24402,vj:24400,wj:32925,xj:57173,yj:122502,zj:64423,Aj:64424,Bj:33986,Cj:100828,Dj:129089,Ej:21409,Ij:135155,Jj:135156,Kj:135157,Lj:135158,Mj:135159,Nj:135160,Oj:135161,Pj:135162,Qj:135163,Rj:135164,Sj:135165,Tj:135166,Fj:11070,Gj:11074,Hj:17880,Uj:14001,Wj:30709,Xj:30707,Yj:30711,
Zj:30710,ak:30708,Vj:26984,bk:63648,ck:63649,dk:51879,ek:111059,fk:5754,gk:20445,ik:130975,hk:130976,jk:110386,kk:113746,lk:66557,mk:17310,nk:28631,pk:21589,qk:68012,rk:60480,sk:31571,tk:76980,uk:41577,vk:45469,wk:38669,xk:13768,yk:13777,zk:62985,Ak:4724,Bk:59369,Ck:43927,Dk:43928,Ek:12924,Fk:100355,Ik:56219,Jk:27669,Kk:10337,Hk:47896,Lk:122629,Mk:121258,Nk:107598,Ok:127991,Pk:96639,Qk:107536,Rk:130169,Sk:96661,Tk:96658,Uk:116646,Vk:121122,Wk:96660,Xk:127738,Yk:127083,Zk:104443,al:96659,bl:106442,
dl:134840,fl:63667,il:63668,jl:63669,kl:130686,ll:78314,ml:55761,nl:127098,ol:134841,pl:96368,ql:67374,rl:48992,sl:49956,ul:31961,vl:26388,wl:23811,xl:5E4,yl:126250,zl:96370,Al:47355,Bl:47356,Cl:37935,Dl:45521,El:21760,Fl:83769,Gl:49977,Hl:49974,Il:93497,Jl:93498,Kl:34325,Ll:115803,Ml:123707,Nl:100081,Ol:35309,Pl:68314,Ql:25602,Rl:100339,Sl:59018,Tl:18248,Ul:50625,Vl:9729,Wl:37168,Xl:37169,Yl:21667,Zl:16749,am:18635,bm:39305,cm:18046,dm:53969,em:8213,fm:93926,gm:102852,hm:110099,im:22678,jm:69076,
km:137575,mm:100856,nm:17736,om:3832,pm:55759,qm:64031,rm:93044,sm:93045,tm:34388,um:17657,vm:17655,wm:39579,xm:39578,ym:77448,zm:8196,Am:11357,Bm:69877,Cm:8197,Dm:82039};function Ol(){var a=nb(Pl),b;return Af(new tf(function(c,d){a.onSuccess=function(e){kh(e)?c(new Ql(e)):d(new Rl("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Rl("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Rl("Request timed out","net.timeout",e))};
b=qh("//web.archive.org/web/20211008175354/https://googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Bf&&b.abort();
return yf(c)})}
function Rl(a,b,c){Wa.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Rl,Wa);function Ql(a){this.xhr=a}
;function Sl(){this.i=0;this.h=null}
Sl.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),sf(a)?a:Tl(a)):2===this.i&&b?(a=b.call(c,this.h),sf(a)?a:Ul(a)):this};
Sl.prototype.getValue=function(){return this.h};
Sl.prototype.$goog_Thenable=!0;function Ul(a){var b=new Sl;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function Tl(a){var b=new Sl;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function Vl(){if(Od())return!0;var a=F("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a||yh&&zh("applewebkit")&&!zh("version")&&(!zh("safari")||zh("gsa/"))||tc&&zh("version/")?!0:(a=Md.get("CONSENT",void 0))?a.startsWith("YES+"):!0}
;function Wl(a){Wa.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Xl;this.isTimeout=a instanceof Rl&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Bf}
v(Wl,Wa);Wl.prototype.name="BiscottiError";function Xl(){Wa.call(this,"Biscotti ID is missing from server")}
v(Xl,Wa);Xl.prototype.name="BiscottiMissingError";var Pl={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Yl=null;function Vg(){if(N("disable_biscotti_fetch_entirely_for_all_web_clients"))return yf(Error("Biscotti id fetching has been disabled entirely."));if(!Vl())return yf(Error("User has not consented - not fetching biscotti id."));if("1"==lb())return yf(Error("Biscotti ID is not available in private embed mode"));Yl||(Yl=Af(Ol().then(Zl),function(a){return $l(2,a)}));
return Yl}
function Zl(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Xl;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Xl;a=a.id;Wg(a);Yl=Tl(a);am(18E5,2);return a}
function $l(a,b){b=new Wl(b);Wg("");Yl=Ul(b);0<a&&am(12E4,a-1);throw b;}
function am(a,b){Fg(function(){Af(Ol().then(Zl,function(c){return $l(b,c)}),Ha)},a)}
function bm(){try{var a=C("yt.ads.biscotti.getId_");return a?a():Vg()}catch(b){return yf(b)}}
;function cm(a){if("1"!=lb()){a&&Ug();try{bm().then(function(){},function(){}),Fg(cm,18E5)}catch(b){og(b)}}}
;var dm=Date.now().toString();
function em(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(dm)for(a=1,b=0;b<dm.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^dm.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var fm,gm=z.ytLoggingDocDocumentNonce_;gm||(gm=em(),Ua("ytLoggingDocDocumentNonce_",gm));fm=gm;var hm={sf:0,Mc:1,Uc:2,Ci:3,uf:4,lm:5,rj:6,Gk:7,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE"};function im(a){this.h=a}
function jm(a){return new im({trackingParams:a})}
im.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
im.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
im.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function km(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function lm(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function mm(a){return F(lm(void 0===a?0:a),void 0)}
A("yt_logging_screen.getRootVeType",mm,void 0);function nm(a){return(a=mm(void 0===a?0:a))?new im({veType:a,youtubeData:void 0}):null}
function om(){var a=F("csn-to-ctt-auth-info");a||(a={},M("csn-to-ctt-auth-info",a));return a}
function pm(a){a=void 0===a?0:a;var b=F(km(a));if(!b&&!F("USE_CSN_FALLBACK",!0))return null;b||!N("use_undefined_csn_any_layer")&&0!=a||(b="UNDEFINED_CSN");return b?b:null}
A("yt_logging_screen.getCurrentCsn",pm,void 0);function qm(a,b,c){var d=om();(c=pm(c))&&delete d[c];b&&(d[a]=b)}
function rm(a){return om()[a]}
A("yt_logging_screen.getCttAuthInfo",rm,void 0);function sm(a,b,c,d){c=void 0===c?0:c;if(a!==F(km(c))||b!==F(lm(c)))qm(a,d,c),M(km(c),a),M(lm(c),b),b=function(){setTimeout(function(){a&&li("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:fm,clientScreenNonce:a},rl)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
A("yt_logging_screen.setCurrentScreen",sm,void 0);function tm(a){fk.call(this,1,arguments);this.csn=a}
v(tm,fk);var ok=new gk("screen-created",tm),um=[],wm=vm,xm=0;function ym(a,b,c,d){var e=d.filter(function(f){f.csn!==b?(f.csn=b,f=!0):f=!1;return f});
c={csn:b,parentVe:c.getAsJson(),childVes:ab(e,function(f){return f.getAsJson()})};
d=u(d);for(e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(jb(e)||!e.trackingParams&&!e.veType)&&Kl(Error("Child VE logged with no data"));d={cttAuthInfo:rm(b),ba:b};"UNDEFINED_CSN"==b?zm("visualElementAttached",c,d):a?li("visualElementAttached",c,a,d):V("visualElementAttached",c,d)}
function vm(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Ic(b,3)}
function zm(a,b,c){um.push({payloadName:a,payload:b,options:c});xm||(xm=pk())}
function qk(a){if(um){for(var b=u(um),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,li(c.payloadName,c.payload,null,c.options));um.length=0}xm=0}
;function Am(){this.i=new Set;this.h=new Set;this.j=new Map}
Am.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ia(Am);function Bm(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Cm(a)||c.some(function(e){return!Cm(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())Dm(a,d.value);return a}
function Dm(a,b){for(var c in b)if(Cm(b[c])){if(c in a&&!Cm(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Dm(a[c],b[c])}else if(Em(b[c])){if(c in a&&!Em(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Fm(a[c],b[c])}else a[c]=b[c];return a}
function Fm(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Cm(c)?a.push(Dm({},c)):Em(c)?a.push(Fm([],c)):a.push(c);return a}
function Cm(a){return"object"===typeof a&&!Array.isArray(a)}
function Em(a){return"object"===typeof a&&Array.isArray(a)}
;function Gm(a,b){fk.call(this,1,arguments)}
v(Gm,fk);function Hm(a,b){fk.call(this,1,arguments)}
v(Hm,fk);var Im=new gk("aft-recorded",Gm),Jm=new gk("timing-sent",Hm);var Km=window;function Lm(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var W=Km.performance||Km.mozPerformance||Km.msPerformance||Km.webkitPerformance||new Lm;var Mm=!1,Nm={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Sa(W.clearResourceTimings||W.webkitClearResourceTimings||W.mozClearResourceTimings||W.msClearResourceTimings||W.oClearResourceTimings||Ha,W);function Om(a){var b=Pm(a);if(b.aft)return b.aft;a=F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Qm(){var a;if(N("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===W||void 0===W?void 0:W.getEntriesByType)||void 0===a?void 0:a.call(W,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=Rm(e.requestStart),e.responseEnd=Rm(e.responseEnd),e.redirectStart=Rm(e.redirectStart),e.redirectEnd=Rm(e.redirectEnd),e.domainLookupEnd=Rm(e.domainLookupEnd),e.connectStart=Rm(e.connectStart),
e.connectEnd=Rm(e.connectEnd),e.responseStart=Rm(e.responseStart),e.secureConnectionStart=Rm(e.secureConnectionStart),e.domainLookupStart=Rm(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=W.timing}else a=W.timing;return a}
function Sm(){return N("csi_use_time_origin")&&W.timeOrigin?Math.floor(W.timeOrigin):W.timing.navigationStart}
function Rm(a){return Math.round(Sm()+a)}
function Tm(a){var b;(b=C("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Ua("ytcsi."+(a||"")+"data_",b));return b}
function Um(a){a=Tm(a);a.info||(a.info={});return a.info}
function Pm(a){a=Tm(a);a.tick||(a.tick={});return a.tick}
function Vm(a){var b=Tm(a).nonce;b||(b=em(),Tm(a).nonce=b);return b}
function Wm(a){var b=Pm(a||""),c=Om(a);c&&!Mm&&(lk(Im,new Gm(Math.round(c-b._start),a)),Mm=!0)}
;function Xm(){if(W.getEntriesByType){var a=W.getEntriesByType("paint");if(a=cb(a,function(b){return"first-paint"===b.name}))return Rm(a.startTime)}a=W.timing;
return a.Jb?Math.max(0,a.Jb):0}
;function Ym(){var a=C("ytcsi.debug");a||(a=[],A("ytcsi.debug",a,void 0),A("ytcsi.reference",{},void 0));return a}
function Zm(a){a=a||"";var b=C("ytcsi.reference");b||(Ym(),b=C("ytcsi.reference"));if(b[a])return b[a];var c=Ym(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var $m=z.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",$m,void 0);function bn(){this.h=0}
function cn(){bn.h||(bn.h=new bn);return bn.h}
bn.prototype.tick=function(a,b,c,d){dn(this,"tick_"+a+"_"+b)||V("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
bn.prototype.info=function(a,b,c){var d=Object.keys(a).join("");dn(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,V("latencyActionInfo",a,{cttAuthInfo:c}))};
bn.prototype.span=function(a,b,c){var d=Object.keys(a).join("");dn(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,V("latencyActionSpan",a,{cttAuthInfo:c}))};
function dn(a,b){$m[b]=$m[b]||{count:0};var c=$m[b];c.count++;c.time=O();a.h||(a.h=Jg(function(){var d=O(),e;for(e in $m)$m[e]&&6E4<d-$m[e].time&&delete $m[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Mi("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Kl(c)),!0):!1}
;var X={},en=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X.browse="LATENCY_ACTION_BROWSE",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard=
"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.playlists"]=
"LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf=
"LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.home="LATENCY_ACTION_HOME",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard=
"LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest=
"LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]=
"LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X),Y={},fn=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an=
"adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cs="commandSource",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.ctop="creatorInfo.topEntityType",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",
Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.nav_type="kabukiInfo.navigationType",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.pnt="performanceNavigationTiming",
Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.rc="resourceInfo.resourceCache",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs=
"tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.aac_type="tvInfo.authAccessCredentialType",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",
Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),gn="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),hn={},jn=(hn.ccs="CANARY_STATE_",
hn.mver="MEASUREMENT_VERSION_",hn.pis="PLAYER_INITIALIZED_STATE_",hn.yt_pt="LATENCY_PLAYER_",hn.pa="LATENCY_ACTION_",hn.ctop="TOP_ENTITY_TYPE_",hn.yt_vst="VIDEO_STREAM_TYPE_",hn),kn="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function ln(a){return!!F("FORCE_CSI_ON_GEL",!1)||N("csi_on_gel")||N("enable_csi_on_gel")||N("unplugged_tvhtml5_csi_on_gel")||!!Tm(a).useGel}
function mn(a,b,c){var d=nn(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||O();if(ln(c)){Zm(c||"").tick[a]=b||O();d=Vm(c);var e=Tm(c).cttAuthInfo;"_start"===a?(a=cn(),dn(a,"baseline_"+d)||V("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:e})):cn().tick(a,d,b,e);Wm(c);return!0}return!1}
function on(a,b,c){c=nn(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in fn){c=fn[a];0<=Za(gn,c)&&(b=!!b);a in jn&&"string"===typeof b&&(b=jn[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Bm({},d)}0<=Za(kn,a)||Kl(new Mi("Unknown label logged with GEL CSI",a))}
function nn(a){a=Tm(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function pn(a){a=nn(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
;function qn(a,b,c){null!==b&&(Um(c)[a]=b,ln(c)?(a=on(a,b,c))&&ln(c)&&(b=Zm(c||""),Bm(b.info,a),Bm(pn(c),a),b=Vm(c),c=Tm(c).cttAuthInfo,cn().info(a,b,c)):Zm(c||"").info[a]=b)}
function Z(a,b,c){var d=Pm(c);if(!b&&"_"!==a[0]){var e=a;W.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),W.mark(e))}e=b||O();d[a]=e;mn(a,b,c)||c||(rn(),Zm("").tick[a]=b||O());return d[a]}
function sn(){var a=Vm(void 0);requestAnimationFrame(function(){setTimeout(function(){a===Vm(void 0)&&Z("ol",void 0,void 0)},0)})}
function rn(){if(!C("yt.timing.pingSent_")){var a=F("TIMING_ACTION",void 0),b=Pm();if(a=!!C("ytglobal.timingready_")&&a)a="_start"in Pm(void 0);if(a&&Om()){Wm();a=!0;var c=F("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in b)){a=!1;break}if(a&&!ln()){c=Pm();d=Um();e=c._start;var f=F("CSI_SERVICE_NAME","youtube");a={v:2,s:f,action:F("TIMING_ACTION",void 0)};b=d.srt;void 0!==c.srt&&delete d.srt;c.aft=Om();var g=Pm(void 0),h=g.pbr,k=g.vc;g=g.pbs;h&&k&&g&&h<k&&k<g&&Um(void 0).yt_pvis&&
"youtube"===f&&(qn("yt_lt","hot_bg"),f=c.vc,h=c.pbs,delete c.aft,d.aft=Math.round(h-f));for(var l in d)"_"!==l.charAt(0)&&(a[l]=d[l]);c.ps=O();l={};f=[];for(var n in c)"_"!==n.charAt(0)&&(h=Math.round(c[n]-e),l[n]=h,f.push(n+"."+h));a.rt=f.join(",");n=!!d.ap;c="";for(var p in a)a.hasOwnProperty(p)&&(c+="&"+p+"="+a[p]);p="/csi_204?"+c.substring(1);window.navigator&&n?Fh(p):Ch(p);A("yt.timing.pingSent_",!0,void 0);lk(Jm,new Hm(l.aft+(Number(b)||0)))}}}}
function tn(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=vg+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function un(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);cc()&&a.setAttribute("nonce",cc());return c?(a=W.getEntriesByName(c))&&a[0]&&(a=a[0],c=Sm(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function vn(){var a=window.location.protocol,b=W.getEntriesByType("resource");b=$a(b,function(c){return 0===c.name.indexOf(a+"//web.archive.org/web/20211008175354/https://fonts.gstatic.com/s/")});
(b=bb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",Rm(b.startTime)),Z("wffe",Rm(b.responseEnd)))}
var wn=window;wn.ytcsi&&(wn.ytcsi.info=qn,wn.ytcsi.tick=Z);function xn(){this.o=[];this.A=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.B=new Map}
function yn(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=pm(c),h=nm(c);g&&h&&((null===(e=d.response)||void 0===e?0:e.trackingParams)&&ym(a.client,g,h,[jm(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&ym(a.client,g,h,[jm(d.playerResponse.trackingParams)]))})}
function zn(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.o.push([b,c]);else{var e=pm(d);c=c||nm(d);e&&c&&ym(a.client,e,c,[b])}}
xn.prototype.clickCommand=function(a,b,c){a=a.clickTrackingParams;c=void 0===c?0:c;if(a)if(c=pm(void 0===c?0:c)){var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:jm(a).getAsJson(),gestureType:e};b&&(a.clientData=b);b={cttAuthInfo:rm(c),ba:c};"UNDEFINED_CSN"==c?zm("visualElementGestured",a,b):d?li("visualElementGestured",a,d,b):V("visualElementGestured",a,b);b=!0}else b=!1;else b=!1;return b};
function An(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Bn(a,b,c);var f=nm(c.layer);if(f){for(var g=u(a.o),h=g.next();!h.done;h=g.next())h=h.value,zn(a,h[0],h[1]||f,c.layer);f=u(a.A);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=pm(g);var l=k[0]||nm(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={cttAuthInfo:rm(h),ba:h},"UNDEFINED_CSN"==h?zm("visualElementStateChanged",k,l):g?li("visualElementStateChanged",k,g,l):V("visualElementStateChanged",
k,l))}}};
pm(c.layer)||a.j();if(c.Xa)for(var d=u(c.Xa),e=d.next();!e.done;e=d.next())yn(a,e.value,c.layer);else Ll(Error("Delayed screen needs a data promise."))}
function Bn(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Kb?c.Kb:c.layer;var e=pm(d);d=nm(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=F("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=a.client;h=f;var l=c.Wa,n=c.cttAuthInfo,p=c.Jm,r=wm(),q={csn:r,pageVe:(new im({veType:b,youtubeData:g})).getAsJson()};h&&h.visualElement?(q.implicitGesture=
{parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()},p&&(q.implicitGesture.gestureType=p)):h&&Kl(new Mi("newScreen() parent element does not have a VE - rootVe",b));l&&(q.cloneCsn=l);l={cttAuthInfo:n,ba:r};k?li("screenCreated",q,k,l):V("screenCreated",q,l);lk(ok,new tm(r));var y=r}catch(B){Ml(B,{Om:b,rootVe:d,parentVisualElement:void 0,Im:e,Nm:f,Wa:c.Wa});Ll(B);return}sm(y,b,c.layer,c.cttAuthInfo);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=N("screen_manager_skip_hide_killswitch"))){a:{b=
u(Object.values(hm));for(f=b.next();!f.done;f=b.next())if(pm(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,k=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:k},f={cttAuthInfo:rm(e),ba:e,wb:f},"UNDEFINED_CSN"==e?zm("visualElementHidden",d,f):b?li("visualElementHidden",d,b,f):V("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=y||"");qn("csn",y);Am.getInstance().clear();d=nm(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(N("web_mark_root_visible")||
N("music_web_mark_root_visible"))&&(e=y,y={csn:e,ve:d.getAsJson(),eventType:1},b={cttAuthInfo:rm(e),ba:e},"UNDEFINED_CSN"==e?zm("visualElementShown",y,b):V("visualElementShown",y,b));a.i.delete(c.layer||0);a.j=void 0;e=u(a.B);for(y=e.next();!y.done;y=e.next())b=u(y.value),y=b.next().value,b=b.next().value,b.has(c.layer)&&d&&zn(a,y,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(B){Ll(B)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(B){Ll(B)}}}
;function Cn(a){a&&(a.dataset?a.dataset[Dn("loaded")]="true":a.setAttribute("data-loaded","true"))}
function En(a,b){return a?a.dataset?a.dataset[Dn(b)]:a.getAttribute("data-"+b):null}
var Fn={};function Dn(a){return Fn[a]||(Fn[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Gn=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Hn=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function In(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Gn,""),c=c.replace(Hn,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Jn(a,b,c)}
function Jn(a,b,c){c=void 0===c?null:c;var d=Kn(a),e=document.getElementById(d),f=e&&En(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Kh(d,b),b=""+Na(b),Ln[b]=f),g||(e=Mn(a,d,function(){En(e,"loaded")||(Cn(e),Nh(d),Fg(Ta(Oh,d),0))},c)))}
function Mn(a,b,c,d){d=void 0===d?null:d;var e=vd(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);od(e,kf(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Nn(a){a=Kn(a);var b=document.getElementById(a);b&&(Oh(a),b.parentNode.removeChild(b))}
function On(a,b){a&&b&&(a=""+Na(b),(a=Ln[a])&&Mh(a))}
function Kn(a){var b=document.createElement("a");$b(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ec(a)}
var Ln={};var Pn=[],Qn=!1;function Rn(){if(!N("disable_biscotti_fetch_for_ad_blocker_detection")&&!N("disable_biscotti_fetch_entirely_for_all_web_clients")&&Vl()&&"1"!=lb()){var a=function(){Qn=!0;"google_ad_status"in window?M("DCLKSTAT",1):M("DCLKSTAT",2)};
try{In("//web.archive.org/web/20211008175354/https://static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Pn.push(Lg(function(){if(!(Qn||"google_ad_status"in window)){try{On("//web.archive.org/web/20211008175354/https://static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Qn=!0;M("DCLKSTAT",3)}},5E3))}}
function Sn(){var a=Number(F("DCLKSTAT",0));return isNaN(a)?0:a}
;function Tn(){this.i=!1;this.h=null}
Tn.prototype.initialize=function(a,b,c,d){d=void 0===d?!1:d;var e,f;if(a.program){var g=null!==(e=a.interpreterScript)&&void 0!==e?e:null,h=null!==(f=a.interpreterUrl)&&void 0!==f?f:null;if(a.interpreterSafeScript){g=a.interpreterSafeScript;vb("From proto message. b/166824318");g=g.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var k=sb();g=k?k.createScript(g):g;g=(new xb(g)).toString()}a.interpreterSafeUrl&&(h=a.interpreterSafeUrl,vb("From proto message. b/166824318"),h=Bb(h.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||
"").toString());Un(this,g,h,a.program,b,c,d)}else Kl(Error("Cannot initialize botguard without program"))};
function Un(a,b,c,d,e,f,g){g=void 0===g?!1:g;c?(a.i=!0,In(c,function(){a.i=!1;var h=0<=c.indexOf("/th/");(h?window.trayride:window.botguard)?Vn(a,d,!!g,h,e):(Nn(c),Kl(new Mi("Unable to load Botguard","from "+c)))},f)):b&&(f=vd(document,"SCRIPT"),f.textContent=b,f.nonce=cc(),document.head.appendChild(f),document.head.removeChild(f),((b=b.includes("trayride"))?window.trayride:window.botguard)?Vn(a,d,!!g,b,e):Kl(Error("Unable to load Botguard from JS")))}
function Vn(a,b,c,d,e){var f,g;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{Wn(a,new d(b,e?function(){return e(b)}:Ha))}catch(h){h instanceof Error&&Kl(h)}else{try{Wn(a,new d(b))}catch(h){h instanceof Error&&Kl(h)}e&&e(b)}else Kl(Error("Failed to finish initializing VM"))}
Tn.prototype.invoke=function(a){a=void 0===a?{}:a;return this.h?this.h.hasOwnProperty("hot")?this.h.hot(void 0,void 0,a):this.h.invoke(void 0,void 0,a):null};
Tn.prototype.dispose=function(){this.h=null};
function Wn(a,b){a.h=b}
;var Xn=new Tn;function Yn(){return!!Xn.h}
function Zn(a){a=void 0===a?{}:a;return Xn.invoke(a)}
;var $n=window,ao=/[A-Za-z]+\/[0-9.]+/g;function bo(a,b){if(a.replace(ao,"")!==b.replace(ao,""))return!1;a=a.match(ao);b=b.match(ao);if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(!d.startsWith(e)&&!e.startsWith(d))return!1}return!0}
function co(){var a=$n.uaChPolyfill.state;if(0===a.type)V("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&bo(a.syntheticUa,b),d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),Ll(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);V("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),V("clientHintsPolyfillDiagnostics",
b))}}
var eo=!1;function fo(){var a;1===(null===(a=$n.uaChPolyfill)||void 0===a?void 0:a.state.type)?eo||($n.uaChPolyfill.onReady=fo,eo=!0):$n.uaChPolyfill&&co()}
;function go(a,b,c){J.call(this);var d=this;c=c||F("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.C="*";this.l=c;this.sessionId=null;this.channel="widget";this.J=!!a;this.B=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.J&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.C=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.A||0<=Za(d.A,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.A=this.i=this.m=null;window.addEventListener("message",this.B)}
v(go,J);go.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.C)}catch(d){pg(d)}}};
go.prototype.D=function(){window.removeEventListener("message",this.B);J.prototype.D.call(this)};function ho(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new go(!!F("WIDGET_ID_ENFORCE")),b=this.Mb.bind(this);a.m=b;a.A=null;this.h.channel="widget";if(a=F("WIDGET_ID"))this.h.sessionId=a}
m=ho.prototype;m.Mb=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,io(this,a)),this.j[a]=!0)):this.Ra(a,b,c)};
m.Ra=function(){};
function io(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.xb=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ha());this.sendMessage("onReady");E(this.i,this.mb,this);this.i=[]};
m.Ha=function(){return null};
function jo(a,b){a.sendMessage("infoDelivery",b)}
m.mb=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.mb({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};function ko(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function lo(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function mo(a,b,c,d){if(La(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function no(a){ho.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Tb.bind(this));this.addEventListener("onVolumeChange",this.Ub.bind(this));this.addEventListener("onApiChange",this.Ob.bind(this));this.addEventListener("onPlaybackQualityChange",this.Qb.bind(this));this.addEventListener("onPlaybackRateChange",this.Rb.bind(this));this.addEventListener("onStateChange",this.Sb.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Vb.bind(this))}
v(no,ho);m=no.prototype;
m.Ra=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&ko(a)){var d=b;if(La(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=lo(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=lo(e);break;case "loadPlaylist":case "cuePlaylist":e=mo(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);ko(a)&&jo(this,this.Ha())}};
m.onReady=function(){var a=this.xb.bind(this);this.h.i=a};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Ha=function(){if(!this.api)return null;var a=this.api.getApiInterface();db(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Sb=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());jo(this,a)};
m.Qb=function(a){jo(this,{playbackQuality:a})};
m.Rb=function(a){jo(this,{playbackRate:a})};
m.Ob=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Ub=function(){jo(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Tb=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());jo(this,a)};
m.Vb=function(){var a={sphericalProperties:this.api.getSphericalProperties()};jo(this,a)};
m.dispose=function(){ho.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function oo(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.ib,this)}
v(oo,J);m=oo.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.ea("RECEIVING"))};
m.ea=function(a,b){this.started&&!this.h&&this.connection.ea(a,b)};
m.ib=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=po(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=qo(a,c))&&this.ea(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.Pb.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.Pb=function(a,b){this.started&&!this.h&&this.connection.ea(a,this.Ga(a,b))};
m.Ga=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.D=function(){var a=this.connection;a.h||Mf(a.i,"command",this.ib,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.D.call(this)};function ro(a,b){oo.call(this,b);this.api=a;this.start()}
v(ro,oo);ro.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
ro.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function po(a,b){switch(a){case "loadVideoById":return a=lo(b),[a];case "cueVideoById":return a=lo(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=mo(b),[a];case "cuePlaylist":return a=mo(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function qo(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ro.prototype.Ga=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return oo.prototype.Ga.call(this,a,b)};
ro.prototype.D=function(){oo.prototype.D.call(this);delete this.api};function so(a){a=void 0===a?!1:a;J.call(this);this.i=new L(a);re(this,Ta(pe,this.i))}
D(so,J);so.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
so.prototype.l=function(a,b){this.h||this.i.da.apply(this.i,arguments)};function to(a,b,c){so.call(this);this.j=a;this.destination=b;this.id=c}
v(to,so);to.prototype.ea=function(a,b){this.h||this.j.ea(this.destination,this.id,a,b)};
to.prototype.D=function(){this.destination=this.j=null;so.prototype.D.call(this)};function uo(a,b,c){J.call(this);this.destination=a;this.origin=c;this.i=Cg(window,"message",this.j.bind(this));this.connection=new to(this,a,b);re(this,Ta(pe,this.connection))}
v(uo,J);uo.prototype.ea=function(a,b,c,d){this.h||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(mf(a),this.origin))};
uo.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h||c.l("command",b.command,b.data,a.origin))}};
uo.prototype.D=function(){Dg(this.i);this.destination=null;J.prototype.D.call(this)};function vo(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||nb(b);this.assets=a.assets||{};this.attrs=a.attrs||nb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
vo.prototype.clone=function(){var a=new vo,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ja(c)?a[b]=nb(c):a[b]=c}return a};var wo=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function xo(a){a=a||"";if(window.spf){var b=a.match(wo);spf.style.load(a,b?b[1]:"",void 0)}else yo(a)}
function yo(a){var b=zo(a),c=document.getElementById(b),d=c&&En(c,"loaded");d||c&&!d||(c=Ao(a,b,function(){En(c,"loaded")||(Cn(c),Nh(b),Fg(Ta(Oh,b),0))}))}
function Ao(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=kf(a);ac(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function zo(a){var b=vd(document,"A");vb("This URL is never added to the DOM");$b(b,new Kb(a,Lb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ec(a)}
;function Bo(){J.call(this);this.i=[]}
v(Bo,J);Bo.prototype.D=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.Ta,void 0)}J.prototype.D.call(this)};function Co(){Bo.apply(this,arguments)}
v(Co,Bo);function Do(a,b,c,d){J.call(this);var e=this;this.J=b;this.webPlayerContextConfig=d;this.Ca=!1;this.api={};this.ha=this.A=null;this.L=new L;this.i={};this.U=this.na=this.elementId=this.Da=this.config=null;this.T=!1;this.l=this.B=null;this.oa={};this.pb=["onReady"];this.lastError=null;this.Sa=NaN;this.C={};this.qb=new Co(this);this.ga=0;this.j=this.m=a;re(this,Ta(pe,this.L));Eo(this);Fo(this);re(this,Ta(pe,this.qb));c?this.ga=Fg(function(){e.loadNewVideoConfig(c)},0):d&&(Go(this),Ho(this))}
v(Do,J);m=Do.prototype;m.getId=function(){return this.J};
m.loadNewVideoConfig=function(a){if(!this.h){this.ga&&(Gg(this.ga),this.ga=0);var b=a||{};b instanceof vo||(b=new vo(b));this.config=b;this.setConfig(a);Ho(this);this.isReady()&&Io(this)}};
function Go(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.J,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.J:a.config.attrs.id=a.J);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.Da=a;this.config=Jo(a);Go(this);this.na||(this.na=Ko(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=Dd(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=Dd(Number(a)||a))};
function Io(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function Lo(a){var b=!0,c=Mo(a);c&&a.config&&(a=No(a),b=En(c,"version")===a);return b&&!!C("yt.player.Application.create")}
function Ho(a){if(!a.h&&!a.T){var b=Lo(a);if(b&&"html5"===(Mo(a)?"html5":null))a.U="html5",a.isReady()||Oo(a);else if(Po(a),a.U="html5",b&&a.l&&a.m)a.m.appendChild(a.l),Oo(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.B=function(){c=!0;var d=Qo(a,"player_bootstrap_method")?C("yt.player.Application.createAlternate")||C("yt.player.Application.create"):C("yt.player.Application.create");var e=a.config?Jo(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig);Oo(a)};
a.T=!0;b?a.B():(In(No(a),a.B),(b=Ro(a))&&xo(b),So(a)&&!c&&A("yt.player.Application.create",null,void 0))}}}
function Mo(a){var b=rd(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Oo(a){var b;if(!a.h){var c=Mo(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.T=!1,!Qo(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||To(a)):a.Sa=Fg(function(){Oo(a)},50)}}
function To(a){Eo(a);a.Ca=!0;var b=Mo(a);if(b){a.A=Uo(a,b,"addEventListener");a.ha=Uo(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Uo(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.A&&a.A(g,a.i[g]);Io(a);a.na&&a.na(a.api);a.L.da("onReady",a.api)}
function Uo(a,b,c){var d=b[c];return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];try{return a.lastError=null,d.apply(b,f)}catch(h){"sendAbandonmentPing"!==c&&(h.params=c,a.lastError=h,Kl(h))}}}
function Eo(a){a.Ca=!1;if(a.ha)for(var b in a.i)a.i.hasOwnProperty(b)&&a.ha(b,a.i[b]);for(var c in a.C)a.C.hasOwnProperty(c)&&Gg(Number(c));a.C={};a.A=null;a.ha=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Da};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Ca};
function Fo(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Nh("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Nh("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Nh("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=Ko(this,b);d&&(0<=Za(this.pb,a)||this.i[a]||(b=Vo(this,a),this.A&&this.A(a,b)),this.L.subscribe(a,d),"onReady"===a&&this.isReady()&&Fg(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h||(b=Ko(this,b))&&Mf(this.L,a,b)};
function Ko(a,b){var c=b;if("string"===typeof b){if(a.oa[b])return a.oa[b];c=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];if(f=C(b))try{f.apply(z,e)}catch(g){Ll(g)}};
a.oa[b]=c}return c?c:null}
function Vo(a,b){var c="ytPlayer"+b+a.J;a.i[b]=c;z[c]=function(d){var e=Fg(function(){if(!a.h){a.L.da(b,d);var f=a.C,g=String(e);g in f&&delete f[g]}},0);
kb(a.C,String(e))};
return c}
m.getPlayerType=function(){return this.U||(Mo(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function Po(a){a.cancel();Eo(a);a.U=null;a.config&&(a.config.loaded=!1);var b=Mo(a);b&&(Lo(a)||!So(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&On(No(this),this.B);Gg(this.Sa);this.T=!1};
m.D=function(){Po(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Ll(b)}this.oa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(z[this.i[a]]=null);this.Da=this.config=this.api=null;delete this.m;delete this.j;J.prototype.D.call(this)};
function So(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function No(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Ro(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Qo(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===Zg(d||"","&")[b]}
function Jo(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?nb(e):e}return b}
;var Wo={},Xo="player_uid_"+(1E9*Math.random()>>>0);function Yo(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?rd(d):d;var e=Xo+"_"+Na(d),f=Wo[e];if(f&&c)return Zo(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Do(d,e,a,b);Wo[e]=f;Nh("player-added",f.api);re(f,function(){delete Wo[f.getId()]});
return f.api}
function Zo(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var $o=null,ap=null,bp=null;function cp(){var a=$o.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function dp(a,b,c){a="ST-"+ec(a).toString(36);b=b?jc(b):"";c=c||5;Vl()&&ni(a,b,c)}
;function ep(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=F("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=F("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=hc(window.location.href);g&&f.push(g);g=hc(d);if(0<=Za(f,g)||!g&&0==d.lastIndexOf("/",0))if(N("autoescape_tempdata_url")&&(f=document.createElement("a"),$b(f,d),d=f.href),d){g=d.match(fc);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:pm()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&dp(d,b,k)}else dp(d,b)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=kc(a,l)+n;var r=void 0===r?md:r;a:{r=void 0===r?md:r;for(l=0;l<r.length;++l)if(n=r[l],n instanceof kd&&n.isValid(a)){r=new id(a,gd);break a}r=void 0}c.href=nd(r||jd)}return!0}
;A("yt.setConfig",M,void 0);A("yt.config.set",M,void 0);A("yt.setMsg",rg,void 0);A("yt.msgs.set",rg,void 0);A("yt.logging.errors.log",Ll,void 0);
A("writeEmbed",function(){var a=F("PLAYER_CONFIG",void 0);if(!a){var b=F("PLAYER_VARS",void 0);b&&(a={args:b})}cm(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=F("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);N("embeds_js_api_set_1p_cookie")&&(c=dh(),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));M("FORCE_CSI_ON_GEL",!0);
c=["ol"];Zm("").info.actionType="embed";c&&M("TIMING_AFT_KEYS",c);M("TIMING_ACTION","embed");c=F("TIMING_INFO",{});for(var d in c)c.hasOwnProperty(d)&&qn(d,c[d]);qn("is_nav",1);(d=pm())&&qn("csn",d);(d=F("PREVIOUS_ACTION",void 0))&&!ln()&&qn("pa",d);d=Um();c=F("CLIENT_PROTOCOL");var e=F("CLIENT_TRANSPORT");c&&qn("p",c);e&&qn("t",e);qn("yt_vis",tn());qn("yt_lt","cold");c=Qm();if(e=Sm())Z("srt",c.responseStart),1!==d.prerender&&(qn("yt_sts","n",void 0),Z("_start",e,void 0));d=Xm();0<d&&Z("fpt",d);d=
Qm();d.isPerformanceNavigationTiming&&qn("pnt",1,void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Sm()&&0<d.connectEnd-
d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));W&&W.getEntriesByType&&vn();d=[];if(document.querySelector&&W&&W.getEntriesByName)for(var f in Nm)Nm.hasOwnProperty(f)&&(c=Nm[f],un(f,c)&&d.push(c));for(f=0;f<d.length;f++)qn("rc",d[f]);if(ln(void 0)){f={actionType:en[F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:en[F("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"};if(d=pm())f.clientScreenNonce=d;d=Vm(void 0);c=Tm(void 0).cttAuthInfo;
cn().info(f,d,c)}f=Um();c=Pm();if("cold"===f.yt_lt&&(d=nn(),e=d.gelTicks?d.gelTicks:d.gelTicks={},d=d.gelInfos?d.gelInfos:d.gelInfos={},ln())){for(var g in c)"tick_"+g in e||mn(g,c[g]);g=pn();c=Vm();e=Tm().cttAuthInfo;var h={},k=!1,l;for(l in f)if(!("info_"+l in d)){var n=on(l,f[l]);n&&(Bm(g,n),Bm(h,n),k=!0)}k&&cn().info(h,c,e)}A("ytglobal.timingready_",!0,void 0);rn();(l=F("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in l?(l=l.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,
l.serializedForcedExperimentIds||(g=dh(),g.forced_experiments&&(l.serializedForcedExperimentIds=g.forced_experiments)),$o=Yo(a,l,!1)):$o=Yo(a);$o.addEventListener("onVideoDataChange",cp);a=F("POST_MESSAGE_ID","player");F("ENABLE_JS_API")?bp=new no($o):F("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(ap=new uo(window.parent,a,b),bp=new ro($o,ap.connection));Rn();N("networkless_logging_web_embedded")&&(N("embeds_web_enable_new_nwl")?ql():Zk());N("embeds_enable_ua_ch_polyfill")&&fo()},
void 0);
var fp=ng(function(){sn();var a=pi.getInstance(),b=!!((si("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&ue(document.body,"exp-invert-logo"))if(c&&!ue(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!ue(d,"inverted-hdpi")){var e=se(d);te(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&ue(document.body,"inverted-hdpi")&&ve();if(b!=c){b="f"+(Math.floor(119/31)+1);d=si(b)||0;d=c?d|67108864:
d&-67108865;0==d?delete oi[b]:(c=d.toString(16),oi[b]=c.toString());c=!0;N("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in oi)d.push(f+"="+encodeURIComponent(String(oi[f])));ni(b,d.join("&"),63072E3,a.i,c)}xn.h||(xn.h=new xn);a=xn.h;f=16623;var g=void 0===g?{}:g;Object.values(Nl).includes(f)||(Kl(new Mi("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.o=[];a.A=[];g.Xa?An(a,f,g):Bn(a,f,g)}),gp=ng(function(){$o&&
$o.sendAbandonmentPing&&$o.sendAbandonmentPing();
F("PL_ATT")&&Xn.dispose();for(var a=0,b=Pn.length;a<b;a++)Og(Pn[a]);Pn.length=0;Nn("//web.archive.org/web/20211008175354/https://static.doubleclick.net/instream/ad_status.js");Qn=!1;M("DCLKSTAT",0);qe(bp,ap);$o&&($o.removeEventListener("onVideoDataChange",cp),$o.destroy())});
window.addEventListener?(window.addEventListener("load",fp),window.addEventListener("unload",gp)):window.attachEvent&&(window.attachEvent("onload",fp),window.attachEvent("onunload",gp));Ua("yt.abuse.player.botguardInitialized",C("yt.abuse.player.botguardInitialized")||Yn);Ua("yt.abuse.player.invokeBotguard",C("yt.abuse.player.invokeBotguard")||Zn);Ua("yt.abuse.dclkstatus.checkDclkStatus",C("yt.abuse.dclkstatus.checkDclkStatus")||Sn);
Ua("yt.player.exports.navigate",C("yt.player.exports.navigate")||ep);Ua("yt.util.activity.init",C("yt.util.activity.init")||Qg);Ua("yt.util.activity.getTimeSinceActive",C("yt.util.activity.getTimeSinceActive")||Tg);Ua("yt.util.activity.setTimestamp",C("yt.util.activity.setTimestamp")||Rg);}).call(this);


}
/*
     FILE ARCHIVED ON 17:53:54 Oct 08, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:13:41 Jun 11, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.665
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.01
  esindex: 0.012
  cdx.remote: 6.885
  LoadShardBlock: 112.602 (3)
  PetaboxLoader3.datanode: 107.397 (7)
  load_resource: 349.508 (2)
  PetaboxLoader3.resolve: 317.849 (2)
*/