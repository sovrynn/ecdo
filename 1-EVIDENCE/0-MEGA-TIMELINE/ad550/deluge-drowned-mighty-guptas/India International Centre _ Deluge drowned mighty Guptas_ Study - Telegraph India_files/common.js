// commons.js version: 01.13
// First time load either on load or scroll event
var firstScrolled = false;

// Dom content loaded
document.addEventListener("DOMContentLoaded", function() {
    _lazyImage();
    window._izq = window._izq || []; window._izq.push(["init" ]);
    if( $('#mkbntophp').length > 0 ){
        mkBannerOneArrowHide();
    }
    if( $('#mkbnmiddlehp').length > 0 ){
        mkBannerTwoArrowHide();
    }
    if (THIS_PAGE_NAME != '' && THIS_PAGE_NAME != undefined && THIS_PAGE_NAME != 'undefined' && THIS_PAGE_NAME == 'regular') {
        const contentboxId   = document.getElementById('contentbox');
        if(contentboxId){
            var contentBoxHeight = contentboxId.offsetHeight;
            if(contentBoxHeight < 300){
                //RHS Element hide
                $('#rightsection').hide();
            }else if(contentBoxHeight >= 300 && contentBoxHeight <= 700){
                //RHS: 300x600_1
                $('#rightAd300x600_1').show();
                $('#rightAd300x600_2').hide();
                $('#rightMkBanner').hide();
                $('#rightRecirculation').hide();
            }else if(contentBoxHeight >= 700 && contentBoxHeight <= 1000){
                //RHS: 300x600_1, 300x600_2
                $('#rightAd300x600_1').show();
                $('#rightAd300x600_2').show();
                $('#rightMkBanner').hide();
                $('#rightRecirculation').hide();
            }else if(contentBoxHeight >= 1000 && contentBoxHeight <= 2000){
                //RHS: 300x600_1, 300x600_2, MarketingBanner
                $('#rightAd300x600_1').show();
                $('#rightAd300x600_2').show();
                $('#rightMkBanner').show();
                $('#rightRecirculation').hide();
            }else if(contentBoxHeight >= 2000){
                //RHS Element show
                $('#rightsection').show();
            }
        }
        
    }
}); 

// on scroll event
document.addEventListener("scroll", function () {
    firstScrolledInit();
    if( $('#mkbntophp').length > 0 ){
        marketingBannerJs(mkbntophp);
    }
    if( $('#mkbnmiddlehp').length > 0 ){
        marketingBannerJs(mkbnmiddlehp);
    }
    
});

// Ready on Document
$(document).ready(function () {
    var bott= $('nav').position().top;
    $(window).scroll(function(){
        var wintop= $(window).scrollTop();
        if(wintop >= bott){
            $('nav').addClass('adcls');
            $('.slinkbox').addClass('dnone');
            $('.sitelogo').addClass('dblock');
            $('.hbnsearchbox').addClass('adcls');
        }else{
            $('nav').removeClass('adcls');
            $('.slinkbox').removeClass('dnone');
            $('.sitelogo').removeClass('dblock');
            $('.hbnsearchbox').removeClass('adcls');
        }
    });

    $('#hbbtn').on('click', function(e){
        $('.exhamburgerouter').fadeIn(100);
        e.preventDefault();
        e.stopPropagation(e);
    });

    $('.hbclosebtn').on('click', function(e){
        $('.exhamburgerouter').fadeOut(100);
        e.preventDefault();
    });

    $('.hpnav li').on('click', function(e){
        $(this).toggleClass('hbactive').siblings('li').removeClass('hbactive');
        $(this).find('.bharrowbox').toggleClass('adcls');
        $(this).siblings('li').find('.bharrowbox').removeClass('adcls');
        $(this).find('div.hbsubnav').slideToggle();
        $(this).siblings().find('div.hbsubnav').slideUp();
         e.stopPropagation(e);
    });

    $('.exhamburgerouter').on('click', function(e){
        $('.exhamburgerouter').removeClass('adcls');
        $('body').removeClass('overfynone');
    });

    $('#searchbtn').on('click', function(e){
        $('.searchbox').addClass('adcls');
        e.preventDefault();
        e.stopPropagation(e);
    });

    $('body').on('click', function(){
        $('.searchbox').removeClass('adcls');
        $('.exhamburgerouter').fadeOut(100);
    });

    $('.searchbox').on('click', function(e){
        $(this).addClass('adcls');
        e.stopPropagation(e);
    });
    if (THIS_PAGE_NAME != '' && THIS_PAGE_NAME != undefined && THIS_PAGE_NAME != 'undefined' && THIS_PAGE_NAME == 'photo') {
        /* TT: Social share for ligtbox for Photogallery article*/
        $('.photoshare').on('click', function(e){
            e.preventDefault();
            $('.nbsharelightbox').addClass('adcls');
        });
        $('.sbclosebtn, .nbsharelightbox').on('click', function(e) {
            e.stopPropagation();
            $('.nbsharelightbox').removeClass('adcls');
        });
        $('.nbsharebox').on('click', function(e){
            $('.nbsharelightbox').addClass('adcls');
            e.stopPropagation();
        });
    }
});

