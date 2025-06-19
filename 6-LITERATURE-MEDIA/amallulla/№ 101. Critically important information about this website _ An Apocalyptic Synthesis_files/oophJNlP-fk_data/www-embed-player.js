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
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function p(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
p("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
p("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ja(a){if(!(a instanceof Array)){a=q(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ka(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function r(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.aa=b.prototype}
function ra(){this.C=!1;this.l=null;this.i=void 0;this.h=1;this.o=this.m=0;this.A=this.j=null}
function sa(a){if(a.C)throw new TypeError("Generator is already running");a.C=!0}
ra.prototype.u=function(a){this.i=a};
function ta(a,b){a.j={wb:b,Ab:!0};a.h=a.m||a.o}
ra.prototype.return=function(a){this.j={return:a};this.h=this.o};
function t(a,b,c){a.h=c;return{value:b}}
ra.prototype.s=function(a){this.h=a};
function va(a,b,c){a.m=b;void 0!=c&&(a.o=c)}
function wa(a,b){a.h=b;a.m=0}
function xa(a){a.m=0;var b=a.j.wb;a.j=null;return b}
function ya(a){a.A=[a.j];a.m=0;a.o=0}
function za(a){var b=a.A.splice(0)[0];(b=a.j=a.j||b)?b.Ab?a.h=a.m||a.o:void 0!=b.s&&a.o<b.s?(a.h=b.s,a.j=null):a.h=a.o:a.h=0}
function Aa(a){this.h=new ra;this.i=a}
function Ca(a,b){sa(a.h);var c=a.h.l;if(c)return Da(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ea(a)}
function Da(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.C=!1,e;var f=e.value}catch(g){return a.h.l=null,ta(a.h,g),Ea(a)}a.h.l=null;d.call(a.h,f);return Ea(a)}
function Ea(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.C=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ta(a.h,c)}a.h.C=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ab)throw b.wb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Fa(a){this.next=function(b){sa(a.h);a.h.l?b=Da(a,a.h.l.next,b,a.h.u):(a.h.u(b),b=Ea(a));return b};
this.throw=function(b){sa(a.h);a.h.l?b=Da(a,a.h.l["throw"],b,a.h.u):(ta(a.h,b),b=Ea(a));return b};
this.return=function(b){return Ca(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ga(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Ga(new Fa(new Aa(a)))}
function Ha(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
p("Reflect",function(a){return a?a:{}});
p("Reflect.construct",function(){return la});
p("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
p("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.C=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.o=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(n){k||(k=!0,m.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.S),reject:g(this.o)}};
b.prototype.S=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.M(g):this.m(g)}};
b.prototype.M=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.oa(h,g):this.m(g)};
b.prototype.o=function(g){this.u(2,g)};
b.prototype.m=function(g){this.u(1,g)};
b.prototype.u=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.A()};
b.prototype.Y=function(){var g=this;e(function(){if(g.L()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.L=function(){if(this.C)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.A=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.fa=function(g){var h=this.l();g.Ja(h.resolve,h.reject)};
b.prototype.oa=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(x,u){return"function"==typeof x?function(D){try{m(x(D))}catch(E){n(E)}}:u}
var m,n,v=new b(function(x,u){m=x;n=u});
this.Ja(k(g,m),k(h,n));return v};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ja=function(g,h){function k(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(k):this.i.push(k);this.C=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=q(g),n=m.next();!n.done;n=m.next())d(n.value).Ja(h,k)})};
b.all=function(g){var h=q(g),k=h.next();return k.done?d([]):new b(function(m,n){function v(D){return function(E){x[D]=E;u--;0==u&&m(x)}}
var x=[],u=0;do x.push(void 0),u++,d(k.value).Ja(v(x.length-1),n),k=h.next();while(!k.done)})};
return b});
function Ia(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
p("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=q(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!Ia(k,g)){var m=new c;ca(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return m(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),n=new a([[k,2],[m,3]]);if(2!=n.get(k)||3!=n.get(m))return!1;n.delete(k);n.set(m,4);return!n.has(k)&&4==n.get(m)}catch(v){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ia(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=m;return this};
b.prototype.get=function(k){return d(k)&&Ia(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Ia(k,g)&&Ia(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Ia(k,g)&&Ia(k[g],this.h)?delete k[g][this.h]:!1};
return b});
p("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.h;return ia(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var n=h.data_[m];if(n&&Ia(h.data_,m))for(h=0;h<n.length;h++){var v=n[h];if(k!==k&&v.key!==v.key||k===v.key)return{id:m,list:n,index:h,entry:v}}return{id:m,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=q(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(q([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),n=m.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=m.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!m.next().done?!1:!0}catch(v){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),n;!(n=m.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
p("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
p("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
p("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
p("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
p("Object.setPrototypeOf",function(a){return a||qa});
var La="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ia(d,e)&&(a[e]=d[e])}return a};
p("Object.assign",function(a){return a||La});
p("Set",function(a){function b(c){this.h=new Map;if(c){c=q(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(q([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
p("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ia(b,d)&&c.push([d,b[d]]);return c}});
p("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
p("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
p("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
p("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
p("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
p("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
p("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
p("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
p("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Ia(b,d)&&c.push(b[d]);return c}});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function A(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ma(){}
function Na(a){a.fb=void 0;a.getInstance=function(){return a.fb?a.fb:a.fb=new a}}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wa=Ua:Wa=Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ya(a,b){z(a,b,void 0)}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Co=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.Qb=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function cb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var db=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},eb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},gb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},hb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
eb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ib(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function jb(a,b){b=db(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function qb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function rb(){var a=B("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function sb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function tb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function wb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=wb(a[c]);return b}
var xb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xb.length;f++)c=xb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var zb;function Ab(){if(void 0===zb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(c){y.console&&y.console.error(c.message)}zb=a}else zb=a}return zb}
;function Bb(a,b){this.j=a===Cb&&b||""}
Bb.prototype.i=!0;Bb.prototype.h=function(){return this.j};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a){this.j=Eb===Eb?a:"";this.i=!0}
Fb.prototype.h=function(){return this.j.toString()};
Fb.prototype.toString=function(){return this.j.toString()};function Gb(a,b){this.j=b===Hb?a:""}
Gb.prototype.i=!0;Gb.prototype.h=function(){return this.j.toString()};
Gb.prototype.toString=function(){return this.j+""};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb)return a.j;Oa(a);return"type_error:TrustedResourceUrl"}
var Hb={};function Jb(a){var b=Ab();a=b?b.createScriptURL(a):a;return new Gb(a,Hb)}
;var Kb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Lb(a,b){this.j=b===Mb?a:""}
Lb.prototype.i=!0;Lb.prototype.h=function(){return this.j.toString()};
Lb.prototype.toString=function(){return this.j.toString()};
function Nb(a){if(a instanceof Lb&&a.constructor===Lb)return a.j;Oa(a);return"type_error:SafeUrl"}
var Ob=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Mb={};function Rb(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Rb().indexOf(a)}
;function Sb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
;var Tb={};function Ub(a){this.j=Tb===Tb?a:"";this.i=!0}
Ub.prototype.h=function(){return this.j.toString()};
Ub.prototype.toString=function(){return this.j.toString()};function Vb(a,b){b instanceof Lb||b instanceof Lb||(b="object"==typeof b&&b.i?b.h():String(b),Ob.test(b)||(b="about:invalid#zClosurez"),b=new Lb(b,Mb));a.href=Nb(b)}
function Wb(a,b){a.rel="stylesheet";a.href=Ib(b).toString();(b=Xb('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Yb(){return Xb("script[nonce]",void 0)}
var Zb=/^[\w+/_-]+[=]{0,2}$/;function Xb(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&Zb.test(a)?a:"":""}
;function $b(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bc(a){return a?decodeURI(a):a}
function cc(a,b){return b.match(ac)[a]||null}
function dc(a){return bc(cc(3,a))}
function ec(a){var b=a.match(ac);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)fc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function gc(a){var b=[],c;for(c in a)fc(c,a[c],b);return b.join("&")}
function hc(a,b){b=gc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function ic(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var jc=/#|$/,kc=/[?&]($|#)/;function lc(a){for(var b=a.search(jc),c=0,d,e=[];0<=(d=ic(a,c,"key",b));)e.push(a.substring(c,d)),c=Math.min(a.indexOf("&",d)+1||b,b);e.push(a.substr(c));return e.join("").replace(kc,"$1")}
;function mc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
;function nc(a){nc[" "](a);return a}
nc[" "]=Ma;var oc=C("Opera"),sc=C("Trident")||C("MSIE"),tc=C("Edge"),uc=C("Gecko")&&!(-1!=Rb().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),vc=-1!=Rb().toLowerCase().indexOf("webkit")&&!C("Edge"),wc=C("Android");function xc(){var a=y.document;return a?a.documentMode:void 0}
var yc;a:{var zc="",Ac=function(){var a=Rb();if(uc)return/rv:([^\);]+)(\)|;)/.exec(a);if(tc)return/Edge\/([\d\.]+)/.exec(a);if(sc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(vc)return/WebKit\/(\S+)/.exec(a);if(oc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ac&&(zc=Ac?Ac[1]:"");if(sc){var Bc=xc();if(null!=Bc&&Bc>parseFloat(zc)){yc=String(Bc);break a}}yc=zc}var Cc=yc,Dc;if(y.document&&sc){var Ec=xc();Dc=Ec?Ec:parseInt(Cc,10)||void 0}else Dc=void 0;var Fc=Dc;var Gc=mc()||C("iPod"),Hc=C("iPad");!C("Android")||Sb();Sb();var Ic=C("Safari")&&!(Sb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||C("Firefox")||C("FxiOS")||C("Silk")||C("Android"))&&!(mc()||C("iPad")||C("iPod"));var Jc={},Kc=null;
function Lc(a,b){Pa(a);void 0===b&&(b=0);if(!Kc){Kc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Jc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Kc[h]&&(Kc[h]=g)}}}b=Jc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Mc="function"===typeof Uint8Array;var Nc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Oc(a,b){Object.isFrozen(a)||(Nc?a[Nc]|=b:void 0!==a.Na?a.Na|=b:Object.defineProperties(a,{Na:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Pc(a){var b;Nc?b=a[Nc]:b=a.Na;return null==b?0:b}
function Qc(a){Oc(a,1);return a}
function Rc(a){return Array.isArray(a)?!!(Pc(a)&2):!1}
function Sc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Oc(a,2)}
;function Tc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Uc,Vc=Object.freeze(Qc([]));function Wc(a){if(Rc(a.G))throw Error("Cannot mutate an immutable Message");}
var Xc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Yc(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Zc(a,b,c){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:(void 0===c?0:c)&&a.i&&(c=a.i[b],null!=c)?c:a.G[b+a.j]}
function F(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Wc(a);b<a.l&&!d?a.G[b+a.j]=c:(a.i||(a.i=a.G[a.l+a.j]={}))[b]=c;return a}
function $c(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?!1:d;var e=Zc(a,b,d);null==e&&(e=Vc);if(Rc(a.G))c&&(Sc(e),Object.freeze(e));else if(e===Vc||Rc(e))e=Qc(e.slice()),F(a,b,e,d);return e}
function ad(a,b,c,d){Wc(a);(c=ed(a,c))&&c!==b&&null!=d&&(a.h&&c in a.h&&(a.h[c]=void 0),F(a,c,void 0));return F(a,b,d)}
function ed(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Zc(a,e)&&(0!==c&&F(a,c,void 0,!1,!0),c=e)}return c}
function fd(a,b,c,d,e){if(-1===c)return null;a.h||(a.h={});var f=a.h[c];if(f)return f;e=Zc(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);Rc(a.G)&&Sc(b.G);return a.h[c]=b}
function gd(a,b,c,d){d=void 0===d?!1:d;a.h||(a.h={});var e=Rc(a.G),f=a.h[c];if(!f){d=$c(a,c,!0,d);f=[];e=e||Rc(d);for(var g=0;g<d.length;g++)f[g]=new b(d[g]),e&&Sc(f[g].G);e&&(Sc(f),Object.freeze(f));a.h[c]=f}return f}
function H(a,b,c,d){d=void 0===d?!1:d;Wc(a);a.h||(a.h={});var e=c?c.G:c;a.h[b]=c;return F(a,b,e,d)}
function hd(a,b,c,d){Wc(a);a.h||(a.h={});var e=d?d.G:d;a.h[b]=d;ad(a,b,c,e)}
function id(a,b,c,d){var e=void 0===e?!1:e;Wc(a);e=gd(a,c,b,e);c=d?d:new c;a=$c(a,b);e.push(c);a.push(c.G)}
function jd(a,b){a=Zc(a,b);return null==a?"":a}
;function kd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&Mc&&null!=a&&a instanceof Uint8Array)return Lc(a)}return a}
;function ld(a,b){b=void 0===b?md:b;return nd(a,b)}
function od(a,b){if(null!=a){if(Array.isArray(a))a=nd(a,b);else if(Tc(a)){var c={},d;for(d in a)c[d]=od(a[d],b);a=c}else a=b(a);return a}}
function nd(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=od(c[d],b);Array.isArray(a)&&Pc(a)&1&&Qc(c);return c}
function pd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=kd(a);return Array.isArray(a)?ld(a,pd):a}
function md(a){return Mc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function qd(a){y.setTimeout(function(){throw a;},0)}
;function rd(a,b,c){a||(a=sd);sd=null;var d=this.constructor.i;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.h||0);this.h=void 0;this.G=a;a:{d=this.G.length;a=d-1;if(d&&(d=this.G[a],Tc(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.G[a])?Array.isArray(d)&&Qc(d):this.G[a]=Vc;else{d=this.i||(this.i=this.G[this.l+this.j]={});var e=d[a];e?Array.isArray(e)&&
Qc(e):d[a]=Vc}}
rd.prototype.toJSON=function(){var a=this.G;return Uc?a:ld(a,pd)};
function td(a){Uc=!0;try{return JSON.stringify(a.toJSON(),ud)}finally{Uc=!1}}
rd.prototype.clone=function(){var a=ld(this.G);sd=a;a=new this.constructor(a);sd=null;vd(a,this);return a};
rd.prototype.toString=function(){return this.G.toString()};
function ud(a,b){return kd(b)}
function vd(a,b){b.o&&(a.o=b.o.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=gd(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)vd(f[g],e[g])}else(f=fd(a,e.constructor,g,void 0,f))&&vd(f,e)}}}}
var sd;function wd(){rd.apply(this,arguments)}
r(wd,rd);function xd(){var a={};Object.defineProperties(wd,(a[Symbol.hasInstance]=Yc(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),a))}
Xc&&xd();function yd(a,b){var c=this.h;if(this.isRepeated){var d=!0;d=void 0===d?!1:d;Wc(a);if(b){var e=Qc([]);for(var f=0;f<b.length;f++)e[f]=b[f].G;a.h||(a.h={});a.h[c]=b}else a.h&&(a.h[c]=void 0),e=Vc;a=F(a,c,e,d)}else a=H(a,c,b,!0);return a}
;function I(){wd.apply(this,arguments)}
r(I,wd);function zd(){var a={};Object.defineProperties(I,(a[Symbol.hasInstance]=Yc(Object[Symbol.hasInstance]),a))}
Xc&&zd();function Ad(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Bd(a){this.i=!1;var b=a.program;a=a.globalName;var c=new Ad;this.j=c.promise;this.l=q((0,y[a].a)(b,function(d,e){Promise.resolve().then(function(){c.resolve({Pb:d,yc:e})})},!0)).next().value;
this.xc=c.promise.then(function(){})}
Bd.prototype.snapshot=function(a){if(this.i)throw Error("Already disposed");return this.j.then(function(b){var c=b.Pb;return new Promise(function(d){c(function(e){d(e)},[a.rb,
a.zc])})})};
Bd.prototype.dispose=function(){this.i=!0;this.j.then(function(a){(a=a.yc)&&a()})};
Bd.prototype.h=function(){return this.i};var Cd=window;Db("csi.gstatic.com");Db("googleads.g.doubleclick.net");Db("partner.googleadservices.com");Db("pubads.g.doubleclick.net");Db("securepubads.g.doubleclick.net");Db("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Dd={};function Ed(){}
function Fd(a){this.h=a}
r(Fd,Ed);Fd.prototype.toString=function(){return this.h};
var Gd=new Fd("about:invalid#zTSz",Dd);function Hd(a){if(a instanceof Ed)if(a instanceof Fd)a=a.h;else throw Error("");else a=Nb(a);return a}
;function Id(a,b){a.src=Ib(b);var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;var d=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]");(c=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Jd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=Jd.prototype;l.clone=function(){return new Jd(this.x,this.y)};
l.equals=function(a){return a instanceof Jd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Kd(a,b){this.width=a;this.height=b}
l=Kd.prototype;l.clone=function(){return new Kd(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Ld(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Md(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Nd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Od(a){var b=Pd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Qd(){var a=[];Od(function(b){a.push(b)});
return a}
var Pd={Qc:"allow-forms",Rc:"allow-modals",Sc:"allow-orientation-lock",Tc:"allow-pointer-lock",Uc:"allow-popups",Vc:"allow-popups-to-escape-sandbox",Wc:"allow-presentation",Xc:"allow-same-origin",Yc:"allow-scripts",Zc:"allow-top-navigation",bd:"allow-top-navigation-by-user-activation"},Rd=cb(function(){return Qd()});
function Sd(){var a=Td(),b={};eb(Rd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Td(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Ud(a){this.isValid=a}
function Vd(a){return new Ud(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Wd=[Vd("data"),Vd("http"),Vd("https"),Vd("mailto"),Vd("ftp"),new Ud(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Xd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Yd=(new Date).getTime();function Zd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function $d(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}
function b(v){for(var x=g,u=0;64>u;u+=4)x[u/4]=v[u]<<24|v[u+1]<<16|v[u+2]<<8|v[u+3];for(u=16;80>u;u++)v=x[u-3]^x[u-8]^x[u-14]^x[u-16],x[u]=(v<<1|v>>>31)&4294967295;v=e[0];var D=e[1],E=e[2],K=e[3],O=e[4];for(u=0;80>u;u++){if(40>u)if(20>u){var N=K^D&(E^K);var R=1518500249}else N=D^E^K,R=1859775393;else 60>u?(N=D&E|K&(D|E),R=2400959708):(N=D^E^K,R=3395469782);N=((v<<5|v>>>27)&4294967295)+N+O+R+x[u]&4294967295;O=K;K=E;E=(D<<30|D>>>2)&4294967295;D=v;v=N}e[0]=e[0]+v&4294967295;e[1]=e[1]+D&4294967295;e[2]=
e[2]+E&4294967295;e[3]=e[3]+K&4294967295;e[4]=e[4]+O&4294967295}
function c(v,x){if("string"===typeof v){v=unescape(encodeURIComponent(v));for(var u=[],D=0,E=v.length;D<E;++D)u.push(v.charCodeAt(D));v=u}x||(x=v.length);u=0;if(0==m)for(;u+64<x;)b(v.slice(u,u+64)),u+=64,n+=64;for(;u<x;)if(f[m++]=v[u++],n++,64==m)for(m=0,b(f);u+64<x;)b(v.slice(u,u+64)),u+=64,n+=64}
function d(){var v=[],x=8*n;56>m?c(h,56-m):c(h,64-(m-56));for(var u=63;56<=u;u--)f[u]=x&255,x>>>=8;b(f);for(u=x=0;5>u;u++)for(var D=24;0<=D;D-=8)v[x++]=e[u]>>D&255;return v}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,n;a();return{reset:a,update:c,digest:d,Tb:function(){for(var v=d(),x="",u=0;u<v.length;u++)x+="0123456789ABCDEF".charAt(Math.floor(v[u]/16))+"0123456789ABCDEF".charAt(v[u]%16);return x}}}
;function de(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,ee(Zd(d),a,c||null)].join(" "):null}
function ee(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],eb(d,function(h){e.push(h)}),fe(e.join(" "));
var f=[],g=[];eb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];eb(d,function(h){e.push(h)});
a=fe(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function fe(a){var b=$d();b.update(a);return b.Tb().toLowerCase()}
;var ge={};function he(a){this.h=a||{cookie:""}}
l=he.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Qa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Oo;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Qa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Kb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Qa:0,path:b,domain:c});return d};
l.ab=function(){return ie(this).keys};
l.isEmpty=function(){return!this.h.cookie};
l.clear=function(){for(var a=ie(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function ie(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Kb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var je=new he("undefined"==typeof document?null:document);function ke(a){return!!ge.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function le(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;ke(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new he(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");ke(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function me(a,b,c,d){(a=y[a])||(a=(new he(document)).get(b));return a?de(a,c,d):null}
function ne(a){var b=void 0===b?!1:b;var c=Zd(String(y.location.href)),d=[];if(le(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new he(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?de(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&ke(b)&&((b=me("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=me("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function oe(a){Xc&&Object.defineProperty(a,Symbol.hasInstance,Yc(Object[Symbol.hasInstance]))}
;function pe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function qe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?qe.apply(null,d):pe(d)}}
;function J(){this.C=this.C;this.o=this.o}
J.prototype.C=!1;J.prototype.h=function(){return this.C};
J.prototype.dispose=function(){this.C||(this.C=!0,this.I())};
function re(a,b){a.C?b():(a.o||(a.o=[]),a.o.push(b))}
J.prototype.I=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function se(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
se.prototype.stopPropagation=function(){this.j=!0};
se.prototype.preventDefault=function(){this.defaultPrevented=!0};function te(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ue(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ve[c])c=ve[c];else{c=String(c);if(!ve[c]){var f=/function\s+([^\(]+)/m.exec(c);ve[c]=f?f[1]:"[Anonymous]"}c=ve[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ue(a,b){b||(b={});b[we(a)]=!0;var c=a.stack||"";(a=a.Qb)&&!b[we(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ue(a,b));return c}
function we(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ve={};var xe=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ma,b),y.removeEventListener("test",Ma,b)}catch(c){}return a}();function ye(a,b){se.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Za(ye,se);var ze={2:"touch",3:"pen",4:"mouse"};
ye.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(uc){a:{try{nc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ze[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&ye.aa.preventDefault.call(this)};
ye.prototype.stopPropagation=function(){ye.aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
ye.prototype.preventDefault=function(){ye.aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ae="closure_listenable_"+(1E6*Math.random()|0);var Be=0;function Ce(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ma=e;this.key=++Be;this.za=this.Ia=!1}
function De(a){a.za=!0;a.listener=null;a.proxy=null;a.src=null;a.Ma=null}
;function Ee(a){this.src=a;this.listeners={};this.h=0}
Ee.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Fe(a,b,d,e);-1<g?(b=a[g],c||(b.Ia=!1)):(b=new Ce(b,this.src,f,!!d,e),b.Ia=c,a.push(b));return b};
Ee.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Fe(e,b,c,d);return-1<b?(De(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Ge(a,b){var c=b.type;c in a.listeners&&jb(a.listeners[c],b)&&(De(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Fe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.za&&f.listener==b&&f.capture==!!c&&f.Ma==d)return e}return-1}
;var He="closure_lm_"+(1E6*Math.random()|0),Ie={},Je=0;function Ke(a,b,c,d,e){if(d&&d.once)Le(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ke(a,b[f],c,d,e);else c=Me(c),a&&a[Ae]?a.V(b,c,Qa(d)?!!d.capture:!!d,e):Ne(a,b,c,!1,d,e)}
function Ne(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Oe(a);h||(a[He]=h=new Ee(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Pe();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)xe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Qe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Je++}}
function Pe(){function a(c){return b.call(a.src,a.listener,c)}
var b=Re;return a}
function Le(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Le(a,b[f],c,d,e);else c=Me(c),a&&a[Ae]?a.l.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Ne(a,b,c,!0,d,e)}
function Se(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Se(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Me(c),a&&a[Ae])?a.l.remove(String(b),c,d,e):a&&(a=Oe(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Fe(b,c,d,e)),(c=-1<a?b[a]:null)&&Te(c))}
function Te(a){if("number"!==typeof a&&a&&!a.za){var b=a.src;if(b&&b[Ae])Ge(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Qe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Je--;(c=Oe(b))?(Ge(c,a),0==c.h&&(c.src=null,b[He]=null)):De(a)}}}
function Qe(a){return a in Ie?Ie[a]:Ie[a]="on"+a}
function Re(a,b){if(a.za)a=!0;else{b=new ye(b,this);var c=a.listener,d=a.Ma||a.src;a.Ia&&Te(a);a=c.call(d,b)}return a}
function Oe(a){a=a[He];return a instanceof Ee?a:null}
var Ue="__closure_events_fn_"+(1E9*Math.random()>>>0);function Me(a){if("function"===typeof a)return a;a[Ue]||(a[Ue]=function(b){return a.handleEvent(b)});
return a[Ue]}
;function Ve(){J.call(this);this.l=new Ee(this);this.Y=this;this.L=null}
Za(Ve,J);Ve.prototype[Ae]=!0;Ve.prototype.addEventListener=function(a,b,c,d){Ke(this,a,b,c,d)};
Ve.prototype.removeEventListener=function(a,b,c,d){Se(this,a,b,c,d)};
function We(a,b){var c=a.L;if(c){var d=[];for(var e=1;c;c=c.L)d.push(c),++e}a=a.Y;c=b.type||b;"string"===typeof b?b=new se(b,a):b instanceof se?b.target=b.target||a:(e=b,b=new se(c,a),yb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Xe(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Xe(g,c,!0,b)&&e,b.j||(e=Xe(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Xe(g,c,!1,b)&&e}
Ve.prototype.I=function(){Ve.aa.I.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,De(d[e]);delete a.listeners[c];a.h--}}this.L=null};
Ve.prototype.V=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function Xe(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.za&&g.capture==c){var h=g.listener,k=g.Ma||g.src;g.Ia&&Ge(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ye(a){var b,c;Ve.call(this);var d=this;this.A=this.j=0;this.U=null!==a&&void 0!==a?a:{N:function(e,f){return setTimeout(e,f)},
T:clearTimeout};this.i=null!==(c=null===(b=window.navigator)||void 0===b?void 0:b.onLine)&&void 0!==c?c:!0;this.m=function(){return w(function(e){return t(e,Ze(d),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||$e(this)}
r(Ye,Ve);function af(){var a=bf;Ye.h||(Ye.h=new Ye(a));return Ye.h}
Ye.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.U.T(this.A);delete Ye.h};
Ye.prototype.H=function(){return this.i};
function $e(a){a.A=a.U.N(function(){var b;return w(function(c){if(1==c.h)return a.i?(null===(b=window.navigator)||void 0===b?0:b.onLine)?c.s(3):t(c,Ze(a),3):t(c,Ze(a),3);$e(a);c.h=0})},3E4)}
function Ze(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f;return w(function(g){switch(g.h){case 1:return d=window.AbortController?new window.AbortController:void 0,e=null===d||void 0===d?void 0:d.signal,f=!1,va(g,2,3),d&&(a.j=a.U.N(function(){d.abort()},b||2E4)),t(g,fetch("/generate_204",{method:"HEAD",
signal:e}),5);case 5:f=!0;case 3:ya(g);a.u=void 0;a.j&&(a.U.T(a.j),a.j=0);f!==a.i&&(a.i=f,a.i?We(a,"networkstatus-online"):We(a,"networkstatus-offline"));c(f);za(g);break;case 2:xa(g),f=!1,g.s(3)}})})}
;var cf={mo:"WEB_DISPLAY_MODE_UNKNOWN",ho:"WEB_DISPLAY_MODE_BROWSER",ko:"WEB_DISPLAY_MODE_MINIMAL_UI",lo:"WEB_DISPLAY_MODE_STANDALONE",jo:"WEB_DISPLAY_MODE_FULLSCREEN"};function df(){this.data_=[];this.h=-1}
df.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
df.prototype.get=function(a){return!!this.data_[a]};
function ef(a){-1==a.h&&(a.h=hb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function ff(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
ff.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function gf(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var hf;function jf(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=Md("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.pb;c.pb=null;e()}};
return function(e){d.next={pb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function kf(){this.i=this.h=null}
kf.prototype.add=function(a,b){var c=lf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
kf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var lf=new ff(function(){return new mf},function(a){return a.reset()});
function mf(){this.next=this.scope=this.h=null}
mf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
mf.prototype.reset=function(){this.next=this.scope=this.h=null};function nf(a,b){of||pf();qf||(of(),qf=!0);rf.add(a,b)}
var of;function pf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);of=function(){a.then(sf)}}else of=function(){var b=sf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!C("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(hf||(hf=jf()),hf(b)):y.setImmediate(b)}}
var qf=!1,rf=new kf;function sf(){for(var a;a=rf.remove();){try{a.h.call(a.scope)}catch(b){qd(b)}gf(lf,a)}qf=!1}
;function tf(a,b){this.h=a[y.Symbol.iterator]();this.i=b}
tf.prototype[Symbol.iterator]=function(){return this};
tf.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function uf(a,b){return new tf(a,b)}
;function vf(){this.blockSize=-1}
;function wf(){this.blockSize=-1;this.blockSize=64;this.h=[];this.o=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Za(wf,vf);wf.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function xf(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
wf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)xf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){xf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){xf(this,e);f=0;break}}this.i=f;this.l+=b}};
wf.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;xf(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function yf(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function zf(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Af(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:yf(a).match(/\S+/g)||[],b=0<=db(a,b));return b}
function Bf(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Af(a,"inverted-hdpi")&&zf(a,Array.prototype.filter.call(a.classList?a.classList:yf(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Cf="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function Df(){}
Df.prototype.la=function(){throw Cf;};
Df.prototype.next=function(){return Ef};
var Ef={done:!0,value:void 0};function Ff(a){return{value:a,done:!1}}
function Gf(a){if(a.done)throw Cf;return a.value}
Df.prototype.Z=function(){return this};function Hf(a){if(a instanceof If||a instanceof Jf||a instanceof Kf)return a;if("function"==typeof a.la)return new If(function(){return Lf(a)});
if("function"==typeof a[Symbol.iterator])return new If(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Z)return new If(function(){return Lf(a.Z())});
throw Error("Not an iterator or iterable.");}
function Lf(a){if(!(a instanceof Df))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.la();break}catch(d){if(d!==Cf)throw d;b=!0}return{value:c,done:b}}}}
function If(a){this.h=a}
If.prototype.Z=function(){return new Jf(this.h())};
If.prototype[Symbol.iterator]=function(){return new Kf(this.h())};
If.prototype.i=function(){return new Kf(this.h())};
function Jf(a){this.h=a}
r(Jf,Df);Jf.prototype.la=function(){var a=this.h.next();if(a.done)throw Cf;return a.value};
Jf.prototype.next=function(){return this.h.next()};
Jf.prototype[Symbol.iterator]=function(){return new Kf(this.h)};
Jf.prototype.i=function(){return new Kf(this.h)};
function Kf(a){If.call(this,function(){return a});
this.j=a}
r(Kf,If);Kf.prototype.next=function(){return this.j.next()};function Mf(a,b){this.i={};this.h=[];this.ia=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Mf)for(c=a.ab(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=Mf.prototype;l.ab=function(){Nf(this);return this.h.concat()};
l.has=function(a){return Of(this.i,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Pf;Nf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Pf(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.i={};this.ia=this.size=this.h.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return Of(this.i,a)?(delete this.i[a],--this.size,this.ia++,this.h.length>2*this.size&&Nf(this),!0):!1};
function Nf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Of(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Of(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
l.get=function(a,b){return Of(this.i,a)?this.i[a]:b};
l.set=function(a,b){Of(this.i,a)||(this.size+=1,this.h.push(a),this.ia++);this.i[a]=b};
l.forEach=function(a,b){for(var c=this.ab(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new Mf(this)};
l.keys=function(){return Hf(this.Z(!0)).i()};
l.values=function(){return Hf(this.Z(!1)).i()};
l.entries=function(){var a=this;return uf(this.keys(),function(b){return[b,a.get(b)]})};
l.Z=function(a){Nf(this);var b=0,c=this.ia,d=this,e=new Df;e.next=function(){if(c!=d.ia)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Ef;var g=d.h[b++];return Ff(a?g:d.i[g])};
var f=e.next;e.la=function(){return Gf(f.call(e))};
return e};
function Of(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Qf(a){Rf();return Jb(a)}
var Rf=Ma;function Sf(a){var b=[];Vf(new Wf,a,b);return b.join("")}
function Wf(){}
function Vf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Vf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Xf(d,c),c.push(":"),Vf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Xf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Yf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Zf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Xf(a,b){b.push('"',a.replace(Zf,function(c){var d=Yf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Yf[c]=d);return d}),'"')}
;function $f(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function ag(a){this.h=0;this.C=void 0;this.l=this.i=this.j=null;this.o=this.m=!1;if(a!=Ma)try{var b=this;a.call(void 0,function(c){bg(b,2,c)},function(c){bg(b,3,c)})}catch(c){bg(this,3,c)}}
function cg(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
cg.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var dg=new ff(function(){return new cg},function(a){a.reset()});
function eg(a,b,c){var d=dg.get();d.i=a;d.onRejected=b;d.context=c;return d}
function fg(a){return new ag(function(b,c){c(a)})}
ag.prototype.then=function(a,b,c){return gg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
ag.prototype.$goog_Thenable=!0;function hg(a,b){return gg(a,null,b,void 0)}
ag.prototype.cancel=function(a){if(0==this.h){var b=new ig(a);nf(function(){jg(this,b)},this)}};
function jg(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?jg(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):kg(c),lg(c,e,3,b)))}a.j=null}else bg(a,3,b)}
function mg(a,b){a.i||2!=a.h&&3!=a.h||ng(a);a.l?a.l.next=b:a.i=b;a.l=b}
function gg(a,b,c,d){var e=eg(null,null,null);e.h=new ag(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ig?g(h):f(k)}catch(m){g(m)}}:g});
e.h.j=a;mg(a,e);return e.h}
ag.prototype.A=function(a){this.h=0;bg(this,2,a)};
ag.prototype.L=function(a){this.h=0;bg(this,3,a)};
function bg(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.A,f=a.L;if(d instanceof ag){mg(d,eg(e||Ma,f||null,a));var g=!0}else if($f(d))d.then(e,f,a),g=!0;else{if(Qa(d))try{var h=d.then;if("function"===typeof h){og(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.C=c,a.h=b,a.j=null,ng(a),3!=b||c instanceof ig||pg(a,c))}}
function og(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ng(a){a.m||(a.m=!0,nf(a.u,a))}
function kg(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
ag.prototype.u=function(){for(var a;a=kg(this);)lg(this,a,this.h,this.C);this.m=!1};
function lg(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,qg(b,c,d);else try{b.j?b.i.call(b.context):qg(b,c,d)}catch(e){rg.call(null,e)}gf(dg,b)}
function qg(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function pg(a,b){a.o=!0;nf(function(){a.o&&rg.call(null,b)})}
var rg=qd;function ig(a){ab.call(this,a)}
Za(ig,ab);ig.prototype.name="cancel";function L(a){J.call(this);this.u=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
Za(L,J);l=L.prototype;l.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function sg(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.va(b)}}
l.va=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ma):(c&&jb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
l.ja=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];tg(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.va(c)}}return 0!=e}return!1};
function tg(a,b,c){nf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.va,this),delete this.j[a])}else this.i.length=0,this.j={}};
l.I=function(){L.aa.I.call(this);this.clear();this.l.length=0};function ug(a){this.h=a}
ug.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Sf(b))};
ug.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ug.prototype.remove=function(a){this.h.remove(a)};function vg(a){this.h=a}
Za(vg,ug);function wg(a){this.data=a}
function xg(a){return void 0===a||a instanceof wg?a:new wg(a)}
vg.prototype.set=function(a,b){vg.aa.set.call(this,a,xg(b))};
vg.prototype.i=function(a){a=vg.aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
vg.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function yg(a){this.h=a}
Za(yg,vg);yg.prototype.set=function(a,b,c){if(b=xg(b)){if(c){if(c<Date.now()){yg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}yg.aa.set.call(this,a,b)};
yg.prototype.i=function(a){var b=yg.aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())yg.prototype.remove.call(this,a);else return b}};function zg(){}
;function Ag(){}
Za(Ag,zg);Ag.prototype[Symbol.iterator]=function(){return Hf(this.Z(!0)).i()};
Ag.prototype.clear=function(){var a=Array.from(this);a=q(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Bg(a){this.h=a}
Za(Bg,Ag);l=Bg.prototype;l.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeItem(a)};
l.Z=function(a){var b=0,c=this.h,d=new Df;d.next=function(){if(b>=c.length)return Ef;var f=c.key(b++);if(a)return Ff(f);f=c.getItem(f);if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return Ff(f)};
var e=d.next;d.la=function(){return Gf(e.call(d))};
return d};
l.clear=function(){this.h.clear()};
l.key=function(a){return this.h.key(a)};function Cg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Za(Cg,Bg);function Dg(a,b){this.i=a;this.h=null;var c;if(c=sc)c=!(9<=Number(Fc));if(c){Eg||(Eg=new Mf);this.h=Eg.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Eg.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Za(Dg,Ag);var Fg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Eg=null;function Gg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Fg[b]})}
l=Dg.prototype;l.isAvailable=function(){return!!this.h};
l.set=function(a,b){this.h.setAttribute(Gg(a),b);Hg(this)};
l.get=function(a){a=this.h.getAttribute(Gg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeAttribute(Gg(a));Hg(this)};
l.Z=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Df;d.next=function(){if(b>=c.length)return Ef;var f=c[b++];if(a)return Ff(decodeURIComponent(f.nodeName.replace(/\./g,"%")).substr(1));f=f.nodeValue;if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return Ff(f)};
var e=d.next;d.la=function(){return Gf(e.call(d))};
return d};
l.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Hg(this)};
function Hg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ig(a,b){this.i=a;this.h=b+"::"}
Za(Ig,Ag);Ig.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Ig.prototype.get=function(a){return this.i.get(this.h+a)};
Ig.prototype.remove=function(a){this.i.remove(this.h+a)};
Ig.prototype.Z=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Df;d.next=function(){var f=b.next();if(f.done)return f;for(f=f.value;f.substr(0,c.h.length)!=c.h;){f=b.next();if(f.done)return f;f=f.value}return Ff(a?f.substr(c.h.length):c.i.get(f))};
var e=d.next;d.la=function(){return Gf(e.call(d))};
return d};function Jg(a){I.call(this,a)}
r(Jg,I);Jg.prototype.getKey=function(){return Zc(this,1)};
Jg.prototype.getValue=function(){return Zc(this,2===ed(this,Kg)?2:-1)};
Jg.prototype.setValue=function(a){return ad(this,2,Kg,a)};
var Kg=[2,3,4,5,6];function Lg(a){I.call(this,a)}
r(Lg,I);function Mg(a){I.call(this,a)}
r(Mg,I);function Ng(a){I.call(this,a)}
r(Ng,I);function Og(a){I.call(this,a,-1,Pg)}
r(Og,I);Og.prototype.getPlayerType=function(){return Zc(this,36)};
Og.prototype.setHomeGroupInfo=function(a){return H(this,81,a)};
var Pg=[9,66,24,32,86,100,101];function Qg(a){I.call(this,a,-1,Rg)}
r(Qg,I);var Rg=[15,26,28];function Sg(a){I.call(this,a)}
r(Sg,I);Sg.prototype.setToken=function(a){return F(this,2,a)};function Tg(a){I.call(this,a,-1,Ug)}
r(Tg,I);Tg.prototype.setSafetyMode=function(a){return F(this,5,a)};
var Ug=[12];function Vg(a){I.call(this,a,-1,Wg)}
r(Vg,I);var Wg=[12];function Xg(a){I.call(this,a,-1,Yg)}
r(Xg,I);function Zg(a){I.call(this,a)}
r(Zg,I);Zg.prototype.getKey=function(){return jd(this,1)};
Zg.prototype.getValue=function(){return jd(this,2)};
Zg.prototype.setValue=function(a){return F(this,2,a)};
var Yg=[4,5];function $g(a){I.call(this,a)}
r($g,I);function ah(a){I.call(this,a)}
r(ah,I);var bh=[2,3];function ch(a){I.call(this,a)}
r(ch,I);ch.prototype.getMessage=function(){return jd(this,1)};function dh(a){I.call(this,a)}
r(dh,I);function eh(a){I.call(this,a)}
r(eh,I);function fh(a){I.call(this,a,-1,gh)}
r(fh,I);var gh=[10,17];function hh(a){I.call(this,a)}
r(hh,I);function ih(a){I.call(this,a)}
r(ih,I);function jh(a){I.call(this,a)}
r(jh,I);var kh={Bh:0,mh:1,sh:2,th:4,yh:8,uh:16,vh:32,Ah:64,zh:128,oh:256,qh:512,xh:1024,ph:2048,rh:4096,nh:8192,wh:16384};function lh(a){I.call(this,a)}
r(lh,I);function mh(a,b){H(a,1,b)}
lh.prototype.X=function(a){F(this,2,a)};
function nh(a){I.call(this,a)}
r(nh,I);function oh(a,b){H(a,1,b)}
;function ph(a){I.call(this,a,-1,qh)}
r(ph,I);ph.prototype.X=function(a){F(this,1,a)};
function rh(a,b){H(a,2,b)}
var qh=[3];function sh(a){I.call(this,a)}
r(sh,I);sh.prototype.X=function(a){F(this,1,a)};function th(a){I.call(this,a)}
r(th,I);th.prototype.X=function(a){F(this,1,a)};function uh(a){I.call(this,a)}
r(uh,I);uh.prototype.X=function(a){F(this,1,a)};function vh(a){I.call(this,a)}
r(vh,I);function wh(a){I.call(this,a,-1,xh)}
r(wh,I);wh.prototype.getPlayerType=function(){var a=Zc(this,7);return null==a?0:a};
wh.prototype.setVideoId=function(a){return F(this,19,a)};
function yh(a,b){id(a,68,zh,b)}
function zh(a){I.call(this,a)}
r(zh,I);zh.prototype.getId=function(){return jd(this,2)};
var xh=[83,68];function Ah(a){I.call(this,a)}
r(Ah,I);function Bh(a){I.call(this,a)}
r(Bh,I);function Ch(a){I.call(this,a)}
r(Ch,I);function Dh(a){I.call(this,a,428)}
r(Dh,I);
var Eh=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,413,414,415,416,417,418,419,420,423,424,425,426,427,117];function Fh(a){I.call(this,a)}
r(Fh,I);function Gh(a){I.call(this,a)}
r(Gh,I);Gh.prototype.setVideoId=function(a){return ad(this,1,Hh,a)};
Gh.prototype.getPlaylistId=function(){return Zc(this,2===ed(this,Hh)?2:-1)};
var Hh=[1,2];function Ih(a){I.call(this,a,-1,Jh)}
r(Ih,I);var Jh=[3];function Kh(a){I.call(this,a,1)}
r(Kh,I);function Lh(a){I.call(this,a)}
r(Lh,I);var Mh;Mh=new function(a,b){this.h=a;this.fieldName=b;this.isRepeated=0;this.i=yd}(406606992,{Go:0},Lh);function Nh(){Lh.apply(this,arguments)}
r(Nh,Lh);oe(Nh);function Oh(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Ph,Qh,Rh,Sh=y.window,Th=(null===(Ph=null===Sh||void 0===Sh?void 0:Sh.yt)||void 0===Ph?void 0:Ph.config_)||(null===(Qh=null===Sh||void 0===Sh?void 0:Sh.ytcfg)||void 0===Qh?void 0:Qh.data_)||{},Uh=(null===(Rh=null===Sh||void 0===Sh?void 0:Sh.ytcfg)||void 0===Rh?void 0:Rh.obfuscatedData_)||[];function Vh(){Kh.apply(this,arguments)}
r(Vh,Kh);oe(Vh);var Wh=new Vh(Uh),Xh=Th.EXPERIMENT_FLAGS;if(!Xh||!Xh.jspb_i18n_extension){var Yh=new Nh;Mh.i(Wh,Yh)}z("yt.config_",Th,void 0);z("yt.configJspb_",Uh,void 0);function Zh(){Oh(Th,arguments)}
function B(a,b){return a in Th?Th[a]:b}
function $h(a){return B(a,void 0)}
function ai(){var a=Th.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=bi(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ci(a,b){a=bi(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function di(){return B("EXPERIMENTS_TOKEN","")}
function bi(a){var b=B("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:B("EXPERIMENT_FLAGS",{})[a]}
function ei(){var a=[],b=B("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=B("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var fi={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},gi={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var hi=0,ii=vc?"webkit":uc?"moz":sc?"ms":oc?"o":"";z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++hi},void 0);var ji=[];function ki(a){ji.forEach(function(b){return b(a)})}
function li(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){mi(b)}}:a}
function mi(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=B("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Zh("ERRORS",e));ki(a)}
function ni(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=B("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Zh("ERRORS",e))}
;var oi={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function pi(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in oi||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function qi(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
pi.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
pi.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
pi.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",nb,void 0);var ri=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",ri,void 0);
function si(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&sb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var ti=cb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function ui(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=si(a,b,c,d);if(e)return e;e=++ri.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new pi(h);if(!Nd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new pi(h);
h.currentTarget=a;return c.call(a,h)};
g=li(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ti()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d];return e}
function vi(a){a&&("string"==typeof a&&(a=[a]),eb(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ti()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
;var wi=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function xi(a,b){"function"===typeof a&&(a=li(a));return window.setTimeout(a,b)}
function yi(a){window.clearTimeout(a)}
;function zi(a){this.L=a;this.i=null;this.m=0;this.A=null;this.u=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.S=ui(window,"mousemove",Wa(this.Y,this));a=Wa(this.M,this);"function"===typeof a&&(a=li(a));this.fa=window.setInterval(a,25)}
Za(zi,J);zi.prototype.Y=function(a){void 0===a.h&&qi(a);var b=a.h;void 0===a.i&&qi(a);this.i=new Jd(b,a.i)};
zi.prototype.M=function(){if(this.i){var a=wi();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.L();this.u=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
zi.prototype.I=function(){window.clearInterval(this.fa);vi(this.S)};function Ai(){}
function Bi(a,b){return Ci(a,0,b)}
Ai.prototype.N=function(a,b){return Ci(a,1,b)};
function Di(a,b){Ci(a,2,b)}
function Ei(a){var b=A("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Fi(){Ai.apply(this,arguments)}
r(Fi,Ai);function Gi(){Fi.h||(Fi.h=new Fi);return Fi.h}
function Ci(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):xi(a,c||0)}
Fi.prototype.T=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=A("yt.scheduler.instance.cancelJob");b?b(a):yi(a)}};
Fi.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
Fi.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};var bf=Gi();var bj={};
function cj(a){var b=void 0===a?{}:a;a=void 0===b.hc?!1:b.hc;b=void 0===b.Vb?!0:b.Vb;if(null==A("_lact",window)){var c=parseInt(B("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&dj();ui(document,"keydown",dj);ui(document,"keyup",dj);ui(document,"mousedown",dj);ui(document,"mouseup",dj);a?ui(window,"touchmove",function(){ej("touchmove",200)},{passive:!0}):(ui(window,"resize",function(){ej("resize",200)}),b&&ui(window,"scroll",function(){ej("scroll",200)}));
new zi(function(){ej("mouse",100)});
ui(document,"touchstart",dj,{passive:!0});ui(document,"touchend",dj,{passive:!0})}}
function ej(a,b){bj[a]||(bj[a]=!0,bf.N(function(){dj();bj[a]=!1},b))}
function dj(){null==A("_lact",window)&&cj();var a=Date.now();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function fj(){var a=A("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function gj(){var a=hj;A("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function ij(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var jj=/^[\w.]*$/,kj={q:!0,search_query:!0};function lj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=mj(f[0]||""),h=mj(f[1]||"");g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(v){var k=v,m=f[0],n=String(lj);k.args=[{key:m,value:f[1],query:a,method:nj==n?"unchanged":n}];kj.hasOwnProperty(m)||ni(k)}}return c}
var nj=String(lj);function oj(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];eb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function pj(a){"?"==a.charAt(0)&&(a=a.substr(1));return lj(a,"&")}
function qj(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),pj(1<a.length?a[1]:a[0])):{}}
function rj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=pj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return hc(a,e)+d}
function sj(a){if(!b)var b=window.location.href;var c=cc(1,a),d=dc(a);c&&d?(a=a.match(ac),b=b.match(ac),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?dc(b)==d&&(Number(cc(4,b))||null)==(Number(cc(4,a))||null):!0;return a}
function mj(a){return a&&a.match(jj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function tj(a){var b=uj;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Yd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ua){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Cd:g;try{var h=g.history.length}catch(ua){h=0}e.u_his=h;var k;e.u_h=null==(k=Cd.screen)?void 0:k.height;var m;e.u_w=null==(m=Cd.screen)?void 0:m.width;var n;e.u_ah=null==(n=Cd.screen)?void 0:n.availHeight;var v;e.u_aw=
null==(v=Cd.screen)?void 0:v.availWidth;var x;e.u_cd=null==(x=Cd.screen)?void 0:x.colorDepth}catch(ua){}h=b.h;try{var u=h.screenX;var D=h.screenY}catch(ua){}try{var E=h.outerWidth;var K=h.outerHeight}catch(ua){}try{var O=h.innerWidth;var N=h.innerHeight}catch(ua){}try{var R=h.screenLeft;var W=h.screenTop}catch(ua){}try{O=h.innerWidth,N=h.innerHeight}catch(ua){}try{var pb=h.screen.availWidth;var ba=h.screen.availTop}catch(ua){}u=[R,W,u,D,pb,ba,E,K,O,N];try{var da=(b.h.top||window).document,ha="CSS1Compat"==
da.compatMode?da.documentElement:da.body;var G=(new Kd(ha.clientWidth,ha.clientHeight)).round()}catch(ua){G=new Kd(-12245933,-12245933)}da=G;G={};var Ba=void 0===Ba?y:Ba;ha=new df;Ba.SVGElement&&Ba.document.createElementNS&&ha.set(0);D=Sd();D["allow-top-navigation-by-user-activation"]&&ha.set(1);D["allow-popups-to-escape-sandbox"]&&ha.set(2);Ba.crypto&&Ba.crypto.subtle&&ha.set(3);Ba.TextDecoder&&Ba.TextEncoder&&ha.set(4);Ba=ef(ha);G.bc=Ba;G.bih=da.height;G.biw=da.width;G.brdim=u.join();b=b.i;b=(G.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,G.wgl=!!Cd.WebGLRenderingContext,G);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var uj=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return oj(tj(a))},void 0);Date.now();var vj="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function wj(){if(!vj)return null;var a=vj();return"open"in a?a:null}
function xj(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var yj={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},zj="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja("client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag jsfeat jsmode mods".split(" "))),Aj=!1;
function Bj(a,b){b=void 0===b?{}:b;var c=sj(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in yj){var f=B(yj[e]);!f||!c&&dc(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!dc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!dc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!dc(a))b["X-YouTube-Ad-Signals"]=oj(tj(void 0));return b}
function Cj(a){var b=window.location.search,c=dc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!sj(a)||(c=document.location.hostname);var d=bc(cc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=pj(b),f={};eb(zj,function(g){e[g]&&(f[g]=e[g])});
return rj(a,f||{},!1)}
function Dj(a,b){var c=b.format||"JSON";a=Ej(a,b);var d=Fj(a,b),e=!1,f=Gj(a,function(k){if(!e){e=!0;h&&yi(h);var m=xj(k),n=null,v=400<=k.status&&500>k.status,x=500<=k.status&&600>k.status;if(m||v||x)n=Hj(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(n&&n.return_code,10);break a;case "RAW":m=!0;break a}m=!!n}n=n||{};v=b.context||y;m?b.onSuccess&&b.onSuccess.call(v,k,n):b.onError&&b.onError.call(v,k,n);b.onFinish&&b.onFinish.call(v,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=xi(function(){e||(e=!0,f.abort(),yi(h),g.call(b.context||y,f))},b.timeout)}return f}
function Ej(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=B("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=rj(a,b||{},!0);return a}
function Fj(a,b){var c=B("XSRF_FIELD_NAME",void 0),d=B("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=$h("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||dc(a)&&!b.withCredentials&&dc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=pj(e),yb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):gc(e));f=e||f&&!ob(f);!Aj&&f&&"POST"!=
b.method&&(Aj=!0,mi(Error("AJAX request with postData should use POST")));return e}
function Hj(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,ni(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ij(a):null)e={},eb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Jj(g)})}d&&Kj(e);
return e}
function Kj(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Db("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=Ab();d=e?e.createHTML(d):d;a[c]=new Ub(d)}else Kj(a[b])}}
function Ij(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Jj(a){var b="";eb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Gj(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&li(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=wj();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=Cj(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Bj(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Lj=y.ytPubsubPubsubInstance||new L,Mj=y.ytPubsubPubsubSubscribedKeys||{},Nj=y.ytPubsubPubsubTopicToKeys||{},Oj=y.ytPubsubPubsubIsSynchronous||{};function Pj(a,b){var c=Qj();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Mj[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Oj[a]?f():xi(f,0)}catch(g){mi(g)}},void 0);
Mj[d]=!0;Nj[a]||(Nj[a]=[]);Nj[a].push(d);return d}return 0}
function Rj(a){var b=Qj();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),eb(a,function(c){b.unsubscribeByKey(c);delete Mj[c]}))}
function Sj(a,b){var c=Qj();c&&c.publish.apply(c,arguments)}
function Tj(a){var b=Qj();if(b)if(b.clear(a),a)Uj(a);else for(var c in Nj)Uj(c)}
function Qj(){return y.ytPubsubPubsubInstance}
function Uj(a){Nj[a]&&(a=Nj[a],eb(a,function(b){Mj[b]&&delete Mj[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.va;L.prototype.publish=L.prototype.ja;L.prototype.clear=L.prototype.clear;z("ytPubsubPubsubInstance",Lj,void 0);z("ytPubsubPubsubTopicToKeys",Nj,void 0);z("ytPubsubPubsubIsSynchronous",Oj,void 0);z("ytPubsubPubsubSubscribedKeys",Mj,void 0);function P(a){var b=Ha.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
r(P,Error);var Vj=window,Q=Vj.ytcsi&&Vj.ytcsi.now?Vj.ytcsi.now:Vj.performance&&Vj.performance.timing&&Vj.performance.now&&Vj.performance.timing.navigationStart?function(){return Vj.performance.timing.navigationStart+Vj.performance.now()}:function(){return(new Date).getTime()};var Wj=ci("initial_gel_batch_timeout",2E3),Xj=Math.pow(2,16)-1,Yj=void 0;function Zj(){this.j=this.h=this.i=0}
var ak=new Zj,bk=new Zj,ck=!0,dk=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",dk,void 0);var ek=y.ytLoggingTransportGELProtoQueue_||new Map;z("ytLoggingTransportGELProtoQueue_",ek,void 0);var fk=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",fk,void 0);var gk=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};z("ytLoggingTransportTokensToJspbCttTargetIds_",gk,void 0);
function hk(a,b){if("log_event"===a.endpoint){var c=ik(a),d=dk.get(c)||[];dk.set(c,d);d.push(a.payload);jk(b,d,c)}}
function kk(a,b){if("log_event"===a.endpoint){var c=ik(a,!0),d=ek.get(c)||[];ek.set(c,d);a=td(a.payload);d.push(a);jk(b,d,c,!0)}}
function jk(a,b,c,d){d=void 0===d?!1:d;a&&(Yj=new a);a=ci("tvhtml5_logging_max_batch")||ci("web_logging_max_batch")||100;var e=Q(),f=d?bk.j:ak.j;b.length>=a?lk({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=e-f&&(mk(d),d?bk.j=e:ak.j=e)}
function nk(a,b){if("log_event"===a.endpoint){var c=ik(a),d=new Map;d.set(c,[a.payload]);b&&(Yj=new b);return new ag(function(e){Yj&&Yj.isReady()?ok(d,e,{bypassNetworkless:!0},!0):e()})}}
function pk(a,b){if("log_event"===a.endpoint){var c=ik(a,!0),d=new Map;d.set(c,[td(a.payload)]);b&&(Yj=new b);return new ag(function(e){Yj&&Yj.isReady()?qk(d,e,{bypassNetworkless:!0},!0):e()})}}
function ik(a,b){var c="";if(a.wa)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Gh;c.videoId?d.setVideoId(c.videoId):c.playlistId&&ad(d,2,Hh,c.playlistId);gk[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),fk[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function lk(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new ag(function(d){c?(yi(bk.i),yi(bk.h),bk.h=0):(yi(ak.i),yi(ak.h),ak.h=0);if(Yj&&Yj.isReady())if(void 0!==b)if(c){var e=new Map,f=ek.get(b)||[];e.set(b,f);qk(e,d,a);ek.delete(b)}else e=new Map,f=dk.get(b)||[],e.set(b,f),ok(e,d,a),dk.delete(b);else c?(qk(ek,d,a),ek.clear()):(ok(dk,d,a),dk.clear());else mk(c),d()})}
function mk(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!ak.h||a&&!bk.h)){var b=xi(function(){lk({writeThenSend:!0},void 0,a)},6E4);
a?bk.h=b:ak.h=b}yi(a?bk.i:ak.i);b=B("LOGGING_BATCH_TIMEOUT",ci("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&ck&&(b=Wj);b=xi(function(){lk({writeThenSend:!0},void 0,a)},b);
a?bk.i=b:ak.i=b}
function ok(a,b,c,d){var e=Yj;c=void 0===c?{}:c;var f=Math.round(Q()),g=a.size;a=q(a);for(var h=a.next();!h.done;h=a.next()){var k=q(h.value);h=k.next().value;var m=k=k.next().value;k=wb({context:rk(e.config_||sk())});k.events=m;(m=fk[h])&&tk(k,h,m);delete fk[h];h="visitorOnlyApprovedKey"===h;uk(k,f,h);vk(c);wk(e,"log_event",k,xk(c,h,function(){g--;g||b()},function(){g--;
g||b()},d));
ck=!1}}
function qk(a,b,c,d){var e=Yj;c=void 0===c?{}:c;var f=Math.round(Q()),g=a.size;a=q(a);for(var h=a.next();!h.done;h=a.next()){var k=q(h.value);h=k.next().value;var m=k=k.next().value;k=new Ih;var n=yk(e.config_||sk());H(k,1,n);m=zk(m);for(n=0;n<m.length;n++)id(k,3,Dh,m[n]);(m=gk[h])&&Ak(k,h,m);delete gk[h];h="visitorOnlyApprovedKey"===h;Bk(k,f,h);vk(c);k=td(k);h=xk(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;wk(e,"log_event","",h);ck=!1}}
function vk(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function xk(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Cb:a,wa:b,Do:!!e,headers:{},postBodyFormat:"",postBody:""}}
function uk(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=B("EVENT_ID",void 0))&&(c=Ck(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Bk(a,b,c){F(a,2,b);if(!c&&(b=B("EVENT_ID",void 0))){c=Ck();var d=new Fh;F(d,1,b);F(d,2,c);H(a,5,d)}}
function Ck(){var a=B("BATCH_CLIENT_COUNTER",void 0)||0;a||(a=Math.floor(Math.random()*Xj/2));a++;a>Xj&&(a=1);Zh("BATCH_CLIENT_COUNTER",a);return a}
function tk(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Ak(a,b,c){if(Zc(c,1===ed(c,Hh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;H(a,4,c);a=fd(a,Vg,1)||new Vg;c=fd(a,Tg,3)||new Tg;var e=new Sg;e.setToken(b);F(e,1,d);id(c,12,Sg,e);H(a,3,c)}
function zk(a){for(var b=[],c=0;c<a.length;c++)try{var d=b,e=d.push;var f=String(a[c]),g=Dh;if(null==f||""==f)var h=new g;else{var k=JSON.parse(f);Array.isArray(k)||qd(Error("Expected to deserialize an Array but got "+Oa(k)+": "+k));sd=k;var m=new g(k);sd=null;h=m}e.call(d,h)}catch(n){mi(new P("Transport failed to deserialize "+String(a[c])))}return b}
;var Dk=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Dk,void 0);
function Ek(a,b,c,d){d=void 0===d?{}:d;if(M("lr_drop_other_and_business_payloads")){if(gi[a]||fi[a])return}else if(M("lr_drop_other_payloads")&&gi[a])return;var e={},f=Math.round(d.timestamp||Q());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=fj();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.W&&(a=e.context,b=d.W,b={index:Fk(b),groupKey:b},a.sequence=b,d.vb&&delete Dk[d.W]);(d.pc?nk:hk)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
wa:d.wa},c)}
function Fk(a){Dk[a]=a in Dk?Dk[a]+1:0;return Dk[a]}
;function Gk(a){var b=this;this.h=void 0;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.h=c})}
function Hk(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
function Ik(){var a=Hk();a=Object.keys(cf).indexOf(a);return-1===a?null:a}
;function Jk(a,b,c,d,e){je.set(""+a,b,{Qa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Kk(a){return je.get(""+a,void 0)}
function Lk(){if(!je.isEnabled())return!1;if(!je.isEmpty())return!0;je.set("TESTCOOKIESENABLED","1",{Qa:60});if("1"!==je.get("TESTCOOKIESENABLED"))return!1;je.remove("TESTCOOKIESENABLED");return!0}
;var Mk=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Mk,void 0);function Nk(){this.h=B("ALT_PREF_COOKIE_NAME","PREF");this.i=B("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Kk(this.h);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Mk[d]=c.toString())}}}
Nk.prototype.get=function(a,b){Ok(a);Pk(a);a=void 0!==Mk[a]?Mk[a].toString():null;return null!=a?a:b?b:""};
Nk.prototype.set=function(a,b){Ok(a);Pk(a);if(null==b)throw Error("ExpectedNotNull");Mk[a]=b.toString()};
function Qk(a){return!!((Rk("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
Nk.prototype.remove=function(a){Ok(a);Pk(a);delete Mk[a]};
Nk.prototype.clear=function(){for(var a in Mk)delete Mk[a]};
function Pk(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Ok(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Rk(a){a=void 0!==Mk[a]?Mk[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Na(Nk);var Sk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Tk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Uk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Vk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Wk(){var a=y.navigator;return a?a.connection:void 0}
function Xk(){var a=Wk();if(a){var b=Sk[a.type||"unknown"]||"CONN_UNKNOWN";a=Sk[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Yk(){var a=Wk();if(null!==a&&void 0!==a&&a.effectiveType)return Vk.hasOwnProperty(a.effectiveType)?Vk[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function Zk(){return"INNERTUBE_API_KEY"in Th&&"INNERTUBE_API_VERSION"in Th}
function sk(){return{innertubeApiKey:B("INNERTUBE_API_KEY",void 0),innertubeApiVersion:B("INNERTUBE_API_VERSION",void 0),cb:B("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),eb:B("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Xb:B("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),zb:B("INNERTUBE_CONTEXT_HL",void 0),yb:B("INNERTUBE_CONTEXT_GL",void 0),Yb:B("INNERTUBE_HOST_OVERRIDE",void 0)||"",ac:!!B("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Zb:!!B("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:B("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function rk(a){var b={client:{hl:a.zb,gl:a.yb,clientName:a.eb,clientVersion:a.innertubeContextClientVersion,configInfo:a.cb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=di();""!==c&&(b.client.experimentsToken=c);c=ei();0<c.length&&(b.request={internalExperimentFlags:c});$k(a,void 0,b);al(a,void 0,b);bl(void 0,b);cl(a,void 0,b);dl(void 0,b);B("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user=
{onBehalfOfUser:B("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=q(Object.entries(pj(B("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=q(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function yk(a){var b=new Vg,c=new Og;F(c,1,a.zb);F(c,2,a.yb);F(c,16,a.Xb);F(c,17,a.innertubeContextClientVersion);if(a.cb){var d=a.cb,e=new Lg;d.coldConfigData&&F(e,1,d.coldConfigData);d.appInstallData&&F(e,6,d.appInstallData);d.coldHashData&&F(e,3,d.coldHashData);d.hotHashData&&F(e,5,d.hotHashData);H(c,62,e)}(d=y.devicePixelRatio)&&1!=d&&F(c,65,d);d=di();""!==d&&F(c,54,d);d=ei();if(0<d.length){e=new Qg;for(var f=0;f<d.length;f++){var g=new Jg;F(g,1,d[f].key);g.setValue(d[f].value);id(e,15,Jg,g)}H(b,
5,e)}$k(a,c);al(a,c);bl(c);cl(a,c);dl(c);B("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Tg,F(a,3,B("DELEGATED_SESSION_ID")));a=q(Object.entries(pj(B("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=q(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?F(c,12,e):"cmodel"===d?F(c,13,e):"cbr"===d?F(c,87,e):"cbrver"===d?F(c,88,e):"cos"===d?F(c,18,e):"cosver"===d?F(c,19,e):"cplatform"===d&&F(c,42,e);H(b,1,c);return b}
function $k(a,b,c){a=a.eb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=fd(b,Mg,96)||new Mg;var d=Ik();null!==d&&F(c,3,d);H(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Hk())}
function al(a,b,c){a=a.eb;if(("WEB_REMIX"===a||76===a)&&!M("music_web_display_mode_killswitch"))if(b){var d;c=null!=(d=fd(b,Ng,70))?d:new Ng;d=Ik();null!==d&&F(c,10,d);H(b,70,c)}else if(c){var e;c.client.Bb=null!=(e=c.client.Bb)?e:{};c.client.Bb.webDisplayMode=Hk()}}
function bl(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?F(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function cl(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=fd(b,Lg,62))?d:new Lg;F(c,6,a.appInstallData);H(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function dl(a,b){var c=Xk();c&&(a?F(a,61,Tk[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=Yk())&&(a?F(a,94,Uk[c]):b&&(b.client.effectiveConnectionType=c))}
function el(a,b,c){c=void 0===c?{}:c;var d={};M("enable_web_eom_visitor_data")&&B("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":B("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||B("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Bo||B("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().Ao:b=ne([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=B("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=B("DELEGATED_SESSION_ID")));return d}
;function fl(a){a=Object.assign({},a);delete a.Authorization;var b=ne();if(b){var c=new wf;c.update(B("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Lc(c.digest(),3)}return a}
;function gl(a){var b=new Cg;(b=b.isAvailable()?a?new Ig(b,a):b:null)||(a=new Dg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new yg(a):null;this.i=document.domain||window.location.hostname}
gl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Sf(b))}catch(f){return}else e=escape(b);Jk(a,e,c,this.i)};
gl.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Kk(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
gl.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;je.remove(""+a,"/",void 0===b?"youtube.com":b)};var hl;function il(){hl||(hl=new gl("yt.innertube"));return hl}
function jl(a,b,c,d){if(d)return null;d=il().get("nextId",!0)||1;var e=il().get("requests",!0)||{};e[d]={method:a,request:b,authState:fl(c),requestTime:Math.round(Q())};il().set("nextId",d+1,86400,!0);il().set("requests",e,86400,!0);return d}
function kl(a){var b=il().get("requests",!0)||{};delete b[a];il().set("requests",b,86400,!0)}
function ll(a){var b=il().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Q())-d.requestTime)){var e=d.authState,f=fl(el(!1));sb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Q())),wk(a,d.method,e,{}));delete b[c]}}il().set("requests",b,86400,!0)}}
;var ml=Gc||Hc;function nl(a){var b=Rb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var ol=function(){var a;return function(){a||(a=new gl("ytidb"));return a}}();
function pl(){var a;return null===(a=ol())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var ql=[],rl,sl=!1;function tl(){var a={};for(rl=new ul(void 0===a.handleError?vl:a.handleError,void 0===a.logEvent?wl:a.logEvent);0<ql.length;)switch(a=ql.shift(),a.type){case "ERROR":rl.handleError(a.payload);break;case "EVENT":rl.logEvent(a.eventType,a.payload)}}
function xl(a){sl||(rl?rl.handleError(a):(ql.push({type:"ERROR",payload:a}),10<ql.length&&ql.shift()))}
function yl(a,b){sl||(rl?rl.logEvent(a,b):(ql.push({type:"EVENT",eventType:a,payload:b}),10<ql.length&&ql.shift()))}
;function zl(){try{return Al(),!0}catch(a){return!1}}
function Al(a){if(void 0!==B("DATASYNC_ID",void 0))return B("DATASYNC_ID",void 0);throw new P("Datasync ID not set",void 0===a?"unknown":a);}
;function Bl(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Cl(a){return a.substr(0,a.indexOf(":"))||a}
;var Dl={},El=(Dl.AUTH_INVALID="No user identifier specified.",Dl.EXPLICIT_ABORT="Transaction was explicitly aborted.",Dl.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Dl.MISSING_INDEX="Index not created.",Dl.MISSING_OBJECT_STORES="Object stores not created.",Dl.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Dl.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Dl.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Dl.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Dl.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Dl.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Dl.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Dl),Fl={},Gl=(Fl.AUTH_INVALID="ERROR",Fl.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Fl.EXPLICIT_ABORT="IGNORED",Fl.IDB_NOT_SUPPORTED="ERROR",Fl.MISSING_INDEX=
"WARNING",Fl.MISSING_OBJECT_STORES="ERROR",Fl.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Fl.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Fl.QUOTA_EXCEEDED="WARNING",Fl.QUOTA_MAYBE_EXCEEDED="WARNING",Fl.UNKNOWN_ABORT="WARNING",Fl.INCOMPATIBLE_DB_VERSION="WARNING",Fl),Hl={},Il=(Hl.AUTH_INVALID=!1,Hl.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Hl.EXPLICIT_ABORT=!1,Hl.IDB_NOT_SUPPORTED=!1,Hl.MISSING_INDEX=!1,Hl.MISSING_OBJECT_STORES=!1,Hl.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Hl.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Hl.QUOTA_EXCEEDED=!1,Hl.QUOTA_MAYBE_EXCEEDED=!0,Hl.UNKNOWN_ABORT=!0,Hl.INCOMPATIBLE_DB_VERSION=!1,Hl);function Jl(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?El[a]:c;d=void 0===d?Gl[a]:d;e=void 0===e?Il[a]:e;P.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Jl.prototype)}
r(Jl,P);function Kl(a,b){Jl.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},El.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Kl.prototype)}
r(Kl,Jl);function Ll(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Ll.prototype)}
r(Ll,Error);var Ml=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Nl(a,b,c,d){b=Cl(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Jl)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Jl("QUOTA_EXCEEDED",a);if(Ic&&"UnknownError"===e.name)return new Jl("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Ll)return new Jl("MISSING_INDEX",Object.assign(Object.assign({},a),{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Ml.some(function(f){return e.message.includes(f)}))return new Jl("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Jl("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign(Object.assign({},a),{name:"IdbError",Db:e.name})];e.level="WARNING";return e}
function Ol(a,b,c){var d=pl();return new Jl("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null===d||void 0===d?void 0:d.hasSucceededOnce}})}
;function Pl(a){if(!a)throw Error();throw a;}
function Ql(a){return a}
function Rl(a){this.h=a}
function Sl(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=q(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=q(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Sl.all=function(a){return new Sl(new Rl(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={na:0};f.na<a.length;f={na:f.na},++f.na)Tl(Sl.resolve(a[f.na]).then(function(g){return function(h){d[g.na]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
Sl.resolve=function(a){return new Sl(new Rl(function(b,c){a instanceof Sl?a.then(b,c):b(a)}))};
Sl.reject=function(a){return new Sl(new Rl(function(b,c){c(a)}))};
Sl.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Ql,e=null!==b&&void 0!==b?b:Pl;return new Sl(new Rl(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Ul(c,c,d,f,g)}),c.onRejected.push(function(){Vl(c,c,e,f,g)})):"FULFILLED"===c.state.status?Ul(c,c,d,f,g):"REJECTED"===c.state.status&&Vl(c,c,e,f,g)}))};
function Tl(a,b){a.then(void 0,b)}
function Ul(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Sl?Wl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Vl(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Sl?Wl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Wl(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Sl?Wl(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Xl(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Yl(a){return new Promise(function(b,c){Xl(a,b,c)})}
function Zl(a){return new Sl(new Rl(function(b,c){Xl(a,b,c)}))}
;function $l(a,b){return new Sl(new Rl(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function am(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(Q());this.i=!1}
l=am.prototype;l.add=function(a,b,c){return bm(this,[a],{mode:"readwrite",O:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return bm(this,[a],{mode:"readwrite",O:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return bm(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).count(b)})};
function cm(a,b,c){a=a.h.createObjectStore(b,c);return new dm(a)}
l.delete=function(a,b){return bm(this,[a],{mode:"readwrite",O:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return bm(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).get(b)})};
function em(a,b){return bm(a,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(c){c=c.objectStore("LogsRequestsStore");return Zl(c.h.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function bm(a,b,c,d){var e,f,g,h,k,m,n,v,x,u,D,E;return w(function(K){switch(K.h){case 1:var O={mode:"readonly",O:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);e=O;a.transactionCount++;f=e.O?3:1;g=0;case 2:if(h){K.s(3);break}g++;k=Math.round(Q());va(K,4);m=a.h.transaction(b,e.mode);O=new fm(m);O=gm(O,d);return t(K,O,6);case 6:return n=K.i,v=Math.round(Q()),hm(a,k,v,g,void 0,b.join(),e),K.return(n);case 4:x=xa(K);u=Math.round(Q());D=Nl(x,a.h.name,b.join(),a.h.version);
if((E=D instanceof Jl&&!D.h)||g>=f)hm(a,k,u,g,D,b.join(),e),h=D;K.s(2);break;case 3:return K.return(Promise.reject(h))}})}
function hm(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Jl&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&yl("QUOTA_EXCEEDED",{dbName:Cl(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Jl&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),yl("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),im(a,!1,d,f,b,g.tag),xl(e)):im(a,!0,d,f,b,g.tag)}
function im(a,b,c,d,e,f){yl("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.h.name};
function dm(a){this.h=a}
l=dm.prototype;l.add=function(a,b){return Zl(this.h.add(a,b))};
l.autoIncrement=function(){return this.h.autoIncrement};
l.clear=function(){return Zl(this.h.clear()).then(function(){})};
l.count=function(a){return Zl(this.h.count(a))};
function jm(a,b){return km(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?jm(this,a):Zl(this.h.delete(a))};
l.get=function(a){return Zl(this.h.get(a))};
l.index=function(a){try{return new lm(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Ll(a,this.h.name);throw b;}};
l.getName=function(){return this.h.name};
l.keyPath=function(){return this.h.keyPath};
function km(a,b,c){a=a.h.openCursor(b.query,b.direction);return mm(a).then(function(d){return $l(d,c)})}
function fm(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Jl;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function gm(a,b){var c=new Promise(function(d,e){try{Tl(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return q(d).next().value})}
fm.prototype.abort=function(){this.h.abort();this.i=!0;throw new Jl("EXPLICIT_ABORT");};
fm.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new dm(a),this.j.set(a,b));return b};
function lm(a){this.h=a}
l=lm.prototype;l.count=function(a){return Zl(this.h.count(a))};
l.delete=function(a){return nm(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Zl(this.h.get(a))};
l.getKey=function(a){return Zl(this.h.getKey(a))};
l.keyPath=function(){return this.h.keyPath};
l.unique=function(){return this.h.unique};
function nm(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return mm(a).then(function(d){return $l(d,c)})}
function om(a,b){this.request=a;this.cursor=b}
function mm(a){return Zl(a).then(function(b){return b?new om(a,b):null})}
l=om.prototype;l.advance=function(a){this.cursor.advance(a);return mm(this.request)};
l.continue=function(a){this.cursor.continue(a);return mm(this.request)};
l.delete=function(){return Zl(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Zl(this.cursor.update(a))};function pm(a,b,c){return new Promise(function(d,e){function f(){x||(x=new am(g.result,{closed:v}));return x}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.Bc,n=c.upgrade,v=c.closed,x;g.addEventListener("upgradeneeded",function(u){try{if(null===u.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");u.dataLoss&&"none"!==u.dataLoss&&yl("IDB_DATA_CORRUPTED",{reason:u.dataLossMessage||"unknown reason",dbName:Cl(a)});var D=f(),E=new fm(g.transaction);
n&&n(D,function(K){return u.oldVersion<K&&u.newVersion>=K},E);
E.done.catch(function(K){e(K)})}catch(K){e(K)}});
g.addEventListener("success",function(){var u=g.result;k&&u.addEventListener("versionchange",function(){k(f())});
u.addEventListener("close",function(){yl("IDB_UNEXPECTEDLY_CLOSED",{dbName:Cl(a),dbVersion:u.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function qm(a,b,c){c=void 0===c?{}:c;return pm(a,b,c)}
function rm(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.h)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),t(g,Yl(c),4);
if(2!=g.h)return wa(g,0);f=xa(g);throw Nl(f,a,"",-1);})}
;function sm(a){return new Promise(function(b){Di(function(){b()},a)})}
function tm(a,b){this.name=a;this.options=b;this.l=!0;this.m=this.o=0;this.i=500}
tm.prototype.j=function(a,b,c){c=void 0===c?{}:c;return qm(a,b,c)};
tm.prototype.delete=function(a){a=void 0===a?{}:a;return rm(this.name,a)};
function um(a,b){return new Jl("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function vm(a,b){if(!b)throw Ol("openWithToken",Cl(a.name));return a.open()}
tm.prototype.open=function(){function a(){var f,g,h,k,m,n,v,x,u,D;return w(function(E){switch(E.h){case 1:return h=null!==(f=Error().stack)&&void 0!==f?f:"",va(E,2),t(E,c.j(c.name,c.options.version,e),4);case 4:k=E.i;for(var K=c.options,O=[],N=q(Object.keys(K.ya)),R=N.next();!R.done;R=N.next()){R=R.value;var W=K.ya[R],pb=void 0===W.kc?Number.MAX_VALUE:W.kc;!(k.h.version>=W.Xa)||k.h.version>=pb||k.h.objectStoreNames.contains(R)||O.push(R)}m=O;if(0===m.length){E.s(5);break}n=Object.keys(c.options.ya);
v=k.objectStoreNames();if(c.m<ci("ytidb_reopen_db_retries",0))return c.m++,k.close(),xl(new Jl("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:n,foundObjectStores:v})),E.return(a());if(!(c.o<ci("ytidb_remake_db_retries",1))){E.s(6);break}c.o++;if(!M("ytidb_remake_db_enable_backoff_delay")){E.s(7);break}return t(E,sm(c.i),8);case 8:c.i*=2;case 7:return t(E,c.delete(),9);case 9:return xl(new Jl("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:n,foundObjectStores:v})),
E.return(a());case 6:throw new Kl(v,n);case 5:return E.return(k);case 2:x=xa(E);if(x instanceof DOMException?"VersionError"!==x.name:"DOMError"in self&&x instanceof DOMError?"VersionError"!==x.name:!(x instanceof Object&&"message"in x)||"An attempt was made to open a database using a lower version than the existing version."!==x.message){E.s(10);break}return t(E,c.j(c.name,void 0,Object.assign(Object.assign({},e),{upgrade:void 0})),11);case 11:u=E.i;D=u.h.version;if(void 0!==c.options.version&&D>
c.options.version+1)throw u.close(),c.l=!1,um(c,D);return E.return(u);case 10:throw b(),x instanceof Error&&!M("ytidb_async_stack_killswitch")&&(x.stack=x.stack+"\n"+h.substring(h.indexOf("\n")+1)),Nl(x,c.name,"",null!==(g=c.options.version)&&void 0!==g?g:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw um(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Bc:b,upgrade:this.options.upgrade};return this.h=d=a()};var wm=new tm("YtIdbMeta",{ya:{databases:{Xa:1}},upgrade:function(a,b){b(1)&&cm(a,"databases",{keyPath:"actualName"})}});
function xm(a,b){var c;return w(function(d){if(1==d.h)return t(d,vm(wm,b),2);c=d.i;return d.return(bm(c,["databases"],{O:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Zl(f.h.put(a,void 0)).then(function(){})})}))})}
function ym(a,b){var c;return w(function(d){if(1==d.h)return a?t(d,vm(wm,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function zm(a,b){var c,d;return w(function(e){return 1==e.h?(c=[],t(e,vm(wm,b),2)):3!=e.h?(d=e.i,t(e,bm(d,["databases"],{O:!0,mode:"readonly"},function(f){c.length=0;return km(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Am(a){return zm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function Bm(a,b,c){return zm(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Cm(a){var b,c;return w(function(d){if(1==d.h)return b=Al("YtIdbMeta hasAnyMeta other"),t(d,zm(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Dm,Em=new function(){}(new function(){});
function Fm(){var a,b,c;return w(function(d){switch(d.h){case 1:a=pl();if(null===a||void 0===a?0:a.hasSucceededOnce)return d.return(!0);var e;if(e=ml)e=/WebKit\/([0-9]+)/.exec(Rb()),e=!!(e&&600<=parseInt(e[1],10));e&&(e=/WebKit\/([0-9]+)/.exec(Rb()),e=!(e&&602<=parseInt(e[1],10)));if(e||tc)return d.return(!1);try{if(b=self,!(b.indexedDB&&b.IDBIndex&&b.IDBKeyRange&&b.IDBObjectStore))return d.return(!1)}catch(f){return d.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return d.return(!1);
va(d,2);c={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return t(d,xm(c,Em),4);case 4:return t(d,ym("yt-idb-test-do-not-use",Em),5);case 5:return d.return(!0);case 2:return xa(d),d.return(!1)}})}
function Gm(){if(void 0!==Dm)return Dm;sl=!0;return Dm=Fm().then(function(a){sl=!1;var b,c;null!==(b=ol())&&void 0!==b&&b.h&&(b=pl(),b={hasSucceededOnce:(null===b||void 0===b?void 0:b.hasSucceededOnce)||a},null===(c=ol())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0));return a})}
function Hm(){return A("ytglobal.idbToken_")||void 0}
function Im(){var a=Hm();return a?Promise.resolve(a):Gm().then(function(b){(b=b?Em:void 0)&&z("ytglobal.idbToken_",b,void 0);return b})}
;var Jm=0;function Km(a,b){Jm||(Jm=bf.N(function(){var c,d,e,f,g;return w(function(h){switch(h.h){case 1:return t(h,Im(),2);case 2:c=h.i;if(!c)return h.return();d=!0;va(h,3);return t(h,Bm(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.s(6);break}f=e[0];return t(h,rm(f.actualName),7);case 7:return t(h,ym(f.actualName,c),6);case 6:wa(h,4);break;case 3:g=xa(h),xl(g),d=!1;case 4:bf.T(Jm),Jm=0,d&&Km(a,b),h.h=0}})}))}
function Lm(){var a;return w(function(b){return 1==b.h?t(b,Im(),2):(a=b.i)?b.return(Cm(a)):b.return(!1)})}
new Ad;function Mm(a){if(!zl())throw a=new Jl("AUTH_INVALID",{dbName:a}),xl(a),a;var b=Al();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Nm(a,b,c,d){var e,f,g,h,k,m;return w(function(n){switch(n.h){case 1:return f=null!==(e=Error().stack)&&void 0!==e?e:"",t(n,Im(),2);case 2:g=n.i;if(!g)throw h=Ol("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),xl(h),h;Bl(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Mm(a);va(n,3);return t(n,xm(k,g),5);case 5:return t(n,qm(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return m=xa(n),va(n,7),t(n,ym(k.actualName,
g),9);case 9:wa(n,8);break;case 7:xa(n);case 8:throw m;}})}
function Om(a,b,c){c=void 0===c?{}:c;return Nm(a,b,!1,c)}
function Pm(a,b,c){c=void 0===c?{}:c;return Nm(a,b,!0,c)}
function Qm(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.h)return t(e,Im(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Bl(a);d=Mm(a);return t(e,rm(d.actualName,b),3)}return t(e,ym(d.actualName,c),0)})}
function Rm(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.h?t(e,rm(d.actualName,b),2):t(e,ym(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Sm(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.h)return t(d,Im(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Bl("LogsDatabaseV2");return t(d,Am(b),3)}c=d.i;return t(d,Rm(c,a,b),0)})}
function Tm(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.h)return t(d,Im(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Bl(a);return t(d,rm(a,b),3)}return t(d,ym(a,c),0)})}
;function Um(a){var b,c,d,e,f,g,h,k;this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.ra=function(){};
this.now=Date.now;this.xa=!1;this.Kb=null!==(b=a.Kb)&&void 0!==b?b:100;this.Ib=null!==(c=a.Ib)&&void 0!==c?c:1;this.Gb=null!==(d=a.Gb)&&void 0!==d?d:2592E6;this.Eb=null!==(e=a.Eb)&&void 0!==e?e:12E4;this.Hb=null!==(f=a.Hb)&&void 0!==f?f:5E3;this.v=null!==(g=a.v)&&void 0!==g?g:void 0;this.La=!!a.La;this.Ka=null!==(h=a.Ka)&&void 0!==h?h:.1;this.Sa=null!==(k=a.Sa)&&void 0!==k?k:10;a.handleError&&(this.handleError=a.handleError);a.ra&&(this.ra=a.ra);a.xa&&(this.xa=a.xa);this.D=a.D;this.U=a.U;this.K=a.K;
this.J=a.J;this.da=a.da;this.jb=a.jb;this.ib=a.ib;this.v&&(!this.D||this.D("networkless_logging"))&&Vm(this)}
function Vm(a){a.v&&!a.xa&&(a.h=!0,a.La&&Math.random()<=a.Ka&&a.K.Rb(a.v),Wm(a),a.J.H()&&a.Ba(),a.J.V(a.jb,a.Ba.bind(a)),a.J.V(a.ib,a.ob.bind(a)))}
l=Um.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.K.set(d,this.v).then(function(e){d.id=e;c.J.H()&&Xm(c,d)}).catch(function(e){Xm(c,d);
Ym(c,e)})}else this.da(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.v&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.D&&this.D("nwl_skip_retry")&&(e.skipRetry=c);if(this.J.H()||this.D&&this.D("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(k){if(1==k.h)return t(k,d.K.set(e,d.v).catch(function(m){Ym(d,m)}),2);
f(g,h);k.h=0})}}this.da(a,b,e.skipRetry)}else this.K.set(e,this.v).catch(function(g){d.da(a,b,e.skipRetry);
Ym(d,g)})}else this.da(a,b,this.D&&this.D("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.K.qa(d.id,c.v):e=!0;c.J.ca&&c.D&&c.D("vss_network_hint")&&c.J.ca(!0);f(g,h)};
this.da(d.url,d.options);this.K.set(d,this.v).then(function(g){d.id=g;e&&c.K.qa(d.id,c.v)}).catch(function(g){Ym(c,g)})}else this.da(a,b)};
l.Ba=function(){var a=this;if(!this.v)throw Ol("throttleSend");this.i||(this.i=this.U.N(function(){var b;return w(function(c){if(1==c.h)return t(c,a.K.xb("NEW",a.v),2);if(3!=c.h)return b=c.i,b?t(c,Xm(a,b),3):(a.ob(),c.return());a.i&&(a.i=0,a.Ba());c.h=0})},this.Kb))};
l.ob=function(){this.U.T(this.i);this.i=0};
function Xm(a,b){var c,d;return w(function(e){switch(e.h){case 1:if(!a.v)throw c=Ol("immediateSend"),c;if(void 0===b.id){e.s(2);break}return t(e,a.K.cc(b.id,a.v),3);case 3:(d=e.i)?b=d:a.ra(Error("The request cannot be found in the database."));case 2:if(Zm(a,b,a.Gb)){e.s(4);break}a.ra(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.s(5);break}return t(e,a.K.qa(b.id,a.v),5);case 5:return e.return();case 4:b.skipRetry||(b=$m(a,b));if(!b){e.s(0);break}if(!b.skipRetry||
void 0===b.id){e.s(8);break}return t(e,a.K.qa(b.id,a.v),8);case 8:a.da(b.url,b.options,!!b.skipRetry),e.h=0}})}
function $m(a,b){if(!a.v)throw Ol("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g;return w(function(h){switch(h.h){case 1:g=an(f);if(!(a.D&&a.D("nwl_consider_error_code")&&g||a.D&&!a.D("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Sa)){h.s(2);break}if(!a.J.ea){h.s(3);break}return t(h,a.J.ea(),3);case 3:if(a.J.H()){h.s(2);break}c(e,f);if(!a.D||!a.D("nwl_consider_error_code")||void 0===(null===b||void 0===b?void 0:b.id)){h.s(6);break}return t(h,a.K.kb(b.id,a.v,!1),6);case 6:return h.return();case 2:if(a.D&&a.D("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Sa)return h.return();a.potentialEsfErrorCounter++;if(void 0===(null===b||void 0===b?void 0:b.id)){h.s(8);break}return b.sendCount<a.Ib?t(h,a.K.kb(b.id,a.v),12):t(h,a.K.qa(b.id,a.v),8);case 12:a.U.N(function(){a.J.H()&&a.Ba()},a.Hb);
case 8:c(e,f),h.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){return w(function(g){if(1==g.h)return void 0===(null===b||void 0===b?void 0:b.id)?g.s(2):t(g,a.K.qa(b.id,a.v),2);a.J.ca&&a.D&&a.D("vss_network_hint")&&a.J.ca(!0);d(e,f);g.h=0})};
return b}
function Zm(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Wm(a){if(!a.v)throw Ol("retryQueuedRequests");a.K.xb("QUEUED",a.v).then(function(b){b&&!Zm(a,b,a.Eb)?a.U.N(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.s(2):t(c,a.K.kb(b.id,a.v),2);Wm(a);c.h=0})}):a.J.H()&&a.Ba()})}
function Ym(a,b){a.Mb&&!a.J.H()?a.Mb(b):a.handleError(b)}
function an(a){var b;return(a=null===(b=null===a||void 0===a?void 0:a.error)||void 0===b?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function bn(a,b){this.version=a;this.args=b}
;function cn(a,b){this.topic=a;this.h=b}
cn.prototype.toString=function(){return this.topic};var dn=A("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.va;L.prototype.publish=L.prototype.ja;L.prototype.clear=L.prototype.clear;z("ytPubsub2Pubsub2Instance",dn,void 0);var en=A("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",en,void 0);var fn=A("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",fn,void 0);var gn=A("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",gn,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function hn(a,b){var c=jn();c&&c.publish.call(c,a.toString(),a,b)}
function kn(a){var b=ln,c=jn();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(en[d])try{if(f&&b instanceof cn&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ia){var m=new h;h.ia=m.version}var n=h.ia}catch(K){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var v=n.construct;
var x=k.args,u=x.length;if(0<u){var D=Array(u);for(k=0;k<u;k++)D[k]=x[k];var E=D}else E=[];f=v.call(n,h,E)}catch(K){throw K.message="yt.pubsub2.Data.deserialize(): "+K.message,K;}}catch(K){throw K.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+K.message,K;}a.call(window,f)}catch(K){mi(K)}},gn[b.toString()]?A("yt.scheduler.instance")?bf.N(g):xi(g,0):g())});
en[d]=!0;fn[b.toString()]||(fn[b.toString()]=[]);fn[b.toString()].push(d);return d}
function mn(){var a=nn,b=kn(function(c){a.apply(void 0,arguments);on(b)});
return b}
function on(a){var b=jn();b&&("number"===typeof a&&(a=[a]),eb(a,function(c){b.unsubscribeByKey(c);delete en[c]}))}
function jn(){return A("ytPubsub2Pubsub2Instance")}
;function pn(a,b){tm.call(this,a,b);this.options=b;Bl(a)}
r(pn,tm);function qn(a,b){var c;return function(){c||(c=new pn(a,b));return c}}
pn.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.lb?Pm:Om)(a,b,Object.assign({},c))};
pn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.lb?Tm:Qm)(this.name,a)};
function rn(a,b){return qn(a,b)}
;var sn;
function tn(){if(sn)return sn();var a={};sn=rn("LogsDatabaseV2",{ya:(a.LogsRequestsStore={Xa:2},a),lb:!1,upgrade:function(b,c,d){c(2)&&cm(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return sn()}
;function un(a){return vm(tn(),a)}
function vn(a,b){var c,d,e,f;return w(function(g){if(1==g.h)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},t(g,un(b),2);if(3!=g.h)return d=g.i,e=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:B("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),t(g,em(d,e),3);f=g.i;c.Cc=Q();wn(c);return g.return(f)})}
function xn(a,b){var c,d,e,f,g,h,k;return w(function(m){if(1==m.h)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},t(m,un(b),2);if(3!=m.h)return d=m.i,e=B("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Q()],h=IDBKeyRange.bound(f,g),k=void 0,t(m,bm(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(n){return nm(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(v){v.getValue()&&(k=v.getValue(),"NEW"===a&&(k.status="QUEUED",
v.update(k)))})}),3);
c.Cc=Q();wn(c);return m.return(k)})}
function yn(a,b){var c;return w(function(d){if(1==d.h)return t(d,un(b),2);c=d.i;return d.return(bm(c,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Zl(f.h.put(g,void 0)).then(function(){return g})})}))})}
function zn(a,b,c){c=void 0===c?!0:c;var d;return w(function(e){if(1==e.h)return t(e,un(b),2);d=e.i;return e.return(bm(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Zl(g.h.put(h,void 0)).then(function(){return h})):Sl.resolve(void 0)})}))})}
function An(a,b){var c;return w(function(d){if(1==d.h)return t(d,un(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Bn(a){var b,c;return w(function(d){if(1==d.h)return t(d,un(a),2);b=d.i;c=Q()-2592E6;return t(d,bm(b,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){return km(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Cn(){return w(function(a){return t(a,Sm(),0)})}
function wn(a){M("nwl_csi_killswitch")||.01>=Math.random()&&hn("nwl_transaction_latency_payload",a)}
;var Dn={},En=rn("ServiceWorkerLogsDatabase",{ya:(Dn.SWHealthLog={Xa:1},Dn),lb:!0,upgrade:function(a,b){b(1)&&cm(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Fn(a){return vm(En(),a)}
function Gn(a){var b,c;return w(function(d){if(1==d.h)return t(d,Fn(a),2);b=d.i;c=Q()-2592E6;return t(d,bm(b,["SWHealthLog"],{mode:"readwrite",O:!0},function(e){return km(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Hn(a){var b;return w(function(c){if(1==c.h)return t(c,Fn(a),2);b=c.i;return t(c,b.clear("SWHealthLog"),0)})}
;var In={},Jn=0;
function Kn(a){var b=void 0===b?"":b;if(a)if(b)Gj(a,void 0,"POST",b,void 0);else if(B("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Gj(a,void 0,"GET","",void 0);else{b:{try{var c=new bb({url:a});if(c.j&&c.i||c.l){var d=bc(cc(5,a)),e;if(!(e=!d||!d.endsWith("/aclk"))){var f=a.search(jc),g=ic(a,0,"ri",f);if(0>g)var h=null;else{var k=a.indexOf("&",g);if(0>k||k>f)k=f;g+=3;h=decodeURIComponent(a.substr(g,k-g).replace(/\+/g," "))}e="1"!==h}var m=!e;break b}}catch(v){}m=!1}if(m){b:{try{if(window.navigator&&window.navigator.sendBeacon&&
window.navigator.sendBeacon(a,"")){var n=!0;break b}}catch(v){}n=!1}b=n?!0:!1}else b=!1;b||Ln(a)}}
function Ln(a){var b=new Image,c=""+Jn++;In[c]=b;b.onload=b.onerror=function(){delete In[c]};
b.src=a}
;function Mn(){this.h=new Map;this.i=!1}
function Nn(){if(!Mn.h){var a=A("yt.networkRequestMonitor.instance")||new Mn;z("yt.networkRequestMonitor.instance",a,void 0);Mn.h=a}return Mn.h}
Mn.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Mn.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Mn.prototype.removeParams=function(a){return a.split("?")[0]};
Mn.prototype.removeParams=Mn.prototype.removeParams;Mn.prototype.isEndpointCFR=Mn.prototype.isEndpointCFR;Mn.prototype.requestComplete=Mn.prototype.requestComplete;Mn.getInstance=Nn;var On;function Pn(){On||(On=new gl("yt.offline"));return On}
function Qn(a){if(M("offline_error_handling")){var b=Pn().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Pn().set("errors",b,2592E3,!0)}}
function Rn(){if(M("offline_error_handling")){var a=Pn().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new P(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;mi(c)}Pn().set("errors",{},2592E3,!0)}}}
;var io=ci("network_polling_interval",3E4);function Ho(){Ve.call(this);var a=this;this.M=0;this.S=this.m=!1;this.j=this.bb();M("use_shared_nsm")?(this.i=af(),M("use_shared_nsm_and_keep_yt_online_updated")&&(this.i.V("networkstatus-online",function(){a.j=!0}),this.i.V("networkstatus-offline",function(){a.j=!1}))):(Io(this),Jo(this))}
r(Ho,Ve);function Ko(){if(!Ho.h){var a=A("yt.networkStatusManager.instance")||new Ho;z("yt.networkStatusManager.instance",a,void 0);Ho.h=a}return Ho.h}
l=Ho.prototype;l.H=function(){var a;return M("use_shared_nsm")&&this.i?null===(a=this.i)||void 0===a?void 0:a.H():this.j};
l.ca=function(a){var b;M("use_shared_nsm")&&this.i?null===(b=this.i)||void 0===b?void 0:b.i=a:a!==this.j&&(this.j=a)};
l.dc=function(a){!M("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.M||Lo(this))};
l.bb=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Ub=function(){this.S=!0};
l.V=function(a,b){return M("use_shared_nsm")&&this.i?this.i.V(a,b):Ve.prototype.V.call(this,a,b)};
function Jo(a){window.addEventListener("online",function(){return w(function(b){if(1==b.h)return t(b,a.ea(),2);a.S&&Rn();b.h=0})})}
function Io(a){window.addEventListener("offline",function(){return w(function(b){return t(b,a.ea(),0)})})}
function Lo(a){a.M=Bi(function(){return w(function(b){if(1==b.h)return a.j?a.bb()||!a.m?b.s(3):t(b,a.ea(),3):t(b,a.ea(),3);Lo(a);b.h=0})},io)}
l.ea=function(a){var b=this;if(M("use_shared_nsm")&&this.i){var c=Ze(this.i,a);c.then(function(d){M("use_cfr_monitor")&&Nn().requestComplete("generate_204",d)});
return c}return this.u?this.u:this.u=new Promise(function(d){var e,f,g;return w(function(h){switch(h.h){case 1:return e=window.AbortController?new window.AbortController:void 0,f=null===e||void 0===e?void 0:e.signal,g=!1,va(h,2,3),e&&(b.A=bf.N(function(){e.abort()},a||2E4)),t(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:ya(h);M("use_cfr_monitor")&&Nn().requestComplete("generate_204",g);b.u=void 0;b.A&&bf.T(b.A);g!==b.j&&(b.j=g,b.j&&b.m?We(b,"ytnetworkstatus-online"):b.m&&We(b,"ytnetworkstatus-offline"));d(g);za(h);break;case 2:xa(h),g=!1,h.s(3)}})})};
Ho.prototype.sendNetworkCheckRequest=Ho.prototype.ea;Ho.prototype.listen=Ho.prototype.V;Ho.prototype.enableErrorFlushing=Ho.prototype.Ub;Ho.prototype.getWindowStatus=Ho.prototype.bb;Ho.prototype.monitorNetworkStatusChange=Ho.prototype.dc;Ho.prototype.networkStatusHint=Ho.prototype.ca;Ho.prototype.isNetworkAvailable=Ho.prototype.H;Ho.getInstance=Ko;function Mo(a){a=void 0===a?{}:a;Ve.call(this);var b=this;this.j=this.M=0;this.m="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";M("use_shared_nsm")&&(this.m="networkstatus-offline",this.u="networkstatus-online");this.i=Ko();var c=A("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.ub);a.Pa&&!M("use_shared_nsm")&&(c=A("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=A("yt.networkStatusManager.instance.listen").bind(this.i))a.Ua?
(this.Ua=a.Ua,c(this.u,function(){No(b,"publicytnetworkstatus-online");M("use_shared_nsm")&&a.Pa&&Rn()}),c(this.m,function(){No(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){We(b,"publicytnetworkstatus-online");
M("use_shared_nsm")&&a.Pa&&Rn()}),c(this.m,function(){We(b,"publicytnetworkstatus-offline")}))}
r(Mo,Ve);Mo.prototype.H=function(){var a=A("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Mo.prototype.ca=function(a){var b=A("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Mo.prototype.ea=function(a){var b=this,c;return w(function(d){c=A("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return M("skip_network_check_if_cfr")&&Nn().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ca((null===(f=window.navigator)||void 0===f?void 0:f.onLine)||!0);e(b.H())})):c?d.return(c(a)):d.return(!0)})};
function No(a,b){a.Ua?a.j?(bf.T(a.M),a.M=bf.N(function(){a.A!==b&&(We(a,b),a.A=b,a.j=Q())},a.Ua-(Q()-a.j))):(We(a,b),a.A=b,a.j=Q()):We(a,b)}
;var Oo;function Po(){Um.call(this,{K:{Rb:Bn,qa:An,xb:xn,cc:yn,kb:zn,set:vn},J:Qo(),handleError:mi,ra:ni,da:Ro,now:Q,Mb:Qn,U:Gi(),jb:"publicytnetworkstatus-online",ib:"publicytnetworkstatus-offline",La:!0,Ka:.1,Sa:ci("potential_esf_error_limit",10),D:M,xa:!(zl()&&So())});this.j=new Ad;M("networkless_immediately_drop_all_requests")&&Cn();Tm("LogsDatabaseV2")}
r(Po,Um);function To(){var a=A("yt.networklessRequestController.instance");a||(a=new Po,z("yt.networklessRequestController.instance",a,void 0),M("networkless_logging")&&Im().then(function(b){a.v=b;Vm(a);a.j.resolve();a.La&&Math.random()<=a.Ka&&a.v&&Gn(a.v);M("networkless_immediately_drop_sw_health_store")&&Uo(a)}));
return a}
Po.prototype.writeThenSend=function(a,b){b||(b={});zl()||(this.h=!1);Um.prototype.writeThenSend.call(this,a,b)};
Po.prototype.sendThenWrite=function(a,b,c){b||(b={});zl()||(this.h=!1);Um.prototype.sendThenWrite.call(this,a,b,c)};
Po.prototype.sendAndWrite=function(a,b){b||(b={});zl()||(this.h=!1);Um.prototype.sendAndWrite.call(this,a,b)};
Po.prototype.awaitInitialization=function(){return this.j.promise};
function Uo(a){var b;w(function(c){if(!a.v)throw b=Ol("clearSWHealthLogsDb"),b;return c.return(Hn(a.v).catch(function(d){a.handleError(d)}))})}
function Ro(a,b,c){M("use_cfr_monitor")&&Vo(a,b);var d;if(null===(d=b.postParams)||void 0===d?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Q());c&&0===Object.keys(b).length?Kn(a):Dj(a,b)}
function Qo(){Oo||(Oo=new Mo({Pa:!0,ub:!0}));return Oo}
function Vo(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Nn().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Nn().requestComplete(a,!0);d(e,f)}}
function So(){return M("embeds_web_nwl_disable_nocookie")?"www.youtube-nocookie.com"!==dc(document.location.toString()):!0}
;var Wo=!1,Xo=0,Yo=0,Zo,$o=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Wo,potentialEsfErrorCounter:Yo};z("ytNetworklessLoggingInitializationOptions",$o,void 0);
function ap(){var a;w(function(b){switch(b.h){case 1:return t(b,Im(),2);case 2:a=b.i;if(!a||!zl()&&!M("nwl_init_require_datasync_id_killswitch")||!So()){b.s(0);break}Wo=!0;$o.isNwlInitialized=Wo;if(!M("use_new_nwl_initialization")){b.s(4);break}return t(b,To().awaitInitialization(),5);case 5:return b.return();case 4:return t(b,Tm("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.s(7);break}return t(b,Bn(a),8);case 8:return t(b,Gn(a),7);case 7:bp();cp().H()&&dp();cp().V("publicytnetworkstatus-online",
dp);cp().V("publicytnetworkstatus-offline",ep);if(!M("networkless_immediately_drop_sw_health_store")){b.s(10);break}return t(b,fp(),10);case 10:if(M("networkless_immediately_drop_all_requests"))return t(b,Cn(),0);b.s(0)}})}
function gp(a,b){function c(d){var e=cp().H();if(!hp()||!d||e&&M("vss_networkless_bypass_write"))ip(a,b);else{var f={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0};vn(f,d).then(function(g){f.id=g;cp().H()&&jp(f)}).catch(function(g){jp(f);
cp().H()?mi(g):Qn(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Im().then(function(d){c(d)}):c(Hm())}
function kp(a,b){function c(d){if(hp()&&d){var e={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){M("use_cfr_monitor")&&Nn().requestComplete(e.url,!0);void 0!==e.id?An(e.id,d):f=!0;M("vss_network_hint")&&cp().ca(!0);g(k,m)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){Nn().requestComplete(e.url,!1);h(k,m)}}ip(e.url,e.options);
vn(e,d).then(function(k){e.id=k;f&&An(e.id,d)}).catch(function(k){cp().H()?mi(k):Qn(k)})}else ip(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Im().then(function(d){c(d)}):c(Hm())}
function dp(){var a=Hm();if(!a)throw Ol("throttleSend");Xo||(Xo=bf.N(function(){var b;return w(function(c){if(1==c.h)return t(c,xn("NEW",a),2);if(3!=c.h)return b=c.i,b?t(c,jp(b),3):(ep(),c.return());Xo&&(Xo=0,dp());c.h=0})},100))}
function ep(){bf.T(Xo);Xo=0}
function jp(a){var b,c,d;return w(function(e){switch(e.h){case 1:b=Hm();if(!b)throw c=Ol("immediateSend"),c;if(void 0===a.id){e.s(2);break}return t(e,yn(a.id,b),3);case 3:(d=e.i)?a=d:ni(Error("The request cannot be found in the database."));case 2:if(lp(a,2592E6)){e.s(4);break}ni(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.s(5);break}return t(e,An(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=mp(a));var f=a,g,h;if(null===(h=null===(g=null===
f||void 0===f?void 0:f.options)||void 0===g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(Q());a=f;if(!a){e.s(0);break}if(!a.skipRetry||void 0===a.id){e.s(8);break}return t(e,An(a.id,b),8);case 8:ip(a.url,a.options,!!a.skipRetry),e.h=0}})}
function mp(a){var b=Hm();if(!b)throw Ol("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g;return w(function(h){switch(h.h){case 1:M("use_cfr_monitor")&&Nn().requestComplete(a.url,!1);g=an(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&np()<=ci("potential_esf_error_limit",10))){h.s(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||Nn().isEndpointCFR(a.url))){h.s(3);break}return t(h,cp().ea(),3);case 3:if(cp().H()){h.s(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===
(null===a||void 0===a?void 0:a.id)){h.s(6);break}return t(h,zn(a.id,b,!1),6);case 6:return h.return();case 2:if(M("nwl_consider_error_code")&&!g&&np()>ci("potential_esf_error_limit",10))return h.return();A("ytNetworklessLoggingInitializationOptions")&&$o.potentialEsfErrorCounter++;Yo++;if(void 0===(null===a||void 0===a?void 0:a.id)){h.s(8);break}return 1>a.sendCount?t(h,zn(a.id,b),12):t(h,An(a.id,b),8);case 12:bf.N(function(){cp().H()&&dp()},5E3);
case 8:c(e,f),h.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return w(function(g){if(1==g.h)return M("use_cfr_monitor")&&Nn().requestComplete(a.url,!0),void 0===(null===a||void 0===a?void 0:a.id)?g.s(2):t(g,An(a.id,b),2);M("vss_network_hint")&&cp().ca(!0);d(e,f);g.h=0})};
return a}
function lp(a,b){a=a.timestamp;return Q()-a>=b?!1:!0}
function bp(){var a=Hm();if(!a)throw Ol("retryQueuedRequests");xn("QUEUED",a).then(function(b){b&&!lp(b,12E4)?bf.N(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.s(2):t(c,zn(b.id,a),2);bp();c.h=0})}):cp().H()&&dp()})}
function fp(){var a,b;return w(function(c){a=Hm();if(!a)throw b=Ol("clearSWHealthLogsDb"),b;return c.return(Hn(a).catch(function(d){mi(d)}))})}
function cp(){if(M("use_new_nwl"))return Qo();Zo||(Zo=new Mo({Pa:!0,ub:!0}));return Zo}
function ip(a,b,c){c&&0===Object.keys(b).length?Kn(a):Dj(a,b)}
function hp(){return A("ytNetworklessLoggingInitializationOptions")?$o.isNwlInitialized:Wo}
function np(){return A("ytNetworklessLoggingInitializationOptions")?$o.potentialEsfErrorCounter:Yo}
;function op(a){var b=this;this.config_=null;a?this.config_=a:Zk()&&(this.config_=sk());Bi(function(){ll(b)},5E3)}
op.prototype.isReady=function(){!this.config_&&Zk()&&(this.config_=sk());return!!this.config_};
function wk(a,b,c,d){function e(D){D=void 0===D?!1:D;var E;if(d.retry&&"www.youtube-nocookie.com"!=h&&(D||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(E=jl(b,c,m,k)),E)){var K=g.onSuccess,O=g.onFetchSuccess;g.onSuccess=function(N,R){kl(E);K(N,R)};
c.onFetchSuccess=function(N,R){kl(E);O(N,R)}}try{D&&d.retry&&!d.Cb.bypassNetworkless?(g.method="POST",d.Cb.writeThenSend?M("use_new_nwl_wts")?To().writeThenSend(u,g):gp(u,g):M("use_new_nwl_saw")?To().sendAndWrite(u,g):kp(u,g)):(g.method="POST",g.postParams||(g.postParams={}),Dj(u,g))}catch(N){if("InvalidAccessError"==N.name)E&&(kl(E),E=0),ni(Error("An extension is blocking network request."));
else throw N;}E&&Bi(function(){ll(a)},5E3)}
!B("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&ni(new P("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new P("innertube xhrclient not ready",b,c,d);mi(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(D,E){if(d.onSuccess)d.onSuccess(E)},
onFetchSuccess:function(D){if(d.onSuccess)d.onSuccess(D)},
onError:function(D,E){if(d.onError)d.onError(E)},
onFetchError:function(D){if(d.onError)d.onError(D)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Yb)&&(h=f);var k=a.config_.ac||!1,m=el(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,v={alt:"json"},x=a.config_.Zb&&f;x=x&&f.startsWith("Bearer");x||(v.key=a.config_.innertubeApiKey);var u=rj(""+h+n,v||{},!0);M("use_new_nwl")&&To().h||!M("use_new_nwl")&&
hp()?Gm().then(function(D){e(D)}):e(!1)}
;function wl(a,b,c){c=void 0===c?{}:c;var d=op;B("ytLoggingEventsDefaultDisabled",!1)&&op==op&&(d=null);Ek(a,b,d,c)}
;var pp=[{hb:function(a){return"Cannot read property '"+a.key+"'"},
Ra:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{hb:function(a){return"Cannot call '"+a.key+"'"},
Ra:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{hb:function(a){return a.key+" is not defined"},
Ra:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var rp={ha:[],ga:[{ka:qp,weight:500}]};function qp(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function sp(){this.ga=[];this.ha=[]}
var tp;function up(){if(!tp){var a=tp=new sp;a.ha.length=0;a.ga.length=0;rp.ha&&a.ha.push.apply(a.ha,rp.ha);rp.ga&&a.ga.push.apply(a.ga,rp.ga)}return tp}
;var vp=new L;function wp(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=xp(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=xp(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=xp(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function xp(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function yp(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=zp(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=wp(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?zp(e+".ve",f,g,h):0;d+=g;d+=zp(e,a[e],b,c);if(500<d)break}}else c[b]=Ap(a),d+=c[b].length;else c[b]=Ap(a),d+=c[b].length;return d}
function zp(a,b,c,d){c+="."+a;a=Ap(b);d[c]=a;return c.length+a.length}
function Ap(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Bp=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Bp,void 0);function Cp(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||Q());F(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=fj();d=new Ch;F(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.W){e=c.W;var f=Fk(e),g=new Bh;F(g,2,f);F(g,1,e);H(d,3,g);c.vb&&delete Bp[c.W]}H(a,33,d);(c.pc?pk:kk)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,wa:c.wa},b)}
;function Dp(a,b){b=void 0===b?{}:b;var c=!1;B("ytLoggingEventsDefaultDisabled",!1)&&op===op&&(c=!0);Cp(a,c?null:op,b)}
;function Ep(a,b,c){var d=new Dh;hd(d,72,Eh,a);c?Cp(d,c,b):Dp(d,b)}
function Fp(a,b,c){var d=new Dh;hd(d,73,Eh,a);c?Cp(d,c,b):Dp(d,b)}
function Gp(a,b,c){var d=new Dh;hd(d,78,Eh,a);c?Cp(d,c,b):Dp(d,b)}
function Hp(a,b,c){var d=new Dh;hd(d,208,Eh,a);c?Cp(d,c,b):Dp(d,b)}
function Ip(a,b,c){var d=new Dh;hd(d,156,Eh,a);c?Cp(d,c,b):Dp(d,b)}
function Jp(a,b,c){var d=new Dh;hd(d,215,Eh,a);c?Cp(d,c,b):Dp(d,b)}
function Kp(a,b,c){var d=new Dh;hd(d,111,Eh,a);c?Cp(d,c,b):Dp(d,b)}
;var Lp=new Set,Mp=0,Np=0,Op=0,Pp=[],Qp=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function vl(a){Rp(a)}
function Sp(a){Rp(a,"WARNING")}
function Rp(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||B("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=Mp)){var m=Pp,n=te(a),v=n.message||"Unknown Error",x=n.name||"UnknownError",u=n.stack||a.i||"Not available";if(u.startsWith(x+": "+v)){var D=u.split("\n");D.shift();u=D.join("\n")}var E=n.lineNumber||"Not available",K=n.fileName||"Not available",O=u,N=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var R=0;R<a.args.length&&!(N=yp(a.args[R],"params."+R,g,N),500<=N);R++);else if(a.hasOwnProperty("params")&&
a.params){var W=a.params;if("object"===typeof a.params)for(var pb in W){if(W[pb]){var ba="params."+pb,da=Ap(W[pb]);g[ba]=da;N+=ba.length+da.length;if(500<N)break}}else g.params=Ap(W)}if(m.length)for(var ha=0;ha<m.length&&!(N=yp(m[ha],"params.context."+ha,g,N),500<=N);ha++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var G={message:v,name:x,lineNumber:E,fileName:K,stack:O,params:g,sampleWeight:1},Ba=Number(a.columnNumber);isNaN(Ba)||(G.lineNumber=G.lineNumber+
":"+Ba);if("IGNORED"===a.level)var ua=0;else a:{for(var Sn=up(),Tn=q(Sn.ha),Hi=Tn.next();!Hi.done;Hi=Tn.next()){var Un=Hi.value;if(G.message&&G.message.match(Un.Io)){ua=Un.weight;break a}}for(var Vn=q(Sn.ga),Ii=Vn.next();!Ii.done;Ii=Vn.next()){var Wn=Ii.value;if(Wn.ka(G)){ua=Wn.weight;break a}}ua=1}G.sampleWeight=ua;for(var Xn=q(pp),Ji=Xn.next();!Ji.done;Ji=Xn.next()){var Ki=Ji.value;if(Ki.Ra[G.name])for(var Yn=q(Ki.Ra[G.name]),Li=Yn.next();!Li.done;Li=Yn.next()){var Zn=Li.value,Tf=G.message.match(Zn.regexp);
if(Tf){G.params["params.error.original"]=Tf[0];for(var Mi=Zn.groups,$n={},bd=0;bd<Mi.length;bd++)$n[Mi[bd]]=Tf[bd+1],G.params["params.error."+Mi[bd]]=Tf[bd+1];G.message=Ki.hb($n);break}}}G.params||(G.params={});var ao=up();G.params["params.errorServiceSignature"]="msg="+ao.ha.length+"&cb="+ao.ga.length;G.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(G.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Db("sample").constructor!==
Bb&&(G.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(G);if(0!==G.sampleWeight&&!Lp.has(G.message)){if("ERROR"===h){vp.ja("handleError",G);if(M("record_app_crashed_web")&&0===Op&&1===G.sampleWeight)if(Op++,M("errors_via_jspb")){var Ni=new hh;F(Ni,1,1);if(!M("report_client_error_with_app_crash_ks")){var bo=new ch;F(bo,1,G.message);var co=new dh;H(co,3,bo);var eo=new eh;H(eo,5,co);var fo=new fh;H(fo,9,eo);H(Ni,4,fo)}var go=new Dh;hd(go,20,Eh,Ni);Dp(go,void 0)}else{var ho=
{appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(ho.systemHealth={crashData:{clientError:{logMessage:{message:G.message}}}});wl("appCrashed",ho)}Np++}else"WARNING"===h&&vp.ja("handleWarning",G);if(M("kevlar_gel_error_routing"))a:{var ae=h;if(M("errors_via_jspb")){if(Tp())var jo=void 0;else{var cd=new $g;F(cd,1,G.stack);G.fileName&&F(cd,4,G.fileName);var ub=G.lineNumber&&G.lineNumber.split?G.lineNumber.split(":"):[];0!==ub.length&&(1!==ub.length||isNaN(Number(ub[0]))?
2!==ub.length||isNaN(Number(ub[0]))||isNaN(Number(ub[1]))||(F(cd,2,Number(ub[0])),F(cd,3,Number(ub[1]))):F(cd,2,Number(ub[0])));var pc=new ch;F(pc,1,G.message);F(pc,3,G.name);F(pc,6,G.sampleWeight);"ERROR"===ae?F(pc,2,2):"WARNING"===ae?F(pc,2,1):F(pc,2,0);var Oi=new ah;F(Oi,1,!0);hd(Oi,3,bh,cd);var Pb=new Xg;F(Pb,3,window.location.href);for(var ko=B("FEXP_EXPERIMENTS",[]),Pi=0;Pi<ko.length;Pi++){var Dt=ko[Pi];Wc(Pb);$c(Pb,5).push(Dt)}var Qi=B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0);if(!ai()&&
Qi)for(var lo=q(Object.keys(Qi)),qc=lo.next();!qc.done;qc=lo.next()){var mo=qc.value,Ri=new Zg;F(Ri,1,mo);Ri.setValue(String(Qi[mo]));id(Pb,4,Zg,Ri)}var Si=G.params;if(Si){var no=q(Object.keys(Si));for(qc=no.next();!qc.done;qc=no.next()){var oo=qc.value,Ti=new Zg;F(Ti,1,"client."+oo);Ti.setValue(String(Si[oo]));id(Pb,4,Zg,Ti)}}var po=$h("SERVER_NAME"),qo=$h("SERVER_VERSION");if(po&&qo){var Ui=new Zg;F(Ui,1,"server.name");Ui.setValue(po);id(Pb,4,Zg,Ui);var Vi=new Zg;F(Vi,1,"server.version");Vi.setValue(qo);
id(Pb,4,Zg,Vi)}var Uf=new dh;H(Uf,1,Pb);H(Uf,2,Oi);H(Uf,3,pc);jo=Uf}var ro=jo;if(!ro)break a;var so=new Dh;hd(so,163,Eh,ro);Dp(so,void 0)}else{if(Tp())var to=void 0;else{var be={stackTrace:G.stack};G.fileName&&(be.filename=G.fileName);var vb=G.lineNumber&&G.lineNumber.split?G.lineNumber.split(":"):[];0!==vb.length&&(1!==vb.length||isNaN(Number(vb[0]))?2!==vb.length||isNaN(Number(vb[0]))||isNaN(Number(vb[1]))||(be.lineNumber=Number(vb[0]),be.columnNumber=Number(vb[1])):be.lineNumber=Number(vb[0]));
var Wi={level:"ERROR_LEVEL_UNKNOWN",message:G.message,errorClassName:G.name,sampleWeight:G.sampleWeight};"ERROR"===ae?Wi.level="ERROR_LEVEL_ERROR":"WARNING"===ae&&(Wi.level="ERROR_LEVEL_WARNNING");var Et={isObfuscated:!0,browserStackInfo:be},dd={pageUrl:window.location.href,kvPairs:[]};B("FEXP_EXPERIMENTS")&&(dd.experimentIds=B("FEXP_EXPERIMENTS"));var Xi=B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0);if(!ai()&&Xi)for(var uo=q(Object.keys(Xi)),rc=uo.next();!rc.done;rc=uo.next()){var vo=rc.value;
dd.kvPairs.push({key:vo,value:String(Xi[vo])})}var Yi=G.params;if(Yi){var wo=q(Object.keys(Yi));for(rc=wo.next();!rc.done;rc=wo.next()){var xo=rc.value;dd.kvPairs.push({key:"client."+xo,value:String(Yi[xo])})}}var yo=$h("SERVER_NAME"),zo=$h("SERVER_VERSION");yo&&zo&&(dd.kvPairs.push({key:"server.name",value:yo}),dd.kvPairs.push({key:"server.version",value:zo}));to={errorMetadata:dd,stackTrace:Et,logMessage:Wi}}var Ao=to;if(!Ao)break a;wl("clientError",Ao)}("ERROR"===ae||M("errors_flush_gel_always_killswitch"))&&
lk()}if(!M("suppress_error_204_logging")){var ce=G.params||{},Qb={urlParams:{a:"logerror",t:"jserror",type:G.name,msg:G.message.substr(0,250),line:G.lineNumber,level:h,"client.name":ce.name},postParams:{url:B("PAGE_NAME",window.location.href),file:G.fileName},method:"POST"};ce.version&&(Qb["client.version"]=ce.version);if(Qb.postParams){G.stack&&(Qb.postParams.stack=G.stack);for(var Bo=q(Object.keys(ce)),Zi=Bo.next();!Zi.done;Zi=Bo.next()){var Co=Zi.value;Qb.postParams["client."+Co]=ce[Co]}var $i=
B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0);if($i)for(var Do=q(Object.keys($i)),aj=Do.next();!aj.done;aj=Do.next()){var Eo=aj.value;Qb.postParams[Eo]=$i[Eo]}var Fo=B("SERVER_NAME",void 0),Go=B("SERVER_VERSION",void 0);Fo&&Go&&(Qb.postParams["server.name"]=Fo,Qb.postParams["server.version"]=Go)}Dj(B("ECATCHER_REPORT_HOST","")+"/error_204",Qb)}try{Lp.add(G.message)}catch(av){}Mp++}}}}
function Tp(){for(var a=q(Qp),b=a.next();!b.done;b=a.next())if(nl(b.value.toLowerCase()))return!0;return!1}
function Up(a){var b=Ha.apply(1,arguments),c=a;c.args||(c.args=[]);c.args.push.apply(c.args,ja(b))}
;function Vp(){this.register=new Map}
function Wp(a){a=q(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Lo("ABORTED")}
Vp.prototype.clear=function(){Wp(this);this.register.clear()};
var Xp=new Vp;var Yp=Date.now().toString();
function Zp(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Yp)for(a=1,b=0;b<Yp.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Yp.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var $p=y.ytLoggingDocDocumentNonce_;$p||($p=Zp(),Ya("ytLoggingDocDocumentNonce_",$p));var aq=$p;var bq={xg:0,rd:1,zd:2,Zj:3,zg:4,Yn:5,Pk:6,qm:7,Sl:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function cq(a){this.h=a}
function dq(a){return new cq({trackingParams:a})}
cq.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
cq.prototype.getAsJspb=function(){var a=new ih;void 0!==this.h.trackingParams?F(a,1,this.h.trackingParams):(void 0!==this.h.veType&&F(a,2,this.h.veType),void 0!==this.h.veCounter&&F(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&F(a,3,this.h.elementIndex));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();H(a,7,b)}void 0!==this.h.youtubeData&&H(a,8,this.h.jspbYoutubeData);return a};
cq.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
cq.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function eq(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function fq(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function gq(a){return B(fq(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",gq,void 0);function hq(a){return(a=gq(void 0===a?0:a))?new cq({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function iq(){var a=B("csn-to-ctt-auth-info");a||(a={},Zh("csn-to-ctt-auth-info",a));return a}
function jq(a){a=B(eq(void 0===a?0:a));if(!a&&!B("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
z("yt_logging_screen.getCurrentCsn",jq,void 0);function kq(a,b,c){var d=iq();(c=jq(c))&&delete d[c];b&&(d[a]=b)}
function lq(a){return iq()[a]}
z("yt_logging_screen.getCttAuthInfo",lq,void 0);
function mq(a,b,c,d){c=void 0===c?0:c;if(a!==B(eq(c))||b!==B(fq(c)))kq(a,d,c),Zh(eq(c),a),Zh(fq(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new jh;F(e,1,aq);F(e,2,a);M("use_default_heartbeat_client")?Kp(e):Kp(e,void 0,op)}else e={clientDocumentNonce:aq,clientScreenNonce:a},M("use_default_heartbeat_client")?wl("foregroundHeartbeatScreenAssociated",e):Ek("foregroundHeartbeatScreenAssociated",e,op)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):
b()}
z("yt_logging_screen.setCurrentScreen",mq,void 0);var nq=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",nq,void 0);function oq(a){Oh(nq,arguments)}
;var pq={qd:3611,Fc:27686,Gc:85013,Hc:23462,Jc:42016,Kc:62407,Lc:26926,Ic:43781,Mc:51236,Nc:79148,Oc:50160,Pc:77504,cd:87907,dd:18630,ed:54445,fd:80935,gd:105675,hd:37521,jd:47786,kd:98349,ld:123695,md:6827,nd:29434,od:7282,pd:124448,td:32276,sd:76278,ud:93911,vd:106531,wd:27259,xd:27262,yd:27263,Ad:21759,Bd:27107,Cd:62936,Dd:49568,Ed:38408,Fd:80637,Gd:68727,Hd:68728,Id:80353,Jd:80356,Kd:74610,Ld:45707,Md:83962,Nd:83970,Od:46713,Pd:89711,Qd:74612,Rd:93265,Sd:74611,Td:131380,Vd:128979,Wd:139311,Xd:128978,
Ud:131391,Yd:105350,ae:139312,be:134800,Zd:131392,de:113533,ee:93252,ge:99357,ie:94521,je:114252,ke:113532,le:94522,he:94583,me:88E3,ne:139580,oe:93253,pe:93254,qe:94387,re:94388,se:93255,te:97424,ce:72502,ue:110111,we:76019,ye:117092,ze:117093,xe:89431,Ae:110466,Be:77240,Ce:60508,De:137401,Ee:137402,Fe:137046,Ge:73393,He:113534,Ie:92098,Je:131381,Ke:84517,Le:83759,Me:80357,Ne:86113,Oe:72598,Pe:72733,Qe:107349,Re:124275,Se:118203,Te:133275,Ue:133274,Ve:133272,We:133273,Xe:133276,Ye:144507,Ze:143247,
af:143248,bf:143249,cf:143250,df:143251,ef:144401,gf:117431,ff:133797,hf:128572,jf:133405,kf:117429,lf:117430,mf:117432,nf:120080,pf:117259,qf:121692,rf:145656,sf:145655,tf:145653,uf:145654,vf:145657,wf:132972,xf:133051,yf:133658,zf:132971,Af:97615,Cf:143359,Bf:143356,Ef:143361,Df:143358,Gf:143360,Ff:143357,Hf:142303,If:143353,Jf:143354,Kf:144479,Lf:143355,Mf:31402,Of:133624,Pf:146477,Qf:133623,Rf:133622,Nf:133621,Sf:84774,Tf:95117,Uf:98930,Vf:98931,Wf:98932,Xf:43347,Yf:129889,Zf:45474,ag:100352,
cg:84758,dg:98443,eg:117985,fg:74613,gg:74614,hg:64502,ig:136032,jg:74615,kg:74616,lg:122224,mg:74617,ng:77820,og:74618,pg:93278,qg:93274,rg:93275,sg:93276,tg:22110,ug:29433,vg:133798,wg:132295,yg:120541,Ag:82047,Bg:113550,Cg:75836,Dg:75837,Eg:42352,Fg:84512,Gg:76065,Hg:75989,Ig:16623,Jg:32594,Kg:27240,Lg:32633,Mg:74858,Og:3945,Ng:16989,Pg:45520,Qg:25488,Rg:25492,Sg:25494,Tg:55760,Ug:14057,Vg:18451,Wg:57204,Xg:57203,Yg:17897,Zg:57205,ah:18198,bh:17898,dh:17909,eh:43980,fh:46220,gh:11721,hh:49954,
ih:96369,jh:3854,kh:56251,lh:25624,Ch:16906,Dh:99999,Eh:68172,Fh:27068,Gh:47973,Hh:72773,Ih:26970,Jh:26971,Kh:96805,Lh:17752,Mh:73233,Nh:109512,Oh:22256,Ph:14115,Qh:22696,Rh:89278,Sh:89277,Th:109513,Uh:43278,Vh:43459,Wh:43464,Xh:89279,Yh:43717,Zh:55764,ai:22255,bi:89281,ci:40963,di:43277,fi:43442,gi:91824,hi:120137,ii:96367,ji:36850,ki:72694,li:37414,mi:36851,oi:124863,ni:121343,ri:73491,si:54473,ti:43375,vi:46674,wi:143815,xi:139095,yi:144402,zi:32473,Ai:72901,Bi:72906,Ci:50947,Di:50612,Ei:50613,
Fi:50942,Gi:84938,Hi:84943,Ii:84939,Ji:84941,Ki:84944,Li:84940,Mi:84942,Ni:35585,Oi:51926,Pi:79983,Qi:63238,Ri:18921,Si:63241,Ti:57893,Ui:41182,Vi:135732,Wi:33424,Xi:22207,Yi:42993,Zi:36229,aj:22206,bj:22205,cj:18993,dj:19001,ej:18990,fj:18991,gj:18997,hj:18725,ij:19003,jj:36874,kj:44763,lj:33427,mj:67793,nj:22182,oj:37091,pj:34650,qj:50617,rj:47261,sj:22287,tj:25144,uj:97917,vj:62397,wj:125598,xj:137935,yj:36961,zj:108035,Aj:27426,Bj:27857,Cj:27846,Dj:27854,Ej:69692,Fj:61411,Gj:39299,Hj:38696,Ij:62520,
Jj:36382,Kj:108701,Lj:50663,Mj:36387,Nj:14908,Oj:37533,Pj:105443,Qj:61635,Rj:62274,Sj:133818,Tj:65702,Uj:65703,Vj:65701,Wj:76256,Xj:37671,Yj:49953,ak:36216,bk:28237,ck:39553,dk:29222,ek:26107,fk:38050,gk:26108,ik:120745,hk:26109,jk:26110,kk:66881,lk:28236,mk:14586,nk:57929,pk:74723,qk:44098,rk:44099,uk:23528,vk:61699,sk:134104,tk:134103,wk:59149,xk:101951,yk:97346,zk:118051,Ak:95102,Bk:64882,Ck:119505,Dk:63595,Ek:63349,Fk:95101,Gk:75240,Hk:27039,Ik:68823,Jk:21537,Kk:83464,Lk:75707,Mk:83113,Nk:101952,
Ok:101953,Qk:79610,Rk:125755,Sk:24402,Tk:24400,Uk:32925,Vk:57173,Wk:122502,Xk:145268,Yk:138480,Zk:64423,al:64424,bl:33986,dl:100828,fl:129089,il:21409,ml:135155,nl:135156,ol:135157,pl:135158,ql:135159,rl:135160,sl:135161,ul:135162,vl:135163,wl:135164,xl:135165,yl:135166,jl:11070,kl:11074,ll:17880,zl:14001,Bl:30709,Cl:30707,Dl:30711,El:30710,Fl:30708,Al:26984,Gl:146143,Hl:63648,Il:63649,Jl:51879,Kl:111059,Ll:5754,Ml:20445,Ol:130975,Nl:130976,Pl:110386,Ql:113746,Rl:66557,Tl:17310,Ul:28631,Vl:21589,
Wl:68012,Xl:60480,Yl:138664,Zl:141121,am:31571,bm:141978,cm:76980,dm:41577,em:45469,fm:38669,gm:13768,hm:13777,im:141842,jm:62985,km:4724,lm:59369,mm:43927,nm:43928,om:12924,pm:100355,sm:56219,tm:27669,um:10337,rm:47896,vm:122629,xm:139723,wm:139722,ym:121258,zm:107598,Am:127991,Bm:96639,Cm:107536,Dm:130169,Em:96661,Fm:145188,Gm:96658,Hm:116646,Im:121122,Jm:96660,Km:127738,Lm:127083,Mm:104443,Nm:96659,Om:106442,Pm:134840,Qm:63667,Rm:63668,Sm:63669,Tm:130686,Um:78314,Vm:55761,Wm:127098,Xm:134841,Ym:96368,
Zm:67374,an:48992,bn:146176,cn:49956,dn:31961,en:26388,fn:23811,gn:5E4,hn:126250,jn:96370,kn:47355,ln:47356,mn:37935,nn:45521,pn:21760,qn:83769,rn:49977,sn:49974,tn:93497,un:93498,vn:34325,wn:140759,xn:115803,yn:123707,zn:100081,An:35309,Bn:68314,Cn:25602,Dn:100339,En:143516,Fn:59018,Gn:18248,Hn:50625,In:9729,Jn:37168,Kn:37169,Ln:21667,Mn:16749,Nn:18635,On:39305,Pn:18046,Qn:53969,Rn:8213,Sn:93926,Tn:102852,Un:110099,Vn:22678,Wn:69076,Xn:137575,Zn:139224,ao:100856,bo:17736,co:3832,eo:55759,fo:64031,
no:93044,oo:93045,po:34388,qo:17657,ro:17655,so:39579,to:39578,uo:77448,vo:8196,wo:11357,xo:69877,yo:8197,zo:82039};function qq(){var a=tb(rq),b;return hg(new ag(function(c,d){a.onSuccess=function(e){xj(e)?c(new sq(e)):d(new tq("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new tq("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new tq("Request timed out","net.timeout",e))};
b=Dj("//web.archive.org/web/20220301220440/https://googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof ig&&b.abort();
return fg(c)})}
function tq(a,b,c){ab.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
r(tq,ab);function sq(a){this.xhr=a}
;function uq(){this.i=0;this.h=null}
uq.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),$f(a)?a:vq(a)):2===this.i&&b?(a=b.call(c,this.h),$f(a)?a:wq(a)):this};
uq.prototype.getValue=function(){return this.h};
uq.prototype.$goog_Thenable=!0;function wq(a){var b=new uq;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function vq(a){var b=new uq;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function xq(){if(le()||ml&&nl("applewebkit")&&!nl("version")&&(!nl("safari")||nl("gsa/"))||wc&&nl("version/"))return!0;if(M("enable_web_eom_visitor_data"))return B("EOM_VISITOR_DATA",void 0)?!1:!0;var a=B("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a?!0:(a=Kk("CONSENT"))?a.startsWith("YES+"):!0}
;function yq(a){ab.call(this,a.message||a.description||a.name);this.isMissing=a instanceof zq;this.isTimeout=a instanceof tq&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ig}
r(yq,ab);yq.prototype.name="BiscottiError";function zq(){ab.call(this,"Biscotti ID is missing from server")}
r(zq,ab);zq.prototype.name="BiscottiMissingError";var rq={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Aq=null;function hj(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return fg(Error("Biscotti id fetching has been disabled entirely."));if(!xq())return fg(Error("User has not consented - not fetching biscotti id."));if("1"==rb())return fg(Error("Biscotti ID is not available in private embed mode"));Aq||(Aq=hg(qq().then(Bq),function(a){return Cq(2,a)}));
return Aq}
function Bq(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new zq;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new zq;a=a.id;ij(a);Aq=vq(a);Dq(18E5,2);return a}
function Cq(a,b){b=new yq(b);ij("");Aq=wq(b);0<a&&Dq(12E4,a-1);throw b;}
function Dq(a,b){xi(function(){hg(qq().then(Bq,function(c){return Cq(b,c)}),Ma)},a)}
function Eq(){try{var a=A("yt.ads.biscotti.getId_");return a?a():hj()}catch(b){return fg(b)}}
;function Fq(a){if("1"!=rb()){a&&gj();try{Eq().then(function(){},function(){}),xi(Fq,18E5)}catch(b){mi(b)}}}
;function Gq(){this.Ac=!0}
function Hq(a){var b={},c=ne([]);c&&(b.Authorization=c,c=a=null===a||void 0===a?void 0:a.sessionIndex,void 0===c&&(c=Number(B("SESSION_INDEX",0)),c=isNaN(c)?0:c),b["X-Goog-AuthUser"]=c,"INNERTUBE_HOST_OVERRIDE"in Th||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Th&&(b["X-Goog-PageId"]=B("DELEGATED_SESSION_ID")));return b}
;var Iq=Symbol("injectionDeps");function Jq(a){this.name=a}
Jq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Kq(){this.key=Lq}
function Mq(){this.providers=new Map;this.h=new Map}
Mq.prototype.resolve=function(a){return a instanceof Kq?Nq(this,a.key,[],!0):Nq(this,a,[])};
function Nq(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.providers.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.providers.get(b);c.push(b);if(d.Ec)var e=d.Ec;else if(d.Dc)e=d[Iq]?Oq(a,d[Iq],c):[],e=d.Dc.apply(d,ja(e));else if(d.Lb){e=d.Lb;var f=e[Iq]?Oq(a,e[Iq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Po||a.h.set(b,e);
return e}
function Oq(a,b,c){return b?b.map(function(d){return d instanceof Kq?Nq(a,d.key,c,!0):Nq(a,d,c)}):[]}
;var Pq;var Qq={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var Rq=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Sq(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;bc(cc(5,a));try{var b=qj(a).theme;return Rq.get(b)||null}catch(c){}return null}
;function Tq(){this.h={};if(this.i=Lk()){var a=Kk("CONSISTENCY");a&&Uq(this,{encryptedTokenJarContents:a})}}
Tq.prototype.handleResponse=function(a,b){var c,d,e;b=(null===(d=null===(c=b.ba.context)||void 0===c?void 0:c.request)||void 0===d?void 0:d.consistencyTokenJars)||[];(a=null===(e=a.responseContext)||void 0===e?void 0:e.consistencyTokenJar)&&this.replace(b,a)};
Tq.prototype.replace=function(a,b){a=q(a);for(var c=a.next();!c.done;c=a.next())delete this.h[c.value.encryptedTokenJarContents];Uq(this,b)};
function Uq(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Jk("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Vq=window.location.hostname.split(".").slice(-2).join(".");function Wq(){var a=B("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===B("INNERTUBE_CLIENT_NAME")&&(this.h=Xq(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Yq;Wq.getInstance=function(){Yq=A("yt.clientLocationService.instance");Yq||(Yq=new Wq,z("yt.clientLocationService.instance",Yq,void 0));return Yq};
Wq.prototype.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=1E7*this.i.coords.latitude,a.client.locationInfo.longitudeE7=1E7*this.i.coords.longitude,a.client.locationInfo.horizontalAccuracyMeters=this.i.coords.accuracy,a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
Wq.prototype.handleResponse=function(a){var b;a=null===(b=a.responseContext)||void 0===b?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===B("INNERTUBE_CLIENT_NAME")?(this.h=Xq(this))&&this.h.set("yt-location-playability-token",a,15552E3):Jk("YT_CL",JSON.stringify({loctok:a}),15552E3,Vq,!0))};
function Xq(a){return void 0===a.h?new gl("yt-client-location"):a.h}
Wq.prototype.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition)||!M("web_enable_browser_geolocation_api")&&!M("enable_handoff_location_2fa_on_mweb"))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;M("enable_handoff_location_2fa_on_mweb")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
Wq.prototype.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null===a||void 0===a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null===a||void 0===a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null===a||void 0===a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Zq(a,b){var c,d;if((null===(c=a.signalServiceEndpoint)||void 0===c?0:c.signal)&&b.Aa){var e=b.Aa[a.signalServiceEndpoint.signal];if(e)return e()}if((null===(d=a.continuationCommand)||void 0===d?0:d.request)&&b.Sb&&(e=b.Sb[a.continuationCommand.request]))return e();for(var f in a)if(b.qb[f]&&(a=b.qb[f]))return a()}
;function $q(a){return function(){return new a}}
;var ar={},br=(ar.WEB_UNPLUGGED="^unplugged/",ar.WEB_UNPLUGGED_ONBOARDING="^unplugged/",ar.WEB_UNPLUGGED_OPS="^unplugged/",ar.WEB_UNPLUGGED_PUBLIC="^unplugged/",ar.WEB_CREATOR="^creator/",ar.WEB_KIDS="^kids/",ar.WEB_EXPERIMENTS="^experiments/",ar.WEB_MUSIC="^music/",ar.WEB_REMIX="^music/",ar.WEB_MUSIC_EMBEDDED_PLAYER="^music/",ar.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",ar);
function cr(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=br[b];if(c){var d=new RegExp(c),e=q(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(br).forEach(function(g){var h=q(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=q(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function dr(a,b){return{method:void 0===b?"POST":b,mode:sj(a)?"same-origin":"cors",credentials:sj(a)?"same-origin":"include"}}
;function er(){}
er.prototype.o=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Qq:c;var d;var e=a.clickTrackingParams,f=this.l,g=!1;g=void 0===g?!1:g;f=void 0===f?!1:f;var h=B("INNERTUBE_CONTEXT");if(h){h=wb(h);M("web_no_tracking_params_in_shell_killswitch")||delete h.clickTracking;var k,m;h.client||(h.client={});var n=h.client;"MWEB"===n.clientName&&(n.clientFormFactor=B("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");n.screenWidthPoints=window.innerWidth;n.screenHeightPoints=window.innerHeight;n.screenPixelDensity=
Math.round(window.devicePixelRatio||1);n.screenDensityFloat=window.devicePixelRatio||1;n.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var v=void 0===v?!1:v;Nk.getInstance();var x="USER_INTERFACE_THEME_LIGHT";Qk(165)?x="USER_INTERFACE_THEME_DARK":Qk(174)?x="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(x="USER_INTERFACE_THEME_DARK");v=v?x:Sq()||
x;n.userInterfaceTheme=v;if(!g){if(v=Xk())n.connectionType=v;M("web_log_effective_connection_type")&&(v=Yk())&&(h.client.effectiveConnectionType=v)}M("web_log_memory_total_kbytes")&&(null===(k=y.navigator)||void 0===k?0:k.deviceMemory)&&(k=null===(m=y.navigator)||void 0===m?void 0:m.deviceMemory,h.client.memoryTotalKbytes=""+1E6*k);m=qj(y.location.href);!M("web_populate_internal_geo_killswitch")&&m.internalcountrycode&&(n.internalGeo=m.internalcountrycode);"MWEB"===n.clientName||"WEB"===n.clientName?
(n.mainAppWebInfo={graftUrl:y.location.href},M("kevlar_woffle")&&Gk.h&&(n.mainAppWebInfo.pwaInstallabilityStatus=Gk.h.h?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),n.mainAppWebInfo.webDisplayMode=Hk(),n.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===n.clientName&&(!M("web_lr_app_quality_killswitch")&&(m=B("LIVING_ROOM_APP_QUALITY"))&&(n.tvAppInfo=Object.assign(n.tvAppInfo||{},{appQuality:m})),m=B("LIVING_ROOM_CERTIFICATION_SCOPE"))&&
(n.tvAppInfo=Object.assign(n.tvAppInfo||{},{certificationScope:m}));if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var u=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(ha){}u=void 0}u&&(n.timeZone=u)}(u=di())?n.experimentsToken=u:delete n.experimentsToken;u=ei();Tq.h||(Tq.h=new Tq);n=Tq.h.h;m=[];k=0;for(var D in n)m[k++]=n[D];h.request=Object.assign(Object.assign({},h.request),{internalExperimentFlags:u,consistencyTokenJars:m});!M("web_prequest_context_killswitch")&&
(D=B("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(h.request.externalPrequestContext=D);u=Nk.getInstance();D=Qk(58);u=u.get("gsml","");h.user=Object.assign({},h.user);D&&(h.user.enableSafetyMode=D);u&&(h.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?f&&(g=jq())&&(h.clientScreenNonce=g):!g&&(g=jq())&&(h.clientScreenNonce=g);e&&(h.clickTracking={clickTrackingParams:e});if(e=A("yt.mdx.remote.remoteClient_"))h.remoteClient=e;M("web_enable_client_location_service")&&Wq.getInstance().setLocationOnInnerTubeContext(h);
try{var E=tj(void 0),K=E.bid;delete E.bid;h.adSignalsInfo={params:[],bid:K};for(var O=q(Object.entries(E)),N=O.next();!N.done;N=O.next()){var R=q(N.value),W=R.next().value,pb=R.next().value;E=W;K=pb;null===(d=h.adSignalsInfo.params)||void 0===d?void 0:d.push({key:E,value:""+K})}}catch(ha){Rp(ha)}d=h}else Rp(Error("Error: No InnerTubeContext shell provided in ytconfig.")),d={};d={context:d};if(O=this.h(a)){this.i(d,O,b);var ba,da;b="/youtubei/v1/"+cr(this.j());(a=null===(da=null===(ba=a.commandMetadata)||
void 0===ba?void 0:ba.webCommandMetadata)||void 0===da?void 0:da.apiUrl)&&(b=a);ba=b;(da=B("INNERTUBE_HOST_OVERRIDE"))&&(ba=String(da)+String(ec(ba)));da={};da.key=B("INNERTUBE_API_KEY");M("json_condensed_response")&&(da.prettyPrint="false");ba=rj(ba,da||{},!1);ba={input:ba,sa:dr(ba),ba:d,config:Object.assign({},void 0)};ba.config.Ha?ba.config.Ha.identity=c:ba.config.Ha={identity:c};return ba}Rp(new P("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(er.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function fr(){}
r(fr,er);fr.prototype.o=function(){return{input:"/getDatasyncIdsEndpoint",sa:dr("/getDatasyncIdsEndpoint","GET"),ba:{}}};
fr.prototype.j=function(){return[]};
fr.prototype.h=function(){};
fr.prototype.i=function(){};var gr={},hr=(gr.GET_DATASYNC_IDS=$q(fr),gr);function ir(a){var b=Ha.apply(1,arguments);if(!jr(a)||b.some(function(e){return!jr(e)}))throw Error("Only objects may be merged.");
var c=a;b=q(b);for(var d=b.next();!d.done;d=b.next())kr(c,d.value);return c}
function kr(a,b){for(var c in b)if(jr(b[c])){if(c in a&&!jr(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});kr(a[c],b[c])}else if(lr(b[c])){if(c in a&&!lr(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);mr(a[c],b[c])}else a[c]=b[c];return a}
function mr(a,b){b=q(b);for(var c=b.next();!c.done;c=b.next())c=c.value,jr(c)?a.push(kr({},c)):lr(c)?a.push(mr([],c)):a.push(c);return a}
function jr(a){return"object"===typeof a&&!Array.isArray(a)}
function lr(a){return"object"===typeof a&&Array.isArray(a)}
;function nr(a,b){bn.call(this,1,arguments);this.timer=b}
r(nr,bn);var or=new cn("aft-recorded",nr);var pr=window;function qr(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var S=pr.performance||pr.mozPerformance||pr.msPerformance||pr.webkitPerformance||new qr;var rr=!1,sr={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Wa(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||Ma,S);function tr(a){var b=ur(a);if(b.aft)return b.aft;a=B((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function vr(){var a;if(M("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===S||void 0===S?void 0:S.getEntriesByType)||void 0===a?void 0:a.call(S,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=wr(e.requestStart),e.responseEnd=wr(e.responseEnd),e.redirectStart=wr(e.redirectStart),e.redirectEnd=wr(e.redirectEnd),e.domainLookupEnd=wr(e.domainLookupEnd),e.connectStart=wr(e.connectStart),
e.connectEnd=wr(e.connectEnd),e.responseStart=wr(e.responseStart),e.secureConnectionStart=wr(e.secureConnectionStart),e.domainLookupStart=wr(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=S.timing}else a=S.timing;return a}
function xr(){return M("csi_use_time_origin")&&S.timeOrigin?Math.floor(S.timeOrigin):S.timing.navigationStart}
function wr(a){return Math.round(xr()+a)}
function yr(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Ya("ytcsi."+(a||"")+"data_",b));return b}
function zr(a){a=yr(a);a.info||(a.info={});return a.info}
function ur(a){a=yr(a);a.tick||(a.tick={});return a.tick}
function Ar(a){a=yr(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Br(a){a=Ar(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Cr(a){var b=yr(a).nonce;b||(b=Zp(),yr(a).nonce=b);return b}
function Dr(a){var b=ur(a||""),c=tr(a);c&&!rr&&(hn(or,new nr(Math.round(c-b._start),a)),rr=!0)}
function Er(a,b){for(var c=q(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Er(a[d],b[d]))return!1;return!0}
;function Fr(){if(S.getEntriesByType){var a=S.getEntriesByType("paint");if(a=ib(a,function(b){return"first-paint"===b.name}))return wr(a.startTime)}a=S.timing;
return a.ec?Math.max(0,a.ec):0}
;function Gr(){var a=A("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function Hr(a){a=a||"";var b=A("ytcsi.reference");b||(Gr(),b=A("ytcsi.reference"));if(b[a])return b[a];var c=Gr(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var T={},Ir=(T.auto_search="LATENCY_ACTION_AUTO_SEARCH",T.ad_to_ad="LATENCY_ACTION_AD_TO_AD",T.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",T["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",T.app_startup="LATENCY_ACTION_APP_STARTUP",T["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",T["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",T["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",T.browse="LATENCY_ACTION_BROWSE",T.cast_splash="LATENCY_ACTION_CAST_SPLASH",
T.channels="LATENCY_ACTION_CHANNELS",T.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",T["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",T["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",T["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",T["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",T["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",T["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",T["channel.music"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",T["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",T["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",T["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",T["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",T.chips="LATENCY_ACTION_CHIPS",T["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",T["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",T.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
T.embed="LATENCY_ACTION_EMBED",T.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",T.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",T.explore="LATENCY_ACTION_EXPLORE",T.home="LATENCY_ACTION_HOME",T.library="LATENCY_ACTION_LIBRARY",T.live="LATENCY_ACTION_LIVE",T.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",T.onboarding="LATENCY_ACTION_ONBOARDING",T.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",T.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",T.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",T.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",T["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",T["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",T.prebuffer="LATENCY_ACTION_PREBUFFER",T.prefetch="LATENCY_ACTION_PREFETCH",T.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",T.profile_switcher="LATENCY_ACTION_LOGIN",T.reel_watch="LATENCY_ACTION_REEL_WATCH",T.results="LATENCY_ACTION_RESULTS",
T.search_ui="LATENCY_ACTION_SEARCH_UI",T.search_suggest="LATENCY_ACTION_SUGGEST",T.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",T.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",T.seek="LATENCY_ACTION_PLAYER_SEEK",T.settings="LATENCY_ACTION_SETTINGS",T.tenx="LATENCY_ACTION_TENX",T.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",T.watch="LATENCY_ACTION_WATCH",T.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",T["watch,watch7"]="LATENCY_ACTION_WATCH",T["watch,watch7_html5"]="LATENCY_ACTION_WATCH",
T["watch,watch7ad"]="LATENCY_ACTION_WATCH",T["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",T.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",T.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",T["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",T["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",T["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",T["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",T["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",T["video.live_settings"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",T["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",T["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",T["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",T.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",T.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",T.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",T),U={},Jr=(U.ad_allowed="adTypesAllowed",U.yt_abt="adBreakType",
U.ad_cpn="adClientPlaybackNonce",U.ad_docid="adVideoId",U.yt_ad_an="adNetworks",U.ad_at="adType",U.aida="appInstallDataAgeMs",U.browse_id="browseId",U.p="httpProtocol",U.t="transportProtocol",U.cs="commandSource",U.cpn="clientPlaybackNonce",U.ccs="creatorInfo.creatorCanaryState",U.ctop="creatorInfo.topEntityType",U.csn="clientScreenNonce",U.docid="videoId",U.GetHome_rid="requestIds",U.GetSearch_rid="requestIds",U.GetPlayer_rid="requestIds",U.GetWatchNext_rid="requestIds",U.GetBrowse_rid="requestIds",
U.GetLibrary_rid="requestIds",U.is_continuation="isContinuation",U.is_nav="isNavigation",U.b_p="kabukiInfo.browseParams",U.is_prefetch="kabukiInfo.isPrefetch",U.is_secondary_nav="kabukiInfo.isSecondaryNav",U.nav_type="kabukiInfo.navigationType",U.prev_browse_id="kabukiInfo.prevBrowseId",U.query_source="kabukiInfo.querySource",U.voz_type="kabukiInfo.vozType",U.yt_lt="loadType",U.mver="creatorInfo.measurementVersion",U.yt_ad="isMonetized",U.nr="webInfo.navigationReason",U.nrsu="navigationRequestedSameUrl",
U.pnt="performanceNavigationTiming",U.prt="playbackRequiresTap",U.plt="playerInfo.playbackType",U.pis="playerInfo.playerInitializedState",U.paused="playerInfo.isPausedOnLoad",U.yt_pt="playerType",U.fmt="playerInfo.itag",U.yt_pl="watchInfo.isPlaylist",U.yt_pre="playerInfo.preloadType",U.yt_ad_pr="prerollAllowed",U.pa="previousAction",U.yt_red="isRedSubscriber",U.rce="mwebInfo.responseContentEncoding",U.rc="resourceInfo.resourceCache",U.scrh="screenHeight",U.scrw="screenWidth",U.st="serverTimeMs",U.ssdm=
"shellStartupDurationMs",U.br_trs="tvInfo.bedrockTriggerState",U.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",U.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",U.label="tvInfo.label",U.is_mdx="tvInfo.isMdx",U.preloaded="tvInfo.isPreloaded",U.aac_type="tvInfo.authAccessCredentialType",U.upg_player_vis="playerInfo.visibilityState",U.query="unpluggedInfo.query",U.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",U.yt_vst="videoStreamType",U.vph="viewportHeight",U.vpw="viewportWidth",
U.yt_vis="isVisible",U.rcl="mwebInfo.responseContentLength",U.GetSettings_rid="requestIds",U.GetTrending_rid="requestIds",U.GetMusicSearchSuggestions_rid="requestIds",U.REQUEST_ID="requestIds",U),Kr="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Lr={},Mr=(Lr.ccs="CANARY_STATE_",Lr.mver="MEASUREMENT_VERSION_",Lr.pis="PLAYER_INITIALIZED_STATE_",Lr.yt_pt="LATENCY_PLAYER_",Lr.pa="LATENCY_ACTION_",Lr.ctop="TOP_ENTITY_TYPE_",Lr.yt_vst="VIDEO_STREAM_TYPE_",Lr),Nr="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Or(a,b,c){c=Ar(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Jr){c=Jr[a];0<=db(Kr,c)&&(b=!!b);a in Mr&&"string"===typeof b&&(b=Mr[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return ir({},d)}0<=db(Nr,a)||Sp(new P("Unknown label logged with GEL CSI",a))}
;var V={LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_SHOPPING_IN_APP:124,
LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,
LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,
LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CAST:120,
LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,
LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,
LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,
LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,
LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,
LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,
LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_UNKNOWN:0};V[V.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";
V[V.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";V[V.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";V[V.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";V[V.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";V[V.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";V[V.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";
V[V.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";V[V.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";V[V.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";V[V.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";V[V.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";V[V.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";V[V.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";
V[V.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";V[V.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";V[V.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";V[V.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";V[V.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";V[V.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";V[V.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";
V[V.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";V[V.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";V[V.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";V[V.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";V[V.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";V[V.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";
V[V.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";V[V.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";V[V.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";V[V.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";V[V.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";V[V.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";
V[V.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";V[V.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";V[V.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";V[V.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";V[V.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";V[V.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";
V[V.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";V[V.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";V[V.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";V[V.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";V[V.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";V[V.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";V[V.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";
V[V.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";V[V.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";V[V.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";V[V.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";V[V.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";V[V.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";V[V.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";
V[V.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";V[V.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";V[V.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";V[V.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";V[V.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";V[V.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";V[V.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";
V[V.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";V[V.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";V[V.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";V[V.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";V[V.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";V[V.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";
V[V.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";V[V.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";V[V.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";V[V.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";V[V.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";V[V.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";
V[V.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";V[V.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";V[V.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";V[V.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";V[V.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";V[V.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";V[V.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";V[V.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";
V[V.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";V[V.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";V[V.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";V[V.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";V[V.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";V[V.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";
V[V.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";V[V.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";V[V.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";V[V.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";V[V.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";V[V.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";
V[V.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";V[V.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";V[V.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
V[V.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";V[V.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";V[V.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";V[V.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";V[V.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";V[V.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";
V[V.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";V[V.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";V[V.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";
V[V.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";V[V.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";V[V.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";V[V.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";
V[V.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";V[V.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";V[V.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";V[V.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";V[V.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";V[V.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";V[V.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";
V[V.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";V[V.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";V[V.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";V[V.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";V[V.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";V[V.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";V[V.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";V[V.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";
V[V.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";V[V.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";V[V.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";V[V.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";V[V.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";V[V.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";V[V.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";V[V.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";
V[V.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";V[V.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";V[V.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";V[V.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";V[V.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";V[V.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";V[V.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";V[V.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";
V[V.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";V[V.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";V[V.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";V[V.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";V[V.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";V[V.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";V[V.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var Pr={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};Pr[Pr.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";
Pr[Pr.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";Pr[Pr.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";
X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var Qr={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};Qr[Qr.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
Qr[Qr.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";Qr[Qr.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";Qr[Qr.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";Qr[Qr.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";Qr[Qr.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";Qr[Qr.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";Qr[Qr.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var Rr={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};Rr[Rr.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";Rr[Rr.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";Rr[Rr.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";Rr[Rr.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Sr={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Sr[Sr.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Sr[Sr.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Tr={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Tr[Tr.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Tr[Tr.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Tr[Tr.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Tr[Tr.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Tr[Tr.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Tr[Tr.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Ur={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Ur[Ur.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Ur[Ur.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Ur[Ur.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Ur[Ur.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Vr={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Vr[Vr.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Vr[Vr.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Vr[Vr.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Wr={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Wr[Wr.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Wr[Wr.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Wr[Wr.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var Xr="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo prefetchInfo accelerationSession webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var Yr=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",Yr,void 0);function Zr(){this.h=0}
function $r(){Zr.h||(Zr.h=new Zr);return Zr.h}
Zr.prototype.tick=function(a,b,c,d){as(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new Ah,F(d,1,a),F(d,2,b),a=new Dh,hd(a,5,Eh,d),Dp(a,c)):wl("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Zr.prototype.info=function(a,b,c){var d=Object.keys(a).join("");as(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,wl("latencyActionInfo",a,{cttAuthInfo:c}))};
Zr.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));as(this,"info_"+d+"_"+b)||(F(a,2,b),b={cttAuthInfo:c},c=new Dh,hd(c,7,Eh,a),Dp(c,b))};
Zr.prototype.span=function(a,b,c){var d=Object.keys(a).join("");as(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,wl("latencyActionSpan",a,{cttAuthInfo:c}))};
function as(a,b){Yr[b]=Yr[b]||{count:0};var c=Yr[b];c.count++;c.time=Q();a.h||(a.h=Bi(function(){var d=Q(),e;for(e in Yr)Yr[e]&&6E4<d-Yr[e].time&&delete Yr[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new P("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Sp(c)),!0):!1}
;function bs(){var a=["ol"];Hr("").info.actionType="embed";a&&Zh("TIMING_AFT_KEYS",a);Zh("TIMING_ACTION","embed");a=B("TIMING_INFO",{});if(M("web_csi_via_jspb")){var b=new wh;a=q(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=q(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new zh;F(e,1,c);F(e,2,String(d));yh(b,e);break;case "GetGuide_rid":e=new zh;F(e,1,c);F(e,2,String(d));yh(b,e);break;case "GetHome_rid":e=new zh;F(e,1,c);F(e,2,String(d));yh(b,e);
break;case "GetPlayer_rid":e=new zh;F(e,1,c);F(e,2,String(d));yh(b,e);break;case "GetSearch_rid":e=new zh;F(e,1,c);F(e,2,String(d));yh(b,e);break;case "GetSettings_rid":e=new zh;F(e,1,c);F(e,2,String(d));yh(b,e);break;case "GetTrending_rid":e=new zh;F(e,1,c);F(e,2,String(d));yh(b,e);break;case "GetWatchNext_rid":e=new zh;F(e,1,c);F(e,2,String(d));yh(b,e);break;case "yt_red":F(b,14,!!d);break;case "yt_ad":F(b,9,!!d)}}cs(b)}else for(b in a)a.hasOwnProperty(b)&&ds(b,a[b]);b={isNavigation:!0,actionType:Ir[$h("TIMING_ACTION")]||
"LATENCY_ACTION_UNKNOWN"};if(a=$h("PREVIOUS_ACTION"))b.previousAction=Ir[a]||"LATENCY_ACTION_UNKNOWN";if(a=B("CLIENT_PROTOCOL"))b.httpProtocol=a;if(a=B("CLIENT_TRANSPORT"))b.transportProtocol=a;(a=jq())&&"UNDEFINED_CSN"!==a&&(b.clientScreenNonce=a);a=es();if(1===a||-1===a)b.isVisible=!0;a=zr();b.loadType="cold";c=vr();if(d=xr())Z("srt",c.responseStart),1!==a.prerender&&Z("_start",d,void 0);a=Fr();0<a&&Z("fpt",a);a=vr();a.isPerformanceNavigationTiming&&fs({performanceNavigationTiming:!0},void 0);Z("nreqs",
a.requestStart,void 0);Z("nress",a.responseStart,void 0);Z("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Z("nrs",a.redirectStart,void 0),Z("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(Z("ndnss",a.domainLookupStart,void 0),Z("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Z("ntcps",a.connectStart,void 0),Z("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=xr()&&0<a.connectEnd-a.secureConnectionStart&&(Z("nstcps",a.secureConnectionStart,
void 0),Z("ntcpe",a.connectEnd,void 0));S&&"getEntriesByType"in S&&gs();a=[];if(document.querySelector&&S&&S.getEntriesByName)for(var f in sr)sr.hasOwnProperty(f)&&(c=sr[f],hs(f,c)&&a.push(c));if(0<a.length)for(b.resourceInfo=[],f=q(a),a=f.next();!a.done;a=f.next())b.resourceInfo.push({resourceCache:a.value});fs(b);f=zr();b=Br();if("cold"===f.yt_lt||"cold"===b.loadType){a=ur();c=Ar();c=c.gelTicks?c.gelTicks:c.gelTicks={};for(var g in a)g in c||Z(g,a[g]);g={};a=!1;c=q(Object.keys(f));for(d=c.next();!d.done;d=
c.next())d=d.value,(d=Or(d,f[d]))&&!Er(Br(void 0),d)&&(ir(b,d),ir(g,d),a=!0);a&&fs(g)}Ya("ytglobal.timingready_",!0);g=$h("TIMING_ACTION");A("ytglobal.timingready_")&&g&&"_start"in ur(void 0)&&tr()&&Dr()}
function ds(a,b,c,d){null!==b&&(zr(c)[a]=b,(a=Or(a,b,c))&&fs(a,c,d))}
function fs(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=Hr(b||""),ir(c.info,a),ir(Br(b),a),c=Cr(b),b=yr(b).cttAuthInfo,$r().info(a,c,b);else{c=new wh;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":F(c,1,V[a[e]]);break;case "clientActionNonce":F(c,2,a[e]);break;case "clientScreenNonce":F(c,4,a[e]);break;case "loadType":F(c,3,a[e]);break;case "isFirstInstall":F(c,55,a[e]);break;case "networkType":F(c,5,Pr[a[e]]);break;case "connectionType":F(c,
26,X[a[e]]);break;case "detailedConnectionType":F(c,27,Y[a[e]]);break;case "isVisible":F(c,6,a[e]);break;case "playerType":F(c,7,Qr[a[e]]);break;case "clientPlaybackNonce":F(c,8,a[e]);break;case "adClientPlaybackNonce":F(c,28,a[e]);break;case "previousCpn":F(c,77,a[e]);break;case "targetCpn":F(c,76,a[e]);break;case "isMonetized":F(c,9,a[e]);break;case "isPrerollAllowed":F(c,16,a[e]);break;case "isPrerollShown":F(c,17,a[e]);break;case "adType":F(c,12,a[e]);break;case "adTypesAllowed":F(c,36,a[e]);
break;case "adNetworks":F(c,37,a[e]);break;case "previousAction":F(c,13,V[a[e]]);break;case "isRedSubscriber":F(c,14,a[e]);break;case "serverTimeMs":F(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":F(c,20,a[e]);break;case "targetVideoId":F(c,78,a[e]);break;case "adBreakType":F(c,21,Rr[a[e]]);break;case "isNavigation":F(c,25,a[e]);break;case "viewportHeight":F(c,29,a[e]);break;case "viewportWidth":F(c,30,a[e]);break;case "screenHeight":F(c,84,a[e]);break;case "screenWidth":F(c,
85,a[e]);break;case "browseId":F(c,31,a[e]);break;case "isCacheHit":F(c,32,a[e]);break;case "httpProtocol":F(c,33,a[e]);break;case "transportProtocol":F(c,34,a[e]);break;case "searchQuery":F(c,41,a[e]);break;case "isContinuation":F(c,42,a[e]);break;case "availableProcessors":F(c,43,a[e]);break;case "sdk":F(c,44,a[e]);break;case "isLocalStream":F(c,45,a[e]);break;case "navigationRequestedSameUrl":F(c,64,a[e]);break;case "shellStartupDurationMs":F(c,70,a[e]);break;case "appInstallDataAgeMs":F(c,73,
a[e]);break;case "latencyActionError":F(c,71,Sr[a[e]]);break;case "actionStep":F(c,79,a[e]);break;case "jsHeapSizeLimit":F(c,80,a[e]);break;case "totalJsHeapSize":F(c,81,a[e]);break;case "usedJsHeapSize":F(c,82,a[e]);break;case "sourceVideoDurationMs":F(c,90,a[e]);break;case "adPrebufferedTimeSecs":F(c,39,a[e]);break;case "isLivestream":F(c,47,a[e]);break;case "liveStreamMode":F(c,91,Tr[a[e]]);break;case "adCpn2":F(c,48,a[e]);break;case "adDaiDriftMillis":F(c,49,a[e]);break;case "videoStreamType":F(c,
53,Ur[a[e]]);break;case "playbackRequiresTap":F(c,56,a[e]);break;case "performanceNavigationTiming":F(c,67,a[e]);break;case "transactionType":F(c,74,Vr[a[e]]);break;case "playerRotationType":F(c,101,Wr[a[e]]);break;case "allowedPreroll":F(c,10,a[e]);break;case "shownPreroll":F(c,11,a[e]);break;case "getHomeRequestId":F(c,57,a[e]);break;case "getSearchRequestId":F(c,60,a[e]);break;case "getPlayerRequestId":F(c,61,a[e]);break;case "getWatchNextRequestId":F(c,62,a[e]);break;case "getBrowseRequestId":F(c,
63,a[e]);break;case "getLibraryRequestId":F(c,66,a[e]);break;default:Xr.includes(f)&&mi(new P("Codegen laipb translator asked to translate message field",""+f))}}catch(g){mi(Error("Codegen laipb translator failed to set "+f))}}cs(c,b)}}
function cs(a,b){var c=Ar(b);c.jspbInfos||(c.jspbInfos=[]);c.jspbInfos.push(a);Hr(b||"").jspbInfo.push(a);c=Cr(b);b=yr(b).cttAuthInfo;$r().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;S.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),S.mark(d))}Hr(c||"").tick[a]=b||Q();d=Ar(c);d.gelTicks&&(d.gelTicks[a]=!0);d=ur(c);var e=b||Q();d[a]=e;e=Cr(c);var f=yr(c).cttAuthInfo;if("_start"===a){var g=$r();as(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(f=new vh,F(f,1,e),e=new Dh,hd(e,6,Eh,f),Dp(e,b)):wl("latencyActionBaselined",{clientActionNonce:e},b))}else $r().tick(a,e,b,f);Dr(c);return d[a]}
function is(){var a=Cr(void 0);requestAnimationFrame(function(){setTimeout(function(){a===Cr(void 0)&&Z("ol",void 0,void 0)},0)})}
function es(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=ii+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function hs(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Yb()&&a.setAttribute("nonce",Yb());return c?(a=S.getEntriesByName(c))&&a[0]&&(a=a[0],c=xr(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function gs(){var a=window.location.protocol,b=S.getEntriesByType("resource");b=fb(b,function(c){return 0===c.name.indexOf(a+"//web.archive.org/web/20220301220440/https://fonts.gstatic.com/s/")});
(b=hb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",wr(b.startTime)),Z("wffe",wr(b.responseEnd)))}
var js=window;js.ytcsi&&(js.ytcsi.info=ds,js.ytcsi.tick=Z);var ks=["consistency","mss","client_location","entities","store"];function ls(a,b,c,d){this.o=a;this.J=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Aa||(a.Aa={});a.Aa=Object.assign(Object.assign({},hr),a.Aa)}
function ms(a,b,c,d){if(void 0!==ls.h){if(d=ls.h,a=[a!==d.o,b!==d.J,c!==d.l,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new P("InnerTubeTransportService is already initialized",a);
}else ls.h=new ls(a,b,c,d)}
function ns(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Qq:c;var d=Zq(b,a.o);if(!d)return fg(new P("Error: No request builder found for command.",b));var e=d.o(b,void 0,c);return e?new ag(function(f){var g,h,k;return w(function(m){if(1==m.h){h="cors"===(null===(g=e.sa)||void 0===g?void 0:g.mode)?"cors":void 0;if(a.l.Ac){var n=e.config,v;n=null===(v=null===n||void 0===n?void 0:n.Ha)||void 0===v?void 0:v.sessionIndex;v=Hq({sessionIndex:n});k=Object.assign(Object.assign({},
os(h)),v);return m.s(2)}return t(m,ps(e.config,h),3)}2!=m.h&&(k=m.i);f(qs(a,e,k));m.h=0})}):fg(new P("Error: Failed to build request for command.",b))}
function qs(a,b,c){var d,e,f,g,h,k,m,n,v,x,u,D,E,K,O,N,R;return w(function(W){switch(W.h){case 1:W.s(2);break;case 3:if((m=W.i)&&!m.isExpired())return W.return(Promise.resolve(m.h()));case 2:if((n=null===(d=b.config)||void 0===d?void 0:d.Mo)&&a.h.has(n)&&M("web_memoize_inflight_requests"))return W.return(a.h.get(n));if(null===(e=null===b||void 0===b?void 0:b.ba)||void 0===e?0:e.context)for(v=q([]),x=v.next();!x.done;x=v.next())u=x.value,u.Ko(b.ba.context);if(null===(f=a.i)||void 0===f?0:f.l(b.input,
b.ba))return W.return(a.i.j(b.input,b.ba));D=JSON.stringify(b.ba);b.sa=Object.assign(Object.assign({},b.sa),{headers:c});E=Object.assign({},b.sa);"POST"===b.sa.method&&(E=Object.assign(Object.assign({},E),{body:D}));(null===(g=b.config)||void 0===g?0:g.lc)&&Z(b.config.lc);K=a.J.fetch(b.input,E,b.config);n&&a.h.set(n,K);return t(W,K,4);case 4:O=W.i;n&&a.h.has(n)&&a.h.delete(n);(null===(h=b.config)||void 0===h?0:h.mc)&&Z(b.config.mc);if(O||null===(k=a.i)||void 0===k||!k.h(b.input,b.ba)){W.s(5);break}return t(W,
a.i.i(b.input,b.ba),6);case 6:O=W.i;case 5:if(O&&a.j)for(N=q(ks),x=N.next();!x.done;x=N.next())R=x.value,a.j[R]&&a.j[R].handleResponse(O,b);return W.return(O)}})}
function ps(a,b){var c,d,e;return w(function(f){if(1==f.h){d=null===(c=null===a||void 0===a?void 0:a.Ha)||void 0===c?void 0:c.sessionIndex;var g=Hq({sessionIndex:d});if(!(g instanceof ag)){var h=new ag(Ma);bg(h,2,g);g=h}return t(f,g,2)}e=f.i;return f.return(Promise.resolve(Object.assign(Object.assign({},os(b)),e)))})}
function os(a){var b={"Content-Type":"application/json"};M("enable_web_eom_visitor_data")&&B("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=B("EOM_VISITOR_DATA"):B("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=B("VISITOR_DATA"));"cors"!==a&&((a=B("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=B("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=B("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),M("forward_domain_admin_state_on_embeds")&&(a=
B("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var rs=["share/get_web_player_share_panel"],ss=["feedback"],ts=["notification/modify_channel_preference"],us=["browse/edit_playlist"],vs=["subscription/subscribe"],ws=["subscription/unsubscribe"];function xs(){}
r(xs,er);xs.prototype.j=function(){return vs};
xs.prototype.h=function(a){return a.subscribeEndpoint};
xs.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(xs.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ys(){}
r(ys,er);ys.prototype.j=function(){return ws};
ys.prototype.h=function(a){return a.unsubscribeEndpoint};
ys.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(ys.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function zs(){}
r(zs,er);zs.prototype.j=function(){return ss};
zs.prototype.h=function(a){return a.feedbackEndpoint};
zs.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(zs.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function As(){}
r(As,er);As.prototype.j=function(){return ts};
As.prototype.h=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
As.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Bs(){}
r(Bs,er);Bs.prototype.j=function(){return us};
Bs.prototype.h=function(a){return a.playlistEditEndpoint};
Bs.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Cs(){}
r(Cs,er);Cs.prototype.j=function(){return rs};
Cs.prototype.h=function(a){return a.webPlayerShareEntityServiceEndpoint};
Cs.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Lq=new Jq("NETWORK_SLI_TOKEN");function Ds(a){this.h=a}
Ds.prototype.fetch=function(a,b){var c=this,d,e;return w(function(f){c.h&&(d=bc(cc(5,lc(a)))||"/UNKNOWN_PATH",c.h.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Sp(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Sp(g)}))})};
Ds.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.failure(),b=b.then(function(c){Sp(new P("Error: API fetch failed",a.status,a.url,c));return Object.assign(Object.assign({},c),{errorMetadata:{status:a.status}})}));
return b};
Ds[Iq]=[new Kq];var Es=new Jq("NETWORK_MANAGER_TOKEN");var Fs;function Gs(a){bn.call(this,1,arguments);this.csn=a}
r(Gs,bn);var ln=new cn("screen-created",Gs),Hs=[],Js=Is,Ks=0;function Ls(a,b,c,d,e,f,g){function h(){Sp(new P("newScreen() parent element does not have a VE - rootVe",b))}
var k=Js();f=new cq({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,W:k};if(M("il_via_jspb")){var m=new lh;m.X(k);mh(m,f.getAsJspb());c&&c.visualElement?(f=new nh,c.clientScreenNonce&&F(f,2,c.clientScreenNonce),oh(f,c.visualElement.getAsJspb()),g&&F(f,4,kh[g]),H(m,5,f)):c&&h();d&&F(m,3,d);Ip(m,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=g)):
c&&h(),d&&(f.cloneCsn=d),a?Ek("screenCreated",f,a,e):wl("screenCreated",f,e);hn(ln,new Gs(k));return k}
function Ms(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:lq(b),
W:b};d=q(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(ob(g)||!g.trackingParams&&!g.veType)&&Sp(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new ph;h.X(b);rh(h,c.getAsJspb());gb(e,function(k){k=k.getAsJspb();id(h,3,ih,k)});
"UNDEFINED_CSN"==b?Ns("visualElementAttached",h,f):Jp(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:gb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?Ns("visualElementAttached",c,f):a?Ek("visualElementAttached",c,a,f):wl("visualElementAttached",c,f)}
function Is(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Lc(b,3)}
function Ns(a,b,c){Hs.push({payloadName:a,payload:b,options:c});Ks||(Ks=mn())}
function nn(a){if(Hs){for(var b=q(Hs),c=b.next();!c.done;c=b.next())if(c=c.value,c.payload)if(M("il_via_jspb"))switch(c.payload.X(a.csn),c.payloadName){case "screenCreated":Ip(c.payload,c.options);break;case "visualElementAttached":Jp(c.payload,c.options);break;case "visualElementShown":Ep(c.payload,c.options);break;case "visualElementHidden":Fp(c.payload,c.options);break;case "visualElementGestured":Gp(c.payload,c.options);break;case "visualElementStateChanged":Hp(c.payload,c.options);break;default:Sp(new P("flushQueue unable to map payloadName to JSPB setter"))}else c.payload.csn=
a.csn,Ek(c.payloadName,c.payload,null,c.options);Hs.length=0}Ks=0}
;function Os(){this.i=new Set;this.h=new Set;this.j=new Map}
Os.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Na(Os);function Ps(){this.o=[];this.C=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.u=new Map}
function Qs(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=jq(c),h=hq(c);g&&h&&((null===(e=null===d||void 0===d?void 0:d.response)||void 0===e?0:e.trackingParams)&&Ms(a.client,g,h,[dq(d.response.trackingParams)]),(null===(f=null===d||void 0===d?void 0:d.playerResponse)||void 0===f?0:f.trackingParams)&&Ms(a.client,g,h,[dq(d.playerResponse.trackingParams)]))})}
function Rs(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.o.push([b,c]);else{var e=jq(d);c=c||hq(d);e&&c&&Ms(a.client,e,c,[b])}}
Ps.prototype.clickCommand=function(a,b,c){a:{var d=a.clickTrackingParams;c=void 0===c?0:c;c=void 0===c?0:c;if(d){if(M("web_ignore_no_ve_clicks")&&(a=wp(atob(d.replace(/-/g,"+").replace(/_/g,"/"))),!a||0===a)){b=!1;break a}if(c=jq(c)){a=this.client;var e=dq(d);var f="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";d={cttAuthInfo:lq(c),W:c};if(M("il_via_jspb")){var g=new sh;g.X(c);e=e.getAsJspb();H(g,2,e);F(g,4,kh[f]);b&&H(g,3,void 0);"UNDEFINED_CSN"==c?Ns("visualElementGestured",g,d):Gp(g,d,a)}else f=
{csn:c,ve:e.getAsJson(),gestureType:f},b&&(f.clientData=b),"UNDEFINED_CSN"==c?Ns("visualElementGestured",f,d):a?Ek("visualElementGestured",f,a,d):wl("visualElementGestured",f,d);b=!0}else b=!1}else b=!1}return b};
function Ss(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Ts(a,b,c);var f=hq(c.layer);if(f){for(var g=q(a.o),h=g.next();!h.done;h=g.next())h=h.value,Rs(a,h[0],h[1]||f,c.layer);f=q(a.C);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=jq(g);var m=k[0]||hq(g);if(h&&m){g=a.client;var n=k[1];k={cttAuthInfo:lq(h),W:h};M("il_via_jspb")?(n=new uh,n.X(h),m=m.getAsJspb(),H(n,2,m),"UNDEFINED_CSN"==h?Ns("visualElementStateChanged",n,k):Hp(n,k,g)):(m={csn:h,ve:m.getAsJson(),
clientData:n},"UNDEFINED_CSN"==h?Ns("visualElementStateChanged",m,k):g?Ek("visualElementStateChanged",m,g,k):wl("visualElementStateChanged",m,k))}}}};
jq(c.layer)||a.j();if(c.tb)for(var d=q(c.tb),e=d.next();!e.done;e=d.next())Qs(a,e.value,c.layer);else Rp(Error("Delayed screen needs a data promise."))}
function Ts(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.fc?c.fc:c.layer;var e=jq(d);d=hq(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=B("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=Ls(a.client,b,f,c.sb,c.cttAuthInfo,g,c.Ho)}catch(m){Up(m,{No:b,rootVe:d,parentVisualElement:void 0,Eo:e,Jo:f,sb:c.sb});Rp(m);return}mq(k,b,
c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=q(Object.values(bq));for(f=b.next();!f.done;f=b.next())if(jq(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:lq(e),W:e,vb:g},M("il_via_jspb")?(h=new th,h.X(e),d=d.getAsJspb(),H(h,2,d),F(h,4,g?16:8),"UNDEFINED_CSN"==e?Ns("visualElementHidden",h,f):Fp(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?Ns("visualElementHidden",d,f):b?Ek("visualElementHidden",d,b,f):wl("visualElementHidden",
d,f)));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");fs({clientScreenNonce:k});Os.getInstance().clear();d=hq(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e=k,k={cttAuthInfo:lq(e),W:e},M("il_via_jspb")?(b=new th,b.X(e),f=d.getAsJspb(),H(b,2,f),F(b,4,1),"UNDEFINED_CSN"==e?Ns("visualElementShown",b,k):Ep(b,k,void 0)):(b={csn:e,ve:d.getAsJson(),eventType:1},"UNDEFINED_CSN"==e?Ns("visualElementShown",b,k):wl("visualElementShown",
b,k)));a.i.delete(c.layer||0);a.j=void 0;e=q(a.u);for(k=e.next();!k.done;k=e.next())b=q(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Rs(a,k,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(m){Rp(m)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){Rp(m)}}}
;function Us(){var a,b;return w(function(c){if(1==c.h)return a=ls.h,a?t(c,ns(a),2):(Sp(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),c.return(void 0));if(b=c.i)return b.errorMetadata?(Rp(Error("Datasync IDs fetch responded with "+b.errorMetadata.code+": "+b.error)),c.return(void 0)):c.return(b.Fo);Sp(Error("Network request to get Datasync IDs failed."));return c.return(void 0)})}
;var Vs=y.caches,Ws;function Xs(a){var b=a.indexOf(":");return-1===b?{Db:a}:{Db:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Ys(){return w(function(a){if(void 0!==Ws)return a.return(Ws);Ws=new Promise(function(b){var c;return w(function(d){switch(d.h){case 1:return va(d,2),t(d,Vs.open("test-only"),4);case 4:return t(d,Vs.delete("test-only"),5);case 5:wa(d,3);break;case 2:if(c=xa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Ws)})}
function Zs(a){var b,c,d,e,f,g,h;w(function(k){if(1==k.h)return t(k,Ys(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return t(k,Vs.keys(),3)}c=k.i;d=q(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Xs(f),h=g.datasyncId,!h||a.includes(h)||b.push(Vs.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(n){return n})}))})}
function $s(){var a,b,c,d,e,f,g;return w(function(h){if(1==h.h)return t(h,Ys(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=Al("cache contains other");return t(h,Vs.keys(),3)}b=h.i;c=q(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Xs(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function at(){try{return!!self.localStorage}catch(a){return!1}}
;function bt(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function ct(a){if(at()){var b=Object.keys(window.localStorage);b=q(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=bt(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function dt(){if(!at())return!1;var a=Al(),b=Object.keys(window.localStorage);b=q(b);for(var c=b.next();!c.done;c=b.next())if(c=bt(c.value),void 0!==c&&c!==a)return!0;return!1}
;function et(){Us().then(function(a){a&&(Km(a),Zs(a),ct(a))})}
function ft(){var a=new Mo;bf.N(function(){var b,c,d,e;return w(function(f){switch(f.h){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.s(2);break}b=Al("clear");if(b.startsWith("V")){var g=[b];Km(g);Zs(g);ct(g);return f.return()}c=dt();return t(f,$s(),3);case 3:return d=f.i,t(f,Lm(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.H()?et():a.l.add("publicytnetworkstatus-online",et,!0,void 0,void 0),f.h=0}})})}
;function gt(a){a&&(a.dataset?a.dataset[ht("loaded")]="true":a.setAttribute("data-loaded","true"))}
function jt(a,b){return a?a.dataset?a.dataset[ht(b)]:a.getAttribute("data-"+b):null}
var kt={};function ht(a){return kt[a]||(kt[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var lt=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,mt=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function nt(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(lt,""),c=c.replace(mt,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ot(a,b,c)}
function ot(a,b,c){c=void 0===c?null:c;var d=pt(a),e=document.getElementById(d),f=e&&jt(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Pj(d,b),b=""+Ra(b),qt[b]=f),g||(e=rt(a,d,function(){jt(e,"loaded")||(gt(e),Sj(d),xi(Xa(Tj,d),0))},c)))}
function rt(a,b,c,d){d=void 0===d?null:d;var e=Md("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Id(e,Qf(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function st(a){a=pt(a);var b=document.getElementById(a);b&&(Tj(a),b.parentNode.removeChild(b))}
function tt(a,b){a&&b&&(a=""+Ra(b),(a=qt[a])&&Rj(a))}
function pt(a){var b=document.createElement("a");Vb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+$b(a)}
var qt={};var ut=[],vt=!1;function wt(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&xq()&&"1"!=rb()){var a=function(){vt=!0;"google_ad_status"in window?Zh("DCLKSTAT",1):Zh("DCLKSTAT",2)};
try{nt("//web.archive.org/web/20220301220440/https://static.doubleclick.net/instream/ad_status.js",a)}catch(b){}ut.push(bf.N(function(){if(!(vt||"google_ad_status"in window)){try{tt("//web.archive.org/web/20220301220440/https://static.doubleclick.net/instream/ad_status.js",a)}catch(b){}vt=!0;Zh("DCLKSTAT",3)}},5E3))}}
function xt(){var a=Number(B("DCLKSTAT",0));return isNaN(a)?0:a}
;function zt(){this.state=1;this.h=null}
l=zt.prototype;
l.initialize=function(a,b,c){var d,e;if(a.program){var f=null!==(d=a.interpreterScript)&&void 0!==d?d:null,g=null!==(e=a.interpreterUrl)&&void 0!==e?e:null;if(a.interpreterSafeScript){f=a.interpreterSafeScript;Db("From proto message. b/166824318");f=f.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var h=Ab();f=h?h.createScript(f):f;f=(new Fb(f)).toString()}a.interpreterSafeUrl&&(g=a.interpreterSafeUrl,Db("From proto message. b/166824318"),g=Jb(g.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());
At(this,f,g,a.program,b,c)}else Sp(Error("Cannot initialize botguard without program"))};
function At(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,nt(c,function(){window[g]?Bt(a,d,g,e):(a.state=3,st(c),Sp(new P("Unable to load Botguard","from "+c)))},f)):b?(f=Md("SCRIPT"),f.textContent=b,f.nonce=Yb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Bt(a,d,g,e):(a.state=4,Sp(new P("Unable to load Botguard from JS")))):Sp(new P("Unable to load VM; no url or JS provided"))}
l.isInitialized=function(){return!!this.h};
l.getState=function(){return this.state};
function Bt(a,b,c,d){a.state=5;try{var e=new Bd({program:b,globalName:c});e.xc.then(function(){a.state=6;d&&d(b)});
Ct(a,e)}catch(f){a.state=7,f instanceof Error&&Sp(f)}}
l.invoke=function(a){a=void 0===a?{}:a;if(this.h){var b=this.h;a={rb:a};if(b.i)throw Error("Already disposed");b=b.l([a.rb,a.zc])}else b=null;return b};
l.dispose=function(){Ct(this,null);this.state=8};
function Ct(a,b){pe(a.h);a.h=b}
;var Ft=new zt;function Gt(){return Ft.isInitialized()}
function Ht(a){a=void 0===a?{}:a;return Ft.invoke(a)}
;function It(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Gi():d;this.l=c;this.j=d;this.i=new Ad;this.h=a;a={};c=q(this.h.entries());for(d=c.next();!d.done;a={ta:a.ta,Ca:a.Ca},d=c.next()){var e=q(d.value);d=e.next().value;e=e.next().value;a.Ca=d;a.ta=e;d=function(f){return function(){f.ta.gb();b.h[f.Ca].Ta=!0;b.h.every(function(g){return!0===g.Ta})&&b.i.resolve()}}(a);
e=Ci(d,Jt(this,a.ta));this.h[a.Ca]=Object.assign(Object.assign({},a.ta),{gb:d,Oa:e})}}
function Kt(a){var b=Array.from(a.h.keys()).sort(function(d,e){return Jt(a,a.h[e])-Jt(a,a.h[d])});
b=q(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.Oa||c.Ta||(a.j.T(c.Oa),Ci(c.gb,10))}
It.prototype.cancel=function(){for(var a=q(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Oa||b.Ta||this.j.T(b.Oa),b.Ta=!0;this.i.resolve()};
function Jt(a,b){var c;return null!==(c=b.priority)&&void 0!==c?c:a.l}
;function Lt(a){this.state=a;this.plugins=[];this.m=void 0}
Lt.prototype.install=function(){this.plugins.push.apply(this.plugins,ja(Ha.apply(0,arguments)))};
Lt.prototype.transition=function(a,b){var c=this,d=this.C.find(function(f){return f.from===c.state&&f.B===a});
if(d){this.j&&(Kt(this.j),this.j=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Mt(this,e,this.m),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Mt(a,b,c){return function(){var d=Ha.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!==(m=null!==c&&void 0!==c?c:k.priority)&&void 0!==m?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!==(m=null!==c&&void 0!==c?c:k.priority)&&void 0!==m?m:0)});
Gi();var g={};e=q(e);for(var h=e.next();!h.done;g={Da:g.Da},h=e.next())g.Da=h.value,Ei(function(k){return function(){k.Da.ka.apply(k.Da,ja(d))}}(g));
f=f.map(function(k){var m;return{gb:function(){k.ka.apply(k,ja(d))},
priority:null!==(m=null!==c&&void 0!==c?c:k.priority)&&void 0!==m?m:0}});
f.length&&(a.j=new It(f))}}
fa.Object.defineProperties(Lt.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Nt(a){Lt.call(this,void 0===a?"document_active":a);var b=this;this.m=10;this.h=new Map;this.C=[{from:"document_active",B:"document_disposed_preventable",action:this.u},{from:"document_active",B:"document_disposed",action:this.l},{from:"document_disposed_preventable",B:"document_disposed",action:this.l},{from:"document_disposed_preventable",B:"flush_logs",action:this.o},{from:"document_disposed_preventable",B:"document_active",action:this.i},{from:"document_disposed",B:"flush_logs",action:this.o},
{from:"document_disposed",B:"document_active",action:this.i},{from:"document_disposed",B:"document_disposed",action:function(){}},
{from:"flush_logs",B:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",c)});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",c)})}
r(Nt,Lt);Nt.prototype.u=function(a,b){if(!this.h.get("document_disposed_preventable")&&(a(b),(null===b||void 0===b?0:b.defaultPrevented)||(null===b||void 0===b?0:b.returnValue))){b.returnValue||(b.returnValue=!0);b.defaultPrevented||b.preventDefault();this.h=new Map;this.transition("document_active");return}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Nt.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Nt.prototype.o=function(a,b){a(b);this.transition("document_active")};
Nt.prototype.i=function(){this.h=new Map};function Ot(a){Lt.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.C=[{from:"document_visibility_unknown",B:"document_visible",action:this.i},{from:"document_visibility_unknown",B:"document_hidden",action:this.h},{from:"document_visibility_unknown",B:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",B:"document_backgrounded",action:this.l},{from:"document_visible",B:"document_hidden",action:this.h},{from:"document_visible",B:"document_foregrounded",action:this.o},
{from:"document_visible",B:"document_visible",action:this.i},{from:"document_foregrounded",B:"document_visible",action:this.i},{from:"document_foregrounded",B:"document_hidden",action:this.h},{from:"document_foregrounded",B:"document_foregrounded",action:this.o},{from:"document_hidden",B:"document_visible",action:this.i},{from:"document_hidden",B:"document_backgrounded",action:this.l},{from:"document_hidden",B:"document_hidden",action:this.h},{from:"document_backgrounded",B:"document_hidden",action:this.h},
{from:"document_backgrounded",B:"document_backgrounded",action:this.l},{from:"document_backgrounded",B:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",c):b.transition("document_hidden",c)});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",c)}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",c)}))}
r(Ot,Lt);Ot.prototype.i=function(a,b){a(b);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Ot.prototype.h=function(a,b){a(b);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Ot.prototype.l=function(a,b){a(b)};
Ot.prototype.o=function(a,b){a(b)};function Pt(){this.h=new Nt;this.i=new Ot}
Pt.prototype.install=function(){var a=Ha.apply(0,arguments);this.h.install.apply(this.h,ja(a));this.i.install.apply(this.i,ja(a))};function Qt(){Pt.call(this);var a={};this.install((a.document_disposed={ka:this.j},a));a={};this.install((a.flush_logs={ka:this.l},a))}
var Rt;r(Qt,Pt);Qt.prototype.l=function(){wl("finalPayload",{csn:jq()})};
Qt.prototype.j=function(){Wp(Xp)};function St(){}
St.getInstance=function(){var a=A("ytglobal.storage_");a||(a=new St,z("ytglobal.storage_",a,void 0));return a};
St.prototype.estimate=function(){var a,b,c;return w(function(d){c=navigator;return(null===(a=c.storage)||void 0===a?0:a.estimate)?d.return(c.storage.estimate()):(null===(b=c.webkitTemporaryStorage)||void 0===b?0:b.queryUsageAndQuota)?d.return(Tt()):d.return()})};
function Tt(){var a=navigator;return new Promise(function(b,c){var d;null!==(d=a.webkitTemporaryStorage)&&void 0!==d&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
z("ytglobal.storageClass_",St,void 0);function ul(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=ci("ytidb_transaction_ended_event_rate_limit",.02)}
ul.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Ut(this,b);break;case "TRANSACTION_ENDED":this.j&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign(Object.assign({},
b),{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Ut(a,b){St.getInstance().estimate().then(function(c){c=Object.assign(Object.assign({},b),{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Vt(null===c||void 0===c?void 0:c.usage),deviceStorageQuotaMbytes:Vt(null===c||void 0===c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Vt(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;var Wt=window;
function Xt(){var a=Wt.uaChPolyfill.state;if(0===a.type)wl("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&a.syntheticUa===b,d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),Rp(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);wl("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),wl("clientHintsPolyfillDiagnostics",
b))}}
var Yt=!1;function Zt(){var a;1===(null===(a=Wt.uaChPolyfill)||void 0===a?void 0:a.state.type)?Yt||(Wt.uaChPolyfill.onReady=Zt,Yt=!0):Wt.uaChPolyfill&&Xt()}
;function $t(a,b,c){J.call(this);var d=this;c=c||B("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.L="*";this.l=c;this.sessionId=null;this.channel="widget";this.M=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.M&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.L=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.u||0<=db(d.u,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.u=this.i=this.m=null;window.addEventListener("message",this.A)}
r($t,J);$t.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.L)}catch(d){ni(d)}}};
$t.prototype.I=function(){window.removeEventListener("message",this.A);J.prototype.I.call(this)};function au(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new $t(!!B("WIDGET_ID_ENFORCE")),b=this.jc.bind(this);a.m=b;a.u=null;this.h.channel="widget";if(a=B("WIDGET_ID"))this.h.sessionId=a}
l=au.prototype;l.jc=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,bu(this,a)),this.j[a]=!0)):this.mb(a,b,c)};
l.mb=function(){};
function bu(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Wb=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Za());this.sendMessage("onReady");eb(this.i,this.Jb,this);this.i=[]};
l.Za=function(){return null};
function cu(a,b){a.sendMessage("infoDelivery",b)}
l.Jb=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.Jb({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.h=null};function du(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function eu(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function fu(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function gu(a){au.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.uc.bind(this));this.addEventListener("onVolumeChange",this.vc.bind(this));this.addEventListener("onApiChange",this.nc.bind(this));this.addEventListener("onPlaybackQualityChange",this.qc.bind(this));this.addEventListener("onPlaybackRateChange",this.sc.bind(this));this.addEventListener("onStateChange",this.tc.bind(this));this.addEventListener("onWebglSettingsChanged",
this.wc.bind(this))}
r(gu,au);l=gu.prototype;
l.mb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&du(a)){var d=b;if(Qa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=eu(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=eu(e);break;case "loadPlaylist":case "cuePlaylist":e=fu(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);du(a)&&cu(this,this.Za())}};
l.onReady=function(){var a=this.Wb.bind(this);this.h.i=a};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.Za=function(){if(!this.api)return null;var a=this.api.getApiInterface();jb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.tc=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());cu(this,a)};
l.qc=function(a){cu(this,{playbackQuality:a})};
l.sc=function(a){cu(this,{playbackRate:a})};
l.nc=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.vc=function(){cu(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.uc=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());cu(this,a)};
l.wc=function(){var a={sphericalProperties:this.api.getSphericalProperties()};cu(this,a)};
l.dispose=function(){au.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function hu(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Fb,this)}
r(hu,J);l=hu.prototype;l.start=function(){this.started||this.h()||(this.started=!0,this.connection.ma("RECEIVING"))};
l.ma=function(a,b){this.started&&!this.h()&&this.connection.ma(a,b)};
l.Fb=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=iu(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=ju(a,c))&&this.ma(a,c))}}};
l.addListener=function(a){if(!(a in this.i)){var b=this.oc.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
l.oc=function(a,b){this.started&&!this.h()&&this.connection.ma(a,this.Ya(a,b))};
l.Ya=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
l.I=function(){var a=this.connection;a.h()||sg(a.i,"command",this.Fb,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.I.call(this)};function ku(a,b){hu.call(this,b);this.api=a;this.start()}
r(ku,hu);ku.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
ku.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function iu(a,b){switch(a){case "loadVideoById":return a=eu(b),[a];case "cueVideoById":return a=eu(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=fu(b),[a];case "cuePlaylist":return a=fu(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function ju(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ku.prototype.Ya=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return hu.prototype.Ya.call(this,a,b)};
ku.prototype.I=function(){hu.prototype.I.call(this);delete this.api};function lu(a){a=void 0===a?!1:a;J.call(this);this.i=new L(a);re(this,Xa(pe,this.i))}
Za(lu,J);lu.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
lu.prototype.l=function(a,b){this.h()||this.i.ja.apply(this.i,arguments)};function mu(a,b,c){lu.call(this);this.j=a;this.destination=b;this.id=c}
r(mu,lu);mu.prototype.ma=function(a,b){this.h()||this.j.ma(this.destination,this.id,a,b)};
mu.prototype.I=function(){this.destination=this.j=null;lu.prototype.I.call(this)};function nu(a,b,c){J.call(this);this.destination=a;this.origin=c;this.i=ui(window,"message",this.j.bind(this));this.connection=new mu(this,a,b);re(this,Xa(pe,this.connection))}
r(nu,J);nu.prototype.ma=function(a,b,c,d){this.h()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Sf(a),this.origin))};
nu.prototype.j=function(a){var b;if(b=!this.h())if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h()||c.l("command",b.command,b.data,a.origin))}};
nu.prototype.I=function(){vi(this.i);this.destination=null;J.prototype.I.call(this)};function ou(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||tb(b);this.assets=a.assets||{};this.attrs=a.attrs||tb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
ou.prototype.clone=function(){var a=new ou,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Oa(c)?a[b]=tb(c):a[b]=c}return a};var pu=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function qu(a){a=a||"";if(window.spf){var b=a.match(pu);spf.style.load(a,b?b[1]:"",void 0)}else ru(a)}
function ru(a){var b=su(a),c=document.getElementById(b),d=c&&jt(c,"loaded");d||c&&!d||(c=tu(a,b,function(){jt(c,"loaded")||(gt(c),Sj(b),xi(Xa(Tj,b),0))}))}
function tu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Qf(a);Wb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function su(a){var b=Md("A");Db("This URL is never added to the DOM");Vb(b,new Lb(a,Mb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+$b(a)}
;function uu(){J.call(this);this.i=[]}
r(uu,J);uu.prototype.I=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.ka,void 0)}J.prototype.I.call(this)};function vu(){uu.apply(this,arguments)}
r(vu,uu);function wu(a,b,c,d){J.call(this);var e=this;this.M=b;this.webPlayerContextConfig=d;this.Va=!1;this.api={};this.Ea=this.u=null;this.S=new L;this.i={};this.fa=this.Fa=this.elementId=this.Wa=this.config=null;this.Y=!1;this.l=this.A=null;this.Ga={};this.Nb=["onReady"];this.lastError=null;this.nb=NaN;this.L={};this.Ob=new vu(this);this.oa=0;this.j=this.m=a;re(this,Xa(pe,this.S));xu(this);yu(this);re(this,Xa(pe,this.Ob));c?this.oa=xi(function(){e.loadNewVideoConfig(c)},0):d&&(zu(this),Au(this))}
r(wu,J);l=wu.prototype;l.getId=function(){return this.M};
l.loadNewVideoConfig=function(a){if(!this.h()){this.oa&&(yi(this.oa),this.oa=0);var b=a||{};b instanceof ou||(b=new ou(b));this.config=b;this.setConfig(a);Au(this);this.isReady()&&Bu(this)}};
function zu(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.M,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.M:a.config.attrs.id=a.M);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){var b;this.Wa=a;this.config=Cu(a);zu(this);this.Fa||(this.Fa=Du(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=Xd(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=Xd(Number(a)||a))};
function Bu(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function Eu(a){var b=!0,c=Fu(a);c&&a.config&&(a=Gu(a),b=jt(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function Au(a){if(!a.h()&&!a.Y){var b=Eu(a);if(b&&"html5"===(Fu(a)?"html5":null))a.fa="html5",a.isReady()||Hu(a);else if(Iu(a),a.fa="html5",b&&a.l&&a.m)a.m.appendChild(a.l),Hu(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=Ju(a,"player_bootstrap_method")?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.config?Cu(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig);Hu(a)};
a.Y=!0;b?a.A():(nt(Gu(a),a.A),(b=Ku(a))&&qu(b),Lu(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function Fu(a){var b=Ld(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Hu(a){var b;if(!a.h()){var c=Fu(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.Y=!1,!Ju(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||Mu(a)):a.nb=xi(function(){Hu(a)},50)}}
function Mu(a){xu(a);a.Va=!0;var b=Fu(a);if(b){a.u=Nu(a,b,"addEventListener");a.Ea=Nu(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Nu(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.u&&a.u(g,a.i[g]);Bu(a);a.Fa&&a.Fa(a.api);a.S.ja("onReady",a.api)}
function Nu(a,b,c){var d=b[c];return function(){var e=Ha.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Sp(f))}}}
function xu(a){a.Va=!1;if(a.Ea)for(var b in a.i)a.i.hasOwnProperty(b)&&a.Ea(b,a.i[b]);for(var c in a.L)a.L.hasOwnProperty(c)&&yi(Number(c));a.L={};a.u=null;a.Ea=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Wa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.Va};
function yu(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Sj("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Sj("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Sj("a11y-announce",b)})}
l.addEventListener=function(a,b){var c=this,d=Du(this,b);d&&(0<=db(this.Nb,a)||this.i[a]||(b=Ou(this,a),this.u&&this.u(a,b)),this.S.subscribe(a,d),"onReady"===a&&this.isReady()&&xi(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.h()||(b=Du(this,b))&&sg(this.S,a,b)};
function Du(a,b){var c=b;if("string"===typeof b){if(a.Ga[b])return a.Ga[b];c=function(){var d=Ha.apply(0,arguments),e=A(b);if(e)try{e.apply(y,d)}catch(f){Rp(f)}};
a.Ga[b]=c}return c?c:null}
function Ou(a,b){var c="ytPlayer"+b+a.M;a.i[b]=c;y[c]=function(d){var e=xi(function(){if(!a.h()){a.S.ja(b,null!==d&&void 0!==d?d:void 0);var f=a.L,g=String(e);g in f&&delete f[g]}},0);
qb(a.L,String(e))};
return c}
l.getPlayerType=function(){return this.fa||(Fu(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function Iu(a){a.cancel();xu(a);a.fa=null;a.config&&(a.config.loaded=!1);var b=Fu(a);b&&(Eu(a)||!Lu(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.A&&tt(Gu(this),this.A);yi(this.nb);this.Y=!1};
l.I=function(){Iu(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Rp(b)}this.Ga=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.Wa=this.config=this.api=null;delete this.m;delete this.j;J.prototype.I.call(this)};
function Lu(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Gu(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Ku(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Ju(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===lj(d||"","&")[b]}
function Cu(a){for(var b={},c=q(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?tb(e):e}return b}
;var Pu={},Qu="player_uid_"+(1E9*Math.random()>>>0);function Ru(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Ld(d):d;var e=Qu+"_"+Ra(d),f=Pu[e];if(f&&c)return Su(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new wu(d,e,a,b);Pu[e]=f;Sj("player-added",f.api);re(f,function(){delete Pu[f.getId()]});
return f.api}
function Su(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Tu=null,Uu=null,Vu=null;function Wu(){var a=Tu.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Xu(a,b,c){a="ST-"+$b(a).toString(36);b=b?gc(b):"";c=c||5;xq()&&Jk(a,b,c)}
;function Yu(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=B("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=B("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=dc(window.location.href);g&&f.push(g);g=dc(d);if(0<=db(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),Vb(f,d),d=f.href),d&&(d=ec(d),f=d.indexOf("#"),d=0>f?d:d.substr(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:jq()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
Xu(d,b,h)}else Xu(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var n=void 0===n?window:n;c=n.location;a=hc(a,k)+m;var v=void 0===v?Wd:v;a:{v=void 0===v?Wd:v;for(k=0;k<v.length;++k)if(m=v[k],m instanceof Ud&&m.isValid(a)){v=new Fd(a,Dd);break a}v=void 0}c.href=Hd(v||Gd)}return!0}
;z("yt.setConfig",Zh,void 0);z("yt.config.set",Zh,void 0);z("yt.setMsg",oq,void 0);z("yt.msgs.set",oq,void 0);z("yt.logging.errors.log",Rp,void 0);
z("writeEmbed",function(){var a=B("PLAYER_CONFIG",void 0);if(!a){var b=B("PLAYER_VARS",void 0);b&&(a={args:b})}Fq(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=B("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=qj(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));bs();
if((c=B("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=qj(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Tu=Ru(a,c,!1)}else Tu=Ru(a);Tu.addEventListener("onVideoDataChange",Wu);a=B("POST_MESSAGE_ID","player");B("ENABLE_JS_API")?Vu=new gu(Tu):B("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Uu=new nu(window.parent,
a,b),Vu=new ku(Tu,Uu.connection));wt();M("ytidb_create_logger_embed_killswitch")||tl();M("flush_gel_on_teardown")&&(a={},Rt||(Rt=new Qt),Rt.install((a.flush_logs={ka:function(){lk()}},a)));
M("networkless_logging_web_embedded")&&(M("embeds_web_enable_new_nwl")?To():ap());M("embeds_enable_ua_ch_polyfill")&&Zt();M("ytidb_clear_embedded_player")&&bf.N(function(){if(!Fs){Pq||(Pq=new Mq);var e=Pq;if(M("web_inject_fetch_manager")){var f={ic:Es,Lb:Ds};e.providers.set(f.ic,f)}f={qb:{feedbackEndpoint:$q(zs),modifyChannelNotificationPreferenceEndpoint:$q(As),playlistEditEndpoint:$q(Bs),subscribeEndpoint:$q(xs),unsubscribeEndpoint:$q(ys),webPlayerShareEntityServiceEndpoint:$q(Cs)}};var g=M("web_enable_client_location_service")?
Wq.getInstance():void 0,h={};g&&(h.client_location=g);if(void 0===k){Gq.h||(Gq.h=new Gq);var k=Gq.h}if(void 0===m)if(M("web_inject_fetch_manager"))var m=e.resolve(Es);else Ds.h||(Ds.h=new Ds),m=Ds.h;ms(f,m,k,h);Fs=ls.h}ft()})},void 0);
var Zu=li(function(){is();var a=Nk.getInstance(),b=Qk(119),c=1<window.devicePixelRatio;if(document.body&&Af(document.body,"exp-invert-logo"))if(c&&!Af(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Af(d,"inverted-hdpi")){var e=yf(d);zf(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Af(document.body,"inverted-hdpi")&&Bf();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Rk(b)||0;d=c?d|67108864:d&-67108865;0==d?delete Mk[b]:(c=d.toString(16),
Mk[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in Mk)d.push(f+"="+encodeURIComponent(String(Mk[f])));Jk(b,d.join("&"),63072E3,a.i,c)}Ps.h||(Ps.h=new Ps);a=Ps.h;f=16623;var g=void 0===g?{}:g;Object.values(pq).includes(f)||(Sp(new P("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.o=[];a.C=[];g.tb?Ss(a,f,g):Ts(a,f,g)}),$u=li(function(){Tu&&Tu.sendAbandonmentPing&&Tu.sendAbandonmentPing();
B("PL_ATT")&&Ft.dispose();for(var a=bf,b=0,c=ut.length;b<c;b++)a.T(ut[b]);ut.length=0;st("//web.archive.org/web/20220301220440/https://static.doubleclick.net/instream/ad_status.js");vt=!1;Zh("DCLKSTAT",0);qe(Vu,Uu);Tu&&(Tu.removeEventListener("onVideoDataChange",Wu),Tu.destroy())});
window.addEventListener?(window.addEventListener("load",Zu),M("embeds_web_enable_replace_unload_w_pagehide")?window.addEventListener("pagehide",$u):window.addEventListener("unload",$u)):window.attachEvent&&(window.attachEvent("onload",Zu),window.attachEvent("onunload",$u));Ya("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||Gt);Ya("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||Ht);
Ya("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||xt);Ya("yt.player.exports.navigate",A("yt.player.exports.navigate")||Yu);Ya("yt.util.activity.init",A("yt.util.activity.init")||cj);Ya("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||fj);Ya("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||dj);}).call(this);


}
/*
     FILE ARCHIVED ON 22:04:40 Mar 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:54:07 Jun 19, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 5.418
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.033
  esindex: 0.035
  cdx.remote: 39.081
  LoadShardBlock: 344.484 (6)
  PetaboxLoader3.datanode: 437.267 (8)
  load_resource: 420.831 (2)
  PetaboxLoader3.resolve: 156.652 (2)
*/