$(document).ready(function(){
    var documentObj = $(window);
    var burger = $('.burger');
    var headerMobile = $('.header-mobile');
    var scrollLine = $('.scroll-line');
    var scrollContainer = scrollLine.parent();
    var langs = $('.lang > div');
    var icons = $('.pic');
    var hideBtn = $('.hide-notification');
    var notification = $('.notification');
    var notificationTimeout;
    var video = $('.video video');
    var logoImg = $('.logo-img');
    var header = $('header');
    var popup = $('.popup');
    var closePopup = $('.close-popup');
    var popupContents = $('.popup-content');
    var sliderLeft = $('.controls .left');
    var sliderRight = $('.controls .right');
    var gallery = $('.gallery');
    var positionGallery = 1;

    var map;



    function initMap() {
        var style = [

            { "elementType": "geometry", "stylers": [

                { "saturation": -100 }

            ]

            }

        ];

        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 32.0858307, lng: 34.8020553},
            zoom: 17
        });


        var mapType = new google.maps.StyledMapType(style, {name:"Grayscale"});

        map.mapTypes.set('grey', mapType);

        map.setMapTypeId('grey');

        var marker = new google.maps.Marker({
            position: {lat: 32.0858307, lng: 34.8020553},
            map: map,
            title: 'Hello World!'
        });
    }


    if(documentObj.width() > 700) {
        //video.height(documentObj.height());
        header.height(documentObj.height());
    } else {
        logoImg.addClass('mobile');
        video.hide();
    }

    documentObj.on('resize', function(){
        //video.height(documentObj.height());
        header.height(documentObj.height());

    });

    closePopup.on('click', function(){
        $('body').toggleClass('popuped');
       popup.hide();
    });

    sliderLeft.on('click', function(){
        gallery.css({'marginLeft': '+=240'});
        positionGallery--;
        if(positionGallery === 1){
            sliderLeft.hide();
        } else{
            sliderLeft.show();
        }
        if(positionGallery === 2){
            sliderRight.hide()
        } else {
            sliderRight.show();
        }
    });

    sliderRight.on('click', function(){
        gallery.css({'marginLeft': '-=240'});
        positionGallery++;
        if(positionGallery === 1){
            sliderLeft.hide();
        } else{
            sliderLeft.show();
        }
        if(positionGallery === 2){
            sliderRight.hide()
        } else {
            sliderRight.show();
        }
    });

    burger.on('click', function(){
        headerMobile.toggleClass('expanded');
        if(documentObj.width() > 1200){
            //headerMobile.toggleClass('expanded');
            $('img.scroll-img, .scroll-title').toggle();
            $('.scroll-menu').toggle();
        } else {
            headerMobile.find('.header-mobile-content').toggleClass('show');
            headerMobile.toggleClass('mobile');
            $('.scroll-container, body').toggleClass('shifted');

        }
        //headerMobile.toggleClass('show');
        //scrollLine.removeClass('show-scroll');
    });

    langs.on('click', function(){
        langs.removeClass('active');
        $(this).addClass('active');
    });

    icons.on('click', function(){
        $('body').toggleClass('popuped');
        popup.show();
        popupContents.hide();
        $('.popup-content[data-type="' + this.getAttribute('data-type') + '"]').show();
        if(this.getAttribute('data-type') === "visit"){
            initMap();
        }
       /* notification.fadeIn().addClass('active');
        notificationTimeout = setTimeout(function(){
            notification.removeClass('active').fadeOut();
        }, 3000);*/
    });

    hideBtn.on('click', function(){
        clearTimeout(notificationTimeout);
        notification.removeClass('active').fadeOut();
    });

    documentObj.on('scroll', function(){
        if(documentObj.scrollTop() > 50){
            scrollLine.addClass('show-scroll');
            //logoImg.addClass('show');
            headerMobile.addClass('show');
            //video.hide();
        } else {
            scrollLine.removeClass('show-scroll');
            headerMobile.removeClass('show');
            //logoImg.hide();
            //video.show();
        }


        if(documentObj.scrollTop() > 50 && headerMobile.hasClass('show')){
            //scrollLine.addClass('show-scroll');
        } else if(documentObj.scrollTop() < 50 && headerMobile.hasClass('show')){
            scrollLine.removeClass('show-scroll');
        }

        if(documentObj.scrollTop() > 300 && headerMobile.hasClass('show')){
            scrollContainer.addClass('sticked');
        } else {
            scrollContainer.removeClass('sticked');
        }


    })
});