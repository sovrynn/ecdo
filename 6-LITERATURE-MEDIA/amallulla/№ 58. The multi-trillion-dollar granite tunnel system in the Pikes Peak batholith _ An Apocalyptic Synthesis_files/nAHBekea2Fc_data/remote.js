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

(function(g){var window=this;'use strict';var TUa=function(a,b){return g.Pe(a,b)},UUa=function(a,b){b=b instanceof g.Pf?b:g.Xf(b,/^data:image\//i.test(b));
a.src=g.Qf(b)},P6=function(a){g.il(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Ta()).toString(36));
return a},Q6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.nl(a.u,b,c)},VUa=function(a){if(a===g.bp)throw Error("ES6 Iteration protocol does NOT adjust control flow when StopIteration is thrown from callback helper functions. If your code relies on this behavior, consider throwing a different error and catching it to terminate iteration.");
throw a;},WUa=function(a){if(a instanceof g.$o)return a;
if("function"==typeof a.Kg)return a.Kg(!1);if(g.Na(a)){var b=0,c=new g.$o;c.next=function(){for(;;){if(b>=a.length)return g.a2;if(b in a)return g.ap(a[b++]);b++}};
var d=c.next;c.Dj=function(){return g.cp(d.call(c))};
return c}throw Error("Not implemented");},XUa=function(a,b,c){if(g.Na(a))try{g.sc(a,b,c)}catch(e){VUa(e)}else for(a=WUa(a);;){var d=void 0;
try{d=a.Dj()}catch(e){if(e===g.bp)break;throw e;}try{b.call(c,d,void 0,a)}catch(e){VUa(e)}}},YUa=function(a,b){var c=[];
XUa(b,function(d){try{var e=g.os.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.cfa(e)&&c.push(d)},a);
return c},ZUa=function(a,b){YUa(a,b).forEach(function(c){g.os.prototype.remove.call(this,c)},a)},$Ua=function(a){if(a.xa){if(a.xa.locationOverrideToken)return{locationOverrideToken:a.xa.locationOverrideToken};
if(null!=a.xa.latitudeE7&&null!=a.xa.longitudeE7)return{latitudeE7:a.xa.latitudeE7,longitudeE7:a.xa.longitudeE7}}return null},aVa=function(a,b){g.Wb(a,b)||a.push(b)},R6=function(a){var b=0,c;
for(c in a)b++;return b},bVa=function(a){try{return g.B.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},S6=function(a){if(g.B.JSON)try{return g.B.JSON.parse(a)}catch(b){}return bVa(a)},cVa=function(a,b,c,d){var e=new g.Qk(null,void 0);
a&&g.Rk(e,a);b&&g.Sk(e,b);c&&g.Tk(e,c);d&&(e.K=d);return e},T6=function(a,b){g.uv[a]=!0;
var c=g.rv();c&&c.publish.apply(c,arguments);g.uv[a]=!1},U6=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Xr;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",dVa(this,a.capabilities||""),eVa(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},dVa=function(a,b){a.capabilities.clear();
g.Bp(b.split(","),g.Ra(TUa,fVa)).forEach(function(c){a.capabilities.add(c)})},eVa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},V6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},W6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},gVa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},hVa=function(a){return new V6(a)},iVa=function(a){return Array.isArray(a)?g.nn(a,hVa):[]},X6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},Y6=function(a){return Array.isArray(a)?"["+g.nn(a,X6).join(",")+"]":"null"},Z6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},jVa=function(a){return g.nn(a,function(b){return{key:b.id,
name:b.name}})},$6=function(a,b){return g.Tb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},a7=function(a,b){return g.Tb(a,function(c){return W6(c,b)})},kVa=function(){var a=(0,g.sy)();
a&&ZUa(a,a.i.Kg(!0))},b7=function(){var a=g.vy("yt-remote-connected-devices")||[];
g.pc(a);return a},lVa=function(a){if(g.Xb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.nn(a,function(d,e){return 0==e?d:d.substring(c.length)})},mVa=function(a){g.uy("yt-remote-connected-devices",a,86400)},d7=function(){if(c7)return c7;
var a=g.vy("yt-remote-device-id");a||(a=Z6(),g.uy("yt-remote-device-id",a,31536E3));for(var b=b7(),c=1,d=a;g.Wb(b,d);)c++,d=a+"#"+c;return c7=d},e7=function(){var a=b7(),b=d7();
g.Wb(a,b);g.yy()&&g.rc(a,b);a=lVa(a);if(g.Xb(a))try{g.tia("remote_sid")}catch(c){}else try{g.vu("remote_sid",a.join(","),-1)}catch(c){}},nVa=function(){return g.vy("yt-remote-session-browser-channel")},oVa=function(){return g.vy("yt-remote-local-screens")||[]},pVa=function(){g.uy("yt-remote-lounge-token-expiration",!0,86400)},qVa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.nn(oVa(),function(d){return d.loungeToken}),c=g.nn(a,function(d){return d.loungeToken});
g.on(c,function(d){return!g.Wb(b,d)})&&pVa();
g.uy("yt-remote-local-screens",a,31536E3)},rVa=function(a,b){g.uy("yt-remote-session-browser-channel",a);
g.uy("yt-remote-session-screen-id",b);a=b7();b=d7();g.Wb(a,b)||a.push(b);mVa(a);e7()},f7=function(a){a||(g.wy("yt-remote-session-screen-id"),g.wy("yt-remote-session-video-id"));
e7();a=b7();g.$b(a,d7());mVa(a)},sVa=function(){if(!g7){var a=g.ys();
a&&(g7=new g.ls(a))}},tVa=function(){sVa();
return g7?!!g7.get("yt-remote-use-staging-server"):!1},h7=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},uVa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},vVa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},i7=function(a){a.length?wVa(a.shift(),function(){i7(a)}):j7()},xVa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},wVa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.kk(d,g.bs(a));(document.head||document.documentElement).appendChild(d)},yVa=function(){var a=h7(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20211121042536/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20211121042536/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},j7=function(){var a=vVa();
a&&a(!1,"No cast extension found")},k7=function(){if(zVa){var a=2,b=vVa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;wVa("//web.archive.org/web/20211121042536/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",j7,c)}},AVa=function(){k7();
var a=yVa();a.push("//web.archive.org/web/20211121042536/https://www.gstatic.com/eureka/clank/cast_sender.js");i7(a)},CVa=function(){k7();
var a=yVa();a.push.apply(a,g.ma(BVa.map(xVa)));a.push("//web.archive.org/web/20211121042536/https://www.gstatic.com/eureka/clank/cast_sender.js");i7(a)},l7=function(a,b,c){g.E.call(this);
this.I=null!=c?(0,g.C)(a,c):a;this.Wf=b;this.D=(0,g.C)(this.FQ,this);this.i=!1;this.u=0;this.B=this.Nb=null;this.C=[]},m7=function(a,b,c){g.E.call(this);
this.C=null!=c?a.bind(c):a;this.Wf=b;this.B=null;this.i=!1;this.u=0;this.Nb=null},n7=function(a){a.Nb=g.Yh(function(){a.Nb=null;
a.i&&!a.u&&(a.i=!1,n7(a))},a.Wf);
var b=a.B;a.B=null;a.C.apply(null,b)},o7=function(){},p7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.B.setTimeout(function(){a()},b)},r7=function(a){q7.dispatchEvent(new DVa(q7,a))},DVa=function(a,b){g.ue.call(this,"statevent",a);
this.stat=b},s7=function(a,b,c,d){this.i=a;
this.B=b;this.S=c;this.K=d||1;this.u=45E3;this.C=new g.ol(this);this.I=new g.Xh;this.I.setInterval(250)},FVa=function(a,b,c){a.Qt=1;
a.cn=P6(b.clone());a.zq=c;a.D=!0;EVa(a,null)},t7=function(a,b,c,d,e){a.Qt=1;
a.cn=P6(b.clone());a.zq=null;a.D=c;e&&(a.SN=!1);EVa(a,d)},EVa=function(a,b){a.Dt=Date.now();
u7(a);a.Ko=a.cn.clone();Q6(a.Ko,"t",a.K);a.BB=0;a.Lf=a.i.xD(a.i.qx()?b:null);0<a.nC&&(a.PA=new m7((0,g.C)(a.WO,a,a.Lf),a.nC));a.C.Ra(a.Lf,"readystatechange",a.GQ);b=a.Zo?g.We(a.Zo):{};a.zq?(a.zB="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Lf.send(a.Ko,a.zB,a.zq,b)):(a.zB="GET",a.SN&&!g.Xg&&(b.Connection="close"),a.Lf.send(a.Ko,a.zB,null,b));a.i.Ej(1)},HVa=function(a,b){var c=a.BB,d=b.indexOf("\n",c);
if(-1==d)return v7;c=Number(b.substring(c,d));if(isNaN(c))return GVa;d+=1;if(d+c>b.length)return v7;b=b.substr(d,c);a.BB=d+c;return b},JVa=function(a,b){a.Dt=Date.now();
u7(a);var c=b?window.location.hostname:"";a.Ko=a.cn.clone();g.il(a.Ko,"DOMAIN",c);g.il(a.Ko,"t",a.K);try{a.Rj=new ActiveXObject("htmlfile")}catch(m){w7(a);a.Tm=7;r7(22);x7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in y7)f=y7[f];else if(f in IVa)f=y7[f]=IVa[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
y7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.lg(g.Hf("b/12014412"),d);a.Rj.open();a.Rj.write(g.hg(c));a.Rj.close();a.Rj.parentWindow.m=(0,g.C)(a.zW,a);a.Rj.parentWindow.d=(0,g.C)(a.dN,a,!0);a.Rj.parentWindow.rpcClose=(0,g.C)(a.dN,a,!1);c=a.Rj.createElement("DIV");a.Rj.parentWindow.document.body.appendChild(c);d=g.Wf(a.Ko.toString());d=g.Cg(g.Qf(d));d=g.lg(g.Hf("b/12014412"),'<iframe src="'+d+'"></iframe>');g.ng(c,d);a.i.Ej(1)},u7=function(a){a.oH=Date.now()+
a.u;
KVa(a,a.u)},KVa=function(a,b){if(null!=a.du)throw Error("WatchDog timer not null");
a.du=p7((0,g.C)(a.IW,a),b)},z7=function(a){a.du&&(g.B.clearTimeout(a.du),a.du=null)},x7=function(a){a.i.sf()||a.tp||a.i.ey(a)},w7=function(a){z7(a);
g.re(a.PA);a.PA=null;a.I.stop();g.ql(a.C);if(a.Lf){var b=a.Lf;a.Lf=null;b.abort();b.dispose()}a.Rj&&(a.Rj=null)},A7=function(a,b){try{a.i.WM(a,b),a.i.Ej(4)}catch(c){}},MVa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;LVa(a,b,function(h){h?c(!0):g.B.setTimeout(function(){MVa(a,b,c,d,f)},f)})}},LVa=function(a,b,c){var d=new Image;
d.onload=function(){try{B7(d),c(!0)}catch(e){}};
d.onerror=function(){try{B7(d),c(!1)}catch(e){}};
d.onabort=function(){try{B7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{B7(d),c(!1)}catch(e){}};
g.B.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
UUa(d,a)},B7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},NVa=function(a){this.i=a;
this.u=new o7},OVa=function(a){var b=C7(a.i,a.Ru,"/mail/images/cleardot.gif");
P6(b);MVa(b.toString(),5E3,(0,g.C)(a.uR,a),3,2E3);a.Ej(1)},E7=function(a){var b=a.i.X;
if(null!=b)r7(5),b?(r7(11),D7(a.i,a,!1)):(r7(12),D7(a.i,a,!0));else if(a.uh=new s7(a,void 0,void 0,void 0),a.uh.Zo=a.oC,b=a.i,b=C7(b,b.qx()?a.Iu:null,a.pC),r7(5),!g.Jc||g.Bc(10))Q6(b,"TYPE","xmlhttp"),t7(a.uh,b,!1,a.Iu,!1);else{Q6(b,"TYPE","html");var c=a.uh;a=!!a.Iu;c.Qt=3;c.cn=P6(b.clone());JVa(c,a)}},F7=function(a,b,c){this.i=1;
this.u=[];this.C=[];this.D=new o7;this.S=a||null;this.X=null!=b?b:null;this.I=c||!1},PVa=function(a,b){this.i=a;
this.map=b;this.context=null},QVa=function(a,b,c,d){g.ue.call(this,"timingevent",a);
this.size=b;this.gx=d},RVa=function(a){g.ue.call(this,"serverreachability",a)},UVa=function(a){SVa(a);
if(3==a.i){var b=a.qw++,c=a.Vy.clone();g.il(c,"SID",a.B);g.il(c,"RID",b);g.il(c,"TYPE","terminate");G7(a,c);b=new s7(a,a.B,b,void 0);b.Qt=2;b.cn=P6(c.clone());UUa(new Image,b.cn.toString());b.Dt=Date.now();u7(b)}TVa(a)},VVa=function(a){a.UR(1,0);
a.Vy=C7(a,null,a.qC);H7(a)},SVa=function(a){a.jn&&(a.jn.abort(),a.jn=null);
a.Je&&(a.Je.cancel(),a.Je=null);a.Il&&(g.B.clearTimeout(a.Il),a.Il=null);I7(a);a.Ug&&(a.Ug.cancel(),a.Ug=null);a.Cn&&(g.B.clearTimeout(a.Cn),a.Cn=null)},WVa=function(a,b){if(0==a.i)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new PVa(a.xT++,b));2!=a.i&&3!=a.i||H7(a)},XVa=function(a){var b=0;
a.Je&&b++;a.Ug&&b++;return b},H7=function(a){a.Ug||a.Cn||(a.Cn=p7((0,g.C)(a.bN,a),0),a.xs=0)},ZVa=function(a,b){if(1==a.i){if(!b){a.qw=Math.floor(1E5*Math.random());
b=a.qw++;var c=new s7(a,"",b,void 0);c.Zo=a.Zj;var d=J7(a),e=a.Vy.clone();g.il(e,"RID",b);g.il(e,"CVER","1");G7(a,e);FVa(c,e,d);a.Ug=c;a.i=2}}else 3==a.i&&(b?YVa(a,b):0==a.u.length||a.Ug||YVa(a))},YVa=function(a,b){if(b)if(6<a.vp){a.u=a.C.concat(a.u);
a.C.length=0;var c=a.qw-1;b=J7(a)}else c=b.S,b=b.zq;else c=a.qw++,b=J7(a);var d=a.Vy.clone();g.il(d,"SID",a.B);g.il(d,"RID",c);g.il(d,"AID",a.Ts);G7(a,d);c=new s7(a,a.B,c,a.xs+1);c.Zo=a.Zj;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Ug=c;FVa(c,d,b)},G7=function(a,b){a.Mf&&(a=a.Mf.vK())&&g.De(a,function(c,d){g.il(b,d,c)})},J7=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.vp&&0<b){var d=a.u[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Zq:e.Zq},f++){e.Zq=a.u[f].i;var h=a.u[f].map;e.Zq=6>=a.vp?f:e.Zq-d;try{g.De(h,function(l){return function(m,n){c.push("req"+l.Zq+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Zq+"_type="+encodeURIComponent("_badmap"))}}a.C=a.C.concat(a.u.splice(0,b));
return c.join("&")},$Va=function(a){a.Je||a.Il||(a.K=1,a.Il=p7((0,g.C)(a.aN,a),0),a.Sr=0)},K7=function(a){if(a.Je||a.Il||3<=a.Sr)return!1;
a.K++;a.Il=p7((0,g.C)(a.aN,a),aWa(a,a.Sr));a.Sr++;return!0},D7=function(a,b,c){a.xB=c;
a.bk=b.ul;a.I||VVa(a)},I7=function(a){null!=a.Dp&&(g.B.clearTimeout(a.Dp),a.Dp=null)},aWa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},L7=function(a,b){if(2==b||9==b){var c=null;
a.Mf&&(c=null);var d=(0,g.C)(a.JX,a);c||(c=new g.Qk("//web.archive.org/web/20211121042536/https://www.google.com/images/cleardot.gif"),P6(c));LVa(c.toString(),1E4,d)}else r7(2);bWa(a,b)},bWa=function(a,b){a.i=0;
a.Mf&&a.Mf.IJ(b);TVa(a);SVa(a)},TVa=function(a){a.i=0;
a.bk=-1;if(a.Mf)if(0==a.C.length&&0==a.u.length)a.Mf.kD();else{g.fc(a.C);var b=g.fc(a.u);a.C.length=0;a.u.length=0;a.Mf.kD(b)}},C7=function(a,b,c){var d=g.jl(c);
if(""!=d.i)b&&g.Sk(d,b+"."+d.i),g.Tk(d,d.B);else{var e=window.location;d=cVa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.xv&&g.De(a.xv,function(f,h){g.il(d,h,f)});
g.il(d,"VER",a.vp);G7(a,d);return d},cWa=function(){},dWa=function(){this.i=[];
this.u=[]},eWa=function(a,b){this.action=a;
this.params=b||{}},M7=function(a,b){g.E.call(this);
this.i=new g.I(this.qW,0,this);g.H(this,this.i);this.Wf=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.C)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.C)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},N7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.xa=a;this.I=b;this.B=new g.ks;this.u=new M7(this.nX,this);this.i=null;this.Z=!1;this.D=null;this.X="";this.S=this.C=0;this.K=[];this.Aa=c;this.oa=d;this.Ba=e},fWa=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.xB,sessionId:a.i.B,arrayId:a.i.Ts}},gWa=function(a,b){a.S=b||0;
a.u.stop();O7(a);a.i&&(3==a.i.getState()&&ZVa(a.i),UVa(a.i));a.S=0},P7=function(a){return!!a.i&&3==a.i.getState()},O7=function(a){if(a.i){var b=a.oa(),c=a.i.Zj||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.Zj=c}},Q7=function(a){this.port=this.domain="";
this.i="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.Ii(4,a))||"";b&&(this.port=":"+b);this.domain=g.Ji(a)||"";a=g.Ab;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.xb(a,"10.0")&&(this.u=!1))},R7=function(a,b){var c=a.i;
a.u&&(c="https://"+a.domain+a.port+a.i);return g.Ui(c+b,{})},S7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ra(a.C,d,!0),onError:g.Ra(a.B,e),onTimeout:g.Ra(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.lu(b,a)},kWa=function(){var a=hWa;
iWa();T7.push(a);jWa()},U7=function(a,b){iWa();
var c=lWa(a,String(b));g.Xb(T7)?mWa(c):(jWa(),g.sc(T7,function(d){d(c)}))},iWa=function(){T7||(T7=g.Ja("yt.mdx.remote.debug.handlers_")||[],g.Ia("yt.mdx.remote.debug.handlers_",T7,void 0))},mWa=function(a){var b=(V7+1)%50;
V7=b;W7[b]=a;X7||(X7=49==b)},jWa=function(){var a=T7;
if(W7[0]){var b=X7?V7:-1;do{b=(b+1)%50;var c=W7[b];g.sc(a,function(d){d(c)})}while(b!=V7);
W7=Array(50);V7=-1;X7=!1}},lWa=function(a,b){var c=(Date.now()-nWa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},Y7=function(a){g.Q.call(this);
this.I=a;this.screens=[]},oWa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},pWa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Bp(a.screens,function(f){return!!$6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=oWa(a,b[d])||c;return c},qWa=function(a,b){var c=a.screens.length;
a.screens=g.Bp(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},Z7=function(a,b,c,d,e){g.Q.call(this);
this.B=a;this.K=b;this.C=c;this.I=d;this.D=e;this.u=0;this.i=null;this.Nb=NaN},a8=function(a){Y7.call(this,"LocalScreenService");
this.u=a;this.i=NaN;$7(this);this.info("Initializing with "+Y6(this.screens))},rWa=function(a){if(a.screens.length){var b=g.nn(a.screens,function(d){return d.id}),c=R7(a.u,"/pairing/get_lounge_token_batch");
S7(a.u,c,{screen_ids:b.join(",")},(0,g.C)(a.sS,a),(0,g.C)(a.rS,a))}},$7=function(a){if(g.O("deprecate_pair_servlet_enabled"))return pWa(a,[]);
var b=iVa(oVa());b=g.Bp(b,function(c){return!c.uuid});
return pWa(a,b)},b8=function(a,b){qVa(g.nn(a.screens,gVa));
b&&pVa()},d8=function(a,b){g.Q.call(this);
this.I=b;b=(b=g.vy("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.Wb(b,h)}this.i=c;this.D=a;this.B=this.C=NaN;this.u=null;c8("Initialized with "+g.zi(this.i))},e8=function(a,b,c){var d=R7(a.D,"/pairing/get_screen_availability");
S7(a.D,d,{lounge_token:b.token},(0,g.C)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.C)(function(){c(!1)},a))},f8=function(a,b){a:if(R6(b)!=R6(a.i))var c=!1;
else{c=g.Ne(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(c8("Updated online screens: "+g.zi(a.i)),a.i=b,a.ea("screenChange"));sWa(a)},g8=function(a){isNaN(a.B)||g.hu(a.B);
a.B=g.Qt((0,g.C)(a.hG,a),0<a.C&&a.C<g.Ta()?2E4:1E4)},c8=function(a){U7("OnlineScreenService",a)},tWa=function(a){var b={};
g.sc(a.I(),function(c){c.token?b[c.token]=c.id:this.ke("Requesting availability of screen w/o lounge token.")});
return b},sWa=function(a){a=g.Ne(g.Ee(a.i,function(b){return b}));
g.pc(a);a.length?g.uy("yt-remote-online-screen-ids",a.join(","),60):g.wy("yt-remote-online-screen-ids")},h8=function(a,b){b=void 0===b?!1:b;
Y7.call(this,"ScreenService");this.C=a;this.K=b;this.i=this.u=null;this.B=[];this.D={};uWa(this)},wWa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.Hh(),l=c?a7(h,c):null;c&&(a.K||l)||(l=a7(h,b));if(l){l.uuid=b;var m=i8(a,l);e8(a.i,m,function(n){e(n?m:null)})}else c?vWa(a,c,(0,g.C)(function(n){var p=i8(this,new V6({name:d,
screenId:c,loungeToken:n,dialId:b||""}));e8(this.i,p,function(r){e(r?p:null)})},a),f):e(null)},xWa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},yWa=function(a,b,c){e8(a.i,b,c)},vWa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.lu(R7(a.C,"/pairing/get_lounge_token_batch"),e)},zWa=function(a){a.screens=a.u.Hh();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+Y6(a.screens))},uWa=function(a){j8(a);
a.u=new a8(a.C);a.u.subscribe("screenChange",(0,g.C)(a.BS,a));zWa(a);a.K||(a.B=iVa(g.vy("yt-remote-automatic-screen-cache")||[]));j8(a);a.info("Initializing automatic screens: "+Y6(a.B));a.i=new d8(a.C,(0,g.C)(a.Hh,a,!0));a.i.subscribe("screenChange",(0,g.C)(function(){this.ea("onlineScreenChange")},a))},i8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=a7(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.K||AWa(a));j8(a);a.D[b.uuid]=b.id;g.uy("yt-remote-device-id-map",a.D,31536E3);return b},AWa=function(a){a=g.Bp(a.B,function(b){return"shortLived"!=b.idType});
g.uy("yt-remote-automatic-screen-cache",g.nn(a,gVa))},j8=function(a){a.D=g.vy("yt-remote-device-id-map")||{}},k8=function(a,b,c){g.Q.call(this);
this.Ba=c;this.B=a;this.i=b;this.C=null},l8=function(a,b){a.C=b;
a.ea("sessionScreen",a.C)},BWa=function(a,b){a.C&&(a.C.token=b,i8(a.B,a.C));
a.ea("sessionScreen",a.C)},m8=function(a,b){U7(a.Ba,b)},n8=function(a,b,c){k8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.oa=(0,g.C)(this.LQ,this);this.Aa=(0,g.C)(this.MW,this);this.Z=g.Qt(function(){CWa(d,null)},12E4);
this.K=this.D=this.I=this.S=0;this.xa=!1;this.X="unknown"},o8=function(a,b){g.hu(a.K);
a.K=0;0==b?DWa(a):a.K=g.Qt(function(){DWa(a)},b)},DWa=function(a){EWa(a,"getLoungeToken");
g.hu(a.D);a.D=g.Qt(function(){FWa(a,null)},3E4)},EWa=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.zi(void 0));
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,g.Ka,(0,g.C)(function(){m8(this,"Failed to send message: "+b+".")},a)):m8(a,"Sending yt message without session: "+g.zi(c))},p8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.IK(b,function(c){l8(a,c)},function(){return a.zg()},5)):a.zg(Error("Waiting for session status timed out."))},HWa=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+JSON.stringify(b));
var d=new V6(b);GWa(a,d,function(e){e?(a.xa=!0,i8(a.B,d),l8(a,d),a.X="unknown",o8(a,c)):(g.At(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.zg())},5)},CWa=function(a,b){g.hu(a.Z);
a.Z=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?HWa(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.At(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),p8(a,b.screenId))):(g.At(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),p8(a,b.screenId)):p8(a,b.screenId):a.zg(Error("Waiting for session status timed out."))},FWa=function(a,b){g.hu(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.X=c,o8(a,3E4)):(BWa(a,b.loungeToken),a.xa=!1,a.X="unknown",o8(a,b.loungeTokenRefreshIntervalMs))},GWa=function(a,b,c,d){g.hu(a.I);
a.I=0;yWa(a.B,b,function(e){e||0>d?c(e):a.I=g.Qt(function(){GWa(a,b,c,d-1)},300)})},IWa=function(a){g.hu(a.S);
a.S=0;g.hu(a.I);a.I=0;g.hu(a.Z);a.Z=0;g.hu(a.D);a.D=0;g.hu(a.K);a.K=0},q8=function(a,b,c,d){k8.call(this,a,b,"DialSession");
this.config_=d;this.u=this.S=null;this.Aa="";this.La=c;this.Ka=null;this.Z=g.Ka;this.X=NaN;this.Ja=(0,g.C)(this.MQ,this);this.D=g.Ka;this.K=this.I=0;this.oa=!1;this.xa="unknown"},r8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},JWa=function(a){a.D=a.B.rI(a.Aa,a.i.label,a.i.friendlyName,r8(a),function(b,c){a.D=g.Ka;
a.oa=!0;l8(a,b);"shortLived"==b.idType&&0<c&&s8(a,c)},function(b){a.D=g.Ka;
a.zg(b)})},KWa=function(a){var b={};
b.pairingCode=a.Aa;b.theme=a.La;tVa()&&(b.env_useStageMdx=1);return g.Si(b)},t8=function(a){return new Promise(function(b){a.Aa=Z6();
if(a.Ka){var c=new chrome.cast.DialLaunchResponse(!0,KWa(a));b(c);JWa(a)}else a.Z=function(){g.hu(a.X);a.Z=function(){};
a.X=NaN;var d=new chrome.cast.DialLaunchResponse(!0,KWa(a));b(d);JWa(a)},a.X=g.Qt(function(){a.Z()},100)})},MWa=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new V6(b);return(new Promise(function(e){LWa(a,d,function(f){f?(a.oa=!0,i8(a.B,d),l8(a,d),s8(a,c)):g.At(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):t8(a)})},NWa=function(a,b){var c=a.S.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){wWa(a.B,c,b,d,function(f){f&&f.token&&l8(a,f);e(f)},function(f){m8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):t8(a)})},LWa=function(a,b,c,d){g.hu(a.I);
a.I=0;yWa(a.B,b,function(e){e||0>d?c(e):a.I=g.Qt(function(){LWa(a,b,c,d-1)},300)})},s8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
r8(a)&&(g.hu(a.K),a.K=0,0==b?OWa(a):a.K=g.Qt(function(){OWa(a)},b))},OWa=function(a){r8(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.xa=c,s8(a,3E4)):(a.oa=!1,a.xa="unknown",BWa(a,b.loungeToken),s8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.xa="noLoungeTokenResponse";s8(a,3E4)})},PWa=function(a){g.hu(a.I);
a.I=0;g.hu(a.K);a.K=0;a.D();a.D=function(){};
g.hu(a.X)},u8=function(a,b){k8.call(this,a,b,"ManualSession");
this.u=g.Qt((0,g.C)(this.Us,this,null),150)},v8=function(a,b){g.Q.call(this);
this.config_=b;this.u=a;this.S=b.appId||"233637DE";this.C=b.theme||"cl";this.X=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.i=null;this.K=!1;this.B=[];this.D=(0,g.C)(this.BV,this)},QWa=function(a,b){return b?g.Tb(a.B,function(c){return W6(b,c.label)},a):null},w8=function(a){U7("Controller",a)},hWa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},x8=function(a){return a.K||!!a.B.length||!!a.i},y8=function(a,b,c){b!=a.i&&(g.re(a.i),(a.i=b)?(c?a.ea("yt-remote-cast2-receiver-resumed",
b.i):a.ea("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.C)(a.ZM,a,b)),b.subscribe("sessionFailed",function(){return RWa(a,b)}),b.getScreen()?a.ea("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.Us(null)):a.ea("yt-remote-cast2-session-change",null))},RWa=function(a,b){a.i==b&&a.ea("yt-remote-cast2-session-failed")},SWa=function(a){var b=a.u.qI(),c=a.i&&a.i.i;
a=g.nn(b,function(d){c&&W6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=QWa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},XWa=function(a,b,c,d){d.disableCastApi?z8("Cannot initialize because disabled by Mdx config."):TWa()?UWa(b,d)&&(A8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?VWa(a,c):(window.__onGCastApiAvailable=function(e,f){e?VWa(a,c):(B8("Failed to load cast API: "+f),C8(!1),A8(!1),g.wy("yt-remote-cast-available"),g.wy("yt-remote-cast-receiver"),
WWa(),c(!1))},d.loadCastApiSetupScript?g.zy("https://web.archive.org/web/20211121042536/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=h7()&&AVa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?j7():89<=h7()?CVa():(k7(),i7(BVa.map(xVa))))):z8("Cannot initialize because not running Chrome")},WWa=function(){z8("dispose");
var a=D8();a&&a.dispose();g.Ia("yt.mdx.remote.cloudview.instance_",null,void 0);YWa(!1);g.xv(E8);E8.length=0},F8=function(){return!!g.vy("yt-remote-cast-installed")},ZWa=function(){var a=g.vy("yt-remote-cast-receiver");
return a?a.friendlyName:null},$Wa=function(){z8("clearCurrentReceiver");
g.wy("yt-remote-cast-receiver")},aXa=function(){return F8()?D8()?D8().getCastSession():(B8("getCastSelector: Cast is not initialized."),null):(B8("getCastSelector: Cast API is not installed!"),null)},H8=function(){F8()?D8()?G8()?(z8("Requesting cast selector."),D8().requestSession()):(z8("Wait for cast API to be ready to request the session."),E8.push(g.wv("yt-remote-cast2-api-ready",H8))):B8("requestCastSelector: Cast is not initialized."):B8("requestCastSelector: Cast API is not installed!")},I8=
function(a,b){G8()?D8().setConnectedScreenStatus(a,b):B8("setConnectedScreenStatus called before ready.")},TWa=function(){var a=0<=g.Ab.search(/ (CrMo|Chrome|CriOS)\//);
return g.Ej||a},bXa=function(a,b){D8().init(a,b)},UWa=function(a,b){var c=!1;
D8()||(a=new v8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.uy("yt-remote-cast-available",d);T6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){z8("onReceiverSelected: "+d.friendlyName);
g.uy("yt-remote-cast-receiver",d);T6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){z8("onReceiverResumed: "+d.friendlyName);
g.uy("yt-remote-cast-receiver",d);T6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){z8("onSessionChange: "+X6(d));
d||g.wy("yt-remote-cast-receiver");T6("yt-remote-cast2-session-change",d)}),g.Ia("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
z8("cloudview.createSingleton_: "+c);return c},D8=function(){return g.Ja("yt.mdx.remote.cloudview.instance_")},VWa=function(a,b){C8(!0);
A8(!1);bXa(a,function(c){c?(YWa(!0),g.yv("yt-remote-cast2-api-ready")):(B8("Failed to initialize cast API."),C8(!1),g.wy("yt-remote-cast-available"),g.wy("yt-remote-cast-receiver"),WWa());b(c)})},z8=function(a){U7("cloudview",a)},B8=function(a){U7("cloudview",a)},C8=function(a){z8("setCastInstalled_ "+a);
g.uy("yt-remote-cast-installed",a)},G8=function(){return!!g.Ja("yt.mdx.remote.cloudview.apiReady_")},YWa=function(a){z8("setApiReady_ "+a);
g.Ia("yt.mdx.remote.cloudview.apiReady_",a,void 0)},A8=function(a){g.Ia("yt.mdx.remote.cloudview.initializing_",a,void 0)},J8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.K=0;this.trackData=null;this.hasNext=this.Jk=!1;this.S=this.D=this.i=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},K8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.Jk=!1;a.hasNext=!1;a.K=0;a.I=g.Ta();a.C=0;a.i=0;a.D=0;a.S=0;a.B=NaN;a.u=!1},L8=function(a){return a.Fc()?(g.Ta()-a.I)/1E3:0},M8=function(a,b){a.K=b;
a.I=g.Ta()},N8=function(a){switch(a.playerState){case 1:case 1081:return(g.Ta()-a.I)/1E3+a.K;
case -1E3:return 0}return a.K},O8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&K8(a)},P8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Xe(a.trackData);b.hasPrevious=a.Jk;b.hasNext=a.hasNext;b.playerTime=a.K;b.playerTimeAt=a.I;b.seekableStart=a.C;b.seekableEnd=a.i;b.duration=a.D;b.loadedTime=a.S;b.liveIngestionTime=a.B;return b},R8=function(a,b){g.Q.call(this);
this.B=0;this.C=a;this.I=[];this.D=new dWa;this.u=this.i=null;this.X=(0,g.C)(this.kU,this);this.K=(0,g.C)(this.Dw,this);this.S=(0,g.C)(this.jU,this);this.Z=(0,g.C)(this.rU,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.wG,this),cXa(this))):c=3;0!=c&&(b?this.wG(c):g.Qt((0,g.C)(function(){this.wG(c)},this),0));
(a=aXa())&&Q8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Z)},S8=function(a){return new J8(a.C.getPlayerContextData())},cXa=function(a){g.sc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.C.subscribe(b,g.Ra(this.zV,b),this))},a)},dXa=function(a){g.sc(a.I,function(b){this.C.unsubscribeByKey(b)},a);
a.I.length=0},T8=function(a){return 1==a.getState()},U8=function(a,b){var c=a.D;
50>c.i.length+c.u.length&&a.D.u.push(b)},W8=function(a,b,c){var d=S8(a);
M8(d,c);-1E3!=d.playerState&&(d.playerState=b);V8(a,d)},X8=function(a,b,c){a.C.sendMessage(b,c)},V8=function(a,b){dXa(a);
a.C.setPlayerContextData(P8(b));cXa(a)},Q8=function(a,b){a.u&&(a.u.removeUpdateListener(a.X),a.u.removeMediaListener(a.K),a.Dw(null));
a.u=b;a.u&&(U7("CP","Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.X),a.u.addMediaListener(a.K),a.u.media.length&&a.Dw(a.u.media[0]))},eXa=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=S8(a);b.contentId!=d.videoId&&U7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;M8(d,a.i.getEstimatedTime());V8(a,d)}else U7("CP","No cast media video. Ignoring state update.")},Y8=function(a,b,c){return(0,g.C)(function(d){this.ke("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.ke("Retrying "+b+" using MDx browser channel."),X8(this,b,c))},a)},Z8=function(a,b,c,d){d=void 0===d?!1:d;
g.Q.call(this);this.D=NaN;this.xa=!1;this.S=this.K=this.Z=this.oa=NaN;this.X=[];this.C=this.I=this.B=this.pc=this.i=null;this.Ja=a;this.Ba=d;this.X.push(g.Zu(window,"beforeunload",(0,g.C)(this.nS,this)));this.u=[];this.pc=new J8;this.Ka=b.id;this.Aa=b.idType;this.i=fXa(this,c);this.i.subscribe("handlerOpened",this.oU,this);this.i.subscribe("handlerClosed",this.lU,this);this.i.subscribe("handlerError",this.mU,this);this.i.subscribe("handlerMessage",this.nU,this);this.i.bB(b.token);this.subscribe("remoteQueueChange",
function(){var e=this.pc.videoId;g.yy()&&g.uy("yt-remote-session-video-id",e)},this)},gXa=function(a){return g.Tb(a.u,function(b){return"LOUNGE_SCREEN"==b.type})},$8=function(a){U7("conn",a)},fXa=function(a,b){return new N7(R7(a.Ja,"/bc"),b,!1,function(){return a.vI()},"shortLived"==a.Aa)},a9=function(a,b){a.ea("proxyStateChange",b)},hXa=function(a){a.D=g.Qt((0,g.C)(function(){$8("Connecting timeout");
this.qs(1)},a),2E4)},b9=function(a){g.hu(a.D);
a.D=NaN},c9=function(a){g.hu(a.oa);
a.oa=NaN},iXa=function(a){d9(a);
a.Z=g.Qt((0,g.C)(function(){e9(this,"getNowPlaying")},a),2E4)},d9=function(a){g.hu(a.Z);
a.Z=NaN},kXa=function(a,b){var c=null;
if(b){var d=gXa(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ia("yt.mdx.remote.remoteClient_",c,void 0);b&&(b9(a),c9(a));c=P7(a.i)&&isNaN(a.D);b==c?b&&(a9(a,1),e9(a,"getSubtitlesTrack")):b?(a.HK()&&a.pc.reset(),a9(a,1),e9(a,"getNowPlaying"),jXa(a)):a.qs(1)},lXa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.pc.videoId&&(g.Se(b.params)?a.pc.trackData=null:a.pc.trackData=b.params,a.ea("remotePlayerChange"))},mXa=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.pc.listId=b.params.listId||a.pc.listId;O8(a.pc,d,e);a.ea("remoteQueueChange",c)},oXa=function(a,b){b.params=b.params||{};
mXa(a,b,"NOW_PLAYING_MAY_CHANGE");nXa(a,b);a.ea("autoplayDismissed")},nXa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
M8(a.pc,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.pc.playerState&&(c=-1E3);a.pc.playerState=c;c=Number(b.params.loadedTime);a.pc.S=isNaN(c)?0:c;a.pc.Nj(Number(b.params.duration));c=a.pc;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.pc;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.pc.playerState?iXa(a):d9(a);a.ea("remotePlayerChange")},pXa=function(a,b){if(-1E3!=a.pc.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.pc.playerState=c;b=parseInt(b.params.currentTime,10);M8(a.pc,isNaN(b)?0:b);a.ea("remotePlayerChange")}},qXa=function(a,b){var c="true"==b.params.muted;
a.pc.volume=parseInt(b.params.volume,10);a.pc.muted=c;a.ea("remotePlayerChange")},rXa=function(a,b){a.I=b.params.videoId;
a.ea("nowAutoplaying",parseInt(b.params.timeout,10))},sXa=function(a,b){var c="true"==b.params.hasNext;
a.pc.Jk="true"==b.params.hasPrevious;a.pc.hasNext=c;a.ea("previousNextChange")},jXa=function(a){g.hu(a.S);
a.S=g.Qt((0,g.C)(a.qs,a,1),864E5)},e9=function(a,b,c){c?$8("Sending: action="+b+", params="+g.zi(c)):$8("Sending: action="+b);
a.i.sendMessage(b,c)},f9=function(a){Y7.call(this,"ScreenServiceProxy");
this.Se=a;this.i=[];this.i.push(this.Se.$_s("screenChange",(0,g.C)(this.QQ,this)));this.i.push(this.Se.$_s("onlineScreenChange",(0,g.C)(this.gV,this)))},wXa=function(a,b){sVa();
if(!g7||!g7.get("yt-remote-disable-remote-module-for-dev")){b=g.N("MDX_CONFIG")||b;kVa();e7();g9||(g9=new Q7(b?b.loungeApiHost:void 0),tVa()&&(g9.i="/api/loungedev"));h9||(h9=g.Ja("yt.mdx.remote.deferredProxies_")||[],g.Ia("yt.mdx.remote.deferredProxies_",h9,void 0));tXa();var c=i9();if(!c){var d=new h8(g9,b?b.disableAutomaticScreenCache||!1:!1);g.Ia("yt.mdx.remote.screenService_",d,void 0);c=i9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ia("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1,void 0);XWa(a,d,function(f){f?j9()&&I8(j9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){T6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ja("yt.mdx.remote.initialized_")&&(g.Ia("yt.mdx.remote.initialized_",!0,void 0),k9("Initializing: "+
g.zi(b)),l9.push(g.wv("yt-remote-cast2-api-ready",function(){T6("yt-remote-api-ready")})),l9.push(g.wv("yt-remote-cast2-availability-change",function(){T6("yt-remote-receiver-availability-change")})),l9.push(g.wv("yt-remote-cast2-receiver-selected",function(){m9(null);
T6("yt-remote-auto-connect","cast-selector-receiver")})),l9.push(g.wv("yt-remote-cast2-receiver-resumed",function(){T6("yt-remote-receiver-resumed","cast-selector-receiver")})),l9.push(g.wv("yt-remote-cast2-session-change",uXa)),l9.push(g.wv("yt-remote-connection-change",function(f){f?I8(j9(),"YouTube TV"):n9()||(I8(null,null),$Wa())})),l9.push(g.wv("yt-remote-cast2-session-failed",function(){T6("yt-remote-connection-failed")})),a=o9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.O("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),k9(" -- with channel params: "+g.zi(a)),a?(g.uy("yt-remote-session-app",a.app),g.uy("yt-remote-session-name",a.name)):(g.wy("yt-remote-session-app"),g.wy("yt-remote-session-name")),g.Ia("yt.mdx.remote.channelParams_",a,void 0),c.start(),j9()||vXa())}},xXa=function(){var a=i9().Se.$_gos();
var b=p9();b&&q9()&&($6(a,b)||a.push(b));return jVa(a)},r9=function(){var a=yXa();
!a&&F8()&&ZWa()&&(a={key:"cast-selector-receiver",name:ZWa()});return a},yXa=function(){var a=xXa(),b=p9();
b||(b=n9());return g.Tb(a,function(c){return b&&W6(b,c.key)?!0:!1})},p9=function(){var a=j9();
if(!a)return null;var b=i9().Hh();return a7(b,a)},uXa=function(a){k9("remote.onCastSessionChange_: "+X6(a));
if(a){var b=p9();if(b&&b.id==a.id){if(I8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))s9&&(s9.token=a),(b=q9())&&b.bB(a)}else b&&t9(),u9(a,1)}else q9()&&t9()},t9=function(){G8()?D8().stopSession():B8("stopSession called before API ready.");
var a=q9();a&&(a.disconnect(1),v9(null))},w9=function(){var a=q9();
return!!a&&3!=a.getProxyState()},k9=function(a){U7("remote",a)},i9=function(){if(!x9){var a=g.Ja("yt.mdx.remote.screenService_");
x9=a?new f9(a):null}return x9},j9=function(){return g.Ja("yt.mdx.remote.currentScreenId_")},zXa=function(a){g.Ia("yt.mdx.remote.currentScreenId_",a,void 0)},AXa=function(){return g.Ja("yt.mdx.remote.connectData_")},m9=function(a){g.Ia("yt.mdx.remote.connectData_",a,void 0)},q9=function(){return g.Ja("yt.mdx.remote.connection_")},v9=function(a){var b=q9();
m9(null);a||zXa("");g.Ia("yt.mdx.remote.connection_",a,void 0);h9&&(g.sc(h9,function(c){c(a)}),h9.length=0);
b&&!a?T6("yt-remote-connection-change",!1):!b&&a&&T6("yt-remote-connection-change",!0)},n9=function(){var a=g.yy();
if(!a)return null;var b=i9();if(!b)return null;b=b.Hh();return a7(b,a)},u9=function(a,b){j9();
p9()&&p9();if(y9)s9=a;else{zXa(a.id);var c=g.Ja("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new Z8(g9,a,o9(),c);a.connect(b,AXa());a.subscribe("beforeDisconnect",function(d){T6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){q9()&&(q9(),v9(null))});
a.subscribe("browserChannelAuthError",function(){var d=p9();d&&"shortLived"==d.idType&&(G8()?D8().handleBrowserChannelAuthError():B8("refreshLoungeToken called before API ready."))});
v9(a)}},vXa=function(){var a=n9();
a?(k9("Resume connection to: "+X6(a)),u9(a,0)):(f7(),$Wa(),k9("Skipping connecting because no session screen found."))},tXa=function(){var a=o9();
if(g.Se(a)){a=d7();var b=g.vy("yt-remote-session-name")||"",c=g.vy("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ia("yt.mdx.remote.channelParams_",a,void 0)}},o9=function(){return g.Ja("yt.mdx.remote.channelParams_")||{}},z9=function(a,b,c){g.E.call(this);
var d=this;this.u=a;this.J=b;this.Ub=c;this.events=new g.LC(this);this.Z=this.events.T(this.J,"onVolumeChange",function(e){BXa(d,e)});
this.D=!1;this.I=new g.uJ(64);this.i=new g.I(this.dO,500,this);this.B=new g.I(this.eO,1E3,this);this.S=new l7(this.aY,0,this);this.C={};this.X=new g.I(this.MO,1E3,this);this.K=new m7(this.seekTo,1E3,this);this.oa=g.Ka;g.H(this,this.events);this.events.T(b,"onCaptionsTrackListChanged",this.RU);this.events.T(b,"captionschanged",this.hU);this.events.T(b,"captionssettingschanged",this.kO);this.events.T(b,"videoplayerreset",this.uA);this.events.T(b,"mdxautoplaycancel",function(){d.Ub.eK()});
a=this.Ub;a.isDisposed();a.subscribe("proxyStateChange",this.VM,this);a.subscribe("remotePlayerChange",this.Iw,this);a.subscribe("remoteQueueChange",this.uA,this);a.subscribe("previousNextChange",this.SM,this);a.subscribe("nowAutoplaying",this.LM,this);a.subscribe("autoplayDismissed",this.oM,this);g.H(this,this.i);g.H(this,this.B);g.H(this,this.S);g.H(this,this.X);g.H(this,this.K);this.kO();this.uA();this.Iw()},BXa=function(a,b){if(A9(a)){a.Ub.unsubscribe("remotePlayerChange",a.Iw,a);
var c=Math.round(b.volume);b=!!b.muted;var d=S8(a.Ub);if(c!==d.volume||b!==d.muted)a.Ub.setVolume(c,b),a.X.start();a.Ub.subscribe("remotePlayerChange",a.Iw,a)}},CXa=function(a){a.Yb(0);
a.i.stop();a.Vb(new g.uJ(64))},B9=function(a,b){if(A9(a)&&!a.D){var c=null;
b&&(c={style:a.J.getSubtitlesUserSettings()},g.Ze(c,b));a.Ub.uI(a.J.getVideoData(1).videoId,c);a.C=S8(a.Ub).trackData}},C9=function(a,b){var c=a.J.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.J.getVideoData(1);a.Ub.playVideo(c.videoId,b,d,e,c.playerParams,c.Za,$Ua(c));a.Vb(new g.uJ(1))},DXa=function(a,b){if(b){var c=a.J.getOption("captions","tracklist",{fL:1});
c&&c.length?(a.J.setOption("captions","track",b),a.D=!1):(a.J.loadModule("captions"),a.D=!0)}else a.J.setOption("captions","track",{})},A9=function(a){return S8(a.Ub).videoId===a.J.getVideoData(1).videoId},D9=function(){g.W.call(this,{G:"div",
L:"ytp-mdx-popup-dialog",W:{role:"dialog"},U:[{G:"div",L:"ytp-mdx-popup-dialog-inner-content",U:[{G:"div",L:"ytp-mdx-popup-title",va:"You're signed out"},{G:"div",L:"ytp-mdx-popup-description",va:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{G:"div",L:"ytp-mdx-privacy-popup-buttons",U:[{G:"button",Ha:["ytp-button","ytp-mdx-privacy-popup-cancel"],va:"Cancel"},{G:"button",Ha:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],va:"Confirm"}]}]}]});this.i=new g.$K(this,250);this.cancelButton=this.Fa("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Fa("ytp-mdx-privacy-popup-confirm");g.H(this,this.i);this.T(this.cancelButton,"click",this.u);this.T(this.confirmButton,"click",this.B)},E9=function(a){g.W.call(this,{G:"div",
L:"ytp-remote",U:[{G:"div",L:"ytp-remote-display-status",U:[{G:"div",L:"ytp-remote-display-status-icon",U:[g.Bva()]},{G:"div",L:"ytp-remote-display-status-text",va:"{{statustext}}"}]}]});this.api=a;this.i=new g.$K(this,250);g.H(this,this.i);this.T(a,"presentingplayerstatechange",this.onStateChange);EXa(this,a.Ab())},EXa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.T(b,128)?g.CH("Error on $RECEIVER_NAME",c):b.Fc()||g.T(b,4)?g.CH("Playing on $RECEIVER_NAME",c):g.CH("Connected to $RECEIVER_NAME",c);a.Pa("statustext",b);a.i.show()}else a.i.hide()},F9=function(a,b){g.xP.call(this,"Play on",0,a,b);
this.J=a;this.Ho={};this.T(a,"onMdxReceiversChange",this.D);this.T(a,"presentingplayerstatechange",this.D);this.D()},G9=function(a){g.GM.call(this,a);
this.Qk={key:Z6(),name:"This computer"};this.ai=null;this.subscriptions=[];this.VF=this.Ub=null;this.Ho=[this.Qk];this.qn=this.Qk;this.Bd=new g.uJ(64);this.EL=0;this.wf=-1;this.Qw=!1;this.Ow=this.xt=null;if(!g.uE(this.player.V())&&!g.vE(this.player.V())){a=this.player;var b=g.jM(a);b&&(b=b.Kn())&&(b=new F9(a,b),g.H(this,b));b=new E9(a);g.H(this,b);g.tM(a,b.element,4);this.xt=new D9;g.H(this,this.xt);g.tM(a,this.xt.element,4);this.Qw=!!n9()}},H9=function(a){a.Ow&&(a.player.removeEventListener("presentingplayerstatechange",
a.Ow),a.Ow=null)},FXa=function(a,b,c){a.Bd=c;
a.player.ea("presentingplayerstatechange",new g.lH(c,b))},I9=function(a,b){if(b.key!==a.qn.key)if(b.key===a.Qk.key)t9();
else{var c;(c=!a.player.V().N("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.N("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.N("SESSION_INDEX")&&!g.N("LOGGED_IN")))||a.Qw||!a.xt);(c?0:g.LE(a.player.V())||g.OE(a.player.V()))&&GXa(a);a.qn=b;if(!a.player.V().N("disable_mdx_connection_in_mdx_module_for_music_web")||!g.vE(a.player.V())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.V().N("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.AM(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Za,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=$Ua(c))&&(a.locationInfo=c)}k9("Connecting to: "+g.zi(b));"cast-selector-receiver"==b.key?(m9(a||null),b=a||null,G8()?D8().setLaunchParams(b):B8("setLaunchParams called before ready.")):!a&&w9()&&
j9()==b.key?T6("yt-remote-connection-change",!0):(t9(),m9(a||null),a=i9().Hh(),(b=a7(a,b.key))&&u9(b,1))}}},GXa=function(a){a.player.Ab().Fc()?a.player.pauseVideo():(a.Ow=function(b){!a.Qw&&g.nH(b,8)&&(a.player.pauseVideo(),H9(a))},a.player.addEventListener("presentingplayerstatechange",a.Ow));
a.xt&&a.xt.Ad();q9()||(y9=!0)},IVa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},y7={"'":"\\'"},fVa={xZ:"atp",U$:"ska",F9:"que",w7:"mus",T$:"sus",y3:"dsp",b$:"seq",Z6:"mic",n2:"dpa",MZ:"cds",u7:"mlm",l2:"dsdtr"};U6.prototype.equals=function(a){return a?this.id==a.id:!1};
var g7,c7="",zVa=uVa("loadCastFramework")||uVa("loadCastApplicationFramework"),BVa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ua(l7,g.E);g.k=l7.prototype;g.k.EQ=function(a){this.C=arguments;this.i=!1;this.Nb?this.B=g.Ta()+this.Wf:this.Nb=g.Yh(this.D,this.Wf)};
g.k.stop=function(){this.Nb&&(g.B.clearTimeout(this.Nb),this.Nb=null);this.B=null;this.i=!1;this.C=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.i&&(this.i=!1,this.I.apply(null,this.C)))};
g.k.ya=function(){this.stop();l7.je.ya.call(this)};
g.k.FQ=function(){this.Nb&&(g.B.clearTimeout(this.Nb),this.Nb=null);this.B?(this.Nb=g.Yh(this.D,this.B-g.Ta()),this.B=null):this.u?this.i=!0:(this.i=!1,this.I.apply(null,this.C))};g.w(m7,g.E);g.k=m7.prototype;g.k.pI=function(a){this.B=arguments;this.Nb||this.u?this.i=!0:n7(this)};
g.k.stop=function(){this.Nb&&(g.B.clearTimeout(this.Nb),this.Nb=null,this.i=!1,this.B=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.i||this.Nb||(this.i=!1,n7(this))};
g.k.ya=function(){g.E.prototype.ya.call(this);this.stop()};o7.prototype.stringify=function(a){return g.B.JSON.stringify(a,void 0)};
o7.prototype.parse=function(a){return g.B.JSON.parse(a,void 0)};var q7=new g.rf;g.w(DVa,g.ue);g.k=s7.prototype;g.k.Zo=null;g.k.Km=!1;g.k.du=null;g.k.oH=null;g.k.Dt=null;g.k.Qt=null;g.k.cn=null;g.k.Ko=null;g.k.zq=null;g.k.Lf=null;g.k.BB=0;g.k.Rj=null;g.k.zB=null;g.k.Tm=null;g.k.Hu=-1;g.k.SN=!0;g.k.tp=!1;g.k.nC=0;g.k.PA=null;var GVa={},v7={};g.k=s7.prototype;g.k.setTimeout=function(a){this.u=a};
g.k.GQ=function(a){a=a.target;var b=this.PA;b&&3==g.gj(a)?b.pI():this.WO(a)};
g.k.WO=function(a){try{if(a==this.Lf)a:{var b=g.gj(this.Lf),c=this.Lf.u,d=this.Lf.getStatus();if(g.Jc&&!g.Bc(10)||g.Xg&&!g.zc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.lj(this.Lf))break a;this.tp||4!=b||7==c||(8==c||0>=d?this.i.Ej(3):this.i.Ej(2));z7(this);var e=this.Lf.getStatus();this.Hu=e;var f=g.lj(this.Lf);if(this.Km=200==e){4==b&&w7(this);if(this.D){for(a=!0;!this.tp&&this.BB<f.length;){var h=HVa(this,f);if(h==v7){4==b&&(this.Tm=4,r7(15),a=!1);break}else if(h==GVa){this.Tm=4;r7(16);a=!1;
break}else A7(this,h)}4==b&&0==f.length&&(this.Tm=1,r7(17),a=!1);this.Km=this.Km&&a;a||(w7(this),x7(this))}else A7(this,f);this.Km&&!this.tp&&(4==b?this.i.ey(this):(this.Km=!1,u7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Tm=3,r7(13)):(this.Tm=0,r7(14)),w7(this),x7(this)}}catch(l){this.Lf&&g.lj(this.Lf)}finally{}};
g.k.zW=function(a){p7((0,g.C)(this.yW,this,a),0)};
g.k.yW=function(a){this.tp||(z7(this),A7(this,a),u7(this))};
g.k.dN=function(a){p7((0,g.C)(this.xW,this,a),0)};
g.k.xW=function(a){this.tp||(w7(this),this.Km=a,this.i.ey(this),this.i.Ej(4))};
g.k.cancel=function(){this.tp=!0;w7(this)};
g.k.IW=function(){this.du=null;var a=Date.now();0<=a-this.oH?(2!=this.Qt&&this.i.Ej(3),w7(this),this.Tm=2,r7(18),x7(this)):KVa(this,this.oH-a)};
g.k.getLastError=function(){return this.Tm};g.k=NVa.prototype;g.k.oC=null;g.k.uh=null;g.k.QA=!1;g.k.fO=null;g.k.Uy=null;g.k.RE=null;g.k.pC=null;g.k.Xh=null;g.k.ul=-1;g.k.Iu=null;g.k.Ru=null;g.k.connect=function(a){this.pC=a;a=C7(this.i,null,this.pC);r7(3);this.fO=Date.now();var b=this.i.S;null!=b?(this.Iu=b[0],(this.Ru=b[1])?(this.Xh=1,OVa(this)):(this.Xh=2,E7(this))):(Q6(a,"MODE","init"),this.uh=new s7(this,void 0,void 0,void 0),this.uh.Zo=this.oC,t7(this.uh,a,!1,null,!0),this.Xh=0)};
g.k.uR=function(a){if(a)this.Xh=2,E7(this);else{r7(4);var b=this.i;b.bk=b.jn.ul;L7(b,9)}a&&this.Ej(2)};
g.k.xD=function(a){return this.i.xD(a)};
g.k.abort=function(){this.uh&&(this.uh.cancel(),this.uh=null);this.ul=-1};
g.k.sf=function(){return!1};
g.k.WM=function(a,b){this.ul=a.Hu;if(0==this.Xh)if(b){try{var c=this.u.parse(b)}catch(d){a=this.i;a.bk=this.ul;L7(a,2);return}this.Iu=c[0];this.Ru=c[1]}else a=this.i,a.bk=this.ul,L7(a,2);else if(2==this.Xh)if(this.QA)r7(7),this.RE=Date.now();else if("11111"==b){if(r7(6),this.QA=!0,this.Uy=Date.now(),a=this.Uy-this.fO,!g.Jc||g.Bc(10)||500>a)this.ul=200,this.uh.cancel(),r7(12),D7(this.i,this,!0)}else r7(8),this.Uy=this.RE=Date.now(),this.QA=!1};
g.k.ey=function(){this.ul=this.uh.Hu;if(this.uh.Km)0==this.Xh?this.Ru?(this.Xh=1,OVa(this)):(this.Xh=2,E7(this)):2==this.Xh&&((!g.Jc||g.Bc(10)?!this.QA:200>this.RE-this.Uy)?(r7(11),D7(this.i,this,!1)):(r7(12),D7(this.i,this,!0)));else{0==this.Xh?r7(9):2==this.Xh&&r7(10);var a=this.i;this.uh.getLastError();a.bk=this.ul;L7(a,2)}};
g.k.qx=function(){return this.i.qx()};
g.k.isActive=function(){return this.i.isActive()};
g.k.Ej=function(a){this.i.Ej(a)};g.k=F7.prototype;g.k.Zj=null;g.k.xv=null;g.k.Ug=null;g.k.Je=null;g.k.qC=null;g.k.Vy=null;g.k.sJ=null;g.k.gy=null;g.k.qw=0;g.k.xT=0;g.k.Mf=null;g.k.Cn=null;g.k.Il=null;g.k.Dp=null;g.k.jn=null;g.k.xB=null;g.k.Ts=-1;g.k.DL=-1;g.k.bk=-1;g.k.xs=0;g.k.Sr=0;g.k.vp=8;g.Ua(QVa,g.ue);g.Ua(RVa,g.ue);g.k=F7.prototype;g.k.connect=function(a,b,c,d,e){r7(0);this.qC=b;this.xv=c||{};d&&void 0!==e&&(this.xv.OSID=d,this.xv.OAID=e);this.I?(p7((0,g.C)(this.OJ,this,a),100),VVa(this)):this.OJ(a)};
g.k.OJ=function(a){this.jn=new NVa(this);this.jn.oC=this.Zj;this.jn.u=this.D;this.jn.connect(a)};
g.k.sf=function(){return 0==this.i};
g.k.getState=function(){return this.i};
g.k.bN=function(a){this.Cn=null;ZVa(this,a)};
g.k.aN=function(){this.Il=null;this.Je=new s7(this,this.B,"rpc",this.K);this.Je.Zo=this.Zj;this.Je.nC=0;var a=this.sJ.clone();g.il(a,"RID","rpc");g.il(a,"SID",this.B);g.il(a,"CI",this.xB?"0":"1");g.il(a,"AID",this.Ts);G7(this,a);if(!g.Jc||g.Bc(10))g.il(a,"TYPE","xmlhttp"),t7(this.Je,a,!0,this.gy,!1);else{g.il(a,"TYPE","html");var b=this.Je,c=!!this.gy;b.Qt=3;b.cn=P6(a.clone());JVa(b,c)}};
g.k.WM=function(a,b){if(0!=this.i&&(this.Je==a||this.Ug==a))if(this.bk=a.Hu,this.Ug==a&&3==this.i)if(7<this.vp){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Il){if(this.Je)if(this.Je.Dt+3E3<this.Ug.Dt)I7(this),this.Je.cancel(),this.Je=null;else break a;K7(this);r7(19)}}else this.DL=a[1],0<this.DL-this.Ts&&37500>a[2]&&this.xB&&0==this.Sr&&!this.Dp&&(this.Dp=p7((0,g.C)(this.eU,this),6E3));else L7(this,11)}else null!=b&&L7(this,11);else if(this.Je==
a&&I7(this),!g.kb(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.Ts=c[0],c=c[1],2==this.i?"c"==c[0]?(this.B=c[1],this.gy=c[2],c=c[3],null!=c?this.vp=c:this.vp=6,this.i=3,this.Mf&&this.Mf.KJ(),this.sJ=C7(this,this.qx()?this.gy:null,this.qC),$Va(this)):"stop"==c[0]&&L7(this,7):3==this.i&&("stop"==c[0]?L7(this,7):"noop"!=c[0]&&this.Mf&&this.Mf.JJ(c),this.Sr=0)};
g.k.eU=function(){null!=this.Dp&&(this.Dp=null,this.Je.cancel(),this.Je=null,K7(this),r7(20))};
g.k.ey=function(a){if(this.Je==a){I7(this);this.Je=null;var b=2}else if(this.Ug==a)this.Ug=null,b=1;else return;this.bk=a.Hu;if(0!=this.i)if(a.Km)if(1==b){b=Date.now()-a.Dt;var c=q7;c.dispatchEvent(new QVa(c,a.zq?a.zq.length:0,b,this.xs));H7(this);this.C.length=0}else $Va(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.bk)){if(d=1==b)this.Ug||this.Cn||1==this.i||2<=this.xs?d=!1:(this.Cn=p7((0,g.C)(this.bN,this,a),aWa(this,this.xs)),this.xs++,d=!0);d=!(d||2==b&&K7(this))}if(d)switch(c){case 1:L7(this,
5);break;case 4:L7(this,10);break;case 3:L7(this,6);break;case 7:L7(this,12);break;default:L7(this,2)}}};
g.k.UR=function(a){if(!g.Wb(arguments,this.i))throw Error("Unexpected channel state: "+this.i);};
g.k.JX=function(a){a?r7(2):(r7(1),bWa(this,8))};
g.k.xD=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.aj;a.S=!1;return a};
g.k.isActive=function(){return!!this.Mf&&this.Mf.isActive(this)};
g.k.Ej=function(a){var b=q7;b.dispatchEvent(new RVa(b,a))};
g.k.qx=function(){return!(!g.Jc||g.Bc(10))};
g.k=cWa.prototype;g.k.KJ=function(){};
g.k.JJ=function(){};
g.k.IJ=function(){};
g.k.kD=function(){};
g.k.vK=function(){return{}};
g.k.isActive=function(){return!0};g.k=dWa.prototype;g.k.isEmpty=function(){return 0===this.i.length&&0===this.u.length};
g.k.clear=function(){this.i=[];this.u=[]};
g.k.contains=function(a){return g.Wb(this.i,a)||g.Wb(this.u,a)};
g.k.remove=function(a){var b=this.i;var c=(0,g.$Oa)(b,a);0<=c?(g.Zb(b,c),b=!0):b=!1;return b||g.$b(this.u,a)};
g.k.xi=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Ua(M7,g.E);g.k=M7.prototype;g.k.qW=function(){this.Wf=Math.min(3E5,2*this.Wf);this.B();this.u&&this.start()};
g.k.start=function(){var a=this.Wf+15E3*Math.random();g.Hr(this.i,a);this.u=Date.now()+a};
g.k.stop=function(){this.i.stop();this.u=0};
g.k.isActive=function(){return this.i.isActive()};
g.k.reset=function(){this.i.stop();this.Wf=5E3};g.Ua(N7,cWa);g.k=N7.prototype;g.k.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.k.eg=function(a){return this.B.eg(a)};
g.k.ea=function(a,b){return this.B.ea.apply(this.B,arguments)};
g.k.dispose=function(){this.Z||(this.Z=!0,g.re(this.B),gWa(this),g.re(this.u),this.u=null,this.oa=function(){return""})};
g.k.isDisposed=function(){return this.Z};
g.k.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.X="";this.u.stop();this.D=a||null;this.C=b||0;a=this.xa+"/test";b=this.xa+"/bind";var d=new F7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Aa),e=this.i;e&&(e.Mf=null);d.Mf=this;this.i=d;O7(this);if(this.i){d=g.N("ID_TOKEN");var f=this.i.Zj||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.Zj=f}e?(3!=e.getState()&&0==XVa(e)||e.getState(),this.i.connect(a,b,this.I,e.B,e.Ts)):c?this.i.connect(a,
b,this.I,c.sessionId,c.arrayId):this.i.connect(a,b,this.I)}};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.Ze(a,b);this.u.isActive()||2==(this.i?this.i.getState():0)?this.K.push(a):P7(this)&&(O7(this),WVa(this.i,a))};
g.k.KJ=function(){this.u.reset();this.D=null;this.C=0;if(this.K.length){var a=this.K;this.K=[];for(var b=0,c=a.length;b<c;++b)WVa(this.i,a[b])}this.ea("handlerOpened")};
g.k.IJ=function(a){var b=2==a&&401==this.i.bk;4==a||b||this.u.start();this.ea("handlerError",a,b)};
g.k.kD=function(a){if(!this.u.isActive())this.ea("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.K.push(d)}};
g.k.vK=function(){var a={v:2};this.X&&(a.gsessionid=this.X);0!=this.C&&(a.ui=""+this.C);0!=this.S&&(a.ui=""+this.S);this.D&&g.Ze(a,this.D);return a};
g.k.JJ=function(a){"S"==a[0]?this.X=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),UVa(this.i)):this.ea("handlerMessage",new eWa(a[0],a[1]))};
g.k.bB=function(a){(this.I.loungeIdToken=a)||this.u.stop();if(this.Ba&&this.i){var b=this.i.Zj||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.Zj=b}};
g.k.nX=function(){this.u.isActive();0==XVa(this.i)&&this.connect(this.D,this.C)};Q7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Q7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
Q7.prototype.D=function(a){a(Error("request timed out"))};var nWa=Date.now(),T7=null,W7=Array(50),V7=-1,X7=!1;g.Ua(Y7,g.Q);Y7.prototype.Hh=function(){return this.screens};
Y7.prototype.contains=function(a){return!!$6(this.screens,a)};
Y7.prototype.get=function(a){return a?a7(this.screens,a):null};
Y7.prototype.info=function(a){U7(this.I,a)};g.w(Z7,g.Q);g.k=Z7.prototype;g.k.start=function(){!this.i&&isNaN(this.Nb)&&this.nN()};
g.k.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.Nb)||(g.hu(this.Nb),this.Nb=NaN)};
g.k.ya=function(){this.stop();g.Q.prototype.ya.call(this)};
g.k.nN=function(){this.Nb=NaN;this.i=g.lu(R7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.K},timeout:5E3,onSuccess:(0,g.C)(this.IQ,this),onError:(0,g.C)(this.HQ,this),onTimeout:(0,g.C)(this.JQ,this)})};
g.k.IQ=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.C;a.name=this.I;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ea("pairingComplete",new V6(a),b)};
g.k.HQ=function(a){this.i=null;a.status&&404==a.status?this.u>=HXa.length?this.ea("pairingFailed",Error("DIAL polling timed out")):(a=HXa[this.u],this.Nb=g.Qt((0,g.C)(this.nN,this),a),this.u++):this.ea("pairingFailed",Error("Server error "+a.status))};
g.k.JQ=function(){this.i=null;this.ea("pairingFailed",Error("Server not responding"))};
var HXa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ua(a8,Y7);g.k=a8.prototype;g.k.start=function(){$7(this)&&this.ea("screenChange");!g.vy("yt-remote-lounge-token-expiration")&&rWa(this);g.hu(this.i);this.i=g.Qt((0,g.C)(this.start,this),1E4)};
g.k.add=function(a,b){$7(this);oWa(this,a);b8(this,!1);this.ea("screenChange");b(a);a.token||rWa(this)};
g.k.remove=function(a,b){var c=$7(this);qWa(this,a)&&(b8(this,!1),c=!0);b(a);c&&this.ea("screenChange")};
g.k.vB=function(a,b,c,d){var e=$7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,b8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ea("screenChange")};
g.k.ya=function(){g.hu(this.i);a8.je.ya.call(this)};
g.k.sS=function(a){$7(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}b8(this,!b);b&&U7(this.I,"Missed "+b+" lounge tokens.")};
g.k.rS=function(a){U7(this.I,"Requesting lounge tokens failed: "+a)};g.w(d8,g.Q);g.k=d8.prototype;g.k.start=function(){var a=parseInt(g.vy("yt-remote-fast-check-period")||"0",10);(this.C=g.Ta()-144E5<a?0:a)?g8(this):(this.C=g.Ta()+3E5,g.uy("yt-remote-fast-check-period",this.C),this.hG())};
g.k.isEmpty=function(){return g.Se(this.i)};
g.k.update=function(){c8("Updating availability on schedule.");var a=this.I(),b=g.Ee(this.i,function(c,d){return c&&!!a7(a,d)},this);
f8(this,b)};
g.k.ya=function(){g.hu(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.Q.prototype.ya.call(this)};
g.k.hG=function(){g.hu(this.B);this.B=NaN;this.u&&this.u.abort();var a=tWa(this);if(R6(a)){var b=R7(this.D,"/pairing/get_screen_availability");this.u=S7(this.D,b,{lounge_token:g.Ne(a).join(",")},(0,g.C)(this.WV,this,a),(0,g.C)(this.UV,this))}else f8(this,{}),g8(this)};
g.k.WV=function(a,b){this.u=null;var c=g.Ne(tWa(this));if(g.qc(c,g.Ne(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;f8(this,c);g8(this)}else this.ke("Changing Screen set during request."),this.hG()};
g.k.UV=function(a){this.ke("Screen availability failed: "+a);this.u=null;g8(this)};
g.k.ke=function(a){U7("OnlineScreenService",a)};g.Ua(h8,Y7);g.k=h8.prototype;g.k.start=function(){this.u.start();this.i.start();this.screens.length&&(this.ea("screenChange"),this.i.isEmpty()||this.ea("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.i.update()};
g.k.vB=function(a,b,c,d){this.u.contains(a)?this.u.vB(a,b,c,d):(a="Updating name of unknown screen: "+a.name,U7(this.I,a),d(Error(a)))};
g.k.Hh=function(a){return a?this.screens:g.bc(this.screens,g.Bp(this.B,function(b){return!this.contains(b)},this))};
g.k.qI=function(){return g.Bp(this.Hh(!0),function(a){return!!this.i.i[a.id]},this)};
g.k.rI=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new Z7(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.re(l);e(i8(h,m),n)});
l.subscribe("pairingFailed",function(m){g.re(l);f(m)});
l.start();return(0,g.C)(l.stop,l)};
g.k.KQ=function(a,b,c,d){g.lu(R7(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.C)(function(e,f){e=new V6(f.screen||{});if(!e.name||xWa(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);xWa(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(i8(this,e))},this),
onError:(0,g.C)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.C)(function(){d(Error("pairing request timed out."))},this)})};
g.k.ya=function(){g.re(this.u);g.re(this.i);h8.je.ya.call(this)};
g.k.BS=function(){zWa(this);this.ea("screenChange");this.i.update()};
h8.prototype.dispose=h8.prototype.dispose;g.Ua(k8,g.Q);g.k=k8.prototype;g.k.getScreen=function(){return this.C};
g.k.zg=function(a){this.isDisposed()||(a&&(m8(this,""+a),this.ea("sessionFailed")),this.C=null,this.ea("sessionScreen",null))};
g.k.info=function(a){U7(this.Ba,a)};
g.k.sI=function(){return null};
g.k.vG=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.C)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.C)(function(){m8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.ya=function(){this.vG("");k8.je.ya.call(this)};g.w(n8,k8);g.k=n8.prototype;g.k.uG=function(a){if(this.u){if(this.u==a)return;m8(this,"Overriding cast session with new session object");IWa(this);this.xa=!1;this.X="unknown";this.u.removeUpdateListener(this.oa);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa)}this.u=a;this.u.addUpdateListener(this.oa);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa);EWa(this,"getMdxSessionStatus")};
g.k.Us=function(a){this.info("launchWithParams no-op for Cast: "+g.zi(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.C)(function(){this.zg()},this),(0,g.C)(function(){this.zg(Error("Failed to stop receiver app."))},this)):this.zg(Error("Stopping cast device without session."))};
g.k.vG=function(){};
g.k.ya=function(){this.info("disposeInternal");IWa(this);this.u&&(this.u.removeUpdateListener(this.oa),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa));this.u=null;k8.prototype.ya.call(this)};
g.k.MW=function(a,b){if(!this.isDisposed())if(b)if(b=S6(b),g.Oa(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.zi(b)),a){case "mdxSessionStatus":CWa(this,b);break;case "loungeToken":FWa(this,b);break;default:m8(this,"Unknown youtube message: "+a)}else m8(this,"Unable to parse message.");else m8(this,"No data in message.")};
g.k.IK=function(a,b,c,d){g.hu(this.S);this.S=0;wWa(this.B,this.i.label,a,this.i.friendlyName,(0,g.C)(function(e){e?b(e):0<=d?(m8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.S=g.Qt((0,g.C)(this.IK,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.sI=function(){return this.u};
g.k.LQ=function(a){this.isDisposed()||a||(m8(this,"Cast session died."),this.zg())};g.w(q8,k8);g.k=q8.prototype;g.k.uG=function(a){this.u=a;this.u.addUpdateListener(this.Ja)};
g.k.Us=function(a){this.Ka=a;this.Z()};
g.k.stop=function(){PWa(this);this.u?this.u.stop((0,g.C)(this.zg,this,null),(0,g.C)(this.zg,this,"Failed to stop DIAL device.")):this.zg()};
g.k.ya=function(){PWa(this);this.u&&this.u.removeUpdateListener(this.Ja);this.u=null;k8.prototype.ya.call(this)};
g.k.MQ=function(a){this.isDisposed()||a||(m8(this,"DIAL session died."),this.D(),this.D=g.Ka,this.zg())};g.w(u8,k8);u8.prototype.stop=function(){this.zg()};
u8.prototype.uG=function(){};
u8.prototype.Us=function(){g.hu(this.u);this.u=NaN;var a=a7(this.B.Hh(),this.i.label);a?l8(this,a):this.zg(Error("No such screen"))};
u8.prototype.ya=function(){g.hu(this.u);this.u=NaN;k8.prototype.ya.call(this)};g.w(v8,g.Q);g.k=v8.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.S,[chrome.cast.Capability.AUDIO_OUT]);this.X||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.C)(this.FV,this);c=new chrome.cast.ApiConfig(c,(0,g.C)(this.XM,this),e,d,a);c.customDialLaunchCallback=(0,g.C)(this.zU,this);
chrome.cast.initialize(c,(0,g.C)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),kWa(),this.u.subscribe("onlineScreenChange",(0,g.C)(this.tI,this)),this.B=SWa(this),chrome.cast.setCustomReceivers(this.B,g.Ka,(0,g.C)(function(f){this.ke("Failed to set initial custom receivers: "+g.zi(f))},this)),this.ea("yt-remote-cast2-availability-change",x8(this)),b(!0))},this),(0,g.C)(function(f){this.ke("Failed to initialize API: "+g.zi(f));
b(!1)},this))};
g.k.sX=function(a,b){w8("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)w8("Unsetting old screen status: "+this.i.i.friendlyName),y8(this,null)}if(a&&b){if(!this.i){c=a7(this.u.Hh(),a);if(!c){w8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){w8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=QWa(this,c);a||(w8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,g.Ka,(0,g.C)(function(d){this.ke("Failed to set initial custom receivers: "+g.zi(d))},this)));
w8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);y8(this,new u8(this.u,a),!0)}this.i.vG(b)}else w8("setConnectedScreenStatus: no screen.")};
g.k.tX=function(a){this.isDisposed()?this.ke("Setting connection data on disposed cast v2"):this.i?this.i.Us(a):this.ke("Setting connection data without a session")};
g.k.OQ=function(){this.isDisposed()?this.ke("Stopping session on disposed cast v2"):this.i?(this.i.stop(),y8(this,null)):w8("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.C)(this.XM,this),(0,g.C)(this.ZV,this))};
g.k.ya=function(){this.u.unsubscribe("onlineScreenChange",(0,g.C)(this.tI,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=hWa,b=g.Ja("yt.mdx.remote.debug.handlers_");g.$b(b||[],a);g.re(this.i);g.Q.prototype.ya.call(this)};
g.k.ke=function(a){U7("Controller",a)};
g.k.ZM=function(a,b){this.i==a&&(b||y8(this,null),this.ea("yt-remote-cast2-session-change",b))};
g.k.BV=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),w8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)w8("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{w8("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.ea("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:y8(this,
new u8(this.u,a));break;case chrome.cast.ReceiverType.DIAL:y8(this,new q8(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:y8(this,new n8(this.u,a,this.config_));break;default:this.ke("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.ke("Stopping receiver w/o session: "+a.friendlyName)}else this.ke("onReceiverAction_ called without receiver.")};
g.k.zU=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.ke("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.ke("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return w8("Reselecting dial screen."),
this.ea("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.ke('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);y8(this,new q8(this.u,b,this.C,this.config_))}b=this.i;b.S=a;b.S.appState==chrome.cast.DialAppState.RUNNING?(a=b.S.extraData||{},c=a.screenId||null,r8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=MWa(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.S.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.At(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=NWa(b,c)):a=NWa(b,c)):a=t8(b);return a};
g.k.XM=function(a){var b=this;if(!this.isDisposed()&&!this.I){w8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(c.receiverType==chrome.cast.ReceiverType.CAST)w8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),y8(this,new n8(this.u,c,this.config_),!0);else{this.ke("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.i.i,e=a7(this.u.Hh(),
d.label);e&&W6(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(w8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.re(this.i),this.i=new n8(this.u,c,this.config_),this.i.subscribe("sessionScreen",(0,g.C)(this.ZM,this,this.i)),this.i.subscribe("sessionFailed",function(){return RWa(b,b.i)}),this.i.Us(null));
this.i.uG(a)}}};
g.k.NQ=function(){return this.i?this.i.sI():null};
g.k.ZV=function(a){this.isDisposed()||(this.ke("Failed to estabilish a session: "+g.zi(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&y8(this,null),this.ea("yt-remote-cast2-session-failed"))};
g.k.FV=function(a){w8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=x8(this);this.K=a==chrome.cast.ReceiverAvailability.AVAILABLE;x8(this)!=b&&this.ea("yt-remote-cast2-availability-change",x8(this))}};
g.k.tI=function(){this.isDisposed()||(this.B=SWa(this),w8("Updating custom receivers: "+g.zi(this.B)),chrome.cast.setCustomReceivers(this.B,g.Ka,(0,g.C)(function(){this.ke("Failed to set custom receivers.")},this)),this.ea("yt-remote-cast2-availability-change",x8(this)))};
v8.prototype.setLaunchParams=v8.prototype.tX;v8.prototype.setConnectedScreenStatus=v8.prototype.sX;v8.prototype.stopSession=v8.prototype.OQ;v8.prototype.getCastSession=v8.prototype.NQ;v8.prototype.requestSession=v8.prototype.requestSession;v8.prototype.init=v8.prototype.init;v8.prototype.dispose=v8.prototype.dispose;var E8=[];g.k=J8.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";K8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.Jk=a.hasPrevious,this.hasNext=a.hasNext,this.K=a.playerTime,this.I=a.playerTimeAt,this.C=a.seekableStart,this.i=a.seekableEnd,this.D=a.duration,this.S=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.k.Fc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Nj=function(a){this.D=isNaN(a)?0:a};
g.k.getDuration=function(){return this.u?this.D+L8(this):this.D};
g.k.clone=function(){return new J8(P8(this))};g.w(R8,g.Q);g.k=R8.prototype;g.k.getState=function(){return this.B};
g.k.play=function(){T8(this)?(this.i?this.i.play(null,g.Ka,Y8(this,"play")):X8(this,"play"),W8(this,1,N8(S8(this))),this.ea("remotePlayerChange")):U8(this,this.play)};
g.k.pause=function(){T8(this)?(this.i?this.i.pause(null,g.Ka,Y8(this,"pause")):X8(this,"pause"),W8(this,2,N8(S8(this))),this.ea("remotePlayerChange")):U8(this,this.pause)};
g.k.seekTo=function(a){if(T8(this)){if(this.i){var b=S8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Fc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ka,Y8(this,"seekTo",{newTime:a}))}else X8(this,"seekTo",{newTime:a});W8(this,3,a);this.ea("remotePlayerChange")}else U8(this,g.Ra(this.seekTo,a))};
g.k.stop=function(){if(T8(this)){this.i?this.i.stop(null,g.Ka,Y8(this,"stopVideo")):X8(this,"stopVideo");var a=S8(this);a.index=-1;a.videoId="";K8(a);V8(this,a);this.ea("remotePlayerChange")}else U8(this,this.stop)};
g.k.setVolume=function(a,b){if(T8(this)){var c=S8(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.C)(function(){U7("CP","set receiver volume: "+d)},this),(0,g.C)(function(){this.ke("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.C)(function(){U7("CP","set receiver muted: "+b)},this),(0,g.C)(function(){this.ke("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);X8(this,"setVolume",e)}c.muted=b;c.volume=a;V8(this,c)}else U8(this,g.Ra(this.setVolume,a,b))};
g.k.uI=function(a,b){if(T8(this)){var c=S8(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.zi(b.style),g.Ze(a,c.trackData));X8(this,"setSubtitlesTrack",a);V8(this,c)}else U8(this,g.Ra(this.uI,a,b))};
g.k.setAudioTrack=function(a,b){T8(this)?(b=b.getLanguageInfo().getId(),X8(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=S8(this),a.audioTrackId=b,V8(this,a)):U8(this,g.Ra(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=S8(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);O8(l,a,c||0);void 0!==b&&(M8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.zi(h));X8(this,"setPlaylist",m);d||V8(this,l)};
g.k.IA=function(a,b){if(T8(this)){if(a&&b){var c=S8(this);O8(c,a,b);V8(this,c)}X8(this,"previous")}else U8(this,g.Ra(this.IA,a,b))};
g.k.nextVideo=function(a,b){if(T8(this)){if(a&&b){var c=S8(this);O8(c,a,b);V8(this,c)}X8(this,"next")}else U8(this,g.Ra(this.nextVideo,a,b))};
g.k.Vr=function(){if(T8(this)){X8(this,"clearPlaylist");var a=S8(this);a.reset();V8(this,a);this.ea("remotePlayerChange")}else U8(this,this.Vr)};
g.k.eK=function(){T8(this)?X8(this,"dismissAutoplay"):U8(this,this.eK)};
g.k.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ea("proxyStateChange",a,this.B)}g.Q.prototype.dispose.call(this)};
g.k.ya=function(){dXa(this);this.C=null;this.D.clear();Q8(this,null);g.Q.prototype.ya.call(this)};
g.k.wG=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ea("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.i.length&&(b.i=b.u,b.i.reverse(),b.u=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.k.zV=function(a,b){this.ea(a,b)};
g.k.kU=function(a){if(!a)this.Dw(null),Q8(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=S8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)U7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,V8(this,b)}};
g.k.Dw=function(a){U7("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.S);if(this.i=a)this.i.addUpdateListener(this.S),eXa(this),this.ea("remotePlayerChange")};
g.k.jU=function(a){a?(eXa(this),this.ea("remotePlayerChange")):this.Dw(null)};
g.k.SG=function(){X8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.rU=function(){var a=aXa();a&&Q8(this,a)};
g.k.ke=function(a){U7("CP",a)};g.w(Z8,g.Q);g.k=Z8.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ba&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.pc.listId=c);this.pc.videoId=d;this.pc.index=l||0;this.pc.state=3;M8(this.pc,
n);this.C="UNSUPPORTED";c=this.Ba?"setInitialState":"setPlaylist";$8("Connecting with "+c+" and params: "+g.zi(m));this.i.connect({method:c,params:g.zi(m)},a,nVa())}else $8("Connecting without params"),this.i.connect({},a,nVa());hXa(this)};
g.k.bB=function(a){this.i.bB(a)};
g.k.dispose=function(){this.isDisposed()||(g.Ia("yt.mdx.remote.remoteClient_",null,void 0),this.ea("beforeDispose"),a9(this,3));g.Q.prototype.dispose.call(this)};
g.k.ya=function(){b9(this);d9(this);c9(this);g.hu(this.K);this.K=NaN;g.hu(this.S);this.S=NaN;this.B=null;g.$u(this.X);this.X.length=0;this.i.dispose();g.Q.prototype.ya.call(this);this.C=this.I=this.u=this.pc=this.i=null};
g.k.nS=function(){this.qs(2)};
g.k.oU=function(){$8("Channel opened");this.xa&&(this.xa=!1,c9(this),this.oa=g.Qt((0,g.C)(function(){$8("Timing out waiting for a screen.");this.qs(1)},this),15E3));
rVa(fWa(this.i),this.Ka)};
g.k.lU=function(){$8("Channel closed");isNaN(this.D)?f7(!0):f7();this.dispose()};
g.k.mU=function(a,b){f7();isNaN(this.Nv())?(b&&"shortLived"==this.Aa&&this.ea("browserChannelAuthError",a),$8("Channel error: "+a+" without reconnection"),this.dispose()):(this.xa=!0,$8("Channel error: "+a+" with reconnection in "+this.Nv()+" ms"),a9(this,2))};
g.k.oL=function(a){if(!this.u||0===this.u.length)return!1;for(var b=g.q(this.u),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.nU=function(a){a.params?$8("Received: action="+a.action+", params="+g.zi(a.params)):$8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=S6(a.params.devices);this.u=g.nn(a,function(c){return new U6(c)});
a=!!g.Tb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
kXa(this,a);a=this.oL("mlm");this.ea("multiStateLoopEnabled",a);break;case "loungeScreenDisconnected":g.ac(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
kXa(this,!1);break;case "remoteConnected":var b=new U6(S6(a.params.device));g.Tb(this.u,function(c){return c.equals(b)})||aVa(this.u,b);
break;case "remoteDisconnected":b=new U6(S6(a.params.device));g.ac(this.u,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":mXa(this,a,"QUEUE_MODIFIED");break;case "nowPlaying":oXa(this,a);break;case "onStateChange":nXa(this,a);break;case "onAdStateChange":pXa(this,a);break;case "onVolumeChanged":qXa(this,a);break;case "onSubtitlesTrackChanged":lXa(this,a);break;case "nowAutoplaying":rXa(this,a);break;case "autoplayDismissed":this.ea("autoplayDismissed");break;case "autoplayUpNext":this.I=a.params.videoId||null;this.ea("autoplayUpNext",this.I);break;case "onAutoplayModeChanged":this.C=
a.params.autoplayMode;this.ea("autoplayModeChange",this.C);"DISABLED"==this.C&&this.ea("autoplayDismissed");break;case "onHasPreviousNextChanged":sXa(this,a);break;case "requestAssistedSignIn":this.ea("assistedSignInRequested",a.params.authCode);break;case "onLoopModeChanged":this.ea("loopModeChange",a.params.loopMode);break;default:$8("Unrecognized action: "+a.action)}};
g.k.gX=function(){if(this.B){var a=this.B;this.B=null;this.pc.videoId!=a&&e9(this,"getNowPlaying")}};
g.k.kS=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Nv())?P7(this.i)&&isNaN(this.D)&&(a=1):a=2);return a};
g.k.qs=function(a){$8("Disconnecting with "+a);g.Ia("yt.mdx.remote.remoteClient_",null,void 0);b9(this);this.ea("beforeDisconnect",a);1==a&&f7();gWa(this.i,a);this.dispose()};
g.k.iS=function(){var a=this.pc;this.B&&(a=this.pc.clone(),O8(a,this.B,a.index));return P8(a)};
g.k.uX=function(a){var b=new J8(a);b.videoId&&b.videoId!=this.pc.videoId&&(this.B=b.videoId,g.hu(this.K),this.K=g.Qt((0,g.C)(this.gX,this),5E3));var c=[];this.pc.listId==b.listId&&this.pc.videoId==b.videoId&&this.pc.index==b.index||c.push("remoteQueueChange");this.pc.playerState==b.playerState&&this.pc.volume==b.volume&&this.pc.muted==b.muted&&N8(this.pc)==N8(b)&&g.zi(this.pc.trackData)==g.zi(b.trackData)||c.push("remotePlayerChange");this.pc.reset(a);g.sc(c,function(d){this.ea(d)},this)};
g.k.HK=function(){var a=this.i.I.id,b=g.Tb(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Nv=function(){var a=this.i;return a.u.isActive()?a.u.u-Date.now():NaN};
g.k.fS=function(){return this.C||"UNSUPPORTED"};
g.k.gS=function(){return this.I||""};
g.k.PQ=function(){if(!isNaN(this.Nv())){var a=this.i.u;g.Ir(a.i);a.start()}};
g.k.rX=function(a,b){e9(this,a,b);jXa(this)};
g.k.vI=function(){var a=g.wu("SID","")||"",b=g.wu("SAPISID","")||"",c=g.wu("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Ec(g.eb(a),2);b=g.Ec(g.eb(b),2);c=g.Ec(g.eb(c),2);return g.Ec(g.eb(a+","+b+","+c),2)};
Z8.prototype.subscribe=Z8.prototype.subscribe;Z8.prototype.unsubscribeByKey=Z8.prototype.eg;Z8.prototype.getProxyState=Z8.prototype.kS;Z8.prototype.disconnect=Z8.prototype.qs;Z8.prototype.getPlayerContextData=Z8.prototype.iS;Z8.prototype.setPlayerContextData=Z8.prototype.uX;Z8.prototype.getOtherConnectedRemoteId=Z8.prototype.HK;Z8.prototype.getReconnectTimeout=Z8.prototype.Nv;Z8.prototype.getAutoplayMode=Z8.prototype.fS;Z8.prototype.getAutoplayVideoId=Z8.prototype.gS;Z8.prototype.reconnect=Z8.prototype.PQ;
Z8.prototype.sendMessage=Z8.prototype.rX;Z8.prototype.getXsrfToken=Z8.prototype.vI;Z8.prototype.isCapabilitySupportedOnConnectedDevices=Z8.prototype.oL;g.w(f9,Y7);g.k=f9.prototype;g.k.Hh=function(a){return this.Se.$_gs(a)};
g.k.contains=function(a){return!!this.Se.$_c(a)};
g.k.get=function(a){return this.Se.$_g(a)};
g.k.start=function(){this.Se.$_st()};
g.k.add=function(a,b,c){this.Se.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Se.$_r(a,b,c)};
g.k.vB=function(a,b,c,d){this.Se.$_un(a,b,c,d)};
g.k.ya=function(){for(var a=0,b=this.i.length;a<b;++a)this.Se.$_ubk(this.i[a]);this.i.length=0;this.Se=null;Y7.prototype.ya.call(this)};
g.k.QQ=function(){this.ea("screenChange")};
g.k.gV=function(){this.ea("onlineScreenChange")};
h8.prototype.$_st=h8.prototype.start;h8.prototype.$_gspc=h8.prototype.KQ;h8.prototype.$_gsppc=h8.prototype.rI;h8.prototype.$_c=h8.prototype.contains;h8.prototype.$_g=h8.prototype.get;h8.prototype.$_a=h8.prototype.add;h8.prototype.$_un=h8.prototype.vB;h8.prototype.$_r=h8.prototype.remove;h8.prototype.$_gs=h8.prototype.Hh;h8.prototype.$_gos=h8.prototype.qI;h8.prototype.$_s=h8.prototype.subscribe;h8.prototype.$_ubk=h8.prototype.eg;var s9=null,y9=!1,g9=null,h9=null,x9=null,l9=[];g.w(z9,g.E);g.k=z9.prototype;g.k.ya=function(){g.E.prototype.ya.call(this);this.i.stop();this.B.stop();this.S.stop();this.oa();var a=this.Ub;a.unsubscribe("proxyStateChange",this.VM,this);a.unsubscribe("remotePlayerChange",this.Iw,this);a.unsubscribe("remoteQueueChange",this.uA,this);a.unsubscribe("previousNextChange",this.SM,this);a.unsubscribe("nowAutoplaying",this.LM,this);a.unsubscribe("autoplayDismissed",this.oM,this);this.Ub=this.u=null};
g.k.vj=function(a){var b=g.Ba.apply(1,arguments);if(2!=this.Ub.B)if(A9(this)){var c=a;if(!S8(this.Ub).isAdPlaying()||"control_seek"!==c)switch(c){case "control_toggle_play_pause":S8(this.Ub).Fc()?this.Ub.pause():this.Ub.play();break;case "control_play":this.Ub.play();break;case "control_pause":this.Ub.pause();break;case "control_seek":this.K.pI(b[0],b[1]);break;case "control_subtitles_set_track":B9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.J.getCurrentTime();C9(this,0===b?void 0:b);break;case "control_seek":C9(this,b[0]);break;case "control_subtitles_set_track":B9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.hU=function(a){this.S.EQ(a)};
g.k.aY=function(a){this.vj("control_subtitles_set_track",g.Se(a)?null:a)};
g.k.kO=function(){var a=this.J.getOption("captions","track");g.Se(a)||B9(this,a)};
g.k.Yb=function(a){this.u.Yb(a,this.J.getVideoData().lengthSeconds)};
g.k.RU=function(){g.Se(this.C)||DXa(this,this.C);this.D=!1};
g.k.VM=function(a,b){this.B.stop();2===b&&this.eO()};
g.k.Iw=function(){if(A9(this)){this.i.stop();var a=S8(this.Ub);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.wf=1;break;case 1082:case 1083:this.u.wf=0;break;default:this.u.wf=-1}switch(a.playerState){case 1081:case 1:this.Vb(new g.uJ(8));this.dO();break;case 1085:case 3:this.Vb(new g.uJ(9));break;case 1083:case 0:this.Vb(new g.uJ(2));this.K.stop();this.Yb(this.J.getVideoData().lengthSeconds);break;case 1084:this.Vb(new g.uJ(4));break;case 2:this.Vb(new g.uJ(4));this.Yb(N8(a));
break;case -1:this.Vb(new g.uJ(64));break;case -1E3:this.Vb(new g.uJ(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=S8(this.Ub).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,DXa(this,a));a=S8(this.Ub);-1===a.volume||Math.round(this.J.getVolume())===a.volume&&this.J.isMuted()===a.muted||this.X.isActive()||this.MO()}else CXa(this)};
g.k.SM=function(){this.J.ea("mdxpreviousnextchange")};
g.k.uA=function(){A9(this)||CXa(this)};
g.k.LM=function(a){isNaN(a)||this.J.ea("mdxnowautoplaying",a)};
g.k.oM=function(){this.J.ea("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){A9(this)&&this.Ub.setAudioTrack(this.J.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===S8(this.Ub).playerState?C9(this,a):b&&this.Ub.seekTo(a)};
g.k.MO=function(){var a=this;if(A9(this)){var b=S8(this.Ub);this.events.tc(this.Z);b.muted?this.J.mute():this.J.unMute();this.J.setVolume(b.volume);this.Z=this.events.T(this.J,"onVolumeChange",function(c){BXa(a,c)})}};
g.k.dO=function(){this.i.stop();if(!this.Ub.isDisposed()){var a=S8(this.Ub);a.Fc()&&this.Vb(new g.uJ(8));this.Yb(N8(a));this.i.start()}};
g.k.eO=function(){this.B.stop();this.i.stop();var a=this.Ub.C.getReconnectTimeout();2==this.Ub.B&&!isNaN(a)&&this.B.start()};
g.k.Vb=function(a){this.B.stop();var b=this.I;if(!g.zJ(b,a)){var c=g.T(a,2);c!==g.T(this.I,2)&&this.J.It(c);this.I=a;FXa(this.u,b,a)}};g.w(D9,g.W);D9.prototype.Ad=function(){this.i.show()};
D9.prototype.Fb=function(){this.i.hide()};
D9.prototype.u=function(){T6("mdx-privacy-popup-cancel");this.Fb()};
D9.prototype.B=function(){T6("mdx-privacy-popup-confirm");this.Fb()};g.w(E9,g.W);E9.prototype.onStateChange=function(a){EXa(this,a.state)};g.w(F9,g.xP);F9.prototype.D=function(){var a=this.J.getOption("remote","receivers");a&&1<a.length&&!this.J.getOption("remote","quickCast")?(this.Ho=g.tc(a,this.i,this),g.yP(this,g.nn(a,this.i)),a=this.J.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.Wh(a),this.enable(!0)):this.enable(!1)};
F9.prototype.i=function(a){return a.key};
F9.prototype.pj=function(a){return"cast-selector-receiver"===a?"Cast...":this.Ho[a].name};
F9.prototype.Af=function(a){g.xP.prototype.Af.call(this,a);this.J.setOption("remote","currentReceiver",this.Ho[a]);this.Bb.Fb()};g.w(G9,g.GM);g.k=G9.prototype;
g.k.create=function(){var a=this.player.V(),b=g.sE(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.N("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.N("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.N("enable_cast_short_lived_lounge_token")};wXa(b,a);this.subscriptions.push(g.wv("yt-remote-before-disconnect",this.gU,this));this.subscriptions.push(g.wv("yt-remote-connection-change",this.GV,this));this.subscriptions.push(g.wv("yt-remote-receiver-availability-change",this.UM,
this));this.subscriptions.push(g.wv("yt-remote-auto-connect",this.EV,this));this.subscriptions.push(g.wv("yt-remote-receiver-resumed",this.CV,this));this.subscriptions.push(g.wv("mdx-privacy-popup-confirm",this.VW,this));this.subscriptions.push(g.wv("mdx-privacy-popup-cancel",this.UW,this));this.UM()};
g.k.load=function(){this.player.cancelPlayback();g.GM.prototype.load.call(this);this.ai=new z9(this,this.player,this.Ub);var a=(a=AXa())?a.currentTime:0;var b=w9()?new R8(q9(),void 0):null;0==a&&b&&(a=N8(S8(b)));0!==a&&this.Yb(a);FXa(this,this.Bd,this.Bd);this.player.Yk(6)};
g.k.unload=function(){this.player.ea("mdxautoplaycanceled");this.qn=this.Qk;(0,g.se)(this.ai,this.Ub);this.Ub=this.ai=null;g.GM.prototype.unload.call(this);this.player.Yk(5);H9(this)};
g.k.ya=function(){g.xv(this.subscriptions);g.GM.prototype.ya.call(this)};
g.k.Rk=function(a){var b=g.Ba.apply(1,arguments);this.loaded&&this.ai.vj.apply(this.ai,[a].concat(g.ma(b)))};
g.k.getAdState=function(){return this.wf};
g.k.Jk=function(){return this.Ub?S8(this.Ub).Jk:!1};
g.k.hasNext=function(){return this.Ub?S8(this.Ub).hasNext:!1};
g.k.Yb=function(a,b){this.EL=a||0;this.player.ea("progresssync",a,b);this.player.Oa("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.EL};
g.k.getProgressState=function(){var a=S8(this.Ub),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.V().N("web_player_mdx_allow_seeking_change_killswitch")?this.player.tf():!a.isAdPlaying()&&this.player.tf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+L8(a):a.B,isAtLiveHead:1>=(a.u?a.i+L8(a):a.i)-this.getCurrentTime(),loaded:a.S,seekableEnd:a.u?a.i+L8(a):a.i,seekableStart:0<
a.C?a.C+L8(a):a.C}};
g.k.nextVideo=function(){this.Ub&&this.Ub.nextVideo()};
g.k.IA=function(){this.Ub&&this.Ub.IA()};
g.k.gU=function(a){1===a&&(this.VF=this.Ub?S8(this.Ub):null)};
g.k.GV=function(){var a=w9()?new R8(q9(),void 0):null;if(a){var b=this.qn;this.loaded&&this.unload();this.Ub=a;this.VF=null;b.key!==this.Qk.key&&(this.qn=b,this.load())}else(0,g.re)(this.Ub),this.Ub=null,this.loaded&&(this.unload(),(a=this.VF)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,N8(a)));this.player.ea("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.UM=function(){var a=[this.Qk],b=a.concat,c=xXa();F8()&&g.vy("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Ho=b.call(a,c);a=r9()||this.Qk;I9(this,a);this.player.Oa("onMdxReceiversChange")};
g.k.EV=function(){var a=r9();I9(this,a)};
g.k.CV=function(){this.qn=r9()};
g.k.VW=function(){this.Qw=!0;H9(this);y9=!1;s9&&u9(s9,1);s9=null};
g.k.UW=function(){this.Qw=!1;H9(this);I9(this,this.Qk);this.qn=this.Qk;y9=!1;s9=null;this.player.playVideo()};
g.k.kf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Ho;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?H8():I9(this,b)),this.loaded?this.qn:this.Qk;case "quickCast":return 2===this.Ho.length&&"cast-selector-receiver"===this.Ho[1].key?(b&&H8(),!0):!1}};
g.k.SG=function(){this.Ub.SG()};
g.k.Qi=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.FM("remote",G9);})(_yt_player);


}
/*
     FILE ARCHIVED ON 04:25:36 Nov 21, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:28:13 Jun 11, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.54
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.013
  esindex: 0.009
  cdx.remote: 56.461
  LoadShardBlock: 261.47 (3)
  PetaboxLoader3.resolve: 174.932 (3)
  PetaboxLoader3.datanode: 119.724 (4)
  load_resource: 47.059
*/