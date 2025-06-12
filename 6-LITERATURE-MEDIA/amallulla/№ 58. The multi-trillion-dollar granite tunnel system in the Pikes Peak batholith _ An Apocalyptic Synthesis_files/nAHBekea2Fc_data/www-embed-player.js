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
var da=ca(this);function q(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
q("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
q("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
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
function qa(a,b){a.j={hb:b,lb:!0};a.h=a.m||a.A}
oa.prototype.return=function(a){this.j={return:a};this.h=this.A};
function w(a,b,c){a.h=c;return{value:b}}
oa.prototype.u=function(a){this.h=a};
function ra(a,b,c){a.m=b;void 0!=c&&(a.A=c)}
function sa(a,b){a.h=b;a.m=0}
function ta(a){a.m=0;var b=a.j.hb;a.j=null;return b}
function ua(a){a.F=[a.j];a.m=0;a.A=0}
function va(a){var b=a.F.splice(0)[0];(b=a.j=a.j||b)?b.lb?a.h=a.m||a.A:void 0!=b.u&&a.A<b.u?(a.h=b.u,a.j=null):a.h=a.A:a.h=0}
function wa(a){this.h=new oa;this.i=a}
function xa(a,b){pa(a.h);var c=a.h.l;if(c)return ya(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return za(a)}
function ya(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.l=null,qa(a.h,g),za(a)}a.h.l=null;d.call(a.h,f);return za(a)}
function za(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,qa(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.lb)throw b.hb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Aa(a){this.next=function(b){pa(a.h);a.h.l?b=ya(a,a.h.l.next,b,a.h.B):(a.h.B(b),b=za(a));return b};
this.throw=function(b){pa(a.h);a.h.l?b=ya(a,a.h.l["throw"],b,a.h.B):(qa(a.h,b),b=za(a));return b};
this.return=function(b){return xa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ba(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ba(new Aa(new wa(a)))}
function Ca(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
q("Reflect",function(a){return a?a:{}});
q("Reflect.construct",function(){return ia});
q("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
q("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.o=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.A()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.A=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.S),reject:g(this.A)}};
b.prototype.S=function(g){if(g===this)this.A(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ka(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.O(g):this.m(g)}};
b.prototype.O=function(g){var h=void 0;try{h=g.then}catch(k){this.A(k);return}"function"==typeof h?this.la(h,g):this.m(g)};
b.prototype.A=function(g){this.B(2,g)};
b.prototype.m=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.F()};
b.prototype.Y=function(){var g=this;e(function(){if(g.H()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.H=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.F=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ka=function(g){var h=this.l();g.ya(h.resolve,h.reject)};
b.prototype.la=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,r){return"function"==typeof t?function(z){try{l(t(z))}catch(A){n(A)}}:r}
var l,n,p=new b(function(t,r){l=t;n=r});
this.ya(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ya=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).ya(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(z){return function(A){t[z]=A;r--;0==r&&l(t)}}
var t=[],r=0;do t.push(void 0),r++,d(k.value).ya(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
function Ea(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
q("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ea(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ea(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Ea(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Ea(k,g)&&Ea(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Ea(k,g)&&Ea(k[g],this.h)?delete k[g][this.h]:!1};
return b});
q("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&Ea(h.data_,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
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
function Fa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
q("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
q("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
q("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
function Ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
q("Array.prototype.entries",function(a){return a?a:function(){return Ha(this,function(b,c){return[b,c]})}});
q("Object.setPrototypeOf",function(a){return a||na});
var Ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ea(d,e)&&(a[e]=d[e])}return a};
q("Object.assign",function(a){return a||Ia});
q("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
q("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ea(b,d)&&c.push([d,b[d]]);return c}});
q("Array.prototype.keys",function(a){return a?a:function(){return Ha(this,function(b){return b})}});
q("Array.prototype.values",function(a){return a?a:function(){return Ha(this,function(b,c){return c})}});
q("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
q("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
q("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Fa(this,b,"includes").indexOf(b,c||0)}});
q("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
q("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
q("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
q("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Ea(b,d)&&c.push(b[d]);return c}});
var y=this||self;function B(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ja(){}
function Ka(a){a.Ra=void 0;a.getInstance=function(){return a.Ra?a.Ra:a.Ra=new a}}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Oa(a){return Object.prototype.hasOwnProperty.call(a,Pa)&&a[Pa]||(a[Pa]=++Qa)}
var Pa="closure_uid_"+(1E9*Math.random()>>>0),Qa=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ua=Sa:Ua=Ta;return Ua.apply(null,arguments)}
function Va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Wa(a,b){B(a,b,void 0)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.T=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ym=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Xa(a){return a}
;function Ya(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ya);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.yb=b)}
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
;var Eb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Fb=/&/g,Gb=/</g,Hb=/>/g,Ib=/"/g,Jb=/'/g,Kb=/\x00/g,Lb=/[\x00&<>"']/;function Mb(a,b){this.h=b===Nb?a:""}
m=Mb.prototype;m.ca=!0;m.ba=function(){return this.h.toString()};
m.Oa=!0;m.Ka=function(){return 1};
m.toString=function(){return this.h.toString()};
function Ob(a){if(a instanceof Mb&&a.constructor===Mb)return a.h;La(a);return"type_error:SafeUrl"}
var Pb=RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',"i"),Qb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Rb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Nb={},Tb=new Mb("about:invalid#zClosurez",Nb);var Ub;a:{var Vb=y.navigator;if(Vb){var Wb=Vb.userAgent;if(Wb){Ub=Wb;break a}}Ub=""}function G(a){return-1!=Ub.indexOf(a)}
;function Xb(){return(G("Chrome")||G("CriOS"))&&!G("Edge")||G("Silk")}
;var Yb={};function Zb(a,b,c){this.h=c===Yb?a:"";this.i=b;this.ca=this.Oa=!0}
Zb.prototype.Ka=function(){return this.i};
Zb.prototype.ba=function(){return this.h.toString()};
Zb.prototype.toString=function(){return this.h.toString()};
function $b(a,b){var c=ub();a=c?c.createHTML(a):a;return new Zb(a,b,Yb)}
;function ac(a,b){b instanceof Mb||b instanceof Mb||(b="object"==typeof b&&b.ca?b.ba():String(b),Rb.test(b)||(b="about:invalid#zClosurez"),b=new Mb(b,Nb));a.href=Ob(b)}
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
zc&&(yc=zc?zc[1]:"");if(rc){var Ac=wc();if(null!=Ac&&Ac>parseFloat(yc)){xc=String(Ac);break a}}xc=yc}var Bc=xc,Cc;if(y.document&&rc){var Dc=wc();Cc=Dc?Dc:parseInt(Bc,10)||void 0}else Cc=void 0;var Ec=Cc;var Fc=oc()||G("iPod"),Gc=G("iPad");!G("Android")||Xb();Xb();var Hc=G("Safari")&&!(Xb()||G("Coast")||G("Opera")||G("Edge")||G("Edg/")||G("OPR")||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(oc()||G("iPad")||G("iPod"));var Ic={},Jc=null;
function Kc(a,b){Ma(a);void 0===b&&(b=0);if(!Jc){Jc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ic[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Jc[h]&&(Jc[h]=g)}}}b=Ic[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Mc="function"===typeof Uint8Array;var Nc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Oc(a){Object.isFrozen(a)||(Nc?a[Nc]|=1:void 0!==a.h?a.h|=1:Object.defineProperties(a,{h:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a}
;function Pc(a){return null!==a&&"object"===typeof a&&a.constructor===Object}
var Qc;function Rc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(Mc&&null!=a&&a instanceof Uint8Array)return Kc(a)}return a}
;function Sc(a,b){if(null!=a)return Array.isArray(a)||Pc(a)?Tc(a,b):b(a)}
function Tc(a,b){if(Array.isArray(a)){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=Sc(a[d],b);if(Array.isArray(a)){var e;Nc?e=a[Nc]:e=a.h;a=!!((null==e?0:e)&1)}else a=!1;a&&Oc(c);return c}e={};for(c in a)e[c]=Sc(a[c],b);return e}
function Uc(a){a=Rc(a);return Array.isArray(a)?Tc(a,Uc):a}
function Vc(a){return Mc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;var Wc;function H(a,b,c){var d=Wc;Wc=null;a||(a=d);d=this.constructor.dn;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.cn||0);this.h=null;this.N=a;a:{d=this.N.length;a=d-1;if(d&&(d=this.N[a],Pc(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.l?(a+=this.j,(d=this.N[a])?Array.isArray(d)&&Oc(d):this.N[a]=Xc):(Yc(this),(d=this.i[a])?Array.isArray(d)&&Oc(d):this.i[a]=Xc)}
var Xc=Object.freeze(Oc([]));function Yc(a){var b=a.l+a.j;a.N[b]||(a.i=a.N[b]={})}
function Zc(a,b,c){return-1===b?null:(void 0===c?0:c)||b>=a.l?a.i?a.i[b]:void 0:a.N[b+a.j]}
function $c(a,b,c){c=void 0===c?!1:c;var d=Zc(a,b,c);null==d&&(d=Xc);d===Xc&&(d=Oc(d.slice()),I(a,b,d,c));return d}
function I(a,b,c,d){(void 0===d?0:d)||b>=a.l?(Yc(a),a.i[b]=c):a.N[b+a.j]=c;return a}
function ad(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Zc(a,e)&&(0!==c&&I(a,c,void 0,!1),c=e)}return c}
function bd(a,b,c,d,e){if(-1===c)return null;a.h||(a.h={});var f=a.h[c];if(f)return f;e=Zc(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);return a.h[c]=b}
function cd(a,b,c,d){a.h||(a.h={});var e=a.h[c];if(!e){d=$c(a,c,void 0===d?!1:d);e=[];for(var f=0;f<d.length;f++)e[f]=new b(d[f]);a.h[c]=e}return e}
function dd(a,b,c){var d;a.h||(a.h={});var e=c?c.N:c;a.h[b]=c;return I(a,b,e,void 0===d?!1:d)}
function ed(a,b,c,d){var e=cd(a,d,b);c=c?c:new d;a=$c(a,b);e.push(c);a.push(c.N)}
H.prototype.toJSON=function(){var a=this.N;return Qc?a:Tc(a,Uc)};
function fd(a,b){return Rc(b)}
H.prototype.toString=function(){return this.N.toString()};
H.prototype.clone=function(){var a=this.constructor,b=Tc(this.N,Vc);Wc=b;a=new a(b);Wc=null;gd(a,this);return a};
function gd(a,b){b.A&&(a.A=b.A.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=cd(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)gd(f[g],e[g])}else(f=bd(a,e.constructor,g,void 0,f))&&gd(f,e)}}}}
;var hd=window;xb("csi.gstatic.com");xb("googleads.g.doubleclick.net");xb("pagead2.googlesyndication.com");xb("partner.googleadservices.com");xb("pubads.g.doubleclick.net");xb("securepubads.g.doubleclick.net");xb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var id={};function jd(){}
function kd(a){this.h=a}
v(kd,jd);kd.prototype.toString=function(){return this.h};
var ld=new kd("about:invalid#zTSz",id);function md(a){this.isValid=a}
function nd(a){return new md(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var od=[nd("data"),nd("http"),nd("https"),nd("mailto"),nd("ftp"),new md(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function pd(a){if(a instanceof jd)if(a instanceof kd)a=a.h;else throw Error("");else a=Ob(a);return a}
;function qd(a,b){a.src=Cb(b);var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;var d=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]");(c=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function rd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=rd.prototype;m.clone=function(){return new rd(this.x,this.y)};
m.equals=function(a){return a instanceof rd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function sd(a,b){this.width=a;this.height=b}
m=sd.prototype;m.clone=function(){return new sd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function td(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function ud(a,b){ib(b,function(c,d){c&&"object"==typeof c&&c.ca&&(c=c.ba());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:vd.hasOwnProperty(d)?a.setAttribute(vd[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var vd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function wd(a,b,c){var d=arguments,e=document,f=d[1],g=xd(e,String(d[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):ud(g,f));2<d.length&&yd(e,g,d);return g}
function yd(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ma(f)||Na(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Na(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}E(g?gb(f):f,d)}}}
function xd(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function zd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Ad(a){var b=Bd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Cd(){var a=[];Ad(function(b){a.push(b)});
return a}
var Bd={nc:"allow-forms",oc:"allow-modals",pc:"allow-orientation-lock",qc:"allow-pointer-lock",sc:"allow-popups",tc:"allow-popups-to-escape-sandbox",uc:"allow-presentation",wc:"allow-same-origin",xc:"allow-scripts",yc:"allow-top-navigation",zc:"allow-top-navigation-by-user-activation"},Dd=$a(function(){return Cd()});
function Ed(){var a=Fd(),b={};E(Dd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Fd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Gd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Hd=(new Date).getTime();function Id(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Jd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,r=0;64>r;r+=4)t[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(p<<1|p>>>31)&4294967295;p=e[0];var z=e[1],A=e[2],J=e[3],R=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var S=J^z&(A^J);var U=1518500249}else S=z^A^J,U=1859775393;else 60>r?(S=z&A|J&(z|A),U=2400959708):(S=z^A^J,U=3395469782);S=((p<<5|p>>>27)&4294967295)+S+R+U+t[r]&4294967295;R=J;J=A;A=(z<<30|z>>>2)&4294967295;z=p;p=S}e[0]=e[0]+p&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+A&4294967295;e[3]=e[3]+J&4294967295;e[4]=e[4]+R&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],z=0,A=p.length;z<A;++z)r.push(p.charCodeAt(z));p=r}t||(t=p.length);r=0;if(0==l)for(;r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<t;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var z=24;0<=z;z-=8)p[t++]=e[r]>>z&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Ab:function(){for(var p=d(),t="",r=0;r<p.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return t}}}
;function Kd(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,Ld(Id(d),a,c||null)].join(" "):null}
function Ld(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),Md(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=Md(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Md(a){var b=Jd();b.update(a);return b.Ab().toLowerCase()}
;var Nd={};function Od(a){this.h=a||{cookie:""}}
m=Od.prototype;m.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Sa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.jn;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Sa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Eb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Sa:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Eb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Pd=new Od("undefined"==typeof document?null:document);function Qd(a){return!!Nd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Rd(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;Qd(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new Od(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");Qd(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Sd(a,b,c,d){(a=y[a])||(a=(new Od(document)).get(b));return a?Kd(a,c,d):null}
function Td(a){var b=void 0===b?!1:b;var c=Id(String(y.location.href)),d=[];if(Rd(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new Od(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Kd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Qd(b)&&((b=Sd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Sd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Ud(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Vd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ma(d)?Vd.apply(null,d):Ud(d)}}
;function K(){this.h=this.h;this.A=this.A}
K.prototype.h=!1;K.prototype.dispose=function(){this.h||(this.h=!0,this.G())};
function Wd(a,b){a.h?b():(a.A||(a.A=[]),a.A.push(b))}
K.prototype.G=function(){if(this.A)for(;this.A.length;)this.A.shift()()};function Xd(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Xd.prototype.stopPropagation=function(){this.j=!0};
Xd.prototype.preventDefault=function(){this.defaultPrevented=!0};function Yd(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Zd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,$d[c])c=$d[c];else{c=String(c);if(!$d[c]){var f=/function\s+([^\(]+)/m.exec(c);$d[c]=f?f[1]:"[Anonymous]"}c=$d[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Zd(a,b){b||(b={});b[ae(a)]=!0;var c=a.stack||"";(a=a.yb)&&!b[ae(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Zd(a,b));return c}
function ae(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var $d={};var be=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ja,b),y.removeEventListener("test",Ja,b)}catch(c){}return a}();function ce(a,b){Xd.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
D(ce,Xd);var de={2:"touch",3:"pen",4:"mouse"};
ce.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(tc){a:{try{pc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:de[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&ce.T.preventDefault.call(this)};
ce.prototype.stopPropagation=function(){ce.T.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
ce.prototype.preventDefault=function(){ce.T.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ee="closure_listenable_"+(1E6*Math.random()|0);var fe=0;function ge(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ba=e;this.key=++fe;this.sa=this.xa=!1}
function he(a){a.sa=!0;a.listener=null;a.proxy=null;a.src=null;a.Ba=null}
;function ie(a){this.src=a;this.listeners={};this.h=0}
ie.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=je(a,b,d,e);-1<g?(b=a[g],c||(b.xa=!1)):(b=new ge(b,this.src,f,!!d,e),b.xa=c,a.push(b));return b};
ie.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=je(e,b,c,d);return-1<b?(he(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ke(a,b){var c=b.type;c in a.listeners&&fb(a.listeners[c],b)&&(he(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function je(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.sa&&f.listener==b&&f.capture==!!c&&f.Ba==d)return e}return-1}
;var le="closure_lm_"+(1E6*Math.random()|0),me={},ne=0;function oe(a,b,c,d,e){if(d&&d.once)pe(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)oe(a,b[f],c,d,e);else c=qe(c),a&&a[ee]?a.U(b,c,Na(d)?!!d.capture:!!d,e):re(a,b,c,!1,d,e)}
function re(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Na(e)?!!e.capture:!!e,h=se(a);h||(a[le]=h=new ie(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=te();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)be||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ue(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ne++}}
function te(){function a(c){return b.call(a.src,a.listener,c)}
var b=ve;return a}
function pe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)pe(a,b[f],c,d,e);else c=qe(c),a&&a[ee]?a.i.add(String(b),c,!0,Na(d)?!!d.capture:!!d,e):re(a,b,c,!0,d,e)}
function we(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)we(a,b[f],c,d,e);else(d=Na(d)?!!d.capture:!!d,c=qe(c),a&&a[ee])?a.i.remove(String(b),c,d,e):a&&(a=se(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=je(b,c,d,e)),(c=-1<a?b[a]:null)&&xe(c))}
function xe(a){if("number"!==typeof a&&a&&!a.sa){var b=a.src;if(b&&b[ee])ke(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ue(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ne--;(c=se(b))?(ke(c,a),0==c.h&&(c.src=null,b[le]=null)):he(a)}}}
function ue(a){return a in me?me[a]:me[a]="on"+a}
function ve(a,b){if(a.sa)a=!0;else{b=new ce(b,this);var c=a.listener,d=a.Ba||a.src;a.xa&&xe(a);a=c.call(d,b)}return a}
function se(a){a=a[le];return a instanceof ie?a:null}
var ye="__closure_events_fn_"+(1E9*Math.random()>>>0);function qe(a){if("function"===typeof a)return a;a[ye]||(a[ye]=function(b){return a.handleEvent(b)});
return a[ye]}
;function ze(){K.call(this);this.i=new ie(this);this.S=this;this.F=null}
D(ze,K);ze.prototype[ee]=!0;ze.prototype.addEventListener=function(a,b,c,d){oe(this,a,b,c,d)};
ze.prototype.removeEventListener=function(a,b,c,d){we(this,a,b,c,d)};
function Ae(a,b){var c=a.F;if(c){var d=[];for(var e=1;c;c=c.F)d.push(c),++e}a=a.S;c=b.type||b;"string"===typeof b?b=new Xd(b,a):b instanceof Xd?b.target=b.target||a:(e=b,b=new Xd(c,a),sb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Be(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Be(g,c,!0,b)&&e,b.j||(e=Be(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Be(g,c,!1,b)&&e}
ze.prototype.G=function(){ze.T.G.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,he(d[e]);delete a.listeners[c];a.h--}}this.F=null};
ze.prototype.U=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Be(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.sa&&g.capture==c){var h=g.listener,k=g.Ba||g.src;g.xa&&ke(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ce(a){var b,c;ze.call(this);var d=this;this.B=this.l=0;this.R=null!==a&&void 0!==a?a:{L:function(e,f){return setTimeout(e,f)},
aa:clearTimeout};this.j=null!==(c=null===(b=window.navigator)||void 0===b?void 0:b.onLine)&&void 0!==c?c:!0;this.m=function(){return x(function(e){return w(e,De(d),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.B||Ee(this)}
v(Ce,ze);Ce.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.R.aa(this.B);delete Ce.h};
Ce.prototype.I=function(){return this.j};
function Ee(a){a.B=a.R.L(function(){var b;return x(function(c){if(1==c.h)return a.j?(null===(b=window.navigator)||void 0===b?0:b.onLine)?c.u(3):w(c,De(a),3):w(c,De(a),3);Ee(a);c.h=0})},3E4)}
function De(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f;return x(function(g){switch(g.h){case 1:return d=window.AbortController?new window.AbortController:void 0,e=null===d||void 0===d?void 0:d.signal,f=!1,ra(g,2,3),d&&(a.l=a.R.L(function(){d.abort()},b||2E4)),w(g,fetch("/generate_204",{method:"HEAD",
signal:e}),5);case 5:f=!0;case 3:ua(g);a.o=void 0;a.l&&(a.R.aa(a.l),a.l=0);f!==a.j&&(a.j=f,a.j?Ae(a,"networkstatus-online"):Ae(a,"networkstatus-offline"));c(f);va(g);break;case 2:ta(g),f=!1,g.u(3)}})})}
;var Fe={Im:"WEB_DISPLAY_MODE_UNKNOWN",Em:"WEB_DISPLAY_MODE_BROWSER",Gm:"WEB_DISPLAY_MODE_MINIMAL_UI",Hm:"WEB_DISPLAY_MODE_STANDALONE",Fm:"WEB_DISPLAY_MODE_FULLSCREEN"};function Ge(){this.data_=[];this.h=-1}
Ge.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
Ge.prototype.get=function(a){return!!this.data_[a]};
function He(a){-1==a.h&&(a.h=db(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Ie(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Ie.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Je(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Ke;
function Le(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=xd(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ua(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.cb;c.cb=null;e()}};
return function(e){d.next={cb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function Me(){this.i=this.h=null}
Me.prototype.add=function(a,b){var c=Ne.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Me.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Ne=new Ie(function(){return new Oe},function(a){return a.reset()});
function Oe(){this.next=this.scope=this.h=null}
Oe.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Oe.prototype.reset=function(){this.next=this.scope=this.h=null};function Pe(a,b){Qe||Re();Se||(Qe(),Se=!0);Te.add(a,b)}
var Qe;function Re(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);Qe=function(){a.then(Ue)}}else Qe=function(){var b=Ue;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!G("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(Ke||(Ke=Le()),Ke(b)):y.setImmediate(b)}}
var Se=!1,Te=new Me;function Ue(){for(var a;a=Te.remove();){try{a.h.call(a.scope)}catch(b){nc(b)}Je(Ne,a)}Se=!1}
;function Ve(a,b){this.h=a[y.Symbol.iterator]();this.i=b;this.j=0}
Ve.prototype[Symbol.iterator]=function(){return this};
Ve.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function We(a,b){return new Ve(a,b)}
;function Xe(){this.blockSize=-1}
;function Ye(){this.blockSize=-1;this.blockSize=64;this.h=[];this.A=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
D(Ye,Xe);Ye.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Ze(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Ye.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.A,f=this.i;d<b;){if(0==f)for(;d<=c;)Ze(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Ze(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Ze(this,e);f=0;break}}this.i=f;this.l+=b}};
Ye.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.A[c]=b&255,b/=256;Ze(this,this.A);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function $e(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function af(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function bf(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:$e(a).match(/\S+/g)||[],b=0<=ab(a,b));return b}
function cf(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):bf(a,"inverted-hdpi")&&af(a,Array.prototype.filter.call(a.classList?a.classList:$e(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var df="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function ef(){}
ef.prototype.V=function(){throw df;};
ef.prototype.next=function(){return ff};
var ff={done:!0,value:void 0};function gf(a){return{value:a,done:!1}}
function hf(a){if(a.done)throw df;return a.value}
ef.prototype.P=function(){return this};function jf(a){if(a instanceof kf||a instanceof lf||a instanceof mf)return a;if("function"==typeof a.V)return new kf(function(){return nf(a)});
if("function"==typeof a[Symbol.iterator])return new kf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.P)return new kf(function(){return nf(a.P())});
throw Error("Not an iterator or iterable.");}
function nf(a){if(!(a instanceof ef))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.V();break}catch(d){if(d!==df)throw d;b=!0}return{value:c,done:b}}}}
function kf(a){this.h=a}
kf.prototype.P=function(){return new lf(this.h())};
kf.prototype[Symbol.iterator]=function(){return new mf(this.h())};
kf.prototype.i=function(){return new mf(this.h())};
function lf(a){this.h=a}
v(lf,ef);lf.prototype.V=function(){var a=this.h.next();if(a.done)throw df;return a.value};
lf.prototype.next=function(){return this.h.next()};
lf.prototype[Symbol.iterator]=function(){return new mf(this.h)};
lf.prototype.i=function(){return new mf(this.h)};
function mf(a){kf.call(this,function(){return a});
this.j=a}
v(mf,kf);mf.prototype.next=function(){return this.j.next()};function of(a,b){this.i={};this.h=[];this.ga=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof of)for(c=pf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function pf(a){qf(a);return a.h.concat()}
m=of.prototype;m.has=function(a){return rf(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||sf;qf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function sf(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.ga=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return rf(this.i,a)?(delete this.i[a],--this.size,this.ga++,this.h.length>2*this.size&&qf(this),!0):!1};
function qf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];rf(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],rf(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return rf(this.i,a)?this.i[a]:b};
m.set=function(a,b){rf(this.i,a)||(this.size+=1,this.h.push(a),this.ga++);this.i[a]=b};
m.forEach=function(a,b){for(var c=pf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new of(this)};
m.keys=function(){return jf(this.P(!0)).i()};
m.values=function(){return jf(this.P(!1)).i()};
m.entries=function(){var a=this;return We(this.keys(),function(b){return[b,a.get(b)]})};
m.P=function(a){qf(this);var b=0,c=this.ga,d=this,e=new ef;e.next=function(){if(c!=d.ga)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return ff;var g=d.h[b++];return gf(a?g:d.i[g])};
var f=e.next;e.V=function(){return hf(f.call(e))};
return e};
function rf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function tf(a){uf();return Db(a)}
var uf=Ja;function vf(a){var b=[];wf(new xf,a,b);return b.join("")}
function xf(){}
function wf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),wf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),yf(d,c),c.push(":"),wf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":yf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var zf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Af=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function yf(a,b){b.push('"',a.replace(Af,function(c){var d=zf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),zf[c]=d);return d}),'"')}
;function Bf(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Cf(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Df(a){this.h=0;this.o=void 0;this.l=this.i=this.j=null;this.A=this.m=!1;if(a!=Ja)try{var b=this;a.call(void 0,function(c){Ef(b,2,c)},function(c){Ef(b,3,c)})}catch(c){Ef(this,3,c)}}
function Ff(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Ff.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Gf=new Ie(function(){return new Ff},function(a){a.reset()});
function Hf(a,b,c){var d=Gf.get();d.i=a;d.onRejected=b;d.context=c;return d}
function If(a){return new Df(function(b,c){c(a)})}
Df.prototype.then=function(a,b,c){return Jf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Df.prototype.$goog_Thenable=!0;function Kf(a,b){return Jf(a,null,b,void 0)}
Df.prototype.cancel=function(a){if(0==this.h){var b=new Lf(a);Pe(function(){Mf(this,b)},this)}};
function Mf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Mf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Nf(c),Of(c,e,3,b)))}a.j=null}else Ef(a,3,b)}
function Pf(a,b){a.i||2!=a.h&&3!=a.h||Qf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Jf(a,b,c,d){var e=Hf(null,null,null);e.h=new Df(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Lf?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Pf(a,e);return e.h}
Df.prototype.F=function(a){this.h=0;Ef(this,2,a)};
Df.prototype.H=function(a){this.h=0;Ef(this,3,a)};
function Ef(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.F,f=a.H;if(d instanceof Df){Pf(d,Hf(e||Ja,f||null,a));var g=!0}else if(Cf(d))d.then(e,f,a),g=!0;else{if(Na(d))try{var h=d.then;if("function"===typeof h){Rf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.o=c,a.h=b,a.j=null,Qf(a),3!=b||c instanceof Lf||Sf(a,c))}}
function Rf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Qf(a){a.m||(a.m=!0,Pe(a.B,a))}
function Nf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Df.prototype.B=function(){for(var a;a=Nf(this);)Of(this,a,this.h,this.o);this.m=!1};
function Of(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.A;a=a.j)a.A=!1;if(b.h)b.h.j=null,Tf(b,c,d);else try{b.j?b.i.call(b.context):Tf(b,c,d)}catch(e){Uf.call(null,e)}Je(Gf,b)}
function Tf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Sf(a,b){a.A=!0;Pe(function(){a.A&&Uf.call(null,b)})}
var Uf=nc;function Lf(a){Ya.call(this,a)}
D(Lf,Ya);Lf.prototype.name="cancel";function L(a){K.call(this);this.o=1;this.l=[];this.m=0;this.i=[];this.j={};this.B=!!a}
D(L,K);m=L.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.o=e+3;d.push(e);return e};
function Wf(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.oa(b)}}
m.oa=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ja):(c&&fb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.ha=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];Xf(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.oa(c)}}return 0!=e}return!1};
function Xf(a,b,c){Pe(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.oa,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.G=function(){L.T.G.call(this);this.clear();this.l.length=0};function Yf(a){this.h=a}
Yf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,vf(b))};
Yf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Yf.prototype.remove=function(a){this.h.remove(a)};function Zf(a){this.h=a}
D(Zf,Yf);function $f(a){this.data=a}
function ag(a){return void 0===a||a instanceof $f?a:new $f(a)}
Zf.prototype.set=function(a,b){Zf.T.set.call(this,a,ag(b))};
Zf.prototype.i=function(a){a=Zf.T.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Zf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function bg(a){this.h=a}
D(bg,Zf);bg.prototype.set=function(a,b,c){if(b=ag(b)){if(c){if(c<Date.now()){bg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}bg.T.set.call(this,a,b)};
bg.prototype.i=function(a){var b=bg.T.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())bg.prototype.remove.call(this,a);else return b}};function cg(){}
;function dg(){}
D(dg,cg);dg.prototype[Symbol.iterator]=function(){return jf(this.P(!0)).i()};
dg.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function eg(a){this.h=a}
D(eg,dg);m=eg.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.P=function(a){var b=0,c=this.h,d=new ef;d.next=function(){if(b>=c.length)return ff;var f=c.key(b++);if(a)return gf(f);f=c.getItem(f);if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return gf(f)};
var e=d.next;d.V=function(){return hf(e.call(d))};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function fg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
D(fg,eg);function gg(a,b){this.i=a;this.h=null;var c;if(c=rc)c=!(9<=Number(Ec));if(c){hg||(hg=new of);this.h=hg.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),hg.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
D(gg,dg);var ig={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},hg=null;function jg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ig[b]})}
m=gg.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(jg(a),b);kg(this)};
m.get=function(a){a=this.h.getAttribute(jg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(jg(a));kg(this)};
m.P=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new ef;d.next=function(){if(b>=c.length)return ff;var f=c[b++];if(a)return gf(decodeURIComponent(f.nodeName.replace(/\./g,"%")).substr(1));f=f.nodeValue;if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return gf(f)};
var e=d.next;d.V=function(){return hf(e.call(d))};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);kg(this)};
function kg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function lg(a,b){this.i=a;this.h=b+"::"}
D(lg,dg);lg.prototype.set=function(a,b){this.i.set(this.h+a,b)};
lg.prototype.get=function(a){return this.i.get(this.h+a)};
lg.prototype.remove=function(a){this.i.remove(this.h+a)};
lg.prototype.P=function(a){var b=this.i.P(!0),c=this,d=new ef;d.next=function(){try{var f=b.V()}catch(g){if(g===df)return ff;throw g;}for(;f.substr(0,c.h.length)!=c.h;)try{f=b.V()}catch(g){if(g===df)return ff;throw g;}return gf(a?f.substr(c.h.length):c.i.get(f))};
var e=d.next;d.V=function(){return hf(e.call(d))};
return d};function mg(a){H.call(this,a)}
v(mg,H);mg.prototype.getKey=function(){return Zc(this,1)};
mg.prototype.getValue=function(){return Zc(this,2===ad(this,ng)?2:-1)};
mg.prototype.setValue=function(a){var b=ad(this,ng);b&&2!==b&&null!=a&&(this.h&&b in this.h&&(this.h[b]=void 0),I(this,b,void 0));return I(this,2,a)};
var ng=[2,3,4,5,6];function og(a){H.call(this,a)}
v(og,H);function pg(a){H.call(this,a)}
v(pg,H);function qg(a){H.call(this,a)}
v(qg,H);function rg(a){H.call(this,a,-1,sg)}
v(rg,H);rg.prototype.getPlayerType=function(){return Zc(this,36)};
rg.prototype.setHomeGroupInfo=function(a){return dd(this,81,a)};
var sg=[9,66,24,32,86,100,101];function tg(a){H.call(this,a,-1,ug)}
v(tg,H);var ug=[15,26,28];function vg(a){H.call(this,a)}
v(vg,H);vg.prototype.setToken=function(a){return I(this,2,a)};function wg(a){H.call(this,a,-1,xg)}
v(wg,H);wg.prototype.setSafetyMode=function(a){return I(this,5,a)};
var xg=[12];function yg(a){H.call(this,a,-1,zg)}
v(yg,H);var zg=[12];function Ag(a){H.call(this,a)}
v(Ag,H);function Bg(a){H.call(this,a)}
v(Bg,H);var Cg=[1,2];function Dg(a){H.call(this,a,-1,Eg)}
v(Dg,H);var Eg=[3];function Fg(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;function Gg(a){H.call(this,a,1)}
v(Gg,H);var Hg,Ig,Jg,Kg=y.window,Lg=(null===(Hg=null===Kg||void 0===Kg?void 0:Kg.yt)||void 0===Hg?void 0:Hg.config_)||(null===(Ig=null===Kg||void 0===Kg?void 0:Kg.ytcfg)||void 0===Ig?void 0:Ig.data_)||{},Mg=(null===(Jg=null===Kg||void 0===Kg?void 0:Kg.ytcfg)||void 0===Jg?void 0:Jg.obfuscatedData_)||[];function Ng(){Gg.apply(this,arguments)}
v(Ng,Gg);new Ng(Mg);B("yt.config_",Lg,void 0);B("yt.configJspb_",Mg,void 0);function M(){Fg(Lg,arguments)}
function F(a,b){return a in Lg?Lg[a]:b}
;var Og=[];function Pg(a){Og.forEach(function(b){return b(a)})}
function Qg(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Rg(b)}}:a}
function Rg(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=F("ERRORS",[]),e.push([a,"ERROR",b,c,d]),M("ERRORS",e));Pg(a)}
function Sg(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=F("ERRORS",[]),e.push([a,"WARNING",b,c,d]),M("ERRORS",e))}
;var Tg=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};B("yt.msgs_",Tg,void 0);function Ug(a){Fg(Tg,arguments)}
;function N(a){a=Vg(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Wg(a,b){a=Vg(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Vg(a){var b=F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:F("EXPERIMENT_FLAGS",{})[a]}
function Xg(){var a=[],b=F("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=F("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Yg={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},Zg={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var $g=0,ah=uc?"webkit":tc?"moz":rc?"ms":qc?"o":"";B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++$g},void 0);var bh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ch(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in bh||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function dh(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
ch.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ch.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ch.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var kb=y.ytEventsEventsListeners||{};B("ytEventsEventsListeners",kb,void 0);var eh=y.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",eh,void 0);
function fh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Na(e[4])&&Na(d)&&ob(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var gh=$a(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function hh(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=fh(a,b,c,d);if(e)return e;e=++eh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new ch(h);if(!zd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new ch(h);
h.currentTarget=a;return c.call(a,h)};
g=Qg(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),gh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);kb[e]=[a,b,c,g,d];return e}
function ih(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in kb){var c=kb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?gh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete kb[b]}}))}
;var jh=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function kh(a,b){"function"===typeof a&&(a=Qg(a));return window.setTimeout(a,b)}
function lh(a){window.clearTimeout(a)}
;function mh(a){this.F=a;this.i=null;this.m=0;this.B=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.O=hh(window,"mousemove",Ua(this.S,this));a=Ua(this.H,this);"function"===typeof a&&(a=Qg(a));this.Y=window.setInterval(a,25)}
D(mh,K);mh.prototype.S=function(a){void 0===a.h&&dh(a);var b=a.h;void 0===a.i&&dh(a);this.i=new rd(b,a.i)};
mh.prototype.H=function(){if(this.i){var a=jh();if(0!=this.m){var b=this.B,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.F();this.o=d}this.m=a;this.B=this.i;this.l=(this.l+1)%4}};
mh.prototype.G=function(){window.clearInterval(this.Y);ih(this.O)};function nh(){}
function oh(a,b){return ph(a,0,b)}
nh.prototype.L=function(a,b){return ph(a,1,b)};
function qh(a,b){ph(a,2,b)}
;function rh(){nh.apply(this,arguments)}
v(rh,nh);function sh(){rh.h||(rh.h=new rh);return rh.h}
function ph(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):kh(a,c||0)}
rh.prototype.aa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):lh(a)}};
rh.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
rh.prototype.pause=function(){var a=C("yt.scheduler.instance.pause");a&&a()};var th=sh();var uh={};
function vh(a){var b=void 0===a?{}:a;a=void 0===b.Nb?!1:b.Nb;b=void 0===b.Cb?!0:b.Cb;if(null==C("_lact",window)){var c=parseInt(F("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&wh();hh(document,"keydown",wh);hh(document,"keyup",wh);hh(document,"mousedown",wh);hh(document,"mouseup",wh);a?hh(window,"touchmove",function(){xh("touchmove",200)},{passive:!0}):(hh(window,"resize",function(){xh("resize",200)}),b&&hh(window,"scroll",function(){xh("scroll",200)}));
new mh(function(){xh("mouse",100)});
hh(document,"touchstart",wh,{passive:!0});hh(document,"touchend",wh,{passive:!0})}}
function xh(a,b){uh[a]||(uh[a]=!0,th.L(function(){wh();uh[a]=!1},b))}
function wh(){null==C("_lact",window)&&vh();var a=Date.now();B("_lact",a,window);-1==C("_fact",window)&&B("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function yh(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function zh(){var a=Ah;C("yt.ads.biscotti.getId_")||B("yt.ads.biscotti.getId_",a,void 0)}
function Bh(a){B("yt.ads.biscotti.lastId_",a,void 0)}
;var Ch=/^[\w.]*$/,Dh={q:!0,search_query:!0};function Eh(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Fh(f[0]||""),h=Fh(f[1]||"");g in c?Array.isArray(c[g])?hb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(Eh);k.args=[{key:l,value:f[1],query:a,method:Gh==n?"unchanged":n}];Dh.hasOwnProperty(l)||Sg(k)}}return c}
var Gh=String(Eh);function Hh(a){var b=[];ib(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Ih(a){"?"==a.charAt(0)&&(a=a.substr(1));return Eh(a,"&")}
function Jh(){var a=window.location.href;return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Ih(1<a.length?a[1]:a[0])):{}}
function Kh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ih(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return lc(a,e)+d}
function Lh(a){if(!b)var b=window.location.href;var c=a.match(gc)[1]||null,d=ic(a);c&&d?(a=a.match(gc),b=b.match(gc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ic(b)==d&&(Number(b.match(gc)[4]||null)||null)==(Number(a.match(gc)[4]||null)||null):!0;return a}
function Fh(a){return a&&a.match(Ch)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Mh(a){var b=Nh;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Hd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ra){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?hd:g;try{var h=g.history.length}catch(Ra){h=0}e.u_his=h;var k;e.u_h=null==(k=hd.screen)?void 0:k.height;var l;e.u_w=null==(l=hd.screen)?void 0:l.width;var n;e.u_ah=null==(n=hd.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=hd.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=hd.screen)?void 0:t.colorDepth}catch(Ra){}h=b.h;try{var r=h.screenX;var z=h.screenY}catch(Ra){}try{var A=h.outerWidth;var J=h.outerHeight}catch(Ra){}try{var R=h.innerWidth;var S=h.innerHeight}catch(Ra){}try{var U=h.screenLeft;var Lc=h.screenTop}catch(Ra){}try{R=h.innerWidth,S=h.innerHeight}catch(Ra){}try{var Vf=h.screen.availWidth;var $n=h.screen.availTop}catch(Ra){}r=[U,Lc,r,z,Vf,$n,A,J,R,S];z=b.h.top;try{var Sb=(z||window).document,Da=
"CSS1Compat"==Sb.compatMode?Sb.documentElement:Sb.body;var Ga=(new sd(Da.clientWidth,Da.clientHeight)).round()}catch(Ra){Ga=new sd(-12245933,-12245933)}Sb=Ga;Ga={};Da=new Ge;y.SVGElement&&y.document.createElementNS&&Da.set(0);z=Ed();z["allow-top-navigation-by-user-activation"]&&Da.set(1);z["allow-popups-to-escape-sandbox"]&&Da.set(2);y.crypto&&y.crypto.subtle&&Da.set(3);y.TextDecoder&&y.TextEncoder&&Da.set(4);Da=He(Da);Ga.bc=Da;Ga.bih=Sb.height;Ga.biw=Sb.width;Ga.brdim=r.join();b=b.i;b=(Ga.vis={visible:1,
hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Ga.wgl=!!hd.WebGLRenderingContext,Ga);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Nh=new function(){var a=window.document;this.h=window;this.i=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return Hh(Mh(a))},void 0);Date.now();var Oh="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function Ph(){if(!Oh)return null;var a=Oh();return"open"in a?a:null}
function Qh(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var Rh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Sh="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa("client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" "))),Th=!1;
function Uh(a,b){b=void 0===b?{}:b;var c=Lh(a),d=N("web_ajax_ignore_global_headers_if_set"),e;for(e in Rh){var f=F(Rh[e]);!f||!c&&ic(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!ic(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!ic(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!ic(a))b["X-YouTube-Ad-Signals"]=Hh(Mh(void 0));return b}
function Vh(a){var b=window.location.search,c=ic(a);N("debug_handle_relative_url_for_query_forward_killswitch")||c||!Lh(a)||(c=document.location.hostname);var d=hc(a.match(gc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Ih(b),f={};E(Sh,function(g){e[g]&&(f[g]=e[g])});
return Kh(a,f||{},!1)}
function Wh(a,b){var c=b.format||"JSON";a=Xh(a,b);var d=Yh(a,b),e=!1,f=Zh(a,function(k){if(!e){e=!0;h&&lh(h);var l=Qh(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=$h(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=kh(function(){e||(e=!0,f.abort(),lh(h),g.call(b.context||y,f))},b.timeout)}return f}
function Xh(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=F("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=Kh(a,b||{},!0);return a}
function Yh(a,b){var c=F("XSRF_FIELD_NAME",void 0),d=F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=F("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ic(a)&&!b.withCredentials&&ic(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Ih(e),sb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):kc(e));f=e||f&&!lb(f);!Th&&f&&
"POST"!=b.method&&(Th=!0,Rg(Error("AJAX request with postData should use POST")));return e}
function $h(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Sg(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?ai(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=bi(g)})}d&&ci(e);
return e}
function ci(a){if(Na(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;xb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=$b(a[b],null);a[c]=d}else ci(a[b])}}
function ai(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function bi(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Zh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Qg(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Ph();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;N("debug_forward_web_query_parameters")&&(a=Vh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Uh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var di=Fc||Gc;function ei(a){var b=Ub;return b?0<=b.toLowerCase().indexOf(a):!1}
;var fi={},gi=0;
function hi(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!ei("cobalt")){if(a){a instanceof Mb||(a="object"==typeof a&&a.ca?a.ba():String(a),Rb.test(a)?a=new Mb(a,Nb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Qb))&&Pb.test(b[1])?new Mb(a,Nb):null));b=Ob(a||Tb);if("about:invalid#zClosurez"===b||b.startsWith("data"))a="";else{if(b instanceof Zb)a=b;else{var f="object"==typeof b;a=null;f&&b.Oa&&(a=b.Ka());b=f&&b.ca?b.ba():String(b);Lb.test(b)&&(-1!=b.indexOf("&")&&(b=b.replace(Fb,"&amp;")),-1!=
b.indexOf("<")&&(b=b.replace(Gb,"&lt;")),-1!=b.indexOf(">")&&(b=b.replace(Hb,"&gt;")),-1!=b.indexOf('"')&&(b=b.replace(Ib,"&quot;")),-1!=b.indexOf("'")&&(b=b.replace(Jb,"&#39;")),-1!=b.indexOf("\x00")&&(b=b.replace(Kb,"&#0;")));a=$b(b,a)}a instanceof Zb&&a.constructor===Zb?a=a.h:(La(a),a="type_error:SafeHtml");a=encodeURIComponent(String(vf(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=wd("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||
a.document).body.appendChild(a))}}else if(e)Zh(a,b,"POST",e,d);else if(F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Zh(a,b,"GET","",d);else{b:{try{var g=new Za({url:a});if(g.j&&g.i||g.l){var h=hc(a.match(gc)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(mc);d:{for(c=0;0<=(c=a.indexOf("ri",c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var t=c;break d}}c+=3}t=-1}if(0>t)var r=null;else{var z=a.indexOf("&",t);if(0>z||z>l)z=l;t+=3;
r=decodeURIComponent(a.substr(t,z-t).replace(/\+/g," "))}k="1"!==r}f=!k;break b}}catch(A){}f=!1}f?ii(a)?(b&&b(),f=!0):f=!1:f=!1;f||ji(a,b)}}
function ki(a){var b=void 0===b?"":b;ii(a,b)||hi(a,void 0,void 0,void 0,b)}
function ii(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function ji(a,b){var c=new Image,d=""+gi++;fi[d]=c;c.onload=c.onerror=function(){b&&fi[d]&&b();delete fi[d]};
c.src=a}
;var li=y.ytPubsubPubsubInstance||new L,mi=y.ytPubsubPubsubSubscribedKeys||{},ni=y.ytPubsubPubsubTopicToKeys||{},oi=y.ytPubsubPubsubIsSynchronous||{};function pi(a,b){var c=qi();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){mi[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{oi[a]?f():kh(f,0)}catch(g){Rg(g)}},void 0);
mi[d]=!0;ni[a]||(ni[a]=[]);ni[a].push(d);return d}return 0}
function ri(a){var b=qi();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),E(a,function(c){b.unsubscribeByKey(c);delete mi[c]}))}
function si(a,b){var c=qi();c&&c.publish.apply(c,arguments)}
function ti(a){var b=qi();if(b)if(b.clear(a),a)ui(a);else for(var c in ni)ui(c)}
function qi(){return y.ytPubsubPubsubInstance}
function ui(a){ni[a]&&(a=ni[a],E(a,function(b){mi[b]&&delete mi[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.oa;L.prototype.publish=L.prototype.ha;L.prototype.clear=L.prototype.clear;B("ytPubsubPubsubInstance",li,void 0);B("ytPubsubPubsubTopicToKeys",ni,void 0);B("ytPubsubPubsubIsSynchronous",oi,void 0);B("ytPubsubPubsubSubscribedKeys",mi,void 0);var vi=window,O=vi.ytcsi&&vi.ytcsi.now?vi.ytcsi.now:vi.performance&&vi.performance.timing&&vi.performance.now&&vi.performance.timing.navigationStart?function(){return vi.performance.timing.navigationStart+vi.performance.now()}:function(){return(new Date).getTime()};var wi=Wg("initial_gel_batch_timeout",2E3),xi=Math.pow(2,16)-1,yi=void 0;function zi(){this.j=this.h=this.i=0}
var Ai=new zi,Bi=new zi,Ci=!0,Di=y.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",Di,void 0);var Ei=y.ytLoggingTransportGELProtoQueue_||new Map;B("ytLoggingTransportGELProtoQueue_",Ei,void 0);var Fi=y.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Fi,void 0);var Gi=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};B("ytLoggingTransportTokensToJspbCttTargetIds_",Gi,void 0);
function Hi(a,b){if("log_event"===a.endpoint){var c=Ii(a),d=Di.get(c)||[];Di.set(c,d);d.push(a.payload);var e=void 0===e?!1:e;b&&(yi=new b);a=Wg("tvhtml5_logging_max_batch")||Wg("web_logging_max_batch")||100;b=O();var f=e?Bi.j:Ai.j;d.length>=a?Ji({writeThenSend:!0},N("flush_only_full_queue")?c:void 0,e):10<=b-f&&(Ki(e),e?Bi.j=b:Ai.j=b)}}
function Li(a,b){if("log_event"===a.endpoint){var c=Ii(a),d=new Map;d.set(c,[a.payload]);b&&(yi=new b);return new Df(function(e){yi&&yi.isReady()?Mi(d,e,{bypassNetworkless:!0},!0):e()})}}
function Ii(a){var b="";if(a.Ja)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Fi[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Ji(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Df(function(d){c?(lh(Bi.i),lh(Bi.h),Bi.h=0):(lh(Ai.i),lh(Ai.h),Ai.h=0);if(yi&&yi.isReady())if(void 0!==b)if(c){var e=new Map,f=Ei.get(b)||[];e.set(b,f);Ni(e,d,a);Ei.delete(b)}else e=new Map,f=Di.get(b)||[],e.set(b,f),Mi(e,d,a),Di.delete(b);else c?(Ni(Ei,d,a),Ei.clear()):(Mi(Di,d,a),Di.clear());else Ki(c),d()})}
function Ki(a){a=void 0===a?!1:a;if(N("web_gel_timeout_cap")&&(!a&&!Ai.h||a&&!Bi.h)){var b=kh(function(){Ji({writeThenSend:!0},void 0,a)},6E4);
a?Bi.h=b:Ai.h=b}lh(a?Bi.i:Ai.i);b=F("LOGGING_BATCH_TIMEOUT",Wg("web_gel_debounce_ms",1E4));N("shorten_initial_gel_batch_timeout")&&Ci&&(b=wi);b=kh(function(){Ji({writeThenSend:!0},void 0,a)},b);
a?Bi.i=b:Ai.i=b}
function Mi(a,b,c,d){var e=yi;c=void 0===c?{}:c;var f=Math.round(O()),g=a.size;a=u(a);for(var h=a.next();!h.done;h=a.next()){var k=u(h.value);h=k.next().value;var l=k=k.next().value;k=qb({context:Oi(e.config_||Pi())});k.events=l;(l=Fi[h])&&Qi(k,h,l);delete Fi[h];h="visitorOnlyApprovedKey"===h;Ri(k,f,h);Si(c);N("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&ki("/generate_204");Ti(e,"log_event",k,Ui(c,h,function(){g--;g||b()},function(){g--;
g||b()},d));
Ci=!1}}
function Ni(a,b,c){var d=yi;c=void 0===c?{}:c;var e=Math.round(O()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h=h.next().value;h=new Dg;var l=Vi(d.config_||Pi());dd(h,1,l);for(l=0;l<k.length;l++)ed(h,3,k[l],Ag);(k=Gi[g])&&Wi(h,g,k);delete Gi[g];g="visitorOnlyApprovedKey"===g;Xi(h,e,g);Si(c);a:{Qc=!0;try{var n=JSON.stringify(h.toJSON(),fd);break a}finally{Qc=!1}n=void 0}h=n;g=Ui(c,g,function(){f--;f||b()},function(){f--;
f||b()},void 0);
g.headers={"Content-Type":"application/json+protobuf"};g.postBodyFormat="JSPB";g.postBody=h;Ti(d,"log_event","",g);Ci=!1}}
function Si(a){N("always_send_and_write")&&(a.writeThenSend=!1)}
function Ui(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,nb:a,Ja:b,Zm:!!e,headers:{},postBodyFormat:"",postBody:""}}
function Ri(a,b,c){a.requestTimeMs=String(b);N("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=F("EVENT_ID",void 0))&&(c=Yi(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Xi(a,b,c){I(a,2,b);if(!c&&(b=F("EVENT_ID",void 0))){c=Yi();var d=new Bg;I(d,1,b);I(d,2,c);dd(a,5,d)}}
function Yi(){var a=F("BATCH_CLIENT_COUNTER",void 0)||0;a||(a=Math.floor(Math.random()*xi/2));a++;a>xi&&(a=1);M("BATCH_CLIENT_COUNTER",a);return a}
function Qi(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Wi(a,b,c){if(Zc(c,1===ad(c,Cg)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;dd(a,4,c);a=bd(a,yg,1)||new yg;c=bd(a,wg,3)||new wg;var e=new vg;e.setToken(b);I(e,1,d);ed(c,12,e,vg);dd(a,3,c)}
;var Zi=y.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",Zi,void 0);
function $i(a,b,c,d){d=void 0===d?{}:d;if(N("lr_drop_other_and_business_payloads")){if(Zg[a]||Yg[a])return}else if(N("lr_drop_other_payloads")&&Zg[a])return;var e={},f=Math.round(d.timestamp||O());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=yh();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};N("log_sequence_info_on_gel_web")&&d.fa&&(a=e.context,b=d.fa,Zi[b]=b in Zi?Zi[b]+1:0,a.sequence={index:Zi[b],groupKey:b},d.Db&&delete Zi[d.fa]);(d.kn?Li:Hi)({endpoint:"log_event",payload:e,
cttAuthInfo:d.cttAuthInfo,Ja:d.Ja},c)}
;function aj(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
function bj(){var a=aj();a=Object.keys(Fe).indexOf(a);return-1===a?null:a}
;function cj(a,b,c,d,e){Pd.set(""+a,b,{Sa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var dj=C("ytglobal.prefsUserPrefsPrefs_")||{};B("ytglobal.prefsUserPrefsPrefs_",dj,void 0);function ej(){this.h=F("ALT_PREF_COOKIE_NAME","PREF");this.i=F("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Pd.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(dj[d]=c.toString())}}}
ej.prototype.get=function(a,b){fj(a);gj(a);a=void 0!==dj[a]?dj[a].toString():null;return null!=a?a:b?b:""};
ej.prototype.set=function(a,b){fj(a);gj(a);if(null==b)throw Error("ExpectedNotNull");dj[a]=b.toString()};
ej.prototype.remove=function(a){fj(a);gj(a);delete dj[a]};
ej.prototype.clear=function(){for(var a in dj)delete dj[a]};
function gj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function fj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function hj(a){a=void 0!==dj[a]?dj[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ka(ej);var ij={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},jj={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},kj={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},lj={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function mj(){var a=y.navigator;return a?a.connection:void 0}
;function nj(){return"INNERTUBE_API_KEY"in Lg&&"INNERTUBE_API_VERSION"in Lg}
function Pi(){return{innertubeApiKey:F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:F("INNERTUBE_API_VERSION",void 0),Pa:F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Qa:F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Fb:F("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),kb:F("INNERTUBE_CONTEXT_HL",void 0),jb:F("INNERTUBE_CONTEXT_GL",void 0),Gb:F("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ib:!!F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Hb:!!F("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:F("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Oi(a){var b={client:{hl:a.kb,gl:a.jb,clientName:a.Qa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Pa}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=F("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Xg();0<c.length&&(b.request={internalExperimentFlags:c});oj(a,void 0,b);pj(a,void 0,b);qj(void 0,b);rj(a,void 0,b);sj(void 0,b);F("DELEGATED_SESSION_ID")&&!N("pageid_as_header_web")&&
(b.user={onBehalfOfUser:F("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(Ih(F("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Vi(a){var b=new yg,c=new rg;I(c,1,a.kb);I(c,2,a.jb);I(c,16,a.Fb);I(c,17,a.innertubeContextClientVersion);if(a.Pa){var d=a.Pa,e=new og;d.coldConfigData&&I(e,1,d.coldConfigData);d.appInstallData&&I(e,6,d.appInstallData);d.coldHashData&&I(e,3,d.coldHashData);d.hotHashData&&I(e,5,d.hotHashData);dd(c,62,e)}(d=y.devicePixelRatio)&&1!=d&&I(c,65,d);d=F("EXPERIMENTS_TOKEN","");""!==d&&I(c,54,d);d=Xg();if(0<d.length){e=new tg;for(var f=0;f<d.length;f++){var g=new mg;I(g,1,d[f].key);g.setValue(d[f].value);
ed(e,15,g,mg)}dd(b,5,e)}oj(a,c);pj(a,c);qj(c);rj(a,c);sj(c);F("DELEGATED_SESSION_ID")&&!N("pageid_as_header_web")&&(a=new wg,I(a,3,F("DELEGATED_SESSION_ID")));a=u(Object.entries(Ih(F("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?I(c,12,e):"cmodel"===d?I(c,13,e):"cbr"===d?I(c,87,e):"cbrver"===d?I(c,88,e):"cos"===d?I(c,18,e):"cosver"===d?I(c,19,e):"cplatform"===d&&I(c,42,e);dd(b,1,c);return b}
function oj(a,b,c){a=a.Qa;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=bd(b,pg,96)||new pg;var d=bj();null!==d&&I(c,3,d);dd(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=aj())}
function pj(a,b,c){a=a.Qa;if(("WEB_REMIX"===a||76===a)&&!N("music_web_display_mode_killswitch"))if(b){var d;c=null!=(d=bd(b,qg,70))?d:new qg;d=bj();null!==d&&I(c,10,d);dd(b,70,c)}else if(c){var e;c.client.mb=null!=(e=c.client.mb)?e:{};c.client.mb.webDisplayMode=aj()}}
function qj(a,b){var c;if(N("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?I(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function rj(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=bd(b,og,62))?d:new og;I(c,6,a.appInstallData);dd(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function sj(a,b){a:{var c=mj();if(c){var d=ij[c.type||"unknown"]||"CONN_UNKNOWN";c=ij[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?I(a,61,jj[d]):b&&(b.client.connectionType=d));N("web_log_effective_connection_type")&&(d=mj(),d=null!==d&&void 0!==d&&d.effectiveType?lj.hasOwnProperty(d.effectiveType)?lj[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&
(a?I(a,94,kj[d]):b&&(b.client.effectiveConnectionType=d)))}
function tj(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Xm||F("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Wm:b=Td([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=F("SESSION_INDEX",0),N("pageid_as_header_web")&&(d["X-Goog-PageId"]=F("DELEGATED_SESSION_ID")));return d}
;function uj(a){a=Object.assign({},a);delete a.Authorization;var b=Td();if(b){var c=new Ye;c.update(F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Kc(c.digest(),3)}return a}
;function vj(a){var b=new fg;(b=b.isAvailable()?a?new lg(b,a):b:null)||(a=new gg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new bg(a):null;this.i=document.domain||window.location.hostname}
vj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(vf(b))}catch(f){return}else e=escape(b);cj(a,e,c,this.i)};
vj.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Pd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
vj.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Pd.remove(""+a,"/",void 0===b?"youtube.com":b)};var wj;function xj(){wj||(wj=new vj("yt.innertube"));return wj}
function yj(a,b,c,d){if(d)return null;d=xj().get("nextId",!0)||1;var e=xj().get("requests",!0)||{};e[d]={method:a,request:b,authState:uj(c),requestTime:Math.round(O())};xj().set("nextId",d+1,86400,!0);xj().set("requests",e,86400,!0);return d}
function zj(a){var b=xj().get("requests",!0)||{};delete b[a];xj().set("requests",b,86400,!0)}
function Aj(a){var b=xj().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(O())-d.requestTime)){var e=d.authState,f=uj(tj(!1));ob(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(O())),Ti(a,d.method,e,{}));delete b[c]}}xj().set("requests",b,86400,!0)}}
;var Bj=function(){var a;return function(){a||(a=new vj("ytidb"));return a}}();
function Cj(){var a;return null===(a=Bj())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Dj=[],Ej,Fj=!1;function Gj(a){Fj||(Ej?Ej.handleError(a):(Dj.push({type:"ERROR",payload:a}),10<Dj.length&&Dj.shift()))}
function Hj(a,b){Fj||(Ej?Ej.logEvent(a,b):(Dj.push({type:"EVENT",eventType:a,payload:b}),10<Dj.length&&Dj.shift()))}
;function Ij(a){var b=Ca.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(fa(b))}
v(Ij,Error);function Jj(){try{return Kj(),!0}catch(a){return!1}}
function Kj(){if(void 0!==F("DATASYNC_ID",void 0))return F("DATASYNC_ID",void 0);throw new Ij("Datasync ID not set","unknown");}
;function Lj(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Mj(a){return a.substr(0,a.indexOf(":"))||a}
;var Nj={},Oj=(Nj.AUTH_INVALID="No user identifier specified.",Nj.EXPLICIT_ABORT="Transaction was explicitly aborted.",Nj.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Nj.MISSING_INDEX="Index not created.",Nj.MISSING_OBJECT_STORES="Object stores not created.",Nj.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Nj.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Nj.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",
Nj.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Nj.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Nj.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Nj),Pj={},Qj=(Pj.AUTH_INVALID="ERROR",Pj.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Pj.EXPLICIT_ABORT="IGNORED",Pj.IDB_NOT_SUPPORTED="ERROR",Pj.MISSING_INDEX="WARNING",Pj.MISSING_OBJECT_STORES="ERROR",Pj.DB_DELETED_BY_MISSING_OBJECT_STORES=
"WARNING",Pj.QUOTA_EXCEEDED="WARNING",Pj.QUOTA_MAYBE_EXCEEDED="WARNING",Pj.UNKNOWN_ABORT="WARNING",Pj.INCOMPATIBLE_DB_VERSION="WARNING",Pj),Rj={},Sj=(Rj.AUTH_INVALID=!1,Rj.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Rj.EXPLICIT_ABORT=!1,Rj.IDB_NOT_SUPPORTED=!1,Rj.MISSING_INDEX=!1,Rj.MISSING_OBJECT_STORES=!1,Rj.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Rj.QUOTA_EXCEEDED=!1,Rj.QUOTA_MAYBE_EXCEEDED=!0,Rj.UNKNOWN_ABORT=!0,Rj.INCOMPATIBLE_DB_VERSION=!1,Rj);
function P(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Oj[a]:c;d=void 0===d?Qj[a]:d;e=void 0===e?Sj[a]:e;Ij.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,P.prototype)}
v(P,Ij);function Tj(a,b){P.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Oj.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Tj.prototype)}
v(Tj,P);function Uj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Uj.prototype)}
v(Uj,Error);var Vj=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Wj(a,b,c,d){b=Mj(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof P)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new P("QUOTA_EXCEEDED",a);if(Hc&&"UnknownError"===e.name)return new P("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Uj)return new P("MISSING_INDEX",Object.assign(Object.assign({},a),{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Vj.some(function(f){return e.message.includes(f)}))return new P("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new P("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign(Object.assign({},a),{name:"IdbError",fn:e.name})];e.level="WARNING";return e}
function Xj(a,b,c){var d=Cj();return new P("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null===d||void 0===d?void 0:d.hasSucceededOnce}})}
;function Yj(a){if(!a)throw Error();throw a;}
function Zj(a){return a}
function ak(a){this.h=a}
function Q(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Q.all=function(a){return new Q(new ak(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ja:0};f.ja<a.length;f={ja:f.ja},++f.ja)bk(Q.resolve(a[f.ja]).then(function(g){return function(h){d[g.ja]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
Q.resolve=function(a){return new Q(new ak(function(b,c){a instanceof Q?a.then(b,c):b(a)}))};
Q.reject=function(a){return new Q(new ak(function(b,c){c(a)}))};
Q.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Zj,e=null!==b&&void 0!==b?b:Yj;return new Q(new ak(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){ck(c,c,d,f,g)}),c.onRejected.push(function(){dk(c,c,e,f,g)})):"FULFILLED"===c.state.status?ck(c,c,d,f,g):"REJECTED"===c.state.status&&dk(c,c,e,f,g)}))};
function bk(a,b){a.then(void 0,b)}
function ck(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Q?ek(a,b,f,d,e):d(f)}catch(g){e(g)}}
function dk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Q?ek(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ek(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Q?ek(a,b,f,d,e):d(f)},function(f){e(f)})}
;function fk(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function gk(a){return new Promise(function(b,c){fk(a,b,c)})}
function hk(a){return new Q(new ak(function(b,c){fk(a,b,c)}))}
;function ik(a,b){return new Q(new ak(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function jk(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(O());this.i=!1}
m=jk.prototype;m.add=function(a,b,c){return kk(this,[a],{mode:"readwrite",M:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return kk(this,[a],{mode:"readwrite",M:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return kk(this,[a],{mode:"readonly",M:!0},function(c){return c.objectStore(a).count(b)})};
function lk(a,b,c){a=a.h.createObjectStore(b,c);return new mk(a)}
m.delete=function(a,b){return kk(this,[a],{mode:"readwrite",M:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return kk(this,[a],{mode:"readonly",M:!0},function(c){return c.objectStore(a).get(b)})};
function nk(a,b){return kk(a,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(c){c=c.objectStore("LogsRequestsStore");return hk(c.h.put(b,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function kk(a,b,c,d){var e,f,g,h,k,l,n,p,t,r,z,A;return x(function(J){switch(J.h){case 1:var R={mode:"readonly",M:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?R.mode=c:Object.assign(R,c);e=R;a.transactionCount++;f=e.M?3:1;g=0;case 2:if(h){J.u(3);break}g++;k=Math.round(O());ra(J,4);l=a.h.transaction(b,e.mode);R=new ok(l);R=pk(R,d);return w(J,R,6);case 6:return n=J.i,p=Math.round(O()),qk(a,k,p,g,void 0,b.join(),e),J.return(n);case 4:t=ta(J);r=Math.round(O());z=Wj(t,a.h.name,b.join(),a.h.version);
if((A=z instanceof P&&!z.h)||g>=f)qk(a,k,r,g,z,b.join(),e),h=z;J.u(2);break;case 3:return J.return(Promise.reject(h))}})}
function qk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof P&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Hj("QUOTA_EXCEEDED",{dbName:Mj(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof P&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Hj("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),rk(a,!1,d,f,b,g.tag),Gj(e)):rk(a,!0,d,f,b,g.tag)}
function rk(a,b,c,d,e,f){Hj("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function mk(a){this.h=a}
m=mk.prototype;m.add=function(a,b){return hk(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return hk(this.h.clear()).then(function(){})};
m.count=function(a){return hk(this.h.count(a))};
function sk(a,b){return tk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?sk(this,a):hk(this.h.delete(a))};
m.get=function(a){return hk(this.h.get(a))};
m.index=function(a){try{return new uk(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Uj(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function tk(a,b,c){a=a.h.openCursor(b.query,b.direction);return vk(a).then(function(d){return ik(d,c)})}
function ok(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=P;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function pk(a,b){var c=new Promise(function(d,e){try{bk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
ok.prototype.abort=function(){this.h.abort();this.i=!0;throw new P("EXPLICIT_ABORT");};
ok.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new mk(a),this.j.set(a,b));return b};
function uk(a){this.h=a}
m=uk.prototype;m.count=function(a){return hk(this.h.count(a))};
m.delete=function(a){return wk(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return hk(this.h.get(a))};
m.getKey=function(a){return hk(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function wk(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return vk(a).then(function(d){return ik(d,c)})}
function xk(a,b){this.request=a;this.cursor=b}
function vk(a){return hk(a).then(function(b){return b?new xk(a,b):null})}
m=xk.prototype;m.advance=function(a){this.cursor.advance(a);return vk(this.request)};
m.continue=function(a){this.cursor.continue(a);return vk(this.request)};
m.delete=function(){return hk(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return hk(this.cursor.update(a))};function yk(a,b,c){return new Promise(function(d,e){function f(){t||(t=new jk(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.Yb,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&Hj("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:Mj(a)});var z=f(),A=new ok(g.transaction);
n&&n(z,function(J){return r.oldVersion<J&&r.newVersion>=J},A);
A.done.catch(function(J){e(J)})}catch(J){e(J)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){Hj("IDB_UNEXPECTEDLY_CLOSED",{dbName:Mj(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function zk(a,b,c){c=void 0===c?{}:c;return yk(a,b,c)}
function Ak(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return ra(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),w(g,gk(c),4);
if(2!=g.h)return sa(g,0);f=ta(g);throw Wj(f,a,"",-1);})}
;function Bk(a){return new Promise(function(b){qh(function(){b()},a)})}
function Ck(a,b){this.name=a;this.options=b;this.l=!0;this.A=0;this.i=500}
Ck.prototype.j=function(a,b,c){c=void 0===c?{}:c;return zk(a,b,c)};
Ck.prototype.delete=function(a){a=void 0===a?{}:a;return Ak(this.name,a)};
function Dk(a,b){return new P("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Ek(a,b){if(!b)throw Xj("openWithToken",Mj(a.name));return a.open()}
Ck.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,r,z;return x(function(A){switch(A.h){case 1:return h=null!==(f=Error().stack)&&void 0!==f?f:"",ra(A,2),w(A,c.j(c.name,c.options.version,e),4);case 4:k=A.i;for(var J=c.options,R=[],S=u(Object.keys(J.ra)),U=S.next();!U.done;U=S.next()){U=U.value;var Lc=J.ra[U],Vf=void 0===Lc.Pb?Number.MAX_VALUE:Lc.Pb;!(k.h.version>=Lc.Ia)||k.h.version>=Vf||k.h.objectStoreNames.contains(U)||R.push(U)}l=R;if(0===l.length){A.u(5);break}n=Object.keys(c.options.ra);
p=k.objectStoreNames();if(!(c.A<Wg("ytidb_remake_db_retries",1))){A.u(6);break}c.A++;if(!N("ytidb_remake_db_enable_backoff_delay")){A.u(7);break}return w(A,Bk(c.i),8);case 8:c.i*=2;case 7:return w(A,c.delete(),9);case 9:return Gj(new P("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:n,foundObjectStores:p})),A.return(a());case 6:throw new Tj(p,n);case 5:return A.return(k);case 2:t=ta(A);if(t instanceof DOMException?"VersionError"!==t.name:"DOMError"in self&&t instanceof DOMError?
"VersionError"!==t.name:!(t instanceof Object&&"message"in t)||"An attempt was made to open a database using a lower version than the existing version."!==t.message){A.u(10);break}return w(A,c.j(c.name,void 0,Object.assign(Object.assign({},e),{upgrade:void 0})),11);case 11:r=A.i;z=r.h.version;if(void 0!==c.options.version&&z>c.options.version+1)throw r.close(),c.l=!1,Dk(c,z);return A.return(r);case 10:throw b(),t instanceof Error&&!N("ytidb_async_stack_killswitch")&&(t.stack=t.stack+"\n"+h.substring(h.indexOf("\n")+
1)),Wj(t,c.name,"",null!==(g=c.options.version)&&void 0!==g?g:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw Dk(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Yb:b,upgrade:this.options.upgrade};return this.h=d=a()};var Fk=new Ck("YtIdbMeta",{ra:{databases:{Ia:1}},upgrade:function(a,b){b(1)&&lk(a,"databases",{keyPath:"actualName"})}});
function Gk(a,b){var c;return x(function(d){if(1==d.h)return w(d,Ek(Fk,b),2);c=d.i;return d.return(kk(c,["databases"],{M:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return hk(f.h.put(a,void 0)).then(function(){})})}))})}
function Hk(a,b){var c;return x(function(d){if(1==d.h)return a?w(d,Ek(Fk,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Ik(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],w(e,Ek(Fk,b),2)):3!=e.h?(d=e.i,w(e,kk(d,["databases"],{M:!0,mode:"readonly"},function(f){c.length=0;return tk(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Jk(a){return Ik(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Kk,Lk=new function(){}(new function(){});
function Mk(){var a,b,c;return x(function(d){switch(d.h){case 1:a=Cj();if(null===a||void 0===a?0:a.hasSucceededOnce)return d.return(!0);var e;if(e=di)e=/WebKit\/([0-9]+)/.exec(Ub),e=!!(e&&600<=parseInt(e[1],10));e&&(e=/WebKit\/([0-9]+)/.exec(Ub),e=!(e&&602<=parseInt(e[1],10)));if(e||sc)return d.return(!1);try{if(b=self,!(b.indexedDB&&b.IDBIndex&&b.IDBKeyRange&&b.IDBObjectStore))return d.return(!1)}catch(f){return d.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return d.return(!1);
ra(d,2);c={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(d,Gk(c,Lk),4);case 4:return w(d,Hk("yt-idb-test-do-not-use",Lk),5);case 5:return d.return(!0);case 2:return ta(d),d.return(!1)}})}
function Nk(){if(void 0!==Kk)return Kk;Fj=!0;return Kk=Mk().then(function(a){Fj=!1;var b,c;null!==(b=Bj())&&void 0!==b&&b.h&&(b=Cj(),b={hasSucceededOnce:(null===b||void 0===b?void 0:b.hasSucceededOnce)||a},null===(c=Bj())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0));return a})}
function Ok(){return C("ytglobal.idbToken_")||void 0}
function Pk(){var a=Ok();return a?Promise.resolve(a):Nk().then(function(b){(b=b?Lk:void 0)&&B("ytglobal.idbToken_",b,void 0);return b})}
;new Bf;function Qk(a){if(!Jj())throw a=new P("AUTH_INVALID",{dbName:a}),Gj(a),a;var b=Kj();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Rk(a,b,c,d){var e,f,g,h,k,l;return x(function(n){switch(n.h){case 1:return f=null!==(e=Error().stack)&&void 0!==e?e:"",w(n,Pk(),2);case 2:g=n.i;if(!g)throw h=Xj("openDbImpl",a,b),N("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Gj(h),h;Lj(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Qk(a);ra(n,3);return w(n,Gk(k,g),5);case 5:return w(n,zk(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=ta(n),ra(n,7),w(n,Hk(k.actualName,
g),9);case 9:sa(n,8);break;case 7:ta(n);case 8:throw l;}})}
function Sk(a,b,c){c=void 0===c?{}:c;return Rk(a,b,!1,c)}
function Tk(a,b,c){c=void 0===c?{}:c;return Rk(a,b,!0,c)}
function Uk(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return w(e,Pk(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Lj(a);d=Qk(a);return w(e,Ak(d.actualName,b),3)}return w(e,Hk(d.actualName,c),0)})}
function Vk(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?w(e,Ak(d.actualName,b),2):w(e,Hk(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Wk(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return w(d,Pk(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Lj("LogsDatabaseV2");return w(d,Jk(b),3)}c=d.i;return w(d,Vk(c,a,b),0)})}
function Xk(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return w(d,Pk(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Lj(a);return w(d,Ak(a,b),3)}return w(d,Hk(a,c),0)})}
;function Yk(a){var b,c,d,e,f,g,h,k;this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.na=function(){};
this.now=Date.now;this.qa=!1;this.ub=null!==(b=a.ub)&&void 0!==b?b:100;this.sb=null!==(c=a.sb)&&void 0!==c?c:1;this.qb=null!==(d=a.qb)&&void 0!==d?d:2592E6;this.ob=null!==(e=a.ob)&&void 0!==e?e:12E4;this.rb=null!==(f=a.rb)&&void 0!==f?f:5E3;this.C=null!==(g=a.C)&&void 0!==g?g:void 0;this.Aa=!!a.Aa;this.za=null!==(h=a.za)&&void 0!==h?h:.1;this.Ea=null!==(k=a.Ea)&&void 0!==k?k:10;a.handleError&&(this.handleError=a.handleError);a.na&&(this.na=a.na);a.qa&&(this.qa=a.qa);this.D=a.D;this.R=a.R;this.J=a.J;
this.K=a.K;this.W=a.W;this.Va=a.Va;this.Ua=a.Ua;this.C&&(!this.D||this.D("networkless_logging"))&&Zk(this)}
function Zk(a){return x(function(b){if(1==b.h)return!a.C||a.qa?b.return():a.Aa&&Math.random()<=a.za?w(b,a.J.zb(a.C),2):b.u(2);$k(a);a.K.I()&&a.ta();a.K.U(a.Va,a.ta.bind(a));a.K.U(a.Ua,a.bb.bind(a));a.h=!0;b.h=0})}
m=Yk.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.C&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J.set(d,this.C).then(function(e){d.id=e;c.K.I()&&al(c,d)}).catch(function(e){al(c,d);
bl(c,e)})}else this.W(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.C&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.D&&this.D("nwl_skip_retry")&&(e.skipRetry=c);if(this.K.I()||this.D&&this.D("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return w(k,d.J.set(e,d.C).catch(function(l){bl(d,l)}),2);
f(g,h);k.h=0})}}this.W(a,b,e.skipRetry)}else this.J.set(e,this.C).catch(function(g){d.W(a,b,e.skipRetry);
bl(d,g)})}else this.W(a,b,this.D&&this.D("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.C&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.J.ma(d.id,c.C):e=!0;c.K.ea&&c.D&&c.D("vss_network_hint")&&c.K.ea(!0);f(g,h)};
this.W(d.url,d.options);this.J.set(d,this.C).then(function(g){d.id=g;e&&c.J.ma(d.id,c.C)}).catch(function(g){bl(c,g)})}else this.W(a,b)};
m.ta=function(){var a=this;if(!this.C)throw Xj("throttleSend");this.i||(this.i=this.R.L(function(){var b;return x(function(c){if(1==c.h)return w(c,a.J.ib("NEW",a.C),2);if(3!=c.h)return b=c.i,b?w(c,al(a,b),3):(a.bb(),c.return());a.i&&(a.i=0,a.ta());c.h=0})},this.ub))};
m.bb=function(){this.R.aa(this.i);this.i=0};
function al(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!a.C)throw c=Xj("immediateSend"),c;if(void 0===b.id){e.u(2);break}return w(e,a.J.Jb(b.id,a.C),3);case 3:(d=e.i)?b=d:a.na(Error("The request cannot be found in the database."));case 2:if(cl(a,b,a.qb)){e.u(4);break}a.na(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return w(e,a.J.ma(b.id,a.C),5);case 5:return e.return();case 4:b.skipRetry||(b=dl(a,b));if(!b){e.u(0);break}if(!b.skipRetry||
void 0===b.id){e.u(8);break}return w(e,a.J.ma(b.id,a.C),8);case 8:a.W(b.url,b.options,!!b.skipRetry),e.h=0}})}
function dl(a,b){if(!a.C)throw Xj("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g;return x(function(h){switch(h.h){case 1:g=el(f);if(!(a.D&&a.D("nwl_consider_error_code")&&g||a.D&&!a.D("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Ea)){h.u(2);break}if(!a.K.X){h.u(3);break}return w(h,a.K.X(),3);case 3:if(a.K.I()){h.u(2);break}c(e,f);if(!a.D||!a.D("nwl_consider_error_code")||void 0===(null===b||void 0===b?void 0:b.id)){h.u(6);break}return w(h,a.J.Wa(b.id,a.C,!1),6);case 6:return h.return();case 2:if(a.D&&a.D("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Ea)return h.return();a.potentialEsfErrorCounter++;if(void 0===(null===b||void 0===b?void 0:b.id)){h.u(8);break}return b.sendCount<a.sb?w(h,a.J.Wa(b.id,a.C),12):w(h,a.J.ma(b.id,a.C),8);case 12:a.R.L(function(){a.K.I()&&a.ta()},a.rb);
case 8:c(e,f),h.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){return x(function(g){if(1==g.h)return void 0===(null===b||void 0===b?void 0:b.id)?g.u(2):w(g,a.J.ma(b.id,a.C),2);a.K.ea&&a.D&&a.D("vss_network_hint")&&a.K.ea(!0);d(e,f);g.h=0})};
return b}
function cl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function $k(a){if(!a.C)throw Xj("retryQueuedRequests");a.J.ib("QUEUED",a.C).then(function(b){b&&!cl(a,b,a.ob)?a.R.L(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.u(2):w(c,a.J.Wa(b.id,a.C),2);$k(a);c.h=0})}):a.K.I()&&a.ta()})}
function bl(a,b){a.vb&&!a.K.I()?a.vb(b):a.handleError(b)}
function el(a){var b;return(a=null===(b=null===a||void 0===a?void 0:a.error)||void 0===b?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function fl(a,b){this.version=a;this.args=b}
;function gl(a,b){this.topic=a;this.h=b}
gl.prototype.toString=function(){return this.topic};var hl=C("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.oa;L.prototype.publish=L.prototype.ha;L.prototype.clear=L.prototype.clear;B("ytPubsub2Pubsub2Instance",hl,void 0);var il=C("ytPubsub2Pubsub2SubscribedKeys")||{};B("ytPubsub2Pubsub2SubscribedKeys",il,void 0);var jl=C("ytPubsub2Pubsub2TopicToKeys")||{};B("ytPubsub2Pubsub2TopicToKeys",jl,void 0);var kl=C("ytPubsub2Pubsub2IsAsync")||{};B("ytPubsub2Pubsub2IsAsync",kl,void 0);
B("ytPubsub2Pubsub2SkipSubKey",null,void 0);function ll(a,b){var c=ml();c&&c.publish.call(c,a.toString(),a,b)}
function nl(a){var b=ol,c=ml();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=C("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(il[d])try{if(f&&b instanceof gl&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ga){var l=new h;h.ga=l.version}var n=h.ga}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
gb(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){Rg(p)}},kl[b.toString()]?C("yt.scheduler.instance")?th.L(g):kh(g,0):g())});
il[d]=!0;jl[b.toString()]||(jl[b.toString()]=[]);jl[b.toString()].push(d);return d}
function pl(){var a=ql,b=nl(function(c){a.apply(void 0,arguments);rl(b)});
return b}
function rl(a){var b=ml();b&&("number"===typeof a&&(a=[a]),E(a,function(c){b.unsubscribeByKey(c);delete il[c]}))}
function ml(){return C("ytPubsub2Pubsub2Instance")}
;function sl(a,b){Ck.call(this,a,b);this.options=b;Lj(a)}
v(sl,Ck);function tl(a,b){var c;return function(){c||(c=new sl(a,b));return c}}
sl.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.Xa?Tk:Sk)(a,b,Object.assign({},c))};
sl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Xa?Xk:Uk)(this.name,a)};
function ul(a,b){return tl(a,b)}
;var vl;
function wl(){if(vl)return vl();var a={};vl=ul("LogsDatabaseV2",{ra:(a.LogsRequestsStore={Ia:2},a),Xa:!1,upgrade:function(b,c,d){c(2)&&lk(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return vl()}
;function xl(a){return Ek(wl(),a)}
function yl(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:O(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,xl(b),2);if(3!=g.h)return d=g.i,e=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:F("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,nk(d,e),3);f=g.i;c.Zb=O();zl(c);return g.return(f)})}
function Al(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.h)return c={startTime:O(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(l,xl(b),2);if(3!=l.h)return d=l.i,e=F("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,O()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,kk(d,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(n){return wk(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===a&&(k.status="QUEUED",
p.update(k)))})}),3);
c.Zb=O();zl(c);return l.return(k)})}
function Bl(a,b){var c;return x(function(d){if(1==d.h)return w(d,xl(b),2);c=d.i;return d.return(kk(c,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",hk(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Cl(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.h)return w(e,xl(b),2);d=e.i;return e.return(kk(d,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),hk(g.h.put(h,void 0)).then(function(){return h})):Q.resolve(void 0)})}))})}
function Dl(a,b){var c;return x(function(d){if(1==d.h)return w(d,xl(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function El(a){var b,c;return x(function(d){if(1==d.h)return w(d,xl(a),2);b=d.i;c=O()-2592E6;return w(d,kk(b,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(e){return tk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Fl(){return x(function(a){return w(a,Wk(),0)})}
function zl(a){N("nwl_csi_killswitch")||.01>=Math.random()&&ll("nwl_transaction_latency_payload",a)}
;var Gl={},Hl=ul("ServiceWorkerLogsDatabase",{ra:(Gl.SWHealthLog={Ia:1},Gl),Xa:!0,upgrade:function(a,b){b(1)&&lk(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Il(a){return Ek(Hl(),a)}
function Jl(a){var b,c;return x(function(d){if(1==d.h)return w(d,Il(a),2);b=d.i;c=O()-2592E6;return w(d,kk(b,["SWHealthLog"],{mode:"readwrite",M:!0},function(e){return tk(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Kl(a){var b;return x(function(c){if(1==c.h)return w(c,Il(a),2);b=c.i;return w(c,b.clear("SWHealthLog"),0)})}
;var Ll;function Ml(){Ll||(Ll=new vj("yt.offline"));return Ll}
function Nl(a){if(N("offline_error_handling")){var b=Ml().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Ml().set("errors",b,2592E3,!0)}}
function Ol(){if(N("offline_error_handling")){var a=Ml().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new Ij(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;Rg(c)}Ml().set("errors",{},2592E3,!0)}}}
;var Pl=Wg("network_polling_interval",3E4);function T(){ze.call(this);this.H=0;this.O=this.m=!1;this.l=this.Na();N("use_shared_nsm")?(Ce.h||(Ce.h=new Ce(th)),this.j=Ce.h):(Ql(this),Rl(this))}
v(T,ze);function Sl(){if(!T.h){var a=C("yt.networkStatusManager.instance")||new T;B("yt.networkStatusManager.instance",a,void 0);T.h=a}return T.h}
m=T.prototype;m.I=function(){var a;return N("use_shared_nsm")&&this.j?null===(a=this.j)||void 0===a?void 0:a.I():this.l};
m.ea=function(a){var b;N("use_shared_nsm")&&this.j?null===(b=this.j)||void 0===b?void 0:b.j=a:a!==this.l&&(this.l=a)};
m.Kb=function(a){!N("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.H||Tl(this))};
m.Na=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Bb=function(){this.O=!0};
m.U=function(a,b){return N("use_shared_nsm")&&this.j?this.j.U(a,b):ze.prototype.U.call(this,a,b)};
function Rl(a){window.addEventListener("online",function(){return x(function(b){if(1==b.h)return w(b,a.X(),2);a.O&&Ol();b.h=0})})}
function Ql(a){window.addEventListener("offline",function(){return x(function(b){return w(b,a.X(),0)})})}
function Tl(a){a.H=oh(function(){return x(function(b){if(1==b.h)return a.l?a.Na()||!a.m?b.u(3):w(b,a.X(),3):w(b,a.X(),3);Tl(a);b.h=0})},Pl)}
m.X=function(a){var b=this;return N("use_shared_nsm")&&this.j?De(this.j,a):this.o?this.o:this.o=new Promise(function(c){var d,e,f;return x(function(g){switch(g.h){case 1:return d=window.AbortController?new window.AbortController:void 0,e=null===d||void 0===d?void 0:d.signal,f=!1,ra(g,2,3),d&&(b.B=th.L(function(){d.abort()},a||2E4)),w(g,fetch("/generate_204",{method:"HEAD",
signal:e}),5);case 5:f=!0;case 3:ua(g);b.o=void 0;b.B&&th.aa(b.B);f!==b.l&&(b.l=f,b.l&&b.m?Ae(b,"ytnetworkstatus-online"):b.m&&Ae(b,"ytnetworkstatus-offline"));c(f);va(g);break;case 2:ta(g),f=!1,g.u(3)}})})};
T.prototype.sendNetworkCheckRequest=T.prototype.X;T.prototype.listen=T.prototype.U;T.prototype.enableErrorFlushing=T.prototype.Bb;T.prototype.getWindowStatus=T.prototype.Na;T.prototype.monitorNetworkStatusChange=T.prototype.Kb;T.prototype.networkStatusHint=T.prototype.ea;T.prototype.isNetworkAvailable=T.prototype.I;T.getInstance=Sl;function Ul(a){a=void 0===a?{}:a;ze.call(this);var b=this;this.l=this.H=0;this.m="ytnetworkstatus-offline";this.o="ytnetworkstatus-online";N("use_shared_nsm")&&(this.m="networkstatus-offline",this.o="networkstatus-online");this.j=Sl();var c=C("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.gb);a.Ca&&!N("use_shared_nsm")&&(c=C("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=C("yt.networkStatusManager.instance.listen").bind(this.j))a.Fa?
(this.Fa=a.Fa,c(this.o,function(){Vl(b,"publicytnetworkstatus-online");N("use_shared_nsm")&&a.Ca&&Ol()}),c(this.m,function(){Vl(b,"publicytnetworkstatus-offline")})):(c(this.o,function(){Ae(b,"publicytnetworkstatus-online");
N("use_shared_nsm")&&a.Ca&&Ol()}),c(this.m,function(){Ae(b,"publicytnetworkstatus-offline")}))}
v(Ul,ze);Ul.prototype.I=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.j);return a?a():!0};
Ul.prototype.ea=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Ul.prototype.X=function(a){var b=this,c;return x(function(d){return(c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j))?d.return(c(a)):d.return(!0)})};
function Vl(a,b){a.Fa?a.l?(th.aa(a.H),a.H=th.L(function(){a.B!==b&&(Ae(a,b),a.B=b,a.l=O())},a.Fa-(O()-a.l))):(Ae(a,b),a.B=b,a.l=O()):Ae(a,b)}
;var Wl;function Xl(){Yk.call(this,{J:{zb:El,ma:Dl,ib:Al,Jb:Bl,Wa:Cl,set:yl},K:Yl(),handleError:Rg,na:Sg,W:Zl,now:O,vb:Nl,R:sh(),Va:"publicytnetworkstatus-online",Ua:"publicytnetworkstatus-offline",Aa:!0,za:.1,Ea:Wg("potential_esf_error_limit",10),D:N,qa:!Jj()});this.j=new Bf;this.Aa&&Math.random()<=this.za&&this.C&&Jl(this.C);N("networkless_immediately_drop_sw_health_store")&&$l(this);N("networkless_immediately_drop_all_requests")&&Fl();Xk("LogsDatabaseV2")}
v(Xl,Yk);function am(){var a=C("yt.networklessRequestController.instance");a||(a=new Xl,B("yt.networklessRequestController.instance",a,void 0),N("networkless_logging")&&Pk().then(function(b){return x(function(c){if(1==c.h)return a.C=b,w(c,Zk(a),2);a.j.resolve();c.h=0})}));
return a}
Xl.prototype.writeThenSend=function(a,b){b||(b={});Jj()||(this.h=!1);Yk.prototype.writeThenSend.call(this,a,b)};
Xl.prototype.sendThenWrite=function(a,b,c){b||(b={});Jj()||(this.h=!1);Yk.prototype.sendThenWrite.call(this,a,b,c)};
Xl.prototype.sendAndWrite=function(a,b){b||(b={});Jj()||(this.h=!1);Yk.prototype.sendAndWrite.call(this,a,b)};
function $l(a){var b;x(function(c){if(!a.C)throw b=Xj("clearSWHealthLogsDb"),b;return c.return(Kl(a.C).catch(function(d){a.handleError(d)}))})}
function Zl(a,b,c){var d;if(null===(d=b.postParams)||void 0===d?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(O());c&&0===Object.keys(b).length?hi(a):Wh(a,b)}
function Yl(){Wl||(Wl=new Ul({Ca:!0,gb:!0}));return Wl}
;var bm=!1,cm=0,dm=0,em,fm=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:bm,potentialEsfErrorCounter:dm};B("ytNetworklessLoggingInitializationOptions",fm,void 0);
function gm(){var a;x(function(b){switch(b.h){case 1:return w(b,Pk(),2);case 2:a=b.i;if(!a||!Jj()&&!N("nwl_init_require_datasync_id_killswitch")){b.u(0);break}bm=!0;fm.isNwlInitialized=bm;return w(b,Xk("LogsDatabaseV2"),4);case 4:if(!(.1>=Math.random())){b.u(5);break}return w(b,El(a),6);case 6:return w(b,Jl(a),5);case 5:hm();im().I()&&jm();im().U("publicytnetworkstatus-online",jm);im().U("publicytnetworkstatus-offline",km);if(!N("networkless_immediately_drop_sw_health_store")){b.u(8);break}return w(b,
lm(),8);case 8:if(N("networkless_immediately_drop_all_requests"))return w(b,Fl(),0);b.u(0)}})}
function mm(a,b){function c(d){var e=im().I();if(!nm()||!d||e&&N("vss_networkless_bypass_write"))om(a,b);else{var f={url:a,options:b,timestamp:O(),status:"NEW",sendCount:0};yl(f,d).then(function(g){f.id=g;im().I()&&pm(f)}).catch(function(g){pm(f);
im().I()?Rg(g):Nl(g)})}}
b=void 0===b?{}:b;N("skip_is_supported_killswitch")?Pk().then(function(d){c(d)}):c(Ok())}
function qm(a,b){function c(d){if(nm()&&d){var e={url:a,options:b,timestamp:O(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?Dl(e.id,d):f=!0;N("vss_network_hint")&&im().ea(!0);g(h,k)};
om(e.url,e.options);yl(e,d).then(function(h){e.id=h;f&&Dl(e.id,d)}).catch(function(h){im().I()?Rg(h):Nl(h)})}else om(a,b)}
b=void 0===b?{}:b;N("skip_is_supported_killswitch")?Pk().then(function(d){c(d)}):c(Ok())}
function jm(){var a=Ok();if(!a)throw Xj("throttleSend");cm||(cm=th.L(function(){var b;return x(function(c){if(1==c.h)return w(c,Al("NEW",a),2);if(3!=c.h)return b=c.i,b?w(c,pm(b),3):(km(),c.return());cm&&(cm=0,jm());c.h=0})},100))}
function km(){th.aa(cm);cm=0}
function pm(a){var b,c,d;return x(function(e){switch(e.h){case 1:b=Ok();if(!b)throw c=Xj("immediateSend"),c;if(void 0===a.id){e.u(2);break}return w(e,Bl(a.id,b),3);case 3:(d=e.i)?a=d:Sg(Error("The request cannot be found in the database."));case 2:if(rm(a,2592E6)){e.u(4);break}Sg(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.u(5);break}return w(e,Dl(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=sm(a));var f=a,g,h;if(null===(h=null===(g=null===
f||void 0===f?void 0:f.options)||void 0===g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(O());a=f;if(!a){e.u(0);break}if(!a.skipRetry||void 0===a.id){e.u(8);break}return w(e,Dl(a.id,b),8);case 8:om(a.url,a.options,!!a.skipRetry),e.h=0}})}
function sm(a){var b=Ok();if(!b)throw Xj("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g;return x(function(h){switch(h.h){case 1:g=el(f);if(!(N("nwl_consider_error_code")&&g||!N("nwl_consider_error_code")&&tm()<=Wg("potential_esf_error_limit",10))){h.u(2);break}return w(h,im().X(),3);case 3:if(im().I()){h.u(2);break}c(e,f);if(!N("nwl_consider_error_code")||void 0===(null===a||void 0===a?void 0:a.id)){h.u(5);break}return w(h,Cl(a.id,b,!1),5);case 5:return h.return();case 2:if(N("nwl_consider_error_code")&&!g&&tm()>Wg("potential_esf_error_limit",10))return h.return();
C("ytNetworklessLoggingInitializationOptions")&&fm.potentialEsfErrorCounter++;dm++;if(void 0===(null===a||void 0===a?void 0:a.id)){h.u(7);break}return 1>a.sendCount?w(h,Cl(a.id,b),11):w(h,Dl(a.id,b),7);case 11:th.L(function(){im().I()&&jm()},5E3);
case 7:c(e,f),h.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return x(function(g){if(1==g.h)return void 0===(null===a||void 0===a?void 0:a.id)?g.u(2):w(g,Dl(a.id,b),2);N("vss_network_hint")&&im().ea(!0);d(e,f);g.h=0})};
return a}
function rm(a,b){a=a.timestamp;return O()-a>=b?!1:!0}
function hm(){var a=Ok();if(!a)throw Xj("retryQueuedRequests");Al("QUEUED",a).then(function(b){b&&!rm(b,12E4)?th.L(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.u(2):w(c,Cl(b.id,a),2);hm();c.h=0})}):im().I()&&jm()})}
function lm(){var a,b;return x(function(c){a=Ok();if(!a)throw b=Xj("clearSWHealthLogsDb"),b;return c.return(Kl(a).catch(function(d){Rg(d)}))})}
function im(){if(N("use_new_nwl"))return Yl();em||(em=new Ul({Ca:!0,gb:!0}));return em}
function om(a,b,c){c&&0===Object.keys(b).length?hi(a):Wh(a,b)}
function nm(){return C("ytNetworklessLoggingInitializationOptions")?fm.isNwlInitialized:bm}
function tm(){return C("ytNetworklessLoggingInitializationOptions")?fm.potentialEsfErrorCounter:dm}
;function um(a){var b=this;this.config_=null;a?this.config_=a:nj()&&(this.config_=Pi());oh(function(){Aj(b)},5E3)}
um.prototype.isReady=function(){!this.config_&&nj()&&(this.config_=Pi());return!!this.config_};
function Ti(a,b,c,d){function e(z){z=void 0===z?!1:z;var A;if(d.retry&&"www.youtube-nocookie.com"!=h&&(z||N("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(A=yj(b,c,l,k)),A)){var J=g.onSuccess,R=g.onFetchSuccess;g.onSuccess=function(S,U){zj(A);J(S,U)};
c.onFetchSuccess=function(S,U){zj(A);R(S,U)}}try{z&&d.retry&&!d.nb.bypassNetworkless?(g.method="POST",d.nb.writeThenSend?N("use_new_nwl")?am().writeThenSend(r,g):mm(r,g):N("use_new_nwl")?am().sendAndWrite(r,g):qm(r,g)):(g.method="POST",g.postParams||(g.postParams={}),Wh(r,g))}catch(S){if("InvalidAccessError"==S.name)A&&(zj(A),A=0),Sg(Error("An extension is blocking network request."));
else throw S;}A&&oh(function(){Aj(a)},5E3)}
!F("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Sg(new Ij("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Ij("innertube xhrclient not ready",b,c,d);Rg(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(z,A){if(d.onSuccess)d.onSuccess(A)},
onFetchSuccess:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,A){if(d.onError)d.onError(A)},
onFetchError:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Gb)&&(h=f);var k=a.config_.Ib||!1,l=tj(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.Hb&&f;N("omit_innertube_api_key_for_bearer_auth_header")&&(t=t&&f.startsWith("Bearer"));t||(p.key=a.config_.innertubeApiKey);var r=Kh(""+
h+n,p||{},!0);N("use_new_nwl")||nm()?Nk().then(function(z){e(z)}):e(!1)}
;function V(a,b,c){c=void 0===c?{}:c;var d=um;F("ytLoggingEventsDefaultDisabled",!1)&&um==um&&(d=null);$i(a,b,d,c)}
;var vm=[{Ta:function(a){return"Cannot read property '"+a.key+"'"},
Da:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ta:function(a){return"Cannot call '"+a.key+"'"},
Da:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ta:function(a){return a.key+" is not defined"},
Da:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var xm={da:[],Z:[{ab:wm,weight:500}]};function wm(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function ym(){this.Z=[];this.da=[]}
var zm;function Am(){if(!zm){var a=zm=new ym;a.da.length=0;a.Z.length=0;xm.da&&a.da.push.apply(a.da,xm.da);xm.Z&&a.Z.push.apply(a.Z,xm.Z)}return zm}
;var Bm=new L;function Cm(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Dm(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Dm(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Dm(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Dm(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Em(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Fm(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Cm(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Fm(e+".ve",f,g,h):0;d+=g;d+=Fm(e,a[e],b,c);if(500<d)break}}else c[b]=Gm(a),d+=c[b].length;else c[b]=Gm(a),d+=c[b].length;return d}
function Fm(a,b,c,d){c+="."+a;a=Gm(b);d[c]=a;return c.length+a.length}
function Gm(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Hm=new Set,Im=0,Jm=0,Km=0,Lm=[],Mm=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Nm(a){Om(a)}
function Pm(a){Om(a,"WARNING")}
function Om(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),N("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=Im))){var g=Yd(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=Em(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var n=
a.params;if("object"===typeof a.params)for(l in n){if(n[l]){var p="params."+l,t=Gm(n[l]);c[p]=t;k+=p.length+t.length;if(500<k)break}}else c.params=Gm(n)}if(Lm.length)for(l=0;l<Lm.length&&!(k=Em(Lm[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=
Am();c=u(a.da);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.en)){a=d.weight;break a}a=u(a.Z);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.ab(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(vm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Da[l.name])for(e=u(c.Da[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=
d[g+1];l.message=c.Ta(f);break}l.params||(l.params={});a=Am();l.params["params.errorServiceSignature"]="msg="+a.da.length+"&cb="+a.Z.length;l.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));xb("sample").constructor!==vb&&(l.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!Hm.has(l.message)){"ERROR"===b?
(Bm.ha("handleError",l),N("record_app_crashed_web")&&0===Km&&1===l.sampleWeight&&(Km++,a={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},N("report_client_error_with_app_crash_ks")||(a.systemHealth={crashData:{clientError:{logMessage:{message:l.message}}}}),V("appCrashed",a)),Jm++):"WARNING"===b&&Bm.ha("handleWarning",l);if(N("kevlar_gel_error_routing")){a=b;b:{c=u(Mm);for(d=c.next();!d.done;d=c.next())if(ei(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=
l.fileName);c=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};e={pageUrl:window.location.href,
kvPairs:[]};F("FEXP_EXPERIMENTS")&&(e.experimentIds=F("FEXP_EXPERIMENTS"));f=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0);g=Lg.EXPERIMENT_FLAGS;if((!g||!g.web_disable_gel_stp_ecatcher_killswitch)&&f)for(h=u(Object.keys(f)),g=h.next();!g.done;g=h.next())g=g.value,e.kvPairs.push({key:g,value:String(f[g])});if(f=l.params)for(h=u(Object.keys(f)),g=h.next();!g.done;g=h.next())g=g.value,e.kvPairs.push({key:"client."+g,value:String(f[g])});f=F("SERVER_NAME",void 0);g=F("SERVER_VERSION",void 0);f&&
g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(V("clientError",c),("ERROR"===a||N("errors_flush_gel_always_killswitch"))&&Ji())}if(!N("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,level:b,"client.name":a.name},postParams:{url:F("PAGE_NAME",window.location.href),file:l.fileName},method:"POST"};a.version&&
(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=F("SERVER_NAME",void 0);c=F("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}Wh(F("ECATCHER_REPORT_HOST","")+"/error_204",b)}try{Hm.add(l.message)}catch(r){}Im++}}}
function Qm(a){var b=Ca.apply(1,arguments),c=a;c.args||(c.args=[]);c.args.push.apply(c.args,fa(b))}
;var Rm={Nc:3611,ac:27686,cc:85013,dc:23462,fc:42016,hc:62407,ic:26926,ec:43781,jc:51236,kc:79148,lc:50160,mc:77504,Ac:87907,Bc:18630,Cc:54445,Dc:80935,Ec:105675,Fc:37521,Gc:47786,Hc:98349,Ic:123695,Jc:6827,Kc:29434,Lc:7282,Mc:124448,Qc:32276,Pc:76278,Rc:93911,Sc:106531,Tc:27259,Uc:27262,Vc:27263,Xc:21759,Yc:27107,Zc:62936,bd:49568,cd:38408,dd:80637,ed:68727,fd:68728,gd:80353,hd:80356,jd:74610,kd:45707,ld:83962,md:83970,nd:46713,od:89711,pd:74612,qd:93265,rd:74611,sd:131380,ud:128979,vd:139311,wd:128978,
td:131391,xd:105350,zd:139312,Ad:134800,yd:131392,Cd:113533,Dd:93252,Ed:99357,Gd:94521,Hd:114252,Id:113532,Jd:94522,Fd:94583,Kd:88E3,Ld:139580,Md:93253,Nd:93254,Od:94387,Pd:94388,Qd:93255,Rd:97424,Bd:72502,Sd:110111,Td:76019,Vd:117092,Wd:117093,Ud:89431,Xd:110466,Yd:77240,Zd:60508,ae:137401,be:137402,ce:137046,de:73393,ee:113534,ge:92098,he:131381,ie:84517,je:83759,ke:80357,le:86113,me:72598,ne:72733,oe:107349,pe:124275,qe:118203,re:133275,se:133274,te:133272,ue:133273,we:133276,ye:117431,xe:133797,
ze:128572,Ae:133405,Be:117429,Ce:117430,De:117432,Ee:120080,Fe:117259,Ge:121692,He:132972,Ie:133051,Je:133658,Ke:132971,Le:97615,Me:31402,Oe:133624,Pe:133623,Qe:133622,Ne:133621,Re:84774,Se:95117,Te:98930,Ue:98931,Ve:98932,We:43347,Xe:129889,Ye:45474,Ze:100352,af:84758,bf:98443,cf:117985,df:74613,ef:74614,ff:64502,gf:136032,hf:74615,jf:74616,kf:122224,lf:74617,mf:77820,nf:74618,pf:93278,qf:93274,rf:93275,sf:93276,tf:22110,uf:29433,vf:133798,wf:132295,yf:120541,Af:82047,Bf:113550,Cf:75836,Df:75837,
Ef:42352,Ff:84512,Gf:76065,Hf:75989,If:16623,Jf:32594,Kf:27240,Lf:32633,Mf:74858,Of:3945,Nf:16989,Pf:45520,Qf:25488,Rf:25492,Sf:25494,Tf:55760,Uf:14057,Vf:18451,Wf:57204,Xf:57203,Yf:17897,Zf:57205,ag:18198,cg:17898,dg:17909,eg:43980,fg:46220,gg:11721,hg:49954,ig:96369,jg:3854,kg:56251,lg:25624,mg:16906,ng:99999,og:68172,pg:27068,qg:47973,rg:72773,sg:26970,tg:26971,ug:96805,vg:17752,wg:73233,xg:109512,yg:22256,zg:14115,Ag:22696,Bg:89278,Cg:89277,Dg:109513,Eg:43278,Fg:43459,Gg:43464,Hg:89279,Ig:43717,
Jg:55764,Kg:22255,Lg:89281,Mg:40963,Ng:43277,Og:43442,Pg:91824,Qg:120137,Rg:96367,Sg:36850,Tg:72694,Ug:37414,Vg:36851,Xg:124863,Wg:121343,Yg:73491,Zg:54473,ah:43375,bh:46674,dh:139095,eh:32473,fh:72901,gh:72906,hh:50947,ih:50612,jh:50613,kh:50942,lh:84938,mh:84943,nh:84939,oh:84941,ph:84944,qh:84940,rh:84942,sh:35585,th:51926,uh:79983,vh:63238,wh:18921,xh:63241,yh:57893,zh:41182,Ah:135732,Bh:33424,Ch:22207,Dh:42993,Eh:36229,Fh:22206,Gh:22205,Hh:18993,Ih:19001,Jh:18990,Kh:18991,Lh:18997,Mh:18725,Nh:19003,
Oh:36874,Ph:44763,Qh:33427,Rh:67793,Sh:22182,Th:37091,Uh:34650,Vh:50617,Wh:47261,Xh:22287,Yh:25144,Zh:97917,ai:62397,bi:125598,ci:137935,di:36961,fi:108035,gi:27426,hi:27857,ii:27846,ji:27854,ki:69692,li:61411,mi:39299,ni:38696,oi:62520,ri:36382,si:108701,ti:50663,vi:36387,wi:14908,xi:37533,yi:105443,zi:61635,Ai:62274,Bi:133818,Ci:65702,Di:65703,Ei:65701,Fi:76256,Gi:37671,Hi:49953,Ji:36216,Ki:28237,Li:39553,Mi:29222,Ni:26107,Oi:38050,Pi:26108,Ri:120745,Qi:26109,Si:26110,Ti:66881,Ui:28236,Vi:14586,
Wi:57929,Xi:74723,Yi:44098,Zi:44099,cj:23528,dj:61699,aj:134104,bj:134103,ej:59149,fj:101951,gj:97346,hj:118051,ij:95102,jj:64882,kj:119505,lj:63595,mj:63349,nj:95101,oj:75240,pj:27039,qj:68823,rj:21537,sj:83464,tj:75707,uj:83113,vj:101952,wj:101953,yj:79610,zj:125755,Aj:24402,Bj:24400,Cj:32925,Dj:57173,Ej:122502,Fj:138480,Gj:64423,Hj:64424,Ij:33986,Jj:100828,Kj:129089,Lj:21409,Pj:135155,Qj:135156,Rj:135157,Sj:135158,Tj:135159,Uj:135160,Vj:135161,Wj:135162,Xj:135163,Yj:135164,Zj:135165,ak:135166,
Mj:11070,Nj:11074,Oj:17880,bk:14001,dk:30709,ek:30707,fk:30711,gk:30710,hk:30708,ck:26984,ik:63648,jk:63649,kk:51879,lk:111059,mk:5754,nk:20445,qk:130975,pk:130976,rk:110386,sk:113746,tk:66557,vk:17310,wk:28631,xk:21589,yk:68012,zk:60480,Ak:138664,Bk:31571,Ck:76980,Dk:41577,Ek:45469,Fk:38669,Gk:13768,Hk:13777,Ik:62985,Jk:4724,Kk:59369,Lk:43927,Mk:43928,Nk:12924,Ok:100355,Rk:56219,Sk:27669,Tk:10337,Qk:47896,Uk:122629,Wk:139723,Vk:139722,Xk:121258,Yk:107598,Zk:127991,al:96639,bl:107536,dl:130169,fl:96661,
il:96658,jl:116646,kl:121122,ll:96660,ml:127738,nl:127083,ol:104443,pl:96659,ql:106442,rl:134840,sl:63667,ul:63668,vl:63669,wl:130686,xl:78314,yl:55761,zl:127098,Al:134841,Bl:96368,Cl:67374,Dl:48992,El:49956,Fl:31961,Gl:26388,Hl:23811,Il:5E4,Jl:126250,Kl:96370,Ll:47355,Ml:47356,Nl:37935,Ol:45521,Pl:21760,Ql:83769,Rl:49977,Sl:49974,Tl:93497,Ul:93498,Vl:34325,Wl:140759,Xl:115803,Yl:123707,Zl:100081,am:35309,bm:68314,cm:25602,dm:100339,em:59018,fm:18248,gm:50625,hm:9729,im:37168,jm:37169,km:21667,lm:16749,
mm:18635,nm:39305,om:18046,pm:53969,qm:8213,rm:93926,sm:102852,tm:110099,um:22678,vm:69076,wm:137575,ym:139224,zm:100856,Am:17736,Bm:3832,Cm:55759,Dm:64031,Jm:93044,Km:93045,Lm:34388,Mm:17657,Nm:17655,Om:39579,Pm:39578,Qm:77448,Rm:8196,Sm:11357,Tm:69877,Um:8197,Vm:82039};function Sm(){var a=pb(Tm),b;return Kf(new Df(function(c,d){a.onSuccess=function(e){Qh(e)?c(new Um(e)):d(new Vm("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Vm("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Vm("Request timed out","net.timeout",e))};
b=Wh("//web.archive.org/web/20211121042211/https://googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Lf&&b.abort();
return If(c)})}
function Vm(a,b,c){Ya.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Vm,Ya);function Um(a){this.xhr=a}
;function Wm(){this.i=0;this.h=null}
Wm.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),Cf(a)?a:Xm(a)):2===this.i&&b?(a=b.call(c,this.h),Cf(a)?a:Ym(a)):this};
Wm.prototype.getValue=function(){return this.h};
Wm.prototype.$goog_Thenable=!0;function Ym(a){var b=new Wm;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function Xm(a){var b=new Wm;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function Zm(){if(Rd())return!0;var a=F("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a||di&&ei("applewebkit")&&!ei("version")&&(!ei("safari")||ei("gsa/"))||vc&&ei("version/")?!0:(a=Pd.get("CONSENT",void 0))?a.startsWith("YES+"):!0}
;function $m(a){Ya.call(this,a.message||a.description||a.name);this.isMissing=a instanceof an;this.isTimeout=a instanceof Vm&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Lf}
v($m,Ya);$m.prototype.name="BiscottiError";function an(){Ya.call(this,"Biscotti ID is missing from server")}
v(an,Ya);an.prototype.name="BiscottiMissingError";var Tm={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},bn=null;function Ah(){if(N("disable_biscotti_fetch_entirely_for_all_web_clients"))return If(Error("Biscotti id fetching has been disabled entirely."));if(!Zm())return If(Error("User has not consented - not fetching biscotti id."));if("1"==nb())return If(Error("Biscotti ID is not available in private embed mode"));bn||(bn=Kf(Sm().then(cn),function(a){return dn(2,a)}));
return bn}
function cn(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new an;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new an;a=a.id;Bh(a);bn=Xm(a);en(18E5,2);return a}
function dn(a,b){b=new $m(b);Bh("");bn=Ym(b);0<a&&en(12E4,a-1);throw b;}
function en(a,b){kh(function(){Kf(Sm().then(cn,function(c){return dn(b,c)}),Ja)},a)}
function fn(){try{var a=C("yt.ads.biscotti.getId_");return a?a():Ah()}catch(b){return If(b)}}
;function gn(a){if("1"!=nb()){a&&zh();try{fn().then(function(){},function(){}),kh(gn,18E5)}catch(b){Rg(b)}}}
;var hn=Date.now().toString();
function jn(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(hn)for(a=1,b=0;b<hn.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^hn.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var kn,ln=y.ytLoggingDocDocumentNonce_;ln||(ln=jn(),Wa("ytLoggingDocDocumentNonce_",ln));kn=ln;var mn={xf:0,Oc:1,Wc:2,Ii:3,zf:4,xm:5,xj:6,Pk:7,uk:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function nn(a){this.h=a}
function on(a){return new nn({trackingParams:a})}
nn.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
nn.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
nn.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function pn(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function qn(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function rn(a){return F(qn(void 0===a?0:a),void 0)}
B("yt_logging_screen.getRootVeType",rn,void 0);function sn(a){return(a=rn(void 0===a?0:a))?new nn({veType:a,youtubeData:void 0}):null}
function tn(){var a=F("csn-to-ctt-auth-info");a||(a={},M("csn-to-ctt-auth-info",a));return a}
function un(a){a=void 0===a?0:a;var b=F(pn(a));if(!b&&!F("USE_CSN_FALLBACK",!0))return null;b||!N("use_undefined_csn_any_layer")&&0!=a||(b="UNDEFINED_CSN");return b?b:null}
B("yt_logging_screen.getCurrentCsn",un,void 0);function vn(a,b,c){var d=tn();(c=un(c))&&delete d[c];b&&(d[a]=b)}
function wn(a){return tn()[a]}
B("yt_logging_screen.getCttAuthInfo",wn,void 0);function xn(a,b,c,d){c=void 0===c?0:c;if(a!==F(pn(c))||b!==F(qn(c)))vn(a,d,c),M(pn(c),a),M(qn(c),b),b=function(){setTimeout(function(){a&&$i("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:kn,clientScreenNonce:a},um)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
B("yt_logging_screen.setCurrentScreen",xn,void 0);function yn(a){fl.call(this,1,arguments);this.csn=a}
v(yn,fl);var ol=new gl("screen-created",yn),zn=[],Bn=An,Cn=0;function Dn(a,b,c,d){var e=d.filter(function(f){f.csn!==b?(f.csn=b,f=!0):f=!1;return f});
c={csn:b,parentVe:c.getAsJson(),childVes:cb(e,function(f){return f.getAsJson()})};
d=u(d);for(e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(lb(e)||!e.trackingParams&&!e.veType)&&Pm(Error("Child VE logged with no data"));d={cttAuthInfo:wn(b),fa:b};"UNDEFINED_CSN"==b?En("visualElementAttached",c,d):a?$i("visualElementAttached",c,a,d):V("visualElementAttached",c,d)}
function An(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Kc(b,3)}
function En(a,b,c){zn.push({payloadName:a,payload:b,options:c});Cn||(Cn=pl())}
function ql(a){if(zn){for(var b=u(zn),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,$i(c.payloadName,c.payload,null,c.options));zn.length=0}Cn=0}
;function Fn(){this.i=new Set;this.h=new Set;this.j=new Map}
Fn.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ka(Fn);function Gn(a){var b=Ca.apply(1,arguments);if(!Hn(a)||b.some(function(e){return!Hn(e)}))throw Error("Only objects may be merged.");
var c=a;b=u(b);for(var d=b.next();!d.done;d=b.next())In(c,d.value);return c}
function In(a,b){for(var c in b)if(Hn(b[c])){if(c in a&&!Hn(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});In(a[c],b[c])}else if(Jn(b[c])){if(c in a&&!Jn(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Kn(a[c],b[c])}else a[c]=b[c];return a}
function Kn(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Hn(c)?a.push(In({},c)):Jn(c)?a.push(Kn([],c)):a.push(c);return a}
function Hn(a){return"object"===typeof a&&!Array.isArray(a)}
function Jn(a){return"object"===typeof a&&Array.isArray(a)}
;function Ln(a,b){fl.call(this,1,arguments)}
v(Ln,fl);function Mn(a,b){fl.call(this,1,arguments)}
v(Mn,fl);var Nn=new gl("aft-recorded",Ln),On=new gl("timing-sent",Mn);var Pn=window;function Qn(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var W=Pn.performance||Pn.mozPerformance||Pn.msPerformance||Pn.webkitPerformance||new Qn;var Rn=!1,Sn={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Ua(W.clearResourceTimings||W.webkitClearResourceTimings||W.mozClearResourceTimings||W.msClearResourceTimings||W.oClearResourceTimings||Ja,W);function Tn(a){var b=Un(a);if(b.aft)return b.aft;a=F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Vn(){var a;if(N("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===W||void 0===W?void 0:W.getEntriesByType)||void 0===a?void 0:a.call(W,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=Wn(e.requestStart),e.responseEnd=Wn(e.responseEnd),e.redirectStart=Wn(e.redirectStart),e.redirectEnd=Wn(e.redirectEnd),e.domainLookupEnd=Wn(e.domainLookupEnd),e.connectStart=Wn(e.connectStart),
e.connectEnd=Wn(e.connectEnd),e.responseStart=Wn(e.responseStart),e.secureConnectionStart=Wn(e.secureConnectionStart),e.domainLookupStart=Wn(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=W.timing}else a=W.timing;return a}
function Xn(){return N("csi_use_time_origin")&&W.timeOrigin?Math.floor(W.timeOrigin):W.timing.navigationStart}
function Wn(a){return Math.round(Xn()+a)}
function Yn(a){var b;(b=C("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Wa("ytcsi."+(a||"")+"data_",b));return b}
function Zn(a){a=Yn(a);a.info||(a.info={});return a.info}
function Un(a){a=Yn(a);a.tick||(a.tick={});return a.tick}
function ao(a){var b=Yn(a).nonce;b||(b=jn(),Yn(a).nonce=b);return b}
function bo(a){var b=Un(a||""),c=Tn(a);c&&!Rn&&(ll(Nn,new Ln(Math.round(c-b._start),a)),Rn=!0)}
;function co(){if(W.getEntriesByType){var a=W.getEntriesByType("paint");if(a=eb(a,function(b){return"first-paint"===b.name}))return Wn(a.startTime)}a=W.timing;
return a.Lb?Math.max(0,a.Lb):0}
;function eo(){var a=C("ytcsi.debug");a||(a=[],B("ytcsi.debug",a,void 0),B("ytcsi.reference",{},void 0));return a}
function fo(a){a=a||"";var b=C("ytcsi.reference");b||(eo(),b=C("ytcsi.reference"));if(b[a])return b[a];var c=eo(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var go=y.ytLoggingLatencyUsageStats_||{};B("ytLoggingLatencyUsageStats_",go,void 0);function ho(){this.h=0}
function io(){ho.h||(ho.h=new ho);return ho.h}
ho.prototype.tick=function(a,b,c,d){jo(this,"tick_"+a+"_"+b)||V("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
ho.prototype.info=function(a,b,c){var d=Object.keys(a).join("");jo(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,V("latencyActionInfo",a,{cttAuthInfo:c}))};
ho.prototype.span=function(a,b,c){var d=Object.keys(a).join("");jo(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,V("latencyActionSpan",a,{cttAuthInfo:c}))};
function jo(a,b){go[b]=go[b]||{count:0};var c=go[b];c.count++;c.time=O();a.h||(a.h=oh(function(){var d=O(),e;for(e in go)go[e]&&6E4<d-go[e].time&&delete go[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Ij("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Pm(c)),!0):!1}
;var X={},ko=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X.browse="LATENCY_ACTION_BROWSE",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard=
"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.playlists"]=
"LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf=
"LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.home="LATENCY_ACTION_HOME",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard=
"LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest=
"LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]=
"LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X),Y={},lo=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an=
"adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cs="commandSource",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.ctop="creatorInfo.topEntityType",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",
Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.nav_type="kabukiInfo.navigationType",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.pnt="performanceNavigationTiming",
Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.rc="resourceInfo.resourceCache",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs=
"tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.aac_type="tvInfo.authAccessCredentialType",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",
Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),mo="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),no={},oo=(no.ccs="CANARY_STATE_",
no.mver="MEASUREMENT_VERSION_",no.pis="PLAYER_INITIALIZED_STATE_",no.yt_pt="LATENCY_PLAYER_",no.pa="LATENCY_ACTION_",no.ctop="TOP_ENTITY_TYPE_",no.yt_vst="VIDEO_STREAM_TYPE_",no),po="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function qo(a){return!!F("FORCE_CSI_ON_GEL",!1)||N("csi_on_gel")||N("enable_csi_on_gel")||N("unplugged_tvhtml5_csi_on_gel")||!!Yn(a).useGel}
function ro(a,b,c){var d=so(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||O();if(qo(c)){fo(c||"").tick[a]=b||O();d=ao(c);var e=Yn(c).cttAuthInfo;"_start"===a?(a=io(),jo(a,"baseline_"+d)||V("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:e})):io().tick(a,d,b,e);bo(c);return!0}return!1}
function to(a,b,c){c=so(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in lo){c=lo[a];0<=ab(mo,c)&&(b=!!b);a in oo&&"string"===typeof b&&(b=oo[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Gn({},d)}0<=ab(po,a)||Pm(new Ij("Unknown label logged with GEL CSI",a))}
function so(a){a=Yn(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function uo(a){a=so(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
;function vo(a,b,c){null!==b&&(Zn(c)[a]=b,qo(c)?(a=to(a,b,c))&&qo(c)&&(b=fo(c||""),Gn(b.info,a),Gn(uo(c),a),b=ao(c),c=Yn(c).cttAuthInfo,io().info(a,b,c)):fo(c||"").info[a]=b)}
function Z(a,b,c){var d=Un(c);if(!b&&"_"!==a[0]){var e=a;W.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),W.mark(e))}e=b||O();d[a]=e;ro(a,b,c)||c||(wo(),fo("").tick[a]=b||O());return d[a]}
function xo(){var a=ao(void 0);requestAnimationFrame(function(){setTimeout(function(){a===ao(void 0)&&Z("ol",void 0,void 0)},0)})}
function wo(){if(!C("yt.timing.pingSent_")){var a=F("TIMING_ACTION",void 0),b=Un();if(a=!!C("ytglobal.timingready_")&&a)a="_start"in Un(void 0);if(a&&Tn()){bo();a=!0;var c=F("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in b)){a=!1;break}if(a&&!qo()){c=Un();d=Zn();e=c._start;var f=F("CSI_SERVICE_NAME","youtube");a={v:2,s:f,action:F("TIMING_ACTION",void 0)};b=d.srt;void 0!==c.srt&&delete d.srt;c.aft=Tn();var g=Un(void 0),h=g.pbr,k=g.vc;g=g.pbs;h&&k&&g&&h<k&&k<g&&Zn(void 0).yt_pvis&&
"youtube"===f&&(vo("yt_lt","hot_bg"),f=c.vc,h=c.pbs,delete c.aft,d.aft=Math.round(h-f));for(var l in d)"_"!==l.charAt(0)&&(a[l]=d[l]);c.ps=O();l={};f=[];for(var n in c)"_"!==n.charAt(0)&&(h=Math.round(c[n]-e),l[n]=h,f.push(n+"."+h));a.rt=f.join(",");n=!!d.ap;c="";for(var p in a)a.hasOwnProperty(p)&&(c+="&"+p+"="+a[p]);p="/csi_204?"+c.substring(1);window.navigator&&n?ki(p):hi(p);B("yt.timing.pingSent_",!0,void 0);ll(On,new Mn(l.aft+(Number(b)||0)))}}}}
function yo(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=ah+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function zo(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);dc()&&a.setAttribute("nonce",dc());return c?(a=W.getEntriesByName(c))&&a[0]&&(a=a[0],c=Xn(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Ao(){var a=window.location.protocol,b=W.getEntriesByType("resource");b=bb(b,function(c){return 0===c.name.indexOf(a+"//web.archive.org/web/20211121042211/https://fonts.gstatic.com/s/")});
(b=db(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",Wn(b.startTime)),Z("wffe",Wn(b.responseEnd)))}
var Bo=window;Bo.ytcsi&&(Bo.ytcsi.info=vo,Bo.ytcsi.tick=Z);function Co(){this.A=[];this.o=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.B=new Map}
function Do(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=un(c),h=sn(c);g&&h&&((null===(e=null===d||void 0===d?void 0:d.response)||void 0===e?0:e.trackingParams)&&Dn(a.client,g,h,[on(d.response.trackingParams)]),(null===(f=null===d||void 0===d?void 0:d.playerResponse)||void 0===f?0:f.trackingParams)&&Dn(a.client,g,h,[on(d.playerResponse.trackingParams)]))})}
function Eo(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.A.push([b,c]);else{var e=un(d);c=c||sn(d);e&&c&&Dn(a.client,e,c,[b])}}
Co.prototype.clickCommand=function(a,b,c){a=a.clickTrackingParams;c=void 0===c?0:c;if(a)if(c=un(void 0===c?0:c)){var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:on(a).getAsJson(),gestureType:e};b&&(a.clientData=b);b={cttAuthInfo:wn(c),fa:c};"UNDEFINED_CSN"==c?En("visualElementGestured",a,b):d?$i("visualElementGestured",a,d,b):V("visualElementGestured",a,b);b=!0}else b=!1;else b=!1;return b};
function Fo(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Go(a,b,c);var f=sn(c.layer);if(f){for(var g=u(a.A),h=g.next();!h.done;h=g.next())h=h.value,Eo(a,h[0],h[1]||f,c.layer);f=u(a.o);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=un(g);var l=k[0]||sn(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={cttAuthInfo:wn(h),fa:h},"UNDEFINED_CSN"==h?En("visualElementStateChanged",k,l):g?$i("visualElementStateChanged",k,g,l):V("visualElementStateChanged",
k,l))}}};
un(c.layer)||a.j();if(c.fb)for(var d=u(c.fb),e=d.next();!e.done;e=d.next())Do(a,e.value,c.layer);else Om(Error("Delayed screen needs a data promise."))}
function Go(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Mb?c.Mb:c.layer;var e=un(d);d=sn(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=F("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=a.client;h=f;var l=c.eb,n=c.cttAuthInfo,p=c.bn,t=Bn(),r={csn:t,pageVe:(new nn({veType:b,youtubeData:g})).getAsJson()};h&&h.visualElement?(r.implicitGesture=
{parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()},p&&(r.implicitGesture.gestureType=p)):h&&Pm(new Ij("newScreen() parent element does not have a VE - rootVe",b));l&&(r.cloneCsn=l);l={cttAuthInfo:n,fa:t};k?$i("screenCreated",r,k,l):V("screenCreated",r,l);ll(ol,new yn(t));var z=t}catch(A){Qm(A,{hn:b,rootVe:d,parentVisualElement:void 0,an:e,gn:f,eb:c.eb});Om(A);return}xn(z,b,c.layer,c.cttAuthInfo);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=N("screen_manager_skip_hide_killswitch"))){a:{b=
u(Object.values(mn));for(f=b.next();!f.done;f=b.next())if(un(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,k=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:k},f={cttAuthInfo:wn(e),fa:e,Db:f},"UNDEFINED_CSN"==e?En("visualElementHidden",d,f):b?$i("visualElementHidden",d,b,f):V("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=z||"");vo("csn",z);Fn.getInstance().clear();d=sn(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(N("web_mark_root_visible")||
N("music_web_mark_root_visible"))&&(e=z,z={csn:e,ve:d.getAsJson(),eventType:1},b={cttAuthInfo:wn(e),fa:e},"UNDEFINED_CSN"==e?En("visualElementShown",z,b):V("visualElementShown",z,b));a.i.delete(c.layer||0);a.j=void 0;e=u(a.B);for(z=e.next();!z.done;z=e.next())b=u(z.value),z=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Eo(a,z,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(A){Om(A)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(A){Om(A)}}}
;function Ho(a){a&&(a.dataset?a.dataset[Io("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Jo(a,b){return a?a.dataset?a.dataset[Io(b)]:a.getAttribute("data-"+b):null}
var Ko={};function Io(a){return Ko[a]||(Ko[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Lo=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Mo=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function No(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Lo,""),c=c.replace(Mo,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Oo(a,b,c)}
function Oo(a,b,c){c=void 0===c?null:c;var d=Po(a),e=document.getElementById(d),f=e&&Jo(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=pi(d,b),b=""+Oa(b),Qo[b]=f),g||(e=Ro(a,d,function(){Jo(e,"loaded")||(Ho(e),si(d),kh(Va(ti,d),0))},c)))}
function Ro(a,b,c,d){d=void 0===d?null:d;var e=xd(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);qd(e,tf(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function So(a){a=Po(a);var b=document.getElementById(a);b&&(ti(a),b.parentNode.removeChild(b))}
function To(a,b){a&&b&&(a=""+Oa(b),(a=Qo[a])&&ri(a))}
function Po(a){var b=document.createElement("a");ac(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+fc(a)}
var Qo={};var Uo=[],Vo=!1;function Wo(){if(!N("disable_biscotti_fetch_for_ad_blocker_detection")&&!N("disable_biscotti_fetch_entirely_for_all_web_clients")&&Zm()&&"1"!=nb()){var a=function(){Vo=!0;"google_ad_status"in window?M("DCLKSTAT",1):M("DCLKSTAT",2)};
try{No("//web.archive.org/web/20211121042211/https://static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Uo.push(th.L(function(){if(!(Vo||"google_ad_status"in window)){try{To("//web.archive.org/web/20211121042211/https://static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Vo=!0;M("DCLKSTAT",3)}},5E3))}}
function Xo(){var a=Number(F("DCLKSTAT",0));return isNaN(a)?0:a}
;function Yo(){this.i=!1;this.h=null}
Yo.prototype.initialize=function(a,b,c,d){d=void 0===d?!1:d;var e,f;if(a.program){var g=null!==(e=a.interpreterScript)&&void 0!==e?e:null,h=null!==(f=a.interpreterUrl)&&void 0!==f?f:null;if(a.interpreterSafeScript){g=a.interpreterSafeScript;xb("From proto message. b/166824318");g=g.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var k=ub();g=k?k.createScript(g):g;g=(new zb(g)).toString()}a.interpreterSafeUrl&&(h=a.interpreterSafeUrl,xb("From proto message. b/166824318"),h=Db(h.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||
"").toString());Zo(this,g,h,a.program,b,c,d)}else Pm(Error("Cannot initialize botguard without program"))};
function Zo(a,b,c,d,e,f,g){g=void 0===g?!1:g;c?(a.i=!0,No(c,function(){a.i=!1;var h=0<=c.indexOf("/th/");(h?window.trayride:window.botguard)?$o(a,d,!!g,h,e):(So(c),Pm(new Ij("Unable to load Botguard","from "+c)))},f)):b&&(f=xd(document,"SCRIPT"),f.textContent=b,f.nonce=dc(),document.head.appendChild(f),document.head.removeChild(f),((b=b.includes("trayride"))?window.trayride:window.botguard)?$o(a,d,!!g,b,e):Pm(Error("Unable to load Botguard from JS")))}
Yo.prototype.isInitialized=function(){return!!this.h};
function $o(a,b,c,d,e){var f,g;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{ap(a,new d(b,e?function(){return e(b)}:Ja))}catch(h){h instanceof Error&&Pm(h)}else{try{ap(a,new d(b))}catch(h){h instanceof Error&&Pm(h)}e&&e(b)}else Pm(Error("Failed to finish initializing VM"))}
Yo.prototype.invoke=function(a){a=void 0===a?{}:a;return this.h?this.h.hasOwnProperty("hot")?this.h.hot(void 0,void 0,a):this.h.invoke(void 0,void 0,a):null};
Yo.prototype.dispose=function(){this.h=null};
function ap(a,b){a.h=b}
;var bp=new Yo;function cp(){return bp.isInitialized()}
function dp(a){a=void 0===a?{}:a;return bp.invoke(a)}
;function ep(){}
ep.getInstance=function(){var a=C("ytglobal.storage_");a||(a=new ep,B("ytglobal.storage_",a,void 0));return a};
ep.prototype.estimate=function(){var a,b,c;return x(function(d){c=navigator;return(null===(a=c.storage)||void 0===a?0:a.estimate)?d.return(c.storage.estimate()):(null===(b=c.webkitTemporaryStorage)||void 0===b?0:b.queryUsageAndQuota)?d.return(fp()):d.return()})};
function fp(){var a=navigator;return new Promise(function(b,c){var d;null!==(d=a.webkitTemporaryStorage)&&void 0!==d&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
B("ytglobal.storageClass_",ep,void 0);function gp(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=Wg("ytidb_transaction_ended_event_rate_limit",.02)}
gp.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":N("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":N("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":hp(this,b);break;case "TRANSACTION_ENDED":this.j&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign(Object.assign({},
b),{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function hp(a,b){ep.getInstance().estimate().then(function(c){c=Object.assign(Object.assign({},b),{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:ip(null===c||void 0===c?void 0:c.usage),deviceStorageQuotaMbytes:ip(null===c||void 0===c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function ip(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;var jp=window;
function kp(){var a=jp.uaChPolyfill.state;if(0===a.type)V("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&a.syntheticUa===b,d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),Om(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);V("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),V("clientHintsPolyfillDiagnostics",
b))}}
var lp=!1;function mp(){var a;1===(null===(a=jp.uaChPolyfill)||void 0===a?void 0:a.state.type)?lp||(jp.uaChPolyfill.onReady=mp,lp=!0):jp.uaChPolyfill&&kp()}
;function np(a,b,c){K.call(this);var d=this;c=c||F("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.F="*";this.l=c;this.sessionId=null;this.channel="widget";this.H=!!a;this.B=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.H&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.F=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.o||0<=ab(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.i=this.m=null;window.addEventListener("message",this.B)}
v(np,K);np.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.F)}catch(d){Sg(d)}}};
np.prototype.G=function(){window.removeEventListener("message",this.B);K.prototype.G.call(this)};function op(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new np(!!F("WIDGET_ID_ENFORCE")),b=this.Ob.bind(this);a.m=b;a.o=null;this.h.channel="widget";if(a=F("WIDGET_ID"))this.h.sessionId=a}
m=op.prototype;m.Ob=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,pp(this,a)),this.j[a]=!0)):this.Ya(a,b,c)};
m.Ya=function(){};
function pp(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.Eb=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ma());this.sendMessage("onReady");E(this.i,this.tb,this);this.i=[]};
m.Ma=function(){return null};
function qp(a,b){a.sendMessage("infoDelivery",b)}
m.tb=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.tb({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};function rp(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function sp(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function tp(a,b,c,d){if(Na(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function up(a){op.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Vb.bind(this));this.addEventListener("onVolumeChange",this.Wb.bind(this));this.addEventListener("onApiChange",this.Qb.bind(this));this.addEventListener("onPlaybackQualityChange",this.Sb.bind(this));this.addEventListener("onPlaybackRateChange",this.Tb.bind(this));this.addEventListener("onStateChange",this.Ub.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Xb.bind(this))}
v(up,op);m=up.prototype;
m.Ya=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&rp(a)){var d=b;if(Na(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=sp(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=sp(e);break;case "loadPlaylist":case "cuePlaylist":e=tp(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);rp(a)&&qp(this,this.Ma())}};
m.onReady=function(){var a=this.Eb.bind(this);this.h.i=a};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Ma=function(){if(!this.api)return null;var a=this.api.getApiInterface();fb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Ub=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());qp(this,a)};
m.Sb=function(a){qp(this,{playbackQuality:a})};
m.Tb=function(a){qp(this,{playbackRate:a})};
m.Qb=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Wb=function(){qp(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Vb=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());qp(this,a)};
m.Xb=function(){var a={sphericalProperties:this.api.getSphericalProperties()};qp(this,a)};
m.dispose=function(){op.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function vp(a){K.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.pb,this)}
v(vp,K);m=vp.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.ia("RECEIVING"))};
m.ia=function(a,b){this.started&&!this.h&&this.connection.ia(a,b)};
m.pb=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=wp(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=xp(a,c))&&this.ia(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.Rb.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.Rb=function(a,b){this.started&&!this.h&&this.connection.ia(a,this.La(a,b))};
m.La=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.G=function(){var a=this.connection;a.h||Wf(a.i,"command",this.pb,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);K.prototype.G.call(this)};function yp(a,b){vp.call(this,b);this.api=a;this.start()}
v(yp,vp);yp.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
yp.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function wp(a,b){switch(a){case "loadVideoById":return a=sp(b),[a];case "cueVideoById":return a=sp(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=tp(b),[a];case "cuePlaylist":return a=tp(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function xp(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
yp.prototype.La=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return vp.prototype.La.call(this,a,b)};
yp.prototype.G=function(){vp.prototype.G.call(this);delete this.api};function zp(a){a=void 0===a?!1:a;K.call(this);this.i=new L(a);Wd(this,Va(Ud,this.i))}
D(zp,K);zp.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
zp.prototype.l=function(a,b){this.h||this.i.ha.apply(this.i,arguments)};function Ap(a,b,c){zp.call(this);this.j=a;this.destination=b;this.id=c}
v(Ap,zp);Ap.prototype.ia=function(a,b){this.h||this.j.ia(this.destination,this.id,a,b)};
Ap.prototype.G=function(){this.destination=this.j=null;zp.prototype.G.call(this)};function Bp(a,b,c){K.call(this);this.destination=a;this.origin=c;this.i=hh(window,"message",this.j.bind(this));this.connection=new Ap(this,a,b);Wd(this,Va(Ud,this.connection))}
v(Bp,K);Bp.prototype.ia=function(a,b,c,d){this.h||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(vf(a),this.origin))};
Bp.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h||c.l("command",b.command,b.data,a.origin))}};
Bp.prototype.G=function(){ih(this.i);this.destination=null;K.prototype.G.call(this)};function Cp(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||pb(b);this.assets=a.assets||{};this.attrs=a.attrs||pb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Cp.prototype.clone=function(){var a=new Cp,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==La(c)?a[b]=pb(c):a[b]=c}return a};var Dp=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Ep(a){a=a||"";if(window.spf){var b=a.match(Dp);spf.style.load(a,b?b[1]:"",void 0)}else Fp(a)}
function Fp(a){var b=Gp(a),c=document.getElementById(b),d=c&&Jo(c,"loaded");d||c&&!d||(c=Hp(a,b,function(){Jo(c,"loaded")||(Ho(c),si(b),kh(Va(ti,b),0))}))}
function Hp(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=tf(a);bc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Gp(a){var b=xd(document,"A");xb("This URL is never added to the DOM");ac(b,new Mb(a,Nb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+fc(a)}
;function Ip(){K.call(this);this.i=[]}
v(Ip,K);Ip.prototype.G=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.ab,void 0)}K.prototype.G.call(this)};function Jp(){Ip.apply(this,arguments)}
v(Jp,Ip);function Kp(a,b,c,d){K.call(this);var e=this;this.H=b;this.webPlayerContextConfig=d;this.Ga=!1;this.api={};this.la=this.o=null;this.O=new L;this.i={};this.Y=this.va=this.elementId=this.Ha=this.config=null;this.S=!1;this.l=this.B=null;this.wa={};this.wb=["onReady"];this.lastError=null;this.Za=NaN;this.F={};this.xb=new Jp(this);this.ka=0;this.j=this.m=a;Wd(this,Va(Ud,this.O));Lp(this);Mp(this);Wd(this,Va(Ud,this.xb));c?this.ka=kh(function(){e.loadNewVideoConfig(c)},0):d&&(Np(this),Op(this))}
v(Kp,K);m=Kp.prototype;m.getId=function(){return this.H};
m.loadNewVideoConfig=function(a){if(!this.h){this.ka&&(lh(this.ka),this.ka=0);var b=a||{};b instanceof Cp||(b=new Cp(b));this.config=b;this.setConfig(a);Op(this);this.isReady()&&Pp(this)}};
function Np(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.H,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.H:a.config.attrs.id=a.H);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.Ha=a;this.config=Qp(a);Np(this);this.va||(this.va=Rp(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=Gd(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=Gd(Number(a)||a))};
function Pp(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function Sp(a){var b=!0,c=Tp(a);c&&a.config&&(a=Up(a),b=Jo(c,"version")===a);return b&&!!C("yt.player.Application.create")}
function Op(a){if(!a.h&&!a.S){var b=Sp(a);if(b&&"html5"===(Tp(a)?"html5":null))a.Y="html5",a.isReady()||Vp(a);else if(Wp(a),a.Y="html5",b&&a.l&&a.m)a.m.appendChild(a.l),Vp(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.B=function(){c=!0;var d=Xp(a,"player_bootstrap_method")?C("yt.player.Application.createAlternate")||C("yt.player.Application.create"):C("yt.player.Application.create");var e=a.config?Qp(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig);Vp(a)};
a.S=!0;b?a.B():(No(Up(a),a.B),(b=Yp(a))&&Ep(b),Zp(a)&&!c&&B("yt.player.Application.create",null,void 0))}}}
function Tp(a){var b=td(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Vp(a){var b;if(!a.h){var c=Tp(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.S=!1,!Xp(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||$p(a)):a.Za=kh(function(){Vp(a)},50)}}
function $p(a){Lp(a);a.Ga=!0;var b=Tp(a);if(b){a.o=aq(a,b,"addEventListener");a.la=aq(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=aq(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.o&&a.o(g,a.i[g]);Pp(a);a.va&&a.va(a.api);a.O.ha("onReady",a.api)}
function aq(a,b,c){var d=b[c];return function(){var e=Ca.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Pm(f))}}}
function Lp(a){a.Ga=!1;if(a.la)for(var b in a.i)a.i.hasOwnProperty(b)&&a.la(b,a.i[b]);for(var c in a.F)a.F.hasOwnProperty(c)&&lh(Number(c));a.F={};a.o=null;a.la=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ha};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Ga};
function Mp(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){si("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){si("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){si("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=Rp(this,b);d&&(0<=ab(this.wb,a)||this.i[a]||(b=bq(this,a),this.o&&this.o(a,b)),this.O.subscribe(a,d),"onReady"===a&&this.isReady()&&kh(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h||(b=Rp(this,b))&&Wf(this.O,a,b)};
function Rp(a,b){var c=b;if("string"===typeof b){if(a.wa[b])return a.wa[b];c=function(){var d=Ca.apply(0,arguments),e=C(b);if(e)try{e.apply(y,d)}catch(f){Om(f)}};
a.wa[b]=c}return c?c:null}
function bq(a,b){var c="ytPlayer"+b+a.H;a.i[b]=c;y[c]=function(d){var e=kh(function(){if(!a.h){a.O.ha(b,null!==d&&void 0!==d?d:void 0);var f=a.F,g=String(e);g in f&&delete f[g]}},0);
mb(a.F,String(e))};
return c}
m.getPlayerType=function(){return this.Y||(Tp(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function Wp(a){a.cancel();Lp(a);a.Y=null;a.config&&(a.config.loaded=!1);var b=Tp(a);b&&(Sp(a)||!Zp(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&To(Up(this),this.B);lh(this.Za);this.S=!1};
m.G=function(){Wp(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Om(b)}this.wa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.Ha=this.config=this.api=null;delete this.m;delete this.j;K.prototype.G.call(this)};
function Zp(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Up(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Yp(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Xp(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===Eh(d||"","&")[b]}
function Qp(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?pb(e):e}return b}
;var cq={},dq="player_uid_"+(1E9*Math.random()>>>0);function eq(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?td(d):d;var e=dq+"_"+Oa(d),f=cq[e];if(f&&c)return fq(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Kp(d,e,a,b);cq[e]=f;si("player-added",f.api);Wd(f,function(){delete cq[f.getId()]});
return f.api}
function fq(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var gq=null,hq=null,iq=null;function jq(){var a=gq.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function kq(a,b,c){a="ST-"+fc(a).toString(36);b=b?kc(b):"";c=c||5;Zm()&&cj(a,b,c)}
;function lq(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=F("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=F("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=ic(window.location.href);g&&f.push(g);g=ic(d);if(0<=ab(f,g)||!g&&0==d.lastIndexOf("/",0))if(N("autoescape_tempdata_url")&&(f=document.createElement("a"),ac(f,d),d=f.href),d){g=d.match(gc);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:un()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&kq(d,b,k)}else kq(d,b)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=lc(a,l)+n;var t=void 0===t?od:t;a:{t=void 0===t?od:t;for(l=0;l<t.length;++l)if(n=t[l],n instanceof md&&n.isValid(a)){t=new kd(a,id);break a}t=void 0}c.href=pd(t||ld)}return!0}
;B("yt.setConfig",M,void 0);B("yt.config.set",M,void 0);B("yt.setMsg",Ug,void 0);B("yt.msgs.set",Ug,void 0);B("yt.logging.errors.log",Om,void 0);
B("writeEmbed",function(){var a=F("PLAYER_CONFIG",void 0);if(!a){var b=F("PLAYER_VARS",void 0);b&&(a={args:b})}gn(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=F("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);N("embeds_js_api_set_1p_cookie")&&(c=Jh(),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));M("FORCE_CSI_ON_GEL",!0);
c=["ol"];fo("").info.actionType="embed";c&&M("TIMING_AFT_KEYS",c);M("TIMING_ACTION","embed");c=F("TIMING_INFO",{});for(var d in c)c.hasOwnProperty(d)&&vo(d,c[d]);vo("is_nav",1);(d=un())&&vo("csn",d);(d=F("PREVIOUS_ACTION",void 0))&&!qo()&&vo("pa",d);d=Zn();c=F("CLIENT_PROTOCOL");var e=F("CLIENT_TRANSPORT");c&&vo("p",c);e&&vo("t",e);vo("yt_vis",yo());vo("yt_lt","cold");c=Vn();if(e=Xn())Z("srt",c.responseStart),1!==d.prerender&&(vo("yt_sts","n",void 0),Z("_start",e,void 0));d=co();0<d&&Z("fpt",d);d=
Vn();d.isPerformanceNavigationTiming&&vo("pnt",1,void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Xn()&&0<d.connectEnd-
d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));W&&W.getEntriesByType&&Ao();d=[];if(document.querySelector&&W&&W.getEntriesByName)for(var f in Sn)Sn.hasOwnProperty(f)&&(c=Sn[f],zo(f,c)&&d.push(c));for(f=0;f<d.length;f++)vo("rc",d[f]);if(qo(void 0)){f={actionType:ko[F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:ko[F("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"};if(d=un())f.clientScreenNonce=d;d=ao(void 0);c=Yn(void 0).cttAuthInfo;
io().info(f,d,c)}f=Zn();c=Un();if("cold"===f.yt_lt&&(d=so(),e=d.gelTicks?d.gelTicks:d.gelTicks={},d=d.gelInfos?d.gelInfos:d.gelInfos={},qo())){for(var g in c)"tick_"+g in e||ro(g,c[g]);g=uo();c=ao();e=Yn().cttAuthInfo;var h={},k=!1,l;for(l in f)if(!("info_"+l in d)){var n=to(l,f[l]);n&&(Gn(g,n),Gn(h,n),k=!0)}k&&io().info(h,c,e)}B("ytglobal.timingready_",!0,void 0);wo();(l=F("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in l?(l=l.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,
l.serializedForcedExperimentIds||(g=Jh(),g.forced_experiments&&(l.serializedForcedExperimentIds=g.forced_experiments)),gq=eq(a,l,!1)):gq=eq(a);gq.addEventListener("onVideoDataChange",jq);a=F("POST_MESSAGE_ID","player");F("ENABLE_JS_API")?iq=new up(gq):F("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(hq=new Bp(window.parent,a,b),iq=new yp(gq,hq.connection));Wo();if(!N("ytidb_create_logger_embed_killswitch"))for(a={},Ej=new gp(void 0===a.handleError?Nm:a.handleError,void 0===a.logEvent?
V:a.logEvent);0<Dj.length;)switch(a=Dj.shift(),a.type){case "ERROR":Ej.handleError(a.payload);break;case "EVENT":Ej.logEvent(a.eventType,a.payload)}N("networkless_logging_web_embedded")&&(N("embeds_web_enable_new_nwl")?am():gm());N("embeds_enable_ua_ch_polyfill")&&mp()},void 0);
var mq=Qg(function(){xo();var a=ej.getInstance(),b=!!((hj("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&bf(document.body,"exp-invert-logo"))if(c&&!bf(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!bf(d,"inverted-hdpi")){var e=$e(d);af(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&bf(document.body,"inverted-hdpi")&&cf();if(b!=c){b="f"+(Math.floor(119/31)+1);d=hj(b)||0;d=c?d|67108864:
d&-67108865;0==d?delete dj[b]:(c=d.toString(16),dj[b]=c.toString());c=!0;N("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in dj)d.push(f+"="+encodeURIComponent(String(dj[f])));cj(b,d.join("&"),63072E3,a.i,c)}Co.h||(Co.h=new Co);a=Co.h;f=16623;var g=void 0===g?{}:g;Object.values(Rm).includes(f)||(Pm(new Ij("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.A=[];a.o=[];g.fb?Fo(a,f,g):Go(a,f,g)}),nq=Qg(function(){gq&&
gq.sendAbandonmentPing&&gq.sendAbandonmentPing();
F("PL_ATT")&&bp.dispose();for(var a=0,b=Uo.length;a<b;a++)th.aa(Uo[a]);Uo.length=0;So("//web.archive.org/web/20211121042211/https://static.doubleclick.net/instream/ad_status.js");Vo=!1;M("DCLKSTAT",0);(0,Vd)(iq,hq);gq&&(gq.removeEventListener("onVideoDataChange",jq),gq.destroy())});
window.addEventListener?(window.addEventListener("load",mq),window.addEventListener("unload",nq)):window.attachEvent&&(window.attachEvent("onload",mq),window.attachEvent("onunload",nq));Wa("yt.abuse.player.botguardInitialized",C("yt.abuse.player.botguardInitialized")||cp);Wa("yt.abuse.player.invokeBotguard",C("yt.abuse.player.invokeBotguard")||dp);Wa("yt.abuse.dclkstatus.checkDclkStatus",C("yt.abuse.dclkstatus.checkDclkStatus")||Xo);
Wa("yt.player.exports.navigate",C("yt.player.exports.navigate")||lq);Wa("yt.util.activity.init",C("yt.util.activity.init")||vh);Wa("yt.util.activity.getTimeSinceActive",C("yt.util.activity.getTimeSinceActive")||yh);Wa("yt.util.activity.setTimestamp",C("yt.util.activity.setTimestamp")||wh);}).call(this);


}
/*
     FILE ARCHIVED ON 04:22:11 Nov 21, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:28:10 Jun 11, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.745
  exclusion.robots: 0.033
  exclusion.robots.policy: 0.019
  esindex: 0.012
  cdx.remote: 71.237
  LoadShardBlock: 75.315 (3)
  PetaboxLoader3.datanode: 124.476 (5)
  load_resource: 534.91 (2)
  PetaboxLoader3.resolve: 332.139 (2)
*/