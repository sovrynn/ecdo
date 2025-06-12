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

(function(g){var window=this;'use strict';var WUa=function(a,b){return g.Pe(a,b)},XUa=function(a,b){b=b instanceof g.Qf?b:g.Yf(b,/^data:image\//i.test(b));
a.src=g.Rf(b)},P6=function(a){g.hl(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Ta()).toString(36));
return a},Q6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.ml(a.u,b,c)},YUa=function(a){if(a===g.cp)throw Error("ES6 Iteration protocol does NOT adjust control flow when StopIteration is thrown from callback helper functions. If your code relies on this behavior, consider throwing a different error and catching it to terminate iteration.");
throw a;},ZUa=function(a){if(a instanceof g.ap)return a;
if("function"==typeof a.Kg)return a.Kg(!1);if(g.Na(a)){var b=0,c=new g.ap;c.next=function(){for(;;){if(b>=a.length)return g.a2;if(b in a)return g.bp(a[b++]);b++}};
var d=c.next;c.Dj=function(){return g.dp(d.call(c))};
return c}throw Error("Not implemented");},$Ua=function(a,b,c){if(g.Na(a))try{g.sc(a,b,c)}catch(e){YUa(e)}else for(a=ZUa(a);;){var d=void 0;
try{d=a.Dj()}catch(e){if(e===g.cp)break;throw e;}try{b.call(c,d,void 0,a)}catch(e){YUa(e)}}},aVa=function(a,b){var c=[];
$Ua(b,function(d){try{var e=g.ks.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.kfa(e)&&c.push(d)},a);
return c},bVa=function(a,b){aVa(a,b).forEach(function(c){g.ks.prototype.remove.call(this,c)},a)},cVa=function(a){if(a.xa){if(a.xa.locationOverrideToken)return{locationOverrideToken:a.xa.locationOverrideToken};
if(null!=a.xa.latitudeE7&&null!=a.xa.longitudeE7)return{latitudeE7:a.xa.latitudeE7,longitudeE7:a.xa.longitudeE7}}return null},dVa=function(a,b){g.Wb(a,b)||a.push(b)},R6=function(a){var b=0,c;
for(c in a)b++;return b},eVa=function(a){try{return g.B.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},S6=function(a){if(g.B.JSON)try{return g.B.JSON.parse(a)}catch(b){}return eVa(a)},fVa=function(a,b,c,d){var e=new g.Qk(null,void 0);
a&&g.Rk(e,a);b&&g.Sk(e,b);c&&g.Tk(e,c);d&&(e.K=d);return e},T6=function(a,b){g.pv[a]=!0;
var c=g.nv();c&&c.publish.apply(c,arguments);g.pv[a]=!1},U6=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Tr;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",gVa(this,a.capabilities||""),hVa(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},gVa=function(a,b){a.capabilities.clear();
g.Cp(b.split(","),g.Ra(WUa,iVa)).forEach(function(c){a.capabilities.add(c)})},hVa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},V6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},W6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},jVa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},kVa=function(a){return new V6(a)},lVa=function(a){return Array.isArray(a)?g.pn(a,kVa):[]},X6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},Y6=function(a){return Array.isArray(a)?"["+g.pn(a,X6).join(",")+"]":"null"},Z6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},mVa=function(a){return g.pn(a,function(b){return{key:b.id,
name:b.name}})},$6=function(a,b){return g.Tb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},a7=function(a,b){return g.Tb(a,function(c){return W6(c,b)})},nVa=function(){var a=(0,g.oy)();
a&&bVa(a,a.i.Kg(!0))},b7=function(){var a=g.ry("yt-remote-connected-devices")||[];
g.pc(a);return a},oVa=function(a){if(g.Xb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.pn(a,function(d,e){return 0==e?d:d.substring(c.length)})},pVa=function(a){g.qy("yt-remote-connected-devices",a,86400)},d7=function(){if(c7)return c7;
var a=g.ry("yt-remote-device-id");a||(a=Z6(),g.qy("yt-remote-device-id",a,31536E3));for(var b=b7(),c=1,d=a;g.Wb(b,d);)c++,d=a+"#"+c;return c7=d},e7=function(){var a=b7(),b=d7();
g.Wb(a,b);g.ty()&&g.rc(a,b);a=oVa(a);if(g.Xb(a))try{g.Bia("remote_sid")}catch(c){}else try{g.qu("remote_sid",a.join(","),-1)}catch(c){}},qVa=function(){return g.ry("yt-remote-session-browser-channel")},rVa=function(){return g.ry("yt-remote-local-screens")||[]},sVa=function(){g.qy("yt-remote-lounge-token-expiration",!0,86400)},tVa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.pn(rVa(),function(d){return d.loungeToken}),c=g.pn(a,function(d){return d.loungeToken});
g.qn(c,function(d){return!g.Wb(b,d)})&&sVa();
g.qy("yt-remote-local-screens",a,31536E3)},uVa=function(a,b){g.qy("yt-remote-session-browser-channel",a);
g.qy("yt-remote-session-screen-id",b);a=b7();b=d7();g.Wb(a,b)||a.push(b);pVa(a);e7()},f7=function(a){a||(g.sy("yt-remote-session-screen-id"),g.sy("yt-remote-session-video-id"));
e7();a=b7();g.$b(a,d7());pVa(a)},vVa=function(){if(!g7){var a=g.us();
a&&(g7=new g.hs(a))}},wVa=function(){vVa();
return g7?!!g7.get("yt-remote-use-staging-server"):!1},h7=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},xVa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},yVa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},i7=function(a){a.length?zVa(a.shift(),function(){i7(a)}):j7()},AVa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},zVa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.kk(d,g.Yr(a));(document.head||document.documentElement).appendChild(d)},BVa=function(){var a=h7(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20211124164417/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20211124164417/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},j7=function(){var a=yVa();
a&&a(!1,"No cast extension found")},k7=function(){if(CVa){var a=2,b=yVa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;zVa("//web.archive.org/web/20211124164417/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",j7,c)}},DVa=function(){k7();
var a=BVa();a.push("//web.archive.org/web/20211124164417/https://www.gstatic.com/eureka/clank/cast_sender.js");i7(a)},FVa=function(){k7();
var a=BVa();a.push.apply(a,g.ma(EVa.map(AVa)));a.push("//web.archive.org/web/20211124164417/https://www.gstatic.com/eureka/clank/cast_sender.js");i7(a)},l7=function(a,b,c){g.E.call(this);
this.I=null!=c?(0,g.D)(a,c):a;this.Wf=b;this.D=(0,g.D)(this.HQ,this);this.i=!1;this.u=0;this.B=this.Mb=null;this.C=[]},m7=function(a,b,c){g.E.call(this);
this.C=null!=c?a.bind(c):a;this.Wf=b;this.B=null;this.i=!1;this.u=0;this.Mb=null},n7=function(a){a.Mb=g.Yh(function(){a.Mb=null;
a.i&&!a.u&&(a.i=!1,n7(a))},a.Wf);
var b=a.B;a.B=null;a.C.apply(null,b)},o7=function(){},p7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.B.setTimeout(function(){a()},b)},r7=function(a){q7.dispatchEvent(new GVa(q7,a))},GVa=function(a,b){g.ue.call(this,"statevent",a);
this.stat=b},s7=function(a,b,c,d){this.i=a;
this.B=b;this.S=c;this.K=d||1;this.u=45E3;this.C=new g.nl(this);this.I=new g.Xh;this.I.setInterval(250)},IVa=function(a,b,c){a.Pt=1;
a.cn=P6(b.clone());a.Aq=c;a.D=!0;HVa(a,null)},t7=function(a,b,c,d,e){a.Pt=1;
a.cn=P6(b.clone());a.Aq=null;a.D=c;e&&(a.RN=!1);HVa(a,d)},HVa=function(a,b){a.Ct=Date.now();
u7(a);a.Ko=a.cn.clone();Q6(a.Ko,"t",a.K);a.DB=0;a.Mf=a.i.wD(a.i.vx()?b:null);0<a.pC&&(a.RA=new m7((0,g.D)(a.VO,a,a.Mf),a.pC));a.C.Ra(a.Mf,"readystatechange",a.IQ);b=a.Zo?g.We(a.Zo):{};a.Aq?(a.BB="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Mf.send(a.Ko,a.BB,a.Aq,b)):(a.BB="GET",a.RN&&!g.Yg&&(b.Connection="close"),a.Mf.send(a.Ko,a.BB,null,b));a.i.Ej(1)},KVa=function(a,b){var c=a.DB,d=b.indexOf("\n",c);
if(-1==d)return v7;c=Number(b.substring(c,d));if(isNaN(c))return JVa;d+=1;if(d+c>b.length)return v7;b=b.substr(d,c);a.DB=d+c;return b},MVa=function(a,b){a.Ct=Date.now();
u7(a);var c=b?window.location.hostname:"";a.Ko=a.cn.clone();g.hl(a.Ko,"DOMAIN",c);g.hl(a.Ko,"t",a.K);try{a.Rj=new ActiveXObject("htmlfile")}catch(m){w7(a);a.Tm=7;r7(22);x7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in y7)f=y7[f];else if(f in LVa)f=y7[f]=LVa[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
y7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.mg(g.If("b/12014412"),d);a.Rj.open();a.Rj.write(g.ig(c));a.Rj.close();a.Rj.parentWindow.m=(0,g.D)(a.DW,a);a.Rj.parentWindow.d=(0,g.D)(a.cN,a,!0);a.Rj.parentWindow.rpcClose=(0,g.D)(a.cN,a,!1);c=a.Rj.createElement("DIV");a.Rj.parentWindow.document.body.appendChild(c);d=g.Xf(a.Ko.toString());d=g.Dg(g.Rf(d));d=g.mg(g.If("b/12014412"),'<iframe src="'+d+'"></iframe>');g.og(c,d);a.i.Ej(1)},u7=function(a){a.nH=Date.now()+
a.u;
NVa(a,a.u)},NVa=function(a,b){if(null!=a.du)throw Error("WatchDog timer not null");
a.du=p7((0,g.D)(a.KW,a),b)},z7=function(a){a.du&&(g.B.clearTimeout(a.du),a.du=null)},x7=function(a){a.i.sf()||a.vp||a.i.iy(a)},w7=function(a){z7(a);
g.re(a.RA);a.RA=null;a.I.stop();g.pl(a.C);if(a.Mf){var b=a.Mf;a.Mf=null;b.abort();b.dispose()}a.Rj&&(a.Rj=null)},A7=function(a,b){try{a.i.VM(a,b),a.i.Ej(4)}catch(c){}},PVa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;OVa(a,b,function(h){h?c(!0):g.B.setTimeout(function(){PVa(a,b,c,d,f)},f)})}},OVa=function(a,b,c){var d=new Image;
d.onload=function(){try{B7(d),c(!0)}catch(e){}};
d.onerror=function(){try{B7(d),c(!1)}catch(e){}};
d.onabort=function(){try{B7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{B7(d),c(!1)}catch(e){}};
g.B.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
XUa(d,a)},B7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},QVa=function(a){this.i=a;
this.u=new o7},RVa=function(a){var b=C7(a.i,a.Uu,"/mail/images/cleardot.gif");
P6(b);PVa(b.toString(),5E3,(0,g.D)(a.wR,a),3,2E3);a.Ej(1)},E7=function(a){var b=a.i.X;
if(null!=b)r7(5),b?(r7(11),D7(a.i,a,!1)):(r7(12),D7(a.i,a,!0));else if(a.uh=new s7(a,void 0,void 0,void 0),a.uh.Zo=a.qC,b=a.i,b=C7(b,b.vx()?a.Iu:null,a.rC),r7(5),!g.Jc||g.Bc(10))Q6(b,"TYPE","xmlhttp"),t7(a.uh,b,!1,a.Iu,!1);else{Q6(b,"TYPE","html");var c=a.uh;a=!!a.Iu;c.Pt=3;c.cn=P6(b.clone());MVa(c,a)}},F7=function(a,b,c){this.i=1;
this.u=[];this.C=[];this.D=new o7;this.S=a||null;this.X=null!=b?b:null;this.I=c||!1},SVa=function(a,b){this.i=a;
this.map=b;this.context=null},TVa=function(a,b,c,d){g.ue.call(this,"timingevent",a);
this.size=b;this.jx=d},UVa=function(a){g.ue.call(this,"serverreachability",a)},XVa=function(a){VVa(a);
if(3==a.i){var b=a.xw++,c=a.Xy.clone();g.hl(c,"SID",a.B);g.hl(c,"RID",b);g.hl(c,"TYPE","terminate");G7(a,c);b=new s7(a,a.B,b,void 0);b.Pt=2;b.cn=P6(c.clone());XUa(new Image,b.cn.toString());b.Ct=Date.now();u7(b)}WVa(a)},YVa=function(a){a.WR(1,0);
a.Xy=C7(a,null,a.sC);H7(a)},VVa=function(a){a.jn&&(a.jn.abort(),a.jn=null);
a.Je&&(a.Je.cancel(),a.Je=null);a.Kl&&(g.B.clearTimeout(a.Kl),a.Kl=null);I7(a);a.Ug&&(a.Ug.cancel(),a.Ug=null);a.Dn&&(g.B.clearTimeout(a.Dn),a.Dn=null)},ZVa=function(a,b){if(0==a.i)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new SVa(a.AT++,b));2!=a.i&&3!=a.i||H7(a)},$Va=function(a){var b=0;
a.Je&&b++;a.Ug&&b++;return b},H7=function(a){a.Ug||a.Dn||(a.Dn=p7((0,g.D)(a.aN,a),0),a.xs=0)},bWa=function(a,b){if(1==a.i){if(!b){a.xw=Math.floor(1E5*Math.random());
b=a.xw++;var c=new s7(a,"",b,void 0);c.Zo=a.dk;var d=J7(a),e=a.Xy.clone();g.hl(e,"RID",b);g.hl(e,"CVER","1");G7(a,e);IVa(c,e,d);a.Ug=c;a.i=2}}else 3==a.i&&(b?aWa(a,b):0==a.u.length||a.Ug||aWa(a))},aWa=function(a,b){if(b)if(6<a.wp){a.u=a.C.concat(a.u);
a.C.length=0;var c=a.xw-1;b=J7(a)}else c=b.S,b=b.Aq;else c=a.xw++,b=J7(a);var d=a.Xy.clone();g.hl(d,"SID",a.B);g.hl(d,"RID",c);g.hl(d,"AID",a.Ss);G7(a,d);c=new s7(a,a.B,c,a.xs+1);c.Zo=a.dk;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Ug=c;IVa(c,d,b)},G7=function(a,b){a.Nf&&(a=a.Nf.uK())&&g.De(a,function(c,d){g.hl(b,d,c)})},J7=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.wp&&0<b){var d=a.u[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Zq:e.Zq},f++){e.Zq=a.u[f].i;var h=a.u[f].map;e.Zq=6>=a.wp?f:e.Zq-d;try{g.De(h,function(l){return function(m,n){c.push("req"+l.Zq+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Zq+"_type="+encodeURIComponent("_badmap"))}}a.C=a.C.concat(a.u.splice(0,b));
return c.join("&")},cWa=function(a){a.Je||a.Kl||(a.K=1,a.Kl=p7((0,g.D)(a.ZM,a),0),a.Sr=0)},K7=function(a){if(a.Je||a.Kl||3<=a.Sr)return!1;
a.K++;a.Kl=p7((0,g.D)(a.ZM,a),dWa(a,a.Sr));a.Sr++;return!0},D7=function(a,b,c){a.zB=c;
a.ek=b.xl;a.I||YVa(a)},I7=function(a){null!=a.Ep&&(g.B.clearTimeout(a.Ep),a.Ep=null)},dWa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},L7=function(a,b){if(2==b||9==b){var c=null;
a.Nf&&(c=null);var d=(0,g.D)(a.LX,a);c||(c=new g.Qk("//web.archive.org/web/20211124164417/https://www.google.com/images/cleardot.gif"),P6(c));OVa(c.toString(),1E4,d)}else r7(2);eWa(a,b)},eWa=function(a,b){a.i=0;
a.Nf&&a.Nf.HJ(b);WVa(a);VVa(a)},WVa=function(a){a.i=0;
a.ek=-1;if(a.Nf)if(0==a.C.length&&0==a.u.length)a.Nf.jD();else{g.fc(a.C);var b=g.fc(a.u);a.C.length=0;a.u.length=0;a.Nf.jD(b)}},C7=function(a,b,c){var d=g.il(c);
if(""!=d.i)b&&g.Sk(d,b+"."+d.i),g.Tk(d,d.B);else{var e=window.location;d=fVa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Av&&g.De(a.Av,function(f,h){g.hl(d,h,f)});
g.hl(d,"VER",a.wp);G7(a,d);return d},fWa=function(){},gWa=function(){this.i=[];
this.u=[]},hWa=function(a,b){this.action=a;
this.params=b||{}},M7=function(a,b){g.E.call(this);
this.i=new g.I(this.sW,0,this);g.H(this,this.i);this.Wf=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.D)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.D)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},N7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.xa=a;this.I=b;this.B=new g.gs;this.u=new M7(this.pX,this);this.i=null;this.Z=!1;this.D=null;this.X="";this.S=this.C=0;this.K=[];this.Aa=c;this.oa=d;this.Ba=e},iWa=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.zB,sessionId:a.i.B,arrayId:a.i.Ss}},jWa=function(a,b){a.S=b||0;
a.u.stop();O7(a);a.i&&(3==a.i.getState()&&bWa(a.i),XVa(a.i));a.S=0},P7=function(a){return!!a.i&&3==a.i.getState()},O7=function(a){if(a.i){var b=a.oa(),c=a.i.dk||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.dk=c}},Q7=function(a){this.port=this.domain="";
this.i="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.Ii(4,a))||"";b&&(this.port=":"+b);this.domain=g.Ji(a)||"";a=g.yb();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.xb(a,"10.0")&&(this.u=!1))},R7=function(a,b){var c=a.i;
a.u&&(c="https://"+a.domain+a.port+a.i);return g.Ui(c+b,{})},S7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ra(a.C,d,!0),onError:g.Ra(a.B,e),onTimeout:g.Ra(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.hu(b,a)},nWa=function(){var a=kWa;
lWa();T7.push(a);mWa()},U7=function(a,b){lWa();
var c=oWa(a,String(b));g.Xb(T7)?pWa(c):(mWa(),g.sc(T7,function(d){d(c)}))},lWa=function(){T7||(T7=g.Ja("yt.mdx.remote.debug.handlers_")||[],g.Ia("yt.mdx.remote.debug.handlers_",T7,void 0))},pWa=function(a){var b=(V7+1)%50;
V7=b;W7[b]=a;X7||(X7=49==b)},mWa=function(){var a=T7;
if(W7[0]){var b=X7?V7:-1;do{b=(b+1)%50;var c=W7[b];g.sc(a,function(d){d(c)})}while(b!=V7);
W7=Array(50);V7=-1;X7=!1}},oWa=function(a,b){var c=(Date.now()-qWa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},Y7=function(a){g.Q.call(this);
this.I=a;this.screens=[]},rWa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},sWa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Cp(a.screens,function(f){return!!$6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=rWa(a,b[d])||c;return c},tWa=function(a,b){var c=a.screens.length;
a.screens=g.Cp(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},Z7=function(a,b,c,d,e){g.Q.call(this);
this.B=a;this.K=b;this.C=c;this.I=d;this.D=e;this.u=0;this.i=null;this.Mb=NaN},a8=function(a){Y7.call(this,"LocalScreenService");
this.u=a;this.i=NaN;$7(this);this.info("Initializing with "+Y6(this.screens))},uWa=function(a){if(a.screens.length){var b=g.pn(a.screens,function(d){return d.id}),c=R7(a.u,"/pairing/get_lounge_token_batch");
S7(a.u,c,{screen_ids:b.join(",")},(0,g.D)(a.vS,a),(0,g.D)(a.uS,a))}},$7=function(a){if(g.O("deprecate_pair_servlet_enabled"))return sWa(a,[]);
var b=lVa(rVa());b=g.Cp(b,function(c){return!c.uuid});
return sWa(a,b)},b8=function(a,b){tVa(g.pn(a.screens,jVa));
b&&sVa()},d8=function(a,b){g.Q.call(this);
this.I=b;b=(b=g.ry("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.Wb(b,h)}this.i=c;this.D=a;this.B=this.C=NaN;this.u=null;c8("Initialized with "+g.zi(this.i))},e8=function(a,b,c){var d=R7(a.D,"/pairing/get_screen_availability");
S7(a.D,d,{lounge_token:b.token},(0,g.D)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.D)(function(){c(!1)},a))},f8=function(a,b){a:if(R6(b)!=R6(a.i))var c=!1;
else{c=g.Ne(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(c8("Updated online screens: "+g.zi(a.i)),a.i=b,a.ea("screenChange"));vWa(a)},g8=function(a){isNaN(a.B)||g.Ot(a.B);
a.B=g.Mt((0,g.D)(a.gG,a),0<a.C&&a.C<g.Ta()?2E4:1E4)},c8=function(a){U7("OnlineScreenService",a)},wWa=function(a){var b={};
g.sc(a.I(),function(c){c.token?b[c.token]=c.id:this.ke("Requesting availability of screen w/o lounge token.")});
return b},vWa=function(a){a=g.Ne(g.Ee(a.i,function(b){return b}));
g.pc(a);a.length?g.qy("yt-remote-online-screen-ids",a.join(","),60):g.sy("yt-remote-online-screen-ids")},h8=function(a,b){b=void 0===b?!1:b;
Y7.call(this,"ScreenService");this.C=a;this.K=b;this.i=this.u=null;this.B=[];this.D={};xWa(this)},zWa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.Ih(),l=c?a7(h,c):null;c&&(a.K||l)||(l=a7(h,b));if(l){l.uuid=b;var m=i8(a,l);e8(a.i,m,function(n){e(n?m:null)})}else c?yWa(a,c,(0,g.D)(function(n){var p=i8(this,new V6({name:d,
screenId:c,loungeToken:n,dialId:b||""}));e8(this.i,p,function(r){e(r?p:null)})},a),f):e(null)},AWa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},BWa=function(a,b,c){e8(a.i,b,c)},yWa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.hu(R7(a.C,"/pairing/get_lounge_token_batch"),e)},CWa=function(a){a.screens=a.u.Ih();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+Y6(a.screens))},xWa=function(a){j8(a);
a.u=new a8(a.C);a.u.subscribe("screenChange",(0,g.D)(a.ES,a));CWa(a);a.K||(a.B=lVa(g.ry("yt-remote-automatic-screen-cache")||[]));j8(a);a.info("Initializing automatic screens: "+Y6(a.B));a.i=new d8(a.C,(0,g.D)(a.Ih,a,!0));a.i.subscribe("screenChange",(0,g.D)(function(){this.ea("onlineScreenChange")},a))},i8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=a7(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.K||DWa(a));j8(a);a.D[b.uuid]=b.id;g.qy("yt-remote-device-id-map",a.D,31536E3);return b},DWa=function(a){a=g.Cp(a.B,function(b){return"shortLived"!=b.idType});
g.qy("yt-remote-automatic-screen-cache",g.pn(a,jVa))},j8=function(a){a.D=g.ry("yt-remote-device-id-map")||{}},k8=function(a,b,c){g.Q.call(this);
this.Ba=c;this.B=a;this.i=b;this.C=null},l8=function(a,b){a.C=b;
a.ea("sessionScreen",a.C)},EWa=function(a,b){a.C&&(a.C.token=b,i8(a.B,a.C));
a.ea("sessionScreen",a.C)},m8=function(a,b){U7(a.Ba,b)},n8=function(a,b,c){k8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.oa=(0,g.D)(this.NQ,this);this.Aa=(0,g.D)(this.OW,this);this.Z=g.Mt(function(){FWa(d,null)},12E4);
this.K=this.D=this.I=this.S=0;this.xa=!1;this.X="unknown"},o8=function(a,b){g.Ot(a.K);
a.K=0;0==b?GWa(a):a.K=g.Mt(function(){GWa(a)},b)},GWa=function(a){HWa(a,"getLoungeToken");
g.Ot(a.D);a.D=g.Mt(function(){IWa(a,null)},3E4)},HWa=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.zi(void 0));
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,g.Ka,(0,g.D)(function(){m8(this,"Failed to send message: "+b+".")},a)):m8(a,"Sending yt message without session: "+g.zi(c))},p8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.HK(b,function(c){l8(a,c)},function(){return a.zg()},5)):a.zg(Error("Waiting for session status timed out."))},KWa=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+JSON.stringify(b));
var d=new V6(b);JWa(a,d,function(e){e?(a.xa=!0,i8(a.B,d),l8(a,d),a.X="unknown",o8(a,c)):(g.vt(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.zg())},5)},FWa=function(a,b){g.Ot(a.Z);
a.Z=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?KWa(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.vt(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),p8(a,b.screenId))):(g.vt(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),p8(a,b.screenId)):p8(a,b.screenId):a.zg(Error("Waiting for session status timed out."))},IWa=function(a,b){g.Ot(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.X=c,o8(a,3E4)):(EWa(a,b.loungeToken),a.xa=!1,a.X="unknown",o8(a,b.loungeTokenRefreshIntervalMs))},JWa=function(a,b,c,d){g.Ot(a.I);
a.I=0;BWa(a.B,b,function(e){e||0>d?c(e):a.I=g.Mt(function(){JWa(a,b,c,d-1)},300)})},LWa=function(a){g.Ot(a.S);
a.S=0;g.Ot(a.I);a.I=0;g.Ot(a.Z);a.Z=0;g.Ot(a.D);a.D=0;g.Ot(a.K);a.K=0},q8=function(a,b,c,d){k8.call(this,a,b,"DialSession");
this.config_=d;this.u=this.S=null;this.Aa="";this.La=c;this.Ka=null;this.Z=g.Ka;this.X=NaN;this.Ja=(0,g.D)(this.OQ,this);this.D=g.Ka;this.K=this.I=0;this.oa=!1;this.xa="unknown"},r8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},MWa=function(a){a.D=a.B.qI(a.Aa,a.i.label,a.i.friendlyName,r8(a),function(b,c){a.D=g.Ka;
a.oa=!0;l8(a,b);"shortLived"==b.idType&&0<c&&s8(a,c)},function(b){a.D=g.Ka;
a.zg(b)})},NWa=function(a){var b={};
b.pairingCode=a.Aa;b.theme=a.La;wVa()&&(b.env_useStageMdx=1);return g.Si(b)},t8=function(a){return new Promise(function(b){a.Aa=Z6();
if(a.Ka){var c=new chrome.cast.DialLaunchResponse(!0,NWa(a));b(c);MWa(a)}else a.Z=function(){g.Ot(a.X);a.Z=function(){};
a.X=NaN;var d=new chrome.cast.DialLaunchResponse(!0,NWa(a));b(d);MWa(a)},a.X=g.Mt(function(){a.Z()},100)})},PWa=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new V6(b);return(new Promise(function(e){OWa(a,d,function(f){f?(a.oa=!0,i8(a.B,d),l8(a,d),s8(a,c)):g.vt(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):t8(a)})},QWa=function(a,b){var c=a.S.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){zWa(a.B,c,b,d,function(f){f&&f.token&&l8(a,f);e(f)},function(f){m8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):t8(a)})},OWa=function(a,b,c,d){g.Ot(a.I);
a.I=0;BWa(a.B,b,function(e){e||0>d?c(e):a.I=g.Mt(function(){OWa(a,b,c,d-1)},300)})},s8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
r8(a)&&(g.Ot(a.K),a.K=0,0==b?RWa(a):a.K=g.Mt(function(){RWa(a)},b))},RWa=function(a){r8(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.xa=c,s8(a,3E4)):(a.oa=!1,a.xa="unknown",EWa(a,b.loungeToken),s8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.xa="noLoungeTokenResponse";s8(a,3E4)})},SWa=function(a){g.Ot(a.I);
a.I=0;g.Ot(a.K);a.K=0;a.D();a.D=function(){};
g.Ot(a.X)},u8=function(a,b){k8.call(this,a,b,"ManualSession");
this.u=g.Mt((0,g.D)(this.Ts,this,null),150)},v8=function(a,b){g.Q.call(this);
this.config_=b;this.u=a;this.S=b.appId||"233637DE";this.C=b.theme||"cl";this.X=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.i=null;this.K=!1;this.B=[];this.D=(0,g.D)(this.FV,this)},TWa=function(a,b){return b?g.Tb(a.B,function(c){return W6(b,c.label)},a):null},w8=function(a){U7("Controller",a)},kWa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},x8=function(a){return a.K||!!a.B.length||!!a.i},y8=function(a,b,c){b!=a.i&&(g.re(a.i),(a.i=b)?(c?a.ea("yt-remote-cast2-receiver-resumed",
b.i):a.ea("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.D)(a.YM,a,b)),b.subscribe("sessionFailed",function(){return UWa(a,b)}),b.getScreen()?a.ea("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.Ts(null)):a.ea("yt-remote-cast2-session-change",null))},UWa=function(a,b){a.i==b&&a.ea("yt-remote-cast2-session-failed")},VWa=function(a){var b=a.u.pI(),c=a.i&&a.i.i;
a=g.pn(b,function(d){c&&W6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=TWa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},$Wa=function(a,b,c,d){d.disableCastApi?z8("Cannot initialize because disabled by Mdx config."):WWa()?XWa(b,d)&&(A8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?YWa(a,c):(window.__onGCastApiAvailable=function(e,f){e?YWa(a,c):(B8("Failed to load cast API: "+f),C8(!1),A8(!1),g.sy("yt-remote-cast-available"),g.sy("yt-remote-cast-receiver"),
ZWa(),c(!1))},d.loadCastApiSetupScript?g.uy("https://web.archive.org/web/20211124164417/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=h7()&&DVa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?j7():89<=h7()?FVa():(k7(),i7(EVa.map(AVa))))):z8("Cannot initialize because not running Chrome")},ZWa=function(){z8("dispose");
var a=D8();a&&a.dispose();g.Ia("yt.mdx.remote.cloudview.instance_",null,void 0);aXa(!1);g.tv(E8);E8.length=0},F8=function(){return!!g.ry("yt-remote-cast-installed")},bXa=function(){var a=g.ry("yt-remote-cast-receiver");
return a?a.friendlyName:null},cXa=function(){z8("clearCurrentReceiver");
g.sy("yt-remote-cast-receiver")},dXa=function(){return F8()?D8()?D8().getCastSession():(B8("getCastSelector: Cast is not initialized."),null):(B8("getCastSelector: Cast API is not installed!"),null)},H8=function(){F8()?D8()?G8()?(z8("Requesting cast selector."),D8().requestSession()):(z8("Wait for cast API to be ready to request the session."),E8.push(g.rv("yt-remote-cast2-api-ready",H8))):B8("requestCastSelector: Cast is not initialized."):B8("requestCastSelector: Cast API is not installed!")},I8=
function(a,b){G8()?D8().setConnectedScreenStatus(a,b):B8("setConnectedScreenStatus called before ready.")},WWa=function(){var a=0<=g.yb().search(/ (CrMo|Chrome|CriOS)\//);
return g.Ej||a},eXa=function(a,b){D8().init(a,b)},XWa=function(a,b){var c=!1;
D8()||(a=new v8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.qy("yt-remote-cast-available",d);T6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){z8("onReceiverSelected: "+d.friendlyName);
g.qy("yt-remote-cast-receiver",d);T6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){z8("onReceiverResumed: "+d.friendlyName);
g.qy("yt-remote-cast-receiver",d);T6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){z8("onSessionChange: "+X6(d));
d||g.sy("yt-remote-cast-receiver");T6("yt-remote-cast2-session-change",d)}),g.Ia("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
z8("cloudview.createSingleton_: "+c);return c},D8=function(){return g.Ja("yt.mdx.remote.cloudview.instance_")},YWa=function(a,b){C8(!0);
A8(!1);eXa(a,function(c){c?(aXa(!0),g.uv("yt-remote-cast2-api-ready")):(B8("Failed to initialize cast API."),C8(!1),g.sy("yt-remote-cast-available"),g.sy("yt-remote-cast-receiver"),ZWa());b(c)})},z8=function(a){U7("cloudview",a)},B8=function(a){U7("cloudview",a)},C8=function(a){z8("setCastInstalled_ "+a);
g.qy("yt-remote-cast-installed",a)},G8=function(){return!!g.Ja("yt.mdx.remote.cloudview.apiReady_")},aXa=function(a){z8("setApiReady_ "+a);
g.Ia("yt.mdx.remote.cloudview.apiReady_",a,void 0)},A8=function(a){g.Ia("yt.mdx.remote.cloudview.initializing_",a,void 0)},J8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.K=0;this.trackData=null;this.hasNext=this.Lk=!1;this.S=this.D=this.i=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},K8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.Lk=!1;a.hasNext=!1;a.K=0;a.I=g.Ta();a.C=0;a.i=0;a.D=0;a.S=0;a.B=NaN;a.u=!1},L8=function(a){return a.Ec()?(g.Ta()-a.I)/1E3:0},M8=function(a,b){a.K=b;
a.I=g.Ta()},N8=function(a){switch(a.playerState){case 1:case 1081:return(g.Ta()-a.I)/1E3+a.K;
case -1E3:return 0}return a.K},O8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&K8(a)},P8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Xe(a.trackData);b.hasPrevious=a.Lk;b.hasNext=a.hasNext;b.playerTime=a.K;b.playerTimeAt=a.I;b.seekableStart=a.C;b.seekableEnd=a.i;b.duration=a.D;b.loadedTime=a.S;b.liveIngestionTime=a.B;return b},R8=function(a,b){g.Q.call(this);
this.B=0;this.C=a;this.I=[];this.D=new gWa;this.u=this.i=null;this.X=(0,g.D)(this.nU,this);this.K=(0,g.D)(this.Gw,this);this.S=(0,g.D)(this.mU,this);this.Z=(0,g.D)(this.uU,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.vG,this),fXa(this))):c=3;0!=c&&(b?this.vG(c):g.Mt((0,g.D)(function(){this.vG(c)},this),0));
(a=dXa())&&Q8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Z)},S8=function(a){return new J8(a.C.getPlayerContextData())},fXa=function(a){g.sc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.C.subscribe(b,g.Ra(this.CV,b),this))},a)},gXa=function(a){g.sc(a.I,function(b){this.C.unsubscribeByKey(b)},a);
a.I.length=0},T8=function(a){return 1==a.getState()},U8=function(a,b){var c=a.D;
50>c.i.length+c.u.length&&a.D.u.push(b)},W8=function(a,b,c){var d=S8(a);
M8(d,c);-1E3!=d.playerState&&(d.playerState=b);V8(a,d)},X8=function(a,b,c){a.C.sendMessage(b,c)},V8=function(a,b){gXa(a);
a.C.setPlayerContextData(P8(b));fXa(a)},Q8=function(a,b){a.u&&(a.u.removeUpdateListener(a.X),a.u.removeMediaListener(a.K),a.Gw(null));
a.u=b;a.u&&(U7("CP","Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.X),a.u.addMediaListener(a.K),a.u.media.length&&a.Gw(a.u.media[0]))},hXa=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=S8(a);b.contentId!=d.videoId&&U7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;M8(d,a.i.getEstimatedTime());V8(a,d)}else U7("CP","No cast media video. Ignoring state update.")},Y8=function(a,b,c){return(0,g.D)(function(d){this.ke("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.ke("Retrying "+b+" using MDx browser channel."),X8(this,b,c))},a)},Z8=function(a,b,c,d){d=void 0===d?!1:d;
g.Q.call(this);this.D=NaN;this.xa=!1;this.S=this.K=this.Z=this.oa=NaN;this.X=[];this.C=this.I=this.B=this.lc=this.i=null;this.Ja=a;this.Ba=d;this.X.push(g.Vu(window,"beforeunload",(0,g.D)(this.qS,this)));this.u=[];this.lc=new J8;this.Ka=b.id;this.Aa=b.idType;this.i=iXa(this,c);this.i.subscribe("handlerOpened",this.rU,this);this.i.subscribe("handlerClosed",this.oU,this);this.i.subscribe("handlerError",this.pU,this);this.i.subscribe("handlerMessage",this.qU,this);this.i.dB(b.token);this.subscribe("remoteQueueChange",
function(){var e=this.lc.videoId;g.ty()&&g.qy("yt-remote-session-video-id",e)},this)},jXa=function(a){return g.Tb(a.u,function(b){return"LOUNGE_SCREEN"==b.type})},$8=function(a){U7("conn",a)},iXa=function(a,b){return new N7(R7(a.Ja,"/bc"),b,!1,function(){return a.uI()},"shortLived"==a.Aa)},a9=function(a,b){a.ea("proxyStateChange",b)},kXa=function(a){a.D=g.Mt((0,g.D)(function(){$8("Connecting timeout");
this.qs(1)},a),2E4)},b9=function(a){g.Ot(a.D);
a.D=NaN},c9=function(a){g.Ot(a.oa);
a.oa=NaN},lXa=function(a){d9(a);
a.Z=g.Mt((0,g.D)(function(){e9(this,"getNowPlaying")},a),2E4)},d9=function(a){g.Ot(a.Z);
a.Z=NaN},nXa=function(a,b){var c=null;
if(b){var d=jXa(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ia("yt.mdx.remote.remoteClient_",c,void 0);b&&(b9(a),c9(a));c=P7(a.i)&&isNaN(a.D);b==c?b&&(a9(a,1),e9(a,"getSubtitlesTrack")):b?(a.GK()&&a.lc.reset(),a9(a,1),e9(a,"getNowPlaying"),mXa(a)):a.qs(1)},oXa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.lc.videoId&&(g.Se(b.params)?a.lc.trackData=null:a.lc.trackData=b.params,a.ea("remotePlayerChange"))},pXa=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.lc.listId=b.params.listId||a.lc.listId;O8(a.lc,d,e);a.ea("remoteQueueChange",c)},rXa=function(a,b){b.params=b.params||{};
pXa(a,b,"NOW_PLAYING_MAY_CHANGE");qXa(a,b);a.ea("autoplayDismissed")},qXa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
M8(a.lc,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.lc.playerState&&(c=-1E3);a.lc.playerState=c;c=Number(b.params.loadedTime);a.lc.S=isNaN(c)?0:c;a.lc.Nj(Number(b.params.duration));c=a.lc;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.lc;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.lc.playerState?lXa(a):d9(a);a.ea("remotePlayerChange")},sXa=function(a,b){if(-1E3!=a.lc.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.lc.playerState=c;b=parseInt(b.params.currentTime,10);M8(a.lc,isNaN(b)?0:b);a.ea("remotePlayerChange")}},tXa=function(a,b){var c="true"==b.params.muted;
a.lc.volume=parseInt(b.params.volume,10);a.lc.muted=c;a.ea("remotePlayerChange")},uXa=function(a,b){a.I=b.params.videoId;
a.ea("nowAutoplaying",parseInt(b.params.timeout,10))},vXa=function(a,b){var c="true"==b.params.hasNext;
a.lc.Lk="true"==b.params.hasPrevious;a.lc.hasNext=c;a.ea("previousNextChange")},mXa=function(a){g.Ot(a.S);
a.S=g.Mt((0,g.D)(a.qs,a,1),864E5)},e9=function(a,b,c){c?$8("Sending: action="+b+", params="+g.zi(c)):$8("Sending: action="+b);
a.i.sendMessage(b,c)},f9=function(a){Y7.call(this,"ScreenServiceProxy");
this.Se=a;this.i=[];this.i.push(this.Se.$_s("screenChange",(0,g.D)(this.SQ,this)));this.i.push(this.Se.$_s("onlineScreenChange",(0,g.D)(this.jV,this)))},zXa=function(a,b){vVa();
if(!g7||!g7.get("yt-remote-disable-remote-module-for-dev")){b=g.N("MDX_CONFIG")||b;nVa();e7();g9||(g9=new Q7(b?b.loungeApiHost:void 0),wVa()&&(g9.i="/api/loungedev"));h9||(h9=g.Ja("yt.mdx.remote.deferredProxies_")||[],g.Ia("yt.mdx.remote.deferredProxies_",h9,void 0));wXa();var c=i9();if(!c){var d=new h8(g9,b?b.disableAutomaticScreenCache||!1:!1);g.Ia("yt.mdx.remote.screenService_",d,void 0);c=i9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ia("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1,void 0);$Wa(a,d,function(f){f?j9()&&I8(j9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){T6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ja("yt.mdx.remote.initialized_")&&(g.Ia("yt.mdx.remote.initialized_",!0,void 0),k9("Initializing: "+
g.zi(b)),l9.push(g.rv("yt-remote-cast2-api-ready",function(){T6("yt-remote-api-ready")})),l9.push(g.rv("yt-remote-cast2-availability-change",function(){T6("yt-remote-receiver-availability-change")})),l9.push(g.rv("yt-remote-cast2-receiver-selected",function(){m9(null);
T6("yt-remote-auto-connect","cast-selector-receiver")})),l9.push(g.rv("yt-remote-cast2-receiver-resumed",function(){T6("yt-remote-receiver-resumed","cast-selector-receiver")})),l9.push(g.rv("yt-remote-cast2-session-change",xXa)),l9.push(g.rv("yt-remote-connection-change",function(f){f?I8(j9(),"YouTube TV"):n9()||(I8(null,null),cXa())})),l9.push(g.rv("yt-remote-cast2-session-failed",function(){T6("yt-remote-connection-failed")})),a=o9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.O("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),k9(" -- with channel params: "+g.zi(a)),a?(g.qy("yt-remote-session-app",a.app),g.qy("yt-remote-session-name",a.name)):(g.sy("yt-remote-session-app"),g.sy("yt-remote-session-name")),g.Ia("yt.mdx.remote.channelParams_",a,void 0),c.start(),j9()||yXa())}},AXa=function(){var a=i9().Se.$_gos();
var b=p9();b&&q9()&&($6(a,b)||a.push(b));return mVa(a)},r9=function(){var a=BXa();
!a&&F8()&&bXa()&&(a={key:"cast-selector-receiver",name:bXa()});return a},BXa=function(){var a=AXa(),b=p9();
b||(b=n9());return g.Tb(a,function(c){return b&&W6(b,c.key)?!0:!1})},p9=function(){var a=j9();
if(!a)return null;var b=i9().Ih();return a7(b,a)},xXa=function(a){k9("remote.onCastSessionChange_: "+X6(a));
if(a){var b=p9();if(b&&b.id==a.id){if(I8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))s9&&(s9.token=a),(b=q9())&&b.dB(a)}else b&&t9(),u9(a,1)}else q9()&&t9()},t9=function(){G8()?D8().stopSession():B8("stopSession called before API ready.");
var a=q9();a&&(a.disconnect(1),v9(null))},w9=function(){var a=q9();
return!!a&&3!=a.getProxyState()},k9=function(a){U7("remote",a)},i9=function(){if(!x9){var a=g.Ja("yt.mdx.remote.screenService_");
x9=a?new f9(a):null}return x9},j9=function(){return g.Ja("yt.mdx.remote.currentScreenId_")},CXa=function(a){g.Ia("yt.mdx.remote.currentScreenId_",a,void 0)},DXa=function(){return g.Ja("yt.mdx.remote.connectData_")},m9=function(a){g.Ia("yt.mdx.remote.connectData_",a,void 0)},q9=function(){return g.Ja("yt.mdx.remote.connection_")},v9=function(a){var b=q9();
m9(null);a||CXa("");g.Ia("yt.mdx.remote.connection_",a,void 0);h9&&(g.sc(h9,function(c){c(a)}),h9.length=0);
b&&!a?T6("yt-remote-connection-change",!1):!b&&a&&T6("yt-remote-connection-change",!0)},n9=function(){var a=g.ty();
if(!a)return null;var b=i9();if(!b)return null;b=b.Ih();return a7(b,a)},u9=function(a,b){j9();
p9()&&p9();if(y9)s9=a;else{CXa(a.id);var c=g.Ja("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new Z8(g9,a,o9(),c);a.connect(b,DXa());a.subscribe("beforeDisconnect",function(d){T6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){q9()&&(q9(),v9(null))});
a.subscribe("browserChannelAuthError",function(){var d=p9();d&&"shortLived"==d.idType&&(G8()?D8().handleBrowserChannelAuthError():B8("refreshLoungeToken called before API ready."))});
v9(a)}},yXa=function(){var a=n9();
a?(k9("Resume connection to: "+X6(a)),u9(a,0)):(f7(),cXa(),k9("Skipping connecting because no session screen found."))},wXa=function(){var a=o9();
if(g.Se(a)){a=d7();var b=g.ry("yt-remote-session-name")||"",c=g.ry("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ia("yt.mdx.remote.channelParams_",a,void 0)}},o9=function(){return g.Ja("yt.mdx.remote.channelParams_")||{}},z9=function(a,b,c){g.E.call(this);
var d=this;this.u=a;this.J=b;this.Tb=c;this.events=new g.JC(this);this.Z=this.events.T(this.J,"onVolumeChange",function(e){EXa(d,e)});
this.D=!1;this.I=new g.tJ(64);this.i=new g.I(this.cO,500,this);this.B=new g.I(this.dO,1E3,this);this.S=new l7(this.fY,0,this);this.C={};this.X=new g.I(this.LO,1E3,this);this.K=new m7(this.seekTo,1E3,this);this.oa=g.Ka;g.H(this,this.events);this.events.T(b,"onCaptionsTrackListChanged",this.UU);this.events.T(b,"captionschanged",this.kU);this.events.T(b,"captionssettingschanged",this.jO);this.events.T(b,"videoplayerreset",this.wA);this.events.T(b,"mdxautoplaycancel",function(){d.Tb.dK()});
a=this.Tb;a.isDisposed();a.subscribe("proxyStateChange",this.UM,this);a.subscribe("remotePlayerChange",this.Lw,this);a.subscribe("remoteQueueChange",this.wA,this);a.subscribe("previousNextChange",this.RM,this);a.subscribe("nowAutoplaying",this.KM,this);a.subscribe("autoplayDismissed",this.nM,this);g.H(this,this.i);g.H(this,this.B);g.H(this,this.S);g.H(this,this.X);g.H(this,this.K);this.jO();this.wA();this.Lw()},EXa=function(a,b){if(A9(a)){a.Tb.unsubscribe("remotePlayerChange",a.Lw,a);
var c=Math.round(b.volume);b=!!b.muted;var d=S8(a.Tb);if(c!==d.volume||b!==d.muted)a.Tb.setVolume(c,b),a.X.start();a.Tb.subscribe("remotePlayerChange",a.Lw,a)}},FXa=function(a){a.Xb(0);
a.i.stop();a.Ub(new g.tJ(64))},B9=function(a,b){if(A9(a)&&!a.D){var c=null;
b&&(c={style:a.J.getSubtitlesUserSettings()},g.Ze(c,b));a.Tb.tI(a.J.getVideoData(1).videoId,c);a.C=S8(a.Tb).trackData}},C9=function(a,b){var c=a.J.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.J.getVideoData(1);a.Tb.playVideo(c.videoId,b,d,e,c.playerParams,c.Za,cVa(c));a.Ub(new g.tJ(1))},GXa=function(a,b){if(b){var c=a.J.getOption("captions","tracklist",{eL:1});
c&&c.length?(a.J.setOption("captions","track",b),a.D=!1):(a.J.loadModule("captions"),a.D=!0)}else a.J.setOption("captions","track",{})},A9=function(a){return S8(a.Tb).videoId===a.J.getVideoData(1).videoId},D9=function(){g.W.call(this,{G:"div",
L:"ytp-mdx-popup-dialog",W:{role:"dialog"},U:[{G:"div",L:"ytp-mdx-popup-dialog-inner-content",U:[{G:"div",L:"ytp-mdx-popup-title",va:"You're signed out"},{G:"div",L:"ytp-mdx-popup-description",va:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{G:"div",L:"ytp-mdx-privacy-popup-buttons",U:[{G:"button",Ha:["ytp-button","ytp-mdx-privacy-popup-cancel"],va:"Cancel"},{G:"button",Ha:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],va:"Confirm"}]}]}]});this.i=new g.ZK(this,250);this.cancelButton=this.Fa("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Fa("ytp-mdx-privacy-popup-confirm");g.H(this,this.i);this.T(this.cancelButton,"click",this.u);this.T(this.confirmButton,"click",this.B)},E9=function(a){g.W.call(this,{G:"div",
L:"ytp-remote",U:[{G:"div",L:"ytp-remote-display-status",U:[{G:"div",L:"ytp-remote-display-status-icon",U:[g.Iva()]},{G:"div",L:"ytp-remote-display-status-text",va:"{{statustext}}"}]}]});this.api=a;this.i=new g.ZK(this,250);g.H(this,this.i);this.T(a,"presentingplayerstatechange",this.onStateChange);HXa(this,a.zb())},HXa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.T(b,128)?g.AH("Error on $RECEIVER_NAME",c):b.Ec()||g.T(b,4)?g.AH("Playing on $RECEIVER_NAME",c):g.AH("Connected to $RECEIVER_NAME",c);a.Pa("statustext",b);a.i.show()}else a.i.hide()},F9=function(a,b){g.wP.call(this,"Play on",0,a,b);
this.J=a;this.Ho={};this.T(a,"onMdxReceiversChange",this.D);this.T(a,"presentingplayerstatechange",this.D);this.D()},G9=function(a){g.FM.call(this,a);
this.Tk={key:Z6(),name:"This computer"};this.di=null;this.subscriptions=[];this.UF=this.Tb=null;this.Ho=[this.Tk];this.un=this.Tk;this.Bd=new g.tJ(64);this.DL=0;this.wf=-1;this.Tw=!1;this.Rw=this.wt=null;if(!g.sE(this.player.V())&&!g.tE(this.player.V())){a=this.player;var b=g.iM(a);b&&(b=b.Ln())&&(b=new F9(a,b),g.H(this,b));b=new E9(a);g.H(this,b);g.sM(a,b.element,4);this.wt=new D9;g.H(this,this.wt);g.sM(a,this.wt.element,4);this.Tw=!!n9()}},H9=function(a){a.Rw&&(a.player.removeEventListener("presentingplayerstatechange",
a.Rw),a.Rw=null)},IXa=function(a,b,c){a.Bd=c;
a.player.ea("presentingplayerstatechange",new g.jH(c,b))},I9=function(a,b){if(b.key!==a.un.key)if(b.key===a.Tk.key)t9();
else{var c;(c=!a.player.V().N("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.N("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.N("SESSION_INDEX")&&!g.N("LOGGED_IN")))||a.Tw||!a.wt);(c?0:g.JE(a.player.V())||g.ME(a.player.V()))&&JXa(a);a.un=b;if(!a.player.V().N("disable_mdx_connection_in_mdx_module_for_music_web")||!g.tE(a.player.V())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.V().N("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.zM(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Za,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=cVa(c))&&(a.locationInfo=c)}k9("Connecting to: "+g.zi(b));"cast-selector-receiver"==b.key?(m9(a||null),b=a||null,G8()?D8().setLaunchParams(b):B8("setLaunchParams called before ready.")):!a&&w9()&&
j9()==b.key?T6("yt-remote-connection-change",!0):(t9(),m9(a||null),a=i9().Ih(),(b=a7(a,b.key))&&u9(b,1))}}},JXa=function(a){a.player.zb().Ec()?a.player.pauseVideo():(a.Rw=function(b){!a.Tw&&g.lH(b,8)&&(a.player.pauseVideo(),H9(a))},a.player.addEventListener("presentingplayerstatechange",a.Rw));
a.wt&&a.wt.Ad();q9()||(y9=!0)},LVa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},y7={"'":"\\'"},iVa={AZ:"atp",baa:"ska",L9:"que",C7:"mus",aaa:"sus",D3:"dsp",i$:"seq",f7:"mic",u2:"dpa",PZ:"cds",A7:"mlm",q2:"dsdtr"};U6.prototype.equals=function(a){return a?this.id==a.id:!1};
var g7,c7="",CVa=xVa("loadCastFramework")||xVa("loadCastApplicationFramework"),EVa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ua(l7,g.E);g.k=l7.prototype;g.k.GQ=function(a){this.C=arguments;this.i=!1;this.Mb?this.B=g.Ta()+this.Wf:this.Mb=g.Yh(this.D,this.Wf)};
g.k.stop=function(){this.Mb&&(g.B.clearTimeout(this.Mb),this.Mb=null);this.B=null;this.i=!1;this.C=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.i&&(this.i=!1,this.I.apply(null,this.C)))};
g.k.ya=function(){this.stop();l7.je.ya.call(this)};
g.k.HQ=function(){this.Mb&&(g.B.clearTimeout(this.Mb),this.Mb=null);this.B?(this.Mb=g.Yh(this.D,this.B-g.Ta()),this.B=null):this.u?this.i=!0:(this.i=!1,this.I.apply(null,this.C))};g.w(m7,g.E);g.k=m7.prototype;g.k.oI=function(a){this.B=arguments;this.Mb||this.u?this.i=!0:n7(this)};
g.k.stop=function(){this.Mb&&(g.B.clearTimeout(this.Mb),this.Mb=null,this.i=!1,this.B=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.i||this.Mb||(this.i=!1,n7(this))};
g.k.ya=function(){g.E.prototype.ya.call(this);this.stop()};o7.prototype.stringify=function(a){return g.B.JSON.stringify(a,void 0)};
o7.prototype.parse=function(a){return g.B.JSON.parse(a,void 0)};var q7=new g.rf;g.w(GVa,g.ue);g.k=s7.prototype;g.k.Zo=null;g.k.Km=!1;g.k.du=null;g.k.nH=null;g.k.Ct=null;g.k.Pt=null;g.k.cn=null;g.k.Ko=null;g.k.Aq=null;g.k.Mf=null;g.k.DB=0;g.k.Rj=null;g.k.BB=null;g.k.Tm=null;g.k.Hu=-1;g.k.RN=!0;g.k.vp=!1;g.k.pC=0;g.k.RA=null;var JVa={},v7={};g.k=s7.prototype;g.k.setTimeout=function(a){this.u=a};
g.k.IQ=function(a){a=a.target;var b=this.RA;b&&3==g.gj(a)?b.oI():this.VO(a)};
g.k.VO=function(a){try{if(a==this.Mf)a:{var b=g.gj(this.Mf),c=this.Mf.u,d=this.Mf.getStatus();if(g.Jc&&!g.Bc(10)||g.Yg&&!g.zc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.lj(this.Mf))break a;this.vp||4!=b||7==c||(8==c||0>=d?this.i.Ej(3):this.i.Ej(2));z7(this);var e=this.Mf.getStatus();this.Hu=e;var f=g.lj(this.Mf);if(this.Km=200==e){4==b&&w7(this);if(this.D){for(a=!0;!this.vp&&this.DB<f.length;){var h=KVa(this,f);if(h==v7){4==b&&(this.Tm=4,r7(15),a=!1);break}else if(h==JVa){this.Tm=4;r7(16);a=!1;
break}else A7(this,h)}4==b&&0==f.length&&(this.Tm=1,r7(17),a=!1);this.Km=this.Km&&a;a||(w7(this),x7(this))}else A7(this,f);this.Km&&!this.vp&&(4==b?this.i.iy(this):(this.Km=!1,u7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Tm=3,r7(13)):(this.Tm=0,r7(14)),w7(this),x7(this)}}catch(l){this.Mf&&g.lj(this.Mf)}finally{}};
g.k.DW=function(a){p7((0,g.D)(this.BW,this,a),0)};
g.k.BW=function(a){this.vp||(z7(this),A7(this,a),u7(this))};
g.k.cN=function(a){p7((0,g.D)(this.zW,this,a),0)};
g.k.zW=function(a){this.vp||(w7(this),this.Km=a,this.i.iy(this),this.i.Ej(4))};
g.k.cancel=function(){this.vp=!0;w7(this)};
g.k.KW=function(){this.du=null;var a=Date.now();0<=a-this.nH?(2!=this.Pt&&this.i.Ej(3),w7(this),this.Tm=2,r7(18),x7(this)):NVa(this,this.nH-a)};
g.k.getLastError=function(){return this.Tm};g.k=QVa.prototype;g.k.qC=null;g.k.uh=null;g.k.SA=!1;g.k.eO=null;g.k.Wy=null;g.k.QE=null;g.k.rC=null;g.k.Yh=null;g.k.xl=-1;g.k.Iu=null;g.k.Uu=null;g.k.connect=function(a){this.rC=a;a=C7(this.i,null,this.rC);r7(3);this.eO=Date.now();var b=this.i.S;null!=b?(this.Iu=b[0],(this.Uu=b[1])?(this.Yh=1,RVa(this)):(this.Yh=2,E7(this))):(Q6(a,"MODE","init"),this.uh=new s7(this,void 0,void 0,void 0),this.uh.Zo=this.qC,t7(this.uh,a,!1,null,!0),this.Yh=0)};
g.k.wR=function(a){if(a)this.Yh=2,E7(this);else{r7(4);var b=this.i;b.ek=b.jn.xl;L7(b,9)}a&&this.Ej(2)};
g.k.wD=function(a){return this.i.wD(a)};
g.k.abort=function(){this.uh&&(this.uh.cancel(),this.uh=null);this.xl=-1};
g.k.sf=function(){return!1};
g.k.VM=function(a,b){this.xl=a.Hu;if(0==this.Yh)if(b){try{var c=this.u.parse(b)}catch(d){a=this.i;a.ek=this.xl;L7(a,2);return}this.Iu=c[0];this.Uu=c[1]}else a=this.i,a.ek=this.xl,L7(a,2);else if(2==this.Yh)if(this.SA)r7(7),this.QE=Date.now();else if("11111"==b){if(r7(6),this.SA=!0,this.Wy=Date.now(),a=this.Wy-this.eO,!g.Jc||g.Bc(10)||500>a)this.xl=200,this.uh.cancel(),r7(12),D7(this.i,this,!0)}else r7(8),this.Wy=this.QE=Date.now(),this.SA=!1};
g.k.iy=function(){this.xl=this.uh.Hu;if(this.uh.Km)0==this.Yh?this.Uu?(this.Yh=1,RVa(this)):(this.Yh=2,E7(this)):2==this.Yh&&((!g.Jc||g.Bc(10)?!this.SA:200>this.QE-this.Wy)?(r7(11),D7(this.i,this,!1)):(r7(12),D7(this.i,this,!0)));else{0==this.Yh?r7(9):2==this.Yh&&r7(10);var a=this.i;this.uh.getLastError();a.ek=this.xl;L7(a,2)}};
g.k.vx=function(){return this.i.vx()};
g.k.isActive=function(){return this.i.isActive()};
g.k.Ej=function(a){this.i.Ej(a)};g.k=F7.prototype;g.k.dk=null;g.k.Av=null;g.k.Ug=null;g.k.Je=null;g.k.sC=null;g.k.Xy=null;g.k.rJ=null;g.k.jy=null;g.k.xw=0;g.k.AT=0;g.k.Nf=null;g.k.Dn=null;g.k.Kl=null;g.k.Ep=null;g.k.jn=null;g.k.zB=null;g.k.Ss=-1;g.k.CL=-1;g.k.ek=-1;g.k.xs=0;g.k.Sr=0;g.k.wp=8;g.Ua(TVa,g.ue);g.Ua(UVa,g.ue);g.k=F7.prototype;g.k.connect=function(a,b,c,d,e){r7(0);this.sC=b;this.Av=c||{};d&&void 0!==e&&(this.Av.OSID=d,this.Av.OAID=e);this.I?(p7((0,g.D)(this.NJ,this,a),100),YVa(this)):this.NJ(a)};
g.k.NJ=function(a){this.jn=new QVa(this);this.jn.qC=this.dk;this.jn.u=this.D;this.jn.connect(a)};
g.k.sf=function(){return 0==this.i};
g.k.getState=function(){return this.i};
g.k.aN=function(a){this.Dn=null;bWa(this,a)};
g.k.ZM=function(){this.Kl=null;this.Je=new s7(this,this.B,"rpc",this.K);this.Je.Zo=this.dk;this.Je.pC=0;var a=this.rJ.clone();g.hl(a,"RID","rpc");g.hl(a,"SID",this.B);g.hl(a,"CI",this.zB?"0":"1");g.hl(a,"AID",this.Ss);G7(this,a);if(!g.Jc||g.Bc(10))g.hl(a,"TYPE","xmlhttp"),t7(this.Je,a,!0,this.jy,!1);else{g.hl(a,"TYPE","html");var b=this.Je,c=!!this.jy;b.Pt=3;b.cn=P6(a.clone());MVa(b,c)}};
g.k.VM=function(a,b){if(0!=this.i&&(this.Je==a||this.Ug==a))if(this.ek=a.Hu,this.Ug==a&&3==this.i)if(7<this.wp){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Kl){if(this.Je)if(this.Je.Ct+3E3<this.Ug.Ct)I7(this),this.Je.cancel(),this.Je=null;else break a;K7(this);r7(19)}}else this.CL=a[1],0<this.CL-this.Ss&&37500>a[2]&&this.zB&&0==this.Sr&&!this.Ep&&(this.Ep=p7((0,g.D)(this.hU,this),6E3));else L7(this,11)}else null!=b&&L7(this,11);else if(this.Je==
a&&I7(this),!g.kb(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.Ss=c[0],c=c[1],2==this.i?"c"==c[0]?(this.B=c[1],this.jy=c[2],c=c[3],null!=c?this.wp=c:this.wp=6,this.i=3,this.Nf&&this.Nf.JJ(),this.rJ=C7(this,this.vx()?this.jy:null,this.sC),cWa(this)):"stop"==c[0]&&L7(this,7):3==this.i&&("stop"==c[0]?L7(this,7):"noop"!=c[0]&&this.Nf&&this.Nf.IJ(c),this.Sr=0)};
g.k.hU=function(){null!=this.Ep&&(this.Ep=null,this.Je.cancel(),this.Je=null,K7(this),r7(20))};
g.k.iy=function(a){if(this.Je==a){I7(this);this.Je=null;var b=2}else if(this.Ug==a)this.Ug=null,b=1;else return;this.ek=a.Hu;if(0!=this.i)if(a.Km)if(1==b){b=Date.now()-a.Ct;var c=q7;c.dispatchEvent(new TVa(c,a.Aq?a.Aq.length:0,b,this.xs));H7(this);this.C.length=0}else cWa(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.ek)){if(d=1==b)this.Ug||this.Dn||1==this.i||2<=this.xs?d=!1:(this.Dn=p7((0,g.D)(this.aN,this,a),dWa(this,this.xs)),this.xs++,d=!0);d=!(d||2==b&&K7(this))}if(d)switch(c){case 1:L7(this,
5);break;case 4:L7(this,10);break;case 3:L7(this,6);break;case 7:L7(this,12);break;default:L7(this,2)}}};
g.k.WR=function(a){if(!g.Wb(arguments,this.i))throw Error("Unexpected channel state: "+this.i);};
g.k.LX=function(a){a?r7(2):(r7(1),eWa(this,8))};
g.k.wD=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.aj;a.S=!1;return a};
g.k.isActive=function(){return!!this.Nf&&this.Nf.isActive(this)};
g.k.Ej=function(a){var b=q7;b.dispatchEvent(new UVa(b,a))};
g.k.vx=function(){return!(!g.Jc||g.Bc(10))};
g.k=fWa.prototype;g.k.JJ=function(){};
g.k.IJ=function(){};
g.k.HJ=function(){};
g.k.jD=function(){};
g.k.uK=function(){return{}};
g.k.isActive=function(){return!0};g.k=gWa.prototype;g.k.isEmpty=function(){return 0===this.i.length&&0===this.u.length};
g.k.clear=function(){this.i=[];this.u=[]};
g.k.contains=function(a){return g.Wb(this.i,a)||g.Wb(this.u,a)};
g.k.remove=function(a){var b=this.i;var c=(0,g.cPa)(b,a);0<=c?(g.Zb(b,c),b=!0):b=!1;return b||g.$b(this.u,a)};
g.k.zi=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Ua(M7,g.E);g.k=M7.prototype;g.k.sW=function(){this.Wf=Math.min(3E5,2*this.Wf);this.B();this.u&&this.start()};
g.k.start=function(){var a=this.Wf+15E3*Math.random();g.Fr(this.i,a);this.u=Date.now()+a};
g.k.stop=function(){this.i.stop();this.u=0};
g.k.isActive=function(){return this.i.isActive()};
g.k.reset=function(){this.i.stop();this.Wf=5E3};g.Ua(N7,fWa);g.k=N7.prototype;g.k.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.k.eg=function(a){return this.B.eg(a)};
g.k.ea=function(a,b){return this.B.ea.apply(this.B,arguments)};
g.k.dispose=function(){this.Z||(this.Z=!0,g.re(this.B),jWa(this),g.re(this.u),this.u=null,this.oa=function(){return""})};
g.k.isDisposed=function(){return this.Z};
g.k.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.X="";this.u.stop();this.D=a||null;this.C=b||0;a=this.xa+"/test";b=this.xa+"/bind";var d=new F7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Aa),e=this.i;e&&(e.Nf=null);d.Nf=this;this.i=d;O7(this);if(this.i){d=g.N("ID_TOKEN");var f=this.i.dk||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.dk=f}e?(3!=e.getState()&&0==$Va(e)||e.getState(),this.i.connect(a,b,this.I,e.B,e.Ss)):c?this.i.connect(a,
b,this.I,c.sessionId,c.arrayId):this.i.connect(a,b,this.I)}};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.Ze(a,b);this.u.isActive()||2==(this.i?this.i.getState():0)?this.K.push(a):P7(this)&&(O7(this),ZVa(this.i,a))};
g.k.JJ=function(){this.u.reset();this.D=null;this.C=0;if(this.K.length){var a=this.K;this.K=[];for(var b=0,c=a.length;b<c;++b)ZVa(this.i,a[b])}this.ea("handlerOpened")};
g.k.HJ=function(a){var b=2==a&&401==this.i.ek;4==a||b||this.u.start();this.ea("handlerError",a,b)};
g.k.jD=function(a){if(!this.u.isActive())this.ea("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.K.push(d)}};
g.k.uK=function(){var a={v:2};this.X&&(a.gsessionid=this.X);0!=this.C&&(a.ui=""+this.C);0!=this.S&&(a.ui=""+this.S);this.D&&g.Ze(a,this.D);return a};
g.k.IJ=function(a){"S"==a[0]?this.X=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),XVa(this.i)):this.ea("handlerMessage",new hWa(a[0],a[1]))};
g.k.dB=function(a){(this.I.loungeIdToken=a)||this.u.stop();if(this.Ba&&this.i){var b=this.i.dk||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.dk=b}};
g.k.pX=function(){this.u.isActive();0==$Va(this.i)&&this.connect(this.D,this.C)};Q7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Q7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
Q7.prototype.D=function(a){a(Error("request timed out"))};var qWa=Date.now(),T7=null,W7=Array(50),V7=-1,X7=!1;g.Ua(Y7,g.Q);Y7.prototype.Ih=function(){return this.screens};
Y7.prototype.contains=function(a){return!!$6(this.screens,a)};
Y7.prototype.get=function(a){return a?a7(this.screens,a):null};
Y7.prototype.info=function(a){U7(this.I,a)};g.w(Z7,g.Q);g.k=Z7.prototype;g.k.start=function(){!this.i&&isNaN(this.Mb)&&this.mN()};
g.k.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.Mb)||(g.Ot(this.Mb),this.Mb=NaN)};
g.k.ya=function(){this.stop();g.Q.prototype.ya.call(this)};
g.k.mN=function(){this.Mb=NaN;this.i=g.hu(R7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.K},timeout:5E3,onSuccess:(0,g.D)(this.KQ,this),onError:(0,g.D)(this.JQ,this),onTimeout:(0,g.D)(this.LQ,this)})};
g.k.KQ=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.C;a.name=this.I;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ea("pairingComplete",new V6(a),b)};
g.k.JQ=function(a){this.i=null;a.status&&404==a.status?this.u>=KXa.length?this.ea("pairingFailed",Error("DIAL polling timed out")):(a=KXa[this.u],this.Mb=g.Mt((0,g.D)(this.mN,this),a),this.u++):this.ea("pairingFailed",Error("Server error "+a.status))};
g.k.LQ=function(){this.i=null;this.ea("pairingFailed",Error("Server not responding"))};
var KXa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ua(a8,Y7);g.k=a8.prototype;g.k.start=function(){$7(this)&&this.ea("screenChange");!g.ry("yt-remote-lounge-token-expiration")&&uWa(this);g.Ot(this.i);this.i=g.Mt((0,g.D)(this.start,this),1E4)};
g.k.add=function(a,b){$7(this);rWa(this,a);b8(this,!1);this.ea("screenChange");b(a);a.token||uWa(this)};
g.k.remove=function(a,b){var c=$7(this);tWa(this,a)&&(b8(this,!1),c=!0);b(a);c&&this.ea("screenChange")};
g.k.xB=function(a,b,c,d){var e=$7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,b8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ea("screenChange")};
g.k.ya=function(){g.Ot(this.i);a8.je.ya.call(this)};
g.k.vS=function(a){$7(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}b8(this,!b);b&&U7(this.I,"Missed "+b+" lounge tokens.")};
g.k.uS=function(a){U7(this.I,"Requesting lounge tokens failed: "+a)};g.w(d8,g.Q);g.k=d8.prototype;g.k.start=function(){var a=parseInt(g.ry("yt-remote-fast-check-period")||"0",10);(this.C=g.Ta()-144E5<a?0:a)?g8(this):(this.C=g.Ta()+3E5,g.qy("yt-remote-fast-check-period",this.C),this.gG())};
g.k.isEmpty=function(){return g.Se(this.i)};
g.k.update=function(){c8("Updating availability on schedule.");var a=this.I(),b=g.Ee(this.i,function(c,d){return c&&!!a7(a,d)},this);
f8(this,b)};
g.k.ya=function(){g.Ot(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.Q.prototype.ya.call(this)};
g.k.gG=function(){g.Ot(this.B);this.B=NaN;this.u&&this.u.abort();var a=wWa(this);if(R6(a)){var b=R7(this.D,"/pairing/get_screen_availability");this.u=S7(this.D,b,{lounge_token:g.Ne(a).join(",")},(0,g.D)(this.YV,this,a),(0,g.D)(this.XV,this))}else f8(this,{}),g8(this)};
g.k.YV=function(a,b){this.u=null;var c=g.Ne(wWa(this));if(g.qc(c,g.Ne(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;f8(this,c);g8(this)}else this.ke("Changing Screen set during request."),this.gG()};
g.k.XV=function(a){this.ke("Screen availability failed: "+a);this.u=null;g8(this)};
g.k.ke=function(a){U7("OnlineScreenService",a)};g.Ua(h8,Y7);g.k=h8.prototype;g.k.start=function(){this.u.start();this.i.start();this.screens.length&&(this.ea("screenChange"),this.i.isEmpty()||this.ea("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.i.update()};
g.k.xB=function(a,b,c,d){this.u.contains(a)?this.u.xB(a,b,c,d):(a="Updating name of unknown screen: "+a.name,U7(this.I,a),d(Error(a)))};
g.k.Ih=function(a){return a?this.screens:g.bc(this.screens,g.Cp(this.B,function(b){return!this.contains(b)},this))};
g.k.pI=function(){return g.Cp(this.Ih(!0),function(a){return!!this.i.i[a.id]},this)};
g.k.qI=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new Z7(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.re(l);e(i8(h,m),n)});
l.subscribe("pairingFailed",function(m){g.re(l);f(m)});
l.start();return(0,g.D)(l.stop,l)};
g.k.MQ=function(a,b,c,d){g.hu(R7(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.D)(function(e,f){e=new V6(f.screen||{});if(!e.name||AWa(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);AWa(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(i8(this,e))},this),
onError:(0,g.D)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.D)(function(){d(Error("pairing request timed out."))},this)})};
g.k.ya=function(){g.re(this.u);g.re(this.i);h8.je.ya.call(this)};
g.k.ES=function(){CWa(this);this.ea("screenChange");this.i.update()};
h8.prototype.dispose=h8.prototype.dispose;g.Ua(k8,g.Q);g.k=k8.prototype;g.k.getScreen=function(){return this.C};
g.k.zg=function(a){this.isDisposed()||(a&&(m8(this,""+a),this.ea("sessionFailed")),this.C=null,this.ea("sessionScreen",null))};
g.k.info=function(a){U7(this.Ba,a)};
g.k.rI=function(){return null};
g.k.uG=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.D)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.D)(function(){m8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.ya=function(){this.uG("");k8.je.ya.call(this)};g.w(n8,k8);g.k=n8.prototype;g.k.tG=function(a){if(this.u){if(this.u==a)return;m8(this,"Overriding cast session with new session object");LWa(this);this.xa=!1;this.X="unknown";this.u.removeUpdateListener(this.oa);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa)}this.u=a;this.u.addUpdateListener(this.oa);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa);HWa(this,"getMdxSessionStatus")};
g.k.Ts=function(a){this.info("launchWithParams no-op for Cast: "+g.zi(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.D)(function(){this.zg()},this),(0,g.D)(function(){this.zg(Error("Failed to stop receiver app."))},this)):this.zg(Error("Stopping cast device without session."))};
g.k.uG=function(){};
g.k.ya=function(){this.info("disposeInternal");LWa(this);this.u&&(this.u.removeUpdateListener(this.oa),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa));this.u=null;k8.prototype.ya.call(this)};
g.k.OW=function(a,b){if(!this.isDisposed())if(b)if(b=S6(b),g.Oa(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.zi(b)),a){case "mdxSessionStatus":FWa(this,b);break;case "loungeToken":IWa(this,b);break;default:m8(this,"Unknown youtube message: "+a)}else m8(this,"Unable to parse message.");else m8(this,"No data in message.")};
g.k.HK=function(a,b,c,d){g.Ot(this.S);this.S=0;zWa(this.B,this.i.label,a,this.i.friendlyName,(0,g.D)(function(e){e?b(e):0<=d?(m8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.S=g.Mt((0,g.D)(this.HK,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.rI=function(){return this.u};
g.k.NQ=function(a){this.isDisposed()||a||(m8(this,"Cast session died."),this.zg())};g.w(q8,k8);g.k=q8.prototype;g.k.tG=function(a){this.u=a;this.u.addUpdateListener(this.Ja)};
g.k.Ts=function(a){this.Ka=a;this.Z()};
g.k.stop=function(){SWa(this);this.u?this.u.stop((0,g.D)(this.zg,this,null),(0,g.D)(this.zg,this,"Failed to stop DIAL device.")):this.zg()};
g.k.ya=function(){SWa(this);this.u&&this.u.removeUpdateListener(this.Ja);this.u=null;k8.prototype.ya.call(this)};
g.k.OQ=function(a){this.isDisposed()||a||(m8(this,"DIAL session died."),this.D(),this.D=g.Ka,this.zg())};g.w(u8,k8);u8.prototype.stop=function(){this.zg()};
u8.prototype.tG=function(){};
u8.prototype.Ts=function(){g.Ot(this.u);this.u=NaN;var a=a7(this.B.Ih(),this.i.label);a?l8(this,a):this.zg(Error("No such screen"))};
u8.prototype.ya=function(){g.Ot(this.u);this.u=NaN;k8.prototype.ya.call(this)};g.w(v8,g.Q);g.k=v8.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.S,[chrome.cast.Capability.AUDIO_OUT]);this.X||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.D)(this.IV,this);c=new chrome.cast.ApiConfig(c,(0,g.D)(this.WM,this),e,d,a);c.customDialLaunchCallback=(0,g.D)(this.CU,this);
chrome.cast.initialize(c,(0,g.D)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),nWa(),this.u.subscribe("onlineScreenChange",(0,g.D)(this.sI,this)),this.B=VWa(this),chrome.cast.setCustomReceivers(this.B,g.Ka,(0,g.D)(function(f){this.ke("Failed to set initial custom receivers: "+g.zi(f))},this)),this.ea("yt-remote-cast2-availability-change",x8(this)),b(!0))},this),(0,g.D)(function(f){this.ke("Failed to initialize API: "+g.zi(f));
b(!1)},this))};
g.k.uX=function(a,b){w8("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)w8("Unsetting old screen status: "+this.i.i.friendlyName),y8(this,null)}if(a&&b){if(!this.i){c=a7(this.u.Ih(),a);if(!c){w8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){w8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=TWa(this,c);a||(w8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,g.Ka,(0,g.D)(function(d){this.ke("Failed to set initial custom receivers: "+g.zi(d))},this)));
w8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);y8(this,new u8(this.u,a),!0)}this.i.uG(b)}else w8("setConnectedScreenStatus: no screen.")};
g.k.vX=function(a){this.isDisposed()?this.ke("Setting connection data on disposed cast v2"):this.i?this.i.Ts(a):this.ke("Setting connection data without a session")};
g.k.QQ=function(){this.isDisposed()?this.ke("Stopping session on disposed cast v2"):this.i?(this.i.stop(),y8(this,null)):w8("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.D)(this.WM,this),(0,g.D)(this.bW,this))};
g.k.ya=function(){this.u.unsubscribe("onlineScreenChange",(0,g.D)(this.sI,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=kWa,b=g.Ja("yt.mdx.remote.debug.handlers_");g.$b(b||[],a);g.re(this.i);g.Q.prototype.ya.call(this)};
g.k.ke=function(a){U7("Controller",a)};
g.k.YM=function(a,b){this.i==a&&(b||y8(this,null),this.ea("yt-remote-cast2-session-change",b))};
g.k.FV=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),w8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)w8("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{w8("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.ea("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:y8(this,
new u8(this.u,a));break;case chrome.cast.ReceiverType.DIAL:y8(this,new q8(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:y8(this,new n8(this.u,a,this.config_));break;default:this.ke("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.ke("Stopping receiver w/o session: "+a.friendlyName)}else this.ke("onReceiverAction_ called without receiver.")};
g.k.CU=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.ke("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.ke("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return w8("Reselecting dial screen."),
this.ea("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.ke('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);y8(this,new q8(this.u,b,this.C,this.config_))}b=this.i;b.S=a;b.S.appState==chrome.cast.DialAppState.RUNNING?(a=b.S.extraData||{},c=a.screenId||null,r8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=PWa(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.S.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.vt(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=QWa(b,c)):a=QWa(b,c)):a=t8(b);return a};
g.k.WM=function(a){var b=this;if(!this.isDisposed()&&!this.I){w8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(c.receiverType==chrome.cast.ReceiverType.CAST)w8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),y8(this,new n8(this.u,c,this.config_),!0);else{this.ke("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.i.i,e=a7(this.u.Ih(),
d.label);e&&W6(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(w8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.re(this.i),this.i=new n8(this.u,c,this.config_),this.i.subscribe("sessionScreen",(0,g.D)(this.YM,this,this.i)),this.i.subscribe("sessionFailed",function(){return UWa(b,b.i)}),this.i.Ts(null));
this.i.tG(a)}}};
g.k.PQ=function(){return this.i?this.i.rI():null};
g.k.bW=function(a){this.isDisposed()||(this.ke("Failed to estabilish a session: "+g.zi(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&y8(this,null),this.ea("yt-remote-cast2-session-failed"))};
g.k.IV=function(a){w8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=x8(this);this.K=a==chrome.cast.ReceiverAvailability.AVAILABLE;x8(this)!=b&&this.ea("yt-remote-cast2-availability-change",x8(this))}};
g.k.sI=function(){this.isDisposed()||(this.B=VWa(this),w8("Updating custom receivers: "+g.zi(this.B)),chrome.cast.setCustomReceivers(this.B,g.Ka,(0,g.D)(function(){this.ke("Failed to set custom receivers.")},this)),this.ea("yt-remote-cast2-availability-change",x8(this)))};
v8.prototype.setLaunchParams=v8.prototype.vX;v8.prototype.setConnectedScreenStatus=v8.prototype.uX;v8.prototype.stopSession=v8.prototype.QQ;v8.prototype.getCastSession=v8.prototype.PQ;v8.prototype.requestSession=v8.prototype.requestSession;v8.prototype.init=v8.prototype.init;v8.prototype.dispose=v8.prototype.dispose;var E8=[];g.k=J8.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";K8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.Lk=a.hasPrevious,this.hasNext=a.hasNext,this.K=a.playerTime,this.I=a.playerTimeAt,this.C=a.seekableStart,this.i=a.seekableEnd,this.D=a.duration,this.S=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.k.Ec=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Nj=function(a){this.D=isNaN(a)?0:a};
g.k.getDuration=function(){return this.u?this.D+L8(this):this.D};
g.k.clone=function(){return new J8(P8(this))};g.w(R8,g.Q);g.k=R8.prototype;g.k.getState=function(){return this.B};
g.k.play=function(){T8(this)?(this.i?this.i.play(null,g.Ka,Y8(this,"play")):X8(this,"play"),W8(this,1,N8(S8(this))),this.ea("remotePlayerChange")):U8(this,this.play)};
g.k.pause=function(){T8(this)?(this.i?this.i.pause(null,g.Ka,Y8(this,"pause")):X8(this,"pause"),W8(this,2,N8(S8(this))),this.ea("remotePlayerChange")):U8(this,this.pause)};
g.k.seekTo=function(a){if(T8(this)){if(this.i){var b=S8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Ec()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ka,Y8(this,"seekTo",{newTime:a}))}else X8(this,"seekTo",{newTime:a});W8(this,3,a);this.ea("remotePlayerChange")}else U8(this,g.Ra(this.seekTo,a))};
g.k.stop=function(){if(T8(this)){this.i?this.i.stop(null,g.Ka,Y8(this,"stopVideo")):X8(this,"stopVideo");var a=S8(this);a.index=-1;a.videoId="";K8(a);V8(this,a);this.ea("remotePlayerChange")}else U8(this,this.stop)};
g.k.setVolume=function(a,b){if(T8(this)){var c=S8(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.D)(function(){U7("CP","set receiver volume: "+d)},this),(0,g.D)(function(){this.ke("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.D)(function(){U7("CP","set receiver muted: "+b)},this),(0,g.D)(function(){this.ke("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);X8(this,"setVolume",e)}c.muted=b;c.volume=a;V8(this,c)}else U8(this,g.Ra(this.setVolume,a,b))};
g.k.tI=function(a,b){if(T8(this)){var c=S8(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.zi(b.style),g.Ze(a,c.trackData));X8(this,"setSubtitlesTrack",a);V8(this,c)}else U8(this,g.Ra(this.tI,a,b))};
g.k.setAudioTrack=function(a,b){T8(this)?(b=b.getLanguageInfo().getId(),X8(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=S8(this),a.audioTrackId=b,V8(this,a)):U8(this,g.Ra(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=S8(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);O8(l,a,c||0);void 0!==b&&(M8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.zi(h));X8(this,"setPlaylist",m);d||V8(this,l)};
g.k.KA=function(a,b){if(T8(this)){if(a&&b){var c=S8(this);O8(c,a,b);V8(this,c)}X8(this,"previous")}else U8(this,g.Ra(this.KA,a,b))};
g.k.nextVideo=function(a,b){if(T8(this)){if(a&&b){var c=S8(this);O8(c,a,b);V8(this,c)}X8(this,"next")}else U8(this,g.Ra(this.nextVideo,a,b))};
g.k.Vr=function(){if(T8(this)){X8(this,"clearPlaylist");var a=S8(this);a.reset();V8(this,a);this.ea("remotePlayerChange")}else U8(this,this.Vr)};
g.k.dK=function(){T8(this)?X8(this,"dismissAutoplay"):U8(this,this.dK)};
g.k.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ea("proxyStateChange",a,this.B)}g.Q.prototype.dispose.call(this)};
g.k.ya=function(){gXa(this);this.C=null;this.D.clear();Q8(this,null);g.Q.prototype.ya.call(this)};
g.k.vG=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ea("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.i.length&&(b.i=b.u,b.i.reverse(),b.u=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.k.CV=function(a,b){this.ea(a,b)};
g.k.nU=function(a){if(!a)this.Gw(null),Q8(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=S8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)U7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,V8(this,b)}};
g.k.Gw=function(a){U7("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.S);if(this.i=a)this.i.addUpdateListener(this.S),hXa(this),this.ea("remotePlayerChange")};
g.k.mU=function(a){a?(hXa(this),this.ea("remotePlayerChange")):this.Gw(null)};
g.k.QG=function(){X8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.uU=function(){var a=dXa();a&&Q8(this,a)};
g.k.ke=function(a){U7("CP",a)};g.w(Z8,g.Q);g.k=Z8.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ba&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.lc.listId=c);this.lc.videoId=d;this.lc.index=l||0;this.lc.state=3;M8(this.lc,
n);this.C="UNSUPPORTED";c=this.Ba?"setInitialState":"setPlaylist";$8("Connecting with "+c+" and params: "+g.zi(m));this.i.connect({method:c,params:g.zi(m)},a,qVa())}else $8("Connecting without params"),this.i.connect({},a,qVa());kXa(this)};
g.k.dB=function(a){this.i.dB(a)};
g.k.dispose=function(){this.isDisposed()||(g.Ia("yt.mdx.remote.remoteClient_",null,void 0),this.ea("beforeDispose"),a9(this,3));g.Q.prototype.dispose.call(this)};
g.k.ya=function(){b9(this);d9(this);c9(this);g.Ot(this.K);this.K=NaN;g.Ot(this.S);this.S=NaN;this.B=null;g.Wu(this.X);this.X.length=0;this.i.dispose();g.Q.prototype.ya.call(this);this.C=this.I=this.u=this.lc=this.i=null};
g.k.qS=function(){this.qs(2)};
g.k.rU=function(){$8("Channel opened");this.xa&&(this.xa=!1,c9(this),this.oa=g.Mt((0,g.D)(function(){$8("Timing out waiting for a screen.");this.qs(1)},this),15E3));
uVa(iWa(this.i),this.Ka)};
g.k.oU=function(){$8("Channel closed");isNaN(this.D)?f7(!0):f7();this.dispose()};
g.k.pU=function(a,b){f7();isNaN(this.Qv())?(b&&"shortLived"==this.Aa&&this.ea("browserChannelAuthError",a),$8("Channel error: "+a+" without reconnection"),this.dispose()):(this.xa=!0,$8("Channel error: "+a+" with reconnection in "+this.Qv()+" ms"),a9(this,2))};
g.k.nL=function(a){if(!this.u||0===this.u.length)return!1;for(var b=g.q(this.u),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.qU=function(a){a.params?$8("Received: action="+a.action+", params="+g.zi(a.params)):$8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=S6(a.params.devices);this.u=g.pn(a,function(c){return new U6(c)});
a=!!g.Tb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
nXa(this,a);a=this.nL("mlm");this.ea("multiStateLoopEnabled",a);break;case "loungeScreenDisconnected":g.ac(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
nXa(this,!1);break;case "remoteConnected":var b=new U6(S6(a.params.device));g.Tb(this.u,function(c){return c.equals(b)})||dVa(this.u,b);
break;case "remoteDisconnected":b=new U6(S6(a.params.device));g.ac(this.u,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":pXa(this,a,"QUEUE_MODIFIED");break;case "nowPlaying":rXa(this,a);break;case "onStateChange":qXa(this,a);break;case "onAdStateChange":sXa(this,a);break;case "onVolumeChanged":tXa(this,a);break;case "onSubtitlesTrackChanged":oXa(this,a);break;case "nowAutoplaying":uXa(this,a);break;case "autoplayDismissed":this.ea("autoplayDismissed");break;case "autoplayUpNext":this.I=a.params.videoId||null;this.ea("autoplayUpNext",this.I);break;case "onAutoplayModeChanged":this.C=
a.params.autoplayMode;this.ea("autoplayModeChange",this.C);"DISABLED"==this.C&&this.ea("autoplayDismissed");break;case "onHasPreviousNextChanged":vXa(this,a);break;case "requestAssistedSignIn":this.ea("assistedSignInRequested",a.params.authCode);break;case "onLoopModeChanged":this.ea("loopModeChange",a.params.loopMode);break;default:$8("Unrecognized action: "+a.action)}};
g.k.iX=function(){if(this.B){var a=this.B;this.B=null;this.lc.videoId!=a&&e9(this,"getNowPlaying")}};
g.k.nS=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Qv())?P7(this.i)&&isNaN(this.D)&&(a=1):a=2);return a};
g.k.qs=function(a){$8("Disconnecting with "+a);g.Ia("yt.mdx.remote.remoteClient_",null,void 0);b9(this);this.ea("beforeDisconnect",a);1==a&&f7();jWa(this.i,a);this.dispose()};
g.k.lS=function(){var a=this.lc;this.B&&(a=this.lc.clone(),O8(a,this.B,a.index));return P8(a)};
g.k.wX=function(a){var b=new J8(a);b.videoId&&b.videoId!=this.lc.videoId&&(this.B=b.videoId,g.Ot(this.K),this.K=g.Mt((0,g.D)(this.iX,this),5E3));var c=[];this.lc.listId==b.listId&&this.lc.videoId==b.videoId&&this.lc.index==b.index||c.push("remoteQueueChange");this.lc.playerState==b.playerState&&this.lc.volume==b.volume&&this.lc.muted==b.muted&&N8(this.lc)==N8(b)&&g.zi(this.lc.trackData)==g.zi(b.trackData)||c.push("remotePlayerChange");this.lc.reset(a);g.sc(c,function(d){this.ea(d)},this)};
g.k.GK=function(){var a=this.i.I.id,b=g.Tb(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Qv=function(){var a=this.i;return a.u.isActive()?a.u.u-Date.now():NaN};
g.k.iS=function(){return this.C||"UNSUPPORTED"};
g.k.jS=function(){return this.I||""};
g.k.RQ=function(){if(!isNaN(this.Qv())){var a=this.i.u;g.Gr(a.i);a.start()}};
g.k.tX=function(a,b){e9(this,a,b);mXa(this)};
g.k.uI=function(){var a=g.ru("SID","")||"",b=g.ru("SAPISID","")||"",c=g.ru("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Ec(g.eb(a),2);b=g.Ec(g.eb(b),2);c=g.Ec(g.eb(c),2);return g.Ec(g.eb(a+","+b+","+c),2)};
Z8.prototype.subscribe=Z8.prototype.subscribe;Z8.prototype.unsubscribeByKey=Z8.prototype.eg;Z8.prototype.getProxyState=Z8.prototype.nS;Z8.prototype.disconnect=Z8.prototype.qs;Z8.prototype.getPlayerContextData=Z8.prototype.lS;Z8.prototype.setPlayerContextData=Z8.prototype.wX;Z8.prototype.getOtherConnectedRemoteId=Z8.prototype.GK;Z8.prototype.getReconnectTimeout=Z8.prototype.Qv;Z8.prototype.getAutoplayMode=Z8.prototype.iS;Z8.prototype.getAutoplayVideoId=Z8.prototype.jS;Z8.prototype.reconnect=Z8.prototype.RQ;
Z8.prototype.sendMessage=Z8.prototype.tX;Z8.prototype.getXsrfToken=Z8.prototype.uI;Z8.prototype.isCapabilitySupportedOnConnectedDevices=Z8.prototype.nL;g.w(f9,Y7);g.k=f9.prototype;g.k.Ih=function(a){return this.Se.$_gs(a)};
g.k.contains=function(a){return!!this.Se.$_c(a)};
g.k.get=function(a){return this.Se.$_g(a)};
g.k.start=function(){this.Se.$_st()};
g.k.add=function(a,b,c){this.Se.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Se.$_r(a,b,c)};
g.k.xB=function(a,b,c,d){this.Se.$_un(a,b,c,d)};
g.k.ya=function(){for(var a=0,b=this.i.length;a<b;++a)this.Se.$_ubk(this.i[a]);this.i.length=0;this.Se=null;Y7.prototype.ya.call(this)};
g.k.SQ=function(){this.ea("screenChange")};
g.k.jV=function(){this.ea("onlineScreenChange")};
h8.prototype.$_st=h8.prototype.start;h8.prototype.$_gspc=h8.prototype.MQ;h8.prototype.$_gsppc=h8.prototype.qI;h8.prototype.$_c=h8.prototype.contains;h8.prototype.$_g=h8.prototype.get;h8.prototype.$_a=h8.prototype.add;h8.prototype.$_un=h8.prototype.xB;h8.prototype.$_r=h8.prototype.remove;h8.prototype.$_gs=h8.prototype.Ih;h8.prototype.$_gos=h8.prototype.pI;h8.prototype.$_s=h8.prototype.subscribe;h8.prototype.$_ubk=h8.prototype.eg;var s9=null,y9=!1,g9=null,h9=null,x9=null,l9=[];g.w(z9,g.E);g.k=z9.prototype;g.k.ya=function(){g.E.prototype.ya.call(this);this.i.stop();this.B.stop();this.S.stop();this.oa();var a=this.Tb;a.unsubscribe("proxyStateChange",this.UM,this);a.unsubscribe("remotePlayerChange",this.Lw,this);a.unsubscribe("remoteQueueChange",this.wA,this);a.unsubscribe("previousNextChange",this.RM,this);a.unsubscribe("nowAutoplaying",this.KM,this);a.unsubscribe("autoplayDismissed",this.nM,this);this.Tb=this.u=null};
g.k.vj=function(a){var b=g.Ba.apply(1,arguments);if(2!=this.Tb.B)if(A9(this)){var c=a;if(!S8(this.Tb).isAdPlaying()||"control_seek"!==c)switch(c){case "control_toggle_play_pause":S8(this.Tb).Ec()?this.Tb.pause():this.Tb.play();break;case "control_play":this.Tb.play();break;case "control_pause":this.Tb.pause();break;case "control_seek":this.K.oI(b[0],b[1]);break;case "control_subtitles_set_track":B9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.J.getCurrentTime();C9(this,0===b?void 0:b);break;case "control_seek":C9(this,b[0]);break;case "control_subtitles_set_track":B9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.kU=function(a){this.S.GQ(a)};
g.k.fY=function(a){this.vj("control_subtitles_set_track",g.Se(a)?null:a)};
g.k.jO=function(){var a=this.J.getOption("captions","track");g.Se(a)||B9(this,a)};
g.k.Xb=function(a){this.u.Xb(a,this.J.getVideoData().lengthSeconds)};
g.k.UU=function(){g.Se(this.C)||GXa(this,this.C);this.D=!1};
g.k.UM=function(a,b){this.B.stop();2===b&&this.dO()};
g.k.Lw=function(){if(A9(this)){this.i.stop();var a=S8(this.Tb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.wf=1;break;case 1082:case 1083:this.u.wf=0;break;default:this.u.wf=-1}switch(a.playerState){case 1081:case 1:this.Ub(new g.tJ(8));this.cO();break;case 1085:case 3:this.Ub(new g.tJ(9));break;case 1083:case 0:this.Ub(new g.tJ(2));this.K.stop();this.Xb(this.J.getVideoData().lengthSeconds);break;case 1084:this.Ub(new g.tJ(4));break;case 2:this.Ub(new g.tJ(4));this.Xb(N8(a));
break;case -1:this.Ub(new g.tJ(64));break;case -1E3:this.Ub(new g.tJ(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=S8(this.Tb).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,GXa(this,a));a=S8(this.Tb);-1===a.volume||Math.round(this.J.getVolume())===a.volume&&this.J.isMuted()===a.muted||this.X.isActive()||this.LO()}else FXa(this)};
g.k.RM=function(){this.J.ea("mdxpreviousnextchange")};
g.k.wA=function(){A9(this)||FXa(this)};
g.k.KM=function(a){isNaN(a)||this.J.ea("mdxnowautoplaying",a)};
g.k.nM=function(){this.J.ea("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){A9(this)&&this.Tb.setAudioTrack(this.J.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===S8(this.Tb).playerState?C9(this,a):b&&this.Tb.seekTo(a)};
g.k.LO=function(){var a=this;if(A9(this)){var b=S8(this.Tb);this.events.qc(this.Z);b.muted?this.J.mute():this.J.unMute();this.J.setVolume(b.volume);this.Z=this.events.T(this.J,"onVolumeChange",function(c){EXa(a,c)})}};
g.k.cO=function(){this.i.stop();if(!this.Tb.isDisposed()){var a=S8(this.Tb);a.Ec()&&this.Ub(new g.tJ(8));this.Xb(N8(a));this.i.start()}};
g.k.dO=function(){this.B.stop();this.i.stop();var a=this.Tb.C.getReconnectTimeout();2==this.Tb.B&&!isNaN(a)&&this.B.start()};
g.k.Ub=function(a){this.B.stop();var b=this.I;if(!g.yJ(b,a)){var c=g.T(a,2);c!==g.T(this.I,2)&&this.J.Ht(c);this.I=a;IXa(this.u,b,a)}};g.w(D9,g.W);D9.prototype.Ad=function(){this.i.show()};
D9.prototype.Eb=function(){this.i.hide()};
D9.prototype.u=function(){T6("mdx-privacy-popup-cancel");this.Eb()};
D9.prototype.B=function(){T6("mdx-privacy-popup-confirm");this.Eb()};g.w(E9,g.W);E9.prototype.onStateChange=function(a){HXa(this,a.state)};g.w(F9,g.wP);F9.prototype.D=function(){var a=this.J.getOption("remote","receivers");a&&1<a.length&&!this.J.getOption("remote","quickCast")?(this.Ho=g.tc(a,this.i,this),g.xP(this,g.pn(a,this.i)),a=this.J.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.Xh(a),this.enable(!0)):this.enable(!1)};
F9.prototype.i=function(a){return a.key};
F9.prototype.pj=function(a){return"cast-selector-receiver"===a?"Cast...":this.Ho[a].name};
F9.prototype.Af=function(a){g.wP.prototype.Af.call(this,a);this.J.setOption("remote","currentReceiver",this.Ho[a]);this.Ab.Eb()};g.w(G9,g.FM);g.k=G9.prototype;
g.k.create=function(){var a=this.player.V(),b=g.qE(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.N("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.N("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.N("enable_cast_short_lived_lounge_token")};zXa(b,a);this.subscriptions.push(g.rv("yt-remote-before-disconnect",this.jU,this));this.subscriptions.push(g.rv("yt-remote-connection-change",this.JV,this));this.subscriptions.push(g.rv("yt-remote-receiver-availability-change",this.TM,
this));this.subscriptions.push(g.rv("yt-remote-auto-connect",this.HV,this));this.subscriptions.push(g.rv("yt-remote-receiver-resumed",this.GV,this));this.subscriptions.push(g.rv("mdx-privacy-popup-confirm",this.XW,this));this.subscriptions.push(g.rv("mdx-privacy-popup-cancel",this.WW,this));this.TM()};
g.k.load=function(){this.player.cancelPlayback();g.FM.prototype.load.call(this);this.di=new z9(this,this.player,this.Tb);var a=(a=DXa())?a.currentTime:0;var b=w9()?new R8(q9(),void 0):null;0==a&&b&&(a=N8(S8(b)));0!==a&&this.Xb(a);IXa(this,this.Bd,this.Bd);this.player.bl(6)};
g.k.unload=function(){this.player.ea("mdxautoplaycanceled");this.un=this.Tk;(0,g.se)(this.di,this.Tb);this.Tb=this.di=null;g.FM.prototype.unload.call(this);this.player.bl(5);H9(this)};
g.k.ya=function(){g.tv(this.subscriptions);g.FM.prototype.ya.call(this)};
g.k.Uk=function(a){var b=g.Ba.apply(1,arguments);this.loaded&&this.di.vj.apply(this.di,[a].concat(g.ma(b)))};
g.k.getAdState=function(){return this.wf};
g.k.Lk=function(){return this.Tb?S8(this.Tb).Lk:!1};
g.k.hasNext=function(){return this.Tb?S8(this.Tb).hasNext:!1};
g.k.Xb=function(a,b){this.DL=a||0;this.player.ea("progresssync",a,b);this.player.Oa("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.DL};
g.k.getProgressState=function(){var a=S8(this.Tb),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.V().N("web_player_mdx_allow_seeking_change_killswitch")?this.player.tf():!a.isAdPlaying()&&this.player.tf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+L8(a):a.B,isAtLiveHead:1>=(a.u?a.i+L8(a):a.i)-this.getCurrentTime(),loaded:a.S,seekableEnd:a.u?a.i+L8(a):a.i,seekableStart:0<
a.C?a.C+L8(a):a.C}};
g.k.nextVideo=function(){this.Tb&&this.Tb.nextVideo()};
g.k.KA=function(){this.Tb&&this.Tb.KA()};
g.k.jU=function(a){1===a&&(this.UF=this.Tb?S8(this.Tb):null)};
g.k.JV=function(){var a=w9()?new R8(q9(),void 0):null;if(a){var b=this.un;this.loaded&&this.unload();this.Tb=a;this.UF=null;b.key!==this.Tk.key&&(this.un=b,this.load())}else(0,g.re)(this.Tb),this.Tb=null,this.loaded&&(this.unload(),(a=this.UF)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,N8(a)));this.player.ea("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.TM=function(){var a=[this.Tk],b=a.concat,c=AXa();F8()&&g.ry("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Ho=b.call(a,c);a=r9()||this.Tk;I9(this,a);this.player.Oa("onMdxReceiversChange")};
g.k.HV=function(){var a=r9();I9(this,a)};
g.k.GV=function(){this.un=r9()};
g.k.XW=function(){this.Tw=!0;H9(this);y9=!1;s9&&u9(s9,1);s9=null};
g.k.WW=function(){this.Tw=!1;H9(this);I9(this,this.Tk);this.un=this.Tk;y9=!1;s9=null;this.player.playVideo()};
g.k.kf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Ho;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?H8():I9(this,b)),this.loaded?this.un:this.Tk;case "quickCast":return 2===this.Ho.length&&"cast-selector-receiver"===this.Ho[1].key?(b&&H8(),!0):!1}};
g.k.QG=function(){this.Tb.QG()};
g.k.Si=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.EM("remote",G9);})(_yt_player);


}
/*
     FILE ARCHIVED ON 16:44:17 Nov 24, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:38:51 Jun 11, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.968
  exclusion.robots: 0.044
  exclusion.robots.policy: 0.019
  esindex: 0.014
  cdx.remote: 25.527
  LoadShardBlock: 304.444 (6)
  PetaboxLoader3.datanode: 286.852 (7)
  load_resource: 83.501
  PetaboxLoader3.resolve: 76.179
*/