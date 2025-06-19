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

(function(g){var window=this;'use strict';var c_a=function(a,b,c){null!=c&&(g.Bd(a,b,1),a=a.j,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.Xe=b,g.We=c,g.zd(a,g.Xe),g.zd(a,g.We))},d_a=function(a,b,c){b=g.Rd(b,c);
null!=b&&(g.Bd(a,c,0),a.j.j.push(b?1:0))},e_a=function(a,b){return g.Wf(a,b)},f_a=function(a,b){b=b instanceof g.Xg?b:g.ch(b,/^data:image\//i.test(b));
a.src=g.Yg(b)},h_a=function(a){g.F.call(this,a,-1,g_a)},i_a=function(a){g.F.call(this,a)},l_a=function(){return[1,
j_a,2,k_a]},m_a=function(){return[1,
g.wq,i_a,l_a]},n_a=function(a){g.F.call(this,a)},o_a=function(a){g.F.call(this,a)},q_a=function(){return[1,
g.yq,2,g.yq,3,p_a]},r_a=function(a){g.F.call(this,a)},t_a=function(){return[1,
g.yq,2,g.yq,3,s_a,4,p_a]},v_a=function(){return[1,
g.lf,o_a,q_a,u_a,2,g.lf,r_a,t_a,u_a]},z_a=function(){return[1,
w_a,g.$i,2,x_a,g.$i,3,y_a,g.$i]},C_a=function(){return[1,
A_a,g.Zi,2,B_a,g.Zi,3,g.lf,h_a,m_a,g.Zi]},E_a=function(){return[1,
g.wq,g.Xi,z_a,2,D_a,g.Yi,C_a]},I_a=function(){return[1,
g.yq,5,F_a,2,D_a,n_a,v_a,3,G_a,6,H_a,4,g.wq,g.Wi,E_a]},l6=function(a){g.Rk(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Xa()).toString(36));
return a},m6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Hda(a.B,b,c)},J_a=function(a){if(a===g.Kn)throw Error("ES6 Iteration protocol does NOT adjust control flow when StopIteration is thrown from callback helper functions. If your code relies on this behavior, consider throwing a different error and catching it to terminate iteration.");
throw a;},K_a=function(a){if(a instanceof g.In)return a;
if("function"==typeof a.Jh)return a.Jh(!1);if(g.Pa(a)){var b=0,c=new g.In;c.next=function(){for(;;){if(b>=a.length)return g.s1;if(b in a)return g.Jn(a[b++]);b++}};
var d=c.next;c.Qm=function(){return g.Ln(d.call(c))};
return c}throw Error("Not implemented");},L_a=function(a,b,c){if(g.Pa(a))try{g.yc(a,b,c)}catch(e){J_a(e)}else for(a=K_a(a);;){var d=void 0;
try{d=a.Qm()}catch(e){if(e===g.Kn)break;throw e;}try{b.call(c,d,void 0,a)}catch(e){J_a(e)}}},M_a=function(a,b){var c=[];
L_a(b,function(d){try{var e=g.eq.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Dia(e)&&c.push(d)},a);
return c},N_a=function(a,b){M_a(a,b).forEach(function(c){g.eq.prototype.remove.call(this,c)},a)},O_a=function(a){if(a.oa){if(a.oa.locationOverrideToken)return{locationOverrideToken:a.oa.locationOverrideToken};
if(null!=a.oa.latitudeE7&&null!=a.oa.longitudeE7)return{latitudeE7:a.oa.latitudeE7,longitudeE7:a.oa.longitudeE7}}return null},P_a=function(a,b){g.ec(a,b)||a.push(b)},n6=function(a){var b=0,c;
for(c in a)b++;return b},Q_a=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},o6=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return Q_a(a)},R_a=function(a,b,c,d){var e=new g.Ek(null,void 0);
a&&g.Fk(e,a);b&&g.Gk(e,b);c&&g.Hk(e,c);d&&(e.K=d);return e},p6=function(a,b){g.ot[a]=!0;
var c=g.mt();c&&c.publish.apply(c,arguments);g.ot[a]=!1},q6=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Np;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",S_a(this,a.capabilities||""),T_a(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},S_a=function(a,b){a.capabilities.clear();
g.Pn(b.split(","),g.Wa(e_a,U_a)).forEach(function(c){a.capabilities.add(c)})},T_a=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},r6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},s6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},V_a=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},W_a=function(a){return new r6(a)},X_a=function(a){return Array.isArray(a)?g.Vl(a,W_a):[]},t6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},u6=function(a){return Array.isArray(a)?"["+g.Vl(a,t6).join(",")+"]":"null"},v6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},Y_a=function(a){return g.Vl(a,function(b){return{key:b.id,
name:b.name}})},w6=function(a,b){return g.$b(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},x6=function(a,b){return g.$b(a,function(c){return s6(c,b)})},Z_a=function(){var a=(0,g.Jw)();
a&&N_a(a,a.j.Jh(!0))},y6=function(){var a=g.Mw("yt-remote-connected-devices")||[];
g.uc(a);return a},$_a=function(a){if(g.gc(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Vl(a,function(d,e){return 0==e?d:d.substring(c.length)})},a0a=function(a){g.Lw("yt-remote-connected-devices",a,86400)},A6=function(){if(z6)return z6;
var a=g.Mw("yt-remote-device-id");a||(a=v6(),g.Lw("yt-remote-device-id",a,31536E3));for(var b=y6(),c=1,d=a;g.ec(b,d);)c++,d=a+"#"+c;return z6=d},B6=function(){var a=y6(),b=A6();
g.ec(a,b);g.Ow()&&g.xc(a,b);a=$_a(a);if(g.gc(a))try{g.lma("remote_sid")}catch(c){}else try{g.ts("remote_sid",a.join(","),-1)}catch(c){}},b0a=function(){return g.Mw("yt-remote-session-browser-channel")},c0a=function(){return g.Mw("yt-remote-local-screens")||[]},d0a=function(){g.Lw("yt-remote-lounge-token-expiration",!0,86400)},e0a=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Vl(c0a(),function(d){return d.loungeToken}),c=g.Vl(a,function(d){return d.loungeToken});
g.em(c,function(d){return!g.ec(b,d)})&&d0a();
g.Lw("yt-remote-local-screens",a,31536E3)},C6=function(a){a||(g.Nw("yt-remote-session-screen-id"),g.Nw("yt-remote-session-video-id"));
B6();a=y6();g.jc(a,A6());a0a(a)},f0a=function(){if(!D6){var a=g.nq();
a&&(D6=new g.bq(a))}},g0a=function(){f0a();
return D6?!!D6.get("yt-remote-use-staging-server"):!1},E6=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},h0a=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},i0a=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},F6=function(a){a.length?j0a(a.shift(),function(){F6(a)}):G6()},k0a=function(a){return"chrome-extension://"+a+"/cast_sender.js"},j0a=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.fk(d,g.Sp(a));(document.head||document.documentElement).appendChild(d)},l0a=function(){var a=E6(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20220301220048/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20220301220048/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},G6=function(){var a=i0a();
a&&a(!1,"No cast extension found")},H6=function(){if(m0a){var a=2,b=i0a(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;j0a("//web.archive.org/web/20220301220048/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",G6,c)}},n0a=function(){H6();
var a=l0a();a.push("//web.archive.org/web/20220301220048/https://www.gstatic.com/eureka/clank/cast_sender.js");F6(a)},p0a=function(){H6();
var a=l0a();a.push.apply(a,g.v(o0a.map(k0a)));a.push("//web.archive.org/web/20220301220048/https://www.gstatic.com/eureka/clank/cast_sender.js");F6(a)},q0a=function(){this.j=I6();
this.j.sz("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels")},r0a=function(){this.j=I6();
this.j.sz("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},s0a=function(){this.j=I6();
this.j.sz("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},J6=function(a,b,c){g.I.call(this);
this.J=null!=c?(0,g.Ta)(a,c):a;this.fg=b;this.D=(0,g.Ta)(this.AS,this);this.j=!1;this.u=0;this.B=this.Qb=null;this.C=[]},K6=function(a,b,c){g.I.call(this);
this.C=null!=c?a.bind(c):a;this.fg=b;this.B=null;this.j=!1;this.u=0;this.Qb=null},L6=function(a){a.Qb=g.Ti(function(){a.Qb=null;
a.j&&!a.u&&(a.j=!1,L6(a))},a.fg);
var b=a.B;a.B=null;a.C.apply(null,b)},M6=function(){},N6=function(){g.xf.call(this,"p")},O6=function(){g.xf.call(this,"o")},t0a=function(){var a=new g.C.TextEncoder;
return new g.C.ReadableStream({start:function(b){for(var c=g.q(["test\r\n","test\r\n"]),d=c.next();!d.done;d=c.next())b.enqueue(a.encode(d.value));b.close()}})},u0a=function(a){return(a=/\/\/([^\/]+)\//.exec(a))?a[1].endsWith("google.com"):!1},w0a=function(a,b){if(!v0a){v0a=!0;
var c;a:{if(c=g.C.navigator)if(c=c.userAgent)break a;c=""}(-1==c.indexOf("Chrome")||-1!=c.indexOf("Edg")?0:90<=parseInt(/Chrome\/(\d+)/.exec(c)[1],10))&&u0a(a)&&window&&window.document&&u0a(window.document.URL)&&(c=document.createElement("meta"),c.httpEquiv="origin-trial",c.content="A0eNbltY1nd4MP7XTHXnTxWogDL6mWTdgIIKfKOTJoUHNbFFMZQBoiHHjJ9UK9lgYndWFaxOWR7ld8uUjcWmcwIAAAB/eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkZldGNoVXBsb2FkU3RyZWFtaW5nIiwiZXhwaXJ5IjoxNjM2NTAyMzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
document.head.appendChild(c),(new Request("",{body:new ReadableStream,method:"POST"})).headers.has("Content-Type")||(g.C.fetch(a+"?ot=1",{method:"POST",body:"test\r\n"}).catch(b),g.C.fetch(a+"?ot=2",{method:"POST",body:t0a(),vT:!1}).catch(b),g.C.fetch(a+"?ot=3",{method:"POST",body:t0a(),vT:!0}).catch(b)))}},P6=function(){return x0a=x0a||new g.xg},y0a=function(a){g.xf.call(this,"serverreachability",a)},Q6=function(a){var b=P6();
b.dispatchEvent(new y0a(b,a))},z0a=function(a,b){g.xf.call(this,"statevent",a);
this.stat=b},R6=function(a){var b=P6();
b.dispatchEvent(new z0a(b,a))},A0a=function(a,b,c,d){g.xf.call(this,"timingevent",a);
this.size=b;this.xu=d},S6=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},T6=function(){},U6=function(a,b,c,d){this.D=a;
this.C=b;this.Gb=c;this.Eb=d||1;this.Ya=new g.Zk(this);this.kb=45E3;a=g.DD?125:void 0;this.bb=new g.Si(a);this.Ia=null;this.B=!1;this.N=this.Va=this.K=this.Ja=this.oa=this.qb=this.X=null;this.ma=[];this.j=null;this.Z=0;this.J=this.xa=null;this.rb=-1;this.Ea=!1;this.jb=0;this.Sa=null;this.Db=this.Oa=this.tb=this.ya=!1;this.u=new B0a},B0a=function(){this.B=null;
this.j="";this.u=!1},V6=function(a,b,c){a.Ja=1;
a.K=l6(b.clone());a.N=c;a.ya=!0;C0a(a,null)},C0a=function(a,b){a.oa=Date.now();
W6(a);a.Va=a.K.clone();m6(a.Va,"t",a.Eb);a.Z=0;var c=a.D.Ja;a.u=new B0a;a.j=D0a(a.D,c?b:null,!a.N);0<a.jb&&(a.Sa=new K6((0,g.Ta)(a.TJ,a,a.j),a.jb));a.Ya.Pa(a.j,"readystatechange",a.DS);b=a.Ia?g.dg(a.Ia):{};a.N?(a.xa||(a.xa="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.j.send(a.Va,a.xa,a.N,b)):(a.xa="GET",a.j.send(a.Va,a.xa,null,b));Q6(1)},X6=function(a){return a.j?a.u.u?!0:!(!g.Nj(a.j)&&!g.Oj(a.j)):!1},E0a=function(a){return a.j?"GET"==a.xa&&2!=a.Ja&&a.D.fd:!1},G0a=function(a,b,
c){for(var d=!0,e;!a.Ea&&a.Z<c.length;)if(e=F0a(a,c),e==Y6){4==b&&(a.J=4,R6(14),d=!1);
break}else if(e==Z6){a.J=4;R6(15);d=!1;break}else $6(a,e);E0a(a)&&e!=Y6&&e!=Z6&&(a.u.j="",a.Z=0);4!=b||0!=c.length||a.u.u||(a.J=1,R6(16),d=!1);a.B=a.B&&d;d?0<c.length&&!a.Db&&(a.Db=!0,a.D.NG(a)):(a7(a),b7(a))},F0a=function(a,b){var c=a.Z,d=b.indexOf("\n",c);
if(-1==d)return Y6;c=Number(b.substring(c,d));if(isNaN(c))return Z6;d+=1;if(d+c>b.length)return Y6;b=b.substr(d,c);a.Z=d+c;return b},W6=function(a){a.qb=Date.now()+a.kb;
H0a(a,a.kb)},H0a=function(a,b){if(null!=a.X)throw Error("WatchDog timer not null");
a.X=S6((0,g.Ta)(a.BS,a),b)},c7=function(a){a.X&&(g.C.clearTimeout(a.X),a.X=null)},b7=function(a){a.D.cf()||a.Ea||I0a(a.D,a)},a7=function(a){c7(a);
g.uf(a.Sa);a.Sa=null;a.bb.stop();g.$k(a.Ya);if(a.j){var b=a.j;a.j=null;b.abort();b.dispose()}},$6=function(a,b){try{var c=a.D;
if(0!=c.qf&&(c.j==a||d7(c.u,a)))if(!a.Oa&&d7(c.u,a)&&3==c.qf){try{var d=c.Wf.j.parse(b)}catch(y){d=null}if(Array.isArray(d)&&3==d.length){var e=d;if(0==e[0])a:{if(!c.N){if(c.j)if(c.j.oa+3E3<a.oa)e7(c),f7(c);else break a;g7(c);R6(18)}}else c.Dc=e[1],0<c.Dc-c.Oa&&37500>e[2]&&c.bb&&0==c.ma&&!c.Z&&(c.Z=S6((0,g.Ta)(c.GS,c),6E3));if(1>=h7(c.u)&&c.Tb){try{c.Tb()}catch(y){}c.Tb=void 0}}else i7(c,11)}else if((a.Oa||c.j==a)&&e7(c),!g.nb(b))for(e=c.Wf.j.parse(b),b=0;b<e.length;b++){var f=e[b];c.Oa=f[0];f=f[1];
if(2==c.qf)if("c"==f[0]){c.C=f[1];c.Db=f[2];var k=f[3];null!=k&&(c.UJ=k);var l=f[5];null!=l&&"number"===typeof l&&0<l&&(c.Va=1.5*l);d=c;var m=a.j;if(m){var n=g.Pj(m,"X-Client-Wire-Protocol");if(n){var p=d.u;!p.j&&(g.vb(n,"spdy")||g.vb(n,"quic")||g.vb(n,"h2"))&&(p.C=p.D,p.j=new Set,p.u&&(j7(p,p.u),p.u=null))}if(d.ya){var r=g.Pj(m,"X-HTTP-Session-Id");r&&(d.Xc=r,g.Rk(d.Ia,d.ya,r))}}c.qf=3;c.D&&c.D.aK();c.Sb&&(c.Ub=Date.now()-a.oa);d=c;var t=a;d.Wb=J0a(d,d.Ja?d.Db:null,d.Gb);if(t.Oa){K0a(d.u,t);var u=
t,x=d.Va;x&&u.setTimeout(x);u.X&&(c7(u),W6(u));d.j=t}else L0a(d);0<c.B.length&&k7(c)}else"stop"!=f[0]&&"close"!=f[0]||i7(c,7);else 3==c.qf&&("stop"==f[0]||"close"==f[0]?"stop"==f[0]?i7(c,7):c.disconnect():"noop"!=f[0]&&c.D&&c.D.ZJ(f),c.ma=0)}Q6(4)}catch(y){}},M0a=function(a,b){this.j=a;
this.map=b;this.context=null},N0a=function(a){this.D=a||10;
g.C.PerformanceNavigationTiming?(a=g.C.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(g.C.chrome&&g.C.chrome.loadTimes&&g.C.chrome.loadTimes()&&g.C.chrome.loadTimes().wasFetchedViaSpdy);this.C=a?this.D:1;this.j=null;1<this.C&&(this.j=new Set);this.u=null;this.B=[]},O0a=function(a){return a.u?!0:a.j?a.j.size>=a.C:!1},h7=function(a){return a.u?1:a.j?a.j.size:0},d7=function(a,b){return a.u?a.u==b:a.j?a.j.has(b):!1},j7=function(a,
b){a.j?a.j.add(b):a.u=b},K0a=function(a,b){a.u&&a.u==b?a.u=null:a.j&&a.j.has(b)&&a.j.delete(b)},l7=function(a){if(null!=a.u)return a.B.concat(a.u.ma);
if(null!=a.j&&0!==a.j.size){var b=a.B;a=g.q(a.j.values());for(var c=a.next();!c.done;c=a.next())b=b.concat(c.value.ma);return b}return g.mc(a.B)},P0a=function(a,b){var c=new T6;
if(g.C.Image){var d=new Image;d.onload=g.Wa(m7,c,d,"TestLoadImage: loaded",!0,b);d.onerror=g.Wa(m7,c,d,"TestLoadImage: error",!1,b);d.onabort=g.Wa(m7,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=g.Wa(m7,c,d,"TestLoadImage: timeout",!1,b);g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},1E4);
d.src=a}else b(!1)},m7=function(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}},Q0a=function(){this.j=new M6},R0a=function(a,b,c){var d=c||"";
try{g.Dk(a,function(e,f){var k=e;g.Qa(e)&&(k=g.oj(e));b.push(d+f+"="+encodeURIComponent(k))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;
}},n7=function(a,b,c){return c&&c.iV?c.iV[a]||b:b},S0a=function(a){this.B=[];
this.Db=this.Wb=this.Ia=this.Gb=this.j=this.Xc=this.ya=this.Ea=this.K=this.qb=this.X=null;this.Qd=this.Sa=0;this.Gd=n7("failFast",!1,a);this.bb=this.Z=this.N=this.J=this.D=null;this.Lb=!0;this.Eb=this.Dc=this.Oa=-1;this.tb=this.ma=this.oa=0;this.od=n7("baseRetryDelayMs",5E3,a);this.ke=n7("retryDelaySeedMs",1E4,a);this.Pd=n7("forwardChannelMaxRetries",2,a);this.lc=n7("forwardChannelRequestTimeoutMs",2E4,a);this.Wc=a&&a.Eha||void 0;this.fd=a&&a.Cha||!1;this.Va=void 0;this.Ja=a&&a.UZ||!1;this.C="";this.u=
new N0a(a&&a.xga);this.Wf=new Q0a;this.kb=a&&a.Hga||!1;this.jb=a&&a.Fga||!1;this.kb&&this.jb&&(this.jb=!1);this.le=a&&a.rga||!1;a&&a.Jga&&(this.Lb=!1);this.Sb=!this.kb&&this.Lb&&a&&a.Cga||!1;this.Tb=void 0;this.Ub=0;this.Ya=!1;this.xa=null;this.Ug=!a||!1!==a.Ega;this.rb=null},f7=function(a){a.j&&(o7(a),a.j.cancel(),a.j=null)},T0a=function(a){f7(a);
a.N&&(g.C.clearTimeout(a.N),a.N=null);e7(a);a.u.cancel();a.J&&("number"===typeof a.J&&g.C.clearTimeout(a.J),a.J=null)},k7=function(a){O0a(a.u)||a.J||(a.J=!0,g.Ii(a.WJ,a),a.oa=0)},V0a=function(a,b){if(h7(a.u)>=a.u.C-(a.J?1:0))return!1;
if(a.J)return a.B=b.ma.concat(a.B),!0;if(1==a.qf||2==a.qf||a.oa>=(a.Gd?0:a.Pd))return!1;a.J=S6((0,g.Ta)(a.WJ,a,b),U0a(a,a.oa));a.oa++;return!0},X0a=function(a,b){var c;
b?c=b.Gb:c=a.Sa++;var d=a.Ia.clone();g.Rk(d,"SID",a.C);g.Rk(d,"RID",c);g.Rk(d,"AID",a.Oa);p7(a,d);a.K&&a.X&&g.Yk(d,a.K,a.X);c=new U6(a,a.C,c,a.oa+1);null===a.K&&(c.Ia=a.X);b&&(a.B=b.ma.concat(a.B));b=W0a(a,c,1E3);c.setTimeout(Math.round(.5*a.lc)+Math.round(.5*a.lc*Math.random()));j7(a.u,c);V6(c,d,b)},p7=function(a,b){a.Ea&&g.Hf(a.Ea,function(c,d){g.Rk(b,d,c)});
a.D&&g.Dk({},function(c,d){g.Rk(b,d,c)})},W0a=function(a,b,c){c=Math.min(a.B.length,c);
var d=a.D?(0,g.Ta)(a.D.HS,a.D,a):null;a:for(var e=a.B,f=-1;;){var k=["count="+c];-1==f?0<c?(f=e[0].j,k.push("ofs="+f)):f=0:k.push("ofs="+f);for(var l=!0,m=0;m<c;m++){var n=e[m].j,p=e[m].map;n-=f;if(0>n)f=Math.max(0,e[m].j-100),l=!1;else try{R0a(p,k,"req"+n+"_")}catch(r){d&&d(p)}}if(l){d=k.join("&");break a}}a=a.B.splice(0,c);b.ma=a;return d},L0a=function(a){a.j||a.N||(a.tb=1,g.Ii(a.VJ,a),a.ma=0)},g7=function(a){if(a.j||a.N||3<=a.ma)return!1;
a.tb++;a.N=S6((0,g.Ta)(a.VJ,a),U0a(a,a.ma));a.ma++;return!0},o7=function(a){null!=a.xa&&(g.C.clearTimeout(a.xa),a.xa=null)},Y0a=function(a){a.j=new U6(a,a.C,"rpc",a.tb);
null===a.K&&(a.j.Ia=a.X);a.j.jb=0;var b=a.Wb.clone();g.Rk(b,"RID","rpc");g.Rk(b,"SID",a.C);g.Rk(b,"CI",a.bb?"0":"1");g.Rk(b,"AID",a.Oa);g.Rk(b,"TYPE","xmlhttp");p7(a,b);a.K&&a.X&&g.Yk(b,a.K,a.X);a.Va&&a.j.setTimeout(a.Va);var c=a.j;a=a.Db;c.Ja=1;c.K=l6(b.clone());c.N=null;c.ya=!0;C0a(c,a)},e7=function(a){null!=a.Z&&(g.C.clearTimeout(a.Z),a.Z=null)},I0a=function(a,b){var c=null;
if(a.j==b){e7(a);o7(a);a.j=null;var d=2}else if(d7(a.u,b))c=b.ma,K0a(a.u,b),d=1;else return;if(0!=a.qf)if(a.Eb=b.rb,b.B)if(1==d){c=b.N?b.N.length:0;b=Date.now()-b.oa;var e=a.oa;d=P6();d.dispatchEvent(new A0a(d,c,b,e));k7(a)}else L0a(a);else if(e=b.getLastError(),3==e||0==e&&0<a.Eb||!(1==d&&V0a(a,b)||2==d&&g7(a)))switch(c&&0<c.length&&(b=a.u,b.B=b.B.concat(c)),e){case 1:i7(a,5);break;case 4:i7(a,10);break;case 3:i7(a,6);break;default:i7(a,2)}},U0a=function(a,b){var c=a.od+Math.floor(Math.random()*
a.ke);
a.isActive()||(c*=2);return c*b},i7=function(a,b){if(2==b){var c=null;
a.D&&(c=null);var d=(0,g.Ta)(a.a_,a);c||(c=new g.Ek("//web.archive.org/web/20220301220048/https://www.google.com/images/cleardot.gif"),g.C.location&&"http"==g.C.location.protocol||g.Fk(c,"https"),l6(c));P0a(c.toString(),d)}else R6(2);a.qf=0;a.D&&a.D.YJ(b);Z0a(a);T0a(a)},Z0a=function(a){a.qf=0;
a.rb=[];if(a.D){var b=l7(a.u);if(0!=b.length||0!=a.B.length)g.nc(a.rb,b),g.nc(a.rb,a.B),a.u.B.length=0,g.mc(a.B),a.B.length=0;a.D.XJ()}},$0a=function(a){if(0==a.qf)return a.rb;
var b=[];g.nc(b,l7(a.u));g.nc(b,a.B);return b},J0a=function(a,b,c){var d=g.Sk(c);
""!=d.j?(b&&g.Gk(d,b+"."+d.j),g.Hk(d,d.u)):(d=g.C.location,d=R_a(d.protocol,b?b+"."+d.hostname:d.hostname,+d.port,c));b=a.ya;c=a.Xc;b&&c&&g.Rk(d,b,c);g.Rk(d,"VER",a.UJ);p7(a,d);return d},D0a=function(a,b,c){if(b&&!a.Ja)throw Error("Can't create secondary domain capable XhrIo object.");
b=c&&a.fd&&!a.Wc?new g.Hj(new g.zk({RP:!0})):new g.Hj(a.Wc);b.K=a.Ja;return b},a1a=function(){},b1a=function(){if(g.Pc&&!g.Ic(10))throw Error("Environmental error: no available transport.");
},r7=function(a,b){g.xg.call(this);
this.j=new S0a(b);this.J=a;this.u=b&&b.KV||null;a=b&&b.JV||null;b&&b.wga&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.j.X=a;a=b&&b.Pga||null;b&&b.DN&&(a?a["X-WebChannel-Content-Type"]=b.DN:a={"X-WebChannel-Content-Type":b.DN});b&&b.wL&&(a?a["X-WebChannel-Client-Profile"]=b.wL:a={"X-WebChannel-Client-Profile":b.wL});this.j.qb=a;(a=b&&b.Mga)&&!g.nb(a)&&(this.j.K=a);this.K=b&&b.UZ||!1;this.D=b&&b.rha||!1;(b=b&&b.eV)&&!g.nb(b)&&(this.j.ya=b,g.Vf(this.u,b)&&g.ag(this.u,
b));this.C=new q7(this)},c1a=function(a){N6.call(this);
var b=a.__sm__;b?this.data=(this.metadataKey=g.Mf(b))?g.bg(b,this.metadataKey):b:this.data=a},d1a=function(a){O6.call(this);
this.status=1;this.errorCode=a},q7=function(a){this.j=a},s7=function(a){return new e1a(a,a.j)},e1a=function(a,b){this.u=a;
this.j=b},f1a=function(a){return $0a(a.j).map(function(b){b=b.map;
"__data__"in b&&(b=b.__data__,b=a.u.D?Q_a(b):b);return b})},t7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},v7=function(a){u7.dispatchEvent(new g1a(u7,a))},g1a=function(a,b){g.xf.call(this,"statevent",a);
this.stat=b},w7=function(a,b,c,d){this.j=a;
this.C=b;this.K=c;this.J=d||1;this.u=45E3;this.B=new g.Zk(this);this.D=new g.Si;this.D.setInterval(250)},i1a=function(a,b,c){a.rs=1;
a.Cn=l6(b.clone());a.Mp=c;a.ya=!0;h1a(a,null)},x7=function(a,b,c,d,e){a.rs=1;
a.Cn=l6(b.clone());a.Mp=null;a.ya=c;e&&(a.DP=!1);h1a(a,d)},h1a=function(a,b){a.qs=Date.now();
y7(a);a.En=a.Cn.clone();m6(a.En,"t",a.J);a.lz=0;a.Nf=a.j.wD(a.j.Gv()?b:null);0<a.uD&&(a.jz=new K6((0,g.Ta)(a.bK,a,a.Nf),a.uD));a.B.Pa(a.Nf,"readystatechange",a.JS);b=a.Lp?g.dg(a.Lp):{};a.Mp?(a.kz="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Nf.send(a.En,a.kz,a.Mp,b)):(a.kz="GET",a.DP&&!g.Bf&&(b.Connection="close"),a.Nf.send(a.En,a.kz,null,b));a.j.Sj(1)},k1a=function(a,b){var c=a.lz,d=b.indexOf("\n",c);
if(-1==d)return z7;c=Number(b.substring(c,d));if(isNaN(c))return j1a;d+=1;if(d+c>b.length)return z7;b=b.substr(d,c);a.lz=d+c;return b},m1a=function(a,b){a.qs=Date.now();
y7(a);var c=b?window.location.hostname:"";a.En=a.Cn.clone();g.Rk(a.En,"DOMAIN",c);g.Rk(a.En,"t",a.J);try{a.lk=new ActiveXObject("htmlfile")}catch(m){A7(a);a.Dn=7;v7(22);B7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in C7)f=C7[f];else if(f in l1a)f=C7[f]=l1a[f];else{var k=f.charCodeAt(0);if(31<k&&127>k)var l=f;else{if(256>k){if(l="\\x",16>k||256<k)l+="0"}else l="\\u",4096>k&&(l+="0");l+=k.toString(16).toUpperCase()}f=
C7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.th(g.Pg("b/12014412"),d);a.lk.open();a.lk.write(g.nh(c));a.lk.close();a.lk.parentWindow.m=(0,g.Ta)(a.OY,a);a.lk.parentWindow.d=(0,g.Ta)(a.JO,a,!0);a.lk.parentWindow.rpcClose=(0,g.Ta)(a.JO,a,!1);c=a.lk.createElement("DIV");a.lk.parentWindow.document.body.appendChild(c);d=g.bh(a.En.toString());d=g.Kh(g.Yg(d));d=g.th(g.Pg("b/12014412"),'<iframe src="'+d+'"></iframe>');g.vh(c,d);a.j.Sj(1)},y7=function(a){a.vD=Date.now()+
a.u;
n1a(a,a.u)},n1a=function(a,b){if(null!=a.us)throw Error("WatchDog timer not null");
a.us=t7((0,g.Ta)(a.IS,a),b)},D7=function(a){a.us&&(g.C.clearTimeout(a.us),a.us=null)},B7=function(a){a.j.cf()||a.Kp||a.j.mz(a)},A7=function(a){D7(a);
g.uf(a.jz);a.jz=null;a.D.stop();g.$k(a.B);if(a.Nf){var b=a.Nf;a.Nf=null;b.abort();b.dispose()}a.lk&&(a.lk=null)},E7=function(a,b){try{a.j.cK(a,b),a.j.Sj(4)}catch(c){}},p1a=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;o1a(a,b,function(k){k?c(!0):g.C.setTimeout(function(){p1a(a,b,c,d,f)},f)})}},o1a=function(a,b,c){var d=new Image;
d.onload=function(){try{F7(d),c(!0)}catch(e){}};
d.onerror=function(){try{F7(d),c(!1)}catch(e){}};
d.onabort=function(){try{F7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{F7(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
f_a(d,a)},F7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},q1a=function(a){this.j=a;
this.u=new M6},r1a=function(a){var b=G7(a.j,a.Uv,"/mail/images/cleardot.gif");
l6(b);p1a(b.toString(),5E3,(0,g.Ta)(a.CT,a),3,2E3);a.Sj(1)},I7=function(a){var b=a.j.X;
if(null!=b)v7(5),b?(v7(11),H7(a.j,a,!1)):(v7(12),H7(a.j,a,!0));else if(a.Tg=new w7(a,void 0,void 0,void 0),a.Tg.Lp=a.xD,b=a.j,b=G7(b,b.Gv()?a.Fv:null,a.yD),v7(5),!g.Pc||g.Ic(10))m6(b,"TYPE","xmlhttp"),x7(a.Tg,b,!1,a.Fv,!1);else{m6(b,"TYPE","html");var c=a.Tg;a=!!a.Fv;c.rs=3;c.Cn=l6(b.clone());m1a(c,a)}},J7=function(a,b,c){this.j=1;
this.u=[];this.B=[];this.D=new M6;this.N=a||null;this.X=null!=b?b:null;this.K=c||!1},s1a=function(a,b){this.j=a;
this.map=b;this.context=null},t1a=function(a,b,c,d){g.xf.call(this,"timingevent",a);
this.size=b;this.xu=d},u1a=function(a){g.xf.call(this,"serverreachability",a)},v1a=function(a){a.KS(1,0);
a.nz=G7(a,null,a.zD);K7(a)},w1a=function(a){a.On&&(a.On.abort(),a.On=null);
a.Re&&(a.Re.cancel(),a.Re=null);a.Rl&&(g.C.clearTimeout(a.Rl),a.Rl=null);L7(a);a.gh&&(a.gh.cancel(),a.gh=null);a.Fn&&(g.C.clearTimeout(a.Fn),a.Fn=null)},x1a=function(a,b){if(0==a.j)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new s1a(a.LS++,b));2!=a.j&&3!=a.j||K7(a)},y1a=function(a){var b=0;
a.Re&&b++;a.gh&&b++;return b},K7=function(a){a.gh||a.Fn||(a.Fn=t7((0,g.Ta)(a.gK,a),0),a.xs=0)},A1a=function(a,b){if(1==a.j){if(!b){a.Iv=Math.floor(1E5*Math.random());
b=a.Iv++;var c=new w7(a,"",b,void 0);c.Lp=a.Bk;var d=M7(a),e=a.nz.clone();g.Rk(e,"RID",b);g.Rk(e,"CVER","1");N7(a,e);i1a(c,e,d);a.gh=c;a.j=2}}else 3==a.j&&(b?z1a(a,b):0==a.u.length||a.gh||z1a(a))},z1a=function(a,b){if(b)if(6<a.Np){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.Iv-1;b=M7(a)}else c=b.K,b=b.Mp;else c=a.Iv++,b=M7(a);var d=a.nz.clone();g.Rk(d,"SID",a.C);g.Rk(d,"RID",c);g.Rk(d,"AID",a.ys);N7(a,d);c=new w7(a,a.C,c,a.xs+1);c.Lp=a.Bk;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.gh=c;i1a(c,d,b)},N7=function(a,b){a.Vf&&(a=a.Vf.kK())&&g.Hf(a,function(c,d){g.Rk(b,d,c)})},M7=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.Np&&0<b){var d=a.u[0].j;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Nr:e.Nr},f++){e.Nr=a.u[f].j;var k=a.u[f].map;e.Nr=6>=a.Np?f:e.Nr-d;try{g.Hf(k,function(l){return function(m,n){c.push("req"+l.Nr+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Nr+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},B1a=function(a){a.Re||a.Rl||(a.J=1,a.Rl=t7((0,g.Ta)(a.fK,a),0),a.ws=0)},O7=function(a){if(a.Re||a.Rl||3<=a.ws)return!1;
a.J++;a.Rl=t7((0,g.Ta)(a.fK,a),C1a(a,a.ws));a.ws++;return!0},H7=function(a,b,c){a.yC=c;
a.Ck=b.Ql;a.K||v1a(a)},L7=function(a){null!=a.Op&&(g.C.clearTimeout(a.Op),a.Op=null)},C1a=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},P7=function(a,b){if(2==b||9==b){var c=null;
a.Vf&&(c=null);var d=(0,g.Ta)(a.ZZ,a);c||(c=new g.Ek("//web.archive.org/web/20220301220048/https://www.google.com/images/cleardot.gif"),l6(c));o1a(c.toString(),1E4,d)}else v7(2);D1a(a,b)},D1a=function(a,b){a.j=0;
a.Vf&&a.Vf.hK(b);E1a(a);w1a(a)},E1a=function(a){a.j=0;
a.Ck=-1;if(a.Vf)if(0==a.B.length&&0==a.u.length)a.Vf.AD();else{var b=g.mc(a.B),c=g.mc(a.u);a.B.length=0;a.u.length=0;a.Vf.AD(b,c)}},G7=function(a,b,c){var d=g.Sk(c);
if(""!=d.j)b&&g.Gk(d,b+"."+d.j),g.Hk(d,d.u);else{var e=window.location;d=R_a(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Hv&&g.Hf(a.Hv,function(f,k){g.Rk(d,k,f)});
g.Rk(d,"VER",a.Np);N7(a,d);return d},F1a=function(){},G1a=function(){this.j=[];
this.u=[]},H1a=function(){},I6=function(){if(!Q7){Q7=new g.Vi(new H1a);
var a=g.Kr("client_streamz_web_flush_count",-1);-1!==a&&(Q7.C=a)}return Q7},R7=function(a){g.xf.call(this,"channelMessage");
this.message=a},S7=function(a){g.xf.call(this,"channelError");
this.error=a},I1a=function(a,b){this.action=a;
this.params=b||{}},T7=function(a,b){g.I.call(this);
this.j=new g.L(this.FY,0,this);g.K(this,this.j);this.fg=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.Ta)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Ta)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},U7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.oa=a;this.K=b;this.B=new g.aq;this.u=new T7(this.CZ,this);this.j=null;this.Z=!1;this.J=null;this.X="";this.N=this.D=0;this.C=[];this.ya=c;this.ma=d;this.Ea=e;this.xa=new q0a;this.Ia=new r0a;this.Ja=new s0a},V7=function(a){if(a.j){var b=a.ma(),c=a.j.Bk||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.j.Bk=c}},W7=function(a){this.port=this.domain="";
this.j="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.uj(4,a))||"";b&&(this.port=":"+b);this.domain=g.vj(a)||"";a=g.Ab();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.zb(a,"10.0")&&(this.u=!1))},X7=function(a,b){var c=a.j;
a.u&&(c="https://"+a.domain+a.port+a.j);return g.Dj(c+b,{})},Y7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Wa(a.C,d,!0),onError:g.Wa(a.B,e),onTimeout:g.Wa(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.js(b,a)},Z7=function(a,b){g.xg.call(this);
var c=this;this.Mc=a();this.Mc.subscribe("handlerOpened",this.PS,this);this.Mc.subscribe("handlerClosed",this.NS,this);this.Mc.subscribe("handlerError",function(d,e){c.onError(e)});
this.Mc.subscribe("handlerMessage",this.OS,this);this.j=b},J1a=function(a,b,c){var d=this;
c=void 0===c?function(){return""}:c;
var e=void 0===e?new b1a:e;var f=void 0===f?new g.aq:f;this.pathPrefix=a;this.j=b;this.oa=c;this.D=f;this.N=null;this.J=this.X=this.K=0;this.B=new T7(function(){var k;d.B.isActive();0===(null===(k=d.channel)||void 0===k?void 0:h7(s7(k).j.u))&&d.connect(d.N,d.K)});
this.C={};this.u={};this.Z=!1;this.logger=null;this.ma=[];this.channel=null},L1a=function(a){g.mg(a.channel,"m",function(){a.J=3;
a.B.reset();a.N=null;a.K=0;for(var b=g.q(a.ma),c=b.next();!c.done;c=b.next())c=c.value,a.channel&&a.channel.send(c);a.ma=[];a.ea("webChannelOpened")});
g.mg(a.channel,"n",function(){var b;a.J=0;a.B.isActive()||a.ea("webChannelClosed");var c=null===(b=a.channel)||void 0===b?void 0:f1a(s7(b));c&&(a.ma=[].concat(g.v(c)))});
g.mg(a.channel,"p",function(b){b=b.data;"gracefulReconnect"===b[0]?(a.B.start(),a.channel&&a.channel.close()):a.ea("webChannelMessage",new I1a(b[0],b[1]))});
g.mg(a.channel,"o",function(){K1a(a)||a.B.start();a.ea("webChannelError")})},K1a=function(a){var b;
return 401===(null===(b=a.channel)||void 0===b?void 0:s7(b).j.Eb)},$7=function(a){var b=a.oa();
b?a.C["x-youtube-lounge-xsrf-token"]=b:delete a.C["x-youtube-lounge-xsrf-token"]},a8=function(a){g.xg.call(this);
this.j=a();this.j.subscribe("webChannelOpened",this.SS,this);this.j.subscribe("webChannelClosed",this.QS,this);this.j.subscribe("webChannelError",this.onError,this);this.j.subscribe("webChannelMessage",this.RS,this)},M1a=function(a,b,c,d,e){function f(){return new U7(X7(a,"/bc"),b,!1,c,d)}
c=void 0===c?function(){return""}:c;
return g.P("enable_mdx_web_channel_desktop")?new a8(function(){return new J1a(X7(a,"/wc"),b,c)}):new Z7(f,e)},Q1a=function(){var a=N1a;
O1a();b8.push(a);P1a()},c8=function(a,b){O1a();
var c=R1a(a,String(b));g.gc(b8)?S1a(c):(P1a(),g.yc(b8,function(d){d(c)}))},O1a=function(){b8||(b8=g.Ka("yt.mdx.remote.debug.handlers_")||[],g.Ja("yt.mdx.remote.debug.handlers_",b8,void 0))},S1a=function(a){var b=(d8+1)%50;
d8=b;e8[b]=a;f8||(f8=49==b)},P1a=function(){var a=b8;
if(e8[0]){var b=f8?d8:-1;do{b=(b+1)%50;var c=e8[b];g.yc(a,function(d){d(c)})}while(b!=d8);
e8=Array(50);d8=-1;f8=!1}},R1a=function(a,b){var c=(Date.now()-T1a)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},g8=function(a){g.Vv.call(this);
this.J=a;this.screens=[]},U1a=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},V1a=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Pn(a.screens,function(f){return!!w6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=U1a(a,b[d])||c;return c},W1a=function(a,b){var c=a.screens.length;
a.screens=g.Pn(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},h8=function(a,b,c,d,e){g.Vv.call(this);
this.B=a;this.K=b;this.C=c;this.J=d;this.D=e;this.u=0;this.j=null;this.Qb=NaN},j8=function(a){g8.call(this,"LocalScreenService");
this.u=a;this.j=NaN;i8(this);this.info("Initializing with "+u6(this.screens))},X1a=function(a){if(a.screens.length){var b=g.Vl(a.screens,function(d){return d.id}),c=X7(a.u,"/pairing/get_lounge_token_batch");
Y7(a.u,c,{screen_ids:b.join(",")},(0,g.Ta)(a.GU,a),(0,g.Ta)(a.FU,a))}},i8=function(a){if(g.P("deprecate_pair_servlet_enabled"))return V1a(a,[]);
var b=X_a(c0a());b=g.Pn(b,function(c){return!c.uuid});
return V1a(a,b)},k8=function(a,b){e0a(g.Vl(a.screens,V_a));
b&&d0a()},m8=function(a,b){g.Vv.call(this);
this.J=b;b=(b=g.Mw("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.J(),e=0,f=d.length;e<f;++e){var k=d[e].id;c[k]=g.ec(b,k)}this.j=c;this.D=a;this.B=this.C=NaN;this.u=null;l8("Initialized with "+g.oj(this.j))},n8=function(a,b,c){var d=X7(a.D,"/pairing/get_screen_availability");
Y7(a.D,d,{lounge_token:b.token},(0,g.Ta)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.Ta)(function(){c(!1)},a))},o8=function(a,b){a:if(n6(b)!=n6(a.j))var c=!1;
else{c=g.Pf(b);for(var d=0,e=c.length;d<e;++d)if(!a.j[c[d]]){c=!1;break a}c=!0}c||(l8("Updated online screens: "+g.oj(a.j)),a.j=b,a.ea("screenChange"));Y1a(a)},p8=function(a){isNaN(a.B)||g.fs(a.B);
a.B=g.ds((0,g.Ta)(a.BH,a),0<a.C&&a.C<g.Xa()?2E4:1E4)},l8=function(a){c8("OnlineScreenService",a)},Z1a=function(a){var b={};
g.yc(a.J(),function(c){c.token?b[c.token]=c.id:this.De("Requesting availability of screen w/o lounge token.")});
return b},Y1a=function(a){a=g.Pf(g.If(a.j,function(b){return b}));
g.uc(a);a.length?g.Lw("yt-remote-online-screen-ids",a.join(","),60):g.Nw("yt-remote-online-screen-ids")},q8=function(a,b){b=void 0===b?!1:b;
g8.call(this,"ScreenService");this.C=a;this.K=b;this.j=this.u=null;this.B=[];this.D={};$1a(this)},b2a=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var k=a.Nh(),l=c?x6(k,c):null;c&&(a.K||l)||(l=x6(k,b));if(l){l.uuid=b;var m=r8(a,l);n8(a.j,m,function(n){e(n?m:null)})}else c?a2a(a,c,(0,g.Ta)(function(n){var p=r8(this,new r6({name:d,
screenId:c,loungeToken:n,dialId:b||""}));n8(this.j,p,function(r){e(r?p:null)})},a),f):e(null)},c2a=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},d2a=function(a,b,c){n8(a.j,b,c)},a2a=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){f=k&&k.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.js(X7(a.C,"/pairing/get_lounge_token_batch"),e)},e2a=function(a){a.screens=a.u.Nh();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+u6(a.screens))},$1a=function(a){s8(a);
a.u=new j8(a.C);a.u.subscribe("screenChange",(0,g.Ta)(a.PU,a));e2a(a);a.K||(a.B=X_a(g.Mw("yt-remote-automatic-screen-cache")||[]));s8(a);a.info("Initializing automatic screens: "+u6(a.B));a.j=new m8(a.C,(0,g.Ta)(a.Nh,a,!0));a.j.subscribe("screenChange",(0,g.Ta)(function(){this.ea("onlineScreenChange")},a))},r8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=x6(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.K||f2a(a));s8(a);a.D[b.uuid]=b.id;g.Lw("yt-remote-device-id-map",a.D,31536E3);return b},f2a=function(a){a=g.Pn(a.B,function(b){return"shortLived"!=b.idType});
g.Lw("yt-remote-automatic-screen-cache",g.Vl(a,V_a))},s8=function(a){a.D=g.Mw("yt-remote-device-id-map")||{}},t8=function(a,b,c){g.Vv.call(this);
this.Ea=c;this.B=a;this.j=b;this.C=null},u8=function(a,b){a.C=b;
a.ea("sessionScreen",a.C)},g2a=function(a,b){a.C&&(a.C.token=b,r8(a.B,a.C));
a.ea("sessionScreen",a.C)},v8=function(a,b){c8(a.Ea,b)},w8=function(a,b,c){t8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.ma=(0,g.Ta)(this.YS,this);this.xa=(0,g.Ta)(this.YY,this);this.Z=g.ds(function(){h2a(d,null)},12E4);
this.K=this.D=this.J=this.N=0;this.oa=!1;this.X="unknown"},x8=function(a,b){g.fs(a.K);
a.K=0;0==b?i2a(a):a.K=g.ds(function(){i2a(a)},b)},i2a=function(a){j2a(a,"getLoungeToken");
g.fs(a.D);a.D=g.ds(function(){k2a(a,null)},3E4)},j2a=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.oj(void 0));
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Ta)(function(){v8(this,"Failed to send message: "+b+".")},a)):v8(a,"Sending yt message without session: "+g.oj(c))},y8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.pM(b,function(c){u8(a,c)},function(){return a.Hg()},5)):a.Hg(Error("Waiting for session status timed out."))},m2a=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new r6(b);l2a(a,d,function(e){e?(a.oa=!0,r8(a.B,d),u8(a,d),a.X="unknown",x8(a,c)):(g.Or(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Hg())},5)},h2a=function(a,b){g.fs(a.Z);
a.Z=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?m2a(a,{name:a.j.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.Or(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),y8(a,b.screenId))):(g.Or(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),y8(a,b.screenId)):y8(a,b.screenId):a.Hg(Error("Waiting for session status timed out."))},k2a=function(a,b){g.fs(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.X=c,x8(a,3E4)):(g2a(a,b.loungeToken),a.oa=!1,a.X="unknown",x8(a,b.loungeTokenRefreshIntervalMs))},l2a=function(a,b,c,d){g.fs(a.J);
a.J=0;d2a(a.B,b,function(e){e||0>d?c(e):a.J=g.ds(function(){l2a(a,b,c,d-1)},300)})},n2a=function(a){g.fs(a.N);
a.N=0;g.fs(a.J);a.J=0;g.fs(a.Z);a.Z=0;g.fs(a.D);a.D=0;g.fs(a.K);a.K=0},z8=function(a,b,c,d){t8.call(this,a,b,"DialSession");
this.config_=d;this.u=this.N=null;this.xa="";this.Ja=c;this.Ia=null;this.Z=function(){};
this.X=NaN;this.ya=(0,g.Ta)(this.cR,this);this.D=function(){};
this.K=this.J=0;this.ma=!1;this.oa="unknown"},A8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},o2a=function(a){a.D=a.B.mK(a.xa,a.j.label,a.j.friendlyName,A8(a),function(b,c){a.D=function(){};
a.ma=!0;u8(a,b);"shortLived"==b.idType&&0<c&&B8(a,c)},function(b){a.D=function(){};
a.Hg(b)})},p2a=function(a){var b={};
b.pairingCode=a.xa;b.theme=a.Ja;g0a()&&(b.env_useStageMdx=1);return g.Bj(b)},C8=function(a){return new Promise(function(b){a.xa=v6();
if(a.Ia){var c=new chrome.cast.DialLaunchResponse(!0,p2a(a));b(c);o2a(a)}else a.Z=function(){g.fs(a.X);a.Z=function(){};
a.X=NaN;var d=new chrome.cast.DialLaunchResponse(!0,p2a(a));b(d);o2a(a)},a.X=g.ds(function(){a.Z()},100)})},r2a=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new r6(b);return(new Promise(function(e){q2a(a,d,function(f){f?(a.ma=!0,r8(a.B,d),u8(a,d),B8(a,c)):g.Or(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):C8(a)})},s2a=function(a,b){var c=a.N.receiver.label,d=a.j.friendlyName;
return(new Promise(function(e){b2a(a.B,c,b,d,function(f){f&&f.token&&u8(a,f);e(f)},function(f){v8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):C8(a)})},q2a=function(a,b,c,d){g.fs(a.J);
a.J=0;d2a(a.B,b,function(e){e||0>d?c(e):a.J=g.ds(function(){q2a(a,b,c,d-1)},300)})},B8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
A8(a)&&(g.fs(a.K),a.K=0,0==b?t2a(a):a.K=g.ds(function(){t2a(a)},b))},t2a=function(a){A8(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.oa=c,B8(a,3E4)):(a.ma=!1,a.oa="unknown",g2a(a,b.loungeToken),B8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.oa="noLoungeTokenResponse";B8(a,3E4)})},u2a=function(a){g.fs(a.J);
a.J=0;g.fs(a.K);a.K=0;a.D();a.D=function(){};
g.fs(a.X)},D8=function(a,b){t8.call(this,a,b,"ManualSession");
this.u=g.ds((0,g.Ta)(this.Qt,this,null),150)},E8=function(a,b){g.Vv.call(this);
this.config_=b;this.u=a;this.N=b.appId||"233637DE";this.C=b.theme||"cl";this.X=b.disableCastApi||!1;this.J=b.forceMirroring||!1;this.j=null;this.K=!1;this.B=[];this.D=(0,g.Ta)(this.TX,this)},v2a=function(a,b){return b?g.$b(a.B,function(c){return s6(b,c.label)},a):null},F8=function(a){c8("Controller",a)},N1a=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},G8=function(a){return a.K||!!a.B.length||!!a.j},H8=function(a,b,c){b!=a.j&&(g.uf(a.j),(a.j=b)?(c?a.ea("yt-remote-cast2-receiver-resumed",
b.j):a.ea("yt-remote-cast2-receiver-selected",b.j),b.subscribe("sessionScreen",(0,g.Ta)(a.HO,a,b)),b.subscribe("sessionFailed",function(){return w2a(a,b)}),b.getScreen()?a.ea("yt-remote-cast2-session-change",b.getScreen()):c&&a.j.Qt(null)):a.ea("yt-remote-cast2-session-change",null))},w2a=function(a,b){a.j==b&&a.ea("yt-remote-cast2-session-failed")},x2a=function(a){var b=a.u.lK(),c=a.j&&a.j.j;
a=g.Vl(b,function(d){c&&s6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=v2a(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},C2a=function(a,b,c,d){d.disableCastApi?I8("Cannot initialize because disabled by Mdx config."):y2a()?z2a(b,d)&&(J8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?A2a(a,c):(window.__onGCastApiAvailable=function(e,f){e?A2a(a,c):(K8("Failed to load cast API: "+f),L8(!1),J8(!1),g.Nw("yt-remote-cast-available"),g.Nw("yt-remote-cast-receiver"),
B2a(),c(!1))},d.loadCastApiSetupScript?g.Pw("https://web.archive.org/web/20220301220048/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=E6()&&n0a():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?G6():89<=E6()?p0a():(H6(),F6(o0a.map(k0a))))):I8("Cannot initialize because not running Chrome")},B2a=function(){I8("dispose");
var a=M8();a&&a.dispose();g.Ja("yt.mdx.remote.cloudview.instance_",null,void 0);D2a(!1);g.rt(N8);N8.length=0},O8=function(){return!!g.Mw("yt-remote-cast-installed")},E2a=function(){var a=g.Mw("yt-remote-cast-receiver");
return a?a.friendlyName:null},F2a=function(){I8("clearCurrentReceiver");
g.Nw("yt-remote-cast-receiver")},G2a=function(){return O8()?M8()?M8().getCastSession():(K8("getCastSelector: Cast is not initialized."),null):(K8("getCastSelector: Cast API is not installed!"),null)},Q8=function(){O8()?M8()?P8()?(I8("Requesting cast selector."),M8().requestSession()):(I8("Wait for cast API to be ready to request the session."),N8.push(g.qt("yt-remote-cast2-api-ready",Q8))):K8("requestCastSelector: Cast is not initialized."):K8("requestCastSelector: Cast API is not installed!")},R8=
function(a,b){P8()?M8().setConnectedScreenStatus(a,b):K8("setConnectedScreenStatus called before ready.")},y2a=function(){var a=0<=g.Ab().search(/ (CrMo|Chrome|CriOS)\//);
return g.OA||a},H2a=function(a,b){M8().init(a,b)},z2a=function(a,b){var c=!1;
M8()||(a=new E8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.Lw("yt-remote-cast-available",d);p6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){I8("onReceiverSelected: "+d.friendlyName);
g.Lw("yt-remote-cast-receiver",d);p6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){I8("onReceiverResumed: "+d.friendlyName);
g.Lw("yt-remote-cast-receiver",d);p6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){I8("onSessionChange: "+t6(d));
d||g.Nw("yt-remote-cast-receiver");p6("yt-remote-cast2-session-change",d)}),g.Ja("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
I8("cloudview.createSingleton_: "+c);return c},M8=function(){return g.Ka("yt.mdx.remote.cloudview.instance_")},A2a=function(a,b){L8(!0);
J8(!1);H2a(a,function(c){c?(D2a(!0),g.tt("yt-remote-cast2-api-ready")):(K8("Failed to initialize cast API."),L8(!1),g.Nw("yt-remote-cast-available"),g.Nw("yt-remote-cast-receiver"),B2a());b(c)})},I8=function(a){c8("cloudview",a)},K8=function(a){c8("cloudview",a)},L8=function(a){I8("setCastInstalled_ "+a);
g.Lw("yt-remote-cast-installed",a)},P8=function(){return!!g.Ka("yt.mdx.remote.cloudview.apiReady_")},D2a=function(a){I8("setApiReady_ "+a);
g.Ja("yt.mdx.remote.cloudview.apiReady_",a,void 0)},J8=function(a){g.Ja("yt.mdx.remote.cloudview.initializing_",a,void 0)},S8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.J=this.K=0;this.trackData=null;this.hasNext=this.il=!1;this.N=this.D=this.j=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},T8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.il=!1;a.hasNext=!1;a.K=0;a.J=g.Xa();a.C=0;a.j=0;a.D=0;a.N=0;a.B=NaN;a.u=!1},U8=function(a){return a.Jc()?(g.Xa()-a.J)/1E3:0},V8=function(a,b){a.K=b;
a.J=g.Xa()},W8=function(a){switch(a.playerState){case 1:case 1081:return(g.Xa()-a.J)/1E3+a.K;
case -1E3:return 0}return a.K},X8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T8(a)},Y8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.eg(a.trackData);b.hasPrevious=a.il;b.hasNext=a.hasNext;b.playerTime=a.K;b.playerTimeAt=a.J;b.seekableStart=a.C;b.seekableEnd=a.j;b.duration=a.D;b.loadedTime=a.N;b.liveIngestionTime=a.B;return b},$8=function(a,b){g.Vv.call(this);
this.B=0;this.C=a;this.J=[];this.D=new G1a;this.u=this.j=null;this.X=(0,g.Ta)(this.FW,this);this.K=(0,g.Ta)(this.Bx,this);this.N=(0,g.Ta)(this.EW,this);this.Z=(0,g.Ta)(this.IW,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.SH,this),I2a(this))):c=3;0!=c&&(b?this.SH(c):g.ds((0,g.Ta)(function(){this.SH(c)},this),0));
(a=G2a())&&Z8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Z)},a9=function(a){return new S8(a.C.getPlayerContextData())},I2a=function(a){g.yc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.J.push(this.C.subscribe(b,g.Wa(this.RX,b),this))},a)},J2a=function(a){g.yc(a.J,function(b){this.C.unsubscribeByKey(b)},a);
a.J.length=0},b9=function(a){return 1==a.getState()},c9=function(a,b){var c=a.D;
50>c.j.length+c.u.length&&a.D.enqueue(b)},e9=function(a,b,c){var d=a9(a);
V8(d,c);-1E3!=d.playerState&&(d.playerState=b);d9(a,d)},f9=function(a,b,c){a.C.sendMessage(b,c)},d9=function(a,b){J2a(a);
a.C.setPlayerContextData(Y8(b));I2a(a)},Z8=function(a,b){a.u&&(a.u.removeUpdateListener(a.X),a.u.removeMediaListener(a.K),a.Bx(null));
a.u=b;a.u&&(c8("CP","Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.X),a.u.addMediaListener(a.K),a.u.media.length&&a.Bx(a.u.media[0]))},K2a=function(a){var b=a.j.media,c=a.j.customData;
if(b&&c){var d=a9(a);b.contentId!=d.videoId&&c8("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;V8(d,a.j.getEstimatedTime());d9(a,d)}else c8("CP","No cast media video. Ignoring state update.")},g9=function(a,b,c){return(0,g.Ta)(function(d){this.De("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.De("Retrying "+b+" using MDx browser channel."),f9(this,b,c))},a)},j9=function(a,b,c,d){d=void 0===d?!1:d;
g.Vv.call(this);var e=this;this.J=NaN;this.xa=!1;this.X=this.N=this.ma=this.oa=NaN;this.Z=[];this.D=this.K=this.C=this.j=this.u=null;this.Ia=a;this.Ea=d;this.Z.push(g.Xs(window,"beforeunload",function(){e.Zs(2)}));
this.B=[];this.j=new S8;this.Ja=b.id;this.ya=b.idType;this.u=M1a(this.Ia,c,this.hJ,"shortLived"==this.ya,this.Ja);this.u.Pa("channelOpened",function(){L2a(e)});
this.u.Pa("channelClosed",function(){h9("Channel closed");isNaN(e.J)?C6(!0):C6();e.dispose()});
this.u.Pa("channelError",function(f){C6();isNaN(e.Kw())?(1==f&&"shortLived"==e.ya&&e.ea("browserChannelAuthError",f),h9("Channel error: "+f+" without reconnection"),e.dispose()):(e.xa=!0,h9("Channel error: "+f+" with reconnection in "+e.Kw()+" ms"),i9(e,2))});
this.u.Pa("channelMessage",function(f){M2a(e,f)});
this.u.hn(b.token);this.subscribe("remoteQueueChange",function(){var f=e.j.videoId;g.Ow()&&g.Lw("yt-remote-session-video-id",f)})},N2a=function(a){return g.$b(a.B,function(b){return"LOUNGE_SCREEN"==b.type})},h9=function(a){c8("conn",a)},i9=function(a,b){a.ea("proxyStateChange",b)},O2a=function(a){a.J=g.ds(function(){h9("Connecting timeout");
a.Zs(1)},2E4)},k9=function(a){g.fs(a.J);
a.J=NaN},l9=function(a){g.fs(a.oa);
a.oa=NaN},P2a=function(a){m9(a);
a.ma=g.ds(function(){n9(a,"getNowPlaying")},2E4)},m9=function(a){g.fs(a.ma);
a.ma=NaN},L2a=function(a){h9("Channel opened");
a.xa&&(a.xa=!1,l9(a),a.oa=g.ds(function(){h9("Timing out waiting for a screen.");a.Zs(1)},15E3))},R2a=function(a,b){var c=null;
if(b){var d=N2a(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ja("yt.mdx.remote.remoteClient_",c,void 0);b&&(k9(a),l9(a));c=a.u.Jt()&&isNaN(a.J);b==c?b&&(i9(a,1),n9(a,"getSubtitlesTrack")):b?(a.oM()&&a.j.reset(),i9(a,1),n9(a,"getNowPlaying"),Q2a(a)):a.Zs(1)},S2a=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.j.videoId&&(g.Zf(b.params)?a.j.trackData=null:a.j.trackData=b.params,a.ea("remotePlayerChange"))},T2a=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.j.listId=b.params.listId||a.j.listId;X8(a.j,d,e);a.ea("remoteQueueChange",c)},V2a=function(a,b){b.params=b.params||{};
T2a(a,b,"NOW_PLAYING_MAY_CHANGE");U2a(a,b);a.ea("autoplayDismissed")},U2a=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
V8(a.j,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.j.playerState&&(c=-1E3);a.j.playerState=c;c=Number(b.params.loadedTime);a.j.N=isNaN(c)?0:c;a.j.ek(Number(b.params.duration));c=a.j;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.j;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.j=isNaN(b)?0:b;1==a.j.playerState?P2a(a):m9(a);a.ea("remotePlayerChange")},W2a=function(a,b){if(-1E3!=a.j.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.j.playerState=c;b=parseInt(b.params.currentTime,10);V8(a.j,isNaN(b)?0:b);a.ea("remotePlayerChange")}},X2a=function(a,b){var c="true"==b.params.muted;
a.j.volume=parseInt(b.params.volume,10);a.j.muted=c;a.ea("remotePlayerChange")},Y2a=function(a,b){a.K=b.params.videoId;
a.ea("nowAutoplaying",parseInt(b.params.timeout,10))},Z2a=function(a,b){a.K=b.params.videoId||null;
a.ea("autoplayUpNext",a.K)},$2a=function(a,b){a.D=b.params.autoplayMode;
a.ea("autoplayModeChange",a.D);"DISABLED"==a.D&&a.ea("autoplayDismissed")},a3a=function(a,b){var c="true"==b.params.hasNext;
a.j.il="true"==b.params.hasPrevious;a.j.hasNext=c;a.ea("previousNextChange")},M2a=function(a,b){b=b.message;
b.params?h9("Received: action="+b.action+", params="+g.oj(b.params)):h9("Received: action="+b.action+" {}");switch(b.action){case "loungeStatus":b=o6(b.params.devices);a.B=g.Vl(b,function(d){return new q6(d)});
b=!!g.$b(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
R2a(a,b);b=a.WM("mlm");a.ea("multiStateLoopEnabled",b);break;case "loungeScreenDisconnected":g.kc(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
R2a(a,!1);break;case "remoteConnected":var c=new q6(o6(b.params.device));g.$b(a.B,function(d){return d.equals(c)})||P_a(a.B,c);
break;case "remoteDisconnected":c=new q6(o6(b.params.device));g.kc(a.B,function(d){return d.equals(c)});
break;case "gracefulDisconnect":break;case "playlistModified":T2a(a,b,"QUEUE_MODIFIED");break;case "nowPlaying":V2a(a,b);break;case "onStateChange":U2a(a,b);break;case "onAdStateChange":W2a(a,b);break;case "onVolumeChanged":X2a(a,b);break;case "onSubtitlesTrackChanged":S2a(a,b);break;case "nowAutoplaying":Y2a(a,b);break;case "autoplayDismissed":a.ea("autoplayDismissed");break;case "autoplayUpNext":Z2a(a,b);break;case "onAutoplayModeChanged":$2a(a,b);break;case "onHasPreviousNextChanged":a3a(a,b);
break;case "requestAssistedSignIn":a.ea("assistedSignInRequested",b.params.authCode);break;case "onLoopModeChanged":a.ea("loopModeChange",b.params.loopMode);break;default:h9("Unrecognized action: "+b.action)}},Q2a=function(a){g.fs(a.X);
a.X=g.ds(function(){a.Zs(1)},864E5)},n9=function(a,b,c){c?h9("Sending: action="+b+", params="+g.oj(c)):h9("Sending: action="+b);
a.u.sendMessage(b,c)},o9=function(a){g8.call(this,"ScreenServiceProxy");
this.Ze=a;this.j=[];this.j.push(this.Ze.$_s("screenChange",(0,g.Ta)(this.gR,this)));this.j.push(this.Ze.$_s("onlineScreenChange",(0,g.Ta)(this.yX,this)))},e3a=function(a,b){f0a();
if(!D6||!D6.get("yt-remote-disable-remote-module-for-dev")){b=g.O("MDX_CONFIG")||b;Z_a();B6();p9||(p9=new W7(b?b.loungeApiHost:void 0),g0a()&&(p9.j="/api/loungedev"));q9||(q9=g.Ka("yt.mdx.remote.deferredProxies_")||[],g.Ja("yt.mdx.remote.deferredProxies_",q9,void 0));b3a();var c=r9();if(!c){var d=new q8(p9,b?b.disableAutomaticScreenCache||!1:!1);g.Ja("yt.mdx.remote.screenService_",d,void 0);c=r9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ja("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1,void 0);C2a(a,d,function(f){f?s9()&&R8(s9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){p6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ka("yt.mdx.remote.initialized_")&&(g.Ja("yt.mdx.remote.initialized_",!0,void 0),t9("Initializing: "+
g.oj(b)),u9.push(g.qt("yt-remote-cast2-api-ready",function(){p6("yt-remote-api-ready")})),u9.push(g.qt("yt-remote-cast2-availability-change",function(){p6("yt-remote-receiver-availability-change")})),u9.push(g.qt("yt-remote-cast2-receiver-selected",function(){v9(null);
p6("yt-remote-auto-connect","cast-selector-receiver")})),u9.push(g.qt("yt-remote-cast2-receiver-resumed",function(){p6("yt-remote-receiver-resumed","cast-selector-receiver")})),u9.push(g.qt("yt-remote-cast2-session-change",c3a)),u9.push(g.qt("yt-remote-connection-change",function(f){f?R8(s9(),"YouTube TV"):w9()||(R8(null,null),F2a())})),u9.push(g.qt("yt-remote-cast2-session-failed",function(){p6("yt-remote-connection-failed")})),a=x9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.P("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),t9(" -- with channel params: "+g.oj(a)),a?(g.Lw("yt-remote-session-app",a.app),g.Lw("yt-remote-session-name",a.name)):(g.Nw("yt-remote-session-app"),g.Nw("yt-remote-session-name")),g.Ja("yt.mdx.remote.channelParams_",a,void 0),c.start(),s9()||d3a())}},f3a=function(){var a=r9().Ze.$_gos();
var b=y9();b&&z9()&&(w6(a,b)||a.push(b));return Y_a(a)},A9=function(){var a=g3a();
!a&&O8()&&E2a()&&(a={key:"cast-selector-receiver",name:E2a()});return a},g3a=function(){var a=f3a(),b=y9();
b||(b=w9());return g.$b(a,function(c){return b&&s6(b,c.key)?!0:!1})},y9=function(){var a=s9();
if(!a)return null;var b=r9().Nh();return x6(b,a)},c3a=function(a){t9("remote.onCastSessionChange_: "+t6(a));
if(a){var b=y9();if(b&&b.id==a.id){if(R8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))B9&&(B9.token=a),(b=z9())&&b.hn(a)}else b&&C9(),D9(a,1)}else z9()&&C9()},C9=function(){P8()?M8().stopSession():K8("stopSession called before API ready.");
var a=z9();a&&(a.disconnect(1),E9(null))},F9=function(){var a=z9();
return!!a&&3!=a.getProxyState()},t9=function(a){c8("remote",a)},r9=function(){if(!G9){var a=g.Ka("yt.mdx.remote.screenService_");
G9=a?new o9(a):null}return G9},s9=function(){return g.Ka("yt.mdx.remote.currentScreenId_")},h3a=function(a){g.Ja("yt.mdx.remote.currentScreenId_",a,void 0)},i3a=function(){return g.Ka("yt.mdx.remote.connectData_")},v9=function(a){g.Ja("yt.mdx.remote.connectData_",a,void 0)},z9=function(){return g.Ka("yt.mdx.remote.connection_")},E9=function(a){var b=z9();
v9(null);a||h3a("");g.Ja("yt.mdx.remote.connection_",a,void 0);q9&&(g.yc(q9,function(c){c(a)}),q9.length=0);
b&&!a?p6("yt-remote-connection-change",!1):!b&&a&&p6("yt-remote-connection-change",!0)},w9=function(){var a=g.Ow();
if(!a)return null;var b=r9();if(!b)return null;b=b.Nh();return x6(b,a)},D9=function(a,b){s9();
y9()&&y9();if(H9)B9=a;else{h3a(a.id);var c=g.Ka("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new j9(p9,a,x9(),c);a.connect(b,i3a());a.subscribe("beforeDisconnect",function(d){p6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){z9()&&(z9(),E9(null))});
a.subscribe("browserChannelAuthError",function(){var d=y9();d&&"shortLived"==d.idType&&(P8()?M8().handleBrowserChannelAuthError():K8("refreshLoungeToken called before API ready."))});
E9(a)}},d3a=function(){var a=w9();
a?(t9("Resume connection to: "+t6(a)),D9(a,0)):(C6(),F2a(),t9("Skipping connecting because no session screen found."))},b3a=function(){var a=x9();
if(g.Zf(a)){a=A6();var b=g.Mw("yt-remote-session-name")||"",c=g.Mw("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ja("yt.mdx.remote.channelParams_",a,void 0)}},x9=function(){return g.Ka("yt.mdx.remote.channelParams_")||{}},I9=function(a,b,c){g.I.call(this);
var d=this;this.u=a;this.I=b;this.dc=c;this.events=new g.KA(this);this.Z=this.events.T(this.I,"onVolumeChange",function(e){j3a(d,e)});
this.D=!1;this.J=new g.WH(64);this.j=new g.L(this.OP,500,this);this.B=new g.L(this.PP,1E3,this);this.N=new J6(this.t_,0,this);this.C={};this.X=new g.L(this.wQ,1E3,this);this.K=new K6(this.seekTo,1E3,this);g.K(this,this.events);this.events.T(b,"onCaptionsTrackListChanged",this.jX);this.events.T(b,"captionschanged",this.BW);this.events.T(b,"captionssettingschanged",this.WP);this.events.T(b,"videoplayerreset",this.wB);this.events.T(b,"mdxautoplaycancel",function(){d.dc.KL()});
a=this.dc;a.isDisposed();a.subscribe("proxyStateChange",this.EO,this);a.subscribe("remotePlayerChange",this.Fx,this);a.subscribe("remoteQueueChange",this.wB,this);a.subscribe("previousNextChange",this.BO,this);a.subscribe("nowAutoplaying",this.vO,this);a.subscribe("autoplayDismissed",this.YN,this);g.K(this,this.j);g.K(this,this.B);g.K(this,this.N);g.K(this,this.X);g.K(this,this.K);this.WP();this.wB();this.Fx()},j3a=function(a,b){if(J9(a)){a.dc.unsubscribe("remotePlayerChange",a.Fx,a);
var c=Math.round(b.volume);b=!!b.muted;var d=a9(a.dc);if(c!==d.volume||b!==d.muted)a.dc.setVolume(c,b),a.X.start();a.dc.subscribe("remotePlayerChange",a.Fx,a)}},k3a=function(a){a.Vb(0);
a.j.stop();a.hc(new g.WH(64))},K9=function(a,b){if(J9(a)&&!a.D){var c=null;
b&&(c={style:a.I.getSubtitlesUserSettings()},g.gg(c,b));a.dc.gJ(a.I.getVideoData(1).videoId,c);a.C=a9(a.dc).trackData}},L9=function(a,b){var c=a.I.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.I.getVideoData(1);a.dc.playVideo(c.videoId,b,d,e,c.playerParams,c.Ya,O_a(c));a.hc(new g.WH(1))},l3a=function(a,b){if(b){var c=a.I.getOption("captions","tracklist",{MM:1});
c&&c.length?(a.I.setOption("captions","track",b),a.D=!1):(a.I.loadModule("captions"),a.D=!0)}else a.I.setOption("captions","track",{})},J9=function(a){return a9(a.dc).videoId===a.I.getVideoData(1).videoId},M9=function(){g.W.call(this,{G:"div",
L:"ytp-mdx-popup-dialog",W:{role:"dialog"},U:[{G:"div",L:"ytp-mdx-popup-dialog-inner-content",U:[{G:"div",L:"ytp-mdx-popup-title",qa:"You're signed out"},{G:"div",L:"ytp-mdx-popup-description",qa:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{G:"div",L:"ytp-mdx-privacy-popup-buttons",U:[{G:"button",Ha:["ytp-button","ytp-mdx-privacy-popup-cancel"],qa:"Cancel"},{G:"button",Ha:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],qa:"Confirm"}]}]}]});this.j=new g.DJ(this,250);this.cancelButton=this.Da("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Da("ytp-mdx-privacy-popup-confirm");g.K(this,this.j);this.T(this.cancelButton,"click",this.u);this.T(this.confirmButton,"click",this.B)},N9=function(a){g.W.call(this,{G:"div",
L:"ytp-remote",U:[{G:"div",L:"ytp-remote-display-status",U:[{G:"div",L:"ytp-remote-display-status-icon",U:[g.iAa()]},{G:"div",L:"ytp-remote-display-status-text",qa:"{{statustext}}"}]}]});this.api=a;this.j=new g.DJ(this,250);g.K(this,this.j);this.T(a,"presentingplayerstatechange",this.onStateChange);m3a(this,a.zb())},m3a=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.V(b,128)?g.qG("Error on $RECEIVER_NAME",c):b.Jc()||g.V(b,4)?g.qG("Playing on $RECEIVER_NAME",c):g.qG("Connected to $RECEIVER_NAME",c);a.Ma("statustext",b);a.j.show()}else a.j.hide()},O9=function(a,b){g.zP.call(this,"Play on",0,a,b);
this.I=a;this.ip={};this.T(a,"onMdxReceiversChange",this.D);this.T(a,"presentingplayerstatechange",this.D);this.D()},P9=function(a){g.sM.call(this,a);
this.vl={key:v6(),name:"This computer"};this.Ai=null;this.subscriptions=[];this.mH=this.dc=null;this.ip=[this.vl];this.Rn=this.vl;this.Jd=new g.WH(64);this.lN=0;this.Ff=-1;this.Ox=!1;this.Mx=this.nu=null;if(!g.hD(this.player.V())&&!g.iD(this.player.V())){a=this.player;var b=g.WL(a);b&&(b=b.Do())&&(b=new O9(a,b),g.K(this,b));b=new N9(a);g.K(this,b);g.fM(a,b.element,4);this.nu=new M9;g.K(this,this.nu);g.fM(a,this.nu.element,4);this.Ox=!!w9()}},Q9=function(a){a.Mx&&(a.player.removeEventListener("presentingplayerstatechange",
a.Mx),a.Mx=null)},n3a=function(a,b,c){a.Jd=c;
a.player.ea("presentingplayerstatechange",new g.ZF(c,b))},R9=function(a,b){if(b.key!==a.Rn.key)if(b.key===a.vl.key)C9();
else{var c;(c=!a.player.V().S("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.O("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.O("SESSION_INDEX")&&!g.O("LOGGED_IN")))||a.Ox||!a.nu);(c?0:g.xD(a.player.V())||g.AD(a.player.V()))&&o3a(a);a.Rn=b;if(!a.player.V().S("disable_mdx_connection_in_mdx_module_for_music_web")||!g.iD(a.player.V())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.V().S("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.length;l++)k[l]=g.nM(f,l).videoId}else k=[e];f=a.player.getCurrentTime(1);a={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Ya,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=O_a(c))&&(a.locationInfo=c)}t9("Connecting to: "+g.oj(b));"cast-selector-receiver"==b.key?(v9(a||null),b=a||null,P8()?M8().setLaunchParams(b):K8("setLaunchParams called before ready.")):!a&&F9()&&
s9()==b.key?p6("yt-remote-connection-change",!0):(C9(),v9(a||null),a=r9().Nh(),(b=x6(a,b.key))&&D9(b,1))}}},o3a=function(a){a.player.zb().Jc()?a.player.pauseVideo():(a.Mx=function(b){!a.Ox&&g.aG(b,8)&&(a.player.pauseVideo(),Q9(a))},a.player.addEventListener("presentingplayerstatechange",a.Mx));
a.nu&&a.nu.qd();z9()||(H9=!0)};
g.Gq.prototype.qo=g.da(1,function(){return g.Rd(this,6)});
g.dd.prototype.D=g.da(0,function(){var a=g.hd(this);return 4294967296*g.hd(this)+(a>>>0)});
var j_a=g.Ve(function(a,b,c){if(1!==a.u)return!1;g.D(b,c,g.rd(a));return!0},g.Ze),B_a=g.Ve(function(a,b,c,d){if(1!==a.u)return!1;
g.be(b,c,d,g.rd(a));return!0},g.Ze),k_a=g.Ve(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.fd(a.j));return!0},g.$e),A_a=g.Ve(function(a,b,c,d){if(0!==a.u)return!1;
g.be(b,c,d,g.fd(a.j));return!0},g.$e),s_a=g.Ve(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.gd(a.j));return!0},g.af),x_a=g.Ve(function(a,b,c,d){if(0!==a.u)return!1;
g.be(b,c,d,g.gd(a.j));return!0},g.af),F_a=g.Ve(function(a,b,c){if(1!==a.u)return!1;
g.D(b,c,a.j.D());return!0},function(a,b,c){c_a(a,c,g.Rd(b,c))}),H_a=g.Ve(function(a,b,c){if(1!==a.u&&2!==a.u)return!1;
b=g.Td(b,c);if(2==a.u){c=g.dd.prototype.D;var d=g.gd(a.j)>>>0;for(d=a.j.j+d;a.j.j<d;)b.push(c.call(a.j))}else b.push(a.j.D());return!0},function(a,b,c){b=g.Td(b,c);
if(null!=b)for(var d=0;d<b.length;d++)c_a(a,c,b[d])}),p_a=g.Ve(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.id(a.j));return!0},d_a),y_a=g.Ve(function(a,b,c,d){if(0!==a.u)return!1;
g.be(b,c,d,g.id(a.j));return!0},d_a),G_a=g.Ve(function(a,b,c){if(2!==a.u)return!1;
a=g.td(a);g.$d(b,c,a);return!0},function(a,b,c){b=g.Td(b,c);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.Ed(a,c,g.ib(e))}}),w_a=g.Ve(function(a,b,c,d){if(2!==a.u)return!1;
g.be(b,c,d,g.td(a));return!0},g.bf),D_a=g.Ve(function(a,b,c,d,e){if(2!==a.u)return!1;
g.qd(a,g.ce(b,d,c),e);return!0},g.cf),g_a=[1];
g.w(h_a,g.F);g.w(i_a,g.F);g.w(n_a,g.F);g.w(o_a,g.F);var u_a=[1,2];g.w(r_a,g.F);var l1a={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},C7={"'":"\\'"},U_a={V0:"atp",uda:"ska",aca:"que",J$:"mus",tda:"sus",u6:"dsp",yca:"seq",m$:"mic",p5:"dpa",n1:"cds",H$:"mlm",m5:"dsdtr",saa:"ntb"};q6.prototype.equals=function(a){return a?this.id==a.id:!1};
var D6,z6="",m0a=h0a("loadCastFramework")||h0a("loadCastApplicationFramework"),o0a=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ya(J6,g.I);g.h=J6.prototype;g.h.zS=function(a){this.C=arguments;this.j=!1;this.Qb?this.B=g.Xa()+this.fg:this.Qb=g.Ti(this.D,this.fg)};
g.h.stop=function(){this.Qb&&(g.C.clearTimeout(this.Qb),this.Qb=null);this.B=null;this.j=!1;this.C=[]};
g.h.pause=function(){++this.u};
g.h.resume=function(){this.u&&(--this.u,!this.u&&this.j&&(this.j=!1,this.J.apply(null,this.C)))};
g.h.va=function(){this.stop();J6.re.va.call(this)};
g.h.AS=function(){this.Qb&&(g.C.clearTimeout(this.Qb),this.Qb=null);this.B?(this.Qb=g.Ti(this.D,this.B-g.Xa()),this.B=null):this.u?this.j=!0:(this.j=!1,this.J.apply(null,this.C))};g.w(K6,g.I);g.h=K6.prototype;g.h.tD=function(a){this.B=arguments;this.Qb||this.u?this.j=!0:L6(this)};
g.h.stop=function(){this.Qb&&(g.C.clearTimeout(this.Qb),this.Qb=null,this.j=!1,this.B=null)};
g.h.pause=function(){this.u++};
g.h.resume=function(){this.u--;this.u||!this.j||this.Qb||(this.j=!1,L6(this))};
g.h.va=function(){g.I.prototype.va.call(this);this.stop()};M6.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
M6.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};g.Ya(N6,g.xf);g.Ya(O6,g.xf);var v0a=!1;var x0a=null;g.Ya(y0a,g.xf);g.Ya(z0a,g.xf);g.Ya(A0a,g.xf);T6.prototype.info=function(){};
T6.prototype.warning=function(){};var Z6={},Y6={};g.h=U6.prototype;g.h.setTimeout=function(a){this.kb=a};
g.h.DS=function(a){a=a.target;var b=this.Sa;b&&3==g.Kj(a)?b.tD():this.TJ(a)};
g.h.TJ=function(a){try{if(a==this.j)a:{var b=g.Kj(this.j),c=this.j.u,d=this.j.getStatus();if(!(3>b||3==b&&!g.DD&&!X6(this))){this.Ea||4!=b||7==c||(8==c||0>=d?Q6(3):Q6(2));c7(this);var e=this.j.getStatus();this.rb=e;b:if(E0a(this)){var f=g.Oj(this.j);a="";var k=f.length,l=4==g.Kj(this.j);if(!this.u.B){if("undefined"===typeof TextDecoder){a7(this);b7(this);var m="";break b}this.u.B=new g.C.TextDecoder}for(c=0;c<k;c++)this.u.u=!0,a+=this.u.B.decode(f[c],{stream:l&&c==k-1});f.splice(0,k);this.u.j+=a;
this.Z=0;m=this.u.j}else m=g.Nj(this.j);X6(this);if(this.B=200==e){if(this.tb&&!this.Oa){b:{if(this.j){var n=g.Pj(this.j,"X-HTTP-Initial-Response");if(n&&!g.nb(n)){var p=n;break b}}p=null}if(e=p)this.Oa=!0,$6(this,e);else{this.B=!1;this.J=3;R6(12);a7(this);b7(this);break a}}this.ya?(G0a(this,b,m),g.DD&&this.B&&3==b&&(this.Ya.Pa(this.bb,"tick",this.CS),this.bb.start())):$6(this,m);4==b&&a7(this);this.B&&!this.Ea&&(4==b?I0a(this.D,this):(this.B=!1,W6(this)))}else 400==e&&0<m.indexOf("Unknown SID")?
(this.J=3,R6(12)):(this.J=0,R6(13)),a7(this),b7(this)}}}catch(r){X6(this)}finally{}};
g.h.CS=function(){if(this.j){var a=g.Kj(this.j),b=g.Nj(this.j);this.Z<b.length&&(c7(this),G0a(this,a,b),this.B&&4!=a&&W6(this))}};
g.h.cancel=function(){this.Ea=!0;a7(this)};
g.h.BS=function(){this.X=null;var a=Date.now();0<=a-this.qb?(2!=this.Ja&&(Q6(3),R6(17)),a7(this),this.J=2,b7(this)):H0a(this,this.qb-a)};
g.h.getLastError=function(){return this.J};N0a.prototype.cancel=function(){this.B=l7(this);if(this.u)this.u.cancel(),this.u=null;else if(this.j&&0!==this.j.size){for(var a=g.q(this.j.values()),b=a.next();!b.done;b=a.next())b.value.cancel();this.j.clear()}};g.h=S0a.prototype;g.h.UJ=8;g.h.qf=1;g.h.connect=function(a,b,c,d){this.Ug&&g.Ii((0,g.Ta)(this.AZ,this,a));R6(0);this.Gb=a;this.Ea=b||{};c&&void 0!==d&&(this.Ea.OSID=c,this.Ea.OAID=d);this.bb=this.Lb;this.ES(1,0);this.Ia=J0a(this,null,this.Gb);k7(this)};
g.h.disconnect=function(){T0a(this);if(3==this.qf){var a=this.Sa++,b=this.Ia.clone();g.Rk(b,"SID",this.C);g.Rk(b,"RID",a);g.Rk(b,"TYPE","terminate");p7(this,b);a=new U6(this,this.C,a,void 0);a.Ja=2;a.K=l6(b.clone());b=!1;g.C.navigator&&g.C.navigator.sendBeacon&&(b=g.C.navigator.sendBeacon(a.K.toString(),""));!b&&g.C.Image&&((new Image).src=a.K,b=!0);b||(a.j=D0a(a.D,null),a.j.send(a.K));a.oa=Date.now();W6(a)}Z0a(this)};
g.h.AZ=function(a){try{w0a(a,function(){})}catch(b){}};
g.h.cf=function(){return 0==this.qf};
g.h.getState=function(){return this.qf};
g.h.WJ=function(a){if(this.J)if(this.J=null,1==this.qf){if(!a){this.Sa=Math.floor(1E5*Math.random());a=this.Sa++;var b=new U6(this,"",a,void 0),c=this.X;this.qb&&(c?(c=g.dg(c),g.gg(c,this.qb)):c=this.qb);null!==this.K||this.jb||(b.Ia=c,c=null);var d;if(this.kb)a:{for(var e=d=0;e<this.B.length;e++){b:{var f=this.B[e];if("__data__"in f.map&&(f=f.map.__data__,"string"===typeof f)){f=f.length;break b}f=void 0}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.B.length-1){d=e+1;break a}}d=
1E3}else d=1E3;d=W0a(this,b,d);e=this.Ia.clone();g.Rk(e,"RID",a);g.Rk(e,"CVER",22);this.ya&&g.Rk(e,"X-HTTP-Session-Id",this.ya);p7(this,e);c&&(this.jb?d="headers="+g.Ih(g.Ida(c))+"&"+d:this.K&&g.Yk(e,this.K,c));j7(this.u,b);this.le&&g.Rk(e,"TYPE","init");this.kb?(g.Rk(e,"$req",d),g.Rk(e,"SID","null"),b.tb=!0,V6(b,e,null)):V6(b,e,d);this.qf=2}}else 3==this.qf&&(a?X0a(this,a):0==this.B.length||O0a(this.u)||X0a(this))};
g.h.VJ=function(){this.N=null;Y0a(this);if(this.Sb&&!(this.Ya||null==this.j||0>=this.Ub)){var a=2*this.Ub;this.xa=S6((0,g.Ta)(this.zW,this),a)}};
g.h.zW=function(){this.xa&&(this.xa=null,null!=this.j.j&&g.Nj(this.j.j),this.bb=!1,this.Ya=!0,R6(10),f7(this),Y0a(this))};
g.h.NG=function(a){this.j==a&&this.Sb&&!this.Ya&&(o7(this),this.Ya=!0,R6(11))};
g.h.GS=function(){null!=this.Z&&(this.Z=null,f7(this),g7(this),R6(19))};
g.h.ES=function(a){g.ec(arguments,this.qf)};
g.h.a_=function(a){a?R6(2):R6(1)};
g.h.isActive=function(){return!!this.D&&this.D.isActive(this)};
g.h=a1a.prototype;g.h.aK=function(){};
g.h.ZJ=function(){};
g.h.YJ=function(){};
g.h.XJ=function(){};
g.h.isActive=function(){return!0};
g.h.HS=function(){};g.Ya(r7,g.xg);r7.prototype.open=function(){this.j.D=this.C;this.K&&(this.j.Ja=!0);this.j.connect(this.J,this.u||void 0)};
r7.prototype.close=function(){this.j.disconnect()};
r7.prototype.send=function(a){var b=this.j;if("string"===typeof a){var c={};c.__data__=a;a=c}else this.D&&(c={},c.__data__=g.oj(a),a=c);b.B.push(new M0a(b.Qd++,a));3==b.qf&&k7(b)};
r7.prototype.va=function(){this.j.D=null;delete this.C;this.j.disconnect();delete this.j;r7.re.va.call(this)};
g.Ya(c1a,N6);g.Ya(d1a,O6);g.Ya(q7,a1a);q7.prototype.aK=function(){this.j.dispatchEvent("m")};
q7.prototype.ZJ=function(a){this.j.dispatchEvent(new c1a(a))};
q7.prototype.YJ=function(a){this.j.dispatchEvent(new d1a(a))};
q7.prototype.XJ=function(){this.j.dispatchEvent("n")};var u7=new g.xg;g.w(g1a,g.xf);g.h=w7.prototype;g.h.Lp=null;g.h.Pl=!1;g.h.us=null;g.h.vD=null;g.h.qs=null;g.h.rs=null;g.h.Cn=null;g.h.En=null;g.h.Mp=null;g.h.Nf=null;g.h.lz=0;g.h.lk=null;g.h.kz=null;g.h.Dn=null;g.h.Ev=-1;g.h.DP=!0;g.h.Kp=!1;g.h.uD=0;g.h.jz=null;var j1a={},z7={};g.h=w7.prototype;g.h.setTimeout=function(a){this.u=a};
g.h.JS=function(a){a=a.target;var b=this.jz;b&&3==g.Kj(a)?b.tD():this.bK(a)};
g.h.bK=function(a){try{if(a==this.Nf)a:{var b=g.Kj(this.Nf),c=this.Nf.u,d=this.Nf.getStatus();if(g.Pc&&!g.Ic(10)||g.Bf&&!g.Hc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Nj(this.Nf))break a;this.Kp||4!=b||7==c||(8==c||0>=d?this.j.Sj(3):this.j.Sj(2));D7(this);var e=this.Nf.getStatus();this.Ev=e;var f=g.Nj(this.Nf);if(this.Pl=200==e){4==b&&A7(this);if(this.ya){for(a=!0;!this.Kp&&this.lz<f.length;){var k=k1a(this,f);if(k==z7){4==b&&(this.Dn=4,v7(15),a=!1);break}else if(k==j1a){this.Dn=4;v7(16);a=!1;
break}else E7(this,k)}4==b&&0==f.length&&(this.Dn=1,v7(17),a=!1);this.Pl=this.Pl&&a;a||(A7(this),B7(this))}else E7(this,f);this.Pl&&!this.Kp&&(4==b?this.j.mz(this):(this.Pl=!1,y7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Dn=3,v7(13)):(this.Dn=0,v7(14)),A7(this),B7(this)}}catch(l){this.Nf&&g.Nj(this.Nf)}finally{}};
g.h.OY=function(a){t7((0,g.Ta)(this.MY,this,a),0)};
g.h.MY=function(a){this.Kp||(D7(this),E7(this,a),y7(this))};
g.h.JO=function(a){t7((0,g.Ta)(this.LY,this,a),0)};
g.h.LY=function(a){this.Kp||(A7(this),this.Pl=a,this.j.mz(this),this.j.Sj(4))};
g.h.cancel=function(){this.Kp=!0;A7(this)};
g.h.IS=function(){this.us=null;var a=Date.now();0<=a-this.vD?(2!=this.rs&&this.j.Sj(3),A7(this),this.Dn=2,v7(18),B7(this)):n1a(this,this.vD-a)};
g.h.getLastError=function(){return this.Dn};g.h=q1a.prototype;g.h.xD=null;g.h.Tg=null;g.h.RB=!1;g.h.QP=null;g.h.aA=null;g.h.gG=null;g.h.yD=null;g.h.zi=null;g.h.Ql=-1;g.h.Fv=null;g.h.Uv=null;g.h.connect=function(a){this.yD=a;a=G7(this.j,null,this.yD);v7(3);this.QP=Date.now();var b=this.j.N;null!=b?(this.Fv=b[0],(this.Uv=b[1])?(this.zi=1,r1a(this)):(this.zi=2,I7(this))):(m6(a,"MODE","init"),this.Tg=new w7(this,void 0,void 0,void 0),this.Tg.Lp=this.xD,x7(this.Tg,a,!1,null,!0),this.zi=0)};
g.h.CT=function(a){if(a)this.zi=2,I7(this);else{v7(4);var b=this.j;b.Ck=b.On.Ql;P7(b,9)}a&&this.Sj(2)};
g.h.wD=function(a){return this.j.wD(a)};
g.h.abort=function(){this.Tg&&(this.Tg.cancel(),this.Tg=null);this.Ql=-1};
g.h.cf=function(){return!1};
g.h.cK=function(a,b){this.Ql=a.Ev;if(0==this.zi)if(b){try{var c=this.u.parse(b)}catch(d){a=this.j;a.Ck=this.Ql;P7(a,2);return}this.Fv=c[0];this.Uv=c[1]}else a=this.j,a.Ck=this.Ql,P7(a,2);else if(2==this.zi)if(this.RB)v7(7),this.gG=Date.now();else if("11111"==b){if(v7(6),this.RB=!0,this.aA=Date.now(),a=this.aA-this.QP,!g.Pc||g.Ic(10)||500>a)this.Ql=200,this.Tg.cancel(),v7(12),H7(this.j,this,!0)}else v7(8),this.aA=this.gG=Date.now(),this.RB=!1};
g.h.mz=function(){this.Ql=this.Tg.Ev;if(this.Tg.Pl)0==this.zi?this.Uv?(this.zi=1,r1a(this)):(this.zi=2,I7(this)):2==this.zi&&((!g.Pc||g.Ic(10)?!this.RB:200>this.gG-this.aA)?(v7(11),H7(this.j,this,!1)):(v7(12),H7(this.j,this,!0)));else{0==this.zi?v7(9):2==this.zi&&v7(10);var a=this.j;this.Tg.getLastError();a.Ck=this.Ql;P7(a,2)}};
g.h.Gv=function(){return this.j.Gv()};
g.h.isActive=function(){return this.j.isActive()};
g.h.Sj=function(a){this.j.Sj(a)};g.h=J7.prototype;g.h.Bk=null;g.h.Hv=null;g.h.gh=null;g.h.Re=null;g.h.zD=null;g.h.nz=null;g.h.dK=null;g.h.oz=null;g.h.Iv=0;g.h.LS=0;g.h.Vf=null;g.h.Fn=null;g.h.Rl=null;g.h.Op=null;g.h.On=null;g.h.yC=null;g.h.ys=-1;g.h.eK=-1;g.h.Ck=-1;g.h.xs=0;g.h.ws=0;g.h.Np=8;g.Ya(t1a,g.xf);g.Ya(u1a,g.xf);g.h=J7.prototype;g.h.connect=function(a,b,c,d,e){v7(0);this.zD=b;this.Hv=c||{};d&&void 0!==e&&(this.Hv.OSID=d,this.Hv.OAID=e);this.K?(t7((0,g.Ta)(this.xL,this,a),100),v1a(this)):this.xL(a)};
g.h.disconnect=function(){w1a(this);if(3==this.j){var a=this.Iv++,b=this.nz.clone();g.Rk(b,"SID",this.C);g.Rk(b,"RID",a);g.Rk(b,"TYPE","terminate");N7(this,b);a=new w7(this,this.C,a,void 0);a.rs=2;a.Cn=l6(b.clone());f_a(new Image,a.Cn.toString());a.qs=Date.now();y7(a)}E1a(this)};
g.h.xL=function(a){this.On=new q1a(this);this.On.xD=this.Bk;this.On.u=this.D;this.On.connect(a)};
g.h.cf=function(){return 0==this.j};
g.h.getState=function(){return this.j};
g.h.gK=function(a){this.Fn=null;A1a(this,a)};
g.h.fK=function(){this.Rl=null;this.Re=new w7(this,this.C,"rpc",this.J);this.Re.Lp=this.Bk;this.Re.uD=0;var a=this.dK.clone();g.Rk(a,"RID","rpc");g.Rk(a,"SID",this.C);g.Rk(a,"CI",this.yC?"0":"1");g.Rk(a,"AID",this.ys);N7(this,a);if(!g.Pc||g.Ic(10))g.Rk(a,"TYPE","xmlhttp"),x7(this.Re,a,!0,this.oz,!1);else{g.Rk(a,"TYPE","html");var b=this.Re,c=!!this.oz;b.rs=3;b.Cn=l6(a.clone());m1a(b,c)}};
g.h.cK=function(a,b){if(0!=this.j&&(this.Re==a||this.gh==a))if(this.Ck=a.Ev,this.gh==a&&3==this.j)if(7<this.Np){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Rl){if(this.Re)if(this.Re.qs+3E3<this.gh.qs)L7(this),this.Re.cancel(),this.Re=null;else break a;O7(this);v7(19)}}else this.eK=a[1],0<this.eK-this.ys&&37500>a[2]&&this.yC&&0==this.ws&&!this.Op&&(this.Op=t7((0,g.Ta)(this.MS,this),6E3));else P7(this,11)}else null!=b&&P7(this,11);else if(this.Re==
a&&L7(this),!g.nb(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.ys=c[0],c=c[1],2==this.j?"c"==c[0]?(this.C=c[1],this.oz=c[2],c=c[3],null!=c?this.Np=c:this.Np=6,this.j=3,this.Vf&&this.Vf.jK(),this.dK=G7(this,this.Gv()?this.oz:null,this.zD),B1a(this)):"stop"==c[0]&&P7(this,7):3==this.j&&("stop"==c[0]?P7(this,7):"noop"!=c[0]&&this.Vf&&this.Vf.iK(c),this.ws=0)};
g.h.MS=function(){null!=this.Op&&(this.Op=null,this.Re.cancel(),this.Re=null,O7(this),v7(20))};
g.h.mz=function(a){if(this.Re==a){L7(this);this.Re=null;var b=2}else if(this.gh==a)this.gh=null,b=1;else return;this.Ck=a.Ev;if(0!=this.j)if(a.Pl)if(1==b){b=Date.now()-a.qs;var c=u7;c.dispatchEvent(new t1a(c,a.Mp?a.Mp.length:0,b,this.xs));K7(this);this.B.length=0}else B1a(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Ck)){if(d=1==b)this.gh||this.Fn||1==this.j||2<=this.xs?d=!1:(this.Fn=t7((0,g.Ta)(this.gK,this,a),C1a(this,this.xs)),this.xs++,d=!0);d=!(d||2==b&&O7(this))}if(d)switch(c){case 1:P7(this,
5);break;case 4:P7(this,10);break;case 3:P7(this,6);break;case 7:P7(this,12);break;default:P7(this,2)}}};
g.h.KS=function(a){if(!g.ec(arguments,this.j))throw Error("Unexpected channel state: "+this.j);};
g.h.ZZ=function(a){a?v7(2):(v7(1),D1a(this,8))};
g.h.wD=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Hj;a.K=!1;return a};
g.h.isActive=function(){return!!this.Vf&&this.Vf.isActive(this)};
g.h.Sj=function(a){var b=u7;b.dispatchEvent(new u1a(b,a))};
g.h.Gv=function(){return!(!g.Pc||g.Ic(10))};
g.h=F1a.prototype;g.h.jK=function(){};
g.h.iK=function(){};
g.h.hK=function(){};
g.h.AD=function(){};
g.h.kK=function(){return{}};
g.h.isActive=function(){return!0};g.h=G1a.prototype;g.h.enqueue=function(a){this.u.push(a)};
g.h.isEmpty=function(){return 0===this.j.length&&0===this.u.length};
g.h.clear=function(){this.j=[];this.u=[]};
g.h.contains=function(a){return g.ec(this.j,a)||g.ec(this.u,a)};
g.h.remove=function(a){var b=this.j;var c=(0,g.cUa)(b,a);0<=c?(g.ic(b,c),b=!0):b=!1;return b||g.jc(this.u,a)};
g.h.Ji=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};H1a.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.P("enable_client_streamz_web")){a=g.q(a);for(var c=a.next();!c.done;c=a.next())c=g.Zba(c.value),c={serializedIncrementBatch:g.Lc(g.Re(c,I_a))},g.$t("streamzIncremented",c,{MH:b})}};var Q7;g.w(R7,g.xf);g.w(S7,g.xf);g.Ya(T7,g.I);g.h=T7.prototype;g.h.FY=function(){this.fg=Math.min(3E5,2*this.fg);this.B();this.u&&this.start()};
g.h.start=function(){var a=this.fg+15E3*Math.random();g.yp(this.j,a);this.u=Date.now()+a};
g.h.stop=function(){this.j.stop();this.u=0};
g.h.isActive=function(){return this.j.isActive()};
g.h.reset=function(){this.j.stop();this.fg=5E3};g.Ya(U7,F1a);g.h=U7.prototype;g.h.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.h.Lf=function(a){return this.B.Lf(a)};
g.h.ea=function(a,b){return this.B.ea.apply(this.B,arguments)};
g.h.dispose=function(){this.Z||(this.Z=!0,g.uf(this.B),this.disconnect(),g.uf(this.u),this.u=null,this.ma=function(){return""})};
g.h.isDisposed=function(){return this.Z};
g.h.connect=function(a,b,c){if(!this.j||2!=this.j.getState()){this.X="";this.u.stop();this.J=a||null;this.D=b||0;a=this.oa+"/test";b=this.oa+"/bind";var d=new J7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.ya),e=this.j;e&&(e.Vf=null);d.Vf=this;this.j=d;V7(this);if(this.j){d=g.O("ID_TOKEN");var f=this.j.Bk||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.j.Bk=f}e?(3!=e.getState()&&0==y1a(e)||e.getState(),this.j.connect(a,b,this.K,e.C,e.ys)):c?this.j.connect(a,
b,this.K,c.sessionId,c.arrayId):this.j.connect(a,b,this.K)}};
g.h.disconnect=function(a){this.N=a||0;this.u.stop();V7(this);this.j&&(3==this.j.getState()&&A1a(this.j),this.j.disconnect());this.N=0};
g.h.sendMessage=function(a,b){a={_sc:a};b&&g.gg(a,b);this.u.isActive()||2==(this.j?this.j.getState():0)?this.C.push(a):this.Jt()&&(V7(this),x1a(this.j,a))};
g.h.jK=function(){this.u.reset();this.J=null;this.D=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)x1a(this.j,a[b])}this.ea("handlerOpened")};
g.h.hK=function(a){var b=2==a&&401==this.j.Ck;4==a||b||this.u.start();this.ea("handlerError",a,b)};
g.h.AD=function(a,b){if(!this.u.isActive())this.ea("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.C.push(e)}this.xa.j.mJ("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels");a&&this.Ia.j.aD("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.Ja.j.aD("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.h.kK=function(){var a={v:2};this.X&&(a.gsessionid=this.X);0!=this.D&&(a.ui=""+this.D);0!=this.N&&(a.ui=""+this.N);this.J&&g.gg(a,this.J);return a};
g.h.iK=function(a){"S"==a[0]?this.X=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),this.j.disconnect()):this.ea("handlerMessage",new I1a(a[0],a[1]))};
g.h.Jt=function(){return!!this.j&&3==this.j.getState()};
g.h.hn=function(a){(this.K.loungeIdToken=a)||this.u.stop();if(this.Ea&&this.j){var b=this.j.Bk||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.j.Bk=b}};
g.h.qo=function(){return this.K.id};
g.h.Co=function(){return this.u.isActive()?this.u.u-Date.now():NaN};
g.h.gr=function(){var a=this.u;g.zp(a.j);a.start()};
g.h.CZ=function(){this.u.isActive();0==y1a(this.j)&&this.connect(this.J,this.D)};W7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
W7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
W7.prototype.D=function(a){a(Error("request timed out"))};g.w(Z7,g.xg);g.h=Z7.prototype;g.h.connect=function(a,b,c){this.Mc.connect(a,b,c)};
g.h.disconnect=function(a){this.Mc.disconnect(a)};
g.h.gr=function(){this.Mc.gr()};
g.h.qo=function(){return this.Mc.qo()};
g.h.Co=function(){return this.Mc.Co()};
g.h.Jt=function(){return this.Mc.Jt()};
g.h.PS=function(){this.dispatchEvent("channelOpened");var a=this.Mc,b=this.j;g.Lw("yt-remote-session-browser-channel",{firstTestResults:[""],secondTestResults:!a.j.yC,sessionId:a.j.C,arrayId:a.j.ys});g.Lw("yt-remote-session-screen-id",b);a=y6();b=A6();g.ec(a,b)||a.push(b);a0a(a);B6()};
g.h.NS=function(){this.dispatchEvent("channelClosed")};
g.h.OS=function(a){this.dispatchEvent(new R7(a))};
g.h.onError=function(a){this.dispatchEvent(new S7(a?1:0))};
g.h.sendMessage=function(a,b){this.Mc.sendMessage(a,b)};
g.h.hn=function(a){this.Mc.hn(a)};
g.h.dispose=function(){this.Mc.dispose()};g.h=J1a.prototype;
g.h.connect=function(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;2!==this.J&&(this.B.stop(),this.N=a,this.K=b,$7(this),(a=g.O("ID_TOKEN"))?this.C["x-youtube-identity-token"]=a:delete this.C["x-youtube-identity-token"],this.j&&(this.u.device=this.j.device,this.u.name=this.j.name,this.u.app=this.j.app,this.u.id=this.j.id,this.j.GV&&(this.u.mdxVersion=""+this.j.GV),this.j.theme&&(this.u.theme=this.j.theme),this.j.capabilities&&(this.u.capabilities=this.j.capabilities)),0!==this.K?this.u.ui=""+this.K:delete this.u.ui,
Object.assign(this.u,this.N),this.channel=new r7(this.pathPrefix,{eV:"gsessionid",JV:this.C,KV:this.u}),this.channel.open(),this.J=2,L1a(this))};
g.h.disconnect=function(a){this.X=void 0===a?0:a;this.B.stop();$7(this);this.channel&&(0!==this.X?this.u.ui=""+this.X:delete this.u.ui,this.channel.close());this.X=0};
g.h.Co=function(){return this.B.isActive()?this.B.u-Date.now():NaN};
g.h.gr=function(){var a=this.B;g.zp(a.j);a.start()};
g.h.sendMessage=function(a,b){this.channel&&($7(this),a=Object.assign({_sc:a},b),this.channel.send(a))};
g.h.hn=function(a){a||this.B.stop();a?this.C["X-YouTube-LoungeId-Token"]=a:delete this.C["X-YouTube-LoungeId-Token"]};
g.h.qo=function(){return this.j?this.j.id:""};
g.h.ea=function(a){return this.D.ea.apply(this.D,[a].concat(g.v(g.Ca.apply(1,arguments))))};
g.h.subscribe=function(a,b,c){return this.D.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.D.unsubscribe(a,b,c)};
g.h.Lf=function(a){return this.D.Lf(a)};
g.h.dispose=function(){this.Z||(this.Z=!0,g.uf(this.D),this.disconnect(),g.uf(this.B),this.oa=function(){return""})};
g.h.isDisposed=function(){return this.Z};g.w(a8,g.xg);g.h=a8.prototype;g.h.connect=function(a,b){this.j.connect(a,b)};
g.h.disconnect=function(a){this.j.disconnect(a)};
g.h.gr=function(){this.j.gr()};
g.h.qo=function(){return this.j.qo()};
g.h.Co=function(){return this.j.Co()};
g.h.Jt=function(){return 3===this.j.J};
g.h.SS=function(){this.dispatchEvent("channelOpened")};
g.h.QS=function(){this.dispatchEvent("channelClosed")};
g.h.RS=function(a){this.dispatchEvent(new R7(a))};
g.h.onError=function(){this.dispatchEvent(new S7(K1a(this.j)?1:0))};
g.h.sendMessage=function(a,b){this.j.sendMessage(a,b)};
g.h.hn=function(a){this.j.hn(a)};
g.h.dispose=function(){this.j.dispose()};var T1a=Date.now(),b8=null,e8=Array(50),d8=-1,f8=!1;g.Ya(g8,g.Vv);g8.prototype.Nh=function(){return this.screens};
g8.prototype.contains=function(a){return!!w6(this.screens,a)};
g8.prototype.get=function(a){return a?x6(this.screens,a):null};
g8.prototype.info=function(a){c8(this.J,a)};g.w(h8,g.Vv);g.h=h8.prototype;g.h.start=function(){!this.j&&isNaN(this.Qb)&&this.VO()};
g.h.stop=function(){this.j&&(this.j.abort(),this.j=null);isNaN(this.Qb)||(g.fs(this.Qb),this.Qb=NaN)};
g.h.va=function(){this.stop();g.Vv.prototype.va.call(this)};
g.h.VO=function(){this.Qb=NaN;this.j=g.js(X7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.K},timeout:5E3,onSuccess:(0,g.Ta)(this.VS,this),onError:(0,g.Ta)(this.US,this),onTimeout:(0,g.Ta)(this.WS,this)})};
g.h.VS=function(a,b){this.j=null;a=b.screen||{};a.dialId=this.C;a.name=this.J;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ea("pairingComplete",new r6(a),b)};
g.h.US=function(a){this.j=null;a.status&&404==a.status?this.u>=p3a.length?this.ea("pairingFailed",Error("DIAL polling timed out")):(a=p3a[this.u],this.Qb=g.ds((0,g.Ta)(this.VO,this),a),this.u++):this.ea("pairingFailed",Error("Server error "+a.status))};
g.h.WS=function(){this.j=null;this.ea("pairingFailed",Error("Server not responding"))};
var p3a=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ya(j8,g8);g.h=j8.prototype;g.h.start=function(){i8(this)&&this.ea("screenChange");!g.Mw("yt-remote-lounge-token-expiration")&&X1a(this);g.fs(this.j);this.j=g.ds((0,g.Ta)(this.start,this),1E4)};
g.h.add=function(a,b){i8(this);U1a(this,a);k8(this,!1);this.ea("screenChange");b(a);a.token||X1a(this)};
g.h.remove=function(a,b){var c=i8(this);W1a(this,a)&&(k8(this,!1),c=!0);b(a);c&&this.ea("screenChange")};
g.h.wC=function(a,b,c,d){var e=i8(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,k8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ea("screenChange")};
g.h.va=function(){g.fs(this.j);j8.re.va.call(this)};
g.h.GU=function(a){i8(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}k8(this,!b);b&&c8(this.J,"Missed "+b+" lounge tokens.")};
g.h.FU=function(a){c8(this.J,"Requesting lounge tokens failed: "+a)};g.w(m8,g.Vv);g.h=m8.prototype;g.h.start=function(){var a=parseInt(g.Mw("yt-remote-fast-check-period")||"0",10);(this.C=g.Xa()-144E5<a?0:a)?p8(this):(this.C=g.Xa()+3E5,g.Lw("yt-remote-fast-check-period",this.C),this.BH())};
g.h.isEmpty=function(){return g.Zf(this.j)};
g.h.update=function(){l8("Updating availability on schedule.");var a=this.J(),b=g.If(this.j,function(c,d){return c&&!!x6(a,d)},this);
o8(this,b)};
g.h.va=function(){g.fs(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.Vv.prototype.va.call(this)};
g.h.BH=function(){g.fs(this.B);this.B=NaN;this.u&&this.u.abort();var a=Z1a(this);if(n6(a)){var b=X7(this.D,"/pairing/get_screen_availability");this.u=Y7(this.D,b,{lounge_token:g.Pf(a).join(",")},(0,g.Ta)(this.lY,this,a),(0,g.Ta)(this.kY,this))}else o8(this,{}),p8(this)};
g.h.lY=function(a,b){this.u=null;var c=g.Pf(Z1a(this));if(g.vc(c,g.Pf(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;o8(this,c);p8(this)}else this.De("Changing Screen set during request."),this.BH()};
g.h.kY=function(a){this.De("Screen availability failed: "+a);this.u=null;p8(this)};
g.h.De=function(a){c8("OnlineScreenService",a)};g.Ya(q8,g8);g.h=q8.prototype;g.h.start=function(){this.u.start();this.j.start();this.screens.length&&(this.ea("screenChange"),this.j.isEmpty()||this.ea("onlineScreenChange"))};
g.h.add=function(a,b,c){this.u.add(a,b,c)};
g.h.remove=function(a,b,c){this.u.remove(a,b,c);this.j.update()};
g.h.wC=function(a,b,c,d){this.u.contains(a)?this.u.wC(a,b,c,d):(a="Updating name of unknown screen: "+a.name,c8(this.J,a),d(Error(a)))};
g.h.Nh=function(a){return a?this.screens:g.lc(this.screens,g.Pn(this.B,function(b){return!this.contains(b)},this))};
g.h.lK=function(){return g.Pn(this.Nh(!0),function(a){return!!this.j.j[a.id]},this)};
g.h.mK=function(a,b,c,d,e,f){var k=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new h8(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.uf(l);e(r8(k,m),n)});
l.subscribe("pairingFailed",function(m){g.uf(l);f(m)});
l.start();return(0,g.Ta)(l.stop,l)};
g.h.XS=function(a,b,c,d){g.js(X7(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Ta)(function(e,f){e=new r6(f.screen||{});if(!e.name||c2a(this,e.name)){a:{f=e.name;for(var k=2,l=b(f,k);c2a(this,l);){k++;if(20<k)break a;l=b(f,k)}f=l}e.name=f}c(r8(this,e))},this),
onError:(0,g.Ta)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Ta)(function(){d(Error("pairing request timed out."))},this)})};
g.h.va=function(){g.uf(this.u);g.uf(this.j);q8.re.va.call(this)};
g.h.PU=function(){e2a(this);this.ea("screenChange");this.j.update()};
q8.prototype.dispose=q8.prototype.dispose;g.Ya(t8,g.Vv);g.h=t8.prototype;g.h.getScreen=function(){return this.C};
g.h.Hg=function(a){this.isDisposed()||(a&&(v8(this,""+a),this.ea("sessionFailed")),this.C=null,this.ea("sessionScreen",null))};
g.h.info=function(a){c8(this.Ea,a)};
g.h.nK=function(){return null};
g.h.RH=function(a){var b=this.j;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Ta)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Ta)(function(){v8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.va=function(){this.RH("");t8.re.va.call(this)};g.w(w8,t8);g.h=w8.prototype;g.h.QH=function(a){if(this.u){if(this.u==a)return;v8(this,"Overriding cast session with new session object");n2a(this);this.oa=!1;this.X="unknown";this.u.removeUpdateListener(this.ma);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa)}this.u=a;this.u.addUpdateListener(this.ma);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa);j2a(this,"getMdxSessionStatus")};
g.h.Qt=function(a){this.info("launchWithParams no-op for Cast: "+g.oj(a))};
g.h.stop=function(){this.u?this.u.stop((0,g.Ta)(function(){this.Hg()},this),(0,g.Ta)(function(){this.Hg(Error("Failed to stop receiver app."))},this)):this.Hg(Error("Stopping cast device without session."))};
g.h.RH=function(){};
g.h.va=function(){this.info("disposeInternal");n2a(this);this.u&&(this.u.removeUpdateListener(this.ma),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa));this.u=null;t8.prototype.va.call(this)};
g.h.YY=function(a,b){if(!this.isDisposed())if(b)if(b=o6(b),g.Qa(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.oj(b)),a){case "mdxSessionStatus":h2a(this,b);break;case "loungeToken":k2a(this,b);break;default:v8(this,"Unknown youtube message: "+a)}else v8(this,"Unable to parse message.");else v8(this,"No data in message.")};
g.h.pM=function(a,b,c,d){g.fs(this.N);this.N=0;b2a(this.B,this.j.label,a,this.j.friendlyName,(0,g.Ta)(function(e){e?b(e):0<=d?(v8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.N=g.ds((0,g.Ta)(this.pM,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.nK=function(){return this.u};
g.h.YS=function(a){this.isDisposed()||a||(v8(this,"Cast session died."),this.Hg())};g.w(z8,t8);g.h=z8.prototype;g.h.QH=function(a){this.u=a;this.u.addUpdateListener(this.ya)};
g.h.Qt=function(a){this.Ia=a;this.Z()};
g.h.stop=function(){u2a(this);this.u?this.u.stop((0,g.Ta)(this.Hg,this,null),(0,g.Ta)(this.Hg,this,"Failed to stop DIAL device.")):this.Hg()};
g.h.va=function(){u2a(this);this.u&&this.u.removeUpdateListener(this.ya);this.u=null;t8.prototype.va.call(this)};
g.h.cR=function(a){this.isDisposed()||a||(v8(this,"DIAL session died."),this.D(),this.D=function(){},this.Hg())};g.w(D8,t8);D8.prototype.stop=function(){this.Hg()};
D8.prototype.QH=function(){};
D8.prototype.Qt=function(){g.fs(this.u);this.u=NaN;var a=x6(this.B.Nh(),this.j.label);a?u8(this,a):this.Hg(Error("No such screen"))};
D8.prototype.va=function(){g.fs(this.u);this.u=NaN;t8.prototype.va.call(this)};g.w(E8,g.Vv);g.h=E8.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.N,[chrome.cast.Capability.AUDIO_OUT]);this.X||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.J?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Ta)(this.WX,this);c=new chrome.cast.ApiConfig(c,(0,g.Ta)(this.FO,this),e,d,a);c.customDialLaunchCallback=(0,g.Ta)(this.QW,this);
chrome.cast.initialize(c,(0,g.Ta)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),Q1a(),this.u.subscribe("onlineScreenChange",(0,g.Ta)(this.fJ,this)),this.B=x2a(this),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Ta)(function(f){this.De("Failed to set initial custom receivers: "+g.oj(f))},this)),this.ea("yt-remote-cast2-availability-change",G8(this)),b(!0))},this),(0,g.Ta)(function(f){this.De("Failed to initialize API: "+g.oj(f));
b(!1)},this))};
g.h.GZ=function(a,b){F8("Setting connected screen ID: "+a+" -> "+b);if(this.j){var c=this.j.getScreen();if(!a||c&&c.id!=a)F8("Unsetting old screen status: "+this.j.j.friendlyName),H8(this,null)}if(a&&b){if(!this.j){c=x6(this.u.Nh(),a);if(!c){F8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){F8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=v2a(this,c);a||(F8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Ta)(function(d){this.De("Failed to set initial custom receivers: "+g.oj(d))},this)));
F8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);H8(this,new D8(this.u,a),!0)}this.j.RH(b)}else F8("setConnectedScreenStatus: no screen.")};
g.h.HZ=function(a){this.isDisposed()?this.De("Setting connection data on disposed cast v2"):this.j?this.j.Qt(a):this.De("Setting connection data without a session")};
g.h.eR=function(){this.isDisposed()?this.De("Stopping session on disposed cast v2"):this.j?(this.j.stop(),H8(this,null)):F8("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.Ta)(this.FO,this),(0,g.Ta)(this.oY,this))};
g.h.va=function(){this.u.unsubscribe("onlineScreenChange",(0,g.Ta)(this.fJ,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=N1a,b=g.Ka("yt.mdx.remote.debug.handlers_");g.jc(b||[],a);g.uf(this.j);g.Vv.prototype.va.call(this)};
g.h.De=function(a){c8("Controller",a)};
g.h.HO=function(a,b){this.j==a&&(b||H8(this,null),this.ea("yt-remote-cast2-session-change",b))};
g.h.TX=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),F8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.j)if(this.j.j.label!=a.label)F8("onReceiverAction_: Stopping active receiver: "+this.j.j.friendlyName),this.j.stop();else{F8("onReceiverAction_: Casting to active receiver.");this.j.getScreen()&&this.ea("yt-remote-cast2-session-change",this.j.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:H8(this,
new D8(this.u,a));break;case chrome.cast.ReceiverType.DIAL:H8(this,new z8(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:H8(this,new w8(this.u,a,this.config_));break;default:this.De("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.j&&this.j.j.label==a.label?this.j.stop():this.De("Stopping receiver w/o session: "+a.friendlyName)}else this.De("onReceiverAction_ called without receiver.")};
g.h.QW=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.De("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.j?this.j.j:null;if(!c||c.label!=b.label)return this.De("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.j.getScreen())return F8("Reselecting dial screen."),
this.ea("yt-remote-cast2-session-change",this.j.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.De('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H8(this,new z8(this.u,b,this.C,this.config_))}b=this.j;b.N=a;b.N.appState==chrome.cast.DialAppState.RUNNING?(a=b.N.extraData||{},c=a.screenId||null,A8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=r2a(b,{name:b.j.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.N.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.Or(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=s2a(b,c)):a=s2a(b,c)):a=C8(b);return a};
g.h.FO=function(a){var b=this;if(!this.isDisposed()&&!this.J){F8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.j)if(c.receiverType==chrome.cast.ReceiverType.CAST)F8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),H8(this,new w8(this.u,c,this.config_),!0);else{this.De("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.j.j,e=x6(this.u.Nh(),
d.label);e&&s6(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(F8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.uf(this.j),this.j=new w8(this.u,c,this.config_),this.j.subscribe("sessionScreen",(0,g.Ta)(this.HO,this,this.j)),this.j.subscribe("sessionFailed",function(){return w2a(b,b.j)}),this.j.Qt(null));
this.j.QH(a)}}};
g.h.dR=function(){return this.j?this.j.nK():null};
g.h.oY=function(a){this.isDisposed()||(this.De("Failed to estabilish a session: "+g.oj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&H8(this,null),this.ea("yt-remote-cast2-session-failed"))};
g.h.WX=function(a){F8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=G8(this);this.K=a==chrome.cast.ReceiverAvailability.AVAILABLE;G8(this)!=b&&this.ea("yt-remote-cast2-availability-change",G8(this))}};
g.h.fJ=function(){this.isDisposed()||(this.B=x2a(this),F8("Updating custom receivers: "+g.oj(this.B)),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Ta)(function(){this.De("Failed to set custom receivers.")},this)),this.ea("yt-remote-cast2-availability-change",G8(this)))};
E8.prototype.setLaunchParams=E8.prototype.HZ;E8.prototype.setConnectedScreenStatus=E8.prototype.GZ;E8.prototype.stopSession=E8.prototype.eR;E8.prototype.getCastSession=E8.prototype.dR;E8.prototype.requestSession=E8.prototype.requestSession;E8.prototype.init=E8.prototype.init;E8.prototype.dispose=E8.prototype.dispose;var N8=[];g.h=S8.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";T8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.il=a.hasPrevious,this.hasNext=a.hasNext,this.K=a.playerTime,this.J=a.playerTimeAt,this.C=a.seekableStart,this.j=a.seekableEnd,this.D=a.duration,this.N=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.h.Jc=function(){return 1==this.playerState};
g.h.isAdPlaying=function(){return 1081==this.playerState};
g.h.ek=function(a){this.D=isNaN(a)?0:a};
g.h.getDuration=function(){return this.u?this.D+U8(this):this.D};
g.h.clone=function(){return new S8(Y8(this))};g.w($8,g.Vv);g.h=$8.prototype;g.h.getState=function(){return this.B};
g.h.Co=function(){return this.C.getReconnectTimeout()};
g.h.gr=function(){this.C.reconnect()};
g.h.play=function(){b9(this)?(this.j?this.j.play(null,g.La,g9(this,"play")):f9(this,"play"),e9(this,1,W8(a9(this))),this.ea("remotePlayerChange")):c9(this,this.play)};
g.h.pause=function(){b9(this)?(this.j?this.j.pause(null,g.La,g9(this,"pause")):f9(this,"pause"),e9(this,2,W8(a9(this))),this.ea("remotePlayerChange")):c9(this,this.pause)};
g.h.seekTo=function(a){if(b9(this)){if(this.j){var b=a9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Jc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.j.seek(c,g.La,g9(this,"seekTo",{newTime:a}))}else f9(this,"seekTo",{newTime:a});e9(this,3,a);this.ea("remotePlayerChange")}else c9(this,g.Wa(this.seekTo,a))};
g.h.stop=function(){if(b9(this)){this.j?this.j.stop(null,g.La,g9(this,"stopVideo")):f9(this,"stopVideo");var a=a9(this);a.index=-1;a.videoId="";T8(a);d9(this,a);this.ea("remotePlayerChange")}else c9(this,this.stop)};
g.h.setVolume=function(a,b){if(b9(this)){var c=a9(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.Ta)(function(){c8("CP","set receiver volume: "+d)},this),(0,g.Ta)(function(){this.De("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.Ta)(function(){c8("CP","set receiver muted: "+b)},this),(0,g.Ta)(function(){this.De("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);f9(this,"setVolume",e)}c.muted=b;c.volume=a;d9(this,c)}else c9(this,g.Wa(this.setVolume,a,b))};
g.h.gJ=function(a,b){if(b9(this)){var c=a9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.oj(b.style),g.gg(a,c.trackData));f9(this,"setSubtitlesTrack",a);d9(this,c)}else c9(this,g.Wa(this.gJ,a,b))};
g.h.setAudioTrack=function(a,b){b9(this)?(b=b.getLanguageInfo().getId(),f9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=a9(this),a.audioTrackId=b,d9(this,a)):c9(this,g.Wa(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;k=void 0===k?null:k;var l=a9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);X8(l,a,c||0);void 0!==b&&(V8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);k&&(m.locationInfo=g.oj(k));f9(this,"setPlaylist",m);d||d9(this,l)};
g.h.KB=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"previous")}else c9(this,g.Wa(this.KB,a,b))};
g.h.nextVideo=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"next")}else c9(this,g.Wa(this.nextVideo,a,b))};
g.h.Qs=function(){if(b9(this)){f9(this,"clearPlaylist");var a=a9(this);a.reset();d9(this,a);this.ea("remotePlayerChange")}else c9(this,this.Qs)};
g.h.KL=function(){b9(this)?f9(this,"dismissAutoplay"):c9(this,this.KL)};
g.h.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ea("proxyStateChange",a,this.B)}g.Vv.prototype.dispose.call(this)};
g.h.va=function(){J2a(this);this.C=null;this.D.clear();Z8(this,null);g.Vv.prototype.va.call(this)};
g.h.SH=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ea("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.j.length&&(b.j=b.u,b.j.reverse(),b.u=[]),a.j.pop().apply(this);else 3==a&&this.dispose()}};
g.h.RX=function(a,b){this.ea(a,b)};
g.h.FW=function(a){if(!a)this.Bx(null),Z8(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=a9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)c8("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d9(this,b)}};
g.h.Bx=function(a){c8("CP","Cast media: "+!!a);this.j&&this.j.removeUpdateListener(this.N);if(this.j=a)this.j.addUpdateListener(this.N),K2a(this),this.ea("remotePlayerChange")};
g.h.EW=function(a){a?(K2a(this),this.ea("remotePlayerChange")):this.Bx(null)};
g.h.mI=function(){f9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.IW=function(){var a=G2a();a&&Z8(this,a)};
g.h.De=function(a){c8("CP",a)};g.w(j9,g.Vv);g.h=j9.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,k=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);k&&(m.clickTrackingParams=k);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ea&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.j.listId=c);this.j.videoId=d;this.j.index=l||0;this.j.state=3;V8(this.j,
n);this.D="UNSUPPORTED";c=this.Ea?"setInitialState":"setPlaylist";h9("Connecting with "+c+" and params: "+g.oj(m));this.u.connect({method:c,params:g.oj(m)},a,b0a())}else h9("Connecting without params"),this.u.connect({},a,b0a());O2a(this)};
g.h.hn=function(a){this.u.hn(a)};
g.h.dispose=function(){this.isDisposed()||(g.Ja("yt.mdx.remote.remoteClient_",null,void 0),this.ea("beforeDispose"),i9(this,3));g.Vv.prototype.dispose.call(this)};
g.h.va=function(){k9(this);m9(this);l9(this);g.fs(this.N);this.N=NaN;g.fs(this.X);this.X=NaN;this.C=null;g.Ys(this.Z);this.Z.length=0;this.u.dispose();g.Vv.prototype.va.call(this);this.D=this.K=this.B=this.j=this.u=null};
g.h.WM=function(a){if(!this.B||0===this.B.length)return!1;for(var b=g.q(this.B),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.h.zU=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Kw())?this.u.Jt()&&isNaN(this.J)&&(a=1):a=2);return a};
g.h.Zs=function(a){h9("Disconnecting with "+a);g.Ja("yt.mdx.remote.remoteClient_",null,void 0);k9(this);this.ea("beforeDisconnect",a);1==a&&C6();this.u.disconnect(a);this.dispose()};
g.h.xU=function(){var a=this.j;this.C&&(a=this.j.clone(),X8(a,this.C,a.index));return Y8(a)};
g.h.IZ=function(a){var b=this,c=new S8(a);c.videoId&&c.videoId!=this.j.videoId&&(this.C=c.videoId,g.fs(this.N),this.N=g.ds(function(){if(b.C){var e=b.C;b.C=null;b.j.videoId!=e&&n9(b,"getNowPlaying")}},5E3));
var d=[];this.j.listId==c.listId&&this.j.videoId==c.videoId&&this.j.index==c.index||d.push("remoteQueueChange");this.j.playerState==c.playerState&&this.j.volume==c.volume&&this.j.muted==c.muted&&W8(this.j)==W8(c)&&g.oj(this.j.trackData)==g.oj(c.trackData)||d.push("remotePlayerChange");this.j.reset(a);g.yc(d,function(e){this.ea(e)},this)};
g.h.oM=function(){var a=this.u.qo(),b=g.$b(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.Kw=function(){return this.u.Co()};
g.h.uU=function(){return this.D||"UNSUPPORTED"};
g.h.vU=function(){return this.K||""};
g.h.fR=function(){!isNaN(this.Kw())&&this.u.gr()};
g.h.FZ=function(a,b){n9(this,a,b);Q2a(this)};
g.h.hJ=function(){var a=g.us("SID","")||"",b=g.us("SAPISID","")||"",c=g.us("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Lc(g.jb(a),2);b=g.Lc(g.jb(b),2);c=g.Lc(g.jb(c),2);return g.Lc(g.jb(a+","+b+","+c),2)};
j9.prototype.subscribe=j9.prototype.subscribe;j9.prototype.unsubscribeByKey=j9.prototype.Lf;j9.prototype.getProxyState=j9.prototype.zU;j9.prototype.disconnect=j9.prototype.Zs;j9.prototype.getPlayerContextData=j9.prototype.xU;j9.prototype.setPlayerContextData=j9.prototype.IZ;j9.prototype.getOtherConnectedRemoteId=j9.prototype.oM;j9.prototype.getReconnectTimeout=j9.prototype.Kw;j9.prototype.getAutoplayMode=j9.prototype.uU;j9.prototype.getAutoplayVideoId=j9.prototype.vU;j9.prototype.reconnect=j9.prototype.fR;
j9.prototype.sendMessage=j9.prototype.FZ;j9.prototype.getXsrfToken=j9.prototype.hJ;j9.prototype.isCapabilitySupportedOnConnectedDevices=j9.prototype.WM;g.w(o9,g8);g.h=o9.prototype;g.h.Nh=function(a){return this.Ze.$_gs(a)};
g.h.contains=function(a){return!!this.Ze.$_c(a)};
g.h.get=function(a){return this.Ze.$_g(a)};
g.h.start=function(){this.Ze.$_st()};
g.h.add=function(a,b,c){this.Ze.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Ze.$_r(a,b,c)};
g.h.wC=function(a,b,c,d){this.Ze.$_un(a,b,c,d)};
g.h.va=function(){for(var a=0,b=this.j.length;a<b;++a)this.Ze.$_ubk(this.j[a]);this.j.length=0;this.Ze=null;g8.prototype.va.call(this)};
g.h.gR=function(){this.ea("screenChange")};
g.h.yX=function(){this.ea("onlineScreenChange")};
q8.prototype.$_st=q8.prototype.start;q8.prototype.$_gspc=q8.prototype.XS;q8.prototype.$_gsppc=q8.prototype.mK;q8.prototype.$_c=q8.prototype.contains;q8.prototype.$_g=q8.prototype.get;q8.prototype.$_a=q8.prototype.add;q8.prototype.$_un=q8.prototype.wC;q8.prototype.$_r=q8.prototype.remove;q8.prototype.$_gs=q8.prototype.Nh;q8.prototype.$_gos=q8.prototype.lK;q8.prototype.$_s=q8.prototype.subscribe;q8.prototype.$_ubk=q8.prototype.Lf;var B9=null,H9=!1,p9=null,q9=null,G9=null,u9=[];g.w(I9,g.I);g.h=I9.prototype;g.h.va=function(){g.I.prototype.va.call(this);this.j.stop();this.B.stop();this.N.stop();var a=this.dc;a.unsubscribe("proxyStateChange",this.EO,this);a.unsubscribe("remotePlayerChange",this.Fx,this);a.unsubscribe("remoteQueueChange",this.wB,this);a.unsubscribe("previousNextChange",this.BO,this);a.unsubscribe("nowAutoplaying",this.vO,this);a.unsubscribe("autoplayDismissed",this.YN,this);this.dc=this.u=null};
g.h.Lj=function(a){var b=g.Ca.apply(1,arguments);if(2!=this.dc.B)if(J9(this)){var c=a;if(!a9(this.dc).isAdPlaying()||"control_seek"!==c)switch(c){case "control_toggle_play_pause":a9(this.dc).Jc()?this.dc.pause():this.dc.play();break;case "control_play":this.dc.play();break;case "control_pause":this.dc.pause();break;case "control_seek":this.K.tD(b[0],b[1]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.I.getCurrentTime();L9(this,0===b?void 0:b);break;case "control_seek":L9(this,b[0]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.h.BW=function(a){this.N.zS(a)};
g.h.t_=function(a){this.Lj("control_subtitles_set_track",g.Zf(a)?null:a)};
g.h.WP=function(){var a=this.I.getOption("captions","track");g.Zf(a)||K9(this,a)};
g.h.Vb=function(a){this.u.Vb(a,this.I.getVideoData().lengthSeconds)};
g.h.jX=function(){g.Zf(this.C)||l3a(this,this.C);this.D=!1};
g.h.EO=function(a,b){this.B.stop();2===b&&this.PP()};
g.h.Fx=function(){if(J9(this)){this.j.stop();var a=a9(this.dc);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.Ff=1;break;case 1082:case 1083:this.u.Ff=0;break;default:this.u.Ff=-1}switch(a.playerState){case 1081:case 1:this.hc(new g.WH(8));this.OP();break;case 1085:case 3:this.hc(new g.WH(9));break;case 1083:case 0:this.hc(new g.WH(2));this.K.stop();this.Vb(this.I.getVideoData().lengthSeconds);break;case 1084:this.hc(new g.WH(4));break;case 2:this.hc(new g.WH(4));this.Vb(W8(a));
break;case -1:this.hc(new g.WH(64));break;case -1E3:this.hc(new g.WH(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback.",SE:2}))}a=a9(this.dc).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,l3a(this,a));a=a9(this.dc);-1===a.volume||Math.round(this.I.getVolume())===a.volume&&this.I.isMuted()===a.muted||this.X.isActive()||this.wQ()}else k3a(this)};
g.h.BO=function(){this.I.ea("mdxpreviousnextchange")};
g.h.wB=function(){J9(this)||k3a(this)};
g.h.vO=function(a){isNaN(a)||this.I.ea("mdxnowautoplaying",a)};
g.h.YN=function(){this.I.ea("mdxautoplaycanceled")};
g.h.setAudioTrack=function(a){J9(this)&&this.dc.setAudioTrack(this.I.getVideoData(1).videoId,a)};
g.h.seekTo=function(a,b){-1===a9(this.dc).playerState?L9(this,a):b&&this.dc.seekTo(a)};
g.h.wQ=function(){var a=this;if(J9(this)){var b=a9(this.dc);this.events.wc(this.Z);b.muted?this.I.mute():this.I.unMute();this.I.setVolume(b.volume);this.Z=this.events.T(this.I,"onVolumeChange",function(c){j3a(a,c)})}};
g.h.OP=function(){this.j.stop();if(!this.dc.isDisposed()){var a=a9(this.dc);a.Jc()&&this.hc(new g.WH(8));this.Vb(W8(a));this.j.start()}};
g.h.PP=function(){this.B.stop();this.j.stop();var a=this.dc.Co();2==this.dc.B&&!isNaN(a)&&this.B.start()};
g.h.hc=function(a){this.B.stop();var b=this.J;if(!g.aI(b,a)){var c=g.V(a,2);c!==g.V(this.J,2)&&this.I.Du(c);this.J=a;n3a(this.u,b,a)}};g.w(M9,g.W);M9.prototype.qd=function(){this.j.show()};
M9.prototype.Fb=function(){this.j.hide()};
M9.prototype.u=function(){p6("mdx-privacy-popup-cancel");this.Fb()};
M9.prototype.B=function(){p6("mdx-privacy-popup-confirm");this.Fb()};g.w(N9,g.W);N9.prototype.onStateChange=function(a){m3a(this,a.state)};g.w(O9,g.zP);O9.prototype.D=function(){var a=this.I.getOption("remote","receivers");a&&1<a.length&&!this.I.getOption("remote","quickCast")?(this.ip=g.Ac(a,this.j,this),g.AP(this,g.Vl(a,this.j)),a=this.I.getOption("remote","currentReceiver"),a=this.j(a),this.options[a]&&this.xi(a),this.enable(!0)):this.enable(!1)};
O9.prototype.j=function(a){return a.key};
O9.prototype.Cj=function(a){return"cast-selector-receiver"===a?"Cast...":this.ip[a].name};
O9.prototype.Mf=function(a){g.zP.prototype.Mf.call(this,a);this.I.setOption("remote","currentReceiver",this.ip[a]);this.sb.Fb()};g.w(P9,g.sM);g.h=P9.prototype;
g.h.create=function(){var a=this.player.V(),b=g.fD(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.S("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.S("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.S("enable_cast_short_lived_lounge_token")};e3a(b,a);this.subscriptions.push(g.qt("yt-remote-before-disconnect",this.yW,this));this.subscriptions.push(g.qt("yt-remote-connection-change",this.XX,this));this.subscriptions.push(g.qt("yt-remote-receiver-availability-change",this.DO,
this));this.subscriptions.push(g.qt("yt-remote-auto-connect",this.VX,this));this.subscriptions.push(g.qt("yt-remote-receiver-resumed",this.UX,this));this.subscriptions.push(g.qt("mdx-privacy-popup-confirm",this.lZ,this));this.subscriptions.push(g.qt("mdx-privacy-popup-cancel",this.kZ,this));this.DO()};
g.h.load=function(){this.player.cancelPlayback();g.sM.prototype.load.call(this);this.Ai=new I9(this,this.player,this.dc);var a=(a=i3a())?a.currentTime:0;var b=F9()?new $8(z9(),void 0):null;0==a&&b&&(a=W8(a9(b)));0!==a&&this.Vb(a);n3a(this,this.Jd,this.Jd);this.player.Dl(6)};
g.h.unload=function(){this.player.ea("mdxautoplaycanceled");this.Rn=this.vl;g.vf(this.Ai,this.dc);this.dc=this.Ai=null;g.sM.prototype.unload.call(this);this.player.Dl(5);Q9(this)};
g.h.va=function(){g.rt(this.subscriptions);g.sM.prototype.va.call(this)};
g.h.wl=function(a){var b=g.Ca.apply(1,arguments);this.loaded&&this.Ai.Lj.apply(this.Ai,[a].concat(g.v(b)))};
g.h.getAdState=function(){return this.Ff};
g.h.il=function(){return this.dc?a9(this.dc).il:!1};
g.h.hasNext=function(){return this.dc?a9(this.dc).hasNext:!1};
g.h.Vb=function(a,b){this.lN=a||0;this.player.ea("progresssync",a,b);this.player.Qa("onVideoProgress",a||0)};
g.h.getCurrentTime=function(){return this.lN};
g.h.getProgressState=function(){var a=a9(this.dc),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.V().S("web_player_mdx_allow_seeking_change_killswitch")?this.player.sf():!a.isAdPlaying()&&this.player.sf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+U8(a):a.B,isAtLiveHead:1>=(a.u?a.j+U8(a):a.j)-this.getCurrentTime(),loaded:a.N,seekableEnd:a.u?a.j+U8(a):a.j,seekableStart:0<
a.C?a.C+U8(a):a.C}};
g.h.nextVideo=function(){this.dc&&this.dc.nextVideo()};
g.h.KB=function(){this.dc&&this.dc.KB()};
g.h.yW=function(a){1===a&&(this.mH=this.dc?a9(this.dc):null)};
g.h.XX=function(){var a=F9()?new $8(z9(),void 0):null;if(a){var b=this.Rn;this.loaded&&this.unload();this.dc=a;this.mH=null;b.key!==this.vl.key&&(this.Rn=b,this.load())}else g.uf(this.dc),this.dc=null,this.loaded&&(this.unload(),(a=this.mH)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,W8(a)));this.player.ea("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.DO=function(){var a=[this.vl],b=a.concat,c=f3a();O8()&&g.Mw("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.ip=b.call(a,c);a=A9()||this.vl;R9(this,a);this.player.Qa("onMdxReceiversChange")};
g.h.VX=function(){var a=A9();R9(this,a)};
g.h.UX=function(){this.Rn=A9()};
g.h.lZ=function(){this.Ox=!0;Q9(this);H9=!1;B9&&D9(B9,1);B9=null};
g.h.kZ=function(){this.Ox=!1;Q9(this);R9(this,this.vl);this.Rn=this.vl;H9=!1;B9=null;this.player.playVideo()};
g.h.yf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.ip;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Q8():R9(this,b)),this.loaded?this.Rn:this.vl;case "quickCast":return 2===this.ip.length&&"cast-selector-receiver"===this.ip[1].key?(b&&Q8(),!0):!1}};
g.h.mI=function(){this.dc.mI()};
g.h.Zh=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.rM("remote",P9);})(_yt_player);


}
/*
     FILE ARCHIVED ON 22:00:48 Mar 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:54:28 Jun 19, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.175
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.01
  esindex: 0.01
  cdx.remote: 22.527
  LoadShardBlock: 272.632 (3)
  PetaboxLoader3.resolve: 266.681 (3)
  PetaboxLoader3.datanode: 2365.431 (4)
  load_resource: 2374.557
*/