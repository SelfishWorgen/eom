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

    video.height(documentObj.height());

    burger.on('click', function(){
        headerMobile.toggleClass('show');
        scrollLine.removeClass('show-scroll');
    });

    langs.on('click', function(){
        langs.removeClass('active');
        $(this).addClass('active');
    });

    icons.on('click', function(){
        notification.fadeIn().addClass('active');
        notificationTimeout = setTimeout(function(){
            notification.removeClass('active').fadeOut();
        }, 3000);
    });

    hideBtn.on('click', function(){
        clearTimeout(notificationTimeout);
        notification.removeClass('active').fadeOut();
    });

    documentObj.on('scroll', function(){
        if(documentObj.scrollTop() > 50 && headerMobile.hasClass('show')){
            scrollLine.addClass('show-scroll');
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