function _lazyImage() {

    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy,img.lazy-load"));
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    var image = new Image();
                    image.src = lazyImage.dataset.src;
                    image.onerror = function() {
                        lazyImage.src ='/revamp-assets/desktop/images/mplaceholderimg.jpg';
                    };
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        window.addEventListener('scroll'),
        function() {
            lazyImages.forEach(function(lazyImage) {
                if (elementInViewport(lazyImage)) {
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                }
            })
        }
    }
}

/*Check if element in View Port*/
function elementInViewport(el) {

    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }
    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}

function loadScript(path, id, async, placement = "body", divId=null) {
    let j = document.createElement("script");
    if (async === false) {
        j.defer = true;
    } else {
        j.async = true;
    }
    j.src = path;
    if (id) {
        j.id = id;
    }
    if (placement == "head") {
        document.head.appendChild(j);
    } else if(placement == "divId"){
        document.getElementById(divId).appendChild(j);  
    }else {
        document.body.appendChild(j);
    }
    return j;
}

function firstScrolledInit() {
    if (firstScrolled) {
        return;
    }
    firstScrolled = true;

    // Slider
    loadScript("/massets/js/slick.min.js");

    // iZooto
    loadScript("https://cdn.izooto.com/scripts/8bc70b64e2c82026a458dde2e632df4b57f8abaa.js");

   if (THIS_PAGE_NAME != '' && THIS_PAGE_NAME != undefined && THIS_PAGE_NAME != 'undefined' && (THIS_PAGE_NAME == 'homepage' ||  THIS_PAGE_NAME == 'sectionpage')) {
         
        videoWidgetSlider();
    }
}

/*Copy Article URL*/
function copyToClipboard(curr_url) {
    var _temp = $('<input type="hidden" value="' + curr_url + '">');
    if (!navigator.clipboard) {
        $("body").append(_temp);
        _temp.select();
        document.execCommand("copy");
        _temp.remove();
        $('.ulrcompyed').fadeIn();

        function explodeClipBord() {
            $('.ulrcompyed').fadeOut();
        }
        setTimeout(explodeClipBord, 3000);
        return false;
    } else {
        navigator.clipboard.writeText(curr_url).then(
        function() {
            $('.ulrcompyed').fadeIn();
            function explodeClipBordCopy() {
                $('.ulrcompyed').fadeOut();
            }
            setTimeout(explodeClipBordCopy, 3000);
            return false;
        })
        .catch(
        function() {
            return false;
        });
    }
    return false;
}

function mkBannerOneArrowHide() {
    if($('#mk_banner_one').length > 0 && !$('#mk_banner_one').hasClass('slick-initialized')){
        $('#mk_banner_one').on('init', function (event, slick, direction) {
            if ($('#mk_banner_one .slick-slide').length  == 1) {
                $('#mk_one_arrow').hide();
            }
        });
    }
}

function mkBannerTwoArrowHide() {
    if($('#mk_banner_two').length > 0 && !$('#mk_banner_two').hasClass('slick-initialized')){
        $('#mk_banner_two').on('init', function (event, slick, direction) {
            if ($('#mk_banner_two .slick-slide').length  == 1) {
                $('#mk_two_arrow').hide();
            }
        });
    }
}

function marketingBannerJs(view_port_div_id) {

    /*TT: Marketing banner*/
    if($('.marketingbanner').length > 0 && !$('.marketingbanner').hasClass('slick-initialized')){
        if (elementInViewport(view_port_div_id) && !$('.marketingbanner').hasClass('slick-initialized')) {
            if($().slick){
                console.log('slick-initialized');
                $('.marketingbanner').each(function(num, elem) {
                    elem = $(elem);
                    elem.slick({
                        dots: false,
                        infinite: true,
                        autoplay:true,
                        speed: 500,
                        autoplaySpeed: 5000,
                        slidesToShow:1,
                        slidesToScroll:1,
                        nextArrow: elem.parent().find('.mbrightarrow'),
                        prevArrow: elem.parent().find('.mbleftarrow'),
                        fade: true,
                        cssEase: 'linear'
                    });
                    elem.next('.marketingbanner').slick({
                        dots: false,
                        infinite: true,
                        autoplay:true,
                        speed: 500,
                        autoplaySpeed: 5000,
                        slidesToShow:1,
                        slidesToScroll:1,
                        nextArrow: elem.parent().find('.mbrightarrow'),
                        prevArrow: elem.parent().find('.mbleftarrow'),
                        fade: true,
                        cssEase: 'linear'
                    });
                });
                if ($('.marketingbanner').hasClass('slick-initialized') && $('.marketingbanner').hasClass('mbannerblock')){
                    $('.marketingbanner').removeClass('mbannerblock');
                }
            }else{
                console.log('slick-initialized not');
                $.getScript('/massets/js/slick.min.js', function() {
                    $('.marketingbanner').each(function(num, elem) {
                        elem = $(elem);
                        elem.slick({
                            dots: false,
                            infinite: true,
                            autoplay:true,
                            speed: 500,
                            autoplaySpeed: 5000,
                            slidesToShow:1,
                            slidesToScroll:1,
                            nextArrow: elem.parent().find('.mbrightarrow'),
                            prevArrow: elem.parent().find('.mbleftarrow'),
                            fade: true,
                            cssEase: 'linear'
                        });
                        elem.next('.marketingbanner').slick({
                            dots: false,
                            infinite: true,
                            autoplay:true,
                            speed: 500,
                            autoplaySpeed: 5000,
                            slidesToShow:1,
                            slidesToScroll:1,
                            nextArrow: elem.parent().find('.mbrightarrow'),
                            prevArrow: elem.parent().find('.mbleftarrow'),
                            fade: true,
                            cssEase: 'linear'
                        });
                    });
                    if ($('.marketingbanner').hasClass('slick-initialized') && $('.marketingbanner').hasClass('mbannerblock')){
                        $('.marketingbanner').removeClass('mbannerblock');
                    }                
                });
            }
        }
    }
}

