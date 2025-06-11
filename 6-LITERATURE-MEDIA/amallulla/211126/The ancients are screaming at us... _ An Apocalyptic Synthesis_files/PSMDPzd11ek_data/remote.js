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

(function(g){var window=this;'use strict';var XRa=function(a,b){return g.hc(a,b)},YRa=function(a,b){b=b instanceof g.qf?b:g.wf(b,/^data:image\//i.test(b));
a.src=g.rf(b)},O6=function(a){g.Wj(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Pa()).toString(36));
return a},P6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.bk(a.u,b,c)},ZRa=function(a){if(a instanceof g.ho)return a;
if("function"==typeof a.Lg)return a.Lg(!1);if(g.Ka(a)){var b=0,c=new g.ho;c.qj=function(){for(;;){if(b>=a.length)throw g.Xq;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");},$Ra=function(a,b,c){if(g.Ka(a))try{g.Qb(a,b,c)}catch(d){if(d!==g.Xq)throw d;
}else{a=ZRa(a);try{for(;;)b.call(c,a.qj(),void 0,a)}catch(d){if(d!==g.Xq)throw d;}}},aSa=function(a,b){var c=[];
$Ra(b,function(d){try{var e=g.xr.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.wr(e)&&c.push(d)},a);
return c},bSa=function(a,b){aSa(a,b).forEach(function(c){g.xr.prototype.remove.call(this,c)},a)},cSa=function(a){if(a.ma){if(a.ma.locationOverrideToken)return{locationOverrideToken:a.ma.locationOverrideToken};
if(null!=a.ma.latitudeE7&&null!=a.ma.longitudeE7)return{latitudeE7:a.ma.latitudeE7,longitudeE7:a.ma.longitudeE7}}return null},dSa=function(a,b){g.vb(a,b)||a.push(b)},Q6=function(a){var b=0,c;
for(c in a)b++;return b},eSa=function(a){try{return g.D.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},R6=function(a){if(g.D.JSON)try{return g.D.JSON.parse(a)}catch(b){}return eSa(a)},fSa=function(a,b,c,d){var e=new g.Oj(null,void 0);
a&&g.Pj(e,a);b&&g.Qj(e,b);c&&g.Rj(e,c);d&&(e.K=d);return e},S6=function(a,b){g.fv[a]=!0;
var c=g.dv();c&&c.publish.apply(c,arguments);g.fv[a]=!1},T6=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Yq;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",gSa(this,a.capabilities||""),hSa(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},gSa=function(a,b){a.capabilities.clear();
g.Go(b.split(","),g.Oa(XRa,iSa)).forEach(function(c){a.capabilities.add(c)})},hSa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},U6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},V6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},jSa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},kSa=function(a){return new U6(a)},lSa=function(a){return Array.isArray(a)?g.pm(a,kSa):[]},W6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},X6=function(a){return Array.isArray(a)?"["+g.pm(a,W6).join(",")+"]":"null"},Y6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},mSa=function(a){return g.pm(a,function(b){return{key:b.id,
name:b.name}})},Z6=function(a,b){return g.sb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},$6=function(a,b){return g.sb(a,function(c){return V6(c,b)})},nSa=function(){var a=(0,g.Jz)();
a&&bSa(a,a.i.Lg(!0))},a7=function(){var a=g.Mz("yt-remote-connected-devices")||[];
g.Mb(a);return a},oSa=function(a){if(g.wb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.pm(a,function(d,e){return 0==e?d:d.substring(c.length)})},pSa=function(a){g.Lz("yt-remote-connected-devices",a,86400)},c7=function(){if(b7)return b7;
var a=g.Mz("yt-remote-device-id");a||(a=Y6(),g.Lz("yt-remote-device-id",a,31536E3));for(var b=a7(),c=1,d=a;g.vb(b,d);)c++,d=a+"#"+c;return b7=d},d7=function(){var a=a7(),b=c7();
g.vb(a,b);g.Oz()&&g.Pb(a,b);a=oSa(a);if(g.wb(a))try{g.Pt("remote_sid")}catch(c){}else try{g.Nt("remote_sid",a.join(","),-1)}catch(c){}},qSa=function(){return g.Mz("yt-remote-session-browser-channel")},rSa=function(){return g.Mz("yt-remote-local-screens")||[]},sSa=function(){g.Lz("yt-remote-lounge-token-expiration",!0,86400)},tSa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.pm(rSa(),function(d){return d.loungeToken}),c=g.pm(a,function(d){return d.loungeToken});
g.qm(c,function(d){return!g.vb(b,d)})&&sSa();
g.Lz("yt-remote-local-screens",a,31536E3)},uSa=function(a,b){g.Lz("yt-remote-session-browser-channel",a);
g.Lz("yt-remote-session-screen-id",b);a=a7();b=c7();g.vb(a,b)||a.push(b);pSa(a);d7()},e7=function(a){a||(g.Nz("yt-remote-session-screen-id"),g.Nz("yt-remote-session-video-id"));
d7();a=a7();g.Ab(a,c7());pSa(a)},vSa=function(){if(!f7){var a=g.Hr();
a&&(f7=new g.rr(a))}},wSa=function(){vSa();
return f7?!!f7.get("yt-remote-use-staging-server"):!1},g7=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},xSa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},ySa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},h7=function(a){a.length?zSa(a.shift(),function(){h7(a)}):i7()},ASa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},zSa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Wk(d,g.fr(a));(document.head||document.documentElement).appendChild(d)},BSa=function(){var a=g7(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20211008175926/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20211008175926/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},i7=function(){var a=ySa();
a&&a(!1,"No cast extension found")},j7=function(){if(CSa){var a=2,b=ySa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;zSa("//web.archive.org/web/20211008175926/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",i7,c)}},DSa=function(){j7();
var a=BSa();a.push("//web.archive.org/web/20211008175926/https://www.gstatic.com/eureka/clank/cast_sender.js");h7(a)},FSa=function(){j7();
var a=BSa();a.push.apply(a,g.v(ESa.map(ASa)));a.push("//web.archive.org/web/20211008175926/https://www.gstatic.com/eureka/clank/cast_sender.js");h7(a)},k7=function(a,b,c){g.I.call(this);
this.J=null!=c?(0,g.F)(a,c):a;this.Uf=b;this.D=(0,g.F)(this.gQ,this);this.i=!1;this.u=0;this.B=this.Lb=null;this.C=[]},l7=function(a,b,c){g.I.call(this);
this.C=null!=c?a.bind(c):a;this.Uf=b;this.B=null;this.i=!1;this.u=0;this.Lb=null},m7=function(a){a.Lb=g.xh(function(){a.Lb=null;
a.i&&!a.u&&(a.i=!1,m7(a))},a.Uf);
var b=a.B;a.B=null;a.C.apply(null,b)},n7=function(){},o7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.D.setTimeout(function(){a()},b)},q7=function(a){p7.dispatchEvent(new GSa(p7,a))},GSa=function(a,b){g.ve.call(this,"statevent",a);
this.stat=b},r7=function(a,b,c,d){this.i=a;
this.B=b;this.S=c;this.K=d||1;this.u=45E3;this.C=new g.ck(this);this.J=new g.wh;this.J.setInterval(250)},ISa=function(a,b,c){a.nt=1;
a.Mm=O6(b.clone());a.lq=c;a.D=!0;HSa(a,null)},s7=function(a,b,c,d,e){a.nt=1;
a.Mm=O6(b.clone());a.lq=null;a.D=c;e&&(a.AN=!1);HSa(a,d)},HSa=function(a,b){a.Ps=Date.now();
t7(a);a.jo=a.Mm.clone();P6(a.jo,"t",a.K);a.mB=0;a.Mf=a.i.bD(a.i.bx()?b:null);0<a.bC&&(a.zA=new l7((0,g.F)(a.CO,a,a.Mf),a.bC));a.C.Qa(a.Mf,"readystatechange",a.hQ);b=a.No?g.pc(a.No):{};a.lq?(a.jB="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Mf.send(a.jo,a.jB,a.lq,b)):(a.jB="GET",a.AN&&!g.zg&&(b.Connection="close"),a.Mf.send(a.jo,a.jB,null,b));a.i.rj(1)},KSa=function(a,b){var c=a.mB,d=b.indexOf("\n",c);
if(-1==d)return u7;c=Number(b.substring(c,d));if(isNaN(c))return JSa;d+=1;if(d+c>b.length)return u7;b=b.substr(d,c);a.mB=d+c;return b},MSa=function(a,b){a.Ps=Date.now();
t7(a);var c=b?window.location.hostname:"";a.jo=a.Mm.clone();g.Wj(a.jo,"DOMAIN",c);g.Wj(a.jo,"t",a.K);try{a.Hj=new ActiveXObject("htmlfile")}catch(m){v7(a);a.Gm=7;q7(22);w7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in x7)f=x7[f];else if(f in LSa)f=x7[f]=LSa[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
x7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Of(g.gf("b/12014412"),d);a.Hj.open();a.Hj.write(g.Kf(c));a.Hj.close();a.Hj.parentWindow.m=(0,g.F)(a.cW,a);a.Hj.parentWindow.d=(0,g.F)(a.KM,a,!0);a.Hj.parentWindow.rpcClose=(0,g.F)(a.KM,a,!1);c=a.Hj.createElement("DIV");a.Hj.parentWindow.document.body.appendChild(c);d=g.vf(a.jo.toString());d=g.fg(g.rf(d));d=g.Of(g.gf("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Qf(c,d);a.i.rj(1)},t7=function(a){a.QG=Date.now()+
a.u;
NSa(a,a.u)},NSa=function(a,b){if(null!=a.Dt)throw Error("WatchDog timer not null");
a.Dt=o7((0,g.F)(a.jW,a),b)},y7=function(a){a.Dt&&(g.D.clearTimeout(a.Dt),a.Dt=null)},w7=function(a){a.i.rf()||a.gp||a.i.Nx(a)},v7=function(a){y7(a);
g.se(a.zA);a.zA=null;a.J.stop();g.ek(a.C);if(a.Mf){var b=a.Mf;a.Mf=null;b.abort();b.dispose()}a.Hj&&(a.Hj=null)},z7=function(a,b){try{a.i.DM(a,b),a.i.rj(4)}catch(c){}},PSa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;OSa(a,b,function(h){h?c(!0):g.D.setTimeout(function(){PSa(a,b,c,d,f)},f)})}},OSa=function(a,b,c){var d=new Image;
d.onload=function(){try{A7(d),c(!0)}catch(e){}};
d.onerror=function(){try{A7(d),c(!1)}catch(e){}};
d.onabort=function(){try{A7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{A7(d),c(!1)}catch(e){}};
g.D.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
YRa(d,a)},A7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},QSa=function(a){this.i=a;
this.u=new n7},RSa=function(a){var b=B7(a.i,a.Hu,"/mail/images/cleardot.gif");
O6(b);PSa(b.toString(),5E3,(0,g.F)(a.YQ,a),3,2E3);a.rj(1)},D7=function(a){var b=a.i.Y;
if(null!=b)q7(5),b?(q7(11),C7(a.i,a,!1)):(q7(12),C7(a.i,a,!0));else if(a.lh=new r7(a,void 0,void 0,void 0),a.lh.No=a.cC,b=a.i,b=B7(b,b.bx()?a.au:null,a.dC),q7(5),!g.Rc||g.Kc(10))P6(b,"TYPE","xmlhttp"),s7(a.lh,b,!1,a.au,!1);else{P6(b,"TYPE","html");var c=a.lh;a=!!a.au;c.nt=3;c.Mm=O6(b.clone());MSa(c,a)}},E7=function(a,b,c){this.i=1;
this.u=[];this.C=[];this.D=new n7;this.S=a||null;this.Y=null!=b?b:null;this.J=c||!1},SSa=function(a,b){this.i=a;
this.map=b;this.context=null},TSa=function(a,b,c,d){g.ve.call(this,"timingevent",a);
this.size=b;this.Sw=d},USa=function(a){g.ve.call(this,"serverreachability",a)},XSa=function(a){VSa(a);
if(3==a.i){var b=a.ew++,c=a.Hy.clone();g.Wj(c,"SID",a.B);g.Wj(c,"RID",b);g.Wj(c,"TYPE","terminate");F7(a,c);b=new r7(a,a.B,b,void 0);b.nt=2;b.Mm=O6(c.clone());YRa(new Image,b.Mm.toString());b.Ps=Date.now();t7(b)}WSa(a)},YSa=function(a){a.yR(1,0);
a.Hy=B7(a,null,a.eC);G7(a)},VSa=function(a){a.Qm&&(a.Qm.abort(),a.Qm=null);
a.Ge&&(a.Ge.cancel(),a.Ge=null);a.yl&&(g.D.clearTimeout(a.yl),a.yl=null);H7(a);a.Vg&&(a.Vg.cancel(),a.Vg=null);a.cn&&(g.D.clearTimeout(a.cn),a.cn=null)},ZSa=function(a,b){if(0==a.i)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new SSa(a.dT++,b));2!=a.i&&3!=a.i||G7(a)},$Sa=function(a){var b=0;
a.Ge&&b++;a.Vg&&b++;return b},G7=function(a){a.Vg||a.cn||(a.cn=o7((0,g.F)(a.IM,a),0),a.Kr=0)},bTa=function(a,b){if(1==a.i){if(!b){a.ew=Math.floor(1E5*Math.random());
b=a.ew++;var c=new r7(a,"",b,void 0);c.No=a.Tj;var d=I7(a),e=a.Hy.clone();g.Wj(e,"RID",b);g.Wj(e,"CVER","1");F7(a,e);ISa(c,e,d);a.Vg=c;a.i=2}}else 3==a.i&&(b?aTa(a,b):0==a.u.length||a.Vg||aTa(a))},aTa=function(a,b){if(b)if(6<a.hp){a.u=a.C.concat(a.u);
a.C.length=0;var c=a.ew-1;b=I7(a)}else c=b.S,b=b.lq;else c=a.ew++,b=I7(a);var d=a.Hy.clone();g.Wj(d,"SID",a.B);g.Wj(d,"RID",c);g.Wj(d,"AID",a.us);F7(a,d);c=new r7(a,a.B,c,a.Kr+1);c.No=a.Tj;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Vg=c;ISa(c,d,b)},F7=function(a,b){a.Nf&&(a=a.Nf.YJ())&&g.Xb(a,function(c,d){g.Wj(b,d,c)})},I7=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.hp&&0<b){var d=a.u[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Oq:e.Oq},f++){e.Oq=a.u[f].i;var h=a.u[f].map;e.Oq=6>=a.hp?f:e.Oq-d;try{g.Xb(h,function(l){return function(m,n){c.push("req"+l.Oq+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Oq+"_type="+encodeURIComponent("_badmap"))}}a.C=a.C.concat(a.u.splice(0,b));
return c.join("&")},cTa=function(a){a.Ge||a.yl||(a.K=1,a.yl=o7((0,g.F)(a.HM,a),0),a.rr=0)},J7=function(a){if(a.Ge||a.yl||3<=a.rr)return!1;
a.K++;a.yl=o7((0,g.F)(a.HM,a),dTa(a,a.rr));a.rr++;return!0},C7=function(a,b,c){a.hB=c;
a.Uj=b.bl;a.J||YSa(a)},H7=function(a){null!=a.qp&&(g.D.clearTimeout(a.qp),a.qp=null)},dTa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},K7=function(a,b){if(2==b||9==b){var c=null;
a.Nf&&(c=null);var d=(0,g.F)(a.kX,a);c||(c=new g.Oj("//web.archive.org/web/20211008175926/https://www.google.com/images/cleardot.gif"),O6(c));OSa(c.toString(),1E4,d)}else q7(2);eTa(a,b)},eTa=function(a,b){a.i=0;
a.Nf&&a.Nf.mJ(b);WSa(a);VSa(a)},WSa=function(a){a.i=0;
a.Uj=-1;if(a.Nf)if(0==a.C.length&&0==a.u.length)a.Nf.OC();else{g.Db(a.C);var b=g.Db(a.u);a.C.length=0;a.u.length=0;a.Nf.OC(b)}},B7=function(a,b,c){var d=g.Xj(c);
if(""!=d.i)b&&g.Qj(d,b+"."+d.i),g.Rj(d,d.B);else{var e=window.location;d=fSa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.fv&&g.Xb(a.fv,function(f,h){g.Wj(d,h,f)});
g.Wj(d,"VER",a.hp);F7(a,d);return d},fTa=function(){},gTa=function(){this.i=[];
this.u=[]},hTa=function(a,b){this.action=a;
this.params=b||{}},L7=function(a,b){g.I.call(this);
this.i=new g.M(this.TV,0,this);g.J(this,this.i);this.Uf=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.F)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.F)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},M7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.ya=a;this.J=b;this.B=new g.qr;this.u=new L7(this.OW,this);this.i=null;this.Z=!1;this.D=null;this.Y="";this.S=this.C=0;this.K=[];this.Aa=c;this.ma=d;this.Ea=e},iTa=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.hB,sessionId:a.i.B,arrayId:a.i.us}},jTa=function(a,b){a.S=b||0;
a.u.stop();N7(a);a.i&&(3==a.i.getState()&&bTa(a.i),XSa(a.i));a.S=0},O7=function(a){return!!a.i&&3==a.i.getState()},N7=function(a){if(a.i){var b=a.ma(),c=a.i.Tj||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.Tj=c}},P7=function(a){this.port=this.domain="";
this.i="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.gi(4,a))||"";b&&(this.port=":"+b);this.domain=g.hi(a)||"";a=g.Vb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.ob(a,"10.0")&&(this.u=!1))},Q7=function(a,b){var c=a.i;
a.u&&(c="https://"+a.domain+a.port+a.i);return g.si(c+b,{})},R7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Oa(a.C,d,!0),onError:g.Oa(a.B,e),onTimeout:g.Oa(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Ct(b,a)},nTa=function(){var a=kTa;
lTa();S7.push(a);mTa()},T7=function(a,b){lTa();
var c=oTa(a,String(b));g.wb(S7)?pTa(c):(mTa(),g.Qb(S7,function(d){d(c)}))},lTa=function(){S7||(S7=g.Ga("yt.mdx.remote.debug.handlers_")||[],g.Fa("yt.mdx.remote.debug.handlers_",S7,void 0))},pTa=function(a){var b=(U7+1)%50;
U7=b;V7[b]=a;W7||(W7=49==b)},mTa=function(){var a=S7;
if(V7[0]){var b=W7?U7:-1;do{b=(b+1)%50;var c=V7[b];g.Qb(a,function(d){d(c)})}while(b!=U7);
V7=Array(50);U7=-1;W7=!1}},oTa=function(a,b){var c=(Date.now()-qTa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},X7=function(a){g.R.call(this);
this.J=a;this.screens=[]},rTa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},sTa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Go(a.screens,function(f){return!!Z6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=rTa(a,b[d])||c;return c},tTa=function(a,b){var c=a.screens.length;
a.screens=g.Go(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},Y7=function(a,b,c,d,e){g.R.call(this);
this.B=a;this.K=b;this.C=c;this.J=d;this.D=e;this.u=0;this.i=null;this.Lb=NaN},$7=function(a){X7.call(this,"LocalScreenService");
this.u=a;this.i=NaN;Z7(this);this.info("Initializing with "+X6(this.screens))},uTa=function(a){if(a.screens.length){var b=g.pm(a.screens,function(d){return d.id}),c=Q7(a.u,"/pairing/get_lounge_token_batch");
R7(a.u,c,{screen_ids:b.join(",")},(0,g.F)(a.UR,a),(0,g.F)(a.TR,a))}},Z7=function(a){if(g.zs("deprecate_pair_servlet_enabled"))return sTa(a,[]);
var b=lSa(rSa());b=g.Go(b,function(c){return!c.uuid});
return sTa(a,b)},a8=function(a,b){tSa(g.pm(a.screens,jSa));
b&&sSa()},c8=function(a,b){g.R.call(this);
this.J=b;b=(b=g.Mz("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.J(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.vb(b,h)}this.i=c;this.D=a;this.B=this.C=NaN;this.u=null;b8("Initialized with "+g.Yh(this.i))},d8=function(a,b,c){var d=Q7(a.D,"/pairing/get_screen_availability");
R7(a.D,d,{lounge_token:b.token},(0,g.F)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.F)(function(){c(!1)},a))},e8=function(a,b){a:if(Q6(b)!=Q6(a.i))var c=!1;
else{c=g.fc(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(b8("Updated online screens: "+g.Yh(a.i)),a.i=b,a.ea("screenChange"));vTa(a)},f8=function(a){isNaN(a.B)||g.wt(a.B);
a.B=g.ut((0,g.F)(a.IF,a),0<a.C&&a.C<g.Pa()?2E4:1E4)},b8=function(a){T7("OnlineScreenService",a)},wTa=function(a){var b={};
g.Qb(a.J(),function(c){c.token?b[c.token]=c.id:this.le("Requesting availability of screen w/o lounge token.")});
return b},vTa=function(a){a=g.fc(g.Yb(a.i,function(b){return b}));
g.Mb(a);a.length?g.Lz("yt-remote-online-screen-ids",a.join(","),60):g.Nz("yt-remote-online-screen-ids")},g8=function(a,b){b=void 0===b?!1:b;
X7.call(this,"ScreenService");this.C=a;this.K=b;this.i=this.u=null;this.B=[];this.D={};xTa(this)},zTa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.Fh(),l=c?$6(h,c):null;c&&(a.K||l)||(l=$6(h,b));if(l){l.uuid=b;var m=h8(a,l);d8(a.i,m,function(n){e(n?m:null)})}else c?yTa(a,c,(0,g.F)(function(n){var p=h8(this,new U6({name:d,
screenId:c,loungeToken:n,dialId:b||""}));d8(this.i,p,function(q){e(q?p:null)})},a),f):e(null)},ATa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},BTa=function(a,b,c){d8(a.i,b,c)},yTa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Ct(Q7(a.C,"/pairing/get_lounge_token_batch"),e)},CTa=function(a){a.screens=a.u.Fh();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+X6(a.screens))},xTa=function(a){i8(a);
a.u=new $7(a.C);a.u.subscribe("screenChange",(0,g.F)(a.dS,a));CTa(a);a.K||(a.B=lSa(g.Mz("yt-remote-automatic-screen-cache")||[]));i8(a);a.info("Initializing automatic screens: "+X6(a.B));a.i=new c8(a.C,(0,g.F)(a.Fh,a,!0));a.i.subscribe("screenChange",(0,g.F)(function(){this.ea("onlineScreenChange")},a))},h8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=$6(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.K||DTa(a));i8(a);a.D[b.uuid]=b.id;g.Lz("yt-remote-device-id-map",a.D,31536E3);return b},DTa=function(a){a=g.Go(a.B,function(b){return"shortLived"!=b.idType});
g.Lz("yt-remote-automatic-screen-cache",g.pm(a,jSa))},i8=function(a){a.D=g.Mz("yt-remote-device-id-map")||{}},j8=function(a,b,c){g.R.call(this);
this.Ea=c;this.B=a;this.i=b;this.C=null},k8=function(a,b){a.C=b;
a.ea("sessionScreen",a.C)},ETa=function(a,b){a.C&&(a.C.token=b,h8(a.B,a.C));
a.ea("sessionScreen",a.C)},l8=function(a,b){T7(a.Ea,b)},m8=function(a,b,c){j8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.ma=(0,g.F)(this.mQ,this);this.Aa=(0,g.F)(this.nW,this);this.Z=g.ut(function(){FTa(d,null)},12E4);
this.K=this.D=this.J=this.S=0;this.ya=!1;this.Y="unknown"},n8=function(a,b){g.wt(a.K);
a.K=0;0==b?GTa(a):a.K=g.ut(function(){GTa(a)},b)},GTa=function(a){HTa(a,"getLoungeToken");
g.wt(a.D);a.D=g.ut(function(){ITa(a,null)},3E4)},HTa=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.Yh(void 0));
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,g.Ha,(0,g.F)(function(){l8(this,"Failed to send message: "+b+".")},a)):l8(a,"Sending yt message without session: "+g.Yh(c))},o8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.mK(b,function(c){k8(a,c)},function(){return a.zg()},5)):a.zg(Error("Waiting for session status timed out."))},KTa=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+JSON.stringify(b));
var d=new U6(b);JTa(a,d,function(e){e?(a.ya=!0,h8(a.B,d),k8(a,d),a.Y="unknown",n8(a,c)):(g.Ds(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.zg())},5)},FTa=function(a,b){g.wt(a.Z);
a.Z=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?KTa(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.Ds(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),o8(a,b.screenId))):(g.Ds(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),o8(a,b.screenId)):o8(a,b.screenId):a.zg(Error("Waiting for session status timed out."))},ITa=function(a,b){g.wt(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.Y=c,n8(a,3E4)):(ETa(a,b.loungeToken),a.ya=!1,a.Y="unknown",n8(a,b.loungeTokenRefreshIntervalMs))},JTa=function(a,b,c,d){g.wt(a.J);
a.J=0;BTa(a.B,b,function(e){e||0>d?c(e):a.J=g.ut(function(){JTa(a,b,c,d-1)},300)})},LTa=function(a){g.wt(a.S);
a.S=0;g.wt(a.J);a.J=0;g.wt(a.Z);a.Z=0;g.wt(a.D);a.D=0;g.wt(a.K);a.K=0},p8=function(a,b,c,d){j8.call(this,a,b,"DialSession");
this.config_=d;this.u=this.S=null;this.Aa="";this.La=c;this.Ja=null;this.Z=g.Ha;this.Y=NaN;this.Ka=(0,g.F)(this.nQ,this);this.D=g.Ha;this.K=this.J=0;this.ma=!1;this.ya="unknown"},q8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},MTa=function(a){a.D=a.B.SH(a.Aa,a.i.label,a.i.friendlyName,q8(a),function(b,c){a.D=g.Ha;
a.ma=!0;k8(a,b);"shortLived"==b.idType&&0<c&&r8(a,c)},function(b){a.D=g.Ha;
a.zg(b)})},NTa=function(a){var b={};
b.pairingCode=a.Aa;b.theme=a.La;wSa()&&(b.env_useStageMdx=1);return g.qi(b)},s8=function(a){return new Promise(function(b){a.Aa=Y6();
if(a.Ja){var c=new chrome.cast.DialLaunchResponse(!0,NTa(a));b(c);MTa(a)}else a.Z=function(){g.wt(a.Y);a.Z=function(){};
a.Y=NaN;var d=new chrome.cast.DialLaunchResponse(!0,NTa(a));b(d);MTa(a)},a.Y=g.ut(function(){a.Z()},100)})},PTa=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new U6(b);return(new Promise(function(e){OTa(a,d,function(f){f?(a.ma=!0,h8(a.B,d),k8(a,d),r8(a,c)):g.Ds(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):s8(a)})},QTa=function(a,b){var c=a.S.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){zTa(a.B,c,b,d,function(f){f&&f.token&&k8(a,f);e(f)},function(f){l8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):s8(a)})},OTa=function(a,b,c,d){g.wt(a.J);
a.J=0;BTa(a.B,b,function(e){e||0>d?c(e):a.J=g.ut(function(){OTa(a,b,c,d-1)},300)})},r8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
q8(a)&&(g.wt(a.K),a.K=0,0==b?RTa(a):a.K=g.ut(function(){RTa(a)},b))},RTa=function(a){q8(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.ya=c,r8(a,3E4)):(a.ma=!1,a.ya="unknown",ETa(a,b.loungeToken),r8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.ya="noLoungeTokenResponse";r8(a,3E4)})},STa=function(a){g.wt(a.J);
a.J=0;g.wt(a.K);a.K=0;a.D();a.D=function(){};
g.wt(a.Y)},t8=function(a,b){j8.call(this,a,b,"ManualSession");
this.u=g.ut((0,g.F)(this.ws,this,null),150)},u8=function(a,b){g.R.call(this);
this.config_=b;this.u=a;this.S=b.appId||"233637DE";this.C=b.theme||"cl";this.Y=b.disableCastApi||!1;this.J=b.forceMirroring||!1;this.i=null;this.K=!1;this.B=[];this.D=(0,g.F)(this.fV,this)},TTa=function(a,b){return b?g.sb(a.B,function(c){return V6(b,c.label)},a):null},v8=function(a){T7("Controller",a)},kTa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},w8=function(a){return a.K||!!a.B.length||!!a.i},x8=function(a,b,c){b!=a.i&&(g.se(a.i),(a.i=b)?(c?a.ea("yt-remote-cast2-receiver-resumed",
b.i):a.ea("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.F)(a.GM,a,b)),b.subscribe("sessionFailed",function(){return UTa(a,b)}),b.getScreen()?a.ea("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.ws(null)):a.ea("yt-remote-cast2-session-change",null))},UTa=function(a,b){a.i==b&&a.ea("yt-remote-cast2-session-failed")},VTa=function(a){var b=a.u.RH(),c=a.i&&a.i.i;
a=g.pm(b,function(d){c&&V6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=TTa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},$Ta=function(a,b,c,d){d.disableCastApi?y8("Cannot initialize because disabled by Mdx config."):WTa()?XTa(b,d)&&(z8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?YTa(a,c):(window.__onGCastApiAvailable=function(e,f){e?YTa(a,c):(A8("Failed to load cast API: "+f),B8(!1),z8(!1),g.Nz("yt-remote-cast-available"),g.Nz("yt-remote-cast-receiver"),
ZTa(),c(!1))},d.loadCastApiSetupScript?g.Pz("https://web.archive.org/web/20211008175926/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=g7()&&DSa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?i7():89<=g7()?FSa():(j7(),h7(ESa.map(ASa))))):y8("Cannot initialize because not running Chrome")},ZTa=function(){y8("dispose");
var a=C8();a&&a.dispose();g.Fa("yt.mdx.remote.cloudview.instance_",null,void 0);aUa(!1);g.iv(D8);D8.length=0},E8=function(){return!!g.Mz("yt-remote-cast-installed")},bUa=function(){var a=g.Mz("yt-remote-cast-receiver");
return a?a.friendlyName:null},cUa=function(){y8("clearCurrentReceiver");
g.Nz("yt-remote-cast-receiver")},dUa=function(){return E8()?C8()?C8().getCastSession():(A8("getCastSelector: Cast is not initialized."),null):(A8("getCastSelector: Cast API is not installed!"),null)},G8=function(){E8()?C8()?F8()?(y8("Requesting cast selector."),C8().requestSession()):(y8("Wait for cast API to be ready to request the session."),D8.push(g.hv("yt-remote-cast2-api-ready",G8))):A8("requestCastSelector: Cast is not initialized."):A8("requestCastSelector: Cast API is not installed!")},H8=
function(a,b){F8()?C8().setConnectedScreenStatus(a,b):A8("setConnectedScreenStatus called before ready.")},WTa=function(){var a=0<=g.Vb.search(/ (CrMo|Chrome|CriOS)\//);
return g.Vi||a},eUa=function(a,b){C8().init(a,b)},XTa=function(a,b){var c=!1;
C8()||(a=new u8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.Lz("yt-remote-cast-available",d);S6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){y8("onReceiverSelected: "+d.friendlyName);
g.Lz("yt-remote-cast-receiver",d);S6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){y8("onReceiverResumed: "+d.friendlyName);
g.Lz("yt-remote-cast-receiver",d);S6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){y8("onSessionChange: "+W6(d));
d||g.Nz("yt-remote-cast-receiver");S6("yt-remote-cast2-session-change",d)}),g.Fa("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
y8("cloudview.createSingleton_: "+c);return c},C8=function(){return g.Ga("yt.mdx.remote.cloudview.instance_")},YTa=function(a,b){B8(!0);
z8(!1);eUa(a,function(c){c?(aUa(!0),g.jv("yt-remote-cast2-api-ready")):(A8("Failed to initialize cast API."),B8(!1),g.Nz("yt-remote-cast-available"),g.Nz("yt-remote-cast-receiver"),ZTa());b(c)})},y8=function(a){T7("cloudview",a)},A8=function(a){T7("cloudview",a)},B8=function(a){y8("setCastInstalled_ "+a);
g.Lz("yt-remote-cast-installed",a)},F8=function(){return!!g.Ga("yt.mdx.remote.cloudview.apiReady_")},aUa=function(a){y8("setApiReady_ "+a);
g.Fa("yt.mdx.remote.cloudview.apiReady_",a,void 0)},z8=function(a){g.Fa("yt.mdx.remote.cloudview.initializing_",a,void 0)},I8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.J=this.K=0;this.trackData=null;this.hasNext=this.yk=!1;this.S=this.D=this.i=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},J8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.yk=!1;a.hasNext=!1;a.K=0;a.J=g.Pa();a.C=0;a.i=0;a.D=0;a.S=0;a.B=NaN;a.u=!1},K8=function(a){return a.Ec()?(g.Pa()-a.J)/1E3:0},L8=function(a,b){a.K=b;
a.J=g.Pa()},M8=function(a){switch(a.playerState){case 1:case 1081:return(g.Pa()-a.J)/1E3+a.K;
case -1E3:return 0}return a.K},N8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&J8(a)},O8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.qc(a.trackData);b.hasPrevious=a.yk;b.hasNext=a.hasNext;b.playerTime=a.K;b.playerTimeAt=a.J;b.seekableStart=a.C;b.seekableEnd=a.i;b.duration=a.D;b.loadedTime=a.S;b.liveIngestionTime=a.B;return b},Q8=function(a,b){g.R.call(this);
this.B=0;this.C=a;this.J=[];this.D=new gTa;this.u=this.i=null;this.Y=(0,g.F)(this.LT,this);this.K=(0,g.F)(this.ow,this);this.S=(0,g.F)(this.KT,this);this.Z=(0,g.F)(this.TT,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.YF,this),fUa(this))):c=3;0!=c&&(b?this.YF(c):g.ut((0,g.F)(function(){this.YF(c)},this),0));
(a=dUa())&&P8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Z)},R8=function(a){return new I8(a.C.getPlayerContextData())},fUa=function(a){g.Qb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.J.push(this.C.subscribe(b,g.Oa(this.dV,b),this))},a)},gUa=function(a){g.Qb(a.J,function(b){this.C.unsubscribeByKey(b)},a);
a.J.length=0},S8=function(a){return 1==a.getState()},T8=function(a,b){var c=a.D;
50>c.i.length+c.u.length&&a.D.u.push(b)},V8=function(a,b,c){var d=R8(a);
L8(d,c);-1E3!=d.playerState&&(d.playerState=b);U8(a,d)},W8=function(a,b,c){a.C.sendMessage(b,c)},U8=function(a,b){gUa(a);
a.C.setPlayerContextData(O8(b));fUa(a)},P8=function(a,b){a.u&&(a.u.removeUpdateListener(a.Y),a.u.removeMediaListener(a.K),a.ow(null));
a.u=b;a.u&&(T7("CP","Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.Y),a.u.addMediaListener(a.K),a.u.media.length&&a.ow(a.u.media[0]))},hUa=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=R8(a);b.contentId!=d.videoId&&T7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;L8(d,a.i.getEstimatedTime());U8(a,d)}else T7("CP","No cast media video. Ignoring state update.")},X8=function(a,b,c){return(0,g.F)(function(d){this.le("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.le("Retrying "+b+" using MDx browser channel."),W8(this,b,c))},a)},Y8=function(a,b,c,d){d=void 0===d?!1:d;
g.R.call(this);this.D=NaN;this.ya=!1;this.S=this.K=this.Z=this.ma=NaN;this.Y=[];this.C=this.J=this.B=this.hc=this.i=null;this.Ka=a;this.Ea=d;this.Y.push(g.Au(window,"beforeunload",(0,g.F)(this.PR,this)));this.u=[];this.hc=new I8;this.Ja=b.id;this.Aa=b.idType;this.i=iUa(this,c);this.i.subscribe("handlerOpened",this.QT,this);this.i.subscribe("handlerClosed",this.NT,this);this.i.subscribe("handlerError",this.OT,this);this.i.subscribe("handlerMessage",this.PT,this);this.i.LA(b.token);this.subscribe("remoteQueueChange",
function(){var e=this.hc.videoId;g.Oz()&&g.Lz("yt-remote-session-video-id",e)},this)},jUa=function(a){return g.sb(a.u,function(b){return"LOUNGE_SCREEN"==b.type})},Z8=function(a){T7("conn",a)},iUa=function(a,b){return new M7(Q7(a.Ka,"/bc"),b,!1,function(){return a.WH()},"shortLived"==a.Aa)},$8=function(a,b){a.ea("proxyStateChange",b)},kUa=function(a){a.D=g.ut((0,g.F)(function(){Z8("Connecting timeout");
this.Gr(1)},a),2E4)},a9=function(a){g.wt(a.D);
a.D=NaN},b9=function(a){g.wt(a.ma);
a.ma=NaN},lUa=function(a){c9(a);
a.Z=g.ut((0,g.F)(function(){d9(this,"getNowPlaying")},a),2E4)},c9=function(a){g.wt(a.Z);
a.Z=NaN},nUa=function(a,b){var c=null;
if(b){var d=jUa(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Fa("yt.mdx.remote.remoteClient_",c,void 0);b&&(a9(a),b9(a));c=O7(a.i)&&isNaN(a.D);b==c?b&&($8(a,1),d9(a,"getSubtitlesTrack")):b?(a.lK()&&a.hc.reset(),$8(a,1),d9(a,"getNowPlaying"),mUa(a)):a.Gr(1)},oUa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.hc.videoId&&(g.lc(b.params)?a.hc.trackData=null:a.hc.trackData=b.params,a.ea("remotePlayerChange"))},pUa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.hc.listId=b.params.listId||a.hc.listId;N8(a.hc,c,d);a.ea("remoteQueueChange")},rUa=function(a,b){b.params=b.params||{};
pUa(a,b);qUa(a,b);a.ea("autoplayDismissed")},qUa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
L8(a.hc,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.hc.playerState&&(c=-1E3);a.hc.playerState=c;c=Number(b.params.loadedTime);a.hc.S=isNaN(c)?0:c;a.hc.Cj(Number(b.params.duration));c=a.hc;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.hc;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.hc.playerState?lUa(a):c9(a);a.ea("remotePlayerChange")},sUa=function(a,b){if(-1E3!=a.hc.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.hc.playerState=c;b=parseInt(b.params.currentTime,10);L8(a.hc,isNaN(b)?0:b);a.ea("remotePlayerChange")}},tUa=function(a,b){var c="true"==b.params.muted;
a.hc.volume=parseInt(b.params.volume,10);a.hc.muted=c;a.ea("remotePlayerChange")},uUa=function(a,b){a.J=b.params.videoId;
a.ea("nowAutoplaying",parseInt(b.params.timeout,10))},vUa=function(a,b){var c="true"==b.params.hasNext;
a.hc.yk="true"==b.params.hasPrevious;a.hc.hasNext=c;a.ea("previousNextChange")},mUa=function(a){g.wt(a.S);
a.S=g.ut((0,g.F)(a.Gr,a,1),864E5)},d9=function(a,b,c){c?Z8("Sending: action="+b+", params="+g.Yh(c)):Z8("Sending: action="+b);
a.i.sendMessage(b,c)},e9=function(a){X7.call(this,"ScreenServiceProxy");
this.Pe=a;this.i=[];this.i.push(this.Pe.$_s("screenChange",(0,g.F)(this.rQ,this)));this.i.push(this.Pe.$_s("onlineScreenChange",(0,g.F)(this.KU,this)))},zUa=function(a,b){vSa();
if(!f7||!f7.get("yt-remote-disable-remote-module-for-dev")){b=g.P("MDX_CONFIG")||b;nSa();d7();f9||(f9=new P7(b?b.loungeApiHost:void 0),wSa()&&(f9.i="/api/loungedev"));g9||(g9=g.Ga("yt.mdx.remote.deferredProxies_")||[],g.Fa("yt.mdx.remote.deferredProxies_",g9,void 0));wUa();var c=h9();if(!c){var d=new g8(f9,b?b.disableAutomaticScreenCache||!1:!1);g.Fa("yt.mdx.remote.screenService_",d,void 0);c=h9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Fa("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1,void 0);$Ta(a,d,function(f){f?i9()&&H8(i9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){S6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ga("yt.mdx.remote.initialized_")&&(g.Fa("yt.mdx.remote.initialized_",!0,void 0),j9("Initializing: "+
g.Yh(b)),k9.push(g.hv("yt-remote-cast2-api-ready",function(){S6("yt-remote-api-ready")})),k9.push(g.hv("yt-remote-cast2-availability-change",function(){S6("yt-remote-receiver-availability-change")})),k9.push(g.hv("yt-remote-cast2-receiver-selected",function(){l9(null);
S6("yt-remote-auto-connect","cast-selector-receiver")})),k9.push(g.hv("yt-remote-cast2-receiver-resumed",function(){S6("yt-remote-receiver-resumed","cast-selector-receiver")})),k9.push(g.hv("yt-remote-cast2-session-change",xUa)),k9.push(g.hv("yt-remote-connection-change",function(f){f?H8(i9(),"YouTube TV"):m9()||(H8(null,null),cUa())})),k9.push(g.hv("yt-remote-cast2-session-failed",function(){S6("yt-remote-connection-failed")})),a=n9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.zs("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),j9(" -- with channel params: "+g.Yh(a)),a?(g.Lz("yt-remote-session-app",a.app),g.Lz("yt-remote-session-name",a.name)):(g.Nz("yt-remote-session-app"),g.Nz("yt-remote-session-name")),g.Fa("yt.mdx.remote.channelParams_",a,void 0),c.start(),i9()||yUa())}},AUa=function(){var a=h9().Pe.$_gos();
var b=o9();b&&p9()&&(Z6(a,b)||a.push(b));return mSa(a)},q9=function(){var a=BUa();
!a&&E8()&&bUa()&&(a={key:"cast-selector-receiver",name:bUa()});return a},BUa=function(){var a=AUa(),b=o9();
b||(b=m9());return g.sb(a,function(c){return b&&V6(b,c.key)?!0:!1})},o9=function(){var a=i9();
if(!a)return null;var b=h9().Fh();return $6(b,a)},xUa=function(a){j9("remote.onCastSessionChange_: "+W6(a));
if(a){var b=o9();if(b&&b.id==a.id){if(H8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))r9&&(r9.token=a),(b=p9())&&b.LA(a)}else b&&s9(),t9(a,1)}else p9()&&s9()},s9=function(){F8()?C8().stopSession():A8("stopSession called before API ready.");
var a=p9();a&&(a.disconnect(1),u9(null))},v9=function(){var a=p9();
return!!a&&3!=a.getProxyState()},j9=function(a){T7("remote",a)},h9=function(){if(!w9){var a=g.Ga("yt.mdx.remote.screenService_");
w9=a?new e9(a):null}return w9},i9=function(){return g.Ga("yt.mdx.remote.currentScreenId_")},CUa=function(a){g.Fa("yt.mdx.remote.currentScreenId_",a,void 0)},DUa=function(){return g.Ga("yt.mdx.remote.connectData_")},l9=function(a){g.Fa("yt.mdx.remote.connectData_",a,void 0)},p9=function(){return g.Ga("yt.mdx.remote.connection_")},u9=function(a){var b=p9();
l9(null);a||CUa("");g.Fa("yt.mdx.remote.connection_",a,void 0);g9&&(g.Qb(g9,function(c){c(a)}),g9.length=0);
b&&!a?S6("yt-remote-connection-change",!1):!b&&a&&S6("yt-remote-connection-change",!0)},m9=function(){var a=g.Oz();
if(!a)return null;var b=h9();if(!b)return null;b=b.Fh();return $6(b,a)},t9=function(a,b){i9();
o9()&&o9();if(x9)r9=a;else{CUa(a.id);var c=g.Ga("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new Y8(f9,a,n9(),c);a.connect(b,DUa());a.subscribe("beforeDisconnect",function(d){S6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){p9()&&(p9(),u9(null))});
a.subscribe("browserChannelAuthError",function(){var d=o9();d&&"shortLived"==d.idType&&(F8()?C8().handleBrowserChannelAuthError():A8("refreshLoungeToken called before API ready."))});
u9(a)}},yUa=function(){var a=m9();
a?(j9("Resume connection to: "+W6(a)),t9(a,0)):(e7(),cUa(),j9("Skipping connecting because no session screen found."))},wUa=function(){var a=n9();
if(g.lc(a)){a=c7();var b=g.Mz("yt-remote-session-name")||"",c=g.Mz("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Fa("yt.mdx.remote.channelParams_",a,void 0)}},n9=function(){return g.Ga("yt.mdx.remote.channelParams_")||{}},y9=function(a,b,c){g.I.call(this);
var d=this;this.u=a;this.I=b;this.Tb=c;this.events=new g.rD(this);this.Z=this.events.T(this.I,"onVolumeChange",function(e){EUa(d,e)});
this.D=!1;this.J=new g.QJ(64);this.i=new g.M(this.LN,500,this);this.B=new g.M(this.MN,1E3,this);this.S=new k7(this.AX,0,this);this.C={};this.Y=new g.M(this.uO,1E3,this);this.K=new l7(this.seekTo,1E3,this);this.ma=g.Ha;g.J(this,this.events);this.events.T(b,"onCaptionsTrackListChanged",this.vU);this.events.T(b,"captionschanged",this.IT);this.events.T(b,"captionssettingschanged",this.SN);this.events.T(b,"videoplayerreset",this.eA);this.events.T(b,"mdxautoplaycancel",function(){d.Tb.IJ()});
a=this.Tb;a.isDisposed();a.subscribe("proxyStateChange",this.CM,this);a.subscribe("remotePlayerChange",this.ww,this);a.subscribe("remoteQueueChange",this.eA,this);a.subscribe("previousNextChange",this.zM,this);a.subscribe("nowAutoplaying",this.tM,this);a.subscribe("autoplayDismissed",this.WL,this);g.J(this,this.i);g.J(this,this.B);g.J(this,this.S);g.J(this,this.Y);g.J(this,this.K);this.SN();this.eA();this.ww()},EUa=function(a,b){if(z9(a)){a.Tb.unsubscribe("remotePlayerChange",a.ww,a);
var c=Math.round(b.volume);b=!!b.muted;var d=R8(a.Tb);if(c!==d.volume||b!==d.muted)a.Tb.setVolume(c,b),a.Y.start();a.Tb.subscribe("remotePlayerChange",a.ww,a)}},FUa=function(a){a.Qb(0);
a.i.stop();a.Ub(new g.QJ(64))},A9=function(a,b){if(z9(a)&&!a.D){var c=null;
b&&(c={style:a.I.getSubtitlesUserSettings()},g.tc(c,b));a.Tb.VH(a.I.getVideoData(1).videoId,c);a.C=R8(a.Tb).trackData}},B9=function(a,b){var c=a.I.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.I.getVideoData(1);a.Tb.playVideo(c.videoId,b,d,e,c.playerParams,c.Ya,cSa(c));a.Ub(new g.QJ(1))},GUa=function(a,b){if(b){var c=a.I.getOption("captions","tracklist",{KK:1});
c&&c.length?(a.I.setOption("captions","track",b),a.D=!1):(a.I.loadModule("captions"),a.D=!0)}else a.I.setOption("captions","track",{})},z9=function(a){return R8(a.Tb).videoId===a.I.getVideoData(1).videoId},C9=function(){g.V.call(this,{G:"div",
L:"ytp-mdx-popup-dialog",W:{role:"dialog"},U:[{G:"div",L:"ytp-mdx-popup-dialog-inner-content",U:[{G:"div",L:"ytp-mdx-popup-title",va:"You're signed out"},{G:"div",L:"ytp-mdx-popup-description",va:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{G:"div",L:"ytp-mdx-privacy-popup-buttons",U:[{G:"button",Ha:["ytp-button","ytp-mdx-privacy-popup-cancel"],va:"Cancel"},{G:"button",Ha:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],va:"Confirm"}]}]}]});this.i=new g.vL(this,250);this.cancelButton=this.Fa("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Fa("ytp-mdx-privacy-popup-confirm");g.J(this,this.i);this.T(this.cancelButton,"click",this.u);this.T(this.confirmButton,"click",this.B)},D9=function(a){g.V.call(this,{G:"div",
L:"ytp-remote",U:[{G:"div",L:"ytp-remote-display-status",U:[{G:"div",L:"ytp-remote-display-status-icon",U:[g.Rsa()]},{G:"div",L:"ytp-remote-display-status-text",va:"{{statustext}}"}]}]});this.api=a;this.i=new g.vL(this,250);g.J(this,this.i);this.T(a,"presentingplayerstatechange",this.onStateChange);HUa(this,a.yb())},HUa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.T(b,128)?g.mI("Error on $RECEIVER_NAME",c):b.Ec()||g.T(b,4)?g.mI("Playing on $RECEIVER_NAME",c):g.mI("Connected to $RECEIVER_NAME",c);a.Ra("statustext",b);a.i.show()}else a.i.hide()},E9=function(a,b){g.JP.call(this,"Play on",0,a,b);
this.I=a;this.Yn={};this.T(a,"onMdxReceiversChange",this.D);this.T(a,"presentingplayerstatechange",this.D);this.D()},F9=function(a){g.VM.call(this,a);
this.Gk={key:Y6(),name:"This computer"};this.ai=null;this.subscriptions=[];this.wF=this.Tb=null;this.Yn=[this.Gk];this.Sm=this.Gk;this.td=new g.QJ(64);this.mL=0;this.vf=-1;this.Fw=!1;this.Dw=this.Ks=null;if(!g.bF(this.player.V())&&!g.cF(this.player.V())){a=this.player;var b=g.yM(a);b&&(b=b.vn())&&(b=new E9(a,b),g.J(this,b));b=new D9(a);g.J(this,b);g.IM(a,b.element,4);this.Ks=new C9;g.J(this,this.Ks);g.IM(a,this.Ks.element,4);this.Fw=!!m9()}},G9=function(a){a.Dw&&(a.player.removeEventListener("presentingplayerstatechange",
a.Dw),a.Dw=null)},IUa=function(a,b,c){a.td=c;
a.player.ea("presentingplayerstatechange",new g.ZH(c,b))},H9=function(a,b){if(b.key!==a.Sm.key)if(b.key===a.Gk.key)s9();
else{var c;(c=!a.player.V().N("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.P("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.P("SESSION_INDEX")&&!g.P("LOGGED_IN")))||a.Fw||!a.Ks);(c?0:g.sF(a.player.V())||g.vF(a.player.V()))&&JUa(a);a.Sm=b;if(!a.player.V().N("disable_mdx_connection_in_mdx_module_for_music_web")||!g.cF(a.player.V())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.V().N("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.PM(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Ya,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=cSa(c))&&(a.locationInfo=c)}j9("Connecting to: "+g.Yh(b));"cast-selector-receiver"==b.key?(l9(a||null),b=a||null,F8()?C8().setLaunchParams(b):A8("setLaunchParams called before ready.")):!a&&v9()&&
i9()==b.key?S6("yt-remote-connection-change",!0):(s9(),l9(a||null),a=h9().Fh(),(b=$6(a,b.key))&&t9(b,1))}}},JUa=function(a){a.player.yb().Ec()?a.player.pauseVideo():(a.Dw=function(b){!a.Fw&&g.aI(b,8)&&(a.player.pauseVideo(),G9(a))},a.player.addEventListener("presentingplayerstatechange",a.Dw));
a.Ks&&a.Ks.rd();p9()||(x9=!0)},LSa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},x7={"'":"\\'"},iSa={CY:"atp",t9:"ska",g8:"que",d6:"mus",s9:"sus",n2:"dsp",B8:"seq",G5:"mic",b1:"dpa",RY:"cds",b6:"mlm"},f7,b7="",CSa=xSa("loadCastFramework")||xSa("loadCastApplicationFramework"),ESa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Qa(k7,g.I);g.k=k7.prototype;g.k.fQ=function(a){this.C=arguments;this.i=!1;this.Lb?this.B=g.Pa()+this.Uf:this.Lb=g.xh(this.D,this.Uf)};
g.k.stop=function(){this.Lb&&(g.D.clearTimeout(this.Lb),this.Lb=null);this.B=null;this.i=!1;this.C=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.i&&(this.i=!1,this.J.apply(null,this.C)))};
g.k.xa=function(){this.stop();k7.ke.xa.call(this)};
g.k.gQ=function(){this.Lb&&(g.D.clearTimeout(this.Lb),this.Lb=null);this.B?(this.Lb=g.xh(this.D,this.B-g.Pa()),this.B=null):this.u?this.i=!0:(this.i=!1,this.J.apply(null,this.C))};g.w(l7,g.I);g.k=l7.prototype;g.k.QH=function(a){this.B=arguments;this.Lb||this.u?this.i=!0:m7(this)};
g.k.stop=function(){this.Lb&&(g.D.clearTimeout(this.Lb),this.Lb=null,this.i=!1,this.B=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.i||this.Lb||(this.i=!1,m7(this))};
g.k.xa=function(){g.I.prototype.xa.call(this);this.stop()};n7.prototype.stringify=function(a){return g.D.JSON.stringify(a,void 0)};
n7.prototype.parse=function(a){return g.D.JSON.parse(a,void 0)};var p7=new g.Se;g.w(GSa,g.ve);g.k=r7.prototype;g.k.No=null;g.k.ym=!1;g.k.Dt=null;g.k.QG=null;g.k.Ps=null;g.k.nt=null;g.k.Mm=null;g.k.jo=null;g.k.lq=null;g.k.Mf=null;g.k.mB=0;g.k.Hj=null;g.k.jB=null;g.k.Gm=null;g.k.Zt=-1;g.k.AN=!0;g.k.gp=!1;g.k.bC=0;g.k.zA=null;var JSa={},u7={};g.k=r7.prototype;g.k.setTimeout=function(a){this.u=a};
g.k.hQ=function(a){a=a.target;var b=this.zA;b&&3==g.Fi(a)?b.QH():this.CO(a)};
g.k.CO=function(a){try{if(a==this.Mf)a:{var b=g.Fi(this.Mf),c=this.Mf.u,d=this.Mf.getStatus();if(g.Rc&&!g.Kc(10)||g.zg&&!g.Jc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Ki(this.Mf))break a;this.gp||4!=b||7==c||(8==c||0>=d?this.i.rj(3):this.i.rj(2));y7(this);var e=this.Mf.getStatus();this.Zt=e;var f=g.Ki(this.Mf);if(this.ym=200==e){4==b&&v7(this);if(this.D){for(a=!0;!this.gp&&this.mB<f.length;){var h=KSa(this,f);if(h==u7){4==b&&(this.Gm=4,q7(15),a=!1);break}else if(h==JSa){this.Gm=4;q7(16);a=!1;
break}else z7(this,h)}4==b&&0==f.length&&(this.Gm=1,q7(17),a=!1);this.ym=this.ym&&a;a||(v7(this),w7(this))}else z7(this,f);this.ym&&!this.gp&&(4==b?this.i.Nx(this):(this.ym=!1,t7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Gm=3,q7(13)):(this.Gm=0,q7(14)),v7(this),w7(this)}}catch(l){this.Mf&&g.Ki(this.Mf)}finally{}};
g.k.cW=function(a){o7((0,g.F)(this.bW,this,a),0)};
g.k.bW=function(a){this.gp||(y7(this),z7(this,a),t7(this))};
g.k.KM=function(a){o7((0,g.F)(this.aW,this,a),0)};
g.k.aW=function(a){this.gp||(v7(this),this.ym=a,this.i.Nx(this),this.i.rj(4))};
g.k.cancel=function(){this.gp=!0;v7(this)};
g.k.jW=function(){this.Dt=null;var a=Date.now();0<=a-this.QG?(2!=this.nt&&this.i.rj(3),v7(this),this.Gm=2,q7(18),w7(this)):NSa(this,this.QG-a)};
g.k.getLastError=function(){return this.Gm};g.k=QSa.prototype;g.k.cC=null;g.k.lh=null;g.k.AA=!1;g.k.NN=null;g.k.Gy=null;g.k.uE=null;g.k.dC=null;g.k.Xh=null;g.k.bl=-1;g.k.au=null;g.k.Hu=null;g.k.connect=function(a){this.dC=a;a=B7(this.i,null,this.dC);q7(3);this.NN=Date.now();var b=this.i.S;null!=b?(this.au=b[0],(this.Hu=b[1])?(this.Xh=1,RSa(this)):(this.Xh=2,D7(this))):(P6(a,"MODE","init"),this.lh=new r7(this,void 0,void 0,void 0),this.lh.No=this.cC,s7(this.lh,a,!1,null,!0),this.Xh=0)};
g.k.YQ=function(a){if(a)this.Xh=2,D7(this);else{q7(4);var b=this.i;b.Uj=b.Qm.bl;K7(b,9)}a&&this.rj(2)};
g.k.bD=function(a){return this.i.bD(a)};
g.k.abort=function(){this.lh&&(this.lh.cancel(),this.lh=null);this.bl=-1};
g.k.rf=function(){return!1};
g.k.DM=function(a,b){this.bl=a.Zt;if(0==this.Xh)if(b){try{var c=this.u.parse(b)}catch(d){a=this.i;a.Uj=this.bl;K7(a,2);return}this.au=c[0];this.Hu=c[1]}else a=this.i,a.Uj=this.bl,K7(a,2);else if(2==this.Xh)if(this.AA)q7(7),this.uE=Date.now();else if("11111"==b){if(q7(6),this.AA=!0,this.Gy=Date.now(),a=this.Gy-this.NN,!g.Rc||g.Kc(10)||500>a)this.bl=200,this.lh.cancel(),q7(12),C7(this.i,this,!0)}else q7(8),this.Gy=this.uE=Date.now(),this.AA=!1};
g.k.Nx=function(){this.bl=this.lh.Zt;if(this.lh.ym)0==this.Xh?this.Hu?(this.Xh=1,RSa(this)):(this.Xh=2,D7(this)):2==this.Xh&&((!g.Rc||g.Kc(10)?!this.AA:200>this.uE-this.Gy)?(q7(11),C7(this.i,this,!1)):(q7(12),C7(this.i,this,!0)));else{0==this.Xh?q7(9):2==this.Xh&&q7(10);var a=this.i;this.lh.getLastError();a.Uj=this.bl;K7(a,2)}};
g.k.bx=function(){return this.i.bx()};
g.k.isActive=function(){return this.i.isActive()};
g.k.rj=function(a){this.i.rj(a)};g.k=E7.prototype;g.k.Tj=null;g.k.fv=null;g.k.Vg=null;g.k.Ge=null;g.k.eC=null;g.k.Hy=null;g.k.WI=null;g.k.Ox=null;g.k.ew=0;g.k.dT=0;g.k.Nf=null;g.k.cn=null;g.k.yl=null;g.k.qp=null;g.k.Qm=null;g.k.hB=null;g.k.us=-1;g.k.lL=-1;g.k.Uj=-1;g.k.Kr=0;g.k.rr=0;g.k.hp=8;g.Qa(TSa,g.ve);g.Qa(USa,g.ve);g.k=E7.prototype;g.k.connect=function(a,b,c,d,e){q7(0);this.eC=b;this.fv=c||{};d&&void 0!==e&&(this.fv.OSID=d,this.fv.OAID=e);this.J?(o7((0,g.F)(this.sJ,this,a),100),YSa(this)):this.sJ(a)};
g.k.sJ=function(a){this.Qm=new QSa(this);this.Qm.cC=this.Tj;this.Qm.u=this.D;this.Qm.connect(a)};
g.k.rf=function(){return 0==this.i};
g.k.getState=function(){return this.i};
g.k.IM=function(a){this.cn=null;bTa(this,a)};
g.k.HM=function(){this.yl=null;this.Ge=new r7(this,this.B,"rpc",this.K);this.Ge.No=this.Tj;this.Ge.bC=0;var a=this.WI.clone();g.Wj(a,"RID","rpc");g.Wj(a,"SID",this.B);g.Wj(a,"CI",this.hB?"0":"1");g.Wj(a,"AID",this.us);F7(this,a);if(!g.Rc||g.Kc(10))g.Wj(a,"TYPE","xmlhttp"),s7(this.Ge,a,!0,this.Ox,!1);else{g.Wj(a,"TYPE","html");var b=this.Ge,c=!!this.Ox;b.nt=3;b.Mm=O6(a.clone());MSa(b,c)}};
g.k.DM=function(a,b){if(0!=this.i&&(this.Ge==a||this.Vg==a))if(this.Uj=a.Zt,this.Vg==a&&3==this.i)if(7<this.hp){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.yl){if(this.Ge)if(this.Ge.Ps+3E3<this.Vg.Ps)H7(this),this.Ge.cancel(),this.Ge=null;else break a;J7(this);q7(19)}}else this.lL=a[1],0<this.lL-this.us&&37500>a[2]&&this.hB&&0==this.rr&&!this.qp&&(this.qp=o7((0,g.F)(this.FT,this),6E3));else K7(this,11)}else null!=b&&K7(this,11);else if(this.Ge==
a&&H7(this),!g.$a(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.us=c[0],c=c[1],2==this.i?"c"==c[0]?(this.B=c[1],this.Ox=c[2],c=c[3],null!=c?this.hp=c:this.hp=6,this.i=3,this.Nf&&this.Nf.oJ(),this.WI=B7(this,this.bx()?this.Ox:null,this.eC),cTa(this)):"stop"==c[0]&&K7(this,7):3==this.i&&("stop"==c[0]?K7(this,7):"noop"!=c[0]&&this.Nf&&this.Nf.nJ(c),this.rr=0)};
g.k.FT=function(){null!=this.qp&&(this.qp=null,this.Ge.cancel(),this.Ge=null,J7(this),q7(20))};
g.k.Nx=function(a){if(this.Ge==a){H7(this);this.Ge=null;var b=2}else if(this.Vg==a)this.Vg=null,b=1;else return;this.Uj=a.Zt;if(0!=this.i)if(a.ym)if(1==b){b=Date.now()-a.Ps;var c=p7;c.dispatchEvent(new TSa(c,a.lq?a.lq.length:0,b,this.Kr));G7(this);this.C.length=0}else cTa(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Uj)){if(d=1==b)this.Vg||this.cn||1==this.i||2<=this.Kr?d=!1:(this.cn=o7((0,g.F)(this.IM,this,a),dTa(this,this.Kr)),this.Kr++,d=!0);d=!(d||2==b&&J7(this))}if(d)switch(c){case 1:K7(this,
5);break;case 4:K7(this,10);break;case 3:K7(this,6);break;case 7:K7(this,12);break;default:K7(this,2)}}};
g.k.yR=function(a){if(!g.vb(arguments,this.i))throw Error("Unexpected channel state: "+this.i);};
g.k.kX=function(a){a?q7(2):(q7(1),eTa(this,8))};
g.k.bD=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.zi;a.S=!1;return a};
g.k.isActive=function(){return!!this.Nf&&this.Nf.isActive(this)};
g.k.rj=function(a){var b=p7;b.dispatchEvent(new USa(b,a))};
g.k.bx=function(){return!(!g.Rc||g.Kc(10))};
g.k=fTa.prototype;g.k.oJ=function(){};
g.k.nJ=function(){};
g.k.mJ=function(){};
g.k.OC=function(){};
g.k.YJ=function(){return{}};
g.k.isActive=function(){return!0};g.k=gTa.prototype;g.k.isEmpty=function(){return 0===this.i.length&&0===this.u.length};
g.k.clear=function(){this.i=[];this.u=[]};
g.k.contains=function(a){return g.vb(this.i,a)||g.vb(this.u,a)};
g.k.remove=function(a){var b=this.i;var c=(0,g.jMa)(b,a);0<=c?(g.yb(b,c),b=!0):b=!1;return b||g.Ab(this.u,a)};
g.k.Fp=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Qa(L7,g.I);g.k=L7.prototype;g.k.TV=function(){this.Uf=Math.min(3E5,2*this.Uf);this.B();this.u&&this.start()};
g.k.start=function(){var a=this.Uf+15E3*Math.random();g.Gq(this.i,a);this.u=Date.now()+a};
g.k.stop=function(){this.i.stop();this.u=0};
g.k.isActive=function(){return this.i.isActive()};
g.k.reset=function(){this.i.stop();this.Uf=5E3};g.Qa(M7,fTa);g.k=M7.prototype;g.k.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.k.dg=function(a){return this.B.dg(a)};
g.k.ea=function(a,b){return this.B.ea.apply(this.B,arguments)};
g.k.dispose=function(){this.Z||(this.Z=!0,g.se(this.B),jTa(this),g.se(this.u),this.u=null,this.ma=function(){return""})};
g.k.isDisposed=function(){return this.Z};
g.k.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.Y="";this.u.stop();this.D=a||null;this.C=b||0;a=this.ya+"/test";b=this.ya+"/bind";var d=new E7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Aa),e=this.i;e&&(e.Nf=null);d.Nf=this;this.i=d;N7(this);if(this.i){d=g.P("ID_TOKEN");var f=this.i.Tj||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.Tj=f}e?(3!=e.getState()&&0==$Sa(e)||e.getState(),this.i.connect(a,b,this.J,e.B,e.us)):c?this.i.connect(a,
b,this.J,c.sessionId,c.arrayId):this.i.connect(a,b,this.J)}};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.tc(a,b);this.u.isActive()||2==(this.i?this.i.getState():0)?this.K.push(a):O7(this)&&(N7(this),ZSa(this.i,a))};
g.k.oJ=function(){this.u.reset();this.D=null;this.C=0;if(this.K.length){var a=this.K;this.K=[];for(var b=0,c=a.length;b<c;++b)ZSa(this.i,a[b])}this.ea("handlerOpened")};
g.k.mJ=function(a){var b=2==a&&401==this.i.Uj;4==a||b||this.u.start();this.ea("handlerError",a,b)};
g.k.OC=function(a){if(!this.u.isActive())this.ea("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.K.push(d)}};
g.k.YJ=function(){var a={v:2};this.Y&&(a.gsessionid=this.Y);0!=this.C&&(a.ui=""+this.C);0!=this.S&&(a.ui=""+this.S);this.D&&g.tc(a,this.D);return a};
g.k.nJ=function(a){"S"==a[0]?this.Y=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),XSa(this.i)):this.ea("handlerMessage",new hTa(a[0],a[1]))};
g.k.LA=function(a){(this.J.loungeIdToken=a)||this.u.stop();if(this.Ea&&this.i){var b=this.i.Tj||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.Tj=b}};
g.k.OW=function(){this.u.isActive();0==$Sa(this.i)&&this.connect(this.D,this.C)};P7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
P7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
P7.prototype.D=function(a){a(Error("request timed out"))};var qTa=Date.now(),S7=null,V7=Array(50),U7=-1,W7=!1;g.Qa(X7,g.R);X7.prototype.Fh=function(){return this.screens};
X7.prototype.contains=function(a){return!!Z6(this.screens,a)};
X7.prototype.get=function(a){return a?$6(this.screens,a):null};
X7.prototype.info=function(a){T7(this.J,a)};g.w(Y7,g.R);g.k=Y7.prototype;g.k.start=function(){!this.i&&isNaN(this.Lb)&&this.VM()};
g.k.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.Lb)||(g.wt(this.Lb),this.Lb=NaN)};
g.k.xa=function(){this.stop();g.R.prototype.xa.call(this)};
g.k.VM=function(){this.Lb=NaN;this.i=g.Ct(Q7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.K},timeout:5E3,onSuccess:(0,g.F)(this.jQ,this),onError:(0,g.F)(this.iQ,this),onTimeout:(0,g.F)(this.kQ,this)})};
g.k.jQ=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.C;a.name=this.J;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ea("pairingComplete",new U6(a),b)};
g.k.iQ=function(a){this.i=null;a.status&&404==a.status?this.u>=KUa.length?this.ea("pairingFailed",Error("DIAL polling timed out")):(a=KUa[this.u],this.Lb=g.ut((0,g.F)(this.VM,this),a),this.u++):this.ea("pairingFailed",Error("Server error "+a.status))};
g.k.kQ=function(){this.i=null;this.ea("pairingFailed",Error("Server not responding"))};
var KUa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Qa($7,X7);g.k=$7.prototype;g.k.start=function(){Z7(this)&&this.ea("screenChange");!g.Mz("yt-remote-lounge-token-expiration")&&uTa(this);g.wt(this.i);this.i=g.ut((0,g.F)(this.start,this),1E4)};
g.k.add=function(a,b){Z7(this);rTa(this,a);a8(this,!1);this.ea("screenChange");b(a);a.token||uTa(this)};
g.k.remove=function(a,b){var c=Z7(this);tTa(this,a)&&(a8(this,!1),c=!0);b(a);c&&this.ea("screenChange")};
g.k.fB=function(a,b,c,d){var e=Z7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,a8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ea("screenChange")};
g.k.xa=function(){g.wt(this.i);$7.ke.xa.call(this)};
g.k.UR=function(a){Z7(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}a8(this,!b);b&&T7(this.J,"Missed "+b+" lounge tokens.")};
g.k.TR=function(a){T7(this.J,"Requesting lounge tokens failed: "+a)};g.w(c8,g.R);g.k=c8.prototype;g.k.start=function(){var a=parseInt(g.Mz("yt-remote-fast-check-period")||"0",10);(this.C=g.Pa()-144E5<a?0:a)?f8(this):(this.C=g.Pa()+3E5,g.Lz("yt-remote-fast-check-period",this.C),this.IF())};
g.k.isEmpty=function(){return g.lc(this.i)};
g.k.update=function(){b8("Updating availability on schedule.");var a=this.J(),b=g.Yb(this.i,function(c,d){return c&&!!$6(a,d)},this);
e8(this,b)};
g.k.xa=function(){g.wt(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.R.prototype.xa.call(this)};
g.k.IF=function(){g.wt(this.B);this.B=NaN;this.u&&this.u.abort();var a=wTa(this);if(Q6(a)){var b=Q7(this.D,"/pairing/get_screen_availability");this.u=R7(this.D,b,{lounge_token:g.fc(a).join(",")},(0,g.F)(this.zV,this,a),(0,g.F)(this.xV,this))}else e8(this,{}),f8(this)};
g.k.zV=function(a,b){this.u=null;var c=g.fc(wTa(this));if(g.Ob(c,g.fc(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;e8(this,c);f8(this)}else this.le("Changing Screen set during request."),this.IF()};
g.k.xV=function(a){this.le("Screen availability failed: "+a);this.u=null;f8(this)};
g.k.le=function(a){T7("OnlineScreenService",a)};g.Qa(g8,X7);g.k=g8.prototype;g.k.start=function(){this.u.start();this.i.start();this.screens.length&&(this.ea("screenChange"),this.i.isEmpty()||this.ea("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.i.update()};
g.k.fB=function(a,b,c,d){this.u.contains(a)?this.u.fB(a,b,c,d):(a="Updating name of unknown screen: "+a.name,T7(this.J,a),d(Error(a)))};
g.k.Fh=function(a){return a?this.screens:g.Cb(this.screens,g.Go(this.B,function(b){return!this.contains(b)},this))};
g.k.RH=function(){return g.Go(this.Fh(!0),function(a){return!!this.i.i[a.id]},this)};
g.k.SH=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new Y7(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.se(l);e(h8(h,m),n)});
l.subscribe("pairingFailed",function(m){g.se(l);f(m)});
l.start();return(0,g.F)(l.stop,l)};
g.k.lQ=function(a,b,c,d){g.Ct(Q7(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.F)(function(e,f){e=new U6(f.screen||{});if(!e.name||ATa(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);ATa(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(h8(this,e))},this),
onError:(0,g.F)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.F)(function(){d(Error("pairing request timed out."))},this)})};
g.k.xa=function(){g.se(this.u);g.se(this.i);g8.ke.xa.call(this)};
g.k.dS=function(){CTa(this);this.ea("screenChange");this.i.update()};
g8.prototype.dispose=g8.prototype.dispose;g.Qa(j8,g.R);g.k=j8.prototype;g.k.getScreen=function(){return this.C};
g.k.zg=function(a){this.isDisposed()||(a&&(l8(this,""+a),this.ea("sessionFailed")),this.C=null,this.ea("sessionScreen",null))};
g.k.info=function(a){T7(this.Ea,a)};
g.k.TH=function(){return null};
g.k.XF=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.F)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.F)(function(){l8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.xa=function(){this.XF("");j8.ke.xa.call(this)};g.w(m8,j8);g.k=m8.prototype;g.k.WF=function(a){if(this.u){if(this.u==a)return;l8(this,"Overriding cast session with new session object");LTa(this);this.ya=!1;this.Y="unknown";this.u.removeUpdateListener(this.ma);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa)}this.u=a;this.u.addUpdateListener(this.ma);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa);HTa(this,"getMdxSessionStatus")};
g.k.ws=function(a){this.info("launchWithParams no-op for Cast: "+g.Yh(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.F)(function(){this.zg()},this),(0,g.F)(function(){this.zg(Error("Failed to stop receiver app."))},this)):this.zg(Error("Stopping cast device without session."))};
g.k.XF=function(){};
g.k.xa=function(){this.info("disposeInternal");LTa(this);this.u&&(this.u.removeUpdateListener(this.ma),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa));this.u=null;j8.prototype.xa.call(this)};
g.k.nW=function(a,b){if(!this.isDisposed())if(b)if(b=R6(b),g.La(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.Yh(b)),a){case "mdxSessionStatus":FTa(this,b);break;case "loungeToken":ITa(this,b);break;default:l8(this,"Unknown youtube message: "+a)}else l8(this,"Unable to parse message.");else l8(this,"No data in message.")};
g.k.mK=function(a,b,c,d){g.wt(this.S);this.S=0;zTa(this.B,this.i.label,a,this.i.friendlyName,(0,g.F)(function(e){e?b(e):0<=d?(l8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.S=g.ut((0,g.F)(this.mK,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.TH=function(){return this.u};
g.k.mQ=function(a){this.isDisposed()||a||(l8(this,"Cast session died."),this.zg())};g.w(p8,j8);g.k=p8.prototype;g.k.WF=function(a){this.u=a;this.u.addUpdateListener(this.Ka)};
g.k.ws=function(a){this.Ja=a;this.Z()};
g.k.stop=function(){STa(this);this.u?this.u.stop((0,g.F)(this.zg,this,null),(0,g.F)(this.zg,this,"Failed to stop DIAL device.")):this.zg()};
g.k.xa=function(){STa(this);this.u&&this.u.removeUpdateListener(this.Ka);this.u=null;j8.prototype.xa.call(this)};
g.k.nQ=function(a){this.isDisposed()||a||(l8(this,"DIAL session died."),this.D(),this.D=g.Ha,this.zg())};g.w(t8,j8);t8.prototype.stop=function(){this.zg()};
t8.prototype.WF=function(){};
t8.prototype.ws=function(){g.wt(this.u);this.u=NaN;var a=$6(this.B.Fh(),this.i.label);a?k8(this,a):this.zg(Error("No such screen"))};
t8.prototype.xa=function(){g.wt(this.u);this.u=NaN;j8.prototype.xa.call(this)};g.w(u8,g.R);g.k=u8.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.S,[chrome.cast.Capability.AUDIO_OUT]);this.Y||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.J?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.F)(this.iV,this);c=new chrome.cast.ApiConfig(c,(0,g.F)(this.EM,this),e,d,a);c.customDialLaunchCallback=(0,g.F)(this.dU,this);
chrome.cast.initialize(c,(0,g.F)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),nTa(),this.u.subscribe("onlineScreenChange",(0,g.F)(this.UH,this)),this.B=VTa(this),chrome.cast.setCustomReceivers(this.B,g.Ha,(0,g.F)(function(f){this.le("Failed to set initial custom receivers: "+g.Yh(f))},this)),this.ea("yt-remote-cast2-availability-change",w8(this)),b(!0))},this),(0,g.F)(function(f){this.le("Failed to initialize API: "+g.Yh(f));
b(!1)},this))};
g.k.TW=function(a,b){v8("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)v8("Unsetting old screen status: "+this.i.i.friendlyName),x8(this,null)}if(a&&b){if(!this.i){c=$6(this.u.Fh(),a);if(!c){v8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){v8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=TTa(this,c);a||(v8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,g.Ha,(0,g.F)(function(d){this.le("Failed to set initial custom receivers: "+g.Yh(d))},this)));
v8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);x8(this,new t8(this.u,a),!0)}this.i.XF(b)}else v8("setConnectedScreenStatus: no screen.")};
g.k.UW=function(a){this.isDisposed()?this.le("Setting connection data on disposed cast v2"):this.i?this.i.ws(a):this.le("Setting connection data without a session")};
g.k.pQ=function(){this.isDisposed()?this.le("Stopping session on disposed cast v2"):this.i?(this.i.stop(),x8(this,null)):v8("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.F)(this.EM,this),(0,g.F)(this.CV,this))};
g.k.xa=function(){this.u.unsubscribe("onlineScreenChange",(0,g.F)(this.UH,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=kTa,b=g.Ga("yt.mdx.remote.debug.handlers_");g.Ab(b||[],a);g.se(this.i);g.R.prototype.xa.call(this)};
g.k.le=function(a){T7("Controller",a)};
g.k.GM=function(a,b){this.i==a&&(b||x8(this,null),this.ea("yt-remote-cast2-session-change",b))};
g.k.fV=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),v8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)v8("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{v8("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.ea("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:x8(this,
new t8(this.u,a));break;case chrome.cast.ReceiverType.DIAL:x8(this,new p8(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:x8(this,new m8(this.u,a,this.config_));break;default:this.le("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.le("Stopping receiver w/o session: "+a.friendlyName)}else this.le("onReceiverAction_ called without receiver.")};
g.k.dU=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.le("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.le("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return v8("Reselecting dial screen."),
this.ea("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.le('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);x8(this,new p8(this.u,b,this.C,this.config_))}b=this.i;b.S=a;b.S.appState==chrome.cast.DialAppState.RUNNING?(a=b.S.extraData||{},c=a.screenId||null,q8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=PTa(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.S.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.Ds(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=QTa(b,c)):a=QTa(b,c)):a=s8(b);return a};
g.k.EM=function(a){var b=this;if(!this.isDisposed()&&!this.J){v8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(c.receiverType==chrome.cast.ReceiverType.CAST)v8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),x8(this,new m8(this.u,c,this.config_),!0);else{this.le("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.i.i,e=$6(this.u.Fh(),
d.label);e&&V6(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(v8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.se(this.i),this.i=new m8(this.u,c,this.config_),this.i.subscribe("sessionScreen",(0,g.F)(this.GM,this,this.i)),this.i.subscribe("sessionFailed",function(){return UTa(b,b.i)}),this.i.ws(null));
this.i.WF(a)}}};
g.k.oQ=function(){return this.i?this.i.TH():null};
g.k.CV=function(a){this.isDisposed()||(this.le("Failed to estabilish a session: "+g.Yh(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&x8(this,null),this.ea("yt-remote-cast2-session-failed"))};
g.k.iV=function(a){v8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=w8(this);this.K=a==chrome.cast.ReceiverAvailability.AVAILABLE;w8(this)!=b&&this.ea("yt-remote-cast2-availability-change",w8(this))}};
g.k.UH=function(){this.isDisposed()||(this.B=VTa(this),v8("Updating custom receivers: "+g.Yh(this.B)),chrome.cast.setCustomReceivers(this.B,g.Ha,(0,g.F)(function(){this.le("Failed to set custom receivers.")},this)),this.ea("yt-remote-cast2-availability-change",w8(this)))};
u8.prototype.setLaunchParams=u8.prototype.UW;u8.prototype.setConnectedScreenStatus=u8.prototype.TW;u8.prototype.stopSession=u8.prototype.pQ;u8.prototype.getCastSession=u8.prototype.oQ;u8.prototype.requestSession=u8.prototype.requestSession;u8.prototype.init=u8.prototype.init;u8.prototype.dispose=u8.prototype.dispose;var D8=[];g.k=I8.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";J8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.yk=a.hasPrevious,this.hasNext=a.hasNext,this.K=a.playerTime,this.J=a.playerTimeAt,this.C=a.seekableStart,this.i=a.seekableEnd,this.D=a.duration,this.S=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.k.Ec=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Cj=function(a){this.D=isNaN(a)?0:a};
g.k.getDuration=function(){return this.u?this.D+K8(this):this.D};
g.k.clone=function(){return new I8(O8(this))};g.w(Q8,g.R);g.k=Q8.prototype;g.k.getState=function(){return this.B};
g.k.play=function(){S8(this)?(this.i?this.i.play(null,g.Ha,X8(this,"play")):W8(this,"play"),V8(this,1,M8(R8(this))),this.ea("remotePlayerChange")):T8(this,this.play)};
g.k.pause=function(){S8(this)?(this.i?this.i.pause(null,g.Ha,X8(this,"pause")):W8(this,"pause"),V8(this,2,M8(R8(this))),this.ea("remotePlayerChange")):T8(this,this.pause)};
g.k.seekTo=function(a){if(S8(this)){if(this.i){var b=R8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Ec()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ha,X8(this,"seekTo",{newTime:a}))}else W8(this,"seekTo",{newTime:a});V8(this,3,a);this.ea("remotePlayerChange")}else T8(this,g.Oa(this.seekTo,a))};
g.k.stop=function(){if(S8(this)){this.i?this.i.stop(null,g.Ha,X8(this,"stopVideo")):W8(this,"stopVideo");var a=R8(this);a.index=-1;a.videoId="";J8(a);U8(this,a);this.ea("remotePlayerChange")}else T8(this,this.stop)};
g.k.setVolume=function(a,b){if(S8(this)){var c=R8(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.F)(function(){T7("CP","set receiver volume: "+d)},this),(0,g.F)(function(){this.le("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.F)(function(){T7("CP","set receiver muted: "+b)},this),(0,g.F)(function(){this.le("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);W8(this,"setVolume",e)}c.muted=b;c.volume=a;U8(this,c)}else T8(this,g.Oa(this.setVolume,a,b))};
g.k.VH=function(a,b){if(S8(this)){var c=R8(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.Yh(b.style),g.tc(a,c.trackData));W8(this,"setSubtitlesTrack",a);U8(this,c)}else T8(this,g.Oa(this.VH,a,b))};
g.k.setAudioTrack=function(a,b){S8(this)?(b=b.getLanguageInfo().getId(),W8(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=R8(this),a.audioTrackId=b,U8(this,a)):T8(this,g.Oa(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=R8(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);N8(l,a,c||0);void 0!==b&&(L8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.Yh(h));W8(this,"setPlaylist",m);d||U8(this,l)};
g.k.sA=function(a,b){if(S8(this)){if(a&&b){var c=R8(this);N8(c,a,b);U8(this,c)}W8(this,"previous")}else T8(this,g.Oa(this.sA,a,b))};
g.k.nextVideo=function(a,b){if(S8(this)){if(a&&b){var c=R8(this);N8(c,a,b);U8(this,c)}W8(this,"next")}else T8(this,g.Oa(this.nextVideo,a,b))};
g.k.xr=function(){if(S8(this)){W8(this,"clearPlaylist");var a=R8(this);a.reset();U8(this,a);this.ea("remotePlayerChange")}else T8(this,this.xr)};
g.k.IJ=function(){S8(this)?W8(this,"dismissAutoplay"):T8(this,this.IJ)};
g.k.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ea("proxyStateChange",a,this.B)}g.R.prototype.dispose.call(this)};
g.k.xa=function(){gUa(this);this.C=null;this.D.clear();P8(this,null);g.R.prototype.xa.call(this)};
g.k.YF=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ea("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.i.length&&(b.i=b.u,b.i.reverse(),b.u=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.k.dV=function(a,b){this.ea(a,b)};
g.k.LT=function(a){if(!a)this.ow(null),P8(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=R8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)T7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,U8(this,b)}};
g.k.ow=function(a){T7("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.S);if(this.i=a)this.i.addUpdateListener(this.S),hUa(this),this.ea("remotePlayerChange")};
g.k.KT=function(a){a?(hUa(this),this.ea("remotePlayerChange")):this.ow(null)};
g.k.tG=function(){W8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.TT=function(){var a=dUa();a&&P8(this,a)};
g.k.le=function(a){T7("CP",a)};g.w(Y8,g.R);g.k=Y8.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ea&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.hc.listId=c);this.hc.videoId=d;this.hc.index=l||0;this.hc.state=3;L8(this.hc,
n);this.C="UNSUPPORTED";c=this.Ea?"setInitialState":"setPlaylist";Z8("Connecting with "+c+" and params: "+g.Yh(m));this.i.connect({method:c,params:g.Yh(m)},a,qSa())}else Z8("Connecting without params"),this.i.connect({},a,qSa());kUa(this)};
g.k.LA=function(a){this.i.LA(a)};
g.k.dispose=function(){this.isDisposed()||(g.Fa("yt.mdx.remote.remoteClient_",null,void 0),this.ea("beforeDispose"),$8(this,3));g.R.prototype.dispose.call(this)};
g.k.xa=function(){a9(this);c9(this);b9(this);g.wt(this.K);this.K=NaN;g.wt(this.S);this.S=NaN;this.B=null;g.Bu(this.Y);this.Y.length=0;this.i.dispose();g.R.prototype.xa.call(this);this.C=this.J=this.u=this.hc=this.i=null};
g.k.PR=function(){this.Gr(2)};
g.k.QT=function(){Z8("Channel opened");this.ya&&(this.ya=!1,b9(this),this.ma=g.ut((0,g.F)(function(){Z8("Timing out waiting for a screen.");this.Gr(1)},this),15E3));
uSa(iTa(this.i),this.Ja)};
g.k.NT=function(){Z8("Channel closed");isNaN(this.D)?e7(!0):e7();this.dispose()};
g.k.OT=function(a,b){e7();isNaN(this.Fv())?(b&&"shortLived"==this.Aa&&this.ea("browserChannelAuthError",a),Z8("Channel error: "+a+" without reconnection"),this.dispose()):(this.ya=!0,Z8("Channel error: "+a+" with reconnection in "+this.Fv()+" ms"),$8(this,2))};
g.k.XK=function(a){if(!this.u||0===this.u.length)return!1;for(var b=g.r(this.u),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.PT=function(a){a.params?Z8("Received: action="+a.action+", params="+g.Yh(a.params)):Z8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=R6(a.params.devices);this.u=g.pm(a,function(c){return new T6(c)});
a=!!g.sb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
nUa(this,a);a=this.XK("mlm");this.ea("multiStateLoopEnabled",a);break;case "loungeScreenDisconnected":g.Bb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
nUa(this,!1);break;case "remoteConnected":var b=new T6(R6(a.params.device));g.sb(this.u,function(c){return b?c.id==b.id:!1})||dSa(this.u,b);
break;case "remoteDisconnected":b=new T6(R6(a.params.device));g.Bb(this.u,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":pUa(this,a);break;case "nowPlaying":rUa(this,a);break;case "onStateChange":qUa(this,a);break;case "onAdStateChange":sUa(this,a);break;case "onVolumeChanged":tUa(this,a);break;case "onSubtitlesTrackChanged":oUa(this,a);break;case "nowAutoplaying":uUa(this,a);break;case "autoplayDismissed":this.ea("autoplayDismissed");break;case "autoplayUpNext":this.J=a.params.videoId||null;this.ea("autoplayUpNext",this.J);break;case "onAutoplayModeChanged":this.C=
a.params.autoplayMode;this.ea("autoplayModeChange",this.C);"DISABLED"==this.C&&this.ea("autoplayDismissed");break;case "onHasPreviousNextChanged":vUa(this,a);break;case "requestAssistedSignIn":this.ea("assistedSignInRequested",a.params.authCode);break;case "onLoopModeChanged":this.ea("loopModeChange",a.params.loopMode);break;default:Z8("Unrecognized action: "+a.action)}};
g.k.IW=function(){if(this.B){var a=this.B;this.B=null;this.hc.videoId!=a&&d9(this,"getNowPlaying")}};
g.k.MR=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Fv())?O7(this.i)&&isNaN(this.D)&&(a=1):a=2);return a};
g.k.Gr=function(a){Z8("Disconnecting with "+a);g.Fa("yt.mdx.remote.remoteClient_",null,void 0);a9(this);this.ea("beforeDisconnect",a);1==a&&e7();jTa(this.i,a);this.dispose()};
g.k.KR=function(){var a=this.hc;this.B&&(a=this.hc.clone(),N8(a,this.B,a.index));return O8(a)};
g.k.VW=function(a){var b=new I8(a);b.videoId&&b.videoId!=this.hc.videoId&&(this.B=b.videoId,g.wt(this.K),this.K=g.ut((0,g.F)(this.IW,this),5E3));var c=[];this.hc.listId==b.listId&&this.hc.videoId==b.videoId&&this.hc.index==b.index||c.push("remoteQueueChange");this.hc.playerState==b.playerState&&this.hc.volume==b.volume&&this.hc.muted==b.muted&&M8(this.hc)==M8(b)&&g.Yh(this.hc.trackData)==g.Yh(b.trackData)||c.push("remotePlayerChange");this.hc.reset(a);g.Qb(c,function(d){this.ea(d)},this)};
g.k.lK=function(){var a=this.i.J.id,b=g.sb(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Fv=function(){var a=this.i;return a.u.isActive()?a.u.u-Date.now():NaN};
g.k.HR=function(){return this.C||"UNSUPPORTED"};
g.k.IR=function(){return this.J||""};
g.k.qQ=function(){if(!isNaN(this.Fv())){var a=this.i.u;g.Hq(a.i);a.start()}};
g.k.SW=function(a,b){d9(this,a,b);mUa(this)};
g.k.WH=function(){var a=g.Ot("SID","")||"",b=g.Ot("SAPISID","")||"",c=g.Ot("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Nc(g.Wa(a),2);b=g.Nc(g.Wa(b),2);c=g.Nc(g.Wa(c),2);return g.Nc(g.Wa(a+","+b+","+c),2)};
Y8.prototype.subscribe=Y8.prototype.subscribe;Y8.prototype.unsubscribeByKey=Y8.prototype.dg;Y8.prototype.getProxyState=Y8.prototype.MR;Y8.prototype.disconnect=Y8.prototype.Gr;Y8.prototype.getPlayerContextData=Y8.prototype.KR;Y8.prototype.setPlayerContextData=Y8.prototype.VW;Y8.prototype.getOtherConnectedRemoteId=Y8.prototype.lK;Y8.prototype.getReconnectTimeout=Y8.prototype.Fv;Y8.prototype.getAutoplayMode=Y8.prototype.HR;Y8.prototype.getAutoplayVideoId=Y8.prototype.IR;Y8.prototype.reconnect=Y8.prototype.qQ;
Y8.prototype.sendMessage=Y8.prototype.SW;Y8.prototype.getXsrfToken=Y8.prototype.WH;Y8.prototype.isCapabilitySupportedOnConnectedDevices=Y8.prototype.XK;g.w(e9,X7);g.k=e9.prototype;g.k.Fh=function(a){return this.Pe.$_gs(a)};
g.k.contains=function(a){return!!this.Pe.$_c(a)};
g.k.get=function(a){return this.Pe.$_g(a)};
g.k.start=function(){this.Pe.$_st()};
g.k.add=function(a,b,c){this.Pe.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Pe.$_r(a,b,c)};
g.k.fB=function(a,b,c,d){this.Pe.$_un(a,b,c,d)};
g.k.xa=function(){for(var a=0,b=this.i.length;a<b;++a)this.Pe.$_ubk(this.i[a]);this.i.length=0;this.Pe=null;X7.prototype.xa.call(this)};
g.k.rQ=function(){this.ea("screenChange")};
g.k.KU=function(){this.ea("onlineScreenChange")};
g8.prototype.$_st=g8.prototype.start;g8.prototype.$_gspc=g8.prototype.lQ;g8.prototype.$_gsppc=g8.prototype.SH;g8.prototype.$_c=g8.prototype.contains;g8.prototype.$_g=g8.prototype.get;g8.prototype.$_a=g8.prototype.add;g8.prototype.$_un=g8.prototype.fB;g8.prototype.$_r=g8.prototype.remove;g8.prototype.$_gs=g8.prototype.Fh;g8.prototype.$_gos=g8.prototype.RH;g8.prototype.$_s=g8.prototype.subscribe;g8.prototype.$_ubk=g8.prototype.dg;var r9=null,x9=!1,f9=null,g9=null,w9=null,k9=[];g.w(y9,g.I);g.k=y9.prototype;g.k.xa=function(){g.I.prototype.xa.call(this);this.i.stop();this.B.stop();this.S.stop();this.ma();var a=this.Tb;a.unsubscribe("proxyStateChange",this.CM,this);a.unsubscribe("remotePlayerChange",this.ww,this);a.unsubscribe("remoteQueueChange",this.eA,this);a.unsubscribe("previousNextChange",this.zM,this);a.unsubscribe("nowAutoplaying",this.tM,this);a.unsubscribe("autoplayDismissed",this.WL,this);this.Tb=this.u=null};
g.k.ij=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.Tb.B)if(z9(this)){if(!R8(this.Tb).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":R8(this.Tb).Ec()?this.Tb.pause():this.Tb.play();break;case "control_play":this.Tb.play();break;case "control_pause":this.Tb.pause();break;case "control_seek":this.K.QH(c[0],c[1]);break;case "control_subtitles_set_track":A9(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=
this.I.getCurrentTime();B9(this,0===c?void 0:c);break;case "control_seek":B9(this,c[0]);break;case "control_subtitles_set_track":A9(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}};
g.k.IT=function(a){this.S.fQ(a)};
g.k.AX=function(a){this.ij("control_subtitles_set_track",g.lc(a)?null:a)};
g.k.SN=function(){var a=this.I.getOption("captions","track");g.lc(a)||A9(this,a)};
g.k.Qb=function(a){this.u.Qb(a,this.I.getVideoData().lengthSeconds)};
g.k.vU=function(){g.lc(this.C)||GUa(this,this.C);this.D=!1};
g.k.CM=function(a,b){this.B.stop();2===b&&this.MN()};
g.k.ww=function(){if(z9(this)){this.i.stop();var a=R8(this.Tb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.vf=1;break;case 1082:case 1083:this.u.vf=0;break;default:this.u.vf=-1}switch(a.playerState){case 1081:case 1:this.Ub(new g.QJ(8));this.LN();break;case 1085:case 3:this.Ub(new g.QJ(9));break;case 1083:case 0:this.Ub(new g.QJ(2));this.K.stop();this.Qb(this.I.getVideoData().lengthSeconds);break;case 1084:this.Ub(new g.QJ(4));break;case 2:this.Ub(new g.QJ(4));this.Qb(M8(a));
break;case -1:this.Ub(new g.QJ(64));break;case -1E3:this.Ub(new g.QJ(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=R8(this.Tb).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,GUa(this,a));a=R8(this.Tb);-1===a.volume||Math.round(this.I.getVolume())===a.volume&&this.I.isMuted()===a.muted||this.Y.isActive()||this.uO()}else FUa(this)};
g.k.zM=function(){this.I.ea("mdxpreviousnextchange")};
g.k.eA=function(){z9(this)||FUa(this)};
g.k.tM=function(a){isNaN(a)||this.I.ea("mdxnowautoplaying",a)};
g.k.WL=function(){this.I.ea("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){z9(this)&&this.Tb.setAudioTrack(this.I.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===R8(this.Tb).playerState?B9(this,a):b&&this.Tb.seekTo(a)};
g.k.uO=function(){var a=this;if(z9(this)){var b=R8(this.Tb);this.events.jc(this.Z);b.muted?this.I.mute():this.I.unMute();this.I.setVolume(b.volume);this.Z=this.events.T(this.I,"onVolumeChange",function(c){EUa(a,c)})}};
g.k.LN=function(){this.i.stop();if(!this.Tb.isDisposed()){var a=R8(this.Tb);a.Ec()&&this.Ub(new g.QJ(8));this.Qb(M8(a));this.i.start()}};
g.k.MN=function(){this.B.stop();this.i.stop();var a=this.Tb.C.getReconnectTimeout();2==this.Tb.B&&!isNaN(a)&&this.B.start()};
g.k.Ub=function(a){this.B.stop();var b=this.J;if(!g.VJ(b,a)){var c=g.T(a,2);c!==g.T(this.J,2)&&this.I.Us(c);this.J=a;IUa(this.u,b,a)}};g.w(C9,g.V);C9.prototype.rd=function(){this.i.show()};
C9.prototype.Eb=function(){this.i.hide()};
C9.prototype.u=function(){S6("mdx-privacy-popup-cancel");this.Eb()};
C9.prototype.B=function(){S6("mdx-privacy-popup-confirm");this.Eb()};g.w(D9,g.V);D9.prototype.onStateChange=function(a){HUa(this,a.state)};g.w(E9,g.JP);E9.prototype.D=function(){var a=this.I.getOption("remote","receivers");a&&1<a.length&&!this.I.getOption("remote","quickCast")?(this.Yn=g.Rb(a,this.i,this),g.KP(this,g.pm(a,this.i)),a=this.I.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.Wh(a),this.enable(!0)):this.enable(!1)};
E9.prototype.i=function(a){return a.key};
E9.prototype.Zi=function(a){return"cast-selector-receiver"===a?"Cast...":this.Yn[a].name};
E9.prototype.Cf=function(a){g.JP.prototype.Cf.call(this,a);this.I.setOption("remote","currentReceiver",this.Yn[a]);this.Bb.Eb()};g.w(F9,g.VM);g.k=F9.prototype;
g.k.create=function(){var a=this.player.V(),b=g.$E(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.N("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.N("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.N("enable_cast_short_lived_lounge_token")};zUa(b,a);this.subscriptions.push(g.hv("yt-remote-before-disconnect",this.HT,this));this.subscriptions.push(g.hv("yt-remote-connection-change",this.jV,this));this.subscriptions.push(g.hv("yt-remote-receiver-availability-change",this.BM,
this));this.subscriptions.push(g.hv("yt-remote-auto-connect",this.hV,this));this.subscriptions.push(g.hv("yt-remote-receiver-resumed",this.gV,this));this.subscriptions.push(g.hv("mdx-privacy-popup-confirm",this.wW,this));this.subscriptions.push(g.hv("mdx-privacy-popup-cancel",this.vW,this));this.BM()};
g.k.load=function(){this.player.cancelPlayback();g.VM.prototype.load.call(this);this.ai=new y9(this,this.player,this.Tb);var a=(a=DUa())?a.currentTime:0;var b=v9()?new Q8(p9(),void 0):null;0==a&&b&&(a=M8(R8(b)));0!==a&&this.Qb(a);IUa(this,this.td,this.td);this.player.Rk(6)};
g.k.unload=function(){this.player.ea("mdxautoplaycanceled");this.Sm=this.Gk;g.te(this.ai,this.Tb);this.Tb=this.ai=null;g.VM.prototype.unload.call(this);this.player.Rk(5);G9(this)};
g.k.xa=function(){g.iv(this.subscriptions);g.VM.prototype.xa.call(this)};
g.k.Ik=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.ai.ij.apply(this.ai,[a].concat(g.v(c)))};
g.k.getAdState=function(){return this.vf};
g.k.yk=function(){return this.Tb?R8(this.Tb).yk:!1};
g.k.hasNext=function(){return this.Tb?R8(this.Tb).hasNext:!1};
g.k.Qb=function(a,b){this.mL=a||0;this.player.ea("progresssync",a,b);this.player.Oa("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.mL};
g.k.getProgressState=function(){var a=R8(this.Tb),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.V().N("web_player_mdx_allow_seeking_change_killswitch")?this.player.sf():!a.isAdPlaying()&&this.player.sf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+K8(a):a.B,isAtLiveHead:1>=(a.u?a.i+K8(a):a.i)-this.getCurrentTime(),loaded:a.S,seekableEnd:a.u?a.i+K8(a):a.i,seekableStart:0<
a.C?a.C+K8(a):a.C}};
g.k.nextVideo=function(){this.Tb&&this.Tb.nextVideo()};
g.k.sA=function(){this.Tb&&this.Tb.sA()};
g.k.HT=function(a){1===a&&(this.wF=this.Tb?R8(this.Tb):null)};
g.k.jV=function(){var a=v9()?new Q8(p9(),void 0):null;if(a){var b=this.Sm;this.loaded&&this.unload();this.Tb=a;this.wF=null;b.key!==this.Gk.key&&(this.Sm=b,this.load())}else g.se(this.Tb),this.Tb=null,this.loaded&&(this.unload(),(a=this.wF)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,M8(a)));this.player.ea("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.BM=function(){var a=[this.Gk],b=a.concat,c=AUa();E8()&&g.Mz("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Yn=b.call(a,c);a=q9()||this.Gk;H9(this,a);this.player.Oa("onMdxReceiversChange")};
g.k.hV=function(){var a=q9();H9(this,a)};
g.k.gV=function(){this.Sm=q9()};
g.k.wW=function(){this.Fw=!0;G9(this);x9=!1;r9&&t9(r9,1);r9=null};
g.k.vW=function(){this.Fw=!1;G9(this);H9(this,this.Gk);this.Sm=this.Gk;x9=!1;r9=null;this.player.playVideo()};
g.k.jf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Yn;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?G8():H9(this,b)),this.loaded?this.Sm:this.Gk;case "quickCast":return 2===this.Yn.length&&"cast-selector-receiver"===this.Yn[1].key?(b&&G8(),!0):!1}};
g.k.tG=function(){this.Tb.tG()};
g.k.Hi=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.UM("remote",F9);})(_yt_player);


}
/*
     FILE ARCHIVED ON 17:59:26 Oct 08, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:13:51 Jun 11, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.74
  exclusion.robots: 0.033
  exclusion.robots.policy: 0.018
  esindex: 0.015
  cdx.remote: 496.072
  LoadShardBlock: 43.154 (3)
  PetaboxLoader3.datanode: 50.822 (4)
  load_resource: 11.746
*/