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

(function(g){var window=this;'use strict';var MTa=function(a,b){return g.Be(a,b)},NTa=function(a,b){b=b instanceof g.Df?b:g.Jf(b,/^data:image\//i.test(b));
a.src=g.Ef(b)},O6=function(a){g.Jk(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Sa()).toString(36));
return a},P6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Ok(a.u,b,c)},OTa=function(a){if(a===g.No)throw Error("ES6 Iteration protocol does NOT adjust control flow when StopIteration is thrown from callback helper functions. If your code relies on this behavior, consider throwing a different error and catching it to terminate iteration.");
throw a;},PTa=function(a){if(a instanceof g.Lo)return a;
if("function"==typeof a.Kg)return a.Kg(!1);if(g.Ma(a)){var b=0,c=new g.Lo;c.next=function(){for(;;){if(b>=a.length)return g.$1;if(b in a)return g.Mo(a[b++]);b++}};
var d=c.next;c.zj=function(){return g.Oo(d.call(c))};
return c}throw Error("Not implemented");},QTa=function(a,b,c){if(g.Ma(a))try{g.jc(a,b,c)}catch(e){OTa(e)}else for(a=PTa(a);;){var d=void 0;
try{d=a.zj()}catch(e){if(e===g.No)break;throw e;}try{b.call(c,d,void 0,a)}catch(e){OTa(e)}}},RTa=function(a,b){var c=[];
QTa(b,function(d){try{var e=g.ds.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.cs(e)&&c.push(d)},a);
return c},STa=function(a,b){RTa(a,b).forEach(function(c){g.ds.prototype.remove.call(this,c)},a)},TTa=function(a){if(a.va){if(a.va.locationOverrideToken)return{locationOverrideToken:a.va.locationOverrideToken};
if(null!=a.va.latitudeE7&&null!=a.va.longitudeE7)return{latitudeE7:a.va.latitudeE7,longitudeE7:a.va.longitudeE7}}return null},UTa=function(a,b){g.Pb(a,b)||a.push(b)},Q6=function(a){var b=0,c;
for(c in a)b++;return b},VTa=function(a){try{return g.B.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},R6=function(a){if(g.B.JSON)try{return g.B.JSON.parse(a)}catch(b){}return VTa(a)},WTa=function(a,b,c,d){var e=new g.Bk(null,void 0);
a&&g.Ck(e,a);b&&g.Dk(e,b);c&&g.Ek(e,c);d&&(e.K=d);return e},S6=function(a,b){g.yv[a]=!0;
var c=g.wv();c&&c.publish.apply(c,arguments);g.yv[a]=!1},T6=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Er;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",XTa(this,a.capabilities||""),YTa(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},XTa=function(a,b){a.capabilities.clear();
g.mp(b.split(","),g.Ra(MTa,ZTa)).forEach(function(c){a.capabilities.add(c)})},YTa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},U6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},V6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},$Ta=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},aUa=function(a){return new U6(a)},bUa=function(a){return Array.isArray(a)?g.Ym(a,aUa):[]},W6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},X6=function(a){return Array.isArray(a)?"["+g.Ym(a,W6).join(",")+"]":"null"},Y6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},cUa=function(a){return g.Ym(a,function(b){return{key:b.id,
name:b.name}})},Z6=function(a,b){return g.Mb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},$6=function(a,b){return g.Mb(a,function(c){return V6(c,b)})},dUa=function(){var a=(0,g.ty)();
a&&STa(a,a.i.Kg(!0))},a7=function(){var a=g.wy("yt-remote-connected-devices")||[];
g.gc(a);return a},eUa=function(a){if(g.Qb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Ym(a,function(d,e){return 0==e?d:d.substring(c.length)})},fUa=function(a){g.vy("yt-remote-connected-devices",a,86400)},c7=function(){if(b7)return b7;
var a=g.wy("yt-remote-device-id");a||(a=Y6(),g.vy("yt-remote-device-id",a,31536E3));for(var b=a7(),c=1,d=a;g.Pb(b,d);)c++,d=a+"#"+c;return b7=d},d7=function(){var a=a7(),b=c7();
g.Pb(a,b);g.zy()&&g.ic(a,b);a=eUa(a);if(g.Qb(a))try{g.vu("remote_sid")}catch(c){}else try{g.tu("remote_sid",a.join(","),-1)}catch(c){}},gUa=function(){return g.wy("yt-remote-session-browser-channel")},hUa=function(){return g.wy("yt-remote-local-screens")||[]},iUa=function(){g.vy("yt-remote-lounge-token-expiration",!0,86400)},jUa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Ym(hUa(),function(d){return d.loungeToken}),c=g.Ym(a,function(d){return d.loungeToken});
g.Zm(c,function(d){return!g.Pb(b,d)})&&iUa();
g.vy("yt-remote-local-screens",a,31536E3)},kUa=function(a,b){g.vy("yt-remote-session-browser-channel",a);
g.vy("yt-remote-session-screen-id",b);a=a7();b=c7();g.Pb(a,b)||a.push(b);fUa(a);d7()},e7=function(a){a||(g.yy("yt-remote-session-screen-id"),g.yy("yt-remote-session-video-id"));
d7();a=a7();g.Tb(a,c7());fUa(a)},lUa=function(){if(!f7){var a=g.ns();
a&&(f7=new g.Yr(a))}},mUa=function(){lUa();
return f7?!!f7.get("yt-remote-use-staging-server"):!1},g7=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},nUa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},oUa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},h7=function(a){a.length?pUa(a.shift(),function(){h7(a)}):i7()},qUa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},pUa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Yj(d,g.Mr(a));(document.head||document.documentElement).appendChild(d)},rUa=function(){var a=g7(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20211117205401/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20211117205401/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},i7=function(){var a=oUa();
a&&a(!1,"No cast extension found")},j7=function(){if(sUa){var a=2,b=oUa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;pUa("//web.archive.org/web/20211117205401/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",i7,c)}},tUa=function(){j7();
var a=rUa();a.push("//web.archive.org/web/20211117205401/https://www.gstatic.com/eureka/clank/cast_sender.js");h7(a)},vUa=function(){j7();
var a=rUa();a.push.apply(a,g.ma(uUa.map(qUa)));a.push("//web.archive.org/web/20211117205401/https://www.gstatic.com/eureka/clank/cast_sender.js");h7(a)},k7=function(a,b,c){g.E.call(this);
this.I=null!=c?(0,g.C)(a,c):a;this.Vf=b;this.D=(0,g.C)(this.xQ,this);this.i=!1;this.u=0;this.B=this.Nb=null;this.C=[]},l7=function(a,b,c){g.E.call(this);
this.C=null!=c?a.bind(c):a;this.Vf=b;this.B=null;this.i=!1;this.u=0;this.Nb=null},m7=function(a){a.Nb=g.Mh(function(){a.Nb=null;
a.i&&!a.u&&(a.i=!1,m7(a))},a.Vf);
var b=a.B;a.B=null;a.C.apply(null,b)},n7=function(){},o7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.B.setTimeout(function(){a()},b)},q7=function(a){p7.dispatchEvent(new wUa(p7,a))},wUa=function(a,b){g.ie.call(this,"statevent",a);
this.stat=b},r7=function(a,b,c,d){this.i=a;
this.B=b;this.S=c;this.K=d||1;this.u=45E3;this.C=new g.Pk(this);this.I=new g.Lh;this.I.setInterval(250)},yUa=function(a,b,c){a.Nt=1;
a.Xm=O6(b.clone());a.xq=c;a.D=!0;xUa(a,null)},s7=function(a,b,c,d,e){a.Nt=1;
a.Xm=O6(b.clone());a.xq=null;a.D=c;e&&(a.ON=!1);xUa(a,d)},xUa=function(a,b){a.At=Date.now();
t7(a);a.Ho=a.Xm.clone();P6(a.Ho,"t",a.K);a.vB=0;a.Lf=a.i.sD(a.i.lx()?b:null);0<a.hC&&(a.JA=new l7((0,g.C)(a.SO,a,a.Lf),a.hC));a.C.Qa(a.Lf,"readystatechange",a.yQ);b=a.Wo?g.Ke(a.Wo):{};a.xq?(a.tB="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Lf.send(a.Ho,a.tB,a.xq,b)):(a.tB="GET",a.ON&&!g.Lg&&(b.Connection="close"),a.Lf.send(a.Ho,a.tB,null,b));a.i.Aj(1)},AUa=function(a,b){var c=a.vB,d=b.indexOf("\n",c);
if(-1==d)return u7;c=Number(b.substring(c,d));if(isNaN(c))return zUa;d+=1;if(d+c>b.length)return u7;b=b.substr(d,c);a.vB=d+c;return b},CUa=function(a,b){a.At=Date.now();
t7(a);var c=b?window.location.hostname:"";a.Ho=a.Xm.clone();g.Jk(a.Ho,"DOMAIN",c);g.Jk(a.Ho,"t",a.K);try{a.Nj=new ActiveXObject("htmlfile")}catch(m){v7(a);a.Qm=7;q7(22);w7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in x7)f=x7[f];else if(f in BUa)f=x7[f]=BUa[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
x7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.$f(g.tf("b/12014412"),d);a.Nj.open();a.Nj.write(g.Wf(c));a.Nj.close();a.Nj.parentWindow.m=(0,g.C)(a.qW,a);a.Nj.parentWindow.d=(0,g.C)(a.ZM,a,!0);a.Nj.parentWindow.rpcClose=(0,g.C)(a.ZM,a,!1);c=a.Nj.createElement("DIV");a.Nj.parentWindow.document.body.appendChild(c);d=g.If(a.Ho.toString());d=g.qg(g.Ef(d));d=g.$f(g.tf("b/12014412"),'<iframe src="'+d+'"></iframe>');g.bg(c,d);a.i.Aj(1)},t7=function(a){a.hH=Date.now()+
a.u;
DUa(a,a.u)},DUa=function(a,b){if(null!=a.Yt)throw Error("WatchDog timer not null");
a.Yt=o7((0,g.C)(a.xW,a),b)},y7=function(a){a.Yt&&(g.B.clearTimeout(a.Yt),a.Yt=null)},w7=function(a){a.i.sf()||a.qp||a.i.Wx(a)},v7=function(a){y7(a);
g.fe(a.JA);a.JA=null;a.I.stop();g.bl(a.C);if(a.Lf){var b=a.Lf;a.Lf=null;b.abort();b.dispose()}a.Nj&&(a.Nj=null)},z7=function(a,b){try{a.i.SM(a,b),a.i.Aj(4)}catch(c){}},FUa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;EUa(a,b,function(h){h?c(!0):g.B.setTimeout(function(){FUa(a,b,c,d,f)},f)})}},EUa=function(a,b,c){var d=new Image;
d.onload=function(){try{A7(d),c(!0)}catch(e){}};
d.onerror=function(){try{A7(d),c(!1)}catch(e){}};
d.onabort=function(){try{A7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{A7(d),c(!1)}catch(e){}};
g.B.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
NTa(d,a)},A7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},GUa=function(a){this.i=a;
this.u=new n7},HUa=function(a){var b=B7(a.i,a.Nu,"/mail/images/cleardot.gif");
O6(b);FUa(b.toString(),5E3,(0,g.C)(a.pR,a),3,2E3);a.Aj(1)},D7=function(a){var b=a.i.X;
if(null!=b)q7(5),b?(q7(11),C7(a.i,a,!1)):(q7(12),C7(a.i,a,!0));else if(a.qh=new r7(a,void 0,void 0,void 0),a.qh.Wo=a.iC,b=a.i,b=B7(b,b.lx()?a.Fu:null,a.jC),q7(5),!g.Bc||g.tc(10))P6(b,"TYPE","xmlhttp"),s7(a.qh,b,!1,a.Fu,!1);else{P6(b,"TYPE","html");var c=a.qh;a=!!a.Fu;c.Nt=3;c.Xm=O6(b.clone());CUa(c,a)}},E7=function(a,b,c){this.i=1;
this.u=[];this.C=[];this.D=new n7;this.S=a||null;this.X=null!=b?b:null;this.I=c||!1},IUa=function(a,b){this.i=a;
this.map=b;this.context=null},JUa=function(a,b,c,d){g.ie.call(this,"timingevent",a);
this.size=b;this.Zw=d},KUa=function(a){g.ie.call(this,"serverreachability",a)},NUa=function(a){LUa(a);
if(3==a.i){var b=a.mw++,c=a.Qy.clone();g.Jk(c,"SID",a.B);g.Jk(c,"RID",b);g.Jk(c,"TYPE","terminate");F7(a,c);b=new r7(a,a.B,b,void 0);b.Nt=2;b.Xm=O6(c.clone());NTa(new Image,b.Xm.toString());b.At=Date.now();t7(b)}MUa(a)},OUa=function(a){a.PR(1,0);
a.Qy=B7(a,null,a.kC);G7(a)},LUa=function(a){a.dn&&(a.dn.abort(),a.dn=null);
a.Je&&(a.Je.cancel(),a.Je=null);a.El&&(g.B.clearTimeout(a.El),a.El=null);H7(a);a.Ug&&(a.Ug.cancel(),a.Ug=null);a.zn&&(g.B.clearTimeout(a.zn),a.zn=null)},PUa=function(a,b){if(0==a.i)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new IUa(a.qT++,b));2!=a.i&&3!=a.i||G7(a)},QUa=function(a){var b=0;
a.Je&&b++;a.Ug&&b++;return b},G7=function(a){a.Ug||a.zn||(a.zn=o7((0,g.C)(a.XM,a),0),a.rs=0)},SUa=function(a,b){if(1==a.i){if(!b){a.mw=Math.floor(1E5*Math.random());
b=a.mw++;var c=new r7(a,"",b,void 0);c.Wo=a.Yj;var d=I7(a),e=a.Qy.clone();g.Jk(e,"RID",b);g.Jk(e,"CVER","1");F7(a,e);yUa(c,e,d);a.Ug=c;a.i=2}}else 3==a.i&&(b?RUa(a,b):0==a.u.length||a.Ug||RUa(a))},RUa=function(a,b){if(b)if(6<a.rp){a.u=a.C.concat(a.u);
a.C.length=0;var c=a.mw-1;b=I7(a)}else c=b.S,b=b.xq;else c=a.mw++,b=I7(a);var d=a.Qy.clone();g.Jk(d,"SID",a.B);g.Jk(d,"RID",c);g.Jk(d,"AID",a.Qs);F7(a,d);c=new r7(a,a.B,c,a.rs+1);c.Wo=a.Yj;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Ug=c;yUa(c,d,b)},F7=function(a,b){a.Mf&&(a=a.Mf.oK())&&g.qe(a,function(c,d){g.Jk(b,d,c)})},I7=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.rp&&0<b){var d=a.u[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Xq:e.Xq},f++){e.Xq=a.u[f].i;var h=a.u[f].map;e.Xq=6>=a.rp?f:e.Xq-d;try{g.qe(h,function(l){return function(m,n){c.push("req"+l.Xq+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Xq+"_type="+encodeURIComponent("_badmap"))}}a.C=a.C.concat(a.u.splice(0,b));
return c.join("&")},TUa=function(a){a.Je||a.El||(a.K=1,a.El=o7((0,g.C)(a.WM,a),0),a.Pr=0)},J7=function(a){if(a.Je||a.El||3<=a.Pr)return!1;
a.K++;a.El=o7((0,g.C)(a.WM,a),UUa(a,a.Pr));a.Pr++;return!0},C7=function(a,b,c){a.rB=c;
a.Zj=b.ol;a.I||OUa(a)},H7=function(a){null!=a.Bp&&(g.B.clearTimeout(a.Bp),a.Bp=null)},UUa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},K7=function(a,b){if(2==b||9==b){var c=null;
a.Mf&&(c=null);var d=(0,g.C)(a.AX,a);c||(c=new g.Bk("//web.archive.org/web/20211117205401/https://www.google.com/images/cleardot.gif"),O6(c));EUa(c.toString(),1E4,d)}else q7(2);VUa(a,b)},VUa=function(a,b){a.i=0;
a.Mf&&a.Mf.BJ(b);MUa(a);LUa(a)},MUa=function(a){a.i=0;
a.Zj=-1;if(a.Mf)if(0==a.C.length&&0==a.u.length)a.Mf.fD();else{g.Wb(a.C);var b=g.Wb(a.u);a.C.length=0;a.u.length=0;a.Mf.fD(b)}},B7=function(a,b,c){var d=g.Kk(c);
if(""!=d.i)b&&g.Dk(d,b+"."+d.i),g.Ek(d,d.B);else{var e=window.location;d=WTa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.tv&&g.qe(a.tv,function(f,h){g.Jk(d,h,f)});
g.Jk(d,"VER",a.rp);F7(a,d);return d},WUa=function(){},XUa=function(){this.i=[];
this.u=[]},YUa=function(a,b){this.action=a;
this.params=b||{}},L7=function(a,b){g.E.call(this);
this.i=new g.I(this.hW,0,this);g.H(this,this.i);this.Vf=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.C)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.C)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},M7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.va=a;this.I=b;this.B=new g.Xr;this.u=new L7(this.eX,this);this.i=null;this.Z=!1;this.D=null;this.X="";this.S=this.C=0;this.K=[];this.Aa=c;this.oa=d;this.Ba=e},ZUa=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.rB,sessionId:a.i.B,arrayId:a.i.Qs}},$Ua=function(a,b){a.S=b||0;
a.u.stop();N7(a);a.i&&(3==a.i.getState()&&SUa(a.i),NUa(a.i));a.S=0},O7=function(a){return!!a.i&&3==a.i.getState()},N7=function(a){if(a.i){var b=a.oa(),c=a.i.Yj||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.Yj=c}},P7=function(a){this.port=this.domain="";
this.i="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.wi(4,a))||"";b&&(this.port=":"+b);this.domain=g.xi(a)||"";a=g.Ab;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.wb(a,"10.0")&&(this.u=!1))},Q7=function(a,b){var c=a.i;
a.u&&(c="https://"+a.domain+a.port+a.i);return g.Ii(c+b,{})},R7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ra(a.C,d,!0),onError:g.Ra(a.B,e),onTimeout:g.Ra(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.hu(b,a)},dVa=function(){var a=aVa;
bVa();S7.push(a);cVa()},T7=function(a,b){bVa();
var c=eVa(a,String(b));g.Qb(S7)?fVa(c):(cVa(),g.jc(S7,function(d){d(c)}))},bVa=function(){S7||(S7=g.Ia("yt.mdx.remote.debug.handlers_")||[],g.Ha("yt.mdx.remote.debug.handlers_",S7,void 0))},fVa=function(a){var b=(U7+1)%50;
U7=b;V7[b]=a;W7||(W7=49==b)},cVa=function(){var a=S7;
if(V7[0]){var b=W7?U7:-1;do{b=(b+1)%50;var c=V7[b];g.jc(a,function(d){d(c)})}while(b!=U7);
V7=Array(50);U7=-1;W7=!1}},eVa=function(a,b){var c=(Date.now()-gVa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},X7=function(a){g.Q.call(this);
this.I=a;this.screens=[]},hVa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},iVa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.mp(a.screens,function(f){return!!Z6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=hVa(a,b[d])||c;return c},jVa=function(a,b){var c=a.screens.length;
a.screens=g.mp(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},Y7=function(a,b,c,d,e){g.Q.call(this);
this.B=a;this.K=b;this.C=c;this.I=d;this.D=e;this.u=0;this.i=null;this.Nb=NaN},$7=function(a){X7.call(this,"LocalScreenService");
this.u=a;this.i=NaN;Z7(this);this.info("Initializing with "+X6(this.screens))},kVa=function(a){if(a.screens.length){var b=g.Ym(a.screens,function(d){return d.id}),c=Q7(a.u,"/pairing/get_lounge_token_batch");
R7(a.u,c,{screen_ids:b.join(",")},(0,g.C)(a.mS,a),(0,g.C)(a.lS,a))}},Z7=function(a){if(g.O("deprecate_pair_servlet_enabled"))return iVa(a,[]);
var b=bUa(hUa());b=g.mp(b,function(c){return!c.uuid});
return iVa(a,b)},a8=function(a,b){jUa(g.Ym(a.screens,$Ta));
b&&iUa()},c8=function(a,b){g.Q.call(this);
this.I=b;b=(b=g.wy("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.Pb(b,h)}this.i=c;this.D=a;this.B=this.C=NaN;this.u=null;b8("Initialized with "+g.ni(this.i))},d8=function(a,b,c){var d=Q7(a.D,"/pairing/get_screen_availability");
R7(a.D,d,{lounge_token:b.token},(0,g.C)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.C)(function(){c(!1)},a))},e8=function(a,b){a:if(Q6(b)!=Q6(a.i))var c=!1;
else{c=g.ye(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(b8("Updated online screens: "+g.ni(a.i)),a.i=b,a.ea("screenChange"));lVa(a)},f8=function(a){isNaN(a.B)||g.bu(a.B);
a.B=g.$t((0,g.C)(a.aG,a),0<a.C&&a.C<g.Sa()?2E4:1E4)},b8=function(a){T7("OnlineScreenService",a)},mVa=function(a){var b={};
g.jc(a.I(),function(c){c.token?b[c.token]=c.id:this.ke("Requesting availability of screen w/o lounge token.")});
return b},lVa=function(a){a=g.ye(g.re(a.i,function(b){return b}));
g.gc(a);a.length?g.vy("yt-remote-online-screen-ids",a.join(","),60):g.yy("yt-remote-online-screen-ids")},g8=function(a,b){b=void 0===b?!1:b;
X7.call(this,"ScreenService");this.C=a;this.K=b;this.i=this.u=null;this.B=[];this.D={};nVa(this)},pVa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.Fh(),l=c?$6(h,c):null;c&&(a.K||l)||(l=$6(h,b));if(l){l.uuid=b;var m=h8(a,l);d8(a.i,m,function(n){e(n?m:null)})}else c?oVa(a,c,(0,g.C)(function(n){var p=h8(this,new U6({name:d,
screenId:c,loungeToken:n,dialId:b||""}));d8(this.i,p,function(r){e(r?p:null)})},a),f):e(null)},qVa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},rVa=function(a,b,c){d8(a.i,b,c)},oVa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.hu(Q7(a.C,"/pairing/get_lounge_token_batch"),e)},sVa=function(a){a.screens=a.u.Fh();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+X6(a.screens))},nVa=function(a){i8(a);
a.u=new $7(a.C);a.u.subscribe("screenChange",(0,g.C)(a.vS,a));sVa(a);a.K||(a.B=bUa(g.wy("yt-remote-automatic-screen-cache")||[]));i8(a);a.info("Initializing automatic screens: "+X6(a.B));a.i=new c8(a.C,(0,g.C)(a.Fh,a,!0));a.i.subscribe("screenChange",(0,g.C)(function(){this.ea("onlineScreenChange")},a))},h8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=$6(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.K||tVa(a));i8(a);a.D[b.uuid]=b.id;g.vy("yt-remote-device-id-map",a.D,31536E3);return b},tVa=function(a){a=g.mp(a.B,function(b){return"shortLived"!=b.idType});
g.vy("yt-remote-automatic-screen-cache",g.Ym(a,$Ta))},i8=function(a){a.D=g.wy("yt-remote-device-id-map")||{}},j8=function(a,b,c){g.Q.call(this);
this.Ba=c;this.B=a;this.i=b;this.C=null},k8=function(a,b){a.C=b;
a.ea("sessionScreen",a.C)},uVa=function(a,b){a.C&&(a.C.token=b,h8(a.B,a.C));
a.ea("sessionScreen",a.C)},l8=function(a,b){T7(a.Ba,b)},m8=function(a,b,c){j8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.oa=(0,g.C)(this.DQ,this);this.Aa=(0,g.C)(this.DW,this);this.Z=g.$t(function(){vVa(d,null)},12E4);
this.K=this.D=this.I=this.S=0;this.va=!1;this.X="unknown"},n8=function(a,b){g.bu(a.K);
a.K=0;0==b?wVa(a):a.K=g.$t(function(){wVa(a)},b)},wVa=function(a){xVa(a,"getLoungeToken");
g.bu(a.D);a.D=g.$t(function(){yVa(a,null)},3E4)},xVa=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.ni(void 0));
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,g.Ja,(0,g.C)(function(){l8(this,"Failed to send message: "+b+".")},a)):l8(a,"Sending yt message without session: "+g.ni(c))},o8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.BK(b,function(c){k8(a,c)},function(){return a.zg()},5)):a.zg(Error("Waiting for session status timed out."))},AVa=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+JSON.stringify(b));
var d=new U6(b);zVa(a,d,function(e){e?(a.va=!0,h8(a.B,d),k8(a,d),a.X="unknown",n8(a,c)):(g.nt(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.zg())},5)},vVa=function(a,b){g.bu(a.Z);
a.Z=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?AVa(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.nt(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),o8(a,b.screenId))):(g.nt(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),o8(a,b.screenId)):o8(a,b.screenId):a.zg(Error("Waiting for session status timed out."))},yVa=function(a,b){g.bu(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.X=c,n8(a,3E4)):(uVa(a,b.loungeToken),a.va=!1,a.X="unknown",n8(a,b.loungeTokenRefreshIntervalMs))},zVa=function(a,b,c,d){g.bu(a.I);
a.I=0;rVa(a.B,b,function(e){e||0>d?c(e):a.I=g.$t(function(){zVa(a,b,c,d-1)},300)})},BVa=function(a){g.bu(a.S);
a.S=0;g.bu(a.I);a.I=0;g.bu(a.Z);a.Z=0;g.bu(a.D);a.D=0;g.bu(a.K);a.K=0},p8=function(a,b,c,d){j8.call(this,a,b,"DialSession");
this.config_=d;this.u=this.S=null;this.Aa="";this.La=c;this.Ka=null;this.Z=g.Ja;this.X=NaN;this.Ia=(0,g.C)(this.EQ,this);this.D=g.Ja;this.K=this.I=0;this.oa=!1;this.va="unknown"},q8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},CVa=function(a){a.D=a.B.jI(a.Aa,a.i.label,a.i.friendlyName,q8(a),function(b,c){a.D=g.Ja;
a.oa=!0;k8(a,b);"shortLived"==b.idType&&0<c&&r8(a,c)},function(b){a.D=g.Ja;
a.zg(b)})},DVa=function(a){var b={};
b.pairingCode=a.Aa;b.theme=a.La;mUa()&&(b.env_useStageMdx=1);return g.Gi(b)},s8=function(a){return new Promise(function(b){a.Aa=Y6();
if(a.Ka){var c=new chrome.cast.DialLaunchResponse(!0,DVa(a));b(c);CVa(a)}else a.Z=function(){g.bu(a.X);a.Z=function(){};
a.X=NaN;var d=new chrome.cast.DialLaunchResponse(!0,DVa(a));b(d);CVa(a)},a.X=g.$t(function(){a.Z()},100)})},FVa=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new U6(b);return(new Promise(function(e){EVa(a,d,function(f){f?(a.oa=!0,h8(a.B,d),k8(a,d),r8(a,c)):g.nt(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):s8(a)})},GVa=function(a,b){var c=a.S.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){pVa(a.B,c,b,d,function(f){f&&f.token&&k8(a,f);e(f)},function(f){l8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):s8(a)})},EVa=function(a,b,c,d){g.bu(a.I);
a.I=0;rVa(a.B,b,function(e){e||0>d?c(e):a.I=g.$t(function(){EVa(a,b,c,d-1)},300)})},r8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
q8(a)&&(g.bu(a.K),a.K=0,0==b?HVa(a):a.K=g.$t(function(){HVa(a)},b))},HVa=function(a){q8(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.va=c,r8(a,3E4)):(a.oa=!1,a.va="unknown",uVa(a,b.loungeToken),r8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.va="noLoungeTokenResponse";r8(a,3E4)})},IVa=function(a){g.bu(a.I);
a.I=0;g.bu(a.K);a.K=0;a.D();a.D=function(){};
g.bu(a.X)},t8=function(a,b){j8.call(this,a,b,"ManualSession");
this.u=g.$t((0,g.C)(this.Rs,this,null),150)},u8=function(a,b){g.Q.call(this);
this.config_=b;this.u=a;this.S=b.appId||"233637DE";this.C=b.theme||"cl";this.X=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.i=null;this.K=!1;this.B=[];this.D=(0,g.C)(this.uV,this)},JVa=function(a,b){return b?g.Mb(a.B,function(c){return V6(b,c.label)},a):null},v8=function(a){T7("Controller",a)},aVa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},w8=function(a){return a.K||!!a.B.length||!!a.i},x8=function(a,b,c){b!=a.i&&(g.fe(a.i),(a.i=b)?(c?a.ea("yt-remote-cast2-receiver-resumed",
b.i):a.ea("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.C)(a.VM,a,b)),b.subscribe("sessionFailed",function(){return KVa(a,b)}),b.getScreen()?a.ea("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.Rs(null)):a.ea("yt-remote-cast2-session-change",null))},KVa=function(a,b){a.i==b&&a.ea("yt-remote-cast2-session-failed")},LVa=function(a){var b=a.u.iI(),c=a.i&&a.i.i;
a=g.Ym(b,function(d){c&&V6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=JVa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},QVa=function(a,b,c,d){d.disableCastApi?y8("Cannot initialize because disabled by Mdx config."):MVa()?NVa(b,d)&&(z8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?OVa(a,c):(window.__onGCastApiAvailable=function(e,f){e?OVa(a,c):(A8("Failed to load cast API: "+f),B8(!1),z8(!1),g.yy("yt-remote-cast-available"),g.yy("yt-remote-cast-receiver"),
PVa(),c(!1))},d.loadCastApiSetupScript?g.Ay("https://web.archive.org/web/20211117205401/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=g7()&&tUa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?i7():89<=g7()?vUa():(j7(),h7(uUa.map(qUa))))):y8("Cannot initialize because not running Chrome")},PVa=function(){y8("dispose");
var a=C8();a&&a.dispose();g.Ha("yt.mdx.remote.cloudview.instance_",null,void 0);RVa(!1);g.Bv(D8);D8.length=0},E8=function(){return!!g.wy("yt-remote-cast-installed")},SVa=function(){var a=g.wy("yt-remote-cast-receiver");
return a?a.friendlyName:null},TVa=function(){y8("clearCurrentReceiver");
g.yy("yt-remote-cast-receiver")},UVa=function(){return E8()?C8()?C8().getCastSession():(A8("getCastSelector: Cast is not initialized."),null):(A8("getCastSelector: Cast API is not installed!"),null)},G8=function(){E8()?C8()?F8()?(y8("Requesting cast selector."),C8().requestSession()):(y8("Wait for cast API to be ready to request the session."),D8.push(g.Av("yt-remote-cast2-api-ready",G8))):A8("requestCastSelector: Cast is not initialized."):A8("requestCastSelector: Cast API is not installed!")},H8=
function(a,b){F8()?C8().setConnectedScreenStatus(a,b):A8("setConnectedScreenStatus called before ready.")},MVa=function(){var a=0<=g.Ab.search(/ (CrMo|Chrome|CriOS)\//);
return g.kj||a},VVa=function(a,b){C8().init(a,b)},NVa=function(a,b){var c=!1;
C8()||(a=new u8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.vy("yt-remote-cast-available",d);S6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){y8("onReceiverSelected: "+d.friendlyName);
g.vy("yt-remote-cast-receiver",d);S6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){y8("onReceiverResumed: "+d.friendlyName);
g.vy("yt-remote-cast-receiver",d);S6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){y8("onSessionChange: "+W6(d));
d||g.yy("yt-remote-cast-receiver");S6("yt-remote-cast2-session-change",d)}),g.Ha("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
y8("cloudview.createSingleton_: "+c);return c},C8=function(){return g.Ia("yt.mdx.remote.cloudview.instance_")},OVa=function(a,b){B8(!0);
z8(!1);VVa(a,function(c){c?(RVa(!0),g.Cv("yt-remote-cast2-api-ready")):(A8("Failed to initialize cast API."),B8(!1),g.yy("yt-remote-cast-available"),g.yy("yt-remote-cast-receiver"),PVa());b(c)})},y8=function(a){T7("cloudview",a)},A8=function(a){T7("cloudview",a)},B8=function(a){y8("setCastInstalled_ "+a);
g.vy("yt-remote-cast-installed",a)},F8=function(){return!!g.Ia("yt.mdx.remote.cloudview.apiReady_")},RVa=function(a){y8("setApiReady_ "+a);
g.Ha("yt.mdx.remote.cloudview.apiReady_",a,void 0)},z8=function(a){g.Ha("yt.mdx.remote.cloudview.initializing_",a,void 0)},I8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.K=0;this.trackData=null;this.hasNext=this.Hk=!1;this.S=this.D=this.i=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},J8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.Hk=!1;a.hasNext=!1;a.K=0;a.I=g.Sa();a.C=0;a.i=0;a.D=0;a.S=0;a.B=NaN;a.u=!1},K8=function(a){return a.Fc()?(g.Sa()-a.I)/1E3:0},L8=function(a,b){a.K=b;
a.I=g.Sa()},M8=function(a){switch(a.playerState){case 1:case 1081:return(g.Sa()-a.I)/1E3+a.K;
case -1E3:return 0}return a.K},N8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&J8(a)},O8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Le(a.trackData);b.hasPrevious=a.Hk;b.hasNext=a.hasNext;b.playerTime=a.K;b.playerTimeAt=a.I;b.seekableStart=a.C;b.seekableEnd=a.i;b.duration=a.D;b.loadedTime=a.S;b.liveIngestionTime=a.B;return b},Q8=function(a,b){g.Q.call(this);
this.B=0;this.C=a;this.I=[];this.D=new XUa;this.u=this.i=null;this.X=(0,g.C)(this.dU,this);this.K=(0,g.C)(this.zw,this);this.S=(0,g.C)(this.cU,this);this.Z=(0,g.C)(this.kU,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.pG,this),WVa(this))):c=3;0!=c&&(b?this.pG(c):g.$t((0,g.C)(function(){this.pG(c)},this),0));
(a=UVa())&&P8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Z)},R8=function(a){return new I8(a.C.getPlayerContextData())},WVa=function(a){g.jc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.C.subscribe(b,g.Ra(this.sV,b),this))},a)},XVa=function(a){g.jc(a.I,function(b){this.C.unsubscribeByKey(b)},a);
a.I.length=0},S8=function(a){return 1==a.getState()},T8=function(a,b){var c=a.D;
50>c.i.length+c.u.length&&a.D.u.push(b)},V8=function(a,b,c){var d=R8(a);
L8(d,c);-1E3!=d.playerState&&(d.playerState=b);U8(a,d)},W8=function(a,b,c){a.C.sendMessage(b,c)},U8=function(a,b){XVa(a);
a.C.setPlayerContextData(O8(b));WVa(a)},P8=function(a,b){a.u&&(a.u.removeUpdateListener(a.X),a.u.removeMediaListener(a.K),a.zw(null));
a.u=b;a.u&&(T7("CP","Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.X),a.u.addMediaListener(a.K),a.u.media.length&&a.zw(a.u.media[0]))},YVa=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=R8(a);b.contentId!=d.videoId&&T7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;L8(d,a.i.getEstimatedTime());U8(a,d)}else T7("CP","No cast media video. Ignoring state update.")},X8=function(a,b,c){return(0,g.C)(function(d){this.ke("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.ke("Retrying "+b+" using MDx browser channel."),W8(this,b,c))},a)},Y8=function(a,b,c,d){d=void 0===d?!1:d;
g.Q.call(this);this.D=NaN;this.va=!1;this.S=this.K=this.Z=this.oa=NaN;this.X=[];this.C=this.I=this.B=this.pc=this.i=null;this.Ia=a;this.Ba=d;this.X.push(g.Wu(window,"beforeunload",(0,g.C)(this.hS,this)));this.u=[];this.pc=new I8;this.Ka=b.id;this.Aa=b.idType;this.i=ZVa(this,c);this.i.subscribe("handlerOpened",this.hU,this);this.i.subscribe("handlerClosed",this.eU,this);this.i.subscribe("handlerError",this.fU,this);this.i.subscribe("handlerMessage",this.gU,this);this.i.VA(b.token);this.subscribe("remoteQueueChange",
function(){var e=this.pc.videoId;g.zy()&&g.vy("yt-remote-session-video-id",e)},this)},$Va=function(a){return g.Mb(a.u,function(b){return"LOUNGE_SCREEN"==b.type})},Z8=function(a){T7("conn",a)},ZVa=function(a,b){return new M7(Q7(a.Ia,"/bc"),b,!1,function(){return a.nI()},"shortLived"==a.Aa)},$8=function(a,b){a.ea("proxyStateChange",b)},aWa=function(a){a.D=g.$t((0,g.C)(function(){Z8("Connecting timeout");
this.gs(1)},a),2E4)},a9=function(a){g.bu(a.D);
a.D=NaN},b9=function(a){g.bu(a.oa);
a.oa=NaN},bWa=function(a){c9(a);
a.Z=g.$t((0,g.C)(function(){d9(this,"getNowPlaying")},a),2E4)},c9=function(a){g.bu(a.Z);
a.Z=NaN},dWa=function(a,b){var c=null;
if(b){var d=$Va(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ha("yt.mdx.remote.remoteClient_",c,void 0);b&&(a9(a),b9(a));c=O7(a.i)&&isNaN(a.D);b==c?b&&($8(a,1),d9(a,"getSubtitlesTrack")):b?(a.AK()&&a.pc.reset(),$8(a,1),d9(a,"getNowPlaying"),cWa(a)):a.gs(1)},eWa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.pc.videoId&&(g.Ee(b.params)?a.pc.trackData=null:a.pc.trackData=b.params,a.ea("remotePlayerChange"))},fWa=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.pc.listId=b.params.listId||a.pc.listId;N8(a.pc,d,e);a.ea("remoteQueueChange",c)},hWa=function(a,b){b.params=b.params||{};
fWa(a,b,"NOW_PLAYING_MAY_CHANGE");gWa(a,b);a.ea("autoplayDismissed")},gWa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
L8(a.pc,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.pc.playerState&&(c=-1E3);a.pc.playerState=c;c=Number(b.params.loadedTime);a.pc.S=isNaN(c)?0:c;a.pc.Jj(Number(b.params.duration));c=a.pc;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.pc;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.pc.playerState?bWa(a):c9(a);a.ea("remotePlayerChange")},iWa=function(a,b){if(-1E3!=a.pc.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.pc.playerState=c;b=parseInt(b.params.currentTime,10);L8(a.pc,isNaN(b)?0:b);a.ea("remotePlayerChange")}},jWa=function(a,b){var c="true"==b.params.muted;
a.pc.volume=parseInt(b.params.volume,10);a.pc.muted=c;a.ea("remotePlayerChange")},kWa=function(a,b){a.I=b.params.videoId;
a.ea("nowAutoplaying",parseInt(b.params.timeout,10))},lWa=function(a,b){var c="true"==b.params.hasNext;
a.pc.Hk="true"==b.params.hasPrevious;a.pc.hasNext=c;a.ea("previousNextChange")},cWa=function(a){g.bu(a.S);
a.S=g.$t((0,g.C)(a.gs,a,1),864E5)},d9=function(a,b,c){c?Z8("Sending: action="+b+", params="+g.ni(c)):Z8("Sending: action="+b);
a.i.sendMessage(b,c)},e9=function(a){X7.call(this,"ScreenServiceProxy");
this.Se=a;this.i=[];this.i.push(this.Se.$_s("screenChange",(0,g.C)(this.IQ,this)));this.i.push(this.Se.$_s("onlineScreenChange",(0,g.C)(this.ZU,this)))},pWa=function(a,b){lUa();
if(!f7||!f7.get("yt-remote-disable-remote-module-for-dev")){b=g.N("MDX_CONFIG")||b;dUa();d7();f9||(f9=new P7(b?b.loungeApiHost:void 0),mUa()&&(f9.i="/api/loungedev"));g9||(g9=g.Ia("yt.mdx.remote.deferredProxies_")||[],g.Ha("yt.mdx.remote.deferredProxies_",g9,void 0));mWa();var c=h9();if(!c){var d=new g8(f9,b?b.disableAutomaticScreenCache||!1:!1);g.Ha("yt.mdx.remote.screenService_",d,void 0);c=h9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ha("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1,void 0);QVa(a,d,function(f){f?i9()&&H8(i9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){S6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ia("yt.mdx.remote.initialized_")&&(g.Ha("yt.mdx.remote.initialized_",!0,void 0),j9("Initializing: "+
g.ni(b)),k9.push(g.Av("yt-remote-cast2-api-ready",function(){S6("yt-remote-api-ready")})),k9.push(g.Av("yt-remote-cast2-availability-change",function(){S6("yt-remote-receiver-availability-change")})),k9.push(g.Av("yt-remote-cast2-receiver-selected",function(){l9(null);
S6("yt-remote-auto-connect","cast-selector-receiver")})),k9.push(g.Av("yt-remote-cast2-receiver-resumed",function(){S6("yt-remote-receiver-resumed","cast-selector-receiver")})),k9.push(g.Av("yt-remote-cast2-session-change",nWa)),k9.push(g.Av("yt-remote-connection-change",function(f){f?H8(i9(),"YouTube TV"):m9()||(H8(null,null),TVa())})),k9.push(g.Av("yt-remote-cast2-session-failed",function(){S6("yt-remote-connection-failed")})),a=n9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.O("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),j9(" -- with channel params: "+g.ni(a)),a?(g.vy("yt-remote-session-app",a.app),g.vy("yt-remote-session-name",a.name)):(g.yy("yt-remote-session-app"),g.yy("yt-remote-session-name")),g.Ha("yt.mdx.remote.channelParams_",a,void 0),c.start(),i9()||oWa())}},qWa=function(){var a=h9().Se.$_gos();
var b=o9();b&&p9()&&(Z6(a,b)||a.push(b));return cUa(a)},q9=function(){var a=rWa();
!a&&E8()&&SVa()&&(a={key:"cast-selector-receiver",name:SVa()});return a},rWa=function(){var a=qWa(),b=o9();
b||(b=m9());return g.Mb(a,function(c){return b&&V6(b,c.key)?!0:!1})},o9=function(){var a=i9();
if(!a)return null;var b=h9().Fh();return $6(b,a)},nWa=function(a){j9("remote.onCastSessionChange_: "+W6(a));
if(a){var b=o9();if(b&&b.id==a.id){if(H8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))r9&&(r9.token=a),(b=p9())&&b.VA(a)}else b&&s9(),t9(a,1)}else p9()&&s9()},s9=function(){F8()?C8().stopSession():A8("stopSession called before API ready.");
var a=p9();a&&(a.disconnect(1),u9(null))},v9=function(){var a=p9();
return!!a&&3!=a.getProxyState()},j9=function(a){T7("remote",a)},h9=function(){if(!w9){var a=g.Ia("yt.mdx.remote.screenService_");
w9=a?new e9(a):null}return w9},i9=function(){return g.Ia("yt.mdx.remote.currentScreenId_")},sWa=function(a){g.Ha("yt.mdx.remote.currentScreenId_",a,void 0)},tWa=function(){return g.Ia("yt.mdx.remote.connectData_")},l9=function(a){g.Ha("yt.mdx.remote.connectData_",a,void 0)},p9=function(){return g.Ia("yt.mdx.remote.connection_")},u9=function(a){var b=p9();
l9(null);a||sWa("");g.Ha("yt.mdx.remote.connection_",a,void 0);g9&&(g.jc(g9,function(c){c(a)}),g9.length=0);
b&&!a?S6("yt-remote-connection-change",!1):!b&&a&&S6("yt-remote-connection-change",!0)},m9=function(){var a=g.zy();
if(!a)return null;var b=h9();if(!b)return null;b=b.Fh();return $6(b,a)},t9=function(a,b){i9();
o9()&&o9();if(x9)r9=a;else{sWa(a.id);var c=g.Ia("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new Y8(f9,a,n9(),c);a.connect(b,tWa());a.subscribe("beforeDisconnect",function(d){S6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){p9()&&(p9(),u9(null))});
a.subscribe("browserChannelAuthError",function(){var d=o9();d&&"shortLived"==d.idType&&(F8()?C8().handleBrowserChannelAuthError():A8("refreshLoungeToken called before API ready."))});
u9(a)}},oWa=function(){var a=m9();
a?(j9("Resume connection to: "+W6(a)),t9(a,0)):(e7(),TVa(),j9("Skipping connecting because no session screen found."))},mWa=function(){var a=n9();
if(g.Ee(a)){a=c7();var b=g.wy("yt-remote-session-name")||"",c=g.wy("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ha("yt.mdx.remote.channelParams_",a,void 0)}},n9=function(){return g.Ia("yt.mdx.remote.channelParams_")||{}},y9=function(a,b,c){g.E.call(this);
var d=this;this.u=a;this.J=b;this.Ub=c;this.events=new g.KC(this);this.Z=this.events.T(this.J,"onVolumeChange",function(e){uWa(d,e)});
this.D=!1;this.I=new g.tJ(64);this.i=new g.I(this.ZN,500,this);this.B=new g.I(this.aO,1E3,this);this.S=new k7(this.RX,0,this);this.C={};this.X=new g.I(this.IO,1E3,this);this.K=new l7(this.seekTo,1E3,this);this.oa=g.Ja;g.H(this,this.events);this.events.T(b,"onCaptionsTrackListChanged",this.KU);this.events.T(b,"captionschanged",this.aU);this.events.T(b,"captionssettingschanged",this.gO);this.events.T(b,"videoplayerreset",this.oA);this.events.T(b,"mdxautoplaycancel",function(){d.Ub.XJ()});
a=this.Ub;a.isDisposed();a.subscribe("proxyStateChange",this.RM,this);a.subscribe("remotePlayerChange",this.Ew,this);a.subscribe("remoteQueueChange",this.oA,this);a.subscribe("previousNextChange",this.OM,this);a.subscribe("nowAutoplaying",this.HM,this);a.subscribe("autoplayDismissed",this.kM,this);g.H(this,this.i);g.H(this,this.B);g.H(this,this.S);g.H(this,this.X);g.H(this,this.K);this.gO();this.oA();this.Ew()},uWa=function(a,b){if(z9(a)){a.Ub.unsubscribe("remotePlayerChange",a.Ew,a);
var c=Math.round(b.volume);b=!!b.muted;var d=R8(a.Ub);if(c!==d.volume||b!==d.muted)a.Ub.setVolume(c,b),a.X.start();a.Ub.subscribe("remotePlayerChange",a.Ew,a)}},vWa=function(a){a.Yb(0);
a.i.stop();a.Vb(new g.tJ(64))},A9=function(a,b){if(z9(a)&&!a.D){var c=null;
b&&(c={style:a.J.getSubtitlesUserSettings()},g.Ne(c,b));a.Ub.mI(a.J.getVideoData(1).videoId,c);a.C=R8(a.Ub).trackData}},B9=function(a,b){var c=a.J.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.J.getVideoData(1);a.Ub.playVideo(c.videoId,b,d,e,c.playerParams,c.Za,TTa(c));a.Vb(new g.tJ(1))},wWa=function(a,b){if(b){var c=a.J.getOption("captions","tracklist",{YK:1});
c&&c.length?(a.J.setOption("captions","track",b),a.D=!1):(a.J.loadModule("captions"),a.D=!0)}else a.J.setOption("captions","track",{})},z9=function(a){return R8(a.Ub).videoId===a.J.getVideoData(1).videoId},C9=function(){g.W.call(this,{G:"div",
L:"ytp-mdx-popup-dialog",W:{role:"dialog"},U:[{G:"div",L:"ytp-mdx-popup-dialog-inner-content",U:[{G:"div",L:"ytp-mdx-popup-title",ya:"You're signed out"},{G:"div",L:"ytp-mdx-popup-description",ya:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{G:"div",L:"ytp-mdx-privacy-popup-buttons",U:[{G:"button",Ha:["ytp-button","ytp-mdx-privacy-popup-cancel"],ya:"Cancel"},{G:"button",Ha:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],ya:"Confirm"}]}]}]});this.i=new g.ZK(this,250);this.cancelButton=this.Fa("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Fa("ytp-mdx-privacy-popup-confirm");g.H(this,this.i);this.T(this.cancelButton,"click",this.u);this.T(this.confirmButton,"click",this.B)},D9=function(a){g.W.call(this,{G:"div",
L:"ytp-remote",U:[{G:"div",L:"ytp-remote-display-status",U:[{G:"div",L:"ytp-remote-display-status-icon",U:[g.yua()]},{G:"div",L:"ytp-remote-display-status-text",ya:"{{statustext}}"}]}]});this.api=a;this.i=new g.ZK(this,250);g.H(this,this.i);this.T(a,"presentingplayerstatechange",this.onStateChange);xWa(this,a.zb())},xWa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.T(b,128)?g.BH("Error on $RECEIVER_NAME",c):b.Fc()||g.T(b,4)?g.BH("Playing on $RECEIVER_NAME",c):g.BH("Connected to $RECEIVER_NAME",c);a.Ra("statustext",b);a.i.show()}else a.i.hide()},E9=function(a,b){g.uP.call(this,"Play on",0,a,b);
this.J=a;this.Eo={};this.T(a,"onMdxReceiversChange",this.D);this.T(a,"presentingplayerstatechange",this.D);this.D()},F9=function(a){g.EM.call(this,a);
this.Ok={key:Y6(),name:"This computer"};this.Zh=null;this.subscriptions=[];this.OF=this.Ub=null;this.Eo=[this.Ok];this.hn=this.Ok;this.Bd=new g.tJ(64);this.zL=0;this.wf=-1;this.Mw=!1;this.Kw=this.ut=null;if(!g.tE(this.player.V())&&!g.uE(this.player.V())){a=this.player;var b=g.hM(a);b&&(b=b.Hn())&&(b=new E9(a,b),g.H(this,b));b=new D9(a);g.H(this,b);g.rM(a,b.element,4);this.ut=new C9;g.H(this,this.ut);g.rM(a,this.ut.element,4);this.Mw=!!m9()}},G9=function(a){a.Kw&&(a.player.removeEventListener("presentingplayerstatechange",
a.Kw),a.Kw=null)},yWa=function(a,b,c){a.Bd=c;
a.player.ea("presentingplayerstatechange",new g.kH(c,b))},H9=function(a,b){if(b.key!==a.hn.key)if(b.key===a.Ok.key)s9();
else{var c;(c=!a.player.V().N("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.N("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.N("SESSION_INDEX")&&!g.N("LOGGED_IN")))||a.Mw||!a.ut);(c?0:g.KE(a.player.V())||g.NE(a.player.V()))&&zWa(a);a.hn=b;if(!a.player.V().N("disable_mdx_connection_in_mdx_module_for_music_web")||!g.uE(a.player.V())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.V().N("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.yM(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Za,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=TTa(c))&&(a.locationInfo=c)}j9("Connecting to: "+g.ni(b));"cast-selector-receiver"==b.key?(l9(a||null),b=a||null,F8()?C8().setLaunchParams(b):A8("setLaunchParams called before ready.")):!a&&v9()&&
i9()==b.key?S6("yt-remote-connection-change",!0):(s9(),l9(a||null),a=h9().Fh(),(b=$6(a,b.key))&&t9(b,1))}}},zWa=function(a){a.player.zb().Fc()?a.player.pauseVideo():(a.Kw=function(b){!a.Mw&&g.mH(b,8)&&(a.player.pauseVideo(),G9(a))},a.player.addEventListener("presentingplayerstatechange",a.Kw));
a.ut&&a.ut.Ad();p9()||(x9=!0)},BUa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},x7={"'":"\\'"},ZTa={nZ:"atp",L$:"ska",w9:"que",n7:"mus",K$:"sus",n3:"dsp",S9:"seq",Q6:"mic",Z1:"dpa",CZ:"cds",l7:"mlm",X1:"dsdtr"};T6.prototype.equals=function(a){return a?this.id==a.id:!1};
var f7,b7="",sUa=nUa("loadCastFramework")||nUa("loadCastApplicationFramework"),uUa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ta(k7,g.E);g.k=k7.prototype;g.k.wQ=function(a){this.C=arguments;this.i=!1;this.Nb?this.B=g.Sa()+this.Vf:this.Nb=g.Mh(this.D,this.Vf)};
g.k.stop=function(){this.Nb&&(g.B.clearTimeout(this.Nb),this.Nb=null);this.B=null;this.i=!1;this.C=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.i&&(this.i=!1,this.I.apply(null,this.C)))};
g.k.xa=function(){this.stop();k7.je.xa.call(this)};
g.k.xQ=function(){this.Nb&&(g.B.clearTimeout(this.Nb),this.Nb=null);this.B?(this.Nb=g.Mh(this.D,this.B-g.Sa()),this.B=null):this.u?this.i=!0:(this.i=!1,this.I.apply(null,this.C))};g.v(l7,g.E);g.k=l7.prototype;g.k.hI=function(a){this.B=arguments;this.Nb||this.u?this.i=!0:m7(this)};
g.k.stop=function(){this.Nb&&(g.B.clearTimeout(this.Nb),this.Nb=null,this.i=!1,this.B=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.i||this.Nb||(this.i=!1,m7(this))};
g.k.xa=function(){g.E.prototype.xa.call(this);this.stop()};n7.prototype.stringify=function(a){return g.B.JSON.stringify(a,void 0)};
n7.prototype.parse=function(a){return g.B.JSON.parse(a,void 0)};var p7=new g.ef;g.v(wUa,g.ie);g.k=r7.prototype;g.k.Wo=null;g.k.Hm=!1;g.k.Yt=null;g.k.hH=null;g.k.At=null;g.k.Nt=null;g.k.Xm=null;g.k.Ho=null;g.k.xq=null;g.k.Lf=null;g.k.vB=0;g.k.Nj=null;g.k.tB=null;g.k.Qm=null;g.k.Eu=-1;g.k.ON=!0;g.k.qp=!1;g.k.hC=0;g.k.JA=null;var zUa={},u7={};g.k=r7.prototype;g.k.setTimeout=function(a){this.u=a};
g.k.yQ=function(a){a=a.target;var b=this.JA;b&&3==g.Vi(a)?b.hI():this.SO(a)};
g.k.SO=function(a){try{if(a==this.Lf)a:{var b=g.Vi(this.Lf),c=this.Lf.u,d=this.Lf.getStatus();if(g.Bc&&!g.tc(10)||g.Lg&&!g.sc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.$i(this.Lf))break a;this.qp||4!=b||7==c||(8==c||0>=d?this.i.Aj(3):this.i.Aj(2));y7(this);var e=this.Lf.getStatus();this.Eu=e;var f=g.$i(this.Lf);if(this.Hm=200==e){4==b&&v7(this);if(this.D){for(a=!0;!this.qp&&this.vB<f.length;){var h=AUa(this,f);if(h==u7){4==b&&(this.Qm=4,q7(15),a=!1);break}else if(h==zUa){this.Qm=4;q7(16);a=!1;
break}else z7(this,h)}4==b&&0==f.length&&(this.Qm=1,q7(17),a=!1);this.Hm=this.Hm&&a;a||(v7(this),w7(this))}else z7(this,f);this.Hm&&!this.qp&&(4==b?this.i.Wx(this):(this.Hm=!1,t7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Qm=3,q7(13)):(this.Qm=0,q7(14)),v7(this),w7(this)}}catch(l){this.Lf&&g.$i(this.Lf)}finally{}};
g.k.qW=function(a){o7((0,g.C)(this.pW,this,a),0)};
g.k.pW=function(a){this.qp||(y7(this),z7(this,a),t7(this))};
g.k.ZM=function(a){o7((0,g.C)(this.oW,this,a),0)};
g.k.oW=function(a){this.qp||(v7(this),this.Hm=a,this.i.Wx(this),this.i.Aj(4))};
g.k.cancel=function(){this.qp=!0;v7(this)};
g.k.xW=function(){this.Yt=null;var a=Date.now();0<=a-this.hH?(2!=this.Nt&&this.i.Aj(3),v7(this),this.Qm=2,q7(18),w7(this)):DUa(this,this.hH-a)};
g.k.getLastError=function(){return this.Qm};g.k=GUa.prototype;g.k.iC=null;g.k.qh=null;g.k.KA=!1;g.k.bO=null;g.k.Py=null;g.k.KE=null;g.k.jC=null;g.k.Wh=null;g.k.ol=-1;g.k.Fu=null;g.k.Nu=null;g.k.connect=function(a){this.jC=a;a=B7(this.i,null,this.jC);q7(3);this.bO=Date.now();var b=this.i.S;null!=b?(this.Fu=b[0],(this.Nu=b[1])?(this.Wh=1,HUa(this)):(this.Wh=2,D7(this))):(P6(a,"MODE","init"),this.qh=new r7(this,void 0,void 0,void 0),this.qh.Wo=this.iC,s7(this.qh,a,!1,null,!0),this.Wh=0)};
g.k.pR=function(a){if(a)this.Wh=2,D7(this);else{q7(4);var b=this.i;b.Zj=b.dn.ol;K7(b,9)}a&&this.Aj(2)};
g.k.sD=function(a){return this.i.sD(a)};
g.k.abort=function(){this.qh&&(this.qh.cancel(),this.qh=null);this.ol=-1};
g.k.sf=function(){return!1};
g.k.SM=function(a,b){this.ol=a.Eu;if(0==this.Wh)if(b){try{var c=this.u.parse(b)}catch(d){a=this.i;a.Zj=this.ol;K7(a,2);return}this.Fu=c[0];this.Nu=c[1]}else a=this.i,a.Zj=this.ol,K7(a,2);else if(2==this.Wh)if(this.KA)q7(7),this.KE=Date.now();else if("11111"==b){if(q7(6),this.KA=!0,this.Py=Date.now(),a=this.Py-this.bO,!g.Bc||g.tc(10)||500>a)this.ol=200,this.qh.cancel(),q7(12),C7(this.i,this,!0)}else q7(8),this.Py=this.KE=Date.now(),this.KA=!1};
g.k.Wx=function(){this.ol=this.qh.Eu;if(this.qh.Hm)0==this.Wh?this.Nu?(this.Wh=1,HUa(this)):(this.Wh=2,D7(this)):2==this.Wh&&((!g.Bc||g.tc(10)?!this.KA:200>this.KE-this.Py)?(q7(11),C7(this.i,this,!1)):(q7(12),C7(this.i,this,!0)));else{0==this.Wh?q7(9):2==this.Wh&&q7(10);var a=this.i;this.qh.getLastError();a.Zj=this.ol;K7(a,2)}};
g.k.lx=function(){return this.i.lx()};
g.k.isActive=function(){return this.i.isActive()};
g.k.Aj=function(a){this.i.Aj(a)};g.k=E7.prototype;g.k.Yj=null;g.k.tv=null;g.k.Ug=null;g.k.Je=null;g.k.kC=null;g.k.Qy=null;g.k.lJ=null;g.k.Xx=null;g.k.mw=0;g.k.qT=0;g.k.Mf=null;g.k.zn=null;g.k.El=null;g.k.Bp=null;g.k.dn=null;g.k.rB=null;g.k.Qs=-1;g.k.yL=-1;g.k.Zj=-1;g.k.rs=0;g.k.Pr=0;g.k.rp=8;g.Ta(JUa,g.ie);g.Ta(KUa,g.ie);g.k=E7.prototype;g.k.connect=function(a,b,c,d,e){q7(0);this.kC=b;this.tv=c||{};d&&void 0!==e&&(this.tv.OSID=d,this.tv.OAID=e);this.I?(o7((0,g.C)(this.HJ,this,a),100),OUa(this)):this.HJ(a)};
g.k.HJ=function(a){this.dn=new GUa(this);this.dn.iC=this.Yj;this.dn.u=this.D;this.dn.connect(a)};
g.k.sf=function(){return 0==this.i};
g.k.getState=function(){return this.i};
g.k.XM=function(a){this.zn=null;SUa(this,a)};
g.k.WM=function(){this.El=null;this.Je=new r7(this,this.B,"rpc",this.K);this.Je.Wo=this.Yj;this.Je.hC=0;var a=this.lJ.clone();g.Jk(a,"RID","rpc");g.Jk(a,"SID",this.B);g.Jk(a,"CI",this.rB?"0":"1");g.Jk(a,"AID",this.Qs);F7(this,a);if(!g.Bc||g.tc(10))g.Jk(a,"TYPE","xmlhttp"),s7(this.Je,a,!0,this.Xx,!1);else{g.Jk(a,"TYPE","html");var b=this.Je,c=!!this.Xx;b.Nt=3;b.Xm=O6(a.clone());CUa(b,c)}};
g.k.SM=function(a,b){if(0!=this.i&&(this.Je==a||this.Ug==a))if(this.Zj=a.Eu,this.Ug==a&&3==this.i)if(7<this.rp){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.El){if(this.Je)if(this.Je.At+3E3<this.Ug.At)H7(this),this.Je.cancel(),this.Je=null;else break a;J7(this);q7(19)}}else this.yL=a[1],0<this.yL-this.Qs&&37500>a[2]&&this.rB&&0==this.Pr&&!this.Bp&&(this.Bp=o7((0,g.C)(this.VT,this),6E3));else K7(this,11)}else null!=b&&K7(this,11);else if(this.Je==
a&&H7(this),!g.jb(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.Qs=c[0],c=c[1],2==this.i?"c"==c[0]?(this.B=c[1],this.Xx=c[2],c=c[3],null!=c?this.rp=c:this.rp=6,this.i=3,this.Mf&&this.Mf.DJ(),this.lJ=B7(this,this.lx()?this.Xx:null,this.kC),TUa(this)):"stop"==c[0]&&K7(this,7):3==this.i&&("stop"==c[0]?K7(this,7):"noop"!=c[0]&&this.Mf&&this.Mf.CJ(c),this.Pr=0)};
g.k.VT=function(){null!=this.Bp&&(this.Bp=null,this.Je.cancel(),this.Je=null,J7(this),q7(20))};
g.k.Wx=function(a){if(this.Je==a){H7(this);this.Je=null;var b=2}else if(this.Ug==a)this.Ug=null,b=1;else return;this.Zj=a.Eu;if(0!=this.i)if(a.Hm)if(1==b){b=Date.now()-a.At;var c=p7;c.dispatchEvent(new JUa(c,a.xq?a.xq.length:0,b,this.rs));G7(this);this.C.length=0}else TUa(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Zj)){if(d=1==b)this.Ug||this.zn||1==this.i||2<=this.rs?d=!1:(this.zn=o7((0,g.C)(this.XM,this,a),UUa(this,this.rs)),this.rs++,d=!0);d=!(d||2==b&&J7(this))}if(d)switch(c){case 1:K7(this,
5);break;case 4:K7(this,10);break;case 3:K7(this,6);break;case 7:K7(this,12);break;default:K7(this,2)}}};
g.k.PR=function(a){if(!g.Pb(arguments,this.i))throw Error("Unexpected channel state: "+this.i);};
g.k.AX=function(a){a?q7(2):(q7(1),VUa(this,8))};
g.k.sD=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Pi;a.S=!1;return a};
g.k.isActive=function(){return!!this.Mf&&this.Mf.isActive(this)};
g.k.Aj=function(a){var b=p7;b.dispatchEvent(new KUa(b,a))};
g.k.lx=function(){return!(!g.Bc||g.tc(10))};
g.k=WUa.prototype;g.k.DJ=function(){};
g.k.CJ=function(){};
g.k.BJ=function(){};
g.k.fD=function(){};
g.k.oK=function(){return{}};
g.k.isActive=function(){return!0};g.k=XUa.prototype;g.k.isEmpty=function(){return 0===this.i.length&&0===this.u.length};
g.k.clear=function(){this.i=[];this.u=[]};
g.k.contains=function(a){return g.Pb(this.i,a)||g.Pb(this.u,a)};
g.k.remove=function(a){var b=this.i;var c=(0,g.VNa)(b,a);0<=c?(g.Sb(b,c),b=!0):b=!1;return b||g.Tb(this.u,a)};
g.k.wi=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Ta(L7,g.E);g.k=L7.prototype;g.k.hW=function(){this.Vf=Math.min(3E5,2*this.Vf);this.B();this.u&&this.start()};
g.k.start=function(){var a=this.Vf+15E3*Math.random();g.nr(this.i,a);this.u=Date.now()+a};
g.k.stop=function(){this.i.stop();this.u=0};
g.k.isActive=function(){return this.i.isActive()};
g.k.reset=function(){this.i.stop();this.Vf=5E3};g.Ta(M7,WUa);g.k=M7.prototype;g.k.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.k.dg=function(a){return this.B.dg(a)};
g.k.ea=function(a,b){return this.B.ea.apply(this.B,arguments)};
g.k.dispose=function(){this.Z||(this.Z=!0,g.fe(this.B),$Ua(this),g.fe(this.u),this.u=null,this.oa=function(){return""})};
g.k.isDisposed=function(){return this.Z};
g.k.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.X="";this.u.stop();this.D=a||null;this.C=b||0;a=this.va+"/test";b=this.va+"/bind";var d=new E7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Aa),e=this.i;e&&(e.Mf=null);d.Mf=this;this.i=d;N7(this);if(this.i){d=g.N("ID_TOKEN");var f=this.i.Yj||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.Yj=f}e?(3!=e.getState()&&0==QUa(e)||e.getState(),this.i.connect(a,b,this.I,e.B,e.Qs)):c?this.i.connect(a,
b,this.I,c.sessionId,c.arrayId):this.i.connect(a,b,this.I)}};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.Ne(a,b);this.u.isActive()||2==(this.i?this.i.getState():0)?this.K.push(a):O7(this)&&(N7(this),PUa(this.i,a))};
g.k.DJ=function(){this.u.reset();this.D=null;this.C=0;if(this.K.length){var a=this.K;this.K=[];for(var b=0,c=a.length;b<c;++b)PUa(this.i,a[b])}this.ea("handlerOpened")};
g.k.BJ=function(a){var b=2==a&&401==this.i.Zj;4==a||b||this.u.start();this.ea("handlerError",a,b)};
g.k.fD=function(a){if(!this.u.isActive())this.ea("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.K.push(d)}};
g.k.oK=function(){var a={v:2};this.X&&(a.gsessionid=this.X);0!=this.C&&(a.ui=""+this.C);0!=this.S&&(a.ui=""+this.S);this.D&&g.Ne(a,this.D);return a};
g.k.CJ=function(a){"S"==a[0]?this.X=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),NUa(this.i)):this.ea("handlerMessage",new YUa(a[0],a[1]))};
g.k.VA=function(a){(this.I.loungeIdToken=a)||this.u.stop();if(this.Ba&&this.i){var b=this.i.Yj||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.Yj=b}};
g.k.eX=function(){this.u.isActive();0==QUa(this.i)&&this.connect(this.D,this.C)};P7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
P7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
P7.prototype.D=function(a){a(Error("request timed out"))};var gVa=Date.now(),S7=null,V7=Array(50),U7=-1,W7=!1;g.Ta(X7,g.Q);X7.prototype.Fh=function(){return this.screens};
X7.prototype.contains=function(a){return!!Z6(this.screens,a)};
X7.prototype.get=function(a){return a?$6(this.screens,a):null};
X7.prototype.info=function(a){T7(this.I,a)};g.v(Y7,g.Q);g.k=Y7.prototype;g.k.start=function(){!this.i&&isNaN(this.Nb)&&this.jN()};
g.k.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.Nb)||(g.bu(this.Nb),this.Nb=NaN)};
g.k.xa=function(){this.stop();g.Q.prototype.xa.call(this)};
g.k.jN=function(){this.Nb=NaN;this.i=g.hu(Q7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.K},timeout:5E3,onSuccess:(0,g.C)(this.AQ,this),onError:(0,g.C)(this.zQ,this),onTimeout:(0,g.C)(this.BQ,this)})};
g.k.AQ=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.C;a.name=this.I;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ea("pairingComplete",new U6(a),b)};
g.k.zQ=function(a){this.i=null;a.status&&404==a.status?this.u>=AWa.length?this.ea("pairingFailed",Error("DIAL polling timed out")):(a=AWa[this.u],this.Nb=g.$t((0,g.C)(this.jN,this),a),this.u++):this.ea("pairingFailed",Error("Server error "+a.status))};
g.k.BQ=function(){this.i=null;this.ea("pairingFailed",Error("Server not responding"))};
var AWa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ta($7,X7);g.k=$7.prototype;g.k.start=function(){Z7(this)&&this.ea("screenChange");!g.wy("yt-remote-lounge-token-expiration")&&kVa(this);g.bu(this.i);this.i=g.$t((0,g.C)(this.start,this),1E4)};
g.k.add=function(a,b){Z7(this);hVa(this,a);a8(this,!1);this.ea("screenChange");b(a);a.token||kVa(this)};
g.k.remove=function(a,b){var c=Z7(this);jVa(this,a)&&(a8(this,!1),c=!0);b(a);c&&this.ea("screenChange")};
g.k.pB=function(a,b,c,d){var e=Z7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,a8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ea("screenChange")};
g.k.xa=function(){g.bu(this.i);$7.je.xa.call(this)};
g.k.mS=function(a){Z7(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}a8(this,!b);b&&T7(this.I,"Missed "+b+" lounge tokens.")};
g.k.lS=function(a){T7(this.I,"Requesting lounge tokens failed: "+a)};g.v(c8,g.Q);g.k=c8.prototype;g.k.start=function(){var a=parseInt(g.wy("yt-remote-fast-check-period")||"0",10);(this.C=g.Sa()-144E5<a?0:a)?f8(this):(this.C=g.Sa()+3E5,g.vy("yt-remote-fast-check-period",this.C),this.aG())};
g.k.isEmpty=function(){return g.Ee(this.i)};
g.k.update=function(){b8("Updating availability on schedule.");var a=this.I(),b=g.re(this.i,function(c,d){return c&&!!$6(a,d)},this);
e8(this,b)};
g.k.xa=function(){g.bu(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.Q.prototype.xa.call(this)};
g.k.aG=function(){g.bu(this.B);this.B=NaN;this.u&&this.u.abort();var a=mVa(this);if(Q6(a)){var b=Q7(this.D,"/pairing/get_screen_availability");this.u=R7(this.D,b,{lounge_token:g.ye(a).join(",")},(0,g.C)(this.OV,this,a),(0,g.C)(this.NV,this))}else e8(this,{}),f8(this)};
g.k.OV=function(a,b){this.u=null;var c=g.ye(mVa(this));if(g.hc(c,g.ye(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;e8(this,c);f8(this)}else this.ke("Changing Screen set during request."),this.aG()};
g.k.NV=function(a){this.ke("Screen availability failed: "+a);this.u=null;f8(this)};
g.k.ke=function(a){T7("OnlineScreenService",a)};g.Ta(g8,X7);g.k=g8.prototype;g.k.start=function(){this.u.start();this.i.start();this.screens.length&&(this.ea("screenChange"),this.i.isEmpty()||this.ea("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.i.update()};
g.k.pB=function(a,b,c,d){this.u.contains(a)?this.u.pB(a,b,c,d):(a="Updating name of unknown screen: "+a.name,T7(this.I,a),d(Error(a)))};
g.k.Fh=function(a){return a?this.screens:g.Vb(this.screens,g.mp(this.B,function(b){return!this.contains(b)},this))};
g.k.iI=function(){return g.mp(this.Fh(!0),function(a){return!!this.i.i[a.id]},this)};
g.k.jI=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new Y7(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.fe(l);e(h8(h,m),n)});
l.subscribe("pairingFailed",function(m){g.fe(l);f(m)});
l.start();return(0,g.C)(l.stop,l)};
g.k.CQ=function(a,b,c,d){g.hu(Q7(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.C)(function(e,f){e=new U6(f.screen||{});if(!e.name||qVa(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);qVa(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(h8(this,e))},this),
onError:(0,g.C)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.C)(function(){d(Error("pairing request timed out."))},this)})};
g.k.xa=function(){g.fe(this.u);g.fe(this.i);g8.je.xa.call(this)};
g.k.vS=function(){sVa(this);this.ea("screenChange");this.i.update()};
g8.prototype.dispose=g8.prototype.dispose;g.Ta(j8,g.Q);g.k=j8.prototype;g.k.getScreen=function(){return this.C};
g.k.zg=function(a){this.isDisposed()||(a&&(l8(this,""+a),this.ea("sessionFailed")),this.C=null,this.ea("sessionScreen",null))};
g.k.info=function(a){T7(this.Ba,a)};
g.k.kI=function(){return null};
g.k.oG=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.C)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.C)(function(){l8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.xa=function(){this.oG("");j8.je.xa.call(this)};g.v(m8,j8);g.k=m8.prototype;g.k.nG=function(a){if(this.u){if(this.u==a)return;l8(this,"Overriding cast session with new session object");BVa(this);this.va=!1;this.X="unknown";this.u.removeUpdateListener(this.oa);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa)}this.u=a;this.u.addUpdateListener(this.oa);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa);xVa(this,"getMdxSessionStatus")};
g.k.Rs=function(a){this.info("launchWithParams no-op for Cast: "+g.ni(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.C)(function(){this.zg()},this),(0,g.C)(function(){this.zg(Error("Failed to stop receiver app."))},this)):this.zg(Error("Stopping cast device without session."))};
g.k.oG=function(){};
g.k.xa=function(){this.info("disposeInternal");BVa(this);this.u&&(this.u.removeUpdateListener(this.oa),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa));this.u=null;j8.prototype.xa.call(this)};
g.k.DW=function(a,b){if(!this.isDisposed())if(b)if(b=R6(b),g.Na(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.ni(b)),a){case "mdxSessionStatus":vVa(this,b);break;case "loungeToken":yVa(this,b);break;default:l8(this,"Unknown youtube message: "+a)}else l8(this,"Unable to parse message.");else l8(this,"No data in message.")};
g.k.BK=function(a,b,c,d){g.bu(this.S);this.S=0;pVa(this.B,this.i.label,a,this.i.friendlyName,(0,g.C)(function(e){e?b(e):0<=d?(l8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.S=g.$t((0,g.C)(this.BK,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.kI=function(){return this.u};
g.k.DQ=function(a){this.isDisposed()||a||(l8(this,"Cast session died."),this.zg())};g.v(p8,j8);g.k=p8.prototype;g.k.nG=function(a){this.u=a;this.u.addUpdateListener(this.Ia)};
g.k.Rs=function(a){this.Ka=a;this.Z()};
g.k.stop=function(){IVa(this);this.u?this.u.stop((0,g.C)(this.zg,this,null),(0,g.C)(this.zg,this,"Failed to stop DIAL device.")):this.zg()};
g.k.xa=function(){IVa(this);this.u&&this.u.removeUpdateListener(this.Ia);this.u=null;j8.prototype.xa.call(this)};
g.k.EQ=function(a){this.isDisposed()||a||(l8(this,"DIAL session died."),this.D(),this.D=g.Ja,this.zg())};g.v(t8,j8);t8.prototype.stop=function(){this.zg()};
t8.prototype.nG=function(){};
t8.prototype.Rs=function(){g.bu(this.u);this.u=NaN;var a=$6(this.B.Fh(),this.i.label);a?k8(this,a):this.zg(Error("No such screen"))};
t8.prototype.xa=function(){g.bu(this.u);this.u=NaN;j8.prototype.xa.call(this)};g.v(u8,g.Q);g.k=u8.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.S,[chrome.cast.Capability.AUDIO_OUT]);this.X||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.C)(this.xV,this);c=new chrome.cast.ApiConfig(c,(0,g.C)(this.TM,this),e,d,a);c.customDialLaunchCallback=(0,g.C)(this.sU,this);
chrome.cast.initialize(c,(0,g.C)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),dVa(),this.u.subscribe("onlineScreenChange",(0,g.C)(this.lI,this)),this.B=LVa(this),chrome.cast.setCustomReceivers(this.B,g.Ja,(0,g.C)(function(f){this.ke("Failed to set initial custom receivers: "+g.ni(f))},this)),this.ea("yt-remote-cast2-availability-change",w8(this)),b(!0))},this),(0,g.C)(function(f){this.ke("Failed to initialize API: "+g.ni(f));
b(!1)},this))};
g.k.jX=function(a,b){v8("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)v8("Unsetting old screen status: "+this.i.i.friendlyName),x8(this,null)}if(a&&b){if(!this.i){c=$6(this.u.Fh(),a);if(!c){v8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){v8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=JVa(this,c);a||(v8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,g.Ja,(0,g.C)(function(d){this.ke("Failed to set initial custom receivers: "+g.ni(d))},this)));
v8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);x8(this,new t8(this.u,a),!0)}this.i.oG(b)}else v8("setConnectedScreenStatus: no screen.")};
g.k.kX=function(a){this.isDisposed()?this.ke("Setting connection data on disposed cast v2"):this.i?this.i.Rs(a):this.ke("Setting connection data without a session")};
g.k.GQ=function(){this.isDisposed()?this.ke("Stopping session on disposed cast v2"):this.i?(this.i.stop(),x8(this,null)):v8("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.C)(this.TM,this),(0,g.C)(this.RV,this))};
g.k.xa=function(){this.u.unsubscribe("onlineScreenChange",(0,g.C)(this.lI,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=aVa,b=g.Ia("yt.mdx.remote.debug.handlers_");g.Tb(b||[],a);g.fe(this.i);g.Q.prototype.xa.call(this)};
g.k.ke=function(a){T7("Controller",a)};
g.k.VM=function(a,b){this.i==a&&(b||x8(this,null),this.ea("yt-remote-cast2-session-change",b))};
g.k.uV=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),v8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)v8("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{v8("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.ea("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:x8(this,
new t8(this.u,a));break;case chrome.cast.ReceiverType.DIAL:x8(this,new p8(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:x8(this,new m8(this.u,a,this.config_));break;default:this.ke("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.ke("Stopping receiver w/o session: "+a.friendlyName)}else this.ke("onReceiverAction_ called without receiver.")};
g.k.sU=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.ke("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.ke("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return v8("Reselecting dial screen."),
this.ea("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.ke('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);x8(this,new p8(this.u,b,this.C,this.config_))}b=this.i;b.S=a;b.S.appState==chrome.cast.DialAppState.RUNNING?(a=b.S.extraData||{},c=a.screenId||null,q8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=FVa(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.S.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.nt(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=GVa(b,c)):a=GVa(b,c)):a=s8(b);return a};
g.k.TM=function(a){var b=this;if(!this.isDisposed()&&!this.I){v8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(c.receiverType==chrome.cast.ReceiverType.CAST)v8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),x8(this,new m8(this.u,c,this.config_),!0);else{this.ke("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.i.i,e=$6(this.u.Fh(),
d.label);e&&V6(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(v8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.fe(this.i),this.i=new m8(this.u,c,this.config_),this.i.subscribe("sessionScreen",(0,g.C)(this.VM,this,this.i)),this.i.subscribe("sessionFailed",function(){return KVa(b,b.i)}),this.i.Rs(null));
this.i.nG(a)}}};
g.k.FQ=function(){return this.i?this.i.kI():null};
g.k.RV=function(a){this.isDisposed()||(this.ke("Failed to estabilish a session: "+g.ni(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&x8(this,null),this.ea("yt-remote-cast2-session-failed"))};
g.k.xV=function(a){v8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=w8(this);this.K=a==chrome.cast.ReceiverAvailability.AVAILABLE;w8(this)!=b&&this.ea("yt-remote-cast2-availability-change",w8(this))}};
g.k.lI=function(){this.isDisposed()||(this.B=LVa(this),v8("Updating custom receivers: "+g.ni(this.B)),chrome.cast.setCustomReceivers(this.B,g.Ja,(0,g.C)(function(){this.ke("Failed to set custom receivers.")},this)),this.ea("yt-remote-cast2-availability-change",w8(this)))};
u8.prototype.setLaunchParams=u8.prototype.kX;u8.prototype.setConnectedScreenStatus=u8.prototype.jX;u8.prototype.stopSession=u8.prototype.GQ;u8.prototype.getCastSession=u8.prototype.FQ;u8.prototype.requestSession=u8.prototype.requestSession;u8.prototype.init=u8.prototype.init;u8.prototype.dispose=u8.prototype.dispose;var D8=[];g.k=I8.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";J8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.Hk=a.hasPrevious,this.hasNext=a.hasNext,this.K=a.playerTime,this.I=a.playerTimeAt,this.C=a.seekableStart,this.i=a.seekableEnd,this.D=a.duration,this.S=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.k.Fc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Jj=function(a){this.D=isNaN(a)?0:a};
g.k.getDuration=function(){return this.u?this.D+K8(this):this.D};
g.k.clone=function(){return new I8(O8(this))};g.v(Q8,g.Q);g.k=Q8.prototype;g.k.getState=function(){return this.B};
g.k.play=function(){S8(this)?(this.i?this.i.play(null,g.Ja,X8(this,"play")):W8(this,"play"),V8(this,1,M8(R8(this))),this.ea("remotePlayerChange")):T8(this,this.play)};
g.k.pause=function(){S8(this)?(this.i?this.i.pause(null,g.Ja,X8(this,"pause")):W8(this,"pause"),V8(this,2,M8(R8(this))),this.ea("remotePlayerChange")):T8(this,this.pause)};
g.k.seekTo=function(a){if(S8(this)){if(this.i){var b=R8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Fc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ja,X8(this,"seekTo",{newTime:a}))}else W8(this,"seekTo",{newTime:a});V8(this,3,a);this.ea("remotePlayerChange")}else T8(this,g.Ra(this.seekTo,a))};
g.k.stop=function(){if(S8(this)){this.i?this.i.stop(null,g.Ja,X8(this,"stopVideo")):W8(this,"stopVideo");var a=R8(this);a.index=-1;a.videoId="";J8(a);U8(this,a);this.ea("remotePlayerChange")}else T8(this,this.stop)};
g.k.setVolume=function(a,b){if(S8(this)){var c=R8(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.C)(function(){T7("CP","set receiver volume: "+d)},this),(0,g.C)(function(){this.ke("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.C)(function(){T7("CP","set receiver muted: "+b)},this),(0,g.C)(function(){this.ke("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);W8(this,"setVolume",e)}c.muted=b;c.volume=a;U8(this,c)}else T8(this,g.Ra(this.setVolume,a,b))};
g.k.mI=function(a,b){if(S8(this)){var c=R8(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.ni(b.style),g.Ne(a,c.trackData));W8(this,"setSubtitlesTrack",a);U8(this,c)}else T8(this,g.Ra(this.mI,a,b))};
g.k.setAudioTrack=function(a,b){S8(this)?(b=b.getLanguageInfo().getId(),W8(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=R8(this),a.audioTrackId=b,U8(this,a)):T8(this,g.Ra(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=R8(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);N8(l,a,c||0);void 0!==b&&(L8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.ni(h));W8(this,"setPlaylist",m);d||U8(this,l)};
g.k.CA=function(a,b){if(S8(this)){if(a&&b){var c=R8(this);N8(c,a,b);U8(this,c)}W8(this,"previous")}else T8(this,g.Ra(this.CA,a,b))};
g.k.nextVideo=function(a,b){if(S8(this)){if(a&&b){var c=R8(this);N8(c,a,b);U8(this,c)}W8(this,"next")}else T8(this,g.Ra(this.nextVideo,a,b))};
g.k.Sr=function(){if(S8(this)){W8(this,"clearPlaylist");var a=R8(this);a.reset();U8(this,a);this.ea("remotePlayerChange")}else T8(this,this.Sr)};
g.k.XJ=function(){S8(this)?W8(this,"dismissAutoplay"):T8(this,this.XJ)};
g.k.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ea("proxyStateChange",a,this.B)}g.Q.prototype.dispose.call(this)};
g.k.xa=function(){XVa(this);this.C=null;this.D.clear();P8(this,null);g.Q.prototype.xa.call(this)};
g.k.pG=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ea("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.i.length&&(b.i=b.u,b.i.reverse(),b.u=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.k.sV=function(a,b){this.ea(a,b)};
g.k.dU=function(a){if(!a)this.zw(null),P8(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=R8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)T7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,U8(this,b)}};
g.k.zw=function(a){T7("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.S);if(this.i=a)this.i.addUpdateListener(this.S),YVa(this),this.ea("remotePlayerChange")};
g.k.cU=function(a){a?(YVa(this),this.ea("remotePlayerChange")):this.zw(null)};
g.k.KG=function(){W8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.kU=function(){var a=UVa();a&&P8(this,a)};
g.k.ke=function(a){T7("CP",a)};g.v(Y8,g.Q);g.k=Y8.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ba&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.pc.listId=c);this.pc.videoId=d;this.pc.index=l||0;this.pc.state=3;L8(this.pc,
n);this.C="UNSUPPORTED";c=this.Ba?"setInitialState":"setPlaylist";Z8("Connecting with "+c+" and params: "+g.ni(m));this.i.connect({method:c,params:g.ni(m)},a,gUa())}else Z8("Connecting without params"),this.i.connect({},a,gUa());aWa(this)};
g.k.VA=function(a){this.i.VA(a)};
g.k.dispose=function(){this.isDisposed()||(g.Ha("yt.mdx.remote.remoteClient_",null,void 0),this.ea("beforeDispose"),$8(this,3));g.Q.prototype.dispose.call(this)};
g.k.xa=function(){a9(this);c9(this);b9(this);g.bu(this.K);this.K=NaN;g.bu(this.S);this.S=NaN;this.B=null;g.Xu(this.X);this.X.length=0;this.i.dispose();g.Q.prototype.xa.call(this);this.C=this.I=this.u=this.pc=this.i=null};
g.k.hS=function(){this.gs(2)};
g.k.hU=function(){Z8("Channel opened");this.va&&(this.va=!1,b9(this),this.oa=g.$t((0,g.C)(function(){Z8("Timing out waiting for a screen.");this.gs(1)},this),15E3));
kUa(ZUa(this.i),this.Ka)};
g.k.eU=function(){Z8("Channel closed");isNaN(this.D)?e7(!0):e7();this.dispose()};
g.k.fU=function(a,b){e7();isNaN(this.Jv())?(b&&"shortLived"==this.Aa&&this.ea("browserChannelAuthError",a),Z8("Channel error: "+a+" without reconnection"),this.dispose()):(this.va=!0,Z8("Channel error: "+a+" with reconnection in "+this.Jv()+" ms"),$8(this,2))};
g.k.jL=function(a){if(!this.u||0===this.u.length)return!1;for(var b=g.q(this.u),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.gU=function(a){a.params?Z8("Received: action="+a.action+", params="+g.ni(a.params)):Z8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=R6(a.params.devices);this.u=g.Ym(a,function(c){return new T6(c)});
a=!!g.Mb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
dWa(this,a);a=this.jL("mlm");this.ea("multiStateLoopEnabled",a);break;case "loungeScreenDisconnected":g.Ub(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
dWa(this,!1);break;case "remoteConnected":var b=new T6(R6(a.params.device));g.Mb(this.u,function(c){return c.equals(b)})||UTa(this.u,b);
break;case "remoteDisconnected":b=new T6(R6(a.params.device));g.Ub(this.u,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":fWa(this,a,"QUEUE_MODIFIED");break;case "nowPlaying":hWa(this,a);break;case "onStateChange":gWa(this,a);break;case "onAdStateChange":iWa(this,a);break;case "onVolumeChanged":jWa(this,a);break;case "onSubtitlesTrackChanged":eWa(this,a);break;case "nowAutoplaying":kWa(this,a);break;case "autoplayDismissed":this.ea("autoplayDismissed");break;case "autoplayUpNext":this.I=a.params.videoId||null;this.ea("autoplayUpNext",this.I);break;case "onAutoplayModeChanged":this.C=
a.params.autoplayMode;this.ea("autoplayModeChange",this.C);"DISABLED"==this.C&&this.ea("autoplayDismissed");break;case "onHasPreviousNextChanged":lWa(this,a);break;case "requestAssistedSignIn":this.ea("assistedSignInRequested",a.params.authCode);break;case "onLoopModeChanged":this.ea("loopModeChange",a.params.loopMode);break;default:Z8("Unrecognized action: "+a.action)}};
g.k.XW=function(){if(this.B){var a=this.B;this.B=null;this.pc.videoId!=a&&d9(this,"getNowPlaying")}};
g.k.eS=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Jv())?O7(this.i)&&isNaN(this.D)&&(a=1):a=2);return a};
g.k.gs=function(a){Z8("Disconnecting with "+a);g.Ha("yt.mdx.remote.remoteClient_",null,void 0);a9(this);this.ea("beforeDisconnect",a);1==a&&e7();$Ua(this.i,a);this.dispose()};
g.k.cS=function(){var a=this.pc;this.B&&(a=this.pc.clone(),N8(a,this.B,a.index));return O8(a)};
g.k.lX=function(a){var b=new I8(a);b.videoId&&b.videoId!=this.pc.videoId&&(this.B=b.videoId,g.bu(this.K),this.K=g.$t((0,g.C)(this.XW,this),5E3));var c=[];this.pc.listId==b.listId&&this.pc.videoId==b.videoId&&this.pc.index==b.index||c.push("remoteQueueChange");this.pc.playerState==b.playerState&&this.pc.volume==b.volume&&this.pc.muted==b.muted&&M8(this.pc)==M8(b)&&g.ni(this.pc.trackData)==g.ni(b.trackData)||c.push("remotePlayerChange");this.pc.reset(a);g.jc(c,function(d){this.ea(d)},this)};
g.k.AK=function(){var a=this.i.I.id,b=g.Mb(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Jv=function(){var a=this.i;return a.u.isActive()?a.u.u-Date.now():NaN};
g.k.ZR=function(){return this.C||"UNSUPPORTED"};
g.k.aS=function(){return this.I||""};
g.k.HQ=function(){if(!isNaN(this.Jv())){var a=this.i.u;g.or(a.i);a.start()}};
g.k.iX=function(a,b){d9(this,a,b);cWa(this)};
g.k.nI=function(){var a=g.uu("SID","")||"",b=g.uu("SAPISID","")||"",c=g.uu("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.wc(g.db(a),2);b=g.wc(g.db(b),2);c=g.wc(g.db(c),2);return g.wc(g.db(a+","+b+","+c),2)};
Y8.prototype.subscribe=Y8.prototype.subscribe;Y8.prototype.unsubscribeByKey=Y8.prototype.dg;Y8.prototype.getProxyState=Y8.prototype.eS;Y8.prototype.disconnect=Y8.prototype.gs;Y8.prototype.getPlayerContextData=Y8.prototype.cS;Y8.prototype.setPlayerContextData=Y8.prototype.lX;Y8.prototype.getOtherConnectedRemoteId=Y8.prototype.AK;Y8.prototype.getReconnectTimeout=Y8.prototype.Jv;Y8.prototype.getAutoplayMode=Y8.prototype.ZR;Y8.prototype.getAutoplayVideoId=Y8.prototype.aS;Y8.prototype.reconnect=Y8.prototype.HQ;
Y8.prototype.sendMessage=Y8.prototype.iX;Y8.prototype.getXsrfToken=Y8.prototype.nI;Y8.prototype.isCapabilitySupportedOnConnectedDevices=Y8.prototype.jL;g.v(e9,X7);g.k=e9.prototype;g.k.Fh=function(a){return this.Se.$_gs(a)};
g.k.contains=function(a){return!!this.Se.$_c(a)};
g.k.get=function(a){return this.Se.$_g(a)};
g.k.start=function(){this.Se.$_st()};
g.k.add=function(a,b,c){this.Se.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Se.$_r(a,b,c)};
g.k.pB=function(a,b,c,d){this.Se.$_un(a,b,c,d)};
g.k.xa=function(){for(var a=0,b=this.i.length;a<b;++a)this.Se.$_ubk(this.i[a]);this.i.length=0;this.Se=null;X7.prototype.xa.call(this)};
g.k.IQ=function(){this.ea("screenChange")};
g.k.ZU=function(){this.ea("onlineScreenChange")};
g8.prototype.$_st=g8.prototype.start;g8.prototype.$_gspc=g8.prototype.CQ;g8.prototype.$_gsppc=g8.prototype.jI;g8.prototype.$_c=g8.prototype.contains;g8.prototype.$_g=g8.prototype.get;g8.prototype.$_a=g8.prototype.add;g8.prototype.$_un=g8.prototype.pB;g8.prototype.$_r=g8.prototype.remove;g8.prototype.$_gs=g8.prototype.Fh;g8.prototype.$_gos=g8.prototype.iI;g8.prototype.$_s=g8.prototype.subscribe;g8.prototype.$_ubk=g8.prototype.dg;var r9=null,x9=!1,f9=null,g9=null,w9=null,k9=[];g.v(y9,g.E);g.k=y9.prototype;g.k.xa=function(){g.E.prototype.xa.call(this);this.i.stop();this.B.stop();this.S.stop();this.oa();var a=this.Ub;a.unsubscribe("proxyStateChange",this.RM,this);a.unsubscribe("remotePlayerChange",this.Ew,this);a.unsubscribe("remoteQueueChange",this.oA,this);a.unsubscribe("previousNextChange",this.OM,this);a.unsubscribe("nowAutoplaying",this.HM,this);a.unsubscribe("autoplayDismissed",this.kM,this);this.Ub=this.u=null};
g.k.rj=function(a){var b=g.Ba.apply(1,arguments);if(2!=this.Ub.B)if(z9(this)){var c=a;if(!R8(this.Ub).isAdPlaying()||"control_seek"!==c)switch(c){case "control_toggle_play_pause":R8(this.Ub).Fc()?this.Ub.pause():this.Ub.play();break;case "control_play":this.Ub.play();break;case "control_pause":this.Ub.pause();break;case "control_seek":this.K.hI(b[0],b[1]);break;case "control_subtitles_set_track":A9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.J.getCurrentTime();B9(this,0===b?void 0:b);break;case "control_seek":B9(this,b[0]);break;case "control_subtitles_set_track":A9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.aU=function(a){this.S.wQ(a)};
g.k.RX=function(a){this.rj("control_subtitles_set_track",g.Ee(a)?null:a)};
g.k.gO=function(){var a=this.J.getOption("captions","track");g.Ee(a)||A9(this,a)};
g.k.Yb=function(a){this.u.Yb(a,this.J.getVideoData().lengthSeconds)};
g.k.KU=function(){g.Ee(this.C)||wWa(this,this.C);this.D=!1};
g.k.RM=function(a,b){this.B.stop();2===b&&this.aO()};
g.k.Ew=function(){if(z9(this)){this.i.stop();var a=R8(this.Ub);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.wf=1;break;case 1082:case 1083:this.u.wf=0;break;default:this.u.wf=-1}switch(a.playerState){case 1081:case 1:this.Vb(new g.tJ(8));this.ZN();break;case 1085:case 3:this.Vb(new g.tJ(9));break;case 1083:case 0:this.Vb(new g.tJ(2));this.K.stop();this.Yb(this.J.getVideoData().lengthSeconds);break;case 1084:this.Vb(new g.tJ(4));break;case 2:this.Vb(new g.tJ(4));this.Yb(M8(a));
break;case -1:this.Vb(new g.tJ(64));break;case -1E3:this.Vb(new g.tJ(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=R8(this.Ub).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,wWa(this,a));a=R8(this.Ub);-1===a.volume||Math.round(this.J.getVolume())===a.volume&&this.J.isMuted()===a.muted||this.X.isActive()||this.IO()}else vWa(this)};
g.k.OM=function(){this.J.ea("mdxpreviousnextchange")};
g.k.oA=function(){z9(this)||vWa(this)};
g.k.HM=function(a){isNaN(a)||this.J.ea("mdxnowautoplaying",a)};
g.k.kM=function(){this.J.ea("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){z9(this)&&this.Ub.setAudioTrack(this.J.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===R8(this.Ub).playerState?B9(this,a):b&&this.Ub.seekTo(a)};
g.k.IO=function(){var a=this;if(z9(this)){var b=R8(this.Ub);this.events.tc(this.Z);b.muted?this.J.mute():this.J.unMute();this.J.setVolume(b.volume);this.Z=this.events.T(this.J,"onVolumeChange",function(c){uWa(a,c)})}};
g.k.ZN=function(){this.i.stop();if(!this.Ub.isDisposed()){var a=R8(this.Ub);a.Fc()&&this.Vb(new g.tJ(8));this.Yb(M8(a));this.i.start()}};
g.k.aO=function(){this.B.stop();this.i.stop();var a=this.Ub.C.getReconnectTimeout();2==this.Ub.B&&!isNaN(a)&&this.B.start()};
g.k.Vb=function(a){this.B.stop();var b=this.I;if(!g.yJ(b,a)){var c=g.T(a,2);c!==g.T(this.I,2)&&this.J.Ft(c);this.I=a;yWa(this.u,b,a)}};g.v(C9,g.W);C9.prototype.Ad=function(){this.i.show()};
C9.prototype.Fb=function(){this.i.hide()};
C9.prototype.u=function(){S6("mdx-privacy-popup-cancel");this.Fb()};
C9.prototype.B=function(){S6("mdx-privacy-popup-confirm");this.Fb()};g.v(D9,g.W);D9.prototype.onStateChange=function(a){xWa(this,a.state)};g.v(E9,g.uP);E9.prototype.D=function(){var a=this.J.getOption("remote","receivers");a&&1<a.length&&!this.J.getOption("remote","quickCast")?(this.Eo=g.mc(a,this.i,this),g.vP(this,g.Ym(a,this.i)),a=this.J.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.Vh(a),this.enable(!0)):this.enable(!1)};
E9.prototype.i=function(a){return a.key};
E9.prototype.jj=function(a){return"cast-selector-receiver"===a?"Cast...":this.Eo[a].name};
E9.prototype.Af=function(a){g.uP.prototype.Af.call(this,a);this.J.setOption("remote","currentReceiver",this.Eo[a]);this.Ab.Fb()};g.v(F9,g.EM);g.k=F9.prototype;
g.k.create=function(){var a=this.player.V(),b=g.rE(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.N("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.N("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.N("enable_cast_short_lived_lounge_token")};pWa(b,a);this.subscriptions.push(g.Av("yt-remote-before-disconnect",this.ZT,this));this.subscriptions.push(g.Av("yt-remote-connection-change",this.yV,this));this.subscriptions.push(g.Av("yt-remote-receiver-availability-change",this.QM,
this));this.subscriptions.push(g.Av("yt-remote-auto-connect",this.wV,this));this.subscriptions.push(g.Av("yt-remote-receiver-resumed",this.vV,this));this.subscriptions.push(g.Av("mdx-privacy-popup-confirm",this.MW,this));this.subscriptions.push(g.Av("mdx-privacy-popup-cancel",this.LW,this));this.QM()};
g.k.load=function(){this.player.cancelPlayback();g.EM.prototype.load.call(this);this.Zh=new y9(this,this.player,this.Ub);var a=(a=tWa())?a.currentTime:0;var b=v9()?new Q8(p9(),void 0):null;0==a&&b&&(a=M8(R8(b)));0!==a&&this.Yb(a);yWa(this,this.Bd,this.Bd);this.player.Vk(6)};
g.k.unload=function(){this.player.ea("mdxautoplaycanceled");this.hn=this.Ok;(0,g.ge)(this.Zh,this.Ub);this.Ub=this.Zh=null;g.EM.prototype.unload.call(this);this.player.Vk(5);G9(this)};
g.k.xa=function(){g.Bv(this.subscriptions);g.EM.prototype.xa.call(this)};
g.k.Pk=function(a){var b=g.Ba.apply(1,arguments);this.loaded&&this.Zh.rj.apply(this.Zh,[a].concat(g.ma(b)))};
g.k.getAdState=function(){return this.wf};
g.k.Hk=function(){return this.Ub?R8(this.Ub).Hk:!1};
g.k.hasNext=function(){return this.Ub?R8(this.Ub).hasNext:!1};
g.k.Yb=function(a,b){this.zL=a||0;this.player.ea("progresssync",a,b);this.player.Oa("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.zL};
g.k.getProgressState=function(){var a=R8(this.Ub),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.V().N("web_player_mdx_allow_seeking_change_killswitch")?this.player.tf():!a.isAdPlaying()&&this.player.tf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+K8(a):a.B,isAtLiveHead:1>=(a.u?a.i+K8(a):a.i)-this.getCurrentTime(),loaded:a.S,seekableEnd:a.u?a.i+K8(a):a.i,seekableStart:0<
a.C?a.C+K8(a):a.C}};
g.k.nextVideo=function(){this.Ub&&this.Ub.nextVideo()};
g.k.CA=function(){this.Ub&&this.Ub.CA()};
g.k.ZT=function(a){1===a&&(this.OF=this.Ub?R8(this.Ub):null)};
g.k.yV=function(){var a=v9()?new Q8(p9(),void 0):null;if(a){var b=this.hn;this.loaded&&this.unload();this.Ub=a;this.OF=null;b.key!==this.Ok.key&&(this.hn=b,this.load())}else(0,g.fe)(this.Ub),this.Ub=null,this.loaded&&(this.unload(),(a=this.OF)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,M8(a)));this.player.ea("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.QM=function(){var a=[this.Ok],b=a.concat,c=qWa();E8()&&g.wy("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Eo=b.call(a,c);a=q9()||this.Ok;H9(this,a);this.player.Oa("onMdxReceiversChange")};
g.k.wV=function(){var a=q9();H9(this,a)};
g.k.vV=function(){this.hn=q9()};
g.k.MW=function(){this.Mw=!0;G9(this);x9=!1;r9&&t9(r9,1);r9=null};
g.k.LW=function(){this.Mw=!1;G9(this);H9(this,this.Ok);this.hn=this.Ok;x9=!1;r9=null;this.player.playVideo()};
g.k.kf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Eo;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?G8():H9(this,b)),this.loaded?this.hn:this.Ok;case "quickCast":return 2===this.Eo.length&&"cast-selector-receiver"===this.Eo[1].key?(b&&G8(),!0):!1}};
g.k.KG=function(){this.Ub.KG()};
g.k.Qi=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.DM("remote",F9);})(_yt_player);


}
/*
     FILE ARCHIVED ON 20:54:01 Nov 17, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:18:07 Jan 25, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.522
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.01
  esindex: 0.01
  cdx.remote: 32.625
  LoadShardBlock: 180.133 (3)
  PetaboxLoader3.datanode: 213.537 (4)
  load_resource: 698.245
  PetaboxLoader3.resolve: 648.02
*/