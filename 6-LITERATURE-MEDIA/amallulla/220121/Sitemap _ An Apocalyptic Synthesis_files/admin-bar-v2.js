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

if('undefined'==typeof wpcom){wpcom={};}
if('undefined'==typeof wpcom.events){wpcom.events=_.extend({},Backbone.Events);}
(function($){var __autoCacheBusterNotesPanel='calypso-4917-3286-g69c83d04d2';var wpNotesArgs=window.wpNotesArgs||{},cacheBuster=wpNotesArgs.cacheBuster||__autoCacheBusterNotesPanel,iframeUrl=wpNotesArgs.iframeUrl||'https://web.archive.org/web/20220122185728/https://widgets.wp.com/notes/',iframeAppend=wpNotesArgs.iframeAppend||'',iframeScroll=wpNotesArgs.iframeScroll||"no",wideScreen=wpNotesArgs.wide||false,hasToggledPanel=false,iframePanelId,iframeFrameId;var wpntView=Backbone.View.extend({el:'#wp-admin-bar-notes',hasUnseen:null,initialLoad:true,count:null,iframe:null,iframeWindow:null,messageQ:[],iframeSpinnerShown:false,isJetpack:false,linkAccountsURL:false,currentMasterbarActive:false,initialize:function(){var t=this;var matches=navigator.appVersion.match(/MSIE (\d+)/);if(matches&&parseInt(matches[1],10)<8){var $panel=t.$('#'+iframePanelId);var $menuItem=t.$('.ab-empty-item');if(!$panel.length||!$menuItem.length){return;}
var offset=t.$el.offset();t.$('.ab-item').removeClass('ab-item');t.$('#wpnt-notes-unread-count').html('?');$panel.html(' \
					<div class="wpnt-notes-panel-header"><p>Notifications are not supported in this browser!</p> </div> \
					<img src="https://web.archive.org/web/20220122185728/http://i2.wp.com/wordpress.com/wp-content/mu-plugins/notes/images/jetpack-notes-2x.png" /> \
					<p class="wpnt-ie-note"> \
					Please <a href="https://web.archive.org/web/20220122185728/http://browsehappy.com" target="_blank">upgrade your browser</a> to keep using notifications. \
					</p>').addClass('browse-happy');t.$el.on('mouseenter',function(e){clearTimeout(t.fadeOutTimeout);if($panel.is(':visible:animated')){$panel.stop().css('opacity','');}
$menuItem.css({'background-color':'#eee'});$panel.show();});t.$el.on('mouseleave',function(){t.fadeOutTimeout=setTimeout(function(){clearTimeout(t.fadeOutTimeout);if($panel.is(':animated')){return;}
$panel.fadeOut(250,function(){$menuItem.css({'background-color':'transparent'});});},350);});return;}
if('function'!=typeof $.fn.spin){$.fn.spin=function(x){};}
this.isRtl=$('#wpadminbar').hasClass('rtl');this.count=$('#wpnt-notes-unread-count');this.panel=$('#'+iframePanelId);this.hasUnseen=this.count.hasClass('wpn-unread');if('undefined'!=typeof wpNotesIsJetpackClient&&wpNotesIsJetpackClient)
t.isJetpack=true;if(t.isJetpack&&'undefined'!=typeof wpNotesLinkAccountsURL)
t.linkAccountsURL=wpNotesLinkAccountsURL;this.$el.children('.ab-item').on('click touchstart',function(e){e.preventDefault();t.togglePanel();return false;});this.preventDefault=function(e){if(e)e.preventDefault();return false;};if(iframeAppend=='2'){this.panel.mouseenter(function(){document.body.addEventListener('mousewheel',t.preventDefault);});this.panel.mouseleave(function(){document.body.removeEventListener('mousewheel',t.preventDefault);});if(typeof document.hidden!=='undefined'){document.addEventListener('visibilitychange',function(){t.postMessage({action:"toggleVisibility",hidden:document.hidden});});}}
$(document).bind("mousedown focus",function(e){var $clicked;if(!t.showingPanel)
return true;$clicked=$(e.target);if($clicked.is(document))
return true;if($clicked.closest('#wp-admin-bar-notes').length)
return true;t.hidePanel();return false;});$(document).on('keydown.notes',function(e){var keyCode=wpNotesCommon.getKeycode(e);if(!keyCode)
return;if((keyCode==27))
t.hidePanel();if((keyCode==78))
t.togglePanel();if(this.iframeWindow===null)
return;if(t.showingPanel&&((keyCode==74)||(keyCode==40))){t.postMessage({action:"selectNextNote"});return false;}
if(t.showingPanel&&((keyCode==75)||(keyCode==38))){t.postMessage({action:"selectPrevNote"});return false;}
if(t.showingPanel&&((keyCode==82)||(keyCode==65)||(keyCode==83)||(keyCode==84))){t.postMessage({action:"keyEvent",keyCode:keyCode});return false;}
});wpcom.events.on('notes:togglePanel',function(){t.togglePanel();});if(t.isJetpack)
t.loadIframe();else{setTimeout(function(){t.loadIframe();},3000);}
if(t.count.hasClass('wpn-unread'))
wpNotesCommon.bumpStat('notes-menu-impressions','non-zero');else
wpNotesCommon.bumpStat('notes-menu-impressions','zero');$(window).on('message',function(event){if(!event.data&&event.originalEvent.data){event=event.originalEvent;}
if(event.origin!='https://web.archive.org/web/20220122185728/https://widgets.wp.com'){return;}
try{var data=('string'==typeof event.data)?JSON.parse(event.data):event.data;if(data.type!='notesIframeMessage'){return;}
t.handleEvent(data);}catch(e){}});},handleEvent:function(event){var inNewdash=('undefined'!==typeof wpcomNewdash&&'undefined'!==typeof wpcomNewdash.router&&'undefined'!==wpcomNewdash.router.setRoute);if(!event||!event.action){return;}
switch(event.action){case"togglePanel":this.togglePanel();break;case"render":this.render(event.num_new,event.latest_type);break;case"renderAllSeen":this.renderAllSeen();break;case"iFrameReady":this.iFrameReady(event);break;case"goToNotesPage":if(inNewdash){wpcomNewdash.router.setRoute('/notifications');}else{window.location.href='//web.archive.org/web/20220122185728/https://wordpress.com/me/notifications/';}
break;case"widescreen":var iframe=$('#'+iframeFrameId);if(event.widescreen&&!iframe.hasClass('widescreen')){iframe.addClass('widescreen');}else if(!event.widescreen&&iframe.hasClass('widescreen')){iframe.removeClass('widescreen');}
break;}},render:function(num_new,latest_type){var t=this,flash=false;if((false===this.hasUnseen)&&(0===num_new))
return;if(this.initialLoad&&this.hasUnseen&&(0!==num_new)){this.initialLoad=false;return;}
if(!this.hasUnseen&&(0!==num_new)){wpNotesCommon.bumpStat('notes-menu-impressions','non-zero-async');}
var latest_icon_type=wpNotesCommon.noteType2Noticon[latest_type];if(typeof latest_icon_type=='undefined')
latest_icon_type='notification';var latest_img_el=$('<span/>',{'class':'noticon noticon-'+latest_icon_type+''});var status_img_el=this.getStatusIcon(num_new);if(0===num_new||this.showingPanel){this.hasUnseen=false;t.count.fadeOut(200,function(){t.count.empty();t.count.removeClass('wpn-unread').addClass('wpn-read');t.count.html(status_img_el);t.count.fadeIn(500);});if(wpcom&&wpcom.masterbar){wpcom.masterbar.hasUnreadNotifications(false);}}else{if(this.hasUnseen){t.count.fadeOut(400,function(){t.count.empty();t.count.removeClass('wpn-unread').addClass('wpn-read');t.count.html(latest_img_el);t.count.fadeIn(400);});}
this.hasUnseen=true;t.count.fadeOut(400,function(){t.count.empty();t.count.removeClass('wpn-read').addClass('wpn-unread');t.count.html(latest_img_el);t.count.fadeIn(400,function(){});});if(wpcom&&wpcom.masterbar){wpcom.masterbar.hasUnreadNotifications(true);}}},renderAllSeen:function(){if(!this.hasToggledPanel){return;}
var img_el=this.getStatusIcon(0);this.count.removeClass('wpn-unread').addClass('wpn-read');this.count.empty();this.count.html(img_el);this.hasUnseen=false;if(wpcom&&wpcom.masterbar){wpcom.masterbar.hasUnreadNotifications(false);}},getStatusIcon:function(number){var new_icon='';switch(number){case 0:new_icon='noticon noticon-notification';break;case 1:new_icon='noticon noticon-notification';break;case 2:new_icon='noticon noticon-notification';break;default:new_icon='noticon noticon-notification';}
return $('<span/>',{'class':new_icon});},togglePanel:function(){if(!this.hasToggledPanel){this.hasToggledPanel=true;}
var t=this;this.loadIframe();this.$el.toggleClass('wpnt-stayopen');this.$el.toggleClass('wpnt-show');this.showingPanel=this.$el.hasClass('wpnt-show');$('.ab-active').removeClass('ab-active');if(this.showingPanel){var $unread=this.$('.wpn-unread');if($unread.length){$unread.removeClass('wpn-unread').addClass('wpn-read');}
this.reportIframeDelay();if(this.hasUnseen)
wpNotesCommon.bumpStat('notes-menu-clicks','non-zero');else
wpNotesCommon.bumpStat('notes-menu-clicks','zero');this.hasUnseen=false;}
this.postMessage({action:"togglePanel",showing:this.showingPanel});var focusNotesIframe=function(iframe){if(null===iframe.contentWindow){iframe.addEventListener('load',function(){iframe.contentWindow.focus();});}else{iframe.contentWindow.focus();}};if(this.showingPanel){focusNotesIframe(this.iframe[0]);}else{window.focus();}
this.setActive(this.showingPanel);},setActive:function(active){if(active){this.currentMasterbarActive=$('.masterbar li.active');this.currentMasterbarActive.removeClass('active');this.$el.addClass('active');}else{this.$el.removeClass('active');if(this.currentMasterbarActive){this.currentMasterbarActive.addClass('active');}
this.currentMasterbarActive=false;}
this.$el.find('a').first().blur();},loadIframe:function(){var t=this,args=[],src,lang,queries,panelRtl;if(t.iframe===null){t.panel.addClass('loadingIframe');if(t.isJetpack){args.push('jetpack=true');if(t.linkAccountsURL){args.push('link_accounts_url='+escape(t.linkAccountsURL));}}
if(('ontouchstart'in window)||window.DocumentTouch&&document instanceof DocumentTouch){t.panel.addClass('touch');}
panelRtl=$('#'+iframePanelId).attr('dir')=='rtl';lang=$('#'+iframePanelId).attr('lang')||'en';args.push('v='+cacheBuster);args.push('locale='+lang);queries=(args.length)?'?'+args.join('&'):'';src=iframeUrl;if(iframeAppend=='2'&&(t.isRtl||panelRtl)&&!/rtl.html$/.test(iframeUrl)){src=iframeUrl+'rtl.html';}
src=src+queries+'#'+document.location.toString();if($('#'+iframePanelId).attr('dir')=='rtl'){src+='&rtl=1';}
if(!lang.match(/^en/)){src+=('&lang='+lang);}
t.iframe=$('<iframe style="display:none" id="'+iframeFrameId+'" frameborder=0 ALLOWTRANSPARENCY="true" scrolling="'+iframeScroll+'"></iframe>');t.iframe.attr('src',src);if(wideScreen){t.panel.addClass('wide');t.iframe.addClass('wide');}
t.panel.append(t.iframe);}},reportIframeDelay:function(){if(!this.iframeWindow){if(!this.iframeSpinnerShown)
this.iframeSpinnerShown=(new Date()).getTime();return;}
if(this.iframeSpinnerShown!==null){var delay=0;if(this.iframeSpinnerShown)
delay=(new Date()).getTime()-this.iframeSpinnerShown;if(delay===0)
wpNotesCommon.bumpStat('notes_iframe_perceived_delay','0');else if(delay<1000)
wpNotesCommon.bumpStat('notes_iframe_perceived_delay','0-1');else if(delay<2000)
wpNotesCommon.bumpStat('notes_iframe_perceived_delay','1-2');else if(delay<4000)
wpNotesCommon.bumpStat('notes_iframe_perceived_delay','2-4');else if(delay<8000)
wpNotesCommon.bumpStat('notes_iframe_perceived_delay','4-8');else
wpNotesCommon.bumpStat('notes_iframe_perceived_delay','8-N');this.iframeSpinnerShown=null;}},iFrameReady:function(event){var t=this;var url_parser=document.createElement('a');url_parser.href=this.iframe.get(0).src;this.iframeOrigin=url_parser.protocol+'//'+url_parser.host;this.iframeWindow=this.iframe.get(0).contentWindow;if("num_new"in event)
this.render(event.num_new,event.latest_type);this.panel.removeClass('loadingIframe').find('.wpnt-notes-panel-header').remove();this.iframe.show();if(this.showingPanel)
this.reportIframeDelay();$(window).on('focus keydown mousemove scroll',function(){var now=(new Date()).getTime();if(!t.lastActivityRefresh||t.lastActivityRefresh<now-5000){t.lastActivityRefresh=now;t.postMessage({action:"refreshNotes"});}});this.sendQueuedMessages();},hidePanel:function(){if(this.showingPanel){this.togglePanel();}},postMessage:function(message){var t=this;try{var _msg=('string'==typeof message)?JSON.parse(message):message;if(!_.isObject(_msg)){return;}
_msg=_.extend({type:'notesIframeMessage'},_msg);var targetOrigin=this.iframeOrigin;if(this.iframeWindow&&this.iframeWindow.postMessage){this.iframeWindow.postMessage(JSON.stringify(_msg),targetOrigin);}else{this.messageQ.push(_msg);}}
catch(e){}},sendQueuedMessages:function(){var t=this;_.forEach(this.messageQ,function(m){t.postMessage(m);});this.messageQ=[];}});$(function(){if(($('#wpnt-notes-panel').length==0&&$('#wpnt-notes-panel2').length)&&('undefined'!=typeof wpNotesIsJetpackClientV2&&wpNotesIsJetpackClientV2)){iframeUrl='https://web.archive.org/web/20220122185728/https://widgets.wp.com/notifications/';iframeAppend='2';iframeScroll='yes';wideScreen=true;}
iframePanelId="wpnt-notes-panel"+iframeAppend;iframeFrameId="wpnt-notes-iframe"+iframeAppend;new wpntView();});})(jQuery);

}
/*
     FILE ARCHIVED ON 18:57:28 Jan 22, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:50:09 Jan 25, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.674
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.009
  esindex: 0.012
  cdx.remote: 21.622
  LoadShardBlock: 69.891 (3)
  PetaboxLoader3.datanode: 109.759 (5)
  load_resource: 98.541
  PetaboxLoader3.resolve: 48.627
  loaddict: 27.789
*/