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
var da=ca(this);function r(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.S=b.prototype}
function oa(){this.u=!1;this.l=null;this.i=void 0;this.h=1;this.o=this.m=0;this.F=this.j=null}
function pa(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
oa.prototype.B=function(a){this.i=a};
function qa(a,b){a.j={hb:b,jb:!0};a.h=a.m||a.o}
oa.prototype.return=function(a){this.j={return:a};this.h=this.o};
function w(a,b,c){a.h=c;return{value:b}}
oa.prototype.A=function(a){this.h=a};
function ra(a,b,c){a.m=b;void 0!=c&&(a.o=c)}
function sa(a,b){a.h=b;a.m=0}
function ta(a){a.m=0;var b=a.j.hb;a.j=null;return b}
function ua(a){a.F=[a.j];a.m=0;a.o=0}
function va(a){var b=a.F.splice(0)[0];(b=a.j=a.j||b)?b.jb?a.h=a.m||a.o:void 0!=b.A&&a.o<b.A?(a.h=b.A,a.j=null):a.h=a.o:a.h=0}
function wa(a){this.h=new oa;this.i=a}
function xa(a,b){pa(a.h);var c=a.h.l;if(c)return ya(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Aa(a)}
function ya(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.l=null,qa(a.h,g),Aa(a)}a.h.l=null;d.call(a.h,f);return Aa(a)}
function Aa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,qa(a.h,c)}a.h.u=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.jb)throw b.hb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){pa(a.h);a.h.l?b=ya(a,a.h.l.next,b,a.h.B):(a.h.B(b),b=Aa(a));return b};
this.throw=function(b){pa(a.h);a.h.l?b=ya(a,a.h.l["throw"],b,a.h.B):(qa(a.h,b),b=Aa(a));return b};
this.return=function(b){return xa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Da(new Ca(new wa(a)))}
function Ea(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect",function(a){return a?a:{}});
r("Reflect.construct",function(){return ia});
r("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.o=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.R),reject:g(this.o)}};
b.prototype.R=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ka(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.N(g):this.m(g)}};
b.prototype.N=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.la(h,g):this.m(g)};
b.prototype.o=function(g){this.B(2,g)};
b.prototype.m=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.F()};
b.prototype.Y=function(){var g=this;e(function(){if(g.H()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.H=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.F=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ka=function(g){var h=this.l();g.ya(h.resolve,h.reject)};
b.prototype.la=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,q){return"function"==typeof t?function(z){try{l(t(z))}catch(A){n(A)}}:q}
var l,n,p=new b(function(t,q){l=t;n=q});
this.ya(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ya=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).ya(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(z){return function(A){t[z]=A;q--;0==q&&l(t)}}
var t=[],q=0;do t.push(void 0),q++,d(k.value).ya(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
function Fa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
r("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Fa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Fa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Fa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Fa(k,g)&&Fa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Fa(k,g)&&Fa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&Fa(h.data_,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
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
function Ga(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
function Ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ha(this,function(b,c){return[b,c]})}});
r("Object.setPrototypeOf",function(a){return a||na});
var Ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Fa(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||Ia});
r("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Fa(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ha(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ha(this,function(b,c){return c})}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ga(this,b,"includes").indexOf(b,c||0)}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
r("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Fa(b,d)&&c.push(b[d]);return c}});
var y=this||self;function B(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ja(){}
function Ka(a){a.Ra=void 0;a.getInstance=function(){return a.Ra?a.Ra:a.Ra=new a}}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ua=Sa:Ua=Ta;return Ua.apply(null,arguments)}
function Va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Wa(a,b){B(a,b,void 0)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.S=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Sm=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Xa(a){return a}
;function Ya(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ya);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.wb=b)}
D(Ya,Error);Ya.prototype.name="CustomError";function Za(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function $a(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var ab=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},bb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},cb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},db=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function eb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function fb(a,b){b=ab(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function jb(a){var b=kb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function lb(a){for(var b in a)return!1;return!0}
function mb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function nb(){var a=F("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function ob(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function pb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function qb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=qb(a[c]);return b}
var rb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<rb.length;f++)c=rb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var tb;function ub(){if(void 0===tb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Xa,createScript:Xa,createScriptURL:Xa})}catch(c){y.console&&y.console.error(c.message)}tb=a}else tb=a}return tb}
;function vb(a,b){this.h=a===wb&&b||""}
vb.prototype.ca=!0;vb.prototype.ba=function(){return this.h};
function xb(a){return new vb(wb,a)}
var wb={};xb("");var yb={};function zb(a){this.h=yb===yb?a:"";this.ca=!0}
zb.prototype.ba=function(){return this.h.toString()};
zb.prototype.toString=function(){return this.h.toString()};function Ab(a,b){this.h=b===Bb?a:""}
m=Ab.prototype;m.ca=!0;m.ba=function(){return this.h.toString()};
m.Pa=!0;m.La=function(){return 1};
m.toString=function(){return this.h+""};
function Cb(a){if(a instanceof Ab&&a.constructor===Ab)return a.h;La(a);return"type_error:TrustedResourceUrl"}
var Bb={};function Db(a){var b=ub();a=b?b.createScriptURL(a):a;return new Ab(a,Bb)}
;var Eb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Fb=/&/g,Gb=/</g,Hb=/>/g,Ib=/"/g,Kb=/'/g,Lb=/\x00/g,Mb=/[\x00&<>"']/;function Nb(a,b){this.h=b===Ob?a:""}
m=Nb.prototype;m.ca=!0;m.ba=function(){return this.h.toString()};
m.Pa=!0;m.La=function(){return 1};
m.toString=function(){return this.h.toString()};
function Pb(a){if(a instanceof Nb&&a.constructor===Nb)return a.h;La(a);return"type_error:SafeUrl"}
var Qb=RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',"i"),Rb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Sb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ob={},Tb=new Nb("about:invalid#zClosurez",Ob);var Ub;a:{var Vb=y.navigator;if(Vb){var Wb=Vb.userAgent;if(Wb){Ub=Wb;break a}}Ub=""}function G(a){return-1!=Ub.indexOf(a)}
;function Xb(){return(G("Chrome")||G("CriOS"))&&!G("Edge")}
;var Yb={};function Zb(a,b,c){this.h=c===Yb?a:"";this.i=b;this.ca=this.Pa=!0}
Zb.prototype.La=function(){return this.i};
Zb.prototype.ba=function(){return this.h.toString()};
Zb.prototype.toString=function(){return this.h.toString()};
function $b(a,b){var c=ub();a=c?c.createHTML(a):a;return new Zb(a,b,Yb)}
;function ac(a,b){b instanceof Nb||b instanceof Nb||(b="object"==typeof b&&b.ca?b.ba():String(b),Sb.test(b)||(b="about:invalid#zClosurez"),b=new Nb(b,Ob));a.href=Pb(b)}
function bc(a,b){a.rel="stylesheet";a.href=Cb(b).toString();(b=cc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function dc(){return cc("script[nonce]",void 0)}
var ec=/^[\w+/_-]+[=]{0,2}$/;function cc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&ec.test(a)?a:"":""}
;function fc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var gc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hc(a){return a?decodeURI(a):a}
function ic(a){return hc(a.match(gc)[3]||null)}
function jc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)jc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function kc(a){var b=[],c;for(c in a)jc(c,a[c],b);return b.join("&")}
function lc(a,b){b=kc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var mc=/#|$/;function nc(a){y.setTimeout(function(){throw a;},0)}
;function oc(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;function pc(a){pc[" "](a);return a}
pc[" "]=Ja;var qc=G("Opera"),rc=G("Trident")||G("MSIE"),sc=G("Edge"),tc=G("Gecko")&&!(-1!=Ub.toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),uc=-1!=Ub.toLowerCase().indexOf("webkit")&&!G("Edge"),vc=G("Android");function wc(){var a=y.document;return a?a.documentMode:void 0}
var xc;a:{var yc="",zc=function(){var a=Ub;if(tc)return/rv:([^\);]+)(\)|;)/.exec(a);if(sc)return/Edge\/([\d\.]+)/.exec(a);if(rc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(uc)return/WebKit\/(\S+)/.exec(a);if(qc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
zc&&(yc=zc?zc[1]:"");if(rc){var Ac=wc();if(null!=Ac&&Ac>parseFloat(yc)){xc=String(Ac);break a}}xc=yc}var Bc=xc,Cc;if(y.document&&rc){var Dc=wc();Cc=Dc?Dc:parseInt(Bc,10)||void 0}else Cc=void 0;var Fc=Cc;var Gc=oc()||G("iPod"),Hc=G("iPad");!G("Android")||Xb();Xb();var Ic=G("Safari")&&!(Xb()||G("Coast")||G("Opera")||G("Edge")||G("Edg/")||G("OPR")||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(oc()||G("iPad")||G("iPod"));var Jc={},Kc=null;
function Lc(a,b){Ma(a);void 0===b&&(b=0);if(!Kc){Kc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Jc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Kc[h]&&(Kc[h]=g)}}}b=Jc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Mc="function"===typeof Uint8Array;var Nc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Oc(a){if(!Array.isArray(a))return a;Object.isFrozen(a)||(Nc?a[Nc]|=1:void 0!==a.h?a.h|=1:Object.defineProperties(a,{h:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a}
;function Pc(a){return null!==a&&"object"===typeof a&&a.constructor===Object}
function Qc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":return Mc&&null!=a&&a instanceof Uint8Array?Lc(a):a;default:return a}}
;function Rc(a,b){if(null!=a)return Array.isArray(a)||Pc(a)?Sc(a,b):b(a)}
function Sc(a,b){if(Array.isArray(a)){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=Rc(a[d],b);if(a){var e;Nc?e=a[Nc]:e=a.h;a=null==e?0:e}else a=0;a&1&&Oc(c);return c}e={};for(c in a)e[c]=Rc(a[c],b);return e}
function Tc(a){return Mc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function Uc(a,b){this.h=a;this.i=b;this.map={};this.j=!0;if(0<this.h.length){for(a=0;a<this.h.length;a++){b=this.h[a];var c=b[0];this.map[c.toString()]=new Vc(c,b[1])}this.j=!0}}
m=Uc.prototype;m.X=function(){if(this.j){if(this.i){var a=this.map,b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b].h;c&&c.X()}}}else{this.h.length=0;a=Wc(this);a.sort();for(b=0;b<a.length;b++){c=this.map[a[b]];var d=c.h;d&&d.X();this.h.push([c.key,c.value])}this.j=!0}return this.h};
m.clear=function(){this.map={};this.j=!1};
m.entries=function(){var a=[],b=Wc(this);b.sort();for(var c=0;c<b.length;c++){var d=this.map[b[c]];a.push([d.key,Xc(this,d)])}return new Yc(a)};
m.keys=function(){var a=[],b=Wc(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.map[b[c]].key);return new Yc(a)};
m.values=function(){var a=[],b=Wc(this);b.sort();for(var c=0;c<b.length;c++)a.push(Xc(this,this.map[b[c]]));return new Yc(a)};
m.forEach=function(a,b){var c=Wc(this);c.sort();for(var d=0;d<c.length;d++){var e=this.map[c[d]];a.call(b,Xc(this,e),e.key,this)}};
m.set=function(a,b){var c=new Vc(a);this.i?(c.h=b,c.value=b.X()):c.value=b;this.map[a.toString()]=c;this.j=!1;return this};
function Xc(a,b){return a.i?(b.h||(b.h=new a.i(b.value)),b.h):b.value}
m.get=function(a){if(a=this.map[a.toString()])return Xc(this,a)};
m.has=function(a){return a.toString()in this.map};
function Wc(a){a=a.map;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}
Uc.prototype[Symbol.iterator]=function(){return this.entries()};
function Vc(a,b){this.key=a;this.value=b;this.h=void 0}
function Yc(a){this.i=0;this.h=a}
Yc.prototype.next=function(){return this.i<this.h.length?{done:!1,value:this.h[this.i++]}:{done:!0,value:void 0}};
Yc.prototype[Symbol.iterator]=function(){return this};var Zc;function $c(a,b,c){var d=Zc;Zc=null;a||(a=d);d=this.constructor.Ym;a||(a=d?[d]:[]);this.l=(d?0:-1)-(this.constructor.Xm||0);this.h=null;this.i=a;a:{d=this.i.length;a=d-1;if(d&&(d=this.i[a],Pc(d))){this.o=a-this.l;this.j=d;break a}void 0!==b&&-1<b?(this.o=Math.max(b,a+1-this.l),this.j=null):this.o=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.o?(a+=this.l,(d=this.i[a])?Oc(d):this.i[a]=ad):(bd(this),(d=this.j[a])?Oc(d):this.j[a]=ad)}
var ad=Object.freeze(Oc([]));function bd(a){var b=a.o+a.l;a.i[b]||(a.j=a.i[b]={})}
function cd(a,b,c){return-1===b?null:(void 0===c?0:c)||b>=a.o?a.j?a.j[b]:void 0:a.i[b+a.l]}
function dd(a,b,c){a.h||(a.h={});if(b in a.h)return a.h[b];var d=cd(a,b);d||(d=Oc([]),ed(a,b,d));c=new Uc(d,c);return a.h[b]=c}
function ed(a,b,c,d){(void 0===d?0:d)||b>=a.o?(bd(a),a.j[b]=c):a.i[b+a.l]=c}
function fd(a,b,c,d){if(-1===c)return null;a.h||(a.h={});var e=a.h[c];if(e)return e;d=cd(a,c,void 0===d?!1:d);if(null==d)return e;b=new b(d);return a.h[c]=b}
function gd(a,b,c){a.h||(a.h={});var d=a.h[c];if(!d){var e=void 0===e?!1:e;d=cd(a,c,e);null==d&&(d=ad);d===ad&&(d=Oc(d.slice()),ed(a,c,d,e));e=d;d=[];for(var f=0;f<e.length;f++)d[f]=new b(e[f]);a.h[c]=d}return d}
$c.prototype.toJSON=function(){var a=this.X();return Sc(a,Qc)};
$c.prototype.X=function(){if(this.h)for(var a in this.h){var b=this.h[a];if(Array.isArray(b))for(var c=0;c<b.length;c++)b[c]&&b[c].X();else b&&b.X()}return this.i};
$c.prototype.toString=function(){return this.X().toString()};
$c.prototype.clone=function(){var a=this.constructor,b=Sc(this.X(),Tc);Zc=b;a=new a(b);Zc=null;hd(a,this);return a};
function hd(a,b){b.m&&(a.m=b.m.slice());var c=b.h;if(c){b=b.j;var d={},e;for(e in c){var f=c[e];if(f){var g=!(!b||!b[e]),h=+e;if(Array.isArray(f)){if(f.length)for(g=gd(a,f[0].constructor,h,g),h=0;h<Math.min(g.length,f.length);h++)hd(g[h],f[h])}else f instanceof Uc?f.i&&(d.Ga=dd(a,h,f.i),f.forEach(function(k){return function(l,n){return hd(k.Ga.get(n),l)}}(d))):(g=fd(a,f.constructor,h,g))&&hd(g,f)}d={Ga:d.Ga}}}}
;var id=window;xb("csi.gstatic.com");xb("googleads.g.doubleclick.net");xb("pagead2.googlesyndication.com");xb("partner.googleadservices.com");xb("pubads.g.doubleclick.net");xb("securepubads.g.doubleclick.net");xb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var jd={};function kd(){}
function ld(a){this.h=a}
v(ld,kd);ld.prototype.toString=function(){return this.h};
var md=new ld("about:invalid#zTSz",jd);function nd(a){this.isValid=a}
function od(a){return new nd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var pd=[od("data"),od("http"),od("https"),od("mailto"),od("ftp"),new nd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function qd(a){if(a instanceof kd)if(a instanceof ld)a=a.h;else throw Error("");else a=Pb(a);return a}
;function rd(a,b){a.src=Cb(b);var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;var d=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]");(c=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function sd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=sd.prototype;m.clone=function(){return new sd(this.x,this.y)};
m.equals=function(a){return a instanceof sd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function td(a,b){this.width=a;this.height=b}
m=td.prototype;m.clone=function(){return new td(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function ud(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function vd(a,b){ib(b,function(c,d){c&&"object"==typeof c&&c.ca&&(c=c.ba());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:wd.hasOwnProperty(d)?a.setAttribute(wd[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var wd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function xd(a,b,c){var d=arguments,e=document,f=d[1],g=yd(e,String(d[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):vd(g,f));2<d.length&&zd(e,g,d);return g}
function zd(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ma(f)||Oa(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Oa(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}E(g?gb(f):f,d)}}}
function yd(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Ad(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Bd(a){var b=Cd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Dd(){var a=[];Bd(function(b){a.push(b)});
return a}
var Cd={nc:"allow-forms",oc:"allow-modals",pc:"allow-orientation-lock",qc:"allow-pointer-lock",sc:"allow-popups",tc:"allow-popups-to-escape-sandbox",uc:"allow-presentation",wc:"allow-same-origin",xc:"allow-scripts",yc:"allow-top-navigation",zc:"allow-top-navigation-by-user-activation"},Ed=$a(function(){return Dd()});
function Fd(){var a=Gd(),b={};E(Ed(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Gd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Hd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Id=(new Date).getTime();function Jd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Kd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,q=0;64>q;q+=4)t[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=t[q-3]^t[q-8]^t[q-14]^t[q-16],t[q]=(p<<1|p>>>31)&4294967295;p=e[0];var z=e[1],A=e[2],H=e[3],P=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var Q=H^z&(A^H);var S=1518500249}else Q=z^A^H,S=1859775393;else 60>q?(Q=z&A|H&(z|A),S=2400959708):(Q=z^A^H,S=3395469782);Q=((p<<5|p>>>27)&4294967295)+Q+P+S+t[q]&4294967295;P=H;H=A;A=(z<<30|z>>>2)&4294967295;z=p;p=Q}e[0]=e[0]+p&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+A&4294967295;e[3]=e[3]+H&4294967295;e[4]=e[4]+P&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],z=0,A=p.length;z<A;++z)q.push(p.charCodeAt(z));p=q}t||(t=p.length);q=0;if(0==l)for(;q+64<t;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<t;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<t;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=t&255,t>>>=8;b(f);for(q=t=0;5>q;q++)for(var z=24;0<=z;z-=8)p[t++]=e[q]>>z&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,yb:function(){for(var p=d(),t="",q=0;q<p.length;q++)t+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return t}}}
;function Ld(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,Md(Jd(d),a,c||null)].join(" "):null}
function Md(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),Nd(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=Nd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Nd(a){var b=Kd();b.update(a);return b.yb().toLowerCase()}
;var Od={};function Pd(a){this.h=a||{cookie:""}}
m=Pd.prototype;m.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Sa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.dn;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Sa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Eb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Sa:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Eb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Qd=new Pd("undefined"==typeof document?null:document);function Rd(a){return!!Od.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Sd(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;Rd(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new Pd(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");Rd(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Td(a,b,c,d){(a=y[a])||(a=(new Pd(document)).get(b));return a?Ld(a,c,d):null}
function Ud(a){var b=void 0===b?!1:b;var c=Jd(String(y.location.href)),d=[];if(Sd(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new Pd(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Ld(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Rd(b)&&((b=Td("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Td("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Vd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Wd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ma(d)?Wd.apply(null,d):Vd(d)}}
;function I(){this.h=this.h;this.o=this.o}
I.prototype.h=!1;I.prototype.dispose=function(){this.h||(this.h=!0,this.G())};
function Xd(a,b){a.h?b():(a.o||(a.o=[]),a.o.push(b))}
I.prototype.G=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function Yd(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Yd.prototype.stopPropagation=function(){this.j=!0};
Yd.prototype.preventDefault=function(){this.defaultPrevented=!0};function Zd(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=$d(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ae[c])c=ae[c];else{c=String(c);if(!ae[c]){var f=/function\s+([^\(]+)/m.exec(c);ae[c]=f?f[1]:"[Anonymous]"}c=ae[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function $d(a,b){b||(b={});b[be(a)]=!0;var c=a.stack||"";(a=a.wb)&&!b[be(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=$d(a,b));return c}
function be(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ae={};var ce=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ja,b),y.removeEventListener("test",Ja,b)}catch(c){}return a}();function de(a,b){Yd.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
D(de,Yd);var ee={2:"touch",3:"pen",4:"mouse"};
de.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(tc){a:{try{pc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ee[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&de.S.preventDefault.call(this)};
de.prototype.stopPropagation=function(){de.S.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
de.prototype.preventDefault=function(){de.S.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var fe="closure_listenable_"+(1E6*Math.random()|0);var ge=0;function he(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ba=e;this.key=++ge;this.sa=this.xa=!1}
function ie(a){a.sa=!0;a.listener=null;a.proxy=null;a.src=null;a.Ba=null}
;function je(a){this.src=a;this.listeners={};this.h=0}
je.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ke(a,b,d,e);-1<g?(b=a[g],c||(b.xa=!1)):(b=new he(b,this.src,f,!!d,e),b.xa=c,a.push(b));return b};
je.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ke(e,b,c,d);return-1<b?(ie(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function le(a,b){var c=b.type;c in a.listeners&&fb(a.listeners[c],b)&&(ie(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ke(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.sa&&f.listener==b&&f.capture==!!c&&f.Ba==d)return e}return-1}
;var me="closure_lm_"+(1E6*Math.random()|0),ne={},oe=0;function pe(a,b,c,d,e){if(d&&d.once)qe(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)pe(a,b[f],c,d,e);else c=re(c),a&&a[fe]?a.T(b,c,Oa(d)?!!d.capture:!!d,e):se(a,b,c,!1,d,e)}
function se(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=te(a);h||(a[me]=h=new je(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=ue();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ce||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ve(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");oe++}}
function ue(){function a(c){return b.call(a.src,a.listener,c)}
var b=we;return a}
function qe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)qe(a,b[f],c,d,e);else c=re(c),a&&a[fe]?a.i.add(String(b),c,!0,Oa(d)?!!d.capture:!!d,e):se(a,b,c,!0,d,e)}
function xe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)xe(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=re(c),a&&a[fe])?a.i.remove(String(b),c,d,e):a&&(a=te(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ke(b,c,d,e)),(c=-1<a?b[a]:null)&&ye(c))}
function ye(a){if("number"!==typeof a&&a&&!a.sa){var b=a.src;if(b&&b[fe])le(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ve(c),d):b.addListener&&b.removeListener&&b.removeListener(d);oe--;(c=te(b))?(le(c,a),0==c.h&&(c.src=null,b[me]=null)):ie(a)}}}
function ve(a){return a in ne?ne[a]:ne[a]="on"+a}
function we(a,b){if(a.sa)a=!0;else{b=new de(b,this);var c=a.listener,d=a.Ba||a.src;a.xa&&ye(a);a=c.call(d,b)}return a}
function te(a){a=a[me];return a instanceof je?a:null}
var ze="__closure_events_fn_"+(1E9*Math.random()>>>0);function re(a){if("function"===typeof a)return a;a[ze]||(a[ze]=function(b){return a.handleEvent(b)});
return a[ze]}
;function J(){I.call(this);this.i=new je(this);this.R=this;this.F=null}
D(J,I);J.prototype[fe]=!0;J.prototype.addEventListener=function(a,b,c,d){pe(this,a,b,c,d)};
J.prototype.removeEventListener=function(a,b,c,d){xe(this,a,b,c,d)};
function Ae(a,b){var c=a.F;if(c){var d=[];for(var e=1;c;c=c.F)d.push(c),++e}a=a.R;c=b.type||b;"string"===typeof b?b=new Yd(b,a):b instanceof Yd?b.target=b.target||a:(e=b,b=new Yd(c,a),sb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Be(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Be(g,c,!0,b)&&e,b.j||(e=Be(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Be(g,c,!1,b)&&e}
J.prototype.G=function(){J.S.G.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ie(d[e]);delete a.listeners[c];a.h--}}this.F=null};
J.prototype.T=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Be(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.sa&&g.capture==c){var h=g.listener,k=g.Ba||g.src;g.xa&&le(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ce(a){var b,c;J.call(this);var d=this;this.B=this.l=0;this.P=null!==a&&void 0!==a?a:{L:function(e,f){return setTimeout(e,f)},
aa:clearTimeout};this.j=null!==(c=null===(b=window.navigator)||void 0===b?void 0:b.onLine)&&void 0!==c?c:!0;this.m=function(){return x(function(e){return w(e,De(d),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.B||Ee(this)}
v(Ce,J);Ce.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.P.aa(this.B);delete Ce.h};
Ce.prototype.I=function(){return this.j};
function Ee(a){a.B=a.P.L(function(){var b;return x(function(c){if(1==c.h)return a.j?(null===(b=window.navigator)||void 0===b?0:b.onLine)?c.A(3):w(c,De(a),3):w(c,De(a),3);Ee(a);c.h=0})},3E4)}
function De(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f;return x(function(g){switch(g.h){case 1:return d=window.AbortController?new window.AbortController:void 0,e=null===d||void 0===d?void 0:d.signal,f=!1,ra(g,2,3),d&&(a.l=a.P.L(function(){d.abort()},b||2E4)),w(g,fetch("/generate_204",{method:"HEAD",
signal:e}),5);case 5:f=!0;case 3:ua(g);a.u=void 0;a.l&&(a.P.aa(a.l),a.l=0);f!==a.j&&(a.j=f,a.j?Ae(a,"networkstatus-online"):Ae(a,"networkstatus-offline"));c(f);va(g);break;case 2:ta(g),f=!1,g.A(3)}})})}
;function Fe(){this.data_=[];this.h=-1}
Fe.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
Fe.prototype.get=function(a){return!!this.data_[a]};
function Ge(a){-1==a.h&&(a.h=db(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function He(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
He.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Ie(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Je;
function Ke(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=yd(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ua(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.cb;c.cb=null;e()}};
return function(e){d.next={cb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function Le(){this.i=this.h=null}
Le.prototype.add=function(a,b){var c=Me.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Le.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Me=new He(function(){return new Ne},function(a){return a.reset()});
function Ne(){this.next=this.scope=this.h=null}
Ne.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Ne.prototype.reset=function(){this.next=this.scope=this.h=null};function Oe(a,b){Pe||Qe();Re||(Pe(),Re=!0);Se.add(a,b)}
var Pe;function Qe(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);Pe=function(){a.then(Te)}}else Pe=function(){var b=Te;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!G("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(Je||(Je=Ke()),Je(b)):y.setImmediate(b)}}
var Re=!1,Se=new Le;function Te(){for(var a;a=Se.remove();){try{a.h.call(a.scope)}catch(b){nc(b)}Ie(Me,a)}Re=!1}
;function Ue(a,b){this.h=a[y.Symbol.iterator]();this.i=b;this.j=0}
Ue.prototype[Symbol.iterator]=function(){return this};
Ue.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function Ve(a,b){return new Ue(a,b)}
;function We(){this.blockSize=-1}
;function Xe(){this.blockSize=-1;this.blockSize=64;this.h=[];this.o=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
D(Xe,We);Xe.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Ye(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Xe.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)Ye(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Ye(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Ye(this,e);f=0;break}}this.i=f;this.l+=b}};
Xe.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;Ye(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Ze(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function $e(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function af(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ze(a).match(/\S+/g)||[],b=0<=ab(a,b));return b}
function bf(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):af(a,"inverted-hdpi")&&$e(a,Array.prototype.filter.call(a.classList?a.classList:Ze(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var cf="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function df(){}
df.prototype.U=function(){throw cf;};
df.prototype.next=function(){return ef};
var ef={done:!0,value:void 0};function ff(a){return{value:a,done:!1}}
function gf(a){if(a.done)throw cf;return a.value}
df.prototype.O=function(){return this};function hf(a){if(a instanceof jf||a instanceof kf||a instanceof lf)return a;if("function"==typeof a.U)return new jf(function(){return mf(a)});
if("function"==typeof a[Symbol.iterator])return new jf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.O)return new jf(function(){return mf(a.O())});
throw Error("Not an iterator or iterable.");}
function mf(a){if(!(a instanceof df))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.U();break}catch(d){if(d!==cf)throw d;b=!0}return{value:c,done:b}}}}
function jf(a){this.h=a}
jf.prototype.O=function(){return new kf(this.h())};
jf.prototype[Symbol.iterator]=function(){return new lf(this.h())};
jf.prototype.i=function(){return new lf(this.h())};
function kf(a){this.h=a}
v(kf,df);kf.prototype.U=function(){var a=this.h.next();if(a.done)throw cf;return a.value};
kf.prototype.next=function(){return this.h.next()};
kf.prototype[Symbol.iterator]=function(){return new lf(this.h)};
kf.prototype.i=function(){return new lf(this.h)};
function lf(a){jf.call(this,function(){return a});
this.j=a}
v(lf,jf);lf.prototype.next=function(){return this.j.next()};function nf(a,b){this.i={};this.h=[];this.ga=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof nf)for(c=of(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function of(a){pf(a);return a.h.concat()}
m=nf.prototype;m.has=function(a){return qf(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||rf;pf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function rf(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.ga=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return qf(this.i,a)?(delete this.i[a],--this.size,this.ga++,this.h.length>2*this.size&&pf(this),!0):!1};
function pf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];qf(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],qf(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return qf(this.i,a)?this.i[a]:b};
m.set=function(a,b){qf(this.i,a)||(this.size+=1,this.h.push(a),this.ga++);this.i[a]=b};
m.forEach=function(a,b){for(var c=of(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new nf(this)};
m.keys=function(){return hf(this.O(!0)).i()};
m.values=function(){return hf(this.O(!1)).i()};
m.entries=function(){var a=this;return Ve(this.keys(),function(b){return[b,a.get(b)]})};
m.O=function(a){pf(this);var b=0,c=this.ga,d=this,e=new df;e.next=function(){if(c!=d.ga)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return ef;var g=d.h[b++];return ff(a?g:d.i[g])};
var f=e.next;e.U=function(){return gf(f.call(e))};
return e};
function qf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function sf(a){tf();return Db(a)}
var tf=Ja;function uf(a){var b=[];vf(new wf,a,b);return b.join("")}
function wf(){}
function vf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),vf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),xf(d,c),c.push(":"),vf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":xf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var yf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},zf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function xf(a,b){b.push('"',a.replace(zf,function(c){var d=yf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),yf[c]=d);return d}),'"')}
;function Af(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Bf(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.o=this.m=!1;if(a!=Ja)try{var b=this;a.call(void 0,function(c){Cf(b,2,c)},function(c){Cf(b,3,c)})}catch(c){Cf(this,3,c)}}
function Df(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Df.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Ef=new He(function(){return new Df},function(a){a.reset()});
function Ff(a,b,c){var d=Ef.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Gf(a){return new Bf(function(b,c){c(a)})}
Bf.prototype.then=function(a,b,c){return If(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Bf.prototype.$goog_Thenable=!0;function Jf(a,b){return If(a,null,b,void 0)}
Bf.prototype.cancel=function(a){if(0==this.h){var b=new Kf(a);Oe(function(){Lf(this,b)},this)}};
function Lf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Lf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Mf(c),Nf(c,e,3,b)))}a.j=null}else Cf(a,3,b)}
function Of(a,b){a.i||2!=a.h&&3!=a.h||Pf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function If(a,b,c,d){var e=Ff(null,null,null);e.h=new Bf(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Kf?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Of(a,e);return e.h}
Bf.prototype.F=function(a){this.h=0;Cf(this,2,a)};
Bf.prototype.H=function(a){this.h=0;Cf(this,3,a)};
function Cf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.F,f=a.H;if(d instanceof Bf){Of(d,Ff(e||Ja,f||null,a));var g=!0}else if(Af(d))d.then(e,f,a),g=!0;else{if(Oa(d))try{var h=d.then;if("function"===typeof h){Qf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.u=c,a.h=b,a.j=null,Pf(a),3!=b||c instanceof Kf||Rf(a,c))}}
function Qf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Pf(a){a.m||(a.m=!0,Oe(a.B,a))}
function Mf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Bf.prototype.B=function(){for(var a;a=Mf(this);)Nf(this,a,this.h,this.u);this.m=!1};
function Nf(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,Sf(b,c,d);else try{b.j?b.i.call(b.context):Sf(b,c,d)}catch(e){Tf.call(null,e)}Ie(Ef,b)}
function Sf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Rf(a,b){a.o=!0;Oe(function(){a.o&&Tf.call(null,b)})}
var Tf=nc;function Kf(a){Ya.call(this,a)}
D(Kf,Ya);Kf.prototype.name="cancel";function K(a){I.call(this);this.u=1;this.l=[];this.m=0;this.i=[];this.j={};this.B=!!a}
D(K,I);m=K.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function Uf(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.oa(b)}}
m.oa=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ja):(c&&fb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.ha=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];Vf(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.oa(c)}}return 0!=e}return!1};
function Vf(a,b,c){Oe(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.oa,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.G=function(){K.S.G.call(this);this.clear();this.l.length=0};function Wf(a){this.h=a}
Wf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,uf(b))};
Wf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Wf.prototype.remove=function(a){this.h.remove(a)};function Xf(a){this.h=a}
D(Xf,Wf);function Yf(a){this.data=a}
function Zf(a){return void 0===a||a instanceof Yf?a:new Yf(a)}
Xf.prototype.set=function(a,b){Xf.S.set.call(this,a,Zf(b))};
Xf.prototype.i=function(a){a=Xf.S.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Xf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function $f(a){this.h=a}
D($f,Xf);$f.prototype.set=function(a,b,c){if(b=Zf(b)){if(c){if(c<Date.now()){$f.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}$f.S.set.call(this,a,b)};
$f.prototype.i=function(a){var b=$f.S.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())$f.prototype.remove.call(this,a);else return b}};function ag(){}
;function bg(){}
D(bg,ag);bg.prototype[Symbol.iterator]=function(){return hf(this.O(!0)).i()};
bg.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function cg(a){this.h=a}
D(cg,bg);m=cg.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.O=function(a){var b=0,c=this.h,d=new df;d.next=function(){if(b>=c.length)return ef;var f=c.key(b++);if(a)return ff(f);f=c.getItem(f);if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return ff(f)};
var e=d.next;d.U=function(){return gf(e.call(d))};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function dg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
D(dg,cg);function eg(a,b){this.i=a;this.h=null;var c;if(c=rc)c=!(9<=Number(Fc));if(c){fg||(fg=new nf);this.h=fg.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),fg.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
D(eg,bg);var gg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},fg=null;function hg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return gg[b]})}
m=eg.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(hg(a),b);ig(this)};
m.get=function(a){a=this.h.getAttribute(hg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(hg(a));ig(this)};
m.O=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new df;d.next=function(){if(b>=c.length)return ef;var f=c[b++];if(a)return ff(decodeURIComponent(f.nodeName.replace(/\./g,"%")).substr(1));f=f.nodeValue;if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return ff(f)};
var e=d.next;d.U=function(){return gf(e.call(d))};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ig(this)};
function ig(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function jg(a,b){this.i=a;this.h=b+"::"}
D(jg,bg);jg.prototype.set=function(a,b){this.i.set(this.h+a,b)};
jg.prototype.get=function(a){return this.i.get(this.h+a)};
jg.prototype.remove=function(a){this.i.remove(this.h+a)};
jg.prototype.O=function(a){var b=this.i.O(!0),c=this,d=new df;d.next=function(){try{var f=b.U()}catch(g){if(g===cf)return ef;throw g;}for(;f.substr(0,c.h.length)!=c.h;)try{f=b.U()}catch(g){if(g===cf)return ef;throw g;}return ff(a?f.substr(c.h.length):c.i.get(f))};
var e=d.next;d.U=function(){return gf(e.call(d))};
return d};function kg(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;function lg(a){$c.call(this,a)}
v(lg,$c);var mg,ng,og,pg=y.window,qg=(null===(mg=null===pg||void 0===pg?void 0:pg.yt)||void 0===mg?void 0:mg.config_)||(null===(ng=null===pg||void 0===pg?void 0:pg.ytcfg)||void 0===ng?void 0:ng.data_)||{},rg=(null===(og=null===pg||void 0===pg?void 0:pg.ytcfg)||void 0===og?void 0:og.obfuscatedData_)||[];function sg(){lg.apply(this,arguments)}
v(sg,lg);new sg(rg);B("yt.config_",qg,void 0);B("yt.configJspb_",rg,void 0);function L(){kg(qg,arguments)}
function F(a,b){return a in qg?qg[a]:b}
;var tg=[];function ug(a){tg.forEach(function(b){return b(a)})}
function vg(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){wg(b)}}:a}
function wg(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=F("ERRORS",[]),e.push([a,"ERROR",b,c,d]),L("ERRORS",e));ug(a)}
function xg(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=F("ERRORS",[]),e.push([a,"WARNING",b,c,d]),L("ERRORS",e))}
;var yg=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};B("yt.msgs_",yg,void 0);function zg(a){kg(yg,arguments)}
;function M(a){a=Ag(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Bg(a,b){a=Ag(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Ag(a){var b=F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:F("EXPERIMENT_FLAGS",{})[a]}
;var Cg={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},Dg={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var Eg=0,Fg=uc?"webkit":tc?"moz":rc?"ms":qc?"o":"";B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++Eg},void 0);var Gg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Hg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Gg||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Ig(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Hg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Hg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Hg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var kb=y.ytEventsEventsListeners||{};B("ytEventsEventsListeners",kb,void 0);var Jg=y.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",Jg,void 0);
function Kg(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&ob(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Lg=$a(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Mg(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Kg(a,b,c,d);if(e)return e;e=++Jg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Hg(h);if(!Ad(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Hg(h);
h.currentTarget=a;return c.call(a,h)};
g=vg(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Lg()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);kb[e]=[a,b,c,g,d];return e}
function Ng(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in kb){var c=kb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Lg()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete kb[b]}}))}
;var Og=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Pg(a,b){"function"===typeof a&&(a=vg(a));return window.setTimeout(a,b)}
function Qg(a){window.clearTimeout(a)}
;function Rg(a){this.F=a;this.i=null;this.m=0;this.B=null;this.u=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.N=Mg(window,"mousemove",Ua(this.R,this));a=Ua(this.H,this);"function"===typeof a&&(a=vg(a));this.Y=window.setInterval(a,25)}
D(Rg,I);Rg.prototype.R=function(a){void 0===a.h&&Ig(a);var b=a.h;void 0===a.i&&Ig(a);this.i=new sd(b,a.i)};
Rg.prototype.H=function(){if(this.i){var a=Og();if(0!=this.m){var b=this.B,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.F();this.u=d}this.m=a;this.B=this.i;this.l=(this.l+1)%4}};
Rg.prototype.G=function(){window.clearInterval(this.Y);Ng(this.N)};function Sg(){}
function Tg(a,b){return Ug(a,0,b)}
Sg.prototype.L=function(a,b){return Ug(a,1,b)};
function Vg(a,b){Ug(a,2,b)}
;function Wg(){Sg.apply(this,arguments)}
v(Wg,Sg);function Xg(){Wg.h||(Wg.h=new Wg);return Wg.h}
function Ug(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Pg(a,c||0)}
Wg.prototype.aa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):Qg(a)}};
Wg.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
Wg.prototype.pause=function(){var a=C("yt.scheduler.instance.pause");a&&a()};var Yg=Xg();var Zg={};
function $g(a){var b=void 0===a?{}:a;a=void 0===b.Nb?!1:b.Nb;b=void 0===b.Ab?!0:b.Ab;if(null==C("_lact",window)){var c=parseInt(F("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&ah();Mg(document,"keydown",ah);Mg(document,"keyup",ah);Mg(document,"mousedown",ah);Mg(document,"mouseup",ah);a?Mg(window,"touchmove",function(){bh("touchmove",200)},{passive:!0}):(Mg(window,"resize",function(){bh("resize",200)}),b&&Mg(window,"scroll",function(){bh("scroll",200)}));
new Rg(function(){bh("mouse",100)});
Mg(document,"touchstart",ah,{passive:!0});Mg(document,"touchend",ah,{passive:!0})}}
function bh(a,b){Zg[a]||(Zg[a]=!0,Yg.L(function(){ah();Zg[a]=!1},b))}
function ah(){null==C("_lact",window)&&$g();var a=Date.now();B("_lact",a,window);-1==C("_fact",window)&&B("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function ch(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function dh(){var a=eh;C("yt.ads.biscotti.getId_")||B("yt.ads.biscotti.getId_",a,void 0)}
function fh(a){B("yt.ads.biscotti.lastId_",a,void 0)}
;var gh=/^[\w.]*$/,hh={q:!0,search_query:!0};function ih(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=jh(f[0]||""),h=jh(f[1]||"");g in c?Array.isArray(c[g])?hb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(ih);k.args=[{key:l,value:f[1],query:a,method:kh==n?"unchanged":n}];hh.hasOwnProperty(l)||xg(k)}}return c}
var kh=String(ih);function lh(a){var b=[];ib(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function mh(a){"?"==a.charAt(0)&&(a=a.substr(1));return ih(a,"&")}
function nh(){var a=window.location.href;return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),mh(1<a.length?a[1]:a[0])):{}}
function oh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=mh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return lc(a,e)+d}
function ph(a){if(!b)var b=window.location.href;var c=a.match(gc)[1]||null,d=ic(a);c&&d?(a=a.match(gc),b=b.match(gc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ic(b)==d&&(Number(b.match(gc)[4]||null)||null)==(Number(a.match(gc)[4]||null)||null):!0;return a}
function jh(a){return a&&a.match(gh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function qh(a){var b=rh;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Id;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Na){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?id:g;try{var h=g.history.length}catch(Na){h=0}e.u_his=h;var k;e.u_h=null==(k=id.screen)?void 0:k.height;var l;e.u_w=null==(l=id.screen)?void 0:l.width;var n;e.u_ah=null==(n=id.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=id.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=id.screen)?void 0:t.colorDepth}catch(Na){}h=b.h;try{var q=h.screenX;var z=h.screenY}catch(Na){}try{var A=h.outerWidth;var H=h.outerHeight}catch(Na){}try{var P=h.innerWidth;var Q=h.innerHeight}catch(Na){}try{var S=h.screenLeft;var Ec=h.screenTop}catch(Na){}try{P=h.innerWidth,Q=h.innerHeight}catch(Na){}try{var Hf=h.screen.availWidth;var on=h.screen.availTop}catch(Na){}q=[S,Ec,q,z,Hf,on,A,H,P,Q];z=b.h.top;try{var Jb=(z||window).document,za=
"CSS1Compat"==Jb.compatMode?Jb.documentElement:Jb.body;var Ba=(new td(za.clientWidth,za.clientHeight)).round()}catch(Na){Ba=new td(-12245933,-12245933)}Jb=Ba;Ba={};za=new Fe;y.SVGElement&&y.document.createElementNS&&za.set(0);z=Fd();z["allow-top-navigation-by-user-activation"]&&za.set(1);z["allow-popups-to-escape-sandbox"]&&za.set(2);y.crypto&&y.crypto.subtle&&za.set(3);y.TextDecoder&&y.TextEncoder&&za.set(4);za=Ge(za);Ba.bc=za;Ba.bih=Jb.height;Ba.biw=Jb.width;Ba.brdim=q.join();b=b.i;b=(Ba.vis={visible:1,
hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Ba.wgl=!!id.WebGLRenderingContext,Ba);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var rh=new function(){var a=window.document;this.h=window;this.i=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return lh(qh(a))},void 0);Date.now();var sh="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function th(){if(!sh)return null;var a=sh();return"open"in a?a:null}
function uh(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var vh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},wh="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa("client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" "))),xh=!1;
function yh(a,b){b=void 0===b?{}:b;var c=ph(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in vh){var f=F(vh[e]);!f||!c&&ic(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!ic(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!ic(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!ic(a))b["X-YouTube-Ad-Signals"]=lh(qh(void 0));return b}
function zh(a){var b=window.location.search,c=ic(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!ph(a)||(c=document.location.hostname);var d=hc(a.match(gc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=mh(b),f={};E(wh,function(g){e[g]&&(f[g]=e[g])});
return oh(a,f||{},!1)}
function Ah(a,b){var c=b.format||"JSON";a=Bh(a,b);var d=Ch(a,b),e=!1,f=Dh(a,function(k){if(!e){e=!0;h&&Qg(h);var l=uh(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=Eh(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Pg(function(){e||(e=!0,f.abort(),Qg(h),g.call(b.context||y,f))},b.timeout)}return f}
function Bh(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=F("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=oh(a,b||{},!0);return a}
function Ch(a,b){var c=F("XSRF_FIELD_NAME",void 0),d=F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=F("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ic(a)&&!b.withCredentials&&ic(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=mh(e),sb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):kc(e));f=e||f&&!lb(f);!xh&&f&&
"POST"!=b.method&&(xh=!0,wg(Error("AJAX request with postData should use POST")));return e}
function Eh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,xg(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Fh(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=Gh(g)})}d&&Hh(e);
return e}
function Hh(a){if(Oa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;xb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=$b(a[b],null);a[c]=d}else Hh(a[b])}}
function Fh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Gh(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Dh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&vg(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=th();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=zh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=yh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Ih=Gc||Hc;function Jh(a){var b=Ub;return b?0<=b.toLowerCase().indexOf(a):!1}
;var Kh={},Lh=0;
function Mh(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Jh("cobalt")){if(a){a instanceof Nb||(a="object"==typeof a&&a.ca?a.ba():String(a),Sb.test(a)?a=new Nb(a,Ob):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Rb))&&Qb.test(b[1])?new Nb(a,Ob):null));b=Pb(a||Tb);if("about:invalid#zClosurez"===b||b.startsWith("data"))a="";else{if(b instanceof Zb)a=b;else{var f="object"==typeof b;a=null;f&&b.Pa&&(a=b.La());b=f&&b.ca?b.ba():String(b);Mb.test(b)&&(-1!=b.indexOf("&")&&(b=b.replace(Fb,"&amp;")),-1!=
b.indexOf("<")&&(b=b.replace(Gb,"&lt;")),-1!=b.indexOf(">")&&(b=b.replace(Hb,"&gt;")),-1!=b.indexOf('"')&&(b=b.replace(Ib,"&quot;")),-1!=b.indexOf("'")&&(b=b.replace(Kb,"&#39;")),-1!=b.indexOf("\x00")&&(b=b.replace(Lb,"&#0;")));a=$b(b,a)}a instanceof Zb&&a.constructor===Zb?a=a.h:(La(a),a="type_error:SafeHtml");a=encodeURIComponent(String(uf(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=xd("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||
a.document).body.appendChild(a))}}else if(e)Dh(a,b,"POST",e,d);else if(F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Dh(a,b,"GET","",d);else{b:{try{var g=new Za({url:a});if(g.j&&g.i||g.l){var h=hc(a.match(gc)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(mc);d:{for(c=0;0<=(c=a.indexOf("ri",c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var t=c;break d}}c+=3}t=-1}if(0>t)var q=null;else{var z=a.indexOf("&",t);if(0>z||z>l)z=l;t+=3;
q=decodeURIComponent(a.substr(t,z-t).replace(/\+/g," "))}k="1"!==q}f=!k;break b}}catch(A){}f=!1}f?Nh(a)?(b&&b(),f=!0):f=!1:f=!1;f||Oh(a,b)}}
function Ph(a){var b=void 0===b?"":b;Nh(a,b)||Mh(a,void 0,void 0,void 0,b)}
function Nh(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Oh(a,b){var c=new Image,d=""+Lh++;Kh[d]=c;c.onload=c.onerror=function(){b&&Kh[d]&&b();delete Kh[d]};
c.src=a}
;var Qh=y.ytPubsubPubsubInstance||new K,Rh=y.ytPubsubPubsubSubscribedKeys||{},Sh=y.ytPubsubPubsubTopicToKeys||{},Th=y.ytPubsubPubsubIsSynchronous||{};function Uh(a,b){var c=Vh();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Rh[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Th[a]?f():Pg(f,0)}catch(g){wg(g)}},void 0);
Rh[d]=!0;Sh[a]||(Sh[a]=[]);Sh[a].push(d);return d}return 0}
function Wh(a){var b=Vh();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),E(a,function(c){b.unsubscribeByKey(c);delete Rh[c]}))}
function Xh(a,b){var c=Vh();c&&c.publish.apply(c,arguments)}
function Yh(a){var b=Vh();if(b)if(b.clear(a),a)Zh(a);else for(var c in Sh)Zh(c)}
function Vh(){return y.ytPubsubPubsubInstance}
function Zh(a){Sh[a]&&(a=Sh[a],E(a,function(b){Rh[b]&&delete Rh[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.oa;K.prototype.publish=K.prototype.ha;K.prototype.clear=K.prototype.clear;B("ytPubsubPubsubInstance",Qh,void 0);B("ytPubsubPubsubTopicToKeys",Sh,void 0);B("ytPubsubPubsubIsSynchronous",Th,void 0);B("ytPubsubPubsubSubscribedKeys",Rh,void 0);var $h=window,N=$h.ytcsi&&$h.ytcsi.now?$h.ytcsi.now:$h.performance&&$h.performance.timing&&$h.performance.now&&$h.performance.timing.navigationStart?function(){return $h.performance.timing.navigationStart+$h.performance.now()}:function(){return(new Date).getTime()};var ai=Bg("initial_gel_batch_timeout",2E3),bi=Math.pow(2,16)-1,ci=void 0,di=0,ei=0,fi=0,gi=!0,hi=y.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",hi,void 0);var ii=y.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",ii,void 0);
function ji(a,b){if("log_event"===a.endpoint){var c=ki(a),d=hi.get(c)||[];hi.set(c,d);d.push(a.payload);b&&(ci=new b);a=Bg("tvhtml5_logging_max_batch")||Bg("web_logging_max_batch")||100;b=N();d.length>=a?li({writeThenSend:!0},M("flush_only_full_queue")?c:void 0):10<=b-fi&&(mi(),fi=b)}}
function ni(a,b){if("log_event"===a.endpoint){var c=ki(a),d=new Map;d.set(c,[a.payload]);b&&(ci=new b);return new Bf(function(e){ci&&ci.isReady()?oi(d,e,{bypassNetworkless:!0},!0):e()})}}
function ki(a){var b="";if(a.Ka)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);ii[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function li(a,b){a=void 0===a?{}:a;new Bf(function(c){Qg(di);Qg(ei);ei=0;if(ci&&ci.isReady())if(void 0!==b){var d=new Map,e=hi.get(b)||[];d.set(b,e);oi(d,c,a);hi.delete(b)}else oi(hi,c,a),hi.clear();else mi(),c()})}
function mi(){M("web_gel_timeout_cap")&&!ei&&(ei=Pg(function(){li({writeThenSend:!0})},6E4));
Qg(di);var a=F("LOGGING_BATCH_TIMEOUT",Bg("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&gi&&(a=ai);di=Pg(function(){li({writeThenSend:!0})},a)}
function oi(a,b,c,d){var e=ci;c=void 0===c?{}:c;var f=Math.round(N()),g=a.size;a=u(a);for(var h=a.next();!h.done;h=a.next()){var k=u(h.value);h=k.next().value;var l=k=k.next().value;k=qb({context:pi(e.config_||qi())});k.events=l;(l=ii[h])&&ri(k,h,l);delete ii[h];h="visitorOnlyApprovedKey"===h;si(k,f,h);M("always_send_and_write")&&(c.writeThenSend=!1);M("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&Ph("/generate_204");ti(e,"log_event",k,ui(c,h,function(){g--;
g||b()},function(){g--;
g||b()},d));
gi=!1}}
function ui(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,lb:a,Ka:b,Tm:!!e}}
function si(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=F("EVENT_ID",void 0))&&((c=F("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*bi/2)),c++,c>bi&&(c=1),L("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function ri(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var vi=y.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",vi,void 0);
function wi(a,b,c,d){d=void 0===d?{}:d;if(M("lr_drop_other_and_business_payloads")){if(Dg[a]||Cg[a])return}else if(M("lr_drop_other_payloads")&&Dg[a])return;var e={},f=Math.round(d.timestamp||N());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=ch();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.fa&&(a=e.context,b=d.fa,vi[b]=b in vi?vi[b]+1:0,a.sequence={index:vi[b],groupKey:b},d.Bb&&delete vi[d.fa]);(d.en?ni:ji)({endpoint:"log_event",payload:e,
cttAuthInfo:d.cttAuthInfo,Ka:d.Ka},c)}
;function xi(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function yi(a,b,c,d,e){Qd.set(""+a,b,{Sa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var zi=C("ytglobal.prefsUserPrefsPrefs_")||{};B("ytglobal.prefsUserPrefsPrefs_",zi,void 0);function Ai(){this.h=F("ALT_PREF_COOKIE_NAME","PREF");this.i=F("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Qd.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(zi[d]=c.toString())}}}
Ai.prototype.get=function(a,b){Bi(a);Ci(a);a=void 0!==zi[a]?zi[a].toString():null;return null!=a?a:b?b:""};
Ai.prototype.set=function(a,b){Bi(a);Ci(a);if(null==b)throw Error("ExpectedNotNull");zi[a]=b.toString()};
Ai.prototype.remove=function(a){Bi(a);Ci(a);delete zi[a]};
Ai.prototype.clear=function(){for(var a in zi)delete zi[a]};
function Ci(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Bi(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Di(a){a=void 0!==zi[a]?zi[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ka(Ai);var Ei={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Fi={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Gi(){var a=y.navigator;return a?a.connection:void 0}
;function Hi(){return"INNERTUBE_API_KEY"in qg&&"INNERTUBE_API_VERSION"in qg}
function qi(){return{innertubeApiKey:F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:F("INNERTUBE_API_VERSION",void 0),Db:F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Qa:F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Wm:F("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Fb:F("INNERTUBE_CONTEXT_HL",void 0),Eb:F("INNERTUBE_CONTEXT_GL",void 0),Gb:F("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ib:!!F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Hb:!!F("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:F("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function pi(a){var b={client:{hl:a.Fb,gl:a.Eb,clientName:a.Qa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Db}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=F("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=F("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=F("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===
d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=a.Qa;if(("WEB"===f||"MWEB"===f||1===f||2===f)&&b){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=xi()}g=a.Qa;if(("WEB_REMIX"===g||76===g)&&!M("music_web_display_mode_killswitch")&&b){var h;b.client.kb=null!=(h=b.client.kb)?h:{};b.client.kb.webDisplayMode=xi()}var k;if(M("web_log_memory_total_kbytes")&&(null==(k=y.navigator)?0:k.deviceMemory)){var l;
h=null==(l=y.navigator)?void 0:l.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*h)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);a:{if(l=Gi()){a=Ei[l.type||"unknown"]||"CONN_UNKNOWN";l=Ei[l.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==l&&(a=l);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==l){a=l;break a}}a=void 0}a&&b&&(b.client.connectionType=a);M("web_log_effective_connection_type")&&
(a=Gi(),a=null!==a&&void 0!==a&&a.effectiveType?Fi.hasOwnProperty(a.effectiveType)?Fi[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&b&&(b.client.effectiveConnectionType=a));F("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:F("DELEGATED_SESSION_ID")});a=Object;l=a.assign;h=b.client;k={};g=u(Object.entries(mh(F("DEVICE",""))));for(f=g.next();!f.done;f=g.next())e=u(f.value),f=e.next().value,e=e.next().value,"cbrand"===f?k.deviceMake=e:"cmodel"===f?k.deviceModel=
e:"cbr"===f?k.browserName=e:"cbrver"===f?k.browserVersion=e:"cos"===f?k.osName=e:"cosver"===f?k.osVersion=e:"cplatform"===f&&(k.platform=e);b.client=l.call(a,h,k);return b}
function Ii(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Rm||F("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Qm:b=Ud([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=F("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=F("DELEGATED_SESSION_ID")));return d}
;function Ji(a){a=Object.assign({},a);delete a.Authorization;var b=Ud();if(b){var c=new Xe;c.update(F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Lc(c.digest(),3)}return a}
;function Ki(a){var b=new dg;(b=b.isAvailable()?a?new jg(b,a):b:null)||(a=new eg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new $f(a):null;this.i=document.domain||window.location.hostname}
Ki.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(uf(b))}catch(f){return}else e=escape(b);yi(a,e,c,this.i)};
Ki.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Qd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ki.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Qd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Li;function Mi(){Li||(Li=new Ki("yt.innertube"));return Li}
function Ni(a,b,c,d){if(d)return null;d=Mi().get("nextId",!0)||1;var e=Mi().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ji(c),requestTime:Math.round(N())};Mi().set("nextId",d+1,86400,!0);Mi().set("requests",e,86400,!0);return d}
function Oi(a){var b=Mi().get("requests",!0)||{};delete b[a];Mi().set("requests",b,86400,!0)}
function Pi(a){var b=Mi().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(N())-d.requestTime)){var e=d.authState,f=Ji(Ii(!1));ob(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(N())),ti(a,d.method,e,{}));delete b[c]}}Mi().set("requests",b,86400,!0)}}
;var Qi=function(){var a;return function(){a||(a=new Ki("ytidb"));return a}}();
function Ri(){var a;return null===(a=Qi())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Si=[],Ti=!1;function Ui(a){Ti||(Si.push({type:"ERROR",payload:a}),10<Si.length&&Si.shift())}
function Vi(a,b){Ti||(Si.push({type:"EVENT",eventType:a,payload:b}),10<Si.length&&Si.shift())}
;function Wi(a){var b=Ea.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(fa(b))}
v(Wi,Error);function Xi(){try{return Yi(),!0}catch(a){return!1}}
function Yi(){if(void 0!==F("DATASYNC_ID",void 0))return F("DATASYNC_ID",void 0);throw new Wi("Datasync ID not set","unknown");}
;function Zi(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function $i(a){return a.substr(0,a.indexOf(":"))||a}
;var aj={},bj=(aj.AUTH_INVALID="No user identifier specified.",aj.EXPLICIT_ABORT="Transaction was explicitly aborted.",aj.IDB_NOT_SUPPORTED="IndexedDB is not supported.",aj.MISSING_INDEX="Index not created.",aj.MISSING_OBJECT_STORES="Object stores not created.",aj.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",aj.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",aj.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",
aj.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",aj.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",aj.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",aj),cj={},dj=(cj.AUTH_INVALID="ERROR",cj.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",cj.EXPLICIT_ABORT="IGNORED",cj.IDB_NOT_SUPPORTED="ERROR",cj.MISSING_INDEX="WARNING",cj.MISSING_OBJECT_STORES="ERROR",cj.DB_DELETED_BY_MISSING_OBJECT_STORES=
"WARNING",cj.QUOTA_EXCEEDED="WARNING",cj.QUOTA_MAYBE_EXCEEDED="WARNING",cj.UNKNOWN_ABORT="WARNING",cj.INCOMPATIBLE_DB_VERSION="WARNING",cj),ej={},fj=(ej.AUTH_INVALID=!1,ej.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,ej.EXPLICIT_ABORT=!1,ej.IDB_NOT_SUPPORTED=!1,ej.MISSING_INDEX=!1,ej.MISSING_OBJECT_STORES=!1,ej.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,ej.QUOTA_EXCEEDED=!1,ej.QUOTA_MAYBE_EXCEEDED=!0,ej.UNKNOWN_ABORT=!0,ej.INCOMPATIBLE_DB_VERSION=!1,ej);
function O(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?bj[a]:c;d=void 0===d?dj[a]:d;e=void 0===e?fj[a]:e;Wi.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,O.prototype)}
v(O,Wi);function gj(a,b){O.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},bj.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,gj.prototype)}
v(gj,O);function hj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,hj.prototype)}
v(hj,Error);var ij=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function jj(a,b,c,d){b=$i(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof O)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new O("QUOTA_EXCEEDED",a);if(Ic&&"UnknownError"===e.name)return new O("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof hj)return new O("MISSING_INDEX",Object.assign(Object.assign({},a),{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&ij.some(function(f){return e.message.includes(f)}))return new O("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new O("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign(Object.assign({},a),{name:"IdbError",an:e.name})];e.level="WARNING";return e}
function kj(a,b,c){var d=Ri();return new O("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null===d||void 0===d?void 0:d.hasSucceededOnce}})}
;function lj(a){if(!a)throw Error();throw a;}
function mj(a){return a}
function nj(a){this.h=a}
function R(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
R.all=function(a){return new R(new nj(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ja:0};f.ja<a.length;f={ja:f.ja},++f.ja)oj(R.resolve(a[f.ja]).then(function(g){return function(h){d[g.ja]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
R.resolve=function(a){return new R(new nj(function(b,c){a instanceof R?a.then(b,c):b(a)}))};
R.reject=function(a){return new R(new nj(function(b,c){c(a)}))};
R.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:mj,e=null!==b&&void 0!==b?b:lj;return new R(new nj(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){pj(c,c,d,f,g)}),c.onRejected.push(function(){qj(c,c,e,f,g)})):"FULFILLED"===c.state.status?pj(c,c,d,f,g):"REJECTED"===c.state.status&&qj(c,c,e,f,g)}))};
function oj(a,b){a.then(void 0,b)}
function pj(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof R?rj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function qj(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof R?rj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function rj(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof R?rj(a,b,f,d,e):d(f)},function(f){e(f)})}
;function sj(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function tj(a){return new Promise(function(b,c){sj(a,b,c)})}
function T(a){return new R(new nj(function(b,c){sj(a,b,c)}))}
;function uj(a,b){return new R(new nj(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function vj(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(N());this.i=!1}
m=vj.prototype;m.add=function(a,b,c){return wj(this,[a],{mode:"readwrite",M:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return wj(this,[a],{mode:"readwrite",M:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return wj(this,[a],{mode:"readonly",M:!0},function(c){return c.objectStore(a).count(b)})};
function xj(a,b,c){a=a.h.createObjectStore(b,c);return new yj(a)}
m.delete=function(a,b){return wj(this,[a],{mode:"readwrite",M:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return wj(this,[a],{mode:"readonly",M:!0},function(c){return c.objectStore(a).get(b)})};
function zj(a,b){return wj(a,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(c){c=c.objectStore("LogsRequestsStore");return T(c.h.put(b,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function wj(a,b,c,d){var e,f,g,h,k,l,n,p,t,q,z,A;return x(function(H){switch(H.h){case 1:var P={mode:"readonly",M:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?P.mode=c:Object.assign(P,c);e=P;a.transactionCount++;f=e.M?3:1;g=0;case 2:if(h){H.A(3);break}g++;k=Math.round(N());ra(H,4);l=a.h.transaction(b,e.mode);P=new Aj(l);P=Bj(P,d);return w(H,P,6);case 6:return n=H.i,p=Math.round(N()),Cj(a,k,p,g,void 0,b.join(),e),H.return(n);case 4:t=ta(H);q=Math.round(N());z=jj(t,a.h.name,b.join(),a.h.version);
if((A=z instanceof O&&!z.h)||g>=f)Cj(a,k,q,g,z,b.join(),e),h=z;H.A(2);break;case 3:return H.return(Promise.reject(h))}})}
function Cj(a,b,c,d,e,f,g){b=c-b;e?(e instanceof O&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Vi("QUOTA_EXCEEDED",{dbName:$i(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof O&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Vi("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Dj(a,!1,d,f,b,g.tag),Ui(e)):Dj(a,!0,d,f,b,g.tag)}
function Dj(a,b,c,d,e,f){Vi("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function yj(a){this.h=a}
m=yj.prototype;m.add=function(a,b){return T(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return T(this.h.clear()).then(function(){})};
m.count=function(a){return T(this.h.count(a))};
function Ej(a,b){return Fj(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Ej(this,a):T(this.h.delete(a))};
m.get=function(a){return T(this.h.get(a))};
m.index=function(a){try{return new Gj(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new hj(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function Fj(a,b,c){a=a.h.openCursor(b.query,b.direction);return Hj(a).then(function(d){return uj(d,c)})}
function Aj(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=O;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Bj(a,b){var c=new Promise(function(d,e){try{oj(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Aj.prototype.abort=function(){this.h.abort();this.i=!0;throw new O("EXPLICIT_ABORT");};
Aj.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new yj(a),this.j.set(a,b));return b};
function Gj(a){this.h=a}
m=Gj.prototype;m.count=function(a){return T(this.h.count(a))};
m.delete=function(a){return Ij(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return T(this.h.get(a))};
m.getKey=function(a){return T(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function Ij(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Hj(a).then(function(d){return uj(d,c)})}
function Jj(a,b){this.request=a;this.cursor=b}
function Hj(a){return T(a).then(function(b){return b?new Jj(a,b):null})}
m=Jj.prototype;m.advance=function(a){this.cursor.advance(a);return Hj(this.request)};
m.continue=function(a){this.cursor.continue(a);return Hj(this.request)};
m.delete=function(){return T(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return T(this.cursor.update(a))};function Kj(a,b,c){return new Promise(function(d,e){function f(){t||(t=new vj(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.Yb,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&Vi("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:$i(a)});var z=f(),A=new Aj(g.transaction);
n&&n(z,function(H){return q.oldVersion<H&&q.newVersion>=H},A);
A.done.catch(function(H){e(H)})}catch(H){e(H)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){Vi("IDB_UNEXPECTEDLY_CLOSED",{dbName:$i(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Lj(a,b,c){c=void 0===c?{}:c;return Kj(a,b,c)}
function Mj(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return ra(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),w(g,tj(c),4);
if(2!=g.h)return sa(g,0);f=ta(g);throw jj(f,a,"",-1);})}
;function Nj(a){return new Promise(function(b){Vg(function(){b()},a)})}
function Oj(a,b){this.name=a;this.options=b;this.l=!0;this.o=0;this.i=500}
Oj.prototype.j=function(a,b,c){c=void 0===c?{}:c;return Lj(a,b,c)};
Oj.prototype.delete=function(a){a=void 0===a?{}:a;return Mj(this.name,a)};
function Pj(a,b){return new O("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Qj(a,b){if(!b)throw kj("openWithToken",$i(a.name));return a.open()}
Oj.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,q,z;return x(function(A){switch(A.h){case 1:return h=null!==(f=Error().stack)&&void 0!==f?f:"",ra(A,2),w(A,c.j(c.name,c.options.version,e),4);case 4:k=A.i;for(var H=c.options,P=[],Q=u(Object.keys(H.ra)),S=Q.next();!S.done;S=Q.next()){S=S.value;var Ec=H.ra[S],Hf=void 0===Ec.Pb?Number.MAX_VALUE:Ec.Pb;!(k.h.version>=Ec.Ja)||k.h.version>=Hf||k.h.objectStoreNames.contains(S)||P.push(S)}l=P;if(0===l.length){A.A(5);break}n=Object.keys(c.options.ra);
p=k.objectStoreNames();if(!(c.o<Bg("ytidb_remake_db_retries",1))){A.A(6);break}c.o++;if(!M("ytidb_remake_db_enable_backoff_delay")){A.A(7);break}return w(A,Nj(c.i),8);case 8:c.i*=2;case 7:return w(A,c.delete(),9);case 9:return Ui(new O("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:n,foundObjectStores:p})),A.return(a());case 6:throw new gj(p,n);case 5:return A.return(k);case 2:t=ta(A);if(t instanceof DOMException?"VersionError"!==t.name:"DOMError"in self&&t instanceof DOMError?
"VersionError"!==t.name:!(t instanceof Object&&"message"in t)||"An attempt was made to open a database using a lower version than the existing version."!==t.message){A.A(10);break}return w(A,c.j(c.name,void 0,Object.assign(Object.assign({},e),{upgrade:void 0})),11);case 11:q=A.i;z=q.h.version;if(void 0!==c.options.version&&z>c.options.version+1)throw q.close(),c.l=!1,Pj(c,z);return A.return(q);case 10:throw b(),t instanceof Error&&!M("ytidb_async_stack_killswitch")&&(t.stack=t.stack+"\n"+h.substring(h.indexOf("\n")+
1)),jj(t,c.name,"",null!==(g=c.options.version)&&void 0!==g?g:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw Pj(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Yb:b,upgrade:this.options.upgrade};return this.h=d=a()};var Rj=new Oj("YtIdbMeta",{ra:{databases:{Ja:1}},upgrade:function(a,b){b(1)&&xj(a,"databases",{keyPath:"actualName"})}});
function Sj(a,b){var c;return x(function(d){if(1==d.h)return w(d,Qj(Rj,b),2);c=d.i;return d.return(wj(c,["databases"],{M:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return T(f.h.put(a,void 0)).then(function(){})})}))})}
function Tj(a,b){var c;return x(function(d){if(1==d.h)return a?w(d,Qj(Rj,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Uj(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],w(e,Qj(Rj,b),2)):3!=e.h?(d=e.i,w(e,wj(d,["databases"],{M:!0,mode:"readonly"},function(f){c.length=0;return Fj(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Vj(a){return Uj(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Wj,Xj=new function(){}(new function(){});
function Yj(){var a,b,c;return x(function(d){switch(d.h){case 1:a=Ri();if(null===a||void 0===a?0:a.hasSucceededOnce)return d.return(!0);var e;if(e=Ih)e=/WebKit\/([0-9]+)/.exec(Ub),e=!!(e&&600<=parseInt(e[1],10));e&&(e=/WebKit\/([0-9]+)/.exec(Ub),e=!(e&&602<=parseInt(e[1],10)));if(e||sc)return d.return(!1);try{if(b=self,!(b.indexedDB&&b.IDBIndex&&b.IDBKeyRange&&b.IDBObjectStore))return d.return(!1)}catch(f){return d.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return d.return(!1);
ra(d,2);c={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(d,Sj(c,Xj),4);case 4:return w(d,Tj("yt-idb-test-do-not-use",Xj),5);case 5:return d.return(!0);case 2:return ta(d),d.return(!1)}})}
function Zj(){if(void 0!==Wj)return Wj;Ti=!0;return Wj=Yj().then(function(a){Ti=!1;var b,c;null!==(b=Qi())&&void 0!==b&&b.h&&(b=Ri(),b={hasSucceededOnce:(null===b||void 0===b?void 0:b.hasSucceededOnce)||a},null===(c=Qi())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0));return a})}
function ak(){return C("ytglobal.idbToken_")||void 0}
function bk(){var a=ak();return a?Promise.resolve(a):Zj().then(function(b){(b=b?Xj:void 0)&&B("ytglobal.idbToken_",b,void 0);return b})}
;new function(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};function ck(a){if(!Xi())throw a=new O("AUTH_INVALID",{dbName:a}),Ui(a),a;var b=Yi();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function dk(a,b,c,d){var e,f,g,h,k,l;return x(function(n){switch(n.h){case 1:return f=null!==(e=Error().stack)&&void 0!==e?e:"",w(n,bk(),2);case 2:g=n.i;if(!g)throw h=kj("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Ui(h),h;Zi(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:ck(a);ra(n,3);return w(n,Sj(k,g),5);case 5:return w(n,Lj(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=ta(n),ra(n,7),w(n,Tj(k.actualName,
g),9);case 9:sa(n,8);break;case 7:ta(n);case 8:throw l;}})}
function ek(a,b,c){c=void 0===c?{}:c;return dk(a,b,!1,c)}
function fk(a,b,c){c=void 0===c?{}:c;return dk(a,b,!0,c)}
function gk(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return w(e,bk(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Zi(a);d=ck(a);return w(e,Mj(d.actualName,b),3)}return w(e,Tj(d.actualName,c),0)})}
function hk(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?w(e,Mj(d.actualName,b),2):w(e,Tj(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function ik(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return w(d,bk(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Zi("LogsDatabaseV2");return w(d,Vj(b),3)}c=d.i;return w(d,hk(c,a,b),0)})}
function jk(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return w(d,bk(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Zi(a);return w(d,Mj(a,b),3)}return w(d,Tj(a,c),0)})}
;function kk(a){var b,c,d,e,f,g,h,k;this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.na=function(){};
this.now=Date.now;this.qa=!1;this.sb=null!==(b=a.sb)&&void 0!==b?b:100;this.qb=null!==(c=a.qb)&&void 0!==c?c:1;this.ob=null!==(d=a.ob)&&void 0!==d?d:2592E6;this.mb=null!==(e=a.mb)&&void 0!==e?e:12E4;this.pb=null!==(f=a.pb)&&void 0!==f?f:5E3;this.C=null!==(g=a.C)&&void 0!==g?g:void 0;this.Aa=!!a.Aa;this.za=null!==(h=a.za)&&void 0!==h?h:.1;this.Ea=null!==(k=a.Ea)&&void 0!==k?k:10;a.handleError&&(this.handleError=a.handleError);a.na&&(this.na=a.na);a.qa&&(this.qa=a.qa);this.D=a.D;this.P=a.P;this.J=a.J;
this.K=a.K;this.V=a.V;this.Va=a.Va;this.Ua=a.Ua;this.C&&(!this.D||this.D("networkless_logging"))&&lk(this)}
function lk(a){x(function(b){if(1==b.h)return!a.C||a.qa?b.return():a.Aa&&Math.random()<=a.za?w(b,a.J.xb(a.C),2):b.A(2);mk(a);a.K.I()&&a.ta();a.K.T(a.Va,a.ta.bind(a));a.K.T(a.Ua,a.bb.bind(a));a.h=!0;b.h=0})}
m=kk.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.C&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J.set(d,this.C).then(function(e){d.id=e;c.K.I()&&nk(c,d)}).catch(function(e){nk(c,d);
ok(c,e)})}else this.V(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.C&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.D&&this.D("nwl_skip_retry")&&(e.skipRetry=c);if(this.K.I()||this.D&&this.D("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return w(k,d.J.set(e,d.C).catch(function(l){ok(d,l)}),2);
f(g,h);k.h=0})}}this.V(a,b,e.skipRetry)}else this.J.set(e,this.C).catch(function(g){d.V(a,b,e.skipRetry);
ok(d,g)})}else this.V(a,b,this.D&&this.D("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.C&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.J.ma(d.id,c.C):e=!0;c.K.ea&&c.D&&c.D("vss_network_hint")&&c.K.ea(!0);f(g,h)};
this.V(d.url,d.options);this.J.set(d,this.C).then(function(g){d.id=g;e&&c.J.ma(d.id,c.C)}).catch(function(g){ok(c,g)})}else this.V(a,b)};
m.ta=function(){var a=this;if(!this.C)throw kj("throttleSend");this.i||(this.i=this.P.L(function(){var b;return x(function(c){if(1==c.h)return w(c,a.J.ib("NEW",a.C),2);if(3!=c.h)return b=c.i,b?w(c,nk(a,b),3):(a.bb(),c.return());a.i&&(a.i=0,a.ta());c.h=0})},this.sb))};
m.bb=function(){this.P.aa(this.i);this.i=0};
function nk(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!a.C)throw c=kj("immediateSend"),c;if(void 0===b.id){e.A(2);break}return w(e,a.J.Jb(b.id,a.C),3);case 3:(d=e.i)?b=d:a.na(Error("The request cannot be found in the database."));case 2:if(pk(a,b,a.ob)){e.A(4);break}a.na(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.A(5);break}return w(e,a.J.ma(b.id,a.C),5);case 5:return e.return();case 4:b.skipRetry||(b=qk(a,b));if(!b){e.A(0);break}if(!b.skipRetry||
void 0===b.id){e.A(8);break}return w(e,a.J.ma(b.id,a.C),8);case 8:a.V(b.url,b.options,!!b.skipRetry),e.h=0}})}
function qk(a,b){if(!a.C)throw kj("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g;return x(function(h){switch(h.h){case 1:g=rk(f);if(!(a.D&&a.D("nwl_consider_error_code")&&g||a.D&&!a.D("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Ea)){h.A(2);break}if(!a.K.W){h.A(3);break}return w(h,a.K.W(),3);case 3:if(a.K.I()){h.A(2);break}c(e,f);if(!a.D||!a.D("nwl_consider_error_code")||void 0===(null===b||void 0===b?void 0:b.id)){h.A(6);break}return w(h,a.J.Wa(b.id,a.C,!1),6);case 6:return h.return();case 2:if(a.D&&a.D("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Ea)return h.return();a.potentialEsfErrorCounter++;if(void 0===(null===b||void 0===b?void 0:b.id)){h.A(8);break}return b.sendCount<a.qb?w(h,a.J.Wa(b.id,a.C),12):w(h,a.J.ma(b.id,a.C),8);case 12:a.P.L(function(){a.K.I()&&a.ta()},a.pb);
case 8:c(e,f),h.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){return x(function(g){if(1==g.h)return void 0===(null===b||void 0===b?void 0:b.id)?g.A(2):w(g,a.J.ma(b.id,a.C),2);a.K.ea&&a.D&&a.D("vss_network_hint")&&a.K.ea(!0);d(e,f);g.h=0})};
return b}
function pk(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function mk(a){if(!a.C)throw kj("retryQueuedRequests");a.J.ib("QUEUED",a.C).then(function(b){b&&!pk(a,b,a.mb)?a.P.L(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.A(2):w(c,a.J.Wa(b.id,a.C),2);mk(a);c.h=0})}):a.K.I()&&a.ta()})}
function ok(a,b){a.tb&&!a.K.I()?a.tb(b):a.handleError(b)}
function rk(a){var b;return(a=null===(b=null===a||void 0===a?void 0:a.error)||void 0===b?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function sk(a,b){this.version=a;this.args=b}
;function tk(a,b){this.topic=a;this.h=b}
tk.prototype.toString=function(){return this.topic};var uk=C("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.oa;K.prototype.publish=K.prototype.ha;K.prototype.clear=K.prototype.clear;B("ytPubsub2Pubsub2Instance",uk,void 0);var vk=C("ytPubsub2Pubsub2SubscribedKeys")||{};B("ytPubsub2Pubsub2SubscribedKeys",vk,void 0);var wk=C("ytPubsub2Pubsub2TopicToKeys")||{};B("ytPubsub2Pubsub2TopicToKeys",wk,void 0);var xk=C("ytPubsub2Pubsub2IsAsync")||{};B("ytPubsub2Pubsub2IsAsync",xk,void 0);
B("ytPubsub2Pubsub2SkipSubKey",null,void 0);function yk(a,b){var c=zk();c&&c.publish.call(c,a.toString(),a,b)}
function Ak(a){var b=Bk,c=zk();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=C("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(vk[d])try{if(f&&b instanceof tk&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ga){var l=new h;h.ga=l.version}var n=h.ga}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
gb(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){wg(p)}},xk[b.toString()]?C("yt.scheduler.instance")?Yg.L(g):Pg(g,0):g())});
vk[d]=!0;wk[b.toString()]||(wk[b.toString()]=[]);wk[b.toString()].push(d);return d}
function Ck(){var a=Dk,b=Ak(function(c){a.apply(void 0,arguments);Ek(b)});
return b}
function Ek(a){var b=zk();b&&("number"===typeof a&&(a=[a]),E(a,function(c){b.unsubscribeByKey(c);delete vk[c]}))}
function zk(){return C("ytPubsub2Pubsub2Instance")}
;function Fk(a,b){Oj.call(this,a,b);this.options=b;Zi(a)}
v(Fk,Oj);function Gk(a,b){var c;return function(){c||(c=new Fk(a,b));return c}}
Fk.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.Xa?fk:ek)(a,b,Object.assign({},c))};
Fk.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Xa?jk:gk)(this.name,a)};
function Hk(a,b){return Gk(a,b)}
;var Ik;
function Jk(){if(Ik)return Ik();var a={};Ik=Hk("LogsDatabaseV2",{ra:(a.LogsRequestsStore={Ja:2},a),Xa:!1,upgrade:function(b,c,d){c(2)&&xj(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Ik()}
;function Kk(a){return Qj(Jk(),a)}
function Lk(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:N(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,Kk(b),2);if(3!=g.h)return d=g.i,e=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:F("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,zj(d,e),3);f=g.i;c.Zb=N();Mk(c);return g.return(f)})}
function Nk(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.h)return c={startTime:N(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(l,Kk(b),2);if(3!=l.h)return d=l.i,e=F("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,N()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,wj(d,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(n){return Ij(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===a&&(k.status="QUEUED",
p.update(k)))})}),3);
c.Zb=N();Mk(c);return l.return(k)})}
function Ok(a,b){var c;return x(function(d){if(1==d.h)return w(d,Kk(b),2);c=d.i;return d.return(wj(c,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",T(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Pk(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.h)return w(e,Kk(b),2);d=e.i;return e.return(wj(d,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),T(g.h.put(h,void 0)).then(function(){return h})):R.resolve(void 0)})}))})}
function Qk(a,b){var c;return x(function(d){if(1==d.h)return w(d,Kk(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Rk(a){var b,c;return x(function(d){if(1==d.h)return w(d,Kk(a),2);b=d.i;c=N()-2592E6;return w(d,wj(b,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(e){return Fj(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Sk(){return x(function(a){return w(a,ik(),0)})}
function Mk(a){M("nwl_csi_killswitch")||.01>=Math.random()&&yk("nwl_transaction_latency_payload",a)}
;var Tk={},Uk=Hk("ServiceWorkerLogsDatabase",{ra:(Tk.SWHealthLog={Ja:1},Tk),Xa:!0,upgrade:function(a,b){b(1)&&xj(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Vk(a){return Qj(Uk(),a)}
function Wk(a){var b,c;return x(function(d){if(1==d.h)return w(d,Vk(a),2);b=d.i;c=N()-2592E6;return w(d,wj(b,["SWHealthLog"],{mode:"readwrite",M:!0},function(e){return Fj(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Xk(a){var b;return x(function(c){if(1==c.h)return w(c,Vk(a),2);b=c.i;return w(c,b.clear("SWHealthLog"),0)})}
;var Yk;function Zk(){Yk||(Yk=new Ki("yt.offline"));return Yk}
function $k(a){if(M("offline_error_handling")){var b=Zk().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Zk().set("errors",b,2592E3,!0)}}
function al(){if(M("offline_error_handling")){var a=Zk().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new Wi(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;wg(c)}Zk().set("errors",{},2592E3,!0)}}}
;var bl=Bg("network_polling_interval",3E4);function U(){J.call(this);this.H=0;this.N=this.m=!1;this.l=this.Oa();M("use_shared_nsm")?(Ce.h||(Ce.h=new Ce(Yg)),this.j=Ce.h):(cl(this),dl(this))}
v(U,J);function el(){if(!U.h){var a=C("yt.networkStatusManager.instance")||new U;B("yt.networkStatusManager.instance",a,void 0);U.h=a}return U.h}
m=U.prototype;m.I=function(){var a;return M("use_shared_nsm")&&this.j?null===(a=this.j)||void 0===a?void 0:a.I():this.l};
m.ea=function(a){var b;M("use_shared_nsm")&&this.j?null===(b=this.j)||void 0===b?void 0:b.j=a:a!==this.l&&(this.l=a)};
m.Kb=function(a){!M("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.H||fl(this))};
m.Oa=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.zb=function(){this.N=!0};
m.T=function(a,b){return M("use_shared_nsm")&&this.j?this.j.T(a,b):J.prototype.T.call(this,a,b)};
function dl(a){window.addEventListener("online",function(){return x(function(b){if(1==b.h)return w(b,a.W(),2);a.N&&al();b.h=0})})}
function cl(a){window.addEventListener("offline",function(){return x(function(b){return w(b,a.W(),0)})})}
function fl(a){a.H=Tg(function(){return x(function(b){if(1==b.h)return a.l?a.Oa()||!a.m?b.A(3):w(b,a.W(),3):w(b,a.W(),3);fl(a);b.h=0})},bl)}
m.W=function(a){var b=this;return M("use_shared_nsm")&&this.j?De(this.j,a):this.u?this.u:this.u=new Promise(function(c){var d,e,f;return x(function(g){switch(g.h){case 1:return d=window.AbortController?new window.AbortController:void 0,e=null===d||void 0===d?void 0:d.signal,f=!1,ra(g,2,3),d&&(b.B=Yg.L(function(){d.abort()},a||2E4)),w(g,fetch("/generate_204",{method:"HEAD",
signal:e}),5);case 5:f=!0;case 3:ua(g);b.u=void 0;b.B&&Yg.aa(b.B);f!==b.l&&(b.l=f,b.l&&b.m?Ae(b,"ytnetworkstatus-online"):b.m&&Ae(b,"ytnetworkstatus-offline"));c(f);va(g);break;case 2:ta(g),f=!1,g.A(3)}})})};
U.prototype.sendNetworkCheckRequest=U.prototype.W;U.prototype.listen=U.prototype.T;U.prototype.enableErrorFlushing=U.prototype.zb;U.prototype.getWindowStatus=U.prototype.Oa;U.prototype.monitorNetworkStatusChange=U.prototype.Kb;U.prototype.networkStatusHint=U.prototype.ea;U.prototype.isNetworkAvailable=U.prototype.I;U.getInstance=el;function gl(a){a=void 0===a?{}:a;J.call(this);var b=this;this.l=this.H=0;this.m="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";M("use_shared_nsm")&&(this.m="networkstatus-offline",this.u="networkstatus-online");this.j=el();var c=C("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.gb);a.Ca&&!M("use_shared_nsm")&&(c=C("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=C("yt.networkStatusManager.instance.listen").bind(this.j))a.Fa?
(this.Fa=a.Fa,c(this.u,function(){hl(b,"publicytnetworkstatus-online");M("use_shared_nsm")&&a.Ca&&al()}),c(this.m,function(){hl(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){Ae(b,"publicytnetworkstatus-online");
M("use_shared_nsm")&&a.Ca&&al()}),c(this.m,function(){Ae(b,"publicytnetworkstatus-offline")}))}
v(gl,J);gl.prototype.I=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.j);return a?a():!0};
gl.prototype.ea=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
gl.prototype.W=function(a){var b=this,c;return x(function(d){return(c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j))?d.return(c(a)):d.return(!0)})};
function hl(a,b){a.Fa?a.l?(Yg.aa(a.H),a.H=Yg.L(function(){a.B!==b&&(Ae(a,b),a.B=b,a.l=N())},a.Fa-(N()-a.l))):(Ae(a,b),a.B=b,a.l=N()):Ae(a,b)}
;var il;function jl(){kk.call(this,{J:{xb:Rk,ma:Qk,ib:Nk,Jb:Ok,Wa:Pk,set:Lk},K:kl(),handleError:wg,na:xg,V:ll,now:N,tb:$k,P:Xg(),Va:"publicytnetworkstatus-online",Ua:"publicytnetworkstatus-offline",Aa:!0,za:.1,Ea:Bg("potential_esf_error_limit",10),D:M,qa:!Xi()});this.Aa&&Math.random()<=this.za&&this.C&&Wk(this.C);M("networkless_immediately_drop_sw_health_store")&&ml(this);M("networkless_immediately_drop_all_requests")&&Sk();jk("LogsDatabaseV2")}
v(jl,kk);function nl(){var a=C("yt.networklessRequestController.instance");a||(a=new jl,B("yt.networklessRequestController.instance",a,void 0),M("networkless_logging")&&bk().then(function(b){a.C=b;lk(a)}));
return a}
jl.prototype.writeThenSend=function(a,b){b||(b={});Xi()||(this.h=!1);kk.prototype.writeThenSend.call(this,a,b)};
jl.prototype.sendThenWrite=function(a,b,c){b||(b={});Xi()||(this.h=!1);kk.prototype.sendThenWrite.call(this,a,b,c)};
jl.prototype.sendAndWrite=function(a,b){b||(b={});Xi()||(this.h=!1);kk.prototype.sendAndWrite.call(this,a,b)};
function ml(a){var b;x(function(c){if(!a.C)throw b=kj("clearSWHealthLogsDb"),b;return c.return(Xk(a.C).catch(function(d){a.handleError(d)}))})}
function ll(a,b,c){var d;if(null===(d=b.postParams)||void 0===d?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(N());c&&0===Object.keys(b).length?Mh(a):Ah(a,b)}
function kl(){il||(il=new gl({Ca:!0,gb:!0}));return il}
;var ol=!1,pl=0,ql=0,rl,sl=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:ol,potentialEsfErrorCounter:ql};B("ytNetworklessLoggingInitializationOptions",sl,void 0);
function tl(){var a;x(function(b){switch(b.h){case 1:return w(b,bk(),2);case 2:a=b.i;if(!a||!Xi()&&!M("nwl_init_require_datasync_id_killswitch")){b.A(0);break}ol=!0;sl.isNwlInitialized=ol;return w(b,jk("LogsDatabaseV2"),4);case 4:if(!(.1>=Math.random())){b.A(5);break}return w(b,Rk(a),6);case 6:return w(b,Wk(a),5);case 5:ul();vl().I()&&wl();vl().T("publicytnetworkstatus-online",wl);vl().T("publicytnetworkstatus-offline",xl);if(!M("networkless_immediately_drop_sw_health_store")){b.A(8);break}return w(b,
yl(),8);case 8:if(M("networkless_immediately_drop_all_requests"))return w(b,Sk(),0);b.A(0)}})}
function zl(a,b){function c(d){var e=vl().I();if(!Al()||!d||e&&M("vss_networkless_bypass_write"))Bl(a,b);else{var f={url:a,options:b,timestamp:N(),status:"NEW",sendCount:0};Lk(f,d).then(function(g){f.id=g;vl().I()&&Cl(f)}).catch(function(g){Cl(f);
vl().I()?wg(g):$k(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?bk().then(function(d){c(d)}):c(ak())}
function Dl(a,b){function c(d){if(Al()&&d){var e={url:a,options:b,timestamp:N(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?Qk(e.id,d):f=!0;M("vss_network_hint")&&vl().ea(!0);g(h,k)};
Bl(e.url,e.options);Lk(e,d).then(function(h){e.id=h;f&&Qk(e.id,d)}).catch(function(h){vl().I()?wg(h):$k(h)})}else Bl(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?bk().then(function(d){c(d)}):c(ak())}
function wl(){var a=ak();if(!a)throw kj("throttleSend");pl||(pl=Yg.L(function(){var b;return x(function(c){if(1==c.h)return w(c,Nk("NEW",a),2);if(3!=c.h)return b=c.i,b?w(c,Cl(b),3):(xl(),c.return());pl&&(pl=0,wl());c.h=0})},100))}
function xl(){Yg.aa(pl);pl=0}
function Cl(a){var b,c,d;return x(function(e){switch(e.h){case 1:b=ak();if(!b)throw c=kj("immediateSend"),c;if(void 0===a.id){e.A(2);break}return w(e,Ok(a.id,b),3);case 3:(d=e.i)?a=d:xg(Error("The request cannot be found in the database."));case 2:if(El(a,2592E6)){e.A(4);break}xg(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.A(5);break}return w(e,Qk(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=Fl(a));var f=a,g,h;if(null===(h=null===(g=null===
f||void 0===f?void 0:f.options)||void 0===g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(N());a=f;if(!a){e.A(0);break}if(!a.skipRetry||void 0===a.id){e.A(8);break}return w(e,Qk(a.id,b),8);case 8:Bl(a.url,a.options,!!a.skipRetry),e.h=0}})}
function Fl(a){var b=ak();if(!b)throw kj("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g;return x(function(h){switch(h.h){case 1:g=rk(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&Gl()<=Bg("potential_esf_error_limit",10))){h.A(2);break}return w(h,vl().W(),3);case 3:if(vl().I()){h.A(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===(null===a||void 0===a?void 0:a.id)){h.A(5);break}return w(h,Pk(a.id,b,!1),5);case 5:return h.return();case 2:if(M("nwl_consider_error_code")&&!g&&Gl()>Bg("potential_esf_error_limit",10))return h.return();
C("ytNetworklessLoggingInitializationOptions")&&sl.potentialEsfErrorCounter++;ql++;if(void 0===(null===a||void 0===a?void 0:a.id)){h.A(7);break}return 1>a.sendCount?w(h,Pk(a.id,b),11):w(h,Qk(a.id,b),7);case 11:Yg.L(function(){vl().I()&&wl()},5E3);
case 7:c(e,f),h.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return x(function(g){if(1==g.h)return void 0===(null===a||void 0===a?void 0:a.id)?g.A(2):w(g,Qk(a.id,b),2);M("vss_network_hint")&&vl().ea(!0);d(e,f);g.h=0})};
return a}
function El(a,b){a=a.timestamp;return N()-a>=b?!1:!0}
function ul(){var a=ak();if(!a)throw kj("retryQueuedRequests");Nk("QUEUED",a).then(function(b){b&&!El(b,12E4)?Yg.L(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.A(2):w(c,Pk(b.id,a),2);ul();c.h=0})}):vl().I()&&wl()})}
function yl(){var a,b;return x(function(c){a=ak();if(!a)throw b=kj("clearSWHealthLogsDb"),b;return c.return(Xk(a).catch(function(d){wg(d)}))})}
function vl(){if(M("use_new_nwl"))return kl();rl||(rl=new gl({Ca:!0,gb:!0}));return rl}
function Bl(a,b,c){c&&0===Object.keys(b).length?Mh(a):Ah(a,b)}
function Al(){return C("ytNetworklessLoggingInitializationOptions")?sl.isNwlInitialized:ol}
function Gl(){return C("ytNetworklessLoggingInitializationOptions")?sl.potentialEsfErrorCounter:ql}
;function Hl(a){var b=this;this.config_=null;a?this.config_=a:Hi()&&(this.config_=qi());Tg(function(){Pi(b)},5E3)}
Hl.prototype.isReady=function(){!this.config_&&Hi()&&(this.config_=qi());return!!this.config_};
function ti(a,b,c,d){function e(z){z=void 0===z?!1:z;var A;if(d.retry&&"www.youtube-nocookie.com"!=h&&(z||M("skip_ls_gel_retry")||(A=Ni(b,c,l,k)),A)){var H=g.onSuccess,P=g.onFetchSuccess;g.onSuccess=function(Q,S){Oi(A);H(Q,S)};
c.onFetchSuccess=function(Q,S){Oi(A);P(Q,S)}}try{z&&d.retry&&!d.lb.bypassNetworkless?(g.method="POST",d.lb.writeThenSend?M("use_new_nwl")?nl().writeThenSend(q,g):zl(q,g):M("use_new_nwl")?nl().sendAndWrite(q,g):Dl(q,g)):(g.method="POST",g.postParams||(g.postParams={}),Ah(q,g))}catch(Q){if("InvalidAccessError"==Q.name)A&&(Oi(A),A=0),xg(Error("An extension is blocking network request."));
else throw Q;}A&&Tg(function(){Pi(a)},5E3)}
!F("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&xg(new Wi("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Wi("innertube xhrclient not ready",b,c,d);wg(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(z,A){if(d.onSuccess)d.onSuccess(A)},
onFetchSuccess:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,A){if(d.onError)d.onError(A)},
onFetchError:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.config_.Gb)&&(h=f);var k=a.config_.Ib||!1,l=Ii(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.Hb&&f;M("omit_innertube_api_key_for_bearer_auth_header")&&(t=t&&f.startsWith("Bearer"));t||(p.key=a.config_.innertubeApiKey);var q=oh(""+h+n,p||{},!0);M("use_new_nwl")||Al()?Zj().then(function(z){e(z)}):e(!1)}
;function V(a,b,c){c=void 0===c?{}:c;var d=Hl;F("ytLoggingEventsDefaultDisabled",!1)&&Hl==Hl&&(d=null);wi(a,b,d,c)}
;var Il=[{Ta:function(a){return"Cannot read property '"+a.key+"'"},
Da:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ta:function(a){return"Cannot call '"+a.key+"'"},
Da:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ta:function(a){return a.key+" is not defined"},
Da:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Kl={da:[],Z:[{ab:Jl,weight:500}]};function Jl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Ll(){this.Z=[];this.da=[]}
var Ml;function Nl(){if(!Ml){var a=Ml=new Ll;a.da.length=0;a.Z.length=0;Kl.da&&a.da.push.apply(a.da,Kl.da);Kl.Z&&a.Z.push.apply(a.Z,Kl.Z)}return Ml}
;var Ol=new K;function Pl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Ql(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Ql(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Ql(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Ql(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Rl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Sl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Pl(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Sl(e+".ve",f,g,h):0;d+=g;d+=Sl(e,a[e],b,c);if(500<d)break}}else c[b]=Tl(a),d+=c[b].length;else c[b]=Tl(a),d+=c[b].length;return d}
function Sl(a,b,c,d){c+="."+a;a=Tl(b);d[c]=a;return c.length+a.length}
function Tl(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Ul=new Set,Vl=0,Wl=0,Xl=0,Yl=[],Zl=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function $l(a){am(a,"WARNING")}
function am(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),M("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=Vl))){var g=Zd(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=Rl(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var n=
a.params;if("object"===typeof a.params)for(l in n){if(n[l]){var p="params."+l,t=Tl(n[l]);c[p]=t;k+=p.length+t.length;if(500<k)break}}else c.params=Tl(n)}if(Yl.length)for(l=0;l<Yl.length&&!(k=Rl(Yl[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=
Nl();c=u(a.da);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.Zm)){a=d.weight;break a}a=u(a.Z);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.ab(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(Il);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Da[l.name])for(e=u(c.Da[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=
d[g+1];l.message=c.Ta(f);break}l.params||(l.params={});a=Nl();l.params["params.errorServiceSignature"]="msg="+a.da.length+"&cb="+a.Z.length;l.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));xb("sample").constructor!==vb&&(l.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!Ul.has(l.message)){"ERROR"===b?
(Ol.ha("handleError",l),M("record_app_crashed_web")&&0===Xl&&1===l.sampleWeight&&(Xl++,V("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),Wl++):"WARNING"===b&&Ol.ha("handleWarning",l);if(M("kevlar_gel_error_routing")){a=b;b:{c=u(Zl);for(d=c.next();!d.done;d=c.next())if(Jh(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);c=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?
2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};e={pageUrl:window.location.href,kvPairs:[]};F("FEXP_EXPERIMENTS")&&(e.experimentIds=F("FEXP_EXPERIMENTS"));f=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",
void 0);g=qg.EXPERIMENT_FLAGS;if((!g||!g.web_disable_gel_stp_ecatcher_killswitch)&&f)for(h=u(Object.keys(f)),g=h.next();!g.done;g=h.next())g=g.value,e.kvPairs.push({key:g,value:String(f[g])});if(f=l.params)for(h=u(Object.keys(f)),g=h.next();!g.done;g=h.next())g=g.value,e.kvPairs.push({key:"client."+g,value:String(f[g])});f=F("SERVER_NAME",void 0);g=F("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:e,stackTrace:d,
logMessage:c}}c&&(V("clientError",c),("ERROR"===a||M("errors_flush_gel_always_killswitch"))&&li())}if(!M("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,level:b,"client.name":a.name},postParams:{url:F("PAGE_NAME",window.location.href),file:l.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=
c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=F("SERVER_NAME",void 0);c=F("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}Ah(F("ECATCHER_REPORT_HOST","")+"/error_204",b)}try{Ul.add(l.message)}catch(q){}Vl++}}}
function bm(a){var b=Ea.apply(1,arguments),c=a;c.args||(c.args=[]);c.args.push.apply(c.args,fa(b))}
;var cm={Nc:3611,ac:27686,cc:85013,dc:23462,fc:42016,hc:62407,ic:26926,ec:43781,jc:51236,kc:79148,lc:50160,mc:77504,Ac:87907,Bc:18630,Cc:54445,Dc:80935,Ec:105675,Fc:37521,Gc:47786,Hc:98349,Ic:123695,Jc:6827,Kc:29434,Lc:7282,Mc:124448,Qc:32276,Pc:76278,Rc:93911,Sc:106531,Tc:27259,Uc:27262,Vc:27263,Xc:21759,Yc:27107,Zc:62936,bd:49568,cd:38408,dd:80637,ed:68727,fd:68728,gd:80353,hd:80356,jd:74610,kd:45707,ld:83962,md:83970,nd:46713,od:89711,pd:74612,qd:93265,rd:74611,sd:131380,ud:128979,vd:139311,wd:128978,
td:131391,xd:105350,zd:139312,Ad:134800,yd:131392,Cd:113533,Dd:93252,Ed:99357,Gd:94521,Hd:114252,Id:113532,Jd:94522,Fd:94583,Kd:88E3,Ld:139580,Md:93253,Nd:93254,Od:94387,Pd:94388,Qd:93255,Rd:97424,Bd:72502,Sd:110111,Td:76019,Vd:117092,Wd:117093,Ud:89431,Xd:110466,Yd:77240,Zd:60508,ae:137401,be:137402,ce:137046,de:73393,ee:113534,ge:92098,he:131381,ie:84517,je:83759,ke:80357,le:86113,me:72598,ne:72733,oe:107349,pe:124275,qe:118203,re:133275,se:133274,te:133272,ue:133273,we:133276,ye:117431,xe:133797,
ze:128572,Ae:133405,Be:117429,Ce:117430,De:117432,Ee:120080,Fe:117259,Ge:121692,He:132972,Ie:133051,Je:133658,Ke:132971,Le:97615,Me:31402,Oe:133624,Pe:133623,Qe:133622,Ne:133621,Re:84774,Se:95117,Te:98930,Ue:98931,Ve:98932,We:43347,Xe:129889,Ye:45474,Ze:100352,af:84758,bf:98443,cf:117985,df:74613,ef:74614,ff:64502,gf:136032,hf:74615,jf:74616,kf:122224,lf:74617,mf:77820,nf:74618,pf:93278,qf:93274,rf:93275,sf:93276,tf:22110,uf:29433,vf:133798,wf:132295,yf:120541,Af:82047,Bf:113550,Cf:75836,Df:75837,
Ef:42352,Ff:84512,Gf:76065,Hf:75989,If:16623,Jf:32594,Kf:27240,Lf:32633,Mf:74858,Of:3945,Nf:16989,Pf:45520,Qf:25488,Rf:25492,Sf:25494,Tf:55760,Uf:14057,Vf:18451,Wf:57204,Xf:57203,Yf:17897,Zf:57205,ag:18198,cg:17898,dg:17909,eg:43980,fg:46220,gg:11721,hg:49954,ig:96369,jg:3854,kg:56251,lg:25624,mg:16906,ng:99999,og:68172,pg:27068,qg:47973,rg:72773,sg:26970,tg:26971,ug:96805,vg:17752,wg:73233,xg:109512,yg:22256,zg:14115,Ag:22696,Bg:89278,Cg:89277,Dg:109513,Eg:43278,Fg:43459,Gg:43464,Hg:89279,Ig:43717,
Jg:55764,Kg:22255,Lg:89281,Mg:40963,Ng:43277,Og:43442,Pg:91824,Qg:120137,Rg:96367,Sg:36850,Tg:72694,Ug:37414,Vg:36851,Xg:124863,Wg:121343,Yg:73491,Zg:54473,ah:43375,bh:46674,dh:139095,eh:32473,fh:72901,gh:72906,hh:50947,ih:50612,jh:50613,kh:50942,lh:84938,mh:84943,nh:84939,oh:84941,ph:84944,qh:84940,rh:84942,sh:35585,th:51926,uh:79983,vh:63238,wh:18921,xh:63241,yh:57893,zh:41182,Ah:135732,Bh:33424,Ch:22207,Dh:42993,Eh:36229,Fh:22206,Gh:22205,Hh:18993,Ih:19001,Jh:18990,Kh:18991,Lh:18997,Mh:18725,Nh:19003,
Oh:36874,Ph:44763,Qh:33427,Rh:67793,Sh:22182,Th:37091,Uh:34650,Vh:50617,Wh:47261,Xh:22287,Yh:25144,Zh:97917,ai:62397,bi:125598,ci:137935,di:36961,fi:108035,gi:27426,hi:27857,ii:27846,ji:27854,ki:69692,li:61411,mi:39299,ni:38696,oi:62520,ri:36382,si:108701,ti:50663,vi:36387,wi:14908,xi:37533,yi:105443,zi:61635,Ai:62274,Bi:133818,Ci:65702,Di:65703,Ei:65701,Fi:76256,Gi:37671,Hi:49953,Ji:36216,Ki:28237,Li:39553,Mi:29222,Ni:26107,Oi:38050,Pi:26108,Ri:120745,Qi:26109,Si:26110,Ti:66881,Ui:28236,Vi:14586,
Wi:57929,Xi:74723,Yi:44098,Zi:44099,cj:23528,dj:61699,aj:134104,bj:134103,ej:59149,fj:101951,gj:97346,hj:118051,ij:95102,jj:64882,kj:119505,lj:63595,mj:63349,nj:95101,oj:75240,pj:27039,qj:68823,rj:21537,sj:83464,tj:75707,uj:83113,vj:101952,wj:101953,yj:79610,zj:125755,Aj:24402,Bj:24400,Cj:32925,Dj:57173,Ej:122502,Fj:138480,Gj:64423,Hj:64424,Ij:33986,Jj:100828,Kj:129089,Lj:21409,Pj:135155,Qj:135156,Rj:135157,Sj:135158,Tj:135159,Uj:135160,Vj:135161,Wj:135162,Xj:135163,Yj:135164,Zj:135165,ak:135166,
Mj:11070,Nj:11074,Oj:17880,bk:14001,dk:30709,ek:30707,fk:30711,gk:30710,hk:30708,ck:26984,ik:63648,jk:63649,kk:51879,lk:111059,mk:5754,nk:20445,qk:130975,pk:130976,rk:110386,sk:113746,tk:66557,vk:17310,wk:28631,xk:21589,yk:68012,zk:60480,Ak:138664,Bk:31571,Ck:76980,Dk:41577,Ek:45469,Fk:38669,Gk:13768,Hk:13777,Ik:62985,Jk:4724,Kk:59369,Lk:43927,Mk:43928,Nk:12924,Ok:100355,Rk:56219,Sk:27669,Tk:10337,Qk:47896,Uk:122629,Wk:139723,Vk:139722,Xk:121258,Yk:107598,Zk:127991,al:96639,bl:107536,dl:130169,fl:96661,
il:96658,jl:116646,kl:121122,ll:96660,ml:127738,nl:127083,ol:104443,pl:96659,ql:106442,rl:134840,sl:63667,ul:63668,vl:63669,wl:130686,xl:78314,yl:55761,zl:127098,Al:134841,Bl:96368,Cl:67374,Dl:48992,El:49956,Fl:31961,Gl:26388,Hl:23811,Il:5E4,Jl:126250,Kl:96370,Ll:47355,Ml:47356,Nl:37935,Ol:45521,Pl:21760,Ql:83769,Rl:49977,Sl:49974,Tl:93497,Ul:93498,Vl:34325,Wl:115803,Xl:123707,Yl:100081,Zl:35309,am:68314,bm:25602,cm:100339,dm:59018,em:18248,fm:50625,gm:9729,hm:37168,im:37169,jm:21667,km:16749,lm:18635,
mm:39305,nm:18046,om:53969,pm:8213,qm:93926,rm:102852,sm:110099,tm:22678,um:69076,vm:137575,xm:139224,ym:100856,zm:17736,Am:3832,Bm:55759,Cm:64031,Dm:93044,Em:93045,Fm:34388,Gm:17657,Hm:17655,Im:39579,Jm:39578,Km:77448,Lm:8196,Mm:11357,Nm:69877,Om:8197,Pm:82039};function dm(){var a=pb(em),b;return Jf(new Bf(function(c,d){a.onSuccess=function(e){uh(e)?c(new fm(e)):d(new gm("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new gm("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new gm("Request timed out","net.timeout",e))};
b=Ah("//web.archive.org/web/20211109112832/https://googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Kf&&b.abort();
return Gf(c)})}
function gm(a,b,c){Ya.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(gm,Ya);function fm(a){this.xhr=a}
;function hm(){this.i=0;this.h=null}
hm.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),Af(a)?a:im(a)):2===this.i&&b?(a=b.call(c,this.h),Af(a)?a:jm(a)):this};
hm.prototype.getValue=function(){return this.h};
hm.prototype.$goog_Thenable=!0;function jm(a){var b=new hm;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function im(a){var b=new hm;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function km(){if(Sd())return!0;var a=F("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a||Ih&&Jh("applewebkit")&&!Jh("version")&&(!Jh("safari")||Jh("gsa/"))||vc&&Jh("version/")?!0:(a=Qd.get("CONSENT",void 0))?a.startsWith("YES+"):!0}
;function lm(a){Ya.call(this,a.message||a.description||a.name);this.isMissing=a instanceof mm;this.isTimeout=a instanceof gm&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Kf}
v(lm,Ya);lm.prototype.name="BiscottiError";function mm(){Ya.call(this,"Biscotti ID is missing from server")}
v(mm,Ya);mm.prototype.name="BiscottiMissingError";var em={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},nm=null;function eh(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return Gf(Error("Biscotti id fetching has been disabled entirely."));if(!km())return Gf(Error("User has not consented - not fetching biscotti id."));if("1"==nb())return Gf(Error("Biscotti ID is not available in private embed mode"));nm||(nm=Jf(dm().then(om),function(a){return pm(2,a)}));
return nm}
function om(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new mm;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new mm;a=a.id;fh(a);nm=im(a);qm(18E5,2);return a}
function pm(a,b){b=new lm(b);fh("");nm=jm(b);0<a&&qm(12E4,a-1);throw b;}
function qm(a,b){Pg(function(){Jf(dm().then(om,function(c){return pm(b,c)}),Ja)},a)}
function rm(){try{var a=C("yt.ads.biscotti.getId_");return a?a():eh()}catch(b){return Gf(b)}}
;function sm(a){if("1"!=nb()){a&&dh();try{rm().then(function(){},function(){}),Pg(sm,18E5)}catch(b){wg(b)}}}
;var tm=Date.now().toString();
function um(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(tm)for(a=1,b=0;b<tm.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^tm.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var vm,wm=y.ytLoggingDocDocumentNonce_;wm||(wm=um(),Wa("ytLoggingDocDocumentNonce_",wm));vm=wm;var xm={xf:0,Oc:1,Wc:2,Ii:3,zf:4,wm:5,xj:6,Pk:7,uk:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function ym(a){this.h=a}
function zm(a){return new ym({trackingParams:a})}
ym.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
ym.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
ym.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Am(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Bm(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Cm(a){return F(Bm(void 0===a?0:a),void 0)}
B("yt_logging_screen.getRootVeType",Cm,void 0);function Dm(a){return(a=Cm(void 0===a?0:a))?new ym({veType:a,youtubeData:void 0}):null}
function Em(){var a=F("csn-to-ctt-auth-info");a||(a={},L("csn-to-ctt-auth-info",a));return a}
function Fm(a){a=void 0===a?0:a;var b=F(Am(a));if(!b&&!F("USE_CSN_FALLBACK",!0))return null;b||!M("use_undefined_csn_any_layer")&&0!=a||(b="UNDEFINED_CSN");return b?b:null}
B("yt_logging_screen.getCurrentCsn",Fm,void 0);function Gm(a,b,c){var d=Em();(c=Fm(c))&&delete d[c];b&&(d[a]=b)}
function Hm(a){return Em()[a]}
B("yt_logging_screen.getCttAuthInfo",Hm,void 0);function Im(a,b,c,d){c=void 0===c?0:c;if(a!==F(Am(c))||b!==F(Bm(c)))Gm(a,d,c),L(Am(c),a),L(Bm(c),b),b=function(){setTimeout(function(){a&&wi("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:vm,clientScreenNonce:a},Hl)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
B("yt_logging_screen.setCurrentScreen",Im,void 0);function Jm(a){sk.call(this,1,arguments);this.csn=a}
v(Jm,sk);var Bk=new tk("screen-created",Jm),Km=[],Mm=Lm,Nm=0;function Om(a,b,c,d){var e=d.filter(function(f){f.csn!==b?(f.csn=b,f=!0):f=!1;return f});
c={csn:b,parentVe:c.getAsJson(),childVes:cb(e,function(f){return f.getAsJson()})};
d=u(d);for(e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(lb(e)||!e.trackingParams&&!e.veType)&&$l(Error("Child VE logged with no data"));d={cttAuthInfo:Hm(b),fa:b};"UNDEFINED_CSN"==b?Pm("visualElementAttached",c,d):a?wi("visualElementAttached",c,a,d):V("visualElementAttached",c,d)}
function Lm(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Lc(b,3)}
function Pm(a,b,c){Km.push({payloadName:a,payload:b,options:c});Nm||(Nm=Ck())}
function Dk(a){if(Km){for(var b=u(Km),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,wi(c.payloadName,c.payload,null,c.options));Km.length=0}Nm=0}
;function Qm(){this.i=new Set;this.h=new Set;this.j=new Map}
Qm.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ka(Qm);function Rm(a){var b=Ea.apply(1,arguments);if(!Sm(a)||b.some(function(e){return!Sm(e)}))throw Error("Only objects may be merged.");
var c=a;b=u(b);for(var d=b.next();!d.done;d=b.next())Tm(c,d.value);return c}
function Tm(a,b){for(var c in b)if(Sm(b[c])){if(c in a&&!Sm(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Tm(a[c],b[c])}else if(Um(b[c])){if(c in a&&!Um(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Vm(a[c],b[c])}else a[c]=b[c];return a}
function Vm(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Sm(c)?a.push(Tm({},c)):Um(c)?a.push(Vm([],c)):a.push(c);return a}
function Sm(a){return"object"===typeof a&&!Array.isArray(a)}
function Um(a){return"object"===typeof a&&Array.isArray(a)}
;function Wm(a,b){sk.call(this,1,arguments)}
v(Wm,sk);function Xm(a,b){sk.call(this,1,arguments)}
v(Xm,sk);var Ym=new tk("aft-recorded",Wm),Zm=new tk("timing-sent",Xm);var $m=window;function an(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var W=$m.performance||$m.mozPerformance||$m.msPerformance||$m.webkitPerformance||new an;var bn=!1,cn={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Ua(W.clearResourceTimings||W.webkitClearResourceTimings||W.mozClearResourceTimings||W.msClearResourceTimings||W.oClearResourceTimings||Ja,W);function dn(a){var b=en(a);if(b.aft)return b.aft;a=F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function fn(){var a;if(M("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===W||void 0===W?void 0:W.getEntriesByType)||void 0===a?void 0:a.call(W,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=gn(e.requestStart),e.responseEnd=gn(e.responseEnd),e.redirectStart=gn(e.redirectStart),e.redirectEnd=gn(e.redirectEnd),e.domainLookupEnd=gn(e.domainLookupEnd),e.connectStart=gn(e.connectStart),
e.connectEnd=gn(e.connectEnd),e.responseStart=gn(e.responseStart),e.secureConnectionStart=gn(e.secureConnectionStart),e.domainLookupStart=gn(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=W.timing}else a=W.timing;return a}
function hn(){return M("csi_use_time_origin")&&W.timeOrigin?Math.floor(W.timeOrigin):W.timing.navigationStart}
function gn(a){return Math.round(hn()+a)}
function jn(a){var b;(b=C("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Wa("ytcsi."+(a||"")+"data_",b));return b}
function kn(a){a=jn(a);a.info||(a.info={});return a.info}
function en(a){a=jn(a);a.tick||(a.tick={});return a.tick}
function ln(a){var b=jn(a).nonce;b||(b=um(),jn(a).nonce=b);return b}
function mn(a){var b=en(a||""),c=dn(a);c&&!bn&&(yk(Ym,new Wm(Math.round(c-b._start),a)),bn=!0)}
;function nn(){if(W.getEntriesByType){var a=W.getEntriesByType("paint");if(a=eb(a,function(b){return"first-paint"===b.name}))return gn(a.startTime)}a=W.timing;
return a.Lb?Math.max(0,a.Lb):0}
;function pn(){var a=C("ytcsi.debug");a||(a=[],B("ytcsi.debug",a,void 0),B("ytcsi.reference",{},void 0));return a}
function qn(a){a=a||"";var b=C("ytcsi.reference");b||(pn(),b=C("ytcsi.reference"));if(b[a])return b[a];var c=pn(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var rn=y.ytLoggingLatencyUsageStats_||{};B("ytLoggingLatencyUsageStats_",rn,void 0);function sn(){this.h=0}
function tn(){sn.h||(sn.h=new sn);return sn.h}
sn.prototype.tick=function(a,b,c,d){un(this,"tick_"+a+"_"+b)||V("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
sn.prototype.info=function(a,b,c){var d=Object.keys(a).join("");un(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,V("latencyActionInfo",a,{cttAuthInfo:c}))};
sn.prototype.span=function(a,b,c){var d=Object.keys(a).join("");un(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,V("latencyActionSpan",a,{cttAuthInfo:c}))};
function un(a,b){rn[b]=rn[b]||{count:0};var c=rn[b];c.count++;c.time=N();a.h||(a.h=Tg(function(){var d=N(),e;for(e in rn)rn[e]&&6E4<d-rn[e].time&&delete rn[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Wi("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||$l(c)),!0):!1}
;var X={},vn=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X.browse="LATENCY_ACTION_BROWSE",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard=
"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.playlists"]=
"LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf=
"LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.home="LATENCY_ACTION_HOME",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard=
"LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest=
"LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]=
"LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X),Y={},wn=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an=
"adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cs="commandSource",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.ctop="creatorInfo.topEntityType",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",
Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.nav_type="kabukiInfo.navigationType",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.pnt="performanceNavigationTiming",
Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.rc="resourceInfo.resourceCache",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs=
"tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.aac_type="tvInfo.authAccessCredentialType",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",
Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),xn="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),yn={},zn=(yn.ccs="CANARY_STATE_",
yn.mver="MEASUREMENT_VERSION_",yn.pis="PLAYER_INITIALIZED_STATE_",yn.yt_pt="LATENCY_PLAYER_",yn.pa="LATENCY_ACTION_",yn.ctop="TOP_ENTITY_TYPE_",yn.yt_vst="VIDEO_STREAM_TYPE_",yn),An="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Bn(a){return!!F("FORCE_CSI_ON_GEL",!1)||M("csi_on_gel")||M("enable_csi_on_gel")||M("unplugged_tvhtml5_csi_on_gel")||!!jn(a).useGel}
function Cn(a,b,c){var d=Dn(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||N();if(Bn(c)){qn(c||"").tick[a]=b||N();d=ln(c);var e=jn(c).cttAuthInfo;"_start"===a?(a=tn(),un(a,"baseline_"+d)||V("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:e})):tn().tick(a,d,b,e);mn(c);return!0}return!1}
function En(a,b,c){c=Dn(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in wn){c=wn[a];0<=ab(xn,c)&&(b=!!b);a in zn&&"string"===typeof b&&(b=zn[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Rm({},d)}0<=ab(An,a)||$l(new Wi("Unknown label logged with GEL CSI",a))}
function Dn(a){a=jn(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Fn(a){a=Dn(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
;function Gn(a,b,c){null!==b&&(kn(c)[a]=b,Bn(c)?(a=En(a,b,c))&&Bn(c)&&(b=qn(c||""),Rm(b.info,a),Rm(Fn(c),a),b=ln(c),c=jn(c).cttAuthInfo,tn().info(a,b,c)):qn(c||"").info[a]=b)}
function Z(a,b,c){var d=en(c);if(!b&&"_"!==a[0]){var e=a;W.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),W.mark(e))}e=b||N();d[a]=e;Cn(a,b,c)||c||(Hn(),qn("").tick[a]=b||N());return d[a]}
function In(){var a=ln(void 0);requestAnimationFrame(function(){setTimeout(function(){a===ln(void 0)&&Z("ol",void 0,void 0)},0)})}
function Hn(){if(!C("yt.timing.pingSent_")){var a=F("TIMING_ACTION",void 0),b=en();if(a=!!C("ytglobal.timingready_")&&a)a="_start"in en(void 0);if(a&&dn()){mn();a=!0;var c=F("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in b)){a=!1;break}if(a&&!Bn()){c=en();d=kn();e=c._start;var f=F("CSI_SERVICE_NAME","youtube");a={v:2,s:f,action:F("TIMING_ACTION",void 0)};b=d.srt;void 0!==c.srt&&delete d.srt;c.aft=dn();var g=en(void 0),h=g.pbr,k=g.vc;g=g.pbs;h&&k&&g&&h<k&&k<g&&kn(void 0).yt_pvis&&
"youtube"===f&&(Gn("yt_lt","hot_bg"),f=c.vc,h=c.pbs,delete c.aft,d.aft=Math.round(h-f));for(var l in d)"_"!==l.charAt(0)&&(a[l]=d[l]);c.ps=N();l={};f=[];for(var n in c)"_"!==n.charAt(0)&&(h=Math.round(c[n]-e),l[n]=h,f.push(n+"."+h));a.rt=f.join(",");n=!!d.ap;c="";for(var p in a)a.hasOwnProperty(p)&&(c+="&"+p+"="+a[p]);p="/csi_204?"+c.substring(1);window.navigator&&n?Ph(p):Mh(p);B("yt.timing.pingSent_",!0,void 0);yk(Zm,new Xm(l.aft+(Number(b)||0)))}}}}
function Jn(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Fg+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Kn(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);dc()&&a.setAttribute("nonce",dc());return c?(a=W.getEntriesByName(c))&&a[0]&&(a=a[0],c=hn(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Ln(){var a=window.location.protocol,b=W.getEntriesByType("resource");b=bb(b,function(c){return 0===c.name.indexOf(a+"//web.archive.org/web/20211109112832/https://fonts.gstatic.com/s/")});
(b=db(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",gn(b.startTime)),Z("wffe",gn(b.responseEnd)))}
var Mn=window;Mn.ytcsi&&(Mn.ytcsi.info=Gn,Mn.ytcsi.tick=Z);function Nn(){this.o=[];this.u=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.B=new Map}
function On(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=Fm(c),h=Dm(c);g&&h&&((null===(e=null===d||void 0===d?void 0:d.response)||void 0===e?0:e.trackingParams)&&Om(a.client,g,h,[zm(d.response.trackingParams)]),(null===(f=null===d||void 0===d?void 0:d.playerResponse)||void 0===f?0:f.trackingParams)&&Om(a.client,g,h,[zm(d.playerResponse.trackingParams)]))})}
function Pn(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.o.push([b,c]);else{var e=Fm(d);c=c||Dm(d);e&&c&&Om(a.client,e,c,[b])}}
Nn.prototype.clickCommand=function(a,b,c){a=a.clickTrackingParams;c=void 0===c?0:c;if(a)if(c=Fm(void 0===c?0:c)){var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:zm(a).getAsJson(),gestureType:e};b&&(a.clientData=b);b={cttAuthInfo:Hm(c),fa:c};"UNDEFINED_CSN"==c?Pm("visualElementGestured",a,b):d?wi("visualElementGestured",a,d,b):V("visualElementGestured",a,b);b=!0}else b=!1;else b=!1;return b};
function Qn(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Rn(a,b,c);var f=Dm(c.layer);if(f){for(var g=u(a.o),h=g.next();!h.done;h=g.next())h=h.value,Pn(a,h[0],h[1]||f,c.layer);f=u(a.u);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=Fm(g);var l=k[0]||Dm(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={cttAuthInfo:Hm(h),fa:h},"UNDEFINED_CSN"==h?Pm("visualElementStateChanged",k,l):g?wi("visualElementStateChanged",k,g,l):V("visualElementStateChanged",
k,l))}}};
Fm(c.layer)||a.j();if(c.fb)for(var d=u(c.fb),e=d.next();!e.done;e=d.next())On(a,e.value,c.layer);else am(Error("Delayed screen needs a data promise."))}
function Rn(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Mb?c.Mb:c.layer;var e=Fm(d);d=Dm(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=F("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=a.client;h=f;var l=c.eb,n=c.cttAuthInfo,p=c.Vm,t=Mm(),q={csn:t,pageVe:(new ym({veType:b,youtubeData:g})).getAsJson()};h&&h.visualElement?(q.implicitGesture=
{parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()},p&&(q.implicitGesture.gestureType=p)):h&&$l(new Wi("newScreen() parent element does not have a VE - rootVe",b));l&&(q.cloneCsn=l);l={cttAuthInfo:n,fa:t};k?wi("screenCreated",q,k,l):V("screenCreated",q,l);yk(Bk,new Jm(t));var z=t}catch(A){bm(A,{cn:b,rootVe:d,parentVisualElement:void 0,Um:e,bn:f,eb:c.eb});am(A);return}Im(z,b,c.layer,c.cttAuthInfo);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=M("screen_manager_skip_hide_killswitch"))){a:{b=
u(Object.values(xm));for(f=b.next();!f.done;f=b.next())if(Fm(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,k=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:k},f={cttAuthInfo:Hm(e),fa:e,Bb:f},"UNDEFINED_CSN"==e?Pm("visualElementHidden",d,f):b?wi("visualElementHidden",d,b,f):V("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=z||"");Gn("csn",z);Qm.getInstance().clear();d=Dm(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||
M("music_web_mark_root_visible"))&&(e=z,z={csn:e,ve:d.getAsJson(),eventType:1},b={cttAuthInfo:Hm(e),fa:e},"UNDEFINED_CSN"==e?Pm("visualElementShown",z,b):V("visualElementShown",z,b));a.i.delete(c.layer||0);a.j=void 0;e=u(a.B);for(z=e.next();!z.done;z=e.next())b=u(z.value),z=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Pn(a,z,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(A){am(A)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(A){am(A)}}}
;function Sn(a){a&&(a.dataset?a.dataset[Tn("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Un(a,b){return a?a.dataset?a.dataset[Tn(b)]:a.getAttribute("data-"+b):null}
var Vn={};function Tn(a){return Vn[a]||(Vn[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Wn=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Xn=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Yn(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Wn,""),c=c.replace(Xn,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Zn(a,b,c)}
function Zn(a,b,c){c=void 0===c?null:c;var d=$n(a),e=document.getElementById(d),f=e&&Un(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Uh(d,b),b=""+Pa(b),ao[b]=f),g||(e=bo(a,d,function(){Un(e,"loaded")||(Sn(e),Xh(d),Pg(Va(Yh,d),0))},c)))}
function bo(a,b,c,d){d=void 0===d?null:d;var e=yd(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);rd(e,sf(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function co(a){a=$n(a);var b=document.getElementById(a);b&&(Yh(a),b.parentNode.removeChild(b))}
function eo(a,b){a&&b&&(a=""+Pa(b),(a=ao[a])&&Wh(a))}
function $n(a){var b=document.createElement("a");ac(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+fc(a)}
var ao={};var fo=[],go=!1;function ho(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&km()&&"1"!=nb()){var a=function(){go=!0;"google_ad_status"in window?L("DCLKSTAT",1):L("DCLKSTAT",2)};
try{Yn("//web.archive.org/web/20211109112832/https://static.doubleclick.net/instream/ad_status.js",a)}catch(b){}fo.push(Yg.L(function(){if(!(go||"google_ad_status"in window)){try{eo("//web.archive.org/web/20211109112832/https://static.doubleclick.net/instream/ad_status.js",a)}catch(b){}go=!0;L("DCLKSTAT",3)}},5E3))}}
function io(){var a=Number(F("DCLKSTAT",0));return isNaN(a)?0:a}
;function jo(){this.i=!1;this.h=null}
jo.prototype.initialize=function(a,b,c,d){d=void 0===d?!1:d;var e,f;if(a.program){var g=null!==(e=a.interpreterScript)&&void 0!==e?e:null,h=null!==(f=a.interpreterUrl)&&void 0!==f?f:null;if(a.interpreterSafeScript){g=a.interpreterSafeScript;xb("From proto message. b/166824318");g=g.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var k=ub();g=k?k.createScript(g):g;g=(new zb(g)).toString()}a.interpreterSafeUrl&&(h=a.interpreterSafeUrl,xb("From proto message. b/166824318"),h=Db(h.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||
"").toString());ko(this,g,h,a.program,b,c,d)}else $l(Error("Cannot initialize botguard without program"))};
function ko(a,b,c,d,e,f,g){g=void 0===g?!1:g;c?(a.i=!0,Yn(c,function(){a.i=!1;var h=0<=c.indexOf("/th/");(h?window.trayride:window.botguard)?lo(a,d,!!g,h,e):(co(c),$l(new Wi("Unable to load Botguard","from "+c)))},f)):b&&(f=yd(document,"SCRIPT"),f.textContent=b,f.nonce=dc(),document.head.appendChild(f),document.head.removeChild(f),((b=b.includes("trayride"))?window.trayride:window.botguard)?lo(a,d,!!g,b,e):$l(Error("Unable to load Botguard from JS")))}
function lo(a,b,c,d,e){var f,g;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{mo(a,new d(b,e?function(){return e(b)}:Ja))}catch(h){h instanceof Error&&$l(h)}else{try{mo(a,new d(b))}catch(h){h instanceof Error&&$l(h)}e&&e(b)}else $l(Error("Failed to finish initializing VM"))}
jo.prototype.invoke=function(a){a=void 0===a?{}:a;return this.h?this.h.hasOwnProperty("hot")?this.h.hot(void 0,void 0,a):this.h.invoke(void 0,void 0,a):null};
jo.prototype.dispose=function(){this.h=null};
function mo(a,b){a.h=b}
;var no=new jo;function oo(){return!!no.h}
function po(a){a=void 0===a?{}:a;return no.invoke(a)}
;var qo=window,ro=/[A-Za-z]+\/[0-9.]+/g;function so(a,b){if(a.replace(ro,"")!==b.replace(ro,""))return!1;a=a.match(ro);b=b.match(ro);if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(!d.startsWith(e)&&!e.startsWith(d))return!1}return!0}
function to(){var a=qo.uaChPolyfill.state;if(0===a.type)V("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&so(a.syntheticUa,b),d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),am(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);V("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),V("clientHintsPolyfillDiagnostics",
b))}}
var uo=!1;function vo(){var a;1===(null===(a=qo.uaChPolyfill)||void 0===a?void 0:a.state.type)?uo||(qo.uaChPolyfill.onReady=vo,uo=!0):qo.uaChPolyfill&&to()}
;function wo(a,b,c){I.call(this);var d=this;c=c||F("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.F="*";this.l=c;this.sessionId=null;this.channel="widget";this.H=!!a;this.B=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.H&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.F=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.u||0<=ab(d.u,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.u=this.i=this.m=null;window.addEventListener("message",this.B)}
v(wo,I);wo.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.F)}catch(d){xg(d)}}};
wo.prototype.G=function(){window.removeEventListener("message",this.B);I.prototype.G.call(this)};function xo(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new wo(!!F("WIDGET_ID_ENFORCE")),b=this.Ob.bind(this);a.m=b;a.u=null;this.h.channel="widget";if(a=F("WIDGET_ID"))this.h.sessionId=a}
m=xo.prototype;m.Ob=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,yo(this,a)),this.j[a]=!0)):this.Ya(a,b,c)};
m.Ya=function(){};
function yo(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.Cb=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Na());this.sendMessage("onReady");E(this.i,this.rb,this);this.i=[]};
m.Na=function(){return null};
function zo(a,b){a.sendMessage("infoDelivery",b)}
m.rb=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.rb({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};function Ao(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Bo(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Co(a,b,c,d){if(Oa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Do(a){xo.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Vb.bind(this));this.addEventListener("onVolumeChange",this.Wb.bind(this));this.addEventListener("onApiChange",this.Qb.bind(this));this.addEventListener("onPlaybackQualityChange",this.Sb.bind(this));this.addEventListener("onPlaybackRateChange",this.Tb.bind(this));this.addEventListener("onStateChange",this.Ub.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Xb.bind(this))}
v(Do,xo);m=Do.prototype;
m.Ya=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Ao(a)){var d=b;if(Oa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Bo(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Bo(e);break;case "loadPlaylist":case "cuePlaylist":e=Co(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Ao(a)&&zo(this,this.Na())}};
m.onReady=function(){var a=this.Cb.bind(this);this.h.i=a};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Na=function(){if(!this.api)return null;var a=this.api.getApiInterface();fb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Ub=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());zo(this,a)};
m.Sb=function(a){zo(this,{playbackQuality:a})};
m.Tb=function(a){zo(this,{playbackRate:a})};
m.Qb=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Wb=function(){zo(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Vb=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());zo(this,a)};
m.Xb=function(){var a={sphericalProperties:this.api.getSphericalProperties()};zo(this,a)};
m.dispose=function(){xo.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Eo(a){I.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.nb,this)}
v(Eo,I);m=Eo.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.ia("RECEIVING"))};
m.ia=function(a,b){this.started&&!this.h&&this.connection.ia(a,b)};
m.nb=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Fo(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Go(a,c))&&this.ia(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.Rb.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.Rb=function(a,b){this.started&&!this.h&&this.connection.ia(a,this.Ma(a,b))};
m.Ma=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.G=function(){var a=this.connection;a.h||Uf(a.i,"command",this.nb,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);I.prototype.G.call(this)};function Ho(a,b){Eo.call(this,b);this.api=a;this.start()}
v(Ho,Eo);Ho.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Ho.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Fo(a,b){switch(a){case "loadVideoById":return a=Bo(b),[a];case "cueVideoById":return a=Bo(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Co(b),[a];case "cuePlaylist":return a=Co(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Go(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Ho.prototype.Ma=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Eo.prototype.Ma.call(this,a,b)};
Ho.prototype.G=function(){Eo.prototype.G.call(this);delete this.api};function Io(a){a=void 0===a?!1:a;I.call(this);this.i=new K(a);Xd(this,Va(Vd,this.i))}
D(Io,I);Io.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
Io.prototype.l=function(a,b){this.h||this.i.ha.apply(this.i,arguments)};function Jo(a,b,c){Io.call(this);this.j=a;this.destination=b;this.id=c}
v(Jo,Io);Jo.prototype.ia=function(a,b){this.h||this.j.ia(this.destination,this.id,a,b)};
Jo.prototype.G=function(){this.destination=this.j=null;Io.prototype.G.call(this)};function Ko(a,b,c){I.call(this);this.destination=a;this.origin=c;this.i=Mg(window,"message",this.j.bind(this));this.connection=new Jo(this,a,b);Xd(this,Va(Vd,this.connection))}
v(Ko,I);Ko.prototype.ia=function(a,b,c,d){this.h||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(uf(a),this.origin))};
Ko.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h||c.l("command",b.command,b.data,a.origin))}};
Ko.prototype.G=function(){Ng(this.i);this.destination=null;I.prototype.G.call(this)};function Lo(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||pb(b);this.assets=a.assets||{};this.attrs=a.attrs||pb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Lo.prototype.clone=function(){var a=new Lo,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==La(c)?a[b]=pb(c):a[b]=c}return a};var Mo=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function No(a){a=a||"";if(window.spf){var b=a.match(Mo);spf.style.load(a,b?b[1]:"",void 0)}else Oo(a)}
function Oo(a){var b=Po(a),c=document.getElementById(b),d=c&&Un(c,"loaded");d||c&&!d||(c=Qo(a,b,function(){Un(c,"loaded")||(Sn(c),Xh(b),Pg(Va(Yh,b),0))}))}
function Qo(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=sf(a);bc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Po(a){var b=yd(document,"A");xb("This URL is never added to the DOM");ac(b,new Nb(a,Ob));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+fc(a)}
;function Ro(){I.call(this);this.i=[]}
v(Ro,I);Ro.prototype.G=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.ab,void 0)}I.prototype.G.call(this)};function So(){Ro.apply(this,arguments)}
v(So,Ro);function To(a,b,c,d){I.call(this);var e=this;this.H=b;this.webPlayerContextConfig=d;this.Ha=!1;this.api={};this.la=this.u=null;this.N=new K;this.i={};this.Y=this.va=this.elementId=this.Ia=this.config=null;this.R=!1;this.l=this.B=null;this.wa={};this.ub=["onReady"];this.lastError=null;this.Za=NaN;this.F={};this.vb=new So(this);this.ka=0;this.j=this.m=a;Xd(this,Va(Vd,this.N));Uo(this);Vo(this);Xd(this,Va(Vd,this.vb));c?this.ka=Pg(function(){e.loadNewVideoConfig(c)},0):d&&(Wo(this),Xo(this))}
v(To,I);m=To.prototype;m.getId=function(){return this.H};
m.loadNewVideoConfig=function(a){if(!this.h){this.ka&&(Qg(this.ka),this.ka=0);var b=a||{};b instanceof Lo||(b=new Lo(b));this.config=b;this.setConfig(a);Xo(this);this.isReady()&&Yo(this)}};
function Wo(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.H,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.H:a.config.attrs.id=a.H);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.Ia=a;this.config=Zo(a);Wo(this);this.va||(this.va=$o(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=Hd(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=Hd(Number(a)||a))};
function Yo(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function ap(a){var b=!0,c=bp(a);c&&a.config&&(a=cp(a),b=Un(c,"version")===a);return b&&!!C("yt.player.Application.create")}
function Xo(a){if(!a.h&&!a.R){var b=ap(a);if(b&&"html5"===(bp(a)?"html5":null))a.Y="html5",a.isReady()||dp(a);else if(ep(a),a.Y="html5",b&&a.l&&a.m)a.m.appendChild(a.l),dp(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.B=function(){c=!0;var d=fp(a,"player_bootstrap_method")?C("yt.player.Application.createAlternate")||C("yt.player.Application.create"):C("yt.player.Application.create");var e=a.config?Zo(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig);dp(a)};
a.R=!0;b?a.B():(Yn(cp(a),a.B),(b=gp(a))&&No(b),hp(a)&&!c&&B("yt.player.Application.create",null,void 0))}}}
function bp(a){var b=ud(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function dp(a){var b;if(!a.h){var c=bp(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.R=!1,!fp(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||ip(a)):a.Za=Pg(function(){dp(a)},50)}}
function ip(a){Uo(a);a.Ha=!0;var b=bp(a);if(b){a.u=jp(a,b,"addEventListener");a.la=jp(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=jp(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.u&&a.u(g,a.i[g]);Yo(a);a.va&&a.va(a.api);a.N.ha("onReady",a.api)}
function jp(a,b,c){var d=b[c];return function(){var e=Ea.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,$l(f))}}}
function Uo(a){a.Ha=!1;if(a.la)for(var b in a.i)a.i.hasOwnProperty(b)&&a.la(b,a.i[b]);for(var c in a.F)a.F.hasOwnProperty(c)&&Qg(Number(c));a.F={};a.u=null;a.la=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ia};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Ha};
function Vo(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Xh("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Xh("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Xh("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=$o(this,b);d&&(0<=ab(this.ub,a)||this.i[a]||(b=kp(this,a),this.u&&this.u(a,b)),this.N.subscribe(a,d),"onReady"===a&&this.isReady()&&Pg(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h||(b=$o(this,b))&&Uf(this.N,a,b)};
function $o(a,b){var c=b;if("string"===typeof b){if(a.wa[b])return a.wa[b];c=function(){var d=Ea.apply(0,arguments),e=C(b);if(e)try{e.apply(y,d)}catch(f){am(f)}};
a.wa[b]=c}return c?c:null}
function kp(a,b){var c="ytPlayer"+b+a.H;a.i[b]=c;y[c]=function(d){var e=Pg(function(){if(!a.h){a.N.ha(b,d);var f=a.F,g=String(e);g in f&&delete f[g]}},0);
mb(a.F,String(e))};
return c}
m.getPlayerType=function(){return this.Y||(bp(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function ep(a){a.cancel();Uo(a);a.Y=null;a.config&&(a.config.loaded=!1);var b=bp(a);b&&(ap(a)||!hp(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&eo(cp(this),this.B);Qg(this.Za);this.R=!1};
m.G=function(){ep(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){am(b)}this.wa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.Ia=this.config=this.api=null;delete this.m;delete this.j;I.prototype.G.call(this)};
function hp(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function cp(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function gp(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function fp(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===ih(d||"","&")[b]}
function Zo(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?pb(e):e}return b}
;var lp={},mp="player_uid_"+(1E9*Math.random()>>>0);function np(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?ud(d):d;var e=mp+"_"+Pa(d),f=lp[e];if(f&&c)return op(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new To(d,e,a,b);lp[e]=f;Xh("player-added",f.api);Xd(f,function(){delete lp[f.getId()]});
return f.api}
function op(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var pp=null,qp=null,rp=null;function sp(){var a=pp.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function tp(a,b,c){a="ST-"+fc(a).toString(36);b=b?kc(b):"";c=c||5;km()&&yi(a,b,c)}
;function up(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=F("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=F("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=ic(window.location.href);g&&f.push(g);g=ic(d);if(0<=ab(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),ac(f,d),d=f.href),d){g=d.match(gc);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:Fm()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&tp(d,b,k)}else tp(d,b)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=lc(a,l)+n;var t=void 0===t?pd:t;a:{t=void 0===t?pd:t;for(l=0;l<t.length;++l)if(n=t[l],n instanceof nd&&n.isValid(a)){t=new ld(a,jd);break a}t=void 0}c.href=qd(t||md)}return!0}
;B("yt.setConfig",L,void 0);B("yt.config.set",L,void 0);B("yt.setMsg",zg,void 0);B("yt.msgs.set",zg,void 0);B("yt.logging.errors.log",am,void 0);
B("writeEmbed",function(){var a=F("PLAYER_CONFIG",void 0);if(!a){var b=F("PLAYER_VARS",void 0);b&&(a={args:b})}sm(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=F("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=nh(),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));L("FORCE_CSI_ON_GEL",!0);
c=["ol"];qn("").info.actionType="embed";c&&L("TIMING_AFT_KEYS",c);L("TIMING_ACTION","embed");c=F("TIMING_INFO",{});for(var d in c)c.hasOwnProperty(d)&&Gn(d,c[d]);Gn("is_nav",1);(d=Fm())&&Gn("csn",d);(d=F("PREVIOUS_ACTION",void 0))&&!Bn()&&Gn("pa",d);d=kn();c=F("CLIENT_PROTOCOL");var e=F("CLIENT_TRANSPORT");c&&Gn("p",c);e&&Gn("t",e);Gn("yt_vis",Jn());Gn("yt_lt","cold");c=fn();if(e=hn())Z("srt",c.responseStart),1!==d.prerender&&(Gn("yt_sts","n",void 0),Z("_start",e,void 0));d=nn();0<d&&Z("fpt",d);d=
fn();d.isPerformanceNavigationTiming&&Gn("pnt",1,void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=hn()&&0<d.connectEnd-
d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));W&&W.getEntriesByType&&Ln();d=[];if(document.querySelector&&W&&W.getEntriesByName)for(var f in cn)cn.hasOwnProperty(f)&&(c=cn[f],Kn(f,c)&&d.push(c));for(f=0;f<d.length;f++)Gn("rc",d[f]);if(Bn(void 0)){f={actionType:vn[F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:vn[F("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"};if(d=Fm())f.clientScreenNonce=d;d=ln(void 0);c=jn(void 0).cttAuthInfo;
tn().info(f,d,c)}f=kn();c=en();if("cold"===f.yt_lt&&(d=Dn(),e=d.gelTicks?d.gelTicks:d.gelTicks={},d=d.gelInfos?d.gelInfos:d.gelInfos={},Bn())){for(var g in c)"tick_"+g in e||Cn(g,c[g]);g=Fn();c=ln();e=jn().cttAuthInfo;var h={},k=!1,l;for(l in f)if(!("info_"+l in d)){var n=En(l,f[l]);n&&(Rm(g,n),Rm(h,n),k=!0)}k&&tn().info(h,c,e)}B("ytglobal.timingready_",!0,void 0);Hn();(l=F("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in l?(l=l.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,
l.serializedForcedExperimentIds||(g=nh(),g.forced_experiments&&(l.serializedForcedExperimentIds=g.forced_experiments)),pp=np(a,l,!1)):pp=np(a);pp.addEventListener("onVideoDataChange",sp);a=F("POST_MESSAGE_ID","player");F("ENABLE_JS_API")?rp=new Do(pp):F("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(qp=new Ko(window.parent,a,b),rp=new Ho(pp,qp.connection));ho();M("networkless_logging_web_embedded")&&(M("embeds_web_enable_new_nwl")?nl():tl());M("embeds_enable_ua_ch_polyfill")&&vo()},
void 0);
var vp=vg(function(){In();var a=Ai.getInstance(),b=!!((Di("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&af(document.body,"exp-invert-logo"))if(c&&!af(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!af(d,"inverted-hdpi")){var e=Ze(d);$e(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&af(document.body,"inverted-hdpi")&&bf();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Di(b)||0;d=c?d|67108864:
d&-67108865;0==d?delete zi[b]:(c=d.toString(16),zi[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in zi)d.push(f+"="+encodeURIComponent(String(zi[f])));yi(b,d.join("&"),63072E3,a.i,c)}Nn.h||(Nn.h=new Nn);a=Nn.h;f=16623;var g=void 0===g?{}:g;Object.values(cm).includes(f)||($l(new Wi("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.o=[];a.u=[];g.fb?Qn(a,f,g):Rn(a,f,g)}),wp=vg(function(){pp&&
pp.sendAbandonmentPing&&pp.sendAbandonmentPing();
F("PL_ATT")&&no.dispose();for(var a=0,b=fo.length;a<b;a++)Yg.aa(fo[a]);fo.length=0;co("//web.archive.org/web/20211109112832/https://static.doubleclick.net/instream/ad_status.js");go=!1;L("DCLKSTAT",0);(0,Wd)(rp,qp);pp&&(pp.removeEventListener("onVideoDataChange",sp),pp.destroy())});
window.addEventListener?(window.addEventListener("load",vp),window.addEventListener("unload",wp)):window.attachEvent&&(window.attachEvent("onload",vp),window.attachEvent("onunload",wp));Wa("yt.abuse.player.botguardInitialized",C("yt.abuse.player.botguardInitialized")||oo);Wa("yt.abuse.player.invokeBotguard",C("yt.abuse.player.invokeBotguard")||po);Wa("yt.abuse.dclkstatus.checkDclkStatus",C("yt.abuse.dclkstatus.checkDclkStatus")||io);
Wa("yt.player.exports.navigate",C("yt.player.exports.navigate")||up);Wa("yt.util.activity.init",C("yt.util.activity.init")||$g);Wa("yt.util.activity.getTimeSinceActive",C("yt.util.activity.getTimeSinceActive")||ch);Wa("yt.util.activity.setTimestamp",C("yt.util.activity.setTimestamp")||ah);}).call(this);


}
/*
     FILE ARCHIVED ON 11:28:32 Nov 09, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:01:57 Jun 19, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.816
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.01
  esindex: 0.026
  cdx.remote: 8.0
  LoadShardBlock: 340.971 (6)
  PetaboxLoader3.datanode: 299.863 (8)
  load_resource: 536.803 (2)
  PetaboxLoader3.resolve: 469.481 (2)
*/