if (THIS_PAGE_NAME != '' && THIS_PAGE_NAME != undefined && THIS_PAGE_NAME != 'undefined' && THIS_PAGE_NAME == 'regular') {


    let newUrl          = null;
    let siteTitle       = null;
    let siteDescription = null;
    let siteOgImage     = null;
    var hostName        = 'https://'+window.location.hostname;

    /*Load css in head*/ 
    function loadCssInHead() {
        var link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = hostName+"/revamp-assets/desktop/css/home.css?v=0.03";
        document.head.appendChild(link);
    }

    /*Scroll Event*/ 
    window.addEventListener('scroll',(event) => {
        if ( $(".loadWidget").isInViewport() ) {
            getLoadArticles('contant_refresh');
        }
        
    });
    $(document).ready(function(){
        $(document).on("click", '#load_more_content', function(event) {
            $('.readmorebox').hide();
            $('.contant_refresh').addClass('contant_homepage');
            $('.taboola_home').addClass('contant_homepage');
            $('.add_contant').addClass('contant_article');
            getLoadArticles('contant_append');
        });
    });

    $.fn.isInViewport = function() {
        if($(this).length > 0){
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();

            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            return elementBottom > viewportTop && elementTop < viewportBottom;
        }else{
            return false;
        }
    };

    var ajaxRunning = false;
    function getLoadArticles(type) {

        var contentHtml = '';

        if ( !ajaxRunning) {

            ajaxRunning = true;

            $.ajax({
                type: "GET",
                url: "/api/loadmore-homepage",
                datatype: "json", 
                data: { 
                    type:type
                },
                beforeSend: function(){
                },
                success: function(result){
                    if(result.success == 1){

                        if(type == 'contant_refresh'){
                            $( ".loadWidget" ).remove();
                            /*Regular ATF*/ 
                            if(result.data.regularatf){
                                contentHtml+= widgetRegularatf(result.data.regularatf);
                            }
                            $('.contant_refresh').html(contentHtml);
                        }else{
                            loadCssInHead();
                            $.each(result.data, function( index, value ) {
                                contentHtml+= makeHtmlOfHomepageWidget(index,value);
                            });
                            $('.contant_refresh').append(contentHtml);
                            console.log('Homepage');
                            //Homepage
                            let newUrl          = hostName;
                            let siteTitle       = $(".contant_refresh").data("title");
                            let siteDescription = $(".contant_refresh").data("description");
                            let siteOgImage     = $(".contant_refresh").data("ogimage");

                            homepageComScoreCall(siteTitle,newUrl);
                            homepageMetaChange(siteTitle, siteDescription, siteOgImage, newUrl);
                        }
                        
                    }
                },
                complete: function() {
                    ajaxRunning = false;
                }
            })
        }
    }


    function makeHtmlOfHomepageWidget(widgetname,value) {

        var contentHtml = '';
        /*Opinion*/
        if( widgetname == 'opinion'){
            contentHtml+= widgetOpinion(value);
        }

        
        else if( widgetname == 'entertainment'){
            contentHtml+= widgetEntertainment(value);
        }

        /*Edugraph*/
        else if( widgetname == 'edugraph'){
            contentHtml+= widgetEdugraph(value);
        }
        
        /*Four Story: world*/
        else if( widgetname == 'world'){
            contentHtml+= widgetFourstories(value);
        }

        /*Six Story: westbengal, nation, sports, business, */
        else if( widgetname == 'westbengal' || widgetname == 'nation' || widgetname == 'sports' || widgetname == 'business'){
            contentHtml+= widgetSixstories(value);
        }

        /*Try This Today*/
        else if( widgetname == 'trythistoday'){
            contentHtml+= widgetTrythistoday(value);
        }

        /*My Kolkata*/
        else if( widgetname == 'mykolkata'){
            contentHtml+= widgetMykolkata(value);
        }

        /*Treding*/
        else if( widgetname == 'treding'){
            contentHtml+= widgetTreding(value);
        }

        /*Top Picks*/
        else if( widgetname == 'toppicks'){
            contentHtml+= widgetToppicks(value);
        }

        /*Top Picks*/
        else if( widgetname == 'in-pictures'){
            contentHtml+= widgetPhotogallery(value);
        }

        return contentHtml;

    }

    /*Regular ATF*/ 
    function widgetRegularatf(regularatf) {
        var contentHtml = '';
        contentHtml += 
            `<section class="atfstorys container sepretor pt-32" id="test">
                <div class="leftcontainer">
                    <div class="linnerbox">`;
                        contentHtml +=`
                        <div class="leftbox">`;
                            $.each(regularatf.data.slice(0,1), function( index, value ) {
                                contentHtml += 
                                `<a href="/`+value.url+`" class="leftstorybox">
                                    <h1 class="betellips betvl-5">`+value.headline+`</h1>
                                    <p class="betellips betvl-4">`+value.strap+`</p>
                                </a>`;
                            });
                            contentHtml +=
                            `<ul class="storylisting">`;
                                $.each(regularatf.data.slice(1,3), function( index, value ) {
                                    contentHtml +=
                                    `<li>
                                        <h2 class="betellips betvl-3">
                                           <a href="/`+value.url+`">`+value.headline+`</a>
                                        </h2>
                                    </li>`;
                                });
                                contentHtml +=
                            `</ul>`;
                            contentHtml +=
                        `</div>
                        <div class="leadstory">`;
                            $.each(regularatf.data.slice(3,4), function( index, value ) {
                                contentHtml +=
                                `<a href="/`+value.url+`" class="lsinnerbox">
                                    <figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>
                                    <div class="contentbox">
                                        <img src="/revamp-assets/desktop/images/quote_left.svg" class="left-quote" alt="Quote left">
                                        <img src="/revamp-assets/desktop/images/quote_right.svg" class="right-quote" alt="Quote right">
                                        <h2 class="betellips betvl-4">`+value.headline+`</h2>
                                    </div>
                                </a>`;
                            });
                            contentHtml +=
                        `</div>
                    </div>
                    <ul class="lblisting mt-24">`;
                        $.each(regularatf.data.slice(4,7), function( index, value ) {
                            contentHtml +=
                            `<li>
                                <a href="/`+value.url+`" class="lsinnerbox">
                                    <figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>
                                    <h2 class="betellips betvl-5">`+value.headline+`</h2>
                                </a>
                           </li>`;
                        });
                    contentHtml +=`</ul>
                </div>
                <ul class="rightbox">`;
                    $.each(regularatf.data.slice(7,12), function( index, value ) {
                        contentHtml +=
                        `<li>
                            <a href="/`+value.url+`">`;
                                if((index+1)%2 != 0){
                                    contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>`;
                                }
                                contentHtml +=`<h2 class="betellips betvl-4">`+value.headline+`</h2>
                            </a>
                       </li>`;
                    });
                    contentHtml +=`
                </ul><div class="readmorebox"><a id="load_more_content" href="javascript:void(0);">READ MORE</a></div>
            </section>`;
        return contentHtml;
    }

    /*Top Picks*/
    function widgetToppicks(toppicks) {
        var contentHtml = '';
        contentHtml += 
       `<section class="container pt-48 sepretor">
           <div class="df">`;
                if ( toppicks.data.length >= 4 ){
                    contentHtml += 
                    `<div class="topicks">`;
                        if(toppicks.landing_url){
                           contentHtml += `<h2 class="title"><a href="`+toppicks.landing_url+`">`+toppicks.display_name+`</a></h2>`;
                        }else{
                           contentHtml += `<h2 class="title">`+toppicks.display_name+`</h2>`;
                        }
                        contentHtml += `<span class="topicintro">`+toppicks.display_name+` from The Telegraph, recommended for you</span>`;
                        contentHtml += 
                        `<ul class="topicklisting mt-24">`;
                            $.each(toppicks.data.slice(0,4), function( index, value ) {
                                contentHtml += 
                                `<li>
                                    <a href="/`+value.url+`">`;
                                        contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>`;
                                        contentHtml +=`<h2 class="betellips betvl-4">`+value.headline+`</h2>
                                    </a>
                                </li>`;
                            });
                            contentHtml += 
                        `</ul>
                    </div>`;
                }
        return contentHtml;
    }

    /*Trending*/
    function widgetTreding(treding) {
        var contentHtml = '';
        if ( treding.data.length >= 7 ){
            contentHtml += 
            `<div class="trending">`;
                if(treding.landing_url){
                   contentHtml += `<h2 class="title"><a href="`+treding.landing_url+`">`+treding.display_name+`</a></h2>`;
                }else{
                   contentHtml += `<h2 class="title">`+treding.display_name+`</h2>`;
                }
                contentHtml += 
                `<ul class="trendingling">`;
                    $.each(treding.data.slice(0,7), function( index, value ) {
                        contentHtml += 
                        `<li>
                            <a href="/`+value.url+`">`;
                                contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>`;
                                contentHtml +=`<h3 class="betellips betvl-3">`+value.headline+`</h3>
                            </a>
                        </li>`;
                    });
                    contentHtml += 
                `</ul>
            </div></div></section>`;
        }
        return contentHtml;
    }

    /*My Kolkata*/
    function widgetMykolkata(mykolkata) {
        var contentHtml = '';
        contentHtml +=`<section class="mt-48"><div class="mykolkatbox container"><h2 class="title"><a href="/my-kolkata">MY KOLKATA</a></h2>`;
        if ( mykolkata.menus ){
            contentHtml += `<div class="mknav pt-24">`+mykolkata.menus+`</div>`;
        }
        contentHtml +=`<div class="dfjcsb mt-24">`;
        if ( mykolkata.data.length >= 4 ){
            contentHtml +=`
            <div class="mkleftbox">`;
                $.each(mykolkata.data.slice(0,1), function( index, value ) {
                    contentHtml +=
                    `<a href="/`+value.url+`" class="lsinnerbox">
                        <figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>
                        <h2 class="betellips betvl-4">`+value.headline+`</h2>
                        <p class="betellips betvl-4">`+value.strap+`</p> 
                    </a>`;
                });
                contentHtml +=
            `</div>`;
            contentHtml +=`
            <div class="mkmidbox">`;
                $.each(mykolkata.data.slice(1,2), function( index, value ) {
                    contentHtml +=
                    `<a href="/`+value.url+`" class="mkmtopbox">
                        <figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>
                        <h2>`+value.headline+`</h2>
                    </a>`;
                });
                contentHtml += 
                `<ul class="mklisting">`;
                    $.each(mykolkata.data.slice(2,4), function( index, value ) {
                        contentHtml += 
                        `<li>
                            <a href="/`+value.url+`">`;
                                contentHtml +=`<h2 class="betellips betvl-4">`+value.headline+`</h2>`;
                                contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>
                            </a>
                        </li>`;
                    });
                    contentHtml += 
                `</ul>
            </div>`;
        }
        return contentHtml;
    }

    /*Try This Today*/
    function widgetTrythistoday(trythistoday) {
        var contentHtml = '';
        contentHtml +=``;
        if ( trythistoday.data.length >= 5 ){
            contentHtml += 
            `<div class="mkrightbox"><div class="tttimg"><img src="/revamp-assets/desktop/images/try-this-today-img.png" alt=""></div>`;
                contentHtml += 
                `<ul class="mkrlisting">`;
                    $.each(trythistoday.data.slice(0,5), function( index, value ) {
                        contentHtml += 
                        `<li>
                            <a href="/`+value.url+`">
                                <h3>`+value.section_icon+` `+value.primary_section_display_name+`</h3>
                                <p class="betellips betvl-3">`+value.headline+`</p>
                            </a>
                        </li>`;
                    });
                    contentHtml += 
                `</ul>
            </div></div></div></section>`;
        }
        return contentHtml;
    }

    /*Six Story: westbengal, nation, sports, business, */
    function widgetSixstories(sixstory) {
        var contentHtml = '';
        contentHtml +=``;
        if ( sixstory.data.length >= 6 ){
            contentHtml += 
            `<section class="container wetbangal pt-48 sepretor">`;
                if(sixstory.landing_url){
                   contentHtml += `<h2 class="title"><a href="`+sixstory.landing_url+`">`+sixstory.display_name+`</a></h2>`;
                }else{
                   contentHtml += `<h2 class="title">`+sixstory.display_name+`</h2>`;
                }

                contentHtml += 
                `<div class="dfjcsb mt-24">`;
                    $.each(sixstory.data.slice(0,1), function( index, value ) {
                        contentHtml += 
                        `<a href="/`+value.url+`" class="wbtleftbox">`;
                            contentHtml +=`<h2 class="betellips betvl-5">`+value.headline+`</h2>`;
                            contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>
                            
                        </a>`;
                    });
                    $.each(sixstory.data.slice(1,2), function( index, value ) {
                        contentHtml += 
                        `<a href="/`+value.url+`" class="wbrightbox">`;
                            contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>`;
                            contentHtml +=`<h2 class="betellips betvl-5">`+value.headline+`</h2>
                        </a>`;
                    });
                    contentHtml += 
                `</div>`;
                contentHtml +=
                `<ul class="fslisting edulisting mt-24">`;
                    $.each(sixstory.data.slice(2,6), function( index, value ) {
                        contentHtml += 
                        `<li>
                            <a href="/`+value.url+`">`;
                                contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>`;
                                contentHtml +=`<h2 class="betellips betvl-4">`+value.headline+`</h2>
                            </a>
                        </li>`;
                    });
                    contentHtml += 
                `</ul>
            </section>`;
        }
        return contentHtml;
    }

    /*Four Story: world */
    function widgetFourstories(fourstory) {
        var contentHtml = '';
        contentHtml +=``;
        if ( fourstory.data.length >= 4 ){
            contentHtml += 
            `<section class="container pt-80 fourstorybox sepretor">`;
                if(fourstory.landing_url){
                   contentHtml += `<h2 class="title"><a href="`+fourstory.landing_url+`">`+fourstory.display_name+`</a></h2>`;
                }else{
                   contentHtml += `<h2 class="title">`+fourstory.display_name+`</h2>`;
                }
                contentHtml +=
                `<ul class="fslisting mt-24">`;
                    $.each(fourstory.data.slice(0,4), function( index, value ) {
                        contentHtml += 
                        `<li>
                            <a href="/`+value.url+`">`;
                                contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>`;
                                contentHtml +=`<h2 class="betellips betvl-4">`+value.headline+`</h2>
                            </a>
                        </li>`;
                    });
                    contentHtml += 
                `</ul>
            </section>`;
        }
        return contentHtml;
    }

    /*Edugraph*/
    function widgetEdugraph(edugraph) {
        var contentHtml = '';
        contentHtml +=``;
        if ( edugraph.data.length >= 6 ){
            contentHtml += 
            `<section class="container wetbangal pt-80 sepretor"><h2 class="title"><a href="/edugraph">EDUGRAPH</a></h2>`;
                if ( edugraph.menus ){
                    contentHtml += `<div class="edulinks mt-24">`+edugraph.menus+`</div>`;
                }
                contentHtml += 
                `<div class="dfjcsb mt-24">`;
                    $.each(edugraph.data.slice(0,1), function( index, value ) {
                        contentHtml += 
                        `<a href="/`+value.url+`" class="wbtleftbox">`;
                            contentHtml +=`<h2 class="betellips betvl-5">`+value.headline+`</h2>`;
                            contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>
                            
                        </a>`;
                    });
                    $.each(edugraph.data.slice(1,2), function( index, value ) {
                        contentHtml += 
                        `<a href="/`+value.url+`" class="wbrightbox">`;
                            contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>`;
                            contentHtml +=`<h2 class="betellips betvl-5">`+value.headline+`</h2>
                        </a>`;
                    });
                    contentHtml += 
                `</div>`;
                contentHtml +=
                `<ul class="fslisting edulisting mt-24">`;
                    $.each(edugraph.data.slice(2,6), function( index, value ) {
                        contentHtml += 
                        `<li>
                            <a href="/`+value.url+`">`;
                                contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>`;
                                contentHtml +=`<h2 class="betellips betvl-4">`+value.headline+`</h2>
                            </a>
                        </li>`;
                    });
                    contentHtml += 
                `</ul>
            </section>`;
        }
        return contentHtml;
    }

    /*Entertainment*/ 
    function widgetEntertainment(entertainment) {
        var contentHtml = '';
        contentHtml +=``;
        if ( entertainment.data.length >= 9 ){
            contentHtml += 
            `<section class="mt-80 entertainment "><div class="container"><div class="etminner">`;
                if(entertainment.landing_url){
                   contentHtml += `<a href="`+entertainment.landing_url+`"><h2 class="enttitle">`+entertainment.display_name+`</h2></a>`;
                }else{
                   contentHtml += `<h2 class="enttitle">`+entertainment.display_name+`</h2>`;
                }
                $.each(entertainment.data.slice(0,1), function( index, value ) {
                    contentHtml += 
                    `<a href="/`+value.url+`" class="enttopbox mt-24">`;
                        contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>`;
                        contentHtml +=`<div class="contentbox"><h2 class="betellips betvl-4">`+value.headline+`</h2><p class="mt-48 betellips betvl-3">`+value.strap+`</p></div>
                    </a>`;
                });
                contentHtml +=
                `<div class="entbtmpbox">
                    <ul class="entleftlisging">`;
                        $.each(entertainment.data.slice(1,5), function( index, value ) {
                            contentHtml += 
                            `<li>
                                <a href="/`+value.url+`">`;
                                    contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>`;
                                    contentHtml +=`<h2 class="mt-48 betellips betvl-4">`+value.headline+`</h2>
                                </a>
                            </li>`;
                        });
                    contentHtml += 
                    `</ul>`;
                    contentHtml += 
                    `<ul class="entrightlisging">`;
                        $.each(entertainment.data.slice(5,9), function( index, value ) {
                            contentHtml += 
                            `<li>
                                <a href="/`+value.url+`">`;
                                    contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>`;
                                    contentHtml +=`<h3 class="betellips betvl-4">`+value.headline+`</h3>
                                </a>
                            </li>`;
                        });
                        contentHtml += 
                    `</ul>
                </div>
            </section>`;
        }
        return contentHtml;
    }

    /*Opinion*/ 
    function widgetOpinion(opinion) {
        var contentHtml = '';
        contentHtml +=``;
        if ( opinion.data.length >= 5 ){
            contentHtml += 
            `<section class="container pt-48 opinion">`;
                if(opinion.landing_url){
                   contentHtml += `<h2 class="title"><a href="`+opinion.landing_url+`">`+opinion.display_name+`</a></h2>`;
                }else{
                   contentHtml += `<h2 class="title">`+opinion.display_name+`</h2>`;
                }
                $.each(opinion.data.slice(0,1), function( index, value ) {
                    contentHtml += 
                    `<a href="/`+value.url+`" class="optopbox mt-24">`;
                        contentHtml +=`
                        <div class="contentbox">
                            <h2 class="betellips betvl-3">`+value.headline+`</h2>
                            <p class="betellips betvl-3">`+value.strap+`</p>
                            <span>`+value.primary_author_name+`</span>
                        </div>`;
                        contentHtml +=`
                        <figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>
                    </a>`;
                });
                contentHtml += 
                `<ul class="oplisting mt-24">`;
                    $.each(opinion.data.slice(1,5), function( index, value ) {
                        contentHtml += 
                        `<li>
                            <a href="/`+value.url+`">`;
                                contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`">`+getTypeIcon(value)+`</figure>`;
                                contentHtml +=`
                                <div class="contentbox">
                                    <h2 class="betellips betvl-4">`+value.headline+`</h2>
                                    <p class="betellips betvl-6">`+value.strap+`</p>
                                    <span>`+value.primary_author_name+`</span>
                                </div>
                            </a>
                        </li>`;
                    });
                    contentHtml += 
                `</ul>
            </section>`;
        }
        return contentHtml;
    }

    /*Six Story: westbengal, nation, sports, business, */
    function widgetPhotogallery(photo) {
        var contentHtml = '';
        contentHtml +=``;
        if ( photo.data.length >= 6 ){
            contentHtml += 
            `<section class="inpicture mt-108"><div class="container ipinner">`;
                if(photo.landing_url){
                   contentHtml += `<h2 class="title"><a href="`+photo.landing_url+`">`+photo.display_name+`</a></h2>`;
                }else{
                   contentHtml += `<h2 class="title">`+photo.display_name+`</h2>`;
                }

                contentHtml += 
                `<div class="dfjcsb mt-24">`;
                    $.each(photo.data.slice(0,1), function( index, value ) {
                        contentHtml += 
                        `<a href="/`+value.url+`" class="iptopleft">`;
                            contentHtml +=`<h2 class="betellips betvl-5">`+value.headline+`</h2>`;
                            contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`"><i class="photoiconbg"><img src="/revamp-assets/desktop/images/photo-icon.svg" alt="Photo Icon"></i></figure>
                            
                        </a>`;
                    });
                    $.each(photo.data.slice(1,2), function( index, value ) {
                        contentHtml += 
                        `<a href="/`+value.url+`" class="iprightbox">`;
                            contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`"><i class="photoiconbg"><img src="/revamp-assets/desktop/images/photo-icon.svg" alt="Photo Icon"></i></figure>`;
                            contentHtml +=`<h2 class="betellips betvl-5">`+value.headline+`</h2>
                        </a>`;
                    });
                    contentHtml += 
                `</div>`;
                contentHtml +=
                `<ul class="fslisting mt-24">`;
                    $.each(photo.data.slice(2,6), function( index, value ) {
                        contentHtml += 
                        `<li>
                            <a href="/`+value.url+`">`;
                                contentHtml +=`<figure><img src="`+value.image+`" alt="`+value.headline+`"><i class="photoiconbg"><img src="/revamp-assets/desktop/images/photo-icon.svg" alt="Photo Icon"></i></figure>`;
                                contentHtml +=`<h2 class="betellips betvl-4">`+value.headline+`</h2>
                            </a>
                        </li>`;
                    });
                    contentHtml += 
                `</ul></div>
            </section>`;
        }
        return contentHtml;
    }

    function homepageComScoreCall(siteTitle,newUrl) {
        self.COMSCORE && COMSCORE.beacon({
            c1: "2",
            c2: "17824659"
        });

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
          //console.log("Success comScoreCall:" + this.responseText);
        }
        xmlhttp.open("GET", "/comscore?c1=2&comscore=pageview_candidate");
        xmlhttp.send();

        console.log('page-Title : '+siteTitle);

        window.dataLayer.push({
            'event' : 'VirtualPageview',
            'page-Title' : "'"+siteTitle+"'"
        });
    }

    function homepageMetaChange(siteTitle,siteDescription,siteOgImage,newUrl) {

        //GA Call
        window.history.pushState({"pageTitle":siteTitle},"", newUrl);

        //Meta change
        document.title = siteTitle;
        document.querySelector('meta[name="description"]').setAttribute("content", siteDescription);
        document.querySelector('meta[property="og:image"]').setAttribute("content", siteOgImage);
    }

    var observer = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) {
            if ( $(".contant_article").isInViewport() ) {
                console.log('ARTICLE-PAGE');

                let newUrl          = hostName+$(".add_contant").data("url");
                let siteTitle       = $(".add_contant").data("title");
                let siteDescription = $(".add_contant").data("description");
                let siteOgImage     = $(".add_contant").data("ogimage");

                homepageComScoreCall(siteTitle,newUrl);
                homepageMetaChange(siteTitle, siteDescription, siteOgImage, newUrl);
            }
        }else {
            if ( $(".contant_homepage").isInViewport() ) {
                console.log('HOMEPAGE');

                let newUrl          = hostName;
                let siteTitle       = $(".contant_refresh").data("title");
                let siteDescription = $(".contant_refresh").data("description");
                let siteOgImage     = $(".contant_refresh").data("ogimage");
                
                homepageComScoreCall(siteTitle,newUrl);
                homepageMetaChange(siteTitle, siteDescription, siteOgImage, newUrl);
            }
        }
    });

    observer.observe(document.querySelector(".contant_refresh"));

    function getTypeIcon( value ){
        
        var resData = '';
        if(value.article_type_name == 'video'){
            resData= '<i class="videoiconbg"><img src="/revamp-assets/desktop/images/video-icon.svg" alt="Video Icon"></i>';
        }else if(value.article_type_name == 'photo'){
            resData = '<i class="photoiconbg"><img src="/revamp-assets/desktop/images/photo-icon.svg" alt="Photo Icon"></i>';
        }

        return resData;
    }
}


