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

;(function($){$(document).ready(function(){$(".video-js").parent().parent().attr('style','display:block');});})(jQuery);class H5VP_Video{constructor(){this.hlsVideo=[];this.dashVideo=[];}
quickPlayer(options,infos=null){options.controls=this.getControls(options.controls);const player=Plyr.setup('#h5vp_quick_player',options);}
newVideo(selector,options,infos){let windowWidth=window.innerWidth;options.seekTime=parseInt(options.seekTime);if(typeof i18n!='undefined'){options.i18n=i18n;}
options.controls=this.getControls(options.controls);const player=Plyr.setup(selector,options);this.countViews(player,infos.id);if(infos.sticky==1&&windowWidth>768){this.doSticky(player,infos.id);}
if(infos.protected){this.passwordController(selector,player,infos);}else{this.setSource(selector,player,infos);}
return player}
countViews(player,id){player.map(player=>{let i=0;player.on('play',event=>{if(i<1){jQuery.post(ajax.ajax_url,{'action':'video_played','data':1,'id':id},function(data){})}
i++;});})}
doSticky(players,id){players.map(player=>{let $=jQuery;let wrapper=$(".h5vp_video_sticky"+id);let sticky;let videoHeight=450;setTimeout(()=>{if(typeof wrapper.find('video')[0]!=='undefined'){videoHeight=wrapper.height()??450;}},1000);$(window).on('scroll',function(){if(player.playing==true){sticky=parseInt(wrapper.find('.plyr--playing').parent().offset().top);if(parseInt(window.pageYOffset-100)>sticky){wrapper.find('.plyr--playing').addClass("video-sticky in");wrapper.find('.plyr--playing').parent().find('.close').show();setTimeout(()=>{wrapper.height(videoHeight);},1100);wrapper.find('button[data-plyr=restart],button[data-plyr=fast-forward], button[data-plyr=pip],a[data-plyr=download],button[data-plyr=settings], button[data-plyr=rewind]').hide();}else{wrapper.height('initial');wrapper.find('.plyr--playing').removeClass("video-sticky in");wrapper.find('.close').hide();wrapper.find('button[data-plyr=restart],button[data-plyr=fast-forward], button[data-plyr=pip],a[data-plyr=download],button[data-plyr=settings], button[data-plyr=rewind]').show();}}
if(parseInt(window.pageYOffset+100)<sticky){wrapper.height('initial');wrapper.find('.plyr--playing').removeClass("video-sticky in");wrapper.find('.plyr--paused').removeClass("video-sticky in");wrapper.find('.close').hide();wrapper.find('button[data-plyr=restart],button[data-plyr=fast-forward], button[data-plyr=pip],a[data-plyr=download],button[data-plyr=settings], button[data-plyr=rewind]').show();}});$(".h5vp_video_sticky"+id+" .close").on('click',function(){let wrapper=$(".h5vp_video_sticky"+id);wrapper.find('.plyr').removeClass("video-sticky in");wrapper.find('button[data-plyr=restart],button[data-plyr=fast-forward], button[data-plyr=pip],a[data-plyr=download],button[data-plyr=settings], button[data-plyr=rewind]').show();player.pause();$(this).hide();});})}
passwordController(selector,players,infos){let myClass=this;let $=jQuery;players.map(player=>{$(".h5vp_player .password_form form").on('submit',function(e){e.preventDefault();let newThis=this;let videoId=$(newThis).attr('video')
let form=$(newThis).parent();let overlay=$(newThis).parent().parent().find('.video_overlay');$.post(ajax.ajax_url,{'action':'h5vp_password_checker','password':$(this).find('#password').val(),'postid':$(this).find('#postid').val()},function(data){if(data=='true'){$(newThis).find('.notice').addClass('success').text('Success');setTimeout(()=>{form.hide();overlay.hide();},1000);$.post(ajax.ajax_url,{'action':'h5vp_get_protected_video','postid':videoId},function(video){infos.video=JSON.parse(video);myClass.setSource(selector,players,infos);})}else{$(newThis).find('.notice').addClass('error').text('Wrong Password');}})});});}
getQuality(quality){if(typeof quality==='object'&&quality!==null){let videoQuality=[];let length=quality.length;for(let i=0;i<length;i++){videoQuality[i]={src:quality[i].video_file,size:quality[i].size,}}
return videoQuality;}}
getSubtitle(subtitle){if(typeof subtitle==='object'&&subtitle!==null){let videoSubtitle=[];let length=subtitle.length;for(let i=0;i<length;i++){videoSubtitle[i]={kind:'captions',label:subtitle[i].label,src:subtitle[i].caption_file,default:true}}
return videoSubtitle;}}
getControls(oldControls){let windowWidth=window.innerWidth;let controls=[];for(let[key,value]of Object.entries(oldControls)){if((value=='show'||value=='mobile')&&windowWidth>576){controls.push(key);}else if(value!='mobile'&&value!='hide'&&windowWidth<576){controls.push(key);}}
return controls;}
setSource(selector,players,infos){let myClass=this;players.map(player=>{if(!infos.streaming){if(infos.provider=='library'||infos.provider=='amazons3'){let quality=this.getQuality(infos.video.quality)??[];let subtitle=this.getSubtitle(infos.video.subtitle)??[];player.source={type:'video',sources:[{src:infos.video.source,type:'video/mp4',size:720},...quality],poster:infos.video.poster,tracks:subtitle}}else if(infos.provider=='youtube'){player.source={type:'video',sources:[{src:infos.video.source,provider:'youtube'}],poster:infos.video.poster}}else if(infos.provider=='vimeo'){player.source={type:'video',sources:[{src:infos.video.source,provider:'vimeo'}],poster:infos.video.poster}}}else{if(infos.streamingType=='hls'){this.videoHls(selector,player,infos)}else if(infos.streamingType=='dash'){this.videoDash(selector,player,infos);}}})}
videoHls(selector,player,infos){if(!Hls.isSupported()){console.log('hls not support')}else{const video=document.querySelector(selector);const hls=new Hls();hls.loadSource(infos.video.source);hls.attachMedia(video);player.on('languagechange',()=>{setTimeout(()=>hls.subtitleTrack=player.currentTrack,50);});}}
videoDash(selector,player,infos){const videos=document.querySelectorAll(selector);let length=videos.length;for(let i=0;i<length;i++){const dash=dashjs.MediaPlayer().create();dash.initialize(videos[i],infos.video.source,true);}}}

}
/*
     FILE ARCHIVED ON 00:19:46 Sep 28, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:30:34 Jan 25, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.781
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.01
  esindex: 0.02
  cdx.remote: 7.788
  LoadShardBlock: 100.885 (3)
  PetaboxLoader3.datanode: 162.194 (5)
  PetaboxLoader3.resolve: 361.414 (3)
  load_resource: 493.122 (2)
*/