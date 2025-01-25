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
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.T=b.prototype}
function oa(){this.o=!1;this.l=null;this.i=void 0;this.h=1;this.A=this.m=0;this.F=this.j=null}
function pa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
oa.prototype.B=function(a){this.i=a};
function qa(a,b){a.j={gb:b,ib:!0};a.h=a.m||a.A}
oa.prototype.return=function(a){this.j={return:a};this.h=this.A};
function w(a,b,c){a.h=c;return{value:b}}
oa.prototype.u=function(a){this.h=a};
function ra(a,b,c){a.m=b;void 0!=c&&(a.A=c)}
function sa(a,b){a.h=b;a.m=0}
function ta(a){a.m=0;var b=a.j.gb;a.j=null;return b}
function ua(a){a.F=[a.j];a.m=0;a.A=0}
function va(a){var b=a.F.splice(0)[0];(b=a.j=a.j||b)?b.ib?a.h=a.m||a.A:void 0!=b.u&&a.A<b.u?(a.h=b.u,a.j=null):a.h=a.A:a.h=0}
function wa(a){this.h=new oa;this.i=a}
function xa(a,b){pa(a.h);var c=a.h.l;if(c)return ya(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Aa(a)}
function ya(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.l=null,qa(a.h,g),Aa(a)}a.h.l=null;d.call(a.h,f);return Aa(a)}
function Aa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,qa(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.ib)throw b.gb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ba(a){this.next=function(b){pa(a.h);a.h.l?b=ya(a,a.h.l.next,b,a.h.B):(a.h.B(b),b=Aa(a));return b};
this.throw=function(b){pa(a.h);a.h.l?b=ya(a,a.h.l["throw"],b,a.h.B):(qa(a.h,b),b=Aa(a));return b};
this.return=function(b){return xa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Da(new Ba(new wa(a)))}
function Ea(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect",function(a){return a?a:{}});
r("Reflect.construct",function(){return ia});
r("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.o=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.A()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.A=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.S),reject:g(this.A)}};
b.prototype.S=function(g){if(g===this)this.A(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ka(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.N(g):this.m(g)}};
b.prototype.N=function(g){var h=void 0;try{h=g.then}catch(k){this.A(k);return}"function"==typeof h?this.la(h,g):this.m(g)};
b.prototype.A=function(g){this.B(2,g)};
b.prototype.m=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.F()};
b.prototype.Y=function(){var g=this;e(function(){if(g.H()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.H=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.F=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ka=function(g){var h=this.l();g.ya(h.resolve,h.reject)};
b.prototype.la=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,q){return"function"==typeof t?function(z){try{l(t(z))}catch(A){n(A)}}:q}
var l,n,p=new b(function(t,q){l=t;n=q});
this.ya(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ya=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.o=!0};
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
function Ka(a){a.Qa=void 0;a.getInstance=function(){return a.Qa?a.Qa:a.Qa=new a}}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ua=Sa:Ua=Ta;return Ua.apply(null,arguments)}
function Va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Wa(a,b){B(a,b,void 0)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.T=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Rm=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Xa(a){return a}
;function Ya(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ya);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.vb=b)}
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
m.Oa=!0;m.Ka=function(){return 1};
m.toString=function(){return this.h+""};
function Cb(a){if(a instanceof Ab&&a.constructor===Ab)return a.h;La(a);return"type_error:TrustedResourceUrl"}
var Bb={};function Db(a){var b=ub();a=b?b.createScriptURL(a):a;return new Ab(a,Bb)}
;var Eb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Fb=/&/g,Gb=/</g,Hb=/>/g,Ib=/"/g,Kb=/'/g,Lb=/\x00/g,Mb=/[\x00&<>"']/;function Nb(a,b){this.h=b===Ob?a:""}
m=Nb.prototype;m.ca=!0;m.ba=function(){return this.h.toString()};
m.Oa=!0;m.Ka=function(){return 1};
m.toString=function(){return this.h.toString()};
function Pb(a){if(a instanceof Nb&&a.constructor===Nb)return a.h;La(a);return"type_error:SafeUrl"}
var Qb=RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',"i"),Rb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Sb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ob={},Tb=new Nb("about:invalid#zClosurez",Ob);var Ub;a:{var Vb=y.navigator;if(Vb){var Wb=Vb.userAgent;if(Wb){Ub=Wb;break a}}Ub=""}function G(a){return-1!=Ub.indexOf(a)}
;function Xb(){return(G("Chrome")||G("CriOS"))&&!G("Edge")||G("Silk")}
;var Yb={};function Zb(a,b,c){this.h=c===Yb?a:"";this.i=b;this.ca=this.Oa=!0}
Zb.prototype.Ka=function(){return this.i};
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
zc&&(yc=zc?zc[1]:"");if(rc){var Ac=wc();if(null!=Ac&&Ac>parseFloat(yc)){xc=String(Ac);break a}}xc=yc}var Bc=xc,Cc;if(y.document&&rc){var Ec=wc();Cc=Ec?Ec:parseInt(Bc,10)||void 0}else Cc=void 0;var Fc=Cc;var Gc=oc()||G("iPod"),Hc=G("iPad");!G("Android")||Xb();Xb();var Ic=G("Safari")&&!(Xb()||G("Coast")||G("Opera")||G("Edge")||G("Edg/")||G("OPR")||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(oc()||G("iPad")||G("iPod"));var Jc={},Kc=null;
function Lc(a,b){Ma(a);void 0===b&&(b=0);if(!Kc){Kc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Jc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Kc[h]&&(Kc[h]=g)}}}b=Jc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Mc="function"===typeof Uint8Array;var Nc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Oc(a){Object.isFrozen(a)||(Nc?a[Nc]|=1:void 0!==a.h?a.h|=1:Object.defineProperties(a,{h:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a}
;function Pc(a){return null!==a&&"object"===typeof a&&a.constructor===Object}
;function Qc(a,b){if(null!=a)return Array.isArray(a)||Pc(a)?Rc(a,b):b(a)}
function Rc(a,b){if(Array.isArray(a)){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=Qc(a[d],b);if(Array.isArray(a)){var e;Nc?e=a[Nc]:e=a.h;a=!!((null==e?0:e)&1)}else a=!1;a&&Oc(c);return c}e={};for(c in a)e[c]=Qc(a[c],b);return e}
function Sc(a){a:switch(typeof a){case "number":a=isFinite(a)?a:String(a);break a;case "object":Mc&&null!=a&&a instanceof Uint8Array&&(a=Lc(a))}return Array.isArray(a)?Rc(a,Sc):a}
function Tc(a){return Mc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;var Uc;function Vc(a,b,c){var d=Uc;Uc=null;a||(a=d);d=this.constructor.Xm;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.Wm||0);this.h=null;this.P=a;a:{d=this.P.length;a=d-1;if(d&&(d=this.P[a],Pc(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.l?(a+=this.j,(d=this.P[a])?Array.isArray(d)&&Oc(d):this.P[a]=Wc):(Xc(this),(d=this.i[a])?Array.isArray(d)&&Oc(d):this.i[a]=Wc)}
var Wc=Object.freeze(Oc([]));function Xc(a){var b=a.l+a.j;a.P[b]||(a.i=a.P[b]={})}
function Yc(a,b,c){return-1===b?null:(void 0===c?0:c)||b>=a.l?a.i?a.i[b]:void 0:a.P[b+a.j]}
Vc.prototype.toJSON=function(){return Rc(this.P,Sc)};
Vc.prototype.toString=function(){return this.P.toString()};
Vc.prototype.clone=function(){var a=this.constructor,b=Rc(this.P,Tc);Uc=b;a=new a(b);Uc=null;Zc(a,this);return a};
function Zc(a,b){b.A&&(a.A=b.A.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length){var h=a,k=e[0].constructor,l=f;l=void 0===l?!1:l;h.h||(h.h={});f=h.h[g];if(!f){var n=h;l=void 0===l?!1:l;f=Yc(n,g,l);null==f&&(f=Wc);if(f===Wc){var p=f=Oc(f.slice());(l=void 0===l?!1:l)||g>=n.l?(Xc(n),n.i[g]=p):n.P[g+n.j]=p}l=f;f=[];for(n=0;n<l.length;n++)f[n]=new k(l[n]);h.h[g]=f}g=f;for(h=0;h<Math.min(g.length,e.length);h++)Zc(g[h],e[h])}}else h=
a,k=e.constructor,-1===g?g=null:(h.h||(h.h={}),(l=h.h[g])?g=l:(f=Yc(h,g,void 0===f?!1:f),null==f?g=l:(k=new k(f),g=h.h[g]=k))),g&&Zc(g,e)}}}}
;var $c=window;xb("csi.gstatic.com");xb("googleads.g.doubleclick.net");xb("pagead2.googlesyndication.com");xb("partner.googleadservices.com");xb("pubads.g.doubleclick.net");xb("securepubads.g.doubleclick.net");xb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var ad={};function bd(){}
function cd(a){this.h=a}
v(cd,bd);cd.prototype.toString=function(){return this.h};
var dd=new cd("about:invalid#zTSz",ad);function ed(a){this.isValid=a}
function fd(a){return new ed(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var gd=[fd("data"),fd("http"),fd("https"),fd("mailto"),fd("ftp"),new ed(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function hd(a){if(a instanceof bd)if(a instanceof cd)a=a.h;else throw Error("");else a=Pb(a);return a}
;function id(a,b){a.src=Cb(b);var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;var d=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]");(c=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function jd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=jd.prototype;m.clone=function(){return new jd(this.x,this.y)};
m.equals=function(a){return a instanceof jd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function kd(a,b){this.width=a;this.height=b}
m=kd.prototype;m.clone=function(){return new kd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function ld(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function md(a,b){ib(b,function(c,d){c&&"object"==typeof c&&c.ca&&(c=c.ba());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:nd.hasOwnProperty(d)?a.setAttribute(nd[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var nd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function od(a,b,c){var d=arguments,e=document,f=d[1],g=pd(e,String(d[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):md(g,f));2<d.length&&qd(e,g,d);return g}
function qd(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ma(f)||Na(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Na(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}E(g?gb(f):f,d)}}}
function pd(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function rd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function sd(a){var b=td;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function ud(){var a=[];sd(function(b){a.push(b)});
return a}
var td={mc:"allow-forms",nc:"allow-modals",oc:"allow-orientation-lock",pc:"allow-pointer-lock",qc:"allow-popups",sc:"allow-popups-to-escape-sandbox",tc:"allow-presentation",uc:"allow-same-origin",wc:"allow-scripts",xc:"allow-top-navigation",yc:"allow-top-navigation-by-user-activation"},vd=$a(function(){return ud()});
function wd(){var a=xd(),b={};E(vd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function xd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function yd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var zd=(new Date).getTime();function Ad(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Bd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,q=0;64>q;q+=4)t[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=t[q-3]^t[q-8]^t[q-14]^t[q-16],t[q]=(p<<1|p>>>31)&4294967295;p=e[0];var z=e[1],A=e[2],H=e[3],P=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var Q=H^z&(A^H);var S=1518500249}else Q=z^A^H,S=1859775393;else 60>q?(Q=z&A|H&(z|A),S=2400959708):(Q=z^A^H,S=3395469782);Q=((p<<5|p>>>27)&4294967295)+Q+P+S+t[q]&4294967295;P=H;H=A;A=(z<<30|z>>>2)&4294967295;z=p;p=Q}e[0]=e[0]+p&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+A&4294967295;e[3]=e[3]+H&4294967295;e[4]=e[4]+P&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],z=0,A=p.length;z<A;++z)q.push(p.charCodeAt(z));p=q}t||(t=p.length);q=0;if(0==l)for(;q+64<t;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<t;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<t;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=t&255,t>>>=8;b(f);for(q=t=0;5>q;q++)for(var z=24;0<=z;z-=8)p[t++]=e[q]>>z&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,xb:function(){for(var p=d(),t="",q=0;q<p.length;q++)t+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return t}}}
;function Cd(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,Dd(Ad(d),a,c||null)].join(" "):null}
function Dd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),Ed(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=Ed(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ed(a){var b=Bd();b.update(a);return b.xb().toLowerCase()}
;var Fd={};function Gd(a){this.h=a||{cookie:""}}
m=Gd.prototype;m.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ra:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.cn;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ra}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Eb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ra:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Eb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Hd=new Gd("undefined"==typeof document?null:document);function Id(a){return!!Fd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Jd(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;Id(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new Gd(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");Id(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Kd(a,b,c,d){(a=y[a])||(a=(new Gd(document)).get(b));return a?Cd(a,c,d):null}
function Ld(a){var b=void 0===b?!1:b;var c=Ad(String(y.location.href)),d=[];if(Jd(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new Gd(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Cd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Id(b)&&((b=Kd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Kd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Md(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Nd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ma(d)?Nd.apply(null,d):Md(d)}}
;function I(){this.h=this.h;this.A=this.A}
I.prototype.h=!1;I.prototype.dispose=function(){this.h||(this.h=!0,this.G())};
function Od(a,b){a.h?b():(a.A||(a.A=[]),a.A.push(b))}
I.prototype.G=function(){if(this.A)for(;this.A.length;)this.A.shift()()};function Pd(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Pd.prototype.stopPropagation=function(){this.j=!0};
Pd.prototype.preventDefault=function(){this.defaultPrevented=!0};function Qd(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Rd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Sd[c])c=Sd[c];else{c=String(c);if(!Sd[c]){var f=/function\s+([^\(]+)/m.exec(c);Sd[c]=f?f[1]:"[Anonymous]"}c=Sd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Rd(a,b){b||(b={});b[Td(a)]=!0;var c=a.stack||"";(a=a.vb)&&!b[Td(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Rd(a,b));return c}
function Td(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Sd={};var Ud=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ja,b),y.removeEventListener("test",Ja,b)}catch(c){}return a}();function Vd(a,b){Pd.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
D(Vd,Pd);var Wd={2:"touch",3:"pen",4:"mouse"};
Vd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(tc){a:{try{pc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Wd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Vd.T.preventDefault.call(this)};
Vd.prototype.stopPropagation=function(){Vd.T.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Vd.prototype.preventDefault=function(){Vd.T.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Xd="closure_listenable_"+(1E6*Math.random()|0);var Yd=0;function Zd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ba=e;this.key=++Yd;this.sa=this.xa=!1}
function $d(a){a.sa=!0;a.listener=null;a.proxy=null;a.src=null;a.Ba=null}
;function ae(a){this.src=a;this.listeners={};this.h=0}
ae.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=be(a,b,d,e);-1<g?(b=a[g],c||(b.xa=!1)):(b=new Zd(b,this.src,f,!!d,e),b.xa=c,a.push(b));return b};
ae.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=be(e,b,c,d);return-1<b?($d(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ce(a,b){var c=b.type;c in a.listeners&&fb(a.listeners[c],b)&&($d(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function be(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.sa&&f.listener==b&&f.capture==!!c&&f.Ba==d)return e}return-1}
;var de="closure_lm_"+(1E6*Math.random()|0),ee={},fe=0;function ge(a,b,c,d,e){if(d&&d.once)he(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ge(a,b[f],c,d,e);else c=ie(c),a&&a[Xd]?a.U(b,c,Na(d)?!!d.capture:!!d,e):je(a,b,c,!1,d,e)}
function je(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Na(e)?!!e.capture:!!e,h=ke(a);h||(a[de]=h=new ae(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=le();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ud||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(me(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");fe++}}
function le(){function a(c){return b.call(a.src,a.listener,c)}
var b=ne;return a}
function he(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)he(a,b[f],c,d,e);else c=ie(c),a&&a[Xd]?a.i.add(String(b),c,!0,Na(d)?!!d.capture:!!d,e):je(a,b,c,!0,d,e)}
function oe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)oe(a,b[f],c,d,e);else(d=Na(d)?!!d.capture:!!d,c=ie(c),a&&a[Xd])?a.i.remove(String(b),c,d,e):a&&(a=ke(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=be(b,c,d,e)),(c=-1<a?b[a]:null)&&pe(c))}
function pe(a){if("number"!==typeof a&&a&&!a.sa){var b=a.src;if(b&&b[Xd])ce(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(me(c),d):b.addListener&&b.removeListener&&b.removeListener(d);fe--;(c=ke(b))?(ce(c,a),0==c.h&&(c.src=null,b[de]=null)):$d(a)}}}
function me(a){return a in ee?ee[a]:ee[a]="on"+a}
function ne(a,b){if(a.sa)a=!0;else{b=new Vd(b,this);var c=a.listener,d=a.Ba||a.src;a.xa&&pe(a);a=c.call(d,b)}return a}
function ke(a){a=a[de];return a instanceof ae?a:null}
var qe="__closure_events_fn_"+(1E9*Math.random()>>>0);function ie(a){if("function"===typeof a)return a;a[qe]||(a[qe]=function(b){return a.handleEvent(b)});
return a[qe]}
;function J(){I.call(this);this.i=new ae(this);this.S=this;this.F=null}
D(J,I);J.prototype[Xd]=!0;J.prototype.addEventListener=function(a,b,c,d){ge(this,a,b,c,d)};
J.prototype.removeEventListener=function(a,b,c,d){oe(this,a,b,c,d)};
function re(a,b){var c=a.F;if(c){var d=[];for(var e=1;c;c=c.F)d.push(c),++e}a=a.S;c=b.type||b;"string"===typeof b?b=new Pd(b,a):b instanceof Pd?b.target=b.target||a:(e=b,b=new Pd(c,a),sb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=se(g,c,!0,b)&&e}b.j||(g=b.h=a,e=se(g,c,!0,b)&&e,b.j||(e=se(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=se(g,c,!1,b)&&e}
J.prototype.G=function(){J.T.G.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,$d(d[e]);delete a.listeners[c];a.h--}}this.F=null};
J.prototype.U=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function se(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.sa&&g.capture==c){var h=g.listener,k=g.Ba||g.src;g.xa&&ce(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function te(a){var b,c;J.call(this);var d=this;this.B=this.l=0;this.R=null!==a&&void 0!==a?a:{L:function(e,f){return setTimeout(e,f)},
aa:clearTimeout};this.j=null!==(c=null===(b=window.navigator)||void 0===b?void 0:b.onLine)&&void 0!==c?c:!0;this.m=function(){return x(function(e){return w(e,ue(d),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.B||ve(this)}
v(te,J);te.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.R.aa(this.B);delete te.h};
te.prototype.I=function(){return this.j};
function ve(a){a.B=a.R.L(function(){var b;return x(function(c){if(1==c.h)return a.j?(null===(b=window.navigator)||void 0===b?0:b.onLine)?c.u(3):w(c,ue(a),3):w(c,ue(a),3);ve(a);c.h=0})},3E4)}
function ue(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f;return x(function(g){switch(g.h){case 1:return d=window.AbortController?new window.AbortController:void 0,e=null===d||void 0===d?void 0:d.signal,f=!1,ra(g,2,3),d&&(a.l=a.R.L(function(){d.abort()},b||2E4)),w(g,fetch("/generate_204",{method:"HEAD",
signal:e}),5);case 5:f=!0;case 3:ua(g);a.o=void 0;a.l&&(a.R.aa(a.l),a.l=0);f!==a.j&&(a.j=f,a.j?re(a,"networkstatus-online"):re(a,"networkstatus-offline"));c(f);va(g);break;case 2:ta(g),f=!1,g.u(3)}})})}
;function we(){this.data_=[];this.h=-1}
we.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
we.prototype.get=function(a){return!!this.data_[a]};
function xe(a){-1==a.h&&(a.h=db(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function ye(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
ye.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function ze(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Ae;
function Be(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=pd(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ua(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.bb;c.bb=null;e()}};
return function(e){d.next={bb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function Ce(){this.i=this.h=null}
Ce.prototype.add=function(a,b){var c=De.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Ce.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var De=new ye(function(){return new Ee},function(a){return a.reset()});
function Ee(){this.next=this.scope=this.h=null}
Ee.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Ee.prototype.reset=function(){this.next=this.scope=this.h=null};function Fe(a,b){Ge||He();Ie||(Ge(),Ie=!0);Je.add(a,b)}
var Ge;function He(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);Ge=function(){a.then(Ke)}}else Ge=function(){var b=Ke;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!G("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(Ae||(Ae=Be()),Ae(b)):y.setImmediate(b)}}
var Ie=!1,Je=new Ce;function Ke(){for(var a;a=Je.remove();){try{a.h.call(a.scope)}catch(b){nc(b)}ze(De,a)}Ie=!1}
;function Le(a,b){this.h=a[y.Symbol.iterator]();this.i=b;this.j=0}
Le.prototype[Symbol.iterator]=function(){return this};
Le.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function Me(a,b){return new Le(a,b)}
;function Ne(){this.blockSize=-1}
;function Oe(){this.blockSize=-1;this.blockSize=64;this.h=[];this.A=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
D(Oe,Ne);Oe.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Pe(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Oe.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.A,f=this.i;d<b;){if(0==f)for(;d<=c;)Pe(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Pe(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Pe(this,e);f=0;break}}this.i=f;this.l+=b}};
Oe.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.A[c]=b&255,b/=256;Pe(this,this.A);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Qe(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Re(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Se(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Qe(a).match(/\S+/g)||[],b=0<=ab(a,b));return b}
function Te(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Se(a,"inverted-hdpi")&&Re(a,Array.prototype.filter.call(a.classList?a.classList:Qe(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Ue="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function Ve(){}
Ve.prototype.V=function(){throw Ue;};
Ve.prototype.next=function(){return We};
var We={done:!0,value:void 0};function Xe(a){return{value:a,done:!1}}
function Ye(a){if(a.done)throw Ue;return a.value}
Ve.prototype.O=function(){return this};function Ze(a){if(a instanceof $e||a instanceof af||a instanceof bf)return a;if("function"==typeof a.V)return new $e(function(){return cf(a)});
if("function"==typeof a[Symbol.iterator])return new $e(function(){return a[Symbol.iterator]()});
if("function"==typeof a.O)return new $e(function(){return cf(a.O())});
throw Error("Not an iterator or iterable.");}
function cf(a){if(!(a instanceof Ve))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.V();break}catch(d){if(d!==Ue)throw d;b=!0}return{value:c,done:b}}}}
function $e(a){this.h=a}
$e.prototype.O=function(){return new af(this.h())};
$e.prototype[Symbol.iterator]=function(){return new bf(this.h())};
$e.prototype.i=function(){return new bf(this.h())};
function af(a){this.h=a}
v(af,Ve);af.prototype.V=function(){var a=this.h.next();if(a.done)throw Ue;return a.value};
af.prototype.next=function(){return this.h.next()};
af.prototype[Symbol.iterator]=function(){return new bf(this.h)};
af.prototype.i=function(){return new bf(this.h)};
function bf(a){$e.call(this,function(){return a});
this.j=a}
v(bf,$e);bf.prototype.next=function(){return this.j.next()};function df(a,b){this.i={};this.h=[];this.ga=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof df)for(c=ef(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function ef(a){ff(a);return a.h.concat()}
m=df.prototype;m.has=function(a){return gf(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||hf;ff(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function hf(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.ga=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return gf(this.i,a)?(delete this.i[a],--this.size,this.ga++,this.h.length>2*this.size&&ff(this),!0):!1};
function ff(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];gf(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],gf(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return gf(this.i,a)?this.i[a]:b};
m.set=function(a,b){gf(this.i,a)||(this.size+=1,this.h.push(a),this.ga++);this.i[a]=b};
m.forEach=function(a,b){for(var c=ef(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new df(this)};
m.keys=function(){return Ze(this.O(!0)).i()};
m.values=function(){return Ze(this.O(!1)).i()};
m.entries=function(){var a=this;return Me(this.keys(),function(b){return[b,a.get(b)]})};
m.O=function(a){ff(this);var b=0,c=this.ga,d=this,e=new Ve;e.next=function(){if(c!=d.ga)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return We;var g=d.h[b++];return Xe(a?g:d.i[g])};
var f=e.next;e.V=function(){return Ye(f.call(e))};
return e};
function gf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function jf(a){kf();return Db(a)}
var kf=Ja;function lf(a){var b=[];mf(new nf,a,b);return b.join("")}
function nf(){}
function mf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),mf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),of(d,c),c.push(":"),mf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":of(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var pf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},qf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function of(a,b){b.push('"',a.replace(qf,function(c){var d=pf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),pf[c]=d);return d}),'"')}
;function rf(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function sf(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function tf(a){this.h=0;this.o=void 0;this.l=this.i=this.j=null;this.A=this.m=!1;if(a!=Ja)try{var b=this;a.call(void 0,function(c){uf(b,2,c)},function(c){uf(b,3,c)})}catch(c){uf(this,3,c)}}
function vf(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
vf.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var wf=new ye(function(){return new vf},function(a){a.reset()});
function xf(a,b,c){var d=wf.get();d.i=a;d.onRejected=b;d.context=c;return d}
function yf(a){return new tf(function(b,c){c(a)})}
tf.prototype.then=function(a,b,c){return zf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
tf.prototype.$goog_Thenable=!0;function Af(a,b){return zf(a,null,b,void 0)}
tf.prototype.cancel=function(a){if(0==this.h){var b=new Bf(a);Fe(function(){Cf(this,b)},this)}};
function Cf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Cf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Ef(c),Ff(c,e,3,b)))}a.j=null}else uf(a,3,b)}
function Gf(a,b){a.i||2!=a.h&&3!=a.h||Hf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function zf(a,b,c,d){var e=xf(null,null,null);e.h=new tf(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Bf?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Gf(a,e);return e.h}
tf.prototype.F=function(a){this.h=0;uf(this,2,a)};
tf.prototype.H=function(a){this.h=0;uf(this,3,a)};
function uf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.F,f=a.H;if(d instanceof tf){Gf(d,xf(e||Ja,f||null,a));var g=!0}else if(sf(d))d.then(e,f,a),g=!0;else{if(Na(d))try{var h=d.then;if("function"===typeof h){If(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.o=c,a.h=b,a.j=null,Hf(a),3!=b||c instanceof Bf||Jf(a,c))}}
function If(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Hf(a){a.m||(a.m=!0,Fe(a.B,a))}
function Ef(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
tf.prototype.B=function(){for(var a;a=Ef(this);)Ff(this,a,this.h,this.o);this.m=!1};
function Ff(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.A;a=a.j)a.A=!1;if(b.h)b.h.j=null,Kf(b,c,d);else try{b.j?b.i.call(b.context):Kf(b,c,d)}catch(e){Lf.call(null,e)}ze(wf,b)}
function Kf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Jf(a,b){a.A=!0;Fe(function(){a.A&&Lf.call(null,b)})}
var Lf=nc;function Bf(a){Ya.call(this,a)}
D(Bf,Ya);Bf.prototype.name="cancel";function K(a){I.call(this);this.o=1;this.l=[];this.m=0;this.i=[];this.j={};this.B=!!a}
D(K,I);m=K.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.o=e+3;d.push(e);return e};
function Mf(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.oa(b)}}
m.oa=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ja):(c&&fb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.ha=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];Nf(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.oa(c)}}return 0!=e}return!1};
function Nf(a,b,c){Fe(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.oa,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.G=function(){K.T.G.call(this);this.clear();this.l.length=0};function Of(a){this.h=a}
Of.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,lf(b))};
Of.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Of.prototype.remove=function(a){this.h.remove(a)};function Pf(a){this.h=a}
D(Pf,Of);function Qf(a){this.data=a}
function Rf(a){return void 0===a||a instanceof Qf?a:new Qf(a)}
Pf.prototype.set=function(a,b){Pf.T.set.call(this,a,Rf(b))};
Pf.prototype.i=function(a){a=Pf.T.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Pf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Sf(a){this.h=a}
D(Sf,Pf);Sf.prototype.set=function(a,b,c){if(b=Rf(b)){if(c){if(c<Date.now()){Sf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Sf.T.set.call(this,a,b)};
Sf.prototype.i=function(a){var b=Sf.T.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Sf.prototype.remove.call(this,a);else return b}};function Tf(){}
;function Uf(){}
D(Uf,Tf);Uf.prototype[Symbol.iterator]=function(){return Ze(this.O(!0)).i()};
Uf.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Vf(a){this.h=a}
D(Vf,Uf);m=Vf.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.O=function(a){var b=0,c=this.h,d=new Ve;d.next=function(){if(b>=c.length)return We;var f=c.key(b++);if(a)return Xe(f);f=c.getItem(f);if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return Xe(f)};
var e=d.next;d.V=function(){return Ye(e.call(d))};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Wf(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
D(Wf,Vf);function Xf(a,b){this.i=a;this.h=null;var c;if(c=rc)c=!(9<=Number(Fc));if(c){Yf||(Yf=new df);this.h=Yf.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Yf.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
D(Xf,Uf);var Zf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Yf=null;function $f(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Zf[b]})}
m=Xf.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute($f(a),b);ag(this)};
m.get=function(a){a=this.h.getAttribute($f(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute($f(a));ag(this)};
m.O=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ve;d.next=function(){if(b>=c.length)return We;var f=c[b++];if(a)return Xe(decodeURIComponent(f.nodeName.replace(/\./g,"%")).substr(1));f=f.nodeValue;if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return Xe(f)};
var e=d.next;d.V=function(){return Ye(e.call(d))};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ag(this)};
function ag(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function bg(a,b){this.i=a;this.h=b+"::"}
D(bg,Uf);bg.prototype.set=function(a,b){this.i.set(this.h+a,b)};
bg.prototype.get=function(a){return this.i.get(this.h+a)};
bg.prototype.remove=function(a){this.i.remove(this.h+a)};
bg.prototype.O=function(a){var b=this.i.O(!0),c=this,d=new Ve;d.next=function(){try{var f=b.V()}catch(g){if(g===Ue)return We;throw g;}for(;f.substr(0,c.h.length)!=c.h;)try{f=b.V()}catch(g){if(g===Ue)return We;throw g;}return Xe(a?f.substr(c.h.length):c.i.get(f))};
var e=d.next;d.V=function(){return Ye(e.call(d))};
return d};function cg(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;function dg(a){Vc.call(this,a,1)}
v(dg,Vc);var eg,fg,gg,hg=y.window,ig=(null===(eg=null===hg||void 0===hg?void 0:hg.yt)||void 0===eg?void 0:eg.config_)||(null===(fg=null===hg||void 0===hg?void 0:hg.ytcfg)||void 0===fg?void 0:fg.data_)||{},jg=(null===(gg=null===hg||void 0===hg?void 0:hg.ytcfg)||void 0===gg?void 0:gg.obfuscatedData_)||[];function kg(){dg.apply(this,arguments)}
v(kg,dg);new kg(jg);B("yt.config_",ig,void 0);B("yt.configJspb_",jg,void 0);function L(){cg(ig,arguments)}
function F(a,b){return a in ig?ig[a]:b}
;var lg=[];function mg(a){lg.forEach(function(b){return b(a)})}
function ng(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){og(b)}}:a}
function og(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=F("ERRORS",[]),e.push([a,"ERROR",b,c,d]),L("ERRORS",e));mg(a)}
function pg(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=F("ERRORS",[]),e.push([a,"WARNING",b,c,d]),L("ERRORS",e))}
;var qg=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};B("yt.msgs_",qg,void 0);function rg(a){cg(qg,arguments)}
;function M(a){a=sg(a);return"string"===typeof a&&"false"===a?!1:!!a}
function tg(a,b){a=sg(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function sg(a){var b=F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:F("EXPERIMENT_FLAGS",{})[a]}
;var ug={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},vg={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var wg=0,xg=uc?"webkit":tc?"moz":rc?"ms":qc?"o":"";B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++wg},void 0);var yg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function zg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in yg||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Ag(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
zg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
zg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
zg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var kb=y.ytEventsEventsListeners||{};B("ytEventsEventsListeners",kb,void 0);var Bg=y.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",Bg,void 0);
function Cg(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Na(e[4])&&Na(d)&&ob(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Dg=$a(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Eg(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Cg(a,b,c,d);if(e)return e;e=++Bg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new zg(h);if(!rd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new zg(h);
h.currentTarget=a;return c.call(a,h)};
g=ng(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Dg()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);kb[e]=[a,b,c,g,d];return e}
function Fg(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in kb){var c=kb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Dg()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete kb[b]}}))}
;var Gg=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Hg(a,b){"function"===typeof a&&(a=ng(a));return window.setTimeout(a,b)}
function Ig(a){window.clearTimeout(a)}
;function Jg(a){this.F=a;this.i=null;this.m=0;this.B=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.N=Eg(window,"mousemove",Ua(this.S,this));a=Ua(this.H,this);"function"===typeof a&&(a=ng(a));this.Y=window.setInterval(a,25)}
D(Jg,I);Jg.prototype.S=function(a){void 0===a.h&&Ag(a);var b=a.h;void 0===a.i&&Ag(a);this.i=new jd(b,a.i)};
Jg.prototype.H=function(){if(this.i){var a=Gg();if(0!=this.m){var b=this.B,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.F();this.o=d}this.m=a;this.B=this.i;this.l=(this.l+1)%4}};
Jg.prototype.G=function(){window.clearInterval(this.Y);Fg(this.N)};function Kg(){}
function Lg(a,b){return Mg(a,0,b)}
Kg.prototype.L=function(a,b){return Mg(a,1,b)};
function Ng(a,b){Mg(a,2,b)}
;function Og(){Kg.apply(this,arguments)}
v(Og,Kg);function Pg(){Og.h||(Og.h=new Og);return Og.h}
function Mg(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Hg(a,c||0)}
Og.prototype.aa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):Ig(a)}};
Og.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
Og.prototype.pause=function(){var a=C("yt.scheduler.instance.pause");a&&a()};var Qg=Pg();var Rg={};
function Sg(a){var b=void 0===a?{}:a;a=void 0===b.Mb?!1:b.Mb;b=void 0===b.zb?!0:b.zb;if(null==C("_lact",window)){var c=parseInt(F("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&Tg();Eg(document,"keydown",Tg);Eg(document,"keyup",Tg);Eg(document,"mousedown",Tg);Eg(document,"mouseup",Tg);a?Eg(window,"touchmove",function(){Ug("touchmove",200)},{passive:!0}):(Eg(window,"resize",function(){Ug("resize",200)}),b&&Eg(window,"scroll",function(){Ug("scroll",200)}));
new Jg(function(){Ug("mouse",100)});
Eg(document,"touchstart",Tg,{passive:!0});Eg(document,"touchend",Tg,{passive:!0})}}
function Ug(a,b){Rg[a]||(Rg[a]=!0,Qg.L(function(){Tg();Rg[a]=!1},b))}
function Tg(){null==C("_lact",window)&&Sg();var a=Date.now();B("_lact",a,window);-1==C("_fact",window)&&B("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function Vg(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function Wg(){var a=Xg;C("yt.ads.biscotti.getId_")||B("yt.ads.biscotti.getId_",a,void 0)}
function Yg(a){B("yt.ads.biscotti.lastId_",a,void 0)}
;var Zg=/^[\w.]*$/,$g={q:!0,search_query:!0};function ah(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=bh(f[0]||""),h=bh(f[1]||"");g in c?Array.isArray(c[g])?hb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(ah);k.args=[{key:l,value:f[1],query:a,method:ch==n?"unchanged":n}];$g.hasOwnProperty(l)||pg(k)}}return c}
var ch=String(ah);function dh(a){var b=[];ib(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function eh(a){"?"==a.charAt(0)&&(a=a.substr(1));return ah(a,"&")}
function fh(){var a=window.location.href;return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),eh(1<a.length?a[1]:a[0])):{}}
function gh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=eh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return lc(a,e)+d}
function hh(a){if(!b)var b=window.location.href;var c=a.match(gc)[1]||null,d=ic(a);c&&d?(a=a.match(gc),b=b.match(gc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ic(b)==d&&(Number(b.match(gc)[4]||null)||null)==(Number(a.match(gc)[4]||null)||null):!0;return a}
function bh(a){return a&&a.match(Zg)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ih(a){var b=jh;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=zd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Oa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?$c:g;try{var h=g.history.length}catch(Oa){h=0}e.u_his=h;var k;e.u_h=null==(k=$c.screen)?void 0:k.height;var l;e.u_w=null==(l=$c.screen)?void 0:l.width;var n;e.u_ah=null==(n=$c.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=$c.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=$c.screen)?void 0:t.colorDepth}catch(Oa){}h=b.h;try{var q=h.screenX;var z=h.screenY}catch(Oa){}try{var A=h.outerWidth;var H=h.outerHeight}catch(Oa){}try{var P=h.innerWidth;var Q=h.innerHeight}catch(Oa){}try{var S=h.screenLeft;var Dc=h.screenTop}catch(Oa){}try{P=h.innerWidth,Q=h.innerHeight}catch(Oa){}try{var Df=h.screen.availWidth;var jn=h.screen.availTop}catch(Oa){}q=[S,Dc,q,z,Df,jn,A,H,P,Q];z=b.h.top;try{var Jb=(z||window).document,za=
"CSS1Compat"==Jb.compatMode?Jb.documentElement:Jb.body;var Ca=(new kd(za.clientWidth,za.clientHeight)).round()}catch(Oa){Ca=new kd(-12245933,-12245933)}Jb=Ca;Ca={};za=new we;y.SVGElement&&y.document.createElementNS&&za.set(0);z=wd();z["allow-top-navigation-by-user-activation"]&&za.set(1);z["allow-popups-to-escape-sandbox"]&&za.set(2);y.crypto&&y.crypto.subtle&&za.set(3);y.TextDecoder&&y.TextEncoder&&za.set(4);za=xe(za);Ca.bc=za;Ca.bih=Jb.height;Ca.biw=Jb.width;Ca.brdim=q.join();b=b.i;b=(Ca.vis={visible:1,
hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Ca.wgl=!!$c.WebGLRenderingContext,Ca);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var jh=new function(){var a=window.document;this.h=window;this.i=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return dh(ih(a))},void 0);Date.now();var kh="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function lh(){if(!kh)return null;var a=kh();return"open"in a?a:null}
function mh(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var nh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},oh="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa("client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" "))),ph=!1;
function qh(a,b){b=void 0===b?{}:b;var c=hh(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in nh){var f=F(nh[e]);!f||!c&&ic(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!ic(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!ic(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!ic(a))b["X-YouTube-Ad-Signals"]=dh(ih(void 0));return b}
function rh(a){var b=window.location.search,c=ic(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!hh(a)||(c=document.location.hostname);var d=hc(a.match(gc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=eh(b),f={};E(oh,function(g){e[g]&&(f[g]=e[g])});
return gh(a,f||{},!1)}
function sh(a,b){var c=b.format||"JSON";a=th(a,b);var d=uh(a,b),e=!1,f=vh(a,function(k){if(!e){e=!0;h&&Ig(h);var l=mh(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=wh(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Hg(function(){e||(e=!0,f.abort(),Ig(h),g.call(b.context||y,f))},b.timeout)}return f}
function th(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=F("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=gh(a,b||{},!0);return a}
function uh(a,b){var c=F("XSRF_FIELD_NAME",void 0),d=F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=F("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ic(a)&&!b.withCredentials&&ic(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=eh(e),sb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):kc(e));f=e||f&&!lb(f);!ph&&f&&
"POST"!=b.method&&(ph=!0,og(Error("AJAX request with postData should use POST")));return e}
function wh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,pg(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?xh(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=yh(g)})}d&&zh(e);
return e}
function zh(a){if(Na(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;xb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=$b(a[b],null);a[c]=d}else zh(a[b])}}
function xh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function yh(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function vh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ng(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=lh();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=rh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=qh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Ah=Gc||Hc;function Bh(a){var b=Ub;return b?0<=b.toLowerCase().indexOf(a):!1}
;var Ch={},Dh=0;
function Eh(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Bh("cobalt")){if(a){a instanceof Nb||(a="object"==typeof a&&a.ca?a.ba():String(a),Sb.test(a)?a=new Nb(a,Ob):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Rb))&&Qb.test(b[1])?new Nb(a,Ob):null));b=Pb(a||Tb);if("about:invalid#zClosurez"===b||b.startsWith("data"))a="";else{if(b instanceof Zb)a=b;else{var f="object"==typeof b;a=null;f&&b.Oa&&(a=b.Ka());b=f&&b.ca?b.ba():String(b);Mb.test(b)&&(-1!=b.indexOf("&")&&(b=b.replace(Fb,"&amp;")),-1!=
b.indexOf("<")&&(b=b.replace(Gb,"&lt;")),-1!=b.indexOf(">")&&(b=b.replace(Hb,"&gt;")),-1!=b.indexOf('"')&&(b=b.replace(Ib,"&quot;")),-1!=b.indexOf("'")&&(b=b.replace(Kb,"&#39;")),-1!=b.indexOf("\x00")&&(b=b.replace(Lb,"&#0;")));a=$b(b,a)}a instanceof Zb&&a.constructor===Zb?a=a.h:(La(a),a="type_error:SafeHtml");a=encodeURIComponent(String(lf(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=od("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||
a.document).body.appendChild(a))}}else if(e)vh(a,b,"POST",e,d);else if(F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)vh(a,b,"GET","",d);else{b:{try{var g=new Za({url:a});if(g.j&&g.i||g.l){var h=hc(a.match(gc)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(mc);d:{for(c=0;0<=(c=a.indexOf("ri",c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var t=c;break d}}c+=3}t=-1}if(0>t)var q=null;else{var z=a.indexOf("&",t);if(0>z||z>l)z=l;t+=3;
q=decodeURIComponent(a.substr(t,z-t).replace(/\+/g," "))}k="1"!==q}f=!k;break b}}catch(A){}f=!1}f?Fh(a)?(b&&b(),f=!0):f=!1:f=!1;f||Gh(a,b)}}
function Hh(a){var b=void 0===b?"":b;Fh(a,b)||Eh(a,void 0,void 0,void 0,b)}
function Fh(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Gh(a,b){var c=new Image,d=""+Dh++;Ch[d]=c;c.onload=c.onerror=function(){b&&Ch[d]&&b();delete Ch[d]};
c.src=a}
;var Ih=y.ytPubsubPubsubInstance||new K,Jh=y.ytPubsubPubsubSubscribedKeys||{},Kh=y.ytPubsubPubsubTopicToKeys||{},Lh=y.ytPubsubPubsubIsSynchronous||{};function Mh(a,b){var c=Nh();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Jh[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Lh[a]?f():Hg(f,0)}catch(g){og(g)}},void 0);
Jh[d]=!0;Kh[a]||(Kh[a]=[]);Kh[a].push(d);return d}return 0}
function Oh(a){var b=Nh();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),E(a,function(c){b.unsubscribeByKey(c);delete Jh[c]}))}
function Ph(a,b){var c=Nh();c&&c.publish.apply(c,arguments)}
function Qh(a){var b=Nh();if(b)if(b.clear(a),a)Rh(a);else for(var c in Kh)Rh(c)}
function Nh(){return y.ytPubsubPubsubInstance}
function Rh(a){Kh[a]&&(a=Kh[a],E(a,function(b){Jh[b]&&delete Jh[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.oa;K.prototype.publish=K.prototype.ha;K.prototype.clear=K.prototype.clear;B("ytPubsubPubsubInstance",Ih,void 0);B("ytPubsubPubsubTopicToKeys",Kh,void 0);B("ytPubsubPubsubIsSynchronous",Lh,void 0);B("ytPubsubPubsubSubscribedKeys",Jh,void 0);var Sh=window,N=Sh.ytcsi&&Sh.ytcsi.now?Sh.ytcsi.now:Sh.performance&&Sh.performance.timing&&Sh.performance.now&&Sh.performance.timing.navigationStart?function(){return Sh.performance.timing.navigationStart+Sh.performance.now()}:function(){return(new Date).getTime()};var Th=tg("initial_gel_batch_timeout",2E3),Uh=Math.pow(2,16)-1,Vh=void 0,Wh=0,Xh=0,Yh=0,Zh=!0,$h=y.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",$h,void 0);var ai=y.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",ai,void 0);
function bi(a,b){if("log_event"===a.endpoint){var c=ci(a),d=$h.get(c)||[];$h.set(c,d);d.push(a.payload);b&&(Vh=new b);a=tg("tvhtml5_logging_max_batch")||tg("web_logging_max_batch")||100;b=N();d.length>=a?di({writeThenSend:!0},M("flush_only_full_queue")?c:void 0):10<=b-Yh&&(ei(),Yh=b)}}
function fi(a,b){if("log_event"===a.endpoint){var c=ci(a),d=new Map;d.set(c,[a.payload]);b&&(Vh=new b);return new tf(function(e){Vh&&Vh.isReady()?gi(d,e,{bypassNetworkless:!0},!0):e()})}}
function ci(a){var b="";if(a.Ja)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);ai[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function di(a,b){a=void 0===a?{}:a;new tf(function(c){Ig(Wh);Ig(Xh);Xh=0;if(Vh&&Vh.isReady())if(void 0!==b){var d=new Map,e=$h.get(b)||[];d.set(b,e);gi(d,c,a);$h.delete(b)}else gi($h,c,a),$h.clear();else ei(),c()})}
function ei(){M("web_gel_timeout_cap")&&!Xh&&(Xh=Hg(function(){di({writeThenSend:!0})},6E4));
Ig(Wh);var a=F("LOGGING_BATCH_TIMEOUT",tg("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Zh&&(a=Th);Wh=Hg(function(){di({writeThenSend:!0})},a)}
function gi(a,b,c,d){var e=Vh;c=void 0===c?{}:c;var f=Math.round(N()),g=a.size;a=u(a);for(var h=a.next();!h.done;h=a.next()){var k=u(h.value);h=k.next().value;var l=k=k.next().value;k=qb({context:hi(e.config_||ii())});k.events=l;(l=ai[h])&&ji(k,h,l);delete ai[h];h="visitorOnlyApprovedKey"===h;ki(k,f,h);M("always_send_and_write")&&(c.writeThenSend=!1);M("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&Hh("/generate_204");li(e,"log_event",k,mi(c,h,function(){g--;
g||b()},function(){g--;
g||b()},d));
Zh=!1}}
function mi(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,kb:a,Ja:b,Sm:!!e}}
function ki(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=F("EVENT_ID",void 0))&&((c=F("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*Uh/2)),c++,c>Uh&&(c=1),L("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function ji(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var ni=y.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",ni,void 0);
function oi(a,b,c,d){d=void 0===d?{}:d;if(M("lr_drop_other_and_business_payloads")){if(vg[a]||ug[a])return}else if(M("lr_drop_other_payloads")&&vg[a])return;var e={},f=Math.round(d.timestamp||N());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Vg();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.fa&&(a=e.context,b=d.fa,ni[b]=b in ni?ni[b]+1:0,a.sequence={index:ni[b],groupKey:b},d.Ab&&delete ni[d.fa]);(d.dn?fi:bi)({endpoint:"log_event",payload:e,
cttAuthInfo:d.cttAuthInfo,Ja:d.Ja},c)}
;function pi(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function qi(a,b,c,d,e){Hd.set(""+a,b,{Ra:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var ri=C("ytglobal.prefsUserPrefsPrefs_")||{};B("ytglobal.prefsUserPrefsPrefs_",ri,void 0);function si(){this.h=F("ALT_PREF_COOKIE_NAME","PREF");this.i=F("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Hd.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(ri[d]=c.toString())}}}
si.prototype.get=function(a,b){ti(a);ui(a);a=void 0!==ri[a]?ri[a].toString():null;return null!=a?a:b?b:""};
si.prototype.set=function(a,b){ti(a);ui(a);if(null==b)throw Error("ExpectedNotNull");ri[a]=b.toString()};
si.prototype.remove=function(a){ti(a);ui(a);delete ri[a]};
si.prototype.clear=function(){for(var a in ri)delete ri[a]};
function ui(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function ti(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function vi(a){a=void 0!==ri[a]?ri[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ka(si);var wi={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},xi={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function yi(){var a=y.navigator;return a?a.connection:void 0}
;function zi(){return"INNERTUBE_API_KEY"in ig&&"INNERTUBE_API_VERSION"in ig}
function ii(){return{innertubeApiKey:F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:F("INNERTUBE_API_VERSION",void 0),Cb:F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Pa:F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Vm:F("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Eb:F("INNERTUBE_CONTEXT_HL",void 0),Db:F("INNERTUBE_CONTEXT_GL",void 0),Fb:F("INNERTUBE_HOST_OVERRIDE",void 0)||"",Hb:!!F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Gb:!!F("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:F("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function hi(a){var b={client:{hl:a.Eb,gl:a.Db,clientName:a.Pa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Cb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=F("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=F("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=F("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===
d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=a.Pa;if(("WEB"===f||"MWEB"===f||1===f||2===f)&&b){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=pi()}g=a.Pa;if(("WEB_REMIX"===g||76===g)&&!M("music_web_display_mode_killswitch")&&b){var h;b.client.jb=null!=(h=b.client.jb)?h:{};b.client.jb.webDisplayMode=pi()}var k;if(M("web_log_memory_total_kbytes")&&(null==(k=y.navigator)?0:k.deviceMemory)){var l;
h=null==(l=y.navigator)?void 0:l.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*h)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);a:{if(l=yi()){a=wi[l.type||"unknown"]||"CONN_UNKNOWN";l=wi[l.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==l&&(a=l);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==l){a=l;break a}}a=void 0}a&&b&&(b.client.connectionType=a);M("web_log_effective_connection_type")&&
(a=yi(),a=null!==a&&void 0!==a&&a.effectiveType?xi.hasOwnProperty(a.effectiveType)?xi[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&b&&(b.client.effectiveConnectionType=a));F("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:F("DELEGATED_SESSION_ID")});a=Object;l=a.assign;h=b.client;k={};g=u(Object.entries(eh(F("DEVICE",""))));for(f=g.next();!f.done;f=g.next())e=u(f.value),f=e.next().value,e=e.next().value,"cbrand"===f?k.deviceMake=e:"cmodel"===f?k.deviceModel=
e:"cbr"===f?k.browserName=e:"cbrver"===f?k.browserVersion=e:"cos"===f?k.osName=e:"cosver"===f?k.osVersion=e:"cplatform"===f&&(k.platform=e);b.client=l.call(a,h,k);return b}
function Ai(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Qm||F("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Pm:b=Ld([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=F("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=F("DELEGATED_SESSION_ID")));return d}
;function Bi(a){a=Object.assign({},a);delete a.Authorization;var b=Ld();if(b){var c=new Oe;c.update(F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Lc(c.digest(),3)}return a}
;function Ci(a){var b=new Wf;(b=b.isAvailable()?a?new bg(b,a):b:null)||(a=new Xf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Sf(a):null;this.i=document.domain||window.location.hostname}
Ci.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(lf(b))}catch(f){return}else e=escape(b);qi(a,e,c,this.i)};
Ci.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Hd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ci.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Hd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Di;function Ei(){Di||(Di=new Ci("yt.innertube"));return Di}
function Fi(a,b,c,d){if(d)return null;d=Ei().get("nextId",!0)||1;var e=Ei().get("requests",!0)||{};e[d]={method:a,request:b,authState:Bi(c),requestTime:Math.round(N())};Ei().set("nextId",d+1,86400,!0);Ei().set("requests",e,86400,!0);return d}
function Gi(a){var b=Ei().get("requests",!0)||{};delete b[a];Ei().set("requests",b,86400,!0)}
function Hi(a){var b=Ei().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(N())-d.requestTime)){var e=d.authState,f=Bi(Ai(!1));ob(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(N())),li(a,d.method,e,{}));delete b[c]}}Ei().set("requests",b,86400,!0)}}
;var Ii=function(){var a;return function(){a||(a=new Ci("ytidb"));return a}}();
function Ji(){var a;return null===(a=Ii())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Ki=[],Li,Mi=!1;function Ni(a){Mi||(Li?Li.handleError(a):(Ki.push({type:"ERROR",payload:a}),10<Ki.length&&Ki.shift()))}
function Oi(a,b){Mi||(Li?Li.logEvent(a,b):(Ki.push({type:"EVENT",eventType:a,payload:b}),10<Ki.length&&Ki.shift()))}
;function Pi(a){var b=Ea.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(fa(b))}
v(Pi,Error);function Qi(){try{return Ri(),!0}catch(a){return!1}}
function Ri(){if(void 0!==F("DATASYNC_ID",void 0))return F("DATASYNC_ID",void 0);throw new Pi("Datasync ID not set","unknown");}
;function Si(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Ti(a){return a.substr(0,a.indexOf(":"))||a}
;var Ui={},Vi=(Ui.AUTH_INVALID="No user identifier specified.",Ui.EXPLICIT_ABORT="Transaction was explicitly aborted.",Ui.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Ui.MISSING_INDEX="Index not created.",Ui.MISSING_OBJECT_STORES="Object stores not created.",Ui.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Ui.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Ui.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",
Ui.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Ui.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Ui.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Ui),Wi={},Xi=(Wi.AUTH_INVALID="ERROR",Wi.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Wi.EXPLICIT_ABORT="IGNORED",Wi.IDB_NOT_SUPPORTED="ERROR",Wi.MISSING_INDEX="WARNING",Wi.MISSING_OBJECT_STORES="ERROR",Wi.DB_DELETED_BY_MISSING_OBJECT_STORES=
"WARNING",Wi.QUOTA_EXCEEDED="WARNING",Wi.QUOTA_MAYBE_EXCEEDED="WARNING",Wi.UNKNOWN_ABORT="WARNING",Wi.INCOMPATIBLE_DB_VERSION="WARNING",Wi),Yi={},Zi=(Yi.AUTH_INVALID=!1,Yi.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Yi.EXPLICIT_ABORT=!1,Yi.IDB_NOT_SUPPORTED=!1,Yi.MISSING_INDEX=!1,Yi.MISSING_OBJECT_STORES=!1,Yi.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Yi.QUOTA_EXCEEDED=!1,Yi.QUOTA_MAYBE_EXCEEDED=!0,Yi.UNKNOWN_ABORT=!0,Yi.INCOMPATIBLE_DB_VERSION=!1,Yi);
function O(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Vi[a]:c;d=void 0===d?Xi[a]:d;e=void 0===e?Zi[a]:e;Pi.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,O.prototype)}
v(O,Pi);function $i(a,b){O.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Vi.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,$i.prototype)}
v($i,O);function aj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,aj.prototype)}
v(aj,Error);var bj=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function cj(a,b,c,d){b=Ti(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof O)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new O("QUOTA_EXCEEDED",a);if(Ic&&"UnknownError"===e.name)return new O("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof aj)return new O("MISSING_INDEX",Object.assign(Object.assign({},a),{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&bj.some(function(f){return e.message.includes(f)}))return new O("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new O("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign(Object.assign({},a),{name:"IdbError",Zm:e.name})];e.level="WARNING";return e}
function dj(a,b,c){var d=Ji();return new O("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null===d||void 0===d?void 0:d.hasSucceededOnce}})}
;function ej(a){if(!a)throw Error();throw a;}
function fj(a){return a}
function gj(a){this.h=a}
function R(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
R.all=function(a){return new R(new gj(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ja:0};f.ja<a.length;f={ja:f.ja},++f.ja)hj(R.resolve(a[f.ja]).then(function(g){return function(h){d[g.ja]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
R.resolve=function(a){return new R(new gj(function(b,c){a instanceof R?a.then(b,c):b(a)}))};
R.reject=function(a){return new R(new gj(function(b,c){c(a)}))};
R.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:fj,e=null!==b&&void 0!==b?b:ej;return new R(new gj(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){ij(c,c,d,f,g)}),c.onRejected.push(function(){jj(c,c,e,f,g)})):"FULFILLED"===c.state.status?ij(c,c,d,f,g):"REJECTED"===c.state.status&&jj(c,c,e,f,g)}))};
function hj(a,b){a.then(void 0,b)}
function ij(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof R?kj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function jj(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof R?kj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function kj(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof R?kj(a,b,f,d,e):d(f)},function(f){e(f)})}
;function lj(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function mj(a){return new Promise(function(b,c){lj(a,b,c)})}
function T(a){return new R(new gj(function(b,c){lj(a,b,c)}))}
;function nj(a,b){return new R(new gj(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function oj(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(N());this.i=!1}
m=oj.prototype;m.add=function(a,b,c){return pj(this,[a],{mode:"readwrite",M:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return pj(this,[a],{mode:"readwrite",M:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return pj(this,[a],{mode:"readonly",M:!0},function(c){return c.objectStore(a).count(b)})};
function qj(a,b,c){a=a.h.createObjectStore(b,c);return new rj(a)}
m.delete=function(a,b){return pj(this,[a],{mode:"readwrite",M:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return pj(this,[a],{mode:"readonly",M:!0},function(c){return c.objectStore(a).get(b)})};
function sj(a,b){return pj(a,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(c){c=c.objectStore("LogsRequestsStore");return T(c.h.put(b,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function pj(a,b,c,d){var e,f,g,h,k,l,n,p,t,q,z,A;return x(function(H){switch(H.h){case 1:var P={mode:"readonly",M:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?P.mode=c:Object.assign(P,c);e=P;a.transactionCount++;f=e.M?3:1;g=0;case 2:if(h){H.u(3);break}g++;k=Math.round(N());ra(H,4);l=a.h.transaction(b,e.mode);P=new tj(l);P=uj(P,d);return w(H,P,6);case 6:return n=H.i,p=Math.round(N()),vj(a,k,p,g,void 0,b.join(),e),H.return(n);case 4:t=ta(H);q=Math.round(N());z=cj(t,a.h.name,b.join(),a.h.version);
if((A=z instanceof O&&!z.h)||g>=f)vj(a,k,q,g,z,b.join(),e),h=z;H.u(2);break;case 3:return H.return(Promise.reject(h))}})}
function vj(a,b,c,d,e,f,g){b=c-b;e?(e instanceof O&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Oi("QUOTA_EXCEEDED",{dbName:Ti(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof O&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Oi("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),wj(a,!1,d,f,b,g.tag),Ni(e)):wj(a,!0,d,f,b,g.tag)}
function wj(a,b,c,d,e,f){Oi("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function rj(a){this.h=a}
m=rj.prototype;m.add=function(a,b){return T(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return T(this.h.clear()).then(function(){})};
m.count=function(a){return T(this.h.count(a))};
function xj(a,b){return yj(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?xj(this,a):T(this.h.delete(a))};
m.get=function(a){return T(this.h.get(a))};
m.index=function(a){try{return new zj(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new aj(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function yj(a,b,c){a=a.h.openCursor(b.query,b.direction);return Aj(a).then(function(d){return nj(d,c)})}
function tj(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=O;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function uj(a,b){var c=new Promise(function(d,e){try{hj(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
tj.prototype.abort=function(){this.h.abort();this.i=!0;throw new O("EXPLICIT_ABORT");};
tj.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new rj(a),this.j.set(a,b));return b};
function zj(a){this.h=a}
m=zj.prototype;m.count=function(a){return T(this.h.count(a))};
m.delete=function(a){return Bj(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return T(this.h.get(a))};
m.getKey=function(a){return T(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function Bj(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Aj(a).then(function(d){return nj(d,c)})}
function Cj(a,b){this.request=a;this.cursor=b}
function Aj(a){return T(a).then(function(b){return b?new Cj(a,b):null})}
m=Cj.prototype;m.advance=function(a){this.cursor.advance(a);return Aj(this.request)};
m.continue=function(a){this.cursor.continue(a);return Aj(this.request)};
m.delete=function(){return T(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return T(this.cursor.update(a))};function Dj(a,b,c){return new Promise(function(d,e){function f(){t||(t=new oj(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.Xb,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&Oi("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:Ti(a)});var z=f(),A=new tj(g.transaction);
n&&n(z,function(H){return q.oldVersion<H&&q.newVersion>=H},A);
A.done.catch(function(H){e(H)})}catch(H){e(H)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){Oi("IDB_UNEXPECTEDLY_CLOSED",{dbName:Ti(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Ej(a,b,c){c=void 0===c?{}:c;return Dj(a,b,c)}
function Fj(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return ra(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),w(g,mj(c),4);
if(2!=g.h)return sa(g,0);f=ta(g);throw cj(f,a,"",-1);})}
;function Gj(a){return new Promise(function(b){Ng(function(){b()},a)})}
function Hj(a,b){this.name=a;this.options=b;this.l=!0;this.A=0;this.i=500}
Hj.prototype.j=function(a,b,c){c=void 0===c?{}:c;return Ej(a,b,c)};
Hj.prototype.delete=function(a){a=void 0===a?{}:a;return Fj(this.name,a)};
function Ij(a,b){return new O("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Jj(a,b){if(!b)throw dj("openWithToken",Ti(a.name));return a.open()}
Hj.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,q,z;return x(function(A){switch(A.h){case 1:return h=null!==(f=Error().stack)&&void 0!==f?f:"",ra(A,2),w(A,c.j(c.name,c.options.version,e),4);case 4:k=A.i;for(var H=c.options,P=[],Q=u(Object.keys(H.ra)),S=Q.next();!S.done;S=Q.next()){S=S.value;var Dc=H.ra[S],Df=void 0===Dc.Ob?Number.MAX_VALUE:Dc.Ob;!(k.h.version>=Dc.Ia)||k.h.version>=Df||k.h.objectStoreNames.contains(S)||P.push(S)}l=P;if(0===l.length){A.u(5);break}n=Object.keys(c.options.ra);
p=k.objectStoreNames();if(!(c.A<tg("ytidb_remake_db_retries",1))){A.u(6);break}c.A++;if(!M("ytidb_remake_db_enable_backoff_delay")){A.u(7);break}return w(A,Gj(c.i),8);case 8:c.i*=2;case 7:return w(A,c.delete(),9);case 9:return Ni(new O("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:n,foundObjectStores:p})),A.return(a());case 6:throw new $i(p,n);case 5:return A.return(k);case 2:t=ta(A);if(t instanceof DOMException?"VersionError"!==t.name:"DOMError"in self&&t instanceof DOMError?
"VersionError"!==t.name:!(t instanceof Object&&"message"in t)||"An attempt was made to open a database using a lower version than the existing version."!==t.message){A.u(10);break}return w(A,c.j(c.name,void 0,Object.assign(Object.assign({},e),{upgrade:void 0})),11);case 11:q=A.i;z=q.h.version;if(void 0!==c.options.version&&z>c.options.version+1)throw q.close(),c.l=!1,Ij(c,z);return A.return(q);case 10:throw b(),t instanceof Error&&!M("ytidb_async_stack_killswitch")&&(t.stack=t.stack+"\n"+h.substring(h.indexOf("\n")+
1)),cj(t,c.name,"",null!==(g=c.options.version)&&void 0!==g?g:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw Ij(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Xb:b,upgrade:this.options.upgrade};return this.h=d=a()};var Kj=new Hj("YtIdbMeta",{ra:{databases:{Ia:1}},upgrade:function(a,b){b(1)&&qj(a,"databases",{keyPath:"actualName"})}});
function Lj(a,b){var c;return x(function(d){if(1==d.h)return w(d,Jj(Kj,b),2);c=d.i;return d.return(pj(c,["databases"],{M:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return T(f.h.put(a,void 0)).then(function(){})})}))})}
function Mj(a,b){var c;return x(function(d){if(1==d.h)return a?w(d,Jj(Kj,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Nj(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],w(e,Jj(Kj,b),2)):3!=e.h?(d=e.i,w(e,pj(d,["databases"],{M:!0,mode:"readonly"},function(f){c.length=0;return yj(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Oj(a){return Nj(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Pj,Qj=new function(){}(new function(){});
function Rj(){var a,b,c;return x(function(d){switch(d.h){case 1:a=Ji();if(null===a||void 0===a?0:a.hasSucceededOnce)return d.return(!0);var e;if(e=Ah)e=/WebKit\/([0-9]+)/.exec(Ub),e=!!(e&&600<=parseInt(e[1],10));e&&(e=/WebKit\/([0-9]+)/.exec(Ub),e=!(e&&602<=parseInt(e[1],10)));if(e||sc)return d.return(!1);try{if(b=self,!(b.indexedDB&&b.IDBIndex&&b.IDBKeyRange&&b.IDBObjectStore))return d.return(!1)}catch(f){return d.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return d.return(!1);
ra(d,2);c={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(d,Lj(c,Qj),4);case 4:return w(d,Mj("yt-idb-test-do-not-use",Qj),5);case 5:return d.return(!0);case 2:return ta(d),d.return(!1)}})}
function Sj(){if(void 0!==Pj)return Pj;Mi=!0;return Pj=Rj().then(function(a){Mi=!1;var b,c;null!==(b=Ii())&&void 0!==b&&b.h&&(b=Ji(),b={hasSucceededOnce:(null===b||void 0===b?void 0:b.hasSucceededOnce)||a},null===(c=Ii())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0));return a})}
function Tj(){return C("ytglobal.idbToken_")||void 0}
function Uj(){var a=Tj();return a?Promise.resolve(a):Sj().then(function(b){(b=b?Qj:void 0)&&B("ytglobal.idbToken_",b,void 0);return b})}
;new rf;function Vj(a){if(!Qi())throw a=new O("AUTH_INVALID",{dbName:a}),Ni(a),a;var b=Ri();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Wj(a,b,c,d){var e,f,g,h,k,l;return x(function(n){switch(n.h){case 1:return f=null!==(e=Error().stack)&&void 0!==e?e:"",w(n,Uj(),2);case 2:g=n.i;if(!g)throw h=dj("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Ni(h),h;Si(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Vj(a);ra(n,3);return w(n,Lj(k,g),5);case 5:return w(n,Ej(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=ta(n),ra(n,7),w(n,Mj(k.actualName,
g),9);case 9:sa(n,8);break;case 7:ta(n);case 8:throw l;}})}
function Xj(a,b,c){c=void 0===c?{}:c;return Wj(a,b,!1,c)}
function Yj(a,b,c){c=void 0===c?{}:c;return Wj(a,b,!0,c)}
function Zj(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return w(e,Uj(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Si(a);d=Vj(a);return w(e,Fj(d.actualName,b),3)}return w(e,Mj(d.actualName,c),0)})}
function ak(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?w(e,Fj(d.actualName,b),2):w(e,Mj(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function bk(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return w(d,Uj(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Si("LogsDatabaseV2");return w(d,Oj(b),3)}c=d.i;return w(d,ak(c,a,b),0)})}
function ck(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return w(d,Uj(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Si(a);return w(d,Fj(a,b),3)}return w(d,Mj(a,c),0)})}
;function dk(a){var b,c,d,e,f,g,h,k;this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.na=function(){};
this.now=Date.now;this.qa=!1;this.rb=null!==(b=a.rb)&&void 0!==b?b:100;this.pb=null!==(c=a.pb)&&void 0!==c?c:1;this.nb=null!==(d=a.nb)&&void 0!==d?d:2592E6;this.lb=null!==(e=a.lb)&&void 0!==e?e:12E4;this.ob=null!==(f=a.ob)&&void 0!==f?f:5E3;this.C=null!==(g=a.C)&&void 0!==g?g:void 0;this.Aa=!!a.Aa;this.za=null!==(h=a.za)&&void 0!==h?h:.1;this.Ea=null!==(k=a.Ea)&&void 0!==k?k:10;a.handleError&&(this.handleError=a.handleError);a.na&&(this.na=a.na);a.qa&&(this.qa=a.qa);this.D=a.D;this.R=a.R;this.J=a.J;
this.K=a.K;this.W=a.W;this.Ua=a.Ua;this.Ta=a.Ta;this.C&&(!this.D||this.D("networkless_logging"))&&ek(this)}
function ek(a){return x(function(b){if(1==b.h)return!a.C||a.qa?b.return():a.Aa&&Math.random()<=a.za?w(b,a.J.wb(a.C),2):b.u(2);fk(a);a.K.I()&&a.ta();a.K.U(a.Ua,a.ta.bind(a));a.K.U(a.Ta,a.ab.bind(a));a.h=!0;b.h=0})}
m=dk.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.C&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J.set(d,this.C).then(function(e){d.id=e;c.K.I()&&gk(c,d)}).catch(function(e){gk(c,d);
hk(c,e)})}else this.W(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.C&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.D&&this.D("nwl_skip_retry")&&(e.skipRetry=c);if(this.K.I()||this.D&&this.D("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return w(k,d.J.set(e,d.C).catch(function(l){hk(d,l)}),2);
f(g,h);k.h=0})}}this.W(a,b,e.skipRetry)}else this.J.set(e,this.C).catch(function(g){d.W(a,b,e.skipRetry);
hk(d,g)})}else this.W(a,b,this.D&&this.D("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.C&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.J.ma(d.id,c.C):e=!0;c.K.ea&&c.D&&c.D("vss_network_hint")&&c.K.ea(!0);f(g,h)};
this.W(d.url,d.options);this.J.set(d,this.C).then(function(g){d.id=g;e&&c.J.ma(d.id,c.C)}).catch(function(g){hk(c,g)})}else this.W(a,b)};
m.ta=function(){var a=this;if(!this.C)throw dj("throttleSend");this.i||(this.i=this.R.L(function(){var b;return x(function(c){if(1==c.h)return w(c,a.J.hb("NEW",a.C),2);if(3!=c.h)return b=c.i,b?w(c,gk(a,b),3):(a.ab(),c.return());a.i&&(a.i=0,a.ta());c.h=0})},this.rb))};
m.ab=function(){this.R.aa(this.i);this.i=0};
function gk(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!a.C)throw c=dj("immediateSend"),c;if(void 0===b.id){e.u(2);break}return w(e,a.J.Ib(b.id,a.C),3);case 3:(d=e.i)?b=d:a.na(Error("The request cannot be found in the database."));case 2:if(ik(a,b,a.nb)){e.u(4);break}a.na(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return w(e,a.J.ma(b.id,a.C),5);case 5:return e.return();case 4:b.skipRetry||(b=jk(a,b));if(!b){e.u(0);break}if(!b.skipRetry||
void 0===b.id){e.u(8);break}return w(e,a.J.ma(b.id,a.C),8);case 8:a.W(b.url,b.options,!!b.skipRetry),e.h=0}})}
function jk(a,b){if(!a.C)throw dj("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g;return x(function(h){switch(h.h){case 1:g=kk(f);if(!(a.D&&a.D("nwl_consider_error_code")&&g||a.D&&!a.D("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Ea)){h.u(2);break}if(!a.K.X){h.u(3);break}return w(h,a.K.X(),3);case 3:if(a.K.I()){h.u(2);break}c(e,f);if(!a.D||!a.D("nwl_consider_error_code")||void 0===(null===b||void 0===b?void 0:b.id)){h.u(6);break}return w(h,a.J.Va(b.id,a.C,!1),6);case 6:return h.return();case 2:if(a.D&&a.D("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Ea)return h.return();a.potentialEsfErrorCounter++;if(void 0===(null===b||void 0===b?void 0:b.id)){h.u(8);break}return b.sendCount<a.pb?w(h,a.J.Va(b.id,a.C),12):w(h,a.J.ma(b.id,a.C),8);case 12:a.R.L(function(){a.K.I()&&a.ta()},a.ob);
case 8:c(e,f),h.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){return x(function(g){if(1==g.h)return void 0===(null===b||void 0===b?void 0:b.id)?g.u(2):w(g,a.J.ma(b.id,a.C),2);a.K.ea&&a.D&&a.D("vss_network_hint")&&a.K.ea(!0);d(e,f);g.h=0})};
return b}
function ik(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function fk(a){if(!a.C)throw dj("retryQueuedRequests");a.J.hb("QUEUED",a.C).then(function(b){b&&!ik(a,b,a.lb)?a.R.L(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.u(2):w(c,a.J.Va(b.id,a.C),2);fk(a);c.h=0})}):a.K.I()&&a.ta()})}
function hk(a,b){a.sb&&!a.K.I()?a.sb(b):a.handleError(b)}
function kk(a){var b;return(a=null===(b=null===a||void 0===a?void 0:a.error)||void 0===b?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function lk(a,b){this.version=a;this.args=b}
;function mk(a,b){this.topic=a;this.h=b}
mk.prototype.toString=function(){return this.topic};var nk=C("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.oa;K.prototype.publish=K.prototype.ha;K.prototype.clear=K.prototype.clear;B("ytPubsub2Pubsub2Instance",nk,void 0);var ok=C("ytPubsub2Pubsub2SubscribedKeys")||{};B("ytPubsub2Pubsub2SubscribedKeys",ok,void 0);var pk=C("ytPubsub2Pubsub2TopicToKeys")||{};B("ytPubsub2Pubsub2TopicToKeys",pk,void 0);var qk=C("ytPubsub2Pubsub2IsAsync")||{};B("ytPubsub2Pubsub2IsAsync",qk,void 0);
B("ytPubsub2Pubsub2SkipSubKey",null,void 0);function rk(a,b){var c=sk();c&&c.publish.call(c,a.toString(),a,b)}
function tk(a){var b=uk,c=sk();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=C("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(ok[d])try{if(f&&b instanceof mk&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ga){var l=new h;h.ga=l.version}var n=h.ga}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
gb(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){og(p)}},qk[b.toString()]?C("yt.scheduler.instance")?Qg.L(g):Hg(g,0):g())});
ok[d]=!0;pk[b.toString()]||(pk[b.toString()]=[]);pk[b.toString()].push(d);return d}
function vk(){var a=wk,b=tk(function(c){a.apply(void 0,arguments);xk(b)});
return b}
function xk(a){var b=sk();b&&("number"===typeof a&&(a=[a]),E(a,function(c){b.unsubscribeByKey(c);delete ok[c]}))}
function sk(){return C("ytPubsub2Pubsub2Instance")}
;function yk(a,b){Hj.call(this,a,b);this.options=b;Si(a)}
v(yk,Hj);function zk(a,b){var c;return function(){c||(c=new yk(a,b));return c}}
yk.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.Wa?Yj:Xj)(a,b,Object.assign({},c))};
yk.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Wa?ck:Zj)(this.name,a)};
function Ak(a,b){return zk(a,b)}
;var Bk;
function Ck(){if(Bk)return Bk();var a={};Bk=Ak("LogsDatabaseV2",{ra:(a.LogsRequestsStore={Ia:2},a),Wa:!1,upgrade:function(b,c,d){c(2)&&qj(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Bk()}
;function Dk(a){return Jj(Ck(),a)}
function Ek(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:N(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,Dk(b),2);if(3!=g.h)return d=g.i,e=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:F("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,sj(d,e),3);f=g.i;c.Yb=N();Fk(c);return g.return(f)})}
function Gk(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.h)return c={startTime:N(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(l,Dk(b),2);if(3!=l.h)return d=l.i,e=F("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,N()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,pj(d,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(n){return Bj(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===a&&(k.status="QUEUED",
p.update(k)))})}),3);
c.Yb=N();Fk(c);return l.return(k)})}
function Hk(a,b){var c;return x(function(d){if(1==d.h)return w(d,Dk(b),2);c=d.i;return d.return(pj(c,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",T(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Ik(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.h)return w(e,Dk(b),2);d=e.i;return e.return(pj(d,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),T(g.h.put(h,void 0)).then(function(){return h})):R.resolve(void 0)})}))})}
function Jk(a,b){var c;return x(function(d){if(1==d.h)return w(d,Dk(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Kk(a){var b,c;return x(function(d){if(1==d.h)return w(d,Dk(a),2);b=d.i;c=N()-2592E6;return w(d,pj(b,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(e){return yj(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Lk(){return x(function(a){return w(a,bk(),0)})}
function Fk(a){M("nwl_csi_killswitch")||.01>=Math.random()&&rk("nwl_transaction_latency_payload",a)}
;var Mk={},Nk=Ak("ServiceWorkerLogsDatabase",{ra:(Mk.SWHealthLog={Ia:1},Mk),Wa:!0,upgrade:function(a,b){b(1)&&qj(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Ok(a){return Jj(Nk(),a)}
function Pk(a){var b,c;return x(function(d){if(1==d.h)return w(d,Ok(a),2);b=d.i;c=N()-2592E6;return w(d,pj(b,["SWHealthLog"],{mode:"readwrite",M:!0},function(e){return yj(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Qk(a){var b;return x(function(c){if(1==c.h)return w(c,Ok(a),2);b=c.i;return w(c,b.clear("SWHealthLog"),0)})}
;var Rk;function Sk(){Rk||(Rk=new Ci("yt.offline"));return Rk}
function Tk(a){if(M("offline_error_handling")){var b=Sk().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Sk().set("errors",b,2592E3,!0)}}
function Uk(){if(M("offline_error_handling")){var a=Sk().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new Pi(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;og(c)}Sk().set("errors",{},2592E3,!0)}}}
;var Vk=tg("network_polling_interval",3E4);function U(){J.call(this);this.H=0;this.N=this.m=!1;this.l=this.Na();M("use_shared_nsm")?(te.h||(te.h=new te(Qg)),this.j=te.h):(Wk(this),Xk(this))}
v(U,J);function Yk(){if(!U.h){var a=C("yt.networkStatusManager.instance")||new U;B("yt.networkStatusManager.instance",a,void 0);U.h=a}return U.h}
m=U.prototype;m.I=function(){var a;return M("use_shared_nsm")&&this.j?null===(a=this.j)||void 0===a?void 0:a.I():this.l};
m.ea=function(a){var b;M("use_shared_nsm")&&this.j?null===(b=this.j)||void 0===b?void 0:b.j=a:a!==this.l&&(this.l=a)};
m.Jb=function(a){!M("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.H||Zk(this))};
m.Na=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.yb=function(){this.N=!0};
m.U=function(a,b){return M("use_shared_nsm")&&this.j?this.j.U(a,b):J.prototype.U.call(this,a,b)};
function Xk(a){window.addEventListener("online",function(){return x(function(b){if(1==b.h)return w(b,a.X(),2);a.N&&Uk();b.h=0})})}
function Wk(a){window.addEventListener("offline",function(){return x(function(b){return w(b,a.X(),0)})})}
function Zk(a){a.H=Lg(function(){return x(function(b){if(1==b.h)return a.l?a.Na()||!a.m?b.u(3):w(b,a.X(),3):w(b,a.X(),3);Zk(a);b.h=0})},Vk)}
m.X=function(a){var b=this;return M("use_shared_nsm")&&this.j?ue(this.j,a):this.o?this.o:this.o=new Promise(function(c){var d,e,f;return x(function(g){switch(g.h){case 1:return d=window.AbortController?new window.AbortController:void 0,e=null===d||void 0===d?void 0:d.signal,f=!1,ra(g,2,3),d&&(b.B=Qg.L(function(){d.abort()},a||2E4)),w(g,fetch("/generate_204",{method:"HEAD",
signal:e}),5);case 5:f=!0;case 3:ua(g);b.o=void 0;b.B&&Qg.aa(b.B);f!==b.l&&(b.l=f,b.l&&b.m?re(b,"ytnetworkstatus-online"):b.m&&re(b,"ytnetworkstatus-offline"));c(f);va(g);break;case 2:ta(g),f=!1,g.u(3)}})})};
U.prototype.sendNetworkCheckRequest=U.prototype.X;U.prototype.listen=U.prototype.U;U.prototype.enableErrorFlushing=U.prototype.yb;U.prototype.getWindowStatus=U.prototype.Na;U.prototype.monitorNetworkStatusChange=U.prototype.Jb;U.prototype.networkStatusHint=U.prototype.ea;U.prototype.isNetworkAvailable=U.prototype.I;U.getInstance=Yk;function $k(a){a=void 0===a?{}:a;J.call(this);var b=this;this.l=this.H=0;this.m="ytnetworkstatus-offline";this.o="ytnetworkstatus-online";M("use_shared_nsm")&&(this.m="networkstatus-offline",this.o="networkstatus-online");this.j=Yk();var c=C("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.fb);a.Ca&&!M("use_shared_nsm")&&(c=C("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=C("yt.networkStatusManager.instance.listen").bind(this.j))a.Fa?
(this.Fa=a.Fa,c(this.o,function(){al(b,"publicytnetworkstatus-online");M("use_shared_nsm")&&a.Ca&&Uk()}),c(this.m,function(){al(b,"publicytnetworkstatus-offline")})):(c(this.o,function(){re(b,"publicytnetworkstatus-online");
M("use_shared_nsm")&&a.Ca&&Uk()}),c(this.m,function(){re(b,"publicytnetworkstatus-offline")}))}
v($k,J);$k.prototype.I=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.j);return a?a():!0};
$k.prototype.ea=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
$k.prototype.X=function(a){var b=this,c;return x(function(d){return(c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j))?d.return(c(a)):d.return(!0)})};
function al(a,b){a.Fa?a.l?(Qg.aa(a.H),a.H=Qg.L(function(){a.B!==b&&(re(a,b),a.B=b,a.l=N())},a.Fa-(N()-a.l))):(re(a,b),a.B=b,a.l=N()):re(a,b)}
;var bl;function cl(){dk.call(this,{J:{wb:Kk,ma:Jk,hb:Gk,Ib:Hk,Va:Ik,set:Ek},K:dl(),handleError:og,na:pg,W:el,now:N,sb:Tk,R:Pg(),Ua:"publicytnetworkstatus-online",Ta:"publicytnetworkstatus-offline",Aa:!0,za:.1,Ea:tg("potential_esf_error_limit",10),D:M,qa:!Qi()});this.j=new rf;this.Aa&&Math.random()<=this.za&&this.C&&Pk(this.C);M("networkless_immediately_drop_sw_health_store")&&fl(this);M("networkless_immediately_drop_all_requests")&&Lk();ck("LogsDatabaseV2")}
v(cl,dk);function gl(){var a=C("yt.networklessRequestController.instance");a||(a=new cl,B("yt.networklessRequestController.instance",a,void 0),M("networkless_logging")&&Uj().then(function(b){return x(function(c){if(1==c.h)return a.C=b,w(c,ek(a),2);a.j.resolve();c.h=0})}));
return a}
cl.prototype.writeThenSend=function(a,b){b||(b={});Qi()||(this.h=!1);dk.prototype.writeThenSend.call(this,a,b)};
cl.prototype.sendThenWrite=function(a,b,c){b||(b={});Qi()||(this.h=!1);dk.prototype.sendThenWrite.call(this,a,b,c)};
cl.prototype.sendAndWrite=function(a,b){b||(b={});Qi()||(this.h=!1);dk.prototype.sendAndWrite.call(this,a,b)};
function fl(a){var b;x(function(c){if(!a.C)throw b=dj("clearSWHealthLogsDb"),b;return c.return(Qk(a.C).catch(function(d){a.handleError(d)}))})}
function el(a,b,c){var d;if(null===(d=b.postParams)||void 0===d?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(N());c&&0===Object.keys(b).length?Eh(a):sh(a,b)}
function dl(){bl||(bl=new $k({Ca:!0,fb:!0}));return bl}
;var hl=!1,il=0,jl=0,kl,ll=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:hl,potentialEsfErrorCounter:jl};B("ytNetworklessLoggingInitializationOptions",ll,void 0);
function ml(){var a;x(function(b){switch(b.h){case 1:return w(b,Uj(),2);case 2:a=b.i;if(!a||!Qi()&&!M("nwl_init_require_datasync_id_killswitch")){b.u(0);break}hl=!0;ll.isNwlInitialized=hl;return w(b,ck("LogsDatabaseV2"),4);case 4:if(!(.1>=Math.random())){b.u(5);break}return w(b,Kk(a),6);case 6:return w(b,Pk(a),5);case 5:nl();ol().I()&&pl();ol().U("publicytnetworkstatus-online",pl);ol().U("publicytnetworkstatus-offline",ql);if(!M("networkless_immediately_drop_sw_health_store")){b.u(8);break}return w(b,
rl(),8);case 8:if(M("networkless_immediately_drop_all_requests"))return w(b,Lk(),0);b.u(0)}})}
function sl(a,b){function c(d){var e=ol().I();if(!tl()||!d||e&&M("vss_networkless_bypass_write"))ul(a,b);else{var f={url:a,options:b,timestamp:N(),status:"NEW",sendCount:0};Ek(f,d).then(function(g){f.id=g;ol().I()&&vl(f)}).catch(function(g){vl(f);
ol().I()?og(g):Tk(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Uj().then(function(d){c(d)}):c(Tj())}
function wl(a,b){function c(d){if(tl()&&d){var e={url:a,options:b,timestamp:N(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?Jk(e.id,d):f=!0;M("vss_network_hint")&&ol().ea(!0);g(h,k)};
ul(e.url,e.options);Ek(e,d).then(function(h){e.id=h;f&&Jk(e.id,d)}).catch(function(h){ol().I()?og(h):Tk(h)})}else ul(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Uj().then(function(d){c(d)}):c(Tj())}
function pl(){var a=Tj();if(!a)throw dj("throttleSend");il||(il=Qg.L(function(){var b;return x(function(c){if(1==c.h)return w(c,Gk("NEW",a),2);if(3!=c.h)return b=c.i,b?w(c,vl(b),3):(ql(),c.return());il&&(il=0,pl());c.h=0})},100))}
function ql(){Qg.aa(il);il=0}
function vl(a){var b,c,d;return x(function(e){switch(e.h){case 1:b=Tj();if(!b)throw c=dj("immediateSend"),c;if(void 0===a.id){e.u(2);break}return w(e,Hk(a.id,b),3);case 3:(d=e.i)?a=d:pg(Error("The request cannot be found in the database."));case 2:if(xl(a,2592E6)){e.u(4);break}pg(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.u(5);break}return w(e,Jk(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=yl(a));var f=a,g,h;if(null===(h=null===(g=null===
f||void 0===f?void 0:f.options)||void 0===g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(N());a=f;if(!a){e.u(0);break}if(!a.skipRetry||void 0===a.id){e.u(8);break}return w(e,Jk(a.id,b),8);case 8:ul(a.url,a.options,!!a.skipRetry),e.h=0}})}
function yl(a){var b=Tj();if(!b)throw dj("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g;return x(function(h){switch(h.h){case 1:g=kk(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&zl()<=tg("potential_esf_error_limit",10))){h.u(2);break}return w(h,ol().X(),3);case 3:if(ol().I()){h.u(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===(null===a||void 0===a?void 0:a.id)){h.u(5);break}return w(h,Ik(a.id,b,!1),5);case 5:return h.return();case 2:if(M("nwl_consider_error_code")&&!g&&zl()>tg("potential_esf_error_limit",10))return h.return();
C("ytNetworklessLoggingInitializationOptions")&&ll.potentialEsfErrorCounter++;jl++;if(void 0===(null===a||void 0===a?void 0:a.id)){h.u(7);break}return 1>a.sendCount?w(h,Ik(a.id,b),11):w(h,Jk(a.id,b),7);case 11:Qg.L(function(){ol().I()&&pl()},5E3);
case 7:c(e,f),h.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return x(function(g){if(1==g.h)return void 0===(null===a||void 0===a?void 0:a.id)?g.u(2):w(g,Jk(a.id,b),2);M("vss_network_hint")&&ol().ea(!0);d(e,f);g.h=0})};
return a}
function xl(a,b){a=a.timestamp;return N()-a>=b?!1:!0}
function nl(){var a=Tj();if(!a)throw dj("retryQueuedRequests");Gk("QUEUED",a).then(function(b){b&&!xl(b,12E4)?Qg.L(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.u(2):w(c,Ik(b.id,a),2);nl();c.h=0})}):ol().I()&&pl()})}
function rl(){var a,b;return x(function(c){a=Tj();if(!a)throw b=dj("clearSWHealthLogsDb"),b;return c.return(Qk(a).catch(function(d){og(d)}))})}
function ol(){if(M("use_new_nwl"))return dl();kl||(kl=new $k({Ca:!0,fb:!0}));return kl}
function ul(a,b,c){c&&0===Object.keys(b).length?Eh(a):sh(a,b)}
function tl(){return C("ytNetworklessLoggingInitializationOptions")?ll.isNwlInitialized:hl}
function zl(){return C("ytNetworklessLoggingInitializationOptions")?ll.potentialEsfErrorCounter:jl}
;function Al(a){var b=this;this.config_=null;a?this.config_=a:zi()&&(this.config_=ii());Lg(function(){Hi(b)},5E3)}
Al.prototype.isReady=function(){!this.config_&&zi()&&(this.config_=ii());return!!this.config_};
function li(a,b,c,d){function e(z){z=void 0===z?!1:z;var A;if(d.retry&&"www.youtube-nocookie.com"!=h&&(z||M("skip_ls_gel_retry")||(A=Fi(b,c,l,k)),A)){var H=g.onSuccess,P=g.onFetchSuccess;g.onSuccess=function(Q,S){Gi(A);H(Q,S)};
c.onFetchSuccess=function(Q,S){Gi(A);P(Q,S)}}try{z&&d.retry&&!d.kb.bypassNetworkless?(g.method="POST",d.kb.writeThenSend?M("use_new_nwl")?gl().writeThenSend(q,g):sl(q,g):M("use_new_nwl")?gl().sendAndWrite(q,g):wl(q,g)):(g.method="POST",g.postParams||(g.postParams={}),sh(q,g))}catch(Q){if("InvalidAccessError"==Q.name)A&&(Gi(A),A=0),pg(Error("An extension is blocking network request."));
else throw Q;}A&&Lg(function(){Hi(a)},5E3)}
!F("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&pg(new Pi("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Pi("innertube xhrclient not ready",b,c,d);og(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(z,A){if(d.onSuccess)d.onSuccess(A)},
onFetchSuccess:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,A){if(d.onError)d.onError(A)},
onFetchError:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Fb)&&(h=f);var k=a.config_.Hb||!1,l=Ai(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.Gb&&f;M("omit_innertube_api_key_for_bearer_auth_header")&&(t=t&&f.startsWith("Bearer"));t||(p.key=a.config_.innertubeApiKey);var q=gh(""+
h+n,p||{},!0);M("use_new_nwl")||tl()?Sj().then(function(z){e(z)}):e(!1)}
;function V(a,b,c){c=void 0===c?{}:c;var d=Al;F("ytLoggingEventsDefaultDisabled",!1)&&Al==Al&&(d=null);oi(a,b,d,c)}
;var Bl=[{Sa:function(a){return"Cannot read property '"+a.key+"'"},
Da:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Sa:function(a){return"Cannot call '"+a.key+"'"},
Da:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Sa:function(a){return a.key+" is not defined"},
Da:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Dl={da:[],Z:[{Za:Cl,weight:500}]};function Cl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function El(){this.Z=[];this.da=[]}
var Fl;function Gl(){if(!Fl){var a=Fl=new El;a.da.length=0;a.Z.length=0;Dl.da&&a.da.push.apply(a.da,Dl.da);Dl.Z&&a.Z.push.apply(a.Z,Dl.Z)}return Fl}
;var Hl=new K;function Il(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Jl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Jl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Jl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Jl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Kl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Ll(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Il(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Ll(e+".ve",f,g,h):0;d+=g;d+=Ll(e,a[e],b,c);if(500<d)break}}else c[b]=Ml(a),d+=c[b].length;else c[b]=Ml(a),d+=c[b].length;return d}
function Ll(a,b,c,d){c+="."+a;a=Ml(b);d[c]=a;return c.length+a.length}
function Ml(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Nl=new Set,Ol=0,Pl=0,Ql=0,Rl=[],Sl=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Tl(a){Ul(a)}
function Vl(a){Ul(a,"WARNING")}
function Ul(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),M("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=Ol))){var g=Qd(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=Kl(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var n=
a.params;if("object"===typeof a.params)for(l in n){if(n[l]){var p="params."+l,t=Ml(n[l]);c[p]=t;k+=p.length+t.length;if(500<k)break}}else c.params=Ml(n)}if(Rl.length)for(l=0;l<Rl.length&&!(k=Kl(Rl[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=
Gl();c=u(a.da);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.Ym)){a=d.weight;break a}a=u(a.Z);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Za(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(Bl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Da[l.name])for(e=u(c.Da[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=
d[g+1];l.message=c.Sa(f);break}l.params||(l.params={});a=Gl();l.params["params.errorServiceSignature"]="msg="+a.da.length+"&cb="+a.Z.length;l.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));xb("sample").constructor!==vb&&(l.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!Nl.has(l.message)){"ERROR"===b?
(Hl.ha("handleError",l),M("record_app_crashed_web")&&0===Ql&&1===l.sampleWeight&&(Ql++,V("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),Pl++):"WARNING"===b&&Hl.ha("handleWarning",l);if(M("kevlar_gel_error_routing")){a=b;b:{c=u(Sl);for(d=c.next();!d.done;d=c.next())if(Bh(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);c=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?
2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};e={pageUrl:window.location.href,kvPairs:[]};F("FEXP_EXPERIMENTS")&&(e.experimentIds=F("FEXP_EXPERIMENTS"));f=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",
void 0);g=ig.EXPERIMENT_FLAGS;if((!g||!g.web_disable_gel_stp_ecatcher_killswitch)&&f)for(h=u(Object.keys(f)),g=h.next();!g.done;g=h.next())g=g.value,e.kvPairs.push({key:g,value:String(f[g])});if(f=l.params)for(h=u(Object.keys(f)),g=h.next();!g.done;g=h.next())g=g.value,e.kvPairs.push({key:"client."+g,value:String(f[g])});f=F("SERVER_NAME",void 0);g=F("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:e,stackTrace:d,
logMessage:c}}c&&(V("clientError",c),("ERROR"===a||M("errors_flush_gel_always_killswitch"))&&di())}if(!M("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,level:b,"client.name":a.name},postParams:{url:F("PAGE_NAME",window.location.href),file:l.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=
c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=F("SERVER_NAME",void 0);c=F("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}sh(F("ECATCHER_REPORT_HOST","")+"/error_204",b)}try{Nl.add(l.message)}catch(q){}Ol++}}}
function Wl(a){var b=Ea.apply(1,arguments),c=a;c.args||(c.args=[]);c.args.push.apply(c.args,fa(b))}
;var Xl={Mc:3611,Zb:27686,ac:85013,cc:23462,ec:42016,fc:62407,hc:26926,dc:43781,ic:51236,jc:79148,kc:50160,lc:77504,zc:87907,Ac:18630,Bc:54445,Cc:80935,Dc:105675,Ec:37521,Fc:47786,Gc:98349,Hc:123695,Ic:6827,Jc:29434,Kc:7282,Lc:124448,Pc:32276,Oc:76278,Qc:93911,Rc:106531,Sc:27259,Tc:27262,Uc:27263,Wc:21759,Xc:27107,Yc:62936,Zc:49568,bd:38408,cd:80637,dd:68727,ed:68728,fd:80353,gd:80356,hd:74610,jd:45707,kd:83962,ld:83970,md:46713,nd:89711,od:74612,pd:93265,qd:74611,rd:131380,td:128979,ud:139311,vd:128978,
sd:131391,wd:105350,yd:139312,zd:134800,xd:131392,Bd:113533,Cd:93252,Dd:99357,Fd:94521,Gd:114252,Hd:113532,Id:94522,Ed:94583,Jd:88E3,Kd:139580,Ld:93253,Md:93254,Nd:94387,Od:94388,Pd:93255,Qd:97424,Ad:72502,Rd:110111,Sd:76019,Ud:117092,Vd:117093,Td:89431,Wd:110466,Xd:77240,Yd:60508,Zd:137401,ae:137402,be:137046,ce:73393,de:113534,ee:92098,ge:131381,he:84517,ie:83759,je:80357,ke:86113,le:72598,me:72733,ne:107349,oe:124275,pe:118203,qe:133275,re:133274,se:133272,te:133273,ue:133276,xe:117431,we:133797,
ye:128572,ze:133405,Ae:117429,Be:117430,Ce:117432,De:120080,Ee:117259,Fe:121692,Ge:132972,He:133051,Ie:133658,Je:132971,Ke:97615,Le:31402,Ne:133624,Oe:133623,Pe:133622,Me:133621,Qe:84774,Re:95117,Se:98930,Te:98931,Ue:98932,Ve:43347,We:129889,Xe:45474,Ye:100352,Ze:84758,af:98443,bf:117985,cf:74613,df:74614,ef:64502,ff:136032,gf:74615,hf:74616,jf:122224,kf:74617,lf:77820,mf:74618,nf:93278,pf:93274,qf:93275,rf:93276,sf:22110,tf:29433,uf:133798,vf:132295,xf:120541,zf:82047,Af:113550,Bf:75836,Cf:75837,
Df:42352,Ef:84512,Ff:76065,Gf:75989,Hf:16623,If:32594,Jf:27240,Kf:32633,Lf:74858,Nf:3945,Mf:16989,Of:45520,Pf:25488,Qf:25492,Rf:25494,Sf:55760,Tf:14057,Uf:18451,Vf:57204,Wf:57203,Xf:17897,Yf:57205,Zf:18198,ag:17898,cg:17909,dg:43980,eg:46220,fg:11721,gg:49954,hg:96369,ig:3854,jg:56251,kg:25624,lg:16906,mg:99999,ng:68172,og:27068,pg:47973,qg:72773,rg:26970,sg:26971,tg:96805,ug:17752,vg:73233,wg:109512,xg:22256,yg:14115,zg:22696,Ag:89278,Bg:89277,Cg:109513,Dg:43278,Eg:43459,Fg:43464,Gg:89279,Hg:43717,
Ig:55764,Jg:22255,Kg:89281,Lg:40963,Mg:43277,Ng:43442,Og:91824,Pg:120137,Qg:96367,Rg:36850,Sg:72694,Tg:37414,Ug:36851,Wg:124863,Vg:121343,Xg:73491,Yg:54473,Zg:43375,ah:46674,bh:139095,dh:32473,eh:72901,fh:72906,gh:50947,hh:50612,ih:50613,jh:50942,kh:84938,lh:84943,mh:84939,nh:84941,oh:84944,ph:84940,qh:84942,rh:35585,sh:51926,th:79983,uh:63238,vh:18921,wh:63241,xh:57893,yh:41182,zh:135732,Ah:33424,Bh:22207,Ch:42993,Dh:36229,Eh:22206,Fh:22205,Gh:18993,Hh:19001,Ih:18990,Jh:18991,Kh:18997,Lh:18725,Mh:19003,
Nh:36874,Oh:44763,Ph:33427,Qh:67793,Rh:22182,Sh:37091,Th:34650,Uh:50617,Vh:47261,Wh:22287,Xh:25144,Yh:97917,Zh:62397,ai:125598,bi:137935,ci:36961,di:108035,fi:27426,gi:27857,hi:27846,ii:27854,ji:69692,ki:61411,li:39299,mi:38696,ni:62520,oi:36382,ri:108701,si:50663,ti:36387,vi:14908,wi:37533,xi:105443,yi:61635,zi:62274,Ai:133818,Bi:65702,Ci:65703,Di:65701,Ei:76256,Fi:37671,Gi:49953,Ii:36216,Ji:28237,Ki:39553,Li:29222,Mi:26107,Ni:38050,Oi:26108,Qi:120745,Pi:26109,Ri:26110,Si:66881,Ti:28236,Ui:14586,
Vi:57929,Wi:74723,Xi:44098,Yi:44099,bj:23528,cj:61699,Zi:134104,aj:134103,dj:59149,ej:101951,fj:97346,gj:118051,hj:95102,ij:64882,jj:119505,kj:63595,lj:63349,mj:95101,nj:75240,oj:27039,pj:68823,qj:21537,rj:83464,sj:75707,tj:83113,uj:101952,vj:101953,xj:79610,yj:125755,zj:24402,Aj:24400,Bj:32925,Cj:57173,Dj:122502,Ej:138480,Fj:64423,Gj:64424,Hj:33986,Ij:100828,Jj:129089,Kj:21409,Oj:135155,Pj:135156,Qj:135157,Rj:135158,Sj:135159,Tj:135160,Uj:135161,Vj:135162,Wj:135163,Xj:135164,Yj:135165,Zj:135166,
Lj:11070,Mj:11074,Nj:17880,ak:14001,ck:30709,dk:30707,ek:30711,fk:30710,gk:30708,bk:26984,hk:63648,ik:63649,jk:51879,kk:111059,lk:5754,mk:20445,pk:130975,nk:130976,qk:110386,rk:113746,sk:66557,uk:17310,vk:28631,wk:21589,xk:68012,yk:60480,zk:138664,Ak:31571,Bk:76980,Ck:41577,Dk:45469,Ek:38669,Fk:13768,Gk:13777,Hk:62985,Ik:4724,Jk:59369,Kk:43927,Lk:43928,Mk:12924,Nk:100355,Qk:56219,Rk:27669,Sk:10337,Pk:47896,Tk:122629,Vk:139723,Uk:139722,Wk:121258,Xk:107598,Yk:127991,Zk:96639,al:107536,bl:130169,dl:96661,
fl:96658,il:116646,jl:121122,kl:96660,ll:127738,ml:127083,nl:104443,ol:96659,pl:106442,ql:134840,rl:63667,sl:63668,ul:63669,vl:130686,wl:78314,xl:55761,yl:127098,zl:134841,Al:96368,Bl:67374,Cl:48992,Dl:49956,El:31961,Fl:26388,Gl:23811,Hl:5E4,Il:126250,Jl:96370,Kl:47355,Ll:47356,Ml:37935,Nl:45521,Ol:21760,Pl:83769,Ql:49977,Rl:49974,Sl:93497,Tl:93498,Ul:34325,Vl:115803,Wl:123707,Xl:100081,Yl:35309,Zl:68314,am:25602,bm:100339,cm:59018,dm:18248,em:50625,fm:9729,gm:37168,hm:37169,im:21667,jm:16749,km:18635,
lm:39305,mm:18046,nm:53969,om:8213,pm:93926,qm:102852,rm:110099,sm:22678,tm:69076,um:137575,wm:139224,xm:100856,ym:17736,zm:3832,Am:55759,Bm:64031,Cm:93044,Dm:93045,Em:34388,Fm:17657,Gm:17655,Hm:39579,Im:39578,Jm:77448,Km:8196,Lm:11357,Mm:69877,Nm:8197,Om:82039};function Yl(){var a=pb(Zl),b;return Af(new tf(function(c,d){a.onSuccess=function(e){mh(e)?c(new $l(e)):d(new am("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new am("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new am("Request timed out","net.timeout",e))};
b=sh("//web.archive.org/web/20211117205902/https://googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Bf&&b.abort();
return yf(c)})}
function am(a,b,c){Ya.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(am,Ya);function $l(a){this.xhr=a}
;function bm(){this.i=0;this.h=null}
bm.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),sf(a)?a:cm(a)):2===this.i&&b?(a=b.call(c,this.h),sf(a)?a:dm(a)):this};
bm.prototype.getValue=function(){return this.h};
bm.prototype.$goog_Thenable=!0;function dm(a){var b=new bm;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function cm(a){var b=new bm;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function em(){if(Jd())return!0;var a=F("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a||Ah&&Bh("applewebkit")&&!Bh("version")&&(!Bh("safari")||Bh("gsa/"))||vc&&Bh("version/")?!0:(a=Hd.get("CONSENT",void 0))?a.startsWith("YES+"):!0}
;function fm(a){Ya.call(this,a.message||a.description||a.name);this.isMissing=a instanceof gm;this.isTimeout=a instanceof am&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Bf}
v(fm,Ya);fm.prototype.name="BiscottiError";function gm(){Ya.call(this,"Biscotti ID is missing from server")}
v(gm,Ya);gm.prototype.name="BiscottiMissingError";var Zl={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},hm=null;function Xg(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return yf(Error("Biscotti id fetching has been disabled entirely."));if(!em())return yf(Error("User has not consented - not fetching biscotti id."));if("1"==nb())return yf(Error("Biscotti ID is not available in private embed mode"));hm||(hm=Af(Yl().then(im),function(a){return jm(2,a)}));
return hm}
function im(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new gm;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new gm;a=a.id;Yg(a);hm=cm(a);km(18E5,2);return a}
function jm(a,b){b=new fm(b);Yg("");hm=dm(b);0<a&&km(12E4,a-1);throw b;}
function km(a,b){Hg(function(){Af(Yl().then(im,function(c){return jm(b,c)}),Ja)},a)}
function lm(){try{var a=C("yt.ads.biscotti.getId_");return a?a():Xg()}catch(b){return yf(b)}}
;function mm(a){if("1"!=nb()){a&&Wg();try{lm().then(function(){},function(){}),Hg(mm,18E5)}catch(b){og(b)}}}
;var nm=Date.now().toString();
function om(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(nm)for(a=1,b=0;b<nm.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^nm.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var pm,qm=y.ytLoggingDocDocumentNonce_;qm||(qm=om(),Wa("ytLoggingDocDocumentNonce_",qm));pm=qm;var rm={wf:0,Nc:1,Vc:2,Hi:3,yf:4,vm:5,wj:6,Ok:7,tk:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function sm(a){this.h=a}
function tm(a){return new sm({trackingParams:a})}
sm.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
sm.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
sm.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function um(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function vm(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function wm(a){return F(vm(void 0===a?0:a),void 0)}
B("yt_logging_screen.getRootVeType",wm,void 0);function xm(a){return(a=wm(void 0===a?0:a))?new sm({veType:a,youtubeData:void 0}):null}
function ym(){var a=F("csn-to-ctt-auth-info");a||(a={},L("csn-to-ctt-auth-info",a));return a}
function zm(a){a=void 0===a?0:a;var b=F(um(a));if(!b&&!F("USE_CSN_FALLBACK",!0))return null;b||!M("use_undefined_csn_any_layer")&&0!=a||(b="UNDEFINED_CSN");return b?b:null}
B("yt_logging_screen.getCurrentCsn",zm,void 0);function Am(a,b,c){var d=ym();(c=zm(c))&&delete d[c];b&&(d[a]=b)}
function Bm(a){return ym()[a]}
B("yt_logging_screen.getCttAuthInfo",Bm,void 0);function Cm(a,b,c,d){c=void 0===c?0:c;if(a!==F(um(c))||b!==F(vm(c)))Am(a,d,c),L(um(c),a),L(vm(c),b),b=function(){setTimeout(function(){a&&oi("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:pm,clientScreenNonce:a},Al)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
B("yt_logging_screen.setCurrentScreen",Cm,void 0);function Dm(a){lk.call(this,1,arguments);this.csn=a}
v(Dm,lk);var uk=new mk("screen-created",Dm),Em=[],Gm=Fm,Hm=0;function Im(a,b,c,d){var e=d.filter(function(f){f.csn!==b?(f.csn=b,f=!0):f=!1;return f});
c={csn:b,parentVe:c.getAsJson(),childVes:cb(e,function(f){return f.getAsJson()})};
d=u(d);for(e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(lb(e)||!e.trackingParams&&!e.veType)&&Vl(Error("Child VE logged with no data"));d={cttAuthInfo:Bm(b),fa:b};"UNDEFINED_CSN"==b?Jm("visualElementAttached",c,d):a?oi("visualElementAttached",c,a,d):V("visualElementAttached",c,d)}
function Fm(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Lc(b,3)}
function Jm(a,b,c){Em.push({payloadName:a,payload:b,options:c});Hm||(Hm=vk())}
function wk(a){if(Em){for(var b=u(Em),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,oi(c.payloadName,c.payload,null,c.options));Em.length=0}Hm=0}
;function Km(){this.i=new Set;this.h=new Set;this.j=new Map}
Km.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ka(Km);function Lm(a){var b=Ea.apply(1,arguments);if(!Mm(a)||b.some(function(e){return!Mm(e)}))throw Error("Only objects may be merged.");
var c=a;b=u(b);for(var d=b.next();!d.done;d=b.next())Nm(c,d.value);return c}
function Nm(a,b){for(var c in b)if(Mm(b[c])){if(c in a&&!Mm(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Nm(a[c],b[c])}else if(Om(b[c])){if(c in a&&!Om(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Pm(a[c],b[c])}else a[c]=b[c];return a}
function Pm(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Mm(c)?a.push(Nm({},c)):Om(c)?a.push(Pm([],c)):a.push(c);return a}
function Mm(a){return"object"===typeof a&&!Array.isArray(a)}
function Om(a){return"object"===typeof a&&Array.isArray(a)}
;function Qm(a,b){lk.call(this,1,arguments)}
v(Qm,lk);function Rm(a,b){lk.call(this,1,arguments)}
v(Rm,lk);var Sm=new mk("aft-recorded",Qm),Tm=new mk("timing-sent",Rm);var Um=window;function Vm(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var W=Um.performance||Um.mozPerformance||Um.msPerformance||Um.webkitPerformance||new Vm;var Wm=!1,Xm={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Ua(W.clearResourceTimings||W.webkitClearResourceTimings||W.mozClearResourceTimings||W.msClearResourceTimings||W.oClearResourceTimings||Ja,W);function Ym(a){var b=Zm(a);if(b.aft)return b.aft;a=F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function $m(){var a;if(M("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===W||void 0===W?void 0:W.getEntriesByType)||void 0===a?void 0:a.call(W,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=an(e.requestStart),e.responseEnd=an(e.responseEnd),e.redirectStart=an(e.redirectStart),e.redirectEnd=an(e.redirectEnd),e.domainLookupEnd=an(e.domainLookupEnd),e.connectStart=an(e.connectStart),
e.connectEnd=an(e.connectEnd),e.responseStart=an(e.responseStart),e.secureConnectionStart=an(e.secureConnectionStart),e.domainLookupStart=an(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=W.timing}else a=W.timing;return a}
function bn(){return M("csi_use_time_origin")&&W.timeOrigin?Math.floor(W.timeOrigin):W.timing.navigationStart}
function an(a){return Math.round(bn()+a)}
function cn(a){var b;(b=C("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Wa("ytcsi."+(a||"")+"data_",b));return b}
function dn(a){a=cn(a);a.info||(a.info={});return a.info}
function Zm(a){a=cn(a);a.tick||(a.tick={});return a.tick}
function en(a){var b=cn(a).nonce;b||(b=om(),cn(a).nonce=b);return b}
function fn(a){var b=Zm(a||""),c=Ym(a);c&&!Wm&&(rk(Sm,new Qm(Math.round(c-b._start),a)),Wm=!0)}
;function gn(){if(W.getEntriesByType){var a=W.getEntriesByType("paint");if(a=eb(a,function(b){return"first-paint"===b.name}))return an(a.startTime)}a=W.timing;
return a.Kb?Math.max(0,a.Kb):0}
;function hn(){var a=C("ytcsi.debug");a||(a=[],B("ytcsi.debug",a,void 0),B("ytcsi.reference",{},void 0));return a}
function kn(a){a=a||"";var b=C("ytcsi.reference");b||(hn(),b=C("ytcsi.reference"));if(b[a])return b[a];var c=hn(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var ln=y.ytLoggingLatencyUsageStats_||{};B("ytLoggingLatencyUsageStats_",ln,void 0);function mn(){this.h=0}
function nn(){mn.h||(mn.h=new mn);return mn.h}
mn.prototype.tick=function(a,b,c,d){on(this,"tick_"+a+"_"+b)||V("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
mn.prototype.info=function(a,b,c){var d=Object.keys(a).join("");on(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,V("latencyActionInfo",a,{cttAuthInfo:c}))};
mn.prototype.span=function(a,b,c){var d=Object.keys(a).join("");on(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,V("latencyActionSpan",a,{cttAuthInfo:c}))};
function on(a,b){ln[b]=ln[b]||{count:0};var c=ln[b];c.count++;c.time=N();a.h||(a.h=Lg(function(){var d=N(),e;for(e in ln)ln[e]&&6E4<d-ln[e].time&&delete ln[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Pi("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Vl(c)),!0):!1}
;var X={},pn=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X.browse="LATENCY_ACTION_BROWSE",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard=
"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.playlists"]=
"LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf=
"LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.home="LATENCY_ACTION_HOME",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard=
"LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest=
"LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]=
"LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X),Y={},qn=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an=
"adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cs="commandSource",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.ctop="creatorInfo.topEntityType",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",
Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.nav_type="kabukiInfo.navigationType",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.pnt="performanceNavigationTiming",
Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.rc="resourceInfo.resourceCache",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs=
"tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.aac_type="tvInfo.authAccessCredentialType",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",
Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),rn="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),sn={},tn=(sn.ccs="CANARY_STATE_",
sn.mver="MEASUREMENT_VERSION_",sn.pis="PLAYER_INITIALIZED_STATE_",sn.yt_pt="LATENCY_PLAYER_",sn.pa="LATENCY_ACTION_",sn.ctop="TOP_ENTITY_TYPE_",sn.yt_vst="VIDEO_STREAM_TYPE_",sn),un="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function vn(a){return!!F("FORCE_CSI_ON_GEL",!1)||M("csi_on_gel")||M("enable_csi_on_gel")||M("unplugged_tvhtml5_csi_on_gel")||!!cn(a).useGel}
function wn(a,b,c){var d=xn(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||N();if(vn(c)){kn(c||"").tick[a]=b||N();d=en(c);var e=cn(c).cttAuthInfo;"_start"===a?(a=nn(),on(a,"baseline_"+d)||V("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:e})):nn().tick(a,d,b,e);fn(c);return!0}return!1}
function yn(a,b,c){c=xn(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in qn){c=qn[a];0<=ab(rn,c)&&(b=!!b);a in tn&&"string"===typeof b&&(b=tn[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Lm({},d)}0<=ab(un,a)||Vl(new Pi("Unknown label logged with GEL CSI",a))}
function xn(a){a=cn(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function zn(a){a=xn(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
;function An(a,b,c){null!==b&&(dn(c)[a]=b,vn(c)?(a=yn(a,b,c))&&vn(c)&&(b=kn(c||""),Lm(b.info,a),Lm(zn(c),a),b=en(c),c=cn(c).cttAuthInfo,nn().info(a,b,c)):kn(c||"").info[a]=b)}
function Z(a,b,c){var d=Zm(c);if(!b&&"_"!==a[0]){var e=a;W.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),W.mark(e))}e=b||N();d[a]=e;wn(a,b,c)||c||(Bn(),kn("").tick[a]=b||N());return d[a]}
function Cn(){var a=en(void 0);requestAnimationFrame(function(){setTimeout(function(){a===en(void 0)&&Z("ol",void 0,void 0)},0)})}
function Bn(){if(!C("yt.timing.pingSent_")){var a=F("TIMING_ACTION",void 0),b=Zm();if(a=!!C("ytglobal.timingready_")&&a)a="_start"in Zm(void 0);if(a&&Ym()){fn();a=!0;var c=F("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in b)){a=!1;break}if(a&&!vn()){c=Zm();d=dn();e=c._start;var f=F("CSI_SERVICE_NAME","youtube");a={v:2,s:f,action:F("TIMING_ACTION",void 0)};b=d.srt;void 0!==c.srt&&delete d.srt;c.aft=Ym();var g=Zm(void 0),h=g.pbr,k=g.vc;g=g.pbs;h&&k&&g&&h<k&&k<g&&dn(void 0).yt_pvis&&
"youtube"===f&&(An("yt_lt","hot_bg"),f=c.vc,h=c.pbs,delete c.aft,d.aft=Math.round(h-f));for(var l in d)"_"!==l.charAt(0)&&(a[l]=d[l]);c.ps=N();l={};f=[];for(var n in c)"_"!==n.charAt(0)&&(h=Math.round(c[n]-e),l[n]=h,f.push(n+"."+h));a.rt=f.join(",");n=!!d.ap;c="";for(var p in a)a.hasOwnProperty(p)&&(c+="&"+p+"="+a[p]);p="/csi_204?"+c.substring(1);window.navigator&&n?Hh(p):Eh(p);B("yt.timing.pingSent_",!0,void 0);rk(Tm,new Rm(l.aft+(Number(b)||0)))}}}}
function Dn(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=xg+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function En(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);dc()&&a.setAttribute("nonce",dc());return c?(a=W.getEntriesByName(c))&&a[0]&&(a=a[0],c=bn(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Fn(){var a=window.location.protocol,b=W.getEntriesByType("resource");b=bb(b,function(c){return 0===c.name.indexOf(a+"//web.archive.org/web/20211117205902/https://fonts.gstatic.com/s/")});
(b=db(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",an(b.startTime)),Z("wffe",an(b.responseEnd)))}
var Gn=window;Gn.ytcsi&&(Gn.ytcsi.info=An,Gn.ytcsi.tick=Z);function Hn(){this.A=[];this.o=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.B=new Map}
function In(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=zm(c),h=xm(c);g&&h&&((null===(e=null===d||void 0===d?void 0:d.response)||void 0===e?0:e.trackingParams)&&Im(a.client,g,h,[tm(d.response.trackingParams)]),(null===(f=null===d||void 0===d?void 0:d.playerResponse)||void 0===f?0:f.trackingParams)&&Im(a.client,g,h,[tm(d.playerResponse.trackingParams)]))})}
function Jn(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.A.push([b,c]);else{var e=zm(d);c=c||xm(d);e&&c&&Im(a.client,e,c,[b])}}
Hn.prototype.clickCommand=function(a,b,c){a=a.clickTrackingParams;c=void 0===c?0:c;if(a)if(c=zm(void 0===c?0:c)){var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:tm(a).getAsJson(),gestureType:e};b&&(a.clientData=b);b={cttAuthInfo:Bm(c),fa:c};"UNDEFINED_CSN"==c?Jm("visualElementGestured",a,b):d?oi("visualElementGestured",a,d,b):V("visualElementGestured",a,b);b=!0}else b=!1;else b=!1;return b};
function Kn(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Ln(a,b,c);var f=xm(c.layer);if(f){for(var g=u(a.A),h=g.next();!h.done;h=g.next())h=h.value,Jn(a,h[0],h[1]||f,c.layer);f=u(a.o);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=zm(g);var l=k[0]||xm(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={cttAuthInfo:Bm(h),fa:h},"UNDEFINED_CSN"==h?Jm("visualElementStateChanged",k,l):g?oi("visualElementStateChanged",k,g,l):V("visualElementStateChanged",
k,l))}}};
zm(c.layer)||a.j();if(c.eb)for(var d=u(c.eb),e=d.next();!e.done;e=d.next())In(a,e.value,c.layer);else Ul(Error("Delayed screen needs a data promise."))}
function Ln(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Lb?c.Lb:c.layer;var e=zm(d);d=xm(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=F("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=a.client;h=f;var l=c.cb,n=c.cttAuthInfo,p=c.Um,t=Gm(),q={csn:t,pageVe:(new sm({veType:b,youtubeData:g})).getAsJson()};h&&h.visualElement?(q.implicitGesture=
{parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()},p&&(q.implicitGesture.gestureType=p)):h&&Vl(new Pi("newScreen() parent element does not have a VE - rootVe",b));l&&(q.cloneCsn=l);l={cttAuthInfo:n,fa:t};k?oi("screenCreated",q,k,l):V("screenCreated",q,l);rk(uk,new Dm(t));var z=t}catch(A){Wl(A,{bn:b,rootVe:d,parentVisualElement:void 0,Tm:e,an:f,cb:c.cb});Ul(A);return}Cm(z,b,c.layer,c.cttAuthInfo);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=M("screen_manager_skip_hide_killswitch"))){a:{b=
u(Object.values(rm));for(f=b.next();!f.done;f=b.next())if(zm(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,k=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:k},f={cttAuthInfo:Bm(e),fa:e,Ab:f},"UNDEFINED_CSN"==e?Jm("visualElementHidden",d,f):b?oi("visualElementHidden",d,b,f):V("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=z||"");An("csn",z);Km.getInstance().clear();d=xm(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||
M("music_web_mark_root_visible"))&&(e=z,z={csn:e,ve:d.getAsJson(),eventType:1},b={cttAuthInfo:Bm(e),fa:e},"UNDEFINED_CSN"==e?Jm("visualElementShown",z,b):V("visualElementShown",z,b));a.i.delete(c.layer||0);a.j=void 0;e=u(a.B);for(z=e.next();!z.done;z=e.next())b=u(z.value),z=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Jn(a,z,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(A){Ul(A)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(A){Ul(A)}}}
;function Mn(a){a&&(a.dataset?a.dataset[Nn("loaded")]="true":a.setAttribute("data-loaded","true"))}
function On(a,b){return a?a.dataset?a.dataset[Nn(b)]:a.getAttribute("data-"+b):null}
var Pn={};function Nn(a){return Pn[a]||(Pn[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Qn=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Rn=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Sn(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Qn,""),c=c.replace(Rn,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Tn(a,b,c)}
function Tn(a,b,c){c=void 0===c?null:c;var d=Un(a),e=document.getElementById(d),f=e&&On(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Mh(d,b),b=""+Pa(b),Vn[b]=f),g||(e=Wn(a,d,function(){On(e,"loaded")||(Mn(e),Ph(d),Hg(Va(Qh,d),0))},c)))}
function Wn(a,b,c,d){d=void 0===d?null:d;var e=pd(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);id(e,jf(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Xn(a){a=Un(a);var b=document.getElementById(a);b&&(Qh(a),b.parentNode.removeChild(b))}
function Yn(a,b){a&&b&&(a=""+Pa(b),(a=Vn[a])&&Oh(a))}
function Un(a){var b=document.createElement("a");ac(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+fc(a)}
var Vn={};var Zn=[],$n=!1;function ao(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&em()&&"1"!=nb()){var a=function(){$n=!0;"google_ad_status"in window?L("DCLKSTAT",1):L("DCLKSTAT",2)};
try{Sn("//web.archive.org/web/20211117205902/https://static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Zn.push(Qg.L(function(){if(!($n||"google_ad_status"in window)){try{Yn("//web.archive.org/web/20211117205902/https://static.doubleclick.net/instream/ad_status.js",a)}catch(b){}$n=!0;L("DCLKSTAT",3)}},5E3))}}
function bo(){var a=Number(F("DCLKSTAT",0));return isNaN(a)?0:a}
;function co(){this.i=!1;this.h=null}
co.prototype.initialize=function(a,b,c,d){d=void 0===d?!1:d;var e,f;if(a.program){var g=null!==(e=a.interpreterScript)&&void 0!==e?e:null,h=null!==(f=a.interpreterUrl)&&void 0!==f?f:null;if(a.interpreterSafeScript){g=a.interpreterSafeScript;xb("From proto message. b/166824318");g=g.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var k=ub();g=k?k.createScript(g):g;g=(new zb(g)).toString()}a.interpreterSafeUrl&&(h=a.interpreterSafeUrl,xb("From proto message. b/166824318"),h=Db(h.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||
"").toString());eo(this,g,h,a.program,b,c,d)}else Vl(Error("Cannot initialize botguard without program"))};
function eo(a,b,c,d,e,f,g){g=void 0===g?!1:g;c?(a.i=!0,Sn(c,function(){a.i=!1;var h=0<=c.indexOf("/th/");(h?window.trayride:window.botguard)?fo(a,d,!!g,h,e):(Xn(c),Vl(new Pi("Unable to load Botguard","from "+c)))},f)):b&&(f=pd(document,"SCRIPT"),f.textContent=b,f.nonce=dc(),document.head.appendChild(f),document.head.removeChild(f),((b=b.includes("trayride"))?window.trayride:window.botguard)?fo(a,d,!!g,b,e):Vl(Error("Unable to load Botguard from JS")))}
co.prototype.isInitialized=function(){return!!this.h};
function fo(a,b,c,d,e){var f,g;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{go(a,new d(b,e?function(){return e(b)}:Ja))}catch(h){h instanceof Error&&Vl(h)}else{try{go(a,new d(b))}catch(h){h instanceof Error&&Vl(h)}e&&e(b)}else Vl(Error("Failed to finish initializing VM"))}
co.prototype.invoke=function(a){a=void 0===a?{}:a;return this.h?this.h.hasOwnProperty("hot")?this.h.hot(void 0,void 0,a):this.h.invoke(void 0,void 0,a):null};
co.prototype.dispose=function(){this.h=null};
function go(a,b){a.h=b}
;var ho=new co;function io(){return ho.isInitialized()}
function jo(a){a=void 0===a?{}:a;return ho.invoke(a)}
;function ko(){}
ko.getInstance=function(){var a=C("ytglobal.storage_");a||(a=new ko,B("ytglobal.storage_",a,void 0));return a};
ko.prototype.estimate=function(){var a,b,c;return x(function(d){c=navigator;return(null===(a=c.storage)||void 0===a?0:a.estimate)?d.return(c.storage.estimate()):(null===(b=c.webkitTemporaryStorage)||void 0===b?0:b.queryUsageAndQuota)?d.return(lo()):d.return()})};
function lo(){var a=navigator;return new Promise(function(b,c){var d;null!==(d=a.webkitTemporaryStorage)&&void 0!==d&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
B("ytglobal.storageClass_",ko,void 0);function mo(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=tg("ytidb_transaction_ended_event_rate_limit",.02)}
mo.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":no(this,b);break;case "TRANSACTION_ENDED":this.j&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign(Object.assign({},
b),{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function no(a,b){ko.getInstance().estimate().then(function(c){c=Object.assign(Object.assign({},b),{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:oo(null===c||void 0===c?void 0:c.usage),deviceStorageQuotaMbytes:oo(null===c||void 0===c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function oo(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;var po=window;
function qo(){var a=po.uaChPolyfill.state;if(0===a.type)V("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&a.syntheticUa===b,d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),Ul(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);V("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),V("clientHintsPolyfillDiagnostics",
b))}}
var ro=!1;function so(){var a;1===(null===(a=po.uaChPolyfill)||void 0===a?void 0:a.state.type)?ro||(po.uaChPolyfill.onReady=so,ro=!0):po.uaChPolyfill&&qo()}
;function to(a,b,c){I.call(this);var d=this;c=c||F("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.F="*";this.l=c;this.sessionId=null;this.channel="widget";this.H=!!a;this.B=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.H&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.F=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.o||0<=ab(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.i=this.m=null;window.addEventListener("message",this.B)}
v(to,I);to.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.F)}catch(d){pg(d)}}};
to.prototype.G=function(){window.removeEventListener("message",this.B);I.prototype.G.call(this)};function uo(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new to(!!F("WIDGET_ID_ENFORCE")),b=this.Nb.bind(this);a.m=b;a.o=null;this.h.channel="widget";if(a=F("WIDGET_ID"))this.h.sessionId=a}
m=uo.prototype;m.Nb=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,vo(this,a)),this.j[a]=!0)):this.Xa(a,b,c)};
m.Xa=function(){};
function vo(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.Bb=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ma());this.sendMessage("onReady");E(this.i,this.qb,this);this.i=[]};
m.Ma=function(){return null};
function wo(a,b){a.sendMessage("infoDelivery",b)}
m.qb=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.qb({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};function xo(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function yo(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function zo(a,b,c,d){if(Na(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Ao(a){uo.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Ub.bind(this));this.addEventListener("onVolumeChange",this.Vb.bind(this));this.addEventListener("onApiChange",this.Pb.bind(this));this.addEventListener("onPlaybackQualityChange",this.Rb.bind(this));this.addEventListener("onPlaybackRateChange",this.Sb.bind(this));this.addEventListener("onStateChange",this.Tb.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Wb.bind(this))}
v(Ao,uo);m=Ao.prototype;
m.Xa=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&xo(a)){var d=b;if(Na(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=yo(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=yo(e);break;case "loadPlaylist":case "cuePlaylist":e=zo(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);xo(a)&&wo(this,this.Ma())}};
m.onReady=function(){var a=this.Bb.bind(this);this.h.i=a};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Ma=function(){if(!this.api)return null;var a=this.api.getApiInterface();fb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Tb=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());wo(this,a)};
m.Rb=function(a){wo(this,{playbackQuality:a})};
m.Sb=function(a){wo(this,{playbackRate:a})};
m.Pb=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Vb=function(){wo(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Ub=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());wo(this,a)};
m.Wb=function(){var a={sphericalProperties:this.api.getSphericalProperties()};wo(this,a)};
m.dispose=function(){uo.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Bo(a){I.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.mb,this)}
v(Bo,I);m=Bo.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.ia("RECEIVING"))};
m.ia=function(a,b){this.started&&!this.h&&this.connection.ia(a,b)};
m.mb=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Co(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Do(a,c))&&this.ia(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.Qb.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.Qb=function(a,b){this.started&&!this.h&&this.connection.ia(a,this.La(a,b))};
m.La=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.G=function(){var a=this.connection;a.h||Mf(a.i,"command",this.mb,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);I.prototype.G.call(this)};function Eo(a,b){Bo.call(this,b);this.api=a;this.start()}
v(Eo,Bo);Eo.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Eo.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Co(a,b){switch(a){case "loadVideoById":return a=yo(b),[a];case "cueVideoById":return a=yo(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=zo(b),[a];case "cuePlaylist":return a=zo(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Do(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Eo.prototype.La=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Bo.prototype.La.call(this,a,b)};
Eo.prototype.G=function(){Bo.prototype.G.call(this);delete this.api};function Fo(a){a=void 0===a?!1:a;I.call(this);this.i=new K(a);Od(this,Va(Md,this.i))}
D(Fo,I);Fo.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
Fo.prototype.l=function(a,b){this.h||this.i.ha.apply(this.i,arguments)};function Go(a,b,c){Fo.call(this);this.j=a;this.destination=b;this.id=c}
v(Go,Fo);Go.prototype.ia=function(a,b){this.h||this.j.ia(this.destination,this.id,a,b)};
Go.prototype.G=function(){this.destination=this.j=null;Fo.prototype.G.call(this)};function Ho(a,b,c){I.call(this);this.destination=a;this.origin=c;this.i=Eg(window,"message",this.j.bind(this));this.connection=new Go(this,a,b);Od(this,Va(Md,this.connection))}
v(Ho,I);Ho.prototype.ia=function(a,b,c,d){this.h||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(lf(a),this.origin))};
Ho.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h||c.l("command",b.command,b.data,a.origin))}};
Ho.prototype.G=function(){Fg(this.i);this.destination=null;I.prototype.G.call(this)};function Io(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||pb(b);this.assets=a.assets||{};this.attrs=a.attrs||pb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Io.prototype.clone=function(){var a=new Io,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==La(c)?a[b]=pb(c):a[b]=c}return a};var Jo=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Ko(a){a=a||"";if(window.spf){var b=a.match(Jo);spf.style.load(a,b?b[1]:"",void 0)}else Lo(a)}
function Lo(a){var b=Mo(a),c=document.getElementById(b),d=c&&On(c,"loaded");d||c&&!d||(c=No(a,b,function(){On(c,"loaded")||(Mn(c),Ph(b),Hg(Va(Qh,b),0))}))}
function No(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=jf(a);bc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Mo(a){var b=pd(document,"A");xb("This URL is never added to the DOM");ac(b,new Nb(a,Ob));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+fc(a)}
;function Oo(){I.call(this);this.i=[]}
v(Oo,I);Oo.prototype.G=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.Za,void 0)}I.prototype.G.call(this)};function Po(){Oo.apply(this,arguments)}
v(Po,Oo);function Qo(a,b,c,d){I.call(this);var e=this;this.H=b;this.webPlayerContextConfig=d;this.Ga=!1;this.api={};this.la=this.o=null;this.N=new K;this.i={};this.Y=this.va=this.elementId=this.Ha=this.config=null;this.S=!1;this.l=this.B=null;this.wa={};this.tb=["onReady"];this.lastError=null;this.Ya=NaN;this.F={};this.ub=new Po(this);this.ka=0;this.j=this.m=a;Od(this,Va(Md,this.N));Ro(this);So(this);Od(this,Va(Md,this.ub));c?this.ka=Hg(function(){e.loadNewVideoConfig(c)},0):d&&(To(this),Uo(this))}
v(Qo,I);m=Qo.prototype;m.getId=function(){return this.H};
m.loadNewVideoConfig=function(a){if(!this.h){this.ka&&(Ig(this.ka),this.ka=0);var b=a||{};b instanceof Io||(b=new Io(b));this.config=b;this.setConfig(a);Uo(this);this.isReady()&&Vo(this)}};
function To(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.H,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.H:a.config.attrs.id=a.H);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.Ha=a;this.config=Wo(a);To(this);this.va||(this.va=Xo(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=yd(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=yd(Number(a)||a))};
function Vo(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function Yo(a){var b=!0,c=Zo(a);c&&a.config&&(a=$o(a),b=On(c,"version")===a);return b&&!!C("yt.player.Application.create")}
function Uo(a){if(!a.h&&!a.S){var b=Yo(a);if(b&&"html5"===(Zo(a)?"html5":null))a.Y="html5",a.isReady()||ap(a);else if(bp(a),a.Y="html5",b&&a.l&&a.m)a.m.appendChild(a.l),ap(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.B=function(){c=!0;var d=cp(a,"player_bootstrap_method")?C("yt.player.Application.createAlternate")||C("yt.player.Application.create"):C("yt.player.Application.create");var e=a.config?Wo(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig);ap(a)};
a.S=!0;b?a.B():(Sn($o(a),a.B),(b=dp(a))&&Ko(b),ep(a)&&!c&&B("yt.player.Application.create",null,void 0))}}}
function Zo(a){var b=ld(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function ap(a){var b;if(!a.h){var c=Zo(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.S=!1,!cp(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||fp(a)):a.Ya=Hg(function(){ap(a)},50)}}
function fp(a){Ro(a);a.Ga=!0;var b=Zo(a);if(b){a.o=gp(a,b,"addEventListener");a.la=gp(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=gp(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.o&&a.o(g,a.i[g]);Vo(a);a.va&&a.va(a.api);a.N.ha("onReady",a.api)}
function gp(a,b,c){var d=b[c];return function(){var e=Ea.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Vl(f))}}}
function Ro(a){a.Ga=!1;if(a.la)for(var b in a.i)a.i.hasOwnProperty(b)&&a.la(b,a.i[b]);for(var c in a.F)a.F.hasOwnProperty(c)&&Ig(Number(c));a.F={};a.o=null;a.la=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ha};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Ga};
function So(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Ph("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Ph("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Ph("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=Xo(this,b);d&&(0<=ab(this.tb,a)||this.i[a]||(b=hp(this,a),this.o&&this.o(a,b)),this.N.subscribe(a,d),"onReady"===a&&this.isReady()&&Hg(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h||(b=Xo(this,b))&&Mf(this.N,a,b)};
function Xo(a,b){var c=b;if("string"===typeof b){if(a.wa[b])return a.wa[b];c=function(){var d=Ea.apply(0,arguments),e=C(b);if(e)try{e.apply(y,d)}catch(f){Ul(f)}};
a.wa[b]=c}return c?c:null}
function hp(a,b){var c="ytPlayer"+b+a.H;a.i[b]=c;y[c]=function(d){var e=Hg(function(){if(!a.h){a.N.ha(b,d);var f=a.F,g=String(e);g in f&&delete f[g]}},0);
mb(a.F,String(e))};
return c}
m.getPlayerType=function(){return this.Y||(Zo(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function bp(a){a.cancel();Ro(a);a.Y=null;a.config&&(a.config.loaded=!1);var b=Zo(a);b&&(Yo(a)||!ep(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&Yn($o(this),this.B);Ig(this.Ya);this.S=!1};
m.G=function(){bp(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Ul(b)}this.wa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.Ha=this.config=this.api=null;delete this.m;delete this.j;I.prototype.G.call(this)};
function ep(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function $o(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function dp(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function cp(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===ah(d||"","&")[b]}
function Wo(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?pb(e):e}return b}
;var ip={},jp="player_uid_"+(1E9*Math.random()>>>0);function kp(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?ld(d):d;var e=jp+"_"+Pa(d),f=ip[e];if(f&&c)return lp(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Qo(d,e,a,b);ip[e]=f;Ph("player-added",f.api);Od(f,function(){delete ip[f.getId()]});
return f.api}
function lp(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var mp=null,np=null,op=null;function pp(){var a=mp.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function qp(a,b,c){a="ST-"+fc(a).toString(36);b=b?kc(b):"";c=c||5;em()&&qi(a,b,c)}
;function rp(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=F("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=F("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=ic(window.location.href);g&&f.push(g);g=ic(d);if(0<=ab(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),ac(f,d),d=f.href),d){g=d.match(gc);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:zm()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&qp(d,b,k)}else qp(d,b)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=lc(a,l)+n;var t=void 0===t?gd:t;a:{t=void 0===t?gd:t;for(l=0;l<t.length;++l)if(n=t[l],n instanceof ed&&n.isValid(a)){t=new cd(a,ad);break a}t=void 0}c.href=hd(t||dd)}return!0}
;B("yt.setConfig",L,void 0);B("yt.config.set",L,void 0);B("yt.setMsg",rg,void 0);B("yt.msgs.set",rg,void 0);B("yt.logging.errors.log",Ul,void 0);
B("writeEmbed",function(){var a=F("PLAYER_CONFIG",void 0);if(!a){var b=F("PLAYER_VARS",void 0);b&&(a={args:b})}mm(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=F("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=fh(),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));L("FORCE_CSI_ON_GEL",!0);
c=["ol"];kn("").info.actionType="embed";c&&L("TIMING_AFT_KEYS",c);L("TIMING_ACTION","embed");c=F("TIMING_INFO",{});for(var d in c)c.hasOwnProperty(d)&&An(d,c[d]);An("is_nav",1);(d=zm())&&An("csn",d);(d=F("PREVIOUS_ACTION",void 0))&&!vn()&&An("pa",d);d=dn();c=F("CLIENT_PROTOCOL");var e=F("CLIENT_TRANSPORT");c&&An("p",c);e&&An("t",e);An("yt_vis",Dn());An("yt_lt","cold");c=$m();if(e=bn())Z("srt",c.responseStart),1!==d.prerender&&(An("yt_sts","n",void 0),Z("_start",e,void 0));d=gn();0<d&&Z("fpt",d);d=
$m();d.isPerformanceNavigationTiming&&An("pnt",1,void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=bn()&&0<d.connectEnd-
d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));W&&W.getEntriesByType&&Fn();d=[];if(document.querySelector&&W&&W.getEntriesByName)for(var f in Xm)Xm.hasOwnProperty(f)&&(c=Xm[f],En(f,c)&&d.push(c));for(f=0;f<d.length;f++)An("rc",d[f]);if(vn(void 0)){f={actionType:pn[F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:pn[F("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"};if(d=zm())f.clientScreenNonce=d;d=en(void 0);c=cn(void 0).cttAuthInfo;
nn().info(f,d,c)}f=dn();c=Zm();if("cold"===f.yt_lt&&(d=xn(),e=d.gelTicks?d.gelTicks:d.gelTicks={},d=d.gelInfos?d.gelInfos:d.gelInfos={},vn())){for(var g in c)"tick_"+g in e||wn(g,c[g]);g=zn();c=en();e=cn().cttAuthInfo;var h={},k=!1,l;for(l in f)if(!("info_"+l in d)){var n=yn(l,f[l]);n&&(Lm(g,n),Lm(h,n),k=!0)}k&&nn().info(h,c,e)}B("ytglobal.timingready_",!0,void 0);Bn();(l=F("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in l?(l=l.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,
l.serializedForcedExperimentIds||(g=fh(),g.forced_experiments&&(l.serializedForcedExperimentIds=g.forced_experiments)),mp=kp(a,l,!1)):mp=kp(a);mp.addEventListener("onVideoDataChange",pp);a=F("POST_MESSAGE_ID","player");F("ENABLE_JS_API")?op=new Ao(mp):F("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(np=new Ho(window.parent,a,b),op=new Eo(mp,np.connection));ao();if(!M("ytidb_create_logger_embed_killswitch"))for(a={},Li=new mo(void 0===a.handleError?Tl:a.handleError,void 0===a.logEvent?
V:a.logEvent);0<Ki.length;)switch(a=Ki.shift(),a.type){case "ERROR":Li.handleError(a.payload);break;case "EVENT":Li.logEvent(a.eventType,a.payload)}M("networkless_logging_web_embedded")&&(M("embeds_web_enable_new_nwl")?gl():ml());M("embeds_enable_ua_ch_polyfill")&&so()},void 0);
var sp=ng(function(){Cn();var a=si.getInstance(),b=!!((vi("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Se(document.body,"exp-invert-logo"))if(c&&!Se(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Se(d,"inverted-hdpi")){var e=Qe(d);Re(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Se(document.body,"inverted-hdpi")&&Te();if(b!=c){b="f"+(Math.floor(119/31)+1);d=vi(b)||0;d=c?d|67108864:
d&-67108865;0==d?delete ri[b]:(c=d.toString(16),ri[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in ri)d.push(f+"="+encodeURIComponent(String(ri[f])));qi(b,d.join("&"),63072E3,a.i,c)}Hn.h||(Hn.h=new Hn);a=Hn.h;f=16623;var g=void 0===g?{}:g;Object.values(Xl).includes(f)||(Vl(new Pi("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.A=[];a.o=[];g.eb?Kn(a,f,g):Ln(a,f,g)}),tp=ng(function(){mp&&
mp.sendAbandonmentPing&&mp.sendAbandonmentPing();
F("PL_ATT")&&ho.dispose();for(var a=0,b=Zn.length;a<b;a++)Qg.aa(Zn[a]);Zn.length=0;Xn("//web.archive.org/web/20211117205902/https://static.doubleclick.net/instream/ad_status.js");$n=!1;L("DCLKSTAT",0);(0,Nd)(op,np);mp&&(mp.removeEventListener("onVideoDataChange",pp),mp.destroy())});
window.addEventListener?(window.addEventListener("load",sp),window.addEventListener("unload",tp)):window.attachEvent&&(window.attachEvent("onload",sp),window.attachEvent("onunload",tp));Wa("yt.abuse.player.botguardInitialized",C("yt.abuse.player.botguardInitialized")||io);Wa("yt.abuse.player.invokeBotguard",C("yt.abuse.player.invokeBotguard")||jo);Wa("yt.abuse.dclkstatus.checkDclkStatus",C("yt.abuse.dclkstatus.checkDclkStatus")||bo);
Wa("yt.player.exports.navigate",C("yt.player.exports.navigate")||rp);Wa("yt.util.activity.init",C("yt.util.activity.init")||Sg);Wa("yt.util.activity.getTimeSinceActive",C("yt.util.activity.getTimeSinceActive")||Vg);Wa("yt.util.activity.setTimestamp",C("yt.util.activity.setTimestamp")||Tg);}).call(this);


}
/*
     FILE ARCHIVED ON 20:59:02 Nov 17, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:18:03 Jan 25, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.552
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.01
  esindex: 0.011
  cdx.remote: 9.012
  LoadShardBlock: 96.126 (3)
  PetaboxLoader3.datanode: 248.762 (5)
  load_resource: 1264.333 (2)
  PetaboxLoader3.resolve: 1097.429 (2)
*/