//GA Code Start
triggerGaEvent();
function triggerGaEvent(){
    // console.log('data_interaction_location : '+localStorage.getItem("data_interaction_location"));
    if(THIS_PAGE_NAME == 'homepage'){
        // console.log('data_interaction_location : homepage');
        if(localStorage.getItem("data_interaction_location") != "" && localStorage.getItem("data_interaction_location") != "undefined" && localStorage.getItem("data_interaction_location") != "null"){
            // console.log('data_interaction_location : not blank');
            gtag("event", "homepage_load", {
                page: window.location.href,
                page_type: 'homepage',
                recent_publish_story_count: $('input#homepage_recent_publish_story_count').val(),
                total_story_count: $('input#homepage_total_story_count').val(),
                interaction_location: localStorage.getItem("data_interaction_location")
            });

            localStorage.removeItem("data_interaction_location");
        }
    }
}

$('a.ga-track-topnav, a.ttlogobox, a.ga-track-bottomNav, ul.hpnav li a').on('click', function(e){
    let dataGA = $(this).attr('data-ga');
    let dataLink = $(this).attr('href');
    console.log('dataGA : '+dataGA+', dataLink :'+dataLink);

    if(dataLink == '/edugraph/events/summer-workshops'){
        console.log('nav_bar_click triggered');
        ttedSummerWorkshopTrackingGaEvent(dataGA);
    }

    localStorage.setItem("data_interaction_location", dataGA);
});

