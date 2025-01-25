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

(()=>{var e={75:function(e){(function(){var t,n,r;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-r)/1e6},n=process.hrtime,r=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})()):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)},542:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=void 0,n=void 0;function r(){n=o.default((function(){n=null,e.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))}))}return{fn:function(){for(var e=arguments.length,o=Array(e),a=0;a<e;a++)o[a]=arguments[a];n||r(),t=o},cancel:function(){n&&o.default.cancel(n)}}};var r,o=(r=n(87))&&r.__esModule?r:{default:r};e.exports=t.default},87:(e,t,n)=>{for(var r=n(75),o="undefined"==typeof window?{}:window,a=["moz","webkit"],i="AnimationFrame",c=o["request"+i],u=o["cancel"+i]||o["cancelRequest"+i],l=!0,f=0;f<a.length&&!c;f++)c=o[a[f]+"Request"+i],u=o[a[f]+"Cancel"+i]||o[a[f]+"CancelRequest"+i];if(!c||!u){l=!1;var s=0,d=0,p=[];c=function(e){if(0===p.length){var t=r(),n=Math.max(0,16.666666666666668-(t-s));s=n+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(s)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return p.push({handle:++d,callback:e,cancelled:!1}),d},u=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return l?c.call(o,(function(){try{e.apply(this,arguments)}catch(e){setTimeout((function(){throw e}),0)}})):c.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(542),t=n.n(e);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(){for(var e=document.getElementsByTagName("iframe"),t=0;t<e.length;t++){var n=e[t];n.__vp||l(n)&&i(n)}}function i(e){var t=e.parentNode;if(t){var n=parseFloat(e.width),r=parseFloat(e.height),o=e.hasAttribute("data-resize-to-parent"),a=function(){var a=t.getBoundingClientRect(),i="width"in a?a.width:t.offsetWidth;e.width=parseFloat(o?i:Math.min(i,n)),e.height=r/n*e.width};a(),window.ResizeObserver?new ResizeObserver(a).observe(t):__vpResize(e,a),e.onload=function(){a()},e.__vp=!0}}var c=[];window.__vpResize=window.__vpResize||function(e,n){c.push([e,n]),1==c.length&&function(){var e=t()((function(){c.forEach((function(e){return(0,r(e,2)[1])()}))})),n=e.fn,o=e.cancel;window.addEventListener("resize",n,!1);var a=setInterval((function(){t()((function(){c.forEach((function(e,t){for(var n=r(e,1)[0];n!=document.body;)if(!(n=n.parentNode)){c.splice(t,1),c.length||i();break}}))})).fn()}),1e4),i=function(){o(),window.removeEventListener("resize",n,!1),clearInterval(a)}}()};var u=/videopress|video.wordpress\.com\/embed\//;function l(e){return u.test(e.src)}a(),document.addEventListener("DOMContentLoaded",a)})()})();

}
/*
     FILE ARCHIVED ON 04:13:45 Jan 31, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:17:23 Jan 25, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.622
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.011
  cdx.remote: 25.156
  LoadShardBlock: 267.829 (6)
  PetaboxLoader3.datanode: 260.868 (8)
  PetaboxLoader3.resolve: 170.304 (3)
  load_resource: 254.245 (2)
*/