if ($('a.widget_nav_bar_click').length > 0) {
    $('a.widget_nav_bar_click').on('click', function(e){
        let dataLink = $(this).attr('href');
        console.log('dataLink : '+dataLink);

        if(dataLink == '/edugraph/events/summer-workshops'){
            console.log('widget_nav_bar_click triggered');
            gtag("event", 'widget_nav_bar_click', {
                interaction_location: 'hm:eduGraph',
                nav_value: 'hm:eduGraph:summerWorkshop'
            });
        }
    });
}

function ttedSummerWorkshopTrackingGaEvent(interaction_location){
    console.log('SummerWorkshopTrackingGaEvent interaction_location : '+interaction_location);
    if (interaction_location != '') {
        let dataArray = $.trim(interaction_location).split(":");
        console.log('SummerWorkshopTrackingGaEvent length : '+dataArray.length);
        if (dataArray.length > 1) {
            gtag("event", 'nav_bar_click', {
                interaction_location: dataArray[0],
                nav_bar_type: dataArray[1]
                // nav_value: nav_value
            });
        }
    }
}
//GA Code End

 // TT | HP | Video Widget with Shorts 
function videoWidgetSlider() {
   // console.log('In function hpVideoWidgetSlider');
    if ($('.vlisting').length > 0 && !$('.vlisting').hasClass('slick-initialized')) {
        if($().slick){
            $('.vlisting').slick({
                dots: false,
                autoplay:true,
                speed: 500,
                autoplaySpeed: 2000,
                slidesToShow:1,
                slidesToScroll:1,
                nextArrow: '.vrightarrow',
                prevArrow: '.vleftarrow',
                cssEase: 'linear',
                variableWidth: true,
            });
        }else{
            $.getScript('/massets/js/slick.min.js', function() {
                $('.vlisting').slick({
                    dots: false,
                    autoplay:true,
                    speed: 500,
                    autoplaySpeed: 2000,
                    slidesToShow:1,
                    slidesToScroll:1,
                    nextArrow: '.vrightarrow',
                    prevArrow: '.vleftarrow',
                    cssEase: 'linear',
                    variableWidth: true,
                });
            });
        }
    }
}

if (THIS_PAGE_NAME != '' && THIS_PAGE_NAME != undefined && THIS_PAGE_NAME != 'undefined' && (THIS_PAGE_NAME == 'sectionpage' || THIS_PAGE_NAME == 'homepage')) {
   $('.lbvdoclose, .lightbox').on('click', function(e) {
    e.preventDefault();
    $('.vdolbox').fadeOut();
    $("#election-video").attr("src", '');
    });

     $('.vlisting li a').on('click', function(e) {
        e.preventDefault();
        var video = $(this).attr('data-video');
        $('.vdolbox').fadeIn();
        var src = "https://www.youtube.com/embed/" + video + '?autoplay=1';
        //$("#video1")[0].src += src;
        $("#election-video").attr("src", src);
